import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { site } from "@/lib/site";
import { SERVICE, clusterHref, licenceHref, localityHref, pillarHref } from "./shared";

/**
 * P1-A1 · Company Registration in Kundrathur (/chennai/company-registration-in-kundrathur).
 * Primary keyword: "company registration in kundrathur". Our office is in Karaima Nagar, Kundrathur (600069).
 * Written for local businesses: the SIDCO estate at Thirumudivakkam, builders, traders and home-based sellers. The
 * structure-by-structure detail lives on the cluster pages; this page covers what is specific to the area.
 *
 * Local facts checked (Oct 2026): Kundrathur is a municipality and the headquarters of Kundrathur taluk, Kancheepuram
 * district, PIN 600069; eleven village panchayats (Kovur, Tharapakkam, Thirumudivakkam and others) were annexed to it;
 * the Thirumudivakkam SIDCO estate is about 3 km away, with MSMEs supplying Sriperumbudur and Oragadam manufacturers.
 * Company law facts as on the P1 cluster pages. Timelines are estimates.
 */

const whatsapp = "Hi National Filings, I'm in Kundrathur and I'd like to register my business. Can I visit your office?";

export const kundrathurPage: LicencePageData = {
  id: "P1-A1",
  service: SERVICE,
  meta: {
    title: "Company Registration in Kundrathur | National Filings",
    description: "Company registration in Kundrathur, Chennai 600069, from our office in Karaima Nagar. Pvt Ltd, LLP, OPC and firms, with documents checked in person.",
  },
  hero: {
    headline: { line1: "Company Registration", line2Before: "in Kundrathur, ", accent: "Right Next Door" },
    sub: "Our office is on the main road in Karaima Nagar, Kundrathur. Bring your documents, settle on the right structure across one table, and we handle the MCA filing from start to finish.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "MapPinned",
    kicker: "Kundrathur, Chennai 600069",
    title: "Certificate of Incorporation",
    line: "Your Kundrathur Business",
    stamp: "CIN issued",
    chips: ["Office in Kundrathur", "Documents checked in person", "Pvt Ltd, LLP or OPC"],
    steps: ["Visit", "Structure", "DSC", "Filing", "CIN"],
  },

  benefitsSection: {
    title: "Why Kundrathur businesses register with a local team",
    lead: "Registration is filed online, so anyone can file it. What a nearby office adds is the checking, the explaining and the follow-up.",
    cta: {
      title: "Not sure which structure fits your business?",
      sub: "Drop in or message us with what you do and who you sell to. We'll suggest a structure and tell you why.",
      message: "Hi National Filings, I run a business in Kundrathur. Which registration should I choose?",
    },
  },
  benefits: [
    { icon: "MapPinned", title: "Office in Kundrathur", line: "Karaima Nagar, on the main road towards Pallavaram. No trip into the city." },
    { icon: "Users", title: "Face to face advice", line: "Partners can sit together with us and settle shares and roles in one meeting." },
    { icon: "SearchCheck", title: "Originals checked on the spot", line: "We compare PAN, Aadhaar and the address bill before anything is uploaded." },
    { icon: "Signature", title: "DSC sorted locally", line: "Digital signatures for every director or partner, with verification help." },
    { icon: "Factory", title: "We know local work", line: "Job-work units, builders and traders around Kundrathur each need different set-ups." },
    { icon: "Handshake", title: "Ready for big buyers", line: "Vendor forms from larger manufacturers ask for PAN, GST and registration papers." },
    { icon: "Landmark", title: "Bank account opened faster", line: "A complete set of incorporation papers is what branches ask for first." },
    { icon: "ClipboardCheck", title: "Help after registration", line: "GST, Udyam, PF and ESI and yearly filings, from the same office." },
  ],

  applicantsSection: {
    title: "Kundrathur businesses we register",
    lead: "Kundrathur has grown from a temple town into a busy suburb. These are the businesses that walk into our office most often.",
  },
  applicants: [
    { icon: "Factory", title: "Machining and job-work units", line: "Lathe, CNC and fabrication shops around the SIDCO estate." },
    { icon: "Truck", title: "Auto component suppliers", line: "Units selling to plants on the Sriperumbudur and Oragadam side." },
    { icon: "HardHat", title: "Builders and plot promoters", line: "Developers working on new layouts across the suburb." },
    { icon: "Store", title: "Hardware and building material dealers", line: "Shops supplying cement, steel, tiles and electricals." },
    { icon: "ShoppingBag", title: "Grocery and wholesale traders", line: "Family shops ready to grow into a registered firm." },
    { icon: "Package", title: "Home-based online sellers", line: "Sellers on marketplaces and Instagram who need GST and a business name." },
    { icon: "GraduationCap", title: "Tuition and training centres", line: "Coaching centres that want a formal entity for fees and staff." },
    { icon: "UtensilsCrossed", title: "Caterers and food businesses", line: "Kitchens and caterers that also need FSSAI registration." },
  ],

  opportunities: {
    eyebrow: "Local sectors",
    title: "Where Kundrathur's new businesses are coming from",
    intro: "Between the SIDCO estate at Thirumudivakkam, new housing layouts and a busy market area, Kundrathur keeps producing small businesses that grow into registered firms and companies.",
    // Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "Factory", title: "Precision machining", image: "https://images.unsplash.com/photo-1666634157070-6fd830fb5672?auto=format&fit=crop&w=1600&q=90", alt: "Metal rod being cut on a lathe", credit: "Sven Daniel / Unsplash" },
      { icon: "HardHat", title: "Builders and new layouts", image: "https://images.unsplash.com/photo-1774697443203-0f54409d1613?auto=format&fit=crop&w=1600&q=90", alt: "Aerial view of new houses and marked plots on the edge of a town", credit: "Zoshua Colah / Unsplash" },
      { icon: "Store", title: "Shops and local traders", image: "https://images.unsplash.com/photo-1511729530272-7198cdce7b8a?auto=format&fit=crop&w=1600&q=90", alt: "Shopkeeper in an electrical and lighting shop", credit: "Aditya Garikapati / Unsplash" },
      { icon: "ShoppingBag", title: "Produce and grocery trade", image: "https://images.unsplash.com/photo-1769598249127-371d98776210?auto=format&fit=crop&w=1600&q=90", alt: "Vegetable trader sitting with fresh greens at a market", credit: "Abdullah Azeez / Unsplash" },
    ],
  },

  highlights: {
    eyebrow: "Choosing a structure",
    title: "Which structure suits which Kundrathur business",
    lead: "There is no single right answer. This is where we usually start the conversation, before looking at your own plans.",
    items: [
      { icon: "UserRound", label: "Proprietorship or OPC", title: "One owner, one workshop", line: "A sole owner doing job work can start simple. An OPC adds limited liability when orders and risks grow." },
      { icon: "Handshake", label: "Partnership or LLP", title: "Two or three partners trading", line: "A partnership is quick and cheap. An LLP protects each partner's personal assets and suits larger turnover." },
      { icon: "Building2", label: "Private limited", title: "Supplier to large manufacturers", line: "Buyers, banks and investors look most comfortably at a company with audited accounts.", highlight: true },
      { icon: "HardHat", label: "LLP", title: "Builders and project partners", line: "An LLP lets partners pool money for a project with agreed shares and limited liability." },
    ],
  },

  documentsSection: {
    title: "Documents for company registration in Kundrathur",
    lead: "Bring originals when you visit, or send clear photos on WhatsApp. Names and addresses must match on every document.",
  },
  documents: [
    { icon: "UserRound", title: "For each director or partner", items: ["PAN card", "Aadhaar, passport or voter ID", "Bank statement or utility bill, under two months old", "Passport-size photo", "Mobile number and email ID"], hint: "Bring both PAN and Aadhaar so we can check the spellings match." },
    { icon: "Home", title: "For your Kundrathur office address", items: ["Latest electricity bill for the premises", "Rent agreement, if the premises are rented", "No objection letter from the owner"], hint: "Many bills still show old village names such as Kovur or Tharapakkam. We file the address exactly as the bill shows it." },
    { icon: "FileText", title: "For the business", items: ["Two or three name ideas", "What the business will do", "Capital or partner contributions", "Who owns what share"], hint: "For a company, these go into the MOA and AOA. For an LLP, into the LLP agreement." },
  ],
  documentsNote: {
    title: "Not sure your address proof will be accepted?",
    sub: "Bring the bill to our office or send a photo. We'll check the name, date and address before anything is filed.",
    message: "Hi National Filings, can you check my Kundrathur address proof for company registration?",
  },

  processSection: {
    title: "How company registration works with our Kundrathur office",
    lead: "Everything after the first meeting can happen on WhatsApp and email. Most companies and LLPs are registered within two to three weeks of complete documents.",
    cta: {
      title: "Book a time to visit",
      sub: "Tell us when you'd like to come in. We'll have the checklist ready for your structure.",
      message: "Hi National Filings, I'd like to visit your Kundrathur office about company registration. When can I come?",
    },
  },
  steps: [
    { title: "Visit or call", time: "Day 1", sub: "We discuss your business, partners and plans, and agree on the structure and the quote." },
    { title: "Document check", time: "Same day", sub: "We check originals or photos and flag anything that needs fixing before filing." },
    { title: "Digital signatures", time: "1-2 days", sub: "DSCs issued for every director or partner after online verification." },
    { title: "Name and MCA filing", time: "About 1 week", sub: "Name approval, then incorporation forms with the MOA and AOA or LLP details." },
    { title: "Certificate and next steps", time: "On approval", sub: "Certificate with PAN and TAN, then GST, bank account and Udyam as needed." },
  ],
  processNote: "Timelines are estimates. MCA workload, name objections and resubmissions can add time.",

  mistakesSection: {
    title: "Mistakes we often fix for Kundrathur businesses",
    lead: "Most of these come from filing in a hurry or copying details from old papers. They are easy to avoid if caught early.",
  },
  mistakes: [
    { icon: "Home", title: "Address doesn't match the bill", problem: "The application says Kundrathur, but the electricity bill shows the old village name and door number.", fix: "We copy the address exactly from the bill, then add the area name only where it fits." },
    { icon: "IdCard", title: "Spelling differs across IDs", problem: "A partner's name or father's name is spelt one way on PAN and another on Aadhaar.", fix: "We spot it at the first meeting and help correct it before applying for the DSC." },
    { icon: "Shuffle", title: "Wrong structure for the buyer", problem: "A unit starts as a proprietorship, then a large customer insists on a company.", fix: "We ask who you sell to before choosing, so you don't have to convert later." },
    { icon: "FileWarning", title: "Owner's letter missing", problem: "The workshop or shop is rented, but the owner's no objection letter isn't signed.", fix: "We give you the format, and check the signature and date before uploading." },
  ],

  costSection: {
    title: "Company registration fees for Kundrathur businesses",
    lead: "The total depends on the structure, the number of directors or partners and the capital. We write it all down before you pay.",
    cta: {
      title: "Get your quote at our office",
      sub: "Tell us the structure, the number of people and the capital. You'll get government fees, stamp duty and our fee line by line.",
      message: "Hi National Filings, can I get a quote for registering my business in Kundrathur?",
    },
  },
  costs: [
    { icon: "Signature", label: "Per person", title: "Digital signatures", line: "One for each director, partner or subscriber." },
    { icon: "Landmark", label: "Depends on structure", title: "Government fees", line: "For a company, no MCA filing fee when authorised capital is ₹15 lakh or less. LLP fees depend on contribution.", highlight: true },
    { icon: "Stamp", label: "Tamil Nadu rates", title: "Stamp duty", line: "Payable on the MOA and AOA for a company, or on the LLP agreement." },
    { icon: "Headset", label: "Quoted upfront", title: "Our professional fee", line: "Advice, drafting, filing, query replies and post-registration guidance." },
  ],

  compliance: {
    eyebrow: "After registration",
    title: "What Kundrathur businesses usually need next",
    lead: "The certificate is the start. Depending on your trade, these registrations follow, and we can handle each of them.",
    items: [
      { icon: "ReceiptIndianRupee", label: "Often needed", title: "GST registration", line: "Compulsory above the turnover limit, and often asked for by larger buyers anyway." },
      { icon: "Factory", label: "For MSMEs", title: "Udyam registration", line: "Free MSME registration that helps with bank credit, schemes and delayed payments." },
      { icon: "ScrollText", label: "Where your trade needs it", title: "Municipal trade licence", line: "Issued by Kundrathur Municipality for trades carried on in its area." },
      { icon: "Users", label: "When you hire", title: "PF and ESI", line: "Registration once your headcount reaches the limits, then monthly filings." },
    ],
  },

  reasonsTitle: "Why Kundrathur businesses choose National Filings",
  reasons: [
    { icon: "MapPinned", title: "Our own local office", line: "Karaima Nagar, Kundrathur. You can see who is handling your filing." },
    { icon: "Award", title: "Experience since 2012", line: "Registration, tax and compliance work for Chennai businesses." },
    { icon: "ReceiptText", title: "Fees in writing", line: "Government fees, stamp duty and our fee shown line by line." },
    { icon: "MessageCircle", title: "WhatsApp updates", line: "Send documents and get status updates without another visit." },
    { icon: "UserCheck", title: "One person, start to finish", line: "The same expert handles your filing from DSC to certificate." },
    { icon: "ClipboardCheck", title: "Yearly reminders", line: "ROC, GST and income tax deadlines tracked after registration." },
  ],

  faqTitle: "Company registration in Kundrathur: your questions",
  faqs: [
    { q: "Where is your office in Kundrathur?", a: `${site.address.street}, ${site.address.city} ${site.address.postalCode}. We're open Monday to Saturday, 9 am to 7 pm. Message us on WhatsApp before you come so the right person is available.` },
    { q: "Do I have to visit the Registrar of Companies?", a: "No. Company and LLP registration is filed online with the Ministry of Corporate Affairs, and no one needs to appear in person. Coming to our office is optional. It simply makes the document check faster." },
    { q: "Can I use my Kundrathur home as the registered office?", a: "Yes. You need a recent electricity or other utility bill for the address and a no objection letter from the owner. If the house is rented, the rent agreement is needed as well." },
    { q: "My electricity bill shows Kovur, not Kundrathur. Is that a problem?", a: "No. Several villages around Kundrathur, including Kovur, Tharapakkam and Thirumudivakkam, are now part of Kundrathur Municipality, but older bills still carry the village name. We file the address exactly as the bill shows it, so the documents match." },
    { q: "I supply parts to a large manufacturer. Which structure should I choose?", a: "It depends on the buyer and on your plans. Many large buyers are comfortable with a proprietorship or partnership that has GST, but a private limited company or LLP gives limited liability and looks stronger to banks. Bring your vendor form and we'll go through it with you." },
    { q: "How long does it take to register a company in Kundrathur?", a: "Usually two to three weeks once documents are complete, the same as anywhere in Tamil Nadu. A partnership deed can be ready within days, while firm registration with the Registrar of Firms takes longer." },
    { q: "Do I need a trade licence from Kundrathur Municipality?", a: "Many trades carried on within the municipality need a licence from it, and this is separate from company registration. Whether you need one depends on your trade and premises. We'll tell you after looking at what you do." },
  ],

  related: [
    { icon: "Building2", label: "Company registration in Chennai", href: pillarHref("P1") },
    { icon: "MapPinned", label: "Company registration in Pallavaram", href: localityHref("P1-A2") },
    { icon: "Building2", label: "Private limited registration", href: clusterHref("P1-C6") },
    { icon: "Handshake", label: "LLP registration", href: clusterHref("P1-C1") },
    { icon: "UserRound", label: "One person company registration", href: clusterHref("P1-C2") },
    { icon: "Users", label: "Partnership firm registration", href: clusterHref("P1-C3") },
    { icon: "ReceiptIndianRupee", label: "GST registration", href: clusterHref("P2-C1") },
    { icon: "Factory", label: "MSME registration", href: licenceHref("L1") },
  ],
  relatedTitle: "Related registration services near Kundrathur",

  final: {
    title: "Register your Kundrathur business with a team down the road",
    sub: "Message us or drop in at Karaima Nagar. We'll confirm the structure, documents and fees before we start.",
    message: "Hi National Filings, I'd like to register my business in Kundrathur.",
  },
  catalogue: ["Private limited company registration in Kundrathur", "LLP registration in Kundrathur", "Partnership and proprietorship registration in Kundrathur"],
};
