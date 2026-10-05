/**
 * Reusable page blocks for pillar, cluster and licence pages.
 * Each takes plain data (no page-specific imports), so a new page = a data file + these blocks.
 *
 *   ServiceHero      centred hero: breadcrumb, 2-line H1, CTAs, trust bar, icon backdrop
 *   TrustBar         short ticks + Google/Justdial tags
 *   ServiceCards     whole-card link grid (pillars, clusters, licences)
 *   ProcessSteps     compact numbered stepper (optional You/Us tags)
 *   Faq              two-column FAQ (pass `schema` to emit FAQPage JSON-LD)
 *   InternalLinks    grouped link hub
 *   RelatedServices  8 related links, seeded per page
 *   CtaBand          closing black CTA band
 *   Breadcrumbs      visible trail + BreadcrumbList schema
 *   CompanyDetails   NAP + hours + private-consultancy note
 */
export { ServiceHero, type HeroHeadline } from "./ServiceHero";
export { TrustBar } from "./TrustBar";
export { ServiceCards, type ServiceCard } from "./ServiceCards";
export { ProcessSteps, type Step } from "./ProcessSteps";
export { InternalLinks, type LinkGroup } from "./InternalLinks";
export { RelatedServices } from "./RelatedServices";
export { CtaBand, type CtaAction } from "./CtaBand";
export { SectionHeader } from "./SectionHeader";
export { Faq } from "@/components/sections/Faq";
export { Breadcrumbs, breadcrumbId, type Crumb } from "@/components/ui/Breadcrumbs";
export { CompanyDetails } from "@/components/ui/CompanyDetails";
