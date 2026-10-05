import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Crawling stays open for Google and Bing; indexing is controlled separately by the
 * SITE_INDEXABLE launch switch (X-Robots-Tag: noindex until launch, see next.config.mjs).
 * Only non-page routes are blocked. /_next/ stays crawlable so search engines can render the pages.
 */
// (/thank-you is not blocked: it carries its own noindex, which crawlers must be able to read)
const blocked = ["/api/", "/admin", "/admin/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "Googlebot", allow: "/", disallow: blocked },
      { userAgent: "Bingbot", allow: "/", disallow: blocked },
      { userAgent: "*", allow: "/", disallow: blocked },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
