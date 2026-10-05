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
    formats: ["image/avif", "image/webp"],
    // Unsplash photos (free licence) are hotlinked and resized by next/image
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  // Renamed legal pages keep their old URLs working (permanent 308)
  async redirects() {
    return [
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
      { source: "/terms", destination: "/terms-and-conditions", permanent: true },
    ];
  },
  async headers() {
    return indexable ? [] : [{ source: "/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }];
  },
};

export default nextConfig;
