import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { INCOME_TAX_SERVICE, nearbyAreas } from "./shared";

/**
 * P3-A6 · Income Tax Consultant in Tambaram (/chennai/income-tax-consultant-in-tambaram).
 * Primary keyword: "income tax consultant in tambaram". Angle: teachers and college staff, employees of MEPZ units, pensioners
 * and property owners in the big southern hub. Unique sections: capital gains on a house or plot after the 2024 changes, and
 * senior citizen benefits. The company page for this area is P1-A6 and the GST page is P2-A6; this page shares no headings,
 * FAQs, accent or photos with them.
 *
 * Local facts (reused from the verified P1-A6 JSDoc): Tambaram is a city in Chengalpattu district; MEPZ Special Economic Zone is on
 * GST Road at Tambaram; Madras Christian College is in East Tambaram.
 *
 * Facts checked (Nov 2026):
 * - Income-tax Act, 2025 in force from 1 April 2026 (tax year 2026-27); slabs unchanged by Budget 2026. New regime section 202:
 *   nil up to ₹4 lakh; rebate section 156 (formerly 87A) up to ₹60,000 where income does not exceed ₹12 lakh. Old regime basic
 *   exemption ₹3 lakh for residents aged 60-79 and ₹5 lakh at 80 and above. (eztax.in/income-tax-act-2025/section-202, /section-156,
 *   businesstoday.in Budget 2026 "tax slabs unchanged" 1 Feb 2026)
 * - Standard deduction, section 19 Table Sl. No. 2: ₹75,000 (new regime) or ₹50,000 (old); commuted pension fully exempt for
 *   government and similar employees (Sl. No. 7), partly exempt for others (Sl. No. 8). (eztax.in/income-tax-act-2025/section-19)
 * - Family pension, section 93 (formerly 57(iia)): deduction of one-third or ₹25,000, whichever is less, under the new regime, and
 *   one-third or ₹15,000 otherwise. (eztax.in/income-tax-act-2025/section-93)
 * - Interest deduction for senior citizens, section 153 (formerly 80TTB): up to ₹50,000 on bank, co-operative bank and post office
 *   deposits; old regime only. Health insurance, section 126 (formerly 80D). (eztax.in/income-tax-act-2025/section-153,
 *   cleartax.in/s/income-tax-act-2025-section-numbers-old-vs-new)
 * - Bank TDS on interest for senior citizens only above ₹1 lakh a year (Budget 2025). Forms 15G and 15H merged into Form 121 under the
 *   Income-tax Rules, 2026; Form 16 becomes Form 130. (taxscan.in/complete-tds-rate-and-threshold-limit-changes-proposed-in-union-budget-2025/486363,
 *   freepressjournal.in Form 130 and Form 168 report, studycafe.in ...-410548.html)
 * - Resident aged 75+ with only pension and interest from the same specified bank: the bank computes and deducts tax on a declaration,
 *   and no return is needed (formerly 194P). Resident senior citizens with no business or professional income need not pay advance
 *   tax (section 403(3), formerly 207(2)). (upstox.com senior citizens tax article, thetaxcorp.in advance tax under Income-tax Act 2025)
 * - Relief for salary arrears, section 157 (formerly 89). (cleartax.in mapping table)
 * - Capital gains on land or building: long-term if held more than 24 months; section 197 (formerly 112) taxes long-term gains at 12.5%
 *   without indexation; for a resident individual or HUF transferring land or building acquired before 23 July 2024, tax above the
 *   20%-with-indexation figure is ignored (section 197(3)). (eztax.in/income-tax-act-2025/section-197, businesstoday.in 22 Jul 2026 report)
 * - Section 82 (formerly 54): house to house; buy within one year before or two years after, or build within three years; capital gains
 *   account scheme deposit before the return due date under section 263(1); two houses once if the gain is up to ₹2 crore; cost above
 *   ₹10 crore ignored. Section 86 (formerly 54F): any other long-term asset, net consideration invested in one house; not available if
 *   owning more than one other house on the date of transfer; ₹10 crore cap. Section 85 (formerly 54EC): gains from land or building
 *   invested within six months in notified bonds, up to ₹50 lakh, five-year lock-in. (eztax.in/income-tax-act-2025/section-82, /section-86, /section-85)
 * - Section 78 (formerly 50C): stamp duty (guideline) value is taken as the sale price where it exceeds 110% of the consideration.
 *   (eztax.in/income-tax-act-2025/section-78)
 * - TDS on purchase of immovable property, 1% where consideration is ₹50 lakh or more: section 393(1) Table Sl. No. 3(i), formerly 194-IA.
 *   (reconscribe.com/income-tax-act-2025-section-mapping/)
 * Timelines are estimates.
 */

