import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { SERVICE, clusterHref, licenceHref, localityHref, pillarHref } from "./shared";

/**
 * P1-A6 · Company Registration in Tambaram (/chennai/company-registration-in-tambaram).
 * Primary keyword: "company registration in tambaram". Angle: the big southern hub. SEZ units and service exporters
 * around MEPZ, education and training businesses, healthcare and retail. Unique section: setting up inside the SEZ
 * versus outside it. Kept distinct from Kundrathur (P1-A1), Pallavaram (P1-A2) and Chromepet (P1-A5).
 *
 * Local facts checked (Oct 2026): Tambaram is a city in Chengalpattu district; Tambaram City Municipal Corporation was
 * formed on 3 November 2021; MEPZ Special Economic Zone (set up in 1984 as the Madras Export Processing Zone) is on
 * GST Road at Tambaram, under the Ministry of Commerce and Industry, with a Development Commissioner's office and a
 * Unit Approval Committee that approves units; Tambaram railway station is one of the four main railway terminals in
 * the Chennai area and is served by the suburban South Line; Madras Christian College is in East Tambaram; Government
 * Hospital of Thoracic Medicine is at Tambaram Sanatorium. SEZ rules: units are approved by a Letter of Approval, must
 * stay net foreign exchange positive and execute a bond-cum-legal undertaking. The Section 10AA income tax deduction is
 * not available to units starting operations now (sunset for new units, 2020/2021). Timelines are estimates.
 */

const whatsapp = "Hi National Filings, I'm in Tambaram and I'd like to register my business.";

