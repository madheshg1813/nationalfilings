import { pillars, serviceHref } from "./routes";
import { heroTrustPoints } from "@/lib/proof";

/**
 * P6 · PF & ESI pillar (/chennai/pf-esi-consultant). Same framework as the Company Registration pillar;
 * the Packages slot holds the PF vs ESI comparison, and a monthly compliance section follows the mistakes.
 * Primary keyword: "pf esi consultant in chennai".
 * Secondary: pf consultant chennai, esi consultant chennai, pf registration chennai, esi registration chennai,
 * pf return filing chennai, esi return filing chennai, epf consultant chennai, labour law compliance chennai,
 * monthly pf and esi return filing.
 *
 * Honesty rules for this page: no prices, rates and thresholds described as they usually apply (they can change, and the
 * new labour codes are being rolled out), and no promise about how fast EPFO or ESIC process anything.
 */

export const pillar = pillars.find((p) => p.id === "P6")!;
const registration = serviceHref(pillar.clusters.find((c) => c.id === "P6-C1")!);
const byId = (id: string) => pillars.find((p) => p.id === id)!;

export const paths = {
  registration,
  company: serviceHref(byId("P1")),
  gst: serviceHref(byId("P2")),
  incomeTax: serviceHref(byId("P3")),
  tds: serviceHref(byId("P3").clusters.find((c) => c.id === "P3-C2")!),
};

export const SERVICE = "PF & ESI Services"; // must match a contact form option (pillar label)
export const CALL_LABEL = "Talk to a compliance expert";

export const hero = {
  // H1 carries the primary keyword "PF & ESI consultant in Chennai"
  headline: { line1: "PF & ESI Consultant", line2Before: "", accent: "in Chennai" },
  sub: "PF registration, ESI registration, monthly return filing, employee compliance and labour law support for businesses across Chennai.",
  badges: heroTrustPoints,
  whatsapp: "Hi National Filings, I'd like a WhatsApp consultation about PF and ESI compliance.",
};

/* Section 1 · Service types ----------------------------------------- */

export type PfEsiService = {
  id: string;
  name: string;
  icon: "PiggyBank" | "HeartPulse" | "FileSpreadsheet" | "ReceiptText" | "UserPlus" | "ArrowLeftRight" | "ClipboardCheck" | "Scale";
  bestFor: string;
  advantages: string[];
  href: string;
  linkLabel: string;
  /** Small tag on the highlighted card */
  tag?: string;
};


export const services: PfEsiService[] = [
  {
    id: "pf-registration",
    name: "PF Registration",
    icon: "PiggyBank",
    bestFor: "Employers reaching 20 employees, or registering voluntarily earlier",
    advantages: ["Establishment registered on the EPFO portal", "Employees linked to their UAN", "Ready for the first monthly return"],
    href: registration,
    linkLabel: "PF registration",
    tag: "Start here",
  },
  {
    id: "esi-registration",
    name: "ESI Registration",
    icon: "HeartPulse",
    bestFor: "Employers with 10 or more employees earning within the ESI wage limit",
    advantages: ["Employer registered on the ESIC portal", "Employees registered for ESI cover", "e-Pehchan cards for employees"],
    href: registration,
    linkLabel: "ESI registration",
  },
  {
    id: "pf-returns",
    name: "PF Return Filing",
    icon: "FileSpreadsheet",
    bestFor: "Employers who want monthly PF filed correctly and on time",
    advantages: ["Contributions worked out from payroll", "ECR uploaded on the EPFO portal", "Challan paid by the 15th"],
    href: "#monthly",
    linkLabel: "PF return filing",
  },
  {
    id: "esi-returns",
    name: "ESI Return Filing",
    icon: "ReceiptText",
    bestFor: "Employers who want monthly ESI contributions handled",
    advantages: ["Employer and employee shares calculated", "Contributions filed on the ESIC portal", "Paid by the 15th"],
    href: "#monthly",
    linkLabel: "ESI return filing",
  },
  {
    id: "onboarding",
    name: "Employee Onboarding Compliance",
    icon: "UserPlus",
    bestFor: "Businesses hiring regularly that need every joiner set up right",
    advantages: ["UAN generated or linked", "KYC and nominations updated", "ESI registration for new joiners"],
    href: "" /* no page yet: plain card until one is published */,
    linkLabel: "Employee onboarding compliance",
  },
  {
    id: "transfer",
    name: "PF Transfer Assistance",
    icon: "ArrowLeftRight",
    bestFor: "Employees moving PF from a previous employer",
    advantages: ["Transfer claims raised online", "Employer approvals completed", "Service history kept in one account"],
    href: "" /* no page yet: plain card until one is published */,
    linkLabel: "PF transfer assistance",
  },
  {
    id: "inspection",
    name: "Inspection Support",
    icon: "ClipboardCheck",
    bestFor: "Employers who have received an EPFO or ESIC inspection or notice",
    advantages: ["Records prepared and checked", "Gaps found and fixed before the visit", "Replies to notices drafted"],
    href: "" /* no page yet: plain card until one is published */,
    linkLabel: "Inspection support",
  },
  {
    id: "labour-law",
    name: "Labour Law Compliance",
    icon: "Scale",
    bestFor: "Growing employers who need wider workforce compliance",
    advantages: ["Applicable registrations checked", "Registers and records set up", "Updates as labour rules change"],
    href: "" /* no page yet: plain card until one is published */,
    linkLabel: "Labour law compliance",
  },
];

