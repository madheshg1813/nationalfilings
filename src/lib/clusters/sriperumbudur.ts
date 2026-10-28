import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { SERVICE, clusterHref, licenceHref, localityHref, pillarHref } from "./shared";

/**
 * P1-A12 · Company Registration in Sriperumbudur (/chennai/company-registration-in-sriperumbudur).
 * Primary keyword: "company registration in sriperumbudur". We have no office here; clients work with us online
 * or visit our Kundrathur office.
 * Angle: the industrial corridor. Businesses that serve the SIPCOT parks at Sriperumbudur and Irungattukottai:
 * vendors to large plants, contract manufacturers, manpower and housekeeping contractors, canteen contractors and
 * staff bus operators. Highlights cover what a large plant usually asks from a new vendor. No company is named.
 *
 * Local facts checked (Oct 2026): Sriperumbudur is a municipality (upgraded from a town panchayat; sources differ on
 * the date, so none is given) and the headquarters of Sriperumbudur taluk, Kancheepuram district (Wikipedia, DT Next,
 * TN Gazette G.O.Ms. No. 78 of 13 March 2026); PIN 602105; the town is on the Chennai to Bengaluru highway (Wikipedia);
 * SIPCOT runs industrial parks at Sriperumbudur and at Irungattukottai, a village in Sriperumbudur taluk, with auto,
 * auto ancillary, engineering and electronics units (Wikipedia, India Briefing). Labour law: the four Labour Codes took
 * effect on 21 November 2025; the OSH Code absorbed the Contract Labour Act and applies its contract labour licensing
 * from 50 contract workers (earlier 20); Central OSH Rules notified 8 May 2026; Tamil Nadu's state rules were still
 * settling, so the page avoids stating state procedure (EY, KPMG, Lakshmikumaran & Sridharan summaries).
 * Company law facts as on the P1 cluster pages. Timelines are estimates.
 */

const whatsapp = "Hi National Filings, I want to register a business in Sriperumbudur to supply a large plant.";

