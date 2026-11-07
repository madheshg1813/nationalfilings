import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { GST_SERVICE, nearbyAreas } from "./shared";

/**
 * P2-A2 · GST Consultant in Pallavaram (/chennai/gst-consultant-in-pallavaram).
 * Primary keyword: "gst consultant in pallavaram". No office in Pallavaram: clients work with us on WhatsApp and email, and can
 * visit our Kundrathur office on the Pallavaram road. Angle: leather exporters and travel agents near the airport: zero-rated
 * exports, LUT or IGST route, refunds, shipping bill matching, and GST for air ticketing and tour operators.
 *
 * Local facts (reused from the verified P1-A2 JSDoc): Pallavaram taluk headquarters, Chengalpattu district; part of Tambaram
 * City Municipal Corporation since November 2021; part of the area is in the St. Thomas Mount-cum-Pallavaram cantonment;
 * PINs 600043, 600044, 600117; SH 113A runs to Kundrathur; leather units around Nagalkeni; Chennai airport next door.
 *
 * Facts checked (Nov 2026):
 * - Exports are zero-rated supplies (Section 16, IGST Act): either export under a Letter of Undertaking (RFD-11, Rule 96A) without
 *   IGST and claim refund of unutilised ITC in RFD-01 using the Rule 89(4) formula, or pay IGST and get it refunded. The LUT is
 *   valid for one financial year and is filed afresh each year. (cleartax.in/s/lut-letter-of-undertaking-gst,
 *   cleartax.in/s/gst-export-refunds-rule-96-vs-rule-89, setindiabiz.com/blog/gst-lut-filing-fy-2026-27)
 * - IGST-paid goods exports: the shipping bill is treated as the refund application (Rule 96); data flows from GSTN to ICEGATE only
 *   if GSTR-1 Table 6A and GSTR-3B are filed and the IGST in GSTR-3B Table 3.1(b) is not less than Table 6A; invoice mismatches
 *   (SB005) block the refund; Table 6A errors are amended through Table 9A. (vjmglobal.com/blog/igst-refund-mismatch-between-gstr-1-gstr-3b,
 *   taxguru.in, winvesta.in 2026 GST export compliance checklist)
 * - Refund claims under Section 54 are due within two years of the relevant date. From 1 Oct 2025, Rule 91(2) amended: 90% of
 *   zero-rated refund claims sanctioned provisionally on system risk assessment (CBIC Instruction 06/2025-GST, 3 Oct 2025);
 *   officers can withhold with reasons. (taxmann.com/post/blog/cbic-introduces-risk-based-system-for-90-provisional-gst-refunds,
 *   taxscan.in)
 * - GST 2.0 (22 Sep 2025): job work on leather and leather goods cut from 12% to 5%.
 *   (static.pib.gov.in/WriteReadData/specificdocs/documents/2025/sep/doc2025920642201.pdf)
 * - Air travel agents: Rule 32(3) option to pay 18% on 5% of the basic fare for domestic tickets and 10% for international, or
 *   18% on the actual commission. (cleartax.in, taxaj.com/learn GST on air ticket commission)
 * - Tour operators: 5% without ITC, other than ITC of input services from another tour operator (Notification 11/2017-CTR entry
 *   as amended; no source shows GST 2.0 changed it). Whether an 18% with-ITC route is open is disputed, so it isn't stated.
 *   (busy.in/gst-rates/tours-travels, kanakkupillai.com, taxtmi.com AAR)
 * - Registration: no government fee; thresholds and QRMP as on the P2-C1 / P2-C2 JSDoc. Timelines are estimates.
 */

const whatsapp = "Hi National Filings, I'm an exporter in Pallavaram and need help with GST and export refunds.";

