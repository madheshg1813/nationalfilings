import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { NGO_SERVICE, nearbyAreas } from "./shared";

/**
 * P4-A9 · NGO Registration in Poonamallee (/chennai/ngo-registration-in-poonamallee).
 * Primary keyword: "ngo registration in poonamallee". No office in Poonamallee: clients work with us over WhatsApp and email
 * and can visit our Kundrathur office.
 * Angle: road safety and drivers' welfare on the NH 48 corridor: drivers' and transporters' welfare associations, road safety
 * awareness groups and accident victim help. A society for a drivers' or transporters' welfare association, a trust for an
 * accident-relief fund, the trade union line, and 12A/80G (now sections 332 and 354). Kept distinct from P1-A9 (company), P2-A9
 * (GST), P3-A9 (income tax), the other P4 area pages and the P4 cluster pages.
 *
 * Local facts (reused from the verified P1-A9 JSDoc): Poonamallee is a municipality in Tiruvallur district and a taluk
 * headquarters; it is a transit point on the Chennai to Bengaluru highway, now NH 48; Poonamallee RTO (TN 12).
 *
 * Facts checked (Nov 2026):
 * - Societies: Tamil Nadu Societies Registration Act, 1975; District Registrar (Registration Department) via TNREGINET; at least
 *   seven members; memorandum and bylaws; yearly filings of accounts and members' list. (tnreginet.gov.in; as verified for
 *   P4-C2, society.ts)
 * - Trusts: no separate public trusts act in Tamil Nadu; deed registered with the Sub-Registrar with the settlor and two
 *   witnesses; stamp duty depends on the corpus, no amount quoted. (as verified for P4-C1, trust.ts)
 * - Section 8 company: Companies Act, 2013 s.8, licence through SPICe+, full ROC compliance and audit. (as verified for P4-C3)
 * - Trade unions register under the Trade Unions Act, 1926 (indiacode.nic.in); mentioned only to separate wage bargaining from
 *   welfare work.
 * - Income-tax Act, 2025 from 1 April 2026: registration (formerly 12A/12AB) is section 332; donor approval (formerly 80G) is
 *   section 354, making donations deductible under section 133(1)(b)(ii). Form 104: provisional registration under 332(3) and
 *   provisional approval under 354(2) for entities whose activities have not begun; order in Form 106; valid for three tax
 *   years or up to six months from commencement of activities, whichever is earlier. Form 105: regular registration or approval,
 *   generally valid for five tax years. (incometax.gov.in Form 104 and 106 FAQs:
 *   incometax.gov.in/iec/foportal/newformpage/forms/form104%2526106-faqs; incometaxindia.gov.in/documents/d/guest/form-105-faqs;
 *   incometaxindia.gov.in/w/section-354-5)
 * - Donor deduction not allowed under the default new regime (section 202(2)(a)(xii), as verified for P3-A10; ngo.ts).
 * - CSR: Companies (CSR Policy) Amendment Rules, 2021, rule 4(1)(d): Section 8 company, registered public trust or registered
 *   society registered under 12A and 80G with an established track record of at least three years in similar activities;
 *   rule 4(2): Form CSR-1 filed with the Registrar, verified by a practising CA, CS or CMA, generating a CSR Registration
 *   Number. (MCA notification G.S.R. 40(E), 22 Jan 2021: ca2013.com/wp-content/uploads/2021/01/CSRAmendmentRules_22012021.pdf)
 * - FCRA registration: three years of existence and ₹15 lakh spent on core activities in the last three financial years;
 *   otherwise prior permission. (fcraonline.nic.in; deccanherald.com "Govt tightens rules for NGOs intending to receive funds
 *   from abroad"; conventuslaw.com on the May 2025 FCR amendment rules)
 * - NGO Darpan unique ID needed to apply for grants from central ministries. (niti.gov.in/divisions/cell/voluntary-action-cell;
 *   ngodarpan.gov.in)
 * - Innuyir Kaappom Nammai Kaakkum 48 (Tamil Nadu, launched 18 Dec 2021): the state bears emergency treatment costs for road
 *   accident victims in the first 48 hours at empanelled hospitals. The rupee cap differs between reports, so none is stated.
 *   (dtnext.in "Stalin launches free treatment scheme for mishap victims"; deccanherald.com)
 * - Cashless Treatment of Road Accident Victims Scheme, 2025 (S.O. 2015(E), 5 May 2025): up to ₹1.5 lakh per victim for up to
 *   seven days from the accident at designated hospitals. (Lok Sabha unstarred question 4751, 21 Aug 2025,
 *   eparlib.sansad.in/bitstream/123456789/2996727/1/AU4751_QK7Bbv.pdf; tribuneindia.com)
 * - No fee figures. Timelines are estimates.
 */

