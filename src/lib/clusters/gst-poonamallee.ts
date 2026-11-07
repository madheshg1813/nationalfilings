import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { GST_SERVICE, nearbyAreas } from "./shared";

/**
 * P2-A9 · GST Consultant in Poonamallee (/chennai/gst-consultant-in-poonamallee).
 * Primary keyword: "gst consultant in poonamallee". Angle: transporters, fleet owners, warehousing and wholesale traders on
 * the NH 48 corridor. The company page (P1-A9) already covers GTA basics, so this page goes into e-way bills in practice,
 * detention at checks, storage and godown rent, wholesale ITC matching and ITC on vehicle purchases.
 *
 * Local facts reused from P1-A9 (checked Oct 2026): Poonamallee is a municipality in Tiruvallur district and a taluk
 * headquarters; PIN 600056; transit point on the Chennai to Bengaluru highway, now NH 48; Poonamallee RTO (TN 12);
 * TANSIDCO's Thirumazhisai industrial estate nearby.
 *
 * Facts checked (Nov 2026):
 * - E-way bill: needed for movement of goods above ₹50,000 (inter-state); Tamil Nadu exempts intra-state consignments up to
 *   ₹1 lakh (TN Notification 09/2018, 31 May 2018). The registered person causing the movement fills Part A; a registered
 *   recipient buying from an unregistered supplier generates it; the transporter generates it if the consignor or consignee
 *   hasn't; an unregistered transporter takes a TRANSIN (Form GST ENR-01) (Rule 138, CGST Rules; CBIC e-way bill handbook).
 * - Validity: one day up to 200 km, one more day for every further 200 km (20 km a day for over-dimensional cargo); starts
 *   when Part B is filled. Part B can be skipped within the state up to 50 km to or from the transporter's place. Validity can
 *   be extended within eight hours of expiry; vehicle changes are updated in Part B. From 1 Jan 2025: EWBs only for documents
 *   up to 180 days old, and extensions capped at 360 days from generation (GSTN advisory 17 Dec 2024; ClearTax).
 * - Section 129 (from 1 Jan 2022): owner coming forward pays penalty of 200% of tax payable (exempt goods: 2% of value or
 *   ₹25,000, whichever is less); otherwise 50% of value or 200% of tax, whichever is higher; MOV-06 detention order; notice
 *   within 7 days, order within 7 days of notice. Circular 64/38/2018-GST: listed minor discrepancies (spelling, PIN code,
 *   one or two digits of vehicle or document number, HSN digit errors) don't justify detention; Rs 500 CGST + Rs 500 SGST
 *   penalty under section 125.
 * - GST 2.0 (22 Sep 2025): goods transport vehicles 28% to 18%; GTA keeps 5% without ITC, and the 12% with ITC option became
 *   18% with ITC (Taxmann, Lakshmikumaran & Sridharan, PIB).
 * - Section 17(5)(a): ITC blocked on motor vehicles for carrying persons with seating capacity up to 13 including driver,
 *   except for further supply of such vehicles, transport of passengers or driving training; vehicles for transport of goods
 *   are not blocked. 17(5)(ab): repair, maintenance and insurance of blocked vehicles also blocked, same exceptions.
 * - Storage: entry 54(e) of Notification 12/2017-CT(R) exempts storage or warehousing of agricultural produce; processed goods
 *   and plain godown rent are taxable (AAR rulings incl. Tamil Nadu). Rent of non-residential property from an unregistered
 *   landlord to a registered tenant is under reverse charge from 10 Oct 2024 (Notification 09/2024-CT(R)); composition
 *   taxpayers excluded by Notification 07/2025-CT(R).
 * - ITC: only if the invoice appears in GSTR-2B (section 16(2)(aa)); IMS lets the buyer accept, reject or keep invoices
 *   pending; Rule 37 reversal if the supplier isn't paid within 180 days, re-availed on payment; section 16(4) time limit.
 * - Rule 18: GST certificate displayed and GSTIN on the name board at every place of business.
 * No fee figures. Timelines are estimates.
 */

const whatsapp = "Hi National Filings, I run a transport or trading business in Poonamallee and need help with GST and e-way bills.";

