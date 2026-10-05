import { pillars, serviceHref } from "./routes";

/**
 * P1 · Company Registration pillar (/chennai/company-registration).
 * Primary keyword: "company registration service chennai".
 * Secondary: company registration in chennai, business registration service/in chennai,
 * company incorporation in chennai, private limited company registration in chennai.
 *
 * Honesty rules for this page: no prices we can't stand behind (government fees vary by capital and state,
 * professional fees are quoted after a consultation) and every timeline is an estimate, because the MCA sets the pace.
 */

export const pillar = pillars.find((p) => p.id === "P1")!;
const cluster = (id: string) => serviceHref(pillar.clusters.find((c) => c.id === id)!);

export const paths = {
  llp: cluster("P1-C1"),
  opc: cluster("P1-C2"),
  partnership: cluster("P1-C3"),
  proprietorship: cluster("P1-C4"),
  roc: cluster("P1-C5"),
};

export const SERVICE = "Company Registration"; // must match a contact form option (pillar label)

export const hero = {
  // H1 carries the primary keyword "company registration service in Chennai"
  headline: { line1: "Company Registration", line2Before: "Service ", accent: "in Chennai" },
  sub: "Register your company without the paperwork. Incorporation, MCA filing and compliance support from one experienced team.",
  badges: ["Dedicated filing support", "MCA registration experts", "PAN India service", "Transparent process"],
  whatsapp: "Hi National Filings, I'd like a consultation about registering a company.",
};

/* Section 1 · Structures ------------------------------------------- */

export type Structure = {
  id: string;
  name: string;
  /** Short label used in tables */
  short: string;
  icon: "Building2" | "Handshake" | "UserRound" | "Users" | "Store" | "ClipboardCheck";
  bestFor: string;
  advantages: string[];
  href: string;
  linkLabel: string;
  popular?: boolean;
};

export const structures: Structure[] = [
  {
    id: "pvt",
    name: "Private Limited Company",
    short: "Private Limited",
    icon: "Building2",
    bestFor: "Startups and growing businesses that plan to raise funding or scale",
    advantages: ["Limited liability for shareholders", "Easy to bring in investors and ESOPs", "Highest credibility with banks and clients"],
    href: "#process",
    linkLabel: "how private limited registration works",
    popular: true,
  },
  {
    id: "llp",
    name: "Limited Liability Partnership",
    short: "LLP",
    icon: "Handshake",
    bestFor: "Professional firms and partners who want limited liability with lighter compliance",
    advantages: ["Partners' liability limited to contribution", "No minimum capital", "Audit only above set thresholds"],
    href: paths.llp,
    linkLabel: "LLP registration",
  },
  {
    id: "opc",
    name: "One Person Company",
    short: "OPC",
    icon: "UserRound",
    bestFor: "Solo founders who want a company with limited liability",
    advantages: ["One owner, with a nominee", "Separate legal entity", "Can convert to a private limited later"],
    href: paths.opc,
    linkLabel: "OPC registration",
  },
  {
    id: "partnership",
    name: "Partnership Firm",
    short: "Partnership",
    icon: "Users",
    bestFor: "Small and family businesses run by two or more people",
    advantages: ["Quick and low-cost to set up", "Simple partnership deed", "Minimal ongoing filings"],
    href: paths.partnership,
    linkLabel: "Partnership registration",
  },
  {
    id: "proprietorship",
    name: "Sole Proprietorship",
    short: "Proprietorship",
    icon: "Store",
    bestFor: "Freelancers, traders and shop owners starting on their own",
    advantages: ["Fastest way to start trading", "Full control for the owner", "Lowest running cost"],
    href: paths.proprietorship,
    linkLabel: "Proprietorship registration",
  },
  {
    id: "roc",
    name: "ROC Compliance",
    short: "ROC Compliance",
    icon: "ClipboardCheck",
    bestFor: "Companies and LLPs that are already registered and need yearly filings done on time",
    advantages: ["Annual returns and financial statements filed", "Director KYC and event-based filings", "Avoids late fees and a struck-off status"],
    href: paths.roc,
    linkLabel: "ROC compliance",
  },
];

/* Section 2 · Chennai business landscape (local relevance) ----------- */

export const chennaiIntro =
  "Chennai is a thriving hub for IT, manufacturing, logistics, healthcare and education. Company registration in Chennai gives your business the legal footing to win clients, open a business bank account and grow.";

