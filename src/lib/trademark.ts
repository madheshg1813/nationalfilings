import { licences, pillars, serviceHref } from "./routes";

/**
 * P5 · Trademark Registration pillar (/chennai/trademark-registration). Same framework as the Company Registration pillar;
 * the Packages slot holds Registered trademark vs Unregistered brand, and two trademark-only sections (classes, objections)
 * follow the mistakes.
 * Primary keyword: "trademark registration in chennai".
 * Secondary: trademark registration chennai, trademark consultant chennai, trademark filing chennai, brand name registration
 * chennai, trademark renewal chennai, trademark application chennai, trademark objection reply, intellectual property registration.
 *
 * Honesty rules for this page: no prices (government fees depend on applicant type and classes, so they're quoted after a call),
 * every timeline is an estimate because the Trade Marks Registry sets the pace, and no promise that a mark will be registered.
 */

export const pillar = pillars.find((p) => p.id === "P5")!;
const byId = (id: string) => pillars.find((p) => p.id === id)!;

export const paths = {
  copyright: serviceHref(pillar.clusters.find((c) => c.id === "P5-C1")!),
  company: serviceHref(byId("P1")),
  gst: serviceHref(byId("P2")),
  msme: serviceHref(licences.find((l) => l.id === "L1")!),
};

export const SERVICE = "Trademark Registration"; // must match a contact form option (pillar label)
export const CALL_LABEL = "Talk to a trademark expert";

export const hero = {
  // H1 carries the primary keyword "trademark registration in Chennai"
  headline: { line1: "Trademark Registration", line2Before: "", accent: "in Chennai" },
  sub: "Protect your brand name, logo, slogan and business identity with professional trademark registration and intellectual property support.",
  badges: ["Trademark Filing Support", "Brand Protection Experts", "Objection Reply Assistance", "Dedicated IP Consultants"],
  whatsapp: "Hi National Filings, I'd like a WhatsApp consultation about registering my trademark.",
};

/* Section 1 · Service types ----------------------------------------- */

export type TrademarkService = {
  id: string;
  name: string;
  icon: "Stamp" | "Palette" | "Type" | "RefreshCw" | "FileWarning" | "ArrowLeftRight" | "SearchCheck" | "ShieldCheck";
  bestFor: string;
  advantages: string[];
  href: string;
  linkLabel: string;
  /** Small tag on the highlighted card */
  tag?: string;
};


export const services: TrademarkService[] = [
  {
    id: "registration",
    name: "Trademark Registration",
    icon: "Stamp",
    bestFor: "Any business that wants to own its brand name and stop others from using it",
    advantages: ["Search, filing and follow-up in one place", "Right classes chosen for what you sell", "Use ™ from the day you file"],
    href: "#process",
    linkLabel: "how trademark registration works",
    tag: "Start here",
  },
  {
    id: "logo",
    name: "Logo Trademark Registration",
    icon: "Palette",
    bestFor: "Brands whose logo or symbol is a key part of their identity",
    advantages: ["Logo filed as a device mark", "Colours and elements described correctly", "Can be filed alongside the word mark"],
    href: "" /* no page yet: plain card until one is published */,
    linkLabel: "Logo trademark registration",
  },
  {
    id: "word",
    name: "Word Mark Registration",
    icon: "Type",
    bestFor: "Brand names you want protected in any font, style or colour",
    advantages: ["Broadest protection for the name", "Covers how the name is written and spoken", "Works across packaging, websites and ads"],
    href: "" /* no page yet: plain card until one is published */,
    linkLabel: "Word mark registration",
  },
  {
    id: "renewal",
    name: "Trademark Renewal",
    icon: "RefreshCw",
    bestFor: "Registered marks nearing the end of their 10-year term",
    advantages: ["Renewal filed before expiry", "Late renewal and restoration options checked", "Reminder set for the next renewal"],
    href: "" /* no page yet: plain card until one is published */,
    linkLabel: "Trademark renewal",
  },
  {
    id: "objection",
    name: "Trademark Objection Reply",
    icon: "FileWarning",
    bestFor: "Applicants who have received an examination report",
    advantages: ["Objection explained in plain words", "Reply drafted with arguments and evidence", "Filed within the deadline"],
    href: "#objection",
    linkLabel: "trademark objection reply",
  },
  {
    id: "assignment",
    name: "Trademark Assignment",
    icon: "ArrowLeftRight",
    bestFor: "Owners transferring or selling a trademark, or moving it into a company",
    advantages: ["Assignment deed drafted", "Change recorded with the registry", "Ownership records kept clean"],
    href: "" /* no page yet: plain card until one is published */,
    linkLabel: "Trademark assignment",
  },
  {
    id: "search",
    name: "Trademark Search",
    icon: "SearchCheck",
    bestFor: "Founders choosing a new brand name before investing in it",
    advantages: ["Identical and similar marks checked", "Risk explained before you file", "Stronger alternatives suggested"],
    href: "" /* no page yet: plain card until one is published */,
    linkLabel: "Trademark search",
  },
  {
    id: "protection",
    name: "Brand Protection Support",
    icon: "ShieldCheck",
    bestFor: "Brands facing copycats or similar new applications",
    advantages: ["Trade Marks Journal watch", "Oppositions to similar applications", "Help with cease-and-desist notices"],
    href: "" /* no page yet: plain card until one is published */,
    linkLabel: "Brand protection support",
  },
];

