import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { site } from "@/lib/site";
import { NGO_SERVICE, nearbyAreas } from "./shared";

/**
 * P4-A1 · NGO Registration in Kundrathur (/chennai/ngo-registration-in-kundrathur).
 * Primary keyword: "ngo registration in kundrathur". Our only office is in Karaima Nagar, Kundrathur (600069), so walk-ins work.
 * Angle: the temple town. Festival and annadhanam committees, devotee groups and local welfare charities: a public charitable
 * trust vs a society for such groups, why an HR&CE temple is never run by a private trust, and 12A/80G (now sections 332 and
 * 354 of the Income-tax Act, 2025) so donors get a deduction. Kept distinct from P1-A1, P2-A1, P3-A1 and the P4 cluster pages.
 *
 * Local facts: Kundrathur municipality, PIN 600069 (reused from the verified P1-A1 JSDoc). The town takes its name from
 * "kundru" (hill) after the Murugan temple on a hillock; it is the birthplace of Sekkizhar, author of the Periya Puranam, who has
 * a shrine at the foot of the hill, where the annual Sekkizhar Guru Puja is held.
 * (en.wikipedia.org/wiki/Kundrathur; en.wikipedia.org/wiki/Kundrathur_Murugan_Temple; temple.dinamalar.com/en/new_en.php?id=80)
 *
 * Facts checked (Nov 2026):
 * - Tamil Nadu has no public trusts act; a charitable trust is created by a trust deed registered with the Sub-Registrar
 *   (Registration Department, tnreginet.gov.in) with the settlor and two witnesses. Stamp duty depends on the corpus and any
 *   property settled, so no figure is quoted. (as verified for P4-C1, src/lib/clusters/trust.ts)
 * - Societies: Tamil Nadu Societies Registration Act, 1975, registered with the District Registrar through TNREGINET; at least
 *   seven members; memorandum and bylaws; yearly filings with the Registrar including accounts and the members' list.
 *   (as verified for P4-C2, src/lib/clusters/society.ts; tnreginet.gov.in)
 * - Hindu religious institutions and endowments in Tamil Nadu are governed by the Tamil Nadu Hindu Religious and Charitable
 *   Endowments Act, 1959, administered by the HR&CE Department. (hrce.tn.gov.in) The page never suggests a private trust can
 *   take over or manage such a temple.
 * - Income-tax Act, 2025 from 1 April 2026: registration of non-profits (formerly 12A/12AB) is section 332; donor approval
 *   (formerly 80G) is section 354. Form 104 is the application for provisional registration (order in Form 106); Form 105 is
 *   the application for regular registration and approval (order in Form 107). Regular registration is valid for five tax
 *   years; provisional status is followed by Form 105 once activities start, within the time limits in the FAQ. Registrations
 *   granted under the 1961 Act stay valid until they expire.
 *   (incometaxindia.gov.in/documents/d/guest/form-104-faqs; incometaxindia.gov.in/documents/d/guest/form-105-faqs;
 *   incometaxindia.gov.in/w/section-332-7; taxmann.com "Trust Registration in the New Income Tax Act 2025")
 * - FCRA registration: at least three years of existence and at least ₹15 lakh spent on core activities in the last three
 *   financial years (administrative spending excluded); otherwise prior permission. (fcraonline.nic.in; taxguru.in eligibility
 *   criteria for grant of FCRA registration)
 * - CSR-1 is filed with the MCA by entities that want to carry out CSR projects; the entity must hold 12A and 80G (now 332 and
 *   354) registration. (mca.gov.in, Companies (CSR Policy) Rules, 2014 as amended in 2021)
 * - NGO Darpan (ngodarpan.gov.in, NITI Aayog) gives a unique ID used when applying for government grants and schemes.
 * - No fee figures. Timelines are estimates.
 */

const whatsapp = "Hi National Filings, I'm in Kundrathur and our festival committee wants to register as a trust. Can I visit your office?";

