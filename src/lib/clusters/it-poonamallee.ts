import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { INCOME_TAX_SERVICE, nearbyAreas } from "./shared";

/**
 * P3-A9 · Income Tax Consultant in Poonamallee (/chennai/income-tax-consultant-in-poonamallee).
 * Primary keyword: "income tax consultant in poonamallee". Angle: truck owners, fleet operators, transporters and wholesale
 * traders on the NH 48 corridor. Unique sections: the per-vehicle presumptive scheme for goods carriages, TDS on freight
 * and the transporter's declaration, cash payment limits, and depreciation on lorries for owners who keep books. Kept
 * distinct from the company page (P1-A9, structure and vehicle ownership) and the GST page (P2-A9, e-way bills and ITC).
 *
 * Local facts reused from P1-A9 (checked Oct 2026): Poonamallee is a municipality in Tiruvallur district and a taluk
 * headquarters; transit point on the Chennai to Bengaluru highway, now NH 48; Poonamallee RTO (TN 12); TANSIDCO's
 * Thirumazhisai industrial estate nearby.
 *
 * Facts checked (Nov 2026), Income-tax Act, 2025 (in force from 1 April 2026):
 * - Section 58(2) Table Sl. No. 2 (formerly 44AE): business of plying, hiring or leasing goods carriages, by an assessee
 *   owning not more than ten goods carriages at any time in the tax year, no turnover limit. Income deemed at ₹1,000 per
 *   ton of gross vehicle weight (or unladen weight) per month or part month for a heavy goods vehicle (GVW over 12,000 kg),
 *   and ₹7,500 per vehicle per month or part month for others, or actual profit if higher. 58(4): no other deduction or
 *   loss allowed against it. 58(5): a firm deducts partners' salary and interest within section 35(e) limits. 58(6): WDV
 *   computed as if depreciation was allowed. 58(10): sections 62 and 63 (books and audit) don't apply to this business and
 *   its receipts are left out of their limits. 58(11)(f): a vehicle on hire purchase or instalments counts as owned.
 *   Section 58 applies to residents. Source: Act text (taxsutra print of s.58); taxguru.in analysis of s.58.
 * - Section 408(1): advance tax in four instalments (15% by 15 June, 45% by 15 Sept, 75% by 15 Dec, 100% by 15 March).
 *   408(2): only Sl. No. 1 or 3 presumptive cases pay the whole by 15 March, so goods carriage owners follow the four
 *   instalments. Section 404: advance tax applies where tax for the year is ₹10,000 or more. (Act text, taxsutra.)
 * - Section 393(1) Table Sl. No. 6(i) (formerly 194C): TDS on contractor payments, 1% to individuals and HUFs, 2% to
 *   others; no TDS where a single payment is up to ₹30,000 and the year's total up to ₹1 lakh (tdsman.com). Section 393
 *   carve-out (formerly 194C(6)): no TDS on payments to a contractor in the business of plying, hiring or leasing goods
 *   carriages who owns ten or fewer at any time in the tax year and gives a declaration with PAN; the payer reports the
 *   particulars to the department (eztax.in s.393 text). Declaration needs no stamp paper under the Act (CAclubindia).
 * - Section 36(4) and 36(6) (formerly 40A(3)): expenditure paid otherwise than through specified banking or online mode is
 *   disallowed where payments to a person in a day exceed ₹10,000, read as ₹35,000 for plying, hiring or leasing goods
 *   carriages; 36(5) deems such a later payment against an earlier deducted liability as income. (Act text, taxsutra.)
 * - Section 33 (formerly 32): depreciation on the written down value of blocks of assets; lorries used in a hire business
 *   carry a higher rate than ordinary vehicles, and assets put to use for less than 180 days in the year get half the rate
 *   (taxgarden.in, FY 2026-27). Rates not stated on the page.
 * - Due dates: Finance Act 2026 moved the due date for non-audit business returns to 31 August (section 263(1)); salaried
 *   returns stay at 31 July (Angel One, JM Financial). Returns for FY 2025-26 used ITR-3 and ITR-4 under the 1961 Act.
 * No fee figures. Timelines are estimates.
 */

