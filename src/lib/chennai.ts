import type { IconName } from "@/components/ui/LucideByName";

/**
 * C0 · City hub (/chennai). Branded page: targets "national filings chennai" only.
 * Service names appear as navigation, never as the page's target keywords (those belong to pillar pages).
 */

export const chennaiHero = {
  eyebrow: "National Filings Chennai",
  // H1 = eyebrow + 2-line headline, so the H1 text still leads with the brand + city keyword
  line1: "Helping Chennai Businesses",
  line2Before: "",
  accent: "Grow",
  line2After: " Without Paperwork",
  sub: "Helping startups, business owners, professionals and NGOs across Chennai with registrations, tax compliance, licences and ongoing business support.",
  primary: { label: "Talk to an expert", message: "Hi National Filings Chennai, I'd like to talk to an expert." },
  secondary: { label: "Explore services", href: "#chennai-services" },
  ticks: ["Chennai focused", "PAN India support", "Expert consultants", "End-to-end assistance"],
};

export const chennaiAbout = {
  eyebrow: "About us",
  title: "A Chennai team for your registrations, tax and compliance",
  paragraphs: [
    "National Filings is a tax, registration and compliance firm based in Kundrathur, Chennai. We work with startups, small businesses, professionals and NGOs, from the first registration through every return that follows.",
    "Our consultants handle company and LLP registration, GST, income tax and TDS, NGO and trust registration, trademarks, PF and ESI, and business licences, so you have one team for the whole compliance calendar.",
  ],
  stepsTitle: "How working with us goes",
  steps: [
    { icon: "MessageSquareText", title: "Tell us what you need", line: "A quick call or WhatsApp chat. We suggest the right service." },
    { icon: "FolderOpen", title: "Share documents online", line: "You get a clear checklist. No repeated trips or couriers." },
    { icon: "FileCheck2", title: "We file and follow up", line: "We prepare, file on the portal and update you until it's approved." },
  ] as { icon: IconName; title: string; line: string }[],
};

export const chennaiAudiences: { title: string; line: string; icon: IconName; message: string }[] = [
  { title: "Startups", line: "Incorporation, brand protection and GST from day one.", icon: "Rocket", message: "Hi National Filings Chennai, I'm starting a business and need help with registration." },
  { title: "Small businesses", line: "Licences, GST returns and yearly filings kept on track.", icon: "Store", message: "Hi National Filings Chennai, I run a small business and need compliance help." },
  { title: "Professionals", line: "ITR, GST and tax planning for doctors, consultants and freelancers.", icon: "Briefcase", message: "Hi National Filings Chennai, I'm a professional and need help with tax filing." },
  { title: "Importers & exporters", line: "IEC and GST set up before your first shipment.", icon: "Ship", message: "Hi National Filings Chennai, I need help with import export registration." },
  { title: "NGOs & trusts", line: "Registration, 12A and 80G, handled by one team.", icon: "HeartHandshake", message: "Hi National Filings Chennai, I need help registering an NGO or trust." },
  { title: "Growing companies", line: "ROC, TDS, PF and ESI as your team grows.", icon: "TrendingUp", message: "Hi National Filings Chennai, our company needs ongoing compliance support." },
];

/** Grouped by part of the city so it reads as coverage, not a keyword list. */
export const chennaiAreas = {
  eyebrow: "Across Chennai",
  title: "Serving businesses across Chennai",
  sub: "Our office is in Kundrathur. Most work happens online, so where your business sits in the city doesn't slow anything down.",
  office: { label: "Our office", place: "Kundrathur, Chennai" },
  zones: [
    { name: "Central", areas: ["T Nagar", "Anna Nagar", "Guindy"] },
    { name: "South", areas: ["Velachery", "Tambaram"] },
    { name: "OMR & IT corridor", areas: ["OMR", "Perungudi", "Sholinganallur"] },
    { name: "West", areas: ["Porur", "Ambattur"] },
  ],
  footnote: "Not on the list? We work with businesses in every part of Chennai, and across India online.",
};

export const chennaiWhy: { title: string; line: string; icon: IconName }[] = [
  { title: "Expert guidance", line: "Consultants who handle registrations and filings every day.", icon: "GraduationCap" },
  { title: "Transparent pricing", line: "The full fee is shared before any work begins.", icon: "ReceiptIndianRupee" },
  { title: "Dedicated support", line: "One point of contact from first call to final certificate.", icon: "Headset" },
  { title: "Quick turnaround", line: "A clear checklist upfront, so nothing waits on missing papers.", icon: "Zap" },
  { title: "End-to-end handling", line: "Drafting, filing and department follow-up, all done for you.", icon: "Route" },
  { title: "Compliance assistance", line: "Returns and renewals tracked after registration.", icon: "BellRing" },
];

export const chennaiFaqs: { q: string; a: string }[] = [
  {
    q: "Do you serve all areas of Chennai?",
    a: "Yes. Our office is in Kundrathur, and we work with businesses across Chennai, from T Nagar and Anna Nagar to OMR, Tambaram and Ambattur. Most of the work is done online, so your location in the city doesn't matter.",
  },
  {
    q: "Can I complete the process online?",
    a: "For most services, yes. You share documents digitally, review drafts we send you, and we file on the government portals. We tell you upfront if any step needs a physical signature or visit.",
  },
  {
    q: "Can I visit your office in Chennai?",
    a: "Yes, our office is in Kundrathur, Chennai. Please message us before you come so the right consultant is available to meet you.",
  },
  {
    q: "How do I speak with an expert?",
    a: "Tap \"Talk to an expert\" on this page to message us on WhatsApp. Tell us briefly what you need and a consultant will guide you on the next step.",
  },
  {
    q: "What services does National Filings Chennai offer?",
    a: "Company registration, GST, income tax and TDS, NGO registration, trademarks and copyright, PF and ESI, and business licences such as MSME, FSSAI, trade licence and shop and establishment registration.",
  },
  {
    q: "Do you support businesses outside Chennai?",
    a: "Yes. We serve clients across India. Registrations and filings are done online, so the process is the same wherever your business is based.",
  },
  {
    q: "I'm not sure which service I need. Can you help?",
    a: "Yes. Tell us about your business and what you're trying to do, and we'll suggest the right registration or filing before you commit to anything.",
  },
  {
    q: "Is National Filings a government office?",
    a: "No. National Filings is a private consultancy. We prepare and file applications on your behalf on official government portals, and the approvals are issued by the relevant authorities.",
  },
];

export const chennaiCta = {
  title: "Need help with registration, tax or compliance?",
  sub: "Speak with our experts and get clarity on the right service for your business.",
  primary: { label: "Talk to an expert", message: "Hi National Filings Chennai, I'd like to talk to an expert." },
  whatsapp: { label: "WhatsApp us", message: "Hi National Filings Chennai, I have a question." },
};
