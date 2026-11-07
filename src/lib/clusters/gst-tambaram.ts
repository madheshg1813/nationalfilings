import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { GST_SERVICE, nearbyAreas } from "./shared";

/**
 * P2-A6 · GST Consultant in Tambaram (/chennai/gst-consultant-in-tambaram).
 * Primary keyword: "gst consultant in tambaram". Angle: MEPZ SEZ units and the local businesses that supply them, training
 * and coaching institutes, colleges and the retail hub. Unique section: supplying an SEZ unit as a zero-rated supply.
 * General GST registration, return and notice wording lives on the P2-C* cluster pages; the company page for this area is P1-A6.
 *
 * Local facts (reused from the verified P1-A6 JSDoc): Tambaram is a city in Chengalpattu district; Tambaram City Municipal
 * Corporation formed 3 November 2021; MEPZ Special Economic Zone (set up in 1984 as the Madras Export Processing Zone) is on GST
 * Road at Tambaram, with a Development Commissioner's office; Tambaram station is one of the main railway terminals of the
 * Chennai area; Madras Christian College is in East Tambaram.
 *
 * Facts checked (Nov 2026):
 * - Section 7(5)(b) IGST Act: a supply to or by an SEZ unit or developer is an inter-state supply, even within Tamil Nadu, so
 *   IGST applies, not CGST plus SGST. (bcajonline.org/journal/sezs-under-gst-regime/, patronaccounting.com/gst-refund-sez-supplies)
 * - Section 16(1)(b): supplies to an SEZ unit or developer are zero-rated only for authorised operations (amended from 1 Oct 2023).
 *   Section 16(3): supply under bond or LUT without IGST and claim refund of unused credit, or pay IGST and claim refund; the IGST
 *   route is open for most goods and services (Notification 01/2023-IT excludes a few goods). (rsm.global newsflash Oct 2023,
 *   taxguru.in/goods-and-service-tax/important-gst-law-changes-effective-1st-october-2023.html)
 * - Rule 46: invoice endorsement "SUPPLY MEANT FOR EXPORT/SUPPLY TO SEZ UNIT OR SEZ DEVELOPER FOR AUTHORISED OPERATIONS UNDER BOND OR
 *   LETTER OF UNDERTAKING WITHOUT PAYMENT OF INTEGRATED TAX" or "... ON PAYMENT OF INTEGRATED TAX". (cggst.com Rule 46 text)
 * - Rule 89: the supplier claims the refund; for goods, evidence that they were admitted in full into the SEZ for authorised
 *   operations, endorsed by the zone's specified officer; for services, evidence of receipt for authorised operations, endorsed
 *   the same way. (bcajonline.org/journal/sezs-under-gst-regime/)
 * - Rule 91(2) from 1 Oct 2025: 90% of zero-rated refund claims sanctioned provisionally on a system risk rating.
 *   (taxmann.com/post/blog/cbic-introduces-risk-based-system-for-90-provisional-gst-refunds)
 * - SEZ units: separate registration as a business vertical distinct from units outside the zone (Rule 8); separate returns per
 *   GSTIN; services imported for authorised operations exempt from IGST; goods cleared from the SEZ into the rest of India are
 *   treated as imports, with the buyer filing a bill of entry and paying customs duty including IGST.
 *   (bcajonline.org/journal/sezs-under-gst-regime/, taxguru.in/goods-and-service-tax/gst-applicability-sez-transactions.html)
 * - Registration: inter-state supply of goods needs registration whatever the turnover (Section 24(i)); service suppliers below
 *   the threshold are exempt (Notification 10/2017-IT). Thresholds ₹20 lakh services, ₹40 lakh goods; no government fee (P2-C1).
 * - Composition: goods up to ₹1.5 crore (1% for traders), services up to ₹50 lakh; a composition dealer cannot make inter-state
 *   outward supplies of goods (Section 10(2)(c)) and cannot collect GST from customers (Section 10(4)).
 *   (support.taxaj.com composition FY 2026-27, ICAI handbook Feb 2026 via a2ztaxcorp.net/?p=26386)
 * - E-invoicing for B2B, export and SEZ invoices once aggregate turnover in any year since 2017-18 exceeds ₹5 crore.
 *   (incorpx.io/blog/new-gst-rules-changes-2026)
 * - Education (Notification 12/2017-CT(Rate), entry 66): services by an educational institution (school up to higher secondary,
 *   courses leading to a qualification recognised by law, approved vocational courses) to its students, faculty and staff are
 *   exempt; transport, catering including mid-day meals, security, cleaning and housekeeping supplied to schools, and admission
 *   and examination services, are exempt; procurement by higher-education institutions is mostly taxable. Coaching centres,
 *   tuition and private tutorials are taxable at 18%, unchanged by the GST 2.0 changes of 22 Sep 2025.
 *   (cleartax.in/s/gst-educational-institutions, businesstoday.in GST 2.0 coaching 18% report 5 Sep 2025, taxguru.in/?p=1089846)
 * - Returns: GSTR-1 by the 11th or 13th after the quarter (QRMP); GSTR-3B by the 20th, or the 22nd for Tamil Nadu QRMP filers
 *   (as verified on P2-C2). Timelines are estimates.
 */

