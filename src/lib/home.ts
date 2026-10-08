import type { IconName } from "@/components/ui/LucideByName";

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

/**
 * Headline options (one green accent each, ≤ 7 words). `hero.headline` picks the live one.
 * A: covers every service + the deadline pain.  B: the original pain-point line.  C: action-led.
 * D: authority-led.  E: names the core services, keyword-first.  F: services + expertise.  Live: F (client's choice, 2026-10-05).
 */
export const headlineOptions = {
  A: { before: "Every filing done right,", lineTwoBefore: "and ", accent: "on time", after: "." },
  B: { before: "Paperwork slowing you down?", lineTwoBefore: "We ", accent: "handle it", after: "." },
  C: { before: "Register, file and stay", lineTwoBefore: "", accent: "compliant", after: "." },
  // D: authority-led; professional tone for business owners and NGOs alike.
  D: { before: "Your business compliance,", lineTwoBefore: "handled by ", accent: "experts", after: "." },
  // E: names the core services (matches the page title keywords) + authority.
  E: { before: "GST, Tax & Company Registration,", lineTwoBefore: "handled by ", accent: "experts", after: "." },
  // F: client's wording, broken after "Tax &" so it stays on 2 lines at 76px
  F: { before: "Business Registration, Tax &", lineTwoBefore: "Compliance - Managed by ", accent: "Experts", after: "" },
} as const;

export const hero = {
  /** Small authority line above the H1 */
  kicker: "Trusted by startups, SMEs & NGOs",
  headline: headlineOptions.F,
  /** F is longer than the others: use the 68px headline size so it stays on 2 lines */
  longHeadline: true,
  sub: "Supporting startups, SMEs, professionals and NGOs with registration, taxation and regulatory compliance services across India.",
  primary: { label: "Talk to an expert", message: "Hi National Filings, I'd like to talk to an expert." },
  secondary: { label: "See services", href: "#services" },
  ticks: ["PAN India", "Upfront fees", "Single contact"],
};

/* ------------------------------------------------------------------ */
/* Government portals strip                                            */
/* ------------------------------------------------------------------ */

export const portalsSection = {
  eyebrow: "Official portals",
  title: "Trusted across India's official compliance systems",
  sub: "We prepare, file and manage registrations, returns and compliance across major government platforms and authorities.",
  disclaimer:
    "National Filings is a private consultancy firm and is not affiliated with any government department. Portal names are shown to describe filing and compliance services.",
};

export const portals: { name: string; caption: string; icon: IconName }[] = [
  { name: "GST", caption: "Registration & returns", icon: "ReceiptIndianRupee" },
  { name: "MCA", caption: "Company filings", icon: "Building2" },
  { name: "Income Tax", caption: "ITR, TDS & notices", icon: "IndianRupee" },
  { name: "EPFO", caption: "Provident fund", icon: "PiggyBank" },
  { name: "ESIC", caption: "Employee insurance", icon: "Stethoscope" },
  { name: "DGFT", caption: "Import export code", icon: "Ship" },
  { name: "IP India", caption: "Trademark filings", icon: "ShieldCheck" },
];

/* ------------------------------------------------------------------ */
/* Licences, registrations & certifications                            */
/* ------------------------------------------------------------------ */

/** One card per licence page in lib/routes.ts (by id): links to the page once it's live, WhatsApp until then */
export const licenceSection = {
  eyebrow: "Registrations",
  title: "Licences, Registrations & Certifications",
  lead: "From MSME registration and food licences to import-export approvals and ISO certifications, our experts help businesses stay compliant and ready for growth.",
  cards: [
    { id: "L1", name: "MSME / Udyam Registration", icon: "Building2", line: "Get your MSME certificate and unlock government benefits for your business." },
    { id: "L2", name: "FSSAI Registration", icon: "ShieldCheck", line: "Food licence registration for restaurants, manufacturers and food businesses." },
    { id: "L3", name: "Trade License", icon: "Briefcase", line: "Obtain municipal approvals required for legally operating your business." },
    { id: "L4", name: "Shop & Establishment Registration", short: "Shop & Establishment", icon: "Store", line: "Register your office, shop or commercial establishment with ease." },
    { id: "L5", name: "IEC Registration", icon: "Globe", line: "Import Export Code registration for businesses involved in international trade." },
    { id: "L6", name: "Digital Signature Certificate", icon: "KeyRound", line: "Secure DSC certificates for MCA, GST and government filings." },
    { id: "L7", name: "ISO Certification", icon: "BadgeCheck", line: "Build trust and improve business standards through ISO certification." },
  ] as { id: string; name: string; short?: string; icon: IconName; line: string }[],
  cta: {
    title: "Not sure which registration you need?",
    sub: "Talk with our experts and get guidance based on your business type, industry and compliance requirements.",
    message: "Hi National Filings, I'm not sure which registration or licence my business needs. Can you guide me?",
  },
};

