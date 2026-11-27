import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { NGO_SERVICE, nearbyAreas } from "./shared";

/**
 * P4-A2 · NGO Registration in Pallavaram (/chennai/ngo-registration-in-pallavaram).
 * Primary keyword: "ngo registration in pallavaram". No office in Pallavaram: clients work with us over WhatsApp and email
 * and can visit our Kundrathur office on the Pallavaram road.
 * Angle: residents' welfare associations, civic groups in and around the cantonment area, lake protection groups for the
 * Pallavaram Periya Eri, and welfare groups for leather and tannery workers. Why a society suits a members' association, the
 * District Registrar process, yearly filings, and when 12A/80G (now sections 332 and 354) is worth it for a civic group.
 * Kept distinct from P1-A2, P2-A2, P3-A2, P4-A1 and the P4 cluster pages.
 *
 * Local facts (reused from the verified P1-A2 JSDoc): Pallavaram is in Chengalpattu district and part of Tambaram City
 * Municipal Corporation since November 2021; part of the area is the St. Thomas Mount-cum-Pallavaram cantonment under the
 * Ministry of Defence; leather units operate around Nagalkeni; SH 113A runs to Kundrathur.
 * Pallavaram Periya Eri: a pro bono case filed in 2012 led to court orders for its restoration; RTI replies in 2021 showed over
 * 1,300 encroachments; dumping and sewage remain residents' concerns.
 * (thenewsminute.com "Lake lost to waste: How a 10-year court battle still failed Pallavaram Periya Eri";
 * citizenmatters.in/pallavaram-periya-eri-ngt-orders-sewage-dumpyard-encroachments-wr/)
 *
 * Facts checked (Nov 2026):
 * - Societies: Tamil Nadu Societies Registration Act, 1975; registration with the District Registrar (Registration
 *   Department) through TNREGINET; at least seven members; memorandum and bylaws; yearly filings with the Registrar including
 *   accounts and the members' list. No form numbers or fees quoted. (tnreginet.gov.in; as verified for P4-C2, society.ts)
 * - Trusts: deed registered with the Sub-Registrar, settlor and two witnesses (as verified for P4-C1, trust.ts).
 * - Section 8 company: Companies Act, 2013 s.8, licence through SPICe+, full ROC compliance (as verified for P4-C3).
 * - Income-tax Act, 2025 from 1 April 2026: registration (formerly 12A/12AB) is section 332; donor approval (formerly 80G) is
 *   section 354. Form 104 for provisional registration (order in Form 106); Form 105 for regular registration and approval
 *   (order in Form 107); regular registration valid for five tax years; old-law registrations valid until expiry.
 *   (incometaxindia.gov.in/documents/d/guest/form-104-faqs; incometaxindia.gov.in/documents/d/guest/form-105-faqs;
 *   incometaxindia.gov.in/w/section-332-7)
 * - FCRA registration: three years of existence and ₹15 lakh spent on core activities in the last three financial years;
 *   otherwise prior permission. (fcraonline.nic.in; taxguru.in eligibility criteria for FCRA registration)
 * - CSR-1 filed with the MCA, needs 12A and 80G registration. (mca.gov.in, Companies (CSR Policy) Rules as amended 2021)
 * - NGO Darpan unique ID (ngodarpan.gov.in, NITI Aayog) for government grants and schemes.
 * - No fee figures. Timelines are estimates.
 */

const whatsapp = "Hi National Filings, I'm with a residents' association in Pallavaram and we want to register it as a society.";