/* Section 2 · Who we help (local relevance) --------------------------- */

export const audienceIntro =
  "Chennai's employers range from IT companies and startups to auto-component plants, garment units, shops and service firms. Once your team grows, PF and ESI become monthly obligations, and we keep them on track for employers of every size.";

/** Photos: Unsplash licence (free commercial use, no attribution required; credits kept for reference) */
export const audiences = [
  { icon: "Rocket", title: "Startups", image: "https://images.unsplash.com/photo-1702468049239-49fd1cf99d20?auto=format&fit=crop&w=1600&q=90", alt: "Startup team sitting together on office steps", credit: "EmbedSocial / Unsplash" }, // unsplash.com/@embedsocial
  { icon: "Store", title: "Small businesses", image: "https://images.unsplash.com/photo-1760263051323-fcd7da7040b0?auto=format&fit=crop&w=1600&q=90", alt: "Street vendor selling snacks", credit: "Zoshua Colah / Unsplash" }, // unsplash.com/@zoshuacolah
  { icon: "Factory", title: "Manufacturing companies", image: "https://images.unsplash.com/photo-1716803716001-6749bf25b47e?auto=format&fit=crop&w=1600&q=90", alt: "Workers on a factory floor", credit: "Pradeep Gopal / Unsplash" }, // unsplash.com/@protonomous
  { icon: "Laptop", title: "IT companies", image: "https://images.unsplash.com/photo-1734519654307-ceb306e4073a?auto=format&fit=crop&w=1600&q=90", alt: "Tech company team in branded shirts", credit: "Microters SEO Agency / Unsplash" }, // unsplash.com/@microters
  { icon: "Headset", title: "Service businesses", image: "https://images.unsplash.com/photo-1762504629146-20829fea9749?auto=format&fit=crop&w=1600&q=90", alt: "Staff member in uniform", credit: "Skytech Aviation / Unsplash" }, // unsplash.com/@skytechaviation0
  { icon: "ShoppingBag", title: "Retail businesses", image: "https://images.unsplash.com/photo-1772648892976-46bdd06ab49e?auto=format&fit=crop&w=1600&q=90", alt: "Shop selling brass bells and statues", credit: "Navya B / Unsplash" }, // unsplash.com/@nav_sa
  { icon: "HardHat", title: "Factories", image: "https://images.unsplash.com/photo-1706715201231-b703e7df3395?auto=format&fit=crop&w=1600&q=90", alt: "Workers stacking bricks at a brick works", credit: "Swastik Arora / Unsplash" }, // unsplash.com/@swastikarora
  { icon: "TrendingUp", title: "Growing employers", image: "https://images.unsplash.com/photo-1682962232755-f1d051ddb638?auto=format&fit=crop&w=1600&q=90", alt: "Young team talking together at work", credit: "Sanket Mishra / Unsplash" }, // unsplash.com/@sanketgraphy
] as const;

