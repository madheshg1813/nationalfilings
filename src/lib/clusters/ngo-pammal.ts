import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { NGO_SERVICE, nearbyAreas } from "./shared";

/**
 * P4-A3 · NGO Registration in Pammal (/chennai/ngo-registration-in-pammal).
 * Primary keyword: "ngo registration in pammal". We have no office in Pammal; clients work with us over WhatsApp and email
 * and can visit our Kundrathur office.
 * Angle: education charities in a dense residential suburb. Free tuition for school children, scholarships, evening study
 * centres and small libraries run by retired teachers and parents. Explains a trust for a small education charity, why
 * education counts as a charitable purpose for the exemption, and 80G (now section 354) so donors can claim a deduction.
 * Kept distinct from the Pammal company (P1-A3), GST (P2-A3) and income tax (P3-A3) pages and the NGO pillar and clusters.
 *
 * Local facts (reused from the verified P1-A3 JSDoc): Pammal was a municipality merged into Tambaram City Municipal
 * Corporation in 2021; Chengalpattu district; Pammal firka of Pallavaram taluk; PIN 600075; population 75,870 over about
 * 13 sq km at the 2011 census, so a dense residential suburb; neighbours include Anakaputhur, Pallavaram and Kundrathur.
 * (en.wikipedia.org/wiki/Pammal)
 *
 * Facts checked (Nov 2026):
 * - Charitable trust in Tamil Nadu: no separate public trusts act; created by a trust deed registered with the Sub-Registrar
 *   (Registration Department, tnreginet.gov.in). Stamp duty depends on the corpus, so no figure. (reused from trust.ts P4-C1)
 * - Society: Tamil Nadu Societies Registration Act, 1975, District Registrar, at least seven members. (reused from society.ts)
 * - "Charitable purpose" moved from s.2(15) of the 1961 Act to s.2(23) of the Income-tax Act, 2025, with substantially the same
 *   wording; it names relief of the poor, education, yoga and medical relief. The commercial-receipts restriction for
 *   "advancement of any other object of general public utility" moved out of the definition into a separate section (346).
 *   (lkslaw.com "Cancellation risk for GPU-based NPOs diluted"; taxguru.in concise manual on non-profits under the 2025 Act)
 * - "Education" read as systematic schooling and instruction: Sole Trustee, Lok Shikshana Trust v CIT (1975) 101 ITR 234 (SC).
 * - Registration (formerly 12A/12AB) is section 332; donor approval (formerly 80G(5)) is section 354. Form 104 for
 *   provisional registration or approval, order in Form 106 with a 16-digit URN; provisional validity three tax years or until
 *   six months from the start of activities, whichever is earlier; then regular registration in Form 105.
 *   (incometaxindia.gov.in/documents/d/guest/form-104-faqs; incometax.gov.in Form 104 and 106 FAQs; form-105-faqs)
 * - Donor deduction: section 133 (formerly 80G). Only donations in money; a donation over ₹2,000 must be paid other than in
 *   cash. (incometaxindia.gov.in/w/section-133-94) Not available to individuals under the default tax regime (section 202,
 *   formerly 115BAC). (taxtmi.com notes on section 133)
 * - FCRA: Indian citizens living abroad are not a foreign source; foreign citizens, including OCI card holders, are. Registration
 *   generally needs three years of existence. (fcraonline.nic.in FAQs; nishithdesai.com social sector hotline, Apr 2025)
 * - No fee figures. Timelines are estimates.
 */

const whatsapp = "Hi National Filings, a few of us in Pammal run free tuition for school children and want to register it as an NGO.";

