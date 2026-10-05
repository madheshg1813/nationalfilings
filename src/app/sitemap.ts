import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { licences, pillars } from "@/lib/routes";
import { builtPages } from "@/lib/pages.generated";

/**
 * Every page that exists in src/app at build time (scripts/gen-pages.mjs), minus noindex pages.
 * Adding or removing a page folder updates the sitemap on the next build; nothing to edit here.
 * Priority and change frequency come from the page's role.
 */
type Entry = MetadataRoute.Sitemap[number];

const pillarPaths = new Set(pillars.map((p) => p.path));
const childPaths = new Set([...pillars.flatMap((p) => p.clusters), ...licences].map((p) => p.path));
const legalPaths = new Set<string>(site.legal.map((l) => l.href));

function role(path: string): Pick<Entry, "priority" | "changeFrequency"> {
  if (path === "/") return { priority: 1, changeFrequency: "weekly" };
  if (path === "/chennai") return { priority: 0.9, changeFrequency: "weekly" };
  if (pillarPaths.has(path)) return { priority: 0.8, changeFrequency: "weekly" };
  if (childPaths.has(path)) return { priority: 0.7, changeFrequency: "monthly" };
  if (legalPaths.has(path)) return { priority: 0.3, changeFrequency: "yearly" };
  return { priority: 0.6, changeFrequency: "monthly" };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return builtPages
    .filter((p) => !p.noindex)
    .map((p) => ({ url: `${site.url}${p.path === "/" ? "" : p.path}`, ...role(p.path) }))
    .sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0));
}
