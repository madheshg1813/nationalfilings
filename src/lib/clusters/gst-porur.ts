import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { GST_SERVICE, nearbyAreas } from "./shared";

/**
 * P2-A7 · GST Consultant in Porur (/chennai/gst-consultant-in-porur).
 * Primary keyword: "gst consultant in porur". We have no office in Porur; clients work with us over WhatsApp and email,
 * and can visit our Kundrathur office.
 * Angle: healthcare and IT. Hospitals, clinics, diagnostic labs and pharmacies around the Sri Ramachandra campus, and IT
 * services firms on the Mount Poonamallee Road belt. The page is about where the exempt line falls for healthcare, what
 * happens to input tax credit in a clinic that also runs a pharmacy, whether a doctor needs a GSTIN at all, and IT exports.
 * Kept distinct from the Porur company page (P1-A7) and from the Chennai GST cluster pages.
 *
 * Facts checked (Nov 2026):
 * - Health care services by a clinical establishment, an authorised medical practitioner or paramedics are exempt (entry 74,
 *   Notification 12/2017-Central Tax (Rate)); "clinical establishment" covers hospitals, nursing homes, clinics and
 *   institutions offering diagnosis or treatment, so pathology and radiology labs fall within it. Cosmetic or plastic
 *   surgery is outside the exemption unless done to restore or reconstruct anatomy or function.
 *   https://taxguru.in/goods-and-service-tax/gst-health-care-services.html ,
 *   https://taxgarden.in/blog/gst-on-healthcare-medical-services-india-2026
 * - Non-ICU room charges above ₹5,000 per day are taxable at 5% without ITC (Notification 03/2022-CT(R), from 18 Jul 2022);
 *   ICU, CCU, ICCU and NICU rooms stay exempt. https://taxgarden.in/blog/gst-on-healthcare-medical-services-india-2026
 * - Medicines, consumables and implants used for in-patients form part of the exempt composite health care supply
 *   (Circular 32/06/2018-GST reasoning, applied in advance rulings incl. TN AAR); medicines sold to out-patients over a
 *   pharmacy counter are a taxable sale of goods. https://www.patronaccounting.com/case-laws/aar/m-s-rajarajeswari-hospitals-private-limited-advance-ruling-no-10-ara-2025-dated-29-01-2026
 * - From 22 Sep 2025 (GST 2.0, 56th Council) most medicines moved to 5%, with listed life-saving drugs at nil.
 *   https://busy.in/gst-rates/hospital/ , https://taxgarden.in/blog/gst-on-healthcare-medical-services-india-2026
 * - A person supplying only wholly exempt services is not liable to register (s.23(1)(a) CGST Act); aggregate turnover
 *   (s.2(6)) includes exempt supplies, so consultation fees count once there is any taxable income such as pharmacy sales
 *   or commercial rent. https://taxguru.in/goods-and-service-tax/gst-registration-requirement-medical-practitioners-rental-income-commercial-property.html
 * - The ₹40 lakh limit (Notification 10/2019-CT) is only for persons exclusively supplying goods; others in Tamil Nadu use
 *   ₹20 lakh. Same source as gst-registration.ts.
 * - Common input tax credit used for both exempt and taxable supplies is reversed proportionately (s.17(2), Rules 42 and
 *   43). https://taxgarden.in/blog/gst-on-healthcare-medical-services-india-2026
 * - Renting commercial property is taxable at 18%; residential use renting is exempt. (taxguru link above)
 * - IT services are taxable; export of services is zero-rated (s.16 IGST Act) and can be made under LUT without paying
 *   IGST. E-invoicing applies above the notified turnover limit (number left out: a cut was discussed at the 57th Council).
 *   LUT in Form RFD-11 under s.16 IGST Act and Rule 96A, valid for one financial year and renewed each year:
 *   https://irisgst.com/form-rfd-11-used-for-furnishing-letter-of-undertaking-lut/ ,
 *   https://tallysolutions.com/gst/lut-in-gst-meaning-eligibility-and-filing-process/
 *   Note: the 57th Council (8 Oct 2026) service recommendations, per this summary, did not touch healthcare or IT services.
 *   https://www.taxscan.in/gst/57th-gst-council-key-recommendations-relating-to-services
 * Local facts reused from porur.ts JSDoc (PIN 600116, Chennai district, Sri Ramachandra campus, Mount Poonamallee Road IT
 * parks, Porur Junction). Timelines are estimates.
 */

