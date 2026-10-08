import { pillars, serviceHref } from "./routes";

/**
 * P4 · NGO Registration pillar (/chennai/ngo-registration). Same framework as the Company Registration pillar;
 * the Packages slot holds the Trust vs Society vs Section 8 comparison, and an NGO compliance section follows the mistakes.
 * Primary keyword: "ngo registration in chennai".
 * Secondary: trust registration in chennai, society registration in chennai, section 8 company registration chennai,
 * ngo consultant chennai, charitable trust registration chennai, ngo compliance services chennai.
 *
 * Honesty rules for this page: no prices (stamp duty and fees are quoted after a call), every timeline is an estimate because
 * the registrar, MCA and Income Tax Department set the pace, and no promise that 12A, 80G or CSR eligibility will be granted.
 */

export const pillar = pillars.find((p) => p.id === "P4")!;
const cluster = (id: string) => serviceHref(pillar.clusters.find((c) => c.id === id)!);

export const paths = {
  trust: cluster("P4-C1"),
  society: cluster("P4-C2"),
  section8: cluster("P4-C3"),
  exemptions: cluster("P4-C4"),
  company: serviceHref(pillars.find((p) => p.id === "P1")!),
};

export const SERVICE = "NGO Registration"; // must match a contact form option (pillar label)
export const CALL_LABEL = "Talk to an NGO expert";

export const hero = {
  // H1 carries the primary keyword "NGO registration in Chennai"
  headline: { line1: "NGO Registration", line2Before: "", accent: "in Chennai" },
  sub: "Start your NGO, Trust, Society or Section 8 Company with expert guidance on registration, documentation and compliance.",
  badges: ["Trust Registration Support", "Society Registration Assistance", "Section 8 Company Experts", "Dedicated Compliance Team"],
  whatsapp: "Hi National Filings, I'd like a WhatsApp consultation about registering an NGO.",
};

/* Section 1 · Service types ----------------------------------------- */

export type NgoService = {
  id: string;
  name: string;
  icon: "ScrollText" | "Users" | "Building2" | "ReceiptIndianRupee" | "ShieldCheck" | "Handshake" | "ClipboardCheck" | "CalendarCheck";
  bestFor: string;
  advantages: string[];
  href: string;
  linkLabel: string;
  /** Small tag on the highlighted card */
  tag?: string;
};


export const services: NgoService[] = [
  {
    id: "trust",
    name: "Trust Registration",
    icon: "ScrollText",
    bestFor: "Founders, families and communities running a charity with a small, trusted group",
    advantages: ["Trust deed drafted and registered", "Quick to set up with few trustees", "Simple day-to-day management"],
    href: paths.trust,
    linkLabel: "Trust registration",
    tag: "Quickest to set up",
  },
  {
    id: "society",
    name: "Society Registration",
    icon: "Users",
    bestFor: "Membership-based groups such as associations, clubs and community bodies",
    advantages: ["Memorandum and bylaws drafted", "Elected governing body", "Registered under the Tamil Nadu Societies Act"],
    href: paths.society,
    linkLabel: "Society registration",
  },
  {
    id: "section8",
    name: "Section 8 Company Registration",
    icon: "Building2",
    bestFor: "Larger NGOs looking for CSR partners, grants and the highest credibility",
    advantages: ["Licence and incorporation through the MCA", "Separate legal entity with limited liability", "Widely trusted by CSR funders"],
    href: paths.section8,
    linkLabel: "Section 8 company registration",
  },
  {
    id: "80g",
    name: "80G Registration",
    icon: "ReceiptIndianRupee",
    bestFor: "NGOs that want donors to claim a tax deduction on donations",
    advantages: ["Application filed with the Income Tax Department", "Provisional approval for new NGOs", "Donation receipts set up correctly"],
    href: paths.exemptions,
    linkLabel: "80G registration",
  },
  {
    id: "12a",
    name: "12A Registration",
    icon: "ShieldCheck",
    bestFor: "NGOs that want income used for their objects exempt from tax",
    advantages: ["Application filed with supporting documents", "Provisional and regular registration handled", "Renewal dates tracked for you"],
    href: paths.exemptions,
    linkLabel: "12A registration",
  },
  {
    id: "csr",
    name: "CSR Registration Support",
    icon: "Handshake",
    bestFor: "NGOs preparing to receive CSR funds from companies",
    advantages: ["CSR-1 registration with the MCA", "Eligibility checked before you apply", "Documents CSR partners ask for"],
    href: "" /* no page yet: plain card until one is published */,
    linkLabel: "CSR registration support",
  },
  {
    id: "compliance",
    name: "NGO Compliance",
    icon: "ClipboardCheck",
    bestFor: "Registered NGOs that need records and approvals kept up to date",
    advantages: ["Books and audit coordinated", "Meeting minutes and registers", "Trustee and member changes recorded"],
    href: "" /* no page yet: plain card until one is published */,
    linkLabel: "NGO compliance",
  },
  {
    id: "annual",
    name: "Annual Filings",
    icon: "CalendarCheck",
    bestFor: "Trusts, societies and Section 8 companies with yearly deadlines",
    advantages: ["NGO income tax return filed", "Audit report filed on time", "Registrar or ROC annual returns"],
    href: "" /* no page yet: plain card until one is published */,
    linkLabel: "NGO annual filings",
  },
];

