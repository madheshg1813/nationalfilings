import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { SERVICE, clusterHref, licenceHref, localityHref, pillarHref } from "./shared";

/**
 * P1-A11 · Company Registration in Iyyappanthangal (/chennai/company-registration-in-iyyappanthangal).
 * Primary keyword: "company registration in iyyappanthangal". We have no office here; clients work with us online
 * or visit our Kundrathur office.
 * Angle: shops and services along Mount Poonamallee Road, the bus terminus and the new metro station. Leads on food
 * businesses (restaurants, cloud kitchens, bakeries), mobile and electronics shops, salons, pharmacies and coaching
 * centres. Highlights cover registering a food business: structure, FSSAI basic registration vs state licence, GST.
 *
 * Local facts checked (Oct 2026): Iyyappanthangal lies in Ayyapanthangal village panchayat, Kundrathur taluk,
 * Kancheepuram district (TN Gazette, G.O.Ms. No. 78, RDPR, 13 March 2026); PIN 600056; the area sits on Mount
 * Poonamallee Road and has a bus terminus that opened in 1994 (Wikipedia); Iyyappanthangal is a station on the
 * Poonamallee to Vadapalani stretch of Chennai Metro Phase 2 (Corridor 4), opened on 11 October 2026 (DT Next,
 * Swarajya). FSSAI thresholds from 1 April 2026: basic registration up to ₹1.5 crore turnover, state licence above
 * ₹1.5 crore up to ₹50 crore (FSSAI amendment regulations 2026, as reported by S.S. Rana and others).
 * Company law facts as on the P1 cluster pages. Timelines are estimates.
 */

const whatsapp = "Hi National Filings, I run a shop in Iyyappanthangal and I'd like to register my business.";

