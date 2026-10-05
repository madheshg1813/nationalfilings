import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { licences, pillars, type ServicePage } from "@/lib/routes";

/**
 * Built from the same registries as the pages, so it can't drift.
 * Pillar, cluster and licence pages appear automatically once `live: true` is set in lib/routes.ts
 * (listing pages that don't exist yet would send search engines to 404s).
 */
type Entry = MetadataRoute.Sitemap[number];

const page = (path: string, priority: number, changeFrequency: Entry["changeFrequency"]): Entry => ({
  url: `${site.url}${path}`,
  changeFrequency,
  priority,
});

export default function sitemap(): MetadataRoute.Sitemap {
  const core: Entry[] = [
    page("/", 1, "weekly"),
    page("/chennai", 0.9, "weekly"),
    page("/about", 0.6, "monthly"),
    page("/contact", 0.6, "monthly"),
  ];

  const live = (p: ServicePage) => p.live === true;
  const services: Entry[] = [
    ...pillars.filter(live).map((p) => page(p.path, 0.8, "weekly")),
    ...pillars.flatMap((p) => p.clusters).filter(live).map((c) => page(c.path, 0.7, "monthly")),
    ...licences.filter(live).map((l) => page(l.path, 0.7, "monthly")),
  ];

  const legal: Entry[] = site.legal.map((l) => page(l.href, 0.3, "yearly"));

  return [...core, ...services, ...legal];
}
