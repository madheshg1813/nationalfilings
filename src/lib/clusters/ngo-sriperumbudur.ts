import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { NGO_SERVICE, nearbyAreas } from "./shared";

/**
 * P4-A12 · NGO Registration in Sriperumbudur (/chennai/ngo-registration-in-sriperumbudur).
 * Primary keyword: "ngo registration in sriperumbudur". We have no office here; clients work with us over WhatsApp and
 * email or visit our Kundrathur office.
 * Angle: NGOs that want CSR funds from the large plants in the SIPCOT belt: skill training, village schools, health,
 * water and women's livelihoods. Explains what a company's CSR team usually asks of an NGO partner (registered entity,
 * 12A and 80G, CSR-1, three-year track record, audited accounts) and Section 8 vs trust for CSR work. No company is named.
 *
 * Local facts (reused from the verified P1-A12 JSDoc): Sriperumbudur is a municipality and headquarters of Sriperumbudur
 * taluk, Kancheepuram district; PIN 602105; on the Chennai to Bengaluru highway; SIPCOT runs industrial parks at
 * Sriperumbudur and Irungattukottai with auto, auto ancillary, engineering and electronics units.
 * Ramanuja: the Adikesava Perumal temple at Sriperumbudur is traditionally held to be Ramanuja's birthplace
 * (en.wikipedia.org/wiki/Adikesava_Perumal_temple,_Sriperumpudur; incredibleindia.gov.in/en/tamil-nadu/kanchipuram/sriperumbudur).
 * Temples in Tamil Nadu come under the HR&CE Department; the page says a trust cannot manage a temple.
 *
 * Facts checked (Nov 2026):
 * - CSR: Companies Act, 2013 section 135 applies to companies with net worth of ₹500 crore or more, turnover of ₹1,000
 *   crore or more, or net profit of ₹5 crore or more; they spend at least 2% of average net profit of the three preceding
 *   years. (mca.gov.in Companies Act s.135)
 * - Companies (CSR Policy) Rules, 2014, rule 4(1): a company may implement CSR through a Section 8 company, registered
 *   public trust or registered society that holds 12A and 80G registration; one not set up by a company or government needs
 *   an established track record of at least three years in similar activities. Rule 4(2): every such entity must register
 *   with the Central Government by filing Form CSR-1 electronically with the Registrar (from 1 April 2021), certified by a
 *   practising CA, CS or CMA, which generates a CSR Registration Number. Form CSR-1 was substituted by G.S.R. 452(E) of
 *   7 July 2025. (taxclue.in rule 3-4 CSR rules article; taxmann.com CSR implementation agencies; ca2013.com CSR amendment
 *   rules 22 January 2021; ksandk.com CSR amendment rules 2025)
 * - Income-tax Act, 2025 from 1 April 2026: section 332 (formerly 12A/12AB) and section 354 (formerly 80G); Form 104 for
 *   provisional registration/approval for entities that have not started activities, valid up to three tax years or six
 *   months from the start of activities, whichever is earlier; Form 105 for regular registration; Form 106 order with a
 *   16-digit URN. (incometaxindia.gov.in/documents/d/guest/form-104-faqs; form-106-faqs)
 * - Section 8 company: licence through SPICe+, at least two directors, no minimum capital, ROC filings and audit each year
 *   (as verified on P4-C3, section-8.ts). Trust deed registered with the Sub-Registrar (P4-C1).
 * - FCRA: registration needs three years of existence and at least ₹15 lakh spent on core activities in the last three
 *   financial years, with audited statements for those years; newer bodies can seek prior permission for a specific donor.
 *   (MHA notification as reported by nishithdesai.com hotline 15329, April 2025; taxscan.in 522160)
 * - FCRA and CSR from foreign-owned Indian companies: since the 2016 amendment, an Indian company whose foreign investment
 *   is within FEMA limits is generally not treated as a foreign source, but commentary differs, so the page tells NGOs to
 *   get the company's confirmation. (dsklegal.com "FOCC, CSR, and FCRA" 2026; rsm.global FCRA implications on CSR)
 * - No fee figures. Timelines are estimates.
 */

