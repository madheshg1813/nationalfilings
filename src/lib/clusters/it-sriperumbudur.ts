import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { INCOME_TAX_SERVICE, nearbyAreas } from "./shared";

/**
 * P3-A12 · Income Tax Consultant in Sriperumbudur (/chennai/income-tax-consultant-in-sriperumbudur).
 * Primary keyword: "income tax consultant in sriperumbudur". We have no office here; clients work with us over WhatsApp
 * and email, or visit our Kundrathur office.
 * Angle: contractors and vendors to the large auto and electronics plants, plus the plants' employees. Their income tax
 * issues: TDS the plants deduct on contract, manpower and professional payments, matching it in Form 168 (formerly 26AS)
 * and AIS before filing, tax audit for contractors and its due date, and salary returns for shift workers. No company is
 * named. Company and GST wording for this area lives on P1-A12 and P2-A12; general ITR wording on the P3 pillar.
 *
 * Local facts (reused from the verified P1-A12 JSDoc): Sriperumbudur municipality, headquarters of Sriperumbudur taluk,
 * Kancheepuram district; PIN 602105; on the Chennai to Bengaluru highway; SIPCOT industrial parks at Sriperumbudur and
 * Irungattukottai with auto, auto ancillary, engineering and electronics units.
 *
 * Facts checked (Nov 2026). The Income-tax Act, 2025 applies from 1 April 2026 (tax year 2026-27 onwards); returns for
 * FY 2025-26 filed during 2026 still fall under the 1961 Act.
 * - Contract payments: section 393(1), Table Sl. No. 6(i) (formerly 194C), 1% where the payee is an individual or HUF, 2%
 *   otherwise; no deduction where a single payment is up to ₹30,000 and the year's total up to ₹1 lakh.
 *   (taxguru.in/income-tax/tds-rates-income-tax-act-2025-1-april-2026.html; taxmann.com TDS and TCS under the 2025 Act)
 * - Manpower supply: the Finance Act, 2026 includes supply of manpower working under the payer's supervision, control or
 *   direction in the definition of "work", so it suffers contractor TDS rather than professional-fee TDS (sources differ
 *   on the sub-clause of section 402, so the page gives no clause number). (incometaxindia.gov.in FAQs Budget 2026;
 *   studycafe.in/?p=408799; incorpx.io manpower supply TDS 2026)
 * - Fees: section 393(1), Table Sl. No. 6(iii) (formerly 194J): technical services 2%, professional services 10%,
 *   threshold ₹50,000 a year for each. (taxguru.in TDS master sheet above; blog.tdsman.com section 393(1) 194J, Jul 2026)
 * - Form 26AS is now Form 168, Form 16 is Form 130 and Form 16A is Form 131 under the Income-tax Rules, 2026; AIS continues.
 *   (businesstoday.in Income Tax Rules 2026 forms, 11 Mar 2026; freepressjournal.in; taxguru.in)
 * - Section 63 (formerly 44AB): audit where business turnover exceeds ₹1 crore, or ₹10 crore where cash receipts and cash
 *   payments are each within 5%; profession above ₹50 lakh gross receipts; also where a presumptive assessee claims lower
 *   profit than the deemed profit. Report (Form 26, formerly 3CA/3CB/3CD) by the "specified date", one month before the
 *   section 263(1) return due date. (eztax.in/income-tax-act-2025/section-63; visaverge.com on Form 26)
 * - Section 263(1): 31 October for audited persons, so the audit report falls due 30 September; 31 August for non-audit
 *   business assessees from tax year 2026-27 (Finance Act, 2026); 31 July for others, such as salaried individuals.
 *   (eztax.in section-263; cleartax.in/s/section-263-income-tax-act-2025)
 * - Section 58, Table Sl. No. 1 (formerly 44AD): eligible business up to ₹2 crore turnover, ₹3 crore if cash receipts are
 *   within 5%; deemed profit 6% of banking or online receipts, 8% of others. (eztax.in/income-tax-act-2025/section-58)
 * - Advance tax: section 404 (₹10,000 or more), section 408 instalments by 15 June, 15 September, 15 December and 15 March;
 *   interest under sections 424 and 425. (eztax.in sections 404, 408, 424, 425)
 * - Salaried individuals, tax year 2026-27: Budget 2026 left the slabs unchanged; new regime is the default, with a ₹75,000
 *   standard deduction and a rebate that makes income up to ₹12 lakh tax-free. (businesstoday.in 1 Feb 2026;
 *   storyboard18.com Budget 2026 coverage) Shift allowances and overtime are part of taxable salary.
 * No fees, refund timelines or client counts are stated. Timelines are estimates.
 */

