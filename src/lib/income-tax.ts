import { pillars, serviceHref } from "./routes";
import { whatsappLink } from "./site";

/**
 * P3 · Income Tax pillar (/chennai/income-tax-consultant). Same framework as the Company Registration pillar.
 * Primary keyword: "income tax consultant in chennai".
 * Secondary: income tax filing in chennai, income tax return filing chennai, tax consultant chennai,
 * income tax services chennai, itr filing consultant chennai, tax filing services chennai, income tax advisor chennai.
 *
 * Honesty rules for this page: no prices we can't stand behind (fees are quoted after a short call), no promised refunds
 * or refund timelines (the Income Tax Department processes them), and rules are described as they usually apply,
 * because limits and due dates can change each year.
 */

export const pillar = pillars.find((p) => p.id === "P3")!;
const cluster = (id: string) => serviceHref(pillar.clusters.find((c) => c.id === id)!);
const sibling = (pillarId: string, clusterId?: string) => {
  const p = pillars.find((x) => x.id === pillarId)!;
  return clusterId ? serviceHref(p.clusters.find((c) => c.id === clusterId)!) : serviceHref(p, p.label);
};

export const paths = {
  itr: cluster("P3-C1"),
  tds: cluster("P3-C2"),
  gst: sibling("P2"),
  gstReturns: sibling("P2", "P2-C2"),
  company: sibling("P1"),
};

export const SERVICE = "Income Tax Services"; // must match a contact form option (pillar label)
export const CALL_LABEL = "Talk to a tax expert";

export const hero = {
  // H1 carries the primary keyword "income tax consultant in Chennai"
  headline: { line1: "Income Tax Consultant", line2Before: "", accent: "in Chennai" },
  sub: "Income tax return filing, tax planning, notice handling and compliance support for individuals, professionals, startups and businesses.",
  badges: ["Income Tax Return Filing", "Tax Planning Support", "Tax Notice Assistance", "Dedicated Tax Experts"],
  whatsapp: "Hi National Filings, I'd like a WhatsApp consultation about my income tax.",
};

/* Section 1 · Services ---------------------------------------------- */

export type TaxService = {
  id: string;
  name: string;
  icon: "FileText" | "Calculator" | "MailWarning" | "TrendingUp" | "Briefcase" | "CalendarClock" | "ReceiptText" | "Globe";
  bestFor: string;
  advantages: string[];
  href: string;
  linkLabel: string;
  /** Small tag on the highlighted card */
  tag?: string;
};

// Services without their own page yet open a WhatsApp chat about that service
const ask = (what: string) => whatsappLink(`Hi National Filings, I need help with ${what}.`);

