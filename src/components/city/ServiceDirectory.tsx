import { licences, pillars, serviceHref } from "@/lib/routes";
import { ServiceCards } from "@/components/blocks/ServiceCards";
import { InternalLinks } from "@/components/blocks/InternalLinks";

/** Section 3: the six pillars. The main job of the city hub is routing people here. */
export function ServiceDirectory() {
  return (
    <ServiceCards
      id="chennai-services"
      className="bg-cream-soft"
      eyebrow="Our services in Chennai"
      title="Choose what you need help with"
      lead="Each category covers related services, with details, documents and next steps."
      items={pillars.map((p) => ({
        title: p.label,
        href: serviceHref(p, p.label),
        icon: p.icon,
        blurb: p.blurb,
        badge: `${p.clusters.length + 1} services`,
        cta: `Explore ${p.short}`,
        ctaShort: "Explore",
      }))}
    />
  );
}

/** Section 4: standalone licence pages. */
export function LicenceGrid() {
  return (
    <ServiceCards
      id="licences"
      eyebrow="Licences & registrations"
      title="Licences to open and operate"
      columns={4}
      size="md"
      items={licences.map((l) => ({ title: l.label, href: serviceHref(l, l.label), icon: l.icon, blurb: l.blurb, cta: "View details", ctaShort: "View details" }))}
    />
  );
}

/** Section 10: every pillar with its child pages, for navigation and internal linking. */
export function ExploreServices() {
  return (
    <InternalLinks
      eyebrow="All services"
      title="Explore all services"
      groups={pillars.map((p) => ({
        title: p.label,
        href: serviceHref(p, p.label),
        icon: p.icon,
        links: p.clusters.map((c) => ({ label: c.title, href: serviceHref(c) })),
      }))}
    />
  );
}
