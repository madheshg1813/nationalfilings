import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { SERVICE, clusterHref, licenceHref, localityHref, pillarHref } from "./shared";

/**
 * P1-A9 · Company Registration in Poonamallee (/chennai/company-registration-in-poonamallee).
 * Primary keyword: "company registration in poonamallee". Written for the businesses that live off the highway:
 * transporters and fleet owners, warehousing, travels and driving schools, spare parts and service shops, wholesale
 * traders, plus MSMEs in the Thirumazhisai SIDCO estate. The unique section covers registering a transport or logistics
 * business (structure, vehicles in the entity's name, GST on goods transport). Kept distinct from the Kundrathur (P1-A1)
 * and Pallavaram (P1-A2) pages.
 *
 * Local facts checked (Oct 2026): Poonamallee is a municipality in Tiruvallur district and the headquarters of
 * Poonamallee taluk, carved out of Sriperumbudur taluk in 1997; PIN 600056; it is a transit point on the
 * Chennai-Bengaluru highway, now NH 48 (the Mumbai-Chennai stretch was NH 4 before the 2010 renumbering, and NH 48
 * passes Sriperumbudur); Poonamallee High Road links it to central Chennai and Mount-Poonamallee Road to Kathipara;
 * the Poonamallee RTO (TN 12) is among the largest in Tamil Nadu by vehicle registrations; TANSIDCO runs the
 * Thirumazhisai industrial estate in Tiruvallur district, with flatted factory modules allotted to pharma, garment and
 * biotech MSMEs. GST points on goods transport agencies (consignment note test, forward charge option or reverse charge,
 * exemption for road transport by non-GTAs and for hiring vehicles to a GTA) are kept general, with no rates stated.
 * Timelines are estimates.
 */

const whatsapp = "Hi National Filings, I run a business in Poonamallee and I'd like to register it.";

