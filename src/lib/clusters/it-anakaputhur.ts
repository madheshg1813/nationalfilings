import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { INCOME_TAX_SERVICE, nearbyAreas } from "./shared";

/**
 * P3-A4 · Income Tax Consultant in Anakaputhur (/chennai/income-tax-consultant-in-anakaputhur).
 * Primary keyword: "income tax consultant in anakaputhur". We have no office in Anakaputhur; clients work with us over
 * WhatsApp and email, or visit our Kundrathur office.
 * Angle: handloom weavers, artisans and small online sellers with modest incomes. Why filing helps even below the taxable
 * limit, TDS that marketplaces deduct on seller payouts and how to claim it back, grants and subsidies received by
 * weavers' groups, and simple returns for low-income households.
 *
 * Local facts (reused from the verified P1-A4 Anakaputhur page): part of Tambaram City Municipal Corporation since 2021,
 * Chengalpattu district, PIN 600070, next to Pammal; once a large weaving centre (Madras handkerchiefs for Nigeria), looms
 * down from about 5,000 to a few hundred or fewer; weavers, many of them women, make sarees and garments from banana,
 * aloe vera, bamboo and other plant fibres; orders come through social media and online platforms.
 *
 * Facts checked (Nov 2026):
 * - The Income-tax Act, 2025 applies from 1 April 2026; tax year 2026-27 is the first "tax year", filed in 2027. Form 26AS
 *   becomes Form 168, Form 16A becomes Form 131, Form 15G and 15H are merged into Form 121 (basunivesh.com;
 *   businesstoday.in, Apr 2026). ITR-1 (Sahaj) and ITR-4 (Sugam) keep their names (scconline.com, Apr 2026).
 * - Marketplace TDS: s. 393(1), Table S. No. 8(v) (formerly 194-O). The e-commerce operator deducts 0.1% of the gross
 *   amount of sales or services at credit or payment, whichever is earlier (rate cut from 1% from 1 Oct 2024). No TDS for
 *   a resident individual or HUF whose gross sales through that operator are up to ₹5 lakh in the year and who has given
 *   PAN or Aadhaar. Without PAN or Aadhaar, 5% (blog.tdsman.com, Nov 2026; taxgarden.in). GST TCS of 0.5% under CGST
 *   s. 52 is separate and is claimed on the GST portal (as on the P2-A4 page).
 * - Rebate, s. 156 (formerly 87A): new regime up to ₹60,000 for resident individuals with income up to ₹12 lakh; nil
 *   slab to ₹4 lakh (cleartax.in/s/section-156-income-tax-act-2025; cleartax.in/s/section-202-new-tax-regime).
 * - Presumptive taxation, s. 58 (formerly 44AD): profit at 6% of digital receipts, 8% of other receipts, turnover up to
 *   ₹2 crore, or ₹3 crore with cash receipts up to 5% (taxguru.in analysis of s. 58; taxscan.in). Filed in ITR-4.
 * - Subsidies and grants: included in "income" under s. 2(49), except a subsidy, grant or reimbursement taken into
 *   account to reduce the actual cost of an asset under s. 39 (and a Central Government grant for the corpus of a trust
 *   or institution set up by government) (indiankanoon.org text of s. 2(49); incometaxindia.gov.in s. 39).
 * - Return filing: s. 263 (formerly 139). Some people must file even below the exemption limit if conditions in the rules
 *   are met (such as high deposits, spending or TDS); numbers not stated (cleartax.in/s/section-263-income-tax-act-2025).
 *   Due dates under s. 263(1) as amended by Finance Act 2026: 31 July without business income, 31 August for business
 *   income without audit. Late fee s. 428 (formerly 234F): ₹1,000 if total income up to ₹5 lakh, else ₹5,000
 *   (cleartax.in/s/section-428). Belated return for FY 2025-26 up to 31 December 2026.
 * Timelines are estimates.
 */

