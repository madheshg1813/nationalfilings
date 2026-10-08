import type { ImageLoaderProps } from "next/image";
import { cloudinaryId } from "./cloudinary-id.mjs";

/**
 * next/image loader (wired up in next.config.mjs when NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is set).
 * Mirrored images are served from Cloudinary's CDN at the exact width requested, in AVIF/WebP with automatic quality
 * (q_auto:best when a component asks for quality 90+, q_auto otherwise),
 * so the web server never resizes images. Anything not mirrored (SVGs, other hosts) is served as-is.
 * Images are uploaded by scripts/upload-images.mjs, which runs before every build.
 */
const cloud = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

export default function cloudinaryLoader({ src, width, quality }: ImageLoaderProps): string {
  const id = cloud ? cloudinaryId(src) : null;
  const q = (quality ?? 75) >= 90 ? "q_auto:best" : "q_auto";
  if (id) return `https://res.cloudinary.com/${cloud}/image/upload/f_auto,${q},c_limit,w_${width}/${id}`;
  // width in the query keeps next/image happy; static files and other hosts ignore it
  return `${src}${src.includes("?") ? "&" : "?"}w=${width}`;
}
