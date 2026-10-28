import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { SERVICE, clusterHref, localityHref, pillarHref } from "./shared";

/**
 * P1-A7 · Company Registration in Porur (/chennai/company-registration-in-porur).
 * Primary keyword: "company registration in porur". We have no office in Porur; clients work with us over WhatsApp
 * and email, and can visit our Kundrathur office.
 * Angle: healthcare and IT services. Clinics, diagnostic labs, pharmacies and medical equipment suppliers around the
 * Sri Ramachandra campus, and IT consultants and small software firms along the Mount Poonamallee Road belt. The unique
 * section explains how to structure a healthcare business and which clinical licences sit outside company registration.
 *
 * Local facts checked (Oct 2026): Porur town panchayat was merged into the Greater Chennai Corporation in 2011; Porur is
 * in Maduravoyal taluk, Chennai district (moved from Tiruvallur district in 2018); PIN 600116; Sri Ramachandra Institute
 * of Higher Education and Research (health sciences university, with Sri Ramachandra Medical College) has its address
 * at 1 Ramachandra Nagar, Porur, Chennai 600116, though its campus is administered as part of Thelliyar Agaram in Mangadu
 * Municipality; DLF Cybercity Chennai, an IT SEZ, is on Mount Poonamallee Road at Ramapuram/Manapakkam; Commerzone Porur
 * is an IT park on Mount Poonamallee Road; Mount Poonamallee Road is an IT corridor linking Porur to GST Road; Arcot Road
 * links Porur Junction with Kodambakkam; Porur Junction is a very busy intersection; Porur Lake is one of the larger lakes
 * in the Chennai area and a drinking water source. Healthcare law: the Tamil Nadu Clinical Establishments (Regulation)
 * Act, 1997 (renamed by the 2018 amendment) requires clinical establishments to be registered; drug licences come under the
 * Drugs and Cosmetics Act. Company law facts as on the P1 cluster pages. Timelines are estimates.
 */

const whatsapp = "Hi National Filings, I'm in Porur and I'd like to register my clinic or company.";

