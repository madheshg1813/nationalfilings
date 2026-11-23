import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { NGO_SERVICE, nearbyAreas } from "./shared";

/**
 * P4-A7 · NGO Registration in Porur (/chennai/ngo-registration-in-porur).
 * Primary keyword: "ngo registration in porur". We have no office in Porur; clients work with us over WhatsApp and email,
 * and can visit our Kundrathur office.
 * Angle: health charities near the hospital belt: patient support groups, free medical camps, blood donation drives,
 * dialysis and cancer treatment support funds. Unique sections: the best structure for a health charity, CSR money for
 * health projects (CSR-1, Schedule VII item (i)) and 12A/80G under the new Act. Kept distinct from the company (P1-A7),
 * GST (P2-A7) and income tax (P3-A7) pages for Porur and from the NGO cluster pages P4-C1 to P4-C4.
 *
 * Local facts (reused from the verified P1-A7 JSDoc): Porur is in Maduravoyal taluk, Chennai district, PIN 600116; Sri
 * Ramachandra Institute of Higher Education and Research (health sciences university with a medical college) has its address
 * at 1 Ramachandra Nagar, Porur; Mount Poonamallee Road is the IT corridor through Porur, with IT parks such as DLF
 * Cybercity and Commerzone; the Tamil Nadu Clinical Establishments (Regulation) Act, 1997 requires clinical establishments
 * to be registered.
 *
 * Facts checked (Nov 2026):
 * - Tamil Nadu has no separate public trusts act; a public charitable trust is created by a trust deed registered with the
 *   Sub-Registrar (TNREGINET). Societies register under the Tamil Nadu Societies Registration Act, 1975 with the District
 *   Registrar. Section 8, Companies Act, 2013: charitable objects, no dividends, licence through SPICe+, at least two
 *   directors for a private Section 8 company, no minimum capital. (as verified on P4-C1, P4-C2, P4-C3; tnreginet.gov.in, mca.gov.in)
 * - Income-tax Act, 2025 from 1 April 2026: registration of non-profits (formerly 12A/12AB) is section 332; donor approval
 *   (formerly 80G) is section 354; the donor's deduction sits in section 133. Form 104 is the application for provisional
 *   registration/approval for new organisations; provisional status lasts three tax years, or until six months from the start
 *   of activities if earlier, after which Form 105 is filed for regular registration. Regular registration/approval is valid
 *   for five tax years. Registrations under the old Act stay valid until they expire (section 536).
 *   (incometax.gov.in Form 104 & 106 FAQs and user manual; incometaxindia.gov.in/documents/d/guest/form-105-faqs;
 *   taxguru.in/income-tax/trust-registration-renewal-income-tax-act-2025-form-105-documents-required.html; taxclue.in)
 * - 85% of regular income to be applied or accumulated; accumulation up to five years with Form 109; anonymous donations above
 *   the higher of ₹1 lakh or 5% of total donations taxed at 30% (section 337), so donor details must be recorded.
 *   (carajput.com/learn/taxation-of-npos-under-i-tax-act-2025-guide-for-trusts-societies.html)
 * - CSR: Companies (CSR Policy) Rules, rule 4(1): an implementing agency must be a Section 8 company, registered public trust
 *   or registered society holding 12A and 80G registration, with a track record of at least three years in similar
 *   activities, and must register with the MCA in Form CSR-1 (from 1 April 2021). CSR-1 was substituted with effect from
 *   14 July 2025 and needs certification by a practising CA, CS or Cost Accountant. Schedule VII item (i) covers
 *   "eradicating hunger, poverty and malnutrition, promoting health care including preventive health care and sanitation
 *   ... and making available safe drinking water"; MCA General Circular 21/2014 says entries are read liberally.
 *   (ca2013.com CSR Amendment Rules 2021 and revised e-form CSR-1 w.e.f. 14.07.2025; csr.odisha.gov.in Schedule VII list;
 *   taxmann.com CSR and implementation agencies)
 * - FCRA: registration (FC-3A) needs at least three years of existence and at least ₹15 lakh spent on core activities in the
 *   last three years, excluding admin costs; newer organisations can seek prior permission (FC-3B) for a specific grant.
 *   (greaterkashmir.com "Govt tightens rules for NGOs..."; patronaccounting.com FCRA registration guide, Apr 2026)
 * - Blood donation camps must be conducted by a licensed blood centre (government, Red Cross, recognised voluntary or
 *   hospital blood centre); an NGO without its own licence organises donors and the venue.
 *   (cdsco.gov.in Blood Centre Division FAQs)
 * - NGO Darpan (NITI Aayog) gives a unique ID used when applying for government schemes and grants. (ngodarpan.gov.in)
 * - Stamp duty and registration fees not quoted ("as per Tamil Nadu rates"). No professional fee figures. Timelines are estimates.
 */

