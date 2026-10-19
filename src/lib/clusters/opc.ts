import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { SERVICE, clusterHref, licenceHref, pillarHref, relatedTitle } from "./shared";

/**
 * P1-C2 · One Person Company Registration (/chennai/one-person-company-registration-service).
 * Primary keyword: "one person company registration in chennai". Secondary: "opc registration in chennai".
 *
 * Eligibility as amended from 1 April 2021 (Companies (Incorporation) Second Amendment Rules, 2021), checked Oct 2026:
 * only a natural person who is an Indian citizen, NRIs included; the nominee must also be an Indian citizen; one OPC per person;
 * no paid-up capital or turnover cap and voluntary conversion at any time. Every company still needs one director who stayed
 * in India for 182 days in the previous calendar year (Companies Act s.149(3)). No prices or guaranteed timelines.
 */

const whatsapp = "Hi National Filings, I'd like guidance on one person company registration in Chennai.";

export const opcPage: LicencePageData = {
  id: "P1-C2",
  service: SERVICE,
  meta: {
    title: "One Person Company Registration in Chennai | OPC Experts",
    description: "One person company registration in Chennai for solo founders. Nominee consent, DSC, DIN and SPICe+ filing done for you, with fees confirmed upfront.",
  },
  hero: {
    headline: { line1: "One Person Company", line2Before: "Registration ", accent: "in Chennai" },
    sub: "Own a company on your own, with limited liability and no partner to find. We handle one person company registration in Chennai, including your nominee's consent.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "UserRound",
    kicker: "One Person Company",
    title: "OPC Incorporation",
    line: "Your Name (OPC) Pvt Ltd",
    stamp: "Incorporated",
    chips: ["Nominee consent", "DIN allotted", "Name approved"],
    steps: ["DSC", "Name", "Nominee", "SPICe+", "CIN"],
  },

  benefitsSection: {
    title: "Why solo founders choose OPC registration in Chennai",
    lead: "An OPC gives one person the standing of a company without needing a co-founder.",
    cta: {
      title: "Is an OPC better than a proprietorship for you?",
      sub: "Tell us your turnover plans and the risks in your work. We'll compare the two honestly.",
      message: "Hi National Filings, should I register an OPC or stay a proprietorship?",
    },
  },
  benefits: [
    { icon: "ShieldCheck", title: "Limited liability", line: "Your personal savings and home stay separate from the company's debts." },
    { icon: "UserRound", title: "Full control", line: "You are the only shareholder, and usually the only director too." },
    { icon: "BadgeCheck", title: "Company status", line: "Clients and banks deal with a registered company, not an individual." },
    { icon: "Users", title: "Built-in succession", line: "Your nominee takes over as member if you can no longer run it." },
    { icon: "ClipboardCheck", title: "Fewer meetings", line: "No AGM, and simpler board meeting rules than a private limited company." },
    { icon: "TrendingUp", title: "Room to grow", line: "Convert to a private limited company whenever you add shareholders." },
    { icon: "Landmark", title: "Borrow in the company's name", line: "Build the company's own credit history with banks and lenders." },
    { icon: "Coins", title: "No minimum capital", line: "Start with the capital you need. There is no prescribed minimum." },
  ],

  applicantsSection: {
    title: "Who can register a one person company",
    lead: "The rules are narrower than for other companies. Check these before you start.",
  },
  applicants: [
    { icon: "IdCard", title: "Indian citizens", line: "Only a natural person who is an Indian citizen can form an OPC." },
    { icon: "Plane", title: "NRIs", line: "Indian citizens living abroad can form one since 2021." },
    { icon: "MapPinned", title: "Resident director", line: "One director must have spent 182 days in India in the previous calendar year." },
    { icon: "Lock", title: "One OPC each", line: "A person can be a member of only one OPC, and nominee in only one." },
    { icon: "ShieldAlert", title: "Not for minors", line: "A minor can't be a member or nominee of an OPC." },
    { icon: "Briefcase", title: "Most activities", line: "OPCs cannot carry on non-banking financial investment activity." },
    { icon: "UserCheck", title: "A willing nominee", line: "An adult Indian citizen who agrees in writing to be your nominee." },
    { icon: "Building2", title: "Not for non-profits", line: "An OPC can't be set up or converted into a Section 8 company." },
  ],

  opportunities: {
    eyebrow: "Solo founders",
    title: "Solo founders who choose an OPC in Chennai",
    intro: "One person company registration in Chennai suits people who work alone but want the standing of a company, from freelancers to independent consultants.",
    // Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "Laptop", title: "Freelance professionals", image: "https://images.unsplash.com/photo-1758874573562-5bf0c1a7fc72?auto=format&fit=crop&w=1600&q=90", alt: "Freelancer smiling while working on a laptop at home", credit: "Vitaly Gariev / Unsplash" },
      { icon: "FilePen", title: "Designers and illustrators", image: "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?auto=format&fit=crop&w=1600&q=90", alt: "Illustrator drawing on a tablet with a stylus", credit: "Kelly Sikkema / Unsplash" },
      { icon: "Briefcase", title: "Independent consultants", image: "https://images.unsplash.com/photo-1752159684779-0639174cdfac?auto=format&fit=crop&w=1600&q=90", alt: "Two business people shaking hands on a deal", credit: "Ambre Estève / Unsplash" },
      { icon: "Users", title: "Trainers and coaches", image: "https://images.unsplash.com/photo-1549995546-87cb41aa98a4?auto=format&fit=crop&w=1600&q=90", alt: "Instructor-led fitness class stretching in a gym", credit: "Photo Genius / Unsplash" },
    ],
  },

  highlights: {
    eyebrow: "The nominee",
    title: "Nominee requirements for OPC registration in Chennai",
    lead: "Every OPC names a nominee who becomes the member if the owner dies or becomes incapable of contracting.",
    items: [
      { icon: "UserPlus", label: "Required", title: "One nominee", line: "Named in the MOA at the time of incorporation.", highlight: true },
      { icon: "IdCard", label: "Indian citizen", title: "Eligibility", line: "The nominee must be an adult Indian citizen, and can't be a nominee in another OPC." },
      { icon: "FileSignature", label: "Form INC-3", title: "Written consent", line: "The nominee's signed consent is filed with the incorporation form." },
      { icon: "RefreshCw", label: "Any time", title: "Changing the nominee", line: "You can replace the nominee later by notice and an ROC filing." },
    ],
  },

  documentsSection: {
    title: "Documents for OPC registration in Chennai",
    lead: "You'll need documents for yourself, your nominee and the office address.",
  },
  documents: [
    { icon: "UserRound", title: "For you (owner and director)", items: ["PAN card", "Aadhaar or passport", "Bank statement or utility bill, under two months old", "Passport-size photo", "Email ID and mobile number"], hint: "NRIs need a passport and an overseas address proof." },
    { icon: "UserPlus", title: "For the nominee", items: ["PAN card", "Aadhaar or passport", "Signed consent in Form INC-3"], hint: "We prepare INC-3 for the nominee to sign." },
    { icon: "Building2", title: "For the registered office", items: ["Recent utility bill", "Rent agreement, if rented", "No objection letter from the owner"], hint: "Your home address can be used." },
  ],
  documentsNote: {
    title: "Pick your nominee first",
    sub: "Most delays come from a nominee who isn't ready to sign. Share both sets of documents on WhatsApp and we'll check them together.",
    message: "Hi National Filings, I'd like to send my documents and my nominee's for OPC registration.",
  },

  processSection: {
    title: "OPC registration process in Chennai",
    lead: "The steps follow private limited registration, with the nominee's consent added.",
    cta: {
      title: "Get OPC registration guidance",
      sub: "Tell us your business idea and who your nominee will be. We'll confirm eligibility before anything is filed.",
      message: "Hi National Filings, I need guidance on registering a one person company.",
    },
  },
  steps: [
    { title: "Eligibility check", time: "Day 1", sub: "We confirm your citizenship, residency and nominee before starting." },
    { title: "Digital signature", time: "1-2 days", sub: "A DSC for you as director and subscriber." },
    { title: "Name approval", time: "2-4 working days", sub: "Names end in \"(OPC) Private Limited\" and are checked before filing." },
    { title: "SPICe+ filing", time: "After name approval", sub: "With MOA, AOA and the nominee's INC-3 consent." },
    { title: "Certificate of Incorporation", time: "Usually 5-10 working days", sub: "Issued with CIN, PAN and TAN after the registrar's review." },
  ],
  processNote: "Times are estimates and depend on MCA processing. Most OPCs are incorporated in two to three weeks.",

  mistakesSection: {
    title: "OPC registration mistakes we help you avoid",
    lead: "OPC rules trip people up in ways that don't apply to other companies.",
  },
  mistakes: [
    { icon: "UserPlus", title: "Ineligible nominee", problem: "A nominee who is a minor, a foreign national or already a nominee elsewhere.", fix: "We check the nominee's eligibility before the MOA is drafted." },
    { icon: "Shuffle", title: "Wrong structure for co-founders", problem: "Choosing an OPC when a partner will soon join as a shareholder.", fix: "We ask about your plans first. A private limited company may save a conversion later." },
    { icon: "FileWarning", title: "Name without the OPC suffix", problem: "The name must carry \"(OPC)\" before \"Private Limited\".", fix: "We frame names in the required form and check them for conflicts." },
    { icon: "CalendarClock", title: "Missing yearly filings", problem: "Owners assume a one-person company has nothing to file.", fix: "We set up a compliance calendar from the first year." },
  ],

  costSection: {
    title: "OPC registration cost factors in Chennai",
    lead: "An OPC usually costs less to set up than a two-director company. Here is what goes into the total.",
    cta: {
      title: "Get a quote for your OPC",
      sub: "Tell us the capital you plan to start with. We'll list government fees, stamp duty and our fee.",
      message: "Hi National Filings, can I get a quote for one person company registration?",
    },
  },
  costs: [
    { icon: "Signature", label: "One DSC", title: "Digital signature", line: "Usually only one, for you as the sole director." },
    { icon: "Landmark", label: "Set by MCA", title: "Government filing fees", line: "Name and incorporation fees, which depend on authorised capital.", highlight: true },
    { icon: "Stamp", label: "As per state rules", title: "Stamp duty", line: "On the MOA and AOA at Tamil Nadu rates." },
    { icon: "Headset", label: "Quoted upfront", title: "Professional fee", line: "Eligibility check, drafting, nominee paperwork and filing." },
  ],

  compliance: {
    eyebrow: "Ongoing compliance",
    title: "OPC compliance after registration",
    lead: "An OPC has fewer formalities than a private limited company, but the annual filings still apply.",
    items: [
      { icon: "SearchCheck", label: "Every year", title: "Statutory audit", line: "Accounts are audited by a chartered accountant, whatever the turnover." },
      { icon: "FileText", label: "Within 180 days of year end", title: "AOC-4 financial statements", line: "Filed with the ROC. No cash flow statement is required.", highlight: true },
      { icon: "CalendarCheck", label: "Every year", title: "Annual return", line: "Filed in Form MGT-7A, along with DIR-3 KYC for the director." },
      { icon: "Calculator", label: "Every year", title: "Income tax return", line: "The OPC is taxed as a company, separately from your personal income." },
    ],
  },
  decision: {
    eyebrow: "Is an OPC right for you?",
    title: "When another structure may suit you better",
    lead: "An OPC is a good fit for one owner. Some plans call for a different choice from the start.",
    items: [
      { icon: "Building2", title: "Bringing in a co-founder or investor", line: "A private limited company allows more shareholders without conversion paperwork." },
      { icon: "Store", title: "Testing a small idea", line: "A proprietorship is cheaper to start and run while turnover is low." },
      { icon: "Handshake", title: "Working with a partner", line: "An LLP gives two partners limited liability with lighter compliance." },
      { icon: "Users", title: "Family business with shared ownership", line: "A partnership firm or LLP lets relatives hold clear shares from the start." },
    ],
  },

  reasonsTitle: "Why choose National Filings for OPC registration in Chennai",
  reasons: [
    { icon: "SearchCheck", title: "Eligibility checked first", line: "Citizenship, residency and nominee rules confirmed before filing." },
    { icon: "FileSignature", title: "Nominee paperwork handled", line: "INC-3 prepared and explained to your nominee." },
    { icon: "ReceiptText", title: "Clear quote", line: "Government fees and our fee listed separately." },
    { icon: "UserCheck", title: "One contact", line: "The same expert from DSC to Certificate of Incorporation." },
    { icon: "RefreshCw", title: "Conversion support", line: "Help when you're ready to become a private limited company." },
    { icon: "MessageCircle", title: "WhatsApp updates", line: "Status updates on WhatsApp, Monday to Saturday." },
  ],

  faqTitle: "One person company registration in Chennai: your questions",
  faqs: [
    { q: "Who can register a one person company?", a: "Only a natural person who is an Indian citizen. Since April 2021, NRIs who are Indian citizens can also form one. Foreign nationals and companies cannot. A person can be a member of only one OPC at a time." },
    { q: "Who can be the nominee of an OPC?", a: "An adult Indian citizen who agrees in writing by signing Form INC-3. The nominee can't be a minor or a nominee in another OPC. Many owners choose a spouse, parent or sibling." },
    { q: "Is there a turnover or capital limit for an OPC?", a: "Not any more. The 2021 rule changes removed the paid-up capital and turnover limits that used to force OPCs to convert. You can now convert to a private or public company whenever you choose." },
    { q: "How long does OPC registration in Chennai take?", a: "Most OPCs are incorporated in two to three weeks once documents and the nominee's consent are ready. MCA processing time and any queries can change this." },
    { q: "Does an OPC need an audit and an AGM?", a: "It needs an annual audit, whatever its turnover. It does not need to hold an AGM. It files financial statements in AOC-4 and an annual return in MGT-7A each year." },
    { q: "How is an OPC taxed?", a: "As a company, at company tax rates, separately from your personal income. Your salary from the OPC is taxed in your hands. Whether this saves tax compared with a proprietorship depends on your income, so we compare both with you." },
    { q: "Is OPC registration in Chennai better than a proprietorship?", a: "It gives limited liability and company status, but costs more to run because of the audit and ROC filings. If your work carries real financial risk or you need credibility with large clients, an OPC is often worth it." },
  ],

  related: [
    { icon: "Building2", label: "Company registration", href: pillarHref("P1") },
    { icon: "Building2", label: "Private limited registration", href: clusterHref("P1-C6") },
    { icon: "Store", label: "Proprietorship registration", href: clusterHref("P1-C4") },
    { icon: "ClipboardCheck", label: "ROC compliance", href: clusterHref("P1-C5") },
    { icon: "ReceiptIndianRupee", label: "GST consultant", href: pillarHref("P2") },
    { icon: "Factory", label: "MSME registration", href: licenceHref("L1") },
    { icon: "Handshake", label: "LLP registration", href: clusterHref("P1-C1") },
    { icon: "Signature", label: "Digital signature certificate", href: licenceHref("L6") },
  ],
  relatedTitle,

  final: {
    title: "Get OPC registration guidance in Chennai",
    sub: "Tell us about your business and nominee. We'll confirm you're eligible and explain each step before we file.",
    message: "Hi National Filings, I'd like guidance on registering a one person company in Chennai.",
  },
  catalogue: ["One person company incorporation", "Nominee consent filing", "OPC annual compliance"],
};
