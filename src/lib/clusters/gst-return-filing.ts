import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { GST_SERVICE, clusterHref, licenceHref, pillarHref } from "./shared";

/**
 * P2-C2 · GST Return Filing (/chennai/gst-return-filing-service).
 * Primary keyword: "gst return filing in chennai". Secondary: "gst return filing services in chennai",
 * "gst annual return filing in chennai", "gst reconciliation services in chennai".
 * Extra H2s: GSTR-9 / 9C annual return; GSTR-2B reconciliation and ITC.
 *
 * Facts checked Oct 2026: GSTR-1 by the 11th (monthly) or 13th after the quarter (QRMP); GSTR-3B by the 20th, or the 22nd after
 * the quarter for Tamil Nadu QRMP filers; GSTR-9 optional up to ₹2 crore turnover, GSTR-9C above ₹5 crore, both due 31 December;
 * interest 18% a year on late tax; returns can't be filed more than three years after their due date; e-way bills are blocked
 * after two missed GSTR-3B periods; the Invoice Management System lets buyers accept or reject supplier invoices.
 */

const whatsapp = "Hi National Filings, I'd like help with GST return filing in Chennai.";

export const gstReturnFilingPage: LicencePageData = {
  id: "P2-C2",
  service: GST_SERVICE,
  meta: {
    title: "GST Return Filing in Chennai | GSTR-1, 3B, 9 & ITC Checks",
    description: "GST return filing in Chennai for monthly and quarterly filers. GSTR-1, GSTR-3B, GSTR-9 and GSTR-2B reconciliation, filed on time with ITC checks.",
  },
  hero: {
    headline: { line1: "GST Return Filing", line2Before: "in Chennai, ", accent: "Filed On Time" },
    sub: "Send your sales and purchases each month and we handle the rest. Our GST return filing services in Chennai cover GSTR-1, GSTR-3B, annual returns and input credit checks.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "ReceiptIndianRupee",
    kicker: "GST Returns",
    title: "Return Filed",
    line: "GSTR-3B · This month",
    stamp: "Filed",
    chips: ["GSTR-2B matched", "GSTR-1 filed", "Tax paid"],
    steps: ["Data", "Reconcile", "GSTR-1", "GSTR-3B", "Report"],
  },

  benefitsSection: {
    title: "Why on-time GST return filing matters in Chennai",
    lead: "Late or wrong returns cost more than the fee. They block credit, e-way bills and sometimes the registration itself.",
    cta: {
      title: "Behind on GST returns?",
      sub: "Tell us how many months are pending. We'll work out the late fees and interest and file them in order.",
      message: "Hi National Filings, I have pending GST returns. Can you help me catch up?",
    },
  },
  benefits: [
    { icon: "Coins", title: "No late fees", line: "Late returns attract a fee for each day, plus interest on tax paid late." },
    { icon: "ShieldCheck", title: "Input credit protected", line: "Credit claimed only when it matches what suppliers have reported." },
    { icon: "Users", title: "Customers keep their credit", line: "Your GSTR-1 on time lets your buyers claim credit on your invoices." },
    { icon: "Truck", title: "E-way bills keep working", line: "Missing GSTR-3B for two periods blocks e-way bill generation." },
    { icon: "BadgeCheck", title: "Registration stays active", line: "Long gaps in filing can lead the officer to cancel your GSTIN." },
    { icon: "Mail", title: "Fewer notices", line: "Clean, matching returns draw far fewer scrutiny notices." },
    { icon: "Landmark", title: "Loan and tender ready", line: "Banks and buyers check your GST filing history." },
    { icon: "Clock", title: "Your time back", line: "No more late nights on the portal before the due date." },
  ],

  applicantsSection: {
    title: "Who we file GST returns for in Chennai",
    lead: "Every registered business files returns, even in a month with no sales.",
  },
  applicants: [
    { icon: "CalendarCheck", title: "Monthly filers", line: "GSTR-1 and GSTR-3B every month." },
    { icon: "CalendarClock", title: "Quarterly (QRMP) filers", line: "Quarterly returns with monthly tax payments, up to ₹5 crore turnover." },
    { icon: "Calculator", title: "Composition dealers", line: "CMP-08 every quarter and GSTR-4 every year." },
    { icon: "ShoppingCart", title: "Ecommerce sellers", line: "Marketplace sales matched with TCS statements." },
    { icon: "Globe", title: "Exporters", line: "Zero-rated supplies reported, with refund support." },
    { icon: "UtensilsCrossed", title: "Restaurants and cafes", line: "High-volume consumer sales filed accurately." },
    { icon: "Briefcase", title: "Service businesses", line: "Agencies, consultants and contractors." },
    { icon: "Clock", title: "Businesses with pending returns", line: "Catch-up filing before the three-year limit runs out." },
  ],

  opportunities: {
    eyebrow: "Who we file for",
    title: "Chennai businesses that trust us with their returns",
    intro: "Shops, distributors and factories across Chennai send us their monthly data. We reconcile it, file their GST returns and flag anything that needs attention.",
    // Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "ChefHat", title: "Sweet shops and bakeries", image: "https://images.unsplash.com/photo-1546327740-eba23e46d2a0?auto=format&fit=crop&w=1600&q=90", alt: "Trays of sweets and snacks on display", credit: "Bhaumik Kaji / Unsplash" },
      { icon: "Package", title: "Distributors with stock", image: "https://images.unsplash.com/photo-1672552226380-486fe900b322?auto=format&fit=crop&w=1600&q=90", alt: "Warehouse racks stacked with boxes on pallets", credit: "Arum Visuals / Unsplash" },
      { icon: "Factory", title: "Factories and mills", image: "https://images.unsplash.com/photo-1649692471811-bde013768f2c?auto=format&fit=crop&w=1600&q=90", alt: "Two men walking through a large industrial shed", credit: "Nayan Bhalotia / Unsplash" },
      { icon: "Store", title: "Retail and convenience stores", image: "https://images.unsplash.com/photo-1552353289-97f99c442b3e?auto=format&fit=crop&w=1600&q=90", alt: "Shopkeeper standing in a store stocked with drinks", credit: "Laurentiu Morariu / Unsplash" },
    ],
  },

  highlights: {
    eyebrow: "Returns we file",
    title: "GST returns and due dates in Chennai",
    lead: "Your dates depend on whether you file monthly or quarterly. These are the main ones for Tamil Nadu.",
    items: [
      { icon: "FileText", label: "11th or 13th", title: "GSTR-1 sales return", line: "By the 11th monthly, or the 13th after the quarter for QRMP filers." },
      { icon: "Coins", label: "20th or 22nd", title: "GSTR-3B summary and tax", line: "By the 20th monthly, or the 22nd after the quarter for Tamil Nadu QRMP filers.", highlight: true },
      { icon: "Calculator", label: "Quarterly and yearly", title: "CMP-08 and GSTR-4", line: "For composition dealers: tax every quarter and a return every year." },
      { icon: "CalendarCheck", label: "31 December", title: "GSTR-9 and GSTR-9C", line: "The annual return and reconciliation statement for the previous year." },
    ],
  },

  documentsSection: {
    title: "What we need each month for GST returns",
    lead: "Most clients share these from their billing or accounting software. Excel or PDF both work.",
  },
  documents: [
    { icon: "FileText", title: "Sales", items: ["Sales invoices or sales register", "Credit and debit notes", "Export invoices and shipping bills", "Marketplace sales reports"], hint: "We check each B2B invoice has the buyer's GSTIN." },
    { icon: "Package", title: "Purchases", items: ["Purchase invoices", "Expense bills with GST", "Import bills of entry", "Reverse charge purchases"], hint: "We match these against your GSTR-2B." },
    { icon: "Landmark", title: "Other details", items: ["GST portal login", "Bank statement, if asked", "E-way bills for the month", "Any notices received"], hint: "Send them by the 5th and we'll file well before the due date." },
  ],
  documentsNote: {
    title: "No accounting software? That's fine",
    sub: "Photos of invoices or a simple Excel sheet work. We'll suggest an easy format after the first month.",
    message: "Hi National Filings, I don't use accounting software. Can you still file my GST returns?",
  },

  processSection: {
    title: "How we handle GST return filing in Chennai",
    lead: "The same five steps every month, finished well before the due date.",
    cta: {
      title: "Hand over your GST returns",
      sub: "Share your GSTIN and last month's data. We'll take it from your next return.",
      message: "Hi National Filings, I'd like you to handle my GST return filing every month.",
    },
  },
  steps: [
    { title: "Data collection", time: "By the 5th", sub: "Sales and purchase data shared on WhatsApp or email." },
    { title: "Reconciliation", time: "1-2 days", sub: "Purchases matched with GSTR-2B and supplier invoices reviewed." },
    { title: "GSTR-1 filed", time: "By the 11th or 13th", sub: "Sales invoices uploaded so your buyers get their credit." },
    { title: "GSTR-3B and payment", time: "By the 20th or 22nd", sub: "Tax worked out, challan shared and the return filed." },
    { title: "Monthly summary", time: "After filing", sub: "Filed returns, tax paid and any mismatches flagged for you." },
  ],
  processNote: "Due dates shown are the usual ones. When the government extends a date, we tell you.",

  mistakesSection: {
    title: "GST return mistakes that lead to notices",
    lead: "Most GST notices start with a mismatch that could have been caught before filing.",
  },
  mistakes: [
    { icon: "Coins", title: "Claiming credit not in GSTR-2B", problem: "Input credit claimed on invoices your supplier hasn't reported.", fix: "We claim credit only after matching it with GSTR-2B." },
    { icon: "Shuffle", title: "GSTR-1 and GSTR-3B don't match", problem: "Sales reported differently in the two returns.", fix: "We reconcile both before either is filed." },
    { icon: "MapPinned", title: "Wrong tax type", problem: "IGST charged on a local sale, or CGST and SGST on an inter-state one.", fix: "We check the place of supply on every invoice." },
    { icon: "CalendarClock", title: "Filing late", problem: "Late fees, interest and blocked e-way bills.", fix: "We file before the due date, every month." },
  ],

  costSection: {
    title: "GST return filing cost factors in Chennai",
    lead: "Our fee depends on how many invoices you have and how often you file. Here's what affects the total.",
    cta: {
      title: "Get a monthly quote",
      sub: "Tell us your average invoices a month and whether you file monthly or quarterly. We'll quote a fixed fee.",
      message: "Hi National Filings, can I get a quote for monthly GST return filing in Chennai?",
    },
  },
  costs: [
    { icon: "Headset", label: "Fixed monthly", title: "Professional fee", line: "Based on invoice volume and filing frequency, quoted upfront.", highlight: true },
    { icon: "CalendarCheck", label: "Quoted separately", title: "Annual return", line: "GSTR-9, and GSTR-9C where it applies." },
    { icon: "TriangleAlert", label: "Per day of delay", title: "Late fees", line: "Charged by the government on late returns, up to a limit." },
    { icon: "Percent", label: "18% a year", title: "Interest on late tax", line: "Charged on tax paid after the due date." },
  ],

  compliance: {
    eyebrow: "Annual return",
    title: "GSTR-9 and GSTR-9C annual return filing in Chennai",
    lead: "The annual return pulls the whole year together. It's where earlier mistakes show up, so we reconcile before filing.",
    items: [
      { icon: "FileCheck2", label: "Up to ₹2 crore", title: "GSTR-9 optional", line: "Smaller taxpayers can choose not to file the annual return." },
      { icon: "CalendarCheck", label: "Above ₹2 crore", title: "GSTR-9 mandatory", line: "A full summary of the year's sales, purchases, tax and credit.", highlight: true },
      { icon: "SearchCheck", label: "Above ₹5 crore", title: "GSTR-9C", line: "A self-certified reconciliation of books with GST returns." },
      { icon: "CalendarClock", label: "31 December", title: "Due date", line: "Following the end of the financial year, unless extended." },
    ],
  },
  decision: {
    eyebrow: "Input tax credit",
    title: "GSTR-2B reconciliation and ITC in Chennai",
    lead: "Our GST reconciliation services in Chennai match every purchase with GSTR-2B before you claim credit.",
    items: [
      { icon: "FileText", label: "Monthly", title: "GSTR-2B statement", line: "A fixed monthly statement of credit available from your suppliers' filings." },
      { icon: "ListTree", label: "Every month", title: "Purchase matching", line: "Your purchase register matched invoice by invoice with GSTR-2B.", highlight: true },
      { icon: "ClipboardCheck", label: "Before filing", title: "Invoice Management System", line: "Supplier invoices accepted, rejected or kept pending on the portal." },
      { icon: "Mail", label: "As needed", title: "Supplier follow-up", line: "Missing invoices chased with suppliers so credit isn't lost." },
    ],
  },

  reasonsTitle: "Why choose National Filings for GST return filing in Chennai",
  reasons: [
    { icon: "CalendarCheck", title: "Filed before the due date", line: "Every month, with a reminder when we need your data." },
    { icon: "ListTree", title: "Credit matched first", line: "GSTR-2B reconciliation before any credit is claimed." },
    { icon: "Shuffle", title: "Returns that agree", line: "GSTR-1, GSTR-3B and the annual return kept in line." },
    { icon: "ReceiptText", title: "Fixed monthly fee", line: "Quoted upfront based on your invoice volume." },
    { icon: "Mail", title: "Notices handled", line: "If a mismatch notice comes, we reply for you." },
    { icon: "MessageCircle", title: "WhatsApp summaries", line: "Filed returns and tax paid, sent after every filing." },
  ],

  faqTitle: "GST return filing in Chennai: your questions",
  faqs: [
    { q: "Which GST returns does a regular business file?", a: "GSTR-1 for sales and GSTR-3B for the summary and tax payment, monthly or quarterly depending on your scheme, plus the annual return GSTR-9 where it applies. Composition dealers file CMP-08 every quarter and GSTR-4 every year." },
    { q: "What are the due dates for GST returns in Tamil Nadu?", a: "Monthly filers file GSTR-1 by the 11th and GSTR-3B by the 20th of the next month. QRMP filers file GSTR-1 by the 13th after the quarter and GSTR-3B by the 22nd after the quarter, paying tax monthly in between." },
    { q: "Do I need to file returns if there were no sales?", a: "Yes. A nil return must still be filed for every period you are registered. Missing nil returns attracts late fees too." },
    { q: "What is GSTR-2B reconciliation?", a: "It is matching your purchase records with GSTR-2B, the monthly statement built from your suppliers' returns. You should only claim input credit that appears there, so we match every invoice and follow up on missing ones." },
    { q: "Is GSTR-9 annual return mandatory?", a: "It's optional for businesses with turnover up to ₹2 crore and mandatory above that. Businesses above ₹5 crore also file GSTR-9C, a reconciliation of their books with the returns. Both are due by 31 December after the year ends." },
    { q: "What happens if I file GST returns late?", a: "A late fee applies for each day of delay, up to a limit, and interest at 18% a year applies on tax paid late. Missing GSTR-3B for two periods blocks e-way bills, and long gaps can lead to cancellation of your registration." },
    { q: "Can I file GST returns from earlier years now?", a: "Only within three years of their original due date. After that, the GST portal no longer accepts them, so pending returns should be filed as soon as possible." },
    { q: "How much do GST return filing services in Chennai cost?", a: "It depends on how many invoices you have and whether you file monthly or quarterly. We quote a fixed monthly fee upfront, with the annual return quoted separately." },
  ],

  related: [
    { icon: "ReceiptIndianRupee", label: "GST consultant", href: pillarHref("P2") },
    { icon: "FileCheck2", label: "GST registration", href: clusterHref("P2-C1") },
    { icon: "FileWarning", label: "GST cancellation", href: clusterHref("P2-C3") },
    { icon: "Mail", label: "GST notice reply", href: clusterHref("P2-C4") },
    { icon: "IndianRupee", label: "Income tax consultant", href: pillarHref("P3") },
    { icon: "Building2", label: "Company registration", href: pillarHref("P1") },
    { icon: "ClipboardCheck", label: "ROC compliance", href: clusterHref("P1-C5") },
    { icon: "Factory", label: "MSME registration", href: licenceHref("L1") },
  ],
  relatedTitle: "Related GST services in Chennai",

  final: {
    title: "Get your GST returns filed on time in Chennai",
    sub: "Share your GSTIN and how many invoices you have a month. We'll quote a fixed fee and start from your next return.",
    message: "Hi National Filings, I'd like to get my GST returns filed on time.",
  },
  catalogue: ["Monthly and quarterly GST return filing", "GSTR-9 and GSTR-9C annual return", "GSTR-2B reconciliation"],
};
