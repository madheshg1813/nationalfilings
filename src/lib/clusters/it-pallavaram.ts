import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { INCOME_TAX_SERVICE, nearbyAreas } from "./shared";

/**
 * P3-A2 · Income Tax Consultant in Pallavaram (/chennai/income-tax-consultant-in-pallavaram).
 * Primary keyword: "income tax consultant in pallavaram". No office in Pallavaram: clients work with us on WhatsApp and email,
 * and can visit our Kundrathur office on the Pallavaram road. Angle: leather exporters and traders, and travel agents near the
 * airport: export income and foreign currency receipts, export incentives as income, TCS that tour operators collect on
 * overseas packages and how customers claim it, and residents who travel or remit abroad (LRS TCS). Kept distinct from the
 * company (P1-A2) and GST (P2-A2) pages for Pallavaram.
 *
 * Local facts (reused from the verified P1-A2 JSDoc): leather units around Nagalkeni; Chennai International Airport next door;
 * SH 113A runs from Pallavaram to Kundrathur.
 *
 * Facts checked (Nov 2026):
 * - The Income-tax Act, 2025 applies from 1 April 2026 ("tax year"). Section 26 charges business income and carries forward
 *   export incentives as business income. (taxguru.in/income-tax/income-business-income-tax-act-2025-sections-itr-forms-compliance-ay-2026-27.html)
 * - RoDTEP continues to 31 December 2026 (DGFT Notification 41/2026-27, 30 Sep 2026). (worldtradescanner.com/41-Ntfn-DGFT-30.09.2026.htm,
 *   knnindia.co.in RoDTEP extended till December 2026)
 * - Foreign currency sales are recorded at the rate on the transaction date and the difference on realisation or year-end
 *   restatement is income or loss (ICDS on foreign exchange; no section number stated on the page).
 * - TCS under section 394(1) (old 206C(1G)), from 1 April 2026 (Finance Act 2026): overseas tour programme package 2% with no
 *   threshold (Table Sl. 8.D); LRS for education or medical treatment 2% above ₹10 lakh a year (Sl. 7.D(a)); LRS other purposes
 *   20% above ₹10 lakh (Sl. 7.D(b)); higher rate without PAN; TCS not collected where the buyer has deducted TDS on the same
 *   payment (394(5)); TCS is a credit to the payer, claimed in the return; reported quarterly by the collector.
 *   (blog.tdsman.com/2026/09/tcs-on-foreign-remittances-and-overseas-tour-packages-section-3941-206c1g/, taxscan.in Budget 2026
 *   TCS cut, businesstoday.in Budget 2026 TCS changes, indiabudget.gov.in)
 * - Salaried people can declare TCS to their employer so it is counted against salary TDS (provision carried into section 392;
 *   form number not stated because sources conflict). (zoho.com payroll guide to the 2025 Act, taxguru.in)
 * - Form 26AS becomes Form 168 under the Income-tax Rules, 2026 (not named on this page). Advance tax section 408 instalments
 *   15 June, 15 September, 15 December, 15 March. (eztax.in/income-tax-act-2025/section-408)
 * - Return due dates (Finance Act 2026): 31 July non-business, 31 August non-audit business, 31 October audit cases.
 *   (caalley.com "ITR changes from April 2026")
 * - No government fee to file a return. No fee figures. Timelines are estimates; refunds are issued by the department.
 */

const whatsapp = "Hi National Filings, I'm in Pallavaram and need help with my income tax. Can we talk on WhatsApp?";