export const ngoPammalPage: LicencePageData = {
  id: "P4-A3",
  service: NGO_SERVICE,
  meta: {
    title: "NGO Registration in Pammal, Chennai | National Filings",
    description: "NGO registration in Pammal for free tuition, scholarships and study centres. Education trust deed, section 332 exemption and 80G for your donors.",
  },
  hero: {
    headline: { line1: "NGO Registration", line2Before: "", accent: "in Pammal" },
    sub: "Start your NGO in Pammal on a strong footing. We handle trust deeds, society bylaws or Section 8 incorporation, along with tax registrations.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "GraduationCap",
    kicker: "Pammal, Chennai 600075",
    title: "Education Trust Deed",
    line: "Your Pammal NGO",
    stamp: "Donor approval",
    chips: ["Objects: education", "Two or more trustees", "Scholarship rules set"],
    steps: ["Objects", "Deed", "Register", "Section 332", "80G"],
  },

  benefitsSection: {
    title: "What registering does for a Pammal education charity",
    lead: "Free classes run happily on goodwill for a year or two. Then a parent wants a receipt, a company offers a grant, or the room needs rent. Registration lets the work grow past one person's pocket.",
    cta: {
      title: "Running classes already, with no paperwork?",
      sub: "Tell us how many children you teach, who funds it and who helps. We'll suggest the right structure before anything is drafted.",
      message: "Hi National Filings, we run free evening classes for children in Pammal. Which NGO structure suits us?",
    },
  },
  benefits: [
    { icon: "Landmark", title: "A bank account in the charity's name", line: "Fees for books and donations stop passing through a volunteer's savings account." },
    { icon: "ShieldCheck", title: "Surplus kept tax-free", line: "After income tax registration, money spent on teaching children is not taxed." },
    { icon: "ReceiptText", title: "Receipts donors can use", line: "With donor approval, well-wishers can claim a deduction for what they give." },
    { icon: "GraduationCap", title: "A scholarship fund that lasts", line: "A corpus held by the trust keeps paying fees after the founders step back." },
    { icon: "Users", title: "Trustees share the load", line: "Decisions and cheque signing move from one teacher to a small board." },
    { icon: "Home", title: "Space on a proper footing", line: "A lease or permission letter for the study room in the charity's own name." },
    { icon: "Handshake", title: "Ready for school tie-ups", line: "Schools and companies prefer working with a registered body, not an individual." },
    { icon: "ClipboardCheck", title: "Records parents trust", line: "Accounts and minutes show where every rupee for the children went." },
  ],

  applicantsSection: {
    title: "Pammal groups that register education charities with us",
    lead: "Most are neighbours who started small. A few teachers, a few parents, and children from the same streets who need help with studies.",
  },
  applicants: [
    { icon: "GraduationCap", title: "Retired teachers' circles", line: "Former school teachers giving free coaching in maths, science and English." },
    { icon: "Users", title: "Parents' groups", line: "Parents who pool money for exam fees, guides and coaching for children who can't pay." },
    { icon: "Coins", title: "Scholarship funds", line: "Families or alumni setting aside money each year for college and diploma fees." },
    { icon: "FileText", title: "Neighbourhood libraries", line: "A room of donated books, newspapers and a quiet table for exam preparation." },
    { icon: "Clock", title: "Evening study centres", line: "Supervised homework hours for children whose parents work late shifts." },
    { icon: "Laptop", title: "Computer literacy classes", line: "Volunteers teaching typing, basic software and online forms to school leavers." },
    { icon: "HeartHandshake", title: "Spoken English volunteers", line: "Young professionals coaching students for interviews on weekends." },
    { icon: "Home", title: "Residents' welfare groups", line: "Associations that want a separate body for their education work." },
  ],

  opportunities: {
    eyebrow: "Learning locally",
    title: "The education work Pammal volunteers already do",
    intro: "Pammal packs close to seventy-six thousand people into about 13 sq km, so help with studies is usually a street away. These are the four kinds of work we register most.",
    // Pexels licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "GraduationCap", title: "Free tuition classes", image: "https://images.pexels.com/photos/18012462/pexels-photo-18012462.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Schoolboys sitting at a wooden desk in a classroom with a school bag and water bottle", credit: "Pexels" },
      { icon: "Clock", title: "Evening study centres", image: "https://images.pexels.com/photos/1895114/pexels-photo-1895114.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Children in school uniforms sitting together on the floor of a school veranda", credit: "Pexels" },
      { icon: "FileText", title: "Libraries and reading rooms", image: "https://images.pexels.com/photos/33745692/pexels-photo-33745692.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Two students in maroon blazers reading at a table in front of library shelves", credit: "Gokuldham Nar / Pexels" },
      { icon: "Home", title: "Lessons at home", image: "https://images.pexels.com/photos/34195649/pexels-photo-34195649.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Woman in a blue saree teaching four children around a harmonium at home", credit: "Fakhrul Hassan / Pexels" },
    ],
  },

  highlights: {
    eyebrow: "Why education qualifies",
    title: "How the tax law treats a Pammal tuition or scholarship charity",
    lead: "Education is named in the law's definition of charitable purpose. That helps a small teaching charity, but only when the work is real teaching and is open to the public.",
    items: [
      { icon: "Scale", label: "Section 2(23), formerly 2(15)", title: "Education is a named purpose", line: "It sits in the definition beside relief of the poor and medical relief, so it is not judged under the stricter business limits for general public utility objects.", highlight: true },
      { icon: "GraduationCap", label: "What courts count", title: "Systematic teaching", line: "The Supreme Court has read education as schooling and structured instruction. Regular classes, a study centre and fee support fit. Occasional talks are weaker." },
      { icon: "Users", label: "Who can benefit", title: "Open to the public", line: "Scholarships must go to children chosen on need or merit. A fund limited to the founders' own relatives is a private trust, not a charity." },
      { icon: "ShieldCheck", label: "Section 332, formerly 12A", title: "Exemption needs registration", line: "The trust deed alone doesn't make income tax-free. The charity applies to the Income Tax Department, first for provisional registration." },
    ],
  },

  documentsSection: {
    title: "Papers for a Pammal education trust",
    lead: "A small trust needs less than most people expect. Send these on WhatsApp or email, or bring them to our Kundrathur office.",
  },
  documents: [
    { icon: "IdCard", title: "For the settlor and trustees", items: ["PAN and Aadhaar of each person", "A passport photo of each", "Phone number and email of each", "Two witnesses with ID for the registration day"], hint: "Many retired teachers have PAN but no email. We set one up for the trust's filings." },
    { icon: "Home", title: "For the trust's address", items: ["Latest property tax receipt or EB bill", "Owner's no-objection letter, if the house isn't the settlor's", "Rental agreement, if the study room is rented"], hint: "The address can be a trustee's house in Pammal. A separate room isn't needed to register." },
    { icon: "ScrollText", title: "For the deed and tax filings", items: ["The objects in your own words: tuition, scholarships, library", "Initial corpus amount the settlor will give", "How trustees are added or replaced", "Rules for choosing scholarship students"], hint: "Write down who you help and how you choose them. We turn that into objects the Income Tax Department accepts." },
  ],
  documentsNote: {
    title: "Only have a notebook of names and fees paid?",
    sub: "That's a good start. Share it and we'll show what belongs in the deed and what stays in your records.",
    message: "Hi National Filings, we pay school fees for some Pammal children and want to form a trust. What papers do we need?",
  },

  processSection: {
    title: "From kitchen-table plan to registered trust in Pammal",
    lead: "Most of the work happens on calls and WhatsApp. Trustees meet once at the Sub-Registrar's office to sign and register the deed.",
    cta: {
      title: "Talk to us before you write the deed",
      sub: "A deed drafted with the tax application in mind saves a rewrite later. We'll go through your objects on a call.",
      message: "Hi National Filings, can we talk about a trust deed for our education charity in Pammal?",
    },
  },
  steps: [
    { title: "Fix the objects", time: "Day 1-2", sub: "We agree what the trust will do: tuition, scholarships, a library, or all three." },
    { title: "Draft the deed", time: "2-4 days", sub: "Trustees, corpus, scholarship rules and a clause on what happens if the trust closes." },
    { title: "Register the deed", time: "On the booked date", sub: "Stamp duty paid and the deed registered at the Sub-Registrar with two witnesses." },
    { title: "PAN and bank account", time: "1-2 weeks", sub: "The trust gets its own PAN, then an account that two trustees operate." },
    { title: "Apply for exemption", time: "After the account opens", sub: "Provisional registration and donor approval sought together in Form 104." },
  ],
  processNote: "Timelines are estimates. The Sub-Registrar's booking, the PAN, the bank and the Income Tax Department each set their own pace, and approval is never guaranteed.",

  mistakesSection: {
    title: "Where small education charities in Pammal go wrong",
    lead: "Most of these come from good intentions and a deed copied from someone else's trust.",
  },
  mistakes: [
    { icon: "Users", title: "Scholarships only for relatives", problem: "A family sets up a fund in a grandparent's name and the deed says it will pay fees for children of the family.", fix: "We write objects open to any deserving child, with selection rules, so the trust is charitable and can seek exemption." },
    { icon: "Banknote", title: "Cash collected at functions", problem: "Donors hand over cash at the annual day and later ask for 80G receipts, but cash above ₹2,000 gets no deduction.", fix: "We set up UPI and bank transfer for donations and show you how to word each receipt." },
    { icon: "FileWarning", title: "Running for years without applying", problem: "The trust registers its deed, then forgets the Income Tax Department until a large donation arrives.", fix: "We file for provisional registration soon after the trust's PAN and bank account are ready, and diary the date for regular registration." },
    { icon: "ScrollText", title: "Objects written too widely", problem: "The deed lists every good cause, from health camps to sports, though the trust only teaches children.", fix: "We keep the objects focused on education, with room to add related work later through a proper amendment." },
  ],

  costSection: {
    title: "What setting up a Pammal education trust involves in cost",
    lead: "Government charges and our fee are shown separately. There is no government fee for the income tax applications. We quote our fee in writing after the first call.",
    cta: {
      title: "Ask for a written quote",
      sub: "Tell us the planned corpus and how many trustees you'll have. Stamp duty depends on both.",
      message: "Hi National Filings, can you quote for registering an education trust in Pammal with 80G?",
    },
  },
  costs: [
    { icon: "Stamp", label: "Government charge", title: "Stamp duty and registration fee", line: "Paid on the trust deed as per Tamil Nadu rates, mainly based on the corpus settled." },
    { icon: "FilePen", label: "Quoted upfront", title: "Deed drafting and registration", line: "Depends on the number of trustees and how detailed the scholarship rules are.", highlight: true },
    { icon: "ShieldCheck", label: "Quoted upfront", title: "Section 332 and 354 applications", line: "Provisional registration and donor approval. No government fee on the portal." },
    { icon: "Calculator", label: "Quoted yearly", title: "Accounts and returns", line: "Bookkeeping, audit coordination, the trust's return and donor statements." },
  ],

  compliance: {
    eyebrow: "Every year after",
    title: "Keeping a Pammal education trust in good standing",
    lead: "A teaching charity's yearly work is light, but missing it can cost the exemption. These are the parts we keep track of.",
    items: [
      { icon: "ReceiptText", label: "Through the year", title: "Donation records", line: "Donor name, PAN and amount noted for each gift, so statements and certificates match." },
      { icon: "FileText", label: "After the year closes", title: "Donor statement and certificates", line: "The charity files its statement of donations, and each donor gets a certificate to claim the deduction." },
      { icon: "Calculator", label: "Every year", title: "Audit and return", line: "Accounts audited where required and the trust's income tax return filed, even with no tax due." },
      { icon: "CalendarClock", label: "Before expiry", title: "Regular registration", line: "Provisional approval runs out after three tax years or earlier once work starts. We apply in time." },
    ],
  },
  reasonsTitle: "Why Pammal education groups register with us",
  reasons: [
    { icon: "GraduationCap", title: "Education objects drafted carefully", line: "Objects and scholarship rules written with the tax application in mind." },
    { icon: "MessageCircle", title: "Handled on WhatsApp", line: "Retired trustees share documents from home. No repeated trips." },
    { icon: "MapPinned", title: "Kundrathur office close by", line: "Visit us in Karaima Nagar, Kundrathur, Monday to Saturday, 9 am to 7 pm." },
    { icon: "ShieldCheck", title: "Tax side included", line: "Deed, PAN, provisional registration and donor approval handled in one plan." },
    { icon: "CalendarCheck", title: "Dates tracked for you", line: "Renewal and donor statement reminders sent before they fall due." },
    { icon: "Award", title: "Experience since 2012", line: "Registration and compliance work for Chennai organisations." },
  ],

  faqTitle: "Starting an education NGO in Pammal: questions we hear",
  faqs: [
    { q: "We teach about thirty children for free in Pammal. Do we really need to register?", a: "Not to keep teaching. You need it once money comes in from others. Registration gives the work a bank account, lets the surplus stay tax-free after income tax registration, and lets donors claim a deduction. Without it, donations are mixed with a volunteer's own money." },
    { q: "Is a trust enough for a small tuition or scholarship charity?", a: "Usually yes. A public charitable trust in Tamil Nadu is formed by a trust deed registered with the Sub-Registrar. Two or more trustees is practical, and there is no minimum membership as there is for a society. It suits a small group with one clear educational purpose." },
    { q: "Why does an education charity qualify for income tax exemption?", a: "Education is named in the definition of charitable purpose in the Income-tax Act, 2025 (section 2(23), formerly section 2(15)). Courts read education as systematic teaching, so regular coaching, study centres and fee support for students fit well. The exemption still needs registration under section 332, formerly 12A." },
    { q: "How do our donors get a tax deduction?", a: "The trust applies for approval under section 354 of the new Act, formerly 80G. Donors can then claim a deduction under section 133. The gift must be money, and anything above ₹2,000 must be paid by UPI, cheque or bank transfer. Individuals on the default new tax regime generally cannot claim it." },
    { q: "Can a new trust apply for 12A and 80G straight away?", a: "Yes, for provisional registration and approval in Form 104. Provisional status lasts three tax years or until six months after activities start, whichever is earlier. The trust then applies for regular registration in Form 105, which looks at the work actually done." },
    { q: "Can we take donations from relatives settled abroad?", a: "Indian citizens living abroad are not treated as a foreign source under FCRA, so their gifts can come in like local donations. Money from foreign citizens, including OCI card holders, is foreign contribution and needs FCRA registration or prior permission. Registration generally needs the NGO to have existed for three years." },
    { q: "Can a trustee's house in Pammal be the trust's address?", a: "Yes. A property tax receipt or EB bill for the house, with the owner's consent letter if needed, is usually enough. Classes can still run in a school room, a community hall or a terrace." },
  ],

  related: nearbyAreas("P4-A3"),
  relatedTitle: "NGO registration in areas near Pammal",

  final: {
    title: "Give your Pammal teaching work a legal home",
    sub: "Tell us who you teach, who funds it and who helps. We'll suggest the structure, draft the deed and apply for exemption and donor approval.",
    message: "Hi National Filings, we run an education charity in Pammal and want to register it with 80G. Can we talk?",
  },
  catalogue: ["Education trust registration in Pammal", "12A and 80G registration for charities in Pammal", "NGO compliance and donor receipts in Pammal"],
};
