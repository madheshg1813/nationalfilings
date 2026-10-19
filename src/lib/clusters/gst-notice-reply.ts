import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { GST_SERVICE, clusterHref, pillarHref } from "./shared";

/**
 * P2-C4 · GST Notice Reply (/chennai/gst-notice-reply-service).
 * Primary keyword: "gst notice reply in chennai". Extra H2: assessment and show cause support.
 *
 * Facts checked Oct 2026: common notices are GSTR-3A (non-filing), ASMT-10 (scrutiny, reply in ASMT-11), REG-03 / REG-17
 * (registration), DRC-01B / DRC-01C (liability and credit mismatches), DRC-01A (pre-notice intimation), DRC-01 (show cause under
 * sections 73, 74, or 74A for FY 2024-25 onwards, reply in DRC-06), ADT-01 (audit). Up to three adjournments of a hearing; first
 * appeal within three months of the order with a 10% pre-deposit of the disputed tax. Reply windows and penalty rates vary by
 * section and notice, so the page tells readers that the date on their notice governs, without quoting percentages.
 */

const whatsapp = "Hi National Filings, I've received a GST notice and need help replying.";

export const gstNoticeReplyPage: LicencePageData = {
  id: "P2-C4",
  service: GST_SERVICE,
  meta: {
    title: "GST Notice Reply in Chennai | ASMT-10, DRC-01 Experts",
    description: "GST notice reply in Chennai for scrutiny, mismatch and show cause notices. We read the notice, reconcile your data and file a clear reply on time.",
  },
  hero: {
    headline: { line1: "GST Notice Reply", line2Before: "in Chennai, ", accent: "Before the Deadline" },
    sub: "Received a GST notice? Don't ignore it and don't rush a reply. We explain what it means, reconcile your records and file a clear, documented GST notice reply in Chennai.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "MailWarning",
    kicker: "GST Notice",
    title: "Reply Filed",
    line: "Notice · Reply submitted",
    stamp: "Replied",
    chips: ["Notice reviewed", "Data reconciled", "Reply filed"],
    steps: ["Read", "Reconcile", "Draft", "File", "Hearing"],
  },

  benefitsSection: {
    title: "Why a proper GST notice reply matters",
    lead: "Most GST notices can be resolved at the reply stage, if the reply is accurate, complete and on time.",
    cta: {
      title: "Got a notice with a close deadline?",
      sub: "Send us a copy on WhatsApp. We'll tell you what it means and what's needed, usually the same day.",
      message: "Hi National Filings, I've received a GST notice with a close deadline. Can you look at it?",
    },
  },
  benefits: [
    { icon: "CalendarClock", title: "No order without your side", line: "Missing the deadline can lead to an order passed without hearing you." },
    { icon: "Coins", title: "Lower or no demand", line: "A documented reply often reduces or closes the proposed demand." },
    { icon: "ShieldCheck", title: "Input credit protected", line: "Mismatches explained with evidence before credit is denied." },
    { icon: "TrendingUp", title: "Penalties kept in check", line: "Acting early can limit penalties that grow at later stages." },
    { icon: "FileText", title: "A record for appeal", line: "A strong reply is the base of any appeal you may need later." },
    { icon: "BadgeCheck", title: "Registration kept safe", line: "Registration notices answered before the GSTIN is cancelled." },
    { icon: "SearchCheck", title: "Expert reading", line: "We explain exactly what the officer is asking, in plain terms." },
    { icon: "Clock", title: "Less stress", line: "One team handles the reply, the hearing and the follow-up." },
  ],

  applicantsSection: {
    title: "GST notices we help Chennai businesses reply to",
    lead: "Each notice has its own form, purpose and deadline. These are the ones we see most often.",
  },
  applicants: [
    { icon: "CalendarClock", title: "GSTR-3A", line: "Reminder to file returns that haven't been filed." },
    { icon: "SearchCheck", title: "ASMT-10", line: "Scrutiny of returns, with discrepancies to explain." },
    { icon: "IdCard", title: "REG-03 and REG-17", line: "Queries on registration, or a proposal to cancel it." },
    { icon: "Shuffle", title: "DRC-01B and DRC-01C", line: "Differences between returns, or credit claimed above GSTR-2B." },
    { icon: "Mail", title: "DRC-01A", line: "Intimation of tax due, before a show cause notice." },
    { icon: "FileWarning", title: "DRC-01", line: "Show cause notice proposing tax, interest and penalty." },
    { icon: "ClipboardCheck", title: "ADT-01", line: "Notice of an audit by the department." },
    { icon: "RefreshCw", title: "Refund notices", line: "Deficiency or rejection notices on refund claims." },
  ],

  opportunities: {
    eyebrow: "What we handle",
    title: "From the first letter to the final order",
    intro: "GST notice reply in Chennai can mean a simple clarification or months of proceedings. We support businesses at every stage, from scrutiny to appeal.",
    // Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "Mail", title: "Scrutiny notices", image: "https://images.unsplash.com/photo-1627618998627-70a92a874cc2?auto=format&fit=crop&w=1600&q=90", alt: "Envelope with a blank letter on a white desk", credit: "Mediamodifier / Unsplash" },
      { icon: "FileWarning", title: "Show cause notices", image: "https://images.unsplash.com/photo-1681505504714-4ded1bc247e7?auto=format&fit=crop&w=1600&q=90", alt: "Two men reviewing papers together at a table", credit: "Amina Atar / Unsplash" },
      { icon: "ClipboardCheck", title: "Audits and assessments", image: "https://images.unsplash.com/photo-1635859890085-ec8cb5466806?auto=format&fit=crop&w=1600&q=90", alt: "Person working through printed documents at a desk", credit: "Dimitri Karastelev / Unsplash" },
      { icon: "Gavel", title: "Appeals", image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&w=1600&q=90", alt: "Wooden gavel and block on a marble surface", credit: "Tingey Injury Law Firm / Unsplash" },
    ],
  },

  highlights: {
    eyebrow: "Assessment and show cause",
    title: "Assessment and show cause notice support in Chennai",
    lead: "A demand usually moves through these stages. The earlier we step in, the more options you have.",
    items: [
      { icon: "SearchCheck", label: "ASMT-10 / DRC-01A", title: "Scrutiny or intimation", line: "The officer points out discrepancies. A clear reply here can close the matter." },
      { icon: "FileWarning", label: "DRC-01", title: "Show cause notice", line: "Tax, interest and penalty proposed under section 73, 74 or, from FY 2024-25, 74A.", highlight: true },
      { icon: "Users", label: "DRC-06", title: "Reply and hearing", line: "Written reply with evidence, and representation at the personal hearing." },
      { icon: "Gavel", label: "DRC-07 / APL-01", title: "Order and appeal", line: "If the order goes against you, an appeal can be filed within three months." },
    ],
  },

  documentsSection: {
    title: "What we need to reply to your GST notice",
    lead: "Send the notice first. We'll tell you exactly which records the reply needs.",
  },
  documents: [
    { icon: "Mail", title: "The notice", items: ["Copy of the notice and any attachments", "Reference number and date", "Earlier letters on the same issue"], hint: "Notices also appear under Additional Notices on the GST portal." },
    { icon: "FileText", title: "Returns and books", items: ["GST returns for the period", "Sales and purchase registers", "GSTR-2B for the months in question"], hint: "We reconcile these before writing the reply." },
    { icon: "FileCheck2", title: "Supporting evidence", items: ["Invoices and e-way bills", "Contracts and bank statements", "Credit notes and payment proof"], hint: "Evidence is what turns a reply into a resolved case." },
  ],
  documentsNote: {
    title: "Send the notice today",
    sub: "Even before you collect the records, share the notice on WhatsApp so we can check the deadline and plan the reply.",
    message: "Hi National Filings, here is the GST notice I received. Can you check the deadline?",
  },

  processSection: {
    title: "How we prepare your GST notice reply",
    lead: "Five steps, planned backwards from the deadline on your notice.",
    cta: {
      title: "Get help with your GST notice",
      sub: "Share the notice and your GSTIN. We'll explain it and confirm the documents and fee before we start.",
      message: "Hi National Filings, I'd like help replying to my GST notice.",
    },
  },
  steps: [
    { title: "Read the notice", time: "Same day", sub: "What's being asked, under which section, and by when." },
    { title: "Reconcile the data", time: "1-3 days", sub: "Returns, books and GSTR-2B matched to find the real gap." },
    { title: "Draft the reply", time: "Before the deadline", sub: "Point-by-point reply with evidence, shared with you for approval." },
    { title: "File and attend", time: "On the portal", sub: "Reply filed in the right form, and the hearing attended if one is fixed." },
    { title: "Order and next steps", time: "After the decision", sub: "Order reviewed, and rectification or appeal advised if needed." },
  ],
  processNote: "Reply periods differ by notice, so always go by the date printed on yours. Ask us early if more time is needed.",

  mistakesSection: {
    title: "GST notice mistakes that make things worse",
    lead: "How you respond can matter as much as the issue itself.",
  },
  mistakes: [
    { icon: "CalendarClock", title: "Missing the deadline", problem: "The officer can pass an order without considering your side.", fix: "We track the deadline from day one and ask for more time when it's justified." },
    { icon: "Shuffle", title: "Replying without reconciling", problem: "A reply that doesn't match your returns raises fresh questions.", fix: "We reconcile returns and books before drafting." },
    { icon: "Coins", title: "Paying without checking", problem: "Paying a demand that wasn't actually due, or under the wrong head.", fix: "We check the working before any payment is made." },
    { icon: "Mail", title: "Not checking the portal", problem: "Notices sit unseen under Additional Notices on the portal.", fix: "We check the portal regularly for our clients." },
  ],

  costSection: {
    title: "GST notice reply cost factors in Chennai",
    lead: "The cost depends on the type of notice and the work involved. We quote after reading it.",
    cta: {
      title: "Get a quote for your notice",
      sub: "Send the notice on WhatsApp. We'll quote a fee for the reply before we begin.",
      message: "Hi National Filings, can I get a quote for replying to my GST notice?",
    },
  },
  costs: [
    { icon: "Headset", label: "Quoted after review", title: "Professional fee", line: "Based on the notice type, periods involved and hearings needed.", highlight: true },
    { icon: "Coins", label: "If confirmed", title: "Tax and interest", line: "Payable only where the reply shows tax was actually short." },
    { icon: "TriangleAlert", label: "Depends on stage", title: "Penalty", line: "Varies with the section and how early the matter is resolved." },
    { icon: "Gavel", label: "10% of disputed tax", title: "Appeal pre-deposit", line: "Paid when filing a first appeal against an order." },
  ],

  decision: {
    eyebrow: "Your options",
    title: "Reply, pay or appeal?",
    lead: "Every notice has more than one possible response. We help you pick the one that costs least overall.",
    items: [
      { icon: "FileText", label: "Most cases", title: "Reply with evidence", line: "Explain and document why the proposed demand isn't due.", highlight: true },
      { icon: "Coins", label: "If tax is short", title: "Pay early", line: "Paying with interest at an early stage can reduce or avoid penalty." },
      { icon: "CalendarClock", label: "When needed", title: "Ask for more time", line: "Adjournments can be sought, up to three times for a hearing." },
      { icon: "Gavel", label: "After an order", title: "Appeal", line: "Within three months of the order, with the required pre-deposit." },
    ],
  },

  reasonsTitle: "Why choose National Filings for GST notice reply in Chennai",
  reasons: [
    { icon: "Zap", title: "Same-day first read", line: "We explain your notice and its deadline quickly." },
    { icon: "ListTree", title: "Reconciliation first", line: "Every reply backed by matched returns and books." },
    { icon: "FileText", title: "Point-by-point replies", line: "Each issue in the notice answered with evidence." },
    { icon: "Users", title: "Hearings attended", line: "Representation at personal hearings with the officer." },
    { icon: "Gavel", title: "Appeal support", line: "Help with appeals if an order goes against you." },
    { icon: "MessageCircle", title: "WhatsApp updates", line: "Status and next steps shared as the case moves." },
  ],

  faqTitle: "GST notice reply in Chennai: your questions",
  faqs: [
    { q: "What should I do when I receive a GST notice?", a: "Note the deadline, don't ignore it and don't pay anything until you understand the working. Share it with a GST expert, who can explain what is being asked and which records the reply needs." },
    { q: "How much time do I get to reply to a GST notice?", a: "It depends on the notice. Many give 15 to 30 days, but the period printed on your notice is what counts. If you need more time for a genuine reason, ask for it before the deadline." },
    { q: "What is an ASMT-10 notice?", a: "It is a scrutiny notice listing discrepancies the officer found in your returns. You reply in Form ASMT-11, either explaining the differences or accepting and paying them. A good reply often closes the matter here." },
    { q: "What is a DRC-01 show cause notice?", a: "It proposes tax, interest and penalty, under section 73, 74 or, for FY 2024-25 onwards, section 74A. You reply in Form DRC-06 and may be given a personal hearing before an order is passed." },
    { q: "Can I reply to a GST notice online?", a: "Yes. Replies are filed on the GST portal against the notice, usually with documents attached. Notices themselves often appear under Additional Notices and Orders on the portal." },
    { q: "What if I miss the deadline?", a: "The officer may pass an order based only on the information they have, which is usually less favourable. If that happens, there may still be options such as rectification or an appeal, so act quickly." },
    { q: "Can I appeal a GST order?", a: "Yes. A first appeal can be filed within three months of the order, with a pre-deposit of 10% of the disputed tax. Further appeals go to the GST Appellate Tribunal." },
    { q: "How much does a GST notice reply in Chennai cost?", a: "It depends on the notice type, the periods involved and whether hearings are needed. We read your notice first and quote a fee before starting any work." },
  ],

  related: [
    { icon: "ReceiptIndianRupee", label: "GST consultant", href: pillarHref("P2") },
    { icon: "FileText", label: "GST return filing", href: clusterHref("P2-C2") },
    { icon: "FileCheck2", label: "GST registration", href: clusterHref("P2-C1") },
    { icon: "FileWarning", label: "GST cancellation", href: clusterHref("P2-C3") },
    { icon: "IndianRupee", label: "Income tax consultant", href: pillarHref("P3") },
    { icon: "ClipboardCheck", label: "ROC compliance", href: clusterHref("P1-C5") },
    { icon: "Building2", label: "Company registration", href: pillarHref("P1") },
    { icon: "Handshake", label: "LLP registration", href: clusterHref("P1-C1") },
  ],
  relatedTitle: "Related GST services in Chennai",

  final: {
    title: "Get your GST notice reply right in Chennai",
    sub: "Share the notice and your GSTIN. We'll explain it, confirm the deadline and prepare a documented reply.",
    message: "Hi National Filings, I'd like help with a GST notice reply in Chennai.",
  },
  catalogue: ["GST notice reply", "Show cause notice reply", "GST assessment and audit support", "GST appeals"],
};
