import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { SERVICE, clusterHref, licenceHref, localityHref, pillarHref } from "./shared";

/**
 * P1-A8 · Company Registration in Mangadu (/chennai/company-registration-in-mangadu).
 * Primary keyword: "company registration in mangadu". We have no office in Mangadu; clients work with us over WhatsApp
 * and email, and can visit our Kundrathur office, which is in the same taluk.
 * Angle: the Kamakshi Amman temple and the family-run trades around functions and devotees (halls, caterers, florists,
 * pooja item sellers, photographers), plus builders and agents serving a town that has taken in four village panchayats.
 * The unique section covers how to structure a family event or catering business. Kept distinct from Kundrathur (P1-A1).
 *
 * Local facts checked (Oct 2026): Mangadu Municipality was constituted on 07.12.2021 (G.O. No. 116) as a second grade
 * municipality, upgraded from a town panchayat; it is in Kundrathur taluk, Kancheepuram district (TN Gazette 2025);
 * Malayambakkam, Kozhumanivakkam, Paraniputhur and Sikkarayapuram village panchayats are annexed to it; area 8.40 sq km,
 * 2011 population 38,188; PIN codes include 600122, 600125, 600069 and 600056; the Kamakshi Amman Temple (Tapas Kamakshi,
 * penance amid five fires) is administered by the HR&CE Department, Adi Shankara is said to have installed the Ardhameru
 * Chakram there, and devotees come to pray for marriage among other needs; the Velleeswarar and Vaikunta Perumal temples
 * are nearby and managed by the same temple group. Kept general (not verified locally): exact GST rates for catering and
 * hall rental. Company and partnership law facts as on the P1 cluster pages. Timelines are estimates.
 */

const whatsapp = "Hi National Filings, I'm in Mangadu and I'd like to register my family business.";

