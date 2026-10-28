import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { SERVICE, clusterHref, localityHref, pillarHref } from "./shared";

/**
 * P1-A5 · Company Registration in Chromepet (/chennai/company-registration-in-chromepet).
 * Primary keyword: "company registration in chromepet". Angle: students and young founders. Tech and engineering
 * startups coming out of college, freelancers turning into companies, DPIIT startup recognition, and the retailers
 * and clinics along GST Road. Kept distinct from Kundrathur (P1-A1) and Pallavaram (P1-A2): different trades, headings and FAQs.
 *
 * Local facts checked (Oct 2026): Chromepet is in Chengalpattu district, PIN 600044, and is governed by Tambaram City
 * Municipal Corporation (it was earlier part of Pallavaram Municipality); the name comes from the Chrome Leather Company,
 * set up in the area in 1912; Madras Institute of Technology was founded at Chromepet in 1949 and is one of the
 * constituent colleges of Anna University; Chromepet railway station is on the Chennai suburban line towards Tambaram;
 * GST Road runs through it and the MIT flyover links it to Hasthinapuram and Chitlapakkam; Government Hospital,
 * Chromepet serves the area. DPIIT recognition (framework notified Feb 2026): private limited companies, LLPs,
 * registered partnership firms and cooperatives, up to 10 years from incorporation, within the notified turnover limit,
 * applied for on the Startup India portal; Section 80-IAC tax relief is a separate approval. Timelines are estimates.
 */

const whatsapp = "Hi National Filings, I'm in Chromepet and I want to turn my project or freelance work into a company.";