const whatsapp = "Hi National Filings, I'm in Tambaram and I supply to a unit in MEPZ. Can you help with GST?";

export const gstTambaramPage: LicencePageData = {
  id: "P2-A6",
  service: GST_SERVICE,
  meta: {
    title: "GST Consultant in Tambaram, Chennai | National Filings",
    description: "GST consultant in Tambaram for MEPZ suppliers, SEZ units, coaching institutes and retailers. Zero-rated SEZ invoices, LUT, refunds and returns.",
  },
  hero: {
    headline: { line1: "GST Consultant", line2Before: "in Tambaram, ", accent: "SEZ to Classroom" },
    sub: "Selling to a unit inside MEPZ, running a coaching centre near the colleges, or a shop in the market? Each is taxed differently under GST. We register you, bill each kind of customer correctly and file your returns on time.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "Ship",
    kicker: "Tambaram, Chengalpattu",
    title: "SEZ Supply Invoice",
    line: "Your Tambaram Business",
    stamp: "Zero-rated",
    chips: ["Billed under IGST rules", "LUT on file", "Zone endorsement tracked"],
    steps: ["Order", "LUT", "Invoice", "Endorse", "Refund"],
  },

  benefitsSection: {
    title: "Why Tambaram businesses need GST advice that fits their customers",
    lead: "A supplier to MEPZ, a coaching centre and a market-side retailer can sit on the same road and follow three different sets of GST rules. Getting your own set right is most of the job.",
    cta: {
      title: "Got your first order from an SEZ unit?",
      sub: "Send us the purchase order. We'll tell you how to invoice it, which tax applies and what proof you need back from the zone.",
      message: "Hi National Filings, I've got an order from an SEZ unit in Tambaram. How should I invoice it?",
    },
  },
  benefits: [
    { icon: "ArrowLeftRight", title: "Right tax on zone supplies", line: "Supplies to MEPZ are inter-state, so IGST rules apply even from next door." },
    { icon: "FileCheck2", title: "LUT ready before the order", line: "Supply to the zone without paying IGST up front and blocking working capital." },
    { icon: "Stamp", title: "Endorsements chased", line: "We track the zone officer's endorsement your refund depends on." },
    { icon: "Coins", title: "Refunds filed and followed", line: "Unused credit on zone supplies claimed back, with most claims paid 90% provisionally." },
    { icon: "GraduationCap", title: "Education billed correctly", line: "Exempt school fees kept apart from taxable coaching and training fees." },
    { icon: "Building2", title: "SEZ units' own filings", line: "Separate registration and returns for units inside the zone." },
    { icon: "ShoppingCart", title: "Retail on the right scheme", line: "Composition or regular registration chosen around who your customers are." },
    { icon: "ShieldCheck", title: "Fewer notices", line: "Zone refunds and exempt turnover are common audit topics. Clean records help." },
  ],

  applicantsSection: {
    title: "Tambaram businesses we handle GST for",
    lead: "Tambaram mixes an export zone, a cluster of colleges and institutes, and one of the busiest retail centres in the south of Chennai. These are the GST clients we hear from most.",
  },
  applicants: [
    { icon: "Package", title: "Suppliers to MEPZ units", line: "Packaging, components, consumables and spares delivered into the zone." },
    { icon: "Headset", title: "Service vendors to the zone", line: "Housekeeping, security, canteen, IT support and maintenance contractors." },
    { icon: "Factory", title: "SEZ units and developers", line: "Units inside MEPZ with their own GSTIN and return filing." },
    { icon: "GraduationCap", title: "Coaching and entrance centres", line: "Competitive exam, entrance and tuition classes near the colleges." },
    { icon: "Award", title: "Skill and training institutes", line: "Computer, language and job-skill courses, some with approved certificates." },
    { icon: "Truck", title: "Vendors to schools and colleges", line: "Bus operators, caterers and housekeeping firms working for institutions." },
    { icon: "ShoppingBag", title: "Textile and jewellery retailers", line: "Large showrooms and family shops in the market area." },
    { icon: "Store", title: "Grocery and general stores", line: "Counter-sale shops deciding between composition and regular GST." },
  ],

  opportunities: {
    eyebrow: "Tambaram at work",
    title: "The trades behind Tambaram's GST filings",
    intro: "MEPZ on GST Road has drawn export units and their local suppliers since 1984. Around them sit coaching centres, training institutes and colleges such as Madras Christian College, and a retail market that serves the whole southern suburbs.",
    // Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "Ship", title: "Export units", image: "https://images.unsplash.com/photo-1634646809203-f3b4adff9127?auto=format&fit=crop&w=1600&q=90", alt: "Tall stacks of shipping containers on both sides of a container yard lane", credit: "Fejuz / Unsplash" },
      { icon: "Factory", title: "Suppliers to the zone", image: "https://images.unsplash.com/photo-1639648263454-3d2f0c3b7434?auto=format&fit=crop&w=1600&q=90", alt: "Row of green lathe machines on a workshop floor", credit: "Soham Prajapati / Unsplash" },
      { icon: "GraduationCap", title: "Coaching and training", image: "https://images.unsplash.com/photo-1629306262232-1f854b4b0b13?auto=format&fit=crop&w=1600&q=90", alt: "Students in matching shirts listening at desks in a classroom", credit: "Faisal Qureshi / Unsplash" },
      { icon: "ShoppingBag", title: "The retail hub", image: "https://images.unsplash.com/photo-1643223990197-a708e6bdc6d7?auto=format&fit=crop&w=1600&q=90", alt: "Shopkeeper seated among shelves of brass and copper ware", credit: "Siddhartha Acharya / Unsplash" },
    ],
  },

  highlights: {
    eyebrow: "Supplying MEPZ",
    title: "How a supply to an SEZ unit is taxed",
    lead: "Goods and services sold to a unit or developer in MEPZ for its authorised operations are zero-rated, just like an export. The rules below decide whether you keep that benefit.",
    items: [
      { icon: "ArrowLeftRight", label: "Even inside Tamil Nadu", title: "Always an inter-state supply", line: "A sale from Tambaram to MEPZ is treated as inter-state. Charging CGST and SGST is wrong, and the unit may refuse the bill." },
      { icon: "FileCheck2", label: "Two ways to bill", title: "With an LUT or with IGST", line: "Supply under an LUT without IGST and claim back unused credit, or charge IGST and claim the tax paid back as a refund.", highlight: true },
      { icon: "ReceiptText", label: "On every invoice", title: "The SEZ endorsement line", line: "The invoice must state that it is a supply to an SEZ unit or developer for authorised operations, with or without payment of integrated tax." },
      { icon: "Stamp", label: "For your refund", title: "Zone officer's endorsement", line: "Goods must be admitted into the zone, and services received, for authorised operations, as endorsed by the specified officer. Without it, the refund stalls." },
    ],
  },

  documentsSection: {
    title: "Documents for GST work in Tambaram",
    lead: "Send scans on WhatsApp or email. For SEZ supplies, the zone paperwork matters as much as your own.",
  },
  documents: [
    { icon: "IdCard", title: "For registration", items: ["PAN of the business and owners", "Aadhaar of the proprietor, partners or directors", "Photographs", "Mobile number and email ID"], hint: "Aadhaar authentication is done on the owner's linked mobile number." },
    { icon: "Home", title: "For your Tambaram premises", items: ["Electricity bill or property tax receipt", "Rent agreement, if rented", "Owner's consent letter"], hint: "An SEZ unit registers its zone premises separately from any office outside the zone." },
    { icon: "Factory", title: "For SEZ supplies", items: ["Purchase order from the SEZ unit", "Unit's Letter of Approval or authorised operations list", "Copies of invoices and delivery papers", "Zone officer's endorsement for each supply"], hint: "We check the order is for the unit's authorised operations before you bill it as zero-rated." },
  ],
  documentsNote: {
    title: "Not sure the SEZ order qualifies?",
    sub: "Send us the purchase order and the unit's approval details. We'll check the goods or services fall within its authorised operations.",
    message: "Hi National Filings, can you check whether my order from a MEPZ unit in Tambaram is zero-rated?",
  },

  processSection: {
    title: "How we take on a Tambaram GST client",
    lead: "Registration, where needed, usually takes about a week from complete documents. For SEZ suppliers we set up the LUT and invoice format before the first dispatch.",
    cta: {
      title: "Tell us about your customers",
      sub: "Zone units, students, retail buyers or a mix? We'll send a checklist and a written quote for your set-up.",
      message: "Hi National Filings, I run a business in Tambaram. Can we discuss my GST set-up?",
    },
  },
  steps: [
    { title: "Customer and supply review", time: "Day 1", sub: "We sort your sales into SEZ, exempt education, taxable and retail, since each is treated differently." },
    { title: "Registration or amendment", time: "About a week", sub: "New GSTIN, or your existing one updated with the right business details and codes." },
    { title: "LUT for zone supplies", time: "Same week", sub: "Letter of Undertaking filed online, so SEZ supplies go out without IGST." },
    { title: "Invoice formats", time: "Before the first bill", sub: "SEZ endorsement, exempt-fee receipts and retail bills set up correctly." },
    { title: "Returns and refunds", time: "Monthly or quarterly", sub: "GSTR-1 and GSTR-3B filed, with refund claims for zone supplies when credit builds up." },
  ],
  processNote: "Timelines are estimates. Officer queries, site verification and zone endorsements can add time.",

  mistakesSection: {
    title: "GST mistakes we fix for Tambaram businesses",
    lead: "Most of these come from treating a zone customer like a local one, or treating every fee as exempt because it is education.",
  },
  mistakes: [
    { icon: "ArrowLeftRight", title: "CGST and SGST on a MEPZ invoice", problem: "A local supplier bills an SEZ unit with CGST and SGST because the zone is in the same city.", fix: "We reissue it correctly, as a zero-rated inter-state supply under an LUT or with IGST." },
    { icon: "Stamp", title: "No endorsement, no refund", problem: "Goods delivered into the zone, but the specified officer's endorsement was never collected.", fix: "We list the endorsement against every SEZ invoice and chase missing ones before filing the refund." },
    { icon: "GraduationCap", title: "Coaching fees treated as exempt", problem: "An entrance coaching centre assumes all education is GST-free and never registers.", fix: "Coaching is taxable at 18%. We register you once you near the limit and set up compliant receipts." },
    { icon: "ShoppingCart", title: "Composition dealer supplying the zone", problem: "A small trader on the composition scheme takes an order for goods from a MEPZ unit.", fix: "A supply to the zone is inter-state, which composition dealers cannot make in goods. We plan the switch to regular registration first." },
  ],

  costSection: {
    title: "What our GST fee in Tambaram depends on",
    lead: "There is no government fee for GST registration or an LUT. Our fee depends on your volume and the mix of customers, and you'll get it in writing first.",
    cta: {
      title: "Ask for a written quote",
      sub: "Tell us your turnover, your customer types and how many invoices you raise each month. We'll quote for that work.",
      message: "Hi National Filings, can I get a quote for GST services in Tambaram?",
    },
  },
  costs: [
    { icon: "Landmark", label: "No government fee", title: "Registration and LUT", line: "The GST portal charges nothing for either. Our fee covers preparation and follow-up.", highlight: true },
    { icon: "CalendarClock", label: "Quoted upfront", title: "Monthly or quarterly returns", line: "Depends on whether you file monthly or under the quarterly scheme." },
    { icon: "ReceiptText", label: "Depends on volume", title: "Invoices and reconciliation", line: "More SEZ, B2B and retail invoices mean more matching each month." },
    { icon: "Coins", label: "Quoted per claim", title: "SEZ refund claims", line: "Preparing the claim, matching endorsements and answering officer queries." },
  ],

  compliance: {
    eyebrow: "Inside the zone",
    title: "What SEZ units in MEPZ file under GST",
    lead: "Units inside MEPZ follow zone rules from the Development Commissioner's office and GST rules from the tax department. On the GST side, this is what they handle.",
    items: [
      { icon: "Building2", label: "Separate GSTIN", title: "Registration for the zone unit", line: "A unit in the SEZ is registered as a business vertical separate from any office or factory outside the zone." },
      { icon: "CalendarCheck", label: "Every return period", title: "GSTR-1 and GSTR-3B", line: "Returns filed for the SEZ GSTIN on their own. Credit is not shared with the company's other GSTINs." },
      { icon: "Globe", label: "Imports for authorised operations", title: "No IGST on imported services", line: "Services a unit imports for its authorised operations are exempt from IGST." },
      { icon: "ArrowLeftRight", label: "Sales into India", title: "Clearances to local buyers", line: "Goods sent from the zone to a buyer elsewhere in India are treated as imports. The buyer files a bill of entry and pays customs duty, including IGST." },
    ],
  },

  reasonsTitle: "Why Tambaram businesses choose National Filings",
  reasons: [
    { icon: "Factory", title: "SEZ supplies understood", line: "LUTs, endorsements and zero-rated refunds are regular work for us." },
    { icon: "GraduationCap", title: "Education rules applied", line: "We separate exempt fees from taxable coaching before a notice does." },
    { icon: "MessageCircle", title: "Handled over WhatsApp", line: "Invoices, statements and filed returns shared without office visits." },
    { icon: "MapPinned", title: "Office in Kundrathur", line: "Our only office is in Karaima Nagar, Kundrathur, for clients who want to meet." },
    { icon: "ReceiptText", title: "Written quotes", line: "Registration, returns and refunds priced before we start." },
    { icon: "Award", title: "Working since 2012", line: "GST work for SEZ suppliers, institutes and retailers across Chennai." },
  ],

  faqTitle: "GST in Tambaram: SEZ, education and retail questions",
  faqs: [
    { q: "I supply goods to a unit in MEPZ. Why can't I charge CGST and SGST?", a: "Because GST law treats every supply to an SEZ unit or developer as an inter-state supply, even when you are in Tambaram and the zone is down the road. If the goods are for the unit's authorised operations, the supply is zero-rated. You either bill under an LUT without tax, or charge IGST and claim it back as a refund." },
    { q: "Do I need GST registration to supply an SEZ unit if my turnover is small?", a: "For goods, usually yes. A supply to an SEZ counts as inter-state, and an inter-state supplier of goods has to register whatever the turnover. Service suppliers below ₹20 lakh are exempt from that rule, but most SEZ units still prefer vendors with a GSTIN." },
    { q: "What proof do I need for a refund on supplies to MEPZ?", a: "Your invoices with the SEZ endorsement line, and evidence that the specified officer of the zone has endorsed the goods as admitted, or the services as received, for authorised operations. With those in place, most low-risk refund claims are sanctioned 90% provisionally." },
    { q: "Does my coaching centre in Tambaram have to charge GST?", a: "Yes, once you are registered. Coaching, tuition and entrance preparation are not exempt education, and are taxed at 18%. You must register once turnover crosses ₹20 lakh in a year. Before that you can stay unregistered and charge no GST." },
    { q: "Which education services are exempt from GST?", a: "Fees charged by a school up to higher secondary, by an institution teaching a course that leads to a qualification recognised by law, and by approved vocational courses are exempt. Some services bought by schools, such as transport, catering, security and cleaning, are exempt too. Colleges get a narrower exemption, so their vendors usually charge GST." },
    { q: "I run a shop in Tambaram market. Composition or regular GST?", a: "Composition suits a shop selling mostly to walk-in customers, with turnover up to ₹1.5 crore. You pay a low flat rate and file less, but you cannot charge GST, claim input credit or supply goods outside Tamil Nadu, which includes supplies into MEPZ. If businesses buy from you, regular registration is usually better." },
    { q: "Do you have an office in Tambaram?", a: "No. Our only office is in Karaima Nagar, Kundrathur. Tambaram clients work with us over WhatsApp and email, and anyone who would like to meet can visit the Kundrathur office, Monday to Saturday, 9 am to 7 pm." },
  ],

  related: nearbyAreas("P2-A6"),
  relatedTitle: "GST consultants in areas near Tambaram",

  final: {
    title: "Sort your Tambaram GST, whoever your customers are",
    sub: "Zone units, students or shoppers, tell us who you sell to. We'll set up the right registration, invoices and returns.",
    message: "Hi National Filings, I'm in Tambaram and I'd like help with my GST.",
  },
  catalogue: ["GST for SEZ suppliers in Tambaram", "GST registration for coaching institutes in Tambaram", "GST return filing in Tambaram"],
};
