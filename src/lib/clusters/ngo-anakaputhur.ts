import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { NGO_SERVICE, nearbyAreas } from "./shared";

/**
 * P4-A4 · NGO Registration in Anakaputhur (/chennai/ngo-registration-in-anakaputhur).
 * Primary keyword: "ngo registration in anakaputhur". We have no office in Anakaputhur; clients work with us over WhatsApp
 * and email and can visit our Kundrathur office.
 * Angle: livelihood NGOs for handloom weavers and women artisans. Training, market access and natural fibre skills.
 * Explains when a Section 8 company suits a livelihood project (grants, CSR, CSR-1), how it differs from a producer company
 * (a business owned by producers, not an NGO), and why a trust or society may be simpler for a small group.
 * Kept distinct from the Anakaputhur company (P1-A4), GST (P2-A4) and income tax (P3-A4) pages and the NGO pillar and clusters.
 *
 * Local facts (reused from the verified P1-A4 JSDoc): merged into Tambaram City Municipal Corporation in 2021; Chengalpattu
 * district; Pammal firka of Pallavaram taluk; PIN 600070; next to Pammal. Once known for weaving, including the "Madras Real
 * Handkerchief" exported to Nigeria; looms fell from about 5,000 to a few hundred or fewer; weavers make sarees and garments
 * from natural fibres such as banana, pineapple, aloe vera, bamboo and lotus; much of the work is done by women; orders come
 * through social media and online platforms. (en.wikipedia.org/wiki/Anakaputhur; citizenmatters.in, Jan 2018; dtnext.in,
 * Oct 2023; etvbharat.com, Aug 2025)
 * Producer company rules (reused from P1-A4, Companies Act, 2013 ss. 378A to 378P via ca2013.com): handloom and handicraft
 * produce counts as primary produce; ten or more individual producers can form one; treated as a private limited company;
 * at least five directors; owned by and run for its producer members.
 *
 * Facts checked (Nov 2026):
 * - Section 8, Companies Act, 2013: charitable objects; profits applied to the objects and no dividend to members; licence for a
 *   new company granted through SPICe+; private Section 8 company needs at least two directors. (reused from section-8.ts P4-C3;
 *   mca.gov.in)
 * - CSR implementing agencies, Companies (CSR Policy) Rules, 2014, rule 4(1) as amended in 2021: a Section 8 company, registered
 *   public trust or registered society with income tax registration and donor approval (formerly 12A and 80G); an agency not set
 *   up by the funding company needs a track record of at least three years in similar work; every implementing agency registers
 *   with the Central Government in Form CSR-1 and gets a CSR registration number. (mca.gov.in CSR amendment rules 22 Jan 2021)
 * - Trust: deed registered with the Sub-Registrar; Society: Tamil Nadu Societies Registration Act, 1975, District Registrar,
 *   at least seven members. (reused from trust.ts and society.ts; tnreginet.gov.in)
 * - "Charitable purpose" is section 2(23) of the Income-tax Act, 2025 (formerly 2(15)) and names relief of the poor; the
 *   restriction on business receipts for "general public utility" objects is now a separate section (346).
 *   (lkslaw.com; taxguru.in concise manual on non-profits under the 2025 Act)
 * - Registration (formerly 12A/12AB) is section 332 and donor approval (formerly 80G) is section 354; Form 104 for provisional
 *   registration, Form 105 for regular. (incometaxindia.gov.in form-104-faqs and form-105-faqs)
 * - FCRA: payments received for goods sold in the ordinary course of business are not foreign contribution; a foreign grant is.
 *   Registration generally needs three years of existence; younger NGOs can seek prior permission for a specific grant.
 *   (fcraonline.nic.in; FCRA 2010 s.2(1)(h); nishithdesai.com social sector hotline, Apr 2025)
 * - NGO Darpan: NITI Aayog's portal giving NGOs a unique ID used by government departments for grant schemes. (ngodarpan.gov.in)
 * - No fee figures. Timelines are estimates.
 */

