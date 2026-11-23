import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { NGO_SERVICE, nearbyAreas } from "./shared";

/**
 * P4-A10 · NGO Registration in Gerugambakkam (/chennai/ngo-registration-in-gerugambakkam).
 * Primary keyword: "ngo registration in gerugambakkam". No office in Gerugambakkam: clients work with us over WhatsApp and
 * email and can visit our Kundrathur office.
 * Angle: new apartment communities: apartment owners' associations (now under the Tamil Nadu Apartment Ownership Act, 2022
 * and its 2024 Rules, not the Societies Act by default), community libraries, residents running welfare drives, and a trust
 * for residents who want a charity with 80G. Kept distinct from P1-A10, P2-A10, P3-A10, the Pallavaram NGO page (P4-A2,
 * residents' associations as societies) and the P4 cluster pages.
 *
 * Local facts (reused from the verified P1-A10 JSDoc): Gerugambakkam lies on the Kundrathur road about 4 km from Porur
 * junction, in Kundrathur taluk, and is among the villages annexed to Kundrathur Municipality; new apartment projects are
 * being built and sold there. PIN not stated.
 *
 * Facts checked (Nov 2026):
 * - Tamil Nadu Apartment Ownership Act, 2022 (TN Act 44 of 2022) repeals and re-enacts the 1994 Act (s.31). s.4(1): the
 *   promoter or majority of apartment owners submits a declaration to the competent authority after the completion
 *   certificate; buildings existing at commencement also file. s.6(3): after acceptance, the majority of owners make bye-laws
 *   and submit them to the competent authority, who registers them. s.7: on registration of the bye-laws the owners form the
 *   association; where an existing building has a single association, it is deemed the association. s.2(z): "society" means
 *   an association existing at commencement, representing the majority of owners, registered under the Tamil Nadu
 *   Co-operative Societies Act, 1983 or the Tamil Nadu Societies Registration Act, 1975. s.10: federation where a property
 *   has more than one project with two or more associations. s.21: accounts audited within three months of the financial
 *   year end; audited accounts, auditor's report and members' statement filed with the competent authority.
 *   "Apartment owner" includes a lessee for 30 years or more (s.2(c)).
 *   (Act text: prsindia.org/files/bills_acts/acts_states/tamil-nadu/2022/ActNo44of2022TamilNadu.pdf)
 * - Tamil Nadu Apartment Ownership (Removal of Difficulties) Order, 2024, G.O. Ms. No. 170, 24 Sep 2024: the declaration time
 *   in s.4(1) changed from 90 days to 365 days after the completion certificate, and from 180 to 365 days from commencement for
 *   existing buildings. G.O. Ms. No. 172: District Registrars of the Registration Department notified as competent authorities;
 *   G.O. Ms. No. 173: jurisdictional Deputy Inspectors General of Registration as appellate authorities.
 *   (stationeryprinting.tn.gov.in/extraordinary/2024/302_Ex_II_2_2024.pdf and 304_Ex_II_2_2024.pdf)
 * - Tamil Nadu Apartment Ownership Rules, 2024 notified 24 Sep 2024; before the Act associations were formed under the
 *   co-operative or societies statutes. (dtnext.in "TN govt notifies Apartment Ownership Rules to safeguard the interest of
 *   owners"; jsalaw.com "The overhaul of the law relating to apartment ownership in Tamil Nadu"). The commencement date is not
 *   stated on the page because sources differ.
 * - Societies: Tamil Nadu Societies Registration Act, 1975; District Registrar; at least seven members; memorandum and bylaws;
 *   yearly filings. (tnreginet.gov.in; as verified for P4-C2, society.ts)
 * - Trusts: deed registered with the Sub-Registrar with the settlor and two witnesses; stamp duty per Tamil Nadu rates.
 *   (as verified for P4-C1, trust.ts)
 * - Income-tax Act, 2025: section 332 (formerly 12A/12AB), section 354 (formerly 80G), donor deduction under section
 *   133(1)(b)(ii); Form 104 provisional, valid three tax years or up to six months from commencement of activities, whichever
 *   is earlier; Form 105 regular, generally five tax years. (incometax.gov.in Form 104 and 106 FAQs; incometaxindia.gov.in
 *   form-105-faqs). Deduction not available under the default new regime (section 202, as verified for P3-A10).
 * - CSR: rule 4(1)(d) Companies (CSR Policy) Rules as amended 2021: 12A and 80G plus three years' track record; Form CSR-1
 *   (rule 4(2)). (ca2013.com/wp-content/uploads/2021/01/CSRAmendmentRules_22012021.pdf)
 * - No fee figures. Timelines are estimates.
 */

