import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { INCOME_TAX_SERVICE, nearbyAreas } from "./shared";

/**
 * P3-A10 · Income Tax Consultant in Gerugambakkam (/chennai/income-tax-consultant-in-gerugambakkam).
 * Primary keyword: "income tax consultant in gerugambakkam". Angle: salaried professionals who bought new apartments and run
 * side businesses from home. Unique sections: salary plus side income in one return (form and regime choice), advance tax
 * once side income grows, home loan interest and principal by regime and by self-occupied or let-out, and the TDS a buyer
 * deducts on a flat of ₹50 lakh or more. Kept distinct from the company page (P1-A10, structures and employment contracts)
 * and the GST page (P2-A10, whether a side business needs a GSTIN).
 *
 * Local facts reused from P1-A10 (checked Oct 2026): Gerugambakkam lies on the Kundrathur road about 4 km from Porur
 * junction, in Kundrathur taluk, Kancheepuram district, and is among the villages annexed to Kundrathur Municipality; new
 * apartment projects are being built and sold there. PIN not stated (sources disagree).
 *
 * Facts checked (Nov 2026), Income-tax Act, 2025 (in force from 1 April 2026):
 * - Section 202 (formerly 115BAC): new regime is the default; slabs nil to ₹4 lakh, then 5% steps to 30% above ₹24 lakh.
 *   202(2)(a)(v): no deduction under section 22(1)(b) for self-occupied property (section 21(6)); 202(2)(a)(xii): Chapter
 *   VIII deductions (incl. section 123) not allowed; 202(2)(b)(ii): house property loss can't be set off against another
 *   head, and 202(3) treats it as given full effect (no carry forward). 202(4)(a): a person with business or profession
 *   income opts out by the return due date; the option continues, can be withdrawn only once, and after that can't be
 *   exercised again unless business income stops. 202(4)(b): others choose with each return. (Act text, taxsutra print.)
 * - Section 22 (formerly 24(b)): interest on borrowed capital deductible; 22(1)(c) pre-construction interest in five equal
 *   instalments from the year of acquisition or completion; 22(2) cap for self-occupied property ₹2 lakh where acquisition or
 *   construction is completed within five years from the end of the tax year of borrowing (with lender's certificate), else
 *   ₹30,000; 22(5) aggregate cap ₹2 lakh. No cap on interest for let-out property. (Act text, taxsutra print.)
 * - Section 123 (formerly 80C): home loan principal repayment qualifies within the ₹1.5 lakh limit; old regime only
 *   (ClearTax, Business Today).
 * - Section 393(1) Table Sl. No. 3(i) (formerly 194-IA): buyer deducts 1% of the consideration or stamp duty value,
 *   whichever is higher, where it is ₹50 lakh or more (eztax.in s.393 text; taxguru.in). Form 141 replaced Form 26QB from
 *   1 April 2026 (property TDS in its schedule), no TAN needed for a resident seller; seller's certificate is Form 132,
 *   replacing Form 16B (taxguru.in, jurishour.in, busy.in). Non-resident sellers fall under section 393(2).
 * - Section 404: advance tax where tax for the year is ₹10,000 or more. Section 408(1): four instalments 15/45/75/100% by
 *   15 June, Sept, Dec, March; 408(2): presumptive cases under section 58(2) Sl. No. 1 or 3 pay the whole by 15 March.
 *   Interest for shortfall under sections 424 and 425 (formerly 234B and 234C). (Act text, taxsutra; carajput.com map.)
 * - Section 58(2) Sl. No. 1 (formerly 44AD): 6% of receipts by banking or online mode, 8% of the rest, turnover up to ₹2 crore
 *   (₹3 crore if cash is within 5%); Sl. No. 3 (formerly 44ADA): 50% of gross receipts for specified professions up to
 *   ₹50 lakh (₹75 lakh if cash is within 5%). (Act text.)
 * - ITR forms: returns for FY 2025-26 used ITR-3 (business or profession income) and ITR-4 (presumptive income), notified
 *   April 2026 under the 1961 Act; forms for income from April 2026 are to be notified under the 2025 Act. Finance Act
 *   2026 moved non-audit business return due dates to 31 August; salary-only returns stay at 31 July (Angel One,
 *   JM Financial, Taxscan).
 * No fee figures. Timelines are estimates.
 */