/* Section 2 · Who we help (local relevance) --------------------------- */

export const audienceIntro =
  "Chennai's businesses range from IT and SaaS startups to manufacturers, exporters, agencies and online sellers. Whatever you sell, your brand name is one of your most valuable assets, and registering it early keeps it yours.";

/** Photos: Unsplash licence (free commercial use, no attribution required; credits kept for reference) */
export const audiences = [
  { icon: "Rocket", title: "Startups", image: "https://images.unsplash.com/photo-1781246212288-7fa538344718?auto=format&fit=crop&w=1600&q=90", alt: "Startup team working around a conference table", credit: "Ngital / Unsplash" }, // unsplash.com/@ngital
  { icon: "Store", title: "Small businesses", image: "https://images.unsplash.com/photo-1788284017356-3fc6ea2cc49f?auto=format&fit=crop&w=1600&q=90", alt: "Two men running a produce stall", credit: "Govind M / Unsplash" }, // unsplash.com/@gondya
  { icon: "ShoppingCart", title: "Ecommerce brands", image: "https://images.unsplash.com/photo-1786026632781-5d580ee117c6?auto=format&fit=crop&w=1600&q=90", alt: "Seller labelling a parcel for delivery", credit: "GB The Green Brand / Unsplash" }, // unsplash.com/@gb_the_green_brand
  { icon: "Factory", title: "Manufacturers", image: "https://images.unsplash.com/photo-1668243304566-2e78ebd48960?auto=format&fit=crop&w=1600&q=90", alt: "Plant workers in safety vests and helmets", credit: "Bhupathi Srinu / Unsplash" }, // unsplash.com/@bhupathi_
  { icon: "Megaphone", title: "Agencies", image: "https://images.unsplash.com/photo-1681164315051-add1906a9b07?auto=format&fit=crop&w=1600&q=90", alt: "Agency team working at laptops", credit: "Ofspace LLC / Unsplash" }, // unsplash.com/@ofspace
  { icon: "Briefcase", title: "Consultants", image: "https://images.unsplash.com/photo-1653503425441-9d975e51ce91?auto=format&fit=crop&w=1600&q=90", alt: "Consultant discussing a plan on a laptop", credit: "Yash Parashar / Unsplash" }, // unsplash.com/@lookforyash
  { icon: "Ship", title: "Export businesses", image: "https://images.unsplash.com/photo-1759272548457-12b8580bfca7?auto=format&fit=crop&w=1600&q=90", alt: "Container ship being loaded at a port", credit: "Haris Illahi / Unsplash" }, // unsplash.com/@harisillahi
  { icon: "TrendingUp", title: "Growing brands", image: "https://images.unsplash.com/photo-1633533447057-56ccf997f4fe?auto=format&fit=crop&w=1600&q=90", alt: "Branded coffee packaging next to a cup", credit: "MK +2 / Unsplash" }, // unsplash.com/@mkmasdos
] as const;