export const ngoKundrathurPage: LicencePageData = {
  id: "P4-A1",
  service: NGO_SERVICE,
  meta: {
    title: "NGO Registration in Kundrathur, Chennai | National Filings",
    description: "NGO registration in Kundrathur for festival, annadhanam and devotee groups. Trust or society, then 12A and 80G so donors can claim a deduction.",
  },
  hero: {
    headline: { line1: "NGO Registration", line2Before: "in Kundrathur, ", accent: "Annadhanam to 80G" },
    sub: "Kundrathur grew around the Murugan temple on the hill and is the birthplace of Sekkizhar. The committees that feed devotees, run the festival days and help families in the town can register as a trust or society, and then apply so their donors get a tax deduction. Our office is in Karaima Nagar, a short ride from the hill.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "HeartHandshake",
    kicker: "Kundrathur, Chennai 600069",
    title: "Trust Deed Registered",
    line: "Your Kundrathur NGO",
    stamp: "80G approved",
    chips: ["Office in Karaima Nagar", "Trust or society", "Donor deduction"],
    steps: ["Meet", "Objects", "Deed", "Register", "12A/80G"],
  },

  benefitsSection: {
    title: "What a registered body gives a Kundrathur festival or welfare group",
    lead: "Many groups here have collected and spent money for years on trust alone. Registration puts the money, the bank account and the decisions on paper, so nobody is personally exposed when the committee changes.",
    cta: {
      title: "Committee unsure whether to register?",
      sub: "Bring two or three members to our office. We'll listen to what you do through the year and tell you which form fits.",
      message: "Hi National Filings, our group in Kundrathur runs annadhanam on festival days. Should we register as a trust or a society?",
    },
  },
  benefits: [
    { icon: "Landmark", title: "A bank account in the group's name", line: "No more festival collections sitting in one member's savings account." },
    { icon: "ReceiptIndianRupee", title: "Receipts donors can trust", line: "Numbered receipts in the trust's or society's name for every contribution." },
    { icon: "Percent", title: "Deduction for donors", line: "With 80G approval, now section 354, donors can claim a tax deduction." },
    { icon: "ShieldCheck", title: "Surplus kept tax free", line: "12A registration, now section 332, keeps income spent on the objects out of tax." },
    { icon: "Users", title: "Smooth change of office bearers", line: "The deed or bylaws say how members and trustees come and go." },
    { icon: "Soup", title: "Annadhanam on a firm footing", line: "Food purchases, cooks and volunteers paid and recorded through the body's own books." },
    { icon: "Handshake", title: "Ready for CSR and grants", line: "Registration is the first step towards CSR-1 and an NGO Darpan ID." },
    { icon: "MapPinned", title: "Help in your own town", line: "Karaima Nagar office. Members can sign and check papers across one table." },
  ],

  applicantsSection: {
    title: "Kundrathur groups that register with us",
    lead: "Most of the bodies we register here started as a few families pooling money for a festival or a free meal. These are the groups we hear from most.",
  },
  applicants: [
    { icon: "Soup", title: "Annadhanam committees", line: "Groups serving free meals to devotees on festival days and monthly star days." },
    { icon: "Users", title: "Festival day committees", line: "Street and area groups that arrange decorations, water and crowd help for the festival season." },
    { icon: "HeartHandshake", title: "Devotee and bhajan groups", line: "Groups that meet for bhajans, padayatra and reading, and collect for related charity." },
    { icon: "ScrollText", title: "Literary and Sekkizhar study circles", line: "Groups running Thirumurai classes, talks and competitions for children." },
    { icon: "UserCheck", title: "Old age and widow support", line: "Charities paying monthly help, medicines or food for elderly people in the town." },
    { icon: "GraduationCap", title: "Education funds", line: "Families and alumni giving fees, books and tuition to local schoolchildren." },
    { icon: "Stethoscope", title: "Health camp organisers", line: "Groups that run eye, dental and general check-up camps with nearby hospitals." },
    { icon: "Home", title: "Family charitable trusts", line: "A family settling a corpus in a parent's memory for local welfare work." },
  ],

  opportunities: {
    eyebrow: "Work done here",
    title: "The causes Kundrathur's charities are built around",
    intro: "Festival days on the hill, free meals for devotees, and quieter work for children and elderly people through the year. Each of these needs a registered body before donors and banks take it seriously.",
    // Pexels licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "Users", title: "Festival committees", image: "https://images.pexels.com/photos/10710416/pexels-photo-10710416.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Large crowd of devotees in front of a decorated temple chariot at a Tamil Nadu festival", credit: "surulivel k / Pexels" },
      { icon: "Soup", title: "Annadhanam", image: "https://images.pexels.com/photos/5410418/pexels-photo-5410418.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Vegetarian festival meal of rice, curries, payasam and banana served on a banana leaf", credit: "Pexels" },
      { icon: "HeartHandshake", title: "Devotee groups", image: "https://images.pexels.com/photos/4094848/pexels-photo-4094848.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Smiling woman in a saree lighting rows of clay oil lamps beside a small idol", credit: "Pexels" },
      { icon: "ScrollText", title: "Prayer and study circles", image: "https://images.pexels.com/photos/4882471/pexels-photo-4882471.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Women and children seated in a circle around puja offerings while a man reads from a book", credit: "Pexels" },
    ],
  },

  highlights: {
    eyebrow: "Trust or society",
    title: "Which form suits a Kundrathur temple-town group",
    lead: "Both are legal homes for charity. The question is who should control the body: a few trusted people, or a membership that votes.",
    items: [
      { icon: "ScrollText", label: "Public charitable trust", title: "For a small, settled committee", line: "A trust deed registered with the Sub-Registrar. A few trustees decide. Good for an annadhanam fund or a family trust.", highlight: true },
      { icon: "Users", label: "Society", title: "For a group with many members", line: "Registered with the District Registrar under the 1975 Act, with at least seven members, bylaws and elections." },
      { icon: "Landmark", label: "HR&CE temples", title: "The temple stays with the department", line: "Your trust or society runs its own charity. It does not take over or manage an HR&CE temple, its funds or its property." },
      { icon: "Percent", label: "Sections 332 and 354", title: "Formerly 12A and 80G", line: "Registration keeps the surplus tax free, and approval lets donors claim a deduction. Both are applied for after the trust or society exists." },
    ],
  },

  documentsSection: {
    title: "Papers for registering a Kundrathur charity",
    lead: "Bring these to our office or send them on WhatsApp. For a festival or annadhanam group, the old collection notebook is useful too.",
  },
  documents: [
    { icon: "IdCard", title: "For every trustee or member", items: ["PAN and Aadhaar", "Passport size photo", "Mobile number and email", "Address proof, if Aadhaar has an old address"], hint: "A society needs at least seven members signing. A trust needs the settlor, the trustees and two witnesses." },
    { icon: "Home", title: "For the registered office", items: ["Property tax receipt or EB bill for the address", "Rent agreement, if the place is rented", "No objection letter from the owner"], hint: "A member's home can be the office. A temple's premises can't be used without the temple administration's written permission." },
    { icon: "FileText", title: "For the work itself", items: ["List of objects: annadhanam, education, health and so on", "Names of the first trustees or office bearers", "Corpus amount, for a trust", "Past collection and spending records, if any"], hint: "For 12A and 80G later, the department looks closely at the objects, so we draft them with care." },
  ],
  documentsNote: {
    title: "Only have a collection book and a list of names?",
    sub: "That's enough to start. Bring it to Karaima Nagar and we'll work out the objects and the papers with you.",
    message: "Hi National Filings, our annadhanam group in Kundrathur has collection records and a list of members. Can we start registration?",
  },

  processSection: {
    title: "How we register a Kundrathur charity, step by step",
    lead: "The first meeting is usually at our office with the main members. After that, drafts and signing dates go on WhatsApp.",
    cta: {
      title: "Bring your committee in",
      sub: "Tell us a convenient day. Evenings and Saturdays work well for committees whose members have jobs.",
      message: "Hi National Filings, our committee in Kundrathur wants to register a trust. When can we come to your office?",
    },
  },
  steps: [
    { title: "Meet the committee", time: "First visit", sub: "We hear what the group does through the year and suggest a trust or a society." },
    { title: "Draft the objects", time: "2-4 days", sub: "Trust deed, or memorandum and bylaws, written around your real work and read out to the members." },
    { title: "Sign and register", time: "1-3 weeks", sub: "Deed registered at the Sub-Registrar, or society filed with the District Registrar through TNREGINET." },
    { title: "PAN and bank account", time: "1-2 weeks", sub: "PAN in the body's name and a bank account, so collections stop going into personal accounts." },
    { title: "Apply for 12A and 80G", time: "After registration", sub: "Provisional registration and approval under sections 332 and 354, then the regular one once work starts." },
  ],
  processNote: "Timelines are estimates. The Sub-Registrar, District Registrar and Income Tax Department set their own pace, and we can't promise that 12A or 80G will be granted.",

  mistakesSection: {
    title: "Mistakes we see in temple-town charities",
    lead: "Most of these come from goodwill without paperwork. They are easier to prevent than to fix later.",
  },
  mistakes: [
    { icon: "Landmark", title: "Naming the trust as if it owns the temple", problem: "A committee wants its deed to say it will manage the temple's festival, hundi or property.", fix: "We keep the objects to your own charity work. An HR&CE temple stays under the department, and your body works alongside it with permission." },
    { icon: "Wallet", title: "Collections in a member's account", problem: "Festival and annadhanam money goes into the treasurer's savings account for years.", fix: "We register the body, open its own account and set up simple receipts and a cash book." },
    { icon: "FileWarning", title: "Objects too narrow for 80G", problem: "The deed only mentions pooja and festival spending, then the group asks why donors get no deduction.", fix: "We draft objects around charity such as free food, education and health, so the 80G application has something to rest on." },
    { icon: "CalendarClock", title: "Provisional registration left to lapse", problem: "A new trust gets provisional 12A and 80G, then misses the time to apply for the regular one.", fix: "We note the date work started and file Form 105 within the time allowed." },
  ],

  costSection: {
    title: "What registering a Kundrathur charity costs",
    lead: "There are government charges and our fee. We give you both in writing at the first meeting.",
    cta: {
      title: "Get a written quote at the office",
      sub: "Tell us whether it's a trust or a society and roughly what the corpus is. We'll list each charge separately.",
      message: "Hi National Filings, can I get a quote to register a charitable trust in Kundrathur?",
    },
  },
  costs: [
    { icon: "Stamp", label: "As per Tamil Nadu rates", title: "Stamp duty and registration", line: "Depends on the corpus and any property settled on the trust. Paid to the Registration Department." },
    { icon: "FileSignature", label: "Quoted upfront", title: "Trust deed or society papers", line: "Drafting, member meetings and filing, quoted in writing before we start.", highlight: true },
    { icon: "Percent", label: "Quoted separately", title: "12A and 80G applications", line: "Provisional and regular applications under sections 332 and 354." },
    { icon: "ClipboardCheck", label: "Quoted per year", title: "Yearly accounts and returns", line: "Books, audit coordination and the yearly income tax and registrar filings." },
  ],

  compliance: {
    eyebrow: "After registration",
    title: "The yearly work for a Kundrathur charity",
    lead: "Registration is the start. These are the things that keep the trust or society and its tax status in good standing.",
    items: [
      { icon: "ReceiptText", label: "Every donation", title: "Proper receipts", line: "Numbered receipts in the body's name, with the donor's PAN where 80G deduction is claimed." },
      { icon: "Calculator", label: "Through the year", title: "Books of account", line: "Annadhanam, festival and welfare spending recorded with bills, not just totals." },
      { icon: "FileCheck2", label: "Every year", title: "Income tax return", line: "A registered body files its return each year, with an audit where the law needs one." },
      { icon: "RefreshCw", label: "Before expiry", title: "Renewal of 12A and 80G", line: "Regular registration under section 332 runs for five tax years. We apply again before it ends." },
    ],
  },

  reasonsTitle: "Why Kundrathur committees register with us",
  reasons: [
    { icon: "MapPinned", title: "Office in Karaima Nagar", line: "Open Monday to Saturday, 9 am to 7 pm. Committees can walk in together." },
    { icon: "Landmark", title: "Clear on HR&CE limits", line: "Objects drafted so your charity never overlaps the temple's administration." },
    { icon: "ScrollText", title: "Objects in plain words", line: "We read the deed or bylaws out to members before anyone signs." },
    { icon: "Percent", title: "Thinking ahead to 80G", line: "Papers drafted with the later tax applications in mind." },
    { icon: "Award", title: "Experience since 2012", line: "Registration and compliance work for Chennai bodies and businesses." },
    { icon: "ReceiptText", title: "Fees agreed in writing", line: "Government charges and our fee shown separately before we start." },
  ],

  faqTitle: "NGO registration in Kundrathur: what local committees ask",
  faqs: [
    { q: "Can our committee come to your Kundrathur office to discuss registration?", a: `Yes. We're at ${site.address.street}, ${site.address.city} ${site.address.postalCode}, open Monday to Saturday, 9 am to 7 pm. Bring two or three of the main members and any collection records. Message us first so we can keep time free for you.` },
    { q: "Our group serves annadhanam on festival days. Trust or society?", a: "If a handful of people have always run it and want to keep control, a public charitable trust is simpler. The deed is registered with the Sub-Registrar, with the settlor and two witnesses. If you have many members who expect a vote and elections, a society under the Tamil Nadu Societies Registration Act, 1975 fits better. It needs at least seven members and is registered with the District Registrar." },
    { q: "Can our trust take over running the hill temple or its festival?", a: "No. Hindu temples and endowments in Tamil Nadu come under the HR&CE Department under the 1959 Act. A private trust or society can't take over or manage such a temple, its hundi or its property. What you can do is run your own charity, such as free meals or water for devotees, with the permission of the temple administration where you use its premises." },
    { q: "Will donors to our trust get a tax deduction?", a: "Only after the body gets approval under section 354 of the Income-tax Act, 2025, which replaced 80G from 1 April 2026. A new body first applies for provisional registration and approval in Form 104, then for regular registration in Form 105 once its work has started. Approval is for charitable work, so a body whose objects are only pooja and festival spending may struggle to get it. We can't promise approval, but we draft the objects to give it a fair chance." },
    { q: "What is the difference between 12A and 80G?", a: "12A, now section 332, is registration of the trust or society itself, so income spent on its objects is not taxed. 80G, now section 354, is approval that lets donors claim a deduction for what they give. Most charities need both. Regular registration runs for five tax years and then has to be renewed. Registrations granted under the old Act stay valid until they expire." },
    { q: "Can a family set up a trust in Kundrathur in a parent's memory?", a: "Yes. A family can settle a corpus in a registered trust deed for charity such as education help, medical aid or meals. The trustees can be family members. If the trust is meant to be charitable and claim tax exemption, it should benefit the public, not just the family, and its objects and spending should show that." },
    { q: "Can our trust take CSR money or foreign donations?", a: "For CSR, the trust or society needs 12A and 80G registration and must file CSR-1 with the MCA before companies can fund its projects. For foreign donations, FCRA registration usually needs three years of existence and at least ₹15 lakh spent on core work over the last three years. Newer bodies can apply for prior permission for a specific donor. An NGO Darpan ID helps when you apply for government schemes." },
  ],

  related: nearbyAreas("P4-A1"),
  relatedTitle: "NGO registration in areas near Kundrathur",

  final: {
    title: "Put your Kundrathur charity on paper",
    sub: "Walk in to Karaima Nagar with your committee or message us. We'll suggest a trust or society and plan the 12A and 80G applications.",
    message: "Hi National Filings, we run a charity group in Kundrathur and want to register it properly. Can we meet?",
  },
  catalogue: ["Charitable trust registration in Kundrathur", "Society registration for festival and welfare groups in Kundrathur", "12A and 80G registration for Kundrathur charities"],
};