const whatsapp = "Hi National Filings, I'm salaried, live in Gerugambakkam and have side income. Can you file my income tax return?";

export const itGerugambakkamPage: LicencePageData = {
  id: "P3-A10",
  service: INCOME_TAX_SERVICE,
  meta: {
    title: "Income Tax Consultant in Gerugambakkam | National Filings",
    description: "Income tax consultant in Gerugambakkam for salaried flat owners with side income. Home loan claims, property TDS, advance tax and the right ITR form.",
  },
  hero: {
    headline: { line1: "Income Tax Consultant", line2Before: "in Gerugambakkam, ", accent: "Salary and Sideline" },
    sub: "A new flat, a home loan and some consulting on the side change your return more than you'd think. We file salary and side income together, claim the home loan the right way for your regime and handle the TDS you owe when buying the flat.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "Home",
    kicker: "Gerugambakkam, Chennai",
    title: "ITR Acknowledgement",
    line: "Your Gerugambakkam Return",
    stamp: "E-verified",
    chips: ["Salary plus side income", "Home loan claimed", "Regime compared"],
    steps: ["Form 16", "Side income", "Home loan", "Regime", "File"],
  },

  benefitsSection: {
    title: "What a tax consultant sorts out for a Gerugambakkam household",
    lead: "Form 16 covers only the salary. The flat, the loan and the side business sit outside it, and that is where most returns from here go wrong.",
    cta: {
      title: "Bought a flat this year?",
      sub: "Send us the sale agreement, payment schedule and loan sanction letter. We'll tell you what TDS you owe and what you can claim.",
      message: "Hi National Filings, I bought a flat in Gerugambakkam this year. What income tax steps do I need to take?",
    },
  },
  benefits: [
    { icon: "FileText", title: "One return for both incomes", line: "Salary and side business filed together on the form that fits them." },
    { icon: "Scale", title: "Regime chosen with care", line: "With business income, switching back and forth is restricted, so we plan it once." },
    { icon: "Home", title: "Home loan claimed right", line: "Interest and principal claimed only where your regime and the flat's use allow it." },
    { icon: "Clock", title: "Pre-construction interest", line: "Interest paid while the flat was being built spread over five years from handover." },
    { icon: "Stamp", title: "Property TDS done", line: "1% deducted, paid and reported for flats of ₹50 lakh or more, so the seller gets credit." },
    { icon: "CalendarClock", title: "Advance tax on side income", line: "Instalments worked out once tax beyond your employer's TDS reaches ₹10,000." },
    { icon: "Laptop", title: "Business expenses kept honest", line: "Laptop, internet and home office costs claimed only where they're genuine." },
    { icon: "SearchCheck", title: "AIS matched line by line", line: "Client payments, rent and interest checked against what the department sees." },
  ],

  applicantsSection: {
    title: "Gerugambakkam taxpayers we file for",
    lead: "Most of our clients here have a salary, a flat bought in the last few years and something earning on the side. The mix is what makes each return different.",
  },
  applicants: [
    { icon: "Laptop", title: "IT staff with freelance work", line: "Salaried developers billing weekend projects to clients in India or abroad." },
    { icon: "Briefcase", title: "Consultants on the side", line: "HR, finance and training professionals with a few paying clients." },
    { icon: "KeyRound", title: "First-time flat buyers", line: "Families who took possession of a new apartment along the Kundrathur road." },
    { icon: "Home", title: "Owners letting out a flat", line: "People who moved and now earn rent from their first home." },
    { icon: "Users", title: "Couples with a joint loan", line: "Co-owners who can each claim their share of interest and principal." },
    { icon: "GraduationCap", title: "Tutors and coaches", line: "Teachers taking evening and weekend classes alongside a job." },
    { icon: "ShoppingCart", title: "Online sellers", line: "Spouses running a small store from home, filing alongside a salaried partner." },
    { icon: "PenLine", title: "Designers and creators", line: "Interior, graphic and content work billed from a home studio." },
  ],

  // Photo tiles: add 4 site-unique photos, then uncomment (left out so the page never shows empty tiles)
  // opportunities: {
  //   eyebrow: "Local households",
  //   title: "The new-flat households behind Gerugambakkam's tax questions",
  //   intro: "Gerugambakkam has filled with apartment blocks between Porur and Kundrathur, bought mostly by salaried families on home loans. Many of them now earn something extra from a spare room, which is when the return stops being a Form 16 copy.",
  //   // Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
  //   // PHOTOS NEEDED: Unsplash search was unreachable from this session (bot check, no WebFetch). Fill image, alt and credit before publishing.
  //   industries: [
  //     { icon: "Home", title: "New apartment buyers", image: "", alt: "", credit: "" },
  //     { icon: "Laptop", title: "Side work after office", image: "", alt: "", credit: "" },
  //     { icon: "KeyRound", title: "Home loans and possession", image: "", alt: "", credit: "" },
  //     { icon: "Calculator", title: "Household tax planning", image: "", alt: "", credit: "" },
  //   ],
  // },

  highlights: {
    eyebrow: "Home loan and regime",
    title: "What your Gerugambakkam home loan saves, regime by regime",
    lead: "Under the Income-tax Act, 2025, the new regime is the default and most home loan benefits sit in the old one. How you use the flat matters as much as which regime you pick.",
    items: [
      { icon: "Home", label: "Self-occupied, old regime", title: "Interest up to ₹2 lakh", line: "Interest on a loan for the flat you live in is deductible up to ₹2 lakh a year, if construction is completed within five years from the end of the year you borrowed. Pre-construction interest is spread over five years within the same cap." },
      { icon: "Wallet", label: "Old regime only", title: "Principal within ₹1.5 lakh", line: "Principal repaid on the loan counts under section 123, which replaced 80C, within the same ₹1.5 lakh limit as PF, insurance and other savings." },
      { icon: "Scale", label: "New regime", title: "Self-occupied gets nothing", line: "The new regime allows no interest or principal deduction for the flat you live in. Its lower rates may still leave you better off, so we work out both.", highlight: true },
      { icon: "KeyRound", label: "Let-out flat", title: "Full interest, limited set-off", line: "On a rented-out flat, interest is deductible without the ₹2 lakh cap in either regime. Under the new regime, though, a resulting loss can't reduce your salary and isn't carried forward." },
    ],
  },

  documentsSection: {
    title: "What we need from Gerugambakkam clients to file",
    lead: "Clear photos or PDFs over WhatsApp are enough. Nothing here needs you to take leave.",
  },
  documents: [
    { icon: "Briefcase", title: "For salary and side income", items: ["Form 16 from your employer", "Invoices or a list of client payments", "Bank statements for the year", "Expense bills for the side business"], hint: "Freelance receipts from Indian clients often show up in AIS with TDS. We match every one." },
    { icon: "Home", title: "For the flat and home loan", items: ["Sale agreement or sale deed", "Loan interest and principal certificate", "Date of possession or completion", "Rent agreement, if the flat is let out"], hint: "If you're a co-owner and co-borrower, each of you claims your own share. Tell us the split." },
    { icon: "Stamp", title: "If you bought the flat this year", items: ["Payment schedule to the builder or seller", "Seller's PAN", "Stamp duty value from the registration", "Any property TDS already paid"], hint: "TDS is due on each payment once the flat is ₹50 lakh or more, including instalments to the builder." },
  ],
  documentsNote: {
    title: "Paid the builder without deducting TDS?",
    sub: "Send us the payment schedule and the seller's PAN. We'll work out what was missed and file it with the interest due.",
    message: "Hi National Filings, I bought a flat in Gerugambakkam and didn't deduct TDS on the payments. What should I do?",
  },

  processSection: {
    title: "How we file a Gerugambakkam return with salary, side income and a home loan",
    lead: "Calls happen before or after office, documents move over WhatsApp, and the return is e-verified from your phone.",
    cta: {
      title: "Book an evening call",
      sub: "Tell us a time after work. We'll go through your salary, side income and loan, and send a written quote.",
      message: "Hi National Filings, I work during the day. Can we talk this evening about my income tax return? I live in Gerugambakkam.",
    },
  },
  steps: [
    { title: "Evening call", time: "Day 1", sub: "Salary, side income, flat and loan. We agree the scope and send a written quote." },
    { title: "Income matched", time: "1-2 days", sub: "Form 16, client payments and interest checked against AIS and Form 26AS." },
    { title: "Side income worked out", time: "1-2 days", sub: "Actual profit after expenses, or the presumptive figure where it fits better." },
    { title: "Both regimes compared", time: "Same day", sub: "Tax with and without the home loan claims, before the regime choice is locked in." },
    { title: "Filed and verified", time: "Same day", sub: "Return filed on the right form, e-verified with Aadhaar OTP, acknowledgement sent." },
  ],
  processNote: "Timelines are estimates. A missing interest certificate, AIS mismatch or pending property TDS can add time.",

  mistakesSection: {
    title: "Income tax mistakes we see from Gerugambakkam flat owners",
    lead: "These usually come from filing the side income and the flat as an afterthought to Form 16. Each one is fixable.",
  },
  mistakes: [
    { icon: "FileWarning", title: "Side income on a salary-only form", problem: "A developer billed overseas clients but filed the simple salaried return, which has no place for business income.", fix: "We file on the form that carries both salary and business or professional income." },
    { icon: "Stamp", title: "No TDS on builder instalments", problem: "A couple paid the builder of a ₹72 lakh flat in stages and deducted nothing.", fix: "We work out 1% on each payment, file the missed statements with interest and get the builder's credit sorted." },
    { icon: "Home", title: "Home loan claimed in the new regime", problem: "Interest on the flat they live in was claimed while the return was filed under the default new regime.", fix: "We compare both regimes first, then claim the loan only where the chosen regime allows it." },
    { icon: "CalendarClock", title: "Side income tax left to July", problem: "A consultant paid all tax on fees at filing time and was charged interest for the missed instalments.", fix: "We set up advance tax dates once your side income starts adding up." },
  ],

  costSection: {
    title: "What income tax filing costs for a Gerugambakkam household",
    lead: "There is no government fee to file a return. Our fee depends on how many income sources you have and whether a flat purchase or sale is involved, and we write it down first.",
    cta: {
      title: "Get a quote for your return",
      sub: "Tell us your income sources and whether you bought or let out a flat. We'll send a written quote.",
      message: "Hi National Filings, can I get a quote for my income tax return? I'm salaried with side income in Gerugambakkam.",
    },
  },
  costs: [
    { icon: "FileText", label: "Quoted upfront", title: "Salary with side income", line: "Depends on the number of clients and whether you keep books or use the presumptive scheme." },
    { icon: "Home", label: "Quoted upfront", title: "House property schedules", line: "Self-occupied or let-out flats, joint loans and pre-construction interest.", highlight: true },
    { icon: "Stamp", label: "Quoted upfront", title: "Property TDS for buyers", line: "1% worked out on each payment, paid and reported, with the seller's certificate." },
    { icon: "Mail", label: "Quoted per case", title: "Notices and corrections", line: "Replies to mismatch notices or updated returns, depending on the work." },
  ],

  compliance: {
    eyebrow: "Through the year",
    title: "The tax calendar for a salaried Gerugambakkam household with side income",
    lead: "Salary TDS runs on its own. The side income and the flat bring a few more dates, which we track for you.",
    items: [
      { icon: "CalendarClock", label: "15 June, Sept, Dec, March", title: "Advance tax on side income", line: "Four instalments, or one by 15 March if you use the presumptive scheme." },
      { icon: "Stamp", label: "After each payment", title: "Property TDS", line: "Deducted and reported for every payment on a flat of ₹50 lakh or more." },
      { icon: "Scale", label: "By the return due date", title: "Regime choice", line: "With business income, the old regime must be chosen by the due date and sticks." },
      { icon: "FileText", label: "31 July or 31 August", title: "Your return", line: "Salary-only returns by 31 July, returns with business income and no audit by 31 August." },
    ],
  },

  reasonsTitle: "Why Gerugambakkam families choose National Filings for income tax",
  reasons: [
    { icon: "Clock", title: "Calls around your job", line: "Early morning or evening, on your schedule." },
    { icon: "Home", title: "Home loans understood", line: "Joint loans, possession dates and pre-construction interest handled properly." },
    { icon: "MessageCircle", title: "Everything on WhatsApp", line: "Documents, figures and the final return shared on your phone." },
    { icon: "MapPinned", title: "Office down the road", line: "Karaima Nagar, Kundrathur, along the Kundrathur road." },
    { icon: "ReceiptText", title: "Fees in writing", line: "A written quote before we start any work." },
    { icon: "Award", title: "Experience since 2012", line: "Tax work for salaried professionals and home businesses across Chennai." },
  ],

  faqTitle: "Income tax in Gerugambakkam: questions from salaried flat owners",
  faqs: [
    { q: "I'm salaried and earn from freelance projects too. Which ITR form do I file?", a: "Salary plus business or professional income can't go on the simple salaried form. If you work out actual profit from your receipts and expenses, it is ITR-3. If you use the presumptive scheme, such as 50% of receipts for an eligible profession, and your total income is within the form's limit, ITR-4 can be used. These are the forms for returns filed in 2026. Forms for income earned from April 2026 are being issued under the new Act, and we use whichever applies to your year." },
    { q: "Do I need to pay advance tax on my side income?", a: "Yes, once your tax for the year after TDS comes to ₹10,000 or more. Your employer's TDS covers only the salary. Advance tax is paid in four parts by 15 June, 15 September, 15 December and 15 March. If you use the presumptive scheme for a business or an eligible profession, you can pay the whole amount by 15 March. Short or late payments attract interest." },
    { q: "Can I claim home loan interest under the new regime?", a: "Not for the flat you live in. The new regime under section 202 of the Income-tax Act, 2025 allows no deduction for interest or principal on a self-occupied home. If the flat is let out, interest can be deducted from the rent, but any loss can't be set against your salary. In the old regime you can claim up to ₹2 lakh of interest on a self-occupied flat and principal within the ₹1.5 lakh limit. We calculate both before you choose." },
    { q: "I have business income. Can I switch regimes every year?", a: "No. With business or professional income, you opt out of the new regime by the return due date, and that choice carries on to later years. You can go back to the new regime only once, and after that you can't opt out again unless the business income stops. A salaried person without business income can choose afresh with each return." },
    { q: "I'm buying a flat for ₹65 lakh. What TDS do I have to deduct?", a: "As the buyer, you deduct 1% of the price or the stamp duty value, whichever is higher, because it is ₹50 lakh or more. For a builder flat, deduct it on each instalment you pay. You pay it and report it on Form 141, which replaced Form 26QB from April 2026, using your PAN. No TAN is needed when the seller is resident. The seller then gets a Form 132 certificate. If the seller is a non-resident, different rules apply, so talk to us before paying." },
    { q: "My flat was handed over this year but I paid interest during construction. Is that lost?", a: "No. Interest paid before the year you got possession is spread over five equal parts, starting from that year. For a self-occupied flat in the old regime, these parts count within the ₹2 lakh yearly cap. For a let-out flat, they are added to the interest you deduct from the rent." },
    { q: "Do you have an office in Gerugambakkam?", a: "No. Our only office is in Karaima Nagar, Kundrathur, on the road that runs through Gerugambakkam. Clients here work with us over WhatsApp and email, and are welcome to visit if they'd like to meet." },
  ],

  related: nearbyAreas("P3-A10"),
  relatedTitle: "Income tax consultants in areas near Gerugambakkam",

  final: {
    title: "Get your Gerugambakkam salary, side income and home loan filed right",
    sub: "Tell us what you earn, what you've bought and how you use the flat. We'll compare the regimes and file one clean return.",
    message: "Hi National Filings, I live in Gerugambakkam and need help filing my income tax with salary, side income and a home loan.",
  },
  catalogue: ["Income tax return filing in Gerugambakkam for salaried professionals", "Home loan and property TDS help in Gerugambakkam", "Advance tax and side income filing in Gerugambakkam"],
};