export const poonamalleePage: LicencePageData = {
  id: "P1-A9",
  service: SERVICE,
  meta: {
    title: "Company Registration in Poonamallee | National Filings",
    description: "Company registration in Poonamallee for transporters, fleet owners, warehouses and traders on NH 48. Pvt Ltd and LLP, with GST for goods transport.",
  },
  hero: {
    headline: { line1: "Company Registration", line2Before: "in Poonamallee, ", accent: "Built for Fleets" },
    sub: "Poonamallee sits where the Bengaluru highway leaves Chennai, and much of its trade moves on wheels. We register transporters, warehouses and traders as companies, LLPs and firms, and set up the GST that goods transport needs.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "Truck",
    kicker: "Poonamallee, Tiruvallur",
    title: "Certificate of Incorporation",
    line: "Your Poonamallee Business",
    stamp: "CIN issued",
    chips: ["Fleet owners and GTAs", "Pvt Ltd, LLP or firm", "GST for transport"],
    steps: ["Fleet plan", "DSC", "Name", "Filing", "CIN"],
  },

  benefitsSection: {
    title: "Why Poonamallee transport and trade businesses register",
    lead: "A lorry owner with two trucks can run on a PAN card. Once contracts, loans and more vehicles come in, a registered entity starts paying for itself.",
    cta: {
      title: "Adding trucks this year?",
      sub: "Tell us how many vehicles you run and who you carry for. We'll suggest a structure before you buy the next one.",
      message: "Hi National Filings, I own trucks in Poonamallee and plan to add more. Which registration should I choose?",
    },
  },
  benefits: [
    { icon: "Handshake", title: "Contracts with large shippers", line: "Manufacturers and logistics firms often prefer carriers that are a company or LLP." },
    { icon: "Banknote", title: "Vehicle loans in the firm's name", line: "Lenders assess the entity's own books, not only your personal income." },
    { icon: "ShieldCheck", title: "Liability kept in the business", line: "An accident claim or unpaid freight dispute stays with the entity, not your house." },
    { icon: "Truck", title: "One owner for the whole fleet", line: "Trucks, permits and insurance sit under a single name as you grow." },
    { icon: "ReceiptIndianRupee", title: "GST set up correctly", line: "Goods transport has its own GST rules, and getting them right early avoids notices." },
    { icon: "Users", title: "Family partners on paper", line: "Brothers or sons running separate trucks can hold agreed shares." },
    { icon: "Package", title: "Warehouse leases signed cleanly", line: "Landlords and clients deal with a registered tenant and service provider." },
    { icon: "TrendingUp", title: "Room to take on more", line: "Add vehicles, a warehouse or a second branch without starting again." },
  ],

  applicantsSection: {
    title: "Poonamallee businesses we register",
    lead: "The highway, the RTO and the industrial estates nearby shape who does business in Poonamallee. These are the trades we focus on.",
  },
  applicants: [
    { icon: "Truck", title: "Lorry owners and fleet operators", line: "Owners running trucks on the Bengaluru and Sriperumbudur routes." },
    { icon: "ClipboardCheck", title: "Booking offices and transport agents", line: "Businesses that issue lorry receipts and arrange loads." },
    { icon: "Package", title: "Warehousing and storage", line: "Godowns and storage for traders, e-commerce and manufacturers." },
    { icon: "Plane", title: "Travels and cab operators", line: "Tourist vehicles, staff transport and outstation cabs." },
    { icon: "IdCard", title: "Driving schools", line: "Schools training learners for licence tests and commercial drivers." },
    { icon: "Gauge", title: "Spare parts and service shops", line: "Truck and car parts dealers, tyre shops and workshops." },
    { icon: "ShoppingBag", title: "Wholesale traders", line: "Grain, provisions and building material wholesalers with their own godowns." },
    { icon: "Factory", title: "SIDCO estate units", line: "Small manufacturers in the Thirumazhisai industrial estate." },
  ],

  opportunities: {
    eyebrow: "Local sectors",
    title: "What moves through Poonamallee",
    intro: "Poonamallee is a transit point on the Chennai to Bengaluru highway, with its own busy RTO and the Thirumazhisai SIDCO estate close by. Trucks, storage, parts and wholesale trade grow up around that traffic.",
    // Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "Truck", title: "Transport and fleets", image: "https://images.unsplash.com/photo-1791216996390-ca4c31ebf111?auto=format&fit=crop&w=1600&q=90", alt: "Two covered cargo trucks on a narrow road through green hills", credit: "Zoshua Colah / Unsplash" },
      { icon: "Package", title: "Warehousing", image: "https://images.unsplash.com/photo-1709804945989-c8be542e04db?auto=format&fit=crop&w=1600&q=90", alt: "Tall pallet racks stacked with cartons inside a warehouse", credit: "Ali Mkumbwa / Unsplash" },
      { icon: "Gauge", title: "Spare parts and service", image: "https://images.unsplash.com/photo-1702146715471-ae6b10689969?auto=format&fit=crop&w=1600&q=90", alt: "Used vehicle parts hanging on hooks and stacked on shelves in a parts shop", credit: "Tahamie Farooqui / Unsplash" },
      { icon: "ShoppingBag", title: "Wholesale and produce", image: "https://images.unsplash.com/photo-1758390285803-a077fe0c4086?auto=format&fit=crop&w=1600&q=90", alt: "Workers unloading sacks from a goods truck beside a tractor", credit: "Rohit Dey / Unsplash" },
    ],
  },

  highlights: {
    eyebrow: "Transport and logistics",
    title: "Registering a transport or logistics business",
    lead: "Transport has a few decisions that other businesses don't. We work through these four with every fleet owner before filing.",
    items: [
      { icon: "Layers", label: "Structure", title: "Match it to the fleet", line: "One or two trucks can start as a proprietorship. A family fleet often suits an LLP. Carriers chasing big shipper contracts usually pick a private limited company." },
      { icon: "Truck", label: "Ownership", title: "Vehicles in the entity's name", line: "Trucks bought by the company should be registered in its name at the RTO. Vehicles you already own need a transfer, with permits and insurance moved too." },
      { icon: "ReceiptIndianRupee", label: "GST", title: "Are you a goods transport agency?", line: "If you issue a consignment note, you are a GTA. GST is then paid either by you, if you opt for forward charge, or by business customers under reverse charge.", highlight: true },
      { icon: "Scale", label: "GST", title: "When transport is exempt", line: "Road transport by someone who isn't a GTA is generally exempt, and so is hiring a vehicle to a GTA. Your exact set-up decides which rule applies." },
    ],
  },

  documentsSection: {
    title: "Documents for company registration in Poonamallee",
    lead: "Send clear photos over WhatsApp. For transport businesses, we also ask for vehicle papers so ownership can be planned along with the registration.",
  },
  documents: [
    { icon: "UserRound", title: "For each director or partner", items: ["PAN card", "Aadhaar, passport or voter ID", "Bank statement or utility bill, under two months old", "Passport-size photo", "Mobile number and email ID"], hint: "Check that names match across PAN, Aadhaar and the driving licence if you hold one." },
    { icon: "Home", title: "For the office, yard or godown", items: ["Latest electricity bill for the premises", "Rent or lease agreement, if rented", "No objection letter from the owner"], hint: "A booking office, yard or godown can be the registered office if the bill and owner's letter are in order." },
    { icon: "Truck", title: "If you run vehicles", items: ["RC copy of each vehicle", "Permit and insurance copies", "Any vehicle loan statements", "List of vehicles to move into the entity"], hint: "These don't go to the MCA. We use them to plan transfers and GST after incorporation." },
  ],
  documentsNote: {
    title: "Trucks still in your personal name?",
    sub: "Send us the RC copies and loan details. We'll explain what changes when the business becomes a company or LLP.",
    message: "Hi National Filings, my trucks are in my own name. What happens if I register a company in Poonamallee?",
  },

  processSection: {
    title: "Company registration process for Poonamallee businesses",
    lead: "The MCA side is the same as anywhere in Tamil Nadu and usually takes two to three weeks from complete documents. For transporters we plan GST and vehicle ownership alongside it.",
    cta: {
      title: "Send us your fleet details",
      sub: "Number of vehicles, routes and main customers. We'll reply with a structure, a checklist and a written quote.",
      message: "Hi National Filings, I'd like to register my transport business in Poonamallee. Here are my details.",
    },
  },
  steps: [
    { title: "Fleet and business review", time: "Day 1", sub: "Vehicles, routes, customers and partners. We agree the structure and the quote." },
    { title: "Digital signatures", time: "1-2 days", sub: "DSCs for every director or partner after online verification." },
    { title: "Name approval", time: "2-4 working days", sub: "Names checked against MCA and trademark records, then reserved." },
    { title: "Incorporation filing", time: "After name approval", sub: "SPICe+ for a company or FiLLiP for an LLP, with objects covering transport, storage and trading." },
    { title: "GST and vehicle plan", time: "After incorporation", sub: "Certificate with PAN and TAN, then GST with the right GTA choice and a plan for vehicle transfers." },
  ],
  processNote: "Timelines are estimates. MCA workload, name objections and resubmissions can add time. RTO transfers follow their own timelines.",

  mistakesSection: {
    title: "Mistakes we see with Poonamallee transport and trade businesses",
    lead: "Most of these surface months later as a GST notice or a stuck loan. Each one is simple to prevent at registration.",
  },
  mistakes: [
    { icon: "Truck", title: "Company formed, trucks left out", problem: "The company bills the freight, but every truck is still in the owner's personal name.", fix: "We plan which vehicles move into the entity, and in what order, before you start billing." },
    { icon: "ReceiptText", title: "GTA option missed", problem: "A transporter meant to charge GST under forward charge but never opted in before the year began.", fix: "We note the option deadline and file it on time each year." },
    { icon: "ListTree", title: "Objects only say transport", problem: "The MOA covers transport, then the business adds a godown or starts trading in parts.", fix: "We draft objects covering transport, warehousing and allied trading from the start." },
    { icon: "FileWarning", title: "No transporter ID for e-way bills", problem: "An unregistered transporter carries goods, but the shipper can't name them on the e-way bill.", fix: "We get GST registration or a transporter ID on the e-way bill portal, whichever fits." },
  ],

  costSection: {
    title: "Company registration fees for Poonamallee businesses",
    lead: "The total depends on the structure, how many directors or partners there are and the capital. GST and any vehicle work are quoted separately so you can see each part.",
    cta: {
      title: "Get a quote for your fleet",
      sub: "Tell us the structure, the people involved and the vehicles. You'll get each fee on its own line.",
      message: "Hi National Filings, can I get a quote for registering my transport business in Poonamallee, including GST?",
    },
  },
  costs: [
    { icon: "Signature", label: "Per person", title: "Digital signatures", line: "One for each director, partner or subscriber." },
    { icon: "Landmark", label: "Depends on structure", title: "Government fees", line: "No MCA filing fee for a company with authorised capital up to ₹15 lakh. LLP fees follow the contribution.", highlight: true },
    { icon: "Stamp", label: "Tamil Nadu rates", title: "Stamp duty", line: "Payable on the MOA and AOA, or on the LLP agreement." },
    { icon: "Headset", label: "Quoted upfront", title: "Our professional fee", line: "Structure advice, drafting, filing and the GST set-up for transport." },
  ],

  compliance: {
    eyebrow: "After registration",
    title: "What Poonamallee businesses usually need next",
    lead: "Transport and trade bring their own registrations after incorporation. These are the ones we file most often for businesses on this side.",
    items: [
      { icon: "ReceiptIndianRupee", label: "Transport and trade", title: "GST registration", line: "With the GTA choice made correctly, or regular GST for traders and warehouses." },
      { icon: "FileCheck2", label: "Yearly, if chosen", title: "GTA forward charge option", line: "Filed before each financial year if you want to charge GST yourself." },
      { icon: "Users", label: "Drivers and staff", title: "PF and ESI", line: "Registration once headcount reaches the limits, then monthly returns." },
      { icon: "Factory", label: "For MSMEs", title: "Udyam registration", line: "Free MSME registration that helps with bank credit and delayed payments." },
    ],
  },

  reasonsTitle: "Why Poonamallee businesses choose National Filings",
  reasons: [
    { icon: "Truck", title: "We understand transport", line: "Fleet ownership, GTA rules and e-way bills are part of the conversation." },
    { icon: "MessageCircle", title: "Work with us on WhatsApp", line: "Send papers from the yard or the road. No need to leave the business." },
    { icon: "MapPinned", title: "An office you can visit", line: "Our office is in Karaima Nagar, Kundrathur, if you'd rather meet." },
    { icon: "ReceiptText", title: "Fees in writing", line: "Government fees, stamp duty and our fee shown line by line." },
    { icon: "Award", title: "Experience since 2012", line: "Registration, tax and compliance work for Chennai businesses." },
    { icon: "CalendarClock", title: "Deadlines tracked", line: "ROC, GST returns and the yearly GTA option, all on our calendar." },
  ],

  faqTitle: "Company registration in Poonamallee: your questions",
  faqs: [
    { q: "I own three lorries. Should I form a company or stay a proprietor?", a: "Three lorries can run well as a proprietorship. Consider an LLP or private limited company if you're taking on partners, signing contracts with large shippers, or want liability kept away from your personal property. We'll look at your loans and customers before suggesting one." },
    { q: "Do my trucks have to be transferred to the company?", a: "If the company is going to own and operate them, yes. The registration certificate, permit and insurance should be in the name of the entity that owns the vehicle. The transfer is done with the RTO and any lender separately from company registration." },
    { q: "What is a goods transport agency under GST?", a: "A business that transports goods by road and issues a consignment note, often called a lorry receipt, is treated as a goods transport agency. GST on its service is paid either by the agency under forward charge, if it opts in, or by certain business customers under reverse charge." },
    { q: "Do I need GST if I only hire my truck to a transport agency?", a: "Hiring a goods vehicle to a goods transport agency is generally exempt from GST. If that is your only income you may not need to register, but most fleet owners do more than one kind of work. Tell us how you earn and we'll check." },
    { q: "Can a driving school or travels business be a company?", a: "Yes. A driving school or travels business can be a proprietorship, LLP or company. The licences and permits from the transport department are separate from company registration and must be held in the entity's name." },
    { q: "Is there an office of yours in Poonamallee?", a: "No. Our only office is in Karaima Nagar, Kundrathur. Poonamallee clients send documents, sign and get updates over WhatsApp and email, and are welcome to visit the office if they'd like to meet." },
    { q: "My unit is in the Thirumazhisai SIDCO estate. Does that change anything?", a: "Company registration is the same. Your allotment papers and the electricity bill for the shed or module serve as address proof, along with any consent needed from the allottee. After registration, Udyam and GST are the usual next steps." },
  ],

  related: [
    { icon: "Building2", label: "Company registration in Chennai", href: pillarHref("P1") },
    { icon: "MapPinned", label: "Company registration in Sriperumbudur", href: localityHref("P1-A12") },
    { icon: "MapPinned", label: "Company registration in Porur", href: localityHref("P1-A7") },
    { icon: "Building2", label: "Private limited registration", href: clusterHref("P1-C6") },
    { icon: "Handshake", label: "LLP registration", href: clusterHref("P1-C1") },
    { icon: "ReceiptIndianRupee", label: "GST registration", href: clusterHref("P2-C1") },
    { icon: "ReceiptText", label: "GST return filing", href: clusterHref("P2-C2") },
    { icon: "Users", label: "PF and ESI registration", href: clusterHref("P6-C1") },
  ],
  relatedTitle: "Related registration services near Poonamallee",

  final: {
    title: "Register your Poonamallee transport or trading business",
    sub: "Tell us about your vehicles, premises and customers. We'll confirm the structure, documents, GST set-up and fees before we start.",
    message: "Hi National Filings, I'd like to register my business in Poonamallee.",
  },
  catalogue: ["Private limited company registration in Poonamallee", "LLP registration for Poonamallee fleet owners", "GST registration for Poonamallee transporters"],
};