export const benefits = [
  { icon: "ShieldCheck", title: "Statutory compliance", line: "PF and ESI registered and filed as the law requires." },
  { icon: "BadgeIndianRupee", title: "Avoid government penalties", line: "On-time payments keep interest and damages away." },
  { icon: "HeartHandshake", title: "Employee benefits protection", line: "Employees' PF, pension and ESI cover stay active." },
  { icon: "Briefcase", title: "Professional compliance management", line: "Experts handle the portals, rates and rules." },
  { icon: "Clock", title: "Reduced administrative burden", line: "Your team spends less time on monthly filings." },
  { icon: "CalendarCheck", title: "Timely filing support", line: "Every return prepared well before the 15th." },
  { icon: "Scale", title: "Labour law compliance", line: "Records and registrations ready for inspections." },
  { icon: "Award", title: "Business credibility", line: "Compliant employers attract and keep good people." },
] as const;

export const audienceCta = {
  title: "Hiring in Chennai?",
  sub: "Tell us how many people you employ and their salaries. We'll tell you whether PF, ESI or both apply, and from when.",
  message: "Hi National Filings, I'm hiring and want to know whether PF and ESI apply to my business.",
};

/* Section 3 · Process ---------------------------------------------- */

export const timeline = [
  { title: "Compliance consultation", time: "Day 1", sub: "We check your headcount, wages and which registrations apply." },
  { title: "Employee data collection", time: "1-3 days", sub: "You share business and employee details on WhatsApp or email. We check every record." },
  { title: "Registration application", time: "1-2 days", sub: "PF registration is filed on the EPFO portal and ESI registration on the ESIC portal." },
  { title: "Government processing", time: "Usually a few days", sub: "EPFO and ESIC process the applications online. We follow up on any query." },
  { title: "PF & ESI activation", time: "1-2 days", sub: "Establishment codes are issued, and UANs and ESI numbers are set up for employees." },
  { title: "Monthly compliance support", time: "Every month", sub: "Contributions calculated, returns filed and payments made by the 15th." },
];

export const timelineNote =
  "Registration is online and usually completes within a few working days once documents are in order. Companies incorporated through SPICe+ may already have PF and ESI codes, so we check before applying.";

export const processCta = {
  title: "Ready to set up PF and ESI?",
  sub: "Talk to a compliance expert and find out exactly what applies to your business.",
  ticks: ["PF Registration Support", "ESI Registration Assistance", "Monthly Return Filing", "Dedicated Compliance Team"],
  message: "Hi National Filings, I'd like to set up PF and ESI for my business. Can you guide me?",
};

/* Section 4 · What's included -------------------------------------- */

export const included = [
  { icon: "PiggyBank", title: "PF registration", line: "Establishment set up on the EPFO portal." },
  { icon: "HeartPulse", title: "ESI registration", line: "Employer and employees registered with ESIC." },
  { icon: "FileSpreadsheet", title: "Monthly return filing", line: "ECR and ESI contributions filed every month." },
  { icon: "UserPlus", title: "Employee compliance support", line: "Joiners, leavers, UAN and KYC handled." },
  { icon: "MonitorCheck", title: "Government portal assistance", line: "EPFO and ESIC portals managed for you." },
  { icon: "CalendarClock", title: "Due date tracking", line: "Reminders well before every deadline." },
  { icon: "Headset", title: "Compliance advisory", line: "Answers on rates, wages and coverage." },
  { icon: "MessageCircle", title: "WhatsApp updates", line: "Status updates every month." },
] as const;

export const includedCta = {
  title: "Ready to hand over PF and ESI?",
  sub: "Talk to an expert, Monday to Saturday.",
};

/* Section 5 · Documents -------------------------------------------- */