export const gstPoonamalleePage: LicencePageData = {
  id: "P2-A9",
  service: GST_SERVICE,
  meta: {
    title: "GST Consultant in Poonamallee, Chennai | National Filings",
    description: "GST consultant in Poonamallee for fleet owners, godowns and wholesalers on NH 48. E-way bills, detention replies, ITC matching and monthly returns.",
  },
  hero: {
    headline: { line1: "GST Consultant", line2Before: "in Poonamallee, ", accent: "Loads Kept Moving" },
    sub: "Trucks leaving Poonamallee for Bengaluru, godowns full of other people's stock, wholesalers buying by the lorry load. We handle the GST that comes with all of it, from the e-way bill on the dashboard to the credit in your monthly return.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "Truck",
    kicker: "Poonamallee, Tiruvallur",
    title: "E-Way Bill and GSTR-3B",
    line: "Your Poonamallee Business",
    stamp: "Filed and matched",
    chips: ["E-way bills checked", "Godowns on the GSTIN", "Truck ITC claimed right"],
    steps: ["Invoice", "Part A", "Part B", "Delivery", "GSTR-3B"],
  },

  benefitsSection: {
    title: "What a GST consultant does for a Poonamallee transport or trading business",
    lead: "On this stretch of NH 48, most GST trouble starts on the road or in the godown, not at the desk. We keep the papers in the cab and the figures in the return telling the same story.",
    cta: {
      title: "Had a lorry stopped recently?",
      sub: "Send us a photo of the e-way bill, invoice and any notice the officer gave. We'll tell you what the issue is and what to reply.",
      message: "Hi National Filings, one of my lorries from Poonamallee was stopped and the officer issued a notice. Can you help?",
    },
  },
  benefits: [
    { icon: "Truck", title: "E-way bills that survive a check", line: "Value, GSTIN, PIN and vehicle number checked against the invoice before the truck leaves." },
    { icon: "Clock", title: "Validity planned per trip", line: "Long hauls and breakdowns handled with Part B updates and timely extensions." },
    { icon: "ShieldAlert", title: "Detention handled fast", line: "Replies to interception notices drafted the same day, so the vehicle isn't idle for long." },
    { icon: "Package", title: "Godowns registered properly", line: "Every storage location added to your GSTIN, with the certificate and board in place." },
    { icon: "SearchCheck", title: "Supplier credit matched", line: "Purchase bills tallied with GSTR-2B every month before the return goes in." },
    { icon: "Calculator", title: "Truck and car ITC sorted", line: "Credit on goods vehicles claimed, blocked credit on passenger cars kept out." },
    { icon: "Percent", title: "The right GTA rate", line: "Whether 5% without credit or 18% with credit suits your fleet after GST 2.0." },
    { icon: "FileText", title: "Returns on time", line: "GSTR-1, GSTR-3B and the annual return filed from the same reconciled figures." },
  ],

  applicantsSection: {
    title: "Poonamallee businesses we handle GST for",
    lead: "Most of our clients here either move goods, store goods or buy and sell them in bulk. Each one has a different GST pressure point.",
  },
  applicants: [
    { icon: "Truck", title: "Fleet owners on the Bengaluru run", line: "Owners whose trucks cross into Karnataka and back every week." },
    { icon: "ClipboardCheck", title: "Booking agents and lorry offices", line: "Offices issuing consignment notes and arranging loads for shippers." },
    { icon: "Package", title: "Warehouse and godown operators", line: "Storage for traders, e-commerce sellers and manufacturers nearby." },
    { icon: "ShoppingBag", title: "Grain and provision wholesalers", line: "Traders buying in bulk and supplying retailers across the west of the city." },
    { icon: "Store", title: "Building material dealers", line: "Cement, steel and hardware wholesalers delivering to sites by truck." },
    { icon: "Gauge", title: "Spare parts and tyre dealers", line: "Parts sellers and workshops serving the trucks that pass through." },
    { icon: "Factory", title: "Thirumazhisai estate units", line: "Small manufacturers sending goods out on their own or hired vehicles." },
    { icon: "Users", title: "Cab and staff transport operators", line: "Passenger transport businesses buying cars and vans for hire." },
  ],

  opportunities: {
    eyebrow: "Local trades",
    title: "Where the GST work in Poonamallee comes from",
    intro: "Poonamallee sits where the Bengaluru highway leaves the city, with a busy RTO and the Thirumazhisai estate close by. That puts trucks, godowns and wholesale stock at the centre of most GST questions we get from here.",
    // Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "Truck", title: "Long-haul trucking", image: "https://images.unsplash.com/photo-1774013603273-03507c48a0e8?auto=format&fit=crop&w=1600&q=90", alt: "Covered truck driving away on a narrow road through green fields under a grey sky", credit: "Zoshua Colah / Unsplash" },
      { icon: "Package", title: "Warehousing and storage", image: "https://images.unsplash.com/photo-1645736315000-6f788915923b?auto=format&fit=crop&w=1600&q=90", alt: "Forklift carrying wrapped goods past tall pallet racks in a warehouse", credit: "Bernd Dittrich / Unsplash" },
      { icon: "ShoppingBag", title: "Wholesale grain and provisions", image: "https://images.unsplash.com/photo-1764070254247-351def349875?auto=format&fit=crop&w=1600&q=90", alt: "Open sacks of grain and pulses standing in a dimly lit storeroom", credit: "Giri / Unsplash" },
      { icon: "Gauge", title: "Fleets and freight yards", image: "https://images.unsplash.com/photo-1492168732976-2676c584c675?auto=format&fit=crop&w=1600&q=90", alt: "Aerial view of trucks and trailers parked in rows in a freight yard", credit: "Nigel Tadyanehondo / Unsplash" },
    ],
  },

  highlights: {
    eyebrow: "E-way bills in practice",
    title: "E-way bills on the NH 48 corridor, step by step",
    lead: "Most detentions we see come from small slips on the e-way bill, not from tax being evaded. These are the four points we check for every client who moves goods.",
    items: [
      { icon: "UserCheck", label: "Who generates it", title: "Consignor, buyer or transporter", line: "The registered supplier usually fills Part A. A registered buyer does it when buying from an unregistered seller. If neither has, the transporter must, and a transporter without GSTIN uses a transporter ID." },
      { icon: "Clock", label: "Validity", title: "One day for every 200 km", line: "A trip up to 200 km gets one day, and each further 200 km adds a day. The clock starts when Part B is filled, and a day ends at midnight.", highlight: true },
      { icon: "RefreshCw", label: "Part B", title: "New vehicle, new Part B", line: "If the load moves to another truck after a breakdown or at a transhipment point, Part B must be updated before it moves. If the trip runs late, extend validity within eight hours of expiry." },
      { icon: "Gavel", label: "At a check", title: "Detention and the penalty", line: "Where papers don't support the goods, the officer can detain the vehicle. Release is on a penalty of 200% of the tax involved when the owner comes forward. Small typing errors should attract only a minor penalty, not detention." },
    ],
  },

  documentsSection: {
    title: "What we need from Poonamallee clients for GST work",
    lead: "For transport and trading businesses we need a little more than the usual sales and purchase bills. Clear photos on WhatsApp are fine.",
  },
  documents: [
    { icon: "Truck", title: "For each vehicle", items: ["RC copy and permit", "Purchase invoice of the vehicle, for ITC", "Loan statement, if financed", "Whether it carries goods or passengers"], hint: "The invoice and the body type decide whether GST paid on the vehicle can be claimed." },
    { icon: "FileText", title: "For each month's trips and sales", items: ["Sales invoices or consignment notes", "E-way bills generated or received", "Any interception or MOV notice", "Freight paid to other transporters"], hint: "We compare e-way bills with GSTR-1. Mismatches between the two are a common reason for notices." },
    { icon: "Package", title: "For godowns and stock", items: ["Rent agreement for each godown", "Landlord's GSTIN, if registered", "Stock statement for the month", "Purchase bills from suppliers"], hint: "If a godown landlord is unregistered, GST on the rent may be payable by you under reverse charge." },
  ],
  documentsNote: {
    title: "Not sure every godown is on your GSTIN?",
    sub: "Send us your registration certificate and the addresses where you keep stock. We'll tell you which places need to be added.",
    message: "Hi National Filings, I keep stock in more than one godown around Poonamallee. Can you check my GST registration covers them?",
  },

  processSection: {
    title: "How we take over GST for a Poonamallee transport or trading business",
    lead: "We start by looking at how goods actually move in your business, then set up the monthly routine around it. Everything runs on WhatsApp and email.",
    cta: {
      title: "Hand us your GST for the next month",
      sub: "Share your GSTIN and last two returns. We'll review them and send a written quote for the monthly work.",
      message: "Hi National Filings, I'd like you to take over GST filing for my Poonamallee business. What do you need from me?",
    },
  },
  steps: [
    { title: "Review of how goods move", time: "Day 1", sub: "Vehicles, routes, godowns, suppliers and customers. We agree the scope and give a written quote." },
    { title: "Registration check", time: "1-2 days", sub: "Every godown and branch on the GSTIN, the right HSN and SAC codes, and the GTA choice confirmed." },
    { title: "E-way bill routine", time: "From the first trip", sub: "Who generates each bill, how Part B is updated, and what goes in the cab with the driver." },
    { title: "Monthly reconciliation", time: "Before each due date", sub: "Purchases matched with GSTR-2B, e-way bills matched with sales, IMS actions taken." },
    { title: "Returns filed", time: "Each month or quarter", sub: "GSTR-1 and GSTR-3B filed, with a short note of anything that needs your attention." },
  ],
  processNote: "Timelines are estimates. Delayed supplier filings or a pending notice can change the order of work in a given month.",

  mistakesSection: {
    title: "GST mistakes we fix for Poonamallee transporters and traders",
    lead: "Each of these cost a client money or a day of a truck standing still. All of them are preventable with a routine check.",
  },
  mistakes: [
    { icon: "RefreshCw", title: "Truck changed, Part B not updated", problem: "A lorry broke down near Sriperumbudur and the goods moved to another vehicle on the same e-way bill.", fix: "We show your drivers and office how to update Part B before the second vehicle moves." },
    { icon: "CalendarClock", title: "E-way bill on an old invoice", problem: "Goods held in a godown for months were dispatched against the original invoice, and the portal refused it.", fix: "Since January 2025 an e-way bill can't be raised on a document over 180 days old. We plan dispatch papers for slow stock." },
    { icon: "Calculator", title: "Credit taken on the owner's car", problem: "GST on a new car for the proprietor's use was claimed as ITC along with a truck bought the same month.", fix: "We claim the truck and keep the car out, since credit on most passenger cars is blocked." },
    { icon: "Banknote", title: "Supplier paid late, credit kept", problem: "A wholesaler claimed ITC but hadn't paid the supplier for over six months.", fix: "We flag unpaid bills before 180 days and reverse the credit if needed, then reclaim it once you pay." },
  ],

  costSection: {
    title: "What GST services cost for a Poonamallee business",
    lead: "Registration itself has no government fee. Our fee depends on how many vehicles, godowns, invoices and e-way bills we handle, and we write it down before starting.",
    cta: {
      title: "Get a quote for your monthly GST",
      sub: "Tell us your vehicles, godowns and roughly how many invoices you raise a month. We'll send a written quote.",
      message: "Hi National Filings, can I get a quote for monthly GST and e-way bill work for my business in Poonamallee?",
    },
  },
  costs: [
    { icon: "Landmark", label: "No government fee", title: "Registration and new godowns", line: "Fresh registration or adding places of business, with our fee quoted upfront." },
    { icon: "FileText", label: "Quoted upfront", title: "Monthly or quarterly returns", line: "Depends on the number of invoices, consignment notes and e-way bills.", highlight: true },
    { icon: "SearchCheck", label: "Quoted upfront", title: "ITC reconciliation", line: "Matching purchases with GSTR-2B and following up suppliers who haven't filed." },
    { icon: "ShieldAlert", label: "Quoted per case", title: "Detention and notice replies", line: "Interception notices, penalty replies and appeals, depending on the work involved." },
  ],

  compliance: {
    eyebrow: "Ongoing GST",
    title: "The GST calendar for a Poonamallee transport or trading business",
    lead: "Beyond the monthly returns, a few recurring jobs come with moving and storing goods. We put these on our calendar for you.",
    items: [
      { icon: "SearchCheck", label: "Every month", title: "IMS and GSTR-2B review", line: "Accept, reject or hold supplier invoices before the return, so only real credit flows in." },
      { icon: "Truck", label: "Every trip", title: "E-way bill checks", line: "Value, distance, vehicle and validity checked, with Part B kept current." },
      { icon: "CalendarCheck", label: "Before each April", title: "GTA rate choice", line: "Stay at 5% without credit, or move to 18% with credit if you're buying trucks." },
      { icon: "Home", label: "Whenever you add one", title: "New godown or branch", line: "Added to the registration, with the certificate and GSTIN board displayed there." },
    ],
  },

  reasonsTitle: "Why Poonamallee transporters and traders choose National Filings",
  reasons: [
    { icon: "Truck", title: "We work with fleets", line: "E-way bills, GTA rates and vehicle ITC are routine work for us." },
    { icon: "MessageCircle", title: "Papers on WhatsApp", line: "Send bills and notices from the yard or the highway." },
    { icon: "MapPinned", title: "An office you can visit", line: "Karaima Nagar, Kundrathur, Monday to Saturday, 9 am to 7 pm." },
    { icon: "ReceiptText", title: "Fees in writing", line: "A written quote before we start, with no surprises later." },
    { icon: "Award", title: "Experience since 2012", line: "GST work for transporters, godowns and traders across Chennai." },
    { icon: "CalendarClock", title: "Due dates tracked", line: "Returns, IMS actions and the yearly GTA choice on our calendar." },
  ],

  faqTitle: "GST in Poonamallee: questions from transporters and traders",
  faqs: [
    { q: "I carry goods for a trader. Who has to generate the e-way bill, me or him?", a: "The registered person causing the movement, usually the supplier, fills Part A. If the goods come from an unregistered seller to a registered buyer, the buyer does it. If neither has generated one and the value needs it, you as the transporter must. A transporter without GST registration can get a transporter ID on the e-way bill portal for this." },
    { q: "How long is an e-way bill valid for a run from Poonamallee to Bengaluru?", a: "Validity is one day for up to 200 km and one more day for each further 200 km. A trip of 201 to 400 km therefore gets two days, which covers the usual Bengaluru run on NH 48. The clock starts when Part B with the vehicle number is filled, and each day ends at midnight." },
    { q: "Do I need an e-way bill for a delivery within Chennai?", a: "Within Tamil Nadu, the state has exempted consignments valued up to ₹1 lakh. Above that, an e-way bill is needed even for a short local trip. For short trips within the state of up to 50 km to or from the transporter's place, Part B with the vehicle number can be left out, but Part A must still be filled." },
    { q: "My lorry was stopped and detained. What happens next?", a: "The officer issues a detention order and must serve a notice within seven days, then pass an order within seven days of that notice. If you come forward as the owner, the goods and vehicle are released on paying a penalty of 200% of the tax involved, or a smaller amount for exempt goods. A wrong digit in the vehicle number or a spelling error should only attract a minor penalty, not detention. Send us the papers straight away so we can reply within the time." },
    { q: "Can I claim ITC on the GST paid for a new truck?", a: "Generally yes. Credit is blocked for most vehicles that carry people, not for vehicles that carry goods. But if you work as a goods transport agency at the 5% rate, that rate comes without input credit, so the truck's GST can't be used. If you're buying several trucks, compare it with the 18% rate with credit before the year begins." },
    { q: "Can I claim GST on a car or van bought for the business?", a: "Credit is blocked on motor vehicles for carrying people with 13 seats or fewer, including the driver. The exceptions are dealers reselling them, businesses carrying passengers such as cab operators, and driving schools. Repair, servicing and insurance of those vehicles follow the same rule." },
    { q: "Do you have an office in Poonamallee?", a: "No. Our only office is in Karaima Nagar, Kundrathur. Poonamallee clients send bills, e-way bills and notices over WhatsApp and email, and are welcome to visit the office if they'd like to meet." },
  ],

  related: nearbyAreas("P2-A9"),
  relatedTitle: "GST consultants in areas near Poonamallee",

  final: {
    title: "Keep your Poonamallee trucks and godowns GST-clean",
    sub: "Tell us about your vehicles, godowns and suppliers. We'll check your registration, e-way bill routine and credit, and quote for the monthly work.",
    message: "Hi National Filings, I have a transport or trading business in Poonamallee and need a GST consultant.",
  },
  catalogue: ["GST return filing for Poonamallee transporters", "E-way bill and detention support in Poonamallee", "GST registration for Poonamallee godowns and wholesalers"],
};