export const services: TaxService[] = [
  {
    id: "itr",
    name: "Income Tax Return Filing",
    icon: "FileText",
    bestFor: "Salaried people, professionals and businesses filing their yearly return",
    advantages: ["Right ITR form for your income", "Income matched with Form 16, AIS and 26AS", "Refund claimed where you're eligible"],
    href: paths.itr,
    linkLabel: "Income tax return filing",
    tag: "Due every year",
  },
  {
    id: "planning",
    name: "Tax Planning",
    icon: "Calculator",
    bestFor: "Anyone who wants to plan investments and deductions before the year ends",
    advantages: ["Old and new regime compared on your numbers", "Deductions planned before 31 March", "Clear, legal ways to save tax"],
    href: ask("tax planning"),
    linkLabel: "Tax planning",
  },
  {
    id: "notice",
    name: "Tax Notice Assistance",
    icon: "MailWarning",
    bestFor: "Taxpayers who received an intimation, demand or scrutiny notice",
    advantages: ["Notice explained in plain words", "Reply drafted with supporting documents", "Response filed on the portal on time"],
    href: ask("an income tax notice"),
    linkLabel: "Tax notice assistance",
  },
  {
    id: "capital-gains",
    name: "Capital Gains Tax",
    icon: "TrendingUp",
    bestFor: "Investors who sold shares, mutual funds, property or gold",
    advantages: ["Short- and long-term gains worked out", "Reinvestment exemptions checked where they apply", "Losses set off and carried forward"],
    href: ask("capital gains tax"),
    linkLabel: "Capital gains tax",
  },
  {
    id: "business",
    name: "Business Taxation",
    icon: "Briefcase",
    bestFor: "Proprietors, partnership firms and companies with business income",
    advantages: ["Taxable profit worked out from your books", "Presumptive taxation checked where eligible", "Tax audit coordinated when turnover requires it"],
    href: ask("business taxation"),
    linkLabel: "Business taxation",
  },
  {
    id: "advance",
    name: "Advance Tax Support",
    icon: "CalendarClock",
    bestFor: "Freelancers, investors and business owners whose tax isn't fully covered by TDS",
    advantages: ["Instalments worked out for each due date", "Interest for late payment avoided", "Challans prepared for you"],
    href: ask("advance tax"),
    linkLabel: "Advance tax support",
  },
  {
    id: "tds",
    name: "TDS Compliance",
    icon: "ReceiptText",
    bestFor: "Employers and businesses that deduct tax at source",
    advantages: ["TDS rates and deductions checked", "Quarterly TDS returns filed", "Form 16 and 16A issued to payees"],
    href: paths.tds,
    linkLabel: "TDS return filing",
  },
  {
    id: "nri",
    name: "NRI Tax Services",
    icon: "Globe",
    bestFor: "NRIs with rent, interest, capital gains or other income in India",
    advantages: ["Residential status worked out", "Tax treaty (DTAA) relief checked", "Excess TDS claimed back as a refund"],
    href: ask("NRI income tax"),
    linkLabel: "NRI tax services",
  },
];

/* Section 2 · Who we help (local relevance) --------------------------- */

export const audienceIntro =
  "Chennai's taxpayers range from IT and manufacturing employees to traders, doctors, freelancers and retired residents. Each of them files differently, and we handle income tax filing in Chennai for all of them.";

/** Photos: Unsplash licence (free commercial use, no attribution required; credits kept for reference) */
export const audiences = [
  { icon: "Laptop", title: "Salaried employees", image: "https://images.unsplash.com/photo-1627401632925-a4c565d08a80?auto=format&fit=crop&w=1600&q=90", alt: "Office employee in a blue shirt", credit: "ArrN Capture / Unsplash" }, // unsplash.com/@arrn
  { icon: "PenTool", title: "Freelancers", image: "https://images.unsplash.com/photo-1577297627221-0811eecb81de?auto=format&fit=crop&w=1600&q=90", alt: "Freelancer working on a laptop at home", credit: "Dollar Gill / Unsplash" }, // unsplash.com/@dollargill
  { icon: "Store", title: "Business owners", image: "https://images.unsplash.com/photo-1772460759097-ad68b3232a4f?auto=format&fit=crop&w=1600&q=90", alt: "Busy shop selling spices and goods", credit: "Aditya Sethia / Unsplash" }, // unsplash.com/@aditya_sethia_97
  { icon: "Stethoscope", title: "Professionals", image: "https://images.unsplash.com/photo-1637589267610-6c66fc2a086b?auto=format&fit=crop&w=1600&q=90", alt: "Professional in a business suit", credit: "Fotos / Unsplash" }, // unsplash.com/@fotospk
  { icon: "Rocket", title: "Startups", image: "https://images.unsplash.com/photo-1733826544839-2282050204e6?auto=format&fit=crop&w=1600&q=90", alt: "Startup team gathered around a laptop", credit: "Videoters / Unsplash" }, // unsplash.com/@videoters
  { icon: "Plane", title: "NRIs", image: "https://images.unsplash.com/photo-1532188142562-df556b861e6a?auto=format&fit=crop&w=1600&q=90", alt: "Open passport with travel stamps", credit: "Agus Dietrich / Unsplash" }, // unsplash.com/@agusdietrich (no national emblem in frame)
  { icon: "TrendingUp", title: "Investors", image: "https://images.unsplash.com/photo-1645226880663-81561dcab0ae?auto=format&fit=crop&w=1600&q=90", alt: "Investor checking a stock chart on a phone", credit: "Adam Śmigielski / Unsplash" }, // unsplash.com/@smigielski
  { icon: "HeartHandshake", title: "Senior citizens", image: "https://images.unsplash.com/photo-1774437776063-004e4444c063?auto=format&fit=crop&w=1600&q=90", alt: "Elderly woman in a sari and glasses", credit: "Tanmay Abhay Mahajan / Unsplash" }, // unsplash.com/@mr_bond1999
] as const;

