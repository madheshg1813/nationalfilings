import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { INCOME_TAX_SERVICE, nearbyAreas } from "./shared";

/**
 * P3-A3 · Income Tax Consultant in Pammal (/chennai/income-tax-consultant-in-pammal).
 * Primary keyword: "income tax consultant in pammal". We have no office in Pammal; clients work with us over WhatsApp and
 * email, or visit our Kundrathur office, which is on SH 113A, the road known in Pammal as Pammal Main Road.
 * Angle: families in a dense residential suburb, where one house often holds a salaried earner, a home tutor or tailor,
 * a small shopkeeper and retired parents. Choosing the new or old regime, the rebate that makes income up to ₹12 lakh
 * tax-free, pensioners and senior citizens, and small business owners filing under presumptive taxation.
 *
 * Local facts (reused from the verified P1-A3 Pammal page): part of Tambaram City Municipal Corporation since 2021,
 * Chengalpattu district, PIN 600075, about 75,870 people over about 13 sq km at the 2011 census, SH 113A called Pammal
 * Main Road, shops along Nallathambi Main Road.
 *
 * Facts checked (Nov 2026):
 * - The Income-tax Act, 2025 applies from 1 April 2026; tax year 2026-27 is the first "tax year", and its returns are
 *   filed in 2027. Returns filed in 2026 (for FY 2025-26) were still under the 1961 Act. Form 16 becomes Form 130 and
 *   Form 26AS becomes Form 168 for tax year 2026-27; Form 15G and 15H are merged into Form 121 (basunivesh.com;
 *   businesstoday.in, 1 Apr 2026). ITR-1 (Sahaj) and ITR-4 (Sugam) keep their names (scconline.com, Apr 2026).
 * - New regime, s. 202 (formerly 115BAC), is the default. Slabs unchanged by Budget 2026: nil to ₹4 lakh, 5% to ₹8 lakh,
 *   10% to ₹12 lakh, 15% to ₹16 lakh, 20% to ₹20 lakh, 25% to ₹24 lakh, 30% above (cleartax.in/s/section-202-new-tax-regime;
 *   moneylife.in, scroll.in on Budget 2026). Standard deduction on salary ₹75,000 new regime, ₹50,000 old regime.
 *   Without business income, the option to opt out is exercised each year on or before the due date for the return.
 *   With business income, the option carries on to later years and can be withdrawn only once, after which it cannot be
 *   exercised again (taxguru.in, new tax regime under Income Tax Act 2025; thetaxcorp.in on s. 202).
 * - Rebate, s. 156 (formerly 87A): new regime up to ₹60,000 for resident individuals with total income up to ₹12 lakh,
 *   with marginal relief just above; old regime up to ₹12,500 for income up to ₹5 lakh; not available on income taxed
 *   at special rates (cleartax.in/s/section-156-income-tax-act-2025; taxguru.in). Salaried: up to ₹12.75 lakh salary
 *   with the standard deduction.
 * - Senior citizens: old regime basic exemption ₹3 lakh at 60 to 79, ₹5 lakh at 80 and above; the new regime slabs do
 *   not change with age; a resident senior with no business income need not pay advance tax; the senior citizens'
 *   interest deduction of up to ₹50,000 (formerly 80TTB) is an old regime deduction (incometaxindia.gov.in senior
 *   citizen chart; motilaloswal.com). Form 125 (formerly 12BBA): a specified senior citizen of 75 or above with only
 *   pension and interest from the same bank gives the declaration and the bank deducts the tax, with no return needed
 *   (caclubindia.com, Apr 2026; s. 393 table, formerly 194P). Form 121 only when the tax on total income is nil.
 * - Presumptive taxation, s. 58 (consolidating 44AD, 44ADA, 44AE): business turnover up to ₹2 crore, or ₹3 crore where
 *   cash receipts are not more than 5% of turnover; profit taken at 8% of turnover, or 6% of digital receipts
 *   (taxguru.in analysis of s. 58; taxscan.in). Return form ITR-4 (Sugam).
 * - Due dates, s. 263(1) as amended by Finance Act 2026: 31 July for individuals without business income, 31 August for
 *   business income without audit, 31 October for audit cases (taxguru.in; angelone.in; jmfinancialservices.in). Late
 *   fee, s. 428 (formerly 234F): ₹5,000, or ₹1,000 if total income is up to ₹5 lakh (cleartax.in/s/section-428). A
 *   belated return for FY 2025-26 can be filed up to 31 December 2026.
 * Timelines are estimates.
 */