export const documents = [
  {
    icon: "PiggyBank",
    title: "For PF registration",
    items: ["PAN card", "Incorporation certificate", "GST certificate", "Employee details", "Bank account details"],
    hint: "Proprietorships and partnerships use their registration or GST certificate instead of an incorporation certificate.",
  },
  {
    icon: "HeartPulse",
    title: "For ESI registration",
    items: ["PAN card", "Business address proof", "Employee information", "Bank details", "Registration certificates"],
    hint: "Registration certificates include your incorporation, GST or shop and establishment certificate.",
  },
  {
    icon: "FileSpreadsheet",
    title: "For monthly filing",
    items: ["Salary sheet", "Attendance records", "Employee contribution details", "UAN information"],
    hint: "Share the salary sheet each month and we prepare both returns from it.",
  },
] as const;

export const documentsHelp = {
  title: "Don't have all documents ready?",
  sub: "Start with your PAN and employee list. Our team will tell you what else is needed.",
  message: "Hi National Filings, I'd like to send my documents for PF and ESI registration.",
};

/* Section 6 · PF vs ESI coverage explained (in the Packages slot) ------ */

export const schemes = [
  { id: "pf", name: "PF (EPF)", icon: "PiggyBank" },
  { id: "esi", name: "ESI", icon: "HeartPulse" },
] as const;

/** One row per criterion; values follow the `schemes` order */
export const comparison: { label: string; icon: string; values: [string, string] }[] = [
  {
    label: "Purpose",
    icon: "Target",
    values: ["Retirement savings, pension and life insurance for employees", "Medical care and cash benefits during sickness, maternity or injury"],
  },
  {
    label: "Eligibility",
    icon: "Users",
    values: [
      "Establishments with 20 or more employees; employees earning up to ₹15,000 a month (basic + DA) must be covered",
      "Establishments with 10 or more employees; employees earning up to ₹21,000 a month in gross wages",
    ],
  },
  {
    label: "Employee benefits",
    icon: "HeartHandshake",
    values: [
      "Provident fund with interest, EPS pension, EDLI insurance and partial withdrawals",
      "Medical care for the employee and family, plus sickness, maternity and disablement benefits",
    ],
  },
  {
    label: "Employer contribution",
    icon: "Building2",
    values: ["12% of basic + DA (8.33% of it goes to the pension scheme, on capped wages), plus admin charges", "3.25% of gross wages"],
  },
  {
    label: "Employee contribution",
    icon: "UserRound",
    values: ["12% of basic + DA", "0.75% of gross wages (not deducted for very low daily wages)"],
  },
  {
    label: "Coverage limits",
    icon: "Gauge",
    values: ["Mandatory up to ₹15,000 a month; higher earners can be covered voluntarily", "Employees above ₹21,000 a month gross are outside ESI"],
  },
  {
    label: "Government authority",
    icon: "Landmark",
    values: ["Employees' Provident Fund Organisation (EPFO)", "Employees' State Insurance Corporation (ESIC)"],
  },
  {
    label: "Compliance requirements",
    icon: "ClipboardCheck",
    values: ["Monthly ECR and payment by the 15th; UAN and KYC for every employee", "Monthly contributions by the 15th; an ESI number for every employee"],
  },
];

export const comparisonCta = {
  title: "Not sure whether PF, ESI or both apply?",
  sub: "Tell us your headcount and salary ranges and we'll confirm in one call.",
  message: "Hi National Filings, can you tell me whether PF, ESI or both apply to my business?",
};

/* Section 8 · Mistakes ---------------------------------------------- */

