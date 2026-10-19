import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { GST_SERVICE, clusterHref, pillarHref } from "./shared";

/**
 * P2-C3 · GST Cancellation (/chennai/gst-cancellation-service).
 * Primary keyword: "gst cancellation in chennai". Secondary: "gst registration cancellation in chennai".
 * Extra H2: revocation of cancelled GST.
 *
 * Facts checked Oct 2026: voluntary cancellation in REG-16; officer show cause in REG-17 and order in REG-19; pending returns
 * and dues first; tax payable on stock held (input credit reversal); final return GSTR-10 within three months of cancellation;
 * revocation in REG-21 within 90 days of an officer's cancellation order, extendable by up to 180 days, not available after a
 * voluntary cancellation. No government fee.
 */

const whatsapp = "Hi National Filings, I'd like help with GST cancellation in Chennai.";

export const gstCancellationPage: LicencePageData = {
  id: "P2-C3",
  service: GST_SERVICE,
  meta: {
    title: "GST Cancellation in Chennai | Close or Revoke Your GSTIN",
    description: "GST cancellation in Chennai done properly: pending returns, stock and ITC reversal, REG-16 and GSTR-10 handled, plus revocation of cancelled GSTINs.",
  },
  hero: {
    headline: { line1: "GST Cancellation", line2Before: "in Chennai, ", accent: "Closed Cleanly" },
    sub: "Closing or changing your business? We handle GST cancellation in Chennai the right way, so no returns, dues or notices follow you after the GSTIN is gone.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "ReceiptIndianRupee",
    kicker: "GST Cancellation",
    title: "Cancellation Order",
    line: "GSTIN · Cancelled",
    stamp: "Closed",
    chips: ["Returns cleared", "REG-16 filed", "GSTR-10 filed"],
    steps: ["Review", "Returns", "REG-16", "Order", "GSTR-10"],
  },

  benefitsSection: {
    title: "Why cancel your GST registration properly",
    lead: "A GSTIN you no longer use keeps generating obligations until it's formally cancelled.",
    cta: {
      title: "Stopped trading but still registered?",
      sub: "Tell us when the business stopped and what's pending. We'll tell you the cleanest way to close it.",
      message: "Hi National Filings, my business has stopped but my GST is still active. What should I do?",
    },
  },
  benefits: [
    { icon: "CalendarClock", title: "No more returns", line: "Monthly or quarterly filing stops once the cancellation is approved." },
    { icon: "Coins", title: "No growing late fees", line: "An unused GSTIN still runs up late fees for every missed return." },
    { icon: "Calculator", title: "Stock settled correctly", line: "Tax on closing stock and capital goods worked out accurately." },
    { icon: "Mail", title: "Fewer notices later", line: "A clean closure leaves no open questions for the department." },
    { icon: "ShieldCheck", title: "Avoid officer cancellation", line: "Cancel on your terms instead of after a show cause notice." },
    { icon: "Building2", title: "Ready to close the entity", line: "Companies and LLPs can wind up without a live GSTIN." },
    { icon: "RefreshCw", title: "Clean restart later", line: "A properly closed registration makes a fresh one easier." },
    { icon: "FileCheck2", title: "Records in order", line: "Every filing and the final return kept for your records." },
  ],

  applicantsSection: {
    title: "When to apply for GST registration cancellation in Chennai",
    lead: "Cancellation is usually required, not just optional, when one of these changes happens.",
  },
  applicants: [
    { icon: "Store", title: "Business closed", line: "Trading has stopped permanently." },
    { icon: "Handshake", title: "Business sold or transferred", line: "The business has a new owner." },
    { icon: "Shuffle", title: "Merged or demerged", line: "The business has been combined with another." },
    { icon: "IdCard", title: "New PAN after restructuring", line: "A proprietor or firm has become a company or LLP." },
    { icon: "TrendingUp", title: "Below the turnover limit", line: "Registration is no longer required and you don't want it." },
    { icon: "UserRound", title: "Proprietor has passed away", line: "A legal heir applies to cancel the registration." },
    { icon: "Truck", title: "No longer selling inter-state", line: "The reason you had to register no longer applies." },
    { icon: "Layers", title: "Extra state registrations", line: "A GSTIN in a state where you no longer operate." },
  ],

  opportunities: {
    eyebrow: "Common reasons",
    title: "Why Chennai businesses cancel their GSTIN",
    intro: "Most GST cancellations in Chennai follow a change in the business: closing down, selling up, changing structure or simply no longer needing to be registered.",
    // Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "Store", title: "Business closed", image: "https://images.unsplash.com/photo-1498811008858-d95a730b2ffc?auto=format&fit=crop&w=1600&q=90", alt: "Sorry we're closed sign hanging on a glass door", credit: "Tim Mossholder / Unsplash" },
      { icon: "Handshake", title: "Business sold or transferred", image: "https://images.unsplash.com/photo-1664463760781-f159dfe3af30?auto=format&fit=crop&w=1600&q=90", alt: "People signing a document across a desk", credit: "Annika Wischnewsky / Unsplash" },
      { icon: "Shuffle", title: "Change of structure", image: "https://images.unsplash.com/photo-1763729805496-b5dbf7f00c79?auto=format&fit=crop&w=1600&q=90", alt: "Man signing a document with a pen", credit: "Jakub Żerdzicki / Unsplash" },
      { icon: "TrendingUp", title: "Turnover below the limit", image: "https://images.unsplash.com/photo-1631651693480-97f1132e333d?auto=format&fit=crop&w=1600&q=90", alt: "Printed forms and a pen on a wooden table", credit: "2H Media / Unsplash" },
    ],
  },

  highlights: {
    eyebrow: "How it's cancelled",
    title: "How GST cancellation works in Chennai",
    lead: "A GSTIN is cancelled either on your application or by the officer. Both end with a final return.",
    items: [
      { icon: "FilePen", label: "Form REG-16", title: "Voluntary cancellation", line: "You apply, giving the reason, the date and details of stock held.", highlight: true },
      { icon: "Mail", label: "Form REG-17", title: "Officer's show cause", line: "The officer proposes cancellation, for example after months of non-filing." },
      { icon: "FileCheck2", label: "Form REG-19", title: "Cancellation order", line: "The order confirming the date your registration is cancelled." },
      { icon: "CalendarClock", label: "Within 3 months", title: "GSTR-10 final return", line: "Filed after cancellation, covering stock held on the cancellation date." },
    ],
  },

  documentsSection: {
    title: "Documents for GST cancellation in Chennai",
    lead: "What you need depends on the reason for cancelling. We'll confirm the list for your case.",
  },
  documents: [
    { icon: "FileText", title: "GST details", items: ["GSTIN and portal login", "Returns filed so far", "Any pending tax or notices"], hint: "We check the portal for anything outstanding first." },
    { icon: "Package", title: "Stock and credit", items: ["Closing stock value on the cancellation date", "Capital goods still held", "Input credit on that stock"], hint: "Tax on this stock is paid with the final return." },
    { icon: "FileSignature", title: "Proof of the reason", items: ["Closure or sale agreement", "Merger or conversion documents", "Death certificate and legal heir proof, if applicable"], hint: "Not every case needs proof, but it speeds up approval." },
  ],
  documentsNote: {
    title: "Start with a portal check",
    sub: "Share your GSTIN and login. We'll check pending returns and dues before you apply, so the application isn't rejected.",
    message: "Hi National Filings, can you check my GST portal before I cancel my registration?",
  },

  processSection: {
    title: "GST registration cancellation process in Chennai",
    lead: "Five steps, starting with clearing anything pending so the application goes through.",
    cta: {
      title: "Ready to cancel your GST?",
      sub: "Share your GSTIN and the reason. We'll clear what's pending and file the application.",
      message: "Hi National Filings, I'd like to cancel my GST registration. Can we start?",
    },
  },
  steps: [
    { title: "Portal review", time: "Day 1", sub: "Pending returns, tax dues and open notices checked." },
    { title: "Pending returns filed", time: "As needed", sub: "Every return up to the cancellation date brought up to date." },
    { title: "REG-16 filed", time: "Same day", sub: "Application with the reason, date and closing stock details." },
    { title: "Officer's order", time: "Usually within 30 days", sub: "The officer may ask for clarification before issuing REG-19." },
    { title: "GSTR-10 final return", time: "Within 3 months", sub: "Final return filed and tax on remaining stock paid." },
  ],
  processNote: "Timelines depend on the officer. Pending returns must be filed first, or the application can be rejected.",

  mistakesSection: {
    title: "GST cancellation mistakes to avoid",
    lead: "Closing a GSTIN is quick to start but easy to leave half-done.",
  },
  mistakes: [
    { icon: "CalendarClock", title: "Applying with returns pending", problem: "The officer can reject or delay the cancellation.", fix: "We file every pending return before applying." },
    { icon: "Package", title: "Ignoring closing stock", problem: "Tax on stock and capital goods held is still payable.", fix: "We work out the amount and include it in the final return." },
    { icon: "FileWarning", title: "Skipping GSTR-10", problem: "Not filing the final return brings late fees and a notice.", fix: "We file GSTR-10 within three months of the order." },
    { icon: "Store", title: "Assuming closure cancels GST", problem: "Shutting the shop doesn't cancel the registration.", fix: "We apply formally so the GSTIN actually closes." },
  ],

  costSection: {
    title: "GST cancellation cost factors in Chennai",
    lead: "There is no government fee to cancel. The cost depends on what has to be settled first.",
    cta: {
      title: "Get a quote for GST cancellation",
      sub: "Tell us your GSTIN status and any pending returns. We'll quote the full cost upfront.",
      message: "Hi National Filings, can I get a quote for GST cancellation in Chennai?",
    },
  },
  costs: [
    { icon: "Landmark", label: "₹0", title: "Government fee", line: "No fee to apply for cancellation.", highlight: true },
    { icon: "Package", label: "If stock is held", title: "Tax on closing stock", line: "Input credit reversed on stock and capital goods held." },
    { icon: "TriangleAlert", label: "If returns are late", title: "Pending late fees", line: "Late fees and interest on any returns still due." },
    { icon: "Headset", label: "Quoted upfront", title: "Professional fee", line: "Portal review, application, officer follow-up and final return." },
  ],

  compliance: {
    eyebrow: "Revocation",
    title: "Revocation of cancelled GST registration in Chennai",
    lead: "If the officer cancelled your GSTIN and you want to keep trading, you can apply to have it restored.",
    items: [
      { icon: "FilePen", label: "Form REG-21", title: "Revocation application", line: "Filed on the portal against the officer's cancellation order.", highlight: true },
      { icon: "CalendarClock", label: "Within 90 days", title: "Time limit", line: "From the cancellation order, extendable by up to 180 days with sufficient cause." },
      { icon: "FileCheck2", label: "First", title: "Returns and dues cleared", line: "Pending returns, tax, interest and late fees must be paid before applying." },
      { icon: "TriangleAlert", label: "Not available", title: "After voluntary cancellation", line: "If you cancelled it yourself, you apply for a fresh registration instead." },
    ],
  },
  decision: {
    eyebrow: "Your options",
    title: "Cancel, restore or start again?",
    lead: "The right step depends on who cancelled the registration and whether you're still trading.",
    items: [
      { icon: "Store", label: "Business closed", title: "Voluntary cancellation", line: "Apply in REG-16 and file the final return." },
      { icon: "RefreshCw", label: "Still trading", title: "Revocation", line: "Restore an officer-cancelled GSTIN within the time limit.", highlight: true },
      { icon: "FileCheck2", label: "Time limit missed", title: "Fresh registration", line: "Apply for a new GSTIN once past dues are settled." },
      { icon: "Layers", label: "Changing structure", title: "New GSTIN first", line: "Register the new entity before cancelling the old one, so trade doesn't stop." },
    ],
  },

  reasonsTitle: "Why choose National Filings for GST cancellation in Chennai",
  reasons: [
    { icon: "SearchCheck", title: "Portal checked first", line: "Pending returns and dues found before you apply." },
    { icon: "Calculator", title: "Stock worked out", line: "Tax on closing stock calculated so nothing is underpaid." },
    { icon: "FileWarning", title: "Final return filed", line: "GSTR-10 filed on time, so no notice follows." },
    { icon: "RefreshCw", title: "Revocation support", line: "Officer-cancelled GSTINs restored within the time limit." },
    { icon: "ReceiptText", title: "Clear quote", line: "Every cost, including pending fees, shown upfront." },
    { icon: "MessageCircle", title: "WhatsApp updates", line: "Status updates until the cancellation order arrives." },
  ],

  faqTitle: "GST cancellation in Chennai: your questions",
  faqs: [
    { q: "How do I cancel my GST registration?", a: "File Form REG-16 on the GST portal with the reason, the date from which you want it cancelled and details of stock held. Clear any pending returns first. After the officer's order in REG-19, file the final return GSTR-10 within three months." },
    { q: "How long does GST cancellation take in Chennai?", a: "The officer usually decides within about 30 days of a complete application, though they may ask for clarification first. Filing any pending returns beforehand avoids most delays." },
    { q: "Do I have to pay tax when cancelling GST?", a: "If you hold stock, semi-finished goods or capital goods on the cancellation date, the input credit on them has to be reversed, which is paid with the final return. There is no fee for the cancellation itself." },
    { q: "What is GSTR-10?", a: "It is the final return filed after a GST registration is cancelled, within three months of the cancellation date or order. It reports the stock held and the tax payable on it. Missing it brings late fees and a notice." },
    { q: "Can a cancelled GST registration be revoked?", a: "Yes, if the officer cancelled it. Apply for revocation in Form REG-21 within 90 days of the cancellation order, which can be extended by up to 180 days with sufficient cause. Pending returns and dues must be cleared first." },
    { q: "Can I revoke a cancellation I applied for myself?", a: "No. Revocation is only available when the officer cancelled the registration. If you cancelled it voluntarily and want to trade again, you apply for a fresh GST registration." },
    { q: "Does closing my business automatically cancel GST?", a: "No. The registration stays active, and keeps needing returns, until you apply for cancellation and the officer approves it. Many businesses build up late fees this way without realising." },
  ],

  related: [
    { icon: "ReceiptIndianRupee", label: "GST consultant", href: pillarHref("P2") },
    { icon: "FileCheck2", label: "GST registration", href: clusterHref("P2-C1") },
    { icon: "FileText", label: "GST return filing", href: clusterHref("P2-C2") },
    { icon: "Mail", label: "GST notice reply", href: clusterHref("P2-C4") },
    { icon: "Building2", label: "Company registration", href: pillarHref("P1") },
    { icon: "ClipboardCheck", label: "ROC compliance", href: clusterHref("P1-C5") },
    { icon: "Handshake", label: "LLP registration", href: clusterHref("P1-C1") },
    { icon: "IndianRupee", label: "Income tax consultant", href: pillarHref("P3") },
  ],
  relatedTitle: "Related GST services in Chennai",

  final: {
    title: "Get your GST cancellation done in Chennai",
    sub: "Tell us why you're cancelling and what's pending. We'll close your GSTIN cleanly, final return included.",
    message: "Hi National Filings, I'd like to cancel my GST registration in Chennai.",
  },
  catalogue: ["GST registration cancellation", "GSTR-10 final return", "Revocation of cancelled GST registration"],
};
