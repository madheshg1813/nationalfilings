// Shared by the Next image loader (src/lib/cloudinary-loader.ts) and scripts/upload-images.mjs, so both always agree
// on where an image lives in Cloudinary. Plain JS (.mjs + .d.mts) so Node can run it without a TypeScript step.

export const CLOUDINARY_FOLDER = "nationalfilings";

const LOCAL_RASTER = /\.(png|jpe?g|webp|avif)$/i;
const UNSPLASH = /^https:\/\/images\.unsplash\.com\/(photo-[\w-]+)(\?.*)?$/;

/** FNV-1a, base36: a short, stable tag for an Unsplash URL's crop and size parameters */
function hash(text) {
  let h = 0x811c9dc5;
  for (let i = 0; i < text.length; i++) h = Math.imul(h ^ text.charCodeAt(i), 0x01000193);
  return (h >>> 0).toString(36);
}

/**
 * Cloudinary public ID for an image src, or null when the image isn't mirrored (SVGs, other hosts, data URLs).
 * Unsplash photos keep their crop parameters in the ID, so each crop the site uses is stored as shown.
 */
export function cloudinaryId(src) {
  if (src.startsWith("/")) {
    return LOCAL_RASTER.test(src) ? `${CLOUDINARY_FOLDER}/public${src.replace(LOCAL_RASTER, "")}` : null;
  }
  const m = src.replace(/&amp;/g, "&").match(UNSPLASH);
  return m ? `${CLOUDINARY_FOLDER}/unsplash/${m[1]}-${hash(m[2] ?? "")}` : null;
}
