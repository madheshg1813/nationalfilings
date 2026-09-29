import { site } from "./site";
import { serviceCategories } from "./services";

const orgId = `${site.url}/#organization`;
const webId = `${site.url}/#website`;

/** Site-wide graph. Empty contact fields are left out rather than invented. */
export function siteGraph() {
  const a = site.address;
  const hasAddress = Boolean(a.street && a.city);
  const org: Record<string, unknown> = {
    "@type": ["Organization", "ProfessionalService"],
    "@id": orgId,
    name: site.name,
    slogan: site.tagline,
    url: site.url,
    logo: `${site.url}/brand/logo-full.png`,
    image: `${site.url}/brand/logo-full.png`,
    description: site.description,
    areaServed: { "@type": "Country", name: "India" },
    ...(site.phone && { telephone: site.phone }),
    ...(site.email && { email: site.email }),
    ...((site.phone || site.email) && {
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
        ...(site.phone && { telephone: site.phone }),
        ...(site.email && { email: site.email }),
      },
    }),
    ...(hasAddress && {
      address: {
        "@type": "PostalAddress",
        streetAddress: a.street,
        addressLocality: a.city,
        addressRegion: a.region,
        postalCode: a.postalCode,
        addressCountry: a.country,
      },
    }),
    ...(site.socials.length > 0 && { sameAs: site.socials.map((s) => s.href) }),
  };
  return {
    "@context": "https://schema.org",
    "@graph": [org, { "@type": "WebSite", "@id": webId, url: site.url, name: site.name, publisher: { "@id": orgId }, inLanguage: "en-IN" }],
  };
}

export function homeGraph(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${site.url}/#webpage`,
        url: site.url,
        name: `${site.name} | GST, Tax & Company Registration`,
        isPartOf: { "@id": webId },
        about: { "@id": orgId },
        inLanguage: "en-IN",
      },
      {
        "@type": "ItemList",
        name: "Services",
        itemListElement: serviceCategories.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: { "@type": "Service", name: c.name, provider: { "@id": orgId }, areaServed: "IN" },
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };
}

/** C0 city hub: branded local page. No self-published review markup (Google ignores or penalises it). */
export function chennaiGraph(
  faqs: { q: string; a: string }[],
  pillarLinks: { name: string; path: string }[],
) {
  const pageUrl = `${site.url}/chennai`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "National Filings Chennai – Registration, Tax & Compliance Services",
        headline: "Helping Chennai Businesses Grow Without Paperwork",
        isPartOf: { "@id": webId },
        about: { "@id": `${pageUrl}#business` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        inLanguage: "en-IN",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
          { "@type": "ListItem", position: 2, name: "Chennai", item: pageUrl },
        ],
      },
      {
        "@type": "AccountingService",
        "@id": `${pageUrl}#business`,
        name: "National Filings Chennai",
        url: pageUrl,
        parentOrganization: { "@id": orgId },
        image: `${site.url}/brand/logo-full.png`,
        // Same address as the Google Business Profile (lib/site.ts)
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          addressLocality: site.address.city,
          addressRegion: site.address.region,
          postalCode: site.address.postalCode,
          addressCountry: site.address.country,
        },
        areaServed: [
          { "@type": "City", name: "Chennai" },
          { "@type": "Country", name: "India" },
        ],
        ...(site.phone && { telephone: site.phone }),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services in Chennai",
          itemListElement: pillarLinks.map((p) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: p.name, url: `${site.url}${p.path}` },
          })),
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };
}
