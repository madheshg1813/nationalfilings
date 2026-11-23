import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { NGO_SERVICE, nearbyAreas } from "./shared";

/**
 * P4-A6 · NGO Registration in Tambaram (/chennai/ngo-registration-in-tambaram).
 * Primary keyword: "ngo registration in tambaram". Angle: educational trusts that run or want to run schools and colleges,
 * and NGOs receiving foreign donations from alumni abroad. A trust for a school (school recognition is a separate step),
 * FCRA registration vs prior permission and the current FCRA conditions, and 12A/80G (now sections 332 and 354 of the
 * Income-tax Act, 2025). Kept distinct from P1-A6, P2-A6, P3-A6, the other P4 area pages and the P4 cluster pages. We have
 * no office in Tambaram: clients work with us over WhatsApp and email and can visit our Kundrathur office.
 *
 * Local facts (reused from the verified P1-A6 JSDoc): Tambaram is a city in Chengalpattu district; Tambaram City Municipal
 * Corporation was formed on 3 November 2021; Madras Christian College is in East Tambaram; MEPZ Special Economic Zone is on
 * GST Road at Tambaram; Tambaram railway station is one of the main railway terminals of the Chennai area.
 *
 * Facts checked (Nov 2026):
 * - Trusts: no public trusts act in Tamil Nadu; a charitable trust is created by a trust deed registered with the
 *   Sub-Registrar; stamp duty depends on the corpus and property settled, so no figure is quoted. (as verified for P4-C1,
 *   src/lib/clusters/trust.ts; tnreginet.gov.in). Societies: Tamil Nadu Societies Registration Act, 1975, District Registrar,
 *   at least seven members (society.ts). Section 8 company: Companies Act, 2013 (section-8.ts).
 * - Schools: a private school in Tamil Nadu needs recognition under the Tamil Nadu Private Schools (Regulation) Act, 2018
 *   (Act 35 of 2019), granted by the School Education Department; the "educational agency" running a school can be a trust,
 *   a society or a Section 8 company. Board affiliation (such as CBSE) is a further, separate step. Colleges need university
 *   affiliation, and regulator approval (such as AICTE) for technical courses.
 *   (prsindia.org/files/bills_acts/acts_states/tamil-nadu/2019/Act 35 of 2019 TN.pdf; Bill 33 of 2018 TN)
 * - Income-tax Act, 2025 from 1 April 2026: registration (formerly 12A/12AB) is section 332; donor approval (formerly 80G) is
 *   section 354. Form 104 for provisional registration (three years) for an entity that has not started activities; Form 105
 *   for regular registration within six months of starting activities; renewal at least six months before expiry. Regular
 *   registration is valid for five tax years, or ten where total income did not exceed ₹5 crore in each of the two
 *   preceding tax years (section 332(5)). A revocable trust cannot register (section 332(2)(b)).
 *   (incometax.gov.in Form 104 and 106 user manual and FAQs; incometaxindia.gov.in/documents/d/guest/form-104-faqs;
 *   taxmann.com/post/blog/opinion-trust-registration-in-the-new-income-tax-act-a-new-era-dawns/)
 * - FCRA registration (Form FC-3A): the association must have existed for at least three years and spent at least ₹15 lakh
 *   on its core activities in the last three financial years, excluding administrative spending (rule 9); valid for five
 *   years, renewable. Associations not yet eligible apply for prior permission (Form FC-3B) for a specific donor, amount and
 *   purpose. MHA notification of 7 April 2025: prior permission is valid for three years from approval for receiving the
 *   money, and the money must be used within four years of approval.
 *   (nishithdesai.com/research-and-articles/hotline/social-sector-hotline/fcra-notification-tightens-prior-permission-regime-new-validity-periods-prescribed-for-ngos-15329;
 *   incorpx.io/blog/fcra-registration-ngo-process-compliance-renewal)
 * - FCRA Amendment Act, 2020: foreign contribution is received only in the "FCRA Account" at SBI, New Delhi Main Branch;
 *   it cannot be transferred to another person or association; administrative expenses are capped at 20%; Aadhaar of office
 *   bearers is required. (give.do/discover/news/fcra-amendment-2020-explained/)
 * - Foreign Contribution (Regulation) Amendment Rules, 2026 (S.O. 3272(E), 22 June 2026): applicants pick their purposes from
 *   a notified list and name the states or UTs they work in, with ₹300 extra for each additional purpose and each additional
 *   state; adding one later needs a fresh application; "key functionary" is defined widely (trustees, directors, office
 *   bearers, governing body members); associations with foreign nationals (other than persons of Indian origin) as key
 *   functionaries are ineligible; "reasonable activity" for grant or renewal means using at least ₹10 lakh of foreign
 *   contribution in the previous two financial years; existing registrants file Form FC-6F within one year.
 *   (prsindia.org/billtrack/foreign-contribution-regulation-amendment-rules-2026; devdiscourse.com MHA notifies Foreign
 *   Contribution Amendment Rules; legal500.com "FCRA Amendment Rules 2026: India revamps the FCRA regime")
 * - The FCRA Amendment Bill, 2026 was referred to a Joint Parliamentary Committee in August 2026 and is not law.
 *   (business-standard.com 6 Aug 2026; outlookindia.com FCRA Amendment Bill 2026)
 * - A donation from an Indian citizen living abroad (NRI), from personal savings through normal banking channels, is not
 *   foreign contribution; a donation from a foreign citizen, including an OCI or PIO cardholder, is. (MHA FCRA FAQs as
 *   reproduced at icnl.org/wp-content/uploads/India-FAQ-1---FCRA-final.pdf; taxguru.in FCRA introduction)
 * - FCRA annual return in Form FC-4 is filed within nine months of the end of the financial year (rule 17).
 * - No fee figures. Timelines are estimates.
 *
 * Photos (Pexels, previewed Nov 2026): 5636692 young girls in checked school uniforms seated on a classroom floor;
 * 4622108 three college students in blazers studying with books and a laptop on a lawn before an old campus building;
 * 39122603 four schoolgirls in uniform walking along a tree-lined road (shubhamthakur); 6937693 young man in a striped
 * shirt talking on a video call at a laptop at home.
 */