/* ------------------------------------------------------------------ */
/* Why National Filings                                                */
/* ------------------------------------------------------------------ */

export const whyUs: { title: string; line: string; icon: IconName }[] = [
  { title: "Expert consultants", line: "Tax, company law and NGO work, each handled by someone who does it every day.", icon: "GraduationCap" },
  { title: "Dedicated support", line: "One point of contact from first call to certificate, so you never repeat yourself.", icon: "Headset" },
  { title: "Transparent pricing", line: "You know the full professional fee before any work begins.", icon: "ReceiptIndianRupee" },
  { title: "End-to-end handling", line: "We draft, file, follow up with the department and deliver the result.", icon: "Route" },
  { title: "Fast processing", line: "A clear document checklist upfront, so nothing waits on a missing paper.", icon: "Zap" },
  { title: "Ongoing compliance", line: "Returns and renewals tracked after registration, before they become penalties.", icon: "BellRing" },
];

/* ------------------------------------------------------------------ */
/* Comparison                                                          */
/* ------------------------------------------------------------------ */

export const metrics = [
  { key: "time", label: "Time saved", icon: "Timer" },
  { key: "risk", label: "Lower filing risk", icon: "ShieldCheck" },
  { key: "guidance", label: "Expert guidance", icon: "GraduationCap" },
  { key: "docs", label: "Document management", icon: "FolderOpen" },
  { key: "tracking", label: "Compliance tracking", icon: "BellRing" },
] as const satisfies readonly { key: string; label: string; icon: IconName }[];

type MetricKey = (typeof metrics)[number]["key"];
/** [what it's like alone, what it's like with us] */
type Row = [alone: string, ours: string];

export type Factor = {
  id: string;
  label: string;
  icon: IconName;
  rows: Record<MetricKey, Row>;
  cta: { label: string; message: string };
};

/** Bars are illustrative (higher = better). Same shape for every task so the story stays consistent. */
export const barLevels = { alone: [18, 22, 10, 25, 12], ours: [88, 90, 95, 86, 92] };

export const comparison = {
  eyebrow: "Why hand it over",
  title: "Doing it alone vs with National Filings",
  note: "Bars are illustrative, not measured scores.",
  factors: [
    {
      id: "gst",
      label: "GST returns",
      icon: "ReceiptIndianRupee",
      rows: {
        time: ["Monthly portal work is on you", "You share invoices, we file"],
        risk: ["Mismatches found after filing", "Reconciled before every return"],
        guidance: ["Guesswork on input tax credit", "A GST consultant reviews each return"],
        docs: ["Invoices scattered across chats", "One monthly checklist"],
        tracking: ["You watch every due date", "Reminded before each due date"],
      },
      cta: { label: "Get my GST returns filed", message: "Hi National Filings, I need help filing my GST returns." },
    },
    {
      id: "company",
      label: "Company registration",
      icon: "Building2",
      rows: {
        time: ["Learning forms and portal steps", "We prepare every form"],
        risk: ["Name or form rejections", "Name and papers checked first"],
        guidance: ["Unsure which structure fits", "Structure advice before filing"],
        docs: ["Rework when a paper is missing", "Exact checklist upfront"],
        tracking: ["First-year duties missed", "First-year compliance mapped out"],
      },
      cta: { label: "Start my company registration", message: "Hi National Filings, I want to register a company." },
    },
    {
      id: "notice",
      label: "Tax notices",
      icon: "MailWarning",
      rows: {
        time: ["Decoding legal wording", "Explained in plain words"],
        risk: ["A wrong or late reply", "Reply drafted and checked"],
        guidance: ["Forums and search results", "A tax consultant on your case"],
        docs: ["Unsure what proof to attach", "We list what to submit"],
        tracking: ["Follow-ups slip", "Tracked until it is closed"],
      },
      cta: { label: "Get help with my notice", message: "Hi National Filings, I received a tax notice and need help." },
    },
    {
      id: "roc",
      label: "Annual compliance",
      icon: "CalendarCheck",
      rows: {
        time: ["Several forms, different dates", "All forms handled together"],
        risk: ["Late fees for every day of delay", "Filed before due dates"],
        guidance: ["Board and AGM steps unclear", "Resolutions and minutes drafted"],
        docs: ["Financials chased at the last minute", "Collected early with a checklist"],
        tracking: ["Director KYC easily missed", "Every due date on our calendar"],
      },
      cta: { label: "Keep my company compliant", message: "Hi National Filings, I need help with annual ROC compliance." },
    },
    {
      id: "trademark",
      label: "Trademark",
      icon: "ShieldCheck",
      rows: {
        time: ["Searching similar marks yourself", "Search done for you"],
        risk: ["Objection from a similar mark", "Conflicts flagged before filing"],
        guidance: ["Class selection is guesswork", "Right classes chosen with you"],
        docs: ["Unsure what the office needs", "Application prepared for you"],
        tracking: ["Objection deadlines missed", "Status and replies tracked"],
      },
      cta: { label: "Protect my brand name", message: "Hi National Filings, I want to register a trademark." },
    },
    {
      id: "ngo",
      label: "NGO approvals",
      icon: "HeartHandshake",
      rows: {
        time: ["Each approval filed separately", "One team, one plan"],
        risk: ["Deed gaps delay approvals", "Deed drafted for 12A and 80G"],
        guidance: ["Trust, society or Section 8?", "Structure chosen with you"],
        docs: ["Trustee papers scattered", "Trustee documents organised"],
        tracking: ["Renewals and returns missed", "Renewal dates tracked"],
      },
      cta: { label: "Register my NGO", message: "Hi National Filings, I want to register an NGO or trust." },
    },
  ] satisfies Factor[],
};

