#!/usr/bin/env node
/**
 * Mirrors the site's images to Cloudinary: every Unsplash photo referenced in src/ (exactly as the site shows it, same
 * crop and size) and every PNG/JPG/WebP in public/. Only missing images are uploaded, so it's cheap to run on every build.
 *
 * Runs before `npm run build` (prebuild) and on demand with `npm run images:upload`.
 * Needs CLOUDINARY_URL=cloudinary://<api_key>:<api_secret>@<cloud_name> (env var, or .env.local locally).
 * Without it, it skips: the image loader is only switched on when NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is set.
 * It first checks that no Unsplash photo is used twice anywhere in src/ (the build fails if one is).
 */
import { createHash } from "node:crypto";
import { readdirSync, readFileSync } from "node:fs";
import { extname, join, relative, sep } from "node:path";
import { CLOUDINARY_FOLDER, cloudinaryId } from "../src/lib/cloudinary-id.mjs";

function walkSrc(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = join(dir, e.name);
    return e.isDirectory() ? walkSrc(p) : /\.(ts|tsx)$/.test(p) ? [p] : [];
  });
}

try {
  process.loadEnvFile?.(".env.local");
} catch {
  // no .env.local (hosting): use the real environment
}

// Every photo must be unique across the site (the user's rule): the same Unsplash photo on two cards or pages stops the build
const seen = new Map(); // photo id -> first place it was found
const dupes = [];
for (const file of walkSrc("src")) {
  readFileSync(file, "utf8").split("\n").forEach((line, i) => {
    for (const [, id] of line.matchAll(/images\.unsplash\.com\/(photo-[\w-]+)/g)) {
      const here = `${file}:${i + 1}`;
      if (seen.has(id)) dupes.push(`${id} used in ${seen.get(id)} and ${here}`);
      else seen.set(id, here);
    }
  });
}
if (dupes.length) {
  console.error(`[upload-images] the same photo is used more than once:\n  ${dupes.join("\n  ")}`);
  process.exit(1);
}

const config = process.env.CLOUDINARY_URL?.match(/^cloudinary:\/\/(\w+):([\w-]+)@([\w-]+)$/);
if (!config) {
  console.log("[upload-images] CLOUDINARY_URL not set, skipping");
  process.exit(0);
}
const [, apiKey, apiSecret, cloud] = config;
const api = `https://api.cloudinary.com/v1_1/${cloud}`;
const auth = `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString("base64")}`;

function walk(dir, keep) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = join(dir, e.name);
    return e.isDirectory() ? walk(p, keep) : keep(p) ? [p] : [];
  });
}

// 1. Every image the site can show, keyed by its Cloudinary ID
const images = new Map(); // id -> { src, file? }
for (const file of walk("src", (p) => /\.(ts|tsx)$/.test(p))) {
  for (const [url] of readFileSync(file, "utf8").matchAll(/https:\/\/images\.unsplash\.com\/photo-[\w-]+(\?[^"'`\s)]*)?/g)) {
    const id = cloudinaryId(url);
    if (id) images.set(id, { src: url });
  }
}
for (const file of walk("public", (p) => /\.(png|jpe?g|webp|avif)$/i.test(p))) {
  const src = "/" + relative("public", file).split(sep).join("/");
  const id = cloudinaryId(src);
  if (id) images.set(id, { src, file });
}

// 2. What Cloudinary already has
const existing = new Set();
let cursor;
do {
  const qs = new URLSearchParams({ prefix: `${CLOUDINARY_FOLDER}/`, max_results: "500", ...(cursor && { next_cursor: cursor }) });
  const res = await fetch(`${api}/resources/image/upload?${qs}`, { headers: { Authorization: auth } });
  if (!res.ok) throw new Error(`[upload-images] listing failed: ${res.status} ${await res.text()}`);
  const body = await res.json();
  body.resources.forEach((r) => existing.add(r.public_id));
  cursor = body.next_cursor;
} while (cursor);

// 3. Upload what's missing (signed upload; overwrite=false never replaces an existing image)
const missing = [...images].filter(([id]) => !existing.has(id));
const MIME = { ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".avif": "image/avif" };
let failed = 0;
for (const [id, { src, file }] of missing) {
  const params = { overwrite: "false", public_id: id, timestamp: String(Math.floor(Date.now() / 1000)) };
  const toSign = Object.keys(params).sort().map((k) => `${k}=${params[k]}`).join("&");
  const form = new FormData();
  Object.entries(params).forEach(([k, v]) => form.append(k, v));
  form.append("api_key", apiKey);
  form.append("signature", createHash("sha1").update(toSign + apiSecret).digest("hex"));
  form.append("file", file ? `data:${MIME[extname(file).toLowerCase()]};base64,${readFileSync(file).toString("base64")}` : src);
  const res = await fetch(`${api}/image/upload`, { method: "POST", body: form });
  if (res.ok) {
    console.log(`[upload-images] uploaded ${id}`);
  } else {
    failed++;
    console.error(`[upload-images] FAILED ${src}: ${res.status} ${await res.text()}`);
  }
}

console.log(`[upload-images] ${images.size} images, ${images.size - missing.length} already on Cloudinary, ${missing.length - failed} uploaded, ${failed} failed`);
// A missing image would show as broken on the site, so stop the build instead
if (failed) process.exit(1);
