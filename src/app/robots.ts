import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // Before launch (see SITE_INDEXABLE in next.config.mjs) don't advertise the sitemap
  if (process.env.SITE_INDEXABLE !== "true") return { rules: [{ userAgent: "*", allow: "/" }] };
  return { rules: [{ userAgent: "*", allow: "/" }], sitemap: `${site.url}/sitemap.xml`, host: site.url };
}