export const mistakes = [
  {
    icon: "Hourglass",
    fixIcon: "CalendarCheck",
    title: "Delayed registration",
    problem: "Not registering once headcount reaches 10 for ESI or 20 for PF.",
    impact: "Back-dated contributions with interest and damages from the date coverage applied.",
    fix: "We track your headcount and register as soon as it applies.",
  },
  {
    icon: "Shuffle",
    fixIcon: "UserCheck",
    title: "Incorrect employee classification",
    problem: "Treating employees as consultants or trainees, or splitting wages to shrink the PF base.",
    impact: "Contributions can be assessed for past months, with interest and damages.",
    fix: "We review roles and wage structures against the rules.",
  },
  {
    icon: "BellOff",
    fixIcon: "CalendarClock",
    title: "Late PF payments",
    problem: "Paying PF after the 15th of the following month.",
    impact: "Interest and damages, and the employer can lose the tax deduction for employees' share paid late.",
    fix: "We prepare the ECR early and remind you before the due date.",
  },
  {
    icon: "Clock",
    fixIcon: "CalendarCheck",
    title: "Late ESI contributions",
    problem: "ESI contributions paid after the due date.",
    impact: "Interest on late payment, possible damages, and trouble for employees claiming benefits.",
    fix: "We file and remind you so payments go in on time.",
  },
  {
    icon: "FileWarning",
    fixIcon: "FileCheck2",
    title: "Incorrect return filing",
    problem: "Wrong wages, missing joiners or wrong days in the ECR or ESI return.",
    impact: "Mismatched employee accounts, delayed claims and corrections later.",
    fix: "We reconcile every return with your salary sheet before filing.",
  },
  {
    icon: "FolderX",
    fixIcon: "FolderCheck",
    title: "Missing compliance records",
    problem: "No proper registers of wages, attendance or contributions.",
    impact: "Problems during inspections, and possible penalties.",
    fix: "We maintain records and prepare you for inspections.",
  },
] as const;

export const reviewChecks = ["Coverage check", "Wage structure review", "Employee records", "Due date calendar"];

export const reviewCta = {
  title: "Need a compliance health check?",
  sub: "Send your salary sheet and past challans on WhatsApp and our team will check for gaps.",
  badges: ["No obligation review", "Business hours response"],
  message: "Hi National Filings, I'd like a PF and ESI compliance health check.",
};

/* Section 9 · Monthly PF & ESI compliance (PF & ESI pages only) -------- */

export const monthly = [
  { icon: "PiggyBank", title: "PF return filing", line: "Employer and employee PF worked out from your salary sheet each month.", when: "Every month" },
  { icon: "FileSpreadsheet", title: "ECR filing", line: "The Electronic Challan cum Return uploaded on the EPFO portal, with each employee's wages.", when: "By the 15th" },
  { icon: "HeartPulse", title: "ESI contribution filing", line: "Employer and employee ESI shares filed and paid on the ESIC portal.", when: "By the 15th" },
  { icon: "CalendarClock", title: "Due dates", line: "PF and ESI for each month are both due by the 15th of the following month.", when: "15th monthly" },
  { icon: "FolderCheck", title: "Employee records maintenance", line: "Joiners, leavers, UAN, KYC and ESI numbers kept up to date.", when: "Ongoing" },
  { icon: "Activity", title: "Compliance monitoring", line: "Mismatches, pending KYC and notices checked so issues are caught early.", when: "Ongoing" },
] as const;

export const monthlyCta = {
  title: "Want us to handle your monthly filings?",
  sub: "Send the salary sheet each month. We file PF and ESI and confirm when it's done.",
  message: "Hi National Filings, I'd like you to handle our monthly PF and ESI return filing.",
};

/* Section 10 · FAQ (secondary keywords in the questions) -------------- */