const whatsapp = "Hi National Filings, I'm a contractor to a plant near Sriperumbudur and need help with my income tax and TDS.";

export const itSriperumbudurPage: LicencePageData = {
  id: "P3-A12",
  service: INCOME_TAX_SERVICE,
  meta: {
    title: "Income Tax Consultant in Sriperumbudur | National Filings",
    description: "Income tax consultant in Sriperumbudur for plant contractors and factory staff: TDS matched in Form 168 and AIS, tax audits, and salary returns filed.",
  },
  hero: {
    headline: { line1: "Income Tax Consultant", line2Before: "in Sriperumbudur, ", accent: "TDS Credit Matched" },
    sub: "Plants in the SIPCOT parks deduct tax on every contractor bill. That tax is yours to claim, but only if it reaches your Form 168 under the right PAN and year. We match it, file your return and handle the audit when one applies.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "Factory",
    kicker: "Sriperumbudur, Kancheepuram District",
    title: "Income Tax Return Filed",
    line: "Your Sriperumbudur Return",
    stamp: "TDS credit matched",
    chips: ["Form 168 checked", "Tax audit on time", "Shift pay returns"],
    steps: ["Bills", "TDS", "Form 168", "Return", "Refund"],
  },

  benefitsSection: {
    title: "Income tax support for the Sriperumbudur industrial belt",
    lead: "A contractor to a large plant pays much of its tax through deductions it never sees happen. Getting that money back, or set against your tax, is most of the work.",
    cta: {
      title: "TDS on your bills not showing up?",
      sub: "Send us your Form 168 and the plant's payment advice. We'll find the gap and tell you who needs to correct it.",
      message: "Hi National Filings, a plant near Sriperumbudur deducted TDS from my bills but it isn't in my Form 168. Can you help?",
    },
  },
  benefits: [
    { icon: "SearchCheck", title: "TDS matched bill by bill", line: "Every deduction on the plant's payment advice traced to Form 168." },
    { icon: "Percent", title: "Right rate checked", line: "Contract work at 1% or 2%, technical fees at 2%, professional fees at 10%." },
    { icon: "Users", title: "Manpower bills under the new rule", line: "Since April 2026, manpower supply counts as contract work for TDS." },
    { icon: "Scale", title: "Tax audit on time", line: "Turnover tracked so the audit report goes in before its due date." },
    { icon: "Banknote", title: "Refunds claimed", line: "Excess TDS on thin-margin contracts claimed back in your return." },
    { icon: "IdCard", title: "Salary returns for plant staff", line: "Form 130, shift pay and job changes handled for employees." },
    { icon: "CalendarClock", title: "Advance tax worked out", line: "TDS counted first, so you only pay the balance in instalments." },
    { icon: "MessageCircle", title: "No trips into Chennai", line: "Everything over WhatsApp and email, from your site office or home." },
  ],

  applicantsSection: {
    title: "Who we file income tax returns for in Sriperumbudur",
    lead: "Some of our clients here bill a single plant; others work on its shop floor. Both depend on what the plant reports against their PAN.",
  },
  applicants: [
    { icon: "Users", title: "Manpower contractors", line: "Operators and helpers placed on plant lines, billed every month." },
    { icon: "Factory", title: "Job work and machining units", line: "Contract manufacturing on the plant's material, paid with TDS." },
    { icon: "HardHat", title: "Civil and maintenance contractors", line: "Shed work, utilities and annual maintenance contracts." },
    { icon: "Truck", title: "Staff bus and transport operators", line: "Route contracts for shift transport, with deductions on each bill." },
    { icon: "Zap", title: "Electrical and automation contractors", line: "Panel, wiring and machine installation jobs on plant sites." },
    { icon: "Laptop", title: "Engineers and technical consultants", line: "Design, testing and IT work billed as technical or professional fees." },
    { icon: "UserRound", title: "Shift workers and supervisors", line: "Plant employees with shift allowance, overtime and bonus in their pay." },
    { icon: "Package", title: "Small parts and consumables vendors", line: "Suppliers whose turnover is nearing the audit limit." },
  ],

  opportunities: {
    eyebrow: "The industrial belt",
    title: "Who earns from Sriperumbudur's plants",
    intro: "Car, electronics and component plants around Sriperumbudur and Oragadam pay salaries, contract bills and manpower invoices every month. Each kind of payment carries its own TDS and its own return.",
    // Pexels licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "Factory", title: "Car and component plants", image: "https://images.pexels.com/photos/19233057/pexels-photo-19233057.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Robot arms assembling a car body on a factory line", credit: "Hyundai Motor Group / Pexels" },
      { icon: "Users", title: "Shift and contract workers", image: "https://images.pexels.com/photos/32399719/pexels-photo-32399719.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Two women in blue work uniforms on a factory floor", credit: "EqualStock IN / Pexels" },
      { icon: "Laptop", title: "Electronics manufacturing", image: "https://images.pexels.com/photos/10699354/pexels-photo-10699354.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Technician soldering components on a green circuit board", credit: "tnfeez desgin / Pexels" },
      { icon: "HardHat", title: "Maintenance contractors", image: "https://images.pexels.com/photos/1098401/pexels-photo-1098401.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Welder in a mask and gloves welding a pipe with sparks flying", credit: "Aman Jakhar / Pexels" },
    ],
  },

  highlights: {
    eyebrow: "TDS on plant payments",
    title: "What a plant deducts from your bill, and under which rule",
    lead: "From 1 April 2026, all of these sit in section 393 of the Income-tax Act, 2025. The rates are largely the old ones under new numbers.",
    items: [
      { icon: "HardHat", label: "Contract work (formerly 194C)", title: "1% or 2% on the bill", line: "1% if you are an individual or HUF, 2% for a firm, LLP or company. Nothing is deducted if a bill is up to ₹30,000 and the year's total stays within ₹1 lakh.", highlight: true },
      { icon: "Users", label: "Manpower supply", title: "Now treated as contract work", line: "The Finance Act, 2026 brings manpower working under the plant's supervision into the meaning of work. Contractor rates apply, not the 10% for professional fees." },
      { icon: "Laptop", label: "Technical services (formerly 194J)", title: "2% above ₹50,000", line: "Fees for technical services, such as testing, calibration or engineering support, are deducted at 2%." },
      { icon: "Briefcase", label: "Professional fees (formerly 194J)", title: "10% above ₹50,000", line: "Consultants, designers and other professionals billing the plant suffer 10%. Billing under the wrong head means the wrong rate." },
    ],
  },

  documentsSection: {
    title: "What we need for an income tax return in Sriperumbudur",
    lead: "Send them on WhatsApp or email. For contractors, the plant's payment advices are as important as your own invoices.",
  },
  documents: [
    { icon: "FileText", title: "For contractors and vendors", items: ["Sales invoices or bill register for the year", "Payment advices from each plant", "TDS certificates (Form 131, formerly 16A)", "Bank statements for the business account", "Wage, PF and ESI records for your workers"], hint: "Payment advices show the TDS on each bill. We compare them with Form 168 line by line." },
    { icon: "IdCard", title: "For plant employees", items: ["Form 130 (formerly Form 16) from each employer", "Payslips, if you changed jobs", "Rent receipts and investment proofs, for the old regime", "Bank account for the refund"], hint: "Contract workers often move between contractors in a year. Send a Form 130 from each one." },
    { icon: "Scale", title: "If a tax audit applies", items: ["Books of account", "Fixed asset and loan details", "GST returns for the year", "Previous year's audit report"], hint: "We share the list early so the audit isn't squeezed into September." },
  ],
  documentsNote: {
    title: "Plant deducted tax under the wrong PAN or year?",
    sub: "Send us the payment advice and your Form 168. We'll tell you what the plant's accounts team needs to correct in its TDS return.",
    message: "Hi National Filings, a plant near Sriperumbudur seems to have deducted my TDS wrongly. Can you check it?",
  },

  processSection: {
    title: "How we file returns for Sriperumbudur contractors",
    lead: "We work with Sriperumbudur clients over WhatsApp and email, and you can visit our Kundrathur office if you prefer. Most of the time goes into matching TDS before anything is filed.",
    cta: {
      title: "Start with your Form 168",
      sub: "Download it from the portal or send your login. We'll compare it with your bills and tell you what's missing.",
      message: "Hi National Filings, I'm a contractor in Sriperumbudur. Can you check my Form 168 against my bills before I file?",
    },
  },
  steps: [
    { title: "Pull Form 168 and AIS", time: "Day 1", sub: "We download the TDS and income the plants and banks have reported against your PAN." },
    { title: "Match every bill", time: "2-4 days", sub: "Payment advices tallied with Form 168. Missing or short credits listed by plant and quarter." },
    { title: "Chase corrections", time: "As needed", sub: "We tell you exactly what each plant must fix in its TDS return, with the bill details." },
    { title: "Profit, audit and tax", time: "After matching", sub: "Profit from your books or the presumptive scheme, with the audit if your turnover needs one." },
    { title: "File and track refund", time: "Before the due date", sub: "Return filed and e-verified, then followed until it is processed." },
  ],
  processNote: "Timelines are estimates. A plant's TDS correction can take time to reach Form 168, and audits need complete books.",

  mistakesSection: {
    title: "Income tax mistakes we fix for Sriperumbudur contractors and staff",
    lead: "Most of these start in the plant's accounts department, but the cost lands on you when you file.",
  },
  mistakes: [
    { icon: "Shuffle", title: "Income and TDS in different years", problem: "A March bill is booked by the contractor in one year, but the plant deducts and reports the TDS in the next.", fix: "We match income and TDS to the same year and explain the timing in the return where needed." },
    { icon: "Percent", title: "Manpower billed as professional fees", problem: "A plant still deducts 10% on a manpower contract, leaving the contractor short of cash all year.", fix: "We point out the April 2026 change and help you ask the plant to apply contractor rates." },
    { icon: "Scale", title: "Audit started too late", problem: "Turnover crosses the limit, but no one notices until the return is due and the audit report deadline has passed.", fix: "We watch turnover through the year and plan the audit well before 30 September." },
    { icon: "IdCard", title: "Two employers, tax short-paid", problem: "A shift worker changes contractor mid-year, each employer deducts as if it were the only one, and tax falls due at filing.", fix: "We combine both Form 130s, work out the balance and pay it before filing to limit interest." },
  ],

  costSection: {
    title: "What our income tax fee depends on in Sriperumbudur",
    lead: "There is no government fee to file a return. Any tax, interest or late fee goes to the department. Our fee depends on the matching and audit work involved, and we agree it first.",
    cta: {
      title: "Get a quote for your return",
      sub: "Tell us whether you're a contractor or an employee, how many plants you bill and your rough turnover.",
      message: "Hi National Filings, can I get a quote for my income tax return in Sriperumbudur?",
    },
  },
  costs: [
    { icon: "IdCard", label: "Quoted upfront", title: "Salary return", line: "For plant staff with one or more Form 130s, shift pay and deductions." },
    { icon: "SearchCheck", label: "Quoted upfront", title: "Contractor return with TDS matching", line: "Depends on the number of plants, bills and TDS entries to reconcile.", highlight: true },
    { icon: "Scale", label: "Quoted upfront", title: "Tax audit and Form 26", line: "Depends on turnover, the state of your books and the number of locations." },
    { icon: "FileWarning", label: "Quoted per case", title: "TDS gaps, notices and past years", line: "Depends on how many credits are missing and the years involved." },
  ],

  compliance: {
    eyebrow: "Through the tax year",
    title: "Income tax dates for Sriperumbudur contractors and staff",
    lead: "From tax year 2026-27 these come from the Income-tax Act, 2025. We remind you before each one.",
    items: [
      { icon: "CalendarClock", label: "15 June to 15 March", title: "Advance tax instalments", line: "Payable if your tax after TDS is ₹10,000 or more. Presumptive cases pay it all by 15 March." },
      { icon: "SearchCheck", label: "Every quarter", title: "Form 168 review", line: "We check each plant's TDS after its quarterly return, so gaps are fixed early." },
      { icon: "Scale", label: "By 30 September", title: "Tax audit report", line: "Due one month before the 31 October return date for audited businesses." },
      { icon: "FileText", label: "31 July or 31 August", title: "Return due date", line: "31 July for salaried staff, 31 August for contractors without an audit." },
    ],
  },

  reasonsTitle: "Why Sriperumbudur contractors and staff file with National Filings",
  reasons: [
    { icon: "Factory", title: "We know plant paperwork", line: "Payment advices, vendor portals and TDS returns are routine for us." },
    { icon: "SearchCheck", title: "TDS matched before filing", line: "No return goes in until every credit is accounted for." },
    { icon: "MessageCircle", title: "Handled remotely", line: "WhatsApp and email from your site office, no travel needed." },
    { icon: "MapPinned", title: "Office in Kundrathur", line: "Our only office, in Karaima Nagar, if you'd like to meet." },
    { icon: "Award", title: "Experience since 2012", line: "Tax and compliance work for Chennai businesses." },
    { icon: "ReceiptText", title: "Fees in writing", line: "You know the fee before we start on the return or audit." },
  ],

  faqTitle: "Income tax in Sriperumbudur: questions from contractors and plant staff",
  faqs: [
    { q: "Is your office in Sriperumbudur?", a: "No. Our only office is in Karaima Nagar, Kundrathur, open Monday to Saturday, 9 am to 7 pm. Sriperumbudur clients usually work with us entirely over WhatsApp and email, and can visit Kundrathur if they'd like to meet." },
    { q: "How much TDS will a plant deduct from my contract bills?", a: "Under section 393 of the Income-tax Act, 2025, which took over from section 194C, contract payments suffer 1% if you are an individual or HUF and 2% if you are a firm, LLP or company. No TDS is deducted if a single bill is up to ₹30,000 and your total for the year stays within ₹1 lakh. Technical fees are deducted at 2% and professional fees at 10%, above ₹50,000 a year." },
    { q: "The TDS on my bills is missing from Form 168. What do I do?", a: "Form 168 replaced Form 26AS from April 2026. Credit appears there only after the plant files its quarterly TDS return with your correct PAN. If it is missing, the plant usually has to file a correction. We list the bills and amounts so its accounts team can fix it quickly, and we check AIS as well before filing." },
    { q: "When does a contractor need a tax audit?", a: "Under section 63, which replaced section 44AB, an audit is generally needed once business turnover goes above ₹1 crore, or above ₹10 crore if cash receipts and cash payments each stay within 5%. Most plant contractors are paid by bank, but their own cash wages can matter. An audit can also apply if you are eligible for the presumptive scheme but declare a lower profit." },
    { q: "What is the due date for the tax audit report?", a: "The audit report is due one month before the return due date. For audited businesses the return is due by 31 October, so the report, now Form 26 in place of Forms 3CA, 3CB and 3CD, is due by 30 September. The government can extend these dates, and we confirm the current position each year." },
    { q: "I work shifts at a plant. Do I need to file a return?", a: "If your income is above the basic exemption limit, yes, even if your employer has deducted TDS. Shift allowance, overtime and bonus are all taxable salary. Under the new regime, which is the default, a ₹75,000 standard deduction and a rebate make income up to ₹12 lakh tax-free. Filing also gets back any excess TDS." },
    { q: "I changed contractors during the year. Will my tax be wrong?", a: "It may be. Each employer deducts tax as if its salary were your only income, so the combined tax can be short. Send us the Form 130 from each employer. We combine them, work out any balance and file by 31 July, or claim a refund if too much was deducted." },
  ],

  related: nearbyAreas("P3-A12"),
  relatedTitle: "Income tax consultants in areas near Sriperumbudur",

  final: {
    title: "Claim every rupee of TDS the plants have deducted",
    sub: "Message us with your Form 168 or Form 130. We'll check it against your bills or payslips and tell you what your return needs.",
    message: "Hi National Filings, I work with a plant near Sriperumbudur and want someone to check my TDS and file my return. Can we talk?",
  },
  catalogue: ["Contractor ITR filing and TDS matching in Sriperumbudur", "Tax audit for contractors in Sriperumbudur", "Salary ITR filing for plant employees in Sriperumbudur"],
};
