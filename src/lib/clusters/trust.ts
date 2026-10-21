import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { NGO_SERVICE, clusterHref, licenceHref, pillarHref } from "./shared";

/**
 * P4-C1 · Trust Registration Service (/chennai/trust-registration-service).
 * Primary keyword: "trust registration service chennai". Secondary: "trust registration in chennai",
 * "charitable trust registration in chennai". Extra H2: trust deed drafting.
 *
 * Facts checked Oct 2026: Tamil Nadu has no separate public trusts act or public trust register, so a charitable trust is
 * created by a trust deed registered with the Sub-Registrar (Registration Department, TNREGINET), with the settlor and
 * two witnesses. Stamp duty depends on the corpus and any property settled, so no amount is quoted. Tax registration and
 * donor approval (formerly 12A/12AB and 80G) are now sections 332 and 354 of the Income-tax Act, 2025, from 1 April 2026.
 * Hindu religious and charitable endowments can also come under the state HR&CE law, so religious trusts get a caution.
 */

export const trustPage: LicencePageData = {
  id: "P4-C1",
  service: NGO_SERVICE,
  meta: {
    title: "Trust Registration Service Chennai | Charitable Trust Deed",
    description: "Trust registration service in Chennai with a clear trust deed, stamp duty and Sub-Registrar registration handled, plus PAN and 12A and 80G next.",
  },
  hero: {
    headline: { line1: "Trust Registration Service", line2Before: "in Chennai, ", accent: "Done Properly" },
    sub: "Give your charity a registered home with a trust deed that will stand the test of time. Our trust registration service in Chennai covers the deed, registration and next steps.",
    badges: heroTrustPoints,
    whatsapp: "Hi National Filings, I'd like a consultation about trust registration in Chennai.",
  },
  illustration: {
    icon: "ScrollText",
    kicker: "Charitable Trust",
    title: "Trust Deed",
    line: "Your Foundation Trust",
    stamp: "Registered",
    chips: ["Deed drafted", "Stamp duty paid", "Sub-Registrar"],
    steps: ["Plan", "Deed", "Stamp", "Register", "PAN"],
  },

  benefitsSection: {
    title: "Benefits of charitable trust registration in Chennai",
    lead: "A registered trust is the simplest way for a small group to run a charity with legal standing.",
    cta: {
      title: "Is a trust the right structure for you?",
      sub: "Tell us your cause and who will run it. We'll compare a trust, a society and a Section 8 company for you.",
      message: "Hi National Filings, is a trust the right structure for my charity?",
    },
  },
  benefits: [
    { icon: "ScrollText", title: "Legal standing", line: "A registered deed proves the trust exists and what it is for." },
    { icon: "Landmark", title: "Bank account in its name", line: "Banks open accounts for trusts against the registered deed and PAN." },
    { icon: "ReceiptIndianRupee", title: "Tax exemption eligibility", line: "A registered trust can apply for income tax registration and donor approval." },
    { icon: "Users", title: "Run by trustees", line: "No members or elections. The trustees named in the deed manage it." },
    { icon: "Building2", title: "Can hold property", line: "Land, buildings and funds held for the charity, not for individuals." },
    { icon: "BadgeCheck", title: "Donor confidence", line: "Donors and partners prefer a registered, documented charity." },
    { icon: "RefreshCw", title: "Continuity", line: "New trustees can be appointed as set out in the deed." },
    { icon: "Zap", title: "Quick to set up", line: "Often the fastest NGO structure to register in Tamil Nadu." },
  ],

  applicantsSection: {
    title: "Who registers a charitable trust in Chennai",
    lead: "A trust suits founders who want to run a cause with a small, trusted group of trustees.",
  },
  applicants: [
    { icon: "Users", title: "Families giving back", line: "A family foundation for a cause they care about." },
    { icon: "GraduationCap", title: "Education causes", line: "Scholarships, tuition support and school programmes." },
    { icon: "Stethoscope", title: "Health causes", line: "Medical camps, patient support and health awareness." },
    { icon: "Leaf", title: "Environment groups", line: "Tree planting, water bodies and clean-up drives." },
    { icon: "UtensilsCrossed", title: "Food and relief", line: "Meal programmes and disaster relief work." },
    { icon: "Briefcase", title: "Business owners", line: "Entrepreneurs setting up a charitable arm." },
    { icon: "HeartHandshake", title: "Community welfare", line: "Support for women, elders and people in need." },
    { icon: "Landmark", title: "Religious trusts", line: "Possible too, though some may also fall under state endowment law." },
  ],

  opportunities: {
    eyebrow: "Causes we help register",
    title: "Charitable trusts at work across Tamil Nadu",
    intro: "From community kitchens to education support, charitable trust registration in Chennai gives everyday causes the legal footing to grow and attract donors.",
    // Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "UtensilsCrossed", title: "Food and community meals", image: "https://images.unsplash.com/photo-1660015154403-0fd84e5d810d?auto=format&fit=crop&w=1600&q=90", alt: "Volunteer serving food to people seated outdoors", credit: "katyayan gauniyal / Unsplash" },
      { icon: "GraduationCap", title: "Education support", image: "https://images.unsplash.com/photo-1642140027860-0fec3fdea8cf?auto=format&fit=crop&w=1600&q=90", alt: "Schoolboy in uniform sitting in a classroom", credit: "Anjan / Unsplash" },
      { icon: "Package", title: "Relief drives", image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?auto=format&fit=crop&w=1600&q=90", alt: "Volunteers sorting donated food items", credit: "Joel Muniz / Unsplash" },
      { icon: "HeartHandshake", title: "Women's welfare", image: "https://images.unsplash.com/photo-1609252509229-364936a1d1a2?auto=format&fit=crop&w=1600&q=90", alt: "Group of women sitting together in a field", credit: "amol sonar / Unsplash" },
    ],
  },

  highlights: {
    eyebrow: "Trust deed drafting",
    title: "What your trust deed should cover",
    lead: "The trust deed is the trust's constitution. Getting it right now saves problems with banks, donors and the tax department later.",
    items: [
      { icon: "Leaf", label: "Essential", title: "Charitable objects", line: "Clear, public charitable purposes. Vague or private objects can block tax registration.", highlight: true },
      { icon: "Users", label: "Essential", title: "Trustees and powers", line: "Who the trustees are, how decisions are made and who signs for the trust." },
      { icon: "Coins", label: "Essential", title: "Corpus and funds", line: "The initial corpus and how funds are used, invested and accounted for." },
      { icon: "RefreshCw", label: "Recommended", title: "Succession and dissolution", line: "Appointing new trustees, amending the deed, and assets going to a similar charity if wound up." },
    ],
  },

  documentsSection: {
    title: "Documents for trust registration in Chennai",
    lead: "Keep originals ready for the day of registration at the Sub-Registrar's office.",
  },
  documents: [
    { icon: "UserRound", title: "For the settlor", items: ["PAN card", "Aadhaar or passport", "Passport-size photos", "Address proof"], hint: "The settlor creates the trust and signs the deed." },
    { icon: "Users", title: "For each trustee", items: ["PAN card", "Aadhaar or passport", "Passport-size photo", "Mobile number and email ID"], hint: "Most trusts have at least two trustees." },
    { icon: "Home", title: "For the trust office", items: ["Address proof for the office", "Owner's consent letter, if needed", "Details of the corpus or any property"], hint: "Two witnesses with ID are needed at registration." },
  ],
  documentsNote: {
    title: "Start with your objects and trustees",
    sub: "Tell us what the trust will do and who will run it. We'll draft the deed around that and list exactly what to bring.",
    message: "Hi National Filings, I'd like to start drafting a trust deed.",
  },

  processSection: {
    title: "Trust registration process in Chennai",
    lead: "Five steps from your idea to a registered trust with its own PAN.",
    cta: {
      title: "Start your trust registration",
      sub: "Share your cause and your trustees' details. We'll draft the deed and book the registration.",
      message: "Hi National Filings, I'd like to register a charitable trust in Chennai.",
    },
  },
  steps: [
    { title: "Objects and trustees", time: "Day 1", sub: "We agree the trust's purpose, name, trustees and corpus with you." },
    { title: "Deed drafted", time: "2-3 days", sub: "A trust deed written for your cause, reviewed until you're happy." },
    { title: "Stamp duty paid", time: "1 day", sub: "Duty worked out under Tamil Nadu rates and paid." },
    { title: "Registration", time: "On the booked date", sub: "Deed signed and registered at the Sub-Registrar's office with two witnesses." },
    { title: "PAN and bank account", time: "1-2 weeks", sub: "PAN in the trust's name, then a bank account." },
  ],
  processNote: "Times are estimates and depend on Sub-Registrar availability and PAN processing.",

  mistakesSection: {
    title: "Trust deed mistakes that cause problems later",
    lead: "Most issues with banks or tax registration trace back to the deed.",
  },
  mistakes: [
    { icon: "FileWarning", title: "Vague objects", problem: "Objects like \"social work\" alone can be questioned during tax registration.", fix: "We write specific, public charitable objects." },
    { icon: "RefreshCw", title: "No succession clause", problem: "The trust stalls when a trustee dies or steps down.", fix: "We set out how new trustees are appointed." },
    { icon: "Lock", title: "Revocable deed", problem: "A trust the settlor can cancel doesn't qualify for tax exemption.", fix: "We draft the trust as irrevocable." },
    { icon: "Users", title: "Private benefit", problem: "Clauses that favour trustees or their families block exemption.", fix: "We keep benefits for the public cause only." },
  ],

  costSection: {
    title: "Trust registration cost factors in Chennai",
    lead: "The total depends mostly on the corpus and whether property is settled in the deed.",
    cta: {
      title: "Get a quote for your trust",
      sub: "Tell us the corpus and whether any property goes into the trust. We'll confirm duty, fees and our fee.",
      message: "Hi National Filings, can I get a quote for trust registration in Chennai?",
    },
  },
  costs: [
    { icon: "Stamp", label: "As per state rules", title: "Stamp duty", line: "Based on the corpus and any property settled in the deed.", highlight: true },
    { icon: "Landmark", label: "Set by the department", title: "Registration fee", line: "Paid at the Sub-Registrar's office for registering the deed." },
    { icon: "Headset", label: "Quoted upfront", title: "Professional fee", line: "Deed drafting, registration support, PAN and bank account help." },
    { icon: "ReceiptIndianRupee", label: "Quoted separately", title: "Tax registrations", line: "Income tax registration and donor approval after the trust is formed." },
  ],

  compliance: {
    eyebrow: "After registration",
    title: "What a new trust does next",
    lead: "Registration is the first step. These make the trust ready to receive funds.",
    items: [
      { icon: "IdCard", label: "First", title: "Trust PAN", line: "A PAN in the trust's name, needed for banking and tax." },
      { icon: "Landmark", label: "Then", title: "Bank account", line: "A separate account so trust money never mixes with personal funds." },
      { icon: "ReceiptIndianRupee", label: "Recommended", title: "12A and 80G", line: "Income tax registration and donor approval, now under sections 332 and 354.", highlight: true },
      { icon: "Calculator", label: "Every year", title: "Books, audit and return", line: "Accounts kept, audited where required, and an income tax return filed." },
    ],
  },
  decision: {
    eyebrow: "Comparing structures",
    title: "Trust, society or Section 8 company?",
    lead: "All three can run a charity. They differ in how they are governed and registered.",
    items: [
      { icon: "ScrollText", label: "Trust", title: "Run by trustees", line: "Simple, quick and private. Best for a small founding group.", highlight: true },
      { icon: "Users", label: "Society", title: "Run by members", line: "At least seven members and an elected governing body." },
      { icon: "Building2", label: "Section 8", title: "Run by a board", line: "Most formal, with MCA filings. Often preferred for large CSR grants." },
      { icon: "Landmark", label: "All three", title: "Tax registration", line: "Each can apply for income tax registration and donor approval." },
    ],
  },

  reasonsTitle: "Why choose National Filings for trust registration in Chennai",
  reasons: [
    { icon: "FileSignature", title: "Deeds built to last", line: "Objects, succession and dissolution written for exemption." },
    { icon: "Stamp", title: "Duty worked out", line: "Stamp duty confirmed before you pay." },
    { icon: "CalendarCheck", title: "Registration booked", line: "Sub-Registrar slot and witnesses arranged with you." },
    { icon: "ReceiptIndianRupee", title: "Ready for 12A and 80G", line: "The deed drafted with tax registration in mind." },
    { icon: "ReceiptText", title: "Clear fees", line: "Stamp duty, registration fee and our fee listed separately." },
    { icon: "MessageCircle", title: "WhatsApp updates", line: "Draft deeds and status updates on WhatsApp." },
  ],

  faqTitle: "Trust registration in Chennai: your questions",
  faqs: [
    { q: "How do I register a charitable trust in Chennai?", a: "Draft a trust deed setting out the objects, trustees and corpus, pay stamp duty, and register the deed at the Sub-Registrar's office with the settlor and two witnesses. The trust then applies for its own PAN and bank account." },
    { q: "How many trustees does a trust need?", a: "The law doesn't fix a minimum, but most charitable trusts have at least two trustees so decisions and signing are shared. The deed sets out how trustees are appointed and replaced." },
    { q: "Is there a separate public trust registration in Tamil Nadu?", a: "No. Tamil Nadu has no separate public trusts act or public trust register, so registering the trust deed with the Sub-Registrar is the main step. Some Hindu religious trusts may also come under the state's endowments law." },
    { q: "How long does trust registration in Chennai take?", a: "Drafting and agreeing the deed usually takes a few days, and registration happens on the booked date at the Sub-Registrar's office. The trust PAN typically follows within one to two weeks." },
    { q: "How much does trust registration cost?", a: "It depends mainly on stamp duty, which is based on the corpus and any property settled in the deed, plus the registration fee and our professional fee. We confirm each part before you pay." },
    { q: "Can a trust get 12A and 80G registration?", a: "Yes. Once registered, a charitable trust can apply for income tax registration and donor approval, formerly sections 12A and 80G and, from April 2026, sections 332 and 354 of the Income-tax Act, 2025." },
    { q: "Can the trust deed be changed later?", a: "Changes are possible if the deed allows amendment, usually through a supplementary deed. Changes to objects should be handled carefully, as they can affect tax registration." },
    { q: "Should I choose a trust or a society?", a: "A trust suits a small group who want to run a cause with minimal formality. A society suits membership-based groups that want elected leadership. We can compare both for your case." },
  ],

  related: [
    { icon: "HeartHandshake", label: "NGO registration", href: pillarHref("P4") },
    { icon: "Users", label: "Society registration", href: clusterHref("P4-C2") },
    { icon: "Building2", label: "Section 8 company registration", href: clusterHref("P4-C3") },
    { icon: "ReceiptIndianRupee", label: "12A and 80G registration", href: clusterHref("P4-C4") },
    { icon: "IndianRupee", label: "Income tax consultant", href: pillarHref("P3") },
    { icon: "ShieldCheck", label: "Trademark registration", href: pillarHref("P5") },
    { icon: "Signature", label: "Digital signature certificate", href: licenceHref("L6") },
    { icon: "Users", label: "PF and ESI consultant", href: pillarHref("P6") },
  ],
  relatedTitle: "Related NGO services in Chennai",

  final: {
    title: "Register your charitable trust in Chennai",
    sub: "Tell us about your cause and trustees. We'll draft the deed, confirm the costs and handle the registration.",
    message: "Hi National Filings, I'd like to register a charitable trust in Chennai.",
  },
  catalogue: ["Charitable trust registration", "Trust deed drafting", "Trust PAN application"],
};