const whatsapp = "Hi National Filings, I'm in Poonamallee and want to register a drivers' welfare group as an NGO.";

export const ngoPoonamalleePage: LicencePageData = {
  id: "P4-A9",
  service: NGO_SERVICE,
  meta: {
    title: "NGO Registration in Poonamallee | National Filings",
    description: "NGO registration in Poonamallee for drivers' welfare associations, road safety groups and accident-relief trusts on NH 48, with 12A, 80G and CSR-1.",
  },
  hero: {
    headline: { line1: "NGO Registration", line2Before: "in Poonamallee, ", accent: "Drivers First" },
    sub: "Poonamallee lives on the NH 48 corridor, and its drivers, lorry owners and loaders often look after each other through informal collections. We register those groups as societies or trusts, and set up 12A and 80G so an accident-relief fund can take donations properly.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "HeartHandshake",
    kicker: "Poonamallee, Tiruvallur",
    title: "Welfare Society Certificate",
    line: "Your Poonamallee NGO",
    stamp: "12A approved",
    chips: ["Drivers' welfare society", "Accident-relief trust", "12A and 80G filed"],
    steps: ["Members", "Bylaws", "Registrar", "PAN", "12A"],
  },

  benefitsSection: {
    title: "What registration does for a Poonamallee drivers' group",
    lead: "Most drivers' welfare groups start as a collection taken at the stand when someone gets hurt. Registration gives that goodwill a bank account, written rules and a record that donors and companies can check.",
    cta: {
      title: "Already collecting for injured drivers?",
      sub: "Tell us how the money is collected and who decides payouts. We'll suggest a society or a trust before the next collection.",
      message: "Hi National Filings, our drivers' group in Poonamallee collects money for accident cases. How do we register it?",
    },
  },
  benefits: [
    { icon: "Landmark", title: "Collections in the group's account", line: "Money for an injured driver goes into the NGO's own account, not a committee member's savings." },
    { icon: "ScrollText", title: "Payout rules written down", line: "Who gets help, how much and on whose approval, fixed in the bylaws or the trust deed." },
    { icon: "Users", title: "Members elect the committee", line: "In a society, drivers and owners vote, so the fund doesn't depend on one person." },
    { icon: "ShieldCheck", title: "The fund outlives its founders", line: "When office bearers change, the account, records and any property stay with the body." },
    { icon: "Percent", title: "Tax-deductible donations", line: "With approval under section 354, formerly 80G, well-wishers can claim a deduction for what they give." },
    { icon: "Handshake", title: "Road safety work with companies", line: "Logistics and manufacturing firms fund CSR through registered NGOs with CSR-1 and a track record." },
    { icon: "Gavel", title: "A voice with the authorities", line: "A registered body can write to the police, the RTO and highway officials in its own name." },
    { icon: "Laptop", title: "Handled over WhatsApp", line: "Drafts and member papers on WhatsApp and email, with a visit to our Kundrathur office if you want." },
  ],

  applicantsSection: {
    title: "Poonamallee highway groups we register",
    lead: "Our NGO clients from Poonamallee mostly work on the road or beside it. These are the groups we see most often.",
  },
  applicants: [
    { icon: "Truck", title: "Lorry drivers' welfare associations", line: "Drivers pooling money for medical help, funeral costs and children's school fees." },
    { icon: "Briefcase", title: "Transporters' welfare arms", line: "Fleet owners setting up a separate welfare body for their drivers and cleaners." },
    { icon: "UserRound", title: "Taxi, van and auto drivers' groups", line: "Drivers at stands and the bus terminus helping one another through bad months." },
    { icon: "ShieldAlert", title: "Road safety awareness groups", line: "Volunteers running helmet, seatbelt and no drink-driving drives along the corridor." },
    { icon: "HeartHandshake", title: "Accident-relief funds", line: "Families who lost someone on the road, building a fund to help the next family." },
    { icon: "Stethoscope", title: "First-aid volunteer groups", line: "Teams training shopkeepers and drivers to help an accident victim until the ambulance comes." },
    { icon: "GraduationCap", title: "Scholarships for drivers' children", line: "Funds that pay fees for children of drivers who died or were disabled in accidents." },
    { icon: "Package", title: "Loaders' and helpers' funds", line: "Workers around the godowns and loading yards forming a welfare fund of their own." },
  ],

  opportunities: {
    eyebrow: "Causes on the corridor",
    title: "Where Poonamallee NGOs put their effort",
    intro: "Long hours, night driving and accidents shape the welfare work along NH 48. These are the four causes most groups here register for.",
    // Pexels licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "Truck", title: "Drivers' welfare", image: "https://images.pexels.com/photos/13922927/pexels-photo-13922927.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Painted Indian goods lorry parked on a paved forecourt with green hills behind", credit: "Vijay Krishnawat / Pexels" },
      { icon: "ShieldAlert", title: "Road safety awareness", image: "https://images.pexels.com/photos/9917578/pexels-photo-9917578.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Motorcyclist in a full-face helmet riding along an open divided highway", credit: "Anurag Raj / Pexels" },
      { icon: "Stethoscope", title: "Accident victim help", image: "https://images.pexels.com/photos/7527770/pexels-photo-7527770.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "White life support ambulance on a hill road with green slopes and a town behind", credit: "Ajil Saji / Pexels" },
      { icon: "HeartHandshake", title: "Relief for families", image: "https://images.pexels.com/photos/41102077/pexels-photo-41102077.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Elderly woman's hand pressing folded money into a younger person's open palm", credit: "Prince Soumya / Pexels" },
    ],
  },

  highlights: {
    eyebrow: "Society, trust or union",
    title: "Which form suits a Poonamallee drivers' group",
    lead: "The right form depends on who controls the money and who it helps. Two forms suit most groups here, and one common choice belongs under a different law altogether.",
    items: [
      { icon: "Users", label: "Tamil Nadu Societies Registration Act, 1975", title: "Society for a welfare association", line: "At least seven members, a memorandum and bylaws, registered with the District Registrar. Members elect the committee.", highlight: true },
      { icon: "ScrollText", label: "Public charitable trust", title: "Trust for an accident-relief fund", line: "A deed registered with the Sub-Registrar. A few trustees approve payouts, which suits a fund set up in someone's memory." },
      { icon: "Building2", label: "Companies Act, 2013", title: "Section 8 for large programmes", line: "Worth it when several companies will fund road safety work, but it brings board meetings, audit and ROC filings." },
      { icon: "Scale", label: "Trade Unions Act, 1926", title: "A union is something else", line: "A body that bargains with employers over wages or working terms registers as a trade union, not as an NGO." },
    ],
  },

  documentsSection: {
    title: "Papers for a Poonamallee drivers' society or relief trust",
    lead: "Drivers can be away for days at a time, so we collect papers on WhatsApp as each member finds a moment.",
  },
  documents: [
    { icon: "IdCard", title: "For members or trustees", items: ["PAN and Aadhaar", "Passport size photo", "Address proof", "Mobile number for OTPs"], hint: "Members on long trips can send photos of their cards from the road. We check them before the signing day." },
    { icon: "Home", title: "For the registered office", items: ["EB bill or property tax receipt for the address", "Owner's no objection letter", "Rent agreement, if the room is rented"], hint: "A member's house or a small rented room usually serves as the address." },
    { icon: "FileText", title: "For the fund itself", items: ["Name and two alternatives", "Objects, such as accident relief, road safety or drivers' welfare", "Rules on who gets help and how much", "List of past collections and payouts, if any"], hint: "If money has already been collected, we note how the balance moves into the new account." },
  ],
  documentsNote: {
    title: "Members out on trips?",
    sub: "Send what you have now. We'll list what is missing for each member and fix a signing day when the drivers are in town.",
    message: "Hi National Filings, I'm forming a drivers' welfare group in Poonamallee. Can I send member documents on WhatsApp?",
  },

  processSection: {
    title: "How we register a Poonamallee welfare group",
    lead: "Most of the work runs on WhatsApp and email. Signing is planned around trip schedules, and founders can meet us at our Kundrathur office.",
    cta: {
      title: "Plan a signing day",
      sub: "Tell us when your members will be in town. We'll have the papers ready for that day.",
      message: "Hi National Filings, when can our Poonamallee drivers' group sign its registration papers?",
    },
  },
  steps: [
    { title: "Decide the form", time: "First call", sub: "Society for a member body, trust for a relief fund. We explain both on your facts." },
    { title: "Draft the rules", time: "3-5 days", sub: "Bylaws or a trust deed covering who is helped, payout limits, approvals and accounts." },
    { title: "Register it", time: "1-4 weeks", sub: "Society filed with the District Registrar, or the trust deed registered with the Sub-Registrar." },
    { title: "PAN and bank account", time: "After registration", sub: "PAN in the NGO's name, then an account the collections can go into." },
    { title: "Apply for 12A and 80G", time: "Online", sub: "Provisional registration and approval in Form 104, then Form 105 once the work is under way." },
  ],
  processNote: "Timelines are estimates and start once every member's papers are complete. The Registrar, the Sub-Registrar and the Income Tax Department each work at their own pace.",

  mistakesSection: {
    title: "Mistakes we see in Poonamallee welfare funds",
    lead: "Most of these come from running a good cause the informal way for too long.",
  },
  mistakes: [
    { icon: "Wallet", title: "Collections in a personal account", problem: "Money for an injured driver sits in the secretary's savings account, and questions start when he changes jobs or falls out with members.", fix: "We open an account in the NGO's name and move the balance across with a statement members can see." },
    { icon: "Users", title: "Members-only help, then an 80G application", problem: "A fund that pays out only to its own paid-up members applies for 80G as if it were a public charity.", fix: "We explain the difference first. Mutual help suits a society on members' dues. A fund open to any accident victim in need is the kind that can seek 80G." },
    { icon: "Scale", title: "Wage talks inside a welfare society", problem: "A drivers' welfare society starts negotiating pay and duty hours with transport companies.", fix: "We keep the objects to welfare, safety and relief. If members want to bargain with employers, that needs a separate trade union registration." },
    { icon: "CalendarClock", title: "Provisional 12A left to lapse", problem: "A new relief trust gets provisional registration, starts paying out and forgets the move to regular registration.", fix: "Provisional status ends after three tax years or six months from the start of activities, whichever is earlier. We track the date and file Form 105 in time." },
  ],

  costSection: {
    title: "What NGO registration costs for a Poonamallee group",
    lead: "There are government charges and there is our fee. We quote both in writing before any work starts.",
    cta: {
      title: "Ask for a written quote",
      sub: "Tell us the form you're leaning towards and how many founders there are.",
      message: "Hi National Filings, can I get a quote to register a drivers' welfare NGO in Poonamallee?",
    },
  },
  costs: [
    { icon: "Stamp", label: "As per Tamil Nadu rates", title: "Stamp duty and registration", line: "For a trust, stamp duty on the deed and the Sub-Registrar's fee. For a society, the Registrar's fee." },
    { icon: "FilePen", label: "Quoted upfront", title: "Deed or bylaws and filing", line: "Drafting around your payout rules, member document checks and the filing itself.", highlight: true },
    { icon: "Percent", label: "Quoted separately", title: "12A and 80G", line: "Forms 104 and 105 on the income tax portal, with the objects checked first." },
    { icon: "ClipboardCheck", label: "Quoted per year", title: "Yearly compliance", line: "Books, audit where needed, the income tax return and Registrar filings." },
  ],

  compliance: {
    eyebrow: "After registration",
    title: "Keeping a Poonamallee relief fund in order",
    lead: "Donors and companies look at your records before they give. These are the tasks that keep a fund credible.",
    items: [
      { icon: "FileText", label: "Every payout", title: "Approval and proof on file", line: "Each payment to a victim's family approved as the rules say, with a bank transfer or signed receipt." },
      { icon: "Calculator", label: "Every year", title: "Accounts and income tax return", line: "Books closed, audited where the law needs it, and the return filed." },
      { icon: "RefreshCw", label: "Every five tax years", title: "12A and 80G renewal", line: "Regular registration under section 332 and approval under section 354 renewed before they expire." },
      { icon: "Handshake", label: "Before company or government money", title: "CSR-1 and NGO Darpan", line: "CSR-1 with the MCA for company projects, and an NGO Darpan ID before applying for central government grants." },
    ],
  },

  reasonsTitle: "Why Poonamallee groups register their NGO with us",
  reasons: [
    { icon: "Truck", title: "Planned around trips", line: "Papers collected on WhatsApp, signing fixed for when drivers are in town." },
    { icon: "ScrollText", title: "Payout rules that hold up", line: "Deeds and bylaws that say clearly who gets help and who approves it." },
    { icon: "Percent", title: "12A and 80G handled", line: "Provisional and regular applications filed, and renewal dates tracked." },
    { icon: "MapPinned", title: "Kundrathur office", line: "Open Monday to Saturday, 9 am to 7 pm, for founders who want to meet." },
    { icon: "Award", title: "Experience since 2012", line: "Registration and compliance work for Chennai bodies and businesses." },
    { icon: "ReceiptText", title: "Fees agreed in writing", line: "Government charges and our fee shown separately." },
  ],

  faqTitle: "NGO registration in Poonamallee: questions from drivers' groups",
  faqs: [
    { q: "Should a drivers' welfare association in Poonamallee be a society or a trust?", a: "A society, if drivers and owners will pay a membership fee and expect to elect the committee. The Tamil Nadu Societies Registration Act, 1975 needs at least seven members, a memorandum and bylaws, with registration through the District Registrar. A trust suits a fund run by a few people, such as a family setting up accident relief in someone's memory. The trustees decide, and there is no membership vote." },
    { q: "How is an accident-relief trust set up?", a: "One or more founders, called settlors, sign a trust deed that sets out the fund's objects, the trustees, how payouts are approved and what happens to the money if the trust closes. The deed is registered with the Sub-Registrar in the presence of two witnesses, and stamp duty is paid as per Tamil Nadu rates. The trust then takes a PAN and opens a bank account in its own name." },
    { q: "Government schemes already pay for accident treatment. What is left for a relief fund?", a: "Tamil Nadu's Innuyir Kaappom Nammai Kaakkum 48 scheme meets emergency treatment costs in the first 48 hours at empanelled hospitals, and the central cashless scheme notified in May 2025 covers up to ₹1.5 lakh per victim for seven days from the accident at designated hospitals. Those schemes pay hospitals. A relief fund usually covers what they don't: lost income while a driver recovers, children's school fees, the family's travel and support after a death. Your deed or bylaws should say which of these the fund pays for." },
    { q: "Can our accident-relief fund get 12A and 80G?", a: "Yes, if its objects are charitable and open to the public, such as helping any road accident victim or family in need, not only paid-up members. Under the Income-tax Act, 2025, the old 12A registration is section 332 and 80G approval is section 354. A new trust or society applies in Form 104 for provisional registration and approval, valid for three tax years or until six months after activities begin, whichever is earlier. It then applies in Form 105 for regular registration, generally valid for five tax years. We can't promise approval." },
    { q: "Will people who donate to our fund get a tax deduction?", a: "Once the fund has approval under section 354, donors can claim a deduction under section 133 of the new Act, within its limits. Individuals get it only if they file under the old tax regime, because the default new regime doesn't allow it. Transport companies that donate should confirm their own position with their tax adviser." },
    { q: "Can a road safety group take CSR money from logistics companies?", a: "Yes, once it qualifies. Under the CSR rules, a company can work through a trust, society or Section 8 company registered under 12A and 80G with at least three years' track record in similar work, and the NGO must file Form CSR-1 with the MCA to get a CSR registration number. Foreign donations are separate: FCRA registration generally needs three years of existence and ₹15 lakh spent on core activities over the last three financial years. A new group can start with Indian donors and build its record." },
    { q: "We are in Poonamallee. Do we have to visit your office?", a: "No. We have no office in Poonamallee, and most groups work with us over WhatsApp and email, with drivers sending documents from wherever they are. If your founders want to meet, our office is in Karaima Nagar, Kundrathur, open Monday to Saturday, 9 am to 7 pm." },
  ],

  related: nearbyAreas("P4-A9"),
  relatedTitle: "NGO registration in areas near Poonamallee",

  final: {
    title: "Put your Poonamallee drivers' fund on a proper footing",
    sub: "Message us with how your group collects and pays out today. We'll suggest the form, draft the rules and handle the registration.",
    message: "Hi National Filings, we run a drivers' welfare group in Poonamallee and want to register it as an NGO. Can we talk?",
  },
  catalogue: ["Drivers' welfare society registration in Poonamallee", "Accident-relief trust registration in Poonamallee", "12A and 80G registration for Poonamallee NGOs"],
};
