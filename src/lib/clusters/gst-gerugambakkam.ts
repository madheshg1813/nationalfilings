import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { GST_SERVICE, nearbyAreas } from "./shared";

/**
 * P2-A10 · GST Consultant in Gerugambakkam (/chennai/gst-consultant-in-gerugambakkam).
 * Primary keyword: "gst consultant in gerugambakkam". Angle: salaried professionals with side businesses, home-based
 * consultants, interior designers, play schools and online sellers. Unique sections: whether a side business needs GST at
 * all, registering at a home address, works contract vs design fees, and the play school exemption. Kept distinct from the
 * company page (P1-A10), which covers structures and employment contracts.
 *
 * Local facts reused from P1-A10 (checked Oct 2026): Gerugambakkam lies on the Kundrathur road about 4 km from Porur
 * junction, in Kundrathur taluk, Kancheepuram district, and is among the villages annexed to Kundrathur Municipality; new
 * apartment projects are being built there. PIN not stated (sources disagree).
 *
 * Facts checked (Nov 2026):
 * - Thresholds for most Tamil Nadu businesses: ₹20 lakh for services, ₹40 lakh for goods (as on P2-C1). Aggregate turnover
 *   (section 2(6) CGST Act) includes taxable, exempt and export supplies across India under the same PAN, excluding taxes.
 *   Salary is outside GST: Schedule III para 1, services by an employee to the employer in the course of employment.
 *   Section 23(1)(a): a person supplying only exempt goods or services isn't liable to register.
 * - Export of services counts in turnover; inter-state service providers below the threshold are exempt from compulsory
 *   registration (Notification 10/2017-IT); registered exporters can supply without IGST under an LUT.
 * - Sellers of goods through e-commerce operators: compulsory registration, except the enrolment route for intra-state only
 *   sellers (Notification 34/2023-CT, from 1 Oct 2023). TCS by operators is 0.5% from 10 Jul 2024 (Notification 15/2024-CT).
 * - Home address: CBIC Instruction 03/2025-GST lists documents (own premises: property tax receipt, khata, electricity or
 *   water bill; rented: rent agreement with owner's proof; family-owned: consent letter with owner's proof). Rule 9 and
 *   Rule 25: physical verification where Aadhaar authentication isn't done or the application is flagged, report in REG-30.
 *   Biometric Aadhaar authentication at a GST Suvidha Kendra for applicants selected on risk, live in Tamil Nadu since
 *   28 Jan 2025 (GSTN advisory). Rule 18: certificate displayed and GSTIN on a name board at the entrance.
 * - Works contract: section 2(119) covers fitting out, renovation and similar work on immovable property where goods pass;
 *   treated as a supply of services (Schedule II para 6(a)). Section 17(5)(c) blocks the owner's ITC on works contracts for
 *   immovable property, except where it is input for a further works contract. Section 12(3) IGST Act: place of supply for
 *   services directly related to immovable property, expressly including interior decorators, is where the property is.
 * - Play schools: entry 66 of Notification 12/2017-CT(R) exempts services by an educational institution to its students;
 *   "educational institution" includes pre-school education (AAR on pre-school, Taxmann). Coaching outside a recognised
 *   curriculum is taxable (AAR Gujarat 2026). Daycare without education isn't covered by any ruling found, so it is
 *   described as needing a check, without a rate.
 * No fee figures. Timelines are estimates.
 */

const whatsapp = "Hi National Filings, I live in Gerugambakkam and run a small business alongside my job. Do I need GST?";

