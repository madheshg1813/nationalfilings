import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { SERVICE, clusterHref, licenceHref, pillarHref, relatedTitle } from "./shared";

/**
 * P1-C4 · Proprietorship Registration (/chennai/proprietorship-registration-service).
 * Primary keyword: "proprietorship registration in chennai". Secondary: "sole proprietorship registration in chennai".
 *
 * Honesty rule for this page: a proprietorship has no incorporation certificate of its own. It is "registered" through the
 * registrations its activity needs (GST, Udyam, Shop & Establishment, trade licence, FSSAI, IEC...), so the page says that
 * plainly. GST thresholds are described without figures because they differ by activity and change over time.
 */

const whatsapp = "Hi National Filings, I'd like to discuss setting up a proprietorship in Chennai.";

export const proprietorshipPage: LicencePageData = {
  id: "P1-C4",
  service: SERVICE,
  meta: {
    title: "Proprietorship Registration in Chennai | Start Your Business",
    description: "Proprietorship registration in Chennai, planned around your business. GST, Udyam, trade licence and bank account documents sorted by one expert team.",
  },
  hero: {
    headline: { line1: "Proprietorship Registration", line2Before: "in Chennai, ", accent: "Set Up Right" },
    sub: "Start trading under your own name with the registrations your business actually needs. We plan your proprietorship registration in Chennai around what you sell and where.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "Store",
    kicker: "Sole Proprietorship",
    title: "Business Registrations",
    line: "Your Business Name",
    stamp: "Ready to trade",
    chips: ["GST applied", "Udyam issued", "Bank account"],
    steps: ["Plan", "Udyam", "GST", "Licences", "Bank"],
  },

  benefitsSection: {
    title: "Why start as a sole proprietorship in Chennai",
    lead: "It's the simplest way to run a business on your own, with the fewest filings.",
    cta: {
      title: "Not sure which registrations you need?",
      sub: "Tell us what you sell and where you operate. We'll list exactly what applies, and nothing more.",
      message: "Hi National Filings, which registrations does my proprietorship need?",
    },
  },
  benefits: [
    { icon: "Zap", title: "Quick to start", line: "No incorporation filing, so you can begin once the right registrations are in place." },
    { icon: "Wallet", title: "Lowest cost", line: "No company law filings, no statutory audit under company law and minimal paperwork." },
    { icon: "UserRound", title: "Full control", line: "Every decision and every rupee of profit is yours." },
    { icon: "Calculator", title: "Simple taxation", line: "Business income is added to your own and taxed at your slab rates." },
    { icon: "ArrowLeftRight", title: "Easy to change later", line: "Move to an OPC, LLP or company when the business grows." },
    { icon: "Store", title: "Trade under a brand name", line: "Use a business name of your choice, separate from your own name." },
    { icon: "FileCheck2", title: "Few annual filings", line: "Mainly your income tax return, plus GST returns if you are registered." },
    { icon: "Landmark", title: "Business current account", line: "Open one in the business name once you hold two registrations." },
  ],

  applicantsSection: {
    title: "Who should consider a sole proprietorship",
    lead: "A proprietorship suits one owner with a business that carries modest financial risk.",
  },
  applicants: [
    { icon: "Laptop", title: "Freelancers", line: "Designers, developers, writers and consultants billing clients." },
    { icon: "Store", title: "Shop owners", line: "Retail stores, salons and repair shops." },
    { icon: "ShoppingCart", title: "Online sellers", line: "Sellers on marketplaces and their own websites." },
    { icon: "Truck", title: "Traders", line: "Wholesale and distribution businesses run by one owner." },
    { icon: "UtensilsCrossed", title: "Home food businesses", line: "Cloud kitchens, caterers and home bakers." },
    { icon: "Briefcase", title: "Local service providers", line: "Travel agents, event planners, photographers and more." },
    { icon: "Stethoscope", title: "Doctors and clinics", line: "Professionals running a practice on their own." },
    { icon: "GraduationCap", title: "Tutors and coaches", line: "Coaching centres and trainers working independently." },
  ],

  opportunities: {
    eyebrow: "Who sets up proprietorships",
    title: "Proprietorships we help set up in Chennai",
    intro: "Most small businesses in Chennai start as a sole proprietorship: tailors, home bakers, food carts and market stalls among them. Each needs a different mix of registrations.",
    // Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "Store", title: "Tailoring and boutiques", image: "https://images.unsplash.com/photo-1752946253686-a15088ab0b8f?auto=format&fit=crop&w=1600&q=90", alt: "Tailor stitching at a sewing machine", credit: "Alireza heidarpour / Unsplash" },
      { icon: "ChefHat", title: "Home bakers and caterers", image: "https://images.unsplash.com/photo-1649675602217-416a4fafcecb?auto=format&fit=crop&w=1600&q=90", alt: "Baker kneading dough on a floured table", credit: "DDP / Unsplash" },
      { icon: "Coffee", title: "Food carts and stalls", image: "https://images.unsplash.com/photo-1649495518828-a2d88f46ca8a?auto=format&fit=crop&w=1600&q=90", alt: "Sugarcane juice cart with its crushing machine", credit: "Swastik Arora / Unsplash" },
      { icon: "Leaf", title: "Flower and garland stalls", image: "https://images.unsplash.com/photo-1739125875303-f95270e3d4c5?auto=format&fit=crop&w=1600&q=90", alt: "Marigold garland stall at a market", credit: "Zoshua Colah / Unsplash" },
    ],
  },

  highlights: {
    eyebrow: "How it is registered",
    title: "Applicable registrations for a proprietorship in Chennai",
    lead: "There is no single certificate that creates a proprietorship. Your business activity decides which of these you need.",
    items: [
      { icon: "Factory", label: "Free on the portal", title: "Udyam registration", line: "Recognises you as an MSME and is accepted by banks as business proof." },
      { icon: "ReceiptIndianRupee", label: "If applicable", title: "GST registration", line: "Needed above the turnover threshold, and earlier for inter-state or marketplace sales.", highlight: true },
      { icon: "ScrollText", label: "Many trades", title: "Trade licence", line: "From the Greater Chennai Corporation or your local body, depending on the trade." },
      { icon: "Store", label: "If applicable", title: "Shop & Establishment", line: "Registration under Tamil Nadu law for shops and commercial establishments." },
    ],
  },

  documentsSection: {
    title: "Documents for proprietorship registration in Chennai",
    lead: "Most registrations use the owner's own PAN and Aadhaar, plus proof of where you do business.",
  },
  documents: [
    { icon: "UserRound", title: "For the owner", items: ["PAN card", "Aadhaar linked to your mobile", "Passport-size photo", "Personal bank account details"], hint: "Your PAN is the business's PAN. There is no separate one." },
    { icon: "Home", title: "For the place of business", items: ["Rent agreement or ownership proof", "Recent electricity bill", "Consent letter, if the premises belong to someone else"], hint: "A home address can be used for many businesses." },
    { icon: "FileText", title: "For specific registrations", items: ["Business name and activity", "Photos of the premises, for GST", "Food safety details, for FSSAI"], hint: "We tell you exactly what each registration needs." },
  ],
  documentsNote: {
    title: "Sole proprietorship registration in Chennai starts with a plan",
    sub: "Tell us what you sell, how and where. We'll map the registrations and the documents for each one.",
    message: "Hi National Filings, I'm starting a sole proprietorship in Chennai. What do I need?",
  },

  processSection: {
    title: "How we set up your proprietorship in Chennai",
    lead: "The order matters. Some registrations are needed before others can be applied for.",
    cta: {
      title: "Discuss your business setup",
      sub: "Share your business idea and location. We'll give you the list of registrations and a quote.",
      message: "Hi National Filings, I'd like to discuss my business setup as a proprietor.",
    },
  },
  steps: [
    { title: "Activity review", time: "Day 1", sub: "We look at what you sell, where and to whom, and list what applies." },
    { title: "Udyam registration", time: "Same day", sub: "Done online with your Aadhaar and PAN, usually first." },
    { title: "GST, if needed", time: "Usually 7-10 working days", sub: "Filed with business address proof, then verified by the department." },
    { title: "Local licences", time: "Varies by authority", sub: "Trade licence, Shop & Establishment, FSSAI or others, as applicable." },
    { title: "Current account", time: "After certificates", sub: "Banks usually ask for two registrations in the business name." },
  ],
  processNote: "Timelines depend on each department. We tell you which registrations take longest so you can plan your launch.",

  mistakesSection: {
    title: "Common compliance mistakes by proprietors",
    lead: "Small businesses often learn these the hard way. Most are easy to avoid with a little planning.",
  },
  mistakes: [
    { icon: "Wallet", title: "Mixing personal and business money", problem: "One bank account for everything makes tax and GST records hard to defend.", fix: "We help you open a current account as soon as you have two business registrations." },
    { icon: "ReceiptIndianRupee", title: "Late GST registration", problem: "Selling across states or on marketplaces without GST, or crossing the threshold unnoticed.", fix: "We check your sales model and register at the right time." },
    { icon: "CalendarClock", title: "Missed renewals", problem: "Trade licences and FSSAI registrations lapse while the business runs on.", fix: "We note the renewal dates for every licence you hold." },
    { icon: "FileWarning", title: "Wrong activity details", problem: "Udyam or GST codes that don't match the real business cause problems later.", fix: "We choose activity codes based on what you actually do." },
  ],

  costSection: {
    title: "Proprietorship setup cost factors in Chennai",
    lead: "Cost depends on how many registrations your activity needs. Many proprietors need only two or three.",
    cta: {
      title: "Get a quote for your setup",
      sub: "Tell us your business activity. We'll list each registration, its government fee if any, and our fee.",
      message: "Hi National Filings, can I get a quote to set up my proprietorship in Chennai?",
    },
  },
  costs: [
    { icon: "Landmark", label: "₹0 government fee", title: "Udyam registration", line: "Free on the official portal. You pay only for help, if you want it." },
    { icon: "ReceiptIndianRupee", label: "₹0 government fee", title: "GST registration", line: "No government fee for GST registration itself.", highlight: true },
    { icon: "ScrollText", label: "Set by the authority", title: "Local licences", line: "Trade licence and other fees vary by trade, area and authority." },
    { icon: "Headset", label: "Quoted upfront", title: "Professional fee", line: "Depends on the registrations you need, quoted before we start." },
  ],

  decision: {
    eyebrow: "Benefits and limits",
    title: "When another structure may suit you better",
    lead: "A proprietorship is ideal to start. These signs suggest it's time to look at other options.",
    items: [
      { icon: "ShieldAlert", label: "Limitation", title: "Unlimited liability", line: "Your personal assets can be used to pay business debts. If the risk is real, consider an OPC or LLP.", highlight: true },
      { icon: "Users", label: "Limitation", title: "Adding a partner", line: "A proprietorship has one owner. A partnership firm or LLP suits two or more." },
      { icon: "TrendingUp", label: "Limitation", title: "Raising investment", line: "Investors can't buy into a proprietorship. A private limited company can issue shares." },
      { icon: "Calculator", label: "Consider", title: "Higher profits", line: "At higher incomes, a company's tax rates may suit you better. We can compare." },
    ],
  },

  reasonsTitle: "Why choose National Filings for proprietorship registration in Chennai",
  reasons: [
    { icon: "ListTree", title: "Only what you need", line: "We list the registrations that apply to your activity, nothing extra." },
    { icon: "Clock", title: "Right order", line: "Registrations sequenced so your bank account isn't held up." },
    { icon: "ReceiptText", title: "Clear fees", line: "Government fees, where any apply, shown apart from our fee." },
    { icon: "CalendarClock", title: "Renewal reminders", line: "Licence renewal dates tracked for you." },
    { icon: "ArrowLeftRight", title: "Ready to grow", line: "Help moving to an OPC, LLP or company later." },
    { icon: "MessageCircle", title: "WhatsApp updates", line: "Documents and updates on WhatsApp, Monday to Saturday." },
  ],

  faqTitle: "Proprietorship registration in Chennai: your questions",
  faqs: [
    { q: "Is there a registration certificate for a sole proprietorship?", a: "No. A proprietorship isn't incorporated like a company or LLP, so there's no single certificate. It's recognised through registrations such as Udyam, GST, Shop & Establishment or a trade licence, depending on the business activity." },
    { q: "Which registrations does a proprietorship in Chennai need?", a: "It depends on what you do. Most start with Udyam. GST applies above the turnover threshold or for inter-state and marketplace sales. Shops and establishments may need registration under Tamil Nadu law, many trades need a Corporation trade licence, and food businesses need FSSAI." },
    { q: "Do I need a separate PAN for my proprietorship?", a: "No. The proprietor's own PAN is used for the business, including for GST and income tax. Business income is shown in your personal income tax return." },
    { q: "How do I open a current account for my proprietorship?", a: "Banks usually ask for two documents that show the business name, such as a GST certificate, Udyam certificate or Shop & Establishment registration, along with your own KYC. We plan your registrations so you have these early." },
    { q: "Can I use a brand name for my proprietorship?", a: "Yes. You can trade under any business name, and it appears on your GST and Udyam registrations. Registering the name as a trademark is a separate step that protects it from others." },
    { q: "How much does proprietorship registration in Chennai cost?", a: "Udyam and GST registration have no government fee. Local licences carry fees set by the authority. Our fee depends on the registrations you need and is confirmed upfront." },
    { q: "When should I move from a proprietorship to another structure?", a: "When you bring in a partner, want outside investment, take on contracts with real liability or your profits grow large. An OPC, LLP or private limited company may then suit you better." },
  ],

  related: [
    { icon: "Building2", label: "Company registration", href: pillarHref("P1") },
    { icon: "UserRound", label: "One person company registration", href: clusterHref("P1-C2") },
    { icon: "Users", label: "Partnership firm registration", href: clusterHref("P1-C3") },
    { icon: "Factory", label: "MSME registration", href: licenceHref("L1") },
    { icon: "ReceiptIndianRupee", label: "GST consultant", href: pillarHref("P2") },
    { icon: "ScrollText", label: "Trade license", href: licenceHref("L3") },
    { icon: "Store", label: "Shop & establishment registration", href: licenceHref("L4") },
    { icon: "UtensilsCrossed", label: "FSSAI registration", href: licenceHref("L2") },
  ],
  relatedTitle,

  final: {
    title: "Discuss your business setup in Chennai",
    sub: "Tell us what you plan to sell and where. We'll tell you which registrations you need and what they cost.",
    message: "Hi National Filings, I'd like to discuss setting up my proprietorship in Chennai.",
  },
  catalogue: ["Sole proprietorship setup", "Udyam and GST registration for proprietors", "Local licence registration"],
};
