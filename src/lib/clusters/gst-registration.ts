import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { GST_SERVICE, clusterHref, licenceHref, pillarHref } from "./shared";

/**
 * P2-C1 · GST Registration Service (/chennai/gst-registration-service).
 * Primary keyword: "gst registration service chennai". Secondary: "gst registration in chennai".
 * Extra H2 for the service SERP: GST amendment / modification.
 *
 * Facts checked Oct 2026: thresholds ₹40 lakh (goods) and ₹20 lakh (services) for most Tamil Nadu businesses; composition up to
 * ₹1.5 crore (goods) or ₹50 lakh (services); no government fee; Rule 9A (from 1 Nov 2025) grants registration within three
 * working days after Aadhaar authentication unless the system flags the applicant as high risk; optional Rule 14A simplified
 * registration for small B2B suppliers; amendments within 15 days of a change, core fields need officer approval.
 */

const whatsapp = "Hi National Filings, I'd like a consultation about GST registration in Chennai.";

export const gstRegistrationPage: LicencePageData = {
  id: "P2-C1",
  service: GST_SERVICE,
  meta: {
    title: "GST Registration Service Chennai | Get Your GSTIN Online",
    description: "GST registration service in Chennai with the right category, HSN codes and Aadhaar authentication handled. No government fee, clear quote, fast GSTIN.",
  },
  hero: {
    headline: { line1: "GST Registration Service", line2Before: "in Chennai, ", accent: "Done Right" },
    sub: "Get your GSTIN with the right registration type, business details and HSN or SAC codes from day one. Our GST registration service in Chennai handles it end to end.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "ReceiptIndianRupee",
    kicker: "GST Registration",
    title: "GST Certificate",
    line: "GSTIN 33XXXXX0000X1ZX",
    stamp: "Approved",
    chips: ["Aadhaar verified", "HSN codes set", "ARN generated"],
    steps: ["Check", "Documents", "REG-01", "Verify", "GSTIN"],
  },

  benefitsSection: {
    title: "Benefits of GST registration in Chennai",
    lead: "A GSTIN is a legal requirement for many businesses, and a commercial advantage for many more.",
    cta: {
      title: "Not sure you need to register yet?",
      sub: "Tell us your turnover, what you sell and where your customers are. We'll tell you if GST registration is required.",
      message: "Hi National Filings, do I need GST registration for my business?",
    },
  },
  benefits: [
    { icon: "ShieldCheck", title: "Legal to collect GST", line: "Only registered businesses can charge GST and issue tax invoices." },
    { icon: "Coins", title: "Input tax credit", line: "Claim back the GST you pay on purchases against the tax you collect." },
    { icon: "Truck", title: "Sell across states", line: "Inter-state supply of goods generally needs a GSTIN, whatever your turnover." },
    { icon: "ShoppingCart", title: "Sell on marketplaces", line: "Most ecommerce platforms ask sellers for a GSTIN before listing." },
    { icon: "Briefcase", title: "Win B2B clients", line: "Business buyers prefer registered suppliers so they can claim credit." },
    { icon: "Landmark", title: "Bank account and loans", line: "The GST certificate is widely accepted as proof of a business." },
    { icon: "FileCheck2", title: "Tenders and contracts", line: "Government and corporate buyers usually ask for a valid GSTIN." },
    { icon: "Calculator", title: "Composition option", line: "Small businesses can choose a simpler scheme with a lower flat rate." },
  ],

  applicantsSection: {
    title: "Who must apply for GST registration in Chennai",
    lead: "Registration depends on your turnover, what you sell and how you sell it.",
  },
  applicants: [
    { icon: "TrendingUp", title: "Above the turnover limit", line: "₹40 lakh for goods and ₹20 lakh for services, for most Tamil Nadu businesses." },
    { icon: "Truck", title: "Inter-state suppliers", line: "Businesses supplying goods to other states." },
    { icon: "ShoppingCart", title: "Ecommerce sellers", line: "Most sellers on online marketplaces, with limited exceptions." },
    { icon: "Store", title: "Casual taxable persons", line: "Traders selling at exhibitions or events away from home." },
    { icon: "RefreshCw", title: "Reverse charge buyers", line: "Businesses liable to pay tax on specified purchases themselves." },
    { icon: "Globe", title: "Exporters", line: "To export under LUT and claim GST refunds." },
    { icon: "Building2", title: "New companies and LLPs", line: "Registered alongside incorporation, or soon after." },
    { icon: "BadgeCheck", title: "Voluntary registration", line: "Smaller businesses that want input credit and credibility." },
  ],

  opportunities: {
    eyebrow: "Who registers",
    title: "Businesses that get their GSTIN with us",
    intro: "From retail stores and distributors to manufacturers, GST registration in Chennai is one of the first steps for businesses that want to trade widely and claim input credit.",
    // Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "Store", title: "Retail stores", image: "https://images.unsplash.com/photo-1640181637089-cce4a3040ed2?auto=format&fit=crop&w=1600&q=90", alt: "Clothing stores with mannequins along a market arcade", credit: "Shruti Singh / Unsplash" },
      { icon: "Package", title: "Wholesalers and distributors", image: "https://images.unsplash.com/photo-1664382953403-fc1ac77073a0?auto=format&fit=crop&w=1600&q=90", alt: "Two people walking through a stocked warehouse aisle", credit: "Centre for Ageing Better / Unsplash" },
      { icon: "Truck", title: "Inter-state traders", image: "https://images.unsplash.com/photo-1774946103680-3d34a461a581?auto=format&fit=crop&w=1600&q=90", alt: "Stacks of sacks and containers in a warehouse", credit: "UZ Creative Services / Unsplash" },
      { icon: "Factory", title: "Manufacturers", image: "https://images.unsplash.com/photo-1777464375799-768774f30542?auto=format&fit=crop&w=1600&q=90", alt: "Factory floor with production machinery", credit: "Aditi Toys / Unsplash" },
    ],
  },

  highlights: {
    eyebrow: "Registration types",
    title: "Choose the right GST registration in Chennai",
    lead: "The type you register under decides your tax rate, returns and input credit. We help you pick before filing.",
    items: [
      { icon: "FileCheck2", label: "Most businesses", title: "Regular registration", line: "Charge GST, claim input credit and file monthly or quarterly returns.", highlight: true },
      { icon: "Calculator", label: "Smaller turnover", title: "Composition scheme", line: "A flat rate on turnover, for goods up to ₹1.5 crore or services up to ₹50 lakh. No input credit." },
      { icon: "Zap", label: "Optional, from Nov 2025", title: "Simplified registration", line: "For small suppliers whose monthly B2B output tax is up to ₹2.5 lakh." },
      { icon: "Store", label: "Short term", title: "Casual taxable person", line: "For exhibitions or seasonal trade in a state where you have no fixed place of business." },
    ],
  },

  documentsSection: {
    title: "Documents for GST registration in Chennai",
    lead: "Clear scans are enough. The business address proof is where most applications get stuck.",
  },
  documents: [
    { icon: "UserRound", title: "For the owner, partners or directors", items: ["PAN card", "Aadhaar linked to a mobile number", "Passport-size photo", "Email ID and mobile number"], hint: "Aadhaar authentication is what makes quick approval possible." },
    { icon: "Home", title: "For the place of business", items: ["Electricity bill or property tax receipt", "Rent agreement, if rented", "Consent letter, if the premises belong to a relative or someone else"], hint: "A home address can be used if it's where you do business." },
    { icon: "Building2", title: "For the business", items: ["PAN of the business, for firms and companies", "Partnership deed or incorporation certificate", "Bank statement or cancelled cheque", "Authorisation letter for the signatory"], hint: "Companies and LLPs sign with a digital signature." },
  ],
  documentsNote: {
    title: "Not sure your address proof will work?",
    sub: "Send a photo of the bill and tell us who owns the property. We'll check it before the application goes in.",
    message: "Hi National Filings, can you check my documents for GST registration?",
  },

  processSection: {
    title: "GST registration process in Chennai",
    lead: "Five steps from your documents to the GST certificate.",
    cta: {
      title: "Ready to get your GSTIN?",
      sub: "Share your PAN, Aadhaar and address proof. We'll confirm the registration type and file the application.",
      message: "Hi National Filings, I'm ready to apply for GST registration. What do you need?",
    },
  },
  steps: [
    { title: "Eligibility and type", time: "Day 1", sub: "We confirm whether you must register and the right type for you." },
    { title: "Documents and codes", time: "1 day", sub: "Address proof checked and HSN or SAC codes chosen for what you sell." },
    { title: "Application filed", time: "Same day", sub: "Form REG-01 filed and Aadhaar authentication completed." },
    { title: "Verification", time: "3 working days for most", sub: "Low-risk applications are approved within three working days. Others may get a query or a site visit." },
    { title: "GSTIN issued", time: "On approval", sub: "Your GST certificate in Form REG-06, downloadable from the portal." },
  ],
  processNote: "Applications the system flags for verification can take longer. We answer any officer query for you.",

  mistakesSection: {
    title: "GST registration mistakes that delay approval",
    lead: "Most queries and rejections come from details that can be checked before filing.",
  },
  mistakes: [
    { icon: "Home", title: "Weak address proof", problem: "An old bill, an unsigned consent letter or an address that doesn't match.", fix: "We check every address document before uploading it." },
    { icon: "IdCard", title: "Name mismatch with PAN", problem: "The business or owner name differs from the PAN records.", fix: "We match names and dates exactly with PAN data." },
    { icon: "ListTree", title: "Wrong HSN or SAC codes", problem: "Codes that don't match what you sell cause problems in returns later.", fix: "We pick codes based on your actual products and services." },
    { icon: "Fingerprint", title: "Skipping Aadhaar authentication", problem: "Without it, the application goes to physical verification and takes longer.", fix: "We complete authentication with you while filing." },
  ],

  costSection: {
    title: "GST registration cost in Chennai",
    lead: "The government charges nothing to register. You pay only for professional help, if you want it.",
    cta: {
      title: "Get a quote for GST registration",
      sub: "Tell us your business type and what you sell. We'll confirm our fee before we start.",
      message: "Hi National Filings, can I get a quote for GST registration in Chennai?",
    },
  },
  costs: [
    { icon: "Landmark", label: "₹0", title: "Government fee", line: "GST registration is free on the official portal.", highlight: true },
    { icon: "Headset", label: "Quoted upfront", title: "Professional fee", line: "Type selection, codes, filing and follow-up until approval." },
    { icon: "Signature", label: "If needed", title: "Digital signature", line: "Companies and LLPs sign the application with a DSC." },
    { icon: "FilePen", label: "Quoted separately", title: "Later amendments", line: "Changes to address, partners or business details after registration." },
  ],

  compliance: {
    eyebrow: "After registration",
    title: "GST amendment and modification in Chennai",
    lead: "When your business details change, the registration must be updated, usually within 15 days of the change.",
    items: [
      { icon: "FilePen", label: "Needs approval", title: "Core field changes", line: "Business name, principal place of business, or partners and directors, through Form REG-14.", highlight: true },
      { icon: "RefreshCw", label: "Updated instantly", title: "Non-core changes", line: "Contact details, bank account and similar details, without officer approval." },
      { icon: "MapPinned", label: "Amendment", title: "Additional place of business", line: "Add a new godown, branch or shop in the same state." },
      { icon: "TriangleAlert", label: "New registration", title: "Change of PAN", line: "A new structure with a new PAN, such as a proprietor becoming a company, needs a fresh GSTIN." },
    ],
  },
  decision: {
    eyebrow: "Regular or composition?",
    title: "Which GST scheme suits your business",
    lead: "The composition scheme is simpler, but it doesn't suit every business.",
    items: [
      { icon: "Coins", label: "Regular", title: "Need input credit", line: "Choose regular registration if your purchases carry GST you want to claim back." },
      { icon: "Briefcase", label: "Regular", title: "Selling to businesses", line: "B2B buyers need your tax invoices to claim credit. Composition dealers can't issue them." },
      { icon: "Calculator", label: "Composition", title: "Small local sales", line: "Composition can suit small shops selling mostly to consumers within the state.", highlight: true },
      { icon: "Truck", label: "Regular", title: "Selling across states", line: "Composition dealers generally can't make inter-state supplies of goods." },
    ],
  },

  reasonsTitle: "Why choose National Filings for GST registration in Chennai",
  reasons: [
    { icon: "SearchCheck", title: "Right type, first time", line: "Regular, composition or simplified, chosen with you before filing." },
    { icon: "ListTree", title: "Codes that fit", line: "HSN and SAC codes matched to what you actually sell." },
    { icon: "Home", title: "Address proof checked", line: "The most common reason for queries, sorted before filing." },
    { icon: "MessageCircle", title: "Officer queries handled", line: "Clarifications and site visit preparation taken care of." },
    { icon: "FilePen", title: "Amendments later", line: "Address, partner or business changes filed when they happen." },
    { icon: "CalendarCheck", title: "Ready for returns", line: "Your first return dates explained the day your GSTIN arrives." },
  ],

  faqTitle: "GST registration in Chennai: your questions",
  faqs: [
    { q: "Who needs GST registration in Chennai?", a: "For most Tamil Nadu businesses, registration is required once turnover crosses ₹40 lakh for goods or ₹20 lakh for services. It is also needed regardless of turnover for inter-state supply of goods, most ecommerce sellers, casual taxable persons and some other cases." },
    { q: "How long does GST registration take?", a: "Since 1 November 2025, applications from low-risk applicants who complete Aadhaar authentication are approved within three working days. Applications flagged for verification can take longer, especially if the officer raises a query or visits the premises." },
    { q: "Is there a government fee for GST registration?", a: "No. GST registration is free on the official portal. Our professional fee for the GST registration service in Chennai covers the type selection, codes, filing and follow-up, and is confirmed upfront." },
    { q: "Can I register for GST using my home address?", a: "Yes, if you run the business from there. You need an electricity bill or property tax receipt for the address, and a consent letter if the property is in someone else's name." },
    { q: "What is the composition scheme?", a: "A simpler option for small businesses with turnover up to ₹1.5 crore for goods or ₹50 lakh for services. You pay a flat rate on turnover and file fewer returns, but you can't claim input tax credit or charge GST on invoices." },
    { q: "How do I change details in my GST registration?", a: "File an amendment within 15 days of the change. Changes to core details such as the business name, principal address or partners need officer approval, while contact and bank details update without approval." },
    { q: "Do I need separate GST registration for each state?", a: "Yes. GST registration is state-wise, so a business with a place of business in another state needs a separate GSTIN there." },
    { q: "What happens after I get my GSTIN?", a: "Your return filing starts from the date of registration. Depending on your scheme, that means monthly or quarterly returns. We can handle GST return filing for you from the first month." },
  ],

  related: [
    { icon: "ReceiptIndianRupee", label: "GST consultant", href: pillarHref("P2") },
    { icon: "FileText", label: "GST return filing", href: clusterHref("P2-C2") },
    { icon: "FileWarning", label: "GST cancellation", href: clusterHref("P2-C3") },
    { icon: "Mail", label: "GST notice reply", href: clusterHref("P2-C4") },
    { icon: "Building2", label: "Company registration", href: pillarHref("P1") },
    { icon: "Factory", label: "MSME registration", href: licenceHref("L1") },
    { icon: "Globe", label: "IEC registration", href: licenceHref("L5") },
    { icon: "IndianRupee", label: "Income tax consultant", href: pillarHref("P3") },
  ],
  relatedTitle: "Related GST services in Chennai",

  final: {
    title: "Get your GST registration done in Chennai",
    sub: "Tell us about your business. We'll confirm whether you need to register, the right type and the documents.",
    message: "Hi National Filings, I'd like to get GST registration for my business in Chennai.",
  },
  catalogue: ["GST registration", "GST amendment", "Composition scheme registration"],
};