const whatsapp = "Hi National Filings, I live in an apartment in Gerugambakkam and want to register our residents' group.";

export const ngoGerugambakkamPage: LicencePageData = {
  id: "P4-A10",
  service: NGO_SERVICE,
  meta: {
    title: "NGO Registration in Gerugambakkam | National Filings",
    description: "NGO registration in Gerugambakkam for apartment communities: owners' associations under the 2022 Act, library societies and trusts with 80G.",
  },
  hero: {
    headline: { line1: "NGO Registration", line2Before: "in Gerugambakkam, ", accent: "Lobby to Library" },
    sub: "New apartment blocks along the Kundrathur road have brought owners' associations, book corners in the clubhouse and residents' donation drives. Each of these sits under a different law. We sort out which, from the owners' association to a trust that can issue 80G receipts.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "Building2",
    kicker: "Gerugambakkam, Chennai",
    title: "Trust Deed Registered",
    line: "Your Gerugambakkam NGO",
    stamp: "80G approved",
    chips: ["Owners' association checked", "Library society or trust", "80G for donors"],
    steps: ["Purpose", "Law", "Draft", "Register", "80G"],
  },

  benefitsSection: {
    title: "Why Gerugambakkam residents put community work on paper",
    lead: "A new complex fills up fast, and so do its WhatsApp groups. Once there is common money, a shelf of donated books or a donation drive, someone has to hold it in a name that isn't a resident's own.",
    cta: {
      title: "Starting a residents' group in a new block?",
      sub: "Tell us whether it's about common areas, a library or charity work. Each goes under a different law, and we'll tell you which.",
      message: "Hi National Filings, we're residents of a new apartment in Gerugambakkam. Which registration does our group need?",
    },
  },
  benefits: [
    { icon: "Building2", title: "The right law for common areas", line: "Owners' associations now come under the Tamil Nadu Apartment Ownership Act, 2022, not a society by default." },
    { icon: "Landmark", title: "Money kept in the right pocket", line: "Maintenance, library and charity funds held in separate accounts with separate books." },
    { icon: "ScrollText", title: "Bye-laws that settle arguments", line: "Dues, repairs, elections and the use of common areas decided by registered rules." },
    { icon: "GraduationCap", title: "A library that lasts", line: "Books, shelves and donations belong to a society or trust, not to the flat that hosts them." },
    { icon: "Percent", title: "80G receipts for donors", line: "A residents' trust approved under section 354 can give receipts donors can claim against." },
    { icon: "HeartHandshake", title: "Drives with a paper trail", line: "Food, clothes and school kit collections recorded, so residents can see where things went." },
    { icon: "Users", title: "Survives committee changes", line: "When volunteers move out or step down, the records and money stay with the body." },
    { icon: "Laptop", title: "Fits around office hours", line: "Drafts on WhatsApp and email, with weekend calls and meetings at our Kundrathur office." },
  ],

  applicantsSection: {
    title: "Gerugambakkam community groups we work with",
    lead: "Most of these groups are run by salaried residents in their spare hours. These are the kinds we see.",
  },
  applicants: [
    { icon: "Building2", title: "Apartment owners' associations", line: "Owners filing the declaration and bye-laws for a newly completed block." },
    { icon: "Layers", title: "Federations of multi-block projects", line: "Large projects where several associations manage shared amenities together." },
    { icon: "GraduationCap", title: "Community libraries", line: "A shelf in the clubhouse that has grown into a lending library with a register." },
    { icon: "HeartHandshake", title: "Residents' welfare drives", line: "Food, clothing and festival collections for workers and families nearby." },
    { icon: "Users", title: "Staff welfare funds", line: "Residents pooling money for the families of guards, housekeeping staff and drivers who work in the complex." },
    { icon: "UserCheck", title: "Senior residents' circles", line: "Retired parents organising health talks, outings and help for those living alone." },
    { icon: "Home", title: "Layout and street associations", line: "Plotted layouts of independent houses, which register as a society instead." },
    { icon: "Leaf", title: "Green and waste committees", line: "Composting, tree planting and segregation drives that want to reach beyond the gate." },
  ],

  opportunities: {
    eyebrow: "Community life",
    title: "What Gerugambakkam's apartment communities organise",
    intro: "New blocks, young families and retired parents make for busy common halls. These four kinds of work bring most residents to us.",
    // Pexels licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "Building2", title: "Owners' associations", image: "https://images.pexels.com/photos/32355381/pexels-photo-32355381.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Looking up at tall cream-coloured apartment towers under a cloudy sky", credit: "Rakesh Rabha / Pexels" },
      { icon: "GraduationCap", title: "Community libraries", image: "https://images.pexels.com/photos/16504587/pexels-photo-16504587.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Young woman in glasses reading a book beside tall library shelves", credit: "Shantanu Kumar / Pexels" },
      { icon: "HeartHandshake", title: "Welfare drives", image: "https://images.pexels.com/photos/11200117/pexels-photo-11200117.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Box overflowing with folded clothes, with a handwritten donate sign on the front", credit: "Towfiqu barbhuiya / Pexels" },
      { icon: "Users", title: "Common events", image: "https://images.pexels.com/photos/36797081/pexels-photo-36797081.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "People gathered under a large open pavilion with hanging plants and a shallow pool in front", credit: "vishranthanadka7 / Pexels" },
    ],
  },

  highlights: {
    eyebrow: "Which law applies",
    title: "Apartment association, society or trust in Gerugambakkam",
    lead: "Three different laws cover the groups in a new complex. Picking the wrong one is the most common problem we fix for residents.",
    items: [
      { icon: "Building2", label: "Tamil Nadu Apartment Ownership Act, 2022", title: "Owners' association", line: "Declaration and bye-laws filed with the District Registrar as competent authority. The association is formed once the bye-laws are registered.", highlight: true },
      { icon: "Users", label: "Tamil Nadu Societies Registration Act, 1975", title: "Society for a library or layout", line: "At least seven members, a memorandum and bylaws. Suits a lending library, a hobby club or a layout of independent houses." },
      { icon: "ScrollText", label: "Public charitable trust", title: "Trust for charity work", line: "A deed registered with the Sub-Registrar. A few trustees run it, which keeps charity money apart from maintenance dues." },
      { icon: "Percent", label: "Sections 332 and 354", title: "12A and 80G for the charity", line: "The trust applies for registration and donor approval. An owners' association serving its own members usually doesn't qualify." },
    ],
  },

  documentsSection: {
    title: "Papers for a Gerugambakkam residents' body",
    lead: "What we need depends on which body you're setting up. Send the papers on WhatsApp or email as residents find them.",
  },
  documents: [
    { icon: "IdCard", title: "For founders or trustees", items: ["PAN and Aadhaar", "Passport size photo", "Address proof, such as the sale deed or rent agreement", "Mobile number and email for OTPs"], hint: "Tenants can be trustees or society members. An owners' association is for owners, including those on a lease of 30 years or more." },
    { icon: "Building2", title: "For an owners' association", items: ["Completion certificate of the building", "List of owners with flat numbers and sale deed details", "Draft bye-laws agreed by the majority of owners", "Details of the common areas and facilities"], hint: "The declaration is due within 365 days of the completion certificate, under the 2024 order that extended the original 90 days." },
    { icon: "FileText", title: "For a library society or charity trust", items: ["Name and two alternatives", "Objects, such as a lending library or welfare drives", "Address for the registered office", "No objection letter from the owner of the flat or hall used"], hint: "Using the clubhouse as the address needs the owners' association's written consent." },
  ],
  documentsNote: {
    title: "Not sure which law your group falls under?",
    sub: "Send us a line on what the group does and who pays into it. We'll tell you the route before anyone collects documents.",
    message: "Hi National Filings, our apartment in Gerugambakkam has a residents' group. Can you tell us how to register it?",
  },

  processSection: {
    title: "How we set up a Gerugambakkam community body",
    lead: "Residents usually meet in the evenings or at weekends, so most of this runs on WhatsApp and email. Founders can also meet us at our Kundrathur office.",
    cta: {
      title: "Book a Saturday call",
      sub: "We're open on Saturdays. Tell us a time that suits your committee.",
      message: "Hi National Filings, can our Gerugambakkam residents' committee have a call with you on Saturday about registration?",
    },
  },
  steps: [
    { title: "Sort out the purpose", time: "First call", sub: "Common areas, a library or charity. Each points to a different law." },
    { title: "Draft the papers", time: "3-7 days", sub: "Bye-laws for the owners' association, or bylaws or a trust deed for the other bodies." },
    { title: "Collect signatures", time: "As residents are free", sub: "The majority of owners for the association, seven members for a society, settlor and witnesses for a trust." },
    { title: "File and register", time: "2-6 weeks", sub: "District Registrar for the association or society, Sub-Registrar for the trust deed." },
    { title: "Tax registration", time: "After registration", sub: "PAN and bank account, then Forms 104 and 105 for 12A and 80G where the body does charity." },
  ],
  processNote: "Timelines are estimates and start once signatures and documents are complete. The District Registrar, the Sub-Registrar and the Income Tax Department set their own pace.",

  mistakesSection: {
    title: "Mistakes we fix for Gerugambakkam apartment groups",
    lead: "New complexes often copy what an older building did years ago. The law for apartments has changed since then.",
  },
  mistakes: [
    { icon: "Building2", title: "A society instead of the Act's process", problem: "Owners of a newly completed block register a society under the 1975 Act and assume that settles their association.", fix: "For a building completed now, the 2022 Act needs a declaration and registered bye-laws. We file both with the District Registrar." },
    { icon: "Wallet", title: "Charity money in the maintenance account", problem: "Festival collections for workers' families go into the same account as lift repairs and security bills.", fix: "We set up a separate trust or society for charity work, with its own account and books." },
    { icon: "Percent", title: "80G asked of the owners' association", problem: "Owners expect the association to issue 80G receipts for their maintenance contributions.", fix: "Maintenance is paid for the owners' own benefit. For tax-deductible giving, residents need a separate charitable trust." },
    { icon: "CalendarClock", title: "Declaration window missed", problem: "The builder and the owners each wait for the other, and the 365 days after the completion certificate slip by.", fix: "We get the promoter or the majority of owners to file early, with the papers the District Registrar asks for." },
  ],

  costSection: {
    title: "What registration costs for a Gerugambakkam community group",
    lead: "Government fees and stamp duty go to the department. Our fee depends on which body you're setting up, and we quote it in writing first.",
    cta: {
      title: "Get a quote for your complex",
      sub: "Tell us the number of flats or members and what the group does.",
      message: "Hi National Filings, can I get a quote to register our apartment group in Gerugambakkam?",
    },
  },
  costs: [
    { icon: "Stamp", label: "As per Tamil Nadu rates", title: "Government fees and stamp duty", line: "Fees for the declaration and bye-laws or the society filing, or stamp duty on a trust deed." },
    { icon: "FilePen", label: "Quoted upfront", title: "Drafting and filing", line: "Bye-laws, bylaws or a trust deed written for your community, and the filing itself.", highlight: true },
    { icon: "Percent", label: "Quoted separately", title: "12A and 80G", line: "Only for the body that will take donations for charitable work." },
    { icon: "ClipboardCheck", label: "Quoted per year", title: "Yearly compliance", line: "Audit coordination, filings with the District Registrar and income tax returns." },
  ],

  compliance: {
    eyebrow: "Year after year",
    title: "What each Gerugambakkam body files every year",
    lead: "The owners' association, a library society and a charity trust each have their own filings. Keep them apart and none gets missed.",
    items: [
      { icon: "Calculator", label: "Within three months of year end", title: "Association accounts audited", line: "Every owners' association or federation has its accounts audited within three months of the financial year closing." },
      { icon: "FileCheck2", label: "As the Rules prescribe", title: "Filing with the competent authority", line: "Audited accounts, the auditor's report and the members' details filed with the District Registrar." },
      { icon: "Users", label: "After the general body meeting", title: "Society filings", line: "Accounts and the current members' list filed with the Registrar for a library or layout society." },
      { icon: "RefreshCw", label: "Every five tax years", title: "12A and 80G renewal", line: "The charity trust renews registration under section 332 and approval under section 354 before they expire." },
    ],
  },

  reasonsTitle: "Why Gerugambakkam residents come to us",
  reasons: [
    { icon: "Scale", title: "Right law first", line: "Apartment Ownership Act, Societies Act or a trust, settled before any drafting." },
    { icon: "MessageCircle", title: "Works around office hours", line: "WhatsApp and email for drafts, with Saturday calls for committees." },
    { icon: "MapPinned", title: "Kundrathur office", line: "On the same Kundrathur road. Open Monday to Saturday, 9 am to 7 pm." },
    { icon: "Percent", title: "80G done properly", line: "Forms 104 and 105, objects checked and renewal dates tracked." },
    { icon: "Award", title: "Experience since 2012", line: "Registration and compliance work for Chennai bodies and businesses." },
    { icon: "ReceiptText", title: "Fees agreed in writing", line: "Government fees and our fee shown separately." },
  ],

  faqTitle: "NGO registration in Gerugambakkam: questions from residents",
  faqs: [
    { q: "How is an apartment owners' association registered in Tamil Nadu now?", a: "Under the Tamil Nadu Apartment Ownership Act, 2022, which replaced the 1994 Act, and the Rules notified in September 2024. The promoter or the majority of owners files a declaration with the competent authority, which is the District Registrar of the Registration Department. Once the declaration is accepted, the majority of owners make bye-laws and submit them for registration. When the bye-laws are registered, the owners form the association. Appeals go to the jurisdictional Deputy Inspector General of Registration." },
    { q: "Our block got its completion certificate recently. Is there a deadline?", a: "Yes. The Act first allowed 90 days from the completion certificate to file the declaration. A government order of September 2024 extended this to 365 days, and to 365 days from the Act's commencement for buildings that already existed. File early, because the bye-laws and the association can't be registered until the declaration is accepted." },
    { q: "Our owners registered a society years ago. Do we have to start again?", a: "Not always. If your building existed when the 2022 Act came into force and has a single association representing the majority of owners, registered under the Tamil Nadu Societies Registration Act, 1975 or the co-operative societies law, it is treated as the association under the new Act. The declaration for the building still has to be filed. If there are rival groups, we check what the Act needs before advising." },
    { q: "We live in a layout of independent houses. Does the Apartment Ownership Act apply?", a: "Usually not. The Act deals with apartments in a building and the common areas they share. A residents' welfare association for a plotted layout or a street of independent houses usually registers as a society under the Tamil Nadu Societies Registration Act, 1975, with at least seven members, a memorandum and bylaws." },
    { q: "Can our clubhouse library be registered on its own?", a: "Yes. A lending library run by residents who want a say suits a society, with members electing the committee. If a few residents fund and run it, a trust works too. Either way, keep it separate from the owners' association so books and donations don't mix with maintenance money. If it later wants CSR support from residents' employers, the CSR rules generally ask for 12A, 80G, three years' track record and Form CSR-1 with the MCA." },
    { q: "Some residents want a charity that gives 80G receipts. How do we set it up?", a: "Form a public charitable trust with its own trustees and a deed registered with the Sub-Registrar, then apply under the Income-tax Act, 2025: section 332 for registration, formerly 12A, and section 354 for donor approval, formerly 80G. A new trust files Form 104 for provisional registration, valid for three tax years or until six months after activities start, whichever is earlier, then Form 105 for regular registration, generally for five tax years. The default new tax regime doesn't allow the donation deduction, so only donors who choose the old regime benefit. We can't promise approval." },
    { q: "Do we need to visit your office from Gerugambakkam?", a: "No. We have no office in Gerugambakkam, and most residents' groups work with us over WhatsApp and email. If your committee wants to meet, our office is in Karaima Nagar, Kundrathur, on the same Kundrathur road, open Monday to Saturday, 9 am to 7 pm." },
  ],

  related: nearbyAreas("P4-A10"),
  relatedTitle: "NGO registration in areas near Gerugambakkam",

  final: {
    title: "Set up your Gerugambakkam community body under the right law",
    sub: "Tell us what your residents want to run. We'll match it to the right law and handle the papers.",
    message: "Hi National Filings, I live in an apartment in Gerugambakkam and want to register our residents' group. Can we talk?",
  },
  catalogue: ["Apartment owners' association registration in Gerugambakkam", "Community library society registration in Gerugambakkam", "Charitable trust and 80G registration in Gerugambakkam"],
};
