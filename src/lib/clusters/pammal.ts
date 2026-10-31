import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { SERVICE, nearbyAreas } from "./shared";

/**
 * P1-A3 · Company Registration in Pammal (/chennai/company-registration-in-pammal).
 * Primary keyword: "company registration in pammal". We have no office in Pammal; clients work with us online or visit
 * our Kundrathur office, which is on SH 113A, the road known in Pammal as Pammal Main Road.
 * Angle: a residential suburb where many businesses run from home. Tuition centres, tailoring and boutiques, home bakers,
 * small shops, local service providers and freelancers. Leather and exports are left to the Pallavaram page (P1-A2).
 *
 * Local facts checked (Oct 2026): Pammal was a municipality and was merged into Tambaram City Municipal Corporation in
 * 2021; it is in Chengalpattu district; Pammal is a firka (and revenue village) of Pallavaram taluk, along with
 * Anakaputhur, Pozhichalur and Thiruneermalai; PIN 600075; population 75,870 over about 13 sq km at the 2011 census; SH 113A
 * (Pallavaram to Kundrathur to Poonamallee road) is locally called Pammal Main Road; shops line Nallathambi Main Road;
 * neighbours include Pallavaram, Anakaputhur, Pozhichalur, Thiruneermalai and Kundrathur.
 * Sources: en.wikipedia.org/wiki/Pammal, en.wikipedia.org/wiki/Pallavaram_taluk. Timelines are estimates.
 */

const whatsapp = "Hi National Filings, I run a small business from my home in Pammal and I'd like to register it.";

