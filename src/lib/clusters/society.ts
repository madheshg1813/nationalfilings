import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { NGO_SERVICE, clusterHref, licenceHref, pillarHref } from "./shared";

/**
 * P4-C2 · Society Registration (/chennai/society-registration-service).
 * Primary keyword: "society registration in chennai".
 *
 * Facts checked Oct 2026: societies in Chennai register under the Tamil Nadu Societies Registration Act, 1975, with the
 * District Registrar (Registration Department), applied for through TNREGINET; at least seven members; a memorandum and
 * bylaws; yearly filings with the Registrar including accounts and the members' list. Form numbers and fees are not quoted
 * because they are set by the department and change. Tax registration and donor approval (formerly 12A and 80G) are now
 * sections 332 and 354 of the Income-tax Act, 2025.
 */

export const societyPage: LicencePageData = {
  id: "P4-C2",
  service: NGO_SERVICE,
  meta: {
    title: "Society Registration in Chennai | Tamil Nadu Societies Act",
    description: "Society registration in Chennai under the Tamil Nadu Societies Act: memorandum, bylaws and the District Registrar application handled by our team.",
  },
  hero: {
    headline: { line1: "Society Registration", line2Before: "in Chennai, ", accent: "Member-Led" },
    sub: "Bring your members together under one registered body with clear rules and elected leadership. We handle society registration in Chennai from bylaws to certificate.",
    badges: heroTrustPoints,
    whatsapp: "Hi National Filings, I'd like a consultation about society registration in Chennai.",
  },
  illustration: {
    icon: "Users",
    kicker: "Registered Society",
    title: "Certificate of Registration",
    line: "Your Welfare Society",
    stamp: "Registered",
    chips: ["Bylaws drafted", "7+ members", "District Registrar"],
    steps: ["Members", "Bylaws", "Documents", "Apply", "Certificate"],
  },

  benefitsSection: {
    title: "Benefits of society registration in Chennai",
    lead: "A society gives a membership group its own legal identity and a democratic way to run itself.",
    cta: {
      title: "Not sure a society fits your group?",
      sub: "Tell us how many members you have and how you'll make decisions. We'll suggest the right structure.",
      message: "Hi National Filings, should my group register as a society or a trust?",
    },
  },
  benefits: [
    { icon: "BadgeCheck", title: "Legal identity", line: "The society is recognised under Tamil Nadu law in its own name." },
    { icon: "Users", title: "Democratic control", line: "Members elect the governing body, so no one person controls it." },
    { icon: "Landmark", title: "Bank account and grants", line: "Open accounts and apply for grants in the society's name." },
    { icon: "Building2", title: "Hold property", line: "Assets belong to the society, not to its office bearers." },
    { icon: "RefreshCw", title: "Continuity", line: "The society continues as members and office bearers change." },
    { icon: "ReceiptIndianRupee", title: "Tax registration eligibility", line: "Can apply for income tax registration and donor approval." },
    { icon: "ClipboardCheck", title: "Clear rules", line: "Bylaws settle membership, meetings and elections in advance." },
    { icon: "HeartHandshake", title: "Credibility", line: "Members, donors and partners trust a registered body." },
  ],

  applicantsSection: {
    title: "Who should register a society in Chennai",
    lead: "A society suits groups where members join, vote and share in running the organisation.",
  },
  applicants: [
    { icon: "Home", title: "Residents' associations", line: "Apartment and neighbourhood welfare associations." },
    { icon: "Award", title: "Sports clubs", line: "Clubs and academies run by their members." },
    { icon: "UserRound", title: "Cultural societies", line: "Music, dance, arts and literary groups." },
    { icon: "Briefcase", title: "Professional bodies", line: "Associations of traders, professionals or alumni." },
    { icon: "GraduationCap", title: "Educational societies", line: "Groups running schools, libraries or study centres." },
    { icon: "HeartHandshake", title: "Welfare groups", line: "Community, women's and senior citizens' welfare." },
    { icon: "Leaf", title: "Environmental groups", line: "Members working on local green causes." },
    { icon: "Users", title: "Community groups", line: "Language, regional and community associations." },
  ],

  opportunities: {
    eyebrow: "Who registers societies",
    title: "Societies that bring Chennai communities together",
    intro: "From dance schools to sports clubs and professional associations, society registration in Chennai gives member-run groups clear rules and a legal identity.",
    // Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "Users", title: "Community and youth groups", image: "https://images.unsplash.com/photo-1529209076408-5a115ec9f1c6?auto=format&fit=crop&w=1600&q=90", alt: "Young people gathered around a table in discussion", credit: "tribesh kayastha / Unsplash" },
      { icon: "UserRound", title: "Cultural and arts societies", image: "https://images.unsplash.com/photo-1756370256926-e48ca54c5efe?auto=format&fit=crop&w=1600&q=90", alt: "Bharatanatyam dancers in traditional costume on temple steps", credit: "Prithvi Raj / Unsplash" },
      { icon: "Award", title: "Sports clubs", image: "https://images.unsplash.com/photo-1762025892133-29d96f24b321?auto=format&fit=crop&w=1600&q=90", alt: "Players in a basketball game on an indoor court", credit: "Bradikan / Unsplash" },
      { icon: "Briefcase", title: "Professional associations", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=90", alt: "People seated around a table taking notes in a meeting", credit: "Dylan Gillis / Unsplash" },
    ],
  },

  highlights: {
    eyebrow: "Memorandum and bylaws",
    title: "What your society's bylaws should cover",
    lead: "The memorandum states why the society exists. The bylaws set out how it runs.",
    items: [
      { icon: "Leaf", label: "Memorandum", title: "Name and objects", line: "The society's name, registered address and purposes.", highlight: true },
      { icon: "UserPlus", label: "Bylaws", title: "Membership", line: "Who can join, fees, rights, and how members leave or are removed." },
      { icon: "Users", label: "Bylaws", title: "Governing body", line: "Office bearers, their powers, terms and how elections are held." },
      { icon: "Calculator", label: "Bylaws", title: "Meetings and accounts", line: "General meetings, quorum, accounts, audit and dissolution." },
    ],
  },

  documentsSection: {
    title: "Documents for society registration in Chennai",
    lead: "The application needs details of every founding member, so collecting them early saves time.",
  },
  documents: [
    { icon: "Users", title: "For each founding member", items: ["PAN card", "Aadhaar or other ID", "Address proof", "Signature on the memorandum"], hint: "At least seven members must sign." },
    { icon: "FileSignature", title: "For the society", items: ["Memorandum of association", "Rules and regulations (bylaws)", "List of governing body members", "Resolution to register"], hint: "We draft these for your group." },
    { icon: "Home", title: "For the registered office", items: ["Address proof for the office", "Owner's consent letter, if rented or borrowed", "Recent utility bill"], hint: "The office must be in the district where you apply." },
  ],
  documentsNote: {
    title: "Get your seven members together first",
    sub: "Share your members' names and your group's purpose. We'll draft the bylaws and list each member's documents.",
    message: "Hi National Filings, we'd like to register a society. Here are our members' details.",
  },

  processSection: {
    title: "Society registration process in Chennai",
    lead: "Five steps from your founding members to a registered society.",
    cta: {
      title: "Start your society registration",
      sub: "Share your group's purpose and members. We'll draft the memorandum and bylaws for review.",
      message: "Hi National Filings, I'd like to start society registration in Chennai.",
    },
  },
  steps: [
    { title: "Members and objects", time: "Day 1", sub: "At least seven founding members and the society's purpose agreed." },
    { title: "Memorandum and bylaws", time: "2-4 days", sub: "Drafted for your group and reviewed with the members." },
    { title: "Signatures and documents", time: "1-3 days", sub: "Members sign, and their documents are collected." },
    { title: "Application filed", time: "Online", sub: "Filed with the District Registrar through TNREGINET, with the fee paid." },
    { title: "Certificate of registration", time: "After scrutiny", sub: "Issued once the Registrar is satisfied. We answer any queries." },
  ],
  processNote: "Timelines depend on the District Registrar's scrutiny and queries. The society's PAN and bank account follow registration.",

  mistakesSection: {
    title: "Society registration mistakes to avoid",
    lead: "Bylaws that are copied from elsewhere cause most problems later.",
  },
  mistakes: [
    { icon: "Users", title: "Too few signatures", problem: "Fewer than seven members signing the memorandum.", fix: "We confirm the member count and signatures before filing." },
    { icon: "FileWarning", title: "Copied bylaws", problem: "Rules that don't match how your group actually works.", fix: "We draft bylaws around your membership and elections." },
    { icon: "MapPinned", title: "Wrong office district", problem: "Applying in a district that doesn't match the office address.", fix: "We file with the Registrar for your office's district." },
    { icon: "CalendarClock", title: "Missing yearly filings", problem: "Societies forget the annual filing after registration.", fix: "We note the dates and remind you each year." },
  ],

  costSection: {
    title: "Society registration cost factors in Chennai",
    lead: "Society registration is affordable. These are the parts of the cost.",
    cta: {
      title: "Get a quote for your society",
      sub: "Tell us your society's purpose and number of members. We'll confirm the fees before we start.",
      message: "Hi National Filings, can I get a quote for society registration in Chennai?",
    },
  },
  costs: [
    { icon: "Landmark", label: "Set by the department", title: "Registration fee", line: "Paid online with the application to the District Registrar.", highlight: true },
    { icon: "FilePen", label: "Quoted upfront", title: "Memorandum and bylaws", line: "Drafting for your group, with revisions." },
    { icon: "Headset", label: "Quoted upfront", title: "Filing and follow-up", line: "Application, Registrar queries and the certificate." },
    { icon: "ReceiptIndianRupee", label: "Quoted separately", title: "Tax registrations", line: "Income tax registration and donor approval later." },
  ],

  compliance: {
    eyebrow: "After registration",
    title: "Yearly compliance for a registered society",
    lead: "A society stays in good standing by keeping its meetings, accounts and filings up to date.",
    items: [
      { icon: "Users", label: "Every year", title: "General body meeting", line: "Members approve accounts and elect office bearers as the bylaws require." },
      { icon: "Calculator", label: "Every year", title: "Accounts and audit", line: "Income and expenditure, balance sheet and audit where required.", highlight: true },
      { icon: "FileText", label: "Every year", title: "Filing with the Registrar", line: "Accounts, members' list and other details filed with the District Registrar." },
      { icon: "RefreshCw", label: "When things change", title: "Bylaw and committee changes", line: "Amendments and changes in the governing body reported to the Registrar." },
    ],
  },
  decision: {
    eyebrow: "Comparing structures",
    title: "Society, trust or Section 8 company?",
    lead: "Choose a society when members should run the organisation together.",
    items: [
      { icon: "Users", label: "Society", title: "Members in charge", line: "Elected governing body and member voting.", highlight: true },
      { icon: "ScrollText", label: "Trust", title: "Trustees in charge", line: "Fewer people involved and no elections." },
      { icon: "Building2", label: "Section 8", title: "Board in charge", line: "Company law structure with MCA filings." },
      { icon: "Landmark", label: "All three", title: "Tax registration", line: "Each can apply for income tax registration and donor approval." },
    ],
  },

  reasonsTitle: "Why choose National Filings for society registration in Chennai",
  reasons: [
    { icon: "FileSignature", title: "Bylaws for your group", line: "Membership and election rules written for how you work." },
    { icon: "Users", title: "Member paperwork handled", line: "Each member's documents and signatures collected." },
    { icon: "Globe", title: "Filed online", line: "Application filed and tracked on TNREGINET." },
    { icon: "MessageCircle", title: "Queries answered", line: "We respond to the Registrar's questions for you." },
    { icon: "CalendarCheck", title: "Yearly reminders", line: "Annual filing dates tracked after registration." },
    { icon: "ReceiptText", title: "Clear fees", line: "Government fee and our fee shown separately." },
  ],

  faqTitle: "Society registration in Chennai: your questions",
  faqs: [
    { q: "Under which law are societies registered in Chennai?", a: "Under the Tamil Nadu Societies Registration Act, 1975. Applications go to the District Registrar of the Registration Department, through the TNREGINET portal." },
    { q: "How many members are needed to register a society?", a: "At least seven persons must subscribe to the memorandum. The bylaws then set out how more members join and how the governing body is elected." },
    { q: "What is the difference between the memorandum and the bylaws?", a: "The memorandum states the society's name, address and objects. The bylaws, or rules and regulations, set out membership, meetings, elections, accounts and how the society is run." },
    { q: "How long does society registration in Chennai take?", a: "Drafting and collecting member documents usually takes about a week. After filing, the time depends on the District Registrar's scrutiny and any queries raised." },
    { q: "Does a society have yearly filings?", a: "Yes. A registered society holds its general meetings, keeps audited accounts where required and files details such as its accounts and members' list with the District Registrar each year." },
    { q: "Can a society get 12A and 80G registration?", a: "Yes. A society with charitable objects can apply for income tax registration and donor approval, now under sections 332 and 354 of the Income-tax Act, 2025." },
    { q: "Can a residents' welfare association register as a society?", a: "Yes. Many apartment and neighbourhood associations in Chennai register as societies so they can open bank accounts, manage common funds and act in their own name." },
  ],

  related: [
    { icon: "HeartHandshake", label: "NGO registration", href: pillarHref("P4") },
    { icon: "ScrollText", label: "Trust registration", href: clusterHref("P4-C1") },
    { icon: "Building2", label: "Section 8 company registration", href: clusterHref("P4-C3") },
    { icon: "ReceiptIndianRupee", label: "12A and 80G registration", href: clusterHref("P4-C4") },
    { icon: "IndianRupee", label: "Income tax consultant", href: pillarHref("P3") },
    { icon: "ReceiptIndianRupee", label: "GST consultant", href: pillarHref("P2") },
    { icon: "Signature", label: "Digital signature certificate", href: licenceHref("L6") },
    { icon: "ShieldCheck", label: "Trademark registration", href: pillarHref("P5") },
  ],
  relatedTitle: "Related NGO services in Chennai",

  final: {
    title: "Register your society in Chennai",
    sub: "Tell us about your group and members. We'll draft the bylaws and handle the registration with the District Registrar.",
    message: "Hi National Filings, I'd like to register a society in Chennai.",
  },
  catalogue: ["Society registration", "Memorandum and bylaws drafting", "Society annual filings"],
};