const whatsapp = "Hi National Filings, I run a clinic or business in Porur and need help with GST. Can we talk?";

export const gstPorurPage: LicencePageData = {
  id: "P2-A7",
  service: GST_SERVICE,
  meta: {
    title: "GST Consultant in Porur, Chennai | National Filings",
    description: "GST consultant in Porur for clinics, labs, pharmacies and IT firms. Exempt vs taxable billing, credit reversal, monthly returns and notices handled.",
  },
  hero: {
    headline: { line1: "GST Consultant", line2Before: "in Porur, ", accent: "Exempt or Taxable" },
    sub: "A consultation is exempt, the pharmacy counter is not, and an IT export needs an LUT. We sort out which side of the line each Porur bill falls on, then file your returns to match.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "Stethoscope",
    kicker: "Porur, Chennai 600116",
    title: "GSTR-3B Filed",
    line: "Your Porur Business",
    stamp: "Credit split checked",
    chips: ["Exempt fees kept apart", "Pharmacy sales taxed right", "LUT for IT exports"],
    steps: ["Review", "Split", "Register", "Reverse", "File"],
  },

  benefitsSection: {
    title: "Why Porur clinics and IT firms need a GST consultant",
    lead: "Healthcare is mostly exempt and IT is fully taxable. Porur has plenty of both, and many businesses sit across the two.",
    cta: {
      title: "Not sure if your clinic needs GST at all?",
      sub: "Tell us what you bill for: consultations, tests, rooms, medicines or rent. We'll tell you whether you need a GSTIN and why.",
      message: "Hi National Filings, I have a clinic in Porur. Do I need GST registration?",
    },
  },
  benefits: [
    { icon: "Stethoscope", title: "Exempt line drawn clearly", line: "Consultations, procedures and tests separated from what is taxable." },
    { icon: "ShoppingBag", title: "Pharmacy billed correctly", line: "Counter sales to walk-in patients taxed at the right medicine rate." },
    { icon: "Calculator", title: "Credit reversal worked out", line: "Common credit split between exempt and taxable supplies each month." },
    { icon: "UserCheck", title: "Registration only if needed", line: "Doctors with only exempt fees are told plainly that they can stay out." },
    { icon: "Laptop", title: "IT exports without IGST", line: "LUT filed each year so foreign billing goes out without tax." },
    { icon: "Hotel", title: "Room charges reviewed", line: "Non-ICU rooms above the daily limit picked up before a notice does." },
    { icon: "SearchCheck", title: "Supplier credit matched", line: "GSTR-2B checked so the credit you keep is credit you can defend." },
    { icon: "MessageCircle", title: "Handled on WhatsApp", line: "Send bills and statements from Porur. No trips needed." },
  ],

  applicantsSection: {
    title: "Porur businesses we handle GST for",
    lead: "Most of our Porur work comes from healthcare near the university campus and from IT services along Mount Poonamallee Road.",
  },
  applicants: [
    { icon: "Hotel", title: "Hospitals and nursing homes", line: "In-patient care exempt, with taxable rooms and canteens to watch." },
    { icon: "Stethoscope", title: "Clinics with a pharmacy", line: "Exempt fees and taxable medicine sales under one roof." },
    { icon: "SearchCheck", title: "Diagnostic labs and scan centres", line: "Exempt tests, with large credit on equipment that can't be claimed." },
    { icon: "ShoppingBag", title: "Retail pharmacies", line: "Medicine sales at revised rates, with stock and returns to reconcile." },
    { icon: "Package", title: "Medical equipment suppliers", line: "Selling devices and consumables to hospitals, often across states." },
    { icon: "Laptop", title: "Software and IT services firms", line: "Indian clients taxed, export clients billed under LUT." },
    { icon: "UserRound", title: "Freelance developers and consultants", line: "Individuals billing foreign or out-of-state clients." },
    { icon: "Building2", title: "Doctors who also rent out space", line: "Commercial rent that pulls exempt fees into the turnover count." },
  ],

  opportunities: {
    eyebrow: "Porur's GST mix",
    title: "Four Porur trades, four different GST positions",
    intro: "Within a few kilometres of Porur Junction you find businesses that are fully exempt, fully taxable and everything in between. Each needs its returns set up differently.",
    // Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "Hotel", title: "Hospitals and clinics", image: "https://images.unsplash.com/photo-1777269749032-d8d458ae594d?auto=format&fit=crop&w=1600&q=90", alt: "Empty hospital corridor with benches and doors to rooms", credit: "Tasha Kostyuk / Unsplash" },
      { icon: "SearchCheck", title: "Diagnostic labs", image: "https://images.unsplash.com/photo-1668243304131-87cb6634f85b?auto=format&fit=crop&w=1600&q=90", alt: "Lab technician in gloves, cap and mask handling a sample", credit: "Bhupathi Srinu / Unsplash" },
      { icon: "ShoppingBag", title: "Pharmacies", image: "https://images.unsplash.com/photo-1631980838946-755ba8443ab7?auto=format&fit=crop&w=1600&q=90", alt: "Blister packs of tablets and loose capsules on a table", credit: "Melany @ tuinfosalud.com / Unsplash" },
      { icon: "Laptop", title: "IT services", image: "https://images.unsplash.com/photo-1696834137451-f52f471a58bc?auto=format&fit=crop&w=1600&q=90", alt: "Developer in headphones working on code on a laptop", credit: "Hitesh Choudhary / Unsplash" },
    ],
  },

  highlights: {
    eyebrow: "Healthcare and GST",
    title: "What is exempt and what is taxable in a Porur clinic",
    lead: "The exemption follows the service, not the building. The same hospital can bill exempt and taxable items on one day.",
    items: [
      { icon: "Stethoscope", label: "Exempt", title: "Diagnosis, treatment and care", line: "Consultations, procedures and lab tests by a clinical establishment or doctor carry no GST.", highlight: true },
      { icon: "Hotel", label: "Exempt", title: "Medicines for in-patients", line: "Medicines, consumables and implants used during admission are part of the exempt treatment." },
      { icon: "ShoppingBag", label: "Taxable", title: "Pharmacy counter sales", line: "Medicines sold to out-patients and walk-in buyers are a sale of goods, mostly at 5% since September 2025." },
      { icon: "Percent", label: "Taxable", title: "Rooms and cosmetic work", line: "Non-ICU rooms above ₹5,000 a day attract 5%. Purely cosmetic procedures are outside the exemption." },
    ],
  },

  documentsSection: {
    title: "What we need from your Porur clinic or firm",
    lead: "Send these on WhatsApp or email. For a clinic, the split between fees, rooms and pharmacy sales matters more than anything else.",
  },
  documents: [
    { icon: "IdCard", title: "Owner and premises", items: ["PAN and Aadhaar of the doctor, partners or directors", "Electricity bill or property tax receipt for the premises", "Rent agreement and owner's consent, if rented"], hint: "If the clinic is at home in Porur, the same bill works, with the owner's consent if it is a family property." },
    { icon: "Stethoscope", title: "For a clinic or hospital", items: ["Clinical establishment registration", "Drug licence for the pharmacy, if any", "Monthly totals of fees, room charges and pharmacy sales"], hint: "We use these totals to decide whether you need a GSTIN and how much credit to reverse." },
    { icon: "Laptop", title: "For an IT firm", items: ["Sample client contracts, Indian and foreign", "Bank statements showing foreign remittances", "Previous LUT, if you filed one"], hint: "Foreign receipts should match your export invoices for the refund and LUT trail." },
  ],
  documentsNote: {
    title: "Run a clinic and a pharmacy together?",
    sub: "Send one month of fee and pharmacy totals. We'll show you how the turnover limit and the credit split work for your numbers.",
    message: "Hi National Filings, I have a clinic and pharmacy in Porur. Can you check my GST position?",
  },

  processSection: {
    title: "How we set up GST for a Porur business",
    lead: "Everything happens over WhatsApp and email. You can also meet us at our Kundrathur office if you prefer to talk it through.",
    cta: {
      title: "Start with a short review",
      sub: "Share what you bill and who you bill. We'll confirm the registration need and the return pattern before quoting.",
      message: "Hi National Filings, can you review GST for my Porur business?",
    },
  },
  steps: [
    { title: "Review what you bill", time: "Day 1", sub: "Fees, rooms, pharmacy, rent or software services listed and marked exempt or taxable." },
    { title: "Decide on registration", time: "Same day", sub: "Turnover counted the way the law counts it, including exempt income." },
    { title: "Apply or update GSTIN", time: "A few working days", sub: "New registration, or the right codes added to an existing one." },
    { title: "Set the credit split", time: "First month", sub: "A fixed working for common credit so every return reverses it the same way." },
    { title: "Monthly or quarterly filing", time: "Every period", sub: "Returns filed, with the exempt turnover shown separately." },
  ],
  processNote: "Timelines are estimates. Officer queries on a new registration can add time.",

  mistakesSection: {
    title: "GST mistakes we fix for Porur clinics and IT firms",
    lead: "These come up again and again in healthcare and IT. Each one tends to surface later as a notice.",
  },
  mistakes: [
    { icon: "ShieldAlert", title: "Treating the pharmacy as exempt", problem: "The clinic assumes everything it sells is healthcare, so counter sales go untaxed.", fix: "We separate in-patient use from counter sales and tax the counter sales." },
    { icon: "Calculator", title: "Full credit on shared costs", problem: "Credit on rent, software and equipment used for both sides is claimed in full.", fix: "We reverse the exempt share every month and true it up at year end." },
    { icon: "Users", title: "Leaving fees out of turnover", problem: "A doctor with rent or pharmacy income counts only the taxable part against the limit.", fix: "We add exempt fees, as the law requires, before deciding on registration." },
    { icon: "Globe", title: "Exporting without an LUT", problem: "An IT firm bills a foreign client without a current LUT, so IGST was due.", fix: "We file the LUT at the start of each financial year and check invoice wording." },
  ],

  costSection: {
    title: "What our GST fee for a Porur business depends on",
    lead: "There is no government fee for GST registration. Our fee depends on the work, and we agree it in writing before we start.",
    cta: {
      title: "Ask for a written quote",
      sub: "Tell us your business type, monthly bill count and whether you have a pharmacy or export clients.",
      message: "Hi National Filings, can I get a GST quote for my Porur clinic or firm?",
    },
  },
  costs: [
    { icon: "Landmark", label: "No government fee", title: "GST registration", line: "No government fee. Our fee covers the application, and any officer query about mixing clinic and pharmacy income.", highlight: true },
    { icon: "CalendarClock", label: "Monthly or quarterly", title: "Return filing", line: "Depends on filing frequency and the number of invoices each period." },
    { icon: "Calculator", label: "For mixed businesses", title: "Credit reversal working", line: "Extra work when exempt and taxable supplies share costs." },
    { icon: "Headset", label: "Quoted upfront", title: "Notices and LUT", line: "Notice replies, annual LUT and export refunds quoted separately." },
  ],

  compliance: {
    eyebrow: "Beyond GST",
    title: "Other filings Porur healthcare and IT businesses deal with",
    lead: "GST sits alongside other registrations. We handle the tax and finance side and point you to the right office for the rest.",
    items: [
      { icon: "Stethoscope", label: "Separate law", title: "Clinical establishment registration", line: "Needed under the Tamil Nadu clinical establishments law, apart from GST." },
      { icon: "ShieldCheck", label: "For pharmacies", title: "Drug licence", line: "Required to sell medicines, and checked by us against your GST details." },
      { icon: "Globe", label: "Each financial year", title: "LUT for exports", line: "Lets IT and service exporters bill foreign clients without paying IGST." },
      { icon: "Users", label: "When you hire", title: "PF and ESI", line: "Nursing, lab and IT staff bring PF and ESI duties once headcount crosses the limits." },
    ],
  },

  reasonsTitle: "Why Porur businesses choose National Filings for GST",
  reasons: [
    { icon: "Stethoscope", title: "We know healthcare GST", line: "Exempt and taxable lines in clinics, labs and pharmacies." },
    { icon: "Laptop", title: "Comfortable with IT billing", line: "Domestic, inter-state and export invoices set up correctly." },
    { icon: "Award", title: "Experience since 2012", line: "Registration, tax and compliance work for Chennai businesses." },
    { icon: "ReceiptText", title: "Fees in writing", line: "Agreed upfront for each clinic, lab or pharmacy, before any filing." },
    { icon: "MessageCircle", title: "WhatsApp and email", line: "No need to leave the clinic or office. Meetings in Kundrathur if you like." },
    { icon: "CalendarCheck", title: "Due dates tracked", line: "Return, LUT and annual filing reminders sent ahead of time." },
  ],

  faqTitle: "GST in Porur: questions from clinics, labs and IT firms",
  faqs: [
    { q: "I am a doctor in Porur and only charge consultation fees. Do I need GST registration?", a: "No. Health care services by an authorised medical practitioner are exempt, and a person who supplies only exempt services does not have to register. That changes if you add taxable income, such as pharmacy sales or rent from a commercial property." },
    { q: "My clinic has a small pharmacy. How is the turnover limit worked out?", a: "Aggregate turnover includes exempt supplies, so your consultation fees are added to the pharmacy sales. Since you supply services as well as goods, the ₹20 lakh limit is the one that generally applies, not the ₹40 lakh limit for businesses that sell only goods." },
    { q: "Are medicines given to admitted patients taxable?", a: "Medicines, consumables and implants used for in-patients during treatment are treated as part of the exempt health care service. Medicines sold to out-patients or walk-in buyers at the pharmacy counter are a taxable sale." },
    { q: "What GST rate applies to medicines now?", a: "Since 22 September 2025, most medicines are taxed at 5%, and a list of life-saving drugs is nil-rated. The exact rate depends on the product's HSN code, which we check against your purchase bills." },
    { q: "Why do I have to reverse input tax credit?", a: "Credit is only allowed for taxable supplies. Where rent, software or equipment serves both your exempt healthcare work and your taxable pharmacy or rooms, the share linked to exempt supplies has to be reversed. We work it out monthly and adjust it at year end." },
    { q: "Is a diagnostic lab in Porur exempt from GST?", a: "Yes, pathology, radiology and other diagnostic tests by a clinical establishment are exempt health care services. The catch is that the lab cannot claim credit on equipment and reagents, so GST on purchases becomes a cost." },
    { q: "I run an IT firm near Porur with foreign clients. Do I charge GST?", a: "Exports of services are zero-rated. If you file a Letter of Undertaking (LUT) for the financial year, you can bill foreign clients without paying IGST, provided the export conditions, including receipt of payment in foreign exchange, are met. Indian clients are billed with GST as usual." },
  ],

  related: nearbyAreas("P2-A7"),
  relatedTitle: "GST consultants in areas near Porur",

  final: {
    title: "Get your Porur clinic or firm's GST sorted",
    sub: "Message us with what you bill. We'll tell you whether you need a GSTIN, how returns will work and what it will cost.",
    message: "Hi National Filings, I'm in Porur and I'd like help with GST for my clinic or business.",
  },
  catalogue: ["GST registration for clinics and pharmacies in Porur", "GST return filing in Porur", "LUT and export GST for IT firms in Porur"],
};