export const benefits = [
  { icon: "BadgeCheck", title: "Exclusive brand rights", line: "Only you can use the mark for your registered goods or services." },
  { icon: "Scale", title: "Legal protection", line: "Take infringement action, with registration as proof of ownership." },
  { icon: "Award", title: "Business credibility", line: "The ® symbol signals an established, protected brand." },
  { icon: "Sparkles", title: "Brand recognition", line: "Customers learn to trust a name that stays consistently yours." },
  { icon: "ShieldCheck", title: "Protection against copycats", line: "Act against look-alike names and oppose similar new filings." },
  { icon: "Gem", title: "Valuable business asset", line: "A registered mark can be licensed, sold or used to raise funds." },
  { icon: "MapPinned", title: "Nationwide protection", line: "One registration protects your brand across India." },
  { icon: "RefreshCw", title: "Long-term brand security", line: "Renewable every 10 years, for as long as you use it." },
] as const;

export const audienceCta = {
  title: "Planning to launch a brand in Chennai?",
  sub: "Tell us your brand name, what you sell and where. We'll check it's available and suggest the right classes before you invest in it.",
  message: "Hi National Filings, I'm launching a brand and want to check if the name is available for trademark registration.",
};

/* Section 3 · Process ---------------------------------------------- */

export const timeline = [
  { title: "Consultation", time: "Day 1", sub: "We understand your brand, what you sell and where you plan to sell it." },
  { title: "Trademark search", time: "1-2 days", sub: "We search the register for identical and similar marks and explain the risk." },
  { title: "Application preparation", time: "1-2 days", sub: "We choose the classes, draft the description of goods or services and prepare the documents." },
  { title: "Trademark filing", time: "Same day", sub: "Filed online with the Trade Marks Registry. You get an application number and can use ™." },
  { title: "Examination review", time: "Usually a few months", sub: "The registry examines the application. If an objection is raised, we draft the reply." },
  { title: "Registration certificate", time: "After publication", sub: "Once accepted and published without opposition, the certificate is issued and you can use ®." },
];

export const timelineNote =
  "Without objections or opposition, registration often takes around 6 to 12 months; objections or opposition can add more time. You can use ™ from the filing date, and once registered, protection counts from the date you filed.";

export const processCta = {
  title: "Ready to protect your brand?",
  sub: "Talk to a trademark expert and check your brand name before filing.",
  ticks: ["Trademark Filing Support", "Brand Protection Experts", "Objection Reply Assistance", "Dedicated IP Consultants"],
  message: "Hi National Filings, I'm ready to file my trademark. Can you check my brand name first?",
};

/* Section 4 · What's included -------------------------------------- */

export const included = [
  { icon: "SearchCheck", title: "Trademark availability search", line: "Identical and similar marks checked." },
  { icon: "FileSignature", title: "Application drafting", line: "Classes and descriptions written carefully." },
  { icon: "Send", title: "Trademark filing", line: "Filed online with the Trade Marks Registry." },
  { icon: "Landmark", title: "Government follow-up", line: "Registry notices handled on time." },
  { icon: "Activity", title: "Status tracking", line: "Your application watched at every stage." },
  { icon: "BadgeCheck", title: "Registration support", line: "Until your certificate is issued." },
  { icon: "Headset", title: "Expert consultation", line: "One trademark expert, start to finish." },
  { icon: "MessageCircle", title: "WhatsApp updates", line: "Status updates at every step." },
] as const;

export const includedCta = {
  title: "Ready to register your trademark?",
  sub: "Talk to an expert, Monday to Saturday.",
};

/* Section 5 · Documents -------------------------------------------- */

