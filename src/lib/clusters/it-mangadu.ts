import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { INCOME_TAX_SERVICE, nearbyAreas } from "./shared";

/**
 * P3-A8 · Income Tax Consultant in Mangadu (/chennai/income-tax-consultant-in-mangadu).
 * Primary keyword: "income tax consultant in mangadu". We have no office in Mangadu; clients work with us over WhatsApp
 * and email, and can visit our Kundrathur office, which is in the same taluk.
 * Angle: landlords, marriage hall owners, land owners and builders in a growing temple town. Rent as house property (30%
 * deduction, municipal tax), hall income as house property or business, capital gains on land, joint development
 * agreements with builders, and TDS when buying property. Kept distinct from the Mangadu company page (P1-A8), the Mangadu
 * GST page (P2-A8) and the Income Tax pillar.
 *
 * Facts checked (Nov 2026):
 * - The Income-tax Act, 2025 applies from 1 April 2026 (tax year 2026-27); returns filed in 2026 for FY 2025-26 follow the
 *   1961 Act, whose rules on these points are the same in substance.
 * - House property: annual value under section 21, after deducting municipal taxes paid; 30% standard deduction and
 *   interest under section 22. https://taxguru.in/?p=1080185 ,
 *   https://www.businesstoday.in/personal-finance/tax/story/new-income-tax-bill-clarifies-key-deductions-on-house-property-income-489507-2025-08-14
 *   House property loss set off against other income capped at ₹2 lakh a year, balance carried forward (long-standing rule,
 *   carried into the 2025 Act).
 * - Hall income: bare letting is house property; letting with services as an organised activity can be business income;
 *   the courts decide on facts (Chennai Properties, SC 2015; Rayala Corporation, SC 2016). Stated generally.
 * - Capital gains on land: long-term after 24 months; section 197 taxes long-term gains at 12.5% without indexation, and
 *   resident individuals and HUFs selling land or buildings acquired before 23 July 2024 pay the lower of that and 20% with
 *   indexation. https://www.incometaxindia.gov.in/w/section-197-76 ,
 *   https://studycafe.in/overview-of-new-capital-gains-tax-structure-under-income-tax-act-2025-416536.html
 * - Stamp duty (guideline) value as sale price where it exceeds 110% of the agreed price: section 78 (formerly s.50C).
 *   https://www.incometaxindia.gov.in/w/section-78-120
 * - Exemptions renumbered: s.54 to section 82, s.54B to 83, s.54EC to 85, s.54F to 86.
 *   https://tax2win.in/guide/income-tax-act-2025-section-mapping-old-vs-new
 * - Agricultural land inside a municipality with population of 10,000 or more is a capital asset; Mangadu's 2011 population
 *   was 38,188 (from mangadu.ts). Long-standing definition, stated without a section number.
 * - Joint development agreements: formerly s.45(5A), now section 67(14) to (16): for individuals and HUFs under a registered
 *   agreement, the gain arises in the year the completion certificate is issued for the whole or part of the project, valued
 *   at the stamp duty value of the owner's share on that date plus any money received; the benefit is lost if the share is
 *   transferred before the certificate. TDS on money paid under a JDA (formerly s.194-IC) is now in section 393(1), with no
 *   threshold. https://www.taxtmi.com/tmi_blog_details?id=831022 ,
 *   https://blog.tdsman.com/2026/05/tds-on-payment-under-joint-development-agreement-section-3931-194ic/ ,
 *   https://www.incometaxindia.gov.in/w/joint-development-agreements-jda-
 * - TDS on buying property (formerly s.194-IA): section 393(1), 1% of the higher of price and stamp duty value when it is
 *   ₹50 lakh or more, resident sellers; Form 141 replaces Form 26QB from 1 April 2026.
 *   https://taxguru.in/income-tax/tds-immovable-property-purchases-compliance-income-tax-act-2025.html ,
 *   https://blog.tdsman.com/2026/05/tds-on-purchase-of-immovable-property-section-3931-194ia/
 * - Individual tenants paying rent above ₹50,000 a month must deduct TDS (formerly s.194-IB); rate not stated.
 * Local facts reused from mangadu.ts JSDoc: Mangadu Municipality (constituted 2021), Kundrathur taluk, Kancheepuram
 * district, annexed Malayambakkam, Kozhumanivakkam, Paraniputhur and Sikkarayapuram, 2011 population 38,188, Kamakshi
 * Amman temple. Timelines are estimates.
 */

