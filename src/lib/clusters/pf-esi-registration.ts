import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { clusterHref, licenceHref, pillarHref } from "./shared";

/**
 * P6-C1 · PF and ESI Registration (/chennai/pf-esi-registration-service).
 * Primary keyword: "pf registration in chennai". Secondary: "esi registration in chennai".
 *
 * Facts checked Oct 2026: the Code on Social Security, 2020 has been in force since 21 November 2025. PF applies to
 * establishments with 20 or more employees (voluntary below that); ESI generally to establishments with 10 or more employees
 * in notified areas such as Chennai, covering employees earning up to ₹21,000 a month; ESI contributions 3.25% employer and
 * 0.75% employee; PF 12% each of wages, with the employer's share split between the provident fund and pension scheme;
 * monthly contributions due by the 15th. Sources conflict on the current PF wage ceiling, so it isn't quoted.
 */

export const pfEsiRegistrationPage: LicencePageData = {
  id: "P6-C1",
  service: "PF & ESI Services",
  meta: {
    title: "PF and ESI Registration in Chennai | Employer Code in Days",
    description: "PF registration in Chennai and ESI registration for employers, with EPFO and ESIC codes, employee UANs and first returns set up by one expert team.",
  },
  hero: {
    headline: { line1: "PF and ESI Registration", line2Before: "in Chennai, ", accent: "Employer Ready" },
    sub: "Hiring your 10th or 20th employee? We handle PF registration in Chennai and ESI registration together, so you are compliant from your first payroll.",
    badges: heroTrustPoints,
    whatsapp: "Hi National Filings, I'd like a consultation about PF and ESI registration in Chennai.",
  },
  illustration: {
    icon: "Users",
    kicker: "EPFO & ESIC",
    title: "Employer Registration",
    line: "Your Company · Employer code",
    stamp: "Registered",
    chips: ["PF code issued", "ESI code issued", "UANs linked"],
    steps: ["Check", "Documents", "EPFO", "ESIC", "Returns"],
  },

  benefitsSection: {
    title: "Why register for PF and ESI on time",
    lead: "Once your headcount crosses the limit, registration is a legal duty. It also helps you hire and keep staff.",
    cta: {
      title: "Not sure if you need PF, ESI or both?",
      sub: "Tell us your headcount and salaries. We'll tell you exactly which registrations apply.",
      message: "Hi National Filings, do I need PF and ESI registration for my staff?",
    },
  },
  benefits: [
    { icon: "ShieldCheck", title: "Stay compliant", line: "Avoid interest, damages and notices for registering late." },
    { icon: "Users", title: "Attract better staff", line: "Employees value PF savings and ESI medical cover." },
    { icon: "Stethoscope", title: "Medical cover for staff", line: "ESI gives employees and families access to medical care." },
    { icon: "Coins", title: "Retirement savings", line: "PF builds a savings and pension fund for each employee." },
    { icon: "FileCheck2", title: "Tenders and contracts", line: "Many clients ask for PF and ESI codes before awarding work." },
    { icon: "ClipboardCheck", title: "Clean audits", line: "Proper registration makes inspections and audits smoother." },
    { icon: "UserCheck", title: "Portable UAN", line: "Employees keep one PF account across jobs." },
    { icon: "ShieldAlert", title: "Cover for accidents", line: "ESI supports employees through injury and disability." },
  ],

  applicantsSection: {
    title: "Who needs PF and ESI registration in Chennai",
    lead: "The rules depend on how many people you employ and what they earn.",
  },
  applicants: [
    { icon: "Users", title: "20 or more employees", line: "PF registration becomes compulsory." },
    { icon: "UserPlus", title: "10 or more employees", line: "ESI applies in notified areas like Chennai." },
    { icon: "Factory", title: "Factories and units", line: "Manufacturing units with growing headcount." },
    { icon: "Store", title: "Shops and showrooms", line: "Retail businesses with sales and support staff." },
    { icon: "Laptop", title: "IT and service companies", line: "Offices hiring their 10th or 20th employee." },
    { icon: "HardHat", title: "Contractors", line: "Firms supplying labour to sites and clients." },
    { icon: "Stethoscope", title: "Hospitals and clinics", line: "Healthcare providers with nursing and support staff." },
    { icon: "BadgeCheck", title: "Voluntary registration", line: "Smaller employers offering PF as a benefit." },
  ],

  opportunities: {
    eyebrow: "Who we register",
    title: "Employers we register for PF and ESI",
    intro: "From garment units and construction firms to offices and hospitals, ESI registration in Chennai and PF registration protect the people who keep businesses running.",
    // Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "Factory", title: "Factories and garment units", image: "https://images.unsplash.com/photo-1742280924377-3c847791a7fc?auto=format&fit=crop&w=1600&q=90", alt: "Woman sewing at a machine in a garment factory", credit: "EqualStock / Unsplash" },
      { icon: "HardHat", title: "Construction and contract labour", image: "https://images.unsplash.com/photo-1628147529780-36964fbb8d54?auto=format&fit=crop&w=1600&q=90", alt: "Construction workers in hard hats and safety vests", credit: "Mufid Majnun / Unsplash" },
      { icon: "Stethoscope", title: "Hospitals and clinics", image: "https://images.unsplash.com/photo-1778151270682-15e0499454b3?auto=format&fit=crop&w=1600&q=90", alt: "Hospital room with a medical bed and equipment", credit: "Irshad Pathan / Unsplash" },
      { icon: "Laptop", title: "Offices and IT companies", image: "https://images.unsplash.com/photo-1765366417030-16d9765d920a?auto=format&fit=crop&w=1600&q=90", alt: "Modern office floor with white desks and chairs", credit: "The Yardcoworking / Unsplash" },
    ],
  },

  highlights: {
    eyebrow: "PF and ESI at a glance",
    title: "How PF and ESI registration work in Chennai",
    lead: "Both now come under the Code on Social Security, 2020. They cover different needs, and many employers need both.",
    items: [
      { icon: "Users", label: "PF", title: "20 or more employees", line: "Registration with EPFO is compulsory, and voluntary below that.", highlight: true },
      { icon: "Coins", label: "PF", title: "12% + 12% of wages", line: "Employee and employer each contribute, part going to the pension scheme." },
      { icon: "UserPlus", label: "ESI", title: "10 or more employees", line: "For employees earning up to ₹21,000 a month, in notified areas." },
      { icon: "Stethoscope", label: "ESI", title: "3.25% + 0.75%", line: "Employer and employee shares fund medical and cash benefits." },
    ],
  },

  documentsSection: {
    title: "Documents for PF and ESI registration in Chennai",
    lead: "Most of these are your business's own registration papers, plus basic employee details.",
  },
  documents: [
    { icon: "Building2", title: "For the business", items: ["PAN of the business", "Incorporation, partnership or GST certificate", "Address proof of the premises", "Cancelled cheque or bank statement"], hint: "The business name must match across documents." },
    { icon: "UserRound", title: "For the employer", items: ["PAN and Aadhaar of the owner, partners or directors", "Digital signature of the authorised signatory", "Mobile number and email ID"], hint: "Companies and LLPs sign with a DSC." },
    { icon: "Users", title: "For employees", items: ["Names and dates of joining", "Aadhaar, PAN and bank details", "Monthly wages"], hint: "Used to create UANs and ESI numbers." },
  ],
  documentsNote: {
    title: "Start with your headcount and salaries",
    sub: "Send your employee count and wage range. We'll confirm whether PF, ESI or both apply and from when.",
    message: "Hi National Filings, here are my employee details. Do I need PF and ESI?",
  },

  processSection: {
    title: "PF and ESI registration process in Chennai",
    lead: "Five steps from checking coverage to your first monthly returns.",
    cta: {
      title: "Get your PF and ESI codes",
      sub: "Share your business documents and employee list. We'll register you on EPFO and ESIC.",
      message: "Hi National Filings, I'd like to register for PF and ESI in Chennai.",
    },
  },
  steps: [
    { title: "Coverage check", time: "Day 1", sub: "Headcount and wages checked to confirm PF, ESI or both." },
    { title: "Documents", time: "1-2 days", sub: "Business, employer and employee details collected." },
    { title: "EPFO registration", time: "Usually a few days", sub: "Establishment registered online and the PF code issued." },
    { title: "ESIC registration", time: "Usually a few days", sub: "Employer registered with ESIC and the code issued." },
    { title: "Employees and returns", time: "First month", sub: "UANs and ESI numbers created, ready for the first returns." },
  ],
  processNote: "Times are estimates and depend on portal processing. Contributions start from the month coverage applies.",

  mistakesSection: {
    title: "PF and ESI registration mistakes to avoid",
    lead: "Small errors at registration turn into problems at every monthly filing.",
  },
  mistakes: [
    { icon: "CalendarClock", title: "Registering late", problem: "Crossing 10 or 20 employees and waiting months to register.", fix: "We register you as soon as coverage applies." },
    { icon: "IdCard", title: "Mismatched employee KYC", problem: "Names or dates that don't match Aadhaar block UANs and transfers.", fix: "We check every employee's details before filing." },
    { icon: "Calculator", title: "Wrong wage base", problem: "Calculating contributions on the wrong part of the salary.", fix: "We set up contributions on the correct wages." },
    { icon: "Users", title: "Leaving staff out", problem: "Missing contract, part-time or new employees who are covered.", fix: "We review your full staff list for coverage." },
  ],

  costSection: {
    title: "PF and ESI registration cost in Chennai",
    lead: "There is no government fee to register. Your ongoing cost is the monthly contributions.",
    cta: {
      title: "Get a quote for PF and ESI",
      sub: "Tell us your headcount. We'll quote registration, and monthly filing if you want us to handle it.",
      message: "Hi National Filings, can I get a quote for PF and ESI registration in Chennai?",
    },
  },
  costs: [
    { icon: "Landmark", label: "₹0", title: "Government fee", line: "No fee to register with EPFO or ESIC.", highlight: true },
    { icon: "Headset", label: "Quoted upfront", title: "Registration fee", line: "Coverage check, both registrations and employee setup." },
    { icon: "CalendarCheck", label: "Monthly", title: "Return filing", line: "Optional monthly PF and ESI filing, quoted by headcount." },
    { icon: "Coins", label: "Every month", title: "Contributions", line: "Employer and employee shares paid by the 15th." },
  ],

  compliance: {
    eyebrow: "After registration",
    title: "Monthly PF and ESI compliance",
    lead: "Registration is the start. These tasks repeat every month.",
    items: [
      { icon: "FileText", label: "By the 15th", title: "PF return (ECR)", line: "Contributions for each employee filed and paid on the EPFO portal.", highlight: true },
      { icon: "Stethoscope", label: "By the 15th", title: "ESI contributions", line: "Employer and employee shares filed and paid on the ESIC portal." },
      { icon: "UserPlus", label: "As staff join", title: "New joiners", line: "UANs and ESI numbers created for every new employee." },
      { icon: "RefreshCw", label: "As staff leave", title: "Exits and transfers", line: "Exit dates updated so PF can be transferred or withdrawn." },
    ],
  },
  decision: {
    eyebrow: "When to register",
    title: "Do you need PF, ESI or both?",
    lead: "Your headcount and salaries decide which registrations apply.",
    items: [
      { icon: "UserPlus", label: "10+ employees", title: "ESI first", line: "ESI usually applies before PF for employers in Chennai.", highlight: true },
      { icon: "Users", label: "20+ employees", title: "Both", line: "PF becomes compulsory alongside ESI." },
      { icon: "BadgeCheck", label: "Under 20", title: "Voluntary PF", line: "You can register for PF early to offer it as a benefit." },
      { icon: "Lock", label: "Once covered", title: "Stays covered", line: "Coverage generally continues even if your headcount drops later." },
    ],
  },

  reasonsTitle: "Why choose National Filings for PF and ESI registration in Chennai",
  reasons: [
    { icon: "SearchCheck", title: "Coverage checked", line: "We confirm exactly when PF and ESI apply to you." },
    { icon: "Zap", title: "Both in one go", line: "EPFO and ESIC registrations handled together." },
    { icon: "IdCard", title: "Clean employee data", line: "KYC matched so UANs and ESI numbers work first time." },
    { icon: "CalendarCheck", title: "Monthly filing", line: "Optional ECR and ESI filing every month by the 15th." },
    { icon: "ClipboardCheck", title: "Inspection support", line: "Records kept ready for notices and inspections." },
    { icon: "MessageCircle", title: "WhatsApp updates", line: "Codes, challans and confirmations on WhatsApp." },
  ],

  faqTitle: "PF and ESI registration in Chennai: your questions",
  faqs: [
    { q: "When is PF registration compulsory?", a: "When your establishment employs 20 or more people. Employers with fewer staff can register voluntarily. Under the Code on Social Security, 2020, coverage generally continues even if the headcount later falls." },
    { q: "When is ESI registration required in Chennai?", a: "ESI generally applies to establishments with 10 or more employees in notified areas, which include Chennai. It covers employees earning up to ₹21,000 a month." },
    { q: "How much are PF and ESI contributions?", a: "PF is 12% of wages from the employee and 12% from the employer, with part of the employer's share going to the pension scheme. ESI is 3.25% from the employer and 0.75% from the employee." },
    { q: "How long does PF and ESI registration in Chennai take?", a: "Usually a few working days for each, once documents are ready. Both are done online through the EPFO and ESIC portals." },
    { q: "Is there a fee for PF or ESI registration?", a: "No. There is no government fee to register. Our fee covers the coverage check, both registrations and setting up your employees." },
    { q: "What is a UAN?", a: "The Universal Account Number is each employee's permanent PF number. It stays the same across jobs, so their PF moves with them." },
    { q: "What are the monthly compliance deadlines?", a: "Both PF and ESI contributions for a month are due by the 15th of the following month, filed on the EPFO and ESIC portals." },
    { q: "Has anything changed with the new labour codes?", a: "Yes. PF and ESI now come under the Code on Social Security, 2020, in force since 21 November 2025. The basic registration duties remain, but the definition of wages and some rules have changed, so it's worth checking your setup." },
  ],

  related: [
    { icon: "Users", label: "PF and ESI consultant", href: pillarHref("P6") },
    { icon: "Building2", label: "Company registration", href: pillarHref("P1") },
    { icon: "Store", label: "Shop & establishment registration", href: licenceHref("L4") },
    { icon: "ReceiptIndianRupee", label: "GST consultant", href: pillarHref("P2") },
    { icon: "IndianRupee", label: "Income tax consultant", href: pillarHref("P3") },
    { icon: "Signature", label: "Digital signature certificate", href: licenceHref("L6") },
    { icon: "ClipboardCheck", label: "ROC compliance", href: clusterHref("P1-C5") },
    { icon: "Factory", label: "MSME registration", href: licenceHref("L1") },
  ],
  relatedTitle: "Related employer and business services in Chennai",

  final: {
    title: "Register for PF and ESI in Chennai",
    sub: "Tell us your headcount and salaries. We'll confirm what applies and get your employer codes quickly.",
    message: "Hi National Filings, I'd like to register for PF and ESI in Chennai.",
  },
  catalogue: ["PF registration", "ESI registration", "Monthly PF and ESI return filing"],
};
