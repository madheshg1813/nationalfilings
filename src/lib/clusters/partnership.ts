import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { SERVICE, clusterHref, licenceHref, pillarHref, relatedTitle } from "./shared";

/**
 * P1-C3 · Partnership Firm Registration (/chennai/partnership-firm-registration-service).
 * Primary keyword: "partnership firm registration in chennai". Secondary: "partnership deed registration in chennai".
 *
 * Facts checked Oct 2026: firms are governed by the Indian Partnership Act, 1932 and registered with the Tamil Nadu
 * Registrar of Firms (Registration Department), online through TNREGINET with Form 1 signed by all partners. Registration
 * is optional, but an unregistered firm can't sue third parties to enforce contracts (s.69). Maximum 50 partners
 * (Companies (Miscellaneous) Rules, 2014). Fees and stamp duty are not quoted because they change and depend on the deed.
 */

const whatsapp = "Hi National Filings, I'd like help with partnership firm registration in Chennai.";

export const partnershipPage: LicencePageData = {
  id: "P1-C3",
  service: SERVICE,
  meta: {
    title: "Partnership Firm Registration in Chennai | Deed & Filing",
    description: "Partnership firm registration in Chennai with a clear deed, stamp duty and Registrar of Firms filing handled for you. Get a quote and start this week.",
  },
  hero: {
    headline: { line1: "Partnership Firm Registration", line2Before: "in Chennai, ", accent: "Deed to Certificate" },
    sub: "Start your business with partners on clear terms. We draft the deed, arrange stamp duty and complete partnership firm registration in Chennai with the Registrar of Firms.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "Users",
    kicker: "Registrar of Firms, Tamil Nadu",
    title: "Firm Registration",
    line: "Your Firm & Co.",
    stamp: "Registered",
    chips: ["Deed stamped", "Form 1 signed", "PAN applied"],
    steps: ["Terms", "Deed", "Stamp", "Form 1", "Certificate"],
  },

  benefitsSection: {
    title: "Why register a partnership firm in Chennai",
    lead: "Registration is optional under the law, but an unregistered firm gives up rights it may need later.",
    cta: {
      title: "Already running as partners without a deed?",
      sub: "Tell us how you work today. We'll put it into a deed and register the firm.",
      message: "Hi National Filings, we run a business as partners but have no deed. Can you help?",
    },
  },
  benefits: [
    { icon: "Gavel", title: "Right to sue", line: "Only a registered firm can file a case to enforce its contracts against others." },
    { icon: "Zap", title: "Quick to set up", line: "No MCA filings or minimum capital, so you can start sooner." },
    { icon: "Wallet", title: "Low running cost", line: "No annual ROC returns, and no statutory audit under company law." },
    { icon: "Handshake", title: "Terms you choose", line: "Profit share, salaries and duties are set by the partners in the deed." },
    { icon: "Landmark", title: "Bank account and loans", line: "Banks open current accounts against a registered deed and certificate." },
    { icon: "ArrowLeftRight", title: "Path to an LLP", line: "A registered firm can later convert into an LLP." },
    { icon: "Coins", title: "No minimum capital", line: "Partners agree what each brings in, in money or assets." },
    { icon: "Lock", title: "Private finances", line: "Firms don't file accounts with the MCA, so they aren't on a public register." },
  ],

  applicantsSection: {
    title: "Who should consider a partnership firm",
    lead: "A partnership firm suits small groups who trust each other and want a simple, low-cost structure.",
  },
  applicants: [
    { icon: "Users", title: "Family businesses", line: "Relatives running a shop, trading or service business together." },
    { icon: "Store", title: "Traders and retailers", line: "Two or more people sharing a store or distribution business." },
    { icon: "HardHat", title: "Contractors", line: "Partners taking on local works and supply contracts." },
    { icon: "UtensilsCrossed", title: "Restaurants and cafes", line: "Friends or family co-owning a food business." },
    { icon: "Briefcase", title: "Small service firms", line: "Agencies and consultancies with modest liability risk." },
    { icon: "Factory", title: "Small manufacturers", line: "Units that want to start lean before growing." },
    { icon: "Truck", title: "Transport and logistics", line: "Partners running fleets, transport or courier services." },
    { icon: "Stethoscope", title: "Clinics and practices", line: "Small medical, dental or diagnostic practices shared by partners." },
  ],

  opportunities: {
    eyebrow: "Who registers firms",
    title: "Partnership firms across Chennai's trades",
    intro: "Traders, restaurants, contractors and transporters are among the many Chennai businesses run as registered partnership firms, often by family members or long-time associates.",
    // Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "Store", title: "Wholesale traders", image: "https://images.unsplash.com/photo-1777732786164-1f6e359e69ca?auto=format&fit=crop&w=1600&q=90", alt: "Open sacks of dried goods and spices at a market", credit: "Saravanan Narayanan / Unsplash" },
      { icon: "UtensilsCrossed", title: "Restaurants and eateries", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1600&q=90", alt: "Masala dosa served with sambar and chutneys", credit: "Paul / Unsplash" },
      { icon: "HardHat", title: "Contractors", image: "https://images.unsplash.com/photo-1685464197144-790d716b8649?auto=format&fit=crop&w=1600&q=90", alt: "Construction workers pouring concrete on site", credit: "Mélyna Côté / Unsplash" },
      { icon: "Truck", title: "Transport operators", image: "https://images.unsplash.com/photo-1717616171263-de4808015831?auto=format&fit=crop&w=1600&q=90", alt: "Goods truck loaded with packages in city traffic", credit: "Bernd Dittrich / Unsplash" },
    ],
  },

  highlights: {
    eyebrow: "The partnership deed",
    title: "What your partnership deed should cover",
    lead: "The deed is the firm's rulebook. A vague deed is the most common cause of partner disputes.",
    items: [
      { icon: "Users", label: "Essential", title: "Partners and capital", line: "Who the partners are, what each contributes and how capital can change." },
      { icon: "Percent", label: "Essential", title: "Profit and loss sharing", line: "The ratio, plus any salary or interest on capital the firm will pay.", highlight: true },
      { icon: "UserCheck", label: "Recommended", title: "Roles and authority", line: "Who signs cheques, borrows money and manages day-to-day work." },
      { icon: "RefreshCw", label: "Recommended", title: "Entry, exit and dissolution", line: "What happens when a partner joins, retires, dies or wants out." },
    ],
  },

  documentsSection: {
    title: "Documents for partnership firm registration in Chennai",
    lead: "The particulars in Form 1 must match the deed exactly, so we prepare both together.",
  },
  documents: [
    { icon: "UserRound", title: "For each partner", items: ["PAN card", "Aadhaar or other address proof", "Passport-size photo", "Mobile number and email ID"], hint: "Every partner signs Form 1 and the deed." },
    { icon: "Home", title: "For the place of business", items: ["Rent agreement or ownership proof", "Recent utility bill", "No objection letter, if the premises belong to someone else"], hint: "Add proof for each branch, if any." },
    { icon: "FileSignature", title: "For the firm", items: ["Partnership deed on stamp paper", "Form 1 application", "Firm name and nature of business"], hint: "We draft both and list witness details needed." },
  ],
  documentsNote: {
    title: "Partnership deed registration in Chennai starts with your terms",
    sub: "Tell us the capital, profit ratio and roles you've agreed. We'll turn them into a deed you can rely on.",
    message: "Hi National Filings, I'd like a partnership deed drafted and registered in Chennai.",
  },

  processSection: {
    title: "Partnership firm registration process in Tamil Nadu",
    lead: "Firms in Chennai register with the Registrar of Firms through the state's online portal, TNREGINET.",
    cta: {
      title: "Get help with partnership registration",
      sub: "Share your partners' details and the terms you've agreed. We'll draft the deed and file Form 1.",
      message: "Hi National Filings, I'd like help with partnership firm registration in Chennai.",
    },
  },
  steps: [
    { title: "Agree the terms", time: "Day 1", sub: "We go through capital, profit share, roles and exit terms with all partners." },
    { title: "Draft the deed", time: "1-2 days", sub: "Prepared for review by every partner." },
    { title: "Stamp and sign", time: "1-2 days", sub: "Executed on stamp paper of the correct value and signed by all partners with witnesses." },
    { title: "File Form 1 online", time: "Same day", sub: "Submitted on TNREGINET with the deed and proofs, and the fee paid online." },
    { title: "Registration certificate", time: "Usually 1-2 weeks", sub: "Issued by the Registrar of Firms after scrutiny. We answer any queries raised." },
  ],
  processNote: "Times are estimates. The Registrar of Firms may raise queries, which are answered on the portal.",

  mistakesSection: {
    title: "Risks of an unclear partnership agreement",
    lead: "Partnership problems usually start years after registration, with a deed that didn't plan for them.",
  },
  mistakes: [
    { icon: "Percent", title: "No salary or interest clause", problem: "Partner salaries and interest on capital can't be claimed as expenses for tax unless the deed allows them.", fix: "We include remuneration and interest clauses within the income tax limits." },
    { icon: "TriangleAlert", title: "Silent on exits", problem: "A partner leaves and nobody knows how their share is valued or paid.", fix: "We add clear retirement, death and buy-out terms." },
    { icon: "FileWarning", title: "Form 1 differs from the deed", problem: "Names or dates that don't match lead to queries from the Registrar.", fix: "We prepare Form 1 directly from the final deed." },
    { icon: "Stamp", title: "Wrong stamp value", problem: "A deed on insufficient stamp paper can be questioned later.", fix: "We confirm the stamp duty for your deed before you buy the paper." },
  ],

  costSection: {
    title: "Partnership firm registration cost factors in Chennai",
    lead: "A partnership firm is one of the cheapest structures to set up. These are the parts of the cost.",
    cta: {
      title: "Get a quote for your firm",
      sub: "Tell us the number of partners and the capital. We'll confirm the stamp duty, government fee and our fee.",
      message: "Hi National Filings, can I get a quote for partnership firm registration in Chennai?",
    },
  },
  costs: [
    { icon: "Stamp", label: "As per state rules", title: "Stamp duty on the deed", line: "Based on Tamil Nadu stamp rules for partnership deeds." },
    { icon: "Landmark", label: "Paid online", title: "Registrar of Firms fee", line: "A government fee paid on TNREGINET with Form 1.", highlight: true },
    { icon: "FilePen", label: "Quoted upfront", title: "Deed drafting", line: "Drafting to your terms, with revisions until every partner agrees." },
    { icon: "Headset", label: "Quoted upfront", title: "Filing and follow-up", line: "Form 1, query replies and the firm PAN application." },
  ],

  compliance: {
    eyebrow: "Tax and compliance",
    title: "Tax and compliance for a partnership firm",
    lead: "A firm has lighter compliance than a company, but it is still a separate taxpayer.",
    items: [
      { icon: "IdCard", label: "After registration", title: "Firm PAN and bank account", line: "The firm needs its own PAN and a current account in its name." },
      { icon: "Calculator", label: "Every year", title: "Income tax return", line: "The firm is taxed on its profit. A partner's share of profit is generally not taxed again.", highlight: true },
      { icon: "ReceiptIndianRupee", label: "If applicable", title: "GST registration", line: "Needed above the GST threshold, or earlier for inter-state or online sales." },
      { icon: "RefreshCw", label: "When things change", title: "Updates to the Registrar", line: "New partners, retirements or a new address should be recorded with the Registrar of Firms." },
    ],
  },
  decision: {
    eyebrow: "Partnership or LLP?",
    title: "How a partnership firm differs from an LLP",
    lead: "The names sound alike, but the law, liability and paperwork are different.",
    items: [
      { icon: "ShieldAlert", label: "Firm", title: "Unlimited liability", line: "Partners are personally liable for the firm's debts, jointly and individually.", highlight: true },
      { icon: "ShieldCheck", label: "LLP", title: "Limited liability", line: "Partners' liability is limited to their agreed contribution." },
      { icon: "Landmark", label: "Firm vs LLP", title: "Who registers it", line: "Firms register with the state Registrar of Firms. LLPs register with the MCA." },
      { icon: "ClipboardCheck", label: "Firm vs LLP", title: "Ongoing filings", line: "Firms have no annual ROC returns. LLPs file Form 11 and Form 8 every year." },
    ],
  },

  reasonsTitle: "Why choose National Filings for partnership firm registration in Chennai",
  reasons: [
    { icon: "FileSignature", title: "Deeds that prevent disputes", line: "Exit, valuation and authority clauses written in plain terms." },
    { icon: "Stamp", title: "Correct stamp duty", line: "We confirm the stamp value before you buy the paper." },
    { icon: "Globe", title: "Online filing on TNREGINET", line: "Form 1 filed and tracked on the state portal." },
    { icon: "ReceiptText", title: "Upfront quote", line: "Stamp duty, government fee and our fee listed separately." },
    { icon: "ArrowLeftRight", title: "Ready for what's next", line: "Help with GST, the firm PAN and later conversion to an LLP." },
    { icon: "MessageCircle", title: "WhatsApp updates", line: "Draft deeds and status updates on WhatsApp." },
  ],

  faqTitle: "Partnership firm registration in Chennai: your questions",
  faqs: [
    { q: "Is partnership firm registration compulsory in Tamil Nadu?", a: "No, registration under the Indian Partnership Act is optional. But an unregistered firm can't file a suit to enforce its contracts against third parties, and its partners can't sue the firm or each other over the partnership. That is why most firms register." },
    { q: "Where is a partnership firm registered in Chennai?", a: "With the Registrar of Firms under the Tamil Nadu Registration Department. The application in Form 1 is filed online through the TNREGINET portal, with the deed and supporting documents." },
    { q: "What is the difference between partnership deed registration and firm registration?", a: "The deed is the agreement between partners, executed on stamp paper. Firm registration records the firm with the Registrar of Firms using that deed. In practice, partnership deed registration in Chennai usually means drafting the deed and then registering the firm." },
    { q: "How many partners can a partnership firm have?", a: "At least two. The maximum is 50, under current rules made under the Companies Act." },
    { q: "How long does partnership firm registration take?", a: "Drafting and signing the deed takes a few days. After Form 1 is filed online, the Registrar usually issues the certificate in one to two weeks, depending on scrutiny and any queries." },
    { q: "How is a partnership firm taxed?", a: "The firm files its own income tax return and pays tax on its profit. Salaries and interest on capital paid to partners can reduce the firm's taxable profit, but only if the deed provides for them and within limits set by income tax law." },
    { q: "Can a partnership firm be converted into an LLP later?", a: "Yes. A registered firm can convert into an LLP with the same partners, which gives them limited liability. Many firms do this once the business grows." },
    { q: "Can we change the deed after registration?", a: "Yes. Partners can sign a supplementary deed for changes such as a new profit ratio or a new partner. Changes to the registered particulars should also be filed with the Registrar of Firms." },
  ],

  related: [
    { icon: "Building2", label: "Company registration", href: pillarHref("P1") },
    { icon: "Handshake", label: "LLP registration", href: clusterHref("P1-C1") },
    { icon: "Store", label: "Proprietorship registration", href: clusterHref("P1-C4") },
    { icon: "ReceiptIndianRupee", label: "GST consultant", href: pillarHref("P2") },
    { icon: "Factory", label: "MSME registration", href: licenceHref("L1") },
    { icon: "ScrollText", label: "Trade license", href: licenceHref("L3") },
    { icon: "Building2", label: "Private limited registration", href: clusterHref("P1-C6") },
    { icon: "Store", label: "Shop & establishment registration", href: licenceHref("L4") },
  ],
  relatedTitle,

  final: {
    title: "Get help with partnership registration in Chennai",
    sub: "Tell us about your partners and the terms you've agreed. We'll draft the deed and handle the filing.",
    message: "Hi National Filings, I'd like help registering a partnership firm in Chennai.",
  },
  catalogue: ["Partnership deed drafting", "Partnership firm registration with the Registrar of Firms", "Firm PAN application"],
};
