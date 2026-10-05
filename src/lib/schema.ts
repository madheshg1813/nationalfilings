import { site } from "./site";
import { serviceCategories } from "./services";
import { platforms } from "./proof";

const orgId = `${site.url}/#organization`;
const webId = `${site.url}/#website`;

export const localBusinessId = `${site.url}/#localbusiness`;

/** Real public listings (Google Business Profile, Justdial) plus social profiles, for `sameAs` */
function sameAs(): string[] {
  const listings = platforms.filter((p) => !p.sample && p.url).map((p) => p.url);
  return [...new Set([...listings, ...site.socials.map((s) => s.href)])];
}

function postalAddress() {
  const a = site.address;
  if (!a.street || !a.city) return undefined;
  return {
    "@type": "PostalAddress",
    streetAddress: a.street,
    addressLocality: a.city,
    addressRegion: a.region,
    postalCode: a.postalCode,
    addressCountry: a.country,
  };
}

/**
 * Site-wide graph, on every page: Organization + LocalBusiness + WebSite.
 * NAP and hours come from lib/site.ts (identical to the Google Business Profile). Empty fields are left out, never invented.
 * No aggregateRating: Google ignores or penalises self-published review markup.
 */
export function siteGraph() {
  const address = postalAddress();
  const links = sameAs();
  const org: Record<string, unknown> = {
    "@type": "Organization",
    "@id": orgId,
    name: site.name,
    slogan: site.tagline,
    url: site.url,
    logo: { "@type": "ImageObject", url: `${site.url}/brand/logo-full.png`, width: 924, height: 465 },
    description: site.description,
    areaServed: { "@type": "Country", name: "India" },
    ...(address && { address }),
    ...(site.phone && { telephone: site.phone }),
    ...(site.email && { email: site.email }),
    ...((site.phone || site.email) && {
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["en", "ta", "hi"],
        ...(site.phone && { telephone: site.phone }),
        ...(site.email && { email: site.email }),
      },
    }),
    ...(links.length > 0 && { sameAs: links }),
  };

  const open = site.hours.filter((h) => h.opens && h.closes);
  const business: Record<string, unknown> = {
    "@type": "AccountingService",
    "@id": localBusinessId,
    name: site.name,
    url: site.url,
    image: `${site.url}/brand/logo-full.png`,
    logo: `${site.url}/brand/logo-full.png`,
    description: site.description,
    parentOrganization: { "@id": orgId },
    ...(address && { address }),
    ...(site.phone && { telephone: site.phone }),
    ...(site.email && { email: site.email }),
    ...(site.googleProfile && { hasMap: site.googleProfile }),
    ...(open.length > 0 && {
      openingHoursSpecification: open.map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.dayCodes.map((d) => DAY_NAMES[d]),
        opens: h.opens,
        closes: h.closes,
      })),
    }),
    areaServed: [
      { "@type": "City", name: "Chennai" },
      { "@type": "Country", name: "India" },
    ],
    ...(links.length > 0 && { sameAs: links }),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      org,
      business,
      { "@type": "WebSite", "@id": webId, url: site.url, name: site.name, publisher: { "@id": orgId }, inLanguage: "en-IN" },
    ],
  };
}

const DAY_NAMES: Record<string, string> = {
  Mo: "Monday",
  Tu: "Tuesday",
  We: "Wednesday",
  Th: "Thursday",
  Fr: "Friday",
  Sa: "Saturday",
  Su: "Sunday",
};

/** Extra node for the homepage graph: the service categories as an ItemList. */
export function servicesItemList() {
  return {
    "@type": "ItemList",
    name: "Services",
    itemListElement: serviceCategories.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: { "@type": "Service", name: c.name, provider: { "@id": localBusinessId }, areaServed: "IN" },
    })),
  };
}

/** Extra node for the Chennai hub: adds its service catalogue to the site-wide LocalBusiness (same @id, so Google merges them). */
export function chennaiCatalogue(pillarLinks: { name: string; path: string }[]) {
  return {
    "@type": "AccountingService",
    "@id": localBusinessId,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services in Chennai",
      itemListElement: pillarLinks.map((p) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: p.name, url: `${site.url}${p.path}` },
      })),
    },
  };
}
