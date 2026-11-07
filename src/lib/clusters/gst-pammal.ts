import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { GST_SERVICE, nearbyAreas } from "./shared";

/**
 * P2-A3 · GST Consultant in Pammal (/chennai/gst-consultant-in-pammal).
 * Primary keyword: "gst consultant in pammal". We have no office in Pammal; clients work with us over WhatsApp and email,
 * or visit our Kundrathur office, which is on SH 113A, the road known in Pammal as Pammal Main Road.
 * Angle: home-run and neighbourhood businesses (tuition, tailoring, home bakers, small retail). When GST registration is
 * compulsory, whether to register voluntarily, the composition scheme and its limits, QRMP quarterly filing, and a home
 * address as the principal place of business.
 *
 * Local facts (reused from the verified P1-A3 Pammal page): part of Tambaram City Municipal Corporation since 2021,
 * Chengalpattu district, PIN 600075, SH 113A called Pammal Main Road, shops along Nallathambi Main Road.
 *
 * Facts checked (Nov 2026):
 * - Registration limit for most Tamil Nadu businesses: ₹40 lakh aggregate turnover for suppliers exclusively of goods,
 *   ₹20 lakh where any services are supplied (as on the P2-C1 page; Notification 10/2019-CT). Aggregate turnover is
 *   counted per PAN, across India, and includes exempt supplies (CGST Act s. 2(6)).
 * - Registration regardless of turnover (s. 24): inter-state taxable supply of goods, casual taxable persons, reverse
 *   charge liability, and suppliers through e-commerce operators who collect TCS, subject to the exemptions below.
 *   Inter-state supply of services below ₹20 lakh is exempt from registration (Notification 10/2017-IT).
 *   Goods sellers on marketplaces: exempt from registration below the limit if they sell only within one state, make no
 *   inter-state supply, hold a PAN and get an enrolment number on the GST portal, from 1 Oct 2023 (Notification
 *   34/2023-CT, amended by 37/2023-CT).
 * - Voluntary registration is allowed (s. 25(3)); once registered, all GST obligations apply (tax on sales, returns).
 * - Composition: up to ₹1.5 crore for goods (s. 10(1)); 1% for traders and manufacturers, 5% for restaurants, 6% under
 *   the services option up to ₹50 lakh (s. 10(2A)); a goods composition dealer may also supply services up to 10% of
 *   turnover or ₹5 lakh, whichever is higher (s. 10(1) proviso); no input tax credit, no GST collected from customers,
 *   bill of supply instead of tax invoice, no inter-state outward supply of goods. Intra-state goods sales through
 *   e-commerce operators allowed from 1 Oct 2023 (Finance Act 2023, Notification 28/2023-CT); services through
 *   e-commerce still barred. CMP-08 quarterly; GSTR-4 annual return due 30 June after the year from FY 2024-25
 *   (Notification 12/2024-CT, rule 62).
 * - QRMP: turnover up to ₹5 crore; GSTR-1 (or IFF for B2B invoices in the first two months) by the 13th; tax paid
 *   monthly by PMT-06 by the 25th for the first two months of a quarter; quarterly GSTR-3B by the 22nd for Tamil Nadu.
 * - Principal place of business can be a residence; proof is an electricity bill, property tax receipt or similar,
 *   plus a rent agreement or consent letter where the premises are not owned; no government fee for registration
 *   (as on the P2-C1 page).
 * - Private tuition and coaching are taxable services, not covered by the education exemption, once the services limit
 *   is crossed (cleartax.in/s/gst-educational-institutions).
 * Sources: cbic-gst.gov.in, gstcouncil.gov.in (Notification 34/2023-CT), taxguru.in (Finance Act 2023 changes from
 * 1 Oct 2023; Notification 12/2024-CT), gstzen.in (Notification 10/2017-IT), cleartax.in (composition, QRMP). Timelines
 * are estimates.
 */

const whatsapp = "Hi National Filings, I run a small business from home in Pammal. Do I need GST registration?";

