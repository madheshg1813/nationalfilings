// Launch switch: keep every URL out of search results until SITE_INDEXABLE=true is set on the live domain.
// Crawling stays allowed so search engines can read the noindex.
const indexable = process.env.SITE_INDEXABLE === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Separate build folder (e.g. NEXT_DIST_DIR=.next-prod) lets a production preview run beside `npm run dev`
  distDir: process.env.NEXT_DIST_DIR || ".next",
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // With a Cloudinary cloud name set, images are served from Cloudinary's CDN (see src/lib/cloudinary-loader.ts)
    ...(process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME && { loader: "custom", loaderFile: "./src/lib/cloudinary-loader.ts" }),
    formats: ["image/avif", "image/webp"],
    // Pages ask for 90 on photos; Cloudinary picks quality itself (q_auto), the default optimizer uses these
    qualities: [75, 90],
    // Unsplash photos (free licence) are hotlinked and resized by next/image
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  // Renamed legal pages keep their old URLs working (permanent 308)
  async redirects() {
    return [
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
      { source: "/terms", destination: "/terms-and-conditions", permanent: true },
      // The Chennai hub page was live on 7 Oct 2026 and then removed; send its URL to the home page
      { source: "/chennai", destination: "/", permanent: true },
    ];
  },
  async headers() {
    return indexable ? [] : [{ source: "/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }];
  },
};

export default nextConfig;