export const chromepetPage: LicencePageData = {
  id: "P1-A5",
  service: SERVICE,
  meta: {
    title: "Company Registration in Chromepet | National Filings",
    description: "Company registration in Chromepet for student founders, freelancers, tech startups and GST Road shops. Pvt Ltd, OPC or LLP, plus DPIIT startup help.",
  },
  hero: {
    headline: { line1: "Company Registration", line2Before: "in Chromepet, ", accent: "From Campus Up" },
    sub: "Built something in college, or billing clients as a freelancer? We help Chromepet founders choose between OPC, private limited and LLP, put the co-founder terms in writing and file with the MCA.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "Rocket",
    kicker: "Chromepet, Chengalpattu",
    title: "Certificate of Incorporation",
    line: "Your Chromepet Business",
    stamp: "CIN issued",
    chips: ["Co-founder shares fixed", "OPC or Pvt Ltd", "DPIIT ready"],
    steps: ["Idea", "Founders", "DSC", "SPICe+", "CIN"],
  },

  benefitsSection: {
    title: "Why young Chromepet founders incorporate early",
    lead: "A project with paying users, or a freelancer with steady clients, soon needs a legal home. Incorporating at the right moment saves arguments and rework later.",
    cta: {
      title: "Still a student or just graduated?",
      sub: "Tell us what you've built, who is in the team and who pays you. We'll tell you whether it's time to incorporate and in what form.",
      message: "Hi National Filings, we're a student team from Chromepet. Is it the right time to register a company?",
    },
  },
  benefits: [
    { icon: "Handshake", title: "Co-founder terms on record", line: "Shares, roles and vesting agreed before money or users arrive." },
    { icon: "Rocket", title: "Eligible for DPIIT recognition", line: "A company or LLP can apply as a startup on the Startup India portal." },
    { icon: "Banknote", title: "Ready for angel money", line: "Investors put money into shares, which only a company can issue." },
    { icon: "Laptop", title: "Invoices clients accept", line: "Agencies and foreign clients often prefer billing a company over a freelancer." },
    { icon: "KeyRound", title: "Code and IP owned by the business", line: "Founders can assign what they built to the company, not keep it personally." },
    { icon: "ShieldCheck", title: "Personal savings protected", line: "Liability stays with the company if a contract or product fails." },
    { icon: "Users", title: "Hire your juniors properly", line: "A registered entity can sign offer letters, pay salaries and later grant ESOPs." },
    { icon: "Store", title: "A firmer footing for shops", line: "GST Road retailers and clinics get a separate set of books from the family's." },
  ],

  applicantsSection: {
    title: "Chromepet founders who come to us",
    lead: "With an engineering campus, a suburban station and a long retail stretch on GST Road, Chromepet produces founders of every age. These are the ones we hear from most.",
  },
  applicants: [
    { icon: "GraduationCap", title: "Engineering student teams", line: "Final-year projects that already have users or a pilot customer." },
    { icon: "Zap", title: "Hardware and electronics startups", line: "Drones, IoT devices and embedded products built on a workbench." },
    { icon: "Laptop", title: "Freelance developers and designers", line: "Solo professionals whose client work has outgrown a personal account." },
    { icon: "Globe", title: "Remote workers for foreign clients", line: "People billing overseas firms who want a company to invoice from." },
    { icon: "Store", title: "GST Road retailers", line: "Textile, jewellery and electronics shops ready to formalise." },
    { icon: "Stethoscope", title: "Clinics and diagnostic centres", line: "Doctors setting up a practice or lab as an LLP or company." },
    { icon: "GraduationCap", title: "Coaching and tuition centres", line: "Entrance exam and skills coaching run near the colleges." },
    { icon: "Coffee", title: "Cafes and food outlets", line: "Student-facing food businesses that also need FSSAI registration." },
  ],

  opportunities: {
    eyebrow: "Local sectors",
    title: "What Chromepet's founders are building",
    intro: "Chromepet takes its name from the Chrome Leather Company, set up here in 1912. Today the energy comes from the Madras Institute of Technology campus, the station crowd and the shops lining GST Road.",
    // Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "Zap", title: "Electronics and hardware", image: "https://images.unsplash.com/photo-1640955785023-1854685dae05?auto=format&fit=crop&w=1600&q=90", alt: "Tweezers placing a small microchip on a green circuit board", credit: "Vishnu Mohanan / Unsplash" },
      { icon: "GraduationCap", title: "Student-led startups", image: "https://images.unsplash.com/photo-1686624386665-4cd01b96d0f6?auto=format&fit=crop&w=1600&q=90", alt: "Young men in white shirts writing notes together at a table", credit: "Aswin Thomas Bony / Unsplash" },
      { icon: "ShoppingBag", title: "GST Road retail", image: "https://images.unsplash.com/photo-1760786933027-fe2ad82957f9?auto=format&fit=crop&w=1600&q=90", alt: "Shelves stacked with rows of colourful bangles in a shop", credit: "Zoshua Colah / Unsplash" },
      { icon: "Stethoscope", title: "Pharmacies and clinics", image: "https://images.unsplash.com/photo-1683520701495-1888fa4633b1?auto=format&fit=crop&w=1600&q=90", alt: "Pharmacist standing at the counter of a medicine shop", credit: "Frederick Shaw / Unsplash" },
    ],
  },

  highlights: {
    eyebrow: "Student to founder",
    title: "From college project to company",
    lead: "Most campus teams get excited about the product and leave the legal side for later. These four decisions are the ones worth making first.",
    items: [
      { icon: "FileSignature", label: "Before you incorporate", title: "A founders' agreement", line: "Write down who does what, who owns the code, and what happens if someone leaves after graduation." },
      { icon: "Percent", label: "Equity split", title: "Shares with vesting", line: "Splitting equally on day one is common and often regretted. Vesting over a few years keeps it fair if a founder walks away.", highlight: true },
      { icon: "Shuffle", label: "OPC or private limited", title: "One founder or a team", line: "An OPC suits a solo founder. A team, or anyone planning to raise money, is usually better off as a private limited company." },
      { icon: "Rocket", label: "After incorporation", title: "DPIIT recognition", line: "A company, LLP or registered partnership under 10 years old and within the turnover limit can apply on the Startup India portal." },
    ],
  },

  documentsSection: {
    title: "Documents for company registration in Chromepet",
    lead: "Founders can send everything over WhatsApp from a hostel room or home. Make sure each person's name reads the same on every ID.",
  },
  documents: [
    { icon: "IdCard", title: "For every founder", items: ["PAN card", "Aadhaar, passport or driving licence", "Recent bank statement or mobile bill showing the current address", "Photograph", "Personal mobile number and email ID"], hint: "Students living in a hostel can use their home address, as long as the proof is recent." },
    { icon: "Home", title: "For the registered office", items: ["Electricity bill for the address", "Rent agreement, if rented", "Owner's no objection letter, often from a parent"], hint: "A parent's house in Chromepet is a common first registered office. Moving it later is a simple filing." },
    { icon: "FileText", title: "For the startup itself", items: ["Proposed names", "One paragraph on what you build or sell", "Share split between founders", "Any founders' agreement already signed"], hint: "We use the share split to draft the subscriber details and the AOA." },
  ],
  documentsNote: {
    title: "Some founders still in college?",
    sub: "Students over 18 with a PAN can be directors and shareholders. Send us each founder's details and we'll check them before the DSCs are ordered.",
    message: "Hi National Filings, some of our founders are still students in Chromepet. Can they be directors?",
  },

  processSection: {
    title: "How a Chromepet startup gets incorporated",
    lead: "Founders agree the terms, we file, and the company usually exists within two to three weeks of complete documents. DPIIT recognition is a separate online application after that.",
    cta: {
      title: "Talk it through with your co-founders",
      sub: "Get everyone on one call. We'll explain the options, then send a checklist and a written quote.",
      message: "Hi National Filings, can we set up a call with our Chromepet founding team about company registration?",
    },
  },
  steps: [
    { title: "Founder call", time: "Day 1", sub: "Structure, share split, directors and business objects agreed with the whole team." },
    { title: "DSC for each director", time: "1-2 days", sub: "Digital signatures issued after online video and mobile verification." },
    { title: "Name reservation", time: "2-4 working days", sub: "Startup names checked against companies and trademarks before we apply." },
    { title: "SPICe+ filing", time: "After the name is approved", sub: "MOA, AOA and the forms filed together, with PAN and TAN applied for in the same go." },
    { title: "Certificate, bank and DPIIT", time: "On approval", sub: "Certificate issued, current account opened, then the Startup India application if you qualify." },
  ],
  processNote: "Timelines are estimates. MCA processing, name objections and resubmissions can add time.",

  mistakesSection: {
    title: "Where first-time founders in Chromepet slip up",
    lead: "These come up again and again with student teams and freelancers. All of them are cheaper to fix before filing than after.",
  },
  mistakes: [
    { icon: "Percent", title: "Equal split, no vesting", problem: "Four friends take 25% each. One leaves after a semester and still owns a quarter of the company.", fix: "We help you set out vesting and exit terms in a founders' agreement before shares are issued." },
    { icon: "KeyRound", title: "Code still owned personally", problem: "The product was written before the company existed, and nothing transfers it to the company.", fix: "We prepare an IP assignment from the founders to the company, which investors ask to see." },
    { icon: "UserRound", title: "OPC for a team", problem: "A solo founder picks an OPC, then brings in co-founders and an angel investor within months.", fix: "If others are likely to join soon, we usually suggest a private limited company from the start." },
    { icon: "Rocket", title: "Expecting tax relief from DPIIT alone", problem: "The team assumes startup recognition means no income tax.", fix: "We explain that the Section 80-IAC deduction needs its own approval, applied for separately." },
  ],

  costSection: {
    title: "Company registration fees for Chromepet startups",
    lead: "Cost depends on the number of founders, the structure and the authorised capital. Student teams get the same itemised breakdown as everyone else.",
    cta: {
      title: "Get a quote for your team",
      sub: "Tell us how many founders, which structure and the capital you have in mind. We'll list each fee separately.",
      message: "Hi National Filings, can I get a quote to register our startup in Chromepet?",
    },
  },
  costs: [
    { icon: "Signature", label: "One per director", title: "Digital signatures", line: "Every founder who signs the incorporation forms needs a DSC." },
    { icon: "Landmark", label: "Usually nil for startups", title: "MCA filing fee", line: "No MCA fee for incorporating a company with authorised capital of ₹15 lakh or less.", highlight: true },
    { icon: "Stamp", label: "Tamil Nadu rates", title: "Stamp duty", line: "Payable on the MOA and AOA, based on the authorised capital." },
    { icon: "Headset", label: "Fixed before we start", title: "Our professional fee", line: "Structure advice, drafting, filing and help with the Startup India application." },
  ],

  compliance: {
    eyebrow: "After registration",
    title: "What a new Chromepet company usually sets up next",
    lead: "Incorporation is the start. These are the registrations founders around Chromepet most often add in the first year.",
    items: [
      { icon: "Rocket", label: "For eligible startups", title: "DPIIT recognition", line: "Applied for on the Startup India portal, with a short note on what is innovative about your work." },
      { icon: "ReceiptIndianRupee", label: "When turnover or clients need it", title: "GST registration", line: "Needed above the threshold, and often earlier if you sell to businesses or export services." },
      { icon: "ShieldCheck", label: "Protect the brand", title: "Trademark", line: "File for your product name before launch, so nobody else can claim it." },
      { icon: "CalendarCheck", label: "Every year", title: "ROC filings", line: "Board meetings, auditor appointment and annual returns, which we track for you." },
    ],
  },

  reasonsTitle: "Why Chromepet founders choose National Filings",
  reasons: [
    { icon: "MessageCircle", title: "Built for busy founders", line: "Documents, signatures and updates over WhatsApp and email. No office visits needed." },
    { icon: "Rocket", title: "Startup-aware advice", line: "Vesting, IP assignment and DPIIT recognition explained in plain words." },
    { icon: "ReceiptText", title: "Every fee written down", line: "Government fees, stamp duty and our charge shown line by line." },
    { icon: "MapPinned", title: "Office in Kundrathur", line: "Our only office is in Karaima Nagar, Kundrathur, if your team would rather meet." },
    { icon: "Award", title: "Working since 2012", line: "Registration, tax and compliance for Chennai businesses of every size." },
    { icon: "CalendarClock", title: "First-year compliance tracked", line: "We remind you of the first board meeting, auditor and annual filings." },
  ],

  faqTitle: "Company registration in Chromepet: founders ask",
  faqs: [
    { q: "Can a college student be a director of a company?", a: "Yes. Anyone 18 or older with a PAN and valid ID can be a director and shareholder. Many founders register while still in their final year. The only practical limit is time, since directors carry legal responsibilities." },
    { q: "Should a solo founder in Chromepet choose an OPC or a private limited company?", a: "An OPC works if you are truly building alone and don't expect outside investors soon. If co-founders or angel investors are likely within a year or two, start as a private limited company, because converting an OPC later is extra work." },
    { q: "What is DPIIT recognition and can my new company apply?", a: "It is the government's recognition of a business as a startup, applied for on the Startup India portal. A private limited company, LLP or registered partnership firm can apply if it is under 10 years old, within the turnover limit and working on an innovative or scalable product, process or service." },
    { q: "Does DPIIT recognition mean my startup pays no income tax?", a: "No. Recognition is the first step. The income tax deduction under Section 80-IAC needs a separate approval, and only some recognised startups receive it." },
    { q: "I freelance for foreign clients from home. Should I form a company?", a: "It depends on your income and plans. A company gives you limited liability and a business identity clients trust, but adds yearly ROC filings and an audit. We'll compare it with staying a proprietor before you decide." },
    { q: "Can I use my parents' house in Chromepet as the registered office?", a: "Yes. You need a recent electricity bill for the house and a no objection letter from the owner. If you later move to a co-working space or office, the registered office can be shifted with a simple filing." },
    { q: "Do I need to come to your office to register?", a: "No. Our only office is in Kundrathur, and most Chromepet founders never visit. Signatures are digital and documents travel over WhatsApp and email. You're welcome to come in if your team prefers to meet." },
  ],

  related: [
    { icon: "Building2", label: "Company registration in Chennai", href: pillarHref("P1") },
    { icon: "MapPinned", label: "Company registration in Tambaram", href: localityHref("P1-A6") },
    { icon: "MapPinned", label: "Company registration in Pallavaram", href: localityHref("P1-A2") },
    { icon: "Building2", label: "Private limited registration", href: clusterHref("P1-C6") },
    { icon: "UserRound", label: "One person company registration", href: clusterHref("P1-C2") },
    { icon: "Handshake", label: "LLP registration", href: clusterHref("P1-C1") },
    { icon: "ShieldCheck", label: "Trademark registration", href: pillarHref("P5") },
    { icon: "ReceiptIndianRupee", label: "GST registration", href: clusterHref("P2-C1") },
  ],
  relatedTitle: "Related registration services near Chromepet",

  final: {
    title: "Turn your Chromepet idea into a registered company",
    sub: "Tell us about the team and the product. We'll suggest the structure, help settle the founder terms and confirm every fee before filing.",
    message: "Hi National Filings, I'd like to register my startup in Chromepet.",
  },
  catalogue: ["Private limited company registration in Chromepet", "One person company registration in Chromepet", "DPIIT startup recognition for Chromepet founders"],
};