export const iyyappanthangalPage: LicencePageData = {
  id: "P1-A11",
  service: SERVICE,
  meta: {
    title: "Company Registration in Iyyappanthangal | National Filings",
    description: "Company registration in Iyyappanthangal for restaurants, cloud kitchens, mobile shops, salons and clinics. LLP, Pvt Ltd or firm, plus FSSAI and GST.",
  },
  hero: {
    headline: { line1: "Company Registration", line2Before: "in Iyyappanthangal, ", accent: "Shop to Company" },
    sub: "Running a hotel, a mobile shop or a coaching centre on Mount Poonamallee Road? We turn it into a registered firm, LLP or company online, and line up FSSAI, GST and the other papers your trade needs.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "Store",
    kicker: "Iyyappanthangal, Chennai 600056",
    title: "Certificate of Incorporation",
    line: "Your Iyyappanthangal Business",
    stamp: "CIN issued",
    chips: ["Firm, LLP or Pvt Ltd", "FSSAI for food outlets", "GST in the new name"],
    steps: ["Talk", "Papers", "DSC", "MCA", "CIN"],
  },

  benefitsSection: {
    title: "What a registered entity changes for an Iyyappanthangal shop",
    lead: "Most businesses here start as one counter on the main road. Registration matters once you add staff, a second outlet or a delivery app.",
    cta: {
      title: "Thinking of a second outlet?",
      sub: "Tell us what you run today and what you plan next. We'll suggest a structure that covers both.",
      message: "Hi National Filings, I have one outlet in Iyyappanthangal and plan a second. Which registration should I take?",
    },
  },
  benefits: [
    { icon: "Store", title: "One name across outlets", line: "A second branch or kitchen can run under the same entity and GSTIN." },
    { icon: "Soup", title: "Delivery apps sign you up faster", line: "Food apps ask for FSSAI, PAN and bank details in the business's own name." },
    { icon: "ShieldCheck", title: "Your house stays separate", line: "An LLP or company keeps shop debts and disputes away from family property." },
    { icon: "Users", title: "Partners on paper", line: "Who put in what, and who takes what share, is written down from day one." },
    { icon: "Landmark", title: "Loans for fit-outs", line: "Banks look at the entity's own accounts for kitchen, AC or showroom loans." },
    { icon: "Laptop", title: "Card and UPI settlements", line: "Payment machines and gateways link cleanly to a current account in the entity's name." },
    { icon: "BadgeCheck", title: "A brand you can protect", line: "A registered name is the first step if you want a trademark for your outlet." },
    { icon: "ClipboardCheck", title: "Cleaner books", line: "Separate accounts make GST returns and income tax filing simpler each year." },
  ],

  applicantsSection: {
    title: "Iyyappanthangal businesses we help register",
    lead: "Commuters change buses at the terminus and now board the metro here too. These are the businesses that serve them and the homes around the main road.",
  },
  applicants: [
    { icon: "UtensilsCrossed", title: "Restaurants and mess", line: "Biriyani points, tiffin centres and family restaurants on the main road." },
    { icon: "ChefHat", title: "Cloud kitchens", line: "Delivery-only kitchens selling through food apps under one or more brands." },
    { icon: "Coffee", title: "Bakeries and sweet shops", line: "Counters that bake, pack and sell, often with a tea stall attached." },
    { icon: "Laptop", title: "Mobile and electronics shops", line: "Phone sales, accessories, repairs and small appliance dealers." },
    { icon: "UserRound", title: "Salons and beauty parlours", line: "Unisex salons and parlours adding staff or a second chair line." },
    { icon: "Stethoscope", title: "Pharmacies and clinics", line: "Medical shops and small clinics serving the residential streets." },
    { icon: "GraduationCap", title: "Coaching centres", line: "Tuition, exam coaching and computer classes with fee-paying students." },
    { icon: "ShoppingBag", title: "Supermarkets and provision stores", line: "Neighbourhood stores growing into a family business." },
  ],

  opportunities: {
    eyebrow: "Local sectors",
    title: "What keeps Mount Poonamallee Road busy",
    intro: "Iyyappanthangal grew around its bus terminus on Mount Poonamallee Road. Since October 2026 it also has a station on the Poonamallee to Vadapalani metro line. Hotels, phone shops, salons and medical shops line the road, and many of them are ready to formalise.",
    // Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "UtensilsCrossed", title: "Hotels and food counters", image: "https://images.unsplash.com/photo-1763951719771-06f7b5846cb7?auto=format&fit=crop&w=1600&q=90", alt: "Cooks rolling dough balls at a busy street kitchen counter", credit: "Zoshua Colah / Unsplash" },
      { icon: "Laptop", title: "Mobile sales and repair", image: "https://images.unsplash.com/photo-1639776739297-f7e1f21526f4?auto=format&fit=crop&w=1600&q=90", alt: "Technician in blue gloves repairing an opened smartphone", credit: "Vitalijus / Unsplash" },
      { icon: "UserRound", title: "Salons and grooming", image: "https://images.unsplash.com/photo-1779595912196-f5f3fcc3970b?auto=format&fit=crop&w=1600&q=90", alt: "Elderly barber cutting a young man's hair outdoors", credit: "Pranav Rasal / Unsplash" },
      { icon: "ShoppingBag", title: "Provision and medical shops", image: "https://images.unsplash.com/photo-1747649970821-5d8a4724ede3?auto=format&fit=crop&w=1600&q=90", alt: "Shopkeeper smiling inside a packed open-front provision store", credit: "Wietse Jongsma / Unsplash" },
    ],
  },

  highlights: {
    eyebrow: "Opening a food business",
    title: "Registering a hotel, bakery or cloud kitchen in Iyyappanthangal",
    lead: "Food is the biggest trade on this stretch, and it needs more than a company certificate. This is the order we usually follow.",
    items: [
      { icon: "Handshake", label: "Step 1: the entity", title: "Pick the structure first", line: "One outlet run by its owner can stay a proprietorship. Partners or plans for several outlets point to an LLP or private limited company." },
      { icon: "FileCheck2", label: "Turnover up to ₹1.5 crore", title: "FSSAI basic registration", line: "Since 1 April 2026, most small food businesses with turnover up to ₹1.5 crore need only basic registration on FoSCoS.", highlight: true },
      { icon: "ScrollText", label: "Above ₹1.5 crore", title: "FSSAI state licence", line: "Above ₹1.5 crore and up to ₹50 crore, a state licence applies. Some food categories need a licence whatever the turnover." },
      { icon: "Percent", label: "Rates differ by set-up", title: "GST on restaurant service", line: "Restaurant service has its own GST rate and input credit rules, and app orders are handled differently. We explain what applies to you before you register." },
    ],
  },

  documentsSection: {
    title: "Documents for company registration in Iyyappanthangal",
    lead: "Send clear photos on WhatsApp. If you run a food outlet or pharmacy, add the extra papers listed below so we can plan the licences together.",
  },
  documents: [
    { icon: "UserRound", title: "For each partner or director", items: ["PAN card", "Aadhaar card", "Recent bank statement or mobile bill", "Passport-size photo", "Personal email and mobile number"], hint: "The mobile number should be linked to Aadhaar, because DSC verification uses an OTP." },
    { icon: "Store", title: "For the shop or kitchen premises", items: ["Electricity bill for the shop", "Rent agreement for the shop", "Owner's no objection letter", "Photo of the shop front"], hint: "Many shops on the main road share one building meter. Tell us early if the bill is in the landlord's name for the whole building." },
    { icon: "UtensilsCrossed", title: "If you sell food or medicines", items: ["Kitchen layout or list of equipment", "Food items you make or sell", "Pharmacist's registration, for a medical shop", "Expected yearly turnover"], hint: "Turnover decides whether FSSAI basic registration or a state licence applies." },
  ],
  documentsNote: {
    title: "Shop bill in the landlord's name?",
    sub: "That's common on Mount Poonamallee Road. Send us the bill and rent agreement, and we'll tell you what the owner needs to sign.",
    message: "Hi National Filings, my Iyyappanthangal shop's electricity bill is in the owner's name. What do I need for registration?",
  },

  processSection: {
    title: "How we register an Iyyappanthangal business online",
    lead: "You don't need to close the shop for a day. Most steps happen on WhatsApp while you keep trading, and a company or LLP is usually ready in two to three weeks.",
    cta: {
      title: "Send us a message after closing time",
      sub: "Tell us your trade, partners and outlets. We'll reply with a checklist and a written quote.",
      message: "Hi National Filings, I want to register my Iyyappanthangal business. What's the first step?",
    },
  },
  steps: [
    { title: "Quick call on your trade", time: "Day 1", sub: "Food, pharmacy, retail or coaching. We note the licences your trade needs alongside the entity." },
    { title: "Papers on WhatsApp", time: "Day 1-2", sub: "We check IDs and the shop bill, and point out mismatches before anything is filed." },
    { title: "DSC by video and OTP", time: "1-2 days", sub: "Each director or partner completes a short online verification for the digital signature." },
    { title: "Name and incorporation", time: "About 1 week", sub: "Name reserved, then SPICe+ for a company or FiLLiP for an LLP, with the registrar's review." },
    { title: "Licences in the new name", time: "After the certificate", sub: "Bank account, GST, FSSAI or drug licence transfer, all in the entity's name." },
  ],
  processNote: "Timelines are estimates. MCA workload, name objections and department queries can add time.",

  mistakesSection: {
    title: "Slip-ups we see with Iyyappanthangal shops",
    lead: "Small outlets often register in a hurry when a delivery app or a bank asks. These are the problems that follow.",
  },
  mistakes: [
    { icon: "FileWarning", title: "FSSAI left in the owner's name", problem: "The hotel becomes an LLP, but food registration and the app listing still show the old proprietor.", fix: "We plan the FSSAI application in the entity's name as soon as incorporation is done." },
    { icon: "Store", title: "Two outlets, two set-ups", problem: "A second branch opens under a relative's name with separate GST, and the accounts get tangled.", fix: "We register one entity and add the second outlet as an additional place of business." },
    { icon: "ListTree", title: "Objects that don't match the trade", problem: "A mobile shop's company objects mention only sales, then repairs and accessories become the main income.", fix: "We draft the business objects to cover sales, service and anything you plan to add." },
    { icon: "Stethoscope", title: "Pharmacy licence forgotten", problem: "A medical shop incorporates, but the drug licence stays with the old proprietorship.", fix: "We flag early that the drug licence has to be taken in the new entity's name." },
  ],

  costSection: {
    title: "What registration costs for an Iyyappanthangal business",
    lead: "It depends on the structure, the number of partners or directors, and which trade licences you add. We give you the full list before you pay.",
    cta: {
      title: "Ask for a quote with FSSAI included",
      sub: "Tell us the structure and your trade. You'll see the entity fees and any trade registrations on separate lines.",
      message: "Hi National Filings, can I get a quote for registering my Iyyappanthangal food business, with FSSAI?",
    },
  },
  costs: [
    { icon: "Signature", label: "Each signatory", title: "Digital signature", line: "Needed by every director, partner or subscriber to sign the forms." },
    { icon: "Landmark", label: "Set by the MCA", title: "Government filing fee", line: "No MCA fee for a company with authorised capital up to ₹15 lakh. LLP fees go by contribution.", highlight: true },
    { icon: "UtensilsCrossed", label: "Food outlets only", title: "FSSAI fee", line: "Depends on basic registration or state licence, which turnover decides." },
    { icon: "Headset", label: "Agreed in advance", title: "Our professional fee", line: "Structure advice, drafting, filing and help with the licences that follow." },
  ],

  compliance: {
    eyebrow: "After registration",
    title: "Licences an Iyyappanthangal shop usually adds next",
    lead: "Which of these apply depends on what you sell and how many people you employ.",
    items: [
      { icon: "UtensilsCrossed", label: "Food businesses", title: "FSSAI registration or licence", line: "Taken in the new entity's name, with the outlet or kitchen address." },
      { icon: "ReceiptIndianRupee", label: "By turnover or app", title: "GST registration", line: "Needed above the threshold, and asked for by many apps and suppliers." },
      { icon: "ScrollText", label: "Shops with staff", title: "Shop and establishment registration", line: "Covers working hours, holidays and records for your staff." },
      { icon: "Users", label: "As the team grows", title: "PF and ESI", line: "Registration once headcount crosses the limits, then monthly returns." },
    ],
  },

  reasonsTitle: "Why Iyyappanthangal shop owners work with National Filings",
  reasons: [
    { icon: "MessageCircle", title: "No need to leave the counter", line: "Documents, signatures and updates over WhatsApp and email." },
    { icon: "UtensilsCrossed", title: "Food licences understood", line: "Entity, FSSAI and GST planned together for hotels and kitchens." },
    { icon: "MapPinned", title: "An office you can visit", line: "Our office is in Kundrathur, if you'd rather sit down and talk." },
    { icon: "ReceiptText", title: "Clear written quotes", line: "Government fees, stamp duty and our fee itemised up front." },
    { icon: "Award", title: "Working since 2012", line: "Registration and tax work for Chennai businesses of every size." },
    { icon: "CalendarClock", title: "Deadlines tracked", line: "GST, ROC and income tax due dates reminded after registration." },
  ],

  faqTitle: "Company registration in Iyyappanthangal: common questions",
  faqs: [
    { q: "Do you have an office in Iyyappanthangal?", a: "No. Our only office is in Karaima Nagar, Kundrathur. Iyyappanthangal clients usually handle everything with us over WhatsApp and email, and are welcome to visit Kundrathur if they want to meet in person." },
    { q: "I run one hotel as a proprietor. Should I form a company?", a: "Not always. A single outlet run by its owner often works fine as a proprietorship. An LLP or private limited company makes sense when you take in partners, open more outlets or want to keep personal assets separate. We'll look at your plans before suggesting either." },
    { q: "Do I need FSSAI basic registration or a state licence?", a: "For most food businesses it depends on yearly turnover. From 1 April 2026, basic registration covers turnover up to ₹1.5 crore and a state licence covers turnover above that up to ₹50 crore. Some kinds of food business need a licence regardless of turnover, so we check your category on FoSCoS." },
    { q: "Can my cloud kitchen run several brand names under one company?", a: "Yes. One LLP or company can run several brands from the same kitchen. Each brand still needs to be listed correctly with the food apps, and you may want to protect the names with trademarks." },
    { q: "Can I use my shop on Mount Poonamallee Road as the registered office?", a: "Yes, if you have a recent electricity bill for the premises and the owner's no objection letter, with the rent agreement if the shop is rented. The address is filed exactly as it appears on the bill." },
    { q: "Does my coaching centre need GST?", a: "Coaching and tuition are generally taxable services, so GST registration is needed once your fee income crosses the threshold. Some education services are exempt, so we check how your courses are run before you register." },
    { q: "Will the new metro station change anything for my registration?", a: "No. Company registration is filed online with the MCA and doesn't depend on transport links. The metro may bring more customers, which is often what pushes shops here to register, open a second outlet or take GST." },
  ],

  related: [
    { icon: "Building2", label: "Company registration in Chennai", href: pillarHref("P1") },
    { icon: "MapPinned", label: "Company registration in Porur", href: localityHref("P1-A7") },
    { icon: "MapPinned", label: "Company registration in Poonamallee", href: localityHref("P1-A9") },
    { icon: "UtensilsCrossed", label: "FSSAI registration", href: licenceHref("L2") },
    { icon: "Store", label: "Shop and establishment registration", href: licenceHref("L4") },
    { icon: "Handshake", label: "LLP registration", href: clusterHref("P1-C1") },
    { icon: "UserRound", label: "Proprietorship registration", href: clusterHref("P1-C4") },
    { icon: "ReceiptIndianRupee", label: "GST registration", href: clusterHref("P2-C1") },
  ],
  relatedTitle: "Related registration services near Iyyappanthangal",

  final: {
    title: "Ready to register your Iyyappanthangal business?",
    sub: "Message us with your trade and outlets. We'll confirm the structure, licences and fees in writing before we begin.",
    message: "Hi National Filings, I'd like to register my business in Iyyappanthangal.",
  },
  catalogue: ["LLP and private limited registration in Iyyappanthangal", "FSSAI and GST for Iyyappanthangal food businesses", "Proprietorship and partnership registration in Iyyappanthangal"],
};