/* Section 2 · Who we help (local relevance) --------------------------- */

export const audienceIntro =
  "Chennai has a long tradition of charitable work, from temple trusts and school foundations to health, women's welfare and environmental groups. Each kind of organisation suits a different structure, and we help you pick and register the right one.";

/** Photos: Unsplash licence (free commercial use, no attribution required; credits kept for reference) */
export const audiences = [
  { icon: "GraduationCap", title: "Educational trusts", image: "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?auto=format&fit=crop&w=1600&q=90", alt: "Smiling schoolchildren in uniform", credit: "Church of the King / Unsplash" }, // unsplash.com/@cotk_photo
  { icon: "Landmark", title: "Religious organisations", image: "https://images.unsplash.com/photo-1692173248120-59547c3d4653?auto=format&fit=crop&w=1600&q=90", alt: "South Indian temple tower among trees", credit: "Priya Singh / Unsplash" }, // unsplash.com/@acolourfulnoise
  { icon: "HeartHandshake", title: "Charitable foundations", image: "https://images.unsplash.com/photo-1700064241807-8a5e07b117c2?auto=format&fit=crop&w=1600&q=90", alt: "People receiving blankets at a distribution drive", credit: "Dibakar Roy / Unsplash" }, // unsplash.com/@dibakar16roy
  { icon: "Stethoscope", title: "Healthcare NGOs", image: "https://images.unsplash.com/photo-1667577113456-34c59803de33?auto=format&fit=crop&w=1600&q=90", alt: "Women wearing face masks standing in line", credit: "Bhupathi Srinu / Unsplash" }, // unsplash.com/@bhupathi_
  { icon: "Users", title: "Women welfare organisations", image: "https://images.unsplash.com/photo-1708593337380-6f97a307696f?auto=format&fit=crop&w=1600&q=90", alt: "Group of women sitting together at a meeting", credit: "EqualStock / Unsplash" }, // unsplash.com/@equalstock
  { icon: "Tractor", title: "Rural development NGOs", image: "https://images.unsplash.com/photo-1758390286125-bd31d5c8f592?auto=format&fit=crop&w=1600&q=90", alt: "Women farmers with bags of produce", credit: "Rohit Dey / Unsplash" }, // unsplash.com/@rohit16dey
  { icon: "Sprout", title: "Environmental NGOs", image: "https://images.unsplash.com/photo-1708592955349-d33fce7a41ac?auto=format&fit=crop&w=1600&q=90", alt: "Women planting a tree", credit: "EqualStock / Unsplash" }, // unsplash.com/@equalstock
  { icon: "Handshake", title: "CSR initiatives", image: "https://images.unsplash.com/photo-1659451336016-00d62d32f677?auto=format&fit=crop&w=1600&q=90", alt: "Village children smiling in a field", credit: "Divyanshi Verma / Unsplash" }, // unsplash.com/@milimilism
] as const;

