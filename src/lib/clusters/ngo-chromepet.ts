import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { NGO_SERVICE, nearbyAreas } from "./shared";

/**
 * P4-A5 · NGO Registration in Chromepet (/chennai/ngo-registration-in-chromepet).
 * Primary keyword: "ngo registration in chromepet". Angle: students, alumni and young professionals. Alumni associations,
 * youth and sports clubs, coding-for-good and student-run social projects near the MIT campus: a society for an alumni
 * association, a Section 8 company for a tech-for-good project that wants CSR money, a trust for a small scholarship fund,
 * NGO Darpan for government schemes, and 12A/80G (now sections 332 and 354 of the Income-tax Act, 2025). Kept distinct from
 * P1-A5, P2-A5, P3-A5, the other P4 area pages and the P4 cluster pages. We have no office in Chromepet: clients work with us
 * over WhatsApp and email and can visit our Kundrathur office.
 *
 * Local facts (reused from the verified P1-A5 JSDoc): Chromepet is in Chengalpattu district, PIN 600044, governed by Tambaram
 * City Municipal Corporation; Madras Institute of Technology was founded at Chromepet in 1949 and is a constituent college of
 * Anna University; GST Road runs through it; Chromepet station is on the suburban line towards Tambaram.
 *
 * Facts checked (Nov 2026):
 * - Societies: Tamil Nadu Societies Registration Act, 1975, registered with the District Registrar through TNREGINET; at
 *   least seven members subscribe to the memorandum; bylaws govern membership and elections; yearly filings with the
 *   Registrar. (as verified for P4-C2, src/lib/clusters/society.ts; tnreginet.gov.in)
 * - Trusts: no public trusts act in Tamil Nadu; a charitable trust is created by a trust deed registered with the
 *   Sub-Registrar; stamp duty depends on the corpus and property settled, so no figure is quoted. (as verified for P4-C1,
 *   src/lib/clusters/trust.ts; tnreginet.gov.in)
 * - Section 8 company: Companies Act, 2013; at least two directors and two members for a private Section 8 company, at least
 *   one director resident in India; no minimum capital; licence granted through the SPICe+ incorporation filing; no
 *   dividends to members. (as verified for P4-C3, src/lib/clusters/section-8.ts; mca.gov.in)
 * - Income-tax Act, 2025 from 1 April 2026: registration of non-profits (formerly 12A/12AB) is section 332; donor approval
 *   (formerly 80G) is section 354. Form 104 is the application for provisional registration, for an NGO that has not yet
 *   started activities (order in Form 106, provisional validity three years); Form 105 is the application for regular
 *   registration, due within six months of starting activities; renewal at least six months before expiry. Regular
 *   registration is valid for five tax years, or ten where total income did not exceed ₹5 crore in each of the two
 *   preceding tax years (section 332(5)). A revocable trust cannot register (section 332(2)(b)).
 *   (incometax.gov.in Form 104 and 106 user manual and FAQs; incometaxindia.gov.in/documents/d/guest/form-104-faqs;
 *   taxmann.com/post/blog/opinion-trust-registration-in-the-new-income-tax-act-a-new-era-dawns/)
 * - CSR: an implementing agency files Form CSR-1 with the MCA; a Section 8 company, trust or society needs income tax
 *   registration and donor approval (the old 12A and 80G), and, if not set up by the company itself, a track record of
 *   three years in similar activities. Revised web form CSR-1 from 14 July 2025. (Companies (CSR Policy) Rules, 2014, rule 4,
 *   as amended in 2021: ca2013.com/rule-4-companies-corporate-social-responsibility-rules-2014/; Revised e-form CSR-1:
 *   ca2013.com/wp-content/uploads/2025/07/Revised-eform-CSR-1-with-effect-from-14.07.2025.pdf)
 * - NGO Darpan (ngodarpan.gov.in, NITI Aayog) gives a voluntary organisation a unique ID used when applying for grants
 *   under government ministries' schemes.
 * - Section 8 and income tax: profits cannot be distributed; payments and benefits to founders and their relatives are
 *   restricted for an exempt NGO, so pay for real work is kept reasonable. (section-8.ts; taxmann.com article above)
 * - No fee figures. Timelines are estimates.
 *
 * Photos (Pexels, previewed Nov 2026): 32074907 three young South Asian adults working on a laptop and papers at a table;
 * 13509977 young cricketers batting and keeping wicket on a ground; 12820057 arm of a blood donor on a donation couch
 * holding a stress ball (Rahul Sapra); 30858451 smiling girl with a headset in an online class at home (Anil Sharma).
 */