export const mangaduPage: LicencePageData = {
  id: "P1-A8",
  service: SERVICE,
  meta: {
    title: "Company Registration in Mangadu | National Filings",
    description: "Company registration in Mangadu for halls, caterers, florists, photographers and builders. Partnership, LLP or Pvt Ltd, plus GST and FSSAI set-up.",
  },
  hero: {
    headline: { line1: "Company Registration", line2Before: "in Mangadu, ", accent: "Family Business Ready" },
    sub: "Halls, caterers, florists and photographers in Mangadu are often family-run. We turn that arrangement into a registered firm, LLP or company, with shares and roles written down.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "HeartHandshake",
    kicker: "Mangadu, Kancheepuram district",
    title: "Certificate of Incorporation",
    line: "Your Mangadu Business",
    stamp: "CIN issued",
    chips: ["Partnership or LLP", "Family partners", "GST and FSSAI"],
    steps: ["Family talk", "Deed", "DSC", "Filing", "CIN"],
  },

  benefitsSection: {
    title: "Why Mangadu's function trade benefits from registering",
    lead: "Event work runs on advances, verbal promises and family trust. A registered entity puts the money, the roles and the liability on paper.",
    cta: {
      title: "Running a hall, kitchen or studio with family?",
      sub: "Tell us who works in the business and who has put money in. We'll suggest how to bring everyone in fairly.",
      message: "Hi National Filings, I run a family event business in Mangadu. How should we register it?",
    },
  },
  benefits: [
    { icon: "Users", title: "Every family member's share on record", line: "Parents, siblings and spouses know exactly what they own and earn." },
    { icon: "Wallet", title: "Booking advances in a business account", line: "Function advances stop mixing with household money." },
    { icon: "ShieldCheck", title: "Liability kept inside the LLP", line: "Claims from a cancelled event or a kitchen accident stay with the LLP, not the family home." },
    { icon: "ReceiptText", title: "Proper GST invoices", line: "Corporate clients and larger families expect a tax invoice for big bookings." },
    { icon: "Landmark", title: "Loans for halls and kitchens", line: "Banks look at the entity's records when you renovate or buy equipment." },
    { icon: "RefreshCw", title: "Smooth hand-over", line: "The next generation joins as partners or shareholders without starting over." },
    { icon: "BadgeCheck", title: "Protect the family name", line: "A registered business name is the first step towards a trademark." },
    { icon: "Handshake", title: "Tie-ups with vendors", line: "Decorators, caterers and halls can sign proper supply agreements with each other." },
  ],

  applicantsSection: {
    title: "Mangadu businesses we register",
    lead: "Devotees come to the Kamakshi Amman temple to pray for marriage, a home and more. Around the temple, and across the villages the municipality has taken in, these are the trades we hear from.",
  },
  applicants: [
    { icon: "Building2", title: "Marriage and function halls", line: "Halls and mini halls hosting engagements, weddings and receptions." },
    { icon: "ChefHat", title: "Caterers and function cooks", line: "Teams cooking for weddings, house warmings and temple events." },
    { icon: "Leaf", title: "Florists and garland makers", line: "Stringing jasmine and making garlands and stage decoration." },
    { icon: "ShoppingBag", title: "Pooja item and gift sellers", line: "Shops selling lamps, camphor, framed pictures and return gifts." },
    { icon: "Eye", title: "Photographers and videographers", line: "Wedding studios, drone crews and album makers." },
    { icon: "CalendarCheck", title: "Event planners and decorators", line: "Stage, lighting and sound hire for functions." },
    { icon: "HardHat", title: "House builders and contractors", line: "Firms building individual houses and small apartment blocks." },
    { icon: "Home", title: "Real estate agents", line: "Brokers handling sales and rentals in the annexed villages." },
  ],

  opportunities: {
    eyebrow: "Local sectors",
    title: "What keeps Mangadu's small businesses busy",
    intro: "Functions bring work to halls, kitchens and flower sellers, while a municipality that now includes Malayambakkam, Kozhumanivakkam, Paraniputhur and Sikkarayapuram keeps builders and agents occupied.",
    // Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "Building2", title: "Wedding and function halls", image: "https://images.unsplash.com/photo-1779308936221-89739e035a53?auto=format&fit=crop&w=1600&q=90", alt: "Wedding hall decorated with a floral archway, white drapes and chairs", credit: "Simply thrilled / Unsplash" },
      { icon: "ChefHat", title: "Catering kitchens", image: "https://images.unsplash.com/photo-1675081491769-a6f7a1d63c20?auto=format&fit=crop&w=1600&q=90", alt: "Large steel vessel of seasoned rice garnished with coriander on a stove", credit: "Gurth Bramall / Unsplash" },
      { icon: "Leaf", title: "Flowers and pooja items", image: "https://images.unsplash.com/photo-1759211683223-a546cdbf4a97?auto=format&fit=crop&w=1600&q=90", alt: "Hands stringing white jasmine buds onto a thread", credit: "Tahamie Farooqui / Unsplash" },
      { icon: "HardHat", title: "Builders and homes", image: "https://images.unsplash.com/photo-1599977294837-9bbd093a5917?auto=format&fit=crop&w=1600&q=90", alt: "Brick walls and openings of a multi-storey building under construction", credit: "Vijay Kumar Gaba / Unsplash" },
    ],
  },

  highlights: {
    eyebrow: "Family event and catering businesses",
    title: "How to structure a family function business",
    lead: "Most halls and catering teams in Mangadu start as one person's business with relatives helping. Here is how we usually think about formalising it.",
    items: [
      { icon: "FileSignature", label: "Quick start", title: "Partnership deed", line: "Family members sign a deed setting out capital, profit share and who signs cheques. Simple, low cost, but partners share unlimited liability." },
      { icon: "ShieldCheck", label: "More protection", title: "LLP for halls and big kitchens", line: "Large advances, staff and equipment mean more risk. An LLP limits each partner's liability and still keeps compliance light.", highlight: true },
      { icon: "UserPlus", label: "Bringing family in", title: "Who becomes a partner", line: "Adult family members can join as partners with their own KYC. A minor can only be admitted to the benefits of a partnership, not as a full partner." },
      { icon: "Percent", label: "Check before quoting", title: "GST on catering and halls", line: "Catering, hall rental and food served with a hall booking can fall under different GST entries. We confirm the current treatment for your exact service." },
    ],
  },

  documentsSection: {
    title: "Documents for company registration in Mangadu",
    lead: "Send clear photos on WhatsApp, or bring them to our Kundrathur office. Every family member joining needs their own set.",
  },
  documents: [
    { icon: "UserRound", title: "For each partner or director", items: ["PAN card", "Aadhaar, passport or voter ID", "Bank statement or utility bill, under two months old", "Passport-size photo", "Mobile number and email ID"], hint: "Married family members often have a different surname on PAN and Aadhaar. We check this before applying for signatures." },
    { icon: "Building2", title: "For the hall, kitchen or shop", items: ["Latest electricity bill for the premises", "Property tax receipt or rent agreement", "No objection letter if a relative owns the building"], hint: "If the hall is in a parent's name, a signed NOC from the owner is enough to use it as the registered address." },
    { icon: "Users", title: "For the family arrangement", items: ["Who is joining and in what role", "Capital each person is bringing in", "Profit-sharing ratio", "Who will sign and operate the bank account"], hint: "These go into the partnership deed or LLP agreement, so agree them at home first." },
  ],
  documentsNote: {
    title: "Building in a parent's name?",
    sub: "Send us the bill and property details. We'll draft the NOC wording and check the address before filing.",
    message: "Hi National Filings, our hall in Mangadu is in my father's name. What do we need for registration?",
  },

  processSection: {
    title: "Registering a Mangadu family business, step by step",
    lead: "A partnership deed can be ready within days. An LLP or company is usually registered within two to three weeks of complete documents.",
    cta: {
      title: "Plan it with the whole family",
      sub: "We can do a call with everyone who is joining, so shares and roles are clear before anything is signed.",
      message: "Hi National Filings, can we schedule a call with my family about registering our Mangadu business?",
    },
  },
  steps: [
    { title: "Family discussion", time: "Day 1", sub: "We agree who joins, the capital, profit shares and whether a partnership, LLP or company fits." },
    { title: "Deed or agreement draft", time: "2-3 days", sub: "We draft the partnership deed or the LLP agreement terms for everyone to read." },
    { title: "Digital signatures", time: "1-2 days", sub: "DSCs for designated partners or directors. Not needed for a plain partnership firm." },
    { title: "Filing", time: "About 1 week", sub: "Firm registration with the Registrar of Firms, or name approval and incorporation with the MCA." },
    { title: "GST, FSSAI and bank", time: "After registration", sub: "Business account opened, then GST and FSSAI for food businesses." },
  ],
  processNote: "Timelines are estimates. Department workload, name objections and resubmissions can add time.",

  mistakesSection: {
    title: "Mistakes we see in Mangadu family businesses",
    lead: "Most come from trusting that family arrangements don't need paperwork. They are easy to fix early and painful to fix later.",
  },
  mistakes: [
    { icon: "Users", title: "Working relatives left off the deed", problem: "A son runs the kitchen every day but isn't a partner, so his share is never recorded.", fix: "We list everyone who works or invests and agree whether they join as partners or as paid staff." },
    { icon: "Wallet", title: "Advances paid into personal accounts", problem: "Hall booking advances land in the owner's savings account and get mixed with family spending.", fix: "We open the business account soon after registration and set up proper receipts." },
    { icon: "UtensilsCrossed", title: "Catering without FSSAI", problem: "The partnership is registered, but the kitchen has no food licence or registration.", fix: "We apply for FSSAI in the firm's name as soon as it exists." },
    { icon: "Percent", title: "One GST rate for everything", problem: "A hall that also supplies food bills every booking the same way.", fix: "We separate hall rent, catering and decoration on the invoice according to how each is taxed." },
  ],

  costSection: {
    title: "Registration fees for Mangadu businesses",
    lead: "A partnership, LLP and company each cost differently, and family size affects signatures and stamp duty. We give you the full breakdown first.",
    cta: {
      title: "Compare the options in writing",
      sub: "Tell us how many family members are joining. We'll quote a partnership, LLP and company side by side.",
      message: "Hi National Filings, can I get a quote for registering my Mangadu family business as a partnership or LLP?",
    },
  },
  costs: [
    { icon: "FileSignature", label: "Partnership", title: "Deed and firm registration", line: "Stamp duty on the deed at Tamil Nadu rates, plus the Registrar of Firms fee." },
    { icon: "Landmark", label: "Company or LLP", title: "MCA fees", line: "A company with authorised capital of ₹15 lakh or less pays no MCA filing fee. LLP fees depend on contribution.", highlight: true },
    { icon: "Signature", label: "Per person", title: "Digital signatures", line: "For each designated partner or director in an LLP or company." },
    { icon: "Headset", label: "Agreed upfront", title: "Our professional fee", line: "Family consultation, drafting, filing and GST or FSSAI set-up." },
  ],

  compliance: {
    eyebrow: "After registration",
    title: "What Mangadu event and building businesses need next",
    lead: "The registration is only the start. Depending on your trade, these usually follow, and we can help with each.",
    items: [
      { icon: "ReceiptIndianRupee", label: "Above the limit", title: "GST registration", line: "Compulsory once turnover crosses the limit, and useful earlier for corporate bookings." },
      { icon: "UtensilsCrossed", label: "Caterers and kitchens", title: "FSSAI registration or licence", line: "Required for anyone preparing or serving food for sale, based on turnover." },
      { icon: "ScrollText", label: "Where your trade needs it", title: "Municipal trade licence", line: "Issued by Mangadu Municipality for trades carried on within its limits." },
      { icon: "Factory", label: "For small businesses", title: "Udyam registration", line: "Free MSME registration that helps with bank loans and schemes." },
    ],
  },

  reasonsTitle: "Why Mangadu businesses choose National Filings",
  reasons: [
    { icon: "MapPinned", title: "Same taluk", line: "Our office is in Kundrathur, the taluk Mangadu belongs to, if you'd like to meet." },
    { icon: "HeartHandshake", title: "Patient with families", line: "We explain shares and roles to every family member, not just the owner." },
    { icon: "MessageCircle", title: "WhatsApp first", line: "Send documents between functions and get updates without visiting." },
    { icon: "ReceiptText", title: "Fees in writing", line: "Government fees, stamp duty and our fee shown line by line." },
    { icon: "Award", title: "Experience since 2012", line: "Registration, tax and compliance work for Chennai businesses." },
    { icon: "ClipboardCheck", title: "Year-round reminders", line: "GST, FSSAI renewal and annual filing deadlines tracked for you." },
  ],

  faqTitle: "Company registration in Mangadu: your questions",
  faqs: [
    { q: "Is there a National Filings office in Mangadu?", a: "No. Our only office is in Karaima Nagar, Kundrathur, and Mangadu falls in Kundrathur taluk. Most Mangadu clients send documents and sign over WhatsApp and email, and families who want to sit down together can visit us." },
    { q: "Should our marriage hall be a partnership or an LLP?", a: "A partnership is quicker and cheaper to set up. An LLP costs a little more but limits each partner's liability, which matters when you take large booking advances and employ staff. We'll compare both for your turnover and family set-up." },
    { q: "Can my wife and children become partners?", a: "Adults can, each with their own PAN, ID and address proof, and the deed or LLP agreement records their share. A minor cannot be a full partner in a partnership firm, though a minor can be admitted to its benefits." },
    { q: "Our catering business has no written deed. Can we register it now?", a: "Yes. We draft a deed that records the current partners, their capital and profit shares, then register the firm. If you prefer limited liability, we can form an LLP instead and move the business into it." },
    { q: "Is GST the same for hall rental and catering?", a: "Not necessarily. Renting out a hall and supplying food are treated differently under GST, and food served with a hall booking raises its own questions. We check the current rates and entries for your exact service before you register and start invoicing." },
    { q: "Which local body covers Mangadu, and does it matter?", a: "Mangadu has been a municipality since 2021 and is in Kancheepuram district. Company registration is the same anywhere in Tamil Nadu, but trade licences for your premises come from Mangadu Municipality." },
    { q: "How long does registration take for a Mangadu business?", a: "A partnership deed can be signed within days, while firm registration with the Registrar of Firms takes longer. An LLP or company usually takes two to three weeks once documents are complete." },
  ],

  related: [
    { icon: "Building2", label: "Company registration in Chennai", href: pillarHref("P1") },
    { icon: "MapPinned", label: "Company registration in Porur", href: localityHref("P1-A7") },
    { icon: "MapPinned", label: "Company registration in Kundrathur", href: localityHref("P1-A1") },
    { icon: "Users", label: "Partnership firm registration", href: clusterHref("P1-C3") },
    { icon: "Handshake", label: "LLP registration", href: clusterHref("P1-C1") },
    { icon: "ReceiptIndianRupee", label: "GST registration", href: clusterHref("P2-C1") },
    { icon: "UtensilsCrossed", label: "FSSAI registration", href: licenceHref("L2") },
    { icon: "ScrollText", label: "Trade license", href: licenceHref("L3") },
  ],
  relatedTitle: "Related registration services near Mangadu",

  final: {
    title: "Give your Mangadu family business a proper footing",
    sub: "Tell us who is involved and what you run. We'll suggest the structure, list the documents and quote the fees before we start.",
    message: "Hi National Filings, I'd like to register my family business in Mangadu.",
  },
  catalogue: ["Partnership firm registration in Mangadu", "LLP registration in Mangadu", "GST and FSSAI set-up for Mangadu caterers"],
};
