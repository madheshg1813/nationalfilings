import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { GST_SERVICE, nearbyAreas } from "./shared";

/**
 * P2-A12 · GST Consultant in Sriperumbudur (/chennai/gst-consultant-in-sriperumbudur).
 * Primary keyword: "gst consultant in sriperumbudur". We have no office here; clients work with us over WhatsApp and email,
 * or visit our Kundrathur office.
 * Angle: vendors to the large auto and electronics plants in the SIPCOT parks: manpower suppliers, canteen contractors,
 * staff bus operators and contract manufacturers. Highlights cover the GST treatment of each of those four services.
 * No company is named. General GST registration, return and notice wording lives on the P2-C* cluster pages.
 *
 * Local facts (reused from the verified P1-A12 JSDoc): Sriperumbudur municipality, headquarters of Sriperumbudur taluk,
 * Kancheepuram district; PIN 602105; on the Chennai to Bengaluru highway; SIPCOT industrial parks at Sriperumbudur and
 * Irungattukottai with auto, auto ancillary, engineering and electronics units.
 *
 * Facts checked (Nov 2026):
 * - E-invoicing: mandatory for B2B invoices once aggregate turnover has exceeded ₹5 crore in any year from 2017-18
 *   (Notification 10/2023-CT, from 1 Aug 2023); the IRP returns an IRN and QR code; an invoice without an IRN is not a valid
 *   invoice (Rule 48(5)). From 1 Apr 2025 (GSTN advisory of 5 Nov 2024), taxpayers with turnover of ₹10 crore or more must
 *   report invoices and credit or debit notes to the IRP within 30 days of the document date, or the IRP rejects them. No
 *   lower threshold had been notified as of Nov 2026. (tallysolutions.com/business-guides/what-changed-in-e-invoicing-compliance-in-2026,
 *   tallysolutions.com/accounting/30-day-e-invoice-reporting-limit-impact-on-itc-buyers-and-sellers, gimbooks.com)
 * - Buyer's ITC: section 16(2)(aa) allows credit only on invoices that appear in the buyer's GSTR-2B; buyers act on invoices in
 *   the Invoice Management System; a buyer that doesn't pay the supplier within 180 days must reverse the credit (second
 *   proviso to section 16(2)). (taxguru.in; tallysolutions.com IMS guide)
 * - Manpower supply: 18% on forward charge, on the full invoice value; security services by a supplier other than a body
 *   corporate to a registered person are under reverse charge (Notification 29/2018-CT(R)). (cleartax.in/s/gst-on-security-services,
 *   taxclue.in/gst-on-labour-contractor, taxscan.in GST rates on services 2026)
 * - Canteen services by a contractor: 5% with ITC barred except as noted below (restaurant or outdoor catering outside specified premises, Notification
 *   20/2019-CT(R)); GST 2.0 did not change restaurant or catering rates; older advance rulings differed (Telangana AAR 5%,
 *   Gujarat AAR 18% in 2018). The factory's ITC on canteen services is blocked by section 17(5)(b) unless the law obliges the
 *   employer to provide it (proviso; Circular 172/04/2022-GST). (hnallp.com GST 2.0 hospitality FAQs Q6, Q18; taxguru.in;
 *   taxscan.in; hnallp.com note on contracted canteen caterers from 1 Oct 2019). Notification 06/2026-CT(R) (27 Oct 2026, from
 *   1 Nov 2026; gazette text at caalley.com/gst26/cgst-rate-notification-06.pdf) keeps these rates but allows same-line credit:
 *   catering bought from another caterer (capped at tax at 2.5% CGST) and restaurant service bought from another restaurant.
 *   All other credit, such as provisions and gas, stays barred.
 * - Renting of motor vehicles for passengers with fuel included: 5% with ITC limited to same-line services, or 18% with full
 *   ITC (12% before 22 Sep 2025, Notification 15/2025-CT(R)). Reverse charge entry 15 of Notification 13/2017-CT(R): a
 *   supplier other than a body corporate renting to a body corporate; from 1 Nov 2026 (Notification 08/2026-CT(R), 27 Oct 2026)
 *   the recipient pays under reverse charge unless the supplier charges 18% (9% CGST) on its invoice. (taxguru.in/?p=984763,
 *   hnallp.com Q25, a2ztaxcorp.net/?p=41050, taxo.online/?p=552496)
 * - Job work: engineering job work moved from 12% to 18% from 22 Sep 2025; concessional rates remain for listed goods
 *   (Maharashtra AAR reported on taxguru.in; taxguru.in/goods-and-service-tax/gst-rate-transport-courier-job-work-services-22-sept.html).
 * - Registration: no government fee; thresholds and return due dates as on the P2-C1 / P2-C2 JSDoc. Timelines are estimates.
 */