export const benefits = [
  { icon: "ShieldCheck", title: "Avoid penalties", line: "Filed on time and correctly, so late fees and interest stay off your bill." },
  { icon: "BadgeCheck", title: "Accurate filing", line: "Every figure matched with Form 16, AIS and 26AS before filing." },
  { icon: "BadgeIndianRupee", title: "Maximum eligible deductions", line: "Every deduction you're entitled to, backed by proof." },
  { icon: "PiggyBank", title: "Tax saving guidance", line: "Plan investments and the right regime before the year ends." },
  { icon: "MailCheck", title: "Notice assistance", line: "If a notice arrives, the same team that filed your return replies." },
  { icon: "SearchCheck", title: "Professional review", line: "A tax expert checks your return before it is submitted." },
  { icon: "ClipboardCheck", title: "Compliance support", line: "Advance tax, TDS and due dates tracked through the year." },
  { icon: "Smile", title: "Peace of mind", line: "One person to ask on WhatsApp whenever tax questions come up." },
] as const;

export const audienceCta = {
  title: "Not sure where to start with your taxes?",
  sub: "Tell us how you earn: salary, business, freelance, investments or income from abroad. We'll tell you which return you need and what to keep ready.",
  message: "Hi National Filings, I'm not sure which income tax return I need. Can you guide me?",
};

/* Section 3 · Process ---------------------------------------------- */

export const timeline = [
  { title: "Consultation", time: "Day 1", sub: "We understand your income sources and confirm the right ITR form and tax regime." },
  { title: "Document collection", time: "1-2 days", sub: "You share Form 16, bank statements and proofs on WhatsApp or email." },
  { title: "Income review", time: "1-2 days", sub: "We match your documents with AIS, TIS and Form 26AS so no income is missed." },
  { title: "Tax calculation", time: "Same day", sub: "Tax is worked out under both regimes, with every eligible deduction applied." },
  { title: "Return preparation", time: "1 day", sub: "We prepare the return and walk you through it before anything is filed." },
  { title: "Return filing & acknowledgement", time: "Same day", sub: "Filed on the e-filing portal, e-verified, and the acknowledgement shared with you." },
];

export const timelineNote =
  "Most individual returns are filed within 3 to 5 working days of receiving complete documents. Refunds are processed by the Income Tax Department and their timing varies. We track your return until it is processed.";

export const processCta = {
  title: "Ready to file your income tax return?",
  sub: "Talk to a tax expert and find out what to keep ready before filing.",
  ticks: ["Income Tax Return Filing", "Tax Planning Support", "Tax Notice Assistance", "Dedicated Tax Experts"],
  message: "Hi National Filings, I'm ready to file my income tax return. Can you guide me?",
};

/* Section 4 · What's included -------------------------------------- */

export const included = [
  { icon: "SearchCheck", title: "Income review", line: "Every income source matched with AIS and 26AS." },
  { icon: "Calculator", title: "Tax calculation", line: "Worked out under both regimes, side by side." },
  { icon: "FileText", title: "Return preparation", line: "The right ITR form, prepared and explained." },
  { icon: "Send", title: "Return filing", line: "Filed, e-verified and acknowledged on the portal." },
  { icon: "PiggyBank", title: "Tax saving guidance", line: "Deductions and investments for next year." },
  { icon: "ClipboardCheck", title: "Compliance support", line: "Advance tax and due-date reminders." },
  { icon: "Headset", title: "Dedicated tax expert", line: "One person, start to finish." },
  { icon: "MessageCircle", title: "WhatsApp updates", line: "Status updates at every step." },
] as const;