/** Photos: Unsplash licence (free commercial use, no attribution required; credits kept for reference) */
export const sectors = [
  { icon: "Laptop", title: "IT & SaaS", image: "https://images.unsplash.com/photo-1686249959385-ee6c7dcdf0ec?auto=format&fit=crop&w=1600&q=90", alt: "IT professional working on a laptop", credit: "Hasibullah Sahil / Unsplash" }, // unsplash.com/@hasibullahsahil
  { icon: "Factory", title: "Manufacturing", image: "https://images.unsplash.com/photo-1764185800646-f75f7e16e465?auto=format&fit=crop&w=1600&q=90", alt: "Factory floor with machinery", credit: "MGR P / Unsplash" }, // unsplash.com/@mgrhotelmaangement
  { icon: "Briefcase", title: "Professional consulting", image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=1600&q=90", alt: "Consulting team in a meeting", credit: "Smartworks Coworking / Unsplash" }, // unsplash.com/@smartworkscoworking
  { icon: "ShoppingBag", title: "Retail & distribution", image: "https://images.unsplash.com/photo-1624831466206-5b15053baabb?auto=format&fit=crop&w=1600&q=90", alt: "Retail shop shelves stocked with packaged goods", credit: "Ravi Sharma / Unsplash" }, // unsplash.com/@ravinepz
  { icon: "Truck", title: "Logistics & trade", image: "https://images.unsplash.com/photo-1678182451047-196f22a4143e?auto=format&fit=crop&w=1600&q=90", alt: "Shipping containers stacked at a port", credit: "Ali Mkumbwa / Unsplash" }, // unsplash.com/@mkumbwajr
  { icon: "GraduationCap", title: "Education services", image: "https://images.unsplash.com/photo-1692269725911-87697c558be1?auto=format&fit=crop&w=1600&q=90", alt: "Students studying at a desk in a classroom", credit: "Swastik Arora / Unsplash" }, // unsplash.com/@swastikarora
  { icon: "Stethoscope", title: "Healthcare services", image: "https://images.unsplash.com/photo-1778151270902-cb0ca572f2ee?auto=format&fit=crop&w=1600&q=90", alt: "Modern hospital room with a patient bed", credit: "Irshad Pathan / Unsplash" }, // unsplash.com/@alrighthospital
  { icon: "HardHat", title: "Construction & infrastructure", image: "https://images.unsplash.com/photo-1577199001468-44c049e7603f?auto=format&fit=crop&w=1600&q=90", alt: "Construction workers in hard hats and safety vests", credit: "Shubham Verma / Unsplash" }, // unsplash.com/@ess_vee_production_house
] as const;

export const benefits = [
  { icon: "ShieldCheck", title: "Limited liability", line: "Separates business debts from personal assets, depending on the structure." },
  { icon: "BadgeCheck", title: "Business credibility", line: "A name on MCA records builds trust with clients and suppliers." },
  { icon: "BadgeIndianRupee", title: "Access to funding", line: "Banks and lenders generally prefer registered entities for business loans." },
  { icon: "ChartPie", title: "Structured ownership", line: "Shareholding or partner shares recorded clearly from day one." },
  { icon: "TrendingUp", title: "Investor readiness", line: "A private limited company can issue shares and ESOPs to investors." },
  { icon: "ClipboardList", title: "Government tender eligibility", line: "Many tenders ask bidders to be a registered entity." },
  { icon: "Banknote", title: "Business bank account", line: "Open a current account in the business's own name and PAN." },
  { icon: "Rocket", title: "Long-term scalability", line: "Add partners, branches and states without changing your legal identity." },
] as const;

export const chennaiCta = {
  title: "Planning to start a business in Chennai?",
  sub: "Tell us your business model, number of founders and growth plans. We'll help you understand which registration structure fits your needs.",
  message: "Hi National Filings, I'm planning to start a business in Chennai and need help choosing the right registration.",
};

/* Section 3 · Process ---------------------------------------------- */

export const timeline = [
  { title: "Consultation", time: "Day 1", sub: "We understand your plans and confirm the right structure, capital and directors." },
  { title: "Document collection", time: "1-2 days", sub: "You share KYC and office proof on WhatsApp or email. We check every detail before filing." },
  { title: "Name approval", time: "2-4 working days", sub: "Digital signatures are issued and your preferred names are filed with the MCA." },
  { title: "MCA filing", time: "1-2 days", sub: "We prepare the SPICe+ forms, MoA and AoA, and file them for incorporation." },
  { title: "Certificate issued", time: "3-7 working days", sub: "The Registrar issues your Certificate of Incorporation with the company's PAN and TAN." },
  { title: "Post registration support", time: "Ongoing", sub: "Bank account, commencement of business filing, auditor appointment and your compliance calendar." },
];

export const timelineNote =
  "A private limited company typically takes 7 to 15 working days when documents are in order. Government approval timelines may vary. We guide you through every stage and keep you informed.";

export const processCta = {
  title: "Ready to start your registration?",
  sub: "Talk to our team and get guidance on the right business structure before filing.",
  ticks: ["Dedicated filing support", "MCA registration experts", "Transparent process", "PAN India service"],
  message: "Hi National Filings, I'm ready to start my company registration. Can you guide me on the right structure?",
};

/* Section 4 · What's included (service package) -------------------- */

export const included = [
  { icon: "Compass", title: "Company structure consultation", line: "Pick the right structure for your plans." },
  { icon: "SearchCheck", title: "Name availability check", line: "We shortlist names likely to be approved." },
  { icon: "FileSignature", title: "Digital signature support", line: "DSC for every director, arranged for you." },
  { icon: "FileCheck2", title: "Document verification", line: "Every document checked before filing." },
  { icon: "Landmark", title: "MCA filing & follow-up", line: "SPICe+ filed and tracked until approval." },
  { icon: "IdCard", title: "PAN & TAN allocation", line: "Issued with your incorporation certificate." },
  { icon: "Headset", title: "Dedicated registration expert", line: "One person, start to finish, on WhatsApp." },
  { icon: "CalendarCheck", title: "Post-registration guidance", line: "Bank account, auditor and first filings." },
] as const;

export const includedCta = {
  title: "Ready to register your company?",
  sub: "Talk to an expert, Monday to Saturday.",
};

/* Section 5 · Documents -------------------------------------------- */

export const documents = [
  {
    icon: "UserRound",
    title: "For directors",
    items: ["PAN card", "Aadhaar card or passport", "Address proof (last 2 months)", "Passport-size photo", "Email and mobile number"],
    hint: "Needed for every director. Address proof can be a bank statement or utility bill.",
  },
  {
    icon: "Building",
    title: "For registered office",
    items: ["Utility bill (last 2 months)", "Rent agreement, if rented", "No-objection letter from the owner"],
    hint: "Your own home address works as the registered office.",
  },
  {
    icon: "FileText",
    title: "For company information",
    items: ["2 or 3 proposed names", "Main business activity", "Capital amount", "Shareholding split"],
    hint: "Not documents, just details. We help you decide each one.",
  },
  {
    icon: "Globe",
    title: "For NRI / foreign directors",
    items: ["Passport", "Overseas address proof", "Notarised or apostilled copies"],
    hint: "At least one director on the board must be resident in India.",
  },
] as const;

export const documentsHelp = {
  title: "Don't have all documents ready?",
  sub: "Our team will guide you on alternative documents and acceptable formats.",
  message: "Hi National Filings, I'd like to send my documents for company registration.",
};

/* Section 6 · Packages --------------------------------------------- */

export type Package = {
  id: "pvt" | "llp" | "opc";
  name: string;
  icon: "Building2" | "Handshake" | "UserRound";
  description: string;
  /** Professional fee "from" price. Placeholder until confirmed: `sample` keeps it off production. */
  price: { value: string; sample?: boolean };
  includes: string[];
  message: string;
  popular?: boolean;
};

export const packages: Package[] = [
  {
    id: "pvt",
    name: "Private Limited Company",
    icon: "Building2",
    description: "For startups planning to raise funding or scale.",
    price: { value: "₹X,XXX", sample: true },
    includes: ["Name approval", "DSC & DIN support", "MoA & AoA drafting", "SPICe+ filing", "Incorporation certificate", "PAN & TAN"],
    message: "Hi National Filings, I'd like a quote for Private Limited Company registration.",
    popular: true,
  },
  {
    id: "llp",
    name: "LLP Registration",
    icon: "Handshake",
    description: "For professional and service firms with partners.",
    price: { value: "₹X,XXX", sample: true },
    includes: ["Name reservation", "DSC & DPIN support", "FiLLiP filing", "LLP agreement drafting", "Incorporation certificate", "PAN & TAN"],
    message: "Hi National Filings, I'd like a quote for LLP registration.",
  },
  {
    id: "opc",
    name: "One Person Company",
    icon: "UserRound",
    description: "For solo founders who want limited liability.",
    price: { value: "₹X,XXX", sample: true },
    includes: ["Name approval", "DSC & DIN support", "Nominee consent", "MoA & AoA drafting", "Incorporation certificate", "PAN & TAN"],
    message: "Hi National Filings, I'd like a quote for One Person Company registration.",
  },
];

export const everyPackage = [
  { icon: "Headset", title: "Dedicated expert" },
  { icon: "MessageCircle", title: "WhatsApp updates" },
  { icon: "FileCheck2", title: "Document verification" },
  { icon: "Landmark", title: "MCA filing support" },
  { icon: "CalendarCheck", title: "Compliance guidance" },
  { icon: "ReceiptText", title: "Transparent pricing" },
] as const;

export const packagesNote = "Government fees are always shown separately before filing.";

export const packagesCta = {
  title: "Not sure which registration is right for you?",
  sub: "A short call based on your partners, funding plans and turnover.",
  message: "Hi National Filings, I'm not sure which registration is right for my business. Can you help?",
};

/* Section 8 · Mistakes ---------------------------------------------- */

export const mistakes = [
  {
    icon: "Shuffle",
    fixIcon: "Compass",
    title: "Wrong business structure",
    problem: "Choosing the wrong entity can create future compliance costs and restructuring expenses.",
    fix: "We recommend the right structure based on business goals, ownership and future plans.",
  },
  {
    icon: "FileWarning",
    fixIcon: "FileCheck2",
    title: "Documentation errors",
    problem: "Mismatched names, outdated proofs or missing documents can delay filing.",
    fix: "Every document is manually verified before submission.",
  },
  {
    icon: "Ban",
    fixIcon: "SearchCheck",
    title: "Name rejection",
    problem: "Names similar to existing companies or trademarks often get rejected.",
    fix: "We perform availability checks before filing and suggest alternatives.",
  },
  {
    icon: "BellOff",
    fixIcon: "CalendarCheck",
    title: "Missed compliance requirements",
    problem: "Many founders are unaware of post-registration filings and deadlines.",
    fix: "We provide compliance guidance and filing reminders after incorporation.",
  },
] as const;

export const reviewChecks = ["Structure review", "Document verification", "Name availability check", "Compliance checklist review"];

export const reviewCta = {
  title: "Need a pre-filing review?",
  sub: "Send your documents on WhatsApp and our team will review them before filing.",
  badges: ["No obligation review", "Business hours response"],
  message: "Hi National Filings, I'd like a pre-filing review of my documents for company registration.",
};

/* Section 9 · FAQ (secondary keywords in the questions) --------------- */

export const faqs = [
  {
    q: "How long does company registration in Chennai take?",
    a: "A private limited company usually takes 7 to 15 working days from the time we receive complete documents. Name approval takes about 2 to 4 working days and incorporation another 3 to 7, depending on MCA processing. LLPs take a similar time; proprietorships and partnerships are usually quicker.",
  },
  {
    q: "Can I register my company online?",
    a: "Yes. Company incorporation in Chennai is fully online through the MCA's SPICe+ system. You share scanned documents on WhatsApp or email, sign digitally, and receive the Certificate of Incorporation by email. There is no need to visit a government office.",
  },
  {
    q: "Do I need a CA for company registration?",
    a: "The MCA requires incorporation forms to be certified by a practising Chartered Accountant, Company Secretary or Cost Accountant. You don't need to find one yourself: that certification is part of our business registration service in Chennai.",
  },
  {
    q: "Can I register a company from outside Chennai?",
    a: "Yes. We help founders across India and NRIs abroad. Your company is registered with the Registrar of Companies for the state of your registered office, and the whole process is online, so you never need to travel.",
  },
  {
    q: "What does private limited company registration in Chennai cost?",
    a: "The total is government fees (MCA fees and Tamil Nadu stamp duty, based on authorised capital), Digital Signature Certificates for each director, and our professional fee. We share an itemised quote with government fees shown separately before any work starts.",
  },
  {
    q: "Which is better for a startup: private limited or LLP?",
    a: "If you plan to raise investment or offer ESOPs, a private limited company is usually the better choice. If you are a professional or service business with partners and want lighter compliance, an LLP often suits better. We help you decide on a short call.",
  },
  {
    q: "Is there a minimum capital for company registration?",
    a: "No. There is no minimum paid-up capital for a private limited company, LLP or OPC. Many founders start with ₹10,000 to ₹1 lakh. Authorised capital affects government fees, so we help you choose a sensible figure.",
  },
  {
    q: "Can I use my home address as the registered office?",
    a: "Yes. A residential address can be the registered office. You need a recent utility bill and, if the property isn't in your name, a no-objection letter from the owner. You can change the address later.",
  },
  {
    q: "What happens after business registration in Chennai?",
    a: "After incorporation you open a current account, appoint the first auditor within 30 days and file the commencement of business declaration within 180 days. GST registration may also be needed. We guide you through each step and remind you of every due date.",
  },
];

/* CTAs ---------------------------------------------------------------- */

export const messages = {
  final: "Hi National Filings, I'd like to register a company. Please guide me.",
};

export const finalCta = {
  title: "Ready to register your company in Chennai?",
  sub: "Get expert guidance today. Tell us about your business and we'll recommend the right structure, with an itemised quote.",
};