export const benefits = [
  { icon: "BadgeCheck", title: "Legal recognition", line: "Own property, sign agreements and open a bank account in the NGO's name." },
  { icon: "HeartHandshake", title: "Eligibility for donations", line: "Donors and institutions prefer to give to registered organisations." },
  { icon: "Handshake", title: "Access to CSR funding", line: "With 12A, 80G and CSR-1, companies can fund your projects." },
  { icon: "ShieldCheck", title: "Tax exemptions", line: "With 12A, income used for the NGO's objects is exempt from tax." },
  { icon: "Landmark", title: "Government grant eligibility", line: "Many government schemes fund only registered organisations." },
  { icon: "Award", title: "Improved credibility", line: "Registration and audited accounts build trust with donors." },
  { icon: "Network", title: "Structured governance", line: "Clear roles for trustees, members or directors from day one." },
  { icon: "Sprout", title: "Long-term sustainability", line: "The organisation continues beyond its founders." },
] as const;

export const audienceCta = {
  title: "Planning to start an NGO in Chennai?",
  sub: "Tell us your cause, how many founders you have and how you plan to raise funds. We'll suggest the structure that fits.",
  message: "Hi National Filings, I'm planning to start an NGO in Chennai and need help choosing the right structure.",
};

/* Section 3 · Process ---------------------------------------------- */

export const timeline = [
  { title: "Consultation", time: "Day 1", sub: "We understand your cause, founders and funding plans." },
  { title: "Structure selection", time: "1-2 days", sub: "Trust, society or Section 8 company: we explain the trade-offs and recommend one." },
  { title: "Document collection", time: "2-5 days", sub: "You share ID, address proofs and photos on WhatsApp or email. We check every detail." },
  { title: "Drafting & filing", time: "3-7 days", sub: "We draft the trust deed, bylaws or MoA with you and file the application." },
  { title: "Government processing", time: "1-6 weeks", sub: "The Sub-Registrar, District Registrar or MCA reviews the application. We follow up." },
  { title: "Registration certificate issued", time: "On approval", sub: "You receive the registration certificate, then we apply for 12A and 80G." },
];

export const timelineNote =
  "A trust can often be registered within 1 to 2 weeks of finalising the deed; societies and Section 8 companies usually take longer. 12A and 80G are applied for after registration. Government timelines vary, and we keep you informed at every stage.";

export const processCta = {
  title: "Ready to register your NGO?",
  sub: "Talk to an NGO expert and choose the right structure before filing.",
  ticks: ["Trust Registration Support", "Society Registration Assistance", "Section 8 Company Experts", "Dedicated Compliance Team"],
  message: "Hi National Filings, I'm ready to register my NGO. Can you guide me on the right structure?",
};

/* Section 4 · What's included -------------------------------------- */

export const included = [
  { icon: "Compass", title: "Registration consultation", line: "Your cause, founders and funding plans discussed." },
  { icon: "Scale", title: "Structure recommendation", line: "Trust, society or Section 8, explained clearly." },
  { icon: "FileCheck2", title: "Document verification", line: "Every document checked before filing." },
  { icon: "Send", title: "Application filing", line: "Deed, bylaws or MCA forms prepared and filed." },
  { icon: "Landmark", title: "Government coordination", line: "Follow-up with the registrar or MCA." },
  { icon: "BadgeCheck", title: "Registration certificate support", line: "Until your certificate is issued." },
  { icon: "CalendarCheck", title: "Compliance guidance", line: "12A, 80G and yearly filings explained." },
  { icon: "MessageCircle", title: "WhatsApp updates", line: "Status updates at every step." },
] as const;

export const includedCta = {
  title: "Ready to register your NGO?",
  sub: "Talk to an expert, Monday to Saturday.",
};

/* Section 5 · Documents -------------------------------------------- */