export const includedCta = {
  title: "Ready to file with a tax expert?",
  sub: "Talk to an expert, Monday to Saturday.",
};

/* Section 5 · Documents -------------------------------------------- */

export const documents = [
  {
    icon: "UserRound",
    title: "For salaried individuals",
    items: ["PAN", "Aadhaar", "Form 16", "Bank statements", "Investment proofs"],
    hint: "Form 16 comes from your employer. Rent receipts and home loan certificates help if you claim those deductions.",
  },
  {
    icon: "Store",
    title: "For business owners",
    items: ["PAN", "Aadhaar", "Profit & loss statement", "Balance sheet", "GST details"],
    hint: "Your GST returns help us match the turnover in your income tax return.",
  },
  {
    icon: "PenTool",
    title: "For freelancers",
    items: ["PAN", "Aadhaar", "Invoices", "Bank statements", "Expense records"],
    hint: "Expense records let you claim genuine work costs against your income.",
  },
] as const;

export const documentsHelp = {
  title: "Don't have all documents ready?",
  sub: "Start with your PAN and bank statements. Our team will tell you what else is needed for your income.",
  message: "Hi National Filings, I'd like to send my documents for income tax filing.",
};

/* Section 6 · Packages --------------------------------------------- */

export type Package = {
  id: "salaried" | "business" | "professional" | "nri";
  name: string;
  icon: "UserRound" | "Store" | "Briefcase" | "Globe";
  description: string;
  /** Professional fee "from" price. Placeholder until confirmed: `sample` keeps it off production. */
  price: { value: string; sample?: boolean };
  includes: string[];
  message: string;
  popular?: boolean;
};

export const packages: Package[] = [
  {
    id: "salaried",
    name: "Salaried ITR Filing",
    icon: "UserRound",
    description: "For employees with salary, savings interest and one house.",
    price: { value: "₹X,XXX", sample: true },
    includes: ["Form 16 review", "AIS & 26AS match", "Regime comparison", "Deductions applied", "Filing & e-verification"],
    message: "Hi National Filings, I'd like a quote for salaried ITR filing.",
    popular: true,
  },
  {
    id: "business",
    name: "Business ITR Filing",
    icon: "Store",
    description: "For proprietors and firms with business income.",
    price: { value: "₹X,XXX", sample: true },
    includes: ["Profit computation", "Presumptive scheme check", "GST turnover match", "Advance tax review", "Filing & e-verification"],
    message: "Hi National Filings, I'd like a quote for business ITR filing.",
  },
  {
    id: "professional",
    name: "Professional ITR Filing",
    icon: "Briefcase",
    description: "For doctors, consultants, freelancers and other professionals.",
    price: { value: "₹X,XXX", sample: true },
    includes: ["Receipts & expenses review", "Presumptive scheme check", "TDS credit match", "Advance tax review", "Filing & e-verification"],
    message: "Hi National Filings, I'd like a quote for professional ITR filing.",
  },
  {
    id: "nri",
    name: "NRI Tax Filing",
    icon: "Globe",
    description: "For NRIs with income or investments in India.",
    price: { value: "₹X,XXX", sample: true },
    includes: ["Residential status check", "Indian income review", "DTAA relief check", "TDS refund claim", "Filing & e-verification"],
    message: "Hi National Filings, I'd like a quote for NRI tax filing.",
  },
];

export const everyPackage = [
  { icon: "Headset", title: "Dedicated tax expert" },
  { icon: "MessageCircle", title: "WhatsApp updates" },
  { icon: "SearchCheck", title: "AIS & 26AS check" },
  { icon: "Scale", title: "Regime comparison" },
  { icon: "BadgeCheck", title: "E-verification help" },
  { icon: "ReceiptText", title: "Transparent pricing" },
] as const;