export const gstPammalPage: LicencePageData = {
  id: "P2-A3",
  service: GST_SERVICE,
  meta: {
    title: "GST Consultant in Pammal, Chennai | National Filings",
    description: "GST consultant in Pammal for tutors, tailors, home bakers and small shops. Turnover limits, composition, quarterly returns and a home address for GST.",
  },
  hero: {
    headline: { line1: "GST Consultant", line2Before: "in Pammal, ", accent: "Small and Compliant" },
    sub: "Most Pammal businesses we see are run from a house or a small shop. We tell you honestly whether GST applies yet, which scheme keeps it light, and keep the returns on time once you register.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "Home",
    kicker: "Pammal, Chennai 600075",
    title: "GST Registration Certificate",
    line: "Your Pammal Business",
    stamp: "GSTIN issued",
    chips: ["House as place of business", "Composition or regular", "Quarterly returns"],
    steps: ["Turnover", "Scheme", "Address", "Apply", "GSTIN"],
  },

  benefitsSection: {
    title: "What a GST consultant does for a home-run Pammal business",
    lead: "A tutor or a home baker doesn't need a full-time accountant. You need someone to tell you when GST starts, how to keep it simple, and to file on time.",
    cta: {
      title: "Not sure you've crossed the limit?",
      sub: "Send us roughly what you earned in the last twelve months and what you sell. We'll tell you whether registration is due now or later.",
      message: "Hi National Filings, I'm in Pammal. Can you check if my turnover needs GST registration?",
    },
  },
  benefits: [
    { icon: "Calculator", title: "Turnover counted properly", line: "Tuition fees, stitching charges and cake orders added up the way GST law counts them." },
    { icon: "Scale", title: "Goods or services limit", line: "A baker and a tutor have different limits. Mixing both changes which one applies." },
    { icon: "Percent", title: "Composition checked first", line: "A small shop may pay a flat rate instead of full GST. We see if you qualify." },
    { icon: "CalendarClock", title: "Quarterly, not monthly", line: "Small businesses can usually file returns four times a year and pay tax monthly." },
    { icon: "Home", title: "Your house as the address", line: "We set up the registration with your home as the principal place of business." },
    { icon: "ShieldCheck", title: "No surprise notices", line: "Nil and late returns are what trigger most notices for small filers. We file every one." },
    { icon: "ShoppingCart", title: "Ready for online orders", line: "Selling on a marketplace has its own GST rules. We check them before you list." },
    { icon: "MessageCircle", title: "Done between classes", line: "Bills and sales figures on WhatsApp. No trips to an office unless you want one." },
  ],

  applicantsSection: {
    title: "Pammal businesses we handle GST for",
    lead: "Pammal is a dense residential suburb, with shops along Nallathambi Main Road and Pammal Main Road. Most of our clients here work from a front room, a terrace or a small rented shop.",
  },
  applicants: [
    { icon: "GraduationCap", title: "Tuition and coaching classes", line: "Home tuition grows into a taxable service once fees cross the services limit." },
    { icon: "PenLine", title: "Tailors and blouse stitchers", line: "Stitching is a service. Selling fabric or readymade pieces as well needs care." },
    { icon: "ChefHat", title: "Home bakers and snack makers", line: "Cakes and snacks are goods, with different limits and rates from a service." },
    { icon: "Store", title: "Small neighbourhood shops", line: "Stationery, gift, mobile accessory and provision shops weighing up composition." },
    { icon: "ShoppingBag", title: "Instagram and marketplace sellers", line: "Clothes, jewellery and crafts shipped from home, within Tamil Nadu or outside." },
    { icon: "HeartHandshake", title: "Beauty and fitness at home", line: "Home salons, yoga teachers and trainers with steady monthly fees." },
    { icon: "Zap", title: "Repair and service providers", line: "Electricians, AC technicians and phone repairers who also sell parts." },
    { icon: "Laptop", title: "Freelancers with outside clients", line: "Designers and writers billing clients in other states or abroad." },
  ],

  opportunities: {
    eyebrow: "Local trades",
    title: "The small businesses behind Pammal's GST questions",
    intro: "Thousands of households close together keep tutors, tailors, bakers and corner shops busy. Each of them reaches the GST limit in a different way, so each needs a slightly different answer.",
    // Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "GraduationCap", title: "Tuition and coaching", image: "https://images.unsplash.com/photo-1692269725827-699e04a11cdf?auto=format&fit=crop&w=1600&q=90", alt: "Two schoolboys in uniform reading and writing at a classroom desk", credit: "Swastik Arora / Unsplash" },
      { icon: "PenLine", title: "Tailoring", image: "https://images.unsplash.com/photo-1739797725182-9823eace187e?auto=format&fit=crop&w=1600&q=90", alt: "Elderly tailor in glasses stitching dark cloth on a hand sewing machine", credit: "Anil Reddy / Unsplash" },
      { icon: "ChefHat", title: "Home baking", image: "https://images.unsplash.com/photo-1641281941470-672f7d26749a?auto=format&fit=crop&w=1600&q=90", alt: "Cupcakes and a spiral bun on a wooden board with almonds and pistachios", credit: "Anil Sharma / Unsplash" },
      { icon: "Store", title: "Neighbourhood retail", image: "https://images.unsplash.com/photo-1759430710424-9fe6b81eab06?auto=format&fit=crop&w=1600&q=90", alt: "Women browsing bangles at a brightly lit market stall in the evening", credit: "Adhitya Sibikumar / Unsplash" },
    ],
  },

  highlights: {
    eyebrow: "When GST starts",
    title: "Does your Pammal business need GST registration yet?",
    lead: "The limit depends on what you sell and where your customers are. These are the four checks we run for every home-based client.",
    items: [
      { icon: "Package", label: "Only goods", title: "₹40 lakh a year", line: "A baker or shop selling only goods within Tamil Nadu registers once yearly turnover crosses ₹40 lakh." },
      { icon: "GraduationCap", label: "Any services", title: "₹20 lakh a year", line: "Tuition, stitching charges or salon fees bring the limit down to ₹20 lakh, even if you also sell goods.", highlight: true },
      { icon: "Truck", label: "Goods to other states", title: "Register from the first sale", line: "Couriering cakes, clothes or crafts to a buyer outside Tamil Nadu needs a GSTIN whatever your turnover." },
      { icon: "ShoppingCart", label: "Marketplaces", title: "Relief only within the state", line: "Small goods sellers can skip registration if they sell only within Tamil Nadu and enrol on the GST portal." },
    ],
  },

  documentsSection: {
    title: "Documents for GST registration in Pammal",
    lead: "If you run the business from your house, the house is your principal place of business. Most of the paperwork is about proving that address.",
  },
  documents: [
    { icon: "UserRound", title: "About you", items: ["PAN card", "Aadhaar linked to your mobile", "Passport-size photo", "Email ID you check often"], hint: "GST registration is in the name on your PAN, so a proprietor's GSTIN is linked to their own PAN." },
    { icon: "Home", title: "For your Pammal house", items: ["Recent electricity bill or property tax receipt", "Rent agreement, if you rent", "Consent letter from the owner, if the house is a parent's or spouse's"], hint: "We also ask for a photo of the room or front portion where you work, in case an officer asks for one." },
    { icon: "Landmark", title: "For the business", items: ["Bank statement or cancelled cheque", "A line on what you sell or teach", "Rough turnover for the last twelve months"], hint: "A separate bank account for business receipts makes every return easier to check." },
  ],
  documentsNote: {
    title: "House in a family member's name?",
    sub: "Send a photo of the bill and tell us whose name it is in. We'll draft the consent letter for them to sign.",
    message: "Hi National Filings, my Pammal house is in my mother's name. What consent letter do I need for GST?",
  },

  processSection: {
    title: "Getting GST sorted for a Pammal home business",
    lead: "Most clients from Pammal never visit us. We work over WhatsApp and email, and our Kundrathur office further along Pammal Main Road is open if you'd rather sit down.",
    cta: {
      title: "Ask us to check your position",
      sub: "Tell us what you sell, your rough monthly takings and where your customers are. We'll reply with a plan and a written quote.",
      message: "Hi National Filings, I'm a small business owner in Pammal. Can you advise me on GST?",
    },
  },
  steps: [
    { title: "Turnover check", time: "Day 1", sub: "We add up the last twelve months the way GST counts it and tell you if registration is due." },
    { title: "Scheme decided", time: "Same day", sub: "Regular or composition, and monthly or quarterly returns, chosen for your kind of customer." },
    { title: "Application filed", time: "1-2 days", sub: "Home address proof uploaded and Aadhaar authentication completed with you on the phone." },
    { title: "GSTIN issued", time: "Usually within a week", sub: "Low-risk applications are usually approved in a few working days. Some get a query or site visit." },
    { title: "Returns from month one", time: "Ongoing", sub: "Sales and bills on WhatsApp, returns filed before the due date, a reminder when tax is payable." },
  ],
  processNote: "Timelines are estimates. Officer queries and physical verification of the premises can add time.",

  mistakesSection: {
    title: "GST slip-ups we see with Pammal home businesses",
    lead: "Small businesses rarely set out to avoid GST. Most problems come from guessing the limit or registering without a plan for returns.",
  },
  mistakes: [
    { icon: "Calculator", title: "Using the ₹40 lakh limit for a service", problem: "A tutor assumes there's no GST until ₹40 lakh, but tuition is a service with a ₹20 lakh limit.", fix: "We work out which limit applies before the year's fees cross it." },
    { icon: "Truck", title: "One parcel to Bengaluru", problem: "A home baker or boutique ships a single order outside Tamil Nadu without a GSTIN.", fix: "We check where orders go before you accept out-of-state buyers." },
    { icon: "FileWarning", title: "Registered, then forgot returns", problem: "A GSTIN taken for a marketplace listing sits idle, and nil returns aren't filed.", fix: "We file every return, nil or not, so late fees and notices don't pile up." },
    { icon: "ReceiptText", title: "Charging GST under composition", problem: "A composition shop prints GST on its bills, which composition dealers can't collect.", fix: "We set up a bill of supply format with the composition wording." },
  ],

  costSection: {
    title: "GST consultant fees for Pammal businesses",
    lead: "GST registration itself has no government fee. What we charge depends on how often you file and how many bills there are each month.",
    cta: {
      title: "Get a quote for your business",
      sub: "Tell us your trade, roughly how many sales and purchase bills a month, and whether you're registered yet.",
      message: "Hi National Filings, can I get a quote for GST registration and returns for my Pammal business?",
    },
  },
  costs: [
    { icon: "Landmark", label: "No government fee", title: "GST registration", line: "Free on the GST portal. Our fee covers the turnover check, scheme choice and filing.", highlight: true },
    { icon: "CalendarClock", label: "Quoted upfront", title: "Quarterly or monthly returns", line: "QRMP and composition filers have fewer returns than monthly filers, which keeps the fee lower." },
    { icon: "FileText", label: "Quoted upfront", title: "Volume of bills", line: "A tutor with fifty fee receipts is simpler than a shop with hundreds of purchase bills." },
    { icon: "Mail", label: "Quoted separately", title: "Notices and corrections", line: "Replies to officer queries, amendments and catching up on missed returns." },
  ],

  compliance: {
    eyebrow: "Keeping it simple",
    title: "Voluntary registration, composition and quarterly filing",
    lead: "Small businesses in Pammal have more than one way to handle GST. These are the choices we walk through before you register.",
    items: [
      { icon: "BadgeCheck", label: "Below the limit", title: "Register voluntarily?", line: "It lets you claim GST on purchases and satisfies business buyers. But you then charge GST and file every return, so it rarely suits a tutor with only household clients." },
      { icon: "Percent", label: "Goods up to ₹1.5 crore", title: "Composition scheme", line: "Traders and manufacturers pay 1% of turnover, file CMP-08 every quarter and GSTR-4 once a year. No input credit, and no GST shown on bills.", highlight: true },
      { icon: "TriangleAlert", label: "Composition limits", title: "What composition rules out", line: "No sales of goods to other states, no services through marketplaces, and services capped at 10% of turnover or ₹5 lakh, whichever is higher. Service providers have a separate 6% option up to ₹50 lakh." },
      { icon: "CalendarCheck", label: "Up to ₹5 crore", title: "QRMP quarterly returns", line: "GSTR-1 by the 13th and GSTR-3B by the 22nd after each quarter, with tax paid by the 25th in the first two months." },
    ],
  },

  reasonsTitle: "Why Pammal businesses choose National Filings for GST",
  reasons: [
    { icon: "Scale", title: "Straight answers on the limit", line: "We'll tell you if you don't need GST yet, rather than register you early." },
    { icon: "Home", title: "Used to home addresses", line: "Consent letters and family-owned houses are routine for us." },
    { icon: "MapPinned", title: "Kundrathur office on your road", line: "Our office is a short ride away in Kundrathur, at the far end of Pammal Main Road." },
    { icon: "MessageCircle", title: "WhatsApp first", line: "Send bills and sales figures whenever suits you. We do the rest." },
    { icon: "CalendarCheck", title: "Every return on time", line: "Reminders before each due date, including nil returns." },
    { icon: "Award", title: "Experience since 2012", line: "Registration, GST and compliance work for Chennai businesses." },
  ],

  faqTitle: "GST in Pammal: your questions",
  faqs: [
    { q: "Do you have an office in Pammal?", a: "No. Our only office is in Karaima Nagar, Kundrathur, on SH 113A, the road that runs through Pammal as Pammal Main Road. Most Pammal clients send documents on WhatsApp and email, and you're welcome to visit Kundrathur Monday to Saturday, 9 am to 7 pm." },
    { q: "I take tuition at home. When do I need GST?", a: "Private tuition is a taxable service, so registration is needed once your total turnover in a financial year crosses ₹20 lakh. Turnover is counted for everything under your PAN, so other income from supplying goods or services counts too. Below that, you can stay unregistered and charge no GST." },
    { q: "I bake cakes at home. Is my limit ₹40 lakh?", a: "Yes, if you sell only goods and all your customers are in Tamil Nadu. If you also earn from a service, such as baking classes, the ₹20 lakh limit applies to your whole turnover. Sending even one order to another state needs registration whatever your turnover." },
    { q: "Should I register for GST voluntarily?", a: "Only if it helps you. It makes sense if your buyers are businesses that want to claim credit, or your purchases carry a lot of GST. For a tutor or tailor whose customers are families, it usually just adds tax to your fees and returns to file every quarter." },
    { q: "Can my small shop use the composition scheme?", a: "If you sell goods and turnover is up to ₹1.5 crore, usually yes. You pay 1% of turnover, can't claim credit on purchases, can't show GST on bills and can't sell goods to other states. Selling within Tamil Nadu through a marketplace has been allowed since October 2023." },
    { q: "Can I register for GST with my Pammal house as the address?", a: "Yes, if you run the business from there. You'll need an electricity bill or property tax receipt for the house, and a consent letter if it's owned by a family member, or a rent agreement if you're a tenant. An officer may sometimes visit to verify the address." },
    { q: "Can I file GST returns every quarter instead of every month?", a: "Yes, under the QRMP scheme, if your turnover is up to ₹5 crore. You file GSTR-1 and GSTR-3B once a quarter, but pay any tax due for the first two months by the 25th of the next month. Composition dealers file differently, with CMP-08 each quarter and GSTR-4 once a year." },
  ],

  related: nearbyAreas("P2-A3"),
  relatedTitle: "GST consultants in areas near Pammal",

  final: {
    title: "Get clear GST advice for your Pammal business",
    sub: "Tell us what you sell and roughly what you earn. We'll say whether you need GST, which scheme fits, and what we'd charge.",
    message: "Hi National Filings, I run a small business in Pammal and need help with GST.",
  },
  catalogue: ["GST registration for home businesses in Pammal", "Composition scheme filing in Pammal", "Quarterly GST return filing in Pammal"],
};
