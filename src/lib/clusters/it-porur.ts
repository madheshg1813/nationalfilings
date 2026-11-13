import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { INCOME_TAX_SERVICE, nearbyAreas } from "./shared";

/**
 * P3-A7 · Income Tax Consultant in Porur (/chennai/income-tax-consultant-in-porur).
 * Primary keyword: "income tax consultant in porur". We have no office in Porur; clients work with us over WhatsApp and
 * email, and can visit our Kundrathur office.
 * Angle: doctors and hospital staff around the Sri Ramachandra campus (salary plus private practice, consultant fees,
 * the presumptive scheme for professionals, books and audit), and IT employees in the Porur and Manapakkam belt (RSUs and
 * ESOPs of foreign parents, Schedule FA and the Black Money Act penalty, credit for tax paid abroad). Kept distinct from
 * the Porur company page (P1-A7), the Porur GST page (P2-A7) and the Income Tax pillar.
 *
 * Facts checked (Nov 2026):
 * - The Income-tax Act, 2025 applies from 1 April 2026 (tax year 2026-27). Returns filed during 2026 are for FY 2025-26
 *   and still follow the 1961 Act, so the page says "from tax year 2026-27" where a new section or form is named.
 * - Presumptive scheme for professionals (formerly s.44ADA) is now in section 58 of the 2025 Act: 50% of gross receipts
 *   deemed as profit; receipts limit ₹50 lakh, or ₹75 lakh where cash receipts are within 5%. Medical is a specified
 *   profession. https://taxguru.in/income-tax/analysis-presumptive-taxation-section-58-income-tax-act-2025.html ,
 *   https://studycafe.in/presumptive-taxation-under-new-income-tax-act-2025-420509.html
 * - Books of account (formerly s.44AA) are section 62; tax audit (formerly s.44AB) is section 63, ₹50 lakh gross receipts
 *   for professionals; declaring less than the presumptive profit with income above the basic exemption brings books and
 *   audit; the audit report is Form 26 from tax year 2026-27 (replacing 3CA/3CB/3CD). No books threshold number stated.
 *   https://www.incometaxindia.gov.in/documents/d/guest/form-26-faqs ,
 *   https://studycafe.in/income-tax-act-2025-low-profit-declaration-now-requires-tax-audit-420283.html
 * - Due dates: Finance Act 2026 gave non-audit business and professional returns until 31 August (ITR-1/ITR-2 stay at
 *   31 July); audit cases 31 October. Revised return window extended to 31 March (fee after nine months).
 *   https://www.taxbuddy.com/blog/itr-deadline-2026-who-must-file-by-july-31-and-who-gets-time-till-august-31 ,
 *   https://www.business-standard.com/finance/personal-finance/revised-return-deadline-extended-to-help-belated-filers-global-earners-126020501034_1.html
 * - Advance tax: four instalments (15 June, 15 September, 15 December, 15 March); under the presumptive scheme the whole
 *   amount by 15 March (as on the Income Tax pillar page).
 * - RSUs and ESOPs: taxed as a salary perquisite on allotment (fair market value less amount paid), with TDS by the employer;
 *   the later sale is a capital gain with the perquisite value as cost. Foreign shares held abroad must be reported in
 *   Schedule FA. https://www.taxaj.com/learn/?p=90907
 * - Schedule FA non-disclosure: ₹10 lakh penalty per year under the Black Money Act; non-immovable foreign assets with an
 *   aggregate value up to ₹20 lakh are outside the penalty (Finance (No.2) Act 2024) and Budget 2026 gave matching
 *   retrospective relief from prosecution. https://www.taxscan.in/top-stories/budget-2026-retrospective-relief-under-black-money-act-for-foreign-assets-below-20-lakh-1442608 ,
 *   https://caalley.com/news-updates/indian-news/7-big-income-tax-changes-for-2026-27-that-may-reduce-penalties-for-small-mistakes
 * - FAST-DS 2026 (Foreign Assets of Small Taxpayers Disclosure Scheme): notified 14 Aug 2026, open 16 Aug to 31 Dec 2026.
 *   Payment figures differ across sources, so none are stated.
 *   https://businesstoday.in/personal-finance/story/foreign-assets-disclosure-scheme-opens-today-who-can-declare-undisclosed-assets-and-income-549425-2026-08-16 ,
 *   https://www.outlookbusiness.com/economy-and-policy/small-taxpayers-with-foreign-assets-to-face-30-tax-plus-penalty-disclosure-scheme-opens-till-dec-31
 * - Relief for tax paid abroad: treaty relief (formerly s.90/90A) is section 159 of the 2025 Act; Form 67 becomes Form 44
 *   from tax year 2026-27 (Rule 76 of the Income-tax Rules, 2026); Form 67 still used for FY 2025-26 returns.
 *   https://www.incometaxindia.gov.in/faqs-and-guidance-notes-on-forms-as-per-income-tax-rules-2026 ,
 *   https://taxguru.in/income-tax/foreign-tax-credit-forms-44-45-form-67.html
 * Local facts reused from porur.ts JSDoc: PIN 600116, Chennai district, Sri Ramachandra Institute of Higher Education and
 * Research (health sciences university and medical college), DLF Cybercity at Ramapuram/Manapakkam, Commerzone on Mount
 * Poonamallee Road. Timelines are estimates.
 */

