import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { INCOME_TAX_SERVICE, nearbyAreas } from "./shared";

/**
 * P3-A11 · Income Tax Consultant in Iyyappanthangal (/chennai/income-tax-consultant-in-iyyappanthangal).
 * Primary keyword: "income tax consultant in iyyappanthangal". We have no office here; clients work with us over WhatsApp
 * and email, or visit our Kundrathur office.
 * Angle: owners of restaurants, bakeries, mobile shops and salons along Mount Poonamallee Road. Their income tax issues:
 * cash-heavy takings (the cash receipt limit, digital receipts and the 6% / 8% presumptive split), books and tax audit,
 * TDS deducted by food delivery apps and claiming it, and advance tax for shop owners. Company and GST wording for this
 * area lives on P1-A11 and P2-A11; general ITR wording on the P3 pillar.
 *
 * Local facts (reused from the verified P1-A11 JSDoc): Ayyapanthangal village panchayat, Kundrathur taluk, Kancheepuram
 * district; PIN 600056; on Mount Poonamallee Road, with a bus terminus; Iyyappanthangal metro station on the Poonamallee to
 * Vadapalani stretch of Phase 2, opened 11 October 2026.
 *
 * Facts checked (Nov 2026). The Income-tax Act, 2025 applies from 1 April 2026 (tax year 2026-27 onwards); returns for
 * FY 2025-26 filed during 2026 still fall under the 1961 Act.
 * - Section 186 (formerly 269ST): no person may receive ₹2 lakh or more otherwise than by the permitted banking modes, in
 *   aggregate from one person in a day, in one transaction, or for transactions relating to one event or occasion; penalty
 *   can equal the amount received. (eztax.in/income-tax-act-2025/section-186; ebizfiling.com/blog/section-186-of-the-income-tax-act/)
 * - Section 58, Table Sl. No. 1 (formerly 44AD): eligible business with turnover up to ₹2 crore, or ₹3 crore where cash
 *   receipts do not exceed 5% of turnover; deemed profit 6% of receipts by specified banking or online mode (received in the
 *   year or before the return due date) plus 8% of other receipts. (eztax.in/income-tax-act-2025/section-58;
 *   taxguru.in/income-tax/analysis-presumptive-taxation-section-58-income-tax-act-2025.html)
 * - Section 62 (formerly 44AA): an individual or HUF must keep books where business income exceeds ₹2.5 lakh or turnover
 *   exceeds ₹25 lakh in any of the three preceding years, or where a section 58 assessee claims profit lower than the deemed
 *   profit. (eztax.in/income-tax-act-2025/section-62)
 * - Section 63 (formerly 44AB): audit where business turnover exceeds ₹1 crore, or ₹10 crore where cash receipts and cash
 *   payments are each within 5%; also where a section 58 assessee claims profit lower than the deemed profit (commentators
 *   differ on whether the basic exemption condition still applies, so the page says "can"). Report by the "specified date",
 *   one month before the section 263(1) return due date; the report form is Form 26 (formerly 3CA/3CB/3CD).
 *   (eztax.in/income-tax-act-2025/section-63; taxscan.in section63 vs 44AB; businesstoday.in Income Tax Rules 2026 forms, 11 Mar 2026)
 * - Section 263(1) due dates: 31 October for audited persons; 31 August for non-audit business assessees from tax year
 *   2026-27 (Finance Act, 2026); 31 July for other assessees such as salary-only individuals. (eztax.in section-263;
 *   cleartax.in/s/section-263-income-tax-act-2025; angelone.in news on 31 August)
 * - E-commerce TDS: section 393(1), Table Sl. No. 8(v) (formerly 194-O), 0.1% deducted by the e-commerce operator on the gross
 *   amount of sales or services facilitated. (taxguru.in/income-tax/tds-rates-income-tax-act-2025-1-april-2026.html)
 *   No income tax TCS applies to these payouts; GST TCS does not apply to restaurant orders taxed under GST section 9(5)
 *   (see P2-A11 JSDoc).
 * - Form 26AS is now Form 168 under the Income-tax Rules, 2026; AIS continues. (businesstoday.in, 11 Mar 2026;
 *   freepressjournal.in Form 16 to Form 130, 26AS to Form 168)
 * - Advance tax: section 404, payable where tax for the year is ₹10,000 or more; section 408 instalments 15% by 15 June,
 *   45% by 15 September, 75% by 15 December, 100% by 15 March; a section 58 (Sl. No. 1) assessee pays the whole amount by
 *   15 March; interest under section 424 (formerly 234B, 1% a month) and section 425 (formerly 234C).
 *   (eztax.in sections 404, 408, 424, 425)
 * - Cash expenses: paying more than ₹10,000 in cash to one person in a day for an expense generally loses the deduction
 *   (old 40A(3) rule, carried into the 2025 Act; section number not stated on the page). (incometaxindia.gov.in section 40A;
 *   ita1961to2025.pages.dev cash payments over 10,000)
 * No fees, refund timelines or client counts are stated. Timelines are estimates.
 */