const whatsapp = "Hi National Filings, I'm in Tambaram and I need help with my income tax return.";

export const itTambaramPage: LicencePageData = {
  id: "P3-A6",
  service: INCOME_TAX_SERVICE,
  meta: {
    title: "Income Tax Consultant in Tambaram | National Filings",
    description: "Income tax consultant in Tambaram for teachers, MEPZ staff, pensioners and property sellers. Form 16 returns, senior citizen tax and capital gains.",
  },
  hero: {
    headline: { line1: "Income Tax Consultant", line2Before: "in Tambaram, ", accent: "Payslip to Pension" },
    sub: "Teaching at a Tambaram college, working in a unit at MEPZ, drawing a pension or selling the family plot? We file salary and pension returns, apply every senior citizen benefit and work out the capital gains on a house sale before you sign.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "Landmark",
    kicker: "Tambaram, Chengalpattu",
    title: "Income Tax Return Filed",
    line: "Your Tambaram Return",
    stamp: "ITR-V verified",
    chips: ["Form 16 matched", "Senior benefits applied", "Capital gains worked out"],
    steps: ["Form 16", "AIS", "Gains", "File", "Verify"],
  },

  benefitsSection: {
    title: "What a careful return saves Tambaram families",
    lead: "Salaried staff, pensioners and property sellers in Tambaram lose money in the same few places: reliefs left unclaimed, the wrong regime, and capital gains worked out too late.",
    cta: {
      title: "Retired, or selling a house?",
      sub: "Tell us your pension, your deposits and any property you plan to sell. We'll tell you what tax to expect and what can be saved.",
      message: "Hi National Filings, I'm a retiree in Tambaram. Can you check my income tax?",
    },
  },
  benefits: [
    { icon: "FileCheck2", title: "Form 16 checked, not copied", line: "Employer figures matched with your AIS before anything is filed." },
    { icon: "Users", title: "Two employers, one return", line: "A mid-year job change handled so tax isn't left short." },
    { icon: "Banknote", title: "Arrears relief claimed", line: "Teachers paid revised-pay arrears can have the tax spread back over earlier years." },
    { icon: "HeartHandshake", title: "Family pension deduction", line: "One-third of a family pension, up to the limit, taken off before tax." },
    { icon: "UserCheck", title: "Senior citizen limits applied", line: "Higher exemption and the deposit interest deduction, where the old regime helps." },
    { icon: "ShieldCheck", title: "No needless TDS on deposits", line: "Form 121, earlier Form 15H, given to banks when your tax is nil." },
    { icon: "Home", title: "Capital gains planned early", line: "Tax rates and exemption options worked out before the sale deed." },
    { icon: "Calculator", title: "Both regimes, every year", line: "Tax worked out both ways each year, since the better choice can change." },
  ],

  applicantsSection: {
    title: "Tambaram taxpayers we file returns for",
    lead: "Tambaram has colleges, an export zone and many families who have lived here for decades. These are the returns we prepare most often.",
  },
  applicants: [
    { icon: "GraduationCap", title: "College and school teachers", line: "Teaching and non-teaching staff with a single employer's Form 16." },
    { icon: "Award", title: "Professors with extra receipts", line: "Examination, evaluation and guest lecture fees on top of salary." },
    { icon: "Factory", title: "Employees of MEPZ units", line: "Staff in the zone's export units, often with variable pay." },
    { icon: "Shuffle", title: "People who changed jobs", line: "Two Form 16s in one year from two employers." },
    { icon: "HeartHandshake", title: "Pensioners", line: "Retired government, college and company staff drawing a monthly pension." },
    { icon: "UserRound", title: "Family pension receivers", line: "Spouses and dependants receiving a pension after an employee's death." },
    { icon: "Clock", title: "Super senior citizens", line: "Residents aged 80 and above, usually with deposits and a pension." },
    { icon: "Home", title: "Owners selling a house or plot", line: "Families selling an old house or plot, or reinvesting the money." },
  ],

  opportunities: {
    eyebrow: "Tambaram households",
    title: "Where Tambaram's income tax questions come from",
    intro: "Madras Christian College in East Tambaram, the MEPZ zone on GST Road and the city's long-settled neighbourhoods give Tambaram a mix of salaried staff, retirees and property owners, each with a different return.",
    // Pexels licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "GraduationCap", title: "Schools and colleges", image: "https://images.pexels.com/photos/3231358/pexels-photo-3231358.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Students in white uniforms listening to a lesson in a classroom", credit: "Yogendra Singh / Pexels" },
      { icon: "Factory", title: "Export zone employees", image: "https://images.pexels.com/photos/31047133/pexels-photo-31047133.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Women in blue uniforms sorting rolled textiles on a garment factory floor", credit: "EqualStock IN / Pexels" },
      { icon: "HeartHandshake", title: "Pensioners", image: "https://images.pexels.com/photos/5191865/pexels-photo-5191865.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Elderly woman in a white and gold saree seated on a wooden chair in a garden", credit: "Jayakumar Karunakaran / Pexels" },
      { icon: "Home", title: "Houses and plots", image: "https://images.pexels.com/photos/35289099/pexels-photo-35289099.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Houses with red tiled roofs and a balcony under a clear sky in Tamil Nadu", credit: "#D67 HUNTER / Pexels" },
    ],
  },

  highlights: {
    eyebrow: "Selling a house or plot",
    title: "Capital gains on Tambaram property after the 2024 changes",
    lead: "The tax on selling land and buildings changed from 23 July 2024, and the Income-tax Act, 2025 carries the same position forward. This is how a sale is taxed now.",
    items: [
      { icon: "Clock", label: "Held over 24 months", title: "Long-term gain at 12.5%", line: "A house or plot held for more than 24 months gives a long-term gain, taxed at 12.5% without indexation. Held for less, the gain is added to your income at slab rates." },
      { icon: "Scale", label: "Bought before 23 July 2024", title: "The lower of two", line: "A resident individual or HUF selling land or a building bought before that date pays the lower of 12.5% without indexation and 20% with indexation (section 197).", highlight: true },
      { icon: "Home", label: "Reinvest in a house", title: "Sections 82 and 86", line: "Gain on a house reinvested in another house (formerly section 54), or the net sale price of a plot reinvested in a house (formerly 54F), can be exempt, up to ₹10 crore." },
      { icon: "Landmark", label: "Or buy bonds", title: "Section 85 bonds", line: "Invest the gain in notified bonds within six months of the sale, up to ₹50 lakh, locked in for five years (formerly section 54EC)." },
    ],
  },

  documentsSection: {
    title: "Documents for income tax filing in Tambaram",
    lead: "Send scans or phone photos on WhatsApp, or ask a family member to send them. For a property sale, the old purchase papers matter as much as the new deed.",
  },
  documents: [
    { icon: "UserRound", title: "For salary and pension", items: ["Form 16 from each employer, or the bank's pension statement", "Pension payment order", "Arrears statement, if revised pay was received", "Rent, insurance and investment proofs, if on the old regime"], hint: "If you changed jobs, send both Form 16s. Each employer worked out TDS as if its salary were your only one." },
    { icon: "HeartHandshake", title: "For seniors and family pension", items: ["Interest certificates from every bank and post office", "Health insurance premium receipts", "Family pension order", "Copies of Form 121 or 15H given to banks"], hint: "Interest from several banks adds up. We total it before deciding whether a nil-TDS form can be given." },
    { icon: "Home", title: "For a house or plot sale", items: ["Sale deed and the original purchase deed", "Guideline value on the date of sale", "Bills for construction or improvement", "Proof of reinvestment or bond purchase"], hint: "If the guideline value is more than 10% above your sale price, the guideline value is taken as the sale price for tax." },
  ],
  documentsNote: {
    title: "Purchase deed from decades ago?",
    sub: "Send whatever you have: the deed, old tax receipts or a valuation. We'll work out the cost to use for an old house or plot.",
    message: "Hi National Filings, I'm selling a property in Tambaram that I bought years ago. Can you work out the capital gains?",
  },

  processSection: {
    title: "How we prepare a Tambaram salary, pension or property return",
    lead: "A salary or pension return usually takes a few days from complete papers. A property sale is best discussed before the deed is registered, while every exemption option is still open.",
    cta: {
      title: "Planning a sale this year?",
      sub: "Tell us the property, when it was bought and the expected price. We'll estimate the tax and the options, with a written quote for our work.",
      message: "Hi National Filings, I'm planning to sell a property in Tambaram. Can we discuss the tax first?",
    },
  },
  steps: [
    { title: "Income gathered", time: "Day 1", sub: "Salary, pension, family pension, deposit interest and any property sale listed together." },
    { title: "Form 16 and AIS matched", time: "1-2 days", sub: "Employer, bank and property registration data compared with your own records." },
    { title: "Gains and reliefs worked out", time: "1-2 days", sub: "Capital gains under both methods where allowed, arrears relief and senior citizen deductions." },
    { title: "Regime compared", time: "Same day", sub: "Tax worked out under the old and new regimes, and the lower one chosen where you can." },
    { title: "Filed and verified", time: "1 day", sub: "Return filed and e-verified with an Aadhaar OTP, with next year's TDS steps noted." },
  ],
  processNote: "Timelines are estimates. Refunds are processed by the Income Tax Department, and their timing varies.",

  mistakesSection: {
    title: "Income tax slips we fix for Tambaram staff and retirees",
    lead: "Most of these come from trusting one document, whether a Form 16, a bank's TDS or the sale deed, without checking the rest.",
  },
  mistakes: [
    { icon: "Shuffle", title: "Two Form 16s, tax short-paid", problem: "An employee of a MEPZ unit changes jobs mid-year, and both employers deduct TDS as if each salary were the only one.", fix: "We combine both salaries, work out the true tax and pay the balance as self-assessment tax before filing." },
    { icon: "Banknote", title: "Arrears taxed in one year", problem: "A teacher receives two years of revised pay at once and pays tax on all of it at this year's rate.", fix: "We file the arrears relief form before the return, so the tax is worked out over the years it relates to." },
    { icon: "UserRound", title: "Family pension shown as salary", problem: "A family pension is added to salary income, and the standard deduction is claimed on it.", fix: "We show it as other income, with one-third deducted, up to ₹25,000 in the new regime or ₹15,000 in the old." },
    { icon: "Home", title: "Selling first, planning later", problem: "A plot is sold and the money spent before anyone checks the reinvestment rules or the six-month bond window.", fix: "We work out the exemptions before the sale, and use the capital gains account scheme before the return due date if needed." },
  ],

  costSection: {
    title: "What our ITR fee in Tambaram depends on",
    lead: "There is no government fee to file a return. Our fee depends on your income sources and whether a property was sold, and you'll have it in writing first.",
    cta: {
      title: "Ask for a written quote",
      sub: "Tell us whether it's salary, pension, deposits or a property sale. We'll quote for that work.",
      message: "Hi National Filings, can I get a quote for my income tax return in Tambaram?",
    },
  },
  costs: [
    { icon: "Landmark", label: "No government fee", title: "Filing the return", line: "The portal charges nothing. Any tax, interest or late fee is paid directly to the department.", highlight: true },
    { icon: "FileCheck2", label: "Quoted upfront", title: "Salary and pension returns", line: "One or more Form 16s, pension, family pension and deposit interest." },
    { icon: "Home", label: "Quoted per sale", title: "Capital gains on property", line: "Both tax methods, the exemption options and the right schedule in the return." },
    { icon: "Mail", label: "Quoted separately", title: "Notices and past years", line: "Replies to department notices, and updated returns where the law still allows." },
  ],

  compliance: {
    eyebrow: "Senior and super senior citizens",
    title: "Tax benefits for Tambaram's retired residents",
    lead: "Residents aged 60 and above are senior citizens for income tax, and those aged 80 and above are super senior citizens. These are the benefits we check for every retired client.",
    items: [
      { icon: "UserCheck", label: "Old regime", title: "Higher tax-free limit", line: "₹3 lakh for senior citizens and ₹5 lakh for super seniors. The new regime has ₹4 lakh for everyone, and its rebate covers income up to ₹12 lakh." },
      { icon: "Coins", label: "Deposit interest", title: "Up to ₹50,000 deducted", line: "Under the old regime, interest on bank, co-operative bank and post office deposits is deductible up to ₹50,000 (section 153, formerly 80TTB). Banks deduct TDS for seniors only above ₹1 lakh a year.", highlight: true },
      { icon: "ShieldCheck", label: "Health cover", title: "Up to ₹50,000 for premiums", line: "An old regime deduction for a senior citizen's health insurance or medical costs (section 126, formerly 80D)." },
      { icon: "CalendarCheck", label: "Fewer formalities", title: "No advance tax, sometimes no return", line: "Resident seniors with no business income need not pay advance tax. Those aged 75 and above with only pension and interest from the same bank can let the bank deduct the tax and skip the return." },
    ],
  },

  reasonsTitle: "Why Tambaram families choose National Filings",
  reasons: [
    { icon: "HeartHandshake", title: "Patient with retirees", line: "We explain each figure on a call, at your pace." },
    { icon: "Home", title: "Property sales worked out first", line: "Gains and exemptions estimated before you sign." },
    { icon: "MessageCircle", title: "WhatsApp, email or phone", line: "A son or daughter can send papers on your behalf." },
    { icon: "MapPinned", title: "Office in Kundrathur", line: "Our only office is in Karaima Nagar, Kundrathur, if you'd like to meet." },
    { icon: "ReceiptText", title: "Written quotes", line: "A clear fee for your return before we start." },
    { icon: "Award", title: "In practice since 2012", line: "Tax and compliance work for Chennai households and businesses." },
  ],

  faqTitle: "Income tax in Tambaram: salary, pension and property questions",
  faqs: [
    { q: "Do you have an office in Tambaram?", a: "No. Our only office is in Karaima Nagar, Kundrathur. Tambaram clients work with us over WhatsApp, email and phone, and anyone who would like to meet can visit the Kundrathur office, Monday to Saturday, 9 am to 7 pm." },
    { q: "My employer gave me Form 16. Can I just file from it?", a: "It is the starting point, not the whole return. Savings and deposit interest, salary from a previous employer and other receipts are not on it, but they do show in your AIS. We match the two before filing. From tax year 2026-27, Form 16 is called Form 130, though it does the same job." },
    { q: "Is my pension taxed as salary?", a: "A pension from your former employer is taxed as salary, so the standard deduction of ₹75,000 in the new regime or ₹50,000 in the old applies. A family pension received after an employee's death is taxed as other income, with a deduction of one-third, up to ₹25,000 or ₹15,000. A commuted pension is fully exempt for government employees and partly exempt for others." },
    { q: "I'm 76 and get only pension and FD interest from one bank. Do I need to file?", a: "Possibly not. A resident aged 75 or above whose only income is pension and interest from the same specified bank can give the bank a declaration, and the bank works out and deducts the tax. If you also have interest from another bank, rent or a property sale, you file as usual." },
    { q: "How is the sale of my Tambaram house taxed now?", a: "If you held it for more than 24 months, the gain is long-term and taxed at 12.5% without indexation. If you bought it before 23 July 2024 and are a resident individual, the tax is the lower of that and 20% with indexation. If you held it for 24 months or less, the gain is added to your income and taxed at slab rates." },
    { q: "Can I save capital gains tax by buying another house?", a: "Often, yes. The gain on a house is exempt to the extent you invest it in one house in India, bought within one year before or two years after the sale, or built within three years (section 82, formerly 54). For a plot, the whole net sale price must be invested for full exemption (section 86, formerly 54F). Money not yet invested by the return due date has to go into the capital gains account scheme." },
    { q: "The buyer deducted 1% TDS. Is that my final tax?", a: "No. A buyer paying ₹50 lakh or more for a property deducts 1% TDS, which is credited against your PAN. Your actual tax on the gain may be more or less than that, and your return settles the difference, with a refund if too much was deducted." },
  ],

  related: nearbyAreas("P3-A6"),
  relatedTitle: "Income tax consultants in areas near Tambaram",

  final: {
    title: "Sort your Tambaram return, from payslip to property",
    sub: "Tell us about your salary, pension, deposits or the property you plan to sell. We'll work out the tax, apply every relief and confirm our fee first.",
    message: "Hi National Filings, I'm in Tambaram and I'd like help with my income tax return.",
  },
  catalogue: ["Salaried and pension ITR filing in Tambaram", "Senior citizen income tax filing in Tambaram", "Capital gains tax on property sale in Tambaram"],
};
