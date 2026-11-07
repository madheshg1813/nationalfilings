import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { GST_SERVICE, nearbyAreas } from "./shared";

/**
 * P2-A5 · GST Consultant in Chromepet (/chennai/gst-consultant-in-chromepet).
 * Primary keyword: "gst consultant in chromepet". Angle: freelancers, consultants, student founders and young tech firms
 * around the Madras Institute of Technology campus, many of them billing foreign clients, plus the shops along GST Road.
 * Unique section: when a service to a foreign client counts as an export, and what the LUT and invoice must show.
 * General GST registration, return and notice wording lives on the P2-C* cluster pages; the company page for this area is P1-A5.
 *
 * Local facts (reused from the verified P1-A5 JSDoc): Chromepet is in Chengalpattu district, PIN 600044, governed by
 * Tambaram City Municipal Corporation; Madras Institute of Technology was founded here in 1949 and is a constituent college of
 * Anna University; GST Road runs through it; Chromepet station is on the suburban line towards Tambaram.
 *
 * Facts checked (Nov 2026):
 * - Registration thresholds for Tamil Nadu: ₹20 lakh for service suppliers, ₹40 lakh for suppliers of goods only; no government
 *   fee (as verified on P2-C1). Aggregate turnover is counted on an all-India basis and includes exports and exempt supplies.
 *   (taxguru.in/?p=625827, setindiabiz.com/blog/gst-registration-freelancers-export-services-below-20-lakhs)
 * - Notification 10/2017-Integrated Tax: persons making inter-state supplies of services (an export is an inter-state supply)
 *   need not register below the threshold. Inter-state supply of goods needs registration whatever the turnover (Section 24(i)).
 *   (taxguru.in/?p=625827, taxadda.com/gst-on-freelancers/)
 * - Export of services, Section 2(6) IGST Act: supplier in India, recipient outside India, place of supply outside India, payment
 *   in convertible foreign exchange or in rupees where the RBI permits, and supplier and recipient not merely establishments of
 *   one person. CBIC Circular 202/2023 (payment condition) and 161/2021 (distinct persons). (gstzen.in/?p=16124, razorpay.com/blog/conditions-for-export-of-services-under-gst/)
 * - Zero-rating, Section 16 IGST Act: export under a Letter of Undertaking (RFD-11, one per financial year) without IGST and claim
 *   refund of unused credit, or pay IGST and claim it back. (cleartax.in/s/lut-letter-of-undertaking-gst, studycafe.in/?p=409580)
 * - Rule 46 CGST Rules: export invoice carries "SUPPLY MEANT FOR EXPORT ... UNDER BOND OR LETTER OF UNDERTAKING WITHOUT PAYMENT
 *   OF INTEGRATED TAX" (or "ON PAYMENT OF INTEGRATED TAX") and shows the recipient's name and address, delivery address and
 *   country of destination. (cggst.com Rule 46 text, Notification 17/2017-CT)
 * - Rule 96A: under an LUT, if payment for exported services isn't received within one year of the invoice (or a longer period
 *   the Commissioner allows), tax is payable with interest; CBIC has clarified a refund is available if the money arrives later.
 *   (cggst.com/uploads/document/1754288106-rule-96a.pdf, jurishour.in/gst/gst-interest-tax-refund-delayed-export-receipts/)
 * - Rule 91(2) amended by Notification 13/2025-CT, from 1 Oct 2025: 90% of zero-rated refund claims sanctioned provisionally on a
 *   system risk rating (Instruction 06/2025-GST); some persons excluded. (taxmann.com/post/blog/cbic-introduces-risk-based-system-for-90-provisional-gst-refunds)
 * - Finance Act, 2026 omitted Section 13(8)(b) IGST Act (in force 30 March 2026): intermediary services now take the recipient's
 *   location as place of supply, so they can qualify as exports. (grantthornton.in/insights/articles/gst-on-intermediary-services/)
 * - Import of services by a registered business (such as foreign cloud or software subscriptions) is taxed under reverse charge.
 * - Composition: goods up to ₹1.5 crore (1% for traders), services up to ₹50 lakh; composition dealers can't collect GST from
 *   customers (Section 10(4)). (support.taxaj.com composition FY 2026-27, ICAI handbook Feb 2026 via a2ztaxcorp.net/?p=26386)
 * - Returns: GSTR-1 by the 11th or 13th after the quarter (QRMP); GSTR-3B by the 20th, or the 22nd for Tamil Nadu QRMP filers
 *   (as verified on P2-C2). Timelines are estimates.
 */

