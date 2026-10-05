import { pillars } from "./routes";

/**
 * P2 · GST Consultant pillar (/chennai/gst-consultant-service).
 * Primary keyword: "gst consultant in chennai".
 * Secondary: gst services in chennai, gst registration consultant chennai, gst filing services chennai,
 * gst return filing chennai, gst compliance consultant chennai.
 *
 * Honesty rules (same as every pillar): no prices we can't stand behind, timelines are estimates because the
 * GST department sets the pace, and no unconfirmed claims ("free", "most popular", "verified").
 * Thresholds and return names are as of 2026; re-check against the GST portal before each content review.
 */

export const pillar = pillars.find((p) => p.id === "P2")!;

export const SERVICE = "GST Services"; // must match a contact form option (pillar label)

export const hero = {
  // H1 carries the primary keyword "GST consultant in Chennai"
  headline: { line1: "GST Consultant", line2Before: "", accent: "in Chennai" },
  sub: "GST registration, return filing, notices, amendments and compliance support from dedicated GST experts.",
  badges: ["GST registration", "GST return filing", "Notice handling", "Dedicated consultant"],
  whatsapp: "Hi National Filings, I'd like a consultation with a GST consultant.",
};

/* Section 3 · Who needs GST support ---------------------------------- */

/** Photos: Unsplash licence (free commercial use, no attribution required; credits kept for reference) */
export const audiences = [
  { icon: "Store", title: "Retail stores", image: "https://images.unsplash.com/photo-1742106849926-44b5f7b9a4ef?auto=format&fit=crop&crop=faces,entropy&w=1000&h=1250&q=90", alt: "Shopkeeper in a small retail store", credit: "Rohit Dey / Unsplash" }, // unsplash.com/@rohit16dey
  { icon: "Factory", title: "Manufacturers", image: "https://images.unsplash.com/photo-1764114909312-c27b89ec7223?auto=format&fit=crop&crop=faces,entropy&w=1000&h=1250&q=90", alt: "Workers operating an industrial machine", credit: "Zoshua Colah / Unsplash" }, // unsplash.com/@zoshuacolah
  { icon: "Briefcase", title: "Service providers", image: "https://images.unsplash.com/photo-1771244688590-1e481dba1b5a?auto=format&fit=crop&crop=faces,entropy&w=1000&h=1250&q=90", alt: "Professional working at an office desk", credit: "Skytech Aviation / Unsplash" }, // unsplash.com/@skytechaviation0
  { icon: "HardHat", title: "Contractors", image: "https://images.unsplash.com/photo-1747192904662-e03e8da1e0ab?auto=format&fit=crop&crop=faces,entropy&w=1000&h=1250&q=90", alt: "Building under construction with scaffolding", credit: "Saumya jain / Unsplash" }, // unsplash.com/@saumyajain009
  { icon: "UtensilsCrossed", title: "Restaurants", image: "https://images.unsplash.com/photo-1515931215890-366d3990cf8d?auto=format&fit=crop&crop=faces,entropy&w=1000&h=1250&q=90", alt: "Food being cooked in a restaurant kitchen", credit: "Rani George / Unsplash" }, // unsplash.com/@rani_george532
  { icon: "ShoppingCart", title: "Ecommerce sellers", image: "https://images.unsplash.com/photo-1770013413878-2530e2c3d82b?auto=format&fit=crop&crop=faces,entropy&w=1000&h=1250&q=90", alt: "Online seller checking orders next to packed parcels", credit: "Rifki Kurniawan / Unsplash" }, // unsplash.com/@kurniawann
  { icon: "Ship", title: "Exporters", image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&crop=faces,entropy&w=1000&h=1250&q=90", alt: "Cargo ship loaded with containers at sea", credit: "Ian Taylor / Unsplash" }, // unsplash.com/@carrier_lost
  { icon: "Rocket", title: "Startups", image: "https://images.unsplash.com/photo-1716703742352-0bbdb45f505b?auto=format&fit=crop&crop=faces,entropy&w=1000&h=1250&q=90", alt: "Startup founding team in their office", credit: "Musemind UX Agency / Unsplash" }, // unsplash.com/@musemindagency
  { icon: "Stethoscope", title: "Healthcare businesses", image: "https://images.unsplash.com/photo-1659353888906-adb3e0041693?auto=format&fit=crop&crop=faces,entropy&w=1000&h=1250&q=90", alt: "Doctor in a white coat with a stethoscope", credit: "Fotos / Unsplash" }, // unsplash.com/@fotospk
  { icon: "GraduationCap", title: "Education businesses", image: "https://images.unsplash.com/photo-1692269725836-fbd72e98883f?auto=format&fit=crop&crop=faces,entropy&w=1000&h=1250&q=90", alt: "Students in a classroom", credit: "Swastik Arora / Unsplash" }, // unsplash.com/@swastikarora
  { icon: "Scale", title: "Professional firms", image: "https://images.unsplash.com/photo-1707902665498-a202981fb5ac?auto=format&fit=crop&crop=faces,entropy&w=1000&h=1250&q=90", alt: "Accountant working with a calculator and documents", credit: "Jakub Żerdzicki / Unsplash" }, // unsplash.com/@jakubzerdzicki
  { icon: "Megaphone", title: "Agencies", image: "https://images.unsplash.com/photo-1622675363311-3e1904dc1885?auto=format&fit=crop&crop=faces,entropy&w=1000&h=1250&q=90", alt: "Agency team working on laptops in a meeting", credit: "Mapbox / Unsplash" }, // unsplash.com/@mapbox
] as const;

/* Section 4 · Services ----------------------------------------------- */

export type GstService = {
  icon: string;
  title: string;
  line: string;
  benefits: [string, string];
  cta: string;
  message: string;
};

export const services: GstService[] = [
  {
    icon: "FilePlus2",
    title: "GST Registration Service in Chennai",
    line: "New GSTIN for your business, filed with the right category and HSN/SAC codes.",
    benefits: ["Eligibility and scheme check", "Application tracked to approval"],
    cta: "Register for GST",
    message: "Hi National Filings, I'd like to apply for GST registration.",
  },
  {
    icon: "FileSpreadsheet",
    title: "GST Return Filing in Chennai",
    line: "GSTR-1 and GSTR-3B filed monthly or quarterly, on time, every time.",
    benefits: ["Sales and purchase data checked", "Due-date reminders"],
    cta: "Start return filing",
    message: "Hi National Filings, I need help with GST return filing.",
  },
  {
    icon: "FileX2",
    title: "GST Cancellation in Chennai",
    line: "Close your GSTIN properly, including pending returns and the final return.",
    benefits: ["Pending returns cleared first", "Final return (GSTR-10) filed"],
    cta: "Cancel my GST",
    message: "Hi National Filings, I'd like to cancel my GST registration.",
  },
  {
    icon: "MailWarning",
    title: "GST Notice Reply in Chennai",
    line: "Clear, documented replies to GST notices before the deadline.",
    benefits: ["Notice reviewed and explained", "Reply and documents prepared"],
    cta: "Get notice help",
    message: "Hi National Filings, I've received a GST notice and need help replying.",
  },
];

/* Section 5 · Benefits of professional GST support ------------------- */

export const benefits = [
  { icon: "ShieldAlert", title: "Avoid penalties", line: "Late fees and interest avoided with on-time filing." },
  { icon: "CalendarClock", title: "Timely filing", line: "Every return filed before its due date." },
  { icon: "ArrowLeftRight", title: "Input tax credit support", line: "Purchases matched to GSTR-2B so credit isn't lost." },
  { icon: "MailCheck", title: "Notice management", line: "Notices answered properly and on time." },
  { icon: "ListChecks", title: "Compliance tracking", line: "One calendar for every GST deadline." },
  { icon: "Headset", title: "Dedicated expert", line: "One consultant who knows your business." },
  { icon: "TrendingUp", title: "Business growth", line: "Clean GST records help with loans and tenders." },
  { icon: "HeartHandshake", title: "Peace of mind", line: "You run the business, we handle GST." },
] as const;

/* Section 6 · Process ------------------------------------------------- */

export const steps = [
  { title: "Consultation", time: "Day 1", sub: "We check eligibility, scheme and HSN/SAC codes." },
  { title: "Document collection", time: "1 day", sub: "Share documents on WhatsApp or email." },
  { title: "GST application", time: "1–2 days", sub: "Form REG-01 filed with Aadhaar authentication." },
  { title: "Government processing", time: "3–7 working days", sub: "We answer any officer queries for you." },
  { title: "GST certificate", time: "On approval", sub: "GSTIN and certificate issued on the portal." },
  { title: "Ongoing compliance", time: "Monthly", sub: "Returns, reconciliation and reminders." },
];

export const stepsNote =
  "Most registrations are approved in 3 to 7 working days. It can take longer if the officer asks for clarification or a physical verification.";

export const processCta = {
  title: "Ready to get your GSTIN?",
  sub: "Talk to a GST consultant and get the right category before you apply.",
  message: "Hi National Filings, I'd like to start my GST registration.",
};

/* Section 7 · Documents (tabs) ---------------------------------------- */

export const documentTabs = [
  {
    id: "proprietorship",
    label: "Proprietorship",
    items: [
      "PAN card of the proprietor",
      "Aadhaar card of the proprietor",
      "Passport-size photo",
      "Business address proof (electricity bill or property tax receipt)",
      "Rent agreement and owner's NOC, if rented",
      "Bank statement or cancelled cheque",
    ],
  },
  {
    id: "partnership",
    label: "Partnership",
    items: [
      "Partnership deed",
      "PAN card of the firm",
      "PAN, Aadhaar and photo of each partner",
      "Business address proof and NOC, if rented",
      "Bank statement or cancelled cheque of the firm",
      "Authorisation letter for the signing partner",
    ],
  },
  {
    id: "llp",
    label: "LLP",
    items: [
      "Certificate of incorporation",
      "LLP agreement",
      "PAN card of the LLP",
      "PAN, Aadhaar and photo of each designated partner",
      "Business address proof and NOC, if rented",
      "Bank statement or cancelled cheque",
      "Authorisation for the signing partner",
    ],
  },
  {
    id: "pvt",
    label: "Private Limited",
    items: [
      "Certificate of incorporation",
      "MoA and AoA",
      "PAN card of the company",
      "PAN, Aadhaar and photo of each director",
      "Board resolution naming the authorised signatory",
      "Business address proof and NOC, if rented",
      "Bank statement or cancelled cheque",
    ],
  },
] as const;

export const documentsMessage = "Hi National Filings, I'd like to send my documents for GST registration.";

/* Section 8 · Common GST problems (issue → impact → fix) ------------- */

export const problems = [
  {
    icon: "Shuffle",
    title: "Wrong GST category",
    issue: "Choosing composition or regular scheme, or HSN/SAC codes, without checking your sales.",
    impact: "Wrong tax rates, lost input credit or limits on selling across states.",
    fix: "We review turnover, customers and supplies before choosing your scheme and codes.",
  },
  {
    icon: "CalendarX2",
    title: "Late filing",
    issue: "GSTR-1 or GSTR-3B filed after the due date.",
    impact: "Daily late fees, 18% interest on tax due and blocked e-way bills.",
    fix: "A compliance calendar with reminders, and returns filed before every due date.",
  },
  {
    icon: "MailWarning",
    title: "Notice received",
    issue: "A notice for a mismatch, a non-filing or a scrutiny query.",
    impact: "Missed reply deadlines can lead to tax demands, penalties or cancellation.",
    fix: "We explain the notice, prepare the reply with documents and file it on time.",
  },
  {
    icon: "ArrowLeftRight",
    title: "Input tax credit issues",
    issue: "Purchase records don't match what suppliers reported in GSTR-2B.",
    impact: "Credit is denied and you pay more tax than you should.",
    fix: "Monthly reconciliation with GSTR-2B and follow-up with your suppliers.",
  },
  {
    icon: "MapPinOff",
    title: "Address amendment delays",
    issue: "You moved premises but your registration still shows the old address.",
    impact: "Failed verification, notices and possible suspension of your GSTIN.",
    fix: "We file the amendment with the right proof and track it until approval.",
  },
  {
    icon: "FileX2",
    title: "GST cancellation problems",
    issue: "Business closed but the GSTIN is still active, or returns are pending.",
    impact: "Returns stay due and late fees keep adding up.",
    fix: "We clear pending returns, file the cancellation and the final return (GSTR-10).",
  },
] as const;

export const problemsCta = {
  title: "Stuck with a GST problem?",
  sub: "Send us the details on WhatsApp. A GST consultant will tell you the next step.",
  message: "Hi National Filings, I have a GST problem and need help.",
};

/* Section 9 · Packages ---------------------------------------------- */

export const packages = [
  {
    icon: "FilePlus2",
    name: "GST Registration",
    tag: "One-time",
    idealFor: "New businesses, and anyone crossing the turnover threshold or selling online or across states.",
    includes: ["Eligibility and scheme advice", "HSN/SAC code selection", "REG-01 application filing", "Officer query replies", "GST certificate download"],
    support: "Until your GSTIN is approved",
    message: "Hi National Filings, I'd like a quote for GST registration.",
  },
  {
    icon: "FileSpreadsheet",
    name: "GST Return Filing",
    tag: "Monthly or quarterly",
    idealFor: "Registered businesses that want returns filed correctly and on time.",
    includes: ["GSTR-1 and GSTR-3B filing", "GSTR-2B reconciliation", "Tax payable worked out", "Due-date reminders", "Filing confirmation on WhatsApp"],
    support: "Every filing period",
    message: "Hi National Filings, I'd like a quote for GST return filing.",
    highlight: true,
  },
  {
    icon: "ShieldCheck",
    name: "GST Compliance Support",
    tag: "Ongoing",
    idealFor: "Growing businesses that want one team to handle all of GST.",
    includes: ["Everything in return filing", "Notice replies", "Amendments", "Annual return (GSTR-9)", "LUT and refund guidance"],
    support: "Dedicated consultant, all year",
    message: "Hi National Filings, I'd like a quote for ongoing GST compliance support.",
  },
] as const;

export const packagesNote = "Fees are quoted after a short call, based on your turnover and number of invoices. Government fees and taxes are paid at actuals.";

/* Section 10 · Why National Filings ---------------------------------- */

export const reasons = [
  { icon: "UserCheck", title: "Dedicated GST consultant", line: "One person who knows your business and your GSTIN." },
  { icon: "Zap", title: "Fast turnaround", line: "We file as soon as your documents are checked." },
  { icon: "ReceiptText", title: "Transparent pricing", line: "A clear quote before any work starts." },
  { icon: "MessageCircle", title: "WhatsApp updates", line: "Filing confirmations and reminders where you already are." },
  { icon: "MailCheck", title: "Notice support", line: "Help with replies when a GST notice arrives." },
  { icon: "MapPinned", title: "PAN India service", line: "Fully online, for businesses in any state." },
  { icon: "Award", title: "Experienced team", line: "Serving businesses from Chennai since 2012." },
  { icon: "CalendarCheck", title: "Compliance calendar", line: "Every GST due date tracked for you." },
] as const;

/* Section 11 · GST in Chennai insights -------------------------------- */

export const insights = [
  {
    icon: "Factory",
    title: "Manufacturing businesses",
    line: "Units in Ambattur, Guindy and Sriperumbudur deal with e-way bills, job work and input credit on raw materials every month.",
  },
  {
    icon: "Store",
    title: "Retail businesses",
    line: "Shops in T. Nagar and Purasawalkam often weigh the composition scheme against regular GST to keep compliance simple.",
  },
  {
    icon: "Ship",
    title: "Export businesses",
    line: "Exporters using Chennai Port and the airport file an LUT to ship without paying IGST, and claim refunds on input credit.",
  },
  {
    icon: "Laptop",
    title: "IT companies",
    line: "IT and SaaS firms on OMR exporting services need an LUT and correct place-of-supply rules for overseas clients.",
  },
  {
    icon: "Briefcase",
    title: "Service providers",
    line: "In Tamil Nadu, service providers must register once annual turnover crosses ₹20 lakh. Many register earlier so business clients can claim input credit.",
  },
  {
    icon: "Rocket",
    title: "Startups",
    line: "Startups selling online or across states usually need GST from day one, even below the turnover threshold.",
  },
] as const;

/* Section 12 · FAQ ---------------------------------------------------- */

export const faqs = [
  {
    q: "Why should I hire a GST consultant in Chennai?",
    a: "A GST consultant makes sure you register under the right scheme, file every return on time, claim all your input tax credit and reply to notices correctly. It saves you late fees, interest and lost credit, and frees up your time to run the business.",
  },
  {
    q: "Who needs GST registration in Tamil Nadu?",
    a: "Businesses supplying goods must register once annual turnover crosses ₹40 lakh, and service providers once it crosses ₹20 lakh. Registration is mandatory regardless of turnover for inter-state supply of goods, most ecommerce sellers and a few other cases. Our GST registration consultants in Chennai check which rule applies to you.",
  },
  {
    q: "How long does GST registration take in Chennai?",
    a: "Most applications are approved in 3 to 7 working days after filing, when Aadhaar authentication is done and documents are in order. It can take longer if the officer asks for clarification or a physical verification of your premises.",
  },
  {
    q: "Which GST returns do I need to file?",
    a: "Regular taxpayers file GSTR-1 for sales and GSTR-3B for the tax summary, monthly or quarterly under the QRMP scheme (turnover up to ₹5 crore). Composition taxpayers file CMP-08 every quarter and GSTR-4 once a year. GSTR-9, the annual return, is mandatory above ₹2 crore turnover.",
  },
  {
    q: "What happens if I file GST returns late?",
    a: "A late fee applies for every day of delay (lower for nil returns), up to a cap, plus 18% annual interest on any tax paid late. Not filing GSTR-3B for a while can also block your e-way bills. Our GST filing services in Chennai keep you ahead of every due date.",
  },
  {
    q: "Do you offer GST return filing services for small businesses?",
    a: "Yes. We file GSTR-1 and GSTR-3B for shops, service providers, ecommerce sellers and small manufacturers, monthly or quarterly. You share your sales and purchase details on WhatsApp or email, and we confirm each filing.",
  },
  {
    q: "I received a GST notice. What should I do?",
    a: "Don't ignore it. Note the reply deadline on the notice, which is often 15 to 30 days, and send it to us. We explain what the department is asking for, prepare the reply with supporting documents and file it before the deadline.",
  },
  {
    q: "How do I amend my GST registration?",
    a: "Changes to core details, such as business name, address or partners, are filed as an amendment application and approved by the officer, usually within 15 working days. Non-core details, like email or phone, update without approval. We file the amendment with the right proof.",
  },
  {
    q: "How do I cancel my GST registration?",
    a: "You apply for cancellation on the GST portal after filing any pending returns. Once the cancellation is approved, a final return (GSTR-10) must be filed within three months. We handle the whole process so no late fees are left behind.",
  },
  {
    q: "Can I get a GST refund?",
    a: "Refunds are available in specific cases, such as exports under an LUT, an inverted duty structure where input tax is higher than output tax, or excess tax paid. We check whether you qualify before filing the claim.",
  },
  {
    q: "What is a GST LUT and who needs it?",
    a: "A Letter of Undertaking lets exporters of goods and services supply without paying IGST upfront. It is filed online at the start of each financial year. If you export, including IT and consulting services to overseas clients, you most likely need one.",
  },
  {
    q: "Do you provide GST services outside Chennai?",
    a: "Yes. Our GST services are fully online, so we support businesses across India. You share documents digitally, approve filings on WhatsApp and get confirmations by email.",
  },
];

/* Section 13 · Final CTA ---------------------------------------------- */

export const finalCta = {
  title: "Need GST support in Chennai?",
  sub: "Speak with a GST consultant today and get clear guidance on registration, filing and compliance.",
  message: "Hi National Filings, I need GST support. Please guide me.",
};
