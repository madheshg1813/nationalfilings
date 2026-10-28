import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { SERVICE, clusterHref, licenceHref, localityHref, pillarHref } from "./shared";

/**
 * P1-A10 · Company Registration in Gerugambakkam (/chennai/company-registration-in-gerugambakkam).
 * Primary keyword: "company registration in gerugambakkam". Written for the households that have settled in
 * Gerugambakkam's newer apartments and layouts and are starting something of their own: consultants and IT professionals
 * with a side business, interior designers, play schools and daycare, tuition and online sellers. The unique section
 * covers starting a business while still in a salaried job. Kept distinct from the Kundrathur page (P1-A1) and the
 * Porur page (P1-A7): no industrial estate angle and no old-village-name address angle.
 *
 * Local facts checked (Oct 2026): Gerugambakkam is a neighbourhood in south-western Chennai about 4 km from Porur
 * junction on the Kundrathur road, which runs through it; it lies in Kundrathur taluk, Kancheepuram district;
 * Moulivakkam and Kolapakkam are to its north and Kovur to its south, with Porur, Mangadu and Iyyappanthangal nearby;
 * it is one of the village panchayats annexed to Kundrathur Municipality (listed as "Gerugampakkam"); schools in the area
 * include PSBB Millennium School; new apartment projects are being built and sold there. PIN codes are not stated because
 * sources disagree (600128 and 600122). Company law, OPC and income tax points are general. Timelines are estimates.
 */

const whatsapp = "Hi National Filings, I live in Gerugambakkam and I'd like to register a business.";

