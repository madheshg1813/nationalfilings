/**
 * Data for one licence / registration / certification page (MSME, FSSAI, Trade License, Shop & Establishment, IEC, DSC, ISO).
 * Every page renders through components/licence/LicencePage.tsx, so they share one design and differ only in content.
 * Honesty rules for all of them: no prices we can't stand behind, timelines as estimates, government fees stated only where
 * they are fixed and public, and no promise that an authority will approve an application.
 */
type Cta = { title: string; sub: string; message: string };
type Item = { icon: string; title: string; line: string };

export type LicencePageData = {
  /** Route id in lib/routes.ts licences (L1...L7) */
  id: string;
  /** Contact form option (licence label) */
  service: string;
  meta: { title: string; description: string };
  hero: { headline: { line1: string; line2Before: string; accent: string }; sub: string; badges: string[]; whatsapp: string };
  /** Hero card: icon, small kicker, title, line on the card, three floating chips, five progress steps */
  illustration: { icon: string; kicker: string; title: string; line: string; stamp: string; chips: [string, string, string]; steps: [string, string, string, string, string] };
  benefitsSection: { title: string; lead: string; cta: Cta };
  benefits: Item[];
  applicantsSection: { title: string; lead: string };
  applicants: Item[];
  /** Optional photo tiles (MSME only so far); every photo must be unique on the site */
  opportunities?: { title: string; intro: string; industries: { icon: string; title: string; image: string; alt: string; credit: string }[] };
  /** Optional section unique to the page (licence types, standards, uses...) */
  highlights?: { eyebrow: string; title: string; lead: string; items: { icon: string; title: string; line: string; label?: string; highlight?: boolean }[] };
  documentsSection: { title: string; lead: string };
  documents: { icon: string; title: string; items: string[]; hint: string }[];
  documentsNote: { title: string; sub: string; message: string };
  processSection: { title: string; lead: string; cta: Cta };
  steps: { title: string; time: string; sub: string }[];
  processNote: string;
  mistakesSection: { title: string; lead: string };
  mistakes: { icon: string; title: string; problem: string; fix: string }[];
  costSection: { title: string; lead: string; cta: Cta };
  costs: { icon: string; label: string; title: string; line: string; highlight?: boolean }[];
  reasonsTitle: string;
  reasons: Item[];
  faqTitle: string;
  faqs: { q: string; a: string }[];
  related: { icon: string; label: string; href: string }[];
  final: Cta;
  /** Service names for the schema offer catalogue */
  catalogue: string[];
};

/** "Why choose National Filings" cards shared by the licence pages */
export const sharedReasons: Item[] = [
  { icon: "ReceiptText", title: "Transparent fees", line: "A clear quote upfront, with government fees shown separately." },
  { icon: "UserCheck", title: "Dedicated support", line: "One person handles your application from start to certificate." },
  { icon: "Award", title: "Expert team", line: "Registration specialists serving businesses from Chennai since 2012." },
  { icon: "Zap", title: "Fast processing", line: "Applications are filed as soon as your details are complete." },
  { icon: "MessageCircle", title: "WhatsApp updates", line: "Share documents and get status updates on WhatsApp, Monday to Saturday." },
  { icon: "ClipboardCheck", title: "Compliance guidance", line: "Renewal reminders and help with related registrations." },
];