const whatsapp = "Hi National Filings, I supply a plant near Sriperumbudur and need help with GST and e-invoicing.";

export const gstSriperumbudurPage: LicencePageData = {
  id: "P2-A12",
  service: GST_SERVICE,
  meta: {
    title: "GST Consultant in Sriperumbudur | National Filings",
    description: "GST consultant in Sriperumbudur for plant vendors: e-invoicing, GSTR-2B checks and rates for manpower, canteen, staff bus and contract manufacturing.",
  },
  hero: {
    headline: { line1: "GST Consultant", line2Before: "in Sriperumbudur, ", accent: "Invoice to Payment" },
    sub: "Plants in the SIPCOT parks release a vendor's bill only when its GST is clean: a valid IRN, the right rate and the invoice showing in their GSTR-2B. We handle that for manpower, canteen, transport and contract manufacturing firms.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "Factory",
    kicker: "Sriperumbudur, Kancheepuram",
    title: "E-Invoice Registered",
    line: "Your Sriperumbudur Business",
    stamp: "IRN generated",
    chips: ["Reported within 30 days", "Shows in buyer's GSTR-2B", "Rate checked for the service"],
    steps: ["Invoice", "IRN", "GSTR-1", "Buyer 2B", "Payment"],
  },

  benefitsSection: {
    title: "GST support for firms that bill the big plants",
    lead: "A plant's accounts team checks every vendor invoice against the GST portal before paying. Our work is making sure yours pass that check the first time.",
    cta: {
      title: "Has a plant put your payment on hold?",
      sub: "Send us the email from their accounts team and your last GSTR-1. We'll find out why the invoice isn't reaching them.",
      message: "Hi National Filings, a plant near Sriperumbudur is holding my payment over a GST issue. Can you check what's wrong?",
    },
  },
  benefits: [
    { icon: "FileCheck2", title: "E-invoices with a valid IRN", line: "Set up once your turnover crosses the limit, before the plant rejects a bill." },
    { icon: "Clock", title: "Reported inside 30 days", line: "Larger vendors can't report an invoice to the IRP after 30 days. We watch the dates." },
    { icon: "SearchCheck", title: "Visible in the buyer's GSTR-2B", line: "Each invoice filed under the plant's exact GSTIN, on time." },
    { icon: "Users", title: "Manpower bills done right", line: "GST on the full invoice value, wages included, at the right rate." },
    { icon: "Soup", title: "Canteen contracts", line: "Billed at the canteen rate, with no credit claimed that the rate doesn't allow." },
    { icon: "Truck", title: "Staff bus hire", line: "The 5% or 18% choice made deliberately, with reverse charge explained to the plant." },
    { icon: "Factory", title: "Contract manufacturing", line: "Job work and outright sales billed under the right rate and paperwork." },
    { icon: "MessageCircle", title: "Handled remotely", line: "Monthly work over WhatsApp and email, with no trips into Chennai." },
  ],

  applicantsSection: {
    title: "Sriperumbudur vendors we handle GST for",
    lead: "Most of our clients here don't sell to the public at all. They bill one or two large plants, and those plants decide how quickly they get paid.",
  },
  applicants: [
    { icon: "Users", title: "Manpower contractors", line: "Firms placing operators, helpers and trainees on plant lines." },
    { icon: "ShieldCheck", title: "Security and housekeeping agencies", line: "Guards, cleaning crews and campus upkeep teams." },
    { icon: "Soup", title: "Canteen contractors", line: "Kitchens running shift meals inside factory premises." },
    { icon: "Truck", title: "Staff bus operators", line: "Owners hiring out buses with drivers for employee routes." },
    { icon: "Factory", title: "Contract manufacturers", line: "Units machining, moulding or assembling parts on job orders." },
    { icon: "Zap", title: "Electronics sub-assembly units", line: "Small firms soldering, testing or kitting for electronics plants." },
    { icon: "Package", title: "Packaging and consumables suppliers", line: "Cartons, pallets, gloves and shop-floor supplies." },
    { icon: "HardHat", title: "Maintenance contractors", line: "Electrical, civil and machine upkeep crews on annual contracts." },
  ],

  opportunities: {
    eyebrow: "Plant supply chain",
    title: "The services Sriperumbudur's plants buy every day",
    intro: "Around the SIPCOT parks at Sriperumbudur and Irungattukottai, auto and electronics plants rely on local firms for people, meals, transport and parts. Each of those is taxed differently under GST.",
    // Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "Factory", title: "Contract manufacturing", image: "https://images.unsplash.com/photo-1700727448686-b314cb5f9948?auto=format&fit=crop&w=1600&q=90", alt: "Workers in gloves assembling products along a factory conveyor line", credit: "TruckRun / Unsplash" },
      { icon: "Zap", title: "Electronics sub-assembly", image: "https://images.unsplash.com/photo-1733749130045-c8777fd49509?auto=format&fit=crop&w=1600&q=90", alt: "Hands soldering components onto a black circuit board", credit: "Minh Đức / Unsplash" },
      { icon: "Soup", title: "Factory canteens", image: "https://images.unsplash.com/photo-1690951784638-1f9039d74a6c?auto=format&fit=crop&w=1600&q=90", alt: "Steel compartment tray with rice, curries, naan and salad", credit: "Markus Winkler / Unsplash" },
      { icon: "Truck", title: "Staff transport", image: "https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&w=1600&q=90", alt: "Front of a cream-coloured coach parked beside the kerb", credit: "Hobi industri / Unsplash" },
    ],
  },

  highlights: {
    eyebrow: "GST by type of contract",
    title: "How the four common plant contracts are taxed",
    lead: "Rates and options differ sharply between these services, and plants check them. This is the position as it stands in November 2026.",
    items: [
      { icon: "Users", label: "Manpower supply", title: "18% on the whole bill", line: "GST applies to wages, PF, ESI and your service charge together. Security guards supplied by a firm that isn't a company go under reverse charge." },
      { icon: "Soup", label: "Canteen inside the factory", title: "5%, credit barred on provisions", line: "A contractor running the canteen charges 5% and can't claim credit on provisions or gas. Since 1 November 2026, catering bought from another caterer gives limited credit. The plant gets credit only where the law requires it to run a canteen." },
      { icon: "Truck", label: "Staff bus with driver and fuel", title: "5% or 18%, your choice", line: "At 5%, credit is limited to hire from other operators. At 18%, full credit. From 1 November 2026, unless a non-company operator charges 18%, the company hiring the bus pays 5% under reverse charge.", highlight: true },
      { icon: "Factory", label: "Job work on the plant's material", title: "Mostly 18% since September 2025", line: "Engineering job work moved from 12% to 18% on 22 September 2025. Some listed goods keep lower rates, so we check your entry." },
    ],
  },

  documentsSection: {
    title: "What we need for GST work in Sriperumbudur",
    lead: "Send these over WhatsApp or email. The plant's purchase order and any complaint from its accounts team help us more than anything else.",
  },
  documents: [
    { icon: "IdCard", title: "For a new GST registration", items: ["PAN and Aadhaar of the owner, partners or directors", "Photograph of each", "Electricity bill of the unit or office", "Lease or SIPCOT allotment papers, and owner's consent", "Cancelled cheque of the business account"], hint: "Plants check that your legal name matches on GST, PAN and bank. We register it exactly as it appears on PAN." },
    { icon: "FileText", title: "For the plant contract", items: ["Purchase order or work order", "Rate contract or agreement", "The plant's GSTIN for each location you bill", "Vendor portal or invoice format instructions"], hint: "Many plants have more than one GSTIN. The invoice must carry the one for the unit receiving the service." },
    { icon: "ReceiptText", title: "For monthly returns and e-invoices", items: ["Sales invoices with IRN details", "Credit and debit notes", "Purchase bills and expense invoices", "Payment advice or holds from buyers"], hint: "Tell us which invoices a plant has questioned. We trace each one through GSTR-1 and the IRP first." },
  ],
  documentsNote: {
    title: "Plant asking for a GST compliance certificate?",
    sub: "Send the format their vendor team gave you. We'll check your filing history and tell you what can be confirmed.",
    message: "Hi National Filings, a plant near Sriperumbudur wants proof of my GST filing. Can you help me prepare it?",
  },

  processSection: {
    title: "How we keep a plant vendor's GST clean",
    lead: "We work with Sriperumbudur clients over WhatsApp and email. The routine runs around one thing: getting your invoices into the buyer's GSTR-2B so the plant pays on time.",
    cta: {
      title: "Start with one problem invoice",
      sub: "Send us an invoice a plant has queried. We'll trace it and then suggest a monthly routine.",
      message: "Hi National Filings, I'm a vendor to a plant in Sriperumbudur. Can you look at an invoice they've queried?",
    },
  },
  steps: [
    { title: "Review contracts and rates", time: "First week", sub: "We read your purchase orders and confirm the GST rate and charge type for each service." },
    { title: "Set up e-invoicing", time: "If you're above the limit", sub: "IRN generation from your billing software or the portal, with the 30-day limit tracked." },
    { title: "Check each invoice", time: "Before it goes out", sub: "Plant GSTIN, place of supply, rate and IRN checked against the purchase order." },
    { title: "File returns", time: "Before the due date", sub: "GSTR-1 and GSTR-3B filed after you approve the figures." },
    { title: "Confirm with the buyer", time: "After filing", sub: "We confirm your invoices reached the plant's GSTR-2B and help answer its queries." },
  ],
  processNote: "Timelines are estimates. Portal downtime, late billing data or a buyer's own processing can delay payments regardless of filing.",

  mistakesSection: {
    title: "GST problems that hold up payments for Sriperumbudur vendors",
    lead: "When a plant stops paying, the cause is nearly always on the invoice or in the return. These are the ones we see most often.",
  },
  mistakes: [
    { icon: "FileWarning", title: "Invoice issued without an IRN", problem: "A vendor's turnover crossed ₹5 crore, but invoices still go out without e-invoicing, so the plant can't treat them as valid.", fix: "We set up e-invoicing, check which past invoices need correcting and agree a fix with the buyer." },
    { icon: "Clock", title: "IRN missed the 30-day window", problem: "A larger vendor raises an invoice late in the month and tries to report it to the IRP more than 30 days after its date.", fix: "We track invoice dates and report them promptly. Where the window is missed, we work out the correct way to bill again." },
    { icon: "Shuffle", title: "Wrong GSTIN for the plant", problem: "The invoice carries the plant's head office GSTIN instead of the unit at Sriperumbudur, so it lands in the wrong GSTR-2B.", fix: "We keep a list of each buyer GSTIN by location and check every invoice against the purchase order." },
    { icon: "Truck", title: "Bus hire billed at the wrong rate", problem: "A proprietor operator adds 5% to the bill while the company also pays reverse charge, or each assumes the other is paying.", fix: "We settle 5% or 18% with you and the plant in writing, and bill accordingly from the start." },
  ],

  costSection: {
    title: "What our GST fee for a Sriperumbudur vendor depends on",
    lead: "There is no government fee for GST registration. Our fee depends on your invoice volume, e-invoicing and how much buyer reconciliation is needed. We agree it before starting.",
    cta: {
      title: "Get a quote for your vendor GST work",
      sub: "Tell us how many plants you bill, roughly how many invoices a month and whether you're on e-invoicing.",
      message: "Hi National Filings, can I get a quote for GST filing and e-invoicing for my business in Sriperumbudur?",
    },
  },
  costs: [
    { icon: "IdCard", label: "No government fee", title: "New GST registration", line: "Our fee covers the application, the Aadhaar check and the details your buyer's vendor form asks for." },
    { icon: "CalendarClock", label: "Quoted upfront", title: "Monthly returns", line: "Depends on the number of invoices, purchase bills and GSTINs you bill to.", highlight: true },
    { icon: "FileCheck2", label: "Quoted upfront", title: "E-invoicing set-up and checks", line: "Depends on whether IRNs come from your software or are raised on the portal." },
    { icon: "SearchCheck", label: "Quoted per case", title: "Buyer reconciliation and notices", line: "Depends on the periods and number of invoices a plant or officer has questioned." },
  ],

  compliance: {
    eyebrow: "Through the year",
    title: "GST checks a plant vendor can't skip",
    lead: "Beyond the regular returns, these are the points that keep your bills moving through a plant's accounts team.",
    items: [
      { icon: "FileCheck2", label: "Every invoice", title: "IRN before the bill goes out", line: "For vendors above ₹5 crore turnover, every B2B invoice needs an IRN from the IRP." },
      { icon: "Clock", label: "Within 30 days", title: "IRP reporting window", line: "Vendors at ₹10 crore or more can't report an invoice or credit note after 30 days from its date." },
      { icon: "SearchCheck", label: "Every month", title: "Buyer GSTR-2B check", line: "Your sales should appear in each plant's GSTR-2B. We confirm and fix gaps quickly." },
      { icon: "TrendingUp", label: "Every year", title: "Turnover review", line: "Crossing ₹5 crore once brings e-invoicing permanently. We check after each year closes." },
    ],
  },

  reasonsTitle: "Why Sriperumbudur vendors trust us with their GST",
  reasons: [
    { icon: "Factory", title: "We know plant billing", line: "Purchase orders, vendor portals and payment holds are routine for us." },
    { icon: "FileCheck2", title: "E-invoicing handled", line: "IRNs, the 30-day limit and corrections managed every month." },
    { icon: "MessageCircle", title: "No travel needed", line: "Everything runs on WhatsApp and email from your site office." },
    { icon: "MapPinned", title: "Office in Kundrathur", line: "Our only office, in Karaima Nagar, if you'd like to meet." },
    { icon: "Award", title: "Experience since 2012", line: "GST and compliance work for Chennai businesses since GST began." },
    { icon: "ReceiptText", title: "Fees in writing", line: "You know the monthly fee before the first return is filed." },
  ],

  faqTitle: "GST in Sriperumbudur: what plant vendors ask",
  faqs: [
    { q: "Is your office in Sriperumbudur?", a: "No. Our only office is in Karaima Nagar, Kundrathur, open Monday to Saturday, 9 am to 7 pm. Sriperumbudur clients usually work with us entirely over WhatsApp and email, and can visit Kundrathur whenever they want to meet." },
    { q: "When do I have to start e-invoicing?", a: "Once your aggregate turnover has gone above ₹5 crore in any financial year since 2017-18. From then on, every invoice to a registered buyer needs an IRN from the Invoice Registration Portal. An invoice without one isn't valid, and plants will reject it." },
    { q: "Is there a time limit for generating an IRN?", a: "Yes, for larger businesses. Since 1 April 2025, taxpayers with turnover of ₹10 crore or more must report invoices and credit or debit notes to the IRP within 30 days of their date. After that the portal won't accept them, so invoices need reporting promptly." },
    { q: "Why does a plant hold my payment over GSTR-2B?", a: "The plant can claim input credit only on invoices that appear in its GSTR-2B, and that depends on your GSTR-1. If your invoice is missing, late or under the wrong GSTIN, the plant loses its credit, so it holds your payment until the invoice shows up." },
    { q: "What GST do I charge on manpower supply?", a: "18% on the full invoice value, including wages, PF and ESI, not only your service charge. Security services are different: if the supplier isn't a company, the registered buyer pays GST under reverse charge." },
    { q: "What rate applies to a canteen I run inside a factory?", a: "A canteen contractor generally charges 5% and can't claim credit on provisions, gas or equipment. From 1 November 2026 the one exception is catering bought from another caterer, with credit capped at the 5% level. Older advance rulings disagreed, so we read your contract before confirming. The factory can claim credit only where the law requires it to provide the canteen." },
    { q: "Should I bill staff bus hire at 5% or 18%?", a: "Both are allowed for hire of buses with driver and fuel. At 5% your credit is limited to hiring from other operators, and at 18% you get full credit. From 1 November 2026, if you are not a company and your customer is one, the customer pays 5% under reverse charge unless you charge 18% on your invoice, in which case you pay it. We'll help you agree the option with the plant." },
  ],

  related: nearbyAreas("P2-A12"),
  relatedTitle: "GST consultants in areas near Sriperumbudur",

  final: {
    title: "Get paid faster by the plants you supply",
    sub: "Message us with the plant's query or your last return. We'll find what's blocking the invoice and fix it.",
    message: "Hi National Filings, I supply a plant in Sriperumbudur and want someone to handle my GST. Can we talk?",
  },
  catalogue: ["GST return filing in Sriperumbudur", "E-invoicing support in Sriperumbudur", "GST registration in Sriperumbudur"],
};