const whatsapp = "Hi National Filings, we're a family in Pammal and a few of us need to file income tax returns. Can you help?";

export const itPammalPage: LicencePageData = {
  id: "P3-A3",
  service: INCOME_TAX_SERVICE,
  meta: {
    title: "Income Tax Consultant in Pammal | National Filings",
    description: "Income tax consultant in Pammal for whole families: salaried earners, tutors, tailors, shopkeepers and pensioners. Right regime, rebate and ITR.",
  },
  hero: {
    headline: { line1: "Income Tax Consultant", line2Before: "in Pammal, ", accent: "For Every Earner" },
    sub: "In many Pammal homes, one person draws a salary, another takes tuition or stitching orders, and the parents live on a pension. We file a return for each of them, in the regime that suits each one.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "Users",
    kicker: "Pammal, Chennai 600075",
    title: "ITR Acknowledgement",
    line: "Your Pammal Return",
    stamp: "E-verified",
    chips: ["New or old regime", "Rebate checked", "Pension and FD interest"],
    steps: ["Earners", "Regime", "Match", "File", "Verify"],
  },

  benefitsSection: {
    title: "One household, several returns: how we help Pammal families",
    lead: "A Pammal family rarely has just one kind of income. Salary, tuition fees, shop takings, pension and FD interest each follow their own rules, and each earner files a separate return.",
    cta: {
      title: "Several earners under one roof?",
      sub: "Tell us who earns what in the house, roughly. We'll say who needs to file, which form each person uses, and which regime to look at first.",
      message: "Hi National Filings, there are three earners in our Pammal house. Who among us needs to file an income tax return?",
    },
  },
  benefits: [
    { icon: "Scale", title: "Regime chosen per person", line: "Your salary may suit the new regime while your father's pension suits the old one. We work out each." },
    { icon: "BadgeIndianRupee", title: "Rebate applied properly", line: "Income up to ₹12 lakh can carry no tax in the new regime. We check you actually qualify." },
    { icon: "HeartHandshake", title: "Parents' returns handled", line: "Pension, FD interest and senior citizen limits sorted for retired parents." },
    { icon: "Store", title: "Small business on a simple footing", line: "Tutors, tailors and shopkeepers can often declare profit under the presumptive scheme." },
    { icon: "SearchCheck", title: "Every income matched", line: "Bank interest and fees received are cross-checked with your AIS before filing." },
    { icon: "Wallet", title: "Refunds not left unclaimed", line: "TDS cut from a salary, an FD or a tuition client is claimed back where it's due." },
    { icon: "CalendarCheck", title: "Different due dates tracked", line: "A salaried member and a shopkeeper in the same house can have different deadlines." },
    { icon: "MessageCircle", title: "One WhatsApp thread for the family", line: "Send everyone's papers in one place. We keep each return separate." },
  ],

  applicantsSection: {
    title: "Pammal taxpayers we file returns for",
    lead: "Pammal packs tens of thousands of residents into a few square kilometres, with shops along Nallathambi Main Road. These are the people in those homes who ask us about income tax.",
  },
  applicants: [
    { icon: "Laptop", title: "Salaried employees", line: "IT, bank and factory staff who commute out of Pammal every day." },
    { icon: "GraduationCap", title: "Home tutors", line: "Teachers and graduates taking tuition batches in the evenings." },
    { icon: "PenLine", title: "Tailors and boutique owners", line: "Blouse stitching and alterations run from a front room." },
    { icon: "Store", title: "Small shopkeepers", line: "Provision, stationery and mobile shops on the main roads." },
    { icon: "HeartHandshake", title: "Pensioners", line: "Retired government and private staff living on pension and FD interest." },
    { icon: "UserRound", title: "Super senior citizens", line: "Parents over 80, with the higher old regime exemption limit." },
    { icon: "Users", title: "Homemakers with savings", line: "Interest on deposits and post office schemes, sometimes with TDS cut." },
    { icon: "Briefcase", title: "Salaried people with a side income", line: "A weekend class, a rented portion or freelance work on top of salary." },
  ],

  opportunities: {
    eyebrow: "Who files in Pammal",
    title: "The earners in a typical Pammal household",
    intro: "Each person in the house reaches the tax limits by a different route. A salary, a tuition batch, a counter of goods and a pension book all need a different return.",
    // Pexels licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "Laptop", title: "Salaried earners", image: "https://images.pexels.com/photos/9474025/pexels-photo-9474025.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Young man in an orange T-shirt working on a laptop at a table", credit: "Yash Maramangallam / Pexels" },
      { icon: "GraduationCap", title: "Tutors and coaching classes", image: "https://images.pexels.com/photos/15119089/pexels-photo-15119089.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Children sitting on the floor of a small classroom listening to a lesson", credit: "Pexels" },
      { icon: "Store", title: "Small shopkeepers", image: "https://images.pexels.com/photos/27786488/pexels-photo-27786488.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Elderly shopkeeper seated at the front of a small shop with a young man sitting on the step beside him", credit: "Kewal Nagda / Pexels" },
      { icon: "HeartHandshake", title: "Retired parents", image: "https://images.pexels.com/photos/28704408/pexels-photo-28704408.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Elderly woman with grey hair in a pink blouse and yellow shawl sitting with her hands folded", credit: "Mijanur Rahman Niloy / Pexels" },
    ],
  },

  highlights: {
    eyebrow: "New or old regime",
    title: "Picking the tax regime for each Pammal earner",
    lead: "The new regime under section 202 of the Income-tax Act, 2025 applies unless you opt out. How often you can switch depends on whether you have business income.",
    items: [
      { icon: "Laptop", label: "Salary or pension only", title: "Choose again every year", line: "Without business income, you can pick the new or old regime each year, as long as you file by the due date." },
      { icon: "BadgeIndianRupee", label: "New regime", title: "No tax up to ₹12 lakh", line: "The rebate under section 156 covers income up to ₹12 lakh. With the ₹75,000 standard deduction, a salary of up to ₹12.75 lakh usually pays no tax.", highlight: true },
      { icon: "Store", label: "Business income", title: "Switching is limited", line: "A tutor, tailor or shopkeeper who leaves the new regime stays out in later years, and can come back to it only once." },
      { icon: "Calculator", label: "Old regime", title: "Worth it with big deductions", line: "Home loan interest, HRA and the familiar 80C savings count only here. Its rebate stops at ₹5 lakh of income." },
    ],
  },

  documentsSection: {
    title: "Documents for income tax filing in Pammal",
    lead: "Send each family member's papers separately on WhatsApp, with their name in the message. Every return is filed under that person's own PAN.",
  },
  documents: [
    { icon: "Laptop", title: "For salaried members", items: ["PAN and Aadhaar", "Form 16 from the employer (Form 130 from tax year 2026-27)", "Bank statements for the year", "Rent receipts and home loan certificate, if claiming under the old regime"], hint: "If you changed jobs in the year, bring Form 16 from both employers." },
    { icon: "HeartHandshake", title: "For pensioners", items: ["PAN and Aadhaar", "Pension statement or certificate from the bank", "FD and savings interest certificates", "Health insurance premium receipts"], hint: "We also check whether the bank cut TDS on FD interest and whether it can come back." },
    { icon: "Store", title: "For tutors, tailors and shopkeepers", items: ["Total fees or sales for the year", "Bank statement for the business account", "UPI and card collection summary", "GST returns, if registered"], hint: "Digital and cash receipts are counted separately under the presumptive scheme, so the split matters." },
  ],
  documentsNote: {
    title: "Filing for your parents too?",
    sub: "Send their pension statement and interest certificates. We'll tell you whether they need to file at all, or whether the bank can handle it.",
    message: "Hi National Filings, I'd like to file my retired parents' income tax returns in Pammal. What do you need?",
  },

  processSection: {
    title: "How a Pammal family's returns get filed",
    lead: "Most Pammal clients never visit us. We work over WhatsApp and email, and our Kundrathur office further along Pammal Main Road is open Monday to Saturday if you'd rather sit down.",
    cta: {
      title: "Start with a short call",
      sub: "Tell us who in the house earns, and from what. We'll send one checklist per person and a written quote.",
      message: "Hi National Filings, can you file income tax returns for my family in Pammal?",
    },
  },
  steps: [
    { title: "List the earners", time: "Day 1", sub: "We note each person's income: salary, fees, shop sales, pension or interest." },
    { title: "Regime and form", time: "Same day", sub: "Tax worked out under both regimes for each person, and the right ITR form picked." },
    { title: "Match with AIS", time: "1-2 days", sub: "Each person's figures checked against their AIS and tax credit statement." },
    { title: "Review and file", time: "1 day", sub: "We walk each member through their return before filing on the portal." },
    { title: "E-verify and track", time: "Same day", sub: "Aadhaar OTP verification, then we track processing and any refund." },
  ],
  processNote: "Timelines are estimates and depend on how quickly papers arrive. Refunds are processed by the Income Tax Department, and their timing varies.",

  mistakesSection: {
    title: "Income tax slips we see in Pammal households",
    lead: "Most of these come from one family member's situation being applied to another's, or from filing too late to keep a choice open.",
  },
  mistakes: [
    { icon: "Shuffle", title: "Same regime for the whole family", problem: "The son's salary suits the new regime, so the father's pension return is filed the same way without checking.", fix: "We compare both regimes for each person. Seniors with big medical or interest deductions sometimes do better in the old one." },
    { icon: "Clock", title: "Filing late and losing the old regime", problem: "A salaried member files after the due date, then finds the old regime is no longer open for that year.", fix: "We file before 31 July so the regime choice stays yours." },
    { icon: "Percent", title: "Assuming the rebate covers everything", problem: "Income is under ₹12 lakh, but part of it is capital gains on shares, which the rebate doesn't cover.", fix: "We separate income taxed at special rates before applying the rebate." },
    { icon: "FileWarning", title: "Tuition fees left out", problem: "A teacher files only the school salary, while tuition fees paid by UPI sit in the bank statement and the AIS.", fix: "We add the fees as business income, often under the presumptive scheme." },
  ],

  costSection: {
    title: "Income tax consultant fees for Pammal families",
    lead: "Filing a return has no government fee. Our fee depends on how many people are filing and what kind of income each has.",
    cta: {
      title: "Get one quote for the whole house",
      sub: "Tell us how many members need returns and what each one earns from. We'll quote per return, in writing.",
      message: "Hi National Filings, can I get a quote to file income tax returns for my family in Pammal?",
    },
  },
  costs: [
    { icon: "Landmark", label: "No government fee", title: "Filing the return", line: "The portal charges nothing to file. Tax, interest or a late fee, if any, goes straight to the department.", highlight: true },
    { icon: "Laptop", label: "Quoted upfront", title: "Salary and pension returns", line: "Simpler returns with Form 16, pension and interest, usually filed in ITR-1." },
    { icon: "Store", label: "Quoted upfront", title: "Business and presumptive returns", line: "Tutors, tailors and shops, with turnover worked out and ITR-4 or ITR-3 filed." },
    { icon: "Mail", label: "Quoted separately", title: "Notices and past years", line: "Replies to department notices, revised returns and returns for missed years." },
  ],

  compliance: {
    eyebrow: "Pensioners and small businesses",
    title: "Rules that matter for Pammal's retired parents and home businesses",
    lead: "Retired residents and small business owners make up a large part of Pammal's taxpayers. These are the points we check for them every year.",
    items: [
      { icon: "HeartHandshake", label: "Old regime, 60 and above", title: "Higher exemption for seniors", line: "Tax starts above ₹3 lakh from age 60 and above ₹5 lakh from age 80. The new regime slabs are the same for every age." },
      { icon: "Banknote", label: "Age 75 and above", title: "Pension and interest from one bank", line: "A senior with only pension and interest from the same bank can give the bank a declaration in Form 125. The bank deducts the tax, and no return is needed.", highlight: true },
      { icon: "Calculator", label: "Presumptive scheme, s. 58", title: "Profit at 6% or 8%", line: "A small business can declare profit at 6% of digital receipts and 8% of cash receipts, with turnover up to ₹2 crore, or ₹3 crore if cash is no more than 5%." },
      { icon: "CalendarClock", label: "Due dates", title: "31 July or 31 August", line: "Salaried members and pensioners file by 31 July. Business owners who don't need an audit have until 31 August." },
    ],
  },

  reasonsTitle: "Why Pammal families choose National Filings for income tax",
  reasons: [
    { icon: "Users", title: "Used to whole families", line: "Several PANs, one WhatsApp thread, no mix-ups between returns." },
    { icon: "Scale", title: "Regime worked out on numbers", line: "Both regimes calculated for each person before we recommend one." },
    { icon: "HeartHandshake", title: "Patient with senior citizens", line: "We explain pension, TDS and Form 125 in plain words to your parents." },
    { icon: "MapPinned", title: "Kundrathur office on your road", line: "Our office is at the far end of Pammal Main Road, in Karaima Nagar." },
    { icon: "CalendarCheck", title: "Reminders before each date", line: "31 July, 31 August and advance tax dates tracked for each member." },
    { icon: "Award", title: "Experience since 2012", line: "Tax, registration and compliance work for Chennai families and businesses." },
  ],

  faqTitle: "Income tax in Pammal: your questions",
  faqs: [
    { q: "Do you have an office in Pammal?", a: "No. Our only office is in Karaima Nagar, Kundrathur, on SH 113A, the road that runs through Pammal as Pammal Main Road. Most Pammal families send papers on WhatsApp and email, and you're welcome to visit Monday to Saturday, 9 am to 7 pm." },
    { q: "My salary is ₹11 lakh. Do I pay any tax?", a: "Usually not, in the new regime. The rebate under section 156 covers income up to ₹12 lakh, and salaried people also get a ₹75,000 standard deduction first. The rebate doesn't cover income taxed at special rates, such as some capital gains, so we check what else you earned before confirming." },
    { q: "Can I switch between the new and old regime every year?", a: "If you have no business income, yes. Salaried people and pensioners can choose each year, but only in a return filed by the due date. If you have business income, such as tuition or a shop, leaving the new regime carries on to later years, and you can return to it only once." },
    { q: "My father is 72 and gets a pension. Does he have to file?", a: "It depends on his total income and on the regime. Under the old regime, a senior aged 60 to 79 pays no tax up to ₹3 lakh, and up to ₹5 lakh from 80. Even below that, filing is the only way to claim back TDS a bank has cut. Send us his pension and interest details and we'll tell you." },
    { q: "My mother is over 75. Can the bank handle her tax?", a: "Yes, if her only income is pension and interest from the same bank that pays the pension. She gives that bank a declaration in Form 125 (earlier Form 12BBA), the bank works out and deducts the tax, and she doesn't need to file a return." },
    { q: "I take tuition at home. How do I declare that income?", a: "Tuition fees are business income. Many tutors use the presumptive scheme under section 58, which treats 6% of fees received digitally and 8% of cash fees as profit, so you don't keep full accounts. It is filed in ITR-4. If your actual profit is lower, other rules apply, and we'll explain them." },
    { q: "I missed the July 2026 deadline. Can I still file?", a: "Yes. A belated return for the year that ended in March 2026 can be filed up to 31 December 2026. A late fee applies, ₹1,000 if your total income is up to ₹5 lakh and ₹5,000 above that, and you lose the choice of the old regime for that year." },
  ],

  related: nearbyAreas("P3-A3"),
  relatedTitle: "Income tax consultants in areas near Pammal",

  final: {
    title: "File every Pammal family member's return, the right way",
    sub: "Tell us who earns and from what. We'll pick the regime and form for each person and confirm our fee before we start.",
    message: "Hi National Filings, I'm in Pammal and I'd like help filing income tax returns for my family.",
  },
  catalogue: ["Family income tax return filing in Pammal", "Pensioner and senior citizen ITR filing in Pammal", "Presumptive ITR-4 filing for Pammal shopkeepers and tutors"],
};