const whatsapp = "Hi National Filings, I'm in Mangadu and need help with tax on my rent or a property sale.";

export const itMangaduPage: LicencePageData = {
  id: "P3-A8",
  service: INCOME_TAX_SERVICE,
  meta: {
    title: "Income Tax Consultant in Mangadu | National Filings",
    description: "Income tax consultant in Mangadu for landlords, hall owners and land sellers. Rent, capital gains on land, builder JDAs and property TDS handled.",
  },
  hero: {
    headline: { line1: "Income Tax Consultant", line2Before: "in Mangadu, ", accent: "Rent to Resale" },
    sub: "Mangadu families earn from shops let out near the temple, halls booked for weddings and land that builders now want. Each of these is taxed in its own way. We work out the right head, the right year and the right exemption before you file.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "KeyRound",
    kicker: "Mangadu, Kancheepuram district",
    title: "Income Tax Return Filed",
    line: "Your Mangadu Return",
    stamp: "ITR-V verified",
    chips: ["Rent after 30%", "Land gains worked out", "JDA timing checked"],
    steps: ["Property", "Rent", "Sale", "Exempt", "File"],
  },

  benefitsSection: {
    title: "Why Mangadu property owners need careful income tax advice",
    lead: "Rent, hall bookings, a plot sale and a builder's agreement can all land in one family's return. The head of income and the year of tax change the bill more than the rate does.",
    cta: {
      title: "Selling land or signing with a builder?",
      sub: "Send us the draft agreement before you sign. We'll tell you when tax will arise and how much to keep aside.",
      message: "Hi National Filings, I own land in Mangadu and a builder has offered a joint development deal. Can you check the tax?",
    },
  },
  benefits: [
    { icon: "Home", title: "Rent taxed after deductions", line: "Municipal tax and the 30% standard deduction applied before tax." },
    { icon: "Building2", title: "Hall income on the right head", line: "House property or business, decided on how the hall is actually run." },
    { icon: "Calculator", title: "Both land tax options compared", line: "12.5% without indexation against 20% with it, for land bought before July 2024." },
    { icon: "Stamp", title: "Guideline value checked", line: "Where the guideline value is higher than your price, we work out which figure is taxed." },
    { icon: "Handshake", title: "JDA tax year planned", line: "Gain fixed in the year the completion certificate comes, not when you sign." },
    { icon: "Landmark", title: "Exemptions used in time", line: "New house, bonds or the capital gains account, chosen before the deadline." },
    { icon: "ReceiptText", title: "TDS on purchases filed", line: "1% TDS deducted and filed when you buy property worth ₹50 lakh or more." },
    { icon: "MapPinned", title: "Office in the same taluk", line: "Send papers on WhatsApp, or see us in Kundrathur." },
  ],

  applicantsSection: {
    title: "Mangadu taxpayers we file for",
    lead: "Most of our Mangadu clients own property: a shop near the temple, a hall, a plot in the newly annexed villages, or a house built through a builder.",
  },
  applicants: [
    { icon: "KeyRound", title: "Landlords with houses and shops", line: "Rent from tenants, with municipal tax paid to Mangadu Municipality." },
    { icon: "Building2", title: "Marriage hall owners", line: "Hall income that may be rent or business, depending on the services." },
    { icon: "Leaf", title: "Owners of family farmland", line: "Land now inside the municipality, sold or offered to builders." },
    { icon: "Handshake", title: "Land owners in a JDA", line: "Giving land to a builder in exchange for flats and some money." },
    { icon: "HardHat", title: "Builders and promoters", line: "Business income from flats, with TDS on payments to land owners." },
    { icon: "Wallet", title: "Families buying a flat or plot", line: "Buyers who must deduct 1% TDS above the limit." },
    { icon: "Users", title: "Retired residents", line: "Pension and rent from a portion of the house, with interest income." },
    { icon: "Plane", title: "NRIs with property in Mangadu", line: "Rent or sale of an inherited house, with higher TDS for the buyer." },
  ],

  opportunities: {
    eyebrow: "Mangadu property",
    title: "Rent, halls and land, where Mangadu's tax questions start",
    intro: "Mangadu is a temple town that is filling up fast. Families let out flats and shops, run wedding halls, and sell or develop land in the newly annexed villages.",
    // Pexels licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "KeyRound", title: "Landlords and rent", image: "https://images.pexels.com/photos/10209711/pexels-photo-10209711.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Apartment blocks with planted balconies behind leafy trees", credit: "Abhishek Mehta / Pexels" },
      { icon: "Building2", title: "Marriage halls", image: "https://images.pexels.com/photos/31307957/pexels-photo-31307957.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Wedding stage with two cane chairs framed by pink flower decorations", credit: "The Event Designer / Pexels" },
      { icon: "Leaf", title: "Family farmland", image: "https://images.pexels.com/photos/14830280/pexels-photo-14830280.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Dirt road lined with coconut trees between harvested fields", credit: "Pause the Moment / Pexels" },
      { icon: "HardHat", title: "Builders and JDAs", image: "https://images.pexels.com/photos/13890649/pexels-photo-13890649.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Workers on scaffolding at a building under construction", credit: "Aravind P.S. / Pexels" },
    ],
  },

  highlights: {
    eyebrow: "Marriage halls and income tax",
    title: "Is your Mangadu hall income rent or business?",
    lead: "Halls here range from a bare floor let out by the day to full packages with cooking, decoration and staff. The head of income follows what you actually provide, and the courts look at the facts.",
    items: [
      { icon: "KeyRound", label: "House property", title: "Hall let out on its own", line: "The family hires the floor and brings everything else. Rent after municipal tax, less 30%, is taxed." },
      { icon: "Briefcase", label: "Business income", title: "Hall run with services", line: "Cooking, cleaning, power, decoration and staff, run as an organised activity, point to business income. Actual expenses and depreciation are claimed.", highlight: true },
      { icon: "Scale", label: "Choose carefully", title: "No double benefit", line: "Business income gets no 30% deduction. House property income gets no claim for staff or upkeep. We compare both on your figures." },
      { icon: "ClipboardCheck", label: "If business", title: "Books, advance tax and audit", line: "Business income brings books of account, advance tax instalments and a tax audit above the limits." },
    ],
  },

  documentsSection: {
    title: "What Mangadu owners and buyers send us",
    lead: "Send clear photos or PDFs on WhatsApp, or bring the originals to our Kundrathur office. For land, the old documents matter as much as the new ones.",
  },
  documents: [
    { icon: "Home", title: "For rent and halls", items: ["Rent agreements or booking register", "Property tax receipts from Mangadu Municipality", "Home loan interest certificate, if any", "Hall expense bills, if run as a business"], hint: "Municipal tax counts only in the year you actually pay it, so we go by the receipt dates." },
    { icon: "FileSignature", title: "For selling land", items: ["Sale deed and guideline value", "Purchase deed, or the parent's deed if inherited", "Bills for improvements such as a compound wall", "Bank details of any new house or bonds bought"], hint: "For inherited land, the previous owner's purchase date and cost are used, so trace the old deed early." },
    { icon: "Handshake", title: "For JDAs and purchases", items: ["Joint development agreement and its registration", "Completion certificate, when issued", "TDS certificates from the builder", "Sale agreement and seller's PAN, if you are buying"], hint: "The completion certificate date fixes the tax year for a JDA, so keep a copy as soon as it is issued." },
  ],
  documentsNote: {
    title: "Land inherited from a parent, with no purchase deed?",
    sub: "Send us whatever papers you have, including the patta and old deeds. We'll work out the cost and date that can be used.",
    message: "Hi National Filings, I'm selling inherited land in Mangadu and the old deed is missing. Can you help with the tax?",
  },

  processSection: {
    title: "How we handle income tax for a Mangadu property owner",
    lead: "Most of it happens over WhatsApp and a call. Families can also meet us at our Kundrathur office, in the same taluk.",
    cta: {
      title: "Talk to us before the deed is signed",
      sub: "The sale price, the guideline value and the JDA terms decide the tax. A short review before registration saves trouble later.",
      message: "Hi National Filings, I'm about to sell or develop land in Mangadu. Can you review the tax before I sign?",
    },
  },
  steps: [
    { title: "List every property", time: "Day 1", sub: "Houses, shops, halls and land, with who owns each share and what each earns." },
    { title: "Fix the head of income", time: "1-2 days", sub: "Rent, business or capital gains decided for each property, on the facts." },
    { title: "Work out gains and exemptions", time: "2-3 days", sub: "Cost traced, both tax options compared and the best exemption chosen." },
    { title: "Settle TDS and advance tax", time: "Before the due date", sub: "TDS from tenants and builders matched, and advance tax paid on large gains." },
    { title: "File and e-verify", time: "On your approval", sub: "Return filed with the property schedules filled in, and the acknowledgement sent to you." },
  ],
  processNote: "Timelines are estimates and depend on how quickly old property papers can be traced.",

  mistakesSection: {
    title: "Income tax mistakes we fix for Mangadu property owners",
    lead: "Most of these come from treating property tax as simple. They often show up years later, when a notice compares the deed with the return.",
  },
  mistakes: [
    { icon: "Stamp", title: "Sale price below guideline value", problem: "Land is registered at a price well under the guideline value, and the owner pays tax on the deed price.", fix: "We apply the guideline value where the law requires it, or seek a valuation where it is unfairly high." },
    { icon: "Clock", title: "JDA gain taxed in the wrong year", problem: "An owner pays tax when the agreement is signed, or forgets it when the completion certificate arrives.", fix: "We track the project and report the gain in the year of the certificate." },
    { icon: "Building2", title: "Hall income on the wrong head", problem: "A hall with cooks and staff claims the 30% deduction as if it were plain rent.", fix: "We look at what the hall actually provides and file it on the head that fits." },
    { icon: "TriangleAlert", title: "No TDS on a ₹50 lakh purchase", problem: "A family buys a flat and pays the full price to the seller without deducting 1%.", fix: "We deduct, deposit and file the TDS form on time, and issue the certificate to the seller." },
  ],

  costSection: {
    title: "What our fee for a Mangadu return depends on",
    lead: "There is no government fee to file a return. Our fee depends on how many properties you have and whether there is a sale or JDA this year, agreed in writing first.",
    cta: {
      title: "Ask for a written quote",
      sub: "Tell us how many properties you let out, and whether you are selling, buying or signing with a builder.",
      message: "Hi National Filings, can I get a quote for my income tax return? I have property in Mangadu.",
    },
  },
  costs: [
    { icon: "Home", label: "Quoted upfront", title: "Rent and halls", line: "Depends on the number of properties and whether a hall is run as a business." },
    { icon: "TrendingUp", label: "Quoted upfront", title: "Land or house sale", line: "Cost tracing, both tax options and exemption planning for each sale.", highlight: true },
    { icon: "Handshake", label: "Quoted upfront", title: "JDA review", line: "Agreement reviewed before signing, and the gain reported in the right year." },
    { icon: "ReceiptText", label: "Quoted upfront", title: "TDS and notices", line: "TDS on purchases, and replies to notices about past sales, quoted separately." },
  ],

  compliance: {
    eyebrow: "Land and builders",
    title: "Selling land or signing a JDA in Mangadu",
    lead: "Much of the farmland in the villages annexed to Mangadu is now being sold or developed. These are the rules we check first.",
    items: [
      { icon: "Leaf", label: "Within the municipality", title: "Farmland is a capital asset", line: "Agricultural land inside Mangadu Municipality is taxed on sale like any other land." },
      { icon: "Calculator", label: "Held over 24 months", title: "Long-term gain options", line: "12.5% without indexation, or 20% with it for land bought before 23 July 2024 by individuals and HUFs, whichever is lower." },
      { icon: "Handshake", label: "Section 67(14)", title: "Tax on a JDA", line: "For a registered agreement, the gain arises in the year the completion certificate is issued, valued at the guideline value of your share then.", highlight: true },
      { icon: "Landmark", label: "Sections 82 to 86", title: "Exemptions after a sale", line: "A new residential house, specified bonds or a capital gains account deposit can save tax, within time limits." },
    ],
  },

  reasonsTitle: "Why Mangadu families choose National Filings for income tax",
  reasons: [
    { icon: "MapPinned", title: "Same taluk", line: "Our office is in Kundrathur, a short drive from Mangadu, if you'd like to meet." },
    { icon: "Home", title: "Property tax is our everyday work", line: "Rent, halls, land sales and JDAs, handled for local families." },
    { icon: "ReceiptText", title: "Fees in writing", line: "Quoted once we know the properties involved, before any work starts." },
    { icon: "HeartHandshake", title: "Patient with family property", line: "We explain each co-owner's share of rent and gains, not just the eldest's." },
    { icon: "MessageCircle", title: "WhatsApp first", line: "Send deeds and receipts by photo. Visit only if you want to." },
    { icon: "Award", title: "Experience since 2012", line: "Registration, tax and compliance work for Chennai businesses and families." },
  ],

  faqTitle: "Income tax in Mangadu: questions on rent, land and builders",
  faqs: [
    { q: "Is there a National Filings office in Mangadu?", a: "No. Our only office is in Karaima Nagar, Kundrathur, and Mangadu falls in Kundrathur taluk. Most Mangadu clients send their papers on WhatsApp and e-verify the return with an Aadhaar OTP. Families with land or JDA matters often prefer to visit us with the deeds." },
    { q: "How is rent from my house or shop in Mangadu taxed?", a: "Start with the rent for the year and subtract the property tax you actually paid to Mangadu Municipality in that year. From the balance, a flat 30% standard deduction is allowed for repairs and upkeep, whatever you really spent, along with any home loan interest. Under the Income-tax Act, 2025 these rules are in sections 21 and 22." },
    { q: "I rent out my marriage hall. Is that rent or business income?", a: "It depends on what you provide. A hall let out bare, with the family arranging everything else, is generally income from house property. A hall run with cooks, cleaning, power, decoration and staff as an organised activity is generally business income. The courts decide on the facts, so we look at how your hall works before choosing." },
    { q: "My family's farmland is now inside Mangadu Municipality. Is its sale taxable?", a: "Yes. Agricultural land within a municipality with a population of 10,000 or more is a capital asset, and Mangadu crossed that long ago. If you held it for more than 24 months, the gain is long-term. For land bought before 23 July 2024, individuals and HUFs pay the lower of 12.5% without indexation or 20% with indexation." },
    { q: "A builder wants to develop my land in exchange for flats. When do I pay tax?", a: "If you are an individual or HUF and the joint development agreement is registered, the capital gain arises in the year the completion certificate is issued for the project or part of it, not when you sign. The gain is based on the guideline value of the flats you receive on that date, plus any money paid to you. The builder deducts TDS on that money. If you sell your share before the certificate, this deferral is lost. The rule is now in section 67 of the 2025 Act." },
    { q: "I'm buying a flat in Mangadu for ₹60 lakh. Do I have to deduct TDS?", a: "Yes. When the price or the guideline value, whichever is higher, is ₹50 lakh or more, the buyer deducts 1% TDS and deposits it with a combined challan and statement, which is Form 141 from April 2026 in place of Form 26QB. You then give the seller the TDS certificate. If the seller is an NRI, different and higher TDS rules apply." },
    { q: "The guideline value is higher than the price I actually got. Which one is taxed?", a: "If the guideline (stamp duty) value is more than 110% of your sale price, the guideline value is taken as the sale price for capital gains, under section 78 of the 2025 Act. If you believe the guideline value is above the land's real value, a reference to a valuation officer can be sought. We check this before you register the deed." },
  ],

  related: nearbyAreas("P3-A8"),
  relatedTitle: "Income tax consultants in areas near Mangadu",

  final: {
    title: "Sort out tax on your Mangadu rent, hall or land",
    sub: "Message us with what you own and what you plan to sell or develop. We'll list the papers, the tax and our fee before we start.",
    message: "Hi National Filings, I'm in Mangadu and I'd like help with income tax on my property.",
  },
  catalogue: ["Income tax return filing for landlords in Mangadu", "Capital gains tax on land sales in Mangadu", "Joint development agreement tax advice in Mangadu"],
};
