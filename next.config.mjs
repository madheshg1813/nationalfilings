// Launch switch: keep every URL out of search results until SITE_INDEXABLE=true is set on the live domain.
// Crawling stays allowed so search engines can read the noindex.
const indexable = process.env.SITE_INDEXABLE === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"] },
  async headers() {
    return indexable ? [] : [{ source: "/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }];
  },
};

export default nextConfig;
