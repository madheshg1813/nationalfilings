import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { SERVICE, clusterHref, licenceHref, pillarHref, relatedTitle } from "./shared";

/**
 * P1-C5 · ROC Compliance Services (/chennai/roc-compliance-service).
 * Primary keyword: "roc compliance services in chennai". Secondary: "roc annual filing in chennai", "company annual compliance".
 *
 * Facts checked Oct 2026: AGM within six months of year end (30 September for a 31 March year); AOC-4 within 30 days and
 * MGT-7 / MGT-7A within 60 days of the AGM, each with a ₹100 per day additional fee when late; ADT-1 within 15 days of the
 * AGM that appoints the auditor; DPT-3 by 30 June; MSME-1 half-yearly. DIR-3 KYC moved from yearly to once every three
 * financial years, due by 30 June, from 31 March 2026 (G.S.R. 943(E)). LLPs: Form 11 by 30 May, Form 8 by 30 October.
 * Exact first-cycle KYC years differ between commentaries, so the page does not quote one.
 */

const whatsapp = "Hi National Filings, I'd like help with ROC compliance for my company.";

export const rocPage: LicencePageData = {
  id: "P1-C5",
  service: SERVICE,
  meta: {
    title: "ROC Compliance Services in Chennai | Annual MCA Filings",
    description: "ROC compliance services in Chennai for companies and LLPs. AGM papers, AOC-4, MGT-7, LLP forms and director KYC filed on time, before late fees start.",
  },
  hero: {
    headline: { line1: "ROC Compliance Services", line2Before: "in Chennai, ", accent: "Always On Time" },
    sub: "Keep your company or LLP in good standing without tracking a single due date. We handle ROC compliance services in Chennai, from the AGM papers to every MCA filing.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "ClipboardCheck",
    kicker: "Annual ROC Compliance",
    title: "MCA Filings",
    line: "Your Company Pvt Ltd",
    stamp: "Filed on time",
    chips: ["AGM held", "AOC-4 filed", "MGT-7 filed"],
    steps: ["Accounts", "Audit", "AGM", "AOC-4", "MGT-7"],
  },

  benefitsSection: {
    title: "Why on-time ROC compliance matters in Chennai",
    lead: "Every registered company and LLP files with the Registrar each year, whether or not it did any business.",
    cta: {
      title: "Behind on your filings?",
      sub: "Tell us which years are pending. We'll list what's due, the late fees so far and how to catch up.",
      message: "Hi National Filings, my company has pending ROC filings. Can you help me catch up?",
    },
  },
  benefits: [
    { icon: "Coins", title: "No late fees", line: "Late annual forms cost ₹100 a day each, with no upper limit." },
    { icon: "ShieldCheck", title: "Active company status", line: "Years of missed filings can lead the Registrar to strike the company off." },
    { icon: "UserCheck", title: "Directors protected", line: "Defaults can disqualify directors and block their DINs." },
    { icon: "Landmark", title: "Bank and loan ready", line: "Lenders ask for filed financial statements before sanctioning credit." },
    { icon: "TrendingUp", title: "Investor due diligence", line: "Clean MCA records speed up funding rounds and share transfers." },
    { icon: "Briefcase", title: "Tender eligibility", line: "Many tenders ask for recent audited and filed accounts." },
    { icon: "SearchCheck", title: "Public record in order", line: "Anyone can check your MCA status. Keep it showing active and up to date." },
    { icon: "CalendarCheck", title: "One compliance calendar", line: "Every due date tracked for you, so nothing depends on memory." },
  ],

  applicantsSection: {
    title: "Who needs ROC compliance services in Chennai",
    lead: "If your business is registered with the MCA, it has yearly filings, even in a quiet year.",
  },
  applicants: [
    { icon: "Building2", title: "Private limited companies", line: "AGM, audit, AOC-4 and MGT-7 every year." },
    { icon: "UserRound", title: "One person companies", line: "Audited accounts and annual return, without an AGM." },
    { icon: "Handshake", title: "LLPs", line: "Form 11 and Form 8, plus audit above set limits." },
    { icon: "Rocket", title: "Startups in their first year", line: "First AGM, auditor appointment and INC-20A." },
    { icon: "Clock", title: "Companies with pending years", line: "Catch-up filings with late fees worked out upfront." },
    { icon: "Shuffle", title: "Inactive companies", line: "Nil filings, dormant status or closure, as suits you." },
    { icon: "Globe", title: "NRI or foreign-owned companies", line: "MCA filings alongside the owners' other obligations." },
    { icon: "Users", title: "Growing companies", line: "Event filings for new directors, shares and offices." },
  ],

  opportunities: {
    eyebrow: "What it covers",
    title: "What ROC compliance involves each year",
    intro: "ROC compliance in Chennai is more than two forms. It starts with your accounts and ends with filings on the MCA portal, with meetings and records in between.",
    // Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "FileText", title: "Accounts and audit", image: "https://images.unsplash.com/photo-1762427354051-a9bdb181ae3b?auto=format&fit=crop&w=1600&q=90", alt: "Desk with a calculator, charts and binders", credit: "Cht Gsml / Unsplash" },
      { icon: "Users", title: "Board meetings and AGM", image: "https://images.unsplash.com/photo-1758711516684-e7a87556015e?auto=format&fit=crop&w=1600&q=90", alt: "Empty meeting room with a long table and orange chairs", credit: "Vibe Coworking Spaces / Unsplash" },
      { icon: "Layers", title: "Statutory registers", image: "https://images.unsplash.com/photo-1468779036391-52341f60b55d?auto=format&fit=crop&w=1600&q=90", alt: "Stack of thick ring binders", credit: "Beatriz Pérez Moya / Unsplash" },
      { icon: "Laptop", title: "Online MCA filings", image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=1600&q=90", alt: "Professional reviewing charts on a tablet at a desk", credit: "Towfiqu barbhuiya / Unsplash" },
    ],
  },

  highlights: {
    eyebrow: "Annual filings",
    title: "Annual ROC filings for companies in Chennai",
    lead: "For a 31 March year end, the deadlines follow the AGM, which must be held by 30 September.",
    items: [
      { icon: "Users", label: "By 30 September", title: "Annual general meeting", line: "Shareholders adopt the audited accounts. A company's first AGM is due within nine months of its first year end." },
      { icon: "FileText", label: "Within 30 days of AGM", title: "AOC-4 financial statements", line: "Audited accounts, board's report and auditor's report filed with the ROC.", highlight: true },
      { icon: "CalendarCheck", label: "Within 60 days of AGM", title: "MGT-7 or MGT-7A annual return", line: "Shareholding, directors and meetings for the year. Small companies and OPCs use MGT-7A." },
      { icon: "SearchCheck", label: "Within 15 days of AGM", title: "ADT-1 auditor appointment", line: "Filed when the AGM appoints or reappoints the statutory auditor." },
    ],
  },

  documentsSection: {
    title: "Documents for ROC annual filing in Chennai",
    lead: "Most of this comes from your accountant and company records. We tell you exactly what's missing.",
  },
  documents: [
    { icon: "FileText", title: "Financial records", items: ["Audited balance sheet and profit and loss", "Auditor's report", "Board's report", "Bank statements for the year"], hint: "We can coordinate directly with your auditor." },
    { icon: "Layers", title: "Company records", items: ["Board and AGM minutes", "Shareholder list and transfers", "Registers of members and directors", "Details of loans and deposits"], hint: "We prepare the minutes and notices if you need them." },
    { icon: "UserCheck", title: "Director details", items: ["DIN of each director", "Valid digital signatures", "Changes in directors during the year", "Updated contact details"], hint: "Expired DSCs are the most common last-minute delay." },
  ],
  documentsNote: {
    title: "Start with last year's filings",
    sub: "Send your CIN or LLPIN and last year's balance sheet on WhatsApp. We'll check what's pending on the MCA portal.",
    message: "Hi National Filings, here are my company details. Can you check my ROC compliance status?",
  },

  processSection: {
    title: "How we handle ROC compliance in Chennai",
    lead: "Five stages from your books to the filed returns, scheduled backwards from your deadlines.",
    cta: {
      title: "Hand over your ROC filings",
      sub: "Share your CIN or LLPIN. We'll set up your compliance calendar and start with whatever is due next.",
      message: "Hi National Filings, I'd like you to handle my company's ROC compliance.",
    },
  },
  steps: [
    { title: "Compliance review", time: "Day 1", sub: "We check the MCA portal for pending forms, late fees and director KYC." },
    { title: "Accounts and audit", time: "After year end", sub: "We work with your accountant and auditor to finalise the statements." },
    { title: "Board meeting and AGM", time: "By 30 September", sub: "Notices, resolutions and minutes drafted and approved." },
    { title: "Annual filings", time: "Within 30 to 60 days", sub: "AOC-4, MGT-7 or MGT-7A and ADT-1, or LLP Forms 11 and 8." },
    { title: "Acknowledgements", time: "On approval", sub: "Filed copies shared, and next year's dates added to your calendar." },
  ],
  processNote: "Dates shown are for a 31 March year end. Event-based forms are filed as changes happen during the year.",

  mistakesSection: {
    title: "ROC compliance mistakes that cost Chennai companies",
    lead: "Late fees build up quietly. These are the gaps we see most often.",
  },
  mistakes: [
    { icon: "CalendarClock", title: "Missing the AGM deadline", problem: "Without an AGM, the annual forms can't be filed on time either.", fix: "We schedule the audit and AGM backwards from 30 September." },
    { icon: "Clock", title: "Skipping filings in a quiet year", problem: "Owners assume a company with no business has nothing to file.", fix: "We file nil-activity returns, or advise on dormant status or closure." },
    { icon: "UserCheck", title: "Ignoring director changes", problem: "Appointments and resignations not reported to the ROC within 30 days.", fix: "We file DIR-12 and other event forms as changes happen." },
    { icon: "Signature", title: "Expired digital signatures", problem: "A director's DSC lapses just before the deadline.", fix: "We track DSC expiry dates and renew them in advance." },
  ],

  costSection: {
    title: "ROC compliance cost factors in Chennai",
    lead: "Your cost depends on the company's size and what's pending. We quote every part upfront.",
    cta: {
      title: "Get a quote for your annual compliance",
      sub: "Tell us your company type and any pending years. We'll send government fees, late fees if any, and our fee.",
      message: "Hi National Filings, can I get a quote for ROC compliance in Chennai?",
    },
  },
  costs: [
    { icon: "Landmark", label: "Set by MCA", title: "Government filing fees", line: "Normal fees per form, based on the company's share capital." },
    { icon: "TriangleAlert", label: "₹100 per day per form", title: "Late fees", line: "Added to AOC-4 and MGT-7 for every day after the due date.", highlight: true },
    { icon: "SearchCheck", label: "Paid to your auditor", title: "Statutory audit", line: "Charged by the chartered accountant who audits your accounts." },
    { icon: "Headset", label: "Quoted upfront", title: "Professional fee", line: "Meeting papers, filings and the compliance calendar." },
  ],

  compliance: {
    eyebrow: "Beyond the annual returns",
    title: "Other recurring and event-based ROC filings",
    lead: "Alongside the annual returns, these come up for many companies in Chennai.",
    items: [
      { icon: "UserCheck", label: "Every 3 years", title: "DIR-3 KYC", line: "Director KYC, now due once every three financial years by 30 June, instead of every year." },
      { icon: "Banknote", label: "By 30 June", title: "DPT-3", line: "Annual return of deposits and outstanding loans that aren't deposits." },
      { icon: "Factory", label: "Half-yearly", title: "MSME-1", line: "For companies owing micro or small suppliers for more than 45 days." },
      { icon: "RefreshCw", label: "As changes happen", title: "Event-based forms", line: "New directors, share allotments, capital or office changes, each with its own deadline." },
    ],
  },
  decision: {
    eyebrow: "Inactive company?",
    title: "Options for a company that isn't trading",
    lead: "Filing every year for a company you don't use adds up. There are other routes.",
    items: [
      { icon: "FileCheck2", label: "Option 1", title: "Keep filing", line: "Annual returns with nil or minimal activity keep the company ready for later use." },
      { icon: "Clock", label: "Option 2", title: "Dormant status", line: "A company formed for future use can apply for dormant status, with lighter filings.", highlight: true },
      { icon: "FileWarning", label: "Option 3", title: "Strike off", line: "Close a company with no assets or liabilities by applying to the Registrar." },
      { icon: "RefreshCw", label: "If struck off", title: "Restoration", line: "A company struck off by the ROC can apply to the tribunal to be restored." },
    ],
  },

  reasonsTitle: "Why choose National Filings for ROC compliance in Chennai",
  reasons: [
    { icon: "CalendarCheck", title: "Calendar set up for you", line: "Every due date for your company or LLP, tracked from day one." },
    { icon: "Users", title: "AGM papers drafted", line: "Notices, resolutions and minutes prepared for signature." },
    { icon: "ReceiptText", title: "Late fees shown upfront", line: "Pending years quoted with the exact fees before we file." },
    { icon: "Signature", title: "DSC expiry tracked", line: "Directors' signatures renewed before they hold up a filing." },
    { icon: "FileText", title: "Works with your auditor", line: "We coordinate with your CA so accounts are ready in time." },
    { icon: "MessageCircle", title: "WhatsApp updates", line: "Filing confirmations and reminders on WhatsApp." },
  ],

  faqTitle: "ROC compliance in Chennai: your questions",
  faqs: [
    { q: "What is ROC compliance?", a: "It is the set of filings every company and LLP must make with the Registrar of Companies under the Ministry of Corporate Affairs. For a company, the core of it is the AGM, audited financial statements in AOC-4 and the annual return in MGT-7 or MGT-7A." },
    { q: "What are the due dates for ROC annual filing in Chennai?", a: "For a 31 March year end, the AGM must be held by 30 September. AOC-4 is due within 30 days of the AGM and MGT-7 or MGT-7A within 60 days. LLPs file Form 11 by 30 May and Form 8 by 30 October." },
    { q: "What happens if a company misses ROC filings?", a: "An additional fee of ₹100 per day applies to each late annual form, with no cap. Directors can be disqualified if returns are not filed for three years in a row, and the Registrar can strike off a company that has stopped filing." },
    { q: "Does a company with no business still have to file?", a: "Yes. A registered company must hold its AGM and file its annual returns even with no turnover. If you don't plan to use the company, ask us about dormant status or closing it." },
    { q: "Has DIR-3 KYC changed?", a: "Yes. From 31 March 2026, directors file DIR-3 KYC once every three financial years, by 30 June, instead of every year. Changes to a director's mobile, email or address still need to be updated within 30 days." },
    { q: "Is an audit compulsory for every company?", a: "Yes. Every company, including a one person company, needs its accounts audited by a chartered accountant every year, whatever its turnover. LLPs need an audit only above set limits." },
    { q: "Can you file pending returns for past years?", a: "Yes. We check which years are pending, work out the late fees, prepare any missing meeting records and file the returns in the right order to bring the company up to date." },
    { q: "Do LLPs need ROC compliance services too?", a: "Yes. LLPs file Form 11, the annual return, and Form 8, the statement of accounts and solvency, every year, along with their designated partners' KYC." },
  ],

  related: [
    { icon: "Building2", label: "Company registration", href: pillarHref("P1") },
    { icon: "Building2", label: "Private limited registration", href: clusterHref("P1-C6") },
    { icon: "Handshake", label: "LLP registration", href: clusterHref("P1-C1") },
    { icon: "UserRound", label: "One person company registration", href: clusterHref("P1-C2") },
    { icon: "ReceiptIndianRupee", label: "GST consultant", href: pillarHref("P2") },
    { icon: "IndianRupee", label: "Income tax consultant", href: pillarHref("P3") },
    { icon: "Signature", label: "Digital signature certificate", href: licenceHref("L6") },
    { icon: "Factory", label: "MSME registration", href: licenceHref("L1") },
  ],
  relatedTitle,

  final: {
    title: "Get your ROC filings done on time in Chennai",
    sub: "Share your CIN or LLPIN. We'll check what's due, quote it upfront and file it before the deadline.",
    message: "Hi National Filings, I'd like to get my ROC filings done on time.",
  },
  catalogue: ["Annual ROC filing for companies", "LLP annual filing", "Event-based ROC filings", "Pending ROC returns"],
};
