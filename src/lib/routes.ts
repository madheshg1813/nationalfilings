import type { IconName } from "@/components/ui/LucideByName";
import { whatsappLink } from "./site";
import { builtPages } from "./pages.generated";

/**
 * Chennai page map, from "National_Filings_SEO_Site_Architecture_v2".
 * One registry so every link (city hub, footer, sitemap, future pillar pages) uses the same path and title.
 * A page is live when its folder exists in src/app at build time (see scripts/gen-pages.mjs), so links,
 * sitemap and breadcrumbs follow what is deployed with no flags to flip.
 */

export type ServicePage = { id: string; title: string; path: string };

const built = new Set(builtPages.map((p) => p.path));

/** True when an internal link's page exists in this build. Anchors on built pages and external links count as built. */
export function isBuilt(href: string): boolean {
  if (!href.startsWith("/")) return true;
  return built.has(href.split(/[?#]/)[0] || "/");
}

export type Pillar = ServicePage & {
  /** Short nav label (the page's H1 is the full title) */
  label: string;
  /** Mid-sentence form for "Explore …" links (acronyms stay uppercase) */
  short: string;
  icon: IconName;
  blurb: string;
  clusters: ServicePage[];
};

const c = (id: string, title: string, slug: string): ServicePage => ({ id, title, path: `/chennai/${slug}` });

export const pillars: Pillar[] = [
  {
    id: "P1",
    label: "Company Registration",
    short: "company registration",
    title: "Company Registration Service in Chennai",
    path: "/chennai/company-registration",
    icon: "Building2",
    blurb: "Private limited, LLP, OPC, partnership and proprietorship, plus ongoing ROC compliance.",
    clusters: [
      c("P1-C1", "LLP Registration", "llp-registration-service"),
      c("P1-C2", "OPC Registration", "one-person-company-registration-service"),
      c("P1-C3", "Partnership Registration", "partnership-firm-registration-service"),
      c("P1-C4", "Proprietorship Registration", "proprietorship-registration-service"),
      c("P1-C5", "ROC Compliance", "roc-compliance-service"),
    ],
  },
  {
    id: "P2",
    label: "GST Services",
    short: "GST services",
    title: "GST Consultant in Chennai",
    path: "/chennai/gst-consultant-service",
    icon: "ReceiptIndianRupee",
    blurb: "Registration, monthly and quarterly returns, cancellation and replies to GST notices.",
    clusters: [
      c("P2-C1", "GST Registration", "gst-registration-service"),
      c("P2-C2", "GST Return Filing", "gst-return-filing-service"),
      c("P2-C3", "GST Cancellation", "gst-cancellation-service"),
      c("P2-C4", "GST Notice Reply", "gst-notice-reply-service"),
    ],
  },
  {
    id: "P3",
    label: "Income Tax Services",
    short: "income tax services",
    title: "Income Tax Consultant in Chennai",
    path: "/chennai/income-tax-consultant", // the brief's URL (the architecture PDF used "-service")
    icon: "IndianRupee",
    blurb: "Income tax returns, TDS returns, tax planning and help with notices and refunds.",
    clusters: [
      c("P3-C1", "Income Tax Return Filing", "income-tax-return-filing-service"),
      c("P3-C2", "TDS Return Filing", "tds-return-filing-service"),
    ],
  },
  {
    id: "P4",
    label: "NGO Registration",
    short: "NGO registration",
    title: "NGO Registration in Chennai",
    path: "/chennai/ngo-registration-service",
    icon: "HeartHandshake",
    blurb: "Trusts, societies and Section 8 companies, with 12A and 80G tax exemptions.",
    clusters: [
      c("P4-C1", "Trust Registration", "trust-registration-service"),
      c("P4-C2", "Society Registration", "society-registration-service"),
      c("P4-C3", "Section 8 Registration", "section-8-company-registration-service"),
      c("P4-C4", "12A & 80G Registration", "12a-80g-registration-service"),
    ],
  },
  {
    id: "P5",
    label: "Trademark Registration",
    short: "trademark registration",
    title: "Trademark Registration Service in Chennai",
    path: "/chennai/trademark-registration-service",
    icon: "ShieldCheck",
    blurb: "Protect your brand name and logo, reply to objections, and register copyright.",
    clusters: [c("P5-C1", "Copyright Registration", "copyright-registration-service")],
  },
  {
    id: "P6",
    label: "PF & ESI Services",
    short: "PF & ESI services",
    title: "PF and ESI Consultant in Chennai",
    path: "/chennai/pf-esi-consultant-service",
    icon: "Users",
    blurb: "PF and ESI registration for employers, and monthly contribution filings.",
    clusters: [c("P6-C1", "PF Registration", "pf-esi-registration-service")],
  },
];

export type Licence = ServicePage & { label: string; icon: IconName; blurb: string };

export const licences: Licence[] = [
  { id: "L1", label: "MSME Registration", title: "MSME / Udyam Registration in Chennai", path: "/chennai/msme-registration-service", icon: "Factory", blurb: "Udyam certificate for loans, subsidies and schemes." },
  { id: "L2", label: "FSSAI Registration", title: "FSSAI Registration in Chennai", path: "/chennai/fssai-registration-service", icon: "UtensilsCrossed", blurb: "Food licence for restaurants, kitchens and sellers." },
  { id: "L3", label: "Trade License", title: "Trade License in Chennai", path: "/chennai/trade-license-service", icon: "ScrollText", blurb: "Local authority permission to run your trade." },
  { id: "L4", label: "Shop & Establishment", title: "Shop and Establishment Registration in Chennai", path: "/chennai/shop-and-establishment-registration-service", icon: "Store", blurb: "State registration for shops, offices and outlets." },
];

/** Where a service link points: the page once it's built, otherwise a WhatsApp chat about it (so no link 404s). */
export function serviceHref(p: ServicePage, name = p.title): string {
  return isBuilt(p.path) ? p.path : whatsappLink(`Hi National Filings, I need help with ${name}.`);
}

/** Extra <a> props so off-site links (WhatsApp) open in a new tab */
export const linkTarget = (href: string) => (/^https?:/.test(href) ? { target: "_blank", rel: "noopener noreferrer" } : {});

export const cityHub = { path: "/chennai", title: "National Filings Chennai" };