export const faqs = [
  {
    q: "Who needs PF registration?",
    a: "Establishments with 20 or more employees usually must register for PF, and employees earning up to ₹15,000 a month in basic pay plus DA must be covered. Smaller employers can register voluntarily, and higher earners can be covered if the employer agrees.",
  },
  {
    q: "Who needs ESI registration?",
    a: "Establishments with 10 or more employees usually need ESI registration. Employees earning up to ₹21,000 a month in gross wages (₹25,000 for persons with disabilities) are covered.",
  },
  {
    q: "What is the PF contribution rate?",
    a: "Usually 12% of basic pay plus DA from the employee and 12% from the employer. Of the employer's share, 8.33% goes to the pension scheme on wages up to ₹15,000, and the rest to the employee's PF account. Some establishments use a 10% rate. Small admin and insurance charges are added on top.",
  },
  {
    q: "What is the ESI contribution rate?",
    a: "The employer pays 3.25% and the employee 0.75% of gross wages. Employees with very low average daily wages don't pay their share, but the employer still does.",
  },
  {
    q: "How often are PF and ESI returns filed?",
    a: "Every month. Monthly PF and ESI return filing is due by the 15th of the following month: the PF ECR on the EPFO portal and ESI contributions on the ESIC portal, each with payment.",
  },
  {
    q: "What happens if PF or ESI compliance is missed?",
    a: "Late payments attract interest and damages, and the employer can lose the tax deduction for employees' PF and ESI deducted from salaries but paid late. Missed registrations can lead to contributions being assessed for past months, and repeated defaults can lead to prosecution.",
  },
  {
    q: "Can you handle our monthly PF and ESI filings?",
    a: "Yes. You share the salary sheet each month and our PF and ESI consultants in Chennai calculate contributions, file the ECR and ESI returns, prepare the challans and confirm when everything is filed.",
  },
  {
    q: "How long does PF registration in Chennai take?",
    a: "PF registration in Chennai is online and usually completes within a few working days once documents are ready. ESI registration in Chennai is similar. Companies incorporated through SPICe+ may already have PF and ESI codes, which we check first.",
  },
  {
    q: "Is PF registration voluntary for small businesses?",
    a: "Below 20 employees, PF isn't usually mandatory, but you can register voluntarily if the employer and most employees agree. Many growing businesses do this to offer the benefit early.",
  },
  {
    q: "What is a UAN?",
    a: "The Universal Account Number is a PF number that stays with an employee for life, across employers. Each new job adds a member ID under the same UAN, which makes transfers and withdrawals easier.",
  },
  {
    q: "How do employees transfer PF when they change jobs?",
    a: "With a UAN, many transfers happen automatically. Otherwise the employee raises a transfer claim online and the employer approves it. Our PF transfer assistance handles the employer's side and helps employees with theirs.",
  },
  {
    q: "What documents are needed for ESI registration in Chennai?",
    a: "Your PAN, business address proof, registration certificates (such as incorporation, GST or shop and establishment), bank details and employee information. We check everything before filing.",
  },
  {
    q: "Do the new labour codes change PF and ESI?",
    a: "India's labour codes, including the Code on Social Security, change some rules, such as how wages are defined for contributions. We follow the rules in force when we file and tell you if anything changes for your business.",
  },
  {
    q: "Why hire a PF and ESI consultant in Chennai?",
    a: "Rates, wage definitions and portals change, and mistakes cost interest and damages. An EPF and ESI consultant in Chennai keeps your monthly filings, employee records and inspections in order, so you can focus on running the business.",
  },
];

/* CTAs ---------------------------------------------------------------- */

export const messages = {
  final: "Hi National Filings, I need help with PF and ESI compliance. Please guide me.",
};

export const finalCta = {
  // the brief's heading, with "in Chennai" added for the every-H2-names-the-city rule
  title: "Need help with PF & ESI compliance in Chennai?",
  sub: "Talk with our experts and get personalised guidance.",
};

/* Section 11 · Related services ------------------------------------- */

export const related = [
  { icon: "PiggyBank", label: "PF & ESI registration", href: paths.registration },
  { icon: "ReceiptText", label: "TDS return filing", href: paths.tds },
  { icon: "IndianRupee", label: "Income tax consultant", href: paths.incomeTax },
  { icon: "ReceiptIndianRupee", label: "GST consultant", href: paths.gst },
  { icon: "Briefcase", label: "Company registration", href: paths.company },
] as const;

/* Why National Filings (the SEO/CRO system's six reasons, written for this service) --- */

export const reasons = [
  { icon: "ReceiptText", title: "Transparent fees", line: "A fixed monthly fee based on headcount, quoted before we start." },
  { icon: "UserCheck", title: "Dedicated support", line: "One compliance expert who knows your payroll and your employees." },
  { icon: "Award", title: "Expert team", line: "Labour law specialists handling EPFO and ESIC portals every month." },
  { icon: "Zap", title: "Fast processing", line: "Registrations and monthly challans filed well before due dates." },
  { icon: "MessageCircle", title: "WhatsApp updates", line: "Challan, return and due date updates sent on WhatsApp." },
  { icon: "ClipboardCheck", title: "Compliance guidance", line: "Help with inspections, notices and new joiner or exit formalities." },
];
