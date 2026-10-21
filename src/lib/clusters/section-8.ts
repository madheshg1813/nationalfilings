import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { NGO_SERVICE, clusterHref, licenceHref, pillarHref } from "./shared";

/**
 * P4-C3 · Section 8 Company Registration (/chennai/section-8-company-registration-service).
 * Primary keyword: "section 8 company registration in chennai".
 *
 * Facts checked Oct 2026: Companies Act, 2013 s.8; charitable objects with profits applied to them and no dividends;
 * licence for new companies granted through the SPICe+ incorporation filing; at least two directors for a private
 * Section 8 company, one resident in India (182 days); no minimum capital; name usually carries words such as Foundation,
 * Forum, Association, Federation, Council or Chambers; full ROC compliance and audit every year; CSR-1 registration to
 * implement CSR projects. Tax registration and donor approval (formerly 12A and 80G) are sections 332 and 354 of the
 * Income-tax Act, 2025. No prices.
 */

export const section8Page: LicencePageData = {
  id: "P4-C3",
  service: NGO_SERVICE,
  meta: {
    title: "Section 8 Company Registration in Chennai | NGO Experts",
    description: "Section 8 company registration in Chennai: licence, MOA, AOA and SPICe+ filing handled, so your NGO is ready for CSR partners, grants and donors.",
  },
  hero: {
    headline: { line1: "Section 8 Company", line2Before: "Registration ", accent: "in Chennai" },
    sub: "Set up your NGO with the most trusted structure for CSR funding and large grants. We handle Section 8 company registration in Chennai from licence to incorporation.",
    badges: heroTrustPoints,
    whatsapp: "Hi National Filings, I'd like a consultation about Section 8 company registration in Chennai.",
  },
  illustration: {
    icon: "Building2",
    kicker: "Section 8 Company",
    title: "Certificate of Incorporation",
    line: "Your Foundation",
    stamp: "Licensed",
    chips: ["Licence granted", "DIN allotted", "MOA & AOA filed"],
    steps: ["DSC", "Name", "SPICe+", "Licence", "CIN"],
  },

  benefitsSection: {
    title: "Why NGOs choose a Section 8 company in Chennai",
    lead: "It takes more paperwork than a trust or society. Funders and partners value it for exactly that reason.",
    cta: {
      title: "Planning to work with CSR funders?",
      sub: "Tell us about your cause and funding plans. We'll tell you if a Section 8 company is worth it for you.",
      message: "Hi National Filings, is a Section 8 company right for my NGO?",
    },
  },
  benefits: [
    { icon: "BadgeCheck", title: "Highest credibility", line: "Registered with the MCA, with public records and audited accounts." },
    { icon: "Handshake", title: "Preferred by CSR funders", line: "Many companies prefer Section 8 partners for their CSR projects." },
    { icon: "ShieldCheck", title: "Limited liability", line: "Members' liability is limited, unlike in many trusts and societies." },
    { icon: "Coins", title: "No minimum capital", line: "Start with whatever capital your NGO needs." },
    { icon: "Building2", title: "Separate legal entity", line: "Owns assets, signs agreements and continues as people change." },
    { icon: "Globe", title: "Works across India", line: "One registration for work in any state." },
    { icon: "ReceiptIndianRupee", title: "Tax registration eligible", line: "Can apply for income tax registration and donor approval." },
    { icon: "Users", title: "Clear governance", line: "A board, members and company law rules for decisions." },
  ],

  applicantsSection: {
    title: "Who should consider Section 8 company registration in Chennai",
    lead: "A Section 8 company suits NGOs that plan to grow, take on large grants or work with corporates.",
  },
  applicants: [
    { icon: "Handshake", title: "NGOs seeking CSR funds", line: "Organisations planning to run CSR projects for companies." },
    { icon: "GraduationCap", title: "Education foundations", line: "Schools, skill centres and scholarship programmes." },
    { icon: "Stethoscope", title: "Health foundations", line: "Clinics, health camps and patient support." },
    { icon: "Leaf", title: "Environmental NGOs", line: "Conservation, climate and sustainability work." },
    { icon: "Briefcase", title: "Corporate foundations", line: "Companies setting up their own charitable arm." },
    { icon: "Award", title: "Sports and arts bodies", line: "Promoting sports, arts, culture and science." },
    { icon: "Globe", title: "Multi-state NGOs", line: "Organisations working in more than one state." },
    { icon: "Rocket", title: "Social enterprises", line: "Not-for-profit ventures with a structured board." },
  ],

  opportunities: {
    eyebrow: "Where Section 8 companies work",
    title: "The work Section 8 companies do in Chennai",
    intro: "Section 8 company registration in Chennai suits NGOs running structured programmes, from skill training and education to environment projects funded by CSR partners.",
    // Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "Leaf", title: "Environment projects", image: "https://images.unsplash.com/photo-1777150895644-2ca253ee1c93?auto=format&fit=crop&w=1600&q=90", alt: "Two pairs of hands planting a seedling in soil", credit: "Hammilton Ojijo / Unsplash" },
      { icon: "Briefcase", title: "Skill development", image: "https://images.unsplash.com/photo-1616674202799-054e7c831378?auto=format&fit=crop&w=1600&q=90", alt: "Women learning tailoring on sewing machines", credit: "Shirdi Sai Baba Society / Unsplash" },
      { icon: "GraduationCap", title: "Education programmes", image: "https://images.unsplash.com/photo-1642140027867-e5983a32119c?auto=format&fit=crop&w=1600&q=90", alt: "Smiling schoolboy in a uniform and tie", credit: "Anjan / Unsplash" },
      { icon: "Handshake", title: "CSR partnerships", image: "https://images.unsplash.com/photo-1758691736664-0b83e4f1215e?auto=format&fit=crop&w=1600&q=90", alt: "Woman presenting to a small audience in a meeting room", credit: "Vitaly Gariev / Unsplash" },
    ],
  },

  highlights: {
    eyebrow: "How it works",
    title: "Rules every Section 8 company follows",
    lead: "These conditions are what make a Section 8 company trustworthy to funders.",
    items: [
      { icon: "Leaf", label: "Objects", title: "Charitable purposes only", line: "Commerce, art, science, sports, education, research, social welfare, charity and similar objects.", highlight: true },
      { icon: "Lock", label: "Profits", title: "No dividends", line: "Any surplus is used for the objects, never paid to members." },
      { icon: "BadgeCheck", label: "Licence", title: "Granted at incorporation", line: "For a new company, the licence comes through the SPICe+ filing." },
      { icon: "FileText", label: "Name", title: "A descriptive name", line: "Usually ends in words like Foundation, Forum, Association or Council." },
    ],
  },

  documentsSection: {
    title: "Documents for Section 8 company registration in Chennai",
    lead: "Similar to a private limited company, with an estimate of income and expenditure added.",
  },
  documents: [
    { icon: "UserRound", title: "For each director and member", items: ["PAN card", "Aadhaar, passport or voter ID", "Recent bank statement or utility bill", "Passport-size photo", "Email ID and mobile number"], hint: "At least two directors, one resident in India." },
    { icon: "Home", title: "For the registered office", items: ["Recent utility bill", "Rent agreement, if rented", "No objection letter from the owner"], hint: "A home or donated space works with the owner's letter." },
    { icon: "FileText", title: "For the company", items: ["Proposed names", "Objects of the NGO", "Estimated income and expenditure for the next few years", "Planned activities"], hint: "We prepare the MOA, AOA and declarations." },
  ],
  documentsNote: {
    title: "Start with your objects and directors",
    sub: "Tell us what your NGO will do and who will lead it. We'll check names and prepare the documents.",
    message: "Hi National Filings, I'd like to start Section 8 company registration. Here are our details.",
  },

  processSection: {
    title: "Section 8 company registration process in Chennai",
    lead: "Five steps, from digital signatures to a licensed, incorporated NGO.",
    cta: {
      title: "Start your Section 8 company",
      sub: "Share director details and your NGO's objects. We'll begin with digital signatures and a name check.",
      message: "Hi National Filings, I'd like to start Section 8 company registration in Chennai.",
    },
  },
  steps: [
    { title: "Digital signatures", time: "1-2 days", sub: "DSCs for the directors and subscribers." },
    { title: "Name approval", time: "2-4 working days", sub: "Names checked and reserved with the MCA." },
    { title: "SPICe+ filing", time: "After name approval", sub: "MOA, AOA, declarations and income estimates filed for licence and incorporation." },
    { title: "Licence and review", time: "Usually 1-3 weeks", sub: "The MCA reviews the application and may raise queries." },
    { title: "Certificate of Incorporation", time: "On approval", sub: "Issued with CIN, PAN and TAN, with the Section 8 licence." },
  ],
  processNote: "Timelines are estimates. MCA review of Section 8 applications can take longer than for other companies.",

  mistakesSection: {
    title: "Section 8 registration mistakes that cause delays",
    lead: "Applications are often returned for details that could have been fixed beforehand.",
  },
  mistakes: [
    { icon: "FileWarning", title: "Commercial-sounding objects", problem: "Objects that read like a business get questioned.", fix: "We draft objects that clearly fit Section 8." },
    { icon: "Calculator", title: "Unrealistic income estimates", problem: "Projections that don't match the planned work.", fix: "We prepare estimates based on your actual programmes." },
    { icon: "FileText", title: "Name without the right wording", problem: "Names that don't reflect a not-for-profit body.", fix: "We suggest names that fit the rules and are available." },
    { icon: "CalendarClock", title: "Forgetting yearly compliance", problem: "Section 8 companies have full ROC filings and an audit.", fix: "We set up the compliance calendar from day one." },
  ],

  costSection: {
    title: "Section 8 company registration cost factors in Chennai",
    lead: "Costs are similar to a private limited company. We quote each part upfront.",
    cta: {
      title: "Get a quote for your Section 8 company",
      sub: "Tell us the number of directors and your NGO's plans. We'll confirm government fees and our fee.",
      message: "Hi National Filings, can I get a quote for Section 8 company registration in Chennai?",
    },
  },
  costs: [
    { icon: "Signature", label: "Per director", title: "Digital signatures", line: "One for each director and subscriber." },
    { icon: "Landmark", label: "Set by MCA", title: "Government fees", line: "Name reservation and incorporation filing fees.", highlight: true },
    { icon: "Stamp", label: "As per state rules", title: "Stamp duty", line: "On the MOA and AOA under Tamil Nadu rates." },
    { icon: "Headset", label: "Quoted upfront", title: "Professional fee", line: "Drafting, filing, query replies and post-incorporation steps." },
  ],

  compliance: {
    eyebrow: "After incorporation",
    title: "Compliance for a Section 8 company",
    lead: "A Section 8 company follows company law every year, plus the conditions of its licence.",
    items: [
      { icon: "CalendarCheck", label: "Every year", title: "ROC annual filings", line: "AGM, audited accounts in AOC-4 and the annual return." },
      { icon: "SearchCheck", label: "Every year", title: "Statutory audit", line: "Accounts audited by a chartered accountant, whatever the income." },
      { icon: "ReceiptIndianRupee", label: "Recommended", title: "12A and 80G", line: "Income tax registration and donor approval, now sections 332 and 354.", highlight: true },
      { icon: "Handshake", label: "For CSR funds", title: "CSR-1 registration", line: "Registration with the MCA before running CSR projects for companies." },
    ],
  },
  decision: {
    eyebrow: "Comparing structures",
    title: "Section 8 company, trust or society?",
    lead: "Choose a Section 8 company when credibility with funders matters more than simplicity.",
    items: [
      { icon: "Building2", label: "Section 8", title: "Most formal", line: "MCA registered, with strong governance and public records.", highlight: true },
      { icon: "ScrollText", label: "Trust", title: "Simplest", line: "Quick to set up and run by a few trustees." },
      { icon: "Users", label: "Society", title: "Member-run", line: "Seven or more members with an elected body." },
      { icon: "Coins", label: "Section 8", title: "More upkeep", line: "Annual ROC filings and audit add cost, but build trust." },
    ],
  },

  reasonsTitle: "Why choose National Filings for Section 8 company registration in Chennai",
  reasons: [
    { icon: "FileSignature", title: "Objects that pass review", line: "MOA objects drafted to fit Section 8 clearly." },
    { icon: "Calculator", title: "Realistic estimates", line: "Income and expenditure projections built from your plans." },
    { icon: "MessageCircle", title: "MCA queries handled", line: "We reply to queries so the application keeps moving." },
    { icon: "ReceiptIndianRupee", title: "Tax registration next", line: "12A and 80G applications prepared after incorporation." },
    { icon: "CalendarCheck", title: "Compliance calendar", line: "ROC, audit and tax dates tracked from the first year." },
    { icon: "ReceiptText", title: "Clear quote", line: "Government fees and our fee listed separately." },
  ],

  faqTitle: "Section 8 company registration in Chennai: your questions",
  faqs: [
    { q: "What is a Section 8 company?", a: "A company formed under section 8 of the Companies Act, 2013 to promote charitable objects such as education, health, art, sports, social welfare or environment protection. It applies any income to those objects and cannot pay dividends to its members." },
    { q: "How many directors does a Section 8 company need?", a: "A private Section 8 company needs at least two directors and two members, and at least one director must have stayed in India for 182 days or more in the previous calendar year." },
    { q: "Is there a minimum capital for a Section 8 company?", a: "No. There is no minimum capital requirement. You choose the capital based on your NGO's needs." },
    { q: "How long does Section 8 company registration in Chennai take?", a: "Usually a few weeks once documents are ready, covering digital signatures, name approval and the MCA's review of the licence and incorporation. MCA queries can add time." },
    { q: "Does a Section 8 company need a separate licence application?", a: "For a new company, the licence is granted through the SPICe+ incorporation filing itself. Existing companies converting to Section 8 follow a separate licence process." },
    { q: "Can a Section 8 company receive CSR funds?", a: "Yes. To implement CSR projects for companies, it registers with the MCA in Form CSR-1, and most funders also expect income tax registration and donor approval." },
    { q: "Is a Section 8 company better than a trust?", a: "It is more credible with large funders and works across India, but costs more to run because of ROC filings and the audit. A trust is simpler for a small, local cause." },
    { q: "Does a Section 8 company get tax exemption automatically?", a: "No. It must apply for income tax registration and donor approval separately, now under sections 332 and 354 of the Income-tax Act, 2025." },
  ],

  related: [
    { icon: "HeartHandshake", label: "NGO registration", href: pillarHref("P4") },
    { icon: "ScrollText", label: "Trust registration", href: clusterHref("P4-C1") },
    { icon: "Users", label: "Society registration", href: clusterHref("P4-C2") },
    { icon: "ReceiptIndianRupee", label: "12A and 80G registration", href: clusterHref("P4-C4") },
    { icon: "ClipboardCheck", label: "ROC compliance", href: clusterHref("P1-C5") },
    { icon: "Building2", label: "Company registration", href: pillarHref("P1") },
    { icon: "Signature", label: "Digital signature certificate", href: licenceHref("L6") },
    { icon: "IndianRupee", label: "Income tax consultant", href: pillarHref("P3") },
  ],
  relatedTitle: "Related NGO services in Chennai",

  final: {
    title: "Register your Section 8 company in Chennai",
    sub: "Tell us about your NGO's objects and directors. We'll handle the licence and incorporation from start to finish.",
    message: "Hi National Filings, I'd like to register a Section 8 company in Chennai.",
  },
  catalogue: ["Section 8 company incorporation", "Section 8 licence", "CSR-1 registration support"],
};