const whatsapp = "Hi National Filings, I'm in Chromepet. Our student group wants to register as an NGO. Which structure should we pick?";

export const ngoChromepetPage: LicencePageData = {
  id: "P4-A5",
  service: NGO_SERVICE,
  meta: {
    title: "NGO Registration in Chromepet, Chennai | National Filings",
    description: "NGO registration in Chromepet for alumni associations, youth clubs and tech-for-good projects. Society, Section 8, 12A, 80G, CSR-1 and NGO Darpan.",
  },
  hero: {
    headline: { line1: "NGO Registration", line2Before: "", accent: "in Chromepet" },
    sub: "NGO registration in Chromepet for any cause. We help you choose between a trust, society and Section 8 company and handle the registration end to end.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "Users",
    kicker: "Chromepet, Chengalpattu",
    title: "Society Registered",
    line: "Your Chromepet NGO",
    stamp: "80G approved",
    chips: ["Alumni society", "Section 8 for CSR", "Darpan ID"],
    steps: ["Group", "Structure", "Draft", "Register", "Approvals"],
  },

  benefitsSection: {
    title: "What registering does for a Chromepet student or alumni group",
    lead: "Young groups run on energy and goodwill. Registration gives that energy a bank account, a name others can trust, and a way to keep going after the founding batch graduates.",
    cta: {
      title: "Running a club or project out of a hostel room?",
      sub: "Tell us who is in the group, what you do and where the money comes from. We'll say whether to register now and in what form.",
      message: "Hi National Filings, we run a student project in Chromepet and want to know if we should register it as an NGO.",
    },
  },
  benefits: [
    { icon: "RefreshCw", title: "Survives graduation", line: "Office bearers change every year. The registered body and its bank account stay." },
    { icon: "Landmark", title: "Money kept out of personal accounts", line: "Fees, sponsorships and donations go into the group's own account, not a coordinator's." },
    { icon: "Handshake", title: "Company CSR teams will talk to you", line: "Tech firms fund registered bodies with tax approvals and CSR-1, not informal teams." },
    { icon: "ReceiptIndianRupee", title: "Donors get a deduction", line: "With donor approval, alumni giving to your fund can claim tax relief." },
    { icon: "IdCard", title: "Access to government schemes", line: "A Darpan ID lets the NGO apply for grants under ministry schemes." },
    { icon: "KeyRound", title: "Code owned by the project", line: "Apps and tools built by volunteers can belong to the organisation, not one person." },
    { icon: "Users", title: "Clear say for members", line: "Bylaws fix who votes, who signs cheques and how the committee is chosen." },
    { icon: "BadgeCheck", title: "Credible with colleges", line: "Colleges, hospitals and schools sign tie-ups more easily with a registered body." },
  ],

  applicantsSection: {
    title: "Chromepet groups we help register",
    lead: "Most of our Chromepet NGO clients are under 35. Many still have a college ID card in their wallet.",
  },
  applicants: [
    { icon: "GraduationCap", title: "Alumni associations", line: "Batches and departments that want a permanent body for reunions, scholarships and mentoring." },
    { icon: "Laptop", title: "Coding-for-good teams", line: "Students and young engineers building free apps for schools, clinics and local bodies." },
    { icon: "Award", title: "Youth and sports clubs", line: "Cricket, football and athletics clubs that coach children from nearby streets." },
    { icon: "Stethoscope", title: "Blood donation groups", line: "Volunteer donor networks that run camps with hospitals and colleges." },
    { icon: "PenLine", title: "Tuition and mentoring circles", line: "Students teaching school children in the evening or online." },
    { icon: "Leaf", title: "Lake and green groups", line: "Weekend volunteers cleaning water bodies and planting trees in the neighbourhood." },
    { icon: "Briefcase", title: "Young professionals' forums", line: "Working alumni who pool money for a cause and want it handled properly." },
    { icon: "HeartHandshake", title: "Relief volunteers", line: "Groups that mobilise food and supplies during floods and heavy rain." },
  ],

  opportunities: {
    eyebrow: "Young causes",
    title: "What Chromepet's student-run NGOs actually do",
    intro: "Very little of it is glamorous. A laptop on a canteen table, a donor couch at a camp, a cricket net on Sunday morning. Each kind of work suits a different structure.",
    // Pexels licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "Laptop", title: "Tech-for-good projects", image: "https://images.pexels.com/photos/32074907/pexels-photo-32074907.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Three young people at a table going through papers next to an open laptop", credit: "Pexels" },
      { icon: "Award", title: "Youth sports clubs", image: "https://images.pexels.com/photos/13509977/pexels-photo-13509977.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Young cricketers in whites batting and keeping wicket on a grass ground", credit: "Pexels" },
      { icon: "Stethoscope", title: "Blood donation camps", image: "https://images.pexels.com/photos/12820057/pexels-photo-12820057.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Donor's arm on a red couch with a blood bag line, holding a yellow stress ball", credit: "Rahul Sapra / Pexels" },
      { icon: "GraduationCap", title: "Online tutoring", image: "https://images.pexels.com/photos/30858451/pexels-photo-30858451.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Smiling girl wearing a headset in an online class in front of a laptop", credit: "Anil Sharma / Pexels" },
    ],
  },

  highlights: {
    eyebrow: "Match the group to the form",
    title: "Which structure fits which Chromepet group",
    lead: "The three NGO structures are not interchangeable. For young groups the deciding questions are how many people want a vote, and whether company CSR money is the goal.",
    items: [
      { icon: "GraduationCap", label: "Society", title: "For an alumni association", line: "Seven or more members, elections under bylaws, registered with the District Registrar. Each batch can join as members.", highlight: true },
      { icon: "Laptop", label: "Section 8 company", title: "For a tech-for-good project", line: "A board, MCA filings and the format CSR teams know. Suits projects that plan to take company funding." },
      { icon: "ScrollText", label: "Trust", title: "For a small scholarship fund", line: "A few trustees, a registered deed and no elections. Good when three or four friends hold the money." },
      { icon: "IdCard", label: "NGO Darpan", title: "For government schemes", line: "A unique ID from the NITI Aayog portal, asked for when applying to ministry grant schemes." },
    ],
  },

  documentsSection: {
    title: "Papers a Chromepet group needs to register",
    lead: "Send these on WhatsApp or email. Students often have everything except a registered office proof, so sort that out first.",
  },
  documents: [
    { icon: "Users", title: "For each founder or member", items: ["PAN card", "Aadhaar, or passport for alumni living abroad", "Passport-size photo", "Mobile number and email ID", "Occupation and address"], hint: "Alumni working abroad can still be members. Their documents may need notarising or attestation where they live." },
    { icon: "Home", title: "For the registered office", items: ["Rent agreement or property tax receipt", "Recent electricity bill", "No-objection letter from the owner"], hint: "A member's family home in Chromepet works as the office if the owner signs the letter." },
    { icon: "FileText", title: "For the structure you choose", items: ["Draft bylaws and memorandum for a society", "Trust deed details and corpus for a trust", "Proposed names and objects for a Section 8 company", "Minutes of the meeting that agreed to register"], hint: "Write objects around the work you really do: tutoring, coaching, health camps or free software." },
  ],
  documentsNote: {
    title: "Some members are away for exams or abroad?",
    sub: "We plan signatures around them. Society members sign the memorandum, so we collect those first and keep the rest moving.",
    message: "Hi National Filings, some of our Chromepet alumni members live abroad. How do we collect their signatures for registration?",
  },

  processSection: {
    title: "How a Chromepet group gets registered",
    lead: "We have no office in Chromepet. Most groups work with us over WhatsApp and video calls, and the committee can visit our Kundrathur office for signatures.",
    cta: {
      title: "Book a call with your committee",
      sub: "Get the core members on one call. We'll explain the three structures and leave you with a decision.",
      message: "Hi National Filings, can we set up a call for our Chromepet alumni committee about NGO registration?",
    },
  },
  steps: [
    { title: "Committee call", time: "Day 1", sub: "Who the members are, what the group does and where its money will come from." },
    { title: "Structure chosen", time: "Same week", sub: "Society, Section 8 company or trust, with reasons written down for the members." },
    { title: "Drafts agreed", time: "3-5 days", sub: "Bylaws, deed or company documents drafted and shared for comments." },
    { title: "Registration", time: "Varies by office", sub: "Filed with the District Registrar, the Sub-Registrar or the MCA, depending on the structure." },
    { title: "PAN, bank and tax approvals", time: "After registration", sub: "PAN, bank account, then 12A and 80G, with CSR-1 and NGO Darpan where they apply." },
  ],
  processNote: "Timelines are estimates and start from complete documents. Registrar and MCA processing times vary, and members abroad can add a few days for signatures.",

  mistakesSection: {
    title: "Mistakes we see in student and alumni NGOs",
    lead: "Young groups move fast, which is good. These are the shortcuts that cost them later.",
  },
  mistakes: [
    { icon: "Wallet", title: "Donations in a coordinator's account", problem: "Alumni send money to the batch representative's UPI ID. When he moves abroad, nobody can show where it went.", fix: "We register the group first and open an account in its name, with two signatories." },
    { icon: "Laptop", title: "A trust for a CSR-funded app", problem: "A tech project registers as a two-person trust, then finds CSR teams prefer a board-run Section 8 company with MCA filings.", fix: "We ask about funding plans first. If CSR money is the goal, we usually suggest a Section 8 company." },
    { icon: "Users", title: "Bylaws copied from another society", problem: "A copied set of bylaws has no rule for admitting each new batch, so membership freezes with the founders.", fix: "We write admission, voting and term rules that suit an alumni body that grows every year." },
    { icon: "CalendarClock", title: "Regular 80G applied for too late", problem: "A club gets provisional approval, starts running camps and forgets the follow-up application.", fix: "We diarise the Form 105 deadline, which falls within six months of starting activities." },
  ],

  costSection: {
    title: "What NGO registration for a Chromepet group costs",
    lead: "Government fees and stamp duty depend on the structure. Our fee depends on the work involved and is agreed before we start.",
    cta: {
      title: "Ask for a quote for your group",
      sub: "Tell us the structure you are leaning towards and how many members. We'll list each cost separately.",
      message: "Hi National Filings, can you quote for registering our Chromepet student group as an NGO?",
    },
  },
  costs: [
    { icon: "Users", label: "As per Tamil Nadu rates", title: "Society registration", line: "Registrar fee for filing the memorandum and bylaws. Our fee covers drafting and filing.", highlight: true },
    { icon: "Building2", label: "As per MCA fees", title: "Section 8 company", line: "MCA filing fees, digital signatures for directors and stamp duty on incorporation documents." },
    { icon: "Stamp", label: "As per Tamil Nadu rates", title: "Trust deed", line: "Stamp duty on the corpus and the Sub-Registrar's registration fee." },
    { icon: "ReceiptIndianRupee", label: "No government fee", title: "12A, 80G and Darpan", line: "The income tax applications and Darpan sign-up are free. Our fee for preparing them is quoted separately." },
  ],

  compliance: {
    eyebrow: "After the first year",
    title: "Keeping a young Chromepet NGO in good standing",
    lead: "Office bearers change often in student groups. These tasks need an owner each year, or the registration quietly lapses.",
    items: [
      { icon: "Users", label: "Every year", title: "General body meeting", line: "Elections and accounts approved as the bylaws say, with minutes kept." },
      { icon: "FileText", label: "Every year", title: "Registrar or MCA filings", line: "A society files with the District Registrar. A Section 8 company files its annual returns with the MCA." },
      { icon: "Calculator", label: "Every year", title: "Audit and income tax return", line: "Accounts audited where required and the NGO's return filed, even if no tax is due." },
      { icon: "CalendarClock", label: "Before expiry", title: "12A and 80G renewal", line: "Renewal applied for at least six months before the approval runs out." },
    ],
  },

  reasonsTitle: "Why Chromepet groups register their NGO with us",
  reasons: [
    { icon: "MessageCircle", title: "Works on WhatsApp", line: "Drafts, questions and updates in your group chat, not long office visits." },
    { icon: "Scale", title: "Honest structure advice", line: "We'll tell you if a society is enough and a Section 8 company would be overkill." },
    { icon: "Globe", title: "Members abroad handled", line: "Signatures from alumni overseas planned into the timeline." },
    { icon: "Handshake", title: "CSR-ready from the start", line: "Objects and governance written with CSR-1 and company due diligence in mind." },
    { icon: "MapPinned", title: "Kundrathur office", line: "Open Monday to Saturday, 9 am to 7 pm, for signatures and meetings." },
    { icon: "Award", title: "Since 2012", line: "Registration and compliance work for Chennai organisations." },
  ],

  faqTitle: "NGO registration in Chromepet: questions from students and alumni",
  faqs: [
    { q: "Can our college alumni association register as a society in Chromepet?", a: "Yes. A society under the Tamil Nadu Societies Registration Act, 1975 suits an alumni body well, because every batch can join as members and elect a committee. At least seven people sign the memorandum, and the bylaws set out who can join, how voting works and how long office bearers serve. It is registered with the District Registrar. Using the college's name may need the college's permission, so check that early." },
    { q: "Our coding-for-good project wants CSR money from tech companies. Which structure is best?", a: "Usually a Section 8 company under the Companies Act, 2013. It needs at least two directors and two members, and CSR teams are used to its board and MCA filings. To take CSR funds as an implementing agency, it then needs income tax registration and donor approval (the old 12A and 80G) and must file Form CSR-1 with the MCA. Unless a company sets it up itself, it also needs a three-year track record in similar work, so many projects start with smaller donors first." },
    { q: "What is NGO Darpan, and does our group need it?", a: "NGO Darpan is a NITI Aayog portal that gives voluntary organisations a unique ID. Ministries ask for it when you apply for grants under their schemes. If you only raise money from alumni and companies, it is optional, but it is free and worth doing once you are registered." },
    { q: "Our club hasn't started activities yet. Can we still apply for 12A and 80G?", a: "Yes. Under the Income-tax Act, 2025, registration (formerly 12A) is section 332 and donor approval (formerly 80G) is section 354. A new NGO applies in Form 104 for provisional approval, which lasts three years. Once activities start, it applies in Form 105 for regular approval within six months of starting. Regular approval usually lasts five tax years." },
    { q: "Can the NGO pay the students who build its app or run its classes?", a: "Reasonable pay for real work is allowed in all three structures. What is not allowed is sharing profits, and a Section 8 company can never pay dividends. Payments to founders, trustees and their relatives are looked at closely when the NGO claims tax exemption, so keep them modest and documented." },
    { q: "Who owns the software our volunteers write?", a: "By default, often the person who wrote it. If you want the NGO to own the code, volunteers should sign a simple assignment or contributor agreement in the NGO's favour. We can add this to your setup so the organisation, not one graduate, controls the app." },
    { q: "Do we need an office in Chromepet to register?", a: "You need a registered office address. A member's home or a rented room in Chromepet works, with the owner's no-objection letter and a utility bill. We don't have an office in Chromepet ourselves: we work over WhatsApp and email, and you can visit our Kundrathur office for signatures." },
  ],

  related: nearbyAreas("P4-A5"),
  relatedTitle: "NGO registration in areas near Chromepet",

  final: {
    title: "Turn your Chromepet group into a registered NGO",
    sub: "Send us a message with what your group does and who is in it. We'll suggest the structure and the approvals that fit.",
    message: "Hi National Filings, our group in Chromepet wants to register as an NGO. Can you help us choose and register?",
  },
  catalogue: ["Alumni association society registration in Chromepet", "Section 8 company registration for tech-for-good projects in Chromepet", "12A, 80G and CSR-1 registration for NGOs in Chromepet"],
};