export const ngoPallavaramPage: LicencePageData = {
  id: "P4-A2",
  service: NGO_SERVICE,
  meta: {
    title: "NGO Registration in Pallavaram, Chennai | National Filings",
    description: "NGO registration in Pallavaram for residents' associations, lake groups and leather worker welfare. Society set up, yearly filings, 12A and 80G.",
  },
  hero: {
    headline: { line1: "NGO Registration", line2Before: "", accent: "in Pallavaram" },
    sub: "NGO registration in Pallavaram for groups of every kind. We set up the right legal structure and help you open a bank account and receive donations properly.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "Users",
    kicker: "Pallavaram, Chengalpattu district",
    title: "Society Registered",
    line: "Your Pallavaram NGO",
    stamp: "Registrar approved",
    chips: ["Seven members or more", "Bylaws drafted", "Yearly filings tracked"],
    steps: ["Members", "Bylaws", "TNREGINET", "Registrar", "Certificate"],
  },

  benefitsSection: {
    title: "Why Pallavaram associations register as a society",
    lead: "An unregistered colony or lake group can still meet and write letters. It can't easily open a bank account, sign a contract or show the corporation and courts who it speaks for.",
    cta: {
      title: "Association running for years without papers?",
      sub: "Send us your current rules, if any, and the office bearers' names. We'll tell you what the bylaws need.",
      message: "Hi National Filings, our residents' association in Pallavaram has never been registered. What do we need to start?",
    },
  },
  benefits: [
    { icon: "Users", title: "Run by members", line: "A society's members elect the committee, which suits a colony or civic group." },
    { icon: "Landmark", title: "Bank account in its name", line: "Maintenance dues and event money kept apart from the secretary's own account." },
    { icon: "Gavel", title: "Standing in petitions", line: "A registered body can file representations and cases in its own name." },
    { icon: "Leaf", title: "A credible voice for the lake", line: "Officials take a registered lake group's letters and survey work more seriously." },
    { icon: "ScrollText", title: "Rules everyone can see", line: "Bylaws settle dues, elections and expulsion before a dispute starts." },
    { icon: "ShieldCheck", title: "Continuity across committees", line: "Property, records and bank accounts stay with the society when office bearers change." },
    { icon: "HeartHandshake", title: "Welfare funds on record", line: "Help for workers' families paid out through books that members can inspect." },
    { icon: "Laptop", title: "Handled remotely", line: "Drafts on WhatsApp and email, with a visit to our Kundrathur office if you prefer." },
  ],

  applicantsSection: {
    title: "Pallavaram groups we register",
    lead: "Most Pallavaram groups we work with are member bodies with a committee, dues and a cause close to home.",
  },
  applicants: [
    { icon: "Home", title: "Residents' welfare associations", line: "Colony and street associations dealing with roads, drains, lights and security." },
    { icon: "Building2", title: "Apartment owners' groups", line: "Flat owners who want a formal body for common areas and dues." },
    { icon: "ShieldCheck", title: "Cantonment-area civic groups", line: "Residents in and around the cantonment taking up civic issues with the authorities." },
    { icon: "Leaf", title: "Lake protection groups", line: "Volunteers working on the Periya Eri: encroachment, dumping and sewage." },
    { icon: "HardHat", title: "Leather and tannery worker welfare", line: "Funds for workers around Nagalkeni: medical help, children's fees and safety awareness." },
    { icon: "UserCheck", title: "Senior citizens' forums", line: "Retired residents who meet, help each other and take up pension and civic issues." },
    { icon: "Users", title: "Women's welfare groups", line: "Groups running skill classes and savings support for local families." },
    { icon: "GraduationCap", title: "Youth and sports clubs", line: "Clubs that run coaching, tournaments and evening classes for children." },
  ],

  opportunities: {
    eyebrow: "Local causes",
    title: "What Pallavaram's member bodies work on",
    intro: "Streets and colonies, an old lake under pressure, and the families who work in the leather trade. Each cause has members who want a say in how money is spent.",
    // Pexels licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "Home", title: "Residents' associations", image: "https://images.pexels.com/photos/34878472/pexels-photo-34878472.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Neighbours sitting and talking beside a small roadside stall on a quiet Indian street", credit: "Pexels" },
      { icon: "Leaf", title: "Lake protection", image: "https://images.pexels.com/photos/7981878/pexels-photo-7981878.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Two Indian spot-billed ducks swimming side by side on still lake water", credit: "Pexels" },
      { icon: "HardHat", title: "Leather worker welfare", image: "https://images.pexels.com/photos/17994477/pexels-photo-17994477.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Craftsman's hands fitting a handmade leather sandal on a customer's foot", credit: "Pexels" },
      { icon: "GraduationCap", title: "Children's education", image: "https://images.pexels.com/photos/3381571/pexels-photo-3381571.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Children sitting on the floor of a bare brick building for an informal class", credit: "Pexels" },
    ],
  },

  highlights: {
    eyebrow: "Choosing the form",
    title: "Why a society usually fits a Pallavaram association",
    lead: "A trust is controlled by its trustees. A members' association needs elections, dues and a general body, and that is what a society is built for.",
    items: [
      { icon: "Users", label: "Tamil Nadu Societies Registration Act, 1975", title: "Society for member bodies", line: "At least seven members, a memorandum and bylaws, registered with the District Registrar.", highlight: true },
      { icon: "ScrollText", label: "Public charitable trust", title: "Trust for a welfare fund", line: "Suits a small group running a fund for workers' families, where a few trustees decide." },
      { icon: "Building2", label: "Companies Act, 2013", title: "Section 8 for larger projects", line: "Useful when a group expects CSR funding at scale, but it brings full ROC filings and audit." },
      { icon: "Percent", label: "Sections 332 and 354", title: "12A and 80G only if needed", line: "Worth it when outside donors give for charity. A dues-funded colony association may not need it." },
    ],
  },

  documentsSection: {
    title: "Papers for registering a Pallavaram society",
    lead: "Send these over WhatsApp or email. Most associations already have a members' register and minutes, which help a lot.",
  },
  documents: [
    { icon: "IdCard", title: "For each founding member", items: ["PAN and Aadhaar", "Passport size photo", "Address and occupation", "Signature on the memorandum"], hint: "At least seven members must sign. Office bearers are usually among them." },
    { icon: "Home", title: "For the registered office", items: ["EB bill or property tax receipt for the address", "Owner's no objection letter", "Rent agreement, if rented"], hint: "Many associations use a member's house or the colony's common hall." },
    { icon: "FileText", title: "For the association itself", items: ["Name and two alternatives", "Objects, such as civic work, lake protection or welfare", "Existing rules or minutes, if any", "Resolution of the general body to register"], hint: "If the association has a fund already, we note how it will move into the society's account." },
  ],
  documentsNote: {
    title: "Members spread across the colony?",
    sub: "Collect the IDs on a WhatsApp group and forward them to us. We'll check each one and flag what's missing.",
    message: "Hi National Filings, I'm collecting member documents for our Pallavaram association. Can I send them on WhatsApp?",
  },

  processSection: {
    title: "How a Pallavaram society gets registered",
    lead: "We work over WhatsApp and email. Members can also meet us at our Kundrathur office on the Pallavaram road.",
    cta: {
      title: "Start with a short call",
      sub: "Tell us the association's size, what it does and whether it collects dues. We'll explain the steps and the papers.",
      message: "Hi National Filings, we're a residents' group in Pallavaram. Can we have a call about registering a society?",
    },
  },
  steps: [
    { title: "Agree the basics", time: "First call", sub: "Name, objects, membership rules and who will sign as founding members." },
    { title: "Draft the bylaws", time: "3-5 days", sub: "Memorandum and bylaws covering dues, elections, meetings, accounts and dissolution." },
    { title: "File on TNREGINET", time: "1-2 days", sub: "Application and documents submitted to the District Registrar online." },
    { title: "Registrar's review", time: "2-6 weeks", sub: "Queries answered and corrections made until the certificate is issued." },
    { title: "PAN, bank and tax", time: "After registration", sub: "PAN and bank account, then 12A and 80G if the society will take outside donations." },
  ],
  processNote: "Timelines are estimates. The District Registrar and the Income Tax Department set their own pace, and we can't promise that 12A or 80G will be granted.",

  mistakesSection: {
    title: "Where Pallavaram associations go wrong",
    lead: "These are the problems we're most often asked to fix after a society is registered.",
  },
  mistakes: [
    { icon: "ScrollText", title: "Copied bylaws", problem: "An association borrows another colony's bylaws, which don't fit its own dues or election rules.", fix: "We write bylaws around your membership, dues and how your committee actually works." },
    { icon: "CalendarClock", title: "Yearly filings skipped", problem: "After registration, nobody files the annual accounts and members' list with the Registrar.", fix: "We set a reminder after each general body meeting and prepare the filing." },
    { icon: "Percent", title: "Applying for 80G with no donors", problem: "A colony group funded only by members' dues applies for 80G it will never use.", fix: "We check where the money comes from first. Dues paid for members' own benefit are not donations." },
    { icon: "Gavel", title: "Committee elected outside the bylaws", problem: "A new committee takes over without a proper general body meeting, and the old one disputes it.", fix: "We help draft notices and minutes so each change is on record with the Registrar." },
  ],

  costSection: {
    title: "What registering a Pallavaram association costs",
    lead: "There is a government fee and our fee. We give you both in writing before you start collecting member IDs.",
    cta: {
      title: "Ask for a written quote",
      sub: "Tell us whether it's a society or trust and whether you want 12A and 80G. We'll list each charge.",
      message: "Hi National Filings, can I get a quote to register our association in Pallavaram as a society?",
    },
  },
  costs: [
    { icon: "Stamp", label: "As per Tamil Nadu rates", title: "Registrar's fee", line: "Paid to the Registration Department when the society is filed." },
    { icon: "FilePen", label: "Quoted upfront", title: "Bylaws and filing", line: "Drafting, member document checks and the TNREGINET filing.", highlight: true },
    { icon: "Percent", label: "Quoted separately", title: "12A and 80G", line: "Only if the society will take donations from outside its membership." },
    { icon: "ClipboardCheck", label: "Quoted per year", title: "Yearly compliance", line: "Registrar filings, books and the income tax return." },
  ],

  compliance: {
    eyebrow: "Every year",
    title: "Keeping a Pallavaram society in good standing",
    lead: "Most societies that lose their standing simply stop filing. These are the yearly tasks.",
    items: [
      { icon: "Users", label: "Once a year", title: "General body meeting", line: "Accounts adopted and committee elected as the bylaws say." },
      { icon: "FileCheck2", label: "After the meeting", title: "Filing with the Registrar", line: "Accounts and the current members' list filed with the District Registrar." },
      { icon: "Calculator", label: "Every year", title: "Income tax return", line: "A society files a return, with an audit where the law needs one." },
      { icon: "RefreshCw", label: "Every five tax years", title: "12A and 80G renewal", line: "Regular registration under section 332 must be renewed before it expires." },
    ],
  },

  reasonsTitle: "Why Pallavaram groups register with us",
  reasons: [
    { icon: "Users", title: "Used to member bodies", line: "Residents' associations, lake groups and welfare funds each need different bylaws." },
    { icon: "MessageCircle", title: "Run on WhatsApp", line: "Drafts, member IDs and queries handled in one chat." },
    { icon: "MapPinned", title: "Kundrathur office nearby", line: "Up the Pallavaram road, open Monday to Saturday, 9 am to 7 pm." },
    { icon: "CalendarCheck", title: "Yearly filings reminded", line: "We remind you after each general body meeting." },
    { icon: "Award", title: "Experience since 2012", line: "Registration and compliance work for Chennai bodies and businesses." },
    { icon: "ReceiptText", title: "Fees agreed in writing", line: "Government fee and our fee shown separately." },
  ],

  faqTitle: "NGO registration in Pallavaram: what associations ask",
  faqs: [
    { q: "Should our Pallavaram residents' association be a trust or a society?", a: "A society, in most cases. Your members pay dues and expect to elect the committee, which is how a society works. A trust is run by its trustees, and ordinary residents would have no vote. A society under the Tamil Nadu Societies Registration Act, 1975 needs at least seven members, a memorandum and bylaws." },
    { q: "How does registration with the District Registrar work?", a: "The application, memorandum, bylaws and member documents are filed through TNREGINET with the District Registrar for your area. The Registrar may raise queries or ask for changes to the bylaws. Once satisfied, the Registrar issues the registration certificate. We draft the papers, file them and answer the queries." },
    { q: "What does a society have to file every year?", a: "After the annual general body meeting, the society files its accounts and the current members' list with the Registrar. It also keeps books, holds meetings as its bylaws say and files an income tax return. Missing these filings is the most common reason societies fall out of good standing." },
    { q: "Does a lake protection group need 12A and 80G?", a: "If people outside the group will donate for clean-up drives, surveys or legal work on the Periya Eri, yes, it is worth applying. 12A, now section 332 of the Income-tax Act, 2025, keeps the society's surplus out of tax, and 80G, now section 354, lets donors claim a deduction. A new society applies for provisional registration in Form 104 and the regular one in Form 105 once work starts. We can't promise approval." },
    { q: "Our colony association only collects maintenance dues. Is 80G useful?", a: "Usually not. Dues that members pay for their own colony's upkeep are not donations, and 80G approval is meant for charitable work for the public. It makes more sense if the association also runs open welfare work, such as a free health camp, and takes donations for it." },
    { q: "Can a welfare fund for leather and tannery workers be registered?", a: "Yes. Workers, their families or well-wishers can form a society if many members want a say, or a trust if a few people will manage the fund. The objects can cover medical help, children's education and safety awareness. With 12A and 80G, it can take tax-deductible donations, and with CSR-1 filed on the MCA portal it can carry out CSR projects for companies." },
    { q: "Do we have to come to your office?", a: "No. We have no office in Pallavaram, and most Pallavaram associations work with us over WhatsApp and email. If your committee prefers to meet, our office is in Karaima Nagar, Kundrathur, up the Pallavaram road, open Monday to Saturday, 9 am to 7 pm." },
  ],

  related: nearbyAreas("P4-A2"),
  relatedTitle: "NGO registration in areas near Pallavaram",

  final: {
    title: "Register your Pallavaram association",
    sub: "Message us with what your group does and how many members it has. We'll suggest the form, draft the bylaws and file with the Registrar.",
    message: "Hi National Filings, we run a residents' group in Pallavaram and want to register it as a society. Can you help?",
  },
  catalogue: ["Society registration for residents' associations in Pallavaram", "Lake protection and civic group registration in Pallavaram", "12A and 80G registration for Pallavaram NGOs"],
};
