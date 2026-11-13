import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { INCOME_TAX_SERVICE, nearbyAreas } from "./shared";

/**
 * P3-A5 · Income Tax Consultant in Chromepet (/chennai/income-tax-consultant-in-chromepet).
 * Primary keyword: "income tax consultant in chromepet". Angle: students in their first job, interns, freelancers and young
 * founders around the Madras Institute of Technology campus. Unique sections: the presumptive scheme for professions (section 58)
 * and founder salary versus dividend. The company page for this area is P1-A5 and the GST page is P2-A5; this page shares no
 * headings, FAQs, accent or photos with them.
 *
 * Local facts (reused from the verified P1-A5 JSDoc): Chromepet is in Chengalpattu district, PIN 600044, governed by Tambaram City
 * Municipal Corporation; Madras Institute of Technology was founded here in 1949 and is a constituent college of Anna University.
 *
 * Facts checked (Nov 2026):
 * - Income-tax Act, 2025 in force from 1 April 2026 for tax year 2026-27; income of FY 2025-26 is still returned under the 1961 Act.
 *   (en.wikipedia.org/wiki/Income-tax_Act,_2025, taxguru.in/?p=1022779)
 * - New regime slabs, section 202(1): nil up to ₹4 lakh, then 5% to 30% above ₹24 lakh; unchanged by Budget 2026. Rebate, section 156
 *   (formerly 87A): up to ₹60,000 where income does not exceed ₹12 lakh, with marginal relief. A person with business or professional
 *   income who opts out of the new regime can withdraw that option only once (section 202). (eztax.in/income-tax-act-2025/section-202,
 *   /section-156, businesstoday.in Budget 2026 "tax slabs unchanged" 1 Feb 2026)
 * - Standard deduction, section 19 Table Sl. No. 2: ₹75,000 (new regime) or ₹50,000 (old). (eztax.in/income-tax-act-2025/section-19)
 * - Presumptive scheme, section 58(2) Table Sl. No. 3 (formerly 44ADA): specified profession, gross receipts up to ₹50 lakh, or ₹75 lakh
 *   where cash receipts do not exceed 5%; income 50% of gross receipts or higher actual income; available to a resident individual or
 *   partnership firm, not an LLP; no separate expenses or depreciation. (taxguru.in/income-tax/analysis-presumptive-taxation-section-58-income-tax-act-2025.html)
 * - "Specified profession", section 62(4): legal, medical, engineering, architectural, accountancy, technical consultancy, interior
 *   decoration, information technology or company secretary, or any other profession notified by the Board. (eztax.in/income-tax-act-2025/section-62)
 * - Advance tax: payable where tax for the year is ₹10,000 or more (section 404); four instalments by 15 June, 15 Sep, 15 Dec and 15 March,
 *   but section 58 presumptive cases pay the whole amount by 15 March (section 408(2)). (eztax.in/income-tax-act-2025/section-404, /section-408)
 * - Foreign tax credit: Form 67 for income up to 31 March 2026, Form 44 (Rule 76, Income-tax Rules, 2026) from tax year 2026-27; sections
 *   159-160 (formerly 90-91). (taxguru.in/income-tax/foreign-tax-credit-forms-44-45-form-67.html, paasa.com/blog/form-67-now-form-44,
 *   cleartax.in/s/income-tax-act-2025-section-numbers-old-vs-new)
 * - Form 16 becomes Form 130 and Form 26AS becomes Form 168 under the Income-tax Rules, 2026. (freepressjournal.in report on Form 130
 *   and Form 168, studycafe.in/income-tax-act-2025-form-16-26as-and-other-key-forms-...-410548.html)
 * - Stipend: taxed as salary where paid for work by an employer, otherwise as income from other sources; a scholarship granted to meet the
 *   cost of education is exempt. (cleartax.in/s/are-stipends-taxable, taxmann.com/post/blog/taxability-of-scholarship-under-income-tax-act/)
 * - Due dates for FY 2025-26: ITR-1 and ITR-2 31 July 2026; non-audit ITR-3 and ITR-4 31 August 2026 (Finance Act, 2026); belated return
 *   by 31 December; late fee ₹5,000, or ₹1,000 where total income is up to ₹5 lakh (section 428, formerly 234F).
 *   (angelone.in/news/taxation/ay-2026-27-itr-filing-august-31-2026-deadline-..., ascendants.in ITR due dates AY 2026-27, eztax mapper)
 * - Company tax: concessional regime section 200 (formerly 115BAA), 22% plus surcharge and cess. (mayuragr.com/income-tax-act-2025-mapping/)
 * - Dividends taxed at the shareholder's slab rates; TDS on dividends to individuals above ₹10,000 a year (Budget 2025, now section 393).
 *   Loans by a closely held company to a substantial shareholder can be treated as a deemed dividend.
 *   (taxscan.in/complete-tds-rate-and-threshold-limit-changes-proposed-in-union-budget-2025/486363, businesstoday.in TDS rules from April 1 2025)
 * Timelines are estimates.
 */

