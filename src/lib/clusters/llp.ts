import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { SERVICE, clusterHref, licenceHref, pillarHref, relatedTitle } from "./shared";

/**
 * P1-C1 · LLP Registration (/chennai/llp-registration-service).
 * Primary keyword: "llp registration in chennai". Secondary: "llp annual filing in chennai".
 *
 * Facts checked against the LLP Act, 2008 and current MCA practice (Oct 2026): two designated partners, one resident in India;
 * no minimum contribution; LLP agreement filed in Form 3 within 30 days of incorporation; Form 11 due 30 May and
 * Form 8 due 30 October; audit only above ₹40 lakh turnover or ₹25 lakh contribution. Late fees are tiered by delay
 * since 2022, so the page does not quote an amount. No prices: stamp duty and filing fees depend on contribution.
 */

const whatsapp = "Hi National Filings, I'd like a consultation about LLP registration in Chennai.";

export const llpPage: LicencePageData = {
  id: "P1-C1",
  service: SERVICE,
  meta: {
    title: "LLP Registration in Chennai | Partners & Filing Experts",
    description: "LLP registration in Chennai with DSC, DPIN, name approval and LLP agreement handled for you. Clear fees, honest timelines and annual filing support.",
  },
  hero: {
    headline: { line1: "LLP Registration in Chennai", line2Before: "With ", accent: "Limited Liability" },
    sub: "Run your firm as partners without putting your personal assets on the line. We handle LLP registration in Chennai from name approval to the filed LLP agreement.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "Handshake",
    kicker: "Limited Liability Partnership",
    title: "LLP Incorporation",
    line: "Your Firm LLP",
    stamp: "Incorporated",
    chips: ["DPIN allotted", "Name approved", "Agreement filed"],
    steps: ["DSC", "Name", "FiLLiP", "LLPIN", "Agreement"],
  },

  benefitsSection: {
    title: "Why partners choose an LLP in Chennai",
    lead: "An LLP keeps the flexibility of a partnership and adds the protection of a registered body.",
    cta: {
      title: "Not sure an LLP suits your firm?",
      sub: "Tell us how many partners you have and what the business does. We'll tell you plainly if an LLP is the right fit.",
      message: "Hi National Filings, can you tell me if an LLP is right for my business?",
    },
  },
  benefits: [
    { icon: "ShieldCheck", title: "Liability limited to contribution", line: "A partner's personal assets are protected from the LLP's debts, except in cases of fraud." },
    { icon: "Building2", title: "Separate legal entity", line: "The LLP owns property, signs contracts and can sue in its own name." },
    { icon: "Coins", title: "No minimum contribution", line: "Partners decide how much to bring in, in cash or in kind." },
    { icon: "ClipboardCheck", title: "Lighter compliance", line: "Two main annual forms, and no statutory audit until you cross the set limits." },
    { icon: "Users", title: "Continuity", line: "The LLP carries on when partners join, retire or pass away." },
    { icon: "Handshake", title: "Flexible internal rules", line: "Profit sharing, duties and exits are set in your own LLP agreement." },
    { icon: "Landmark", title: "Bank and client confidence", line: "A registered LLP name and LLPIN reassure banks, landlords and larger clients." },
    { icon: "Globe", title: "Open to foreign partners", line: "NRIs and foreign nationals can be partners, subject to FDI rules for your sector." },
  ],

  applicantsSection: {
    title: "Who should consider LLP registration in Chennai",
    lead: "An LLP works best for two or more people who want to run the business together and share profits, not raise equity.",
  },
  applicants: [
    { icon: "Scale", title: "Professional firms", line: "CAs, lawyers, architects and consultants practising together." },
    { icon: "Briefcase", title: "Agencies and consultancies", line: "Service businesses where partners share the client work." },
    { icon: "Users", title: "Family businesses", line: "Relatives who want clear shares and limited liability." },
    { icon: "ArrowLeftRight", title: "Existing partnership firms", line: "Firms that want to convert and protect partners' assets." },
    { icon: "Store", title: "Traders and distributors", line: "Partners who want credibility with suppliers and banks." },
    { icon: "Laptop", title: "Small tech teams", line: "Founders who do not plan to raise venture funding soon." },
    { icon: "Stethoscope", title: "Clinics and practices", line: "Doctors and specialists sharing a practice and its costs." },
    { icon: "HardHat", title: "Contractors and builders", line: "Partners taking on projects where liability matters." },
  ],

  opportunities: {
    eyebrow: "Who uses LLPs",
    title: "Businesses that run well as LLPs in Chennai",
    intro: "Design studios, clinics, agencies and contractors across Chennai choose LLP registration to share work and profits while keeping each partner's personal assets protected.",
    // Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "Building2", title: "Architecture and design studios", image: "https://images.unsplash.com/photo-1781888688940-5730c3fd5baf?auto=format&fit=crop&w=1600&q=90", alt: "Architectural floor plans and a laptop on a marble desk", credit: "Jonathan Borba / Unsplash" },
      { icon: "Stethoscope", title: "Medical practices", image: "https://images.unsplash.com/photo-1758691461935-202e2ef6b69f?auto=format&fit=crop&w=1600&q=90", alt: "Doctor speaking with a patient across a clinic desk", credit: "Vitaly Gariev / Unsplash" },
      { icon: "Briefcase", title: "Agencies and consultancies", image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&w=1600&q=90", alt: "Team reviewing work together on a laptop in an office", credit: "Jud Mackrill / Unsplash" },
      { icon: "HardHat", title: "Contractors and builders", image: "https://images.unsplash.com/photo-1777919393730-463e2c0b7f4c?auto=format&fit=crop&w=1600&q=90", alt: "Workers on scaffolding at a concrete building site", credit: "Ben Koorengevel / Unsplash" },
    ],
  },

  highlights: {
    eyebrow: "How an LLP works",
    title: "LLP structure and partner responsibilities",
    lead: "Every LLP has partners, and at least two of them must be designated partners who answer for its compliance.",
    items: [
      { icon: "Users", label: "Minimum 2", title: "Partners", line: "Individuals or companies can be partners. There is no upper limit on the number of partners." },
      { icon: "UserCheck", label: "At least 2", title: "Designated partners", line: "Individuals responsible for filings and compliance. At least one must be resident in India.", highlight: true },
      { icon: "Signature", label: "Each DP", title: "DSC and DPIN", line: "Every designated partner needs a digital signature and a Designated Partner Identification Number." },
      { icon: "FileSignature", label: "Within 30 days", title: "LLP agreement", line: "Sets out shares, duties and exits, and is filed with the MCA after incorporation." },
    ],
  },

  documentsSection: {
    title: "Documents required for LLP registration in Chennai",
    lead: "Scanned copies are enough. Names and addresses must match across every document.",
  },
  documents: [
    { icon: "UserRound", title: "For each partner", items: ["PAN card", "Aadhaar or passport", "Recent bank statement or utility bill", "Passport-size photo", "Email ID and mobile number"], hint: "Foreign national partners need notarised or apostilled documents." },
    { icon: "Building2", title: "For the registered office", items: ["Electricity or other utility bill", "Rent agreement, if rented", "No objection letter from the owner"], hint: "The utility bill should be no more than two months old." },
    { icon: "FileText", title: "For the LLP", items: ["Two or three proposed names", "Business activity details", "Capital contribution of each partner", "Profit sharing ratio"], hint: "We use these details to draft your LLP agreement." },
  ],
  documentsNote: {
    title: "Start with the partners' PAN and Aadhaar",
    sub: "Send them on WhatsApp and we will check eligibility, suggest names and list anything else we need.",
    message: "Hi National Filings, I'd like to send partner documents for LLP registration.",
  },

  processSection: {
    title: "LLP registration process in Chennai",
    lead: "Five stages from digital signatures to a filed LLP agreement.",
    cta: {
      title: "Ready to register your LLP?",
      sub: "Share the partner details and two name ideas. We'll start with the digital signatures the same day.",
      message: "Hi National Filings, we're ready to start LLP registration. What's the first step?",
    },
  },
  steps: [
    { title: "Digital signatures", time: "1-2 days", sub: "DSCs for the designated partners, after video or OTP verification." },
    { title: "Name reservation", time: "2-4 working days", sub: "We file RUN-LLP with names that avoid existing companies and trademarks." },
    { title: "Incorporation filing", time: "After name approval", sub: "FiLLiP form with partner details, office proof and consent, DPIN included." },
    { title: "Certificate of incorporation", time: "Usually 5-10 working days", sub: "The MCA issues the certificate with your LLPIN, PAN and TAN." },
    { title: "LLP agreement", time: "Within 30 days", sub: "Drafted, stamped, signed and filed in Form 3." },
  ],
  processNote: "Times are estimates. The MCA decides processing, and a query from the registrar adds a few days.",

  mistakesSection: {
    title: "LLP registration mistakes that cause delays in Chennai",
    lead: "Most rejections come from details that could have been checked before filing.",
  },
  mistakes: [
    { icon: "FileWarning", title: "Name too close to an existing one", problem: "The registrar rejects names that resemble a registered company, LLP or trademark.", fix: "We search MCA records and the trademark register before proposing names." },
    { icon: "IdCard", title: "Mismatched partner details", problem: "A spelling or date of birth that differs between PAN and Aadhaar stops the DPIN.", fix: "We compare every partner's documents before the DSC is issued." },
    { icon: "Home", title: "Weak office proof", problem: "An old bill or a missing no objection letter leads to a resubmission.", fix: "We confirm the bill date and owner's letter before filing." },
    { icon: "CalendarClock", title: "LLP agreement filed late", problem: "Missing the 30-day window for Form 3 attracts additional fees.", fix: "We draft the agreement alongside incorporation and file it on time." },
  ],

  costSection: {
    title: "LLP registration cost factors in Chennai",
    lead: "There is no single price. These are the parts that make up the total, and we quote each one upfront.",
    cta: {
      title: "Get a clear quote for your LLP",
      sub: "Tell us the number of partners and the total contribution. We'll send the government fees and our fee separately.",
      message: "Hi National Filings, can I get a quote for LLP registration in Chennai?",
    },
  },
  costs: [
    { icon: "Signature", label: "Per partner", title: "Digital signature certificates", line: "Needed for each designated partner, and valid for one to three years." },
    { icon: "Landmark", label: "Set by MCA", title: "Government filing fees", line: "Name reservation and incorporation fees, which rise with the total contribution.", highlight: true },
    { icon: "Stamp", label: "As per state rules", title: "Stamp duty on the LLP agreement", line: "Payable in Tamil Nadu and based on the contribution in the agreement." },
    { icon: "Headset", label: "Quoted upfront", title: "Professional fee", line: "Drafting, filing and follow-up until the agreement is registered." },
  ],

  compliance: {
    eyebrow: "After registration",
    title: "LLP annual filing in Chennai",
    lead: "An LLP files every year, even if it did no business. Late filing adds fees for every day of delay.",
    items: [
      { icon: "CalendarCheck", label: "By 30 May", title: "Form 11 annual return", line: "Partner and contribution details for the year that ended on 31 March.", highlight: true },
      { icon: "FileText", label: "By 30 October", title: "Form 8 accounts and solvency", line: "Statement of accounts, signed by the designated partners." },
      { icon: "SearchCheck", label: "If limits crossed", title: "Statutory audit", line: "Required when turnover exceeds ₹40 lakh or contribution exceeds ₹25 lakh." },
      { icon: "Calculator", label: "Every year", title: "Income tax return", line: "The LLP is taxed as a firm. A tax audit applies above the income tax limits." },
    ],
  },
  decision: {
    eyebrow: "Choosing a structure",
    title: "LLP or another structure for your Chennai business?",
    lead: "An LLP is a strong middle path. These are the cases where something else may fit better.",
    items: [
      { icon: "Building2", title: "LLP vs private limited", line: "Choose a private limited company if you plan to raise equity or offer ESOPs. LLPs cannot issue shares." },
      { icon: "Users", title: "LLP vs partnership firm", line: "A partnership is cheaper to run, but partners carry unlimited personal liability for its debts." },
      { icon: "UserRound", title: "LLP vs one person company", line: "An LLP needs at least two partners. A solo founder wanting limited liability should look at an OPC." },
      { icon: "Store", title: "LLP vs proprietorship", line: "A proprietorship is simpler for one owner, but gives no liability protection and no room for partners." },
    ],
  },

  reasonsTitle: "Why choose National Filings for LLP registration in Chennai",
  reasons: [
    { icon: "FileSignature", title: "Agreement drafted for you", line: "An LLP agreement written around your partners, not a fill-in template." },
    { icon: "SearchCheck", title: "Name checks before filing", line: "MCA and trademark searches to avoid a rejected name." },
    { icon: "ReceiptText", title: "Fees shown separately", line: "Government fees, stamp duty and our fee, each listed upfront." },
    { icon: "UserCheck", title: "One point of contact", line: "The same person handles your LLP from DSC to agreement." },
    { icon: "CalendarCheck", title: "Annual filing reminders", line: "Form 11 and Form 8 dates tracked so late fees never build up." },
    { icon: "MessageCircle", title: "WhatsApp updates", line: "Send documents and get status updates, Monday to Saturday." },
  ],

  faqTitle: "LLP registration in Chennai: your questions",
  faqs: [
    { q: "How many partners do I need to register an LLP?", a: "At least two. Both can be individuals, and at least two partners must be designated partners. One designated partner must be resident in India. There is no maximum number of partners." },
    { q: "Is there a minimum capital for an LLP?", a: "No. Partners agree on their contribution, which can be money or assets such as equipment. The total contribution does affect the government fees and the stamp duty on the LLP agreement." },
    { q: "How long does LLP registration in Chennai take?", a: "Once documents are in order, most LLPs are incorporated in two to three weeks, covering digital signatures, name approval and the registrar's review. The LLP agreement is then filed within 30 days of incorporation." },
    { q: "What happens if we don't file an LLP agreement?", a: "The default rules in the First Schedule of the LLP Act apply, such as equal profit sharing. Those rarely match what partners actually agreed, and late filing attracts additional fees, so it is worth filing your own agreement on time." },
    { q: "What does LLP annual filing in Chennai involve?", a: "Form 11, the annual return, is due by 30 May, and Form 8, the statement of accounts and solvency, by 30 October. The LLP also files an income tax return, and designated partners complete their yearly KYC." },
    { q: "Does every LLP need an audit?", a: "No. A statutory audit is needed only when turnover exceeds ₹40 lakh or partners' contribution exceeds ₹25 lakh in a year. A tax audit may apply separately under income tax law." },
    { q: "Can a partnership firm convert into an LLP?", a: "Yes. A registered partnership firm can convert into an LLP, with all its partners becoming LLP partners. The firm's assets, liabilities and contracts move to the LLP. We can check whether conversion or a fresh LLP suits you better." },
    { q: "Can an LLP raise money from investors?", a: "An LLP can admit new partners who bring in contribution, but it cannot issue shares. If you expect angel or venture investment, a private limited company is usually the better choice." },
  ],

  related: [
    { icon: "Building2", label: "Company registration", href: pillarHref("P1") },
    { icon: "Building2", label: "Private limited registration", href: clusterHref("P1-C6") },
    { icon: "Users", label: "Partnership firm registration", href: clusterHref("P1-C3") },
    { icon: "ClipboardCheck", label: "ROC compliance", href: clusterHref("P1-C5") },
    { icon: "ReceiptIndianRupee", label: "GST consultant", href: pillarHref("P2") },
    { icon: "Factory", label: "MSME registration", href: licenceHref("L1") },
    { icon: "UserRound", label: "One person company registration", href: clusterHref("P1-C2") },
    { icon: "Signature", label: "Digital signature certificate", href: licenceHref("L6") },
  ],
  relatedTitle,

  final: {
    title: "Discuss your LLP registration in Chennai",
    sub: "Tell us about your partners and business. We'll explain the steps, documents and fees before you commit.",
    message: "Hi National Filings, I'd like to discuss LLP registration in Chennai.",
  },
  catalogue: ["LLP registration", "LLP agreement drafting and filing", "LLP annual filing"],
};