const whatsapp = "Hi National Filings, I run a shop in Iyyappanthangal and need help with my income tax return.";

export const itIyyappanthangalPage: LicencePageData = {
  id: "P3-A11",
  service: INCOME_TAX_SERVICE,
  meta: {
    title: "Income Tax Consultant in Iyyappanthangal | National Filings",
    description: "Income tax consultant in Iyyappanthangal for hotels, bakeries, mobile shops and salons: cash and UPI takings, food app TDS, advance tax and returns.",
  },
  hero: {
    headline: { line1: "Income Tax Consultant", line2Before: "in Iyyappanthangal, ", accent: "Every Rupee Counted" },
    sub: "Cash in the drawer, UPI on the counter and payouts from food apps. Shops on Mount Poonamallee Road earn in all three ways, and much of it already shows up in your AIS. We turn it into one clean return.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "Store",
    kicker: "Iyyappanthangal, Chennai 600056",
    title: "ITR Acknowledgement",
    line: "Your Iyyappanthangal Return",
    stamp: "ITR-V verified",
    chips: ["UPI and cash split", "App TDS claimed", "Advance tax by 15 March"],
    steps: ["Takings", "App TDS", "Profit", "Return", "E-verify"],
  },

  benefitsSection: {
    title: "Income tax help for Iyyappanthangal shop owners",
    lead: "A counter business rarely has a Form 16. Its income is built up from daily takings, bank credits and app statements, so the return needs more care than a salary return.",
    cta: {
      title: "Paid mostly in cash and UPI?",
      sub: "Send us last year's bank statement and a rough idea of daily cash sales. We'll tell you how the tax is likely to work out.",
      message: "Hi National Filings, my shop in Iyyappanthangal takes cash and UPI. Can you tell me how my income tax will be worked out?",
    },
  },
  benefits: [
    { icon: "Coins", title: "Cash and digital takings split", line: "The split decides your presumptive profit, so we work it out from your records." },
    { icon: "Soup", title: "Food app TDS claimed", line: "The 0.1% each app deducts is matched and credited against your tax." },
    { icon: "SearchCheck", title: "AIS checked before filing", line: "App sales, TDS and bank figures the department already holds, tallied with yours." },
    { icon: "CalendarClock", title: "Advance tax planned", line: "One payment by 15 March if you use the presumptive scheme." },
    { icon: "Calculator", title: "Books kept when needed", line: "We tell you when the law expects proper books and set up a simple routine." },
    { icon: "Scale", title: "Audit flagged early", line: "Turnover and cash ratio watched, so an audit never comes as a surprise." },
    { icon: "MessageCircle", title: "Run from the counter", line: "Send statements on WhatsApp between customers. No need to shut the shop." },
    { icon: "FileWarning", title: "Notices answered", line: "Mismatch letters about bank credits or app sales replied to with records." },
  ],

  applicantsSection: {
    title: "Iyyappanthangal businesses whose returns we file",
    lead: "Most of our clients here run one or two outlets with family help. These are the trades that send us their figures each year.",
  },
  applicants: [
    { icon: "UtensilsCrossed", title: "Hotel and mess owners", line: "Daily cash, UPI and parcel orders, plus app payouts every week." },
    { icon: "ChefHat", title: "Cloud kitchen operators", line: "Almost all income through apps, with TDS on every settlement." },
    { icon: "Coffee", title: "Bakery and sweet shop owners", line: "Small cash bills all day, bulk festival orders paid by transfer." },
    { icon: "Laptop", title: "Mobile shop owners", line: "Handset sales on EMI and cards, accessories and repairs in cash." },
    { icon: "UserRound", title: "Salon and parlour owners", line: "Walk-in services paid by UPI, with chairs rented to stylists." },
    { icon: "Users", title: "Family members on the payroll", line: "Spouses and children paid from the shop, who may need their own returns." },
    { icon: "Store", title: "Owners with a second outlet", line: "Two counters, one PAN, and income that needs combining properly." },
    { icon: "Home", title: "Shop owners with rental income", line: "Rent from a portion of the building or a house nearby, added to business income." },
  ],

  // Photo tiles (opportunities) not added yet: Unsplash was unreachable when this page was written. Planned section:
  // eyebrow "Counter trades", title "How money comes into an Iyyappanthangal shop", 4 free Unsplash photos (eatery kitchen,
  // bakery counter, phone shop or UPI payment, salon) with the usual licence comment line from kundrathur.ts.

  highlights: {
    eyebrow: "Cash, UPI and the presumptive scheme",
    title: "How a counter business on Mount Poonamallee Road is taxed",
    lead: "Most shops here qualify for the presumptive scheme. How you are paid changes both the profit you declare and the limits that apply.",
    items: [
      { icon: "Banknote", label: "Section 186", title: "Below ₹2 lakh in cash from one customer", line: "Catering orders, wedding cakes or a phone bought outright: ₹2 lakh or more from one person in a day, or for one order or occasion, must come through the bank. The penalty can equal the cash taken." },
      { icon: "Percent", label: "Section 58 (formerly 44AD)", title: "6% on UPI and card, 8% on cash", line: "Under the presumptive scheme, profit is taken as 6% of receipts through banking or online modes and 8% of the rest. Moving customers to UPI lowers the profit you must declare.", highlight: true },
      { icon: "TrendingUp", label: "Turnover limit", title: "₹2 crore, or ₹3 crore if cash stays low", line: "The scheme covers turnover up to ₹2 crore, rising to ₹3 crore when cash receipts are no more than 5% of turnover." },
      { icon: "Soup", label: "Food app payouts", title: "0.1% TDS, not TCS", line: "Apps deduct 0.1% income tax on the gross value of your orders. It shows in your Form 168 (formerly 26AS) and is credited against your tax when you file." },
    ],
  },

  documentsSection: {
    title: "What to send for an Iyyappanthangal shop's income tax return",
    lead: "Photos and PDFs on WhatsApp are fine. The more of your takings we can trace, the less we have to estimate.",
  },
  documents: [
    { icon: "IdCard", title: "About you", items: ["PAN and Aadhaar", "E-filing portal login, or the mobile linked to it", "Bank account for any refund", "Last year's return, if filed"], hint: "If you've never logged in to the portal, we'll help you register with your PAN and Aadhaar OTP." },
    { icon: "Wallet", title: "Shop takings", items: ["Bank statements for every account used by the shop", "UPI and card machine settlement reports", "Daily cash sales book or a monthly total", "GST returns, if registered"], hint: "Cash receipts decide whether you stay within the 5% cash limits, so a rough monthly cash total helps." },
    { icon: "Soup", title: "Food apps and expenses", items: ["Annual or monthly payout statements from each app", "TDS certificates the apps issue", "Rent agreement and electricity bills", "Staff salary and supplier payment records"], hint: "App statements show gross orders, commission and TDS separately. We need all three." },
  ],
  documentsNote: {
    title: "Kept no books at all?",
    sub: "That's common for a single counter. Send your bank statements and app reports, and we'll work out what your return can be based on.",
    message: "Hi National Filings, I run a shop in Iyyappanthangal and haven't kept proper books. Can you still file my return?",
  },

  processSection: {
    title: "How we file a return for an Iyyappanthangal shop",
    lead: "We work with Iyyappanthangal clients over WhatsApp and email, and you can visit our Kundrathur office if you'd rather sit down with your papers. Most business returns are ready within a week of complete documents.",
    cta: {
      title: "Send your figures after closing time",
      sub: "Bank statements and app reports are enough to start. We'll reply with what else is needed.",
      message: "Hi National Filings, I have a shop in Iyyappanthangal. Can I send my bank statements and app reports for my income tax return?",
    },
  },
  steps: [
    { title: "Read your AIS", time: "Day 1", sub: "We download what the department already knows: bank interest, app sales and TDS, and any large cash deposits." },
    { title: "Split the takings", time: "1-2 days", sub: "Cash, digital and app receipts separated from your statements and sales records." },
    { title: "Choose the method", time: "Same day", sub: "Presumptive profit or actual profit from books, whichever is correct and suits your figures." },
    { title: "Credit the TDS", time: "Same day", sub: "Every app's TDS checked against Form 168 so none of it is left unclaimed." },
    { title: "File and e-verify", time: "On approval", sub: "You approve the tax figure, we file and you e-verify with an Aadhaar OTP." },
  ],
  processNote: "Timelines are estimates. Missing app statements, unlinked bank accounts or portal downtime can add time.",

  mistakesSection: {
    title: "Income tax mistakes we fix for Iyyappanthangal shops",
    lead: "These come up again and again with counter businesses, usually because the return was filed from memory rather than from records.",
  },
  mistakes: [
    { icon: "Soup", title: "Only the net payout declared", problem: "A hotel reports what the app paid into the bank, but the app reported the full order value with TDS on it.", fix: "We declare gross app sales, claim the commission and charges as costs, and take credit for the TDS." },
    { icon: "Coins", title: "All takings treated as cash", problem: "Profit is worked out at 8% on the whole turnover, though most customers paid by UPI.", fix: "We split receipts so the 6% rate applies to everything received through the bank or online." },
    { icon: "Banknote", title: "Large cash orders accepted", problem: "A caterer takes ₹2.5 lakh in cash for one wedding order, split over a few days.", fix: "We explain the section 186 limit in advance and help you set up bank collection for big orders." },
    { icon: "CalendarClock", title: "Advance tax skipped", problem: "A profitable shop pays all its tax at filing time and is charged interest for every month of delay.", fix: "We estimate the year's profit in early March so the presumptive payment goes in by 15 March." },
  ],

  costSection: {
    title: "What our income tax fee depends on for an Iyyappanthangal shop",
    lead: "Filing a return has no government fee. Tax, interest or late fees go straight to the department. Our fee depends on how much of your income we have to piece together.",
    cta: {
      title: "Get a written quote first",
      sub: "Tell us your trade, roughly how you are paid and which apps you sell on. We'll quote before we start.",
      message: "Hi National Filings, can I get a quote for filing the income tax return for my shop in Iyyappanthangal?",
    },
  },
  costs: [
    { icon: "Store", label: "Quoted upfront", title: "Presumptive business return", line: "For a shop with bank statements and simple takings, filed under section 58." },
    { icon: "Calculator", label: "Quoted upfront", title: "Return from full books", line: "When profit is below the presumptive rate or turnover is above the limits.", highlight: true },
    { icon: "Soup", label: "Quoted upfront", title: "Food app reconciliation", line: "Depends on the number of apps and outlets, and how many TDS entries need matching." },
    { icon: "FileWarning", label: "Quoted per case", title: "Notices and past years", line: "Depends on the year involved and how much income needs explaining." },
  ],

  compliance: {
    eyebrow: "Through the tax year",
    title: "Income tax dates an Iyyappanthangal shop owner should know",
    lead: "From tax year 2026-27 these dates come from the Income-tax Act, 2025. We remind you before each one.",
    items: [
      { icon: "CalendarClock", label: "By 15 March", title: "Advance tax, in one go", line: "Shops on the presumptive scheme pay the whole year's advance tax by 15 March. Others pay in four instalments from 15 June." },
      { icon: "FileText", label: "By 31 August", title: "Return without audit", line: "Business owners who don't need an audit have until 31 August, from tax year 2026-27." },
      { icon: "Scale", label: "By 30 September", title: "Tax audit report", line: "If an audit applies, the report is due one month before the return, which works out to 30 September." },
      { icon: "SearchCheck", label: "Every quarter", title: "App TDS check", line: "We look at Form 168 during the year so a missing app credit is chased early." },
    ],
  },

  reasonsTitle: "Why Iyyappanthangal shop owners file with National Filings",
  reasons: [
    { icon: "Coins", title: "We understand cash trades", line: "Counter takings, UPI and app payouts are routine work for us." },
    { icon: "MessageCircle", title: "WhatsApp first", line: "Documents, questions and approvals without leaving the shop." },
    { icon: "MapPinned", title: "Office in Kundrathur", line: "Our only office, in Karaima Nagar, if you'd like to meet." },
    { icon: "ReceiptText", title: "Fees in writing", line: "Your quote is agreed before we prepare anything." },
    { icon: "Award", title: "Experience since 2012", line: "Tax and compliance work for Chennai businesses." },
    { icon: "UserCheck", title: "Same person each year", line: "Someone who already knows your shop and your figures." },
  ],

  faqTitle: "Income tax in Iyyappanthangal: what shop owners ask",
  faqs: [
    { q: "Do you have an office in Iyyappanthangal?", a: "No. Our only office is in Karaima Nagar, Kundrathur, open Monday to Saturday, 9 am to 7 pm. Iyyappanthangal clients usually send everything over WhatsApp and email, and are welcome to visit Kundrathur if they want to go through the return in person." },
    { q: "My hotel takes most of its money in cash. How is my income taxed?", a: "If your turnover is within the limits, you can use the presumptive scheme in section 58 of the Income-tax Act, 2025, which replaced section 44AD. Profit is taken as 8% of cash receipts and 6% of receipts through UPI, card or bank, and you pay tax on that without detailed books. If your real profit is lower, you can declare it, but you then need books and possibly a tax audit." },
    { q: "Swiggy and Zomato deduct something from my payouts. Is that TDS or TCS?", a: "For income tax it is TDS. Food apps deduct 0.1% on the gross value of orders under section 393 of the new Act, which replaced section 194-O. The deduction appears in your Form 168, formerly Form 26AS, and in your AIS. You claim it as tax already paid when you file, and if it is more than your tax, the balance comes back as a refund." },
    { q: "Can I accept ₹2 lakh in cash for a bulk order?", a: "No. Section 186 bars receiving ₹2 lakh or more in cash from one person in a day, for a single transaction, or for one event such as a wedding order, even if paid in parts. The penalty can equal the amount received. Ask for bank transfer or UPI for large orders." },
    { q: "When do I need a tax audit for my shop?", a: "Generally when turnover goes above ₹1 crore, or above ₹10 crore if both your cash receipts and cash payments stay within 5%. An audit can also apply if you are eligible for the presumptive scheme but declare a lower profit. The audit report is due one month before the return due date, usually 30 September." },
    { q: "Do I have to pay advance tax as a shop owner?", a: "Yes, if your tax for the year after TDS comes to ₹10,000 or more. On the presumptive scheme you can pay the full amount by 15 March. Otherwise it is paid in four instalments by 15 June, 15 September, 15 December and 15 March. Late or short payment brings interest." },
    { q: "Will moving customers to UPI reduce my tax?", a: "Under the presumptive scheme it can. Receipts through UPI, card or bank are taken at 6% profit instead of 8%, and keeping cash at 5% or less of turnover raises your turnover limit to ₹3 crore. It also gives you a clear record if the department asks about your income." },
  ],

  related: nearbyAreas("P3-A11"),
  relatedTitle: "Income tax consultants in areas near Iyyappanthangal",

  final: {
    title: "Get your Iyyappanthangal shop's return filed right",
    sub: "Message us with your trade and how your customers pay. We'll check your AIS and tell you what your return needs.",
    message: "Hi National Filings, I run a shop in Iyyappanthangal and want someone to file my income tax return. Can we talk?",
  },
  catalogue: ["Business ITR filing for shops in Iyyappanthangal", "Food app TDS reconciliation in Iyyappanthangal", "Advance tax and tax audit support in Iyyappanthangal"],
};