const whatsapp = "Hi National Filings, I'm a weaver in Anakaputhur with a small income. Should I file an income tax return?";

export const itAnakaputhurPage: LicencePageData = {
  id: "P3-A4",
  service: INCOME_TAX_SERVICE,
  meta: {
    title: "Income Tax Consultant in Anakaputhur | National Filings",
    description: "Income tax consultant in Anakaputhur for weavers, artisans and small online sellers. Low-income returns, marketplace TDS refunds and grants, sorted.",
  },
  hero: {
    headline: { line1: "Income Tax Consultant", line2Before: "in Anakaputhur, ", accent: "Below the Limit" },
    sub: "Most Anakaputhur weavers and craft sellers earn too little to owe income tax. A simple return still gets back TDS that marketplaces and banks cut, and gives you proof of income for loans and schemes.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "ReceiptIndianRupee",
    kicker: "Anakaputhur, Chennai 600070",
    title: "Income Tax Return Filed",
    line: "Your Anakaputhur Return",
    stamp: "ITR-V verified",
    chips: ["Marketplace TDS claimed", "Simple ITR-1 or ITR-4", "Proof of income"],
    steps: ["Income", "TDS", "Form", "File", "Refund"],
  },

  benefitsSection: {
    title: "Why Anakaputhur weavers and makers should file, even with small incomes",
    lead: "A return is not only for people who owe tax. For a weaver or a small seller, it is the record that shows what you earned and the claim for tax already taken from you.",
    cta: {
      title: "Not sure a return is worth it?",
      sub: "Tell us roughly what you earned last year and where the money came from. We'll say whether you must file, and what you'd gain by filing anyway.",
      message: "Hi National Filings, I weave sarees in Anakaputhur and earn a small income. Is it worth filing a return?",
    },
  },
  benefits: [
    { icon: "Coins", title: "Marketplace TDS back", line: "Tax a platform held back from your payouts can come back as a refund through the return." },
    { icon: "Banknote", title: "Bank TDS on deposits", line: "Interest TDS cut on a small FD is refunded when your income is below the limit." },
    { icon: "Landmark", title: "Loans get easier", line: "Banks and lenders usually ask for two or three years of returns as proof of income." },
    { icon: "Plane", title: "Visa and travel papers", line: "Embassies often want recent returns, especially for buyers' fairs and family visits." },
    { icon: "FileCheck2", title: "Proof for schemes and buyers", line: "A filed return backs up your income when you apply for support or a large order." },
    { icon: "ShieldCheck", title: "No notice surprises", line: "Platforms and banks report your receipts. A return that matches them avoids questions." },
    { icon: "TrendingUp", title: "A record as you grow", line: "Steady returns show a business growing, which helps when you need more credit." },
    { icon: "MessageCircle", title: "Done from the loom", line: "Payout statements and bank details on WhatsApp. No office visit needed." },
  ],

  applicantsSection: {
    title: "Anakaputhur taxpayers we file returns for",
    lead: "Anakaputhur's looms are fewer than they were, but weaving, crafts and online selling still support many households here, mostly on modest incomes.",
  },
  applicants: [
    { icon: "Layers", title: "Handloom weavers", line: "Weaving at home on their own account or for a master weaver." },
    { icon: "Leaf", title: "Natural fibre artisans", line: "Making cloth, bags and crafts from banana, aloe vera and bamboo fibre." },
    { icon: "ShoppingCart", title: "Marketplace sellers", line: "Sellers whose platform payouts arrive with TDS already taken off." },
    { icon: "ShoppingBag", title: "Instagram and WhatsApp sellers", line: "Taking orders online and getting paid by UPI." },
    { icon: "Users", title: "Members of weavers' groups", line: "Women's collectives and groups that share orders and support." },
    { icon: "PenLine", title: "Home tailors", line: "Stitching blouses and garments from handwoven cloth." },
    { icon: "HeartHandshake", title: "Older weavers and pensioners", line: "Retired weavers with pension or small deposits." },
    { icon: "Home", title: "Low-income households", line: "Families with one modest wage and some savings interest." },
  ],

  opportunities: {
    eyebrow: "Who files in Anakaputhur",
    title: "Small incomes from the loom and the parcel counter",
    intro: "A weaver paid per saree, an artisan selling at fairs and a seller shipping through a marketplace all earn in small amounts. The tax questions come from how that money is paid, not how big it is.",
    // Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    // TODO photos: Unsplash could not be fetched from this session (bot check, no WebFetch). Pick 4 new free photos, check
    // each with grep across src, preview it, then fill image, alt and credit below.
    industries: [
      { icon: "Layers", title: "Weavers at work", image: "", alt: "", credit: "" },
      { icon: "Leaf", title: "Fibre craft makers", image: "", alt: "", credit: "" },
      { icon: "Package", title: "Packing online orders", image: "", alt: "", credit: "" },
      { icon: "Users", title: "Weavers' groups", image: "", alt: "", credit: "" },
    ],
  },

  highlights: {
    eyebrow: "Marketplace TDS",
    title: "The tax a marketplace keeps from an Anakaputhur seller's payout",
    lead: "Under section 393(1) of the Income-tax Act, 2025 (formerly section 194-O), the platform deducts income tax before paying you. This is how it works for a small seller.",
    items: [
      { icon: "Percent", label: "The rate", title: "0.1% of gross sales", line: "The platform deducts 0.1% of the gross value of your sales, at the time it credits or pays you, whichever is first." },
      { icon: "UserCheck", label: "Small sellers", title: "Nothing deducted up to ₹5 lakh", line: "An individual whose sales through that platform stay within ₹5 lakh in the year, and who has given PAN or Aadhaar, should see no TDS.", highlight: true },
      { icon: "IdCard", label: "Without PAN", title: "5% instead of 0.1%", line: "If PAN or Aadhaar isn't on your seller account, the rate jumps to 5%. Updating it is the first thing we check." },
      { icon: "ArrowLeftRight", label: "Not the same as GST TCS", title: "Two separate deductions", line: "GST TCS is claimed on the GST portal. Income tax TDS shows in your tax credit statement and is claimed in your return." },
    ],
  },

  documentsSection: {
    title: "Documents for income tax filing in Anakaputhur",
    lead: "Most weavers and small sellers need only a few papers. Photos on WhatsApp are enough for us to start.",
  },
  documents: [
    { icon: "UserRound", title: "About you", items: ["PAN card", "Aadhaar linked to your mobile", "Bank account for the refund, with IFSC"], hint: "The refund goes only to a bank account that is pre-validated on the portal. We help you do that." },
    { icon: "ShoppingCart", title: "For marketplace and online sales", items: ["Payout or settlement statements from each platform", "Total orders and returns for the year", "UPI collection summary for direct orders"], hint: "We match the platform's TDS with your tax credit statement before filing." },
    { icon: "Users", title: "For weaving work and grants", items: ["Wages or piece rates from a master weaver or society", "Letters or receipts for any grant or subsidy", "Bills for a loom or equipment bought with a subsidy"], hint: "A subsidy used to buy a loom is treated differently from one paid as cash support, so the papers matter." },
  ],
  documentsNote: {
    title: "Not sure if TDS was cut from your payouts?",
    sub: "Send your PAN and a recent platform statement. We'll check your tax credit statement and tell you what can come back.",
    message: "Hi National Filings, I sell on a marketplace from Anakaputhur. Can you check if TDS was deducted on my payouts?",
  },

  processSection: {
    title: "How we file a return for an Anakaputhur weaver or seller",
    lead: "Everything runs on WhatsApp and email, and you can visit our Kundrathur office if you'd like to meet. A simple return is usually ready within a few days of getting your papers.",
    cta: {
      title: "Send us your papers",
      sub: "PAN, bank details and any platform statements are enough to start. We'll reply with what we found and a written quote.",
      message: "Hi National Filings, I'd like to file my income tax return from Anakaputhur. What should I send?",
    },
  },
  steps: [
    { title: "Income listed", time: "Day 1", sub: "Weaving wages, online sales, grants and interest, written down in one place." },
    { title: "TDS checked", time: "1-2 days", sub: "Your AIS and tax credit statement compared with platform and bank records." },
    { title: "Form chosen", time: "Same day", sub: "ITR-1 for wages and interest, or ITR-4 for a small business under the presumptive scheme." },
    { title: "Filed and verified", time: "1 day", sub: "Return filed on the portal and e-verified with an Aadhaar OTP." },
    { title: "Refund followed up", time: "After processing", sub: "We track the return and tell you when any refund is issued." },
  ],
  processNote: "Timelines are estimates. Refunds are processed by the Income Tax Department, and their timing varies.",

  mistakesSection: {
    title: "Income tax mistakes we see with small weavers and sellers",
    lead: "Most of these come from thinking a return isn't needed because the income is small.",
  },
  mistakes: [
    { icon: "Coins", title: "Marketplace TDS never claimed", problem: "A seller below the taxable limit doesn't file, so the TDS the platform cut is never refunded.", fix: "We file a return that claims every rupee of TDS shown against your PAN." },
    { icon: "IdCard", title: "PAN missing on the seller account", problem: "The platform deducts 5% instead of 0.1% because PAN or Aadhaar wasn't on the account.", fix: "We check your seller profile and fix the details before more payouts go out." },
    { icon: "Users", title: "Group grant shown in a member's return", problem: "A grant paid to a weavers' group is shown in one member's personal return.", fix: "We report each amount in the return of whoever actually received it." },
    { icon: "Clock", title: "Waiting until income is 'big enough'", problem: "A seller skips returns for years, then a bank asks for three years of ITRs for a loan.", fix: "We start the record now, so it's ready when you need credit." },
  ],

  costSection: {
    title: "Income tax filing fees for Anakaputhur households",
    lead: "There is no government fee to file a return. For most weavers and small sellers, the work is light, and our fee reflects that.",
    cta: {
      title: "Ask for a quote",
      sub: "Tell us your income sources and which platforms you sell on. We'll quote in writing before we start.",
      message: "Hi National Filings, can I get a quote to file my income tax return in Anakaputhur?",
    },
  },
  costs: [
    { icon: "Landmark", label: "No government fee", title: "Filing the return", line: "Filing on the portal is free. Any tax or late fee is paid directly to the department.", highlight: true },
    { icon: "Home", label: "Quoted upfront", title: "Simple wage and interest returns", line: "ITR-1 for weavers paid wages, with savings interest and a refund claim." },
    { icon: "ShoppingCart", label: "Quoted upfront", title: "Online seller returns", line: "Platform payouts and TDS matched, then ITR-4 under the presumptive scheme." },
    { icon: "Mail", label: "Quoted separately", title: "Notices and missed years", line: "Replies to department letters and returns for years you didn't file." },
  ],

  compliance: {
    eyebrow: "Grants and simple returns",
    title: "Weavers' grants, subsidies and the simplest returns",
    lead: "Handloom work often comes with support payments, and many households need only the easiest forms. These are the rules we apply most in Anakaputhur.",
    items: [
      { icon: "Banknote", label: "Section 2(49)", title: "Subsidies are usually income", line: "A grant or subsidy received for your work counts as income, unless it is used to reduce the cost of an asset such as a loom." },
      { icon: "Factory", label: "Loom or equipment subsidy", title: "Lowers the cost, not taxed again", line: "A subsidy towards a loom reduces the loom's cost in your accounts. It is not added to income a second time.", highlight: true },
      { icon: "Users", label: "Group grants", title: "Taxed where they land", line: "Money paid to a society, producer company or collective goes in that group's return, not in each member's." },
      { icon: "FileText", label: "Simple forms", title: "ITR-1 or ITR-4", line: "Wages and interest fit ITR-1. A small business using the presumptive scheme, with profit at 6% of digital and 8% of cash sales, files ITR-4." },
    ],
  },

  reasonsTitle: "Why Anakaputhur weavers and sellers choose National Filings",
  reasons: [
    { icon: "Coins", title: "TDS traced to the rupee", line: "Platform and bank TDS matched with your tax credit statement." },
    { icon: "ShoppingCart", title: "We know marketplace payouts", line: "Settlement reports read correctly, with GST and income tax kept apart." },
    { icon: "Scale", title: "Honest advice on small incomes", line: "We'll tell you plainly when filing is optional and what it gets you." },
    { icon: "MessageCircle", title: "WhatsApp first", line: "Send papers from home. No need to leave the loom." },
    { icon: "MapPinned", title: "Kundrathur office nearby", line: "Visit us in Karaima Nagar whenever you'd like to meet." },
    { icon: "Award", title: "Experience since 2012", line: "Tax, registration and compliance work for Chennai households and businesses." },
  ],

  faqTitle: "Income tax for Anakaputhur weavers and sellers: your questions",
  faqs: [
    { q: "Do you have an office in Anakaputhur?", a: "No. Our only office is in Karaima Nagar, Kundrathur. Most Anakaputhur clients work with us over WhatsApp and email, and you're welcome to visit Kundrathur Monday to Saturday, 9 am to 7 pm." },
    { q: "My income is below the taxable limit. Why should I file?", a: "Because it is the only way to get back TDS already cut by a marketplace or bank, and because lenders, embassies and some schemes ask for returns as proof of income. In the new regime, the rebate means no tax on income up to ₹12 lakh, so many weavers file, pay nothing and get a refund." },
    { q: "Do I ever have to file even if my income is low?", a: "Sometimes. The law requires a return from some people below the exemption limit, for example where bank deposits, certain spending or the TDS against your PAN cross limits set in the rules. We check these for you each year." },
    { q: "The marketplace deducted TDS from my payouts. How do I get it back?", a: "The platform deposits the TDS against your PAN, and it shows in your tax credit statement (Form 168, earlier Form 26AS) and your AIS. When you file your return, it counts as tax already paid. If you owe less, the difference is refunded to your pre-validated bank account." },
    { q: "Why was 5% deducted instead of 0.1%?", a: "Usually because your PAN or Aadhaar wasn't on the seller account. The normal rate is 0.1% of gross sales, and an individual selling up to ₹5 lakh a year through a platform, with PAN or Aadhaar given, should have nothing deducted. The extra can still be claimed back in your return." },
    { q: "Our weavers' group received a grant. Is it taxable?", a: "It depends on who received it and what it paid for. A grant or subsidy is generally income under the Income-tax Act, 2025, but one used to buy a loom or equipment reduces that asset's cost instead. If it was paid to the group, it belongs in the group's return. Send us the sanction letter and we'll explain." },
    { q: "Which return form does a small weaver or seller use?", a: "Usually ITR-1 if your income is wages, pension or interest, and ITR-4 if you sell on your own account and use the presumptive scheme under section 58. Both are short forms, and we pick the one that fits your income." },
  ],

  related: nearbyAreas("P3-A4"),
  relatedTitle: "Income tax consultants in areas near Anakaputhur",

  final: {
    title: "Claim back what's yours with a simple Anakaputhur return",
    sub: "Tell us how you earn and where you sell. We'll check your TDS, pick the right form and confirm our fee before we start.",
    message: "Hi National Filings, I'm in Anakaputhur and I'd like help filing my income tax return.",
  },
  catalogue: ["ITR filing for handloom weavers in Anakaputhur", "Marketplace TDS refund claims for Anakaputhur sellers", "Low-income return filing in Anakaputhur"],
};
