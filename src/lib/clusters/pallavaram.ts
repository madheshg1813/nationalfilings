import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { SERVICE, nearbyAreas } from "./shared";

/**
 * P1-A2 · Company Registration in Pallavaram (/chennai/company-registration-in-pallavaram).
 * Primary keyword: "company registration in pallavaram". Our Kundrathur office is on the Pallavaram road (SH 113A).
 * Written for Pallavaram's own mix: leather and footwear units, exporters, airport-linked travel and cargo businesses,
 * GST Road showrooms and contractors. Kept distinct from the Kundrathur page (P1-A1): different trades, local bodies and FAQs.
 *
 * Local facts checked (Oct 2026): Pallavaram is the headquarters of Pallavaram taluk in Chengalpattu district; it became
 * part of Tambaram City Municipal Corporation in November 2021; part of the area is the St. Thomas Mount-cum-Pallavaram
 * cantonment under the Ministry of Defence; PIN codes 600043, 600044 and 600117; SH 113A runs from Pallavaram to Kundrathur;
 * leather units operate around Nagalkeni; Chennai International Airport is next door. Timelines are estimates.
 */

const whatsapp = "Hi National Filings, I'm in Pallavaram and I'd like to register my business.";

export const pallavaramPage: LicencePageData = {
  id: "P1-A2",
  service: SERVICE,
  meta: {
    title: "Company Registration in Pallavaram | National Filings",
    description: "Company registration in Pallavaram for leather units, exporters, traders and airport businesses. Pvt Ltd, LLP and OPC, with IEC and GST set up too.",
  },
  hero: {
    headline: { line1: "Company Registration", line2Before: "in Pallavaram, ", accent: "Export Ready" },
    sub: "From leather units to travel agents near the airport, we register Pallavaram businesses as companies, LLPs and firms, and set up the GST and export codes that follow.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "Globe",
    kicker: "Pallavaram, Chennai",
    title: "Certificate of Incorporation",
    line: "Your Pallavaram Business",
    stamp: "CIN issued",
    chips: ["Pvt Ltd or LLP", "IEC for exporters", "GST and LUT"],
    steps: ["Plan", "DSC", "Name", "Filing", "CIN"],
  },

  benefitsSection: {
    title: "What registration does for a Pallavaram business",
    lead: "Pallavaram sells to the world through its leather trade and serves travellers through the airport. A registered entity helps on both fronts.",
    cta: {
      title: "Exporting, or planning to?",
      sub: "Tell us what you sell and where. We'll suggest the structure and line up IEC and GST in the right order.",
      message: "Hi National Filings, I'm planning to export from Pallavaram. Which registration should I start with?",
    },
  },
  benefits: [
    { icon: "Globe", title: "Trust from foreign buyers", line: "Overseas buyers and agents often prefer dealing with a company or LLP." },
    { icon: "Ship", title: "Smooth export paperwork", line: "One entity name across IEC, GST, bank and shipping documents." },
    { icon: "ShieldCheck", title: "Limited liability", line: "Protects your personal assets if an order or contract goes wrong." },
    { icon: "Landmark", title: "Packing credit and loans", line: "Banks assess a registered entity on its own books and track record." },
    { icon: "Plane", title: "Credibility for travel firms", line: "Airlines, hotels and corporate clients take a registered business seriously." },
    { icon: "Handshake", title: "Clear partner shares", line: "Family businesses can put shares and roles in writing." },
    { icon: "BadgeCheck", title: "Brand you can protect", line: "A registered name is a good first step towards a trademark." },
    { icon: "TrendingUp", title: "Room to grow", line: "Add partners, investors or a second unit without starting again." },
  ],

  applicantsSection: {
    title: "Pallavaram businesses we register",
    lead: "Pallavaram mixes an old leather trade, the airport economy and the shops along GST Road. These are the businesses we hear from most.",
  },
  applicants: [
    { icon: "Factory", title: "Leather goods makers", line: "Bags, belts, wallets and footwear units." },
    { icon: "Ship", title: "Leather traders and exporters", line: "Finished leather dealers selling in India and abroad." },
    { icon: "Plane", title: "Travel agencies", line: "Ticketing, tour and visa businesses near the airport." },
    { icon: "Truck", title: "Cargo and courier businesses", line: "Freight forwarders, courier franchises and transporters." },
    { icon: "Store", title: "GST Road showrooms", line: "Furniture, electronics and textile retailers." },
    { icon: "HardHat", title: "Contractors and interior firms", line: "Civil, electrical and interior work for homes and offices." },
    { icon: "Laptop", title: "Consultants and IT freelancers", line: "Professionals billing clients from a home office." },
    { icon: "UtensilsCrossed", title: "Restaurants and bakeries", line: "Food businesses that also need FSSAI registration." },
  ],

  opportunities: {
    eyebrow: "Local sectors",
    title: "The trades that keep Pallavaram busy",
    intro: "Leather work around Nagalkeni, the airport on its doorstep and a long stretch of shops on GST Road give Pallavaram a business mix you won't find elsewhere in Chennai's south.",
    // Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "Factory", title: "Leather and footwear", image: "https://images.unsplash.com/photo-1787070534639-8fc823677aff?auto=format&fit=crop&w=1600&q=90", alt: "Craftsman tracing a shoe pattern onto leather", credit: "Cohen Berg / Unsplash" },
      { icon: "Plane", title: "Air cargo and travel", image: "https://images.unsplash.com/photo-1775449053619-89b5265f611a?auto=format&fit=crop&w=1600&q=90", alt: "Cargo aircraft parked on an airport apron with boarding stairs", credit: "Peaky_82 / Unsplash" },
      { icon: "HardHat", title: "Contractors and interiors", image: "https://images.unsplash.com/photo-1645597459770-4d42ef850a18?auto=format&fit=crop&w=1600&q=90", alt: "Two workers fitting a wooden door frame at a building site", credit: "Ankit Manoharan / Unsplash" },
      { icon: "Package", title: "Courier and online selling", image: "https://images.unsplash.com/photo-1766040923580-16ad32fae8b4?auto=format&fit=crop&w=1600&q=90", alt: "Pile of cardboard parcels sealed with blue tape", credit: "Rohit Choudhari / Unsplash" },
    ],
  },

  highlights: {
    eyebrow: "Know your local body",
    title: "Who governs your Pallavaram address",
    lead: "Company registration is the same everywhere in Tamil Nadu. Local licences are not, and in Pallavaram they depend on exactly where your premises are.",
    items: [
      { icon: "Building2", label: "Since November 2021", title: "Tambaram City Municipal Corporation", line: "Pallavaram became part of the corporation. Trade licences for most of the area come from it." },
      { icon: "ShieldCheck", label: "Ministry of Defence", title: "Cantonment Board", line: "Part of Pallavaram falls in the St. Thomas Mount-cum-Pallavaram cantonment, which has its own rules and licences.", highlight: true },
      { icon: "MapPinned", label: "Pallavaram taluk", title: "Chengalpattu district", line: "Pallavaram is the taluk headquarters. PIN codes include 600043, 600044 and 600117." },
      { icon: "Landmark", label: "Online, statewide", title: "Registrar of Companies", line: "Company and LLP filings go online to the MCA. Nobody needs to visit an office." },
    ],
  },

  documentsSection: {
    title: "Documents for company registration in Pallavaram",
    lead: "Send clear photos on WhatsApp or bring them to our Kundrathur office. Every name and address must match across documents.",
  },
  documents: [
    { icon: "UserRound", title: "For each director or partner", items: ["PAN card", "Aadhaar, passport or voter ID", "Bank statement or utility bill, under two months old", "Passport-size photo", "Mobile number and email ID"], hint: "Partners living abroad need notarised or apostilled documents." },
    { icon: "Home", title: "For your Pallavaram premises", items: ["Latest electricity bill for the premises", "Rent or lease agreement, if rented", "No objection letter from the owner"], hint: "Tell us if the premises are inside the cantonment, so the local licences are planned correctly." },
    { icon: "Globe", title: "If you plan to export", items: ["Products or services you will export", "Bank account details for the new entity", "Expected countries and buyers"], hint: "IEC and the GST LUT are filed after incorporation, in the entity's name." },
  ],
  documentsNote: {
    title: "Premises in the cantonment area?",
    sub: "Send us the address and the latest bill. We'll check the documents and tell you which local licences apply.",
    message: "Hi National Filings, my business premises are in Pallavaram. Can you check my address documents?",
  },

  processSection: {
    title: "Company registration process for Pallavaram businesses",
    lead: "The MCA filing takes about two to three weeks once documents are complete. Exporters then add IEC and GST, which we plan from day one.",
    cta: {
      title: "Start with a short call",
      sub: "Tell us your trade, partners and whether you export. We'll send a checklist and a written quote.",
      message: "Hi National Filings, I want to register my Pallavaram business. What do you need from me?",
    },
  },
  steps: [
    { title: "Plan the entity", time: "Day 1", sub: "Structure, partners, capital and business objects agreed, including export plans." },
    { title: "Digital signatures", time: "1-2 days", sub: "DSCs for every director or partner, issued after online verification." },
    { title: "Name approval", time: "2-4 working days", sub: "Names checked against MCA and trademark records before filing." },
    { title: "Incorporation filing", time: "After name approval", sub: "SPICe+ for a company or FiLLiP for an LLP, then the registrar's review." },
    { title: "IEC, GST and bank", time: "After incorporation", sub: "Certificate with PAN and TAN, then GST, IEC and the current account." },
  ],
  processNote: "Timelines are estimates. MCA workload, name objections and resubmissions can add time.",

  mistakesSection: {
    title: "Mistakes that cost Pallavaram businesses time",
    lead: "We see these most often with exporters and family businesses. Each one is avoidable with a little planning.",
  },
  mistakes: [
    { icon: "Globe", title: "IEC taken in the wrong name", problem: "The owner takes IEC as a proprietor, then forms a company and has to apply all over again.", fix: "We incorporate first, then file IEC and GST in the new entity's name." },
    { icon: "Percent", title: "No LUT before exporting", problem: "Goods are shipped without a Letter of Undertaking, so IGST has to be paid and claimed back later.", fix: "We file the LUT on the GST portal before the first shipment, and again each year." },
    { icon: "Leaf", title: "Assuming registration covers everything", problem: "A leather finishing unit registers as a company but has no pollution consent.", fix: "We flag the Tamil Nadu Pollution Control Board consent early. Registration doesn't replace it." },
    { icon: "ListTree", title: "Objects too narrow", problem: "The MOA covers only footwear, then the business adds bags or trading.", fix: "We draft objects that cover what you do now and what you plan next." },
  ],

  costSection: {
    title: "Company registration fees for Pallavaram businesses",
    lead: "The total depends on the structure, the number of people and the capital, plus any export registrations. Everything is itemised.",
    cta: {
      title: "Get an itemised quote",
      sub: "Tell us the structure, directors or partners, capital and export plans. You'll see each fee separately.",
      message: "Hi National Filings, can I get a quote for company registration in Pallavaram, including IEC and GST?",
    },
  },
  costs: [
    { icon: "Signature", label: "Per person", title: "Digital signatures", line: "One for each director, partner or subscriber." },
    { icon: "Landmark", label: "Depends on structure", title: "Government fees", line: "For a company, no MCA filing fee when authorised capital is ₹15 lakh or less. LLP fees depend on contribution.", highlight: true },
    { icon: "Globe", label: "Government fee applies", title: "IEC for exporters", line: "Filed with the DGFT in the new entity's name, with its PAN and bank details." },
    { icon: "Headset", label: "Quoted upfront", title: "Our professional fee", line: "Advice, drafting, filing, query replies and the export set-up." },
  ],

  compliance: {
    eyebrow: "After registration",
    title: "What Pallavaram businesses usually need next",
    lead: "The registrations that follow depend on your trade and your address. These are the most common.",
    items: [
      { icon: "Globe", label: "For exporters", title: "IEC and GST LUT", line: "IEC to import or export goods, and an LUT to export without paying IGST upfront." },
      { icon: "ScrollText", label: "Depends on your address", title: "Trade licence", line: "From Tambaram City Municipal Corporation or the Cantonment Board, depending on the area." },
      { icon: "Factory", label: "For MSMEs", title: "Udyam registration", line: "Free MSME registration that helps with bank credit and government schemes." },
      { icon: "ShieldCheck", label: "Protect the name", title: "Trademark", line: "Register your brand before you print it on products and export cartons." },
    ],
  },

  reasonsTitle: "Why Pallavaram businesses choose National Filings",
  reasons: [
    { icon: "MapPinned", title: "Just down the road", line: "Our Kundrathur office is on the road from Pallavaram, for when you'd rather meet." },
    { icon: "Globe", title: "Export set-up included", line: "Company, IEC, GST and LUT planned together, in the right order." },
    { icon: "ReceiptText", title: "Fees in writing", line: "Government fees, stamp duty and our fee shown line by line." },
    { icon: "MessageCircle", title: "WhatsApp updates", line: "Send documents and track progress without visiting anyone." },
    { icon: "Award", title: "Experience since 2012", line: "Registration, tax and compliance work for Chennai businesses." },
    { icon: "ClipboardCheck", title: "Yearly reminders", line: "ROC, GST and income tax deadlines tracked after registration." },
  ],

  faqTitle: "Company registration in Pallavaram: your questions",
  faqs: [
    { q: "Do you have an office in Pallavaram?", a: "Our office is in Karaima Nagar, Kundrathur, on the main road that runs from Pallavaram. Most Pallavaram clients never need to visit, because documents, signatures and updates all work over WhatsApp and email. You're welcome to come in if you'd rather meet." },
    { q: "My premises are inside the cantonment. Can I register a company there?", a: "Yes. Company registration only needs valid address proof, such as a recent electricity bill and the owner's no objection letter. What differs inside the cantonment is local licensing, which comes from the Cantonment Board rather than the corporation." },
    { q: "Should a leather exporter register a private limited company or an LLP?", a: "Both work for exporting. A private limited company suits you if you want outside investors or plan to grow large. An LLP has lighter compliance and suits family partners. We'll compare them for your turnover and plans." },
    { q: "When should I apply for IEC?", a: "After the company or LLP is registered and its bank account is open, so the IEC is in the entity's name. A proprietor's IEC can't be moved to a new company." },
    { q: "What is a GST LUT and do I need one?", a: "A Letter of Undertaking lets you export goods or services without paying IGST and then claiming a refund. It is filed on the GST portal, usually at the start of each financial year, and we file it for our export clients." },
    { q: "How long does company registration take for a Pallavaram business?", a: "Usually two to three weeks from complete documents to the Certificate of Incorporation. IEC and GST registration follow after that, and the time for those depends on the departments." },
    { q: "Does registering a company cover my leather unit's pollution consent?", a: "No. Leather processing units need consent from the Tamil Nadu Pollution Control Board, which is separate from company registration. We'll point you to what applies to your unit." },
  ],

  related: nearbyAreas("P1-A2"),
  relatedTitle: "Company registration in areas near Pallavaram",

  final: {
    title: "Register your Pallavaram business the right way",
    sub: "Tell us your trade and plans. We'll confirm the structure, documents, export registrations and fees before we start.",
    message: "Hi National Filings, I'd like to register my business in Pallavaram.",
  },
  catalogue: ["Private limited company registration in Pallavaram", "LLP registration in Pallavaram", "IEC and GST set-up for Pallavaram exporters"],
};