export const documents = [
  {
    icon: "UserRound",
    title: "For individuals",
    items: ["PAN card", "Aadhaar card", "Address proof", "Brand name"],
    hint: "Sole proprietors file in the owner's own name.",
  },
  {
    icon: "Building2",
    title: "For companies",
    items: ["PAN card", "GST certificate", "Incorporation certificate", "Authorised signatory details"],
    hint: "Companies and LLPs file in the entity's name. An Udyam certificate, if you have one, may qualify you for lower government fees.",
  },
  {
    icon: "FileText",
    title: "For trademark filing",
    items: ["Brand name", "Logo (if applicable)", "Business activity description", "Power of attorney (if required)"],
    hint: "If you already use the brand, share the date of first use and some proof, such as invoices or ads.",
  },
] as const;

export const documentsHelp = {
  title: "Don't have all documents ready?",
  sub: "You can start with just your brand name and PAN. Our team will tell you what else is needed.",
  message: "Hi National Filings, I'd like to send my details for trademark registration.",
};

/* Section 6 · Registered trademark vs unregistered brand (in the Packages slot) */

export const sides = [
  { id: "registered", name: "Registered trademark", icon: "ShieldCheck", good: true },
  { id: "unregistered", name: "Unregistered brand", icon: "ShieldOff", good: false },
] as const;

/** One row per criterion; values follow the `sides` order */
export const comparison: { label: string; icon: string; values: [string, string] }[] = [
  { label: "Legal protection", icon: "Scale", values: ["Statutory protection under the Trade Marks Act, 1999", "Only common-law rights, which you must prove"] },
  { label: "Exclusive rights", icon: "BadgeCheck", values: ["Exclusive right to the mark for your registered goods or services", "No exclusive right; someone else may register a similar mark"] },
  { label: "Brand value", icon: "Gem", values: ["A recognised asset that can be licensed, sold or valued", "Hard to value, license or sell"] },
  { label: "Copycat protection", icon: "Copy", values: ["Act against look-alikes and oppose similar new filings", "Copycats can trade freely, and may register your name first"] },
  { label: "Business credibility", icon: "Award", values: ["The ® symbol signals an established brand", "No proof of ownership to show clients"] },
  { label: "Legal enforcement", icon: "Gavel", values: ["Infringement action, with the registration as evidence", "Only a passing-off claim, where you must prove reputation and harm"] },
  { label: "Marketplace trust", icon: "ShoppingCart", values: ["Supports brand protection programmes on major online marketplaces", "Limited options to remove fake or copycat listings"] },
  { label: "Investment readiness", icon: "TrendingUp", values: ["Investors and buyers can verify you own the brand", "Ownership questions can come up in due diligence"] },
];

export const recommendation = {
  title: "Our recommendation",
  text: "Register your trademark as soon as you settle on a brand name. You can use ™ from the day you file, and once registered, protection counts from your filing date.",
  message: "Hi National Filings, I'd like to register my trademark. Can you check my brand name?",
};

/* Section 8 · Mistakes ---------------------------------------------- */

export const mistakes = [
  {
    icon: "SearchX",
    fixIcon: "SearchCheck",
    title: "Skipping trademark search",
    problem: "Filing without checking for identical or similar existing marks.",
    impact: "An objection or opposition on similarity, months lost, and possibly a rebrand.",
    fix: "We search the register for identical and similar marks before filing.",
  },
  {
    icon: "Type",
    fixIcon: "Sparkles",
    title: "Choosing generic brand names",
    problem: "Descriptive names like \"Best Coffee\" or \"Chennai Software\".",
    impact: "Objected to as non-distinctive, and hard to protect even if accepted.",
    fix: "We assess how distinctive the name is and suggest stronger options.",
  },
  {
    icon: "Layers",
    fixIcon: "ListChecks",
    title: "Filing under the wrong class",
    problem: "Classes that don't cover what you actually sell.",
    impact: "Your brand stays unprotected where it matters, and fixing it needs a new application.",
    fix: "We map your products and services to the right classes and descriptions.",
  },
  {
    icon: "FileWarning",
    fixIcon: "FileCheck2",
    title: "Incomplete application details",
    problem: "Wrong applicant name, a missing date of first use, or an unclear description.",
    impact: "Objections, delays, or rights recorded in the wrong name.",
    fix: "We check every detail against your documents before filing.",
  },
  {
    icon: "BellOff",
    fixIcon: "CalendarCheck",
    title: "Ignoring trademark objections",
    problem: "Missing the deadline to reply to an examination report.",
    impact: "The application can be treated as abandoned.",
    fix: "We track every deadline and draft the reply for you.",
  },
  {
    icon: "Hourglass",
    fixIcon: "ShieldCheck",
    title: "Delaying brand protection",
    problem: "Waiting until the brand is successful before filing.",
    impact: "Someone else may file first, and rebranding later is costly.",
    fix: "We help you file early, so ™ protects your brand from day one.",
  },
] as const;