export const packagesNote = "There is no government fee to file a return. Any tax, interest or late fee is paid directly to the Income Tax Department.";

export const packagesCta = {
  title: "Not sure which package fits you?",
  sub: "A short call about your income sources is enough to tell.",
  message: "Hi National Filings, I'm not sure which income tax package fits me. Can you help?",
};

/* Section 8 · Mistakes ---------------------------------------------- */

export const mistakes = [
  {
    icon: "EyeOff",
    fixIcon: "SearchCheck",
    title: "Missing income sources",
    problem: "Savings or FD interest, freelance income or rent is left out because it isn't on Form 16.",
    impact: "The department already sees it in your AIS and can send a notice for the tax and interest.",
    fix: "We match every return with your AIS and Form 26AS before filing.",
  },
  {
    icon: "FileWarning",
    fixIcon: "FileCheck2",
    title: "Incorrect deductions",
    problem: "Deductions claimed without proof, or under the new regime where they don't apply, while eligible ones are missed.",
    impact: "Wrong claims can lead to a tax demand with interest; missed ones mean you pay more than you need to.",
    fix: "We check each deduction against your proofs and compare both regimes.",
  },
  {
    icon: "Landmark",
    fixIcon: "BadgeCheck",
    title: "Wrong bank details",
    problem: "The refund account isn't pre-validated on the portal, or the IFSC is wrong.",
    impact: "The refund fails and has to be reissued, which can take weeks.",
    fix: "We confirm your bank account is pre-validated before filing.",
  },
  {
    icon: "Ban",
    fixIcon: "ClipboardCheck",
    title: "Ignoring AIS/TIS data",
    problem: "Filing only from your own records without checking what banks, employers and brokers reported.",
    impact: "Mismatches flag the return for an intimation or an adjustment to your tax.",
    fix: "We reconcile AIS and TIS line by line and raise feedback where the data is wrong.",
  },
  {
    icon: "BellOff",
    fixIcon: "CalendarCheck",
    title: "Late filing",
    problem: "Missing the due date, which for most individuals without an audit is 31 July.",
    impact: "A late fee, interest on unpaid tax, and some losses can no longer be carried forward.",
    fix: "We send reminders and file well before the deadline.",
  },
  {
    icon: "TrendingDown",
    fixIcon: "TrendingUp",
    title: "Non-disclosure of capital gains",
    problem: "Share, mutual fund or property sales left out, or reported in the wrong schedule.",
    impact: "Undisclosed gains can trigger a notice with tax, interest and a possible penalty.",
    fix: "We work out gains from your broker and property statements and report them correctly.",
  },
] as const;

export const reviewChecks = ["AIS & 26AS match", "Deduction review", "Regime comparison", "Bank account check"];

export const reviewCta = {
  title: "Need a review before you file?",
  sub: "Send your Form 16 and statements on WhatsApp and a tax expert will review them before filing.",
  badges: ["No obligation review", "Business hours response"],
  message: "Hi National Filings, I'd like a review of my income tax documents before filing.",
};

/* Section 9 · FAQ (secondary keywords in the questions) --------------- */