export const gstGerugambakkamPage: LicencePageData = {
  id: "P2-A10",
  service: GST_SERVICE,
  meta: {
    title: "GST Consultant in Gerugambakkam | National Filings",
    description: "GST consultant in Gerugambakkam for side businesses run from home: consultants, interior designers, play schools and online sellers. When to register.",
  },
  hero: {
    headline: { line1: "GST Consultant", line2Before: "in Gerugambakkam, ", accent: "Beyond the Payslip" },
    sub: "Your salary never touches GST. The consulting, design fees, play school or online store you run from home might. We work out whether you need a GSTIN, register it at your flat if you do, and file the returns around your working hours.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "Home",
    kicker: "Gerugambakkam, Chennai",
    title: "GST Registration Certificate",
    line: "Your Gerugambakkam Business",
    stamp: "GSTIN issued",
    chips: ["Salary not counted", "Flat as the business address", "Quarterly returns"],
    steps: ["Turnover", "Documents", "REG-01", "Verify", "GSTIN"],
  },

  benefitsSection: {
    title: "Why Gerugambakkam home businesses talk to a GST consultant first",
    lead: "Many people here register too early and file nil returns for years, or too late and owe tax on fees already collected. A short check of your income sorts out which one you are.",
    cta: {
      title: "Not sure your side income needs GST?",
      sub: "Tell us what you earn outside your salary and who pays you. We'll tell you whether to register now, later or not at all.",
      message: "Hi National Filings, I'm salaried and have some side income in Gerugambakkam. Do I need GST registration?",
    },
  },
  benefits: [
    { icon: "Calculator", title: "Turnover worked out properly", line: "Salary left out, but rent, exports and every other receipt that counts added in." },
    { icon: "Home", title: "Registered at your flat", line: "The right ownership papers chosen, so the address isn't queried." },
    { icon: "Eye", title: "Ready for a site visit", line: "What an officer looks for at a home office, and how to have it ready." },
    { icon: "PenLine", title: "Design contracts split right", line: "Design fees, works contracts and furniture sales billed the correct way." },
    { icon: "GraduationCap", title: "Play school fees checked", line: "Which fees are exempt education and which are taxable extras." },
    { icon: "ShoppingCart", title: "Marketplace sales reconciled", line: "Sales reports, TCS credit and returns matched every quarter." },
    { icon: "Globe", title: "Overseas clients billed cleanly", line: "Exports of services under an LUT, with no GST charged to the client." },
    { icon: "Clock", title: "Work after office hours", line: "Calls and filings arranged around your day job." },
  ],

  applicantsSection: {
    title: "Gerugambakkam households we file GST for",
    lead: "Most of our clients here are running something from home. The GST question for each one is quite different.",
  },
  applicants: [
    { icon: "Laptop", title: "IT staff with freelance projects", line: "Weekend development and data work for clients in India or abroad." },
    { icon: "Briefcase", title: "Home-based consultants", line: "HR, finance and training consultants billing companies directly." },
    { icon: "PenLine", title: "Interior designers", line: "Designers taking on flats in the new apartment blocks nearby." },
    { icon: "HardHat", title: "Fit-out and modular kitchen contractors", line: "Small teams doing wardrobes, false ceilings and kitchens." },
    { icon: "HeartHandshake", title: "Play schools and daycare", line: "Pre-schools run from an independent house or a ground-floor unit." },
    { icon: "ShoppingCart", title: "Online sellers", line: "Sarees, handmade goods and home products on marketplaces." },
    { icon: "GraduationCap", title: "Tuition and hobby classes", line: "Abacus, music and coaching classes held at home." },
    { icon: "Home", title: "Owners letting out property", line: "Salaried owners whose rental income may count towards the limit." },
  ],

  opportunities: {
    eyebrow: "Local trades",
    title: "The home businesses behind Gerugambakkam's GST questions",
    intro: "Gerugambakkam is mostly apartments, schools and small shops along the Kundrathur road. Its businesses start in a spare room and grow by referral, which is why the first GST question is usually whether to register at all.",
    // Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "Laptop", title: "Side projects after office hours", image: "https://images.unsplash.com/photo-1702726001096-096efcf640b8?auto=format&fit=crop&w=1600&q=90", alt: "Laptop open on a small desk lit by a lamp in a dark room", credit: "Dastan Eraliev / Unsplash" },
      { icon: "PenLine", title: "Interior design", image: "https://images.unsplash.com/photo-1667400104764-a5fd01a919b0?auto=format&fit=crop&w=1600&q=90", alt: "Hand holding a fan of colour swatches over a floor plan on a desk", credit: "Karolina Grabowska / Unsplash" },
      { icon: "HeartHandshake", title: "Play schools", image: "https://images.unsplash.com/photo-1578349035260-9f3d4042f1f7?auto=format&fit=crop&w=1600&q=90", alt: "Toy cars on a road play mat with small children playing in the background", credit: "BBC Creative / Unsplash" },
      { icon: "ShoppingCart", title: "Selling online from home", image: "https://images.unsplash.com/photo-1680034976850-129b4a07be56?auto=format&fit=crop&w=1600&q=90", alt: "Hands wrapping and taping a parcel in brown paper on a table", credit: "Compagnons / Unsplash" },
    ],
  },

  highlights: {
    eyebrow: "Does a side business need GST?",
    title: "Does your Gerugambakkam side business need GST registration?",
    lead: "The answer depends on what you add up and what you sell. These four points settle it for most of the households we advise.",
    items: [
      { icon: "Wallet", label: "Not counted", title: "Your salary", line: "Work done for your employer as an employee is outside GST altogether. Your salary never counts towards the registration limit, however large it is." },
      { icon: "Calculator", label: "Counted", title: "Every other receipt under your PAN", line: "Consulting fees, export income and even exempt receipts such as house rent are added together. Registration is needed once that total crosses ₹20 lakh for services or ₹40 lakh for goods.", highlight: true },
      { icon: "ShoppingCart", label: "Below the limit too", title: "Selling goods online or across states", line: "Selling goods to other states, or through marketplaces, generally needs a GSTIN from day one. Sellers staying within Tamil Nadu can use a simpler enrolment instead." },
      { icon: "GraduationCap", label: "May not apply", title: "Only exempt income", line: "If everything you supply is exempt, such as pre-school education, you aren't required to register. Add one taxable activity and the exempt fees count towards the limit." },
    ],
  },

  documentsSection: {
    title: "Documents for GST registration at a Gerugambakkam home address",
    lead: "Which address papers you need depends on who owns the flat. Send clear photos or PDFs on WhatsApp and we'll pick the right set.",
  },
  documents: [
    { icon: "IdCard", title: "For you", items: ["PAN card", "Aadhaar linked to your own mobile", "Photograph", "Personal email ID, not your office one", "Bank statement or cancelled cheque"], hint: "Aadhaar authentication is done on your phone. Without it, an officer visit is far more likely." },
    { icon: "Home", title: "For the flat or house", items: ["Property tax receipt or electricity bill, if you own it", "Rent agreement and the owner's bill, if rented", "Consent letter and owner's proof, if a family member owns it"], hint: "If the flat is in your spouse's or parent's name, they sign the consent letter. We give you the wording." },
    { icon: "Briefcase", title: "About the business", items: ["What you sell or the service you provide", "Who your clients are, in India or abroad", "Expected yearly receipts", "Marketplace account details, if any"], hint: "This decides the HSN or SAC codes and whether quarterly filing suits you." },
  ],
  documentsNote: {
    title: "Flat in a family member's name?",
    sub: "Send the electricity bill or tax receipt and tell us who owns it. We'll draft the consent letter for them to sign.",
    message: "Hi National Filings, my Gerugambakkam flat is in my family's name. What do I need to register GST there?",
  },

  processSection: {
    title: "How we register and file GST for a Gerugambakkam home business",
    lead: "Nothing here needs you to take leave. Calls happen before or after office, papers move over WhatsApp, and returns are filed from what you send us.",
    cta: {
      title: "Book an evening call",
      sub: "Message us a time that suits you. We'll go through your income and tell you whether and how to register.",
      message: "Hi National Filings, I work during the day. Can we talk this evening about GST for my business in Gerugambakkam?",
    },
  },
  steps: [
    { title: "Turnover check", time: "Day 1", sub: "Your side income, rent and exports added up, salary left out. We tell you if registration is needed." },
    { title: "Address papers", time: "1-2 days", sub: "The right ownership documents for your flat, and a consent letter if the owner is family." },
    { title: "Application and Aadhaar", time: "Same day", sub: "REG-01 filed and Aadhaar authenticated on your phone. Some applicants are asked for a biometric check at a GST Suvidha Kendra." },
    { title: "Verification", time: "A few working days, longer if visited", sub: "Low-risk applications are approved quickly. Flagged ones get a query or an officer's visit to your home." },
    { title: "GSTIN and first returns", time: "On approval", sub: "Certificate downloaded, name board sorted, and quarterly or monthly filing set up." },
  ],
  processNote: "Timelines are estimates. Physical verification, a biometric appointment or an officer's query can add time.",

  mistakesSection: {
    title: "GST mistakes we see with Gerugambakkam home businesses",
    lead: "Most of these come from treating GST like income tax. They're all easy to avoid with a check at the start.",
  },
  mistakes: [
    { icon: "Calculator", title: "Rent left out of the total", problem: "A consultant billed ₹15 lakh and let out a second flat, and assumed the rent didn't count.", fix: "We add exempt receipts like residential rent to the total, since the limit looks at all of them." },
    { icon: "MapPinned", title: "Wrong tax on an out-of-state flat", problem: "A designer in Gerugambakkam charged CGST and SGST on a flat she designed in Bengaluru.", fix: "For interior work the place of supply is where the property is, so IGST applies. We set up billing by project location." },
    { icon: "HeartHandshake", title: "Daycare treated as exempt", problem: "A play school treated its evening daycare and summer camp fees as exempt education.", fix: "We separate pre-school fees from extras that may be taxable, and check the total against the limit." },
    { icon: "CalendarClock", title: "Registered, then went quiet", problem: "A side business registered early, earned little, and stopped filing returns.", fix: "Returns are due even when there are no sales. We file nil returns, or cancel the GSTIN if it isn't needed." },
  ],

  costSection: {
    title: "What GST services cost for a Gerugambakkam home business",
    lead: "There's no government fee for GST registration. Our fee depends on your filing frequency, the number of invoices and any special work, and we write it down before starting.",
    cta: {
      title: "Get a quote for your situation",
      sub: "Tell us what you do and roughly how many invoices you raise. We'll send a written quote for registration and filing.",
      message: "Hi National Filings, can I get a quote for GST registration and returns for my home business in Gerugambakkam?",
    },
  },
  costs: [
    { icon: "Landmark", label: "No government fee", title: "Registration at your flat", line: "Address papers, consent letter and the application, with our fee quoted upfront." },
    { icon: "CalendarCheck", label: "Quoted upfront", title: "Quarterly or monthly returns", line: "Depends on how often you file and how many invoices you raise.", highlight: true },
    { icon: "Globe", label: "Quoted upfront", title: "Exports and LUT", line: "The yearly LUT and export invoicing for clients outside India." },
    { icon: "Mail", label: "Quoted per case", title: "Queries and notices", line: "Replies to registration queries or notices, depending on the work involved." },
  ],

  compliance: {
    eyebrow: "After registration",
    title: "What GST looks like for a Gerugambakkam home business",
    lead: "For a small business run from home, GST after registration is mostly a quarterly routine. These are the jobs we keep on track.",
    items: [
      { icon: "CalendarClock", label: "Quarterly for most", title: "Returns under QRMP", line: "Quarterly returns with monthly tax payments suit most home businesses." },
      { icon: "Globe", label: "Each financial year", title: "LUT for exporters", line: "Filed each year so services to overseas clients go out without GST." },
      { icon: "ShoppingCart", label: "Every quarter", title: "TCS credit for online sellers", line: "Tax collected by marketplaces claimed against your own liability." },
      { icon: "FileText", label: "Every year", title: "GST matched with your ITR", line: "Business receipts in GST returns tallied with the income tax return." },
    ],
  },

  reasonsTitle: "Why Gerugambakkam households choose National Filings",
  reasons: [
    { icon: "Calculator", title: "Honest advice on registering", line: "If you don't need a GSTIN yet, we'll tell you so." },
    { icon: "Clock", title: "Calls around your job", line: "Early morning or evening calls on your schedule." },
    { icon: "MessageCircle", title: "Everything on WhatsApp", line: "Documents, approvals and return figures shared on your phone." },
    { icon: "MapPinned", title: "Office down the road", line: "Karaima Nagar, Kundrathur, along the same Kundrathur road." },
    { icon: "ReceiptText", title: "Fees in writing", line: "A written quote before we start any work." },
    { icon: "Award", title: "Experience since 2012", line: "GST work for salaried founders and home businesses across Chennai." },
  ],

  faqTitle: "GST in Gerugambakkam: questions from home businesses",
  faqs: [
    { q: "I earn a salary and about ₹8 lakh a year from consulting. Do I need GST?", a: "Not on these figures. Your salary isn't a supply under GST and is never counted. Only the consulting fees and any other business receipts are added up, and for services the limit is ₹20 lakh. If you also earn rent from a house or sell goods, tell us, since those can change the answer." },
    { q: "My clients are all outside India. Do I still need to register?", a: "Export of services counts towards the ₹20 lakh limit, so you need to register only once your total crosses it. After registering, you file a letter of undertaking each year and can bill overseas clients without charging GST." },
    { q: "Can I register GST at my flat in Gerugambakkam?", a: "Yes. Use the property tax receipt or electricity bill if you own it, or the rent agreement with the owner's proof if rented. If a family member owns it, they sign a consent letter. Once registered, the certificate must be displayed and the GSTIN shown on a name board at the entrance of the place of business." },
    { q: "Will a GST officer come to my home?", a: "Only in some cases. If Aadhaar authentication isn't completed, or the application is flagged as risky, the officer can verify the address in person and record photos and a report. In Tamil Nadu, some applicants are also asked to visit a GST Suvidha Kendra for biometric Aadhaar checks. Keep the room you work from identifiable and the documents ready." },
    { q: "I design interiors and also supply and fit the woodwork. How is that taxed?", a: "Design alone is a service. Where you also supply and fix materials into the flat, such as wardrobes or false ceilings, the contract is usually a works contract, which GST treats as a service. You can claim credit on materials bought for it, but your client can't. For a flat in another state, the place of supply is where the flat is, so you charge IGST." },
    { q: "Does a play school need GST registration?", a: "Pre-school education by an educational institution to its students is exempt. If that's all you supply, you aren't required to register. Daycare hours, summer camps or hobby classes may not count as education. If you charge for those, the exempt fees also count towards the ₹20 lakh limit." },
    { q: "Do you have an office in Gerugambakkam?", a: "No. Our only office is in Karaima Nagar, Kundrathur, on the road that runs through Gerugambakkam. Clients here work with us over WhatsApp and email, and are welcome to visit if they'd like to meet." },
  ],

  related: nearbyAreas("P2-A10"),
  relatedTitle: "GST consultants in areas near Gerugambakkam",

  final: {
    title: "Get a straight answer on GST for your Gerugambakkam side business",
    sub: "Tell us what you earn outside your salary. We'll tell you whether to register, what papers your flat needs and what filing will look like.",
    message: "Hi National Filings, I run a business from home in Gerugambakkam and want to sort out my GST.",
  },
  catalogue: ["GST registration in Gerugambakkam for home businesses", "GST return filing for Gerugambakkam consultants", "GST advice for Gerugambakkam interior designers and play schools"],
};