export const porurPage: LicencePageData = {
  id: "P1-A7",
  service: SERVICE,
  meta: {
    title: "Company Registration in Porur, Chennai | National Filings",
    description: "Company registration in Porur for clinics, diagnostic labs, pharmacies and IT firms. Pvt Ltd, LLP or OPC, with GST and the next licences mapped.",
  },
  hero: {
    headline: { line1: "Company Registration", line2Before: "in Porur, ", accent: "Clinic to Code" },
    sub: "Porur is home to a major health sciences campus and a belt of IT parks. Whether you are opening a lab near the Sri Ramachandra campus or billing clients from an IT park, we register the right entity online and tell you which health or tax registrations follow.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "Stethoscope",
    kicker: "Porur, Chennai 600116",
    title: "Certificate of Incorporation",
    line: "Your Porur Business",
    stamp: "CIN issued",
    chips: ["Clinics and labs", "IT and consulting", "Pvt Ltd or LLP"],
    steps: ["Brief", "DSC", "Name", "SPICe+", "CIN"],
  },

  benefitsSection: {
    title: "What a registered entity gives a Porur clinic or tech firm",
    lead: "Hospitals, insurers and corporate clients in Porur all ask the same first question: who exactly are we contracting with? A company or LLP answers it cleanly.",
    cta: {
      title: "Starting a clinic, lab or software firm?",
      sub: "Tell us who your patients or clients are and how many of you are investing. We'll suggest a structure and explain why.",
      message: "Hi National Filings, I'm starting a healthcare or IT business in Porur. Which registration fits?",
    },
  },
  benefits: [
    { icon: "Stethoscope", title: "Separate from the doctor", line: "The entity owns the equipment and lease, while each doctor keeps their own medical registration." },
    { icon: "ShieldCheck", title: "Personal assets protected", line: "Limited liability matters when you sign costly equipment leases or long rental deals." },
    { icon: "Handshake", title: "Empanelment paperwork", line: "Hospital tie-ups and corporate health contracts ask for entity PAN, GST and bank details." },
    { icon: "Banknote", title: "Equipment finance", line: "Lenders assess a lab or scan centre on the entity's own books and filings." },
    { icon: "Laptop", title: "Client contracts for IT work", line: "Larger IT clients often onboard vendors as companies, not individuals." },
    { icon: "Users", title: "Room for co-founders", line: "Shares or LLP contributions record who put in what, from day one." },
    { icon: "TrendingUp", title: "Second branch, same entity", line: "Open another collection centre or office without forming a new business." },
    { icon: "BadgeCheck", title: "A name you can protect", line: "Register the entity first, then file a trademark for the clinic or product name." },
  ],

  applicantsSection: {
    title: "Porur businesses we register",
    lead: "Most enquiries from Porur come from two worlds: people who serve patients and people who write software. These are the ones we hear from most.",
  },
  applicants: [
    { icon: "Stethoscope", title: "Clinics and polyclinics", line: "Single doctors and group practices setting up near residential streets." },
    { icon: "SearchCheck", title: "Diagnostic and pathology labs", line: "Labs and sample collection centres serving patients and hospitals." },
    { icon: "Store", title: "Pharmacies", line: "Retail chemists planning a second counter or a wholesale line." },
    { icon: "Package", title: "Medical equipment suppliers", line: "Dealers in devices, consumables and hospital furniture." },
    { icon: "Laptop", title: "IT consultants", line: "Developers and testers who now bill clients through a company." },
    { icon: "Rocket", title: "Small software firms", line: "Product and services start-ups with two or three founders." },
    { icon: "GraduationCap", title: "Healthcare training providers", line: "Coaching for nursing, allied health and medical coding." },
    { icon: "Headset", title: "Medical billing and back office", line: "Teams handling claims, transcription and support work." },
  ],

  opportunities: {
    eyebrow: "Local sectors",
    title: "Porur's two big engines: healthcare and IT",
    intro: "The Sri Ramachandra health sciences university and medical college sit in Porur, while DLF Cybercity at Ramapuram and Commerzone on Mount Poonamallee Road anchor the IT side. Around both, clinics, labs, suppliers and consultants keep setting up.",
    // Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "Stethoscope", title: "Clinics and doctors", image: "https://images.unsplash.com/photo-1637059824899-a441006a6875?auto=format&fit=crop&w=1600&q=90", alt: "Doctor with a stethoscope standing with arms crossed in a hospital corridor", credit: "vaibhav vivian / Unsplash" },
      { icon: "SearchCheck", title: "Diagnostic labs", image: "https://images.unsplash.com/photo-1606206591513-adbfbdd7a177?auto=format&fit=crop&w=1600&q=90", alt: "Rows of blood collection tubes with coloured caps in a laboratory rack", credit: "Testalize.me / Unsplash" },
      { icon: "Store", title: "Pharmacies and supplies", image: "https://images.unsplash.com/photo-1577401132921-cb39bb0adcff?auto=format&fit=crop&w=1600&q=90", alt: "Pile of blister packs holding colourful tablets and capsules", credit: "Volodymyr Hryshchenko / Unsplash" },
      { icon: "Laptop", title: "IT and software services", image: "https://images.unsplash.com/photo-1753450298481-362990f811ea?auto=format&fit=crop&w=1600&q=90", alt: "Software developer smiling at his desk with a laptop and a large monitor", credit: "litoon dev / Unsplash" },
    ],
  },

  highlights: {
    eyebrow: "Registering a healthcare business",
    title: "Structuring a clinic, lab or pharmacy in Porur",
    lead: "The entity you choose and the health licences you need are two separate tracks. We set up the first and make sure you know about the second before you sign a lease.",
    items: [
      { icon: "UserRound", label: "One doctor", title: "Proprietorship or OPC", line: "A doctor running one clinic can start as a proprietor. An OPC adds limited liability once equipment and staff costs grow." },
      { icon: "Handshake", label: "Group practice", title: "LLP for doctor partners", line: "Two or more doctors, or a doctor with a business partner, can set out capital, profit share and exit terms in an LLP agreement." },
      { icon: "Building2", label: "Labs and suppliers", title: "Private limited company", line: "Suits a diagnostic lab, scan centre or equipment dealer that needs bank finance, several branches or outside investors.", highlight: true },
      { icon: "FileWarning", label: "Separate approvals", title: "Clinical and drug licences", line: "Clinics and labs must register under the Tamil Nadu Clinical Establishments (Regulation) Act, 1997, and a pharmacy needs a drug licence. Company registration covers neither." },
    ],
  },

  documentsSection: {
    title: "Documents for company registration in Porur",
    lead: "Everything can be sent as clear photos or PDFs on WhatsApp or email. Names and addresses must match across every document.",
  },
  documents: [
    { icon: "UserRound", title: "For each director or partner", items: ["PAN card", "Aadhaar, passport or voter ID", "Bank statement or utility bill, under two months old", "Passport-size photo", "Mobile number and email ID"], hint: "Doctors can use the same personal KYC. Medical council details are not part of the MCA filing." },
    { icon: "Home", title: "For your Porur premises", items: ["Latest electricity bill for the clinic, lab or office", "Rent or lease agreement, if rented", "No objection letter from the owner"], hint: "If you work from an IT park or shared office, ask the operator early for the bill and NOC in the right format." },
    { icon: "FileText", title: "For the business plan", items: ["Two or three name ideas", "Services you will offer now and later", "Capital or partner contributions", "Shareholding or profit-sharing ratio"], hint: "Write healthcare and IT objects broadly enough to cover the services you plan to add." },
  ],
  documentsNote: {
    title: "Working from a co-working desk or IT park?",
    sub: "Send us the operator's bill and NOC. We'll check that the address details will be accepted before anything is filed.",
    message: "Hi National Filings, my office is in an IT park near Porur. Can you check my address documents?",
  },

  processSection: {
    title: "How we register a Porur business, step by step",
    lead: "All of it happens online, so you don't need to leave the clinic or the office. Companies and LLPs are usually registered within two to three weeks of complete documents.",
    cta: {
      title: "Send us a two-line brief",
      sub: "Your services, the number of founders and where you'll operate. We'll reply with a checklist and a written quote.",
      message: "Hi National Filings, I'd like to register a business in Porur. Here is a short brief.",
    },
  },
  steps: [
    { title: "Brief and structure", time: "Day 1", sub: "We look at your services, founders and funding, then agree the structure and the quote." },
    { title: "Digital signatures", time: "1-2 days", sub: "A DSC for each director or designated partner, issued after video or OTP verification." },
    { title: "Name reservation", time: "2-4 working days", sub: "We test your names against MCA records and existing trademarks before applying." },
    { title: "Incorporation forms", time: "After name approval", sub: "SPICe+ with the MOA and AOA for a company, or FiLLiP for an LLP." },
    { title: "Certificate, then licences", time: "On approval", sub: "Certificate with PAN and TAN, then GST, bank account and the health or trade licences you need." },
  ],
  processNote: "Timelines are estimates. MCA workload, name objections and resubmissions can add time.",

  mistakesSection: {
    title: "Where Porur founders often go wrong",
    lead: "These come up again and again with clinics, labs and software start-ups. Each is simple to avoid when it is spotted at the start.",
  },
  mistakes: [
    { icon: "FileWarning", title: "Treating the CIN as a clinic licence", problem: "A lab opens the week the company is registered, assuming that is the only approval it needs.", fix: "We flag the clinical establishment registration and other health approvals as a separate step." },
    { icon: "ListTree", title: "Objects written too narrowly", problem: "The MOA covers only a pharmacy, then the owners add a diagnostics counter or home care.", fix: "We draft objects that cover the services you run today and the ones you plan next." },
    { icon: "Users", title: "No founder agreement", problem: "Two developers split shares equally with nothing on vesting or what happens if one leaves.", fix: "We point you to a shareholders' or LLP agreement that covers exits before you start." },
    { icon: "MapPinned", title: "Assuming every Porur address is corporation land", problem: "Owners plan the trade licence with the Chennai corporation, but the premises fall under a neighbouring local body.", fix: "We check the bill and property tax receipt to see which local body covers your address." },
  ],

  costSection: {
    title: "What it costs to register a Porur business",
    lead: "The total depends on the structure, the number of directors or partners and the capital. We list every item in writing before you pay.",
    cta: {
      title: "Ask for a written quote",
      sub: "Tell us the structure, number of founders and capital. You'll get government fees, stamp duty and our fee line by line.",
      message: "Hi National Filings, can I get a quote for registering my Porur business?",
    },
  },
  costs: [
    { icon: "Signature", label: "Per person", title: "Digital signatures", line: "Needed for each director, designated partner or subscriber." },
    { icon: "Landmark", label: "Depends on structure", title: "MCA fees", line: "No MCA filing fee for a company with authorised capital up to ₹15 lakh. LLP fees vary with contribution.", highlight: true },
    { icon: "Stamp", label: "Tamil Nadu rates", title: "Stamp duty", line: "Charged on the MOA and AOA, or on the LLP agreement." },
    { icon: "Headset", label: "Fixed in advance", title: "Our professional fee", line: "Structuring advice, drafting, filing, query replies and a checklist of follow-on licences." },
  ],

  compliance: {
    eyebrow: "After registration",
    title: "Registrations Porur clinics and IT firms usually need next",
    lead: "Which of these apply depends on what you do and how many people you hire. We handle the tax and labour ones and point you to the right office for health approvals.",
    items: [
      { icon: "ReceiptIndianRupee", label: "Depends on your services", title: "GST registration", line: "Healthcare services by clinics and labs are largely exempt, but IT work and sales of medicines or equipment are not. We check first." },
      { icon: "Stethoscope", label: "Clinics and labs", title: "Clinical establishment registration", line: "Required in Tamil Nadu before a clinic or lab operates, alongside other health approvals." },
      { icon: "Users", label: "When you hire", title: "PF and ESI", line: "Staff-heavy labs and software teams reach the limits quickly. Registration, then monthly returns." },
      { icon: "Calculator", label: "Every year", title: "ROC and income tax filings", line: "Annual returns, financial statements and the tax return, on time each year." },
    ],
  },

  reasonsTitle: "Why Porur businesses choose National Filings",
  reasons: [
    { icon: "MessageCircle", title: "Fully online", line: "Documents, signatures and updates over WhatsApp and email. No need to leave your clinic." },
    { icon: "Stethoscope", title: "We know healthcare set-ups", line: "We separate what MCA needs from what the health department needs." },
    { icon: "ReceiptText", title: "Fees in writing", line: "Government fees, stamp duty and our fee shown line by line." },
    { icon: "UserCheck", title: "One person, start to finish", line: "The same expert handles your filing from DSC to certificate." },
    { icon: "MapPinned", title: "An office you can visit", line: "Meet us at our Kundrathur office if you'd rather talk face to face." },
    { icon: "Award", title: "Experience since 2012", line: "Registration, tax and compliance work for Chennai businesses." },
  ],

  faqTitle: "Company registration in Porur: your questions",
  faqs: [
    { q: "Do you have an office in Porur?", a: "No. Our only office is in Karaima Nagar, Kundrathur. Porur clients usually work with us entirely over WhatsApp and email, since company and LLP registration is filed online. You are welcome to visit Kundrathur if you prefer to meet." },
    { q: "Can a doctor register a clinic as a private limited company?", a: "Yes, a company or LLP can own and run a clinic, with qualified doctors providing the medical services. The entity holds the premises, equipment and staff contracts. The doctors' own medical registrations stay personal and are not transferred to the company." },
    { q: "Does company registration let me open a diagnostic lab straight away?", a: "No. In Tamil Nadu a clinical establishment, which includes labs, has to be registered under the Tamil Nadu Clinical Establishments (Regulation) Act, 1997, and other health approvals may apply. That is a separate application from the MCA registration, and we tell you about it at the start." },
    { q: "I want to open a pharmacy. What comes first, the company or the drug licence?", a: "Usually the entity comes first, so the drug licence under the Drugs and Cosmetics Act is issued in its name. The licence has its own conditions on premises and a registered pharmacist, so plan both together before signing a lease." },
    { q: "I'm an IT consultant near DLF Cybercity. Should I form an OPC or a private limited company?", a: "An OPC suits a single founder who wants limited liability and a company that clients can onboard. If you expect a co-founder or investors soon, a private limited company saves a conversion later. We'll compare the yearly compliance for both." },
    { q: "My clinic's address says Porur. Which local body issues the trade licence?", a: "Most of Porur has been part of the Greater Chennai Corporation since 2011, but some addresses with a Porur postal label fall under neighbouring local bodies, such as Mangadu Municipality. The electricity bill and property tax receipt tell us which one applies." },
    { q: "How long does it take to register a company in Porur?", a: "Usually two to three weeks from complete documents to the Certificate of Incorporation, as anywhere in Tamil Nadu. Health licences, GST and PF or ESI take their own time after that." },
  ],

  related: [
    { icon: "Building2", label: "Company registration in Chennai", href: pillarHref("P1") },
    { icon: "MapPinned", label: "Company registration in Mangadu", href: localityHref("P1-A8") },
    { icon: "MapPinned", label: "Company registration in Iyyappanthangal", href: localityHref("P1-A11") },
    { icon: "Building2", label: "Private limited registration", href: clusterHref("P1-C6") },
    { icon: "Handshake", label: "LLP registration", href: clusterHref("P1-C1") },
    { icon: "UserRound", label: "One person company registration", href: clusterHref("P1-C2") },
    { icon: "ReceiptIndianRupee", label: "GST registration", href: clusterHref("P2-C1") },
    { icon: "Users", label: "PF and ESI registration", href: clusterHref("P6-C1") },
  ],
  relatedTitle: "Related registration services near Porur",

  final: {
    title: "Set up your Porur clinic, lab or IT firm properly",
    sub: "Message us with what you plan to run. We'll confirm the structure, documents, follow-on licences and fees before we start.",
    message: "Hi National Filings, I'd like to register my business in Porur.",
  },
  catalogue: ["Private limited company registration in Porur", "LLP registration for clinics and labs in Porur", "OPC registration for IT consultants in Porur"],
};