export const documents = [
  {
    icon: "ScrollText",
    title: "For trust registration",
    items: ["PAN of trustees", "Aadhaar", "Address proof", "Passport photos", "Trust deed details"],
    hint: "Usually at least two trustees. The deed sets out your objects, trustees and how the trust is run, and we draft it with you.",
  },
  {
    icon: "Users",
    title: "For society registration",
    items: ["Member details", "Address proof", "ID proofs", "Society name options"],
    hint: "A society in Tamil Nadu needs at least seven members. We help draft the memorandum and bylaws.",
  },
  {
    icon: "Building2",
    title: "For Section 8 company",
    items: ["PAN", "Aadhaar", "Address proof", "Director details", "Proposed objectives"],
    hint: "At least two directors. The objectives go into the MoA, so list everything the NGO may want to do.",
  },
] as const;

export const documentsHelp = {
  title: "Don't have all documents ready?",
  sub: "Our team will guide you on alternative documents and acceptable formats.",
  message: "Hi National Filings, I'd like to send my documents for NGO registration.",
};

/* Section 6 · Trust vs Society vs Section 8 (in the Packages slot) ---- */

export const structures = [
  { id: "trust", name: "Trust", icon: "ScrollText" },
  { id: "society", name: "Society", icon: "Users" },
  { id: "section8", name: "Section 8 Company", icon: "Building2" },
] as const;

/** One row per criterion; values follow the `structures` order */
export const comparison: { label: string; icon: string; values: [string, string, string] }[] = [
  {
    label: "Formation",
    icon: "FileSignature",
    values: [
      "Trust deed registered with the Sub-Registrar",
      "Registered with the District Registrar under the Tamil Nadu Societies Registration Act, 1975",
      "Licence and incorporation through the MCA under the Companies Act, 2013",
    ],
  },
  {
    label: "Governance",
    icon: "Network",
    values: ["Trustees named in the deed, usually at least two", "Elected governing body, at least seven members", "Board of directors, at least two"],
  },
  {
    label: "Funding opportunities",
    icon: "HeartHandshake",
    values: [
      "Donations and grants; 12A and 80G available",
      "Donations, member contributions and grants; 12A and 80G available",
      "Donations, grants and CSR partnerships; 12A and 80G available",
    ],
  },
  {
    label: "Compliance requirements",
    icon: "ClipboardCheck",
    values: [
      "Lightest: accounts, audit where required, income tax return",
      "Moderate: yearly returns to the Registrar, audit, income tax return",
      "Highest: board meetings, statutory audit, ROC filings, income tax return",
    ],
  },
  {
    label: "CSR eligibility",
    icon: "Handshake",
    values: [
      "Yes, with 12A, 80G, CSR-1 and usually a 3-year track record",
      "Yes, with 12A, 80G, CSR-1 and usually a 3-year track record",
      "Yes, on the same conditions; often preferred by companies",
    ],
  },
  {
    label: "Credibility",
    icon: "Award",
    values: ["Good, especially for family and community charities", "Good for membership and community bodies", "Highest, with MCA records and a mandatory audit"],
  },
  {
    label: "Best use cases",
    icon: "Target",
    values: ["Temples, schools, family foundations and small charities", "Associations, clubs, cultural and community groups", "Larger NGOs, CSR-funded programmes and work across states"],
  },
];

export const comparisonCta = {
  title: "Not sure which structure fits your NGO?",
  sub: "A short call about your cause, founders and funding plans is enough to decide.",
  message: "Hi National Filings, I'm not sure whether a trust, society or Section 8 company fits my NGO. Can you help?",
};

/* Section 8 · Mistakes ---------------------------------------------- */