export const sriperumbudurPage: LicencePageData = {
  id: "P1-A12",
  service: SERVICE,
  meta: {
    title: "Company Registration in Sriperumbudur | National Filings",
    description: "Company registration in Sriperumbudur for plant vendors, manpower, canteen and transport contractors. Pvt Ltd or LLP, with GST, Udyam, PF and ESI.",
  },
  hero: {
    headline: { line1: "Company Registration", line2Before: "in Sriperumbudur, ", accent: "Vendor Code Ready" },
    sub: "Want a supplier code at a plant in the SIPCOT parks? We register your company or LLP and set up GST, Udyam, PF and ESI, so your onboarding file is complete the first time.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "Factory",
    kicker: "Sriperumbudur, Kancheepuram",
    title: "Certificate of Incorporation",
    line: "Your Sriperumbudur Business",
    stamp: "CIN issued",
    chips: ["Pvt Ltd or LLP", "PF and ESI codes", "Udyam for MSMEs"],
    steps: ["Scope", "DSC", "Name", "SPICe+", "CIN"],
  },

  benefitsSection: {
    title: "Why plant contractors in Sriperumbudur register an entity",
    lead: "Purchase and HR teams at large plants deal with a registered business, not a person. Getting the entity right is the first step to a purchase order.",
    cta: {
      title: "Got a purchase enquiry from a plant?",
      sub: "Send us the onboarding checklist they gave you. We'll tell you which registrations you already have and which are missing.",
      message: "Hi National Filings, a plant in Sriperumbudur has asked for my onboarding documents. Can you check what I'm missing?",
    },
  },
  benefits: [
    { icon: "ClipboardCheck", title: "Onboarding without gaps", line: "Certificate, PAN, GST and Udyam ready before the plant's buyer asks." },
    { icon: "ShieldCheck", title: "Liability kept in the business", line: "Penalties or claims under a supply contract stay with the entity." },
    { icon: "Users", title: "Large workforces handled properly", line: "PF, ESI and wage records run from one employer code." },
    { icon: "Banknote", title: "Working capital on its own books", line: "Banks lend against the entity's invoices and audited accounts." },
    { icon: "BadgeCheck", title: "MSME payment protection", line: "Udyam registration gives you rights if buyers delay payment." },
    { icon: "FileSignature", title: "Contracts signed in one name", line: "Rate contracts and work orders bind the company, not a family member." },
    { icon: "TrendingUp", title: "Add plants and lines later", line: "New customers or a second unit join the same entity." },
    { icon: "Handshake", title: "Room for a partner", line: "Bring in an investor or technical partner with clear shares." },
  ],

  applicantsSection: {
    title: "Sriperumbudur businesses we register",
    lead: "Every large plant in the corridor depends on dozens of smaller firms. These are the ones that ask us for help.",
  },
  applicants: [
    { icon: "Package", title: "Parts and packaging vendors", line: "Firms supplying components, consumables, cartons and pallets to plants." },
    { icon: "Factory", title: "Contract manufacturers", line: "Units doing machining, moulding, assembly or sub-assembly on job orders." },
    { icon: "Users", title: "Manpower suppliers", line: "Contractors placing operators, helpers and trainees on plant floors." },
    { icon: "HardHat", title: "Housekeeping and facility firms", line: "Cleaning, gardening, security and upkeep crews for factory campuses." },
    { icon: "Soup", title: "Canteen contractors", line: "Kitchens feeding shifts inside plants, with FSSAI and staff to manage." },
    { icon: "Truck", title: "Staff bus operators", line: "Fleet owners running employee pick-up and drop routes to the parks." },
    { icon: "Zap", title: "Electrical and maintenance contractors", line: "Firms handling plant wiring, utilities and machine upkeep." },
    { icon: "Laptop", title: "Engineering service firms", line: "Small teams doing design, tooling, testing or IT work for plants." },
  ],

  opportunities: {
    eyebrow: "The industrial corridor",
    title: "Work that flows from the SIPCOT parks",
    intro: "Sriperumbudur sits on the Chennai to Bengaluru highway, with SIPCOT industrial parks at Sriperumbudur and nearby Irungattukottai. Auto and electronics plants there buy parts, people, meals and transport from local firms every day.",
    // Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "Factory", title: "Assembly and contract work", image: "https://images.unsplash.com/photo-1589793463357-5fb813435467?auto=format&fit=crop&w=1600&q=90", alt: "Workers in blue uniforms at an assembly line in a large factory", credit: "Remy Gieling / Unsplash" },
      { icon: "Zap", title: "Electronics supply chain", image: "https://images.unsplash.com/photo-1727119313143-779799ad0aed?auto=format&fit=crop&w=1600&q=90", alt: "Close-up of capacitors on a circuit board", credit: "Laurens van der Drift / Unsplash" },
      { icon: "Soup", title: "Canteen contracts", image: "https://images.unsplash.com/photo-1589778655375-3e622a9fc91c?auto=format&fit=crop&w=1600&q=90", alt: "Steel plate meal with rice, rotis and several curries", credit: "Barun Ghosh / Unsplash" },
      { icon: "Truck", title: "Staff transport", image: "https://images.unsplash.com/photo-1671822689127-d233af35d107?auto=format&fit=crop&w=1600&q=90", alt: "Red bus on a narrow road through open green country", credit: "Omkar Jadhav / Unsplash" },
    ],
  },

  highlights: {
    eyebrow: "Getting a vendor code",
    title: "What a large plant usually asks from a new vendor",
    lead: "Every plant has its own onboarding format, but the core papers rarely change. This is what we prepare for Sriperumbudur clients.",
    items: [
      { icon: "FileCheck2", label: "Identity of the business", title: "PAN, GST and incorporation certificate", line: "With a cancelled cheque from the current account. All four must show exactly the same legal name." },
      { icon: "Factory", label: "Free to register", title: "Udyam certificate", line: "Marks you as a micro, small or medium enterprise. Buyers check it to classify you and track payment terms." },
      { icon: "Users", label: "If you employ people", title: "PF and ESI codes", line: "Plants ask for both codes, and manpower suppliers are often asked for monthly challans too.", highlight: true },
      { icon: "ScrollText", label: "When you supply workers", title: "Contract labour licence", line: "Under the OSH Code, in force since November 2025, the licence generally applies from 50 contract workers. State rules are still settling, so we check the current procedure." },
    ],
  },

  documentsSection: {
    title: "Documents for company registration in Sriperumbudur",
    lead: "Share them on WhatsApp or email. Contractors should add the plant's own checklist, so we can plan the registrations that follow.",
  },
  documents: [
    { icon: "UserRound", title: "From every director or partner", items: ["PAN card", "Aadhaar card", "Bank statement or phone bill, under two months old", "Passport-size photograph", "Mobile and email for OTPs"], hint: "A director's name must match exactly across PAN, Aadhaar and the bank record." },
    { icon: "Building2", title: "For the registered office or unit", items: ["Electricity bill of the premises", "Lease deed, for a rented unit or shed", "Owner's no objection letter"], hint: "A unit inside a SIPCOT park may hold an allotment or lease from SIPCOT. Send it along with the bill." },
    { icon: "ClipboardCheck", title: "For vendor onboarding", items: ["The plant's vendor checklist", "Expected headcount on site", "Type of supply or service", "Bank account to be used"], hint: "Headcount tells us when PF, ESI and the contract labour licence come in." },
  ],
  documentsNote: {
    title: "Working from a shed in a village outside town?",
    sub: "Many units around the parks are outside the municipality. Send the address and bill, and we'll check the documents before filing.",
    message: "Hi National Filings, my unit is near Sriperumbudur. Can you check my address documents for company registration?",
  },

  processSection: {
    title: "From registration to vendor code, step by step",
    lead: "The company or LLP usually takes two to three weeks from complete documents. We then run GST, Udyam and the employer codes so your onboarding file is ready.",
    cta: {
      title: "Plan around your plant's deadline",
      sub: "Tell us when the buyer wants your papers. We'll set out what can be done by then.",
      message: "Hi National Filings, I need to submit vendor documents to a plant in Sriperumbudur. How fast can we register?",
    },
  },
  steps: [
    { title: "Scope the work", time: "Day 1", sub: "What you'll supply, to whom and with how many people. This decides the structure and registrations." },
    { title: "Signatures and name", time: "2-5 days", sub: "DSCs for each director or partner, then a name checked against MCA and trademark records." },
    { title: "Incorporation", time: "About 1 week", sub: "SPICe+ for a company or FiLLiP for an LLP, with replies to any registrar queries." },
    { title: "Tax and MSME", time: "After the certificate", sub: "Current account, GST and Udyam in the entity's name." },
    { title: "Employer set-up", time: "When you hire", sub: "PF and ESI codes, and the contract labour licence if your headcount needs it." },
  ],
  processNote: "Timelines are estimates. MCA workload, department queries and the plant's own process can add time.",

  mistakesSection: {
    title: "Onboarding problems we fix for Sriperumbudur contractors",
    lead: "A plant's vendor team will return a file for small mismatches. These are the ones we see most.",
  },
  mistakes: [
    { icon: "IdCard", title: "Legal name differs across papers", problem: "The GST certificate shows a trade name, the bank account shows another and the certificate a third.", fix: "We set one legal name and use it consistently on GST, bank and Udyam." },
    { icon: "Users", title: "Workers deployed before PF and ESI", problem: "A manpower contractor sends staff to a plant before the employer codes exist.", fix: "We register PF and ESI as soon as hiring starts, so the first payroll is compliant." },
    { icon: "Truck", title: "Buses not in the company's name", problem: "Staff buses stay registered to the owner personally while the contract is with the company.", fix: "We flag the mismatch early so you can sort vehicle ownership or a lease with your transport adviser." },
    { icon: "Soup", title: "Canteen FSSAI under the old name", problem: "The canteen moves to a new LLP, but food registration still shows the proprietor.", fix: "We apply for FSSAI in the entity's name with the canteen address inside the plant." },
  ],

  costSection: {
    title: "Company registration fees for Sriperumbudur contractors",
    lead: "The total depends on the structure, the number of directors or partners and the employer registrations you need. You'll see each item before paying.",
    cta: {
      title: "Get a quote for the full vendor set-up",
      sub: "Tell us the structure, headcount and the plant's checklist. We'll quote the entity and each registration separately.",
      message: "Hi National Filings, can I get a quote for company registration in Sriperumbudur, with GST, Udyam, PF and ESI?",
    },
  },
  costs: [
    { icon: "Signature", label: "For each signatory", title: "Digital signature certificates", line: "Every director, partner or subscriber needs one." },
    { icon: "Landmark", label: "Government fee", title: "MCA filing fee", line: "Nil for a company with authorised capital up to ₹15 lakh. For an LLP, it depends on contribution.", highlight: true },
    { icon: "Stamp", label: "Tamil Nadu rates", title: "Stamp duty", line: "On the MOA and AOA, or on the LLP agreement." },
    { icon: "Headset", label: "Fixed in writing", title: "Our professional fee", line: "Entity, GST, Udyam and employer registrations quoted together or separately." },
  ],

  compliance: {
    eyebrow: "After registration",
    title: "Monthly and yearly work for plant suppliers",
    lead: "Plants keep checking their vendors after onboarding. These are the filings that keep your code active.",
    items: [
      { icon: "ReceiptIndianRupee", label: "Monthly or quarterly", title: "GST returns", line: "Your buyer's input credit depends on your invoices showing up in their returns." },
      { icon: "Users", label: "Every month", title: "PF and ESI payments", line: "Challans and returns that plants often ask to see before releasing bills." },
      { icon: "Building2", label: "Every year", title: "ROC annual filing", line: "Accounts and annual return with the MCA, plus the audit for a company." },
      { icon: "Calculator", label: "Quarterly", title: "TDS returns", line: "Needed when you pay rent, subcontractors or professionals and deduct tax." },
    ],
  },

  reasonsTitle: "Why Sriperumbudur contractors work with National Filings",
  reasons: [
    { icon: "ClipboardCheck", title: "Vendor file in one go", line: "Entity, GST, Udyam, PF and ESI planned together." },
    { icon: "MessageCircle", title: "Handled online", line: "Documents and signatures over WhatsApp and email, no trips needed." },
    { icon: "MapPinned", title: "Office in Kundrathur", line: "Our only office, in Karaima Nagar, if you prefer to meet." },
    { icon: "ReceiptText", title: "Itemised quotes", line: "Government fees and our fee listed separately, before you pay." },
    { icon: "Award", title: "Since 2012", line: "Registration and compliance work for Chennai businesses." },
    { icon: "CalendarCheck", title: "Monthly reminders", line: "GST, PF, ESI and TDS due dates tracked for you." },
  ],

  faqTitle: "Company registration in Sriperumbudur: what contractors ask",
  faqs: [
    { q: "Is your office in Sriperumbudur?", a: "No. Our only office is in Karaima Nagar, Kundrathur. Sriperumbudur clients usually work with us entirely over WhatsApp and email, and can visit the Kundrathur office whenever they'd like to meet." },
    { q: "Do plants insist on a private limited company?", a: "Not always. Many plants onboard proprietorships, partnerships and LLPs that hold GST, PAN and the other papers. A private limited company tends to help with larger contracts, bank limits and outside investment. We'll look at the buyer's checklist before suggesting a structure." },
    { q: "I supply workers to a plant. Do I need a contract labour licence?", a: "Under the Occupational Safety, Health and Working Conditions Code, which replaced the old Contract Labour Act from 21 November 2025, the licensing requirement generally applies to contractors with 50 or more contract workers. Tamil Nadu's rules under the Code are still settling, so we check the current process and forms before applying." },
    { q: "When do I need PF and ESI registration?", a: "Once your headcount and wages bring you within each scheme's coverage. Most plants expect manpower and housekeeping contractors to have both codes before workers are deployed, whatever the legal minimum." },
    { q: "What does Udyam registration do for a plant vendor?", a: "It records your business as a micro, small or medium enterprise. That gives you protection under MSME law when buyers pay late, and many plants record it during vendor onboarding." },
    { q: "My unit is inside a SIPCOT park. Can it be the registered office?", a: "Yes, if you have valid proof for the premises, such as the electricity bill and the allotment or lease papers, plus a no objection letter where needed. The registered office can also be elsewhere, such as your home, if that is easier." },
    { q: "How long before I can submit my vendor documents?", a: "The company or LLP usually takes two to three weeks from complete documents. GST, Udyam and the employer codes follow, and some can be done within days of incorporation. We'll give you a realistic timeline against your plant's deadline." },
  ],

  related: [
    { icon: "Building2", label: "Company registration in Chennai", href: pillarHref("P1") },
    { icon: "MapPinned", label: "Company registration in Poonamallee", href: localityHref("P1-A9") },
    { icon: "MapPinned", label: "Company registration in Kundrathur", href: localityHref("P1-A1") },
    { icon: "Building2", label: "Private limited registration", href: clusterHref("P1-C6") },
    { icon: "Users", label: "PF and ESI registration", href: clusterHref("P6-C1") },
    { icon: "Factory", label: "MSME (Udyam) registration", href: licenceHref("L1") },
    { icon: "ReceiptIndianRupee", label: "GST registration", href: clusterHref("P2-C1") },
    { icon: "ClipboardCheck", label: "ROC compliance", href: clusterHref("P1-C5") },
  ],
  relatedTitle: "Related registration services near Sriperumbudur",

  final: {
    title: "Get your Sriperumbudur business onboarding-ready",
    sub: "Send us your plant's vendor checklist. We'll confirm the structure, registrations and fees in writing before we start.",
    message: "Hi National Filings, I'd like to register my business in Sriperumbudur and get it ready for vendor onboarding.",
  },
  catalogue: ["Private limited and LLP registration in Sriperumbudur", "PF, ESI and Udyam for Sriperumbudur contractors", "Vendor onboarding set-up for SIPCOT plant suppliers"],
};