const whatsapp = "Hi National Filings, we run community work near Sriperumbudur and want to become a CSR partner for the plants here. Can you help?";

export const ngoSriperumbudurPage: LicencePageData = {
  id: "P4-A12",
  service: NGO_SERVICE,
  meta: {
    title: "NGO Registration in Sriperumbudur | National Filings",
    description: "NGO registration in Sriperumbudur for groups seeking CSR funds from plants: trust or Section 8, 12A and 80G, CSR-1 and audited books, done right.",
  },
  hero: {
    headline: { line1: "NGO Registration", line2Before: "in Sriperumbudur, ", accent: "CSR Partner Ready" },
    sub: "The plants in the SIPCOT parks spend part of their profit on the villages around them. Their CSR teams fund NGOs that are registered, tax-approved and on the MCA's CSR list. We get your trust or Section 8 company there, step by step.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "Handshake",
    kicker: "Sriperumbudur, Kancheepuram",
    title: "CSR-1 Registration",
    line: "Your Sriperumbudur NGO",
    stamp: "CSR number issued",
    chips: ["Trust or Section 8", "12A and 80G", "Audited accounts"],
    steps: ["Entity", "PAN", "12A", "CSR-1", "Proposal"],
  },

  benefitsSection: {
    title: "What a Sriperumbudur NGO needs before a plant's CSR team will fund it",
    lead: "Good work in the villages is not enough on its own. A company can only pass CSR money to an entity that meets the rules, and its auditors check that every year.",
    cta: {
      title: "Already talking to a plant's CSR team?",
      sub: "Send us their partner checklist or the email they sent. We'll tell you what you already have and what is missing.",
      message: "Hi National Filings, a company in Sriperumbudur sent us a CSR partner checklist. Can you check what our NGO is missing?",
    },
  },
  benefits: [
    { icon: "Building2", title: "The right legal entity", line: "A trust, society or Section 8 company, the only kinds of NGO a company can route CSR through." },
    { icon: "BadgeCheck", title: "12A and 80G in place", line: "The CSR rules expect both. We file for them as soon as your PAN is issued." },
    { icon: "FileCheck2", title: "CSR-1 registration number", line: "Filed with the MCA and certified by a practising professional, so you appear as an eligible partner." },
    { icon: "CalendarClock", title: "Track record counted", line: "Your three years start from registration, so registering early matters." },
    { icon: "Calculator", title: "Audited, clean accounts", line: "Books kept so each year's audit report is ready when a CSR team asks." },
    { icon: "ClipboardCheck", title: "Project-wise reporting", line: "Spending tracked per project, the way company boards report CSR." },
    { icon: "Globe", title: "FCRA checked", line: "We look at whether a foreign-owned plant's money counts as foreign contribution." },
    { icon: "MessageCircle", title: "Handled remotely", line: "Most of it on WhatsApp and email. No repeated trips from Sriperumbudur to the city." },
  ],

  applicantsSection: {
    title: "Sriperumbudur groups we register for CSR work",
    lead: "Our clients here are usually doing the work already, often with volunteers or a retired employee in charge. They come to us when a company asks for papers they don't have.",
  },
  applicants: [
    { icon: "GraduationCap", title: "Skill training centres", line: "Courses in electrical, welding, tailoring and electronics repair for young people near the parks." },
    { icon: "Home", title: "Village school supporters", line: "Groups giving books, toilets, smart classes or teachers' pay to panchayat schools." },
    { icon: "Stethoscope", title: "Health outreach groups", line: "Eye camps, health check camps and support for mothers and the elderly." },
    { icon: "Leaf", title: "Water and lake groups", line: "Desilting tanks, planting trees and drinking water in the villages." },
    { icon: "UserPlus", title: "Women's livelihood groups", line: "Tailoring units and small enterprises for women in the villages around the belt." },
    { icon: "Users", title: "Employee volunteer groups", line: "Plant staff who already run weekend activities and want a proper entity." },
    { icon: "Factory", title: "Vendor-backed foundations", line: "Suppliers to the big plants setting up their own CSR arm." },
    { icon: "HeartHandshake", title: "Pilgrim service trusts", line: "Groups serving devotees who visit Sriperumbudur, Ramanuja's traditional birthplace." },
  ],

  opportunities: {
    eyebrow: "CSR causes",
    title: "The work around Sriperumbudur that CSR money funds",
    intro: "Companies in the belt usually look for projects close to their plants. These are the causes we see NGOs here take to CSR teams most often.",
    // Pexels licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "GraduationCap", title: "Skill training", image: "https://images.pexels.com/photos/35216547/pexels-photo-35216547.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Two young men soldering circuit boards at a workbench in an electronics training lab", credit: "Multitech Institute / Pexels" },
      { icon: "Home", title: "Village schools", image: "https://images.pexels.com/photos/35558791/pexels-photo-35558791.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Young children sitting on a mat writing on slates in a village classroom", credit: "Harshad Pendse / Pexels" },
      { icon: "UserPlus", title: "Women's livelihoods", image: "https://images.pexels.com/photos/18065034/pexels-photo-18065034.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Woman in a pink sari bent over planting at the edge of a green paddy field", credit: "Pranjal Mulane / Pexels" },
      { icon: "Leaf", title: "Water for villages", image: "https://images.pexels.com/photos/8814613/pexels-photo-8814613.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Village women filling metal water pots at a well in the early morning haze", credit: "Ganta Srinivas / Pexels" },
    ],
  },

  highlights: {
    eyebrow: "The CSR partner checklist",
    title: "What a plant's CSR team usually asks a Sriperumbudur NGO for",
    lead: "Each company has its own form, but the core comes from the Companies (CSR Policy) Rules, 2014. Please confirm the exact list with the company you are approaching.",
    items: [
      { icon: "Building2", label: "Rule 4(1)", title: "Trust, society or Section 8", line: "Registered under the law that applies to it, with the deed, certificate or licence to show.", highlight: true },
      { icon: "BadgeCheck", label: "Sections 332 and 354", title: "12A and 80G registration", line: "The tax registrations formerly known as 12A and 80G, now under the Income-tax Act, 2025." },
      { icon: "CalendarCheck", label: "Track record", title: "At least three years of similar work", line: "Required where the NGO wasn't set up by a company or the government. Audited accounts for those years prove it." },
      { icon: "FileCheck2", label: "Rule 4(2)", title: "CSR-1 registration number", line: "Filed on the MCA portal and certified by a practising CA, CS or cost accountant." },
    ],
  },

  documentsSection: {
    title: "Papers a Sriperumbudur NGO needs for CSR",
    lead: "Some are needed to register, others to apply for CSR-1 and to pitch a project. Send what you have and we'll fill the gaps.",
  },
  documents: [
    { icon: "IdCard", title: "To register the NGO", items: ["PAN, Aadhaar and photos of trustees or directors", "Address proof for the registered office", "Draft objects: skill, education, health or water", "Two witnesses for a trust deed, or DSCs for a Section 8 company"], hint: "We write the objects around the causes CSR rules recognise, so a company's auditor has no doubt." },
    { icon: "BadgeCheck", title: "For 12A, 80G and CSR-1", items: ["Registration certificate or registered deed", "NGO's PAN and bank account", "12A and 80G orders, once received", "Office-bearers' PAN and DSC for the MCA filing"], hint: "CSR-1 needs the tax registrations first, so we plan the order of filings from the start." },
    { icon: "FileText", title: "For a CSR proposal", items: ["Audited accounts for the last three years", "Activity reports with photos and beneficiary numbers", "A project budget and timeline", "References from panchayats or schools you've worked with"], hint: "Many CSR teams also visit the site. Keep attendance sheets and bills in order." },
  ],
  documentsNote: {
    title: "Been working for years without registering?",
    sub: "Your past work still helps your proposals, but the three-year track record for CSR counts from your registered entity. We'll tell you where you stand.",
    message: "Hi National Filings, our group near Sriperumbudur has worked for years without registration. How do we get CSR ready?",
  },

  processSection: {
    title: "How we take a Sriperumbudur group from registration to CSR-1",
    lead: "Registration is quick compared with the rest. The tax approvals and the track record take time, so we plan the whole path on the first call.",
    cta: {
      title: "Plan your CSR path with us",
      sub: "Tell us your cause, the villages you work in and whether a company has approached you. We'll map out the filings.",
      message: "Hi National Filings, we want to register an NGO in Sriperumbudur for CSR projects. Can we plan it with you?",
    },
  },
  steps: [
    { title: "Choose the entity", time: "First call", sub: "Trust or Section 8 company, based on who will run it and how big the CSR funds may get." },
    { title: "Register it", time: "1-3 weeks", sub: "Trust deed at the Sub-Registrar, or SPICe+ incorporation with the Section 8 licence." },
    { title: "PAN, bank and books", time: "After registration", sub: "Bank account opened and accounts set up project-wise from the first rupee." },
    { title: "12A and 80G", time: "After PAN", sub: "Form 104 for provisional registration and approval, then Form 105 later for regular status." },
    { title: "CSR-1 with the MCA", time: "Once 12A and 80G are in", sub: "Filed and certified, giving you a CSR Registration Number to share with companies." },
  ],
  processNote: "Timelines are estimates and depend on complete documents and government processing. The three-year track record is a legal condition we cannot shorten.",

  mistakesSection: {
    title: "CSR mistakes we fix for Sriperumbudur NGOs",
    lead: "Most of these surface when a plant's CSR or audit team reviews the NGO. Fixing them later costs months.",
  },
  mistakes: [
    { icon: "FileWarning", title: "Getting CSR-1 before 12A and 80G", problem: "A new NGO tries to file CSR-1 straight after registration and is told the tax registrations come first.", fix: "We line up the filings in order: entity, PAN, 12A and 80G, then CSR-1." },
    { icon: "Calculator", title: "No audited accounts", problem: "The group has spent money on camps and coaching for years, but there is no audit report the company can file.", fix: "We set up proper books and arrange the audit every year, so the track record is on paper." },
    { icon: "ScrollText", title: "Objects too narrow", problem: "The deed says only 'running a tuition centre', so a company can't fund the same NGO's health camp.", fix: "We draft objects broad enough for skill, education, health and water work in the area." },
    { icon: "Globe", title: "Money from a foreign-owned plant taken without checking", problem: "The NGO accepts funds from a subsidiary of a foreign group without asking whether FCRA applies.", fix: "We ask the company to confirm its status in writing and tell you if FCRA registration or permission is needed." },
  ],

  costSection: {
    title: "What a CSR-ready NGO in Sriperumbudur costs to set up",
    lead: "Government fees and stamp duty go to the government. Our fee depends on the entity and how many of the filings you need from us, and we agree it in writing first.",
    cta: {
      title: "Get a quote for the full CSR path",
      sub: "Tell us if you need registration, 12A and 80G, CSR-1 or all of them. We'll quote each part.",
      message: "Hi National Filings, please send a quote for NGO registration and CSR-1 for our group in Sriperumbudur.",
    },
  },
  costs: [
    { icon: "ScrollText", label: "Stamp duty as per Tamil Nadu rates", title: "Charitable trust", line: "Duty depends on the corpus and any property. Our part covers the deed and registration day." },
    { icon: "Building2", label: "MCA fees as applicable", title: "Section 8 company", line: "Covers DSCs, the SPICe+ filing and the licence. Yearly ROC filings are quoted separately.", highlight: true },
    { icon: "BadgeCheck", label: "No government fee", title: "12A and 80G", line: "We prepare and file Form 104, and later Form 105 for regular registration." },
    { icon: "FileCheck2", label: "Quoted upfront", title: "CSR-1 and certification", line: "Covers the MCA filing and the professional certification the form needs." },
  ],

  compliance: {
    eyebrow: "Staying fundable",
    title: "What keeps a Sriperumbudur NGO eligible for CSR year after year",
    lead: "Companies check their partners again every year. Missing one of these can take you off their list.",
    items: [
      { icon: "Calculator", label: "Every year", title: "Audit and tax return", line: "Accounts audited and the NGO's return filed, so the tax registration stays valid." },
      { icon: "ReceiptText", label: "Every year", title: "Donation statement", line: "Donations reported so donors' 80G deductions are matched with your filing." },
      { icon: "Building2", label: "Every year, Section 8 only", title: "ROC filings", line: "Financial statements and annual return filed with the Registrar of Companies." },
      { icon: "ClipboardCheck", label: "Per project", title: "Utilisation reports", line: "Spending and outcomes reported to each company in the format it asks for." },
    ],
  },

  reasonsTitle: "Why Sriperumbudur NGOs register with us",
  reasons: [
    { icon: "Handshake", title: "Built around CSR", line: "Every step planned with the company's partner checklist in mind." },
    { icon: "ListTree", title: "Filings in the right order", line: "Entity, 12A and 80G, then CSR-1, without false starts." },
    { icon: "MessageCircle", title: "No trips needed", line: "WhatsApp and email for most of the work. Visit our office only if you want to." },
    { icon: "MapPinned", title: "Kundrathur office", line: "Our only office, in Karaima Nagar. Open Monday to Saturday, 9 am to 7 pm." },
    { icon: "Award", title: "Experience since 2012", line: "Registration and compliance work for Chennai businesses and NGOs." },
    { icon: "ReceiptText", title: "Fees in writing", line: "Each part of the work quoted before we start." },
  ],

  faqTitle: "NGO registration in Sriperumbudur: questions about CSR funding",
  faqs: [
    { q: "Do you have an office in Sriperumbudur?", a: "No. Our only office is in Karaima Nagar, Kundrathur, open Monday to Saturday, 9 am to 7 pm. NGOs in and around Sriperumbudur work with us over WhatsApp and email, and can visit the office when they want to meet." },
    { q: "Which companies have to spend on CSR?", a: "Under section 135 of the Companies Act, 2013, a company with net worth of ₹500 crore or more, turnover of ₹1,000 crore or more, or net profit of ₹5 crore or more must spend at least 2% of its average net profit of the last three years on CSR. Many of the large plants in the SIPCOT parks meet these limits." },
    { q: "Can a newly registered NGO get CSR funds from a plant here?", a: "Usually not straight away. The CSR rules let a company work through an NGO it didn't set up only if the NGO has at least three years of track record in similar work. It must also hold 12A and 80G and a CSR-1 registration number. A new NGO can still register now, build its record and start with smaller donors." },
    { q: "For CSR work, is a Section 8 company better than a trust?", a: "Both are allowed. A trust is quicker and cheaper to set up and suits a small group with a few trustees. A Section 8 company files with the MCA every year and has board meetings and audits like a company, which many CSR teams find familiar and easy to check. If you expect large, multi-year CSR projects, a Section 8 company is often the better fit." },
    { q: "What is CSR-1 and who files it?", a: "CSR-1 is a form filed with the Ministry of Corporate Affairs by the NGO, not the company. It records the NGO as an eligible CSR implementing agency and gives it a CSR Registration Number. It has to be certified by a practising chartered accountant, company secretary or cost accountant. The form was replaced with a new version in July 2025." },
    { q: "The plant near us is owned by a foreign group. Do we need FCRA?", a: "It depends on the company. Since a 2016 amendment, an Indian company whose foreign investment is within FEMA limits is generally not treated as a foreign source, but views differ. Ask the company to confirm its position in writing. For your own FCRA registration, the NGO must have existed for three years and spent at least ₹15 lakh on its work in that period." },
    { q: "Can a trust in Sriperumbudur take part in temple work at the Ramanuja shrine?", a: "A trust can serve food or help pilgrims with the permission needed, but it cannot manage or take over a temple. Temples in Tamil Nadu come under the Hindu Religious and Charitable Endowments Department. Keep the deed's objects on pilgrim service, not on running the temple." },
  ],

  related: nearbyAreas("P4-A12"),
  relatedTitle: "NGO registration in areas near Sriperumbudur",

  final: {
    title: "Get your Sriperumbudur NGO ready for CSR partners",
    sub: "Tell us your cause and the villages you work in. We'll register the right entity and plan the path to 12A, 80G and CSR-1.",
    message: "Hi National Filings, we're in Sriperumbudur and want our NGO to be eligible for CSR funds. Can we talk?",
  },
  catalogue: ["NGO registration for CSR projects in Sriperumbudur", "Section 8 company and trust registration in Sriperumbudur", "CSR-1, 12A and 80G registration for NGOs in Sriperumbudur"],
};