const whatsapp = "Hi National Filings, I run lorries from Poonamallee and need help with my income tax return.";

export const itPoonamalleePage: LicencePageData = {
  id: "P3-A9",
  service: INCOME_TAX_SERVICE,
  meta: {
    title: "Income Tax Consultant in Poonamallee | National Filings",
    description: "Income tax consultant in Poonamallee for lorry owners and traders on NH 48. Per-truck presumptive tax, TDS on freight, advance tax and ITR filing.",
  },
  hero: {
    headline: { line1: "Income Tax Consultant", line2Before: "in Poonamallee, ", accent: "Taxed Per Truck" },
    sub: "Own up to ten lorries? Your income can be worked out per vehicle, per month, with no books to keep. We file returns for Poonamallee fleet owners and traders, sort the TDS that freight payments attract and keep cash spends from being disallowed.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "Truck",
    kicker: "Poonamallee, Tiruvallur",
    title: "Income Tax Return Filed",
    line: "Your Poonamallee Return",
    stamp: "ITR-V verified",
    chips: ["Income per vehicle", "Freight TDS claimed", "Advance tax by instalment"],
    steps: ["Fleet list", "Freight TDS", "Income", "File", "Verify"],
  },

  benefitsSection: {
    title: "What an income tax consultant does for a Poonamallee fleet owner",
    lead: "A lorry owner's return looks simple until the TDS from shippers, the vehicle loans and the cash paid on the road all have to agree. We put those pieces together before the return goes in.",
    cta: {
      title: "Bought or sold a lorry this year?",
      sub: "Send us the RC copies and the purchase or sale dates. We'll tell you how many vehicle-months count and which scheme suits you.",
      message: "Hi National Filings, I own lorries in Poonamallee and changed my fleet this year. How will my income tax be worked out?",
    },
  },
  benefits: [
    { icon: "Truck", title: "Income counted per vehicle", line: "Months of ownership for each lorry worked out from RC and loan papers." },
    { icon: "Gauge", title: "Heavy vehicles rated by weight", line: "Trucks above 12 tonnes gross weight taxed per ton, not at the flat rate." },
    { icon: "ReceiptText", title: "Shipper TDS claimed back", line: "Tax cut by customers on freight matched with your AIS and credited in the return." },
    { icon: "FileSignature", title: "Transporter declarations ready", line: "A signed declaration with PAN for each customer, so freight is paid without TDS." },
    { icon: "Banknote", title: "Cash spends kept allowable", line: "Payments to other lorry owners and suppliers routed so they aren't disallowed." },
    { icon: "Calculator", title: "Scheme compared with books", line: "Presumptive income set against actual profit and depreciation before choosing." },
    { icon: "CalendarClock", title: "Advance tax on schedule", line: "Four instalments worked out, since fleet owners don't get the single March date." },
    { icon: "Users", title: "Family fleets handled", line: "Separate returns for each family member who owns vehicles in their own name." },
  ],

  applicantsSection: {
    title: "Poonamallee taxpayers we file returns for",
    lead: "Most of our income tax clients here earn from the highway in some way. How each one is taxed depends on what they own and who pays them.",
  },
  applicants: [
    { icon: "Truck", title: "Owner-drivers with one or two lorries", line: "People who drive their own vehicle and take loads from booking offices." },
    { icon: "Users", title: "Family fleet owners", line: "Fleets of up to ten goods vehicles held by a proprietor or a firm." },
    { icon: "ClipboardCheck", title: "Booking agents", line: "Offices that arrange loads, pay hired lorries and earn commission." },
    { icon: "Handshake", title: "Owners hiring to transport companies", line: "Vehicles attached to a larger transporter on monthly hire." },
    { icon: "ShoppingBag", title: "Grain and provision wholesalers", line: "Traders who pay freight and buy by the lorry load." },
    { icon: "Store", title: "Building material dealers", line: "Cement, steel and sand suppliers running their own delivery trucks." },
    { icon: "Package", title: "Godown owners", line: "Owners earning rent from storage space let to traders and carriers." },
    { icon: "UserRound", title: "Drivers and cleaners", line: "Salaried crew who need a simple return to claim back TDS or get a loan." },
  ],

  // Photo tiles: add 4 site-unique photos, then uncomment (left out so the page never shows empty tiles)
  // opportunities: {
  //   eyebrow: "Local trades",
  //   title: "The highway incomes behind Poonamallee's tax returns",
  //   intro: "With NH 48 running out to Sriperumbudur and Bengaluru, the TN 12 RTO in town and the Thirumazhisai estate close by, much of Poonamallee's income is freight, hire charges and wholesale margin. Each is taxed in its own way.",
  //   // Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
  //   // PHOTOS NEEDED: Unsplash search was unreachable from this session (bot check, no WebFetch). Fill image, alt and credit before publishing.
  //   industries: [
  //     { icon: "Truck", title: "Owner-driven lorries", image: "", alt: "", credit: "" },
  //     { icon: "Users", title: "Family fleets", image: "", alt: "", credit: "" },
  //     { icon: "ReceiptText", title: "Freight bills and TDS", image: "", alt: "", credit: "" },
  //     { icon: "ShoppingBag", title: "Wholesale trade", image: "", alt: "", credit: "" },
  //   ],
  // },

  highlights: {
    eyebrow: "Presumptive tax for lorry owners",
    title: "How Poonamallee lorry owners are taxed per vehicle",
    lead: "Section 58 of the Income-tax Act, 2025 carries over the old section 44AE scheme for goods carriages. For a small fleet it is often the simplest way to file. These are the four rules we check first.",
    items: [
      { icon: "Truck", label: "Who qualifies", title: "Ten goods vehicles or fewer", line: "You must not own more than ten goods carriages at any time in the tax year. A lorry still on hire purchase or loan counts as yours. There is no turnover limit." },
      { icon: "Calculator", label: "How income is counted", title: "Per vehicle, per month", line: "₹7,500 a month for each goods vehicle, and for a heavy goods vehicle over 12,000 kg gross weight, ₹1,000 per ton of weight a month. Part of a month counts as a full month. If your actual profit is higher, you declare that.", highlight: true },
      { icon: "Scale", label: "What you give up", title: "No separate expenses", line: "Diesel, tyres, salaries, interest and depreciation are treated as already covered. You can't claim them on top. A firm may still deduct partners' salary and interest within the limits." },
      { icon: "CalendarClock", label: "Advance tax", title: "Four instalments, not one", line: "The single 15 March payment applies to small traders and professionals, not to goods carriage income. Fleet owners pay by 15 June, September, December and March if tax for the year reaches ₹10,000." },
    ],
  },

  documentsSection: {
    title: "What we need to file a return for a Poonamallee transporter",
    lead: "Photos on WhatsApp are fine. For lorry owners, the vehicle papers matter as much as the bank statement.",
  },
  documents: [
    { icon: "Truck", title: "For each vehicle", items: ["RC copy showing gross vehicle weight", "Date bought or sold during the year", "Loan or hire purchase statement", "Whether you drive it or hire it out"], hint: "The gross vehicle weight on the RC decides whether the truck is taxed per ton or at the flat monthly rate." },
    { icon: "ReceiptText", title: "For freight and receipts", items: ["Freight bills or lorry receipts", "List of shippers and booking offices who pay you", "TDS certificates, if any tax was cut", "Bank statements for the year"], hint: "We compare these with your AIS, since shippers report what they paid you even when no TDS was cut." },
    { icon: "Banknote", title: "If you keep books", items: ["Diesel, toll and repair bills", "Payments to hired lorries and drivers", "Purchase invoice of each vehicle", "Interest certificate on vehicle loans"], hint: "Needed if your actual profit is lower than the per-vehicle figure, or you own more than ten vehicles." },
  ],
  documentsNote: {
    title: "Not sure of your gross vehicle weight?",
    sub: "Send us a photo of the RC for each truck. We'll read the weight and work out the presumptive income for the year.",
    message: "Hi National Filings, can you work out my presumptive income from my lorry RCs? I'm in Poonamallee.",
  },

  processSection: {
    title: "How we file income tax for a Poonamallee fleet owner",
    lead: "We start from the fleet, not the bank statement. Everything is shared over WhatsApp and email, and returns are e-verified on your phone.",
    cta: {
      title: "Send us your fleet list",
      sub: "Vehicles, purchase and sale dates and who pays you freight. We'll reply with the right scheme and a written quote.",
      message: "Hi National Filings, here is my fleet list from Poonamallee. Can you file my income tax return?",
    },
  },
  steps: [
    { title: "Fleet review", time: "Day 1", sub: "Vehicles owned in the year, months of ownership and weight class. We agree the scope and give a written quote." },
    { title: "Receipts and TDS match", time: "1-2 days", sub: "Freight received checked against AIS and Form 26AS, so every rupee of TDS is credited." },
    { title: "Scheme or books", time: "1-2 days", sub: "Per-vehicle income compared with actual profit after expenses and depreciation." },
    { title: "Return prepared", time: "1 day", sub: "The right form for your income, with other income such as rent or interest added." },
    { title: "Filed and verified", time: "Same day", sub: "Return filed, e-verified with Aadhaar OTP and the acknowledgement sent to you." },
  ],
  processNote: "Timelines are estimates. Missing RC copies, a mismatch in AIS or a pending notice can add time.",

  mistakesSection: {
    title: "Income tax mistakes we fix for Poonamallee transporters",
    lead: "Most of these come from treating a lorry business like an ordinary shop. Each one is easy to put right before filing.",
  },
  mistakes: [
    { icon: "Truck", title: "Months of ownership miscounted", problem: "A lorry bought in October was counted for the whole year, and one sold in June was left in for twelve months.", fix: "We count each vehicle only for the months it was owned, with part months as full months." },
    { icon: "Gauge", title: "Heavy truck at the flat rate", problem: "A tipper over 12 tonnes gross weight was shown at the flat monthly figure instead of per ton.", fix: "We read the weight off each RC and apply the right basis to every vehicle." },
    { icon: "FileWarning", title: "TDS cut without need", problem: "A shipper deducted tax on every freight bill because the owner never gave a declaration.", fix: "We prepare the declaration with PAN for each regular customer and claim back what was already cut." },
    { icon: "Banknote", title: "Cash paid to a hired lorry", problem: "A booking agent paid ₹50,000 in cash to another owner in one day and claimed it as an expense.", fix: "Cash above ₹35,000 a day to one person for hiring goods carriages is disallowed. We move such payments to bank transfer or UPI." },
  ],

  costSection: {
    title: "What income tax filing costs for a Poonamallee transporter",
    lead: "There is no government fee to file a return. Our fee depends on the size of the fleet and whether you keep books, and we write it down before starting.",
    cta: {
      title: "Get a quote for your fleet",
      sub: "Tell us how many vehicles you own and whether you keep accounts. We'll send a written quote.",
      message: "Hi National Filings, can I get a quote for income tax filing for my lorries in Poonamallee?",
    },
  },
  costs: [
    { icon: "Truck", label: "Quoted upfront", title: "Presumptive return", line: "Depends on the number of vehicles and changes to the fleet during the year." },
    { icon: "Calculator", label: "Quoted upfront", title: "Return with books", line: "For owners declaring actual profit, with depreciation and expense schedules.", highlight: true },
    { icon: "CalendarClock", label: "Quoted upfront", title: "Advance tax and TDS work", line: "Instalment working, challans and transporter declarations for your customers." },
    { icon: "Mail", label: "Quoted per case", title: "Notices and mismatches", line: "Replies where AIS freight figures don't match the return, depending on the work." },
  ],

  compliance: {
    eyebrow: "Through the year",
    title: "The income tax calendar for a Poonamallee transport business",
    lead: "Filing the return is one date. A lorry business has a few more through the year, and we keep them on our calendar.",
    items: [
      { icon: "CalendarClock", label: "15 June, Sept, Dec, March", title: "Advance tax instalments", line: "Paid in four parts when tax for the year reaches ₹10,000." },
      { icon: "FileSignature", label: "Start of each year", title: "Transporter declarations", line: "Fresh declarations with PAN to regular shippers and booking offices." },
      { icon: "SearchCheck", label: "Before filing", title: "AIS and freight match", line: "Receipts reported by customers checked against your own records." },
      { icon: "FileText", label: "31 August for most", title: "Return without audit", line: "Business returns that don't need an audit are now due by 31 August." },
    ],
  },

  reasonsTitle: "Why Poonamallee transporters choose National Filings for income tax",
  reasons: [
    { icon: "Truck", title: "We know fleets", line: "Vehicle-months, weight classes and freight TDS are routine work for us." },
    { icon: "MessageCircle", title: "Papers on WhatsApp", line: "Send RCs and freight bills from the yard or the highway." },
    { icon: "MapPinned", title: "An office you can visit", line: "Karaima Nagar, Kundrathur, Monday to Saturday, 9 am to 7 pm." },
    { icon: "ReceiptText", title: "Fees in writing", line: "A written quote before we start, based on your fleet." },
    { icon: "Award", title: "Experience since 2012", line: "Tax and compliance work for transporters and traders across Chennai." },
    { icon: "UserCheck", title: "Same person each year", line: "One tax expert who knows your vehicles and customers." },
  ],

  faqTitle: "Income tax in Poonamallee: questions from lorry owners and traders",
  faqs: [
    { q: "I own four lorries. How is my income tax worked out?", a: "If you own ten goods vehicles or fewer at every point in the year, you can use the presumptive scheme in section 58 of the Income-tax Act, 2025, which replaced section 44AE. Your income is taken as ₹7,500 a month for each vehicle, or ₹1,000 per ton of gross weight a month for a heavy goods vehicle. Four ordinary lorries owned all year come to ₹3.6 lakh. If your actual profit is higher, you must declare the higher figure." },
    { q: "My truck is over 12 tonnes. Is it still ₹7,500 a month?", a: "No. A goods carriage with gross vehicle weight above 12,000 kg is a heavy goods vehicle, and its income is ₹1,000 per ton of gross vehicle weight for each month you own it. A 25-tonne truck owned for the full year is taken at ₹3 lakh. The weight is the one shown on the RC." },
    { q: "My lorry is still on a loan. Does it count towards the ten?", a: "Yes. A vehicle taken on hire purchase or instalments, where money is still owed, is treated as owned by you. It counts towards the ten-vehicle limit and towards your monthly income figure." },
    { q: "A shipper cuts tax from my freight bills. How do I stop it?", a: "Freight paid to a transporter is a contract payment, so TDS applies once the limits are crossed. But no tax is to be deducted where the transporter owns ten or fewer goods vehicles and gives the payer a declaration to that effect with PAN. Give each regular customer a signed declaration at the start of the year. Any TDS already cut is credited in your return." },
    { q: "Can I pay other lorry owners in cash?", a: "Keep it to ₹35,000 or less to one person in a day. Above that, payments for hiring goods carriages that are not made by account payee cheque, bank transfer or another banking or online mode are disallowed as an expense. For other business expenses the limit is ₹10,000 a day. This matters most if you keep books and claim actual expenses." },
    { q: "When is it better to keep books instead of the per-vehicle scheme?", a: "When your real profit is lower than the per-vehicle figure, for example in a year with long idle periods, heavy repairs or new vehicles bought on loan. You then claim actual expenses, interest and depreciation on the lorries, but you need proper books. If you declare less than the presumptive figure and your total income is above the basic exemption limit, a tax audit is also needed. Once you own more than ten goods vehicles, books are the only route." },
    { q: "Do you have an office in Poonamallee?", a: "No. Our only office is in Karaima Nagar, Kundrathur. Poonamallee clients send RCs, freight bills and statements over WhatsApp and email, and are welcome to visit the office if they'd like to meet." },
  ],

  related: nearbyAreas("P3-A9"),
  relatedTitle: "Income tax consultants in areas near Poonamallee",

  final: {
    title: "File your Poonamallee lorry income the right way",
    sub: "Tell us how many vehicles you own and who pays you freight. We'll pick the scheme, sort the TDS and file your return.",
    message: "Hi National Filings, I'm a lorry owner in Poonamallee and need an income tax consultant for my return.",
  },
  catalogue: ["Income tax return filing for Poonamallee lorry owners", "Presumptive tax and advance tax for Poonamallee transporters", "Income tax filing for Poonamallee wholesale traders"],
};