export const gstPallavaramPage: LicencePageData = {
  id: "P2-A2",
  service: GST_SERVICE,
  meta: {
    title: "GST Consultant in Pallavaram, Chennai | National Filings",
    description: "GST consultant in Pallavaram for leather exporters and travel agents. LUT filing, export refunds, shipping bill matching, air ticket commission GST.",
  },
  hero: {
    headline: { line1: "GST Consultant", line2Before: "in Pallavaram, ", accent: "Refunds on Track" },
    sub: "Pallavaram's leather exporters wait on GST refunds, and its travel agents work under special GST rules. We file the returns, LUTs and refund claims that keep both moving, over WhatsApp and email.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "Ship",
    kicker: "Pallavaram, Chennai",
    title: "Export Refund Filed",
    line: "Your Pallavaram Business",
    stamp: "Refund claimed",
    chips: ["LUT for the year", "Table 6A matched", "RFD-01 filed"],
    steps: ["Invoices", "Shipping bill", "GSTR-1", "GSTR-3B", "Refund"],
  },

  benefitsSection: {
    title: "GST support for Pallavaram's exporters and travel trade",
    lead: "For an exporter, GST is mostly about getting tax back. For a travel agent, it is about valuing the service correctly. Both depend on clean monthly filings.",
    cta: {
      title: "Refund stuck or delayed?",
      sub: "Send us the shipping bill numbers and the error shown on ICEGATE or the GST portal. We'll trace where the data broke.",
      message: "Hi National Filings, my IGST export refund from Pallavaram is stuck. Can you check what went wrong?",
    },
  },
  benefits: [
    { icon: "Ship", title: "Exports without tax upfront", line: "LUT filed each year so shipments go out without paying IGST first." },
    { icon: "RefreshCw", title: "Credit turned back into cash", line: "Refund claims for input credit that builds up when most sales are exports." },
    { icon: "SearchCheck", title: "Shipping bills matched", line: "Invoice numbers, values and IGST checked against GSTR-1 before filing." },
    { icon: "Plane", title: "Ticketing GST done right", line: "Air ticket commission valued under the rule that suits your business." },
    { icon: "Globe", title: "Tour packages handled", line: "Package billing kept within the conditions for the tour operator rate." },
    { icon: "Factory", title: "Leather job work rates", line: "Job work on leather moved to 5% in September 2025. We check your bills." },
    { icon: "Coins", title: "Working capital in view", line: "Refunds tracked month by month, so you know what is due back and when." },
    { icon: "MessageCircle", title: "Handled remotely", line: "Documents on WhatsApp and email. Our Kundrathur office is a short drive away." },
  ],

  applicantsSection: {
    title: "Pallavaram businesses we file GST for",
    lead: "Our GST work in Pallavaram falls into two groups: businesses that sell abroad, and businesses that serve the people flying in and out.",
  },
  applicants: [
    { icon: "Ship", title: "Finished leather exporters", line: "Units around Nagalkeni shipping leather to overseas buyers." },
    { icon: "ShoppingBag", title: "Leather goods exporters", line: "Makers of bags, belts, wallets and footwear for export." },
    { icon: "Factory", title: "Leather job workers", line: "Cutting, stitching and finishing units working for exporters." },
    { icon: "Plane", title: "Air ticketing agents", line: "Agents booking domestic and international flights for clients." },
    { icon: "Globe", title: "Tour operators", line: "Holiday and pilgrimage packages with travel and stay bundled." },
    { icon: "Hotel", title: "Hotel and visa agents", line: "Booking and documentation services around the airport." },
    { icon: "Truck", title: "Freight and courier agents", line: "Businesses moving export cargo and parcels through the airport." },
    { icon: "Laptop", title: "Service exporters", line: "Consultants and IT freelancers billing clients outside India." },
  ],

  opportunities: {
    eyebrow: "Local trades",
    title: "Where Pallavaram's GST refunds and returns come from",
    intro: "Hides are finished and cut into goods around Nagalkeni, shipped out through Chennai's port and airport, while the terminal next door keeps travel agents booking all day. Each trade has its own GST routine.",
    // Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "Layers", title: "Finished leather", image: "https://images.unsplash.com/photo-1573227896778-8f378c4029d4?auto=format&fit=crop&w=1600&q=90", alt: "Sheets of finished leather in grey, brown and tan laid over each other", credit: "Kelly Sikkema / Unsplash" },
      { icon: "ShoppingBag", title: "Leather goods making", image: "https://images.unsplash.com/photo-1793502618531-38f8ac2d9652?auto=format&fit=crop&w=1600&q=90", alt: "Craftsman cutting brown leather with a small knife on a grid mat", credit: "g ghz / Unsplash" },
      { icon: "Ship", title: "Export shipments", image: "https://images.unsplash.com/photo-1590496793907-4d66e2994b4d?auto=format&fit=crop&w=1600&q=90", alt: "Container ship being loaded by cranes at a busy port at dusk", credit: "Timelab / Unsplash" },
      { icon: "Plane", title: "Travel and ticketing", image: "https://images.unsplash.com/photo-1783768815105-086a0da68782?auto=format&fit=crop&w=1600&q=90", alt: "Travellers with luggage waiting in a modern airport terminal", credit: "Edwin Petrus / Unsplash" },
    ],
  },

  highlights: {
    eyebrow: "Two ways to export",
    title: "LUT or IGST: choosing the export route",
    lead: "Exports are zero-rated, so no GST is finally borne on them. The question is whether you pay IGST and get it back, or skip it and claim back your input credit instead.",
    items: [
      { icon: "FileSignature", label: "Route 1", title: "Export under LUT", line: "File a Letter of Undertaking for the year and ship without IGST. Credit that piles up is claimed back in RFD-01.", highlight: true },
      { icon: "ReceiptIndianRupee", label: "Route 2", title: "Pay IGST, get it refunded", line: "Charge IGST on the export invoice. The shipping bill itself works as the refund claim, once your returns match." },
      { icon: "Calculator", label: "Under LUT", title: "Refund of unused credit", line: "Worked out on a formula linking export turnover to total turnover, with invoice-wise statements attached." },
      { icon: "Clock", label: "Both routes", title: "Two-year limit and provisional refunds", line: "Claims must be made within two years. Since October 2025, 90% of low-risk claims can be sanctioned provisionally." },
    ],
  },

  documentsSection: {
    title: "Documents we need from Pallavaram exporters and agents",
    lead: "Send these by WhatsApp or email. For exporters, the shipping and bank documents carry as much weight as the GST invoices.",
  },
  documents: [
    { icon: "Ship", title: "For goods exporters", items: ["Export invoices", "Shipping bills and export general manifest details", "Bank realisation certificates", "Purchase bills for leather, chemicals and accessories", "Current year's LUT acknowledgement"], hint: "The invoice number and date on the shipping bill must match your GST invoice exactly. We check this first." },
    { icon: "Plane", title: "For travel agents and tour operators", items: ["Ticket sales reports with basic fare", "Airline commission and incentive statements", "Package invoices to customers", "Bills from hotels, transporters and other operators"], hint: "Tell us whether you charge customers a separate service fee. It affects how the value is worked out." },
    { icon: "IdCard", title: "For a new GSTIN", items: ["PAN and Aadhaar of each owner or partner", "Photograph of each owner or partner", "Electricity bill for the Pallavaram premises", "Rent agreement and owner's consent, if rented", "Cancelled cheque or bank statement"], hint: "No government fee is charged for GST registration. Exporters should plan the LUT straight after." },
  ],
  documentsNote: {
    title: "Not sure which shipping bills are stuck?",
    sub: "Send us your shipping bill list and the last three GSTR-1 filings. We'll show which invoices did not reach Customs and why.",
    message: "Hi National Filings, I export leather from Pallavaram. Can you check why some of my shipping bills haven't been refunded?",
  },

  processSection: {
    title: "How we handle GST for a Pallavaram exporter",
    lead: "Most Pallavaram clients never visit. We agree the route and the monthly routine on a call, then documents and approvals move over WhatsApp and email.",
    cta: {
      title: "Start with a refund review",
      sub: "Share your last few months of returns and shipping bills. We'll tell you what is due back and what is blocking it.",
      message: "Hi National Filings, can you review my export GST returns and refunds? My business is in Pallavaram.",
    },
  },
  steps: [
    { title: "Review", time: "Day 1", sub: "Your export route, LUT status, past returns and any pending or rejected refunds." },
    { title: "Set the route", time: "Before the next shipment", sub: "LUT filed or renewed, or the IGST route set up in your invoicing, as agreed." },
    { title: "Monthly matching", time: "Each period", sub: "Export invoices matched to shipping bills, then reported in GSTR-1 Table 6A." },
    { title: "Returns filed", time: "By the due date", sub: "GSTR-1 and GSTR-3B filed with export values in the right tables." },
    { title: "Refund follow-up", time: "Until credited", sub: "RFD-01 filed for unused credit, or IGST refund status tracked on ICEGATE." },
  ],
  processNote: "Timelines are estimates. Refund processing depends on the department, Customs and the risk checks on each claim.",

  mistakesSection: {
    title: "Why Pallavaram exporters and agents lose GST money",
    lead: "These are the errors we untangle most often. Each one delays a refund or leads to tax being paid twice.",
  },
  mistakes: [
    { icon: "FileWarning", title: "Invoice number differs from the shipping bill", problem: "The GST invoice reads 45/26-27 but the shipping bill shows 045, so the IGST refund is rejected for mismatch.", fix: "We match numbering before GSTR-1 is filed, and correct Table 6A through Table 9A where it already went wrong." },
    { icon: "TriangleAlert", title: "Export IGST shown short in GSTR-3B", problem: "Exports are reported as normal sales, or the IGST in GSTR-3B is less than GSTR-1 Table 6A, so nothing reaches Customs.", fix: "We report exports in the zero-rated row of GSTR-3B and check both returns agree before filing." },
    { icon: "CalendarClock", title: "LUT lapsed at the year end", problem: "The new financial year starts and shipments go out under last year's LUT, which has expired.", fix: "We file the next year's LUT before 1 April, so no shipment goes out without cover." },
    { icon: "Plane", title: "Full ticket value treated as income", problem: "A travel agent pays GST on the whole ticket amount collected, or on nothing at all.", fix: "We value the service on actual commission or on the basic fare option, and keep the choice consistent." },
  ],

  costSection: {
    title: "What our GST fee for a Pallavaram business depends on",
    lead: "Export and travel work varies a lot from one client to the next. We look at your volume and quote before we start.",
    cta: {
      title: "Get a quote for your export GST",
      sub: "Tell us how many shipments or tickets you handle a month and which refunds are pending. We'll quote each part.",
      message: "Hi National Filings, can I get a quote for GST and export refunds for my Pallavaram business?",
    },
  },
  costs: [
    { icon: "IdCard", label: "No government fee", title: "GST registration and LUT", line: "Our fee covers the application, officer queries and filing the LUT for the year." },
    { icon: "CalendarClock", label: "Quoted upfront", title: "Monthly or quarterly returns", line: "Depends on invoice volume and the number of shipping bills or tickets to match.", highlight: true },
    { icon: "RefreshCw", label: "Quoted per claim", title: "Refund applications", line: "Depends on the period covered, the number of invoices and any past mismatches to fix." },
    { icon: "FileWarning", label: "Quoted per case", title: "Rejected refunds and notices", line: "Depends on how many shipping bills are stuck and what the department has asked for." },
  ],

  compliance: {
    eyebrow: "Through the year",
    title: "The GST calendar for a Pallavaram exporter or agent",
    lead: "These are the filings that decide whether refunds arrive on time and whether travel income is taxed correctly.",
    items: [
      { icon: "FileSignature", label: "Before 1 April", title: "LUT for the new year", line: "Filed online in RFD-11, valid for the financial year." },
      { icon: "Ship", label: "Monthly or quarterly", title: "GSTR-1 Table 6A", line: "Each export invoice reported with its shipping bill number, port code and date." },
      { icon: "RefreshCw", label: "Within two years", title: "Refund of unused credit", line: "RFD-01 filed for the period, with export and turnover statements." },
      { icon: "Plane", label: "For travel agents", title: "Commission and package billing", line: "Ticketing value and tour operator conditions checked before each return." },
    ],
  },

  reasonsTitle: "Why Pallavaram exporters and agents choose National Filings",
  reasons: [
    { icon: "RefreshCw", title: "Refunds followed through", line: "We track each claim until the money reaches your bank account." },
    { icon: "SearchCheck", title: "Matched before filing", line: "Invoices, shipping bills and returns checked against each other every month." },
    { icon: "MessageCircle", title: "No need to visit", line: "WhatsApp and email for documents, approvals and status updates." },
    { icon: "MapPinned", title: "Office close by", line: "Our Kundrathur office is on the road from Pallavaram, if you'd rather meet." },
    { icon: "Award", title: "Experience since 2012", line: "GST and compliance work for Chennai businesses through every change in the law." },
    { icon: "ReceiptText", title: "Fees agreed in writing", line: "Monthly and refund fees confirmed before any work begins." },
  ],

  faqTitle: "GST for Pallavaram exporters and travel agents",
  faqs: [
    { q: "Should I export under LUT or pay IGST and claim it back?", a: "Most exporters prefer the LUT, because no tax leaves the business when goods are shipped. The IGST route can still make sense if you have large unused credit, since paying IGST from that credit and getting it refunded through the shipping bill can be quicker than a refund application. We compare both on your figures." },
    { q: "Why hasn't my IGST export refund been credited?", a: "Usually because the data never reached Customs or was rejected there. Common causes are an invoice number that differs from the shipping bill, IGST in GSTR-3B lower than in GSTR-1 Table 6A, or a missing return. We check the error code on ICEGATE and fix the source." },
    { q: "How long do I have to claim a refund of unused input credit?", a: "A refund application must be filed within two years of the relevant date, which for exports is linked to the date of export. Claims are filed in RFD-01 with invoice-wise statements. Since October 2025, 90% of low-risk claims for exports can be sanctioned provisionally." },
    { q: "Do I need to renew my LUT every year?", a: "Yes. An LUT covers one financial year. File the next one before 1 April so shipments in April aren't caught without cover." },
    { q: "How is GST worked out on air ticket commission?", a: "An air travel agent can pay 18% GST on the actual commission and service charges. Or it can opt to treat 5% of the basic fare as the value for domestic tickets and 10% for international tickets, and pay 18% on that. We help you pick the option that suits how you earn." },
    { q: "What GST rate applies to tour packages we sell?", a: "Tour operator services are taxed at 5% when the operator does not take input credit on its costs, apart from credit on services bought from other tour operators. The invoice should show the full package value including travel and stay. We check your packages meet these conditions before you bill." },
    { q: "Do you have an office near Pallavaram?", a: "Our only office is in Karaima Nagar, Kundrathur, on the road from Pallavaram. Most Pallavaram clients work with us over WhatsApp and email, and you're welcome to visit Monday to Saturday, 9 am to 7 pm." },
  ],

  related: nearbyAreas("P2-A2"),
  relatedTitle: "GST consultants in areas near Pallavaram",

  final: {
    title: "Get your Pallavaram export refunds moving",
    sub: "Message us with your trade and the refunds or returns on your mind. We'll review them and tell you what is due back.",
    message: "Hi National Filings, I run an export business in Pallavaram and want help with GST refunds. Can we talk?",
  },
  catalogue: ["GST return filing in Pallavaram", "Export LUT and GST refunds in Pallavaram", "GST for travel agents in Pallavaram"],
};