const whatsapp = "Hi National Filings, we train women weavers in Anakaputhur and want to register an NGO for the work.";

export const ngoAnakaputhurPage: LicencePageData = {
  id: "P4-A4",
  service: NGO_SERVICE,
  meta: {
    title: "NGO Registration in Anakaputhur | National Filings",
    description: "NGO registration in Anakaputhur for weaver and women artisan projects. Trust, society or Section 8, with 12A, 80G and CSR-1 for training grants.",
  },
  hero: {
    headline: { line1: "NGO Registration", line2Before: "", accent: "in Anakaputhur" },
    sub: "Want to start a charity in Anakaputhur? We register your NGO as a trust, society or Section 8 company and help you get 12A and 80G approval.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "HeartHandshake",
    kicker: "Anakaputhur, Chennai 600070",
    title: "Livelihood NGO Registered",
    line: "Your Anakaputhur NGO",
    stamp: "CSR-1 filed",
    chips: ["Weaver training objects", "12A and 80G", "CSR ready"],
    steps: ["Plan", "Structure", "Register", "Tax", "CSR-1"],
  },

  benefitsSection: {
    title: "What a registered NGO opens up for Anakaputhur weavers",
    lead: "Training a batch of women on a loom costs money for yarn, a trainer and a shed. Grants and CSR funds can pay for it, but only to a registered body with the right approvals.",
    cta: {
      title: "Already running training without a legal entity?",
      sub: "Tell us who funds you now and who you'd like to approach. We'll say which structure those funders accept.",
      message: "Hi National Filings, we run weaving training for women in Anakaputhur. Which NGO type do CSR funders accept?",
    },
  },
  benefits: [
    { icon: "Handshake", title: "CSR funding possible", line: "With 12A, 80G and CSR-1, companies can route CSR spending through your project." },
    { icon: "Landmark", title: "Grants from foundations", line: "Livelihood funders and trusts give only to registered NGOs with clean accounts." },
    { icon: "Users", title: "Training paid for", line: "Trainers, yarn and loom repairs funded from grants, not the weavers' wages." },
    { icon: "Leaf", title: "Natural fibre skills kept alive", line: "Banana, aloe vera and bamboo fibre techniques taught to a new group of women." },
    { icon: "ShoppingBag", title: "Help with selling", line: "Exhibitions, buyer meetings and online listings arranged for the artisans." },
    { icon: "ShieldCheck", title: "Surplus kept tax-free", line: "After income tax registration, income used for the cause is not taxed." },
    { icon: "ReceiptText", title: "Donors get a deduction", line: "Individuals and firms who support the weavers can claim it once donor approval is in." },
    { icon: "BadgeCheck", title: "Government scheme access", line: "An NGO Darpan ID and registration certificate for department grant schemes." },
  ],

  applicantsSection: {
    title: "Who sets up livelihood NGOs in Anakaputhur",
    lead: "Some are weavers' own families. Others are designers, social workers or retired officials who have seen the looms shut one by one.",
  },
  applicants: [
    { icon: "Users", title: "Women artisan groups", line: "Women who weave, stitch or finish fibre products and want training for more members." },
    { icon: "Leaf", title: "Natural fibre trainers", line: "Master weavers teaching banana, pineapple and aloe vera fibre work." },
    { icon: "HeartHandshake", title: "Weaver welfare groups", line: "Families who want to support older weavers and keep looms running." },
    { icon: "ShoppingBag", title: "Market linkage volunteers", line: "People who bring buyers, stalls and online orders to artisans." },
    { icon: "Briefcase", title: "Social enterprise founders", line: "Designers who want a non-profit arm for training next to their label." },
    { icon: "GraduationCap", title: "Skill training centres", line: "Centres teaching tailoring, finishing and design to school leavers." },
    { icon: "Building2", title: "CSR partners", line: "Groups that a company has asked to run a livelihood project for it." },
    { icon: "UserRound", title: "Retired textile officials", line: "People who know the handloom schemes and want a body to apply through." },
  ],

  opportunities: {
    eyebrow: "Loom and livelihood",
    title: "The work Anakaputhur livelihood NGOs fund",
    intro: "Most projects here do four things: teach the craft, keep looms working, support the women doing finishing work, and find buyers who pay fairly.",
    // Pexels licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "Users", title: "Women at the loom", image: "https://images.pexels.com/photos/8207648/pexels-photo-8207648.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Woman weaving yellow yarn on a wooden handloom in a dim workshop", credit: "Nishant Das / Pexels" },
      { icon: "Leaf", title: "Master weavers", image: "https://images.pexels.com/photos/32673642/pexels-photo-32673642.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Elderly weaver in spectacles working at a loom with red warp threads", credit: "Sanjay Adhitya / Pexels" },
      { icon: "GraduationCap", title: "Tailoring and finishing", image: "https://images.pexels.com/photos/3869086/pexels-photo-3869086.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Woman in a sari sewing fabric at a machine beside a large open window", credit: "Andreas Schnabl / Pexels" },
      { icon: "ShoppingBag", title: "Reaching buyers", image: "https://images.pexels.com/photos/10317106/pexels-photo-10317106.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Stack of folded silk sarees in purple, gold and yellow with woven borders", credit: "Pexels" },
    ],
  },

  highlights: {
    eyebrow: "Section 8 or producer company",
    title: "Choosing a vehicle for an Anakaputhur weavers' project",
    lead: "Two company forms look alike on paper but do opposite jobs. One is a charity that helps weavers. The other is a business the weavers own.",
    items: [
      { icon: "Building2", label: "Section 8 company", title: "Suits a funded livelihood programme", line: "Profits go back into the objects and nothing is paid to members. Large CSR funders and foundations are most comfortable with it.", highlight: true },
      { icon: "Handshake", label: "CSR-1 with the MCA", title: "Needed to run CSR projects", line: "A Section 8 company, trust or society with 12A and 80G files CSR-1. Outside agencies also need three years of similar work." },
      { icon: "Factory", label: "Producer company", title: "A business, not an NGO", line: "Ten or more weavers own it, buy yarn and sell cloth together, and share the surplus. It can't get 12A or 80G as a charity." },
      { icon: "ScrollText", label: "Trust or society", title: "Simpler for a small group", line: "A trust needs a deed and a Sub-Registrar visit. A society needs seven members. Both can take grants, 12A, 80G and CSR-1." },
    ],
  },

  documentsSection: {
    title: "What we need to register an Anakaputhur livelihood NGO",
    lead: "The list depends on the structure. These cover all three. Share them on WhatsApp or email, or bring them to our Kundrathur office.",
  },
  documents: [
    { icon: "IdCard", title: "For founders, trustees or directors", items: ["PAN and Aadhaar of each person", "Passport photo, phone and email of each", "For a society: details of at least seven members", "For a Section 8 company: digital signatures for directors"], hint: "Weavers who join as members or trustees only need PAN and Aadhaar. We arrange the rest." },
    { icon: "Home", title: "For the address", items: ["Property tax receipt or EB bill for the office or work shed", "Owner's no-objection letter", "Rental agreement, if rented"], hint: "A weaver's home or a shared loom shed in Anakaputhur can be the registered address." },
    { icon: "FileText", title: "For grants and CSR later", items: ["A short note on the training plan and who it reaches", "Photos and attendance from any batches already run", "Letters from buyers or partners, if any"], hint: "CSR funders ask what you've already done. Records from informal batches help, even before registration." },
  ],
  documentsNote: {
    title: "Not sure if you're an NGO or a business?",
    sub: "Tell us whether the money goes to training or to the weavers' own sales. We'll explain which side of the line you're on.",
    message: "Hi National Filings, we support weavers in Anakaputhur. Should we be an NGO or a producer company?",
  },

  processSection: {
    title: "How we set up a weavers' livelihood NGO in Anakaputhur",
    lead: "First we settle the structure, because changing it later is slow. The rest runs on WhatsApp and email, with one visit for signing.",
    cta: {
      title: "Book a structure call",
      sub: "A short call on who funds you and how sales work is usually enough to choose.",
      message: "Hi National Filings, can we book a call about registering a livelihood NGO for weavers in Anakaputhur?",
    },
  },
  steps: [
    { title: "Map the money", time: "Day 1", sub: "Who pays for training, who buys the products and who receives the sale money." },
    { title: "Pick the structure", time: "Day 1-2", sub: "Trust, society or Section 8 company, with a producer company flagged if sales should belong to the weavers." },
    { title: "Draft and register", time: "1-4 weeks", sub: "Trust deed, society bylaws or Section 8 incorporation, with objects aimed at livelihood training." },
    { title: "Tax registration", time: "After PAN and bank", sub: "Provisional registration and donor approval sought together in Form 104." },
    { title: "CSR and Darpan", time: "When eligible", sub: "CSR-1 filed with the MCA and an NGO Darpan ID taken for government schemes." },
  ],
  processNote: "Timelines are estimates. The Sub-Registrar, District Registrar, MCA and Income Tax Department set their own pace. Approvals and CSR funding are never guaranteed.",

  mistakesSection: {
    title: "Mistakes that hold back livelihood NGOs in Anakaputhur",
    lead: "Most come from mixing the charity's work with the weavers' own trade.",
  },
  mistakes: [
    { icon: "Shuffle", title: "NGO selling sarees as a shop", problem: "The NGO buys finished sarees from weavers and resells them, and the trading grows bigger than the training.", fix: "We plan how sales work before registering. Often training stays in the NGO and sales stay with weavers or a producer company." },
    { icon: "Factory", title: "Producer company mistaken for an NGO", problem: "A group forms a producer company and then applies for 80G to raise donations.", fix: "We explain early that a producer company shares surplus with members, so it is a business. A separate NGO can support it." },
    { icon: "Handshake", title: "Expecting CSR money in year one", problem: "A new trust approaches companies before it has 12A, 80G or CSR-1.", fix: "We file the tax applications first, then CSR-1. We also tell you which funders need a three-year record." },
    { icon: "Globe", title: "Foreign grant accepted without FCRA", problem: "A foreign craft foundation offers a grant and the money lands in the NGO's ordinary account.", fix: "Export sales are business income, not foreign contribution. A grant is, so we check FCRA registration or prior permission first." },
  ],

  costSection: {
    title: "What a livelihood NGO in Anakaputhur costs to set up",
    lead: "Costs differ widely by structure. A Section 8 company costs more to form and to run than a trust. Our fee is quoted in writing, separate from government charges.",
    cta: {
      title: "Compare the three on cost",
      sub: "We'll set out what each structure costs to form and to keep running each year for your project.",
      message: "Hi National Filings, can you compare trust, society and Section 8 costs for a weavers' NGO in Anakaputhur?",
    },
  },
  costs: [
    { icon: "Stamp", label: "Government charge", title: "Trust or society registration", line: "Stamp duty and registration fees as per Tamil Nadu rates." },
    { icon: "Building2", label: "Quoted upfront", title: "Section 8 company formation", line: "MCA fees, digital signatures and drafting. Higher than a trust, with yearly ROC filings after.", highlight: true },
    { icon: "ShieldCheck", label: "Quoted upfront", title: "12A, 80G and CSR-1", line: "No government fee on the income tax portal. CSR-1 filing quoted with it." },
    { icon: "Calculator", label: "Quoted yearly", title: "Accounts and project reports", line: "Books, audit coordination, returns and the utilisation reports CSR funders ask for." },
  ],

  compliance: {
    eyebrow: "Once funding starts",
    title: "Keeping an Anakaputhur livelihood NGO fundable",
    lead: "Funders check compliance before every new grant. These are the items that come up most often.",
    items: [
      { icon: "ClipboardCheck", label: "Every year", title: "Audit and income tax return", line: "Accounts audited and the return filed, so the section 332 registration stays valid." },
      { icon: "FileText", label: "Per CSR project", title: "Utilisation reports", line: "Training numbers, spending and photos sent to the funding company as agreed." },
      { icon: "Building2", label: "Section 8 only", title: "ROC filings", line: "Board meetings, AGM, financial statements and annual return filed with the MCA." },
      { icon: "CalendarClock", label: "Before expiry", title: "Regular 12A and 80G", line: "Provisional approval is replaced by regular registration in Form 105 on time." },
    ],
  },

  reasonsTitle: "Why Anakaputhur weaver groups register with us",
  reasons: [
    { icon: "Scale", title: "Structure advice first", line: "We tell you when a producer company or a simple trust fits better than an NGO." },
    { icon: "Handshake", title: "CSR path planned", line: "Tax approvals and CSR-1 filed in the order funders expect." },
    { icon: "MessageCircle", title: "Weavers stay at the loom", line: "Documents collected on WhatsApp, with one signing visit." },
    { icon: "MapPinned", title: "Kundrathur office nearby", line: "Karaima Nagar, Kundrathur. Monday to Saturday, 9 am to 7 pm." },
    { icon: "CalendarCheck", title: "Renewals tracked", line: "Provisional registration, ROC and FCRA dates diaried for you." },
    { icon: "Award", title: "Experience since 2012", line: "Registration and compliance work for Chennai organisations." },
  ],

  faqTitle: "Livelihood NGOs in Anakaputhur: common questions",
  faqs: [
    { q: "When should a weavers' livelihood project in Anakaputhur be a Section 8 company?", a: "When you plan to approach large CSR funders or foundations, expect to grow beyond one locality, or want a board-run body with MCA oversight. A Section 8 company applies its income to its objects and pays no dividend. It costs more to run, with ROC filings and an audit every year." },
    { q: "What is the difference between a Section 8 company and a producer company?", a: "A Section 8 company is a non-profit that helps others, such as weavers it trains. A producer company is owned by ten or more producers who buy, process and sell together and share the surplus. Handloom produce qualifies for a producer company. It is a business, so it doesn't get charity registration or 80G." },
    { q: "Is a trust or society enough for a small group of women artisans?", a: "Often, yes. A trust needs a registered deed and a few trustees. A society needs at least seven members under the Tamil Nadu Societies Registration Act, 1975. Both can get 12A and 80G, take grants and register for CSR, with less yearly filing than a company." },
    { q: "Can our NGO receive CSR money for weaver training?", a: "Yes, if it is a Section 8 company, registered trust or registered society with income tax registration and donor approval, and it files Form CSR-1 with the MCA. An NGO not set up by the funding company also needs a track record of at least three years in similar work." },
    { q: "Does helping poor weavers count as a charitable purpose?", a: "Yes. Relief of the poor is named in the definition of charitable purpose in the Income-tax Act, 2025 (section 2(23), formerly 2(15)). Skill training and livelihood support for low-income weavers fit. If the NGO itself trades in their products, the rules on business by a non-profit apply, so plan that part carefully." },
    { q: "Our weavers export to buyers abroad. Do we need FCRA?", a: "Not for sales. Payment for goods sold in the normal course of business is not foreign contribution. A grant or donation from a foreign source is, and needs FCRA registration or prior permission. FCRA registration generally needs three years of existence." },
    { q: "What is NGO Darpan and do we need it?", a: "NGO Darpan is NITI Aayog's portal that gives an NGO a unique ID. Government departments use it when an NGO applies for grant schemes. We register you once your trust, society or company is set up." },
  ],

  related: nearbyAreas("P4-A4"),
  relatedTitle: "NGO registration in areas near Anakaputhur",

  final: {
    title: "Set up the right body for Anakaputhur's weavers",
    sub: "Tell us who you train and how products are sold. We'll pick the structure, register it and file for 12A, 80G and CSR-1.",
    message: "Hi National Filings, I'd like to register an NGO for weavers and women artisans in Anakaputhur. Can we talk?",
  },
  catalogue: ["Livelihood NGO registration in Anakaputhur", "Section 8 company and CSR-1 registration in Anakaputhur", "12A and 80G registration for weaver NGOs in Anakaputhur"],
};