export const reviewChecks = ["Trademark search", "Class selection", "Description review", "Document verification"];

export const reviewCta = {
  title: "Need a pre-filing review?",
  sub: "Send your brand name and logo on WhatsApp and our team will check them before filing.",
  badges: ["No obligation review", "Business hours response"],
  message: "Hi National Filings, I'd like a pre-filing review of my brand name for trademark registration.",
};

/* Section 9 · Choosing the right trademark class (trademark pages only) */

export const classIntro = [
  { icon: "Package", title: "Products: Classes 1-34", line: "For goods you make or sell, such as clothing, food, cosmetics, machinery or electronics." },
  { icon: "Handshake", title: "Services: Classes 35-45", line: "For work you do for others, such as retail, software services, education, healthcare or consulting." },
] as const;

export const popularClasses = [
  { no: 9, title: "Software & electronics", examples: "Mobile apps, downloadable software, computers and accessories" },
  { no: 25, title: "Clothing & footwear", examples: "Apparel, shoes, headwear and fashion brands" },
  { no: 30, title: "Food staples", examples: "Coffee, tea, rice, bakery items, spices and sauces" },
  { no: 35, title: "Business & retail", examples: "Retail and online stores, advertising, business consulting" },
  { no: 41, title: "Education & entertainment", examples: "Coaching centres, schools, training, events and online courses" },
  { no: 42, title: "Software services & IT", examples: "SaaS, software development, IT consulting and web design" },
] as const;

export const classTips = [
  "List everything you sell today and plan to sell in the next few years.",
  "Many businesses need more than one class: a clothing brand that also runs an online store may file Class 25 and Class 35.",
  "Each class is a separate government fee, so file where you actually trade.",
  "Use the registry's accepted descriptions where possible to avoid objections.",
];

export const classCta = {
  title: "Not sure which class fits your business?",
  sub: "Tell us what you sell and we'll confirm the classes before filing.",
  message: "Hi National Filings, which trademark class should I file my brand under?",
};

/* Section 10 · Trademark objection reply (trademark pages only) ------- */

export const objection = {
  what: "After you file, an examiner checks your application and may raise an objection in an examination report. An objection is not a rejection: you can reply with arguments and evidence and, if needed, attend a hearing.",
  reasons: [
    { icon: "Copy", title: "Similar to an existing mark", line: "Your mark looks or sounds like one already filed for related goods or services." },
    { icon: "Type", title: "Descriptive or generic name", line: "The name describes the product or its quality instead of identifying your brand." },
    { icon: "Layers", title: "Wrong class or unclear description", line: "The goods or services listed are vague or don't match the class." },
    { icon: "FileWarning", title: "Missing or incorrect details", line: "For example, no proof of the claimed date of first use or a missing power of attorney." },
  ],
  steps: [
    { title: "Examination report issued", sub: "It lists each objection and the grounds it is raised on." },
    { title: "Reply, usually within 30 days", sub: "A written reply with legal arguments and evidence, filed online." },
    { title: "Hearing, if needed", sub: "If the reply isn't accepted, the registry schedules a hearing, often held online." },
    { title: "Acceptance and publication", sub: "The mark is published in the Trade Marks Journal for a four-month opposition window." },
  ],
  help: ["Objection explained in plain words", "Reply drafted with arguments and evidence", "Filed before the deadline", "Support through the hearing"],
  message: "Hi National Filings, I've received a trademark objection and need help with the reply.",
};

/* Section 11 · FAQ (secondary keywords in the questions) -------------- */