export const gerugambakkamPage: LicencePageData = {
  id: "P1-A10",
  service: SERVICE,
  meta: {
    title: "Company Registration in Gerugambakkam | National Filings",
    description: "Company registration in Gerugambakkam for home-based consultants, salaried professionals with a side business, play schools and online sellers.",
  },
  hero: {
    headline: { line1: "Company Registration", line2Before: "in Gerugambakkam, ", accent: "Side Business Ready" },
    sub: "Running a second income from the spare room? We help you pick between a proprietorship, OPC, LLP or company, register it online and keep it compliant alongside your day job.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "Home",
    kicker: "Gerugambakkam, Chennai",
    title: "Certificate of Incorporation",
    line: "Your Gerugambakkam Business",
    stamp: "CIN issued",
    chips: ["Home address as office", "OPC or proprietorship", "Fits around a day job"],
    steps: ["Idea", "Structure", "DSC", "MCA", "CIN"],
  },

  benefitsSection: {
    title: "What a registered business gives a Gerugambakkam household",
    lead: "A side business often starts with a few clients from a former employer or the apartment WhatsApp group. Registration is what turns that into something you can bill, bank and grow.",
    cta: {
      title: "Running a business from home already?",
      sub: "Tell us what you earn from it and who pays you. We'll tell you whether to register now and in what form.",
      message: "Hi National Filings, I run a small business from my home in Gerugambakkam. Should I register it?",
    },
  },
  benefits: [
    { icon: "Wallet", title: "Business money kept apart", line: "A current account in the business name stops client payments mixing with your salary." },
    { icon: "ReceiptText", title: "Proper invoices", line: "Corporate clients pay faster when the invoice carries a registered name and PAN." },
    { icon: "ShieldCheck", title: "Family assets protected", line: "An OPC, LLP or company limits what a client dispute can reach." },
    { icon: "Briefcase", title: "A name beyond your own", line: "Clients deal with the firm, not just with you, which helps when you take on staff." },
    { icon: "Users", title: "Spouse as a partner", line: "Couples can run it together with shares and roles written down." },
    { icon: "Globe", title: "Overseas clients paid cleanly", line: "Freelancers billing abroad find foreign remittances easier to explain with a registered entity." },
    { icon: "TrendingUp", title: "Ready to go full-time", line: "When the side income overtakes the salary, the structure is already in place." },
    { icon: "BadgeCheck", title: "A brand you can protect", line: "A registered name is the first step before you file a trademark." },
  ],

  applicantsSection: {
    title: "Who registers with us from Gerugambakkam",
    lead: "New apartments along the Kundrathur road have brought in young families. These are the kinds of businesses they start.",
  },
  applicants: [
    { icon: "Laptop", title: "IT professionals with a side project", line: "App, web and data work billed in the evenings and weekends." },
    { icon: "Briefcase", title: "Independent consultants", line: "HR, finance, marketing and training consultants working from home." },
    { icon: "PenLine", title: "Interior designers", line: "Designers taking on flat and villa projects in the new layouts." },
    { icon: "HeartHandshake", title: "Daycare and play schools", line: "Childcare run from a ground-floor unit or an independent house." },
    { icon: "GraduationCap", title: "Tuition and coaching", line: "Home tuition, abacus, music and spoken English classes." },
    { icon: "ShoppingCart", title: "Online sellers", line: "Home bakers, sarees, handmade goods and marketplace stores." },
    { icon: "Stethoscope", title: "Clinics and therapists", line: "Physiotherapy, counselling and diet practices at home or nearby." },
    { icon: "HardHat", title: "Small contractors", line: "Electrical, plumbing and modular kitchen work for apartment owners." },
  ],

  opportunities: {
    eyebrow: "Local sectors",
    title: "The home-grown businesses of Gerugambakkam",
    intro: "Gerugambakkam is mostly homes, schools and small shops between Porur and Kundrathur. Its businesses tend to start at a dining table and grow from referrals within the neighbourhood.",
    // Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "Laptop", title: "Consulting from home", image: "https://images.unsplash.com/photo-1743865318654-5586c91f5d3c?auto=format&fit=crop&w=1600&q=90", alt: "Woman working on a laptop at a glass table in a bright living room", credit: "Aleksei Zhivilov / Unsplash" },
      { icon: "PenLine", title: "Interior design", image: "https://images.unsplash.com/photo-1717140370275-7d847544b27b?auto=format&fit=crop&w=1600&q=90", alt: "Living room with two armchairs, a round wooden table and a patterned screen wall", credit: "Jejo Jose / Unsplash" },
      { icon: "HeartHandshake", title: "Play schools and daycare", image: "https://images.unsplash.com/photo-1567746455504-cb3213f8f5b8?auto=format&fit=crop&w=1600&q=90", alt: "Nursery classroom with small tables, stools and a reading corner", credit: "Gautam Arora / Unsplash" },
      { icon: "GraduationCap", title: "Tuition and coaching", image: "https://images.unsplash.com/photo-1758525862357-27fb39545240?auto=format&fit=crop&w=1600&q=90", alt: "Tutor standing beside a student who is writing at a desk", credit: "Vitaly Gariev / Unsplash" },
    ],
  },

  highlights: {
    eyebrow: "Still in a salaried job?",
    title: "Starting a business while in a salaried job",
    lead: "Registering while still employed is common and usually allowed, but four things need sorting before you file anything.",
    items: [
      { icon: "FileSignature", label: "Check first", title: "Read your employment contract", line: "Many contracts have exclusivity, conflict of interest or IP clauses. Government and PSU staff usually have stricter service rules. If in doubt, ask HR in writing." },
      { icon: "UserRound", label: "Simplest start", title: "Proprietorship", line: "No separate entity, little paperwork. You and the business are the same in law, so your personal assets are exposed to its debts." },
      { icon: "Building2", label: "Sole owner, limited liability", title: "One person company", line: "A resident Indian can form one OPC, with a nominee named. The company is separate from you, which suits client contracts and future growth.", highlight: true },
      { icon: "Calculator", label: "Kept general", title: "Income tax on two incomes", line: "As a proprietor, business profit is added to your salary in one return. With an OPC, the company is taxed on its profit and you on what it pays you." },
    ],
  },

  documentsSection: {
    title: "Documents for company registration in Gerugambakkam",
    lead: "Everything can be shared as clear photos or PDFs over WhatsApp or email. You shouldn't need to step out during office hours.",
  },
  documents: [
    { icon: "IdCard", title: "For you and any co-founder", items: ["PAN card", "Aadhaar, passport or voter ID", "Recent bank statement or mobile bill", "Photo and personal email ID", "Nominee's PAN and Aadhaar, for an OPC"], hint: "Use a personal email and mobile number, not your employer's, for every MCA and DSC record." },
    { icon: "Home", title: "If your flat is the office", items: ["Latest electricity bill for the flat", "Sale deed or rent agreement", "No objection letter from the owner or co-owner"], hint: "If the flat is in your spouse's or parent's name, they sign the no objection letter." },
    { icon: "Briefcase", title: "About the business", items: ["Two or three name ideas", "Services or products you will offer", "Whether a spouse or friend will join", "Expected clients, in India or abroad"], hint: "We draft the business objects wide enough for what you plan next, not just today's work." },
  ],
  documentsNote: {
    title: "Flat owned jointly or by family?",
    sub: "Send us the electricity bill and the ownership papers. We'll tell you who signs the no objection letter.",
    message: "Hi National Filings, my Gerugambakkam flat is in my family's name. What address documents do I need for registration?",
  },

  processSection: {
    title: "How we register a Gerugambakkam business around your work hours",
    lead: "Calls can be early morning or after office, and documents move over WhatsApp. A company or OPC is usually incorporated within two to three weeks of complete papers.",
    cta: {
      title: "Talk to us after office hours",
      sub: "Message us with a time that suits you. We'll call, go through your plans and send a checklist.",
      message: "Hi National Filings, I work during the day. Can we talk in the evening about registering my business in Gerugambakkam?",
    },
  },
  steps: [
    { title: "Short call on your plans", time: "Day 1", sub: "Your job, the side business, co-founders and clients. We suggest a structure and give a written quote." },
    { title: "Papers over WhatsApp", time: "1-2 days", sub: "We check IDs and the flat's documents and point out any mismatch before filing." },
    { title: "Digital signatures", time: "1-2 days", sub: "DSCs issued after a short video verification from your phone." },
    { title: "Name and incorporation", time: "About 1-2 weeks", sub: "Name approval, then SPICe+ for a company or OPC, or FiLLiP for an LLP." },
    { title: "Certificate, PAN and bank", time: "On approval", sub: "Certificate of Incorporation with PAN and TAN, then the current account and GST if needed." },
  ],
  processNote: "Timelines are estimates. MCA workload, name objections and resubmissions can add time.",

  mistakesSection: {
    title: "Mistakes salaried founders in Gerugambakkam often make",
    lead: "These are common with first-time founders who are also holding a job. All of them are easy to prevent.",
  },
  mistakes: [
    { icon: "Mail", title: "Office email on government records", problem: "The founder uses a work email and phone for DSC and MCA filings, then loses access after changing jobs.", fix: "We register everything on your personal email and mobile number from day one." },
    { icon: "FileWarning", title: "Contract not checked", problem: "A side business is registered, then the employer's policy turns out to need prior permission.", fix: "We ask you to check your contract or HR policy before we file anything." },
    { icon: "Wallet", title: "Client money in the salary account", problem: "Business receipts land in the same account as salary, which makes the tax return messy.", fix: "We help open a separate current account as soon as the entity is registered." },
    { icon: "Shuffle", title: "Proprietorship outgrown too soon", problem: "A play school or design studio starts in one person's name, then a spouse or investor wants a share.", fix: "We ask about likely partners early, so an LLP or company can be chosen at the start." },
  ],

  costSection: {
    title: "What company registration costs for a Gerugambakkam founder",
    lead: "A proprietorship costs very little to set up. An OPC, LLP or company costs more, mainly because of signatures, government fees and stamp duty. We list every item before you pay.",
    cta: {
      title: "Compare the costs by structure",
      sub: "Tell us the structures you're considering. We'll send the fees for each side by side.",
      message: "Hi National Filings, can you compare the cost of an OPC and a proprietorship for my business in Gerugambakkam?",
    },
  },
  costs: [
    { icon: "Signature", label: "Per person", title: "Digital signatures", line: "For each director, partner or subscriber. An OPC needs one for you." },
    { icon: "Landmark", label: "Depends on structure", title: "MCA fees", line: "A company or OPC with authorised capital of ₹15 lakh or less pays no MCA filing fee. LLP fees depend on contribution.", highlight: true },
    { icon: "Stamp", label: "Tamil Nadu rates", title: "Stamp duty", line: "On the MOA and AOA, or on the LLP agreement." },
    { icon: "Headset", label: "Quoted upfront", title: "Our professional fee", line: "Advice on structure, drafting, filing and help with your first compliance steps." },
  ],

  compliance: {
    eyebrow: "After registration",
    title: "What Gerugambakkam businesses usually need next",
    lead: "Home-based businesses need fewer licences than a factory, but a few things follow registration depending on what you do.",
    items: [
      { icon: "ReceiptIndianRupee", label: "Above the limit or by choice", title: "GST registration", line: "Needed once turnover crosses the limit, and often asked for by corporate clients and marketplaces." },
      { icon: "FileText", label: "Every year", title: "Income tax return", line: "Your own return now reports the business income. A company or OPC files its own return too." },
      { icon: "CalendarCheck", label: "Companies and LLPs", title: "Annual ROC filings", line: "Yearly returns and financial statements with the MCA, even if the business is small." },
      { icon: "UtensilsCrossed", label: "For food sellers", title: "FSSAI registration", line: "Home bakers and caterers need FSSAI registration or a licence before selling." },
    ],
  },

  reasonsTitle: "Why Gerugambakkam founders choose National Filings",
  reasons: [
    { icon: "MapPinned", title: "On your side of the city", line: "Our office is in Kundrathur, along the road that runs through Gerugambakkam." },
    { icon: "Clock", title: "Calls around your job", line: "Early morning or evening calls, so the day job isn't disturbed." },
    { icon: "MessageCircle", title: "All on WhatsApp and email", line: "Documents, signatures and updates without taking leave." },
    { icon: "ReceiptText", title: "Fees in writing", line: "Every government fee and our fee listed before you pay." },
    { icon: "Award", title: "Experience since 2012", line: "Registration, tax and compliance work for Chennai businesses." },
    { icon: "ClipboardCheck", title: "Compliance tracked for you", line: "ROC, GST and income tax dates reminded, so the side business stays clean." },
  ],

  faqTitle: "Company registration in Gerugambakkam: your questions",
  faqs: [
    { q: "Can I register a company while working full-time for another employer?", a: "Company law doesn't stop an employee from being a director or shareholder. What matters is your employment contract and your employer's policies, which may limit outside work or need prior permission. Check those first. Government and public sector employees usually have stricter rules." },
    { q: "Should I start with a proprietorship or a one person company?", a: "A proprietorship is cheaper and quicker but has no separate legal identity, so you are personally liable for its debts. An OPC costs more to set up and maintain, but it is a separate company with limited liability. If you expect large contracts or plan to bring in others later, an OPC or private limited company is often the better start." },
    { q: "Can I use my Gerugambakkam flat as the registered office?", a: "Yes, with a recent electricity bill and a no objection letter from the owner. If the flat is rented, the rent agreement is needed too. Check your apartment association's rules if clients will visit or you will put up a board." },
    { q: "How is my side business income taxed along with my salary?", a: "As a proprietor, your business profit is added to your salary and taxed in your personal return, which then needs a different ITR form from a salary-only return. With an OPC or company, the company pays tax on its own profit, and you pay tax on any salary or dividend it pays you. Your tax adviser should look at your exact numbers." },
    { q: "My wife and I want to run a play school together. Which structure fits?", a: "A partnership or LLP lets you both hold agreed shares, and an LLP adds limited liability. A private limited company with both of you as directors also works. Play schools may need separate approvals for the premises and for running the school, which company registration doesn't cover." },
    { q: "Do I need to visit your office?", a: "No. You can work with us entirely over WhatsApp, email and phone. If you'd rather meet, our office is in Karaima Nagar, Kundrathur, and the Kundrathur road runs from Gerugambakkam towards it." },
    { q: "How long will it take to register my business?", a: "A company, OPC or LLP usually takes two to three weeks from complete documents. A proprietorship needs no incorporation, so you can start once GST, Udyam or a bank account in the business name is in place." },
  ],

  related: [
    { icon: "Building2", label: "Company registration in Chennai", href: pillarHref("P1") },
    { icon: "MapPinned", label: "Company registration in Kundrathur", href: localityHref("P1-A1") },
    { icon: "MapPinned", label: "Company registration in Porur", href: localityHref("P1-A7") },
    { icon: "UserRound", label: "One person company registration", href: clusterHref("P1-C2") },
    { icon: "Store", label: "Proprietorship registration", href: clusterHref("P1-C4") },
    { icon: "Handshake", label: "LLP registration", href: clusterHref("P1-C1") },
    { icon: "Calculator", label: "Income tax filing", href: pillarHref("P3") },
    { icon: "UtensilsCrossed", label: "FSSAI registration", href: licenceHref("L2") },
  ],
  relatedTitle: "Related registration services near Gerugambakkam",

  final: {
    title: "Turn your Gerugambakkam side business into a registered one",
    sub: "Tell us about your job and your plans. We'll suggest the structure, list the documents and fees, and work around your hours.",
    message: "Hi National Filings, I'd like to register my business in Gerugambakkam.",
  },
  catalogue: ["One person company registration in Gerugambakkam", "Proprietorship and LLP registration in Gerugambakkam", "Private limited company registration in Gerugambakkam"],
};