const whatsapp = "Hi National Filings, I'm in Chromepet and I need help with my first income tax return.";

export const itChromepetPage: LicencePageData = {
  id: "P3-A5",
  service: INCOME_TAX_SERVICE,
  meta: {
    title: "Income Tax Consultant in Chromepet | National Filings",
    description: "Income tax consultant in Chromepet for first-job earners, interns, freelancers paid from abroad and young founders. ITR, section 58 and advance tax.",
  },
  hero: {
    headline: { line1: "Income Tax Consultant", line2Before: "in Chromepet, ", accent: "Your First Return" },
    sub: "First salary from a campus placement, a stipend from an internship, or dollars from a client abroad? We file Chromepet's first returns, set freelancers up under the presumptive scheme where it fits, and help young founders choose between salary and dividend.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "GraduationCap",
    kicker: "Chromepet, Chengalpattu",
    title: "ITR Acknowledgement",
    line: "Your Chromepet Return",
    stamp: "ITR-V verified",
    chips: ["First return filed", "Foreign receipts reported", "TDS refund claimed"],
    steps: ["PAN", "AIS", "Regime", "File", "Verify"],
  },

  benefitsSection: {
    title: "Why a first return from Chromepet is worth doing properly",
    lead: "Your first return sets the pattern. Get the head of income, the regime and the TDS right now, and every later year, loan and visa application is easier.",
    cta: {
      title: "Just got your first payslip or stipend?",
      sub: "Send us your offer or stipend letter and the AIS from the portal. We'll tell you which form fits and whether a refund is due.",
      message: "Hi National Filings, I'm in Chromepet and this is my first income tax return. Can you help?",
    },
  },
  benefits: [
    { icon: "Coins", title: "Intern TDS refunded", line: "Tax cut from a stipend or a short contract comes back when your income is below the tax line." },
    { icon: "Scale", title: "Regime chosen on your numbers", line: "The new regime is the default. The old one only if your deductions really beat it." },
    { icon: "Globe", title: "Foreign receipts reported right", line: "Client payments from abroad shown as income in the year they are earned, in rupees." },
    { icon: "Calculator", title: "Presumptive scheme checked", line: "Developers and engineers within the limit can declare half their receipts as profit." },
    { icon: "CalendarClock", title: "Advance tax planned", line: "Freelancers owing ₹10,000 or more get the dates and amounts worked out early." },
    { icon: "FileCheck2", title: "The right form", line: "ITR-1 for a salary, ITR-3 or ITR-4 once freelance income comes in." },
    { icon: "Landmark", title: "A record for loans and visas", line: "Banks and embassies ask for returns. A clean first one starts the file." },
    { icon: "Rocket", title: "Founder pay planned", line: "Salary, dividend or both, worked out before your company pays anyone." },
  ],

  applicantsSection: {
    title: "Chromepet earners we file returns for",
    lead: "Most of our Chromepet clients are in their twenties. Many earn from two or three sources in the same year, which is exactly where returns go wrong.",
  },
  applicants: [
    { icon: "GraduationCap", title: "Graduates in their first job", line: "Placed from campus, with one Form 16 and a few months of salary." },
    { icon: "IdCard", title: "Interns on stipends", line: "Paid by a company or a lab for a summer or a semester." },
    { icon: "Laptop", title: "Freelance developers", line: "Building apps and sites for clients in India and abroad." },
    { icon: "PenLine", title: "Designers, writers and editors", line: "Creative work billed per project, often through platforms." },
    { icon: "Briefcase", title: "Engineers who consult on the side", line: "Weekend or part-time technical consulting on top of a salary." },
    { icon: "Shuffle", title: "Salary plus side projects", line: "A job and freelance income in the same year, with TDS on only one of them." },
    { icon: "Rocket", title: "Young founders", line: "Directors of new private limited companies drawing their first pay." },
    { icon: "Users", title: "Parents of student earners", line: "Families checking whether a son or daughter now needs to file." },
  ],

  // Photo tiles: add 4 site-unique photos, then uncomment (left out so the page never shows empty tiles)
  // opportunities: {
  //   eyebrow: "Chromepet earners",
  //   title: "Where Chromepet's first incomes come from",
  //   intro: "The Madras Institute of Technology has trained engineers at Chromepet since 1949. Its students and alumni now earn from internships, campus jobs, remote clients and their own companies, often before they turn 25.",
  //   // Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
  //   // Photos not yet chosen: Unsplash search pages could not be fetched from this session. Fill image, alt and credit before publishing.
  //   industries: [
  //     { icon: "GraduationCap", title: "Campus placements", image: "", alt: "", credit: "" },
  //     { icon: "Laptop", title: "Remote client work", image: "", alt: "", credit: "" },
  //     { icon: "IdCard", title: "Internships and stipends", image: "", alt: "", credit: "" },
  //     { icon: "Rocket", title: "First companies", image: "", alt: "", credit: "" },
  //   ],
  // },

  highlights: {
    eyebrow: "Freelancers and professionals",
    title: "The presumptive scheme for Chromepet professionals",
    lead: "Section 58 of the Income-tax Act, 2025, which replaced section 44ADA, lets some professionals declare half their receipts as profit, with no detailed books or audit. It suits many of our freelance clients, but not all of them.",
    items: [
      { icon: "ListTree", label: "Who qualifies", title: "Listed professions only", line: "Legal, medical, engineering, architecture, accountancy, technical consultancy, interior decoration, information technology and company secretary work. Writers and designers need a separate look." },
      { icon: "Percent", label: "The limit", title: "₹50 lakh, or ₹75 lakh", line: "Gross receipts up to ₹50 lakh, rising to ₹75 lakh where cash is no more than 5% of the total. Bank transfers and UPI are not cash.", highlight: true },
      { icon: "Calculator", label: "The profit", title: "50% of receipts", line: "Half your gross receipts is taxed as profit, or more if you actually earned more. No separate claim for your laptop or software." },
      { icon: "UserCheck", label: "Who can opt", title: "Resident individuals and firms", line: "A resident individual or a partnership firm can use it, but an LLP cannot. Advance tax is paid in one go by 15 March." },
    ],
  },

  documentsSection: {
    title: "Documents for ITR filing in Chromepet",
    lead: "Most of this is already on your phone. Send screenshots or PDFs on WhatsApp. Nothing here needs a visit.",
  },
  documents: [
    { icon: "UserRound", title: "About you", items: ["PAN and Aadhaar, linked to each other", "Bank account for the refund", "Login to the income tax portal, if you have one"], hint: "First-time filers often have no portal login yet. Registering takes a few minutes with your PAN and an Aadhaar OTP." },
    { icon: "GraduationCap", title: "For salary and stipend", items: ["Form 16 from each employer (Form 130 from tax year 2026-27)", "Stipend or internship letter", "Payslips for the months worked", "Letter for any scholarship received"], hint: "A scholarship for your studies is treated differently from a stipend paid for work, so we need to see what the letter says." },
    { icon: "Globe", title: "For freelance and foreign work", items: ["Invoices raised to each client", "Bank credit advices or remittance certificates", "Platform payout statements", "Proof of any tax withheld abroad"], hint: "If tax was withheld abroad, the foreign tax credit form has to be filed before the return." },
  ],
  documentsNote: {
    title: "Paid in dollars through a platform?",
    sub: "Send us the platform's yearly statement and your bank credits. We'll match them, convert them to rupees and show the income in the right year.",
    message: "Hi National Filings, I'm a freelancer in Chromepet paid from abroad. Can you check my receipts for my income tax return?",
  },

  processSection: {
    title: "How we file a return for a Chromepet first-timer or freelancer",
    lead: "A first return with one Form 16 usually takes a few days once the papers are in. Freelance returns with foreign clients take a little longer, because every receipt is matched.",
    cta: {
      title: "Start with your AIS",
      sub: "Download the AIS from the portal, or let us help you log in. We'll read it with you and send a written quote.",
      message: "Hi National Filings, can you go through my AIS and file my return from Chromepet?",
    },
  },
  steps: [
    { title: "Income sources listed", time: "Day 1", sub: "Salary, stipend, freelance receipts, foreign payments and interest written down in one place." },
    { title: "AIS and TDS checked", time: "1-2 days", sub: "What employers, banks and Indian clients reported is matched against your own records." },
    { title: "Head of income and form", time: "Same day", sub: "Stipend as salary or other income, freelance work as profession, and the ITR form that fits." },
    { title: "Regime and section 58 check", time: "Same day", sub: "Tax worked out under both regimes, and under the presumptive scheme where you qualify." },
    { title: "Filed and e-verified", time: "1 day", sub: "Return filed and verified with an Aadhaar OTP, with next year's advance tax dates noted." },
  ],
  processNote: "Timelines are estimates. Refunds are processed by the Income Tax Department, and their timing varies.",

  mistakesSection: {
    title: "Income tax mistakes young earners in Chromepet make",
    lead: "None of these are serious if caught in the first year. Left alone for two or three years, they turn into notices.",
  },
  mistakes: [
    { icon: "Globe", title: "Foreign income left out", problem: "A developer reports only the Form 16 salary and leaves out payments from a client in Europe.", fix: "We add every foreign receipt, converted to rupees, and match it with your bank credits." },
    { icon: "Coins", title: "Intern TDS never claimed", problem: "An intern below the taxable limit skips the return, so the TDS the company cut is never refunded.", fix: "We file a short return that brings the TDS back to your bank account." },
    { icon: "Clock", title: "No advance tax on side income", problem: "A salaried engineer earns well on weekend projects with no TDS, and faces interest when filing.", fix: "We work out the tax due and plan the instalments, or one payment by 15 March under section 58." },
    { icon: "Shuffle", title: "Switching regimes every year", problem: "A freelancer flips between the old and new regimes, not knowing that professional income allows only one switch back.", fix: "We compare both properly once and set a regime you can stay with." },
  ],

  costSection: {
    title: "What our ITR fee in Chromepet depends on",
    lead: "Filing a return on the portal is free. Our fee depends on how many income sources you have, and you get it in writing before we start.",
    cta: {
      title: "Get a quote for your return",
      sub: "Tell us your sources: salary, stipend, freelance work, foreign clients or a company. We'll quote for exactly that.",
      message: "Hi National Filings, can I get a quote for my income tax return in Chromepet?",
    },
  },
  costs: [
    { icon: "Landmark", label: "No government fee", title: "Filing the return", line: "The portal charges nothing. Any tax, interest or late fee goes straight to the department.", highlight: true },
    { icon: "GraduationCap", label: "Quoted upfront", title: "Salary or stipend returns", line: "One or two Form 16s, savings interest and a refund claim." },
    { icon: "Laptop", label: "Quoted upfront", title: "Freelance and foreign receipts", line: "Depends on the number of clients, platforms and currencies to match." },
    { icon: "Rocket", label: "Quoted separately", title: "Founder pay and company work", line: "Salary and dividend planning, the company's TDS and its own return." },
  ],

  compliance: {
    eyebrow: "Young founders",
    title: "Paying yourself from a Chromepet startup: salary or dividend",
    lead: "Once your company makes a profit, you can take money out as salary, dividend or both. Each is taxed differently, at the company's end and at yours.",
    items: [
      { icon: "Briefcase", label: "Salary", title: "An expense for the company", line: "Salary reduces the company's profit, and is taxed in your hands at slab rates after the ₹75,000 standard deduction. The company deducts TDS each month." },
      { icon: "Percent", label: "Dividend", title: "Taxed at both ends", line: "Dividend is paid from profit the company has already paid tax on, then taxed again at your slab rate. TDS applies above ₹10,000 a year.", highlight: true },
      { icon: "Building2", label: "Company tax", title: "The rate on what's left", line: "Many companies opt for the concessional rate under section 200, formerly section 115BAA: 22% plus surcharge and cess." },
      { icon: "TriangleAlert", label: "Watch out", title: "Loans from your company", line: "Money a founder with a substantial shareholding takes as a loan can be taxed as a deemed dividend. Plan withdrawals before you make them." },
    ],
  },

  reasonsTitle: "Why Chromepet's young earners choose National Filings",
  reasons: [
    { icon: "GraduationCap", title: "Patient with first-timers", line: "We explain the AIS, the regime and the form, not just file." },
    { icon: "Globe", title: "Foreign receipts are routine", line: "Platform statements and remittance advices matched as regular work." },
    { icon: "MessageCircle", title: "WhatsApp and email", line: "No office visit needed. Most Chromepet clients never come in." },
    { icon: "MapPinned", title: "Office in Kundrathur", line: "Our only office is in Karaima Nagar, Kundrathur, if you'd like to meet." },
    { icon: "ReceiptText", title: "Fee agreed in writing", line: "A clear quote for your return before any work starts." },
    { icon: "Award", title: "Working since 2012", line: "Tax, registration and compliance for Chennai earners and businesses." },
  ],

  faqTitle: "ITR filing in Chromepet: first-timers and freelancers ask",
  faqs: [
    { q: "I got my first job this year. Do I have to file a return?", a: "If your income for the year, after the standard deduction, is above ₹4 lakh, yes. Under the new regime the rebate means no tax if your income is up to ₹12 lakh, but you still have to file once you cross ₹4 lakh. Filing is also how you get back any excess TDS, and banks ask for returns when you apply for a loan." },
    { q: "Is my internship stipend taxable?", a: "Usually, yes. A stipend paid by a company for work is generally taxed as salary, and one paid without an employer relationship is taxed as other income. A scholarship given to meet the cost of your education is exempt. Many interns end up owing nothing because of the rebate, but filing gets back any TDS that was deducted." },
    { q: "I freelance as a developer. Can I use the presumptive scheme?", a: "Often, yes. Information technology is one of the listed professions under section 58 of the Income-tax Act, 2025, which replaced section 44ADA. If you are resident and your gross receipts are up to ₹50 lakh, or ₹75 lakh where no more than 5% came in cash, you can declare 50% as profit without detailed books. We check whether that suits your actual costs before you choose." },
    { q: "How are payments from foreign clients taxed?", a: "As a resident, your worldwide income is taxable in India, so payments from clients abroad are part of your professional income for the year you earn them, converted to rupees. If the client's country withheld tax, you may get credit for it, but the foreign tax credit form (Form 67, and Form 44 from tax year 2026-27) must be filed before the return. GST on exports is a separate matter." },
    { q: "Should I pay myself a salary or a dividend from my startup?", a: "It depends on the company's profit and your other income. Salary is deductible for the company and taxed at your slab rates. Dividend comes out of profit the company has already paid tax on, and is taxed again in your hands. A mix often works, but we compare the options on your numbers before the company pays anything." },
    { q: "Does the old Act or the new one apply to my return?", a: "It depends on the year. Income earned up to 31 March 2026, the financial year 2025-26, follows the Income-tax Act, 1961, even when the return is filed later in 2026. Income from 1 April 2026 falls in tax year 2026-27 under the Income-tax Act, 2025, with new section and form numbers, such as Form 130 in place of Form 16. The slab rates did not change." },
    { q: "I missed the filing deadline this year. What now?", a: "You can still file a belated return for the financial year 2025-26 until 31 December 2026. A late fee applies, ₹1,000 if your income is up to ₹5 lakh and ₹5,000 otherwise, plus interest on any unpaid tax. Send us your papers on WhatsApp and we'll tell you what's due." },
  ],

  related: nearbyAreas("P3-A5"),
  relatedTitle: "Income tax consultants in areas near Chromepet",

  final: {
    title: "File your first Chromepet return the right way",
    sub: "Tell us how you earned this year: salary, stipend, freelance work or your own company. We'll pick the form and regime, claim your TDS and confirm our fee before filing.",
    message: "Hi National Filings, I'm in Chromepet and I'd like help filing my income tax return.",
  },
  catalogue: ["First income tax return filing in Chromepet", "ITR filing for freelancers and professionals in Chromepet", "Founder salary and dividend tax planning in Chromepet"],
};
