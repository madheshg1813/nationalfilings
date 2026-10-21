import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { NGO_SERVICE, clusterHref, licenceHref, pillarHref } from "./shared";

/**
 * P4-C4 · 12A and 80G Registration (/chennai/12a-80g-registration-service).
 * Primary keyword: "12a and 80g registration in chennai". Secondary: "80g registration in chennai", "12a registration in chennai".
 *
 * Facts checked Oct 2026: from 1 April 2026 the Income-tax Act, 2025 replaced the 1961 Act. Registration of non-profits
 * (formerly sections 12A, 12AA and 12AB) is now section 332 and donor approval (formerly 80G) is section 354, in the chapter
 * on registered non-profit organisations. Commentary describes Form 104 (provisional) and Form 105 (regular) replacing Forms
 * 10A and 10AB; registrations granted under the old law stay valid until they expire. Validity periods differ between
 * sources, so none is quoted. People still search "12A" and "80G", so the page uses those names and explains the new numbers.
 */

export const twelveA80gPage: LicencePageData = {
  id: "P4-C4",
  service: NGO_SERVICE,
  meta: {
    title: "12A and 80G Registration in Chennai | NGO Tax Exemption",
    description: "12A and 80G registration in Chennai for trusts, societies and Section 8 companies, now under the Income-tax Act 2025. Exemption and donor approval.",
  },
  hero: {
    headline: { line1: "12A and 80G Registration", line2Before: "in Chennai, ", accent: "Donor Ready" },
    sub: "Keep your NGO's income tax-free and let donors claim deductions. We handle 12A and 80G registration in Chennai under the new Income-tax Act, 2025.",
    badges: heroTrustPoints,
    whatsapp: "Hi National Filings, I'd like a consultation about 12A and 80G registration in Chennai.",
  },
  illustration: {
    icon: "ReceiptIndianRupee",
    kicker: "Income Tax Registration",
    title: "Approval Order",
    line: "Your Charitable Trust",
    stamp: "Approved",
    chips: ["Deed reviewed", "Application filed", "Donor approval"],
    steps: ["Check", "Documents", "Apply", "Review", "Order"],
  },

  benefitsSection: {
    title: "Why 12A and 80G registration matters for your NGO",
    lead: "Registration as an NGO doesn't make it tax-exempt. These approvals do.",
    cta: {
      title: "Already registered as a trust, society or Section 8?",
      sub: "Share your registration details. We'll check eligibility and tell you which application to file.",
      message: "Hi National Filings, is my NGO eligible for 12A and 80G registration?",
    },
  },
  benefits: [
    { icon: "ShieldCheck", title: "Income tax exemption", line: "Income applied to your charitable objects is exempt from tax." },
    { icon: "Users", title: "Donors save tax", line: "Donors can claim a deduction on eligible donations to you." },
    { icon: "Coins", title: "More donations", line: "Many donors give only to NGOs with donor approval." },
    { icon: "Handshake", title: "CSR eligibility", line: "Companies generally expect both approvals before funding CSR work." },
    { icon: "Landmark", title: "Grants and funders", line: "Foundations and government schemes often ask for them." },
    { icon: "BadgeCheck", title: "Credibility", line: "Shows the tax department has examined your NGO's objects." },
    { icon: "Coins", title: "Build reserves", line: "Funds can be set aside for future projects within the rules." },
    { icon: "FileCheck2", title: "Clean donation receipts", line: "Receipts that carry the details donors need to claim." },
  ],

  applicantsSection: {
    title: "Who can apply for 12A and 80G registration in Chennai",
    lead: "Most charitable NGOs can apply, once they are registered as a legal entity.",
  },
  applicants: [
    { icon: "ScrollText", title: "Charitable trusts", line: "Registered with a trust deed." },
    { icon: "Users", title: "Societies", line: "Registered under the Tamil Nadu Societies Act." },
    { icon: "Building2", title: "Section 8 companies", line: "Incorporated with the MCA." },
    { icon: "Rocket", title: "Newly formed NGOs", line: "Start with provisional registration." },
    { icon: "RefreshCw", title: "NGOs up for renewal", line: "Renew before the current approval expires." },
    { icon: "Clock", title: "NGOs already working", line: "Apply for regular registration once activities have begun." },
    { icon: "GraduationCap", title: "Education and health NGOs", line: "Among the most common applicants." },
    { icon: "Landmark", title: "Religious and charitable trusts", line: "Possible, though donor approval has extra conditions for religious objects." },
  ],

  opportunities: {
    eyebrow: "Why it matters",
    title: "Turning goodwill into lasting support",
    intro: "80G registration in Chennai helps NGOs attract regular donors, and 12A registration in Chennai keeps more of every rupee working for the cause.",
    // Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "Users", title: "Individual donors", image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1600&q=90", alt: "Hands holding coins with a make a change note", credit: "Katt Yukawa / Unsplash" },
      { icon: "Coins", title: "Regular giving", image: "https://images.unsplash.com/photo-1777805866020-e56953302a08?auto=format&fit=crop&w=1600&q=90", alt: "Hands putting coins into a yellow piggy bank", credit: "Sasun Bughdaryan / Unsplash" },
      { icon: "FileText", title: "Donation receipts", image: "https://images.unsplash.com/photo-1591522810850-58128c5fb089?auto=format&fit=crop&w=1600&q=90", alt: "Typewriter with a paper reading donations", credit: "Markus Winkler / Unsplash" },
      { icon: "UtensilsCrossed", title: "Programmes donors fund", image: "https://images.unsplash.com/photo-1694286068611-d0c24cbc2cd5?auto=format&fit=crop&w=1600&q=90", alt: "Children being served plates of food", credit: "Michael Ali / Unsplash" },
    ],
  },

  highlights: {
    eyebrow: "The new Income-tax Act",
    title: "12A and 80G under the Income-tax Act, 2025",
    lead: "From 1 April 2026, the familiar sections have new numbers. The purpose of each approval is the same.",
    items: [
      { icon: "ShieldCheck", label: "Was 12A / 12AB", title: "Section 332", line: "Registration that makes the NGO's income exempt.", highlight: true },
      { icon: "Users", label: "Was 80G", title: "Section 354", line: "Approval that lets donors claim a deduction." },
      { icon: "Rocket", label: "Form 104", title: "Provisional registration", line: "For new NGOs, before activities are fully under way." },
      { icon: "BadgeCheck", label: "Form 105", title: "Regular registration", line: "For NGOs with activities running, and for renewals." },
    ],
  },

  documentsSection: {
    title: "Documents for 12A and 80G registration in Chennai",
    lead: "The department looks closely at your objects and activities, so these need to be in order.",
  },
  documents: [
    { icon: "ScrollText", title: "Registration documents", items: ["Trust deed, society bylaws or MOA and AOA", "Registration certificate", "NGO's PAN"], hint: "Objects must be charitable and the NGO irrevocable." },
    { icon: "FileText", title: "Activity records", items: ["Note on activities and programmes", "Photos or reports of work done", "Accounts for past years, if any"], hint: "New NGOs share their planned activities." },
    { icon: "Users", title: "People and governance", items: ["Trustees', members' or directors' details", "Their PAN and ID", "Digital signature for filing"], hint: "We check every detail matches the registration documents." },
  ],
  documentsNote: {
    title: "Check your deed or bylaws first",
    sub: "Applications are often questioned because of the objects clause. Send your deed or bylaws and we'll review them first.",
    message: "Hi National Filings, can you review my trust deed before I apply for 12A and 80G?",
  },

  processSection: {
    title: "How 12A and 80G registration works in Chennai",
    lead: "Five steps, filed online with the Income Tax Department.",
    cta: {
      title: "Apply for 12A and 80G",
      sub: "Share your registration documents and activities. We'll confirm the right application and prepare it.",
      message: "Hi National Filings, I'd like to apply for 12A and 80G registration for my NGO.",
    },
  },
  steps: [
    { title: "Eligibility review", time: "Day 1", sub: "Objects, irrevocability and activities checked against the rules." },
    { title: "Documents prepared", time: "2-4 days", sub: "Activity note, accounts and supporting documents put together." },
    { title: "Application filed", time: "Online", sub: "Provisional or regular application filed for both approvals." },
    { title: "Department review", time: "Varies", sub: "The officer may ask for more details or documents, which we answer." },
    { title: "Approval order", time: "On approval", sub: "Registration and donor approval issued, with validity dates." },
  ],
  processNote: "Provisional applications for new NGOs are often approved without a detailed review. Regular registration involves closer scrutiny.",

  mistakesSection: {
    title: "Mistakes that delay or block 12A and 80G",
    lead: "Most rejections come back to the founding documents or missing records.",
  },
  mistakes: [
    { icon: "Lock", title: "Revocable trust deed", problem: "A deed the founder can cancel doesn't qualify.", fix: "We review the deed and suggest amendments before applying." },
    { icon: "FileWarning", title: "Private or vague objects", problem: "Objects benefiting particular people or unclear purposes.", fix: "We check objects are public and charitable." },
    { icon: "CalendarClock", title: "Missing the regular registration date", problem: "Provisional approval lapses if regular registration isn't sought in time.", fix: "We track the date and file well ahead." },
    { icon: "FileText", title: "Weak activity records", problem: "No evidence of genuine charitable work.", fix: "We help organise reports and records of your activities." },
  ],

  costSection: {
    title: "12A and 80G registration cost in Chennai",
    lead: "There is no government fee for these applications. You pay only for professional help.",
    cta: {
      title: "Get a quote for 12A and 80G",
      sub: "Tell us your NGO type and how long it has been active. We'll quote our fee upfront.",
      message: "Hi National Filings, can I get a quote for 12A and 80G registration in Chennai?",
    },
  },
  costs: [
    { icon: "Landmark", label: "₹0", title: "Government fee", line: "No fee to apply for registration or donor approval.", highlight: true },
    { icon: "Headset", label: "Quoted upfront", title: "Professional fee", line: "Eligibility review, application and follow-up." },
    { icon: "FilePen", label: "If needed", title: "Deed or bylaw changes", line: "Amendments to fix clauses that would block approval." },
    { icon: "Signature", label: "If needed", title: "Digital signature", line: "For the person signing the application." },
  ],

  compliance: {
    eyebrow: "After approval",
    title: "Keeping your 12A and 80G registration",
    lead: "The approvals carry conditions. Meeting them every year keeps the exemption safe.",
    items: [
      { icon: "Coins", label: "Every year", title: "Apply income to objects", line: "Spend income on charitable work, or set it aside within the rules." },
      { icon: "SearchCheck", label: "Every year", title: "Audit and return", line: "Accounts audited where required and the income tax return filed.", highlight: true },
      { icon: "FileText", label: "Every year", title: "Statement of donations", line: "Donations reported so donors' deductions show up for them." },
      { icon: "RefreshCw", label: "Before expiry", title: "Renewal", line: "Approvals are time-bound and must be renewed on time." },
    ],
  },
  decision: {
    eyebrow: "Which application?",
    title: "Provisional or regular registration?",
    lead: "The right application depends on where your NGO is in its journey.",
    items: [
      { icon: "Rocket", label: "Provisional", title: "Just registered", line: "New NGOs start here, before activities are fully running.", highlight: true },
      { icon: "BadgeCheck", label: "Regular", title: "Activities under way", line: "Apply once your charitable work has begun, within the time allowed." },
      { icon: "RefreshCw", label: "Renewal", title: "Approval expiring", line: "Apply before the current approval's validity ends." },
      { icon: "Clock", label: "Old approval", title: "Approved under the old law", line: "Stays valid until it expires, then renews under the new Act." },
    ],
  },

  reasonsTitle: "Why choose National Filings for 12A and 80G registration in Chennai",
  reasons: [
    { icon: "SearchCheck", title: "Deed checked first", line: "Clauses that block approval found before you apply." },
    { icon: "FileText", title: "Strong applications", line: "Activities and accounts presented clearly." },
    { icon: "MessageCircle", title: "Queries answered", line: "We reply to the department's questions for you." },
    { icon: "CalendarClock", title: "Renewal dates tracked", line: "Regular registration and renewals filed on time." },
    { icon: "ReceiptText", title: "Donor receipts set up", line: "Receipts that carry what donors need to claim." },
    { icon: "Landmark", title: "New Act ready", line: "Applications under the Income-tax Act, 2025." },
  ],

  faqTitle: "12A and 80G registration in Chennai: your questions",
  faqs: [
    { q: "What are 12A and 80G registration?", a: "12A registration makes an NGO's income exempt from tax when it is applied to charitable objects. 80G approval lets donors claim a tax deduction on their donations. From 1 April 2026 these are sections 332 and 354 of the Income-tax Act, 2025." },
    { q: "Did 12A and 80G change in 2026?", a: "The Income-tax Act, 2025 replaced the 1961 Act from 1 April 2026. Registration moved to section 332 and donor approval to section 354, with new form numbers. Approvals granted under the old law stay valid until they expire." },
    { q: "Who can apply for 80G registration in Chennai?", a: "Registered charitable trusts, societies and Section 8 companies whose objects are charitable. The NGO must be irrevocable, apply its income to its objects and keep proper records." },
    { q: "Can a new NGO apply for 12A and 80G?", a: "Yes. A newly formed NGO applies for provisional registration first, and then for regular registration once its activities are under way, within the time the law allows." },
    { q: "Is there a government fee for 12A and 80G registration?", a: "No. The applications are free on the Income Tax portal. Our professional fee covers the eligibility review, application and follow-up." },
    { q: "How much tax can donors save?", a: "Donors can deduct an eligible share of their donation from their taxable income, subject to limits. Cash donations above ₹2,000 generally don't qualify, so encourage donors to pay by bank transfer, UPI or cheque." },
    { q: "Do 12A and 80G approvals need renewal?", a: "Yes. They are granted for a set period and must be renewed before they expire. We track the dates and file renewals on time." },
    { q: "Can my 12A or 80G registration be cancelled?", a: "Yes, if the NGO breaks the conditions, for example by using funds for non-charitable purposes or not filing returns. Regular compliance keeps the approvals safe." },
  ],

  related: [
    { icon: "HeartHandshake", label: "NGO registration", href: pillarHref("P4") },
    { icon: "ScrollText", label: "Trust registration", href: clusterHref("P4-C1") },
    { icon: "Users", label: "Society registration", href: clusterHref("P4-C2") },
    { icon: "Building2", label: "Section 8 company registration", href: clusterHref("P4-C3") },
    { icon: "IndianRupee", label: "Income tax consultant", href: pillarHref("P3") },
    { icon: "ClipboardCheck", label: "ROC compliance", href: clusterHref("P1-C5") },
    { icon: "Signature", label: "Digital signature certificate", href: licenceHref("L6") },
    { icon: "ReceiptIndianRupee", label: "GST consultant", href: pillarHref("P2") },
  ],
  relatedTitle: "Related NGO services in Chennai",

  final: {
    title: "Get 12A and 80G registration for your NGO in Chennai",
    sub: "Share your NGO's registration details. We'll check eligibility, prepare the application and follow it through.",
    message: "Hi National Filings, I'd like to get 12A and 80G registration for my NGO in Chennai.",
  },
  catalogue: ["12A registration (section 332)", "80G approval (section 354)", "12A and 80G renewal"],
};