const whatsapp = "Hi National Filings, I'm in Tambaram and want to start an educational trust. Our alumni abroad also want to donate.";

export const ngoTambaramPage: LicencePageData = {
  id: "P4-A6",
  service: NGO_SERVICE,
  meta: {
    title: "NGO Registration in Tambaram, Chennai | National Filings",
    description: "NGO registration in Tambaram for educational trusts, school founders and alumni giving from abroad. Trust deed, 12A, 80G and FCRA, step by step.",
  },
  hero: {
    headline: { line1: "NGO Registration", line2Before: "in Tambaram, ", accent: "Classrooms to FCRA" },
    sub: "Tambaram has been a college town for generations, and its old students now give from all over the world. We set up educational trusts in Tambaram, get their tax approvals, and plan the FCRA route before any foreign money arrives.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "GraduationCap",
    kicker: "Tambaram, Chengalpattu",
    title: "Educational Trust Deed",
    line: "Your Tambaram NGO",
    stamp: "12A approved",
    chips: ["Deed for a school", "FCRA route planned", "80G for donors"],
    steps: ["Plan", "Deed", "Register", "12A/80G", "FCRA"],
  },

  benefitsSection: {
    title: "Why Tambaram educational groups register before they build",
    lead: "Land, teachers and recognition all come later. The legal body that will own the school and receive donations has to exist first, and its deed decides a lot about what follows.",
    cta: {
      title: "Planning a school or a college fund?",
      sub: "Tell us what you want to run, who the founders are and where donations will come from. We'll map the registrations in order.",
      message: "Hi National Filings, we're planning a school in Tambaram. What do we register first?",
    },
  },
  benefits: [
    { icon: "Building2", title: "A body to hold the school", line: "Land, buildings and fees belong to the trust, not to a founder's family." },
    { icon: "ClipboardCheck", title: "Eligible to seek school recognition", line: "The School Education Department deals with a trust, society or Section 8 company as the educational agency." },
    { icon: "Globe", title: "A lawful route for alumni abroad", line: "With FCRA registration or prior permission, foreign donations can be received openly." },
    { icon: "ReceiptIndianRupee", title: "Tax-free surplus", line: "Under section 332, income spent on education is not taxed." },
    { icon: "Percent", title: "Deductions for Indian donors", line: "Section 354 approval lets donors in India claim relief on their gifts." },
    { icon: "Coins", title: "Endowments that last", line: "Scholarship funds can be held as corpus and spent for years, under the deed's rules." },
    { icon: "RefreshCw", title: "Continuity across generations", line: "Succession clauses let new trustees take over without breaking the institution." },
    { icon: "BadgeCheck", title: "Trust with parents", line: "Parents and universities look for a registered, accountable body behind a school." },
  ],

  applicantsSection: {
    title: "Tambaram groups we register",
    lead: "Our Tambaram NGO work is mostly about learning: who runs it, who pays for it and how money from abroad comes in.",
  },
  applicants: [
    { icon: "GraduationCap", title: "Families starting a school", line: "Founders with land in or around Tambaram who want to run a matriculation or CBSE school." },
    { icon: "Building2", title: "College promoters", line: "Groups planning an arts, nursing or technical college that needs a non-profit owner." },
    { icon: "Globe", title: "Old students' funds", line: "Alumni in the US, the Gulf and Singapore pooling money for their old college or school." },
    { icon: "Coins", title: "Scholarship trusts", line: "A family or batch setting up a fund that pays fees for first-generation students." },
    { icon: "PenLine", title: "Coaching and remedial centres", line: "Free evening classes and exam coaching run by retired teachers." },
    { icon: "Users", title: "Teachers' collectives", line: "Teachers and professors who want a society to run workshops and libraries." },
    { icon: "HeartHandshake", title: "Hostels for poor students", line: "Groups giving free or low-cost hostel places to students from villages." },
    { icon: "Home", title: "Existing schools restructuring", line: "Schools run as a proprietorship that need a proper trust behind them." },
  ],

  opportunities: {
    eyebrow: "Education first",
    title: "Where Tambaram's education NGOs put their money",
    intro: "A classroom of young girls, a campus lawn, fees paid for a girl who would otherwise drop out, a call from an old student in another time zone. Each needs the right registration behind it.",
    // Pexels licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "GraduationCap", title: "Schools", image: "https://images.pexels.com/photos/5636692/pexels-photo-5636692.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Young girls in checked school uniforms sitting together on a classroom floor", credit: "Pexels" },
      { icon: "Building2", title: "Colleges", image: "https://images.pexels.com/photos/4622108/pexels-photo-4622108.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Three college students in blazers studying with books and a laptop on a campus lawn", credit: "Pexels" },
      { icon: "Coins", title: "Scholarships", image: "https://images.pexels.com/photos/39122603/pexels-photo-39122603.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Four schoolgirls in uniform walking together along a tree-lined road", credit: "Pexels" },
      { icon: "Globe", title: "Alumni giving from abroad", image: "https://images.pexels.com/photos/6937693/pexels-photo-6937693.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Young man in a striped shirt talking on a video call at a laptop at home", credit: "Pexels" },
    ],
  },

  highlights: {
    eyebrow: "Foreign donations",
    title: "FCRA registration or prior permission: which a Tambaram NGO needs",
    lead: "Money from foreign citizens, including alumni who have taken foreign citizenship, needs central government clearance first. There are two routes, and a new trust can only use one of them.",
    items: [
      { icon: "BadgeCheck", label: "FCRA registration", title: "For NGOs with a track record", line: "At least three years old and ₹15 lakh spent on core work in the last three financial years. Valid for five years.", highlight: true },
      { icon: "FileSignature", label: "Prior permission", title: "For newer NGOs", line: "For a named donor, a set amount and a stated purpose. Money is received within three years and used within four." },
      { icon: "Landmark", label: "Both routes", title: "One FCRA account at SBI", line: "Foreign money is received only in the FCRA account at SBI's New Delhi Main Branch, kept apart from local funds." },
      { icon: "ShieldAlert", label: "2026 rules", title: "Purposes and states declared", line: "Applicants pick purposes from a notified list and name the states they work in. Renewal needs ₹10 lakh of foreign money used in two years." },
    ],
  },

  documentsSection: {
    title: "Documents for a Tambaram educational trust",
    lead: "Send these over WhatsApp or email. For FCRA, the department looks closely at the people behind the NGO, so we gather their details early.",
  },
  documents: [
    { icon: "Users", title: "For the settlor and trustees", items: ["PAN and Aadhaar of each person", "Passport-size photos", "Address proof", "Occupation and contact details", "Passport copy for any trustee living abroad"], hint: "Under the 2026 FCRA rules, a foreign national (other than a person of Indian origin) as a trustee can make the trust ineligible. Plan the board before you register." },
    { icon: "Home", title: "For the trust office and land", items: ["Address proof for the trust office", "Owner's no-objection letter", "Title documents for any land being settled on the trust", "Details of the corpus"], hint: "Land settled on the trust affects stamp duty. Check the value with us before the deed is fixed." },
    { icon: "Globe", title: "For foreign donations later", items: ["Audited accounts for the last three years", "Activity reports with photos", "Commitment letter from the donor, for prior permission", "Aadhaar of office bearers"], hint: "Alumni who are still Indian citizens can usually give from their personal savings without FCRA. Collect passport details to show citizenship." },
  ],
  documentsNote: {
    title: "Some founders live abroad?",
    sub: "Tell us where they are and their citizenship. It decides how they sign the deed and whether their money counts as foreign contribution.",
    message: "Hi National Filings, some trustees of our Tambaram trust live abroad. How do they sign, and does FCRA apply?",
  },

  processSection: {
    title: "From trust deed to foreign donations, for a Tambaram NGO",
    lead: "We have no office in Tambaram. Founders work with us over WhatsApp, email and video calls, and can meet us at our Kundrathur office.",
    cta: {
      title: "Plan the full sequence with us",
      sub: "One call to map the deed, school recognition, tax approvals and the FCRA route in the right order.",
      message: "Hi National Filings, can we plan our Tambaram trust's registrations and FCRA together on a call?",
    },
  },
  steps: [
    { title: "Plan the institution", time: "Day 1", sub: "What you will run, who sits on the board and where money will come from, in India and abroad." },
    { title: "Deed drafted", time: "3-5 days", sub: "Education objects, irrevocable terms, succession and a ban on private benefit, written in." },
    { title: "Deed registered", time: "On the booked date", sub: "Stamp duty paid and the deed registered at the Sub-Registrar, then PAN and bank account." },
    { title: "12A and 80G", time: "After PAN", sub: "Provisional approval under sections 332 and 354, then regular approval once work begins." },
    { title: "FCRA route", time: "When foreign donors appear", sub: "Prior permission for a specific donor now, or registration once the three-year track record is met." },
  ],
  processNote: "Timelines are estimates and start from complete documents. FCRA and school recognition decisions rest with the government and can take months.",

  mistakesSection: {
    title: "Mistakes that hurt Tambaram education NGOs",
    lead: "Foreign donations and schools are both closely regulated. These are the errors we are called in to repair.",
  },
  mistakes: [
    { icon: "Globe", title: "Foreign money into the local account", problem: "An alumnus with a US passport sends a donation straight to the trust's local savings account before any FCRA approval.", fix: "We check each donor's citizenship first and hold foreign gifts until prior permission or registration is in place." },
    { icon: "TriangleAlert", title: "Treating recognition as automatic", problem: "Founders register a trust and admit students, assuming the trust deed allows them to run a school.", fix: "We explain that recognition from the School Education Department is a separate approval with its own building and staff conditions." },
    { icon: "Lock", title: "A deed the founder can revoke", problem: "The deed lets the settlor take the trust back, or lets fees flow to the founder's family.", fix: "We draft an irrevocable deed with no private benefit, which section 332 registration needs." },
    { icon: "Shuffle", title: "Passing FCRA money to another NGO", problem: "A trust receives a foreign grant and hands part of it to a partner school's trust.", fix: "Foreign contribution cannot be transferred to another association. We plan projects so the trust spends it directly." },
  ],

  costSection: {
    title: "What setting up a Tambaram educational trust costs",
    lead: "Stamp duty and registration fees depend on the corpus and any land. Our fee depends on the work and is agreed before we start.",
    cta: {
      title: "Get a quote for your trust",
      sub: "Share the corpus, any land to be settled and whether foreign donors are involved. We'll list each cost.",
      message: "Hi National Filings, can you quote for an educational trust in Tambaram, with 12A, 80G and FCRA?",
    },
  },
  costs: [
    { icon: "Stamp", label: "As per Tamil Nadu rates", title: "Stamp duty and registration", line: "On the corpus and any land settled on the trust, paid at the Sub-Registrar.", highlight: true },
    { icon: "ReceiptIndianRupee", label: "No government fee", title: "12A and 80G", line: "The income tax applications are free. Our fee for preparing them is quoted separately." },
    { icon: "Globe", label: "As set by MHA", title: "FCRA application", line: "The government fee, plus ₹300 for each extra purpose and each extra state under the 2026 rules." },
    { icon: "FileSignature", label: "Quoted upfront", title: "Our drafting and filing", line: "Deed, tax approvals and FCRA work quoted separately, so you pay only for what you need." },
  ],

  compliance: {
    eyebrow: "Every year",
    title: "Yearly duties for a Tambaram trust with foreign donors",
    lead: "An FCRA-registered trust has two sets of books to answer for: income tax and the Home Ministry. Miss either and the approvals are at risk.",
    items: [
      { icon: "Calculator", label: "Every year", title: "Audit and income tax return", line: "Accounts audited and the return filed, showing that income was spent on education." },
      { icon: "Globe", label: "Within nine months of 31 March", title: "FCRA annual return", line: "Form FC-4 with receipts and use of foreign money, certified by a chartered accountant." },
      { icon: "Percent", label: "Throughout the year", title: "20% admin cap", line: "No more than 20% of foreign money spent on administration." },
      { icon: "CalendarClock", label: "Before expiry", title: "Renewals", line: "Section 332 and 354 approvals renewed at least six months before expiry, and FCRA before its five years end." },
    ],
  },

  reasonsTitle: "Why Tambaram education NGOs work with us",
  reasons: [
    { icon: "FileSignature", title: "Deeds written for schools", line: "Objects, land, fees and succession drafted for an institution that will last decades." },
    { icon: "Globe", title: "FCRA planned early", line: "Donor citizenship checked and the right route chosen before money moves." },
    { icon: "SearchCheck", title: "Current with 2026 rules", line: "Advice based on the June 2026 FCRA rules and the Income-tax Act, 2025." },
    { icon: "MessageCircle", title: "Remote-friendly", line: "Founders in Tambaram and abroad work with us on WhatsApp and email." },
    { icon: "MapPinned", title: "Kundrathur office", line: "Open Monday to Saturday, 9 am to 7 pm, for meetings and signatures." },
    { icon: "Award", title: "Since 2012", line: "Registration and compliance for Chennai trusts and institutions." },
  ],

  faqTitle: "NGO registration in Tambaram: questions on schools and foreign donations",
  faqs: [
    { q: "If we register a trust in Tambaram, can we open a school?", a: "Registering the trust is only the first step. A private school in Tamil Nadu needs recognition under the Tamil Nadu Private Schools (Regulation) Act, 2018, granted by the School Education Department, with its own conditions on land, building and staff. Board affiliation, such as CBSE, is a further step. The trust is the body that applies, so its deed should name running schools as an object." },
    { q: "Our alumni in the US want to fund scholarships. Do we need FCRA?", a: "It depends on each donor's citizenship. An Indian citizen living abroad who gives from personal savings through normal banking channels is not treated as a foreign source. A donor who holds a foreign passport is, even if they have an OCI or PIO card. For those donors, the trust needs FCRA registration or prior permission before accepting the money." },
    { q: "Our trust is new. Can it get FCRA registration?", a: "Not yet. Registration needs at least three years of existence and at least ₹15 lakh spent on core activities in the last three financial years, not counting administrative costs. Until then, apply for prior permission for a specific donor, a set amount and a stated purpose. Since April 2025, money under prior permission must be received within three years of approval and used within four." },
    { q: "What changed in FCRA in 2026?", a: "Amendment rules notified on 22 June 2026 require applicants to choose their purposes from a notified list and name the states where they work, with an extra fee for each additional one. They widen who counts as a key functionary, and an NGO with a foreign national (other than a person of Indian origin) in such a role is not eligible. Renewal needs proof of at least ₹10 lakh of foreign money used in the previous two financial years. A separate FCRA amendment bill was sent to a parliamentary committee in August 2026 and is not yet law." },
    { q: "Where must foreign donations be received?", a: "Only in the FCRA account at SBI's New Delhi Main Branch. Foreign money cannot be mixed with local donations, cannot be passed on to another NGO, and no more than 20% of it can go on administrative expenses." },
    { q: "Can a school trust that charges fees still get 12A and 80G?", a: "It can, provided the trust exists for education rather than private profit, any surplus goes back into the institution, and the deed is irrevocable with no benefit to the founders' family. Under the Income-tax Act, 2025, registration is section 332 (formerly 12A) and donor approval is section 354 (formerly 80G). Regular registration usually lasts five tax years and must be renewed at least six months before it expires." },
    { q: "Trust, society or Section 8 company for a college in Tambaram?", a: "A trust is the most common choice for a founding family that wants to keep control within a small board. A society suits a group of teachers or alumni who want elected management. A Section 8 company is more formal and costlier to run, but some funders prefer it. All three can be the educational agency behind a school or college." },
  ],

  related: nearbyAreas("P4-A6"),
  relatedTitle: "NGO registration in areas near Tambaram",

  final: {
    title: "Set up your Tambaram educational trust the right way",
    sub: "Tell us about the school or fund you have in mind and where donations will come from. We'll plan the trust, tax approvals and FCRA in order.",
    message: "Hi National Filings, I want to set up an educational trust in Tambaram and take donations from alumni abroad. Can we talk?",
  },
  catalogue: ["Educational trust registration in Tambaram", "12A and 80G registration for schools and NGOs in Tambaram", "FCRA prior permission and registration for NGOs in Tambaram"],
};
