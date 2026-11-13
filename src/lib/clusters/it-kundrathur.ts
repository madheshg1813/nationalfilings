import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { site } from "@/lib/site";
import { INCOME_TAX_SERVICE, nearbyAreas } from "./shared";

/**
 * P3-A1 · Income Tax Consultant in Kundrathur (/chennai/income-tax-consultant-in-kundrathur).
 * Primary keyword: "income tax consultant in kundrathur". Our only office is in Karaima Nagar, Kundrathur (600069), so walk-ins work.
 * Angle: owners of small machining, fabrication and job-work units and building material dealers: business income and books,
 * the presumptive scheme and its limits, tax audit thresholds, advance tax, and TDS that customers deduct on job-work bills,
 * reconciled with Form 26AS and AIS. Kept distinct from the company (P1-A1) and GST (P2-A1) pages for Kundrathur.
 *
 * Local facts (reused from the verified P1-A1 JSDoc): Kundrathur municipality, headquarters of Kundrathur taluk, PIN 600069;
 * Thirumudivakkam SIDCO estate about 3 km away, with MSMEs supplying Sriperumbudur and Oragadam manufacturers.
 *
 * Facts checked (Nov 2026):
 * - The Income-tax Act, 2025 applies from 1 April 2026 and uses "tax year" in place of "previous year"; returns for FY 2025-26
 *   (filed in 2026) still follow the 1961 Act. Business income: sections 26 to 66; depreciation section 33 (additional 20% on
 *   new plant and machinery for manufacturers). (taxguru.in/income-tax/income-business-income-tax-act-2025-sections-itr-forms-compliance-ay-2026-27.html)
 * - Presumptive scheme, section 58 (merges old 44AD, 44ADA, 44AE): resident individual, HUF or firm (not LLP); turnover up to
 *   ₹2 crore, or ₹3 crore where cash receipts are within 5%; deemed profit 6% of digital or bank receipts and 8% of the rest;
 *   no separate deductions (58(4)); five-year bar after opting out; goods carriage owners with up to 10 vehicles at fixed rates.
 *   Declaring less than the deemed profit with income above the exemption limit brings books (section 62) and audit (58(3)).
 *   (same taxguru article; taxscan.in section 63 vs 44AB; taxmann.com presumptive taxation under the Income Tax Act 2025)
 * - Tax audit, section 63 (old 44AB): turnover above ₹1 crore, or ₹10 crore where cash receipts and cash payments are each within
 *   5%. Audit report renumbered Form 26 under the Income-tax Rules, 2026. (taxguru article above; businesstoday.in "Income Tax
 *   Rules 2026: Govt renumbers key forms, Tax Audit now Form 26", 11 Mar 2026)
 * - Advance tax: payable where tax is ₹10,000 or more (section 404); section 408 instalments 15%, 45%, 75%, 100% by 15 June,
 *   15 September, 15 December, 15 March; section 58 (Sl. 1 or 3) filers pay the whole amount by 15 March; interest under
 *   sections 424 and 425 (old 234B, 234C). (eztax.in/income-tax-act-2025/section-408, incometaxindia.gov.in/w/section-408-6)
 * - TDS on contract and job work, section 393(1) Table Sl. No. 6(i) (old 194C): 1% individual or HUF, 2% others; ₹30,000 single
 *   payment or ₹1,00,000 a year. (busy.in/tds/section-194c-contractors-subcontractors, taxheal.com TDS on contractors from 1.4.2026)
 * - Form 26AS becomes Form 168 (Rule 245, Income-tax Rules, 2026). (5paisa.com Form 26AS is now Form 168; taxheal.com)
 * - Finance Act 2026: return due date 31 August for non-audit business cases, 31 July for non-business, 31 October with audit;
 *   revised return window 12 months. (caalley.com "ITR changes from April 2026"; incorpx.io)
 * - No government fee to file a return; late fee and interest exist (no amounts stated here). No fee figures. Timelines are estimates.
 */

const whatsapp = "Hi National Filings, I'm in Kundrathur and need help with my business income tax return. Can I visit your office?";