export const faqs = [
  {
    q: "What does an income tax consultant in Chennai do?",
    a: "An income tax consultant reviews your income, works out your tax under both regimes, prepares and files your return, and helps if a notice arrives. At National Filings the same tax expert handles your filing, planning and any follow-up, so you don't have to explain your situation twice.",
  },
  {
    q: "How much does income tax filing in Chennai cost?",
    a: "It depends on your income sources: a salaried return with one employer takes less work than a return with business income or capital gains. We share a clear quote after a short call. There is no government fee to file a return; any tax due is paid directly to the Income Tax Department.",
  },
  {
    q: "What is the last date for ITR filing?",
    a: "The due dates are the same across India. For most individuals who don't need a tax audit it is usually 31 July after the financial year ends, and for audit cases it is usually 31 October. The government sometimes extends these dates, so we confirm the current deadline when you contact us.",
  },
  {
    q: "What happens if I miss the ITR deadline?",
    a: "You can still file a belated return, usually until 31 December of the assessment year, but a late fee applies (up to ₹5,000, or ₹1,000 if your income is up to ₹5 lakh). Interest is charged on any unpaid tax, and some losses can no longer be carried forward.",
  },
  {
    q: "Which ITR form should I file?",
    a: "It depends on how you earn. ITR-1 suits many salaried people with simple income, ITR-2 covers capital gains and foreign income, ITR-3 is for business or professional income, and ITR-4 is for presumptive income. Our ITR filing consultants in Chennai pick the right form so your return isn't treated as defective.",
  },
  {
    q: "Old or new tax regime: which is better for me?",
    a: "The new regime is the default and has lower rates but few deductions. The old regime allows deductions such as 80C, HRA and home loan interest. Which one saves more depends on your numbers, so we calculate your tax under both before filing.",
  },
  {
    q: "Can I file my income tax return online without visiting an office?",
    a: "Yes. Share your documents on WhatsApp or email, review the return on a call, and e-verify it with an Aadhaar OTP. You never need to visit our Chennai office or a tax office, and we work with taxpayers across India and abroad.",
  },
  {
    q: "I received an income tax notice. What should I do?",
    a: "Don't ignore it: most notices have a reply deadline. Many are simple intimations comparing your return with the department's records, while others ask for documents or explanations. Send us the notice on WhatsApp and our tax consultants in Chennai will explain it and prepare the reply.",
  },
  {
    q: "Do I need to file a return if my income is below the taxable limit?",
    a: "Usually it isn't mandatory, but filing is still worth it to claim a TDS refund and to keep a record for loans and visas. In some cases, such as large bank deposits or high foreign travel spending, you must file even if your income is below the limit.",
  },
  {
    q: "How long does an income tax refund take?",
    a: "Refunds are processed by the Income Tax Department after you e-verify your return. Many arrive within a few weeks, but timing varies. A pre-validated bank account and a return that matches your AIS help avoid delays, and we track the status for you.",
  },
  {
    q: "Do freelancers need to pay advance tax?",
    a: "Yes, if your tax for the year is ₹10,000 or more after TDS. Advance tax is usually paid in four instalments by 15 June, 15 September, 15 December and 15 March; under the presumptive scheme for professionals, the whole amount can be paid by 15 March. We work out each instalment for you.",
  },
  {
    q: "Can NRIs file income tax returns in India with your help?",
    a: "Yes. We check your residential status, report your Indian income such as rent, interest or capital gains, apply tax treaty relief where it applies, and claim back any excess TDS. Everything is done online, so you can file from anywhere.",
  },
  {
    q: "Can you file returns for previous years?",
    a: "Often, yes. If you missed a year or need to correct one, an updated return can be filed within the time limits the law allows, with additional tax. We check what is still possible for your case before you pay anything.",
  },
  {
    q: "What income tax services in Chennai do you offer apart from filing?",
    a: "Besides return filing, we help with tax planning, capital gains, advance tax, TDS returns for employers, NRI taxation and replies to tax notices. Businesses can also get GST and company compliance from the same team.",
  },
];

/* CTAs ---------------------------------------------------------------- */

export const messages = {
  final: "Hi National Filings, I need help with income tax filing. Please guide me.",
};

export const finalCta = {
  // the brief's heading, with "in Chennai" added for the every-H2-names-the-city rule
  title: "Need help with income tax filing in Chennai?",
  sub: "Speak with a tax expert and get professional guidance on filing, planning and compliance.",
};

/* Section 10 · Related services ------------------------------------- */

export const related = [
  { icon: "FileText", label: "ITR filing", href: paths.itr },
  { icon: "ReceiptText", label: "TDS return filing", href: paths.tds },
  { icon: "ReceiptIndianRupee", label: "GST consultant", href: paths.gst },
  { icon: "FileSpreadsheet", label: "GST return filing", href: paths.gstReturns },
  { icon: "Building2", label: "Company registration", href: paths.company },
] as const;