const whatsapp = "Hi National Filings, I'm in Porur and need help with my income tax return. Can we talk?";

export const itPorurPage: LicencePageData = {
  id: "P3-A7",
  service: INCOME_TAX_SERVICE,
  meta: {
    title: "Income Tax Consultant in Porur, Chennai | National Filings",
    description: "Income tax consultant in Porur for doctors and IT staff. Hospital pay plus practice, RSUs, Schedule FA and foreign tax credit, all filed right.",
  },
  hero: {
    headline: { line1: "Income Tax Consultant", line2Before: "in Porur, ", accent: "Practice to RSUs" },
    sub: "A doctor drawing a hospital salary and running an evening clinic. A developer whose US parent company allots shares every quarter. Porur returns are rarely simple. We put every income in the right place and report what you hold abroad.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "Stethoscope",
    kicker: "Porur, Chennai 600116",
    title: "ITR Acknowledgement",
    line: "Your Porur Return",
    stamp: "ITR-V verified",
    chips: ["Salary plus practice", "RSUs in Schedule FA", "Foreign tax credit"],
    steps: ["Payslips", "Practice", "Abroad", "Compute", "E-verify"],
  },

  benefitsSection: {
    title: "Why Porur doctors and tech employees need more than a basic ITR",
    lead: "Form 16 covers only the salary. Practice receipts, shares allotted abroad and tax already paid overseas all sit outside it, and each one has its own schedule in the return.",
    cta: {
      title: "Hospital salary and a private practice?",
      sub: "Send your Form 16 and a rough total of your clinic or visiting fees. We'll tell you which return form and which scheme fits.",
      message: "Hi National Filings, I'm a doctor in Porur with salary and private practice income. Which ITR should I file?",
    },
  },
  benefits: [
    { icon: "Stethoscope", title: "Salary and fees kept apart", line: "Hospital salary under one head, consulting and clinic receipts under another." },
    { icon: "Calculator", title: "Presumptive or books, compared", line: "We work out tax both ways on your practice receipts before choosing." },
    { icon: "ReceiptText", title: "Fee TDS traced", line: "Every hospital and lab that deducted TDS on your fees matched with AIS." },
    { icon: "TrendingUp", title: "RSU income counted once", line: "Shares already taxed in your payslip are not taxed again on sale." },
    { icon: "Globe", title: "Foreign shares reported", line: "Broker accounts and ESOPs abroad listed in Schedule FA, every year." },
    { icon: "Banknote", title: "Tax paid abroad credited", line: "US tax on dividends or sale proceeds claimed against Indian tax." },
    { icon: "CalendarClock", title: "Advance tax planned", line: "Practice income and share sales rarely have enough TDS. We plan the instalments." },
    { icon: "MessageCircle", title: "Between shifts, on WhatsApp", line: "Send papers from the ward or the office. No trips needed." },
  ],

  applicantsSection: {
    title: "Porur taxpayers whose returns we prepare",
    lead: "Most of our Porur clients work either in healthcare around the university campus or in the IT parks along Mount Poonamallee Road.",
  },
  applicants: [
    { icon: "Stethoscope", title: "Salaried doctors with a clinic", line: "Hospital salary plus evening or weekend private practice." },
    { icon: "Briefcase", title: "Visiting consultants", line: "Paid fees by several hospitals, with TDS deducted on each." },
    { icon: "GraduationCap", title: "Faculty and resident doctors", line: "Teaching salary, stipend and occasional fees for talks or reviews." },
    { icon: "Users", title: "Nurses and allied health staff", line: "Salary returns, with overseas job plans or income from abroad." },
    { icon: "Laptop", title: "IT employees with RSUs", line: "Shares of a foreign parent allotted through the payroll." },
    { icon: "Coins", title: "Employees with ESOPs", line: "Options exercised, shares sold, and the gain worked out correctly." },
    { icon: "Plane", title: "Returning from an onsite stint", line: "Salary earned abroad, foreign tax paid and residential status to settle." },
    { icon: "Home", title: "Professionals with rent and investments", line: "A flat let out, mutual funds and fixed deposits on top of salary." },
  ],

  opportunities: {
    eyebrow: "Porur's taxpayers",
    title: "Hospital wards and IT parks, two kinds of Porur return",
    intro: "Porur's income comes from the hospitals around the university campus and the IT parks along Mount Poonamallee Road. Each brings income that Form 16 alone does not cover.",
    // Pexels licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "Stethoscope", title: "Doctors with a practice", image: "https://images.pexels.com/photos/19438560/pexels-photo-19438560.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Doctor in a white coat with a stethoscope, arms folded", credit: "Oys Photography / Pexels" },
      { icon: "Users", title: "Nurses and hospital staff", image: "https://images.pexels.com/photos/6129685/pexels-photo-6129685.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Nurse in blue scrubs holding the hand of a patient in a hospital bed", credit: "RDNE Stock project / Pexels" },
      { icon: "Laptop", title: "IT employees", image: "https://images.pexels.com/photos/18935831/pexels-photo-18935831.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Programmer writing code on a desktop screen with a laptop below it", credit: "Pexels" },
      { icon: "TrendingUp", title: "RSUs and foreign shares", image: "https://images.pexels.com/photos/7873553/pexels-photo-7873553.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Phone showing a share price chart on top of printed financial statements", credit: "Leeloo The First / Pexels" },
    ],
  },

  highlights: {
    eyebrow: "Doctors' income tax",
    title: "How a Porur doctor's income is taxed",
    lead: "The same doctor can earn a salary, professional fees and clinic income in one year. Each is taxed differently, and getting the head right decides what you can claim.",
    items: [
      { icon: "IdCard", label: "Salary", title: "Employed by the hospital", line: "Shown in Form 16 and taxed as salary. Expenses of your practice can't be set off against it." },
      { icon: "Briefcase", label: "Profession", title: "Consultant or visiting fees", line: "Fees paid by hospitals and labs on a contract basis are professional income, with TDS on fees shown in AIS, not in Form 16." },
      { icon: "Calculator", label: "Section 58", title: "Presumptive scheme for practice", line: "Declare 50% of receipts as profit, with no books. Open when receipts are within ₹50 lakh, or ₹75 lakh if cash is within 5%.", highlight: true },
      { icon: "ClipboardCheck", label: "Sections 62 and 63", title: "Books and tax audit", line: "Declaring less than the presumptive profit, or receipts above the limit, brings books of account and possibly a tax audit." },
    ],
  },

  documentsSection: {
    title: "What Porur doctors and IT employees send us",
    lead: "Everything can come as PDFs or photos on WhatsApp or email. For RSUs and foreign income, the broker's statements matter as much as your payslips.",
  },
  documents: [
    { icon: "Stethoscope", title: "For doctors", items: ["Form 16 from the hospital", "TDS certificates for consultant fees", "Clinic receipts register or bank statement", "Rent, staff and equipment bills, if keeping books"], hint: "If you are on the presumptive scheme, total receipts are what we need most. Bills matter only when you keep books." },
    { icon: "Laptop", title: "For IT employees with shares", items: ["Form 16 and payslips showing RSU perquisites", "Broker account statements for the calendar year", "Sale confirmations and dividend statements", "US tax forms showing tax withheld"], hint: "Schedule FA follows the calendar year, so we ask for statements from January to December." },
    { icon: "IdCard", title: "For everyone", items: ["PAN and Aadhaar", "AIS and Form 26AS (we can download them with you)", "Bank account details for the refund", "Last year's return, if filed elsewhere"], hint: "Last year's return shows us what was reported abroad before, so this year's schedules stay consistent." },
  ],
  documentsNote: {
    title: "Not sure which share statements to download?",
    sub: "Tell us your employer's broker platform. We'll list the exact statements and the date range we need.",
    message: "Hi National Filings, I'm in Porur with RSUs from my employer. Which statements do you need for my return?",
  },

  processSection: {
    title: "How we file a Porur doctor's or IT employee's return",
    lead: "All of it happens over WhatsApp, email and a short call. If you'd rather sit down with us, our office is in Kundrathur.",
    cta: {
      title: "Start with a ten-minute call",
      sub: "Tell us your sources of income and anything you hold abroad. We'll send a checklist and a written quote.",
      message: "Hi National Filings, I'm in Porur. Can we have a quick call about my income tax return?",
    },
  },
  steps: [
    { title: "Map your income", time: "Day 1", sub: "Salary, fees, practice, shares, rent and anything earned or held abroad, listed on one sheet." },
    { title: "Collect and match", time: "1-3 days", sub: "Form 16, fee TDS, broker statements and AIS compared, with mismatches flagged to you." },
    { title: "Work out the tax", time: "1-2 days", sub: "Presumptive and books compared for the practice, both regimes compared, foreign credit worked out." },
    { title: "Foreign schedules and forms", time: "Same day", sub: "Schedule FA prepared and the foreign tax credit form filed before the return." },
    { title: "File and e-verify", time: "On your approval", sub: "Return filed, e-verified with Aadhaar OTP and the acknowledgement sent to you." },
  ],
  processNote: "Timelines are estimates and depend on how quickly statements arrive. Refunds are processed by the Income Tax Department.",

  mistakesSection: {
    title: "Income tax mistakes we fix for Porur doctors and IT staff",
    lead: "Most come from filing on Form 16 alone. They tend to surface later as an intimation or a notice.",
  },
  mistakes: [
    { icon: "FileWarning", title: "Consultant fees missing from the return", problem: "A doctor files only the hospital salary, while fees from two other hospitals sit in AIS with TDS.", fix: "We add every fee receipt under the profession head and claim the TDS against it." },
    { icon: "RefreshCw", title: "RSUs taxed twice", problem: "The perquisite was taxed in the payslip, then the full sale price is shown as a gain.", fix: "We take the perquisite value as the cost, so only the rise after allotment is taxed." },
    { icon: "ShieldAlert", title: "Schedule FA left blank", problem: "An employee holds shares with a foreign broker but skips the foreign assets schedule.", fix: "We report every foreign account and holding, and check whether earlier years need correcting." },
    { icon: "Banknote", title: "Foreign tax credit lost", problem: "US tax was withheld on dividends, but the credit form was never filed.", fix: "We file the credit form before the return so the tax paid abroad is set off." },
  ],

  costSection: {
    title: "What our fee for a Porur return depends on",
    lead: "There is no government fee to file a return. Our fee depends on how many income sources and foreign holdings you have, and we agree it in writing first.",
    cta: {
      title: "Ask for a written quote",
      sub: "Tell us if you have practice income, RSUs or ESOPs, foreign accounts, or a share sale this year.",
      message: "Hi National Filings, can I get a quote for my income tax return? I'm in Porur.",
    },
  },
  costs: [
    { icon: "Stethoscope", label: "Quoted upfront", title: "Practice income", line: "Presumptive receipts take less work than full books or a tax audit." },
    { icon: "Globe", label: "Quoted upfront", title: "Foreign holdings", line: "Depends on the number of broker accounts, RSU grants and foreign bank accounts.", highlight: true },
    { icon: "TrendingUp", label: "Quoted upfront", title: "Share sales", line: "Each sale of allotted or purchased shares needs its own gain worked out." },
    { icon: "Mail", label: "Quoted upfront", title: "Notices and corrections", line: "Replies, revised or updated returns for earlier years quoted separately." },
  ],

  compliance: {
    eyebrow: "Income from abroad",
    title: "Foreign shares and foreign tax for Porur's IT employees",
    lead: "RSUs and ESOPs from a foreign parent bring three duties: tax at allotment, reporting the holding, and claiming credit for tax paid outside India.",
    items: [
      { icon: "Coins", label: "On allotment", title: "Taxed as salary", line: "Market value less what you paid is a perquisite. Your employer deducts TDS through the payroll." },
      { icon: "Globe", label: "Every year you hold", title: "Schedule FA", line: "Residents must list foreign shares, broker accounts and bank accounts, even if nothing was sold.", highlight: true },
      { icon: "ShieldAlert", label: "If left out", title: "Black Money Act penalty", line: "Up to ₹10 lakh a year for missing disclosure. Non-immovable assets totalling up to ₹20 lakh are outside the penalty." },
      { icon: "Banknote", label: "Form 67, then Form 44", title: "Relief for tax paid abroad", line: "Credit for foreign tax is claimed by filing the form. It becomes Form 44 from tax year 2026-27." },
    ],
  },

  reasonsTitle: "Why Porur professionals choose National Filings for income tax",
  reasons: [
    { icon: "Stethoscope", title: "We know doctors' returns", line: "Salary, consultant fees and clinic income on one return, without overlap." },
    { icon: "Globe", title: "Comfortable with foreign assets", line: "RSUs, ESOPs, broker accounts and foreign tax credit, year after year." },
    { icon: "ReceiptText", title: "Fees in writing", line: "Quoted once we know your income sources, before any work starts." },
    { icon: "UserCheck", title: "One person every year", line: "The same expert keeps your RSU history and Schedule FA consistent." },
    { icon: "MessageCircle", title: "WhatsApp and email", line: "No need to leave the hospital or office. Meet us in Kundrathur if you like." },
    { icon: "Award", title: "Experience since 2012", line: "Registration, tax and compliance work for Chennai businesses and families." },
  ],

  faqTitle: "Income tax in Porur: questions from doctors and IT employees",
  faqs: [
    { q: "Do you have an office in Porur?", a: "No. Our only office is in Karaima Nagar, Kundrathur. Porur clients usually work with us over WhatsApp, email and a phone call, and e-verify the return with an Aadhaar OTP. You are welcome to visit Kundrathur if you prefer to meet." },
    { q: "I draw a salary from a hospital and also see patients in my own clinic. Can I use the presumptive scheme?", a: "Yes, for the practice income. The salary is taxed as salary in any case. For the clinic receipts, the presumptive scheme for professionals, now in section 58 of the Income-tax Act, 2025, lets you declare 50% of receipts as profit without keeping books, if receipts are within ₹50 lakh, or ₹75 lakh when cash receipts are within 5%. We compare it with your actual expenses before choosing." },
    { q: "Hospitals pay me consultant fees and deduct TDS. Is that salary?", a: "Usually not. If you are engaged as a consultant rather than an employee, the fees are professional income and the TDS appears in your AIS and Form 26AS against your PAN. You report the fees under business or profession and claim the TDS as credit. Your contract decides which side you fall on, so we read it." },
    { q: "When does a doctor need a tax audit?", a: "Generally when professional receipts cross ₹50 lakh in the year and you are not using the presumptive scheme, or when you declare less than the presumptive profit while your income is above the basic exemption limit. From tax year 2026-27 these rules sit in sections 62 and 63 of the 2025 Act, and the audit report is Form 26." },
    { q: "My US employer gives me RSUs. When are they taxed?", a: "When the shares are allotted to you, the market value is a salary perquisite and your Indian employer deducts tax through the payroll. When you later sell, only the difference between the sale price and that taxed value is a capital gain. Shares of a foreign company are unlisted in India, so they turn long-term after 24 months." },
    { q: "What happens if I forget to show my foreign shares in Schedule FA?", a: "Missing foreign assets can attract a penalty of ₹10 lakh for each year under the Black Money Act, though non-immovable assets with a total value of up to ₹20 lakh are outside the penalty. If earlier returns left them out, a revised or updated return may help, and the one-time FAST-DS 2026 disclosure window is open until 31 December 2026. We check which route suits your case." },
    { q: "US tax was withheld on my dividends. Do I pay tax again in India?", a: "The dividend is taxable in India, but you can claim credit for the US tax under the tax treaty, up to the Indian tax on that income. The credit needs a separate form filed on the portal: Form 67 for returns up to FY 2025-26, and Form 44 from tax year 2026-27. Without it, the credit can be refused." },
  ],

  related: nearbyAreas("P3-A7"),
  relatedTitle: "Income tax consultants in areas near Porur",

  final: {
    title: "Get your Porur return right, practice income and RSUs included",
    sub: "Message us with how you earn and what you hold abroad. We'll list the documents, the forms and our fee before we start.",
    message: "Hi National Filings, I'm in Porur and I'd like help filing my income tax return.",
  },
  catalogue: ["Income tax return filing for doctors in Porur", "RSU, ESOP and Schedule FA reporting in Porur", "Foreign tax credit and advance tax for Porur professionals"],
};