export const mistakes = [
  {
    icon: "Shuffle",
    fixIcon: "Compass",
    title: "Choosing the wrong NGO structure",
    problem: "Picking a trust because it's quick, when the plans need CSR funding or a large membership.",
    impact: "Changing later means registering a new entity and moving assets and approvals across.",
    fix: "We recommend the structure based on your cause, founders and funding plans.",
  },
  {
    icon: "FileWarning",
    fixIcon: "FileCheck2",
    title: "Incomplete documentation",
    problem: "Missing ID or address proofs, or names that don't match across documents.",
    impact: "The application is returned and registration is delayed.",
    fix: "Every document is checked before filing.",
  },
  {
    icon: "CircleHelp",
    fixIcon: "Target",
    title: "Unclear objectives",
    problem: "Objects written too narrowly or too broadly, or mixed with commercial activities.",
    impact: "12A and 80G can be refused, and work outside the objects isn't allowed.",
    fix: "We draft clear charitable objectives that cover your plans.",
  },
  {
    icon: "UserX",
    fixIcon: "Users",
    title: "Improper trustee setup",
    problem: "Too few trustees, no succession rules, or unclear powers in the deed.",
    impact: "A dispute or a trustee leaving can stall decisions and bank operations.",
    fix: "We set out trustee roles, powers and succession in the deed.",
  },
  {
    icon: "BellOff",
    fixIcon: "CalendarCheck",
    title: "Ignoring compliance requirements",
    problem: "Skipping audits, annual returns or the NGO's income tax return after registration.",
    impact: "Penalties, loss of tax exemption, and trouble renewing 12A and 80G.",
    fix: "We share a compliance calendar and file on time.",
  },
  {
    icon: "Ban",
    fixIcon: "ShieldCheck",
    title: "Missing 12A & 80G benefits",
    problem: "Registering the NGO but never applying for 12A and 80G.",
    impact: "The NGO's income may be taxed and donors can't claim a deduction.",
    fix: "We apply for 12A and 80G right after registration.",
  },
] as const;

export const reviewChecks = ["Structure review", "Document verification", "Objectives review", "12A & 80G readiness"];

export const reviewCta = {
  title: "Need a pre-filing review?",
  sub: "Send your draft deed, bylaws or documents on WhatsApp and our team will review them before filing.",
  badges: ["No obligation review", "Business hours response"],
  message: "Hi National Filings, I'd like a pre-filing review of my NGO registration documents.",
};

/* Section 9 · NGO compliance after registration (NGO pages only) ------ */

export const compliance = [
  { icon: "CalendarCheck", title: "Annual filings", line: "The NGO's income tax return each year, with the audit report where required.", when: "Every year" },
  { icon: "ScrollText", title: "Trust compliance", line: "Books of accounts, audit where required, and deed updates when trustees change.", when: "Ongoing" },
  { icon: "Users", title: "Society compliance", line: "General body meeting, governing body list and yearly returns to the Registrar.", when: "Every year" },
  { icon: "Building2", title: "Section 8 compliance", line: "Board meetings, statutory audit, ROC annual filings and director KYC.", when: "Every year" },
  { icon: "ShieldCheck", title: "12A renewals", line: "Provisional registration converted in time, and regular registration renewed before it expires.", when: "Before expiry" },
  { icon: "ReceiptIndianRupee", title: "80G maintenance", line: "Donation receipts issued and donations reported to the Income Tax Department.", when: "Every year" },
  { icon: "Handshake", title: "CSR compliance", line: "Utilisation reports and records that CSR partners need for their own filings.", when: "Per project" },
] as const;

export const complianceCta = {
  title: "Want a compliance calendar for your NGO?",
  sub: "We map every due date for your structure.",
  message: "Hi National Filings, I'd like a compliance calendar for our NGO.",
};

/* Section 10 · FAQ (secondary keywords in the questions) -------------- */