const whatsapp = "Hi National Filings, I'm in Porur and want to register a health charity. Can we talk?";

export const ngoPorurPage: LicencePageData = {
  id: "P4-A7",
  service: NGO_SERVICE,
  meta: {
    title: "NGO Registration in Porur, Chennai | National Filings",
    description: "NGO registration in Porur for health charities: patient support, medical camps, dialysis and cancer funds. Trust or Section 8, 12A, 80G and CSR-1.",
  },
  hero: {
    headline: { line1: "NGO Registration", line2Before: "in Porur, ", accent: "Beyond the Wards" },
    sub: "Doctors, nurses and families near Porur's hospitals often start helping patients long before they have a legal body. We set up the right trust, society or Section 8 company and take it through 12A, 80G and CSR-1, so hospitals, donors and companies can work with you openly.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "Stethoscope",
    kicker: "Porur, Chennai 600116",
    title: "Health Trust Registered",
    line: "Your Porur NGO",
    stamp: "80G approved",
    chips: ["Health objects drafted", "CSR-1 ready", "Donor receipts set up"],
    steps: ["Cause", "Structure", "Register", "12A/80G", "CSR-1"],
  },

  benefitsSection: {
    title: "Why a Porur patient support group should become a registered NGO",
    lead: "A WhatsApp group that collects money for a dialysis patient works until the sums grow. Then donors want receipts, hospitals want a letter on a letterhead and companies want papers. Registration gives you all three.",
    cta: {
      title: "Already collecting money for patients?",
      sub: "Tell us how the money comes in and goes out today. We'll suggest a structure and show what has to change before you register.",
      message: "Hi National Filings, our group in Porur collects money for patients' treatment. How do we register as an NGO?",
    },
  },
  benefits: [
    { icon: "Banknote", title: "A bank account in the NGO's name", line: "Treatment money stops passing through a volunteer's personal account." },
    { icon: "ReceiptText", title: "Receipts donors can use", line: "With 80G approval, donors claim a deduction for what they give towards a patient's care." },
    { icon: "Handshake", title: "Hospital tie-ups on paper", line: "A registered body can sign an understanding with a hospital or blood centre for camps and referrals." },
    { icon: "Building2", title: "CSR funds for health work", line: "Companies along Mount Poonamallee Road can fund you once 12A, 80G and CSR-1 are in place." },
    { icon: "ShieldCheck", title: "Tax-free surplus", line: "Income applied to patient care is exempt once the NGO is registered under the new Act." },
    { icon: "Users", title: "Clear roles for founders", line: "Trustees, members or directors named, so decisions about a patient's fund are not one person's call." },
    { icon: "Landmark", title: "Government schemes", line: "An NGO Darpan ID lets you apply for health and welfare grants." },
    { icon: "BadgeCheck", title: "Trust from families", line: "Patients' families give more readily to a body they can look up." },
  ],

  applicantsSection: {
    title: "Health causes around Porur we register NGOs for",
    lead: "Most founders we meet here work in or around a hospital, or have nursed a family member through a long illness.",
  },
  applicants: [
    { icon: "HeartHandshake", title: "Patient support groups", line: "Volunteers who help families with forms, food and stay during long admissions." },
    { icon: "Stethoscope", title: "Free medical camp teams", line: "Doctors and students running screening camps in nearby villages and slums." },
    { icon: "Users", title: "Blood donor groups", line: "Donor lists and camps run with a licensed blood centre." },
    { icon: "Wallet", title: "Dialysis support funds", line: "Groups paying for sessions, fistula surgery or travel for kidney patients." },
    { icon: "Coins", title: "Cancer treatment funds", line: "Funds that top up chemotherapy, scans and medicines for poor families." },
    { icon: "GraduationCap", title: "Alumni and faculty groups", line: "Medical, nursing and allied health graduates giving back as a body." },
    { icon: "Laptop", title: "IT employee volunteer circles", line: "Staff from the IT parks who want a proper body for payroll giving and CSR." },
    { icon: "UserRound", title: "Families starting a memorial trust", line: "A trust in a parent's name that pays for others' treatment." },
  ],

  opportunities: {
    eyebrow: "Health causes",
    title: "Where Porur's health charities spend their money",
    intro: "Most health NGOs here fund one of four things. Each has its own rules on licences, receipts and records, so the objects in your deed should name them.",
    // Pexels licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "HeartHandshake", title: "Blood donation drives", image: "https://images.pexels.com/photos/4680300/pexels-photo-4680300.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Donor's outstretched arm with a taped needle and a filling blood bag, donation chairs behind", credit: "Lucas Oliveira / Pexels" },
      { icon: "Stethoscope", title: "Free consultations and camps", image: "https://images.pexels.com/photos/7578798/pexels-photo-7578798.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Doctor in a white coat with a stethoscope talking to a patient across a desk", credit: "cottonbro studio / Pexels" },
      { icon: "Users", title: "Support for long admissions", image: "https://images.pexels.com/photos/3934328/pexels-photo-3934328.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Elderly hand holding a patient's hand with a pulse clip on a hospital bed", credit: "Muskan Anand / Pexels" },
      { icon: "Wallet", title: "Medicine and treatment funds", image: "https://images.pexels.com/photos/5452271/pexels-photo-5452271.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Cupped hands holding a heap of tablets and capsules", credit: "Tima Miroshnichenko / Pexels" },
    ],
  },

  highlights: {
    eyebrow: "Choosing the vehicle",
    title: "Trust, society or Section 8 for a Porur health charity",
    lead: "All three can get 12A and 80G. The difference is who controls the NGO, how easily new people join and how much a large CSR donor will expect to see.",
    items: [
      { icon: "ScrollText", label: "Small founding group", title: "Public charitable trust", line: "Two or three trustees, a deed registered with the Sub-Registrar and quick to start. Suits a family fund or a doctor-led patient fund.", highlight: true },
      { icon: "Users", label: "Seven or more members", title: "Society", line: "Registered with the District Registrar. Suits a blood donor group or support group where members elect the committee each year." },
      { icon: "Building2", label: "CSR and hospital partners", title: "Section 8 company", line: "Board, MCA filings and an audit every year. The most familiar format for corporate CSR teams and larger health programmes." },
      { icon: "Stethoscope", label: "Running a clinic", title: "Clinical registration as well", line: "If the NGO runs its own clinic or dialysis unit, it needs registration under the Tamil Nadu Clinical Establishments Act on top of NGO registration." },
    ],
  },

  documentsSection: {
    title: "Papers we need to register a health NGO in Porur",
    lead: "Most of this can be sent over WhatsApp. We draft the deed or bylaws, so you only bring the people's papers and an address.",
  },
  documents: [
    { icon: "IdCard", title: "For each founder", items: ["PAN and Aadhaar", "Passport-size photo", "Mobile number and email", "Occupation, for example doctor, nurse or engineer"], hint: "For a Section 8 company, directors also need a digital signature. We arrange it." },
    { icon: "Home", title: "For the registered office", items: ["Rent agreement or property tax receipt", "Electricity bill", "Owner's no-objection letter, if rented"], hint: "A founder's home in Porur works as the address. A hospital address needs the hospital's written consent." },
    { icon: "HeartHandshake", title: "For the health work", items: ["Short note on the cause and who will be helped", "Any past camp reports, photos or patient support records", "Letters from hospitals or blood centres you work with"], hint: "These records carry weight later, for 12A, 80G, CSR-1 and FCRA." },
  ],
  documentsNote: {
    title: "Not sure which structure fits your group?",
    sub: "Send us a two-line description of what you do for patients. We'll reply with the structure we'd use and why.",
    message: "Hi National Filings, we run a patient support group near Porur. Which NGO structure should we choose?",
  },

  processSection: {
    title: "How we register a Porur health charity",
    lead: "Most of the work runs on WhatsApp and email. You can also meet us at our Kundrathur office.",
    cta: {
      title: "Start with a short call",
      sub: "We'll ask about the patients you help, who the founders are and where the money will come from.",
      message: "Hi National Filings, I'd like to set up a health NGO in Porur. Can we have a call?",
    },
  },
  steps: [
    { title: "Map the cause", time: "Day 1", sub: "Who is helped, what is paid for and who funds it, so the objects can be written around real work." },
    { title: "Pick the structure", time: "1-2 days", sub: "Trust, society or Section 8, weighed against your founders and future CSR plans." },
    { title: "Draft and register", time: "Varies by route", sub: "Deed at the Sub-Registrar, bylaws with the District Registrar, or incorporation with the MCA." },
    { title: "PAN, bank and 12A/80G", time: "After registration", sub: "PAN and bank account opened, then provisional registration and donor approval applied for together." },
    { title: "CSR-1 and Darpan", time: "When eligible", sub: "NGO Darpan ID taken early. CSR-1 filed once 12A and 80G are in hand." },
  ],
  processNote: "Timelines are estimates and depend on appointment slots, the registering office and the tax department. CSR funding also depends on the company's own rules and your track record.",

  mistakesSection: {
    title: "Mistakes we see in Porur health charities",
    lead: "Good intent is never the problem. The trouble usually starts with how the money and the medical work were set up.",
  },
  mistakes: [
    { icon: "Wallet", title: "Fund raised for one named patient", problem: "Money collected for a single patient's surgery is a private benefit, not a public charity, and can't carry an 80G receipt.", fix: "We write objects for a class of patients, such as poor kidney patients, and set a fair way to choose who is helped." },
    { icon: "ShieldAlert", title: "Blood camp run without a licensed centre", problem: "An NGO collects blood with a private lab's staff, which the rules don't allow.", fix: "Camps are conducted by a licensed blood centre. Your NGO organises donors, venue and publicity under a written tie-up." },
    { icon: "Building2", title: "CSR promised in the first year", problem: "Founders plan on CSR money at once, but companies must use agencies with a three-year track record.", fix: "We get 12A, 80G and CSR-1 in place early and help you keep the records that build that track record." },
    { icon: "FileWarning", title: "Cash donations with no names", problem: "Donation boxes at camps collect cash with no donor details, and anonymous donations above the limit are taxed at 30%.", fix: "UPI QR codes and a simple donor register at every camp, so each gift is traceable." },
  ],

  costSection: {
    title: "What it costs to register a Porur health NGO",
    lead: "Government charges depend on the structure you choose. Our fee depends on the drafting and approvals involved, and we confirm it in writing before we start.",
    cta: {
      title: "Ask for a written quote",
      sub: "Tell us the structure you're leaning towards and whether you need 12A, 80G and CSR-1 as well.",
      message: "Hi National Filings, can I get a quote to register a health charity in Porur with 12A and 80G?",
    },
  },
  costs: [
    { icon: "Stamp", label: "As per Tamil Nadu rates", title: "Stamp duty and registration", line: "For a trust deed, set by the corpus and the state's rates. Society filing fees are set by the Registration Department." },
    { icon: "Building2", label: "MCA fees", title: "Section 8 incorporation", line: "Government fees and stamp duty on the incorporation filing, plus digital signatures for directors.", highlight: true },
    { icon: "Landmark", label: "No government fee", title: "12A, 80G and CSR-1", line: "Filing with the tax department and the MCA costs nothing. Our fee covers drafting and follow-up." },
    { icon: "FilePen", label: "Quoted upfront", title: "Our professional fee", line: "Depends on the structure, the number of founders and the approvals you want handled." },
  ],

  compliance: {
    eyebrow: "After registration",
    title: "Keeping a Porur health NGO in good standing",
    lead: "Patient funds draw close scrutiny. These are the routines that keep your approvals and your CSR partners.",
    items: [
      { icon: "Coins", label: "Every year", title: "Spend at least 85% on the cause", line: "Apply 85% of the year's income to patient care, or accumulate it for up to five years with the required form." },
      { icon: "ReceiptText", label: "Every year", title: "Donation statement", line: "Donations reported to the tax department, so donors' deductions show up for them." },
      { icon: "SearchCheck", label: "Every year", title: "Audit and return", line: "Accounts audited and the NGO's return filed. Section 8 companies also file with the MCA.", highlight: true },
      { icon: "RefreshCw", label: "Before expiry", title: "Renew 12A and 80G", line: "Provisional approval is followed by regular approval, which runs for five tax years and is then renewed." },
    ],
  },

  reasonsTitle: "Why Porur health groups register with us",
  reasons: [
    { icon: "Stethoscope", title: "We know health charity work", line: "Patient funds, camps and hospital tie-ups shape how we draft your objects." },
    { icon: "ScrollText", title: "Deeds drafted for approval", line: "Objects and clauses written so 12A and 80G aren't held up later." },
    { icon: "Handshake", title: "CSR-ready from the start", line: "Records and approvals set up with corporate funders in mind." },
    { icon: "MessageCircle", title: "Works around shift duty", line: "WhatsApp and email suit doctors and nurses on rotating shifts." },
    { icon: "MapPinned", title: "Office in Kundrathur", line: "Meet us in person, Monday to Saturday, 9 am to 7 pm." },
    { icon: "Award", title: "Experience since 2012", line: "Registration, tax and compliance work for Chennai clients." },
  ],

  faqTitle: "Health NGO registration in Porur: questions we get",
  faqs: [
    { q: "We help patients at Porur hospitals. Should we form a trust, a society or a Section 8 company?", a: "A trust suits a small group of founders, such as two doctors or a family, who want to keep control. A society suits a wider group, such as a blood donor club, where members elect the committee. A Section 8 company takes more filing work every year but is the format many CSR teams and larger hospital partners are used to. All three can get 12A and 80G." },
    { q: "Can our NGO receive CSR money for health projects?", a: "Yes. Schedule VII to the Companies Act, 2013 lists promoting health care, including preventive health care, among CSR activities. To act as an implementing agency, your NGO must be a trust, society or Section 8 company with 12A and 80G registration and a track record of at least three years in similar work, and it must register with the MCA in Form CSR-1. The current CSR-1 needs certification by a practising CA, CS or Cost Accountant." },
    { q: "Has 12A and 80G changed under the new Income-tax Act?", a: "From 1 April 2026, registration for exemption (formerly 12A) is under section 332 and donor approval (formerly 80G) under section 354 of the Income-tax Act, 2025. A new NGO applies in Form 104 for provisional registration and approval, valid for three tax years or until six months after activities start, whichever is earlier. It then applies in Form 105 for regular registration, which runs for five tax years. Approvals granted under the old Act stay valid until they expire." },
    { q: "Can a registered NGO run a free blood donation camp?", a: "Your NGO can organise the camp, find donors and arrange the venue, but the blood must be collected by a licensed blood centre, such as a government or hospital blood centre or the Red Cross. We help you put the tie-up in writing and keep camp records for your 12A and CSR files." },
    { q: "We want to run a small dialysis unit. Is NGO registration enough?", a: "No. NGO registration covers the legal body and its tax position. A dialysis unit or clinic run by the NGO is a clinical establishment and needs registration under the Tamil Nadu Clinical Establishments Act, along with any other medical licences that apply. Many NGOs avoid this by paying for sessions at an existing registered centre." },
    { q: "Can a Porur health NGO receive donations from abroad?", a: "Only with FCRA approval. Full FCRA registration needs at least three years of existence and at least ₹15 lakh spent on your core activities over the last three years, excluding admin costs. A newer NGO can apply for prior permission for a specific grant from a named foreign donor." },
    { q: "Do you have an office in Porur?", a: "No. Our only office is in Karaima Nagar, Kundrathur. Porur clients work with us over WhatsApp and email, and are welcome to visit us Monday to Saturday, 9 am to 7 pm." },
  ],

  related: nearbyAreas("P4-A7"),
  relatedTitle: "NGO registration in areas near Porur",

  final: {
    title: "Give your Porur patient work a proper legal home",
    sub: "Tell us what your group does for patients. We'll suggest the structure, draft the papers and take you through 12A, 80G and CSR-1.",
    message: "Hi National Filings, I want to register a health charity in Porur. Where do we start?",
  },
  catalogue: ["Health charity trust registration in Porur", "Section 8 company and CSR-1 registration in Porur", "12A and 80G registration for health NGOs in Porur"],
};