export const itPallavaramPage: LicencePageData = {
  id: "P3-A2",
  service: INCOME_TAX_SERVICE,
  meta: {
    title: "Income Tax Consultant in Pallavaram | National Filings",
    description: "Income tax consultant in Pallavaram for leather exporters and travel agents. Forex income, export incentives, TCS on tours and LRS credit claims.",
  },
  hero: {
    headline: { line1: "Income Tax Consultant", line2Before: "in Pallavaram, ", accent: "Forex to Filing" },
    sub: "Leather exporters around Nagalkeni earn in dollars and euros. Travel agents near the airport collect TCS on every overseas package, and their customers want that TCS back. We handle the income tax side of all three, over WhatsApp and email.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "ArrowLeftRight",
    kicker: "Pallavaram, Chennai",
    title: "Income Tax Return Filed",
    line: "Your Pallavaram Return",
    stamp: "ITR-V verified",
    chips: ["Forex receipts valued", "Export incentives shown", "TCS credit claimed"],
    steps: ["Receipts", "Forex", "TCS", "Tax", "Filed"],
  },

  benefitsSection: {
    title: "Where income tax gets tricky in Pallavaram",
    lead: "An exporter's income arrives in foreign currency, with incentives on top. A travel agent's receipts mix its own income with money for airlines, hotels and the tax department. Both need careful returns.",
    cta: {
      title: "Paid TCS on a foreign trip or remittance?",
      sub: "Send us the TCS certificate or the bank's advice. We'll check it has reached your tax credit statement and claim it in your return.",
      message: "Hi National Filings, I paid TCS on an overseas tour package booked in Pallavaram. How do I claim it back?",
    },
  },
  benefits: [
    { icon: "Coins", title: "Forex receipts valued right", line: "Export sales taken at the right exchange rate, with the gain or loss on realisation accounted." },
    { icon: "BadgeIndianRupee", title: "Incentives shown as income", line: "Duty drawback and RoDTEP credits reported as business income in the right year." },
    { icon: "Banknote", title: "Realisation tracked", line: "Bank realisation and inward remittance records matched with sales in the books." },
    { icon: "Plane", title: "Agent income separated", line: "Commission and service fees kept apart from ticket money passed on to airlines." },
    { icon: "Percent", title: "TCS collected and filed", line: "Tour operators' TCS deposited, reported every quarter and certified to customers." },
    { icon: "RefreshCw", title: "TCS claimed back", line: "Travellers and remitters get credit for TCS in their own return, with any excess refunded." },
    { icon: "SearchCheck", title: "Foreign spending explained", line: "Large remittances and tour payments appear in AIS. We make sure the return accounts for them." },
    { icon: "MessageCircle", title: "No visit needed", line: "WhatsApp and email for documents. Our Kundrathur office is on the road from Pallavaram." },
  ],

  applicantsSection: {
    title: "Pallavaram taxpayers we file for",
    lead: "Our income tax clients here fall into three groups: exporters, people in the travel trade, and families who spend or send money abroad.",
  },
  applicants: [
    { icon: "Ship", title: "Leather exporters", line: "Finished leather and leather goods units shipping to overseas buyers." },
    { icon: "ShoppingBag", title: "Leather traders", line: "Dealers buying and selling hides and finished leather within India." },
    { icon: "Factory", title: "Leather job workers", line: "Cutting and stitching units working for exporters, with TDS deducted on their bills." },
    { icon: "Plane", title: "Air ticketing agents", line: "Agents earning commission and service fees on domestic and international tickets." },
    { icon: "Globe", title: "Overseas tour operators", line: "Sellers of foreign holiday and pilgrimage packages who collect TCS on them." },
    { icon: "GraduationCap", title: "Parents paying fees abroad", line: "Families sending money for a child's education overseas under LRS." },
    { icon: "Users", title: "Families travelling abroad", line: "Residents who booked foreign tours or sent money to relatives outside India." },
    { icon: "Laptop", title: "Service exporters", line: "Consultants and freelancers paid by clients outside India." },
  ],

  opportunities: {
    eyebrow: "Local trades",
    title: "Where Pallavaram's income tax questions come from",
    intro: "Leather leaves Nagalkeni for foreign buyers, payments come back in foreign currency, and the airport next door keeps travel agents booking trips abroad. Each of these leaves a trail in the department's records.",
    // Pexels licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "Layers", title: "Leather for export", image: "https://images.pexels.com/photos/17315570/pexels-photo-17315570.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Tannery worker lifting a sheet of finished leather beside stacked hides", credit: "Oğuz Kaan Boğa / Pexels" },
      { icon: "Coins", title: "Foreign currency receipts", image: "https://images.pexels.com/photos/29916107/pexels-photo-29916107.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "US dollar and Japanese yen banknotes fanned out on a white surface", credit: "Qing Luo / Pexels" },
      { icon: "Plane", title: "Overseas travel", image: "https://images.pexels.com/photos/12720523/pexels-photo-12720523.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Aircraft wing and engine above the clouds seen from a window seat", credit: "Atlantic Ambience / Pexels" },
      { icon: "Globe", title: "Money sent abroad", image: "https://images.pexels.com/photos/7235902/pexels-photo-7235902.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Passport and photos lying on a world map beside a compass", credit: "Nataliya Vaitkevich / Pexels" },
    ],
  },

  highlights: {
    eyebrow: "TCS on going abroad",
    title: "TCS on overseas tours and remittances from April 2026",
    lead: "Tax collected at source is not an extra tax. It is an advance credited to the traveller or remitter, who claims it back in the return.",
    items: [
      { icon: "Plane", label: "Overseas tour packages", title: "2% from the first rupee", line: "Since 1 April 2026, tour operators collect TCS at 2% on any overseas package, whatever the amount.", highlight: true },
      { icon: "GraduationCap", label: "LRS, education and medical", title: "2% above ₹10 lakh", line: "Banks collect 2% on remittances for education or medical treatment above ₹10 lakh in a year." },
      { icon: "Banknote", label: "LRS, other purposes", title: "20% above ₹10 lakh", line: "Gifts, investments and other remittances above ₹10 lakh in a year attract TCS at 20%." },
      { icon: "RefreshCw", label: "Getting it back", title: "Credit in your return", line: "TCS shows in your tax credit statement and AIS. It is set against your tax, and any excess is refunded." },
    ],
  },

  documentsSection: {
    title: "Documents we need from Pallavaram exporters, agents and travellers",
    lead: "Send these on WhatsApp or email. For exporters, the foreign currency records matter as much as the sales register.",
  },
  documents: [
    { icon: "Ship", title: "For exporters", items: ["Export invoices and shipping bill numbers", "Bank realisation certificates or inward remittance advices", "Duty drawback and RoDTEP statements", "Purchase bills and bank statements", "GST returns for the year"], hint: "We value each sale at the rate on its date and account for the difference when payment arrives or the year closes." },
    { icon: "Plane", title: "For travel agents and tour operators", items: ["Airline commission and incentive statements", "Package invoices to customers", "TCS collected and challans paid", "Quarterly TCS returns and certificates issued", "Bills from airlines, hotels and overseas partners"], hint: "Whether you act as an agent or sell packages in your own name decides what counts as turnover. We settle that first." },
    { icon: "IdCard", title: "For travellers and remitters", items: ["PAN and Aadhaar", "TCS certificate from the tour operator or bank", "Bank's LRS remittance advice", "Form 16, if you are salaried"], hint: "Make sure your PAN is on every booking and remittance. Without it, TCS is collected at a higher rate." },
  ],
  documentsNote: {
    title: "TCS not showing in your Form 26AS?",
    sub: "Send us the certificate or the bank advice with your PAN. We'll trace whether the collector has filed its TCS return.",
    message: "Hi National Filings, I'm in Pallavaram and the TCS on my foreign trip isn't showing in my 26AS. Can you check?",
  },

  processSection: {
    title: "How we handle income tax for a Pallavaram exporter or agent",
    lead: "Most Pallavaram clients work with us entirely online. We agree the approach on a call, then documents and approvals move over WhatsApp and email.",
    cta: {
      title: "Start with a short call",
      sub: "Tell us whether you export, sell travel or simply travelled abroad yourself. We'll send a checklist and a written quote.",
      message: "Hi National Filings, I'm in Pallavaram and need help with export income and TCS in my income tax return.",
    },
  },
  steps: [
    { title: "Understand the income", time: "Day 1", sub: "Export sales, incentives, commission or foreign spending, and how money comes in and goes out." },
    { title: "Collect records", time: "1-3 days", sub: "Invoices, bank realisation records, TCS certificates and statements, shared online." },
    { title: "Value and reconcile", time: "2-3 days", sub: "Foreign currency sales valued, incentives booked, and TDS and TCS matched with Form 26AS and AIS." },
    { title: "Review the tax", time: "1 day", sub: "Computation shared and explained, with advance tax and credits shown separately." },
    { title: "File and track", time: "Before the due date", sub: "Return filed and e-verified, and any refund of TDS or TCS followed up." },
  ],
  processNote: "Timelines are estimates and depend on complete documents. Refunds are issued by the Income Tax Department, and their timing varies.",

  mistakesSection: {
    title: "Income tax errors we see in Pallavaram returns",
    lead: "These cost money or invite questions from the department. Most come from mixing up what was collected with what was earned.",
  },
  mistakes: [
    { icon: "BadgeIndianRupee", title: "Export incentives left out", problem: "An exporter receives duty drawback and RoDTEP credits but reports only export sales as income.", fix: "We add incentives as business income for the year you became entitled to them, and match them with customs records." },
    { icon: "Coins", title: "Exchange difference ignored", problem: "Sales are booked at one rate and the dollars arrive months later at another, but the gain or loss never reaches the books.", fix: "We value each sale on its date and account for the difference on realisation or at the year end." },
    { icon: "Percent", title: "TCS paid but never claimed", problem: "A family pays TCS on a foreign tour or a child's fees, then files without claiming it, or doesn't file at all.", fix: "We pick up TCS from Form 26AS and AIS and set it against your tax, so any excess comes back as a refund." },
    { icon: "Plane", title: "Ticket money treated as income", problem: "A travel agent reports the full ticket value collected as turnover, or leaves out commission the airline paid directly.", fix: "We separate pass-through money from your commission and fees, and report income the way your role requires." },
  ],

  costSection: {
    title: "What our income tax fee in Pallavaram depends on",
    lead: "There is no government fee to file a return. Our fee depends on your income sources and how much reconciling they need. We quote before we start.",
    cta: {
      title: "Get a written quote",
      sub: "Tell us your trade, how many export invoices or bookings you handle, and any refunds pending. We'll quote each part.",
      message: "Hi National Filings, can I get a quote for income tax filing for my Pallavaram business?",
    },
  },
  costs: [
    { icon: "Ship", label: "Quoted upfront", title: "Exporter's return", line: "Depends on the number of export invoices, currencies, incentive claims and whether we prepare the books.", highlight: true },
    { icon: "Plane", label: "Quoted upfront", title: "Travel agent's return and TCS", line: "Depends on booking volume, quarterly TCS filings and certificates to issue." },
    { icon: "UserRound", label: "Quoted upfront", title: "Personal return with TCS credit", line: "Depends on salary, investments, foreign spending and the TCS to be claimed." },
    { icon: "FileWarning", label: "Quoted per case", title: "Notices and refund follow-up", line: "Depends on the years involved and the department's questions. Any tax, interest or fee goes to the department." },
  ],

  compliance: {
    eyebrow: "Through the year",
    title: "Income tax dates for Pallavaram exporters and agents",
    lead: "Beyond the yearly return, these deadlines matter for businesses that earn from abroad or collect tax on travel abroad.",
    items: [
      { icon: "CalendarClock", label: "15 Jun, Sep, Dec and Mar", title: "Advance tax", line: "Export profits and commission are rarely covered by TDS, so instalments are usually due." },
      { icon: "Percent", label: "Monthly and quarterly", title: "TCS deposit and return", line: "Tour operators deposit the TCS they collect each month and file a quarterly TCS return." },
      { icon: "FileText", label: "After each quarter", title: "TCS certificates", line: "Customers need the certificate and the credit in their statement to claim it." },
      { icon: "CalendarCheck", label: "31 July, 31 August or 31 October", title: "Return due", line: "31 July for salaried travellers, 31 August for businesses without an audit, 31 October with one." },
    ],
  },

  reasonsTitle: "Why Pallavaram trusts us with its income tax returns",
  reasons: [
    { icon: "Coins", title: "Forex handled properly", line: "Foreign currency sales, realisations and exchange differences done right." },
    { icon: "Percent", title: "TCS from both sides", line: "We file TCS for agents and claim it back for travellers." },
    { icon: "MessageCircle", title: "Fully online", line: "Documents, approvals and updates on WhatsApp and email." },
    { icon: "MapPinned", title: "Office close by", line: "Our Kundrathur office is a short drive down the Pallavaram road." },
    { icon: "Award", title: "Experience since 2012", line: "Tax and compliance work for Chennai businesses and families." },
    { icon: "ReceiptText", title: "Fees in writing", line: "Quoted and agreed before any work begins." },
  ],

  faqTitle: "Income tax in Pallavaram: exporters, agents and travellers ask",
  faqs: [
    { q: "Are export incentives like RoDTEP and duty drawback taxable?", a: "Yes. Export incentives are business income under the Income-tax Act, 2025, as they were under the old Act. Duty drawback and RoDTEP credits are shown as income for the year you become entitled to them, even if the credit is used later. We match them with your customs records." },
    { q: "How are my export sales in dollars converted for income tax?", a: "Each sale is recorded in rupees at the exchange rate on the date of the transaction. When payment arrives at a different rate, or is still due at the year end, the difference is a gain or loss that goes into your profit. We tie this to your bank realisation records." },
    { q: "I run a tour company. How much TCS do I collect on overseas packages?", a: "From 1 April 2026, 2% of the amount received for an overseas tour package, with no threshold, under section 394 of the Income-tax Act, 2025. If a business customer deducts TDS on your bill, TCS isn't collected again on the same amount. You deposit the TCS, file a quarterly TCS return and issue certificates so customers can claim it." },
    { q: "I paid TCS on a foreign holiday. How do I get it back?", a: "TCS is a tax credit in your name. Once the tour operator files its TCS return, it shows in your Form 26AS and AIS. You claim it in your income tax return against the tax for the year, and any excess is refunded. If you're salaried, you can also tell your employer, so it is counted when tax is deducted from your salary." },
    { q: "What TCS applies when I send money abroad under LRS?", a: "Up to ₹10 lakh in a year, the bank collects no TCS. Above that, the rate is 2% for education and medical treatment and 20% for other purposes such as gifts to relatives or investments. Without a PAN, a higher rate can apply. The TCS is claimed back in your return like any other tax credit." },
    { q: "Should I file a return if my only link is a foreign trip?", a: "Usually yes, if TCS was collected, because filing is the only way to get excess TCS back. Spending on foreign travel above a set limit can also make filing compulsory even when income is below the taxable limit. We'll check what applies to you." },
    { q: "Is there a National Filings office in Pallavaram?", a: "We don't have one in Pallavaram. Exporters, agents and families there send us documents on WhatsApp or email and approve their returns online. If you'd like to meet, our office in Karaima Nagar, Kundrathur, is a short drive down the Pallavaram road, open Monday to Saturday, 9 am to 7 pm." },
  ],

  related: nearbyAreas("P3-A2"),
  relatedTitle: "Income tax consultants in areas near Pallavaram",

  final: {
    title: "Get your Pallavaram export or travel income filed right",
    sub: "Message us with your trade or the TCS you've paid. We'll check your records and tell you what the return needs.",
    message: "Hi National Filings, I'm in Pallavaram and want help with my income tax return. Can we talk?",
  },
  catalogue: ["Income tax return filing for exporters in Pallavaram", "TCS compliance for travel agents in Pallavaram", "TCS credit and refund claims in Pallavaram"],
};