export const faqs = [
  {
    q: "Which NGO structure is best: trust, society or Section 8 company?",
    a: "It depends on your plans. A trust is quickest and simplest for a small group of founders. A society suits membership-based groups that want elected governance. A Section 8 company has the most compliance but the highest credibility, which helps with CSR partners and larger grants. We help you choose on a short call.",
  },
  {
    q: "How long does NGO registration in Chennai take?",
    a: "Trust registration in Chennai can often be done within 1 to 2 weeks of finalising the deed. Society registration and Section 8 company registration usually take a few weeks, depending on the registrar or MCA. 12A and 80G are applied for after registration and take additional time.",
  },
  {
    q: "Can NGOs receive donations?",
    a: "Yes. Registered NGOs can accept donations from individuals and organisations in India. With 80G, donors can claim a tax deduction. Donations from abroad need separate FCRA registration or permission from the Ministry of Home Affairs.",
  },
  {
    q: "What is 80G registration?",
    a: "80G lets people who donate to your NGO claim a deduction on their income tax, usually for 50% of the donation within set limits. Donors can claim it only if they file under the old tax regime. New NGOs first get provisional approval, followed by regular approval later.",
  },
  {
    q: "What is 12A registration?",
    a: "12A registration exempts the NGO's income from tax, as long as it is used for the NGO's charitable objects. New NGOs get provisional registration first, which must be converted to regular registration in time, and regular registration is renewed periodically. Under the new Income-tax Act from April 2026 the section numbers change, but these approvals are still widely called 12A and 80G.",
  },
  {
    q: "Can NGOs receive CSR funding?",
    a: "Yes. Trusts, societies and Section 8 companies can receive CSR funds if they have 12A and 80G, register with the MCA using Form CSR-1, and usually have a three-year track record of charitable work. Many companies prefer Section 8 companies, but registered trusts and societies are eligible too.",
  },
  {
    q: "How many people do I need to start an NGO?",
    a: "A trust usually has at least two trustees. A society in Tamil Nadu needs at least seven members. A Section 8 company needs at least two directors and two members, who can be the same people.",
  },
  {
    q: "What does trust registration in Chennai cost?",
    a: "The cost covers stamp duty and the registration fee on the trust deed, plus our professional fee. Charitable trust registration in Chennai is usually the least expensive structure. We share an itemised quote, with government charges shown separately, before any work starts.",
  },
  {
    q: "Can I register a society in Chennai online?",
    a: "Society registration in Chennai is handled by the Tamil Nadu Registration Department, and much of the process can be completed online. We prepare the memorandum and bylaws, file the application and guide you through any visit that is needed.",
  },
  {
    q: "How is Section 8 company registration different from a trust?",
    a: "A Section 8 company is registered with the MCA under the Companies Act, has directors and a board, and must have its accounts audited every year. A trust is set up by a deed, run by trustees, and has lighter compliance. Section 8 company registration takes longer, but the structure is often preferred by CSR funders.",
  },
  {
    q: "Do NGOs need to pay income tax?",
    a: "With 12A registration, income used for the NGO's objects is exempt. Without it, the NGO's surplus can be taxed. Either way, most NGOs must file an income tax return every year, and many need an audit as well.",
  },
  {
    q: "Can a trust be converted into a Section 8 company later?",
    a: "Not directly. You would register a new Section 8 company and transfer the activities and assets, with the right approvals. That is why choosing the right structure at the start matters.",
  },
  {
    q: "What compliance is needed after NGO registration?",
    a: "Every NGO keeps accounts and files an income tax return. Societies file yearly returns with the Registrar, and Section 8 companies hold board meetings and file with the ROC. 12A and 80G must be renewed in time, and donations reported each year. Our NGO compliance services in Chennai cover all of it.",
  },
  {
    q: "Why use an NGO consultant in Chennai?",
    a: "Mistakes in the deed, objectives or documents can delay registration or lead to 12A and 80G being refused. An NGO consultant in Chennai helps you choose the structure, drafts the documents and handles the follow-up, so you can focus on your cause.",
  },
];

/* CTAs ---------------------------------------------------------------- */

export const messages = {
  final: "Hi National Filings, I'd like to register an NGO. Please guide me.",
};

export const finalCta = {
  // the brief's heading, with "in Chennai" added for the every-H2-names-the-city rule
  title: "Need help registering your NGO in Chennai?",
  sub: "Speak with an NGO registration expert and get guidance on choosing the right structure and completing registration smoothly.",
};

/* Section 11 · Related services ------------------------------------- */

export const related = [
  { icon: "ScrollText", label: "Trust registration", href: paths.trust },
  { icon: "Users", label: "Society registration", href: paths.society },
  { icon: "Building2", label: "Section 8 company registration", href: paths.section8 },
  { icon: "ShieldCheck", label: "12A & 80G registration", href: paths.exemptions },
  { icon: "Briefcase", label: "Company registration", href: paths.company },
] as const;