export const itKundrathurPage: LicencePageData = {
  id: "P3-A1",
  service: INCOME_TAX_SERVICE,
  meta: {
    title: "Income Tax Consultant in Kundrathur | National Filings",
    description: "Income tax consultant in Kundrathur for job-work units and dealers. Business ITR, presumptive scheme, tax audit, advance tax and customer TDS checks.",
  },
  hero: {
    headline: { line1: "Income Tax Consultant", line2Before: "in Kundrathur, ", accent: "Workshop to Return" },
    sub: "Lathe shops near the Thirumudivakkam SIDCO estate, fabricators and cement and steel dealers on the main road all file business returns. We work out the profit, check the TDS your customers deducted and file the return, from our office in Karaima Nagar.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "FileCheck2",
    kicker: "Kundrathur, Chennai 600069",
    title: "ITR Acknowledgement",
    line: "Your Kundrathur Return",
    stamp: "ITR-V verified",
    chips: ["Office in Karaima Nagar", "Customer TDS matched", "Section 58 checked"],
    steps: ["Visit", "Books", "26AS", "Tax", "Filed"],
  },

  benefitsSection: {
    title: "Income tax help for Kundrathur workshop and shop owners",
    lead: "Most owners here are on the shop floor until the due date is close. We keep the tax side moving through the year, so March and August are not a scramble.",
    cta: {
      title: "Customers deducting TDS on your bills?",
      sub: "Bring your TDS certificates or just your list of customers. We'll match them with Form 26AS and AIS and show what credit you can claim.",
      message: "Hi National Filings, my customers deduct TDS on my job work bills in Kundrathur. Can you check my 26AS?",
    },
  },
  benefits: [
    { icon: "Calculator", title: "Profit worked out properly", line: "Job charges, material, wages and power bills turned into a profit figure that holds up." },
    { icon: "Scale", title: "Presumptive or full books", line: "Both methods compared on your own numbers before you choose one." },
    { icon: "Gauge", title: "Audit limit watched", line: "Turnover and cash receipts tracked, so you know early whether a tax audit applies." },
    { icon: "CalendarClock", title: "Advance tax on time", line: "Instalments worked out from your order book, or one payment by 15 March under the presumptive scheme." },
    { icon: "ReceiptText", title: "Customer TDS claimed in full", line: "Every deduction by a customer matched with Form 26AS and AIS before filing." },
    { icon: "Factory", title: "Machinery claims", line: "New lathes and CNC machines depreciated at the right rate, with the extra claim where it applies." },
    { icon: "MapPinned", title: "Walk-in office", line: "Karaima Nagar, Kundrathur. Bring your bank statements and bill books across the counter." },
    { icon: "FileWarning", title: "Notices handled", line: "Mismatch intimations and demands answered with the records behind your figures." },
  ],

  applicantsSection: {
    title: "Kundrathur taxpayers we file returns for",
    lead: "Our income tax clients in Kundrathur mostly run their business themselves. These are the owners and earners we see most often.",
  },
  applicants: [
    { icon: "Factory", title: "Lathe and CNC job workers", line: "Owners billing job charges on castings and bar stock sent by bigger units." },
    { icon: "Zap", title: "Fabrication and welding shops", line: "Gates, grills, frames and structural work for builders and factories." },
    { icon: "Package", title: "Small component makers", line: "Units selling finished parts to plants towards Sriperumbudur and Oragadam." },
    { icon: "Store", title: "Building material dealers", line: "Cement, steel, tiles and electrical stockists with high turnover and thin margins." },
    { icon: "Truck", title: "Lorry and tempo owners", line: "Owners of a few goods vehicles who can use the fixed presumptive rates for transport." },
    { icon: "Users", title: "Partners in family firms", line: "Firms paying partners salary and interest, and partners filing their own returns." },
    { icon: "HardHat", title: "Small contractors", line: "Civil and electrical contractors whose clients deduct TDS on every bill." },
    { icon: "UserRound", title: "Supervisors and staff", line: "Salaried people from local units with Form 16, a home loan or a side income." },
  ],

  opportunities: {
    eyebrow: "Local trades",
    title: "The businesses behind Kundrathur's tax returns",
    intro: "Job charges from the SIDCO estate, steel and cement sold over counters on the main road, and lorries moving both. Each trade shows up in the department's records in a different way.",
    // Pexels licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "Factory", title: "Machining job work", image: "https://images.pexels.com/photos/18569750/pexels-photo-18569750.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Rows of lathes and other machine tools on a workshop floor", credit: "J E / Pexels" },
      { icon: "Zap", title: "Fabrication", image: "https://images.pexels.com/photos/4305372/pexels-photo-4305372.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Welder crouched over a steel pipe with sparks flying in a dim workshop", credit: "Nishant Aneja / Pexels" },
      { icon: "Store", title: "Building materials", image: "https://images.pexels.com/photos/19756443/pexels-photo-19756443.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Elderly shopkeeper at the counter of a crowded hardware store", credit: "vijesh vijayan / Pexels" },
      { icon: "FileText", title: "Books and bill registers", image: "https://images.pexels.com/photos/164686/pexels-photo-164686.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Close-up of a ledger page with handwritten entries and figures", credit: "Pixabay / Pexels" },
    ],
  },

  highlights: {
    eyebrow: "Deemed profit or full books",
    title: "How a Kundrathur unit's profit can be taxed",
    lead: "A small business can declare a fixed share of turnover as profit or keep regular books. Both are legal. The better choice depends on your margin and how customers pay you.",
    items: [
      { icon: "Percent", label: "Section 58, formerly 44AD", title: "Deemed profit of 6% or 8%", line: "6% of turnover received through banks or digital modes and 8% of the rest. No expenses are claimed separately.", highlight: true },
      { icon: "Gauge", label: "Who can use it", title: "Turnover up to ₹2 crore", line: "Up to ₹3 crore if cash receipts are no more than 5% of turnover. Open to individuals, HUFs and firms, not LLPs or companies." },
      { icon: "ClipboardCheck", label: "Section 63, formerly 44AB", title: "Tax audit above ₹1 crore", line: "The limit rises to ₹10 crore when cash receipts and cash payments are each within 5% of the total." },
      { icon: "Lock", label: "The five-year rule", title: "Leaving the scheme has a cost", line: "Opt out within five years of choosing it and you're kept out for the next five. Declaring less than the deemed rate can bring books and an audit." },
    ],
  },

  documentsSection: {
    title: "What to bring for your Kundrathur business return",
    lead: "Bring these to our office or send them on WhatsApp. For a business return, the bank statement tells us as much as the bill book.",
  },
  documents: [
    { icon: "IdCard", title: "For you as the owner", items: ["PAN and Aadhaar", "Login for the income tax portal, if you have one", "Last year's return and computation", "Bank account for any refund"], hint: "Lost the portal password? We reset it with an Aadhaar OTP while you're at the office." },
    { icon: "ReceiptText", title: "For the business", items: ["Sales bills or job work invoices for the year", "Purchase bills for material, consumables and tools", "Statements for every business bank account", "GST returns, if you are registered", "Loan statements and machinery purchase bills"], hint: "The department compares your return with your GST turnover, so we match the two before filing." },
    { icon: "Percent", title: "For tax already paid", items: ["TDS certificates from customers", "Advance tax challans", "Form 26AS and AIS, or we download them for you"], hint: "If a customer deducted TDS but didn't file its TDS return, your credit goes missing. We catch this early." },
  ],
  documentsNote: {
    title: "Not sure which papers we need?",
    sub: "Bring the bag of bills as it is. We'll sort it at our Karaima Nagar office and tell you what is missing.",
    message: "Hi National Filings, I have a small unit in Kundrathur. Can I bring my bills and bank statements for my income tax return?",
  },

  processSection: {
    title: "How we file a business return from our Kundrathur office",
    lead: "The first sitting is usually across the table. After that the year runs on WhatsApp, with a reminder before each advance tax instalment.",
    cta: {
      title: "Book a time to come in",
      sub: "Tell us when you can visit. We'll have your last return and Form 26AS ready on the screen.",
      message: "Hi National Filings, I'd like to visit your Kundrathur office about my business income tax return. When can I come?",
    },
  },
  steps: [
    { title: "Sit down with us", time: "First visit", sub: "We look at last year's return, your bank accounts and how customers pay you." },
    { title: "Pick the method", time: "Same week", sub: "Deemed profit or regular books, with the audit limit checked against your turnover and cash share." },
    { title: "Match the credits", time: "1-2 days", sub: "Customer TDS matched with Form 26AS and AIS, and missing entries chased." },
    { title: "Prepare and explain", time: "1-2 days", sub: "Profit, depreciation and tax worked out and shown to you before filing." },
    { title: "File and plan ahead", time: "Before the due date", sub: "Return filed and e-verified, then the new year's advance tax planned." },
  ],
  processNote: "Timelines are estimates and start from complete documents. Audit cases take longer, and customers who file TDS returns late can hold up your credit.",

  mistakesSection: {
    title: "Income tax mistakes we fix for Kundrathur units",
    lead: "Most of these start with treating the return as a formality. The department now sees your bank, GST and TDS data before you file.",
  },
  mistakes: [
    { icon: "ReceiptText", title: "Receipts in 26AS higher than the return", problem: "A customer deducted TDS on job charges, but turnover was taken from the cash book alone, so Form 26AS shows more receipts than the return.", fix: "We reconcile each customer's receipts in Form 26AS and AIS with your sales, and explain any timing differences." },
    { icon: "Gauge", title: "Audit limit crossed without noticing", problem: "A building material dealer's turnover passes ₹1 crore and some sales are in cash, so the higher ₹10 crore limit is lost.", fix: "We track turnover and the cash share during the year, so an audit is planned, not found at the last minute." },
    { icon: "Lock", title: "Moving in and out of the scheme", problem: "An owner declares 8% one year, files from books with a lower profit the next, then wants to switch back.", fix: "We explain the five-year rule before you choose, and change method only when it pays." },
    { icon: "CalendarClock", title: "No advance tax until March", problem: "A unit has a good year and pays all its tax with the return, so interest is added for missed instalments.", fix: "We estimate profit before 15 June, 15 September and 15 December. Under the presumptive scheme it can all be paid by 15 March." },
  ],

  costSection: {
    title: "What our income tax fee for a Kundrathur business depends on",
    lead: "There is no government fee to file a return. Our fee depends on how much work your income involves, and we agree it at the office before we start.",
    cta: {
      title: "Get a quote at the counter",
      sub: "Bring last year's return and a bank statement. We'll quote for the return, the books and any audit separately.",
      message: "Hi National Filings, can I get a quote for my business income tax return in Kundrathur?",
    },
  },
  costs: [
    { icon: "FileText", label: "Quoted upfront", title: "Presumptive return", line: "Depends on the number of bank accounts, customer TDS entries to match and any other income." },
    { icon: "Calculator", label: "Quoted upfront", title: "Return from regular books", line: "Depends on transaction volume, machinery records and whether we write the books.", highlight: true },
    { icon: "ClipboardCheck", label: "Quoted separately", title: "Tax audit coordination", line: "Where turnover crosses the limit, the audit work is quoted on its own." },
    { icon: "FileWarning", label: "Quoted per case", title: "Notices and revised returns", line: "Depends on the years involved and what the department has asked. Any tax, interest or late fee is paid to the department." },
  ],

  compliance: {
    eyebrow: "Through the year",
    title: "The income tax calendar for a Kundrathur business",
    lead: "Tax for a business isn't settled once a year. These are the dates that matter most for workshop and shop owners.",
    items: [
      { icon: "CalendarClock", label: "15 Jun, Sep, Dec and Mar", title: "Advance tax instalments", line: "15%, 45%, 75% and 100% of the year's tax. Presumptive filers pay it all by 15 March." },
      { icon: "SearchCheck", label: "Every quarter", title: "Customer TDS check", line: "Confirm each customer's deduction has reached Form 26AS before the year closes." },
      { icon: "ClipboardCheck", label: "Above the turnover limit", title: "Tax audit", line: "Accounts audited and the report, now Form 26, filed before the return." },
      { icon: "CalendarCheck", label: "31 August or 31 October", title: "Business return due", line: "31 August without an audit and 31 October with one. Returns without business income stay at 31 July." },
    ],
  },

  reasonsTitle: "Why Kundrathur owners file their income tax with us",
  reasons: [
    { icon: "MapPinned", title: "Office in Karaima Nagar", line: "Open Monday to Saturday, 9 am to 7 pm. Walk in with your papers." },
    { icon: "Factory", title: "Job work is familiar ground", line: "Job charges, customer TDS and machinery claims are routine for us." },
    { icon: "SearchCheck", title: "Matched before filing", line: "Bank, GST, Form 26AS and AIS checked against your return." },
    { icon: "MessageCircle", title: "Reminders on WhatsApp", line: "Advance tax and due date reminders sent before they fall due." },
    { icon: "Award", title: "Experience since 2012", line: "Tax and compliance work for Chennai businesses." },
    { icon: "ReceiptText", title: "Fees agreed in writing", line: "You know the fee before we start on your return." },
  ],

  faqTitle: "Income tax in Kundrathur: questions from local owners",
  faqs: [
    { q: "Can I come to your Kundrathur office with my income tax papers?", a: `Yes. We're at ${site.address.street}, ${site.address.city} ${site.address.postalCode}, open Monday to Saturday, 9 am to 7 pm. Send a WhatsApp message before you come so the person handling your return is free.` },
    { q: "My turnover is under ₹2 crore. Should I use the presumptive scheme?", a: "Often, yes, if your real margin is above 6% to 8% and you don't want to keep full books. Under section 58 of the Income-tax Act, 2025 (formerly section 44AD), profit is taken as 6% of turnover received through banks or digital modes and 8% of the rest, with no separate expense claims. The limit is ₹3 crore if cash receipts stay within 5%. If your margin is thinner, regular books may save tax. We compare both on your figures." },
    { q: "When does a Kundrathur business need a tax audit?", a: "Under section 63 of the new Act (formerly section 44AB), when turnover crosses ₹1 crore. The limit is ₹10 crore if cash receipts and cash payments are each no more than 5% of the totals. A business on the presumptive scheme that declares less than the deemed profit, with total income above the basic exemption limit, may also need books and an audit." },
    { q: "My customer deducts TDS on my job work bills. How do I get it back?", a: "TDS on contract and job work is 1% for an individual or HUF and 2% for a firm or company, once a single bill crosses ₹30,000 or the year's total crosses ₹1 lakh. It shows in your Form 26AS and AIS after the customer files its TDS return. We match it with your sales, chase customers who haven't filed, and claim the credit in your return. Any excess comes back as a refund. If you buy the material yourself and sell finished parts, it is usually a sale and this TDS doesn't apply." },
    { q: "Do I have to pay advance tax on my business income?", a: "Yes, if your tax for the year after TDS is ₹10,000 or more. With regular books it is paid in four parts: 15% by 15 June, 45% by 15 September, 75% by 15 December and the rest by 15 March. Under the presumptive scheme you can pay the whole amount by 15 March. Paying late or short adds interest." },
    { q: "Has the new Income-tax Act changed how my business files?", a: "The Income-tax Act, 2025 applies to income earned from 1 April 2026, now called the tax year. Section and form numbers have changed, for example Form 26AS becomes Form 168, but the presumptive scheme, books and audit limits carry over largely as before. The return you file in 2026 for 2025-26 still follows the old Act." },
    { q: "What is the last date for my business return?", a: "For a business that doesn't need an audit, 31 August after the year ends. With an audit, 31 October. Salaried people and others without business income still file by 31 July. A late return attracts a late fee and interest on unpaid tax, so we aim to file well before the date." },
  ],

  related: nearbyAreas("P3-A1"),
  relatedTitle: "Income tax consultants in areas near Kundrathur",

  final: {
    title: "Settle this year's tax for your Kundrathur business",
    sub: "Walk in to Karaima Nagar or message us. We'll look at your turnover, customer TDS and advance tax, and tell you where you stand.",
    message: "Hi National Filings, I run a business in Kundrathur and want help with my income tax return. Can we talk?",
  },
  catalogue: ["Business income tax return filing in Kundrathur", "Presumptive taxation and tax audit support in Kundrathur", "Advance tax and TDS credit reconciliation in Kundrathur"],
};
