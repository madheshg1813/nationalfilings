import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { SERVICE, clusterHref, licenceHref, pillarHref, relatedTitle } from "./shared";

/**
 * P1-C6 · Private Limited Company Registration (/chennai/private-limited-registration-service).
 * Primary keyword: "private limited registration in chennai".
 * Kept distinct from the P1 pillar: the pillar compares structures, this page covers incorporation in detail.
 *
 * Facts checked against the Companies Act, 2013 and current MCA practice (Oct 2026): two directors and two shareholders,
 * one director resident in India (182 days in the previous calendar year); no minimum capital; SPICe+ with e-MOA,
 * e-AOA and AGILE-PRO-S; no MCA incorporation fee up to ₹15 lakh authorised capital, but state stamp duty applies;
 * INC-20A within 180 days; auditor within 30 days. Timelines are estimates.
 */

const whatsapp = "Hi National Filings, I'd like a consultation about private limited company registration.";

export const privateLimitedPage: LicencePageData = {
  id: "P1-C6",
  service: SERVICE,
  meta: {
    title: "Private Limited Registration in Chennai | National Filings",
    description: "Private limited registration in Chennai through SPICe+, with DSC, DIN, MOA and AOA handled. Get your CIN, PAN and TAN with clear fees and expert help.",
  },
  hero: {
    headline: { line1: "Private Limited Registration", line2Before: "in Chennai, ", accent: "Investor Ready" },
    sub: "Build a company that banks, clients and investors take seriously. We take your private limited registration in Chennai from name approval to the Certificate of Incorporation.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "Building2",
    kicker: "Private Limited Company",
    title: "Certificate of Incorporation",
    line: "Your Company Pvt Ltd",
    stamp: "CIN issued",
    chips: ["DIN allotted", "MOA & AOA filed", "PAN & TAN"],
    steps: ["DSC", "Name", "SPICe+", "Review", "CIN"],
  },

  benefitsSection: {
    title: "What a private limited company gives your Chennai business",
    lead: "It costs more to run than a partnership or LLP. These are the reasons founders still choose it.",
    cta: {
      title: "Weighing private limited against an LLP?",
      sub: "Tell us your plans for funding and hiring. We'll tell you which structure fits, even if it's not this one.",
      message: "Hi National Filings, should I register a private limited company or an LLP?",
    },
  },
  benefits: [
    { icon: "TrendingUp", title: "Raise equity", line: "Issue shares to angel investors and funds, and grant ESOPs to your team." },
    { icon: "ShieldCheck", title: "Limited liability", line: "Shareholders risk only the amount they invested in their shares." },
    { icon: "BadgeCheck", title: "Credibility", line: "Large clients, banks and tender committees often prefer a company." },
    { icon: "ArrowLeftRight", title: "Easy ownership transfer", line: "Shares can change hands without dissolving the business." },
    { icon: "Rocket", title: "Startup recognition", line: "A company can apply for DPIIT startup recognition once eligible." },
    { icon: "Building2", title: "Perpetual existence", line: "The company continues regardless of changes in directors or owners." },
    { icon: "Landmark", title: "Easier bank credit", line: "Banks and lenders assess the company on its own balance sheet and track record." },
    { icon: "UserCheck", title: "Separate legal entity", line: "The company owns assets, signs contracts and can sue in its own name." },
  ],

  applicantsSection: {
    title: "Businesses that benefit from private limited registration in Chennai",
    lead: "A private limited company suits founders who plan to grow, hire and bring in outside money.",
  },
  applicants: [
    { icon: "Rocket", title: "Funded startups", line: "Founders planning angel or venture rounds." },
    { icon: "Laptop", title: "Tech and SaaS companies", line: "Teams that want to offer ESOPs to early hires." },
    { icon: "Factory", title: "Manufacturers", line: "Units that need bank credit and supplier trust." },
    { icon: "Globe", title: "Export businesses", line: "Firms dealing with foreign buyers and partners." },
    { icon: "Users", title: "Co-founded businesses", line: "Two or more founders with clear shareholdings." },
    { icon: "Briefcase", title: "Firms bidding for contracts", line: "Businesses chasing corporate and government work." },
    { icon: "ShoppingCart", title: "D2C and ecommerce brands", line: "Brands planning to scale or sell through large retailers." },
    { icon: "GraduationCap", title: "Education ventures", line: "Institutes and edtech businesses building for the long term." },
  ],

  opportunities: {
    eyebrow: "Sectors",
    title: "Sectors that choose private limited registration in Chennai",
    intro: "From tech startups to manufacturers and exporters, Chennai businesses that plan to hire, raise funds or win large contracts usually start as a private limited company.",
    // Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "Laptop", title: "Tech startups", image: "https://images.unsplash.com/photo-1716703742354-c3c45ecc3b27?auto=format&fit=crop&w=1600&q=90", alt: "Founders talking together in a startup office", credit: "Musemind UX Agency / Unsplash" },
      { icon: "Factory", title: "Manufacturing units", image: "https://images.unsplash.com/photo-1764115424737-25aca6f47835?auto=format&fit=crop&w=1600&q=90", alt: "Metal fabrication workshop with a CNC cutting machine", credit: "Zoshua Colah / Unsplash" },
      { icon: "ShoppingCart", title: "Ecommerce and D2C brands", image: "https://images.unsplash.com/photo-1618381297523-e6c0ab13a5b2?auto=format&fit=crop&w=1600&q=90", alt: "Cardboard shipping box with a blank address label", credit: "Mediamodifier / Unsplash" },
      { icon: "Ship", title: "Exporters and importers", image: "https://images.unsplash.com/photo-1759216373394-91146ca977c7?auto=format&fit=crop&w=1600&q=90", alt: "Container port with cranes and a cargo ship", credit: "Haris Illahi / Unsplash" },
    ],
  },

  highlights: {
    eyebrow: "Who runs the company",
    title: "Directors and shareholders in a private limited company",
    lead: "Directors manage the company and shareholders own it. The same two people can be both.",
    items: [
      { icon: "UserCheck", label: "Minimum 2", title: "Directors", line: "Up to 15 without a special resolution. Each needs a DIN and a digital signature." },
      { icon: "MapPinned", label: "At least 1", title: "Resident director", line: "One director must have stayed in India for 182 days or more in the previous calendar year.", highlight: true },
      { icon: "Users", label: "2 to 200", title: "Shareholders", line: "Individuals or companies. Members can be the directors themselves." },
      { icon: "Coins", label: "No minimum", title: "Share capital", line: "Choose authorised capital to suit your plans. It affects fees and stamp duty." },
    ],
  },

  documentsSection: {
    title: "Documents for private limited registration in Chennai",
    lead: "Clear scans work. Every name, date of birth and address must match across documents.",
  },
  documents: [
    { icon: "UserRound", title: "For each director and shareholder", items: ["PAN card", "Aadhaar, passport or voter ID", "Bank statement or utility bill, under two months old", "Passport-size photo", "Personal email ID and mobile number"], hint: "Foreign directors need apostilled or notarised documents." },
    { icon: "Building2", title: "For the registered office", items: ["Recent electricity, water or gas bill", "Rent or lease agreement, if rented", "No objection letter from the owner"], hint: "A home address works if the owner gives a no objection letter." },
    { icon: "FileText", title: "For the company", items: ["Two proposed names", "Main business objects", "Authorised and paid-up capital", "Shareholding pattern"], hint: "These details shape your MOA and AOA." },
  ],
  documentsNote: {
    title: "Not sure your office address qualifies?",
    sub: "Send a photo of the bill and tell us who owns the property. We'll confirm before you print anything.",
    message: "Hi National Filings, can you check my registered office documents for company registration?",
  },

  processSection: {
    title: "Private limited registration process in Chennai",
    lead: "Most companies are incorporated within two to three weeks of complete documents. Here is where the time goes.",
    cta: {
      title: "Start your company registration",
      sub: "Share director details and two name ideas. We begin with digital signatures and a name search.",
      message: "Hi National Filings, I want to start private limited company registration. What do you need from me?",
    },
  },
  steps: [
    { title: "Digital signatures", time: "1-2 days", sub: "DSCs for every director and subscriber, issued after verification." },
    { title: "Name approval", time: "2-4 working days", sub: "SPICe+ Part A with names checked against MCA and trademark records." },
    { title: "SPICe+ filing", time: "After name approval", sub: "Part B with e-MOA, e-AOA and AGILE-PRO-S, DINs applied in the same form." },
    { title: "Registrar review", time: "Usually 5-10 working days", sub: "The MCA checks the filing and may raise a query." },
    { title: "Certificate of Incorporation", time: "On approval", sub: "Issued with CIN, PAN and TAN. EPFO and ESIC numbers follow." },
  ],
  processNote: "Timelines are estimates. MCA workload, name objections and resubmissions can add time.",

  mistakesSection: {
    title: "Common reasons private limited registrations get delayed",
    lead: "The registrar can send a filing back for resubmission. These are the issues we see most often.",
  },
  mistakes: [
    { icon: "FileWarning", title: "Name rejected", problem: "The name matches an existing company or trademark, or uses a restricted word.", fix: "We run MCA and trademark searches and avoid restricted words without approvals." },
    { icon: "IdCard", title: "Director details don't match", problem: "Different spellings on PAN and Aadhaar hold up the DIN application.", fix: "We line up every director's documents before the DSC is issued." },
    { icon: "ListTree", title: "Vague main objects", problem: "Objects in the MOA that don't describe the actual business draw a query.", fix: "We draft objects that match what you will really do." },
    { icon: "Home", title: "Office proof problems", problem: "An old utility bill or an unsigned no objection letter.", fix: "We check dates and signatures before uploading." },
  ],

  costSection: {
    title: "Private limited registration fees in Chennai",
    lead: "Your total depends on capital and the number of directors. We show every part before you pay.",
    cta: {
      title: "Get an itemised quote",
      sub: "Tell us the authorised capital and number of directors. You'll see government fees, stamp duty and our fee separately.",
      message: "Hi National Filings, can I get an itemised quote for private limited registration in Chennai?",
    },
  },
  costs: [
    { icon: "Signature", label: "Per director", title: "Digital signature certificates", line: "One for each director and subscriber to the MOA." },
    { icon: "Landmark", label: "Nil up to ₹15 lakh", title: "MCA incorporation fee", line: "No MCA filing fee when authorised capital is ₹15 lakh or less. Above that, fees rise with capital.", highlight: true },
    { icon: "Stamp", label: "As per state rules", title: "Stamp duty", line: "Payable on the MOA and AOA under Tamil Nadu rates, based on authorised capital." },
    { icon: "Headset", label: "Quoted upfront", title: "Professional fee", line: "Name search, drafting, filing, query replies and post-incorporation guidance." },
  ],

  compliance: {
    eyebrow: "After incorporation",
    title: "Post incorporation and annual ROC compliance",
    lead: "Registration is the start. A private limited company has fixed deadlines from the first month onward.",
    items: [
      { icon: "SearchCheck", label: "Within 30 days", title: "First auditor", line: "The board appoints the company's first statutory auditor." },
      { icon: "Banknote", label: "Within 180 days", title: "Commencement of business", line: "Shareholders pay for their shares into the company account, then INC-20A is filed.", highlight: true },
      { icon: "CalendarCheck", label: "Every year", title: "AGM and annual filings", line: "Audited accounts in AOC-4 and the annual return in MGT-7 or MGT-7A, after the AGM." },
      { icon: "UserCheck", label: "Every year", title: "Director KYC and tax", line: "DIR-3 KYC for each director, plus the company's income tax return." },
    ],
  },

  reasonsTitle: "Why choose National Filings for private limited registration in Chennai",
  reasons: [
    { icon: "FileText", title: "MOA and AOA that fit", line: "Objects and articles drafted for your business and shareholders." },
    { icon: "SearchCheck", title: "Name checked twice", line: "MCA and trademark searches before the name goes to the registrar." },
    { icon: "ReceiptText", title: "Itemised quote", line: "Stamp duty, MCA fees and our fee shown line by line." },
    { icon: "Zap", title: "Quick query replies", line: "Registrar queries answered fast, so resubmissions don't drag." },
    { icon: "ClipboardCheck", title: "First-year checklist", line: "Auditor, INC-20A, share certificates and board meetings tracked." },
    { icon: "UserCheck", title: "One expert, start to finish", line: "The same person handles your company from DSC to CIN." },
  ],

  faqTitle: "Private limited registration in Chennai: your questions",
  faqs: [
    { q: "How many people do I need to register a private limited company?", a: "At least two directors and two shareholders. The same two people can hold both roles. At least one director must have stayed in India for 182 days or more in the previous calendar year." },
    { q: "What is the minimum capital for a private limited company?", a: "There is no minimum paid-up capital. Many small companies start with ₹1 lakh. Authorised capital matters because it decides the MCA fee and the stamp duty on the MOA and AOA." },
    { q: "How long does private limited registration in Chennai take?", a: "Usually two to three weeks once documents are complete: a day or two for digital signatures, a few days for name approval and around a week or more for the registrar's review. Queries or name objections add time." },
    { q: "Can I use my home address as the registered office?", a: "Yes. You need a recent utility bill for the address and a no objection letter from the owner. If the home is rented, the rent agreement is needed too." },
    { q: "What do I receive after incorporation?", a: "A Certificate of Incorporation with the company's CIN, along with its PAN and TAN. EPFO and ESIC registration numbers are issued through the same SPICe+ filing, and you can apply for GST and a bank account in it too." },
    { q: "What must a new company do after registration?", a: "Appoint the first auditor within 30 days, open a bank account, collect the share money and file INC-20A within 180 days, issue share certificates and hold board meetings. Missing INC-20A blocks the company from doing business and attracts penalties." },
    { q: "What are the yearly ROC filings for a private limited company?", a: "An AGM, audited financial statements in AOC-4, the annual return in MGT-7 or MGT-7A, DIR-3 KYC for each director and the income tax return. An audit is compulsory every year, whatever the turnover." },
    { q: "Can an NRI or foreign national be a director?", a: "Yes, as long as at least one director meets the residency requirement in India. Foreign directors need apostilled or notarised documents, and foreign shareholding must follow FEMA rules." },
  ],

  related: [
    { icon: "Building2", label: "Company registration", href: pillarHref("P1") },
    { icon: "Handshake", label: "LLP registration", href: clusterHref("P1-C1") },
    { icon: "UserRound", label: "One person company registration", href: clusterHref("P1-C2") },
    { icon: "ClipboardCheck", label: "ROC compliance", href: clusterHref("P1-C5") },
    { icon: "ReceiptIndianRupee", label: "GST consultant", href: pillarHref("P2") },
    { icon: "ShieldCheck", label: "Trademark registration", href: pillarHref("P5") },
    { icon: "Factory", label: "MSME registration", href: licenceHref("L1") },
    { icon: "Signature", label: "Digital signature certificate", href: licenceHref("L6") },
  ],
  relatedTitle,

  final: {
    title: "Start your company registration in Chennai",
    sub: "Tell us about your founders and plans. We'll confirm the documents, capital and fees, then get started.",
    message: "Hi National Filings, I'd like to start private limited company registration in Chennai.",
  },
  catalogue: ["Private limited company incorporation", "MOA and AOA drafting", "Post-incorporation compliance"],
};