export const faqs = [
  {
    q: "How long does trademark registration in Chennai take?",
    a: "The application is filed within a few days of finalising your details, and you can use ™ from then. If there are no objections or opposition, registration often takes around 6 to 12 months; objections or opposition can add more time. Protection counts from your filing date once registered.",
  },
  {
    q: "Can I trademark my logo?",
    a: "Yes. Logo trademark registration protects the design as a device mark. If your brand name appears in the logo, consider also filing the name as a word mark, which protects it in any style.",
  },
  {
    q: "Can I trademark my business name?",
    a: "Yes, if it is distinctive and not similar to an existing mark for related goods or services. Brand name registration in Chennai starts with a search to check this. Registering a company name with the MCA does not give you trademark rights; they are separate.",
  },
  {
    q: "What is a trademark class?",
    a: "Goods and services are grouped into 45 classes: 1 to 34 for products and 35 to 45 for services. Your trademark is protected only in the classes you file in, so choosing the right classes matters. We map what you sell to the correct classes.",
  },
  {
    q: "What happens if someone copies my brand?",
    a: "With a registered trademark you can send a legal notice and take infringement action, with the registration as proof of ownership. Without registration you can only rely on a passing-off claim, where you have to prove your reputation and the harm caused.",
  },
  {
    q: "What is a trademark objection?",
    a: "An objection is raised by the examiner in the examination report, often because the mark is similar to an existing one or too descriptive. You can reply, usually within 30 days, and attend a hearing if needed. Our trademark objection reply service drafts and files the response.",
  },
  {
    q: "How long is trademark protection valid?",
    a: "A registered trademark is valid for 10 years from the filing date and can be renewed every 10 years, indefinitely, as long as you renew on time.",
  },
  {
    q: "How does trademark renewal in Chennai work?",
    a: "Renewal can be filed up to a year before the expiry date. A short grace period after expiry is available with an extra fee, and after that restoration may still be possible. We track your renewal date and file before it lapses.",
  },
  {
    q: "When can I use the ™ and ® symbols?",
    a: "You can use ™ as soon as your trademark application is filed. The ® symbol can only be used after the trademark is registered; using it earlier is not allowed.",
  },
  {
    q: "How much does trademark filing in Chennai cost?",
    a: "The government fee depends on who is applying (it is lower for individuals, startups and small enterprises) and on the number of classes. Our professional fee is separate. We share an itemised quote, with government fees shown separately, before filing.",
  },
  {
    q: "Should I register a word mark or a logo?",
    a: "A word mark protects the name itself in any font or colour, which is usually the broadest protection. A logo mark protects the design. Many brands file both, starting with the word mark.",
  },
  {
    q: "Does a trademark registered in Chennai protect my brand across India?",
    a: "Yes. Trademark registration protects your brand across India, wherever you are based. Protection abroad needs separate filings, for example through the Madrid system.",
  },
  {
    q: "What is trademark opposition?",
    a: "After your application is accepted, it is published in the Trade Marks Journal. Anyone can oppose it within four months. If no one opposes, it proceeds to registration; if someone does, both sides file evidence and the registry decides.",
  },
  {
    q: "Can I file a trademark application before starting my business?",
    a: "Yes. A trademark application in Chennai can be filed on a \"proposed to be used\" basis, so you can protect a brand name before launch. Filing early is the best way to make sure no one registers it first.",
  },
];

/* CTAs ---------------------------------------------------------------- */

export const messages = {
  final: "Hi National Filings, I'd like to register my trademark. Please guide me.",
};

export const finalCta = {
  // the brief's heading, with Chennai worked in for the every-H2-names-the-city rule
  title: "Protect your Chennai brand before someone else registers it",
  sub: "Speak with a trademark expert and secure your brand identity with professional trademark registration support.",
};

/* Section 12 · Related services ------------------------------------- */

export const related = [
  { icon: "Copyright", label: "Copyright registration", href: paths.copyright },
  { icon: "Briefcase", label: "Company registration", href: paths.company },
  { icon: "ReceiptIndianRupee", label: "GST registration", href: paths.gst },
  { icon: "Factory", label: "MSME registration", href: paths.msme },
  { icon: "FileWarning", label: "Trademark objection reply", href: "#objection" },
] as const;
