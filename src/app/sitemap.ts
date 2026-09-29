import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site.url}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/chennai`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${site.url}/contact`, changeFrequency: "monthly", priority: 0.7 },
    // Pillar, cluster and licence pages are added as they go live (see lib/routes.ts `live`).
  ];
}