/* ------------------------------------------------------------------ */
/* Who we help                                                         */
/* ------------------------------------------------------------------ */

/** Photos: Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each is unique on the site. */
export const audiences: { title: string; useCase: string; icon: IconName; needs: string[]; image: string; alt: string; credit: string }[] = [
  { title: "Startups", useCase: "Incorporate, protect the brand, get GST-ready.", icon: "Rocket", needs: ["Private Limited", "Trademark", "GST registration"], image: "https://images.unsplash.com/photo-1559089717-698da4a8d2c9?auto=format&fit=crop&crop=faces,entropy&w=1600&h=1000&q=90", alt: "Three young founders smiling together", credit: "Harsh Yadav / Unsplash" }, // unsplash.com/@harshyadav
  { title: "Shops & small businesses", useCase: "Get licensed and keep monthly GST on track.", icon: "Store", needs: ["GST returns", "Shop licence", "Proprietorship"], image: "https://images.unsplash.com/photo-1785220302012-fe0cd4509833?auto=format&fit=crop&crop=faces,entropy&w=1600&h=1000&q=90", alt: "Small shops along a street in South India", credit: "Adhitya Sibikumar / Unsplash" }, // unsplash.com/@adhitya_2505
  { title: "Professionals & freelancers", useCase: "File ITR and GST on professional income.", icon: "Briefcase", needs: ["ITR filing", "GST registration", "Tax planning"], image: "https://images.unsplash.com/photo-1654262609484-76d1a8f3b016?auto=format&fit=crop&crop=faces,entropy&w=1600&h=1000&q=90", alt: "Professional working on a laptop", credit: "Kelum Chathuranga / Unsplash" }, // unsplash.com/@kelumchathu
  { title: "Salaried individuals", useCase: "File returns, claim refunds, answer notices.", icon: "UserRound", needs: ["ITR filing", "Refund support", "Notice reply"], image: "https://images.unsplash.com/photo-1623662346414-af98877cab19?auto=format&fit=crop&crop=faces,entropy&w=1600&h=1000&q=90", alt: "Office employee in a checked shirt", credit: "Uvais Ur Rehman / Unsplash" }, // unsplash.com/@uvaisurrehman
  { title: "NGOs & trusts", useCase: "Register, get 12A/80G, become CSR-eligible.", icon: "HeartHandshake", needs: ["12A & 80G", "Trust registration", "CSR registration"], image: "https://images.unsplash.com/photo-1692609659165-1ec4d8108c0e?auto=format&fit=crop&crop=faces,entropy&w=1600&h=1000&q=90", alt: "Group of children sitting together", credit: "Shashi Ghosh / Unsplash" }, // unsplash.com/@shashishankarghosh
  { title: "Food businesses", useCase: "FSSAI and local licences before you open.", icon: "UtensilsCrossed", needs: ["FSSAI", "Udyam MSME", "Trade licence"], image: "https://images.unsplash.com/photo-1788620644598-58fe1354bf2a?auto=format&fit=crop&crop=faces,entropy&w=1600&h=1000&q=90", alt: "Street food cart with puffed rice and snacks", credit: "Zoshua Colah / Unsplash" }, // unsplash.com/@zoshuacolah
  { title: "Importers & exporters", useCase: "IEC and DGFT paperwork to trade overseas.", icon: "Ship", needs: ["IEC", "DGFT services", "GST registration"], image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&crop=faces,entropy&w=1600&h=1000&q=90", alt: "Cargo ships and cranes at a port", credit: "Andy Li / Unsplash" }, // unsplash.com/@andylid0
  { title: "Growing companies", useCase: "Payroll, TDS and ROC as the team grows.", icon: "TrendingUp", needs: ["ROC filings", "PF & ESI", "TDS returns"], image: "https://images.unsplash.com/photo-1761957375235-46acb4862151?auto=format&fit=crop&crop=faces,entropy&w=1600&h=1000&q=90", alt: "Team of five posing together at work", credit: "Les Taylor / Unsplash" }, // unsplash.com/@lestaylor
];

/* ------------------------------------------------------------------ */
/* Process                                                             */
/* ------------------------------------------------------------------ */

export const process = {
  eyebrow: "How it works",
  title: "Your part takes two steps. We handle the rest.",
  steps: [
    { title: "Consultation", sub: "Tell us what you need", who: "you" },
    { title: "Document collection", sub: "Share from a checklist", who: "you" },
    { title: "Drafting", sub: "Forms prepared & checked", who: "us" },
    { title: "Filing", sub: "Submitted on the portal", who: "us" },
    { title: "Approval", sub: "We follow up", who: "us" },
    { title: "Certificate delivery", sub: "Sent to you", who: "us" },
  ] as { title: string; sub: string; who: "you" | "us" }[],
};

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const faqs: { q: string; a: string }[] = [
  {
    q: "What services does National Filings offer?",
    a: "Business registration, GST, income tax, TDS, NGO and trust registration, government licences, trademarks and certifications, import export codes, PF and ESI, and MCA/ROC filings. You can handle all of them with one team.",
  },
  {
    q: "Which business structure should I choose?",
    a: "It depends on how many owners you have, how much liability protection you need and whether you plan to raise funds. A proprietorship is simplest, an LLP suits partners and professionals, and a private limited company suits startups planning to grow. We suggest a structure after a short consultation.",
  },
  {
    q: "Can you file my GST returns every month?",
    a: "Yes. We file monthly or quarterly returns, reconcile your purchases so input tax credit is not missed, and share the return for your approval before filing.",
  },
  {
    q: "I received an income tax or GST notice. Can you help?",
    a: "Yes. Send us the notice. We explain what it is asking for, list the documents needed, draft the reply and track it until it is closed.",
  },
  {
    q: "What documents are needed to register a company?",
    a: "Usually PAN and Aadhaar of each director, a photo, address proof, and proof of the registered office address with the owner's no-objection letter. We send an exact checklist for your structure before we begin.",
  },
  {
    q: "How long does registration take?",
    a: "It depends on the service and on government processing time, which we do not control. We share the expected timeline once we have checked your documents, and we keep you updated at each stage.",
  },
  {
    q: "Do you help NGOs get 12A, 80G and CSR registration?",
    a: "Yes. We register trusts, societies and Section 8 companies, draft the deed or MOA, and then apply for 12A, 80G and CSR registration so you can receive tax-exempt income, give donors tax benefits and apply for CSR funds.",
  },
  {
    q: "Do I need a Digital Signature Certificate (DSC)?",
    a: "A DSC is required to sign MCA filings for companies and LLPs, and it is also used for some income tax and GST filings. We can arrange one for directors and authorised signatories.",
  },
  {
    q: "Do you work with clients outside my city?",
    a: "Yes. We serve clients across India. Most work is done online, so you can share documents and approve filings without visiting an office.",
  },
  {
    q: "How much do your services cost?",
    a: "Fees depend on the service and the size of your business. We tell you the fee before we start work, so there are no surprises later.",
  },
];

/* ------------------------------------------------------------------ */
/* Final CTA                                                           */
/* ------------------------------------------------------------------ */

export const finalCta = {
  title: "Filing due soon? Talk to an expert today.",
  sub: "Deadlines don't move. Tell us what you need to file and we'll confirm the documents, the fee and the next step.",
  whatsapp: { label: "Chat on WhatsApp", message: "Hi National Filings, I have a filing due soon and need help." },
  consult: { label: "Book a consultation", message: "Hi National Filings, I'd like to book a consultation." },
  directory: { label: "Browse all services", href: "#services" },
};