export const pammalPage: LicencePageData = {
  id: "P1-A3",
  service: SERVICE,
  meta: {
    title: "Company Registration in Pammal, Chennai | National Filings",
    description: "Company registration in Pammal for tuition centres, tailors, home bakers and freelancers. Use your home as the office, with the owner's NOC sorted.",
  },
  hero: {
    headline: { line1: "Company Registration", line2Before: "in Pammal, ", accent: "From Your Home" },
    sub: "Plenty of Pammal businesses start in a spare room or a front portion. We help you turn yours into a company, LLP or firm, often with your home as the registered office.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "Home",
    kicker: "Pammal, Chennai 600075",
    title: "Certificate of Incorporation",
    line: "Your Pammal Business",
    stamp: "CIN issued",
    chips: ["Home as office", "Owner's NOC drafted", "Separate bank account"],
    steps: ["Talk", "Papers", "DSC", "MCA", "CIN"],
  },

  benefitsSection: {
    title: "Why a home-run Pammal business should register",
    lead: "Working from home keeps costs low. Registration adds the things a growing neighbourhood business starts to miss: a proper name, a bank account and a clear line between family and business.",
    cta: {
      title: "Running things from your house?",
      sub: "Tell us what you do and who owns the property. We'll say whether your home can be the registered office and what papers it needs.",
      message: "Hi National Filings, I work from home in Pammal. Can my house be my company's registered office?",
    },
  },
  benefits: [
    { icon: "Wallet", title: "Family money stays separate", line: "The business gets its own bank account, so fees and sales don't mix with household spending." },
    { icon: "BadgeCheck", title: "A name customers recognise", line: "Parents, shoppers and clients see a registered name on bills and receipts." },
    { icon: "Home", title: "No office rent to start", line: "Your house can be the registered address while the business is small." },
    { icon: "ShieldCheck", title: "Your savings protected", line: "In a company or LLP, a business debt is not automatically a family debt." },
    { icon: "Banknote", title: "Easier to borrow", line: "Banks look at the entity's own accounts when you need a loan for machines or stock." },
    { icon: "Handshake", title: "Room for a partner", line: "Bring in a friend or relative with shares and duties written down." },
    { icon: "ShoppingCart", title: "Ready for online orders", line: "Marketplaces and payment gateways ask for business details at sign-up." },
    { icon: "Rocket", title: "Grow beyond the street", line: "A second branch or a shop on the main road fits under the same entity." },
  ],

  applicantsSection: {
    title: "Pammal businesses we register",
    lead: "Pammal is a crowded residential suburb, with shops along roads such as Nallathambi Main Road. The people who contact us usually work from a house or a small shop nearby.",
  },
  applicants: [
    { icon: "GraduationCap", title: "Tuition and coaching centres", line: "School tuition, spoken English and exam coaching run from home." },
    { icon: "PenLine", title: "Tailors and boutiques", line: "Blouse stitching, alterations and designer wear from a front room." },
    { icon: "ChefHat", title: "Home bakers and cooks", line: "Cakes, snacks and meal boxes made in a home kitchen." },
    { icon: "Store", title: "Neighbourhood shops", line: "Stationery, mobile, provision and gift shops on the main roads." },
    { icon: "Zap", title: "Local service providers", line: "Electricians, plumbers, AC technicians and repair services." },
    { icon: "Laptop", title: "Freelancers at home", line: "Designers, developers, writers and accountants with outside clients." },
    { icon: "ShoppingBag", title: "Instagram and marketplace sellers", line: "Clothes, jewellery and crafts shipped from home." },
    { icon: "HeartHandshake", title: "Beauty and wellness services", line: "Home salons, yoga classes and fitness trainers." },
  ],

  opportunities: {
    eyebrow: "Local sectors",
    title: "Small businesses that grow in Pammal's streets",
    intro: "Pammal had about 75,000 residents in roughly 13 square kilometres at the 2011 census. That many households close together keep tutors, tailors, bakers and corner shops busy.",
    // Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "GraduationCap", title: "Tuition and coaching", image: "https://images.unsplash.com/photo-1522661067900-ab829854a57f?auto=format&fit=crop&w=1600&q=90", alt: "Schoolgirl writing on a blackboard in a classroom", credit: "Nikhita S / Unsplash" },
      { icon: "PenLine", title: "Tailoring and boutiques", image: "https://images.unsplash.com/photo-1780504863007-44f229d4d33f?auto=format&fit=crop&w=1600&q=90", alt: "Tailor stitching cloth on an old sewing machine in a small workshop", credit: "Anurag Jamwal / Unsplash" },
      { icon: "ChefHat", title: "Home bakers", image: "https://images.unsplash.com/photo-1604974759875-98266ca1adb4?auto=format&fit=crop&w=1600&q=90", alt: "Hands holding a plate of freshly baked cookies", credit: "Prchi Palwe / Unsplash" },
      { icon: "Store", title: "Neighbourhood retail", image: "https://images.unsplash.com/photo-1546327740-f2dc2592370b?auto=format&fit=crop&w=1600&q=90", alt: "Glass display counter stacked with packets of snacks and sweets", credit: "Bhaumik Kaji / Unsplash" },
    ],
  },

  highlights: {
    eyebrow: "Home-based businesses",
    title: "Running a company from your Pammal home",
    lead: "A house can be a company's registered office. These are the four things we go through with every Pammal client who plans to do that.",
    items: [
      { icon: "Home", label: "Registered office", title: "Your home address can be used", line: "A recent electricity bill or similar utility bill for the house is the usual address proof filed with the MCA." },
      { icon: "FileSignature", label: "Owner's NOC", title: "Written consent from the owner", line: "If the house is in a parent's or landlord's name, they sign a no objection letter. Tenants also attach the rent agreement.", highlight: true },
      { icon: "Wallet", label: "Money", title: "Keep household and business apart", line: "Fees and sales go into the company's account. Money you put in or take out is recorded as capital, a loan or salary." },
      { icon: "Building2", label: "Moving out", title: "When to shift to commercial premises", line: "Once customers queue at the gate, staff join or you need a signboard, a shop or office is usually better. The registered office can be changed by filing with the MCA." },
    ],
  },

  documentsSection: {
    title: "Documents for company registration in Pammal",
    lead: "Most Pammal clients send everything on WhatsApp. Check that the house address reads the same on the bill, the rent agreement and the NOC.",
  },
  documents: [
    { icon: "UserRound", title: "For each director or partner", items: ["PAN card", "Aadhaar, passport or voter ID", "Bank statement or utility bill, under two months old", "Passport-size photo", "Mobile number and email ID"], hint: "A spouse or parent joining as second director needs the same set." },
    { icon: "Home", title: "If your house is the office", items: ["Latest electricity bill for the house", "No objection letter signed by the owner", "Rent agreement, if you are a tenant"], hint: "If the bill is in a family member's name, that person signs the NOC. We send you the format." },
    { icon: "FileText", title: "About the business", items: ["Two or three name ideas", "A line on what you sell or teach", "Who puts in how much money", "Whether you'll hire staff soon"], hint: "Home bakers and cooks should mention it, so FSSAI is planned alongside." },
  ],
  documentsNote: {
    title: "House in a relative's name?",
    sub: "Send a photo of the bill and tell us who owns the house. We'll prepare the NOC wording for them to sign.",
    message: "Hi National Filings, my Pammal house is in my parent's name. What NOC do I need for company registration?",
  },

  processSection: {
    title: "Registering a Pammal business without leaving home",
    lead: "Everything can be done over WhatsApp, email and video verification. Most companies and LLPs are registered within two to three weeks of complete documents.",
    cta: {
      title: "Ask for a checklist",
      sub: "Tell us your trade, who will be a director or partner and whose name the house is in. We'll send a list and a written quote.",
      message: "Hi National Filings, please send me the checklist to register my business in Pammal.",
    },
  },
  steps: [
    { title: "A short call", time: "Day 1", sub: "We hear what you do, who is involved and whether the house will be the office." },
    { title: "Papers and NOC", time: "1-2 days", sub: "You share IDs and the bill. We draft the owner's NOC for signing." },
    { title: "Digital signatures", time: "1-2 days", sub: "DSCs for each director or partner, verified on video from home." },
    { title: "Name and MCA forms", time: "About 1 week", sub: "Name reserved, then SPICe+ for a company or FiLLiP for an LLP." },
    { title: "Certificate and bank", time: "On approval", sub: "Certificate with PAN and TAN, then a current account and GST if needed." },
  ],
  processNote: "Timelines are estimates. MCA workload, name objections and resubmissions can add time.",

  mistakesSection: {
    title: "Slip-ups we see with home businesses in Pammal",
    lead: "Running a business from the house is simple until paperwork and family money get tangled. These are the common ones.",
  },
  mistakes: [
    { icon: "FileWarning", title: "NOC signed by the wrong person", problem: "The applicant signs the NOC himself, but the electricity bill is in his mother's name.", fix: "We match the NOC signatory to the bill or the property owner before filing." },
    { icon: "Wallet", title: "Tuition fees into a savings account", problem: "After incorporation, fees still land in the owner's personal account.", fix: "We help you open the current account and move collections to it from day one." },
    { icon: "Coins", title: "Capital never paid in", problem: "Shares are subscribed on paper, but the money is never deposited.", fix: "We remind you to deposit the share money and file the INC-20A declaration on time." },
    { icon: "Shuffle", title: "Company too early", problem: "A one-person tailoring unit takes on a full company and its yearly filings too soon.", fix: "We tell you honestly when a proprietorship or OPC is enough for now." },
  ],

  costSection: {
    title: "Company registration fees for Pammal businesses",
    lead: "The cost depends on the structure, the number of people and the capital. Home-run businesses usually have a simple set-up, and you'll see every item before paying.",
    cta: {
      title: "Ask for a fee breakdown",
      sub: "Tell us the structure, how many directors or partners, and the capital. We'll list each fee separately.",
      message: "Hi National Filings, can I get a quote to register my home business in Pammal?",
    },
  },
  costs: [
    { icon: "Signature", label: "Per person", title: "Digital signatures", line: "One DSC for each director, partner or subscriber." },
    { icon: "Landmark", label: "Depends on structure", title: "MCA and stamp charges", line: "A company with authorised capital of ₹15 lakh or less pays no MCA filing fee. Stamp duty still applies.", highlight: true },
    { icon: "FileSignature", label: "Included", title: "NOC and address papers", line: "We draft the owner's no objection letter and check the bill." },
    { icon: "Headset", label: "Quoted upfront", title: "Our professional fee", line: "Advice, drafting, filing and help with the bank account." },
  ],

  compliance: {
    eyebrow: "After registration",
    title: "What Pammal businesses usually need next",
    lead: "Small and home-run businesses often need only one or two of these. We'll tell you which apply to your trade.",
    items: [
      { icon: "ReceiptIndianRupee", label: "Above the limit, or online", title: "GST registration", line: "Needed once turnover crosses the limit, and asked for by most marketplaces." },
      { icon: "ChefHat", label: "For food businesses", title: "FSSAI registration", line: "Home bakers, caterers and meal services need it before selling." },
      { icon: "ScrollText", label: "Depends on your trade", title: "Trade licence", line: "Pammal is now under Tambaram City Municipal Corporation, which licenses trades in its area." },
      { icon: "Calculator", label: "Every year", title: "ROC and income tax filings", line: "Annual returns, accounts and ITR, with reminders from us." },
    ],
  },

  reasonsTitle: "Why Pammal businesses choose National Filings",
  reasons: [
    { icon: "Home", title: "Used to home-based clients", line: "NOCs, family-owned houses and shared bills are routine for us." },
    { icon: "MapPinned", title: "Kundrathur office on your road", line: "Pammal Main Road runs on to Kundrathur, where our office is." },
    { icon: "MessageCircle", title: "All on WhatsApp", line: "Send documents and get updates between classes or orders." },
    { icon: "ReceiptText", title: "Fees in writing", line: "Government fees, stamp duty and our fee listed line by line." },
    { icon: "Award", title: "Experience since 2012", line: "Registration, tax and compliance work for Chennai businesses." },
    { icon: "ClipboardCheck", title: "Reminders after you register", line: "ROC, GST and income tax dates tracked for you." },
  ],

  faqTitle: "Company registration in Pammal: your questions",
  faqs: [
    { q: "Is there a National Filings office in Pammal?", a: "No. Our only office is in Karaima Nagar, Kundrathur, on SH 113A, the same road that runs through Pammal as Pammal Main Road. Most Pammal clients finish everything on WhatsApp and email, but you're welcome to visit." },
    { q: "Can my house in Pammal be the registered office of my company?", a: "Yes. A residential address can be a company's registered office. You need a recent utility bill for the house and a no objection letter from the owner, plus the rent agreement if you are a tenant." },
    { q: "The house belongs to my father. Who signs the NOC?", a: "Your father, as the owner. If the electricity bill is in someone else's name, tell us, because the NOC and the address proof need to line up. We'll give you the wording." },
    { q: "I take tuition classes at home. Do I need a company?", a: "Not always. Many tutors start as proprietors with just a bank account and, if needed, GST. A company or LLP makes sense when you add teachers, a second centre or a partner. We'll talk through your numbers before suggesting one." },
    { q: "I bake cakes at home. Is company registration enough to start selling?", a: "No. Food businesses also need FSSAI registration or a licence, which is separate from company registration. We can plan both together so the names and addresses match." },
    { q: "Can I shift the registered office out of my house later?", a: "Yes. When you move to a shop or office, the registered office is changed with a board resolution and a filing with the MCA. Moving within the same city is the simplest case." },
    { q: "How long does company registration take for a Pammal business?", a: "Usually two to three weeks from complete documents to the Certificate of Incorporation. An unsigned or mismatched NOC is the most common reason for delay in home-office cases." },
  ],

  related: nearbyAreas("P1-A3"),
  relatedTitle: "Company registration in areas near Pammal",

  final: {
    title: "Give your Pammal home business a proper footing",
    sub: "Tell us what you do and whose name the house is in. We'll confirm the structure, the NOC and the fees before we start.",
    message: "Hi National Filings, I'd like to register my business in Pammal.",
  },
  catalogue: ["Company registration with a home office in Pammal", "One person company registration in Pammal", "LLP and partnership registration in Pammal"],
};