export const tambaramPage: LicencePageData = {
  id: "P1-A6",
  service: SERVICE,
  meta: {
    title: "Company Registration in Tambaram | National Filings",
    description: "Company registration in Tambaram for SEZ units, service exporters, training institutes, clinics and retailers. Pvt Ltd, LLP and Section 8 set up.",
  },
  hero: {
    headline: { line1: "Company Registration", line2Before: "in Tambaram, ", accent: "Hub of the South" },
    sub: "Tambaram has an export zone, a major rail terminal, well-known colleges and a city corporation of its own. We register the companies, LLPs and trusts that grow here, and plan the approvals that follow.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "Building2",
    kicker: "Tambaram, Chengalpattu",
    title: "Certificate of Incorporation",
    line: "Your Tambaram Business",
    stamp: "CIN issued",
    chips: ["SEZ or outside", "Pvt Ltd or LLP", "Section 8 for institutes"],
    steps: ["Brief", "Entity", "Filing", "CIN", "Approvals"],
  },

  benefitsSection: {
    title: "What a registered entity opens up in Tambaram",
    lead: "Tambaram's bigger opportunities, from a unit in the export zone to a hospital tie-up or an institute's affiliation, all start with a properly formed entity.",
    cta: {
      title: "Planning something bigger than a shop?",
      sub: "Tell us whether you'll export, teach, treat patients or sell. We'll suggest the entity and the approvals that come after it.",
      message: "Hi National Filings, I'm planning a business in Tambaram. Which entity should I start with?",
    },
  },
  benefits: [
    { icon: "Factory", title: "Eligible to apply for an SEZ unit", line: "Zone applications are made by a business entity with its own PAN and bank account." },
    { icon: "Globe", title: "Contracts with overseas clients", line: "Foreign customers sign service agreements more readily with a company." },
    { icon: "GraduationCap", title: "Credibility for institutes", line: "Parents, universities and certifying bodies look for a formal entity behind a course." },
    { icon: "Stethoscope", title: "Tie-ups for clinics", line: "Insurers, labs and corporate clients deal more easily with a registered practice." },
    { icon: "Landmark", title: "Bank funding on your own books", line: "Loans for equipment or premises are assessed on the entity's accounts." },
    { icon: "ShieldCheck", title: "Owners' assets kept separate", line: "A company or LLP limits personal exposure as contracts get larger." },
    { icon: "Users", title: "Room for many partners", line: "Doctors, trainers or investors can each hold an agreed share." },
    { icon: "TrendingUp", title: "Ready for a second branch", line: "Open another centre or outlet in the corporation without re-registering." },
  ],

  applicantsSection: {
    title: "Tambaram businesses we register",
    lead: "As the largest hub on the southern side of Chennai, Tambaram draws exporters, educators, healthcare providers and retailers. These are the enquiries we see most.",
  },
  applicants: [
    { icon: "Factory", title: "Units planning to enter MEPZ", line: "Manufacturers and service firms applying for space in the zone." },
    { icon: "Laptop", title: "Software and IT service exporters", line: "Teams delivering development, support or back-office work abroad." },
    { icon: "Headset", title: "Process outsourcing firms", line: "Voice, data and accounts work done for overseas clients." },
    { icon: "GraduationCap", title: "Training and coaching institutes", line: "Skill, language and competitive exam centres near the colleges." },
    { icon: "HeartHandshake", title: "Educational trusts and societies", line: "Non-profit schools and institutes, often set up as Section 8 companies." },
    { icon: "Stethoscope", title: "Hospitals, clinics and labs", line: "Group practices, diagnostic centres and day-care clinics." },
    { icon: "ShoppingCart", title: "Retailers and supermarkets", line: "Family stores in the market areas growing into several outlets." },
    { icon: "Truck", title: "Travel and transport operators", line: "Bus, cab and logistics businesses that run from the rail and road hub." },
  ],

  opportunities: {
    eyebrow: "Local sectors",
    title: "The sectors that make Tambaram a hub",
    intro: "MEPZ on GST Road, a railway terminal serving long-distance and suburban trains, colleges such as Madras Christian College and a cluster of hospitals give Tambaram a wider business base than any suburb around it.",
    // Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "Factory", title: "Export zone manufacturing", image: "https://images.unsplash.com/photo-1631376178637-392efc9e356b?auto=format&fit=crop&w=1600&q=90", alt: "Close view of a printed circuit board with rows of solder pads", credit: "Vishnu Mohanan / Unsplash" },
      { icon: "GraduationCap", title: "Education and training", image: "https://images.unsplash.com/photo-1709290749293-c6152a187b14?auto=format&fit=crop&w=1600&q=90", alt: "Teacher walking between rows of students at desks in a classroom", credit: "CIMT HOOGHLY / Unsplash" },
      { icon: "Stethoscope", title: "Hospitals and clinics", image: "https://images.unsplash.com/photo-1778151270757-f3793f65e2de?auto=format&fit=crop&w=1600&q=90", alt: "Hospital ward with three beds and wall-mounted monitors", credit: "Irshad Pathan / Unsplash" },
      { icon: "Truck", title: "Rail and road transport", image: "https://images.unsplash.com/photo-1711413324441-7eb3ec0cc7a2?auto=format&fit=crop&w=1600&q=90", alt: "Orange express train standing at a covered railway platform", credit: "A Charan / Unsplash" },
    ],
  },

  highlights: {
    eyebrow: "Inside the zone or outside",
    title: "Setting up a unit in MEPZ versus elsewhere in Tambaram",
    lead: "MEPZ Special Economic Zone, which began in 1984 as the Madras Export Processing Zone, sits on GST Road in Tambaram. A unit inside it works under different rules from a business outside.",
    items: [
      { icon: "Building2", label: "Step one, either way", title: "Form the entity first", line: "A company or LLP with its own PAN and bank account is the usual starting point for a zone application." },
      { icon: "FileCheck2", label: "Inside the zone", title: "Letter of Approval", line: "Proposals go to the office of the Development Commissioner and are approved by the Unit Approval Committee. The Letter of Approval sets out what the unit may do.", highlight: true },
      { icon: "Scale", label: "Ongoing obligations", title: "Zone compliance", line: "SEZ units sign a bond-cum-legal undertaking, must stay net foreign exchange positive and report to the zone regularly." },
      { icon: "TriangleAlert", label: "Check before you decide", title: "No new income tax holiday", line: "The Section 10AA deduction has closed for units starting now. Weigh the zone on its other features, not on that." },
    ],
  },

  documentsSection: {
    title: "Documents for company registration in Tambaram",
    lead: "Share clear scans on WhatsApp or email. For institutes and SEZ plans, a short note on the project helps us draft the objects correctly.",
  },
  documents: [
    { icon: "UserRound", title: "For each promoter", items: ["PAN card", "Aadhaar, passport or voter ID", "Address proof dated within the last two months", "Recent photograph", "Mobile number and email ID"], hint: "Foreign promoters need apostilled or consularised documents." },
    { icon: "Home", title: "For the Tambaram registered office", items: ["Recent electricity or property tax receipt", "Lease deed, if rented", "Owner's no objection letter"], hint: "If you'll later move into MEPZ, the registered office can start elsewhere and be shifted." },
    { icon: "ClipboardCheck", title: "For a zone or institute project", items: ["Short project note", "Products or services planned", "Expected investment and staffing", "Board or trustee names, for a Section 8 company"], hint: "The objects in the MOA should match what the zone application or affiliation will say." },
  ],
  documentsNote: {
    title: "Planning a unit in MEPZ?",
    sub: "Send us your project note. We'll draft the company's objects so they line up with the activities you'll apply for in the zone.",
    message: "Hi National Filings, I'm planning a unit in MEPZ, Tambaram. Can you set up the company first?",
  },

  processSection: {
    title: "Company registration process for Tambaram businesses",
    lead: "The MCA side usually takes two to three weeks from complete documents. Sector approvals, such as a zone application or an institute's affiliation, run after that on their own timelines.",
    cta: {
      title: "Share your plan with us",
      sub: "Tell us the activity, the promoters and any approvals you need. We'll send a checklist and a written quote.",
      message: "Hi National Filings, I want to register a business in Tambaram. Can we discuss my plan?",
    },
  },
  steps: [
    { title: "Project brief", time: "Day 1", sub: "Activity, promoters, capital and later approvals discussed, so the objects are drafted to fit." },
    { title: "Digital signatures", time: "1-2 days", sub: "DSCs for every proposed director or designated partner." },
    { title: "Name check and reservation", time: "2-4 working days", sub: "Names searched against MCA records and trademarks before applying." },
    { title: "Incorporation forms", time: "Once the name is approved", sub: "SPICe+ for a company, FiLLiP for an LLP, or the Section 8 licence route for a non-profit." },
    { title: "Certificate and approvals", time: "On approval", sub: "PAN, TAN and certificate issued, then bank account, GST and any zone or sector application." },
  ],
  processNote: "Timelines are estimates. MCA workload, name objections and departmental queries can add time.",

  mistakesSection: {
    title: "Planning gaps we see in Tambaram",
    lead: "Bigger projects bring bigger paperwork. These are the gaps that most often slow Tambaram promoters down.",
  },
  mistakes: [
    { icon: "ListTree", title: "Objects that don't match the zone plan", problem: "The MOA describes trading, but the zone application is for software services.", fix: "We draft the objects from your project note so both documents tell the same story." },
    { icon: "Percent", title: "Counting on an expired tax break", problem: "A promoter budgets for the old SEZ income tax holiday that new units no longer get.", fix: "We point out early that Section 10AA is closed to new units, so the plan rests on real numbers." },
    { icon: "GraduationCap", title: "Profit company for a charitable institute", problem: "An educational trust is set up as a private limited company, then struggles with non-profit status.", fix: "We compare a Section 8 company, trust and society before filing anything." },
    { icon: "Stethoscope", title: "Doctors' shares left unwritten", problem: "Three doctors open a clinic together with no agreement on profit share or exit.", fix: "An LLP agreement or shareholders' agreement records it from day one." },
  ],

  costSection: {
    title: "Company registration fees for Tambaram businesses",
    lead: "Fees depend on the entity type, the number of promoters and the capital. A Section 8 company has its own steps. You'll see each item before you pay.",
    cta: {
      title: "Ask for an itemised quote",
      sub: "Tell us the entity, number of promoters and capital. Government fees, stamp duty and our fee are listed separately.",
      message: "Hi National Filings, can I get a quote for company registration in Tambaram?",
    },
  },
  costs: [
    { icon: "Signature", label: "Per promoter", title: "Digital signatures", line: "Every director or designated partner signing the forms needs one." },
    { icon: "Landmark", label: "Depends on capital", title: "MCA fees", line: "A company with authorised capital up to ₹15 lakh pays no MCA filing fee. LLP fees vary with contribution.", highlight: true },
    { icon: "Stamp", label: "Tamil Nadu rates", title: "Stamp duty", line: "Applies to the MOA and AOA, or to the LLP agreement." },
    { icon: "Headset", label: "Agreed in advance", title: "Our professional fee", line: "Advice, drafting, filing and replies to any registrar queries." },
  ],

  compliance: {
    eyebrow: "After registration",
    title: "What Tambaram businesses usually need next",
    lead: "What follows depends on your sector and where you operate. These come up most often for Tambaram clients.",
    items: [
      { icon: "ScrollText", label: "Outside the zone", title: "Corporation trade licence", line: "Many trades within the city need a licence from Tambaram City Municipal Corporation." },
      { icon: "ReceiptIndianRupee", label: "Most businesses", title: "GST registration", line: "Needed above the threshold, and for most service exporters and SEZ suppliers." },
      { icon: "Users", label: "Once you hire", title: "PF and ESI", line: "Registration when staff numbers cross the limits, then monthly returns." },
      { icon: "Store", label: "Shops and offices", title: "Shop and establishment registration", line: "For premises where staff work, under the Tamil Nadu rules." },
    ],
  },

  reasonsTitle: "Why Tambaram businesses choose National Filings",
  reasons: [
    { icon: "ListTree", title: "Objects drafted for your plan", line: "Zone, institute or clinic, the MOA is written for what comes next." },
    { icon: "MessageCircle", title: "Fully online if you like", line: "Documents, DSCs and updates handled over WhatsApp and email." },
    { icon: "MapPinned", title: "Office in Kundrathur", line: "Our one office is in Karaima Nagar, Kundrathur, for clients who want to meet." },
    { icon: "ReceiptText", title: "Itemised fees", line: "Government fees, stamp duty and our fee listed separately." },
    { icon: "Award", title: "In practice since 2012", line: "Registration, tax and compliance work for Chennai businesses." },
    { icon: "CalendarClock", title: "Annual deadlines tracked", line: "ROC, GST and income tax reminders after incorporation." },
  ],

  faqTitle: "Company registration in Tambaram: common questions",
  faqs: [
    { q: "Do you have an office in Tambaram?", a: "No. Our only office is in Karaima Nagar, Kundrathur. Tambaram clients usually work with us entirely over WhatsApp and email, and anyone who would like to meet can visit the Kundrathur office." },
    { q: "Can a newly registered company apply for a unit in MEPZ?", a: "Yes. A new company or LLP can apply. Proposals go to the office of the Development Commissioner, MEPZ, and are considered by the Unit Approval Committee. If approved, the unit receives a Letter of Approval." },
    { q: "Do SEZ units in Tambaram still get the income tax holiday?", a: "Not new ones. The Section 10AA deduction is not available to units that start operations now. Units in the zone still work under SEZ rules on customs and procedures, which we suggest you review with the zone office for your activity." },
    { q: "Do I need to be inside the SEZ to export services from Tambaram?", a: "No. Many service exporters work from ordinary offices outside the zone. Whether a zone unit makes sense depends on your activity, scale and the obligations that come with it." },
    { q: "Which structure suits a coaching or training institute?", a: "A profit-making institute is usually a private limited company or LLP. If the institute is charitable and won't distribute profits, a Section 8 company, trust or society may suit better. We'll compare them for your plans." },
    { q: "How long does company registration take for a Tambaram business?", a: "Usually two to three weeks from complete documents. A Section 8 company can take longer because it needs a licence before incorporation. Any zone or sector approvals are separate and follow their own timelines." },
    { q: "Is company registration enough to run a clinic in Tambaram?", a: "No. Registration creates the entity. Clinics also need the health approvals that apply to their type of establishment, and often a trade licence from the corporation. We'll point you to what applies." },
  ],

  related: [
    { icon: "Building2", label: "Company registration in Chennai", href: pillarHref("P1") },
    { icon: "MapPinned", label: "Company registration in Chromepet", href: localityHref("P1-A5") },
    { icon: "MapPinned", label: "Company registration in Pallavaram", href: localityHref("P1-A2") },
    { icon: "Building2", label: "Private limited registration", href: clusterHref("P1-C6") },
    { icon: "Handshake", label: "LLP registration", href: clusterHref("P1-C1") },
    { icon: "HeartHandshake", label: "Section 8 company registration", href: clusterHref("P4-C3") },
    { icon: "Store", label: "Shop and establishment registration", href: licenceHref("L4") },
    { icon: "Users", label: "PF and ESI registration", href: clusterHref("P6-C1") },
  ],
  relatedTitle: "Related registration services near Tambaram",

  final: {
    title: "Start your Tambaram business on the right footing",
    sub: "Tell us what you plan to build, teach, treat or sell. We'll confirm the entity, documents and fees, and map the approvals that follow.",
    message: "Hi National Filings, I'd like to register my business in Tambaram.",
  },
  catalogue: ["Private limited company registration in Tambaram", "Section 8 company registration in Tambaram", "Company set-up for MEPZ units in Tambaram"],
};
