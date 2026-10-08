import type { Metadata } from "next";
import { site } from "./site";
import { licences, pillars, isBuilt, type ServicePage } from "./routes";

/**
 * ONE definition per page → its <head> metadata AND its JSON-LD, so a new page can't ship without schema.
 *
 *   const page = definePage({ path: "/about", title: "...", description: "...", type: "AboutPage", trail: [...] });  // not exported: Next forbids extra page exports
 *   export const metadata = page.metadata;
 *   ...  <PageSchema page={page} />        (WebPage/AboutPage/… + Service when set)
 *
 * What else is automatic:
 *   - Organization, LocalBusiness, WebSite: root layout, every page
 *   - BreadcrumbList: emitted by <Breadcrumbs> / ServiceHero / PageHero whenever a trail is shown
 *   - FAQPage: emitted by <Faq> wherever it is used
 *   - Service pages (pillars, clusters, licences): use servicePage(path), everything comes from lib/routes.ts
 */

export type Crumb = { name: string; path: string };

export type PageType = "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";

export type PageDef = {
  path: string;
  /** <title>, 50-60 chars, primary keyword included. Used as-is (no site suffix). */
  title: string;
  /** Meta description, 140-150 chars: keyword, a key benefit, Chennai where relevant. No em/en dashes. */
  description: string;
  /** Visible headline, if different from the title (schema `headline`) */
  headline?: string;
  type?: PageType;
  /** Breadcrumb trail excluding Home (the page itself last). The breadcrumb block emits the BreadcrumbList. */
  trail?: Crumb[];
  /** Adds a Service node provided by the LocalBusiness */
  service?: { name: string; serviceType?: string; areaServed?: "Chennai" | "India" };
  /** Keep a page out of search results (e.g. thank-you). */
  noindex?: boolean;
  image?: string;
};

export type Page = PageDef & { url: string; metadata: Metadata; jsonLd: Record<string, unknown> };

const orgId = `${site.url}/#organization`;
const localBusinessId = `${site.url}/#localbusiness`;
const webId = `${site.url}/#website`;
const abs = (path: string) => `${site.url}${path === "/" ? "/" : path}`;

/** The site's SEO meta rule for every indexable page. Dev shows an error so new pages can't ship off-spec; production only warns so publishing never breaks. */
function checkMeta(def: PageDef) {
  if (def.noindex) return;
  const problems = [
    (def.title.length < 50 || def.title.length > 60) && `title is ${def.title.length} chars (needs 50-60)`,
    (def.description.length < 140 || def.description.length > 150) && `description is ${def.description.length} chars (needs 140-150)`,
    /[\u2013\u2014]/.test(def.title + def.description) && "contains an em/en dash",
  ].filter(Boolean);
  if (!problems.length) return;
  const msg = `SEO meta for ${def.path}: ${problems.join("; ")}`;
  if (process.env.NODE_ENV !== "production") throw new Error(msg);
  console.warn(msg);
}

export function definePage(def: PageDef): Page {
  checkMeta(def);
  const url = abs(def.path);
  const image = def.image ?? "/brand/logo-full.png";

  const metadata: Metadata = {
    title: { absolute: def.title },
    description: def.description,
    alternates: { canonical: def.path },
    openGraph: {
      title: def.title,
      description: def.description,
      url: def.path,
      images: [{ url: image, width: 924, height: 465, alt: site.name }],
    },
    robots: def.noindex
      ? { index: false, follow: false }
      : { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  };

  const nodes: Record<string, unknown>[] = [
    {
      "@type": def.type ?? "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: def.title,
      description: def.description,
      ...(def.headline && { headline: def.headline }),
      isPartOf: { "@id": webId },
      about: { "@id": def.service ? `${url}#service` : localBusinessId },
      publisher: { "@id": orgId },
      ...(def.trail && def.trail.length > 0 && { breadcrumb: { "@id": `${url}#breadcrumb` } }),
      inLanguage: "en-IN",
    },
  ];

  if (def.service) {
    nodes.push({
      "@type": "Service",
      "@id": `${url}#service`,
      name: def.service.name,
      ...(def.service.serviceType && { serviceType: def.service.serviceType }),
      url,
      provider: { "@id": localBusinessId },
      areaServed:
        def.service.areaServed === "India"
          ? { "@type": "Country", name: "India" }
          : [
              { "@type": "City", name: "Chennai" },
              { "@type": "Country", name: "India" },
            ],
    });
  }

  return { ...def, url, metadata, jsonLd: { "@context": "https://schema.org", "@graph": nodes } };
}

/* ---------------- Service pages: everything derived from lib/routes.ts ---------------- */

type Found = { page: ServicePage & { label?: string; blurb?: string }; parents: Crumb[] };

function findService(path: string): Found | null {
  // No Chennai hub page (removed 2026-10-07). Breadcrumbs only include parent pages in this build, so they never point at a 404
  for (const p of pillars) {
    if (p.path === path) return { page: p, parents: [] };
    const c = p.clusters.find((x) => x.path === path);
    if (c) return { page: c, parents: isBuilt(p.path) ? [{ name: p.label, path: p.path }] : [] };
  }
  const l = licences.find((x) => x.path === path);
  return l ? { page: l, parents: [] } : null;
}

/**
 * Page definition for any pillar, cluster or licence page, from its path alone.
 * Breadcrumb: Home › [Pillar ›] Page. Schema: WebPage + Service (Chennai). Override copy via `overrides`.
 */
export function servicePage(path: string, overrides: Partial<PageDef> = {}): Page {
  const found = findService(path);
  if (!found) throw new Error(`servicePage: "${path}" is not in lib/routes.ts`);
  const { page, parents } = found;
  const shortName = page.label ?? page.title.replace(/ (Service )?in Chennai$/, "");
  return definePage({
    path,
    title: `${page.title} | ${site.name}`.slice(0, 70),
    description: page.blurb ?? `${page.title} by ${site.name}: documents, fees and step-by-step help from our Chennai team.`,
    headline: page.title,
    trail: [...parents, { name: shortName, path }],
    service: { name: page.title, serviceType: shortName },
    ...overrides,
  });
}