const whatsapp = "Hi National Filings, I'm a freelancer in Chromepet with foreign clients. Do I need GST registration?";

export const gstChromepetPage: LicencePageData = {
  id: "P2-A5",
  service: GST_SERVICE,
  meta: {
    title: "GST Consultant in Chromepet, Chennai | National Filings",
    description: "GST consultant in Chromepet for freelancers, student founders and GST Road shops. Export of services, LUT, foreign invoices and returns handled.",
  },
  hero: {
    headline: { line1: "GST Consultant", line2Before: "in Chromepet, ", accent: "For Global Clients" },
    sub: "Coding for a client in Germany, designing for one in Dubai, or running a shop on GST Road? We tell you when GST registration is due, keep your foreign work zero-rated with an LUT, and file your returns every month or quarter.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "Globe",
    kicker: "Chromepet, Chengalpattu",
    title: "LUT Accepted",
    line: "Your Chromepet Business",
    stamp: "Zero-rated",
    chips: ["Export invoice ready", "No IGST on exports", "Returns on time"],
    steps: ["Turnover", "GSTIN", "LUT", "Invoice", "Returns"],
  },

  benefitsSection: {
    title: "What a GST consultant does for Chromepet's freelancers and founders",
    lead: "Most people here earn from clients they have never met, paid through a bank or platform transfer. GST treats that work differently from a local sale, and small slips cost real money.",
    cta: {
      title: "Paid in dollars or euros?",
      sub: "Tell us where your clients are, how they pay you and what you earned last year. We'll tell you whether you need a GSTIN yet.",
      message: "Hi National Filings, I work from Chromepet for clients abroad. Can you check if I need GST?",
    },
  },
  benefits: [
    { icon: "Calculator", title: "Threshold counted correctly", line: "Foreign receipts count towards ₹20 lakh, so we add them up with your local income." },
    { icon: "Globe", title: "Exports kept zero-rated", line: "We check each client contract against the five export conditions before you bill." },
    { icon: "FileCheck2", title: "LUT filed every April", line: "So you invoice abroad without paying IGST first and waiting for a refund." },
    { icon: "ReceiptText", title: "Invoices that pass scrutiny", line: "Export endorsement, client address and country on every foreign invoice." },
    { icon: "Banknote", title: "Payment proof matched", line: "Bank advices tied to invoices, so no export loses its status for want of proof." },
    { icon: "Coins", title: "Credit on your laptop and tools", line: "GST paid on equipment and subscriptions recovered as a refund where it piles up." },
    { icon: "Rocket", title: "Ready for your first Indian client", line: "Local B2B clients want a GSTIN on your bill. We set it up before they ask." },
    { icon: "Store", title: "Shops on GST Road covered too", line: "Regular or composition, monthly or quarterly, chosen to suit your counter sales." },
  ],

  applicantsSection: {
    title: "Who we handle GST for in Chromepet",
    lead: "Between the MIT campus, the station and the long run of shops on GST Road, our Chromepet clients fall into a few clear groups.",
  },
  applicants: [
    { icon: "Laptop", title: "Freelance developers", line: "Web, app and backend work billed to clients in the US, UK, Europe or the Gulf." },
    { icon: "PenLine", title: "Designers and content writers", line: "UI, branding, video and copy delivered online to agencies abroad." },
    { icon: "Briefcase", title: "Independent consultants", line: "Engineers and analysts on retainer with foreign firms." },
    { icon: "GraduationCap", title: "Student and alumni founders", line: "Teams from the MIT campus selling their first product or service." },
    { icon: "Building2", title: "Young tech companies", line: "Small private limited firms with offshore clients and a few staff." },
    { icon: "Handshake", title: "Sourcing agents and intermediaries", line: "People who arrange work or goods for foreign principals on commission." },
    { icon: "Store", title: "GST Road retailers", line: "Textile, footwear, mobile and electronics shops selling to walk-in customers." },
    { icon: "Coffee", title: "Cafes and food counters", line: "Student-facing outlets weighing composition against regular GST." },
  ],

  opportunities: {
    eyebrow: "Chromepet at work",
    title: "Where Chromepet's GST questions come from",
    intro: "A lot of Chromepet's income is earned on a laptop and paid from abroad. Alongside it, GST Road's shops still run on cash counters and daily stock. Each needs a different GST set-up.",
    // Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "Laptop", title: "Remote tech work", image: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?auto=format&fit=crop&w=1600&q=90", alt: "Developer working late at two monitors full of code in a dark room", credit: "Mohammad Rahmani / Unsplash" },
      { icon: "Banknote", title: "Paid in foreign currency", image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=1600&q=90", alt: "Banknotes from several countries spread out together, including a US dollar note", credit: "Jason Leung / Unsplash" },
      { icon: "GraduationCap", title: "Campus founders", image: "https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee?auto=format&fit=crop&w=1600&q=90", alt: "Students working at rows of desktop computers in a college computer lab", credit: "sunrise University / Unsplash" },
      { icon: "ShoppingBag", title: "GST Road shops", image: "https://images.unsplash.com/photo-1773218373348-34db6bb11662?auto=format&fit=crop&w=1600&q=90", alt: "Printed fabrics folded over hangers with price tags in a shop", credit: "Wolfgang Hasselmann / Unsplash" },
    ],
  },

  highlights: {
    eyebrow: "Export of services",
    title: "When work for a foreign client counts as an export",
    lead: "An export of services is zero-rated, so no GST is charged to the client. It only qualifies if every one of these conditions holds. Miss one, and the same invoice can attract 18% GST.",
    items: [
      { icon: "Globe", label: "Who and where", title: "You in India, client outside", line: "You supply from India, the client is located abroad, and the place of supply is outside India. For most online services that follows the client's location." },
      { icon: "Banknote", label: "How you are paid", title: "Foreign exchange received", line: "Payment must arrive in convertible foreign exchange, or in rupees only where the RBI allows it. Keep the bank's advice for every receipt.", highlight: true },
      { icon: "Users", label: "Not your own branch", title: "A genuinely separate client", line: "Billing your own office or branch abroad does not count. A foreign parent or group company is a separate person and can qualify." },
      { icon: "Handshake", label: "Changed in 2026", title: "Agents and intermediaries", line: "The Finance Act, 2026 removed the old rule that taxed intermediary services where the supplier sits. Commission from foreign principals can now qualify as an export." },
    ],
  },

  documentsSection: {
    title: "Documents for GST registration and LUT in Chromepet",
    lead: "Freelancers usually register as proprietors on their own PAN. Send everything on WhatsApp; nothing here needs an office visit.",
  },
  documents: [
    { icon: "IdCard", title: "About you", items: ["PAN and Aadhaar", "Photograph", "Mobile number linked to Aadhaar", "Email ID you check daily"], hint: "Aadhaar authentication goes to that mobile, so keep it with you on filing day." },
    { icon: "Home", title: "Where you work from", items: ["Electricity bill or property tax receipt", "Rent agreement, if rented", "Consent letter from the owner, often a parent"], hint: "Working from your family home in Chromepet is fine as the principal place of business." },
    { icon: "Globe", title: "For your foreign clients", items: ["Client contracts or engagement emails", "Bank or platform payment advices", "Current account or bank details for receipts", "Last year's income summary"], hint: "These show the work is an export and help us file the LUT straight after registration." },
  ],
  documentsNote: {
    title: "Paid through a platform or wallet?",
    sub: "Send us a few months of payout statements. We'll check how the money reaches your account and what proof of foreign exchange you can show.",
    message: "Hi National Filings, I get paid through a freelancing platform in Chromepet. Can you check my payout proof for GST?",
  },

  processSection: {
    title: "How we set up GST for a Chromepet freelancer or startup",
    lead: "Registration, LUT and the first invoice usually come together within a week or two of complete documents. After that, it settles into a monthly or quarterly routine.",
    cta: {
      title: "Start with a short call",
      sub: "Tell us your clients, your turnover and how you are paid. We'll send the checklist and a written quote.",
      message: "Hi National Filings, can we talk about GST registration for my freelance work in Chromepet?",
    },
  },
  steps: [
    { title: "Turnover and client check", time: "Day 1", sub: "We add up foreign and Indian receipts and test each client against the export conditions." },
    { title: "GST application", time: "1-2 days", sub: "Filed with the right service codes and Aadhaar authentication from your phone." },
    { title: "GSTIN issued", time: "Usually within a week", sub: "Low-risk applicants with Aadhaar authentication often get it within three working days." },
    { title: "LUT filed", time: "Same week", sub: "Letter of Undertaking filed online for the rest of the financial year, then renewed each April." },
    { title: "Invoices and returns", time: "Every month or quarter", sub: "Export invoice format set up, then GSTR-1 and GSTR-3B filed on time." },
  ],
  processNote: "Timelines are estimates. Officer queries, site verification or an incomplete document can add time.",

  mistakesSection: {
    title: "GST mistakes Chromepet freelancers make",
    lead: "These come up again and again with first-time freelancers and student founders. Each is cheaper to prevent than to explain to an officer.",
  },
  mistakes: [
    { icon: "Calculator", title: "Leaving foreign income out of turnover", problem: "A developer earns ₹25 lakh from abroad and assumes exports don't count towards the threshold.", fix: "We count every receipt, foreign and local, and register you before the limit is crossed." },
    { icon: "FileWarning", title: "Exporting without an LUT", problem: "Registered, but no LUT filed, so invoices to foreign clients technically needed IGST.", fix: "We file the LUT right after registration and set a reminder to renew it before each April." },
    { icon: "Clock", title: "Payment stuck for over a year", problem: "A client pays very late, and the one-year window for export proceeds passes unnoticed.", fix: "We track unpaid export invoices, so tax with interest is paid on time if needed and claimed back when the money arrives." },
    { icon: "Globe", title: "Ignoring GST on foreign subscriptions", problem: "Cloud hosting and software bought from abroad, with no reverse charge paid after registration.", fix: "We report these imports under reverse charge each month. The tax is usually available back as credit." },
  ],

  costSection: {
    title: "What our GST fee in Chromepet depends on",
    lead: "There is no government fee for GST registration or for filing an LUT. Our fee depends on the work involved, and you'll have it in writing before we start.",
    cta: {
      title: "Get a quote for your set-up",
      sub: "Tell us how many clients you bill each month and whether you want monthly or quarterly returns. We'll quote for exactly that.",
      message: "Hi National Filings, can I get a GST quote for my freelance work in Chromepet?",
    },
  },
  costs: [
    { icon: "Landmark", label: "No government fee", title: "Registration and LUT", line: "The GST portal charges nothing. You pay only for our time on the application and LUT.", highlight: true },
    { icon: "CalendarClock", label: "Quoted upfront", title: "Monthly or quarterly returns", line: "Quarterly filing under QRMP usually means less work for a solo freelancer." },
    { icon: "ReceiptText", label: "Depends on volume", title: "Invoices and clients", line: "A few foreign clients is quick work. Dozens of small platform payouts take longer to match." },
    { icon: "Coins", label: "Quoted per claim", title: "Refunds of unused credit", line: "Where GST on equipment and tools builds up, we prepare and follow up the refund claim." },
  ],

  compliance: {
    eyebrow: "After registration",
    title: "The GST routine for a Chromepet exporter of services",
    lead: "Once registered, a freelancer billing abroad has a short but fixed list of jobs. We keep track of every date.",
    items: [
      { icon: "FileCheck2", label: "Every April", title: "Renew the LUT", line: "One LUT covers one financial year. File it before the first export invoice of the new year." },
      { icon: "CalendarCheck", label: "Monthly or quarterly", title: "GSTR-1 and GSTR-3B", line: "Exports reported as zero-rated supplies, and reverse charge on imported services paid through GSTR-3B." },
      { icon: "Banknote", label: "Within a year of each invoice", title: "Export payment received", line: "Under an LUT, money for each export must arrive in time, or tax with interest becomes payable." },
      { icon: "Coins", label: "When credit builds up", title: "Refund claim", line: "Unused credit on exports can be refunded, and most low-risk claims get 90% provisionally." },
    ],
  },

  reasonsTitle: "Why Chromepet freelancers and founders choose National Filings",
  reasons: [
    { icon: "Globe", title: "We know export billing", line: "LUTs, export invoices and payment proof are routine work for us." },
    { icon: "MessageCircle", title: "All on WhatsApp and email", line: "No office visit needed. Send statements and we send back filed returns." },
    { icon: "MapPinned", title: "Office in Kundrathur", line: "Our only office is in Karaima Nagar, Kundrathur, if you'd like to meet." },
    { icon: "ReceiptText", title: "Fee agreed in writing", line: "One clear quote for registration, LUT and returns before any work starts." },
    { icon: "Award", title: "In practice since 2012", line: "Registration, GST and compliance for Chennai businesses of every size." },
    { icon: "CalendarClock", title: "Dates tracked for you", line: "LUT renewal, return due dates and unpaid export invoices all on our calendar." },
  ],

  faqTitle: "GST in Chromepet: freelancers and founders ask",
  faqs: [
    { q: "I earn ₹12 lakh a year from foreign clients. Do I need GST registration?", a: "Usually not yet. A supplier of services in Tamil Nadu needs to register once aggregate turnover crosses ₹20 lakh in a year, and supplying services across borders does not on its own force you to register below that limit. Your foreign receipts do count towards the ₹20 lakh, so add them to any Indian income. Some clients and platforms ask for a GSTIN anyway, and you can register voluntarily." },
    { q: "Do I have to charge GST to my client in the US or UK?", a: "Not if the work qualifies as an export of services. Exports are zero-rated, so you bill without GST once you have filed a Letter of Undertaking. If you skip the LUT, you have to pay IGST first and then claim it back as a refund, which ties up your money." },
    { q: "What must an invoice to a foreign client show?", a: "Your GSTIN and invoice details, the client's name and address, the country, the service and its value, and the endorsement stating that it is a supply meant for export under a Letter of Undertaking without payment of integrated tax. You can bill in foreign currency; we show you how to record the rupee value." },
    { q: "My client pays through a freelancing platform. Is that still an export?", a: "It can be, as long as the client is outside India, the service is delivered to them and the money reaches you in foreign exchange. The platform's payout statement and your bank's credit advice together usually serve as proof. Keep them month by month." },
    { q: "I'm still a student at a Chromepet college. Can I register for GST?", a: "Yes. Any adult with a PAN and Aadhaar can register as a proprietor, and your family home can be the place of business with the owner's consent. If your team has formed a company or LLP, the registration is taken in the entity's name instead." },
    { q: "I run a shop on GST Road. Should I choose the composition scheme?", a: "It can suit a shop selling mainly to walk-in customers, with turnover up to ₹1.5 crore. You pay tax at a low flat rate on turnover and file fewer returns, but you cannot charge GST to customers or claim input credit. If business buyers want credit from your bills, regular registration is usually better." },
    { q: "Do I need to visit your office?", a: "No. Our only office is in Karaima Nagar, Kundrathur, and most Chromepet clients never visit. Registration uses Aadhaar authentication on your phone, and documents and returns move over WhatsApp and email. You're welcome to come in if you'd like to meet." },
  ],

  related: nearbyAreas("P2-A5"),
  relatedTitle: "GST consultants in areas near Chromepet",

  final: {
    title: "Get your Chromepet GST set up for clients abroad",
    sub: "Tell us your clients and turnover. We'll confirm whether to register, file the LUT and keep your exports zero-rated.",
    message: "Hi National Filings, I'm in Chromepet and I'd like help with GST for my clients abroad.",
  },
  catalogue: ["GST registration for freelancers in Chromepet", "LUT filing for exporters of services in Chromepet", "GST return filing in Chromepet"],
};
