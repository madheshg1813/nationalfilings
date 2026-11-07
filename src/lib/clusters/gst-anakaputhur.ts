import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { GST_SERVICE, nearbyAreas } from "./shared";

/**
 * P2-A4 · GST Consultant in Anakaputhur (/chennai/gst-consultant-in-anakaputhur).
 * Primary keyword: "gst consultant in anakaputhur". We have no office in Anakaputhur; clients work with us over WhatsApp
 * and email, or visit our Kundrathur office.
 * Angle: handloom weavers, natural fibre textiles and craft sellers. GST rates on fabric, sarees and garments after the
 * September 2025 changes, selling on e-commerce marketplaces (registration, the small-seller relief, TCS and claiming it),
 * job work by weavers, and HSN codes on invoices.
 *
 * Local facts (reused from the verified P1-A4 Anakaputhur page): part of Tambaram City Municipal Corporation since 2021,
 * Chengalpattu district, PIN 600070, next to Pammal; once a large weaving centre (Madras handkerchiefs for Nigeria), looms
 * now down to a few hundred or fewer; weavers make sarees and garments from banana, aloe vera, bamboo and other plant
 * fibres; orders come through social media and online platforms.
 *
 * Facts checked (Nov 2026):
 * - Rates from 22 Sep 2025 (GST Council 56th meeting; Notification 9/2025-CT(R)): apparel and made-ups 5% up to ₹2,500
 *   sale value per piece (earlier ₹1,000), 18% above, on the whole value (PIB textiles factsheet; taxguru.in Lok Sabha
 *   reply; taxo.online summary of CBIC notifications). Fabrics stay at 5%. Handloom and handicraft items cut from 12% to
 *   5% for several listed items (PIB). Unstitched sarees are classified as fabric, so the per-piece garment slab does not
 *   apply (CBEC clarification on embroidered sarees, 2017, via taxtmi.com; efiletax.in; taxgarden.in). A stitched or
 *   ready-to-wear saree follows the garment rule.
 * - Job work on textiles and textile products: 5% on the job charges (SAC 9988; EY alert Sep 2025; taxgarden.in).
 *   Section 143: inputs sent for job work under challan without tax, to come back within one year (capital goods three
 *   years), else treated as a supply from the day sent. ITC-04: yearly for turnover up to ₹5 crore, half-yearly above,
 *   from 1 Oct 2021. A job worker is a service supplier, so the ₹20 lakh services limit applies.
 * - E-commerce: s. 24(ix) registration for sellers through operators who collect TCS; exemption for goods sellers below
 *   the limit who sell only within one state, make no inter-state supply, hold a PAN and get an enrolment number on the
 *   portal, from 1 Oct 2023 (Notification 34/2023-CT and 37/2023-CT, gstcouncil.gov.in). TCS under s. 52 cut from 1% to
 *   0.5% of net taxable supplies from 10 Jul 2024 (Notification 15/2024-CT, taxmann.com); operator reports it in GSTR-8;
 *   seller accepts it on the portal and it is credited to the electronic cash ledger (s. 52(7), cleartax.in).
 *   Composition dealers may sell goods within the state through marketplaces from 1 Oct 2023 (Finance Act 2023).
 * - HSN on invoices (Notification 78/2020-CT, from 1 Apr 2021): at least 4 digits for turnover up to ₹5 crore (B2B
 *   invoices), 6 digits above ₹5 crore; HSN summary in GSTR-1 Table 12 is mandatory. Cotton, silk and other vegetable
 *   fibre fabrics sit in different chapters and headings (Customs Tariff chapters 50 to 55; garments chapters 61 and 62).
 * - Registration limit: ₹40 lakh goods only, ₹20 lakh with services (as on the P2-C1 page); no government fee.
 * Timelines are estimates.
 */

const whatsapp = "Hi National Filings, I weave or sell handloom in Anakaputhur and I'd like help with GST.";

export const gstAnakaputhurPage: LicencePageData = {
  id: "P2-A4",
  service: GST_SERVICE,
  meta: {
    title: "GST Consultant in Anakaputhur, Chennai | National Filings",
    description: "GST consultant in Anakaputhur for handloom weavers and craft sellers. Saree and garment rates, HSN codes, marketplace TCS and job work, sorted.",
  },
  hero: {
    headline: { line1: "GST Consultant", line2Before: "in Anakaputhur, ", accent: "Loom to Invoice" },
    sub: "A banana fibre saree, a stitched kurta and a woven basket can each carry a different GST rate and HSN code. We get those right for Anakaputhur weavers and sellers, then file the returns.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "Layers",
    kicker: "Anakaputhur, Chennai 600070",
    title: "GSTR-3B Filed",
    line: "Your Anakaputhur Business",
    stamp: "TCS credit claimed",
    chips: ["Fabric and garment rates", "HSN on every invoice", "Marketplace TCS matched"],
    steps: ["Products", "HSN", "Invoices", "TCS", "Filed"],
  },

  benefitsSection: {
    title: "Why Anakaputhur weavers and craft sellers need GST help",
    lead: "Handloom GST isn't hard, but it has traps. The rate can depend on whether the piece is cloth or a garment, on its price, and on how it reaches the buyer.",
    cta: {
      title: "Unsure what rate your sarees carry?",
      sub: "Send us a list of what you make, the fibre and your usual selling prices. We'll tell you the rate and HSN code for each.",
      message: "Hi National Filings, I make handloom sarees in Anakaputhur. Which GST rate and HSN code should I use?",
    },
  },
  benefits: [
    { icon: "Percent", title: "The right rate per product", line: "Fabric, sarees, stitched garments and crafts each checked against the current rates." },
    { icon: "ListTree", title: "HSN codes that match the fibre", line: "Cotton, silk and banana fibre cloth fall under different headings." },
    { icon: "ShoppingCart", title: "Marketplace rules explained", line: "When you must register, and when a small seller within Tamil Nadu can enrol instead." },
    { icon: "Coins", title: "TCS money not left behind", line: "The tax the marketplace keeps from each payout is claimed back to your ledger." },
    { icon: "Shuffle", title: "Job work handled correctly", line: "Weaving for a master weaver or trader is billed as a service, not a sale." },
    { icon: "ReceiptText", title: "Invoices buyers accept", line: "Boutiques and exporters want proper tax invoices with GSTIN and HSN." },
    { icon: "CalendarCheck", title: "Returns on time", line: "Monthly or quarterly returns filed, including the months with few orders." },
    { icon: "MessageCircle", title: "No time away from the loom", line: "Send order lists and marketplace reports on WhatsApp. We do the filing." },
  ],

  applicantsSection: {
    title: "Anakaputhur businesses we handle GST for",
    lead: "Weaving here has shrunk from thousands of looms to a few hundred, but sarees and plant fibre cloth still leave Anakaputhur every week, many of them sold online.",
  },
  applicants: [
    { icon: "Layers", title: "Handloom weavers", line: "Selling their own sarees and cloth, or weaving for someone else." },
    { icon: "Leaf", title: "Natural fibre cloth makers", line: "Banana, aloe vera, bamboo and similar fibres, often blended with cotton." },
    { icon: "Users", title: "Master weavers and traders", line: "Supplying yarn to weavers and selling the finished cloth." },
    { icon: "PenLine", title: "Small garment units", line: "Turning handwoven cloth into kurtas, shirts and blouses." },
    { icon: "HeartHandshake", title: "Craft makers", line: "Bags, baskets, mats and gifts from natural fibre." },
    { icon: "ShoppingBag", title: "Marketplace sellers", line: "Listing sarees and crafts on large e-commerce platforms." },
    { icon: "MessageCircle", title: "Social media sellers", line: "Taking orders on Instagram and WhatsApp and shipping across India." },
    { icon: "Ship", title: "Exporters of handloom", line: "Sending orders to buyers abroad, with GST refunds to consider." },
  ],

  opportunities: {
    eyebrow: "Local trades",
    title: "Anakaputhur's looms and the GST that follows them",
    intro: "From the yarn on the loom to the parcel that leaves for a marketplace buyer, each stage of Anakaputhur's handloom trade has its own GST question.",
    // Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "Layers", title: "Handloom weaving", image: "https://images.unsplash.com/photo-1640292343595-889db1c8262e?auto=format&fit=crop&w=1600&q=90", alt: "Weaver working black and white patterned cloth on a handloom", credit: "Akhil Pawar / Unsplash" },
      { icon: "Users", title: "Women at the loom", image: "https://images.unsplash.com/photo-1719154717733-d37860cdee24?auto=format&fit=crop&w=1600&q=90", alt: "Woman in an embroidered dress weaving white cloth on a wooden loom", credit: "Akshat Jhingran / Unsplash" },
      { icon: "ShoppingBag", title: "Sarees for sale", image: "https://images.unsplash.com/photo-1717585679395-bbe39b5fb6bc?auto=format&fit=crop&w=1600&q=90", alt: "Folded silk sarees in green, pink and red with tasselled ends", credit: "Jainica Dhingra / Unsplash" },
      { icon: "Leaf", title: "Natural fibre crafts", image: "https://images.unsplash.com/photo-1768902406144-a348c559c73c?auto=format&fit=crop&w=1600&q=90", alt: "Weathered hands finishing a woven cane basket", credit: "Minan Bhat / Unsplash" },
    ],
  },

  highlights: {
    eyebrow: "Rates since September 2025",
    title: "GST on handloom fabric, sarees and garments",
    lead: "GST rates on textiles were reworked from 22 September 2025. This is how they apply to what Anakaputhur's weavers usually make.",
    items: [
      { icon: "Layers", label: "Cloth by the metre", title: "Fabric at 5%", line: "Woven cotton, silk and plant fibre fabric is taxed at 5%, the same as before the change." },
      { icon: "ShoppingBag", label: "Unstitched sarees", title: "Treated as fabric", line: "A woven saree is classed as fabric, so it stays at 5% whatever its price. A pre-stitched saree is a garment.", highlight: true },
      { icon: "PenLine", label: "Stitched garments", title: "5% up to ₹2,500 a piece", line: "Kurtas, shirts and blouses sold for up to ₹2,500 a piece are at 5%. Above that, the whole piece is at 18%." },
      { icon: "Leaf", label: "Crafts", title: "Depends on the item", line: "Several handicraft items moved down to 5% in September 2025. Bags, baskets and mats each have their own code, so we check yours." },
    ],
  },

  documentsSection: {
    title: "What we need for GST work in Anakaputhur",
    lead: "Whether you're registering for the first time or handing over your returns, these are the papers that matter for a weaving or craft business.",
  },
  documents: [
    { icon: "UserRound", title: "To register", items: ["PAN card", "Aadhaar linked to your mobile", "Electricity bill or property tax receipt for the loom or shop", "Consent letter or rent agreement, if not your own", "Bank statement or cancelled cheque"], hint: "A weaver's home can be the place of business if the loom is there." },
    { icon: "ListTree", title: "About your products", items: ["List of what you make", "Fibre content of each, such as cotton, silk or banana", "Usual selling price per piece", "Whether pieces are stitched or unstitched"], hint: "Fibre and price decide the HSN code and the rate, so we ask early." },
    { icon: "ShoppingCart", title: "For marketplace sellers", items: ["Monthly sales and settlement reports from each platform", "Returns and cancellations", "Payout statements showing TCS deducted"], hint: "We match these with the TCS the platform reports, so your credit isn't missed." },
  ],
  documentsNote: {
    title: "Not sure of a product's fibre or code?",
    sub: "Send a photo of the piece and the yarn details. We'll suggest the HSN code and the rate before it goes on an invoice.",
    message: "Hi National Filings, can you help me find the HSN code for my banana fibre saree from Anakaputhur?",
  },

  processSection: {
    title: "How we handle GST for an Anakaputhur weaving business",
    lead: "Everything runs on WhatsApp and email, and you can visit our Kundrathur office if you'd like to meet. We start with your products, because the rates and codes flow from them.",
    cta: {
      title: "Hand over your GST to us",
      sub: "Tell us what you make, how you sell and whether you already have a GSTIN. We'll send a plan and a written quote.",
      message: "Hi National Filings, I sell handloom from Anakaputhur on a marketplace. Can you handle my GST?",
    },
  },
  steps: [
    { title: "Product review", time: "Day 1", sub: "We list what you make and fix the HSN code and rate for each item." },
    { title: "Registration or enrolment", time: "1-2 days", sub: "A GSTIN if you need one, or portal enrolment if the small seller relief fits." },
    { title: "Invoice set-up", time: "Same week", sub: "Invoice format with GSTIN, HSN and the right rate, for direct and marketplace sales." },
    { title: "Monthly data", time: "Each month", sub: "Sales, purchases, job work challans and platform reports collected on WhatsApp." },
    { title: "Returns and TCS", time: "By the due dates", sub: "Returns filed and marketplace TCS accepted into your cash ledger." },
  ],
  processNote: "Timelines are estimates. GST registration can take longer if the officer raises a query or visits the premises.",

  mistakesSection: {
    title: "GST mistakes we fix for handloom and craft sellers",
    lead: "Most of these happen because handloom pricing and online selling move faster than the paperwork.",
  },
  mistakes: [
    { icon: "Percent", title: "Saree taxed like a garment", problem: "An unstitched silk saree above ₹2,500 is billed at 18% as if it were clothing.", fix: "We class sarees as fabric at 5%, and keep the garment rate for stitched pieces." },
    { icon: "ListTree", title: "One HSN code for everything", problem: "Cotton sarees, banana fibre stoles and stitched kurtas all go out under a single code.", fix: "We map each product to its own heading, so invoices and GSTR-1 match." },
    { icon: "Coins", title: "TCS never claimed", problem: "The marketplace deducts TCS from every payout, but the seller never accepts it on the portal.", fix: "We accept it each month and use it against tax due." },
    { icon: "Shuffle", title: "Job work billed as a sale", problem: "A weaver returns cloth woven from a trader's yarn and bills the full value of the cloth.", fix: "Only the weaving charge is billed, under the job work service code." },
  ],

  costSection: {
    title: "GST consultant fees for Anakaputhur businesses",
    lead: "Registration has no government fee. Our fee depends on how many products, platforms and invoices you have each month.",
    cta: {
      title: "Get a quote for your GST",
      sub: "Tell us how many products you sell, which marketplaces you use, and roughly how many orders a month.",
      message: "Hi National Filings, can I get a quote for GST filing for my handloom business in Anakaputhur?",
    },
  },
  costs: [
    { icon: "Landmark", label: "No government fee", title: "GST registration", line: "Free on the GST portal. Our fee covers the product review, HSN codes and filing.", highlight: true },
    { icon: "ShoppingCart", label: "Quoted upfront", title: "Marketplace reconciliation", line: "Each platform's sales, returns and TCS matched every month." },
    { icon: "CalendarClock", label: "Quoted upfront", title: "Monthly or quarterly returns", line: "Quarterly filing under QRMP keeps the work and the fee lower for small sellers." },
    { icon: "Mail", label: "Quoted separately", title: "Notices and refunds", line: "Replies to officer queries and export refund claims, when needed." },
  ],

  compliance: {
    eyebrow: "Selling online and job work",
    title: "Marketplace and job work rules for Anakaputhur weavers",
    lead: "Most of Anakaputhur's handloom now reaches buyers online or passes through more than one pair of hands. These rules apply most often.",
    items: [
      { icon: "ShoppingCart", label: "Small sellers in Tamil Nadu", title: "Enrol instead of register", line: "Since October 2023, a goods seller below the limit can sell on a marketplace without a GSTIN if all sales stay within Tamil Nadu and they get an enrolment number on the portal." },
      { icon: "Coins", label: "On every payout", title: "Marketplace TCS", line: "Platforms keep 0.5% of the net taxable value of your sales as TCS. Once you accept it on the GST portal, it goes to your cash ledger to pay tax.", highlight: true },
      { icon: "Shuffle", label: "Weaving for others", title: "Job work by weavers", line: "Weaving someone else's yarn is a service taxed at 5% on the job charge. The weaver needs a GSTIN only above the ₹20 lakh services limit." },
      { icon: "ReceiptText", label: "Sending yarn out", title: "Challans and ITC-04", line: "Yarn goes to the weaver on a challan without tax and must come back within a year. Senders with turnover up to ₹5 crore file ITC-04 once a year." },
    ],
  },

  reasonsTitle: "Why Anakaputhur weavers choose National Filings for GST",
  reasons: [
    { icon: "Layers", title: "We know textile rates", line: "Fabric, saree and garment rates applied the way the 2025 changes intended." },
    { icon: "ShoppingCart", title: "Marketplace experience", line: "Settlement reports and TCS matched for each platform you sell on." },
    { icon: "ListTree", title: "HSN codes done once, properly", line: "A product list with codes you can reuse on every invoice." },
    { icon: "MessageCircle", title: "WhatsApp first", line: "Send reports and challans from home. No need to leave the loom." },
    { icon: "MapPinned", title: "Kundrathur office nearby", line: "Visit us in Karaima Nagar whenever you'd like to meet." },
    { icon: "Award", title: "Experience since 2012", line: "Registration, GST and compliance work for Chennai businesses." },
  ],

  faqTitle: "GST for Anakaputhur handloom and craft businesses: your questions",
  faqs: [
    { q: "Do you have an office in Anakaputhur?", a: "No. Our only office is in Karaima Nagar, Kundrathur. Most Anakaputhur clients work with us over WhatsApp and email, and you're welcome to visit Kundrathur Monday to Saturday, 9 am to 7 pm." },
    { q: "What is the GST rate on a handloom saree now?", a: "An unstitched woven saree is treated as fabric, which is taxed at 5%, whatever the price. The September 2025 change to garments, 5% up to ₹2,500 a piece and 18% above, applies to stitched clothing such as kurtas, blouses and pre-stitched sarees." },
    { q: "Do I need GST registration to sell on a marketplace?", a: "Not always. Since 1 October 2023, a seller of goods whose turnover is below the limit can sell through a marketplace without registering, if every sale is within Tamil Nadu and they get an enrolment number on the GST portal. Shipping to buyers in other states needs a full GSTIN." },
    { q: "The marketplace deducts TCS from my payments. Can I get it back?", a: "Yes. The platform collects 0.5% of the net taxable value of your sales and reports it every month. Once you accept the amount on the GST portal, it is credited to your electronic cash ledger, where you can use it to pay your GST." },
    { q: "I weave cloth from a trader's yarn. What GST applies?", a: "That is job work, a service. You bill only your weaving charge, at 5% for textile job work, not the value of the cloth. You need registration only if your total turnover crosses the ₹20 lakh services limit. The trader sends the yarn on a challan and must get the cloth back within a year." },
    { q: "How many HSN digits do I need on my invoices?", a: "If your turnover in the previous year was up to ₹5 crore, at least four digits on invoices to business buyers. Above ₹5 crore, six digits on all invoices. Your GSTR-1 also carries an HSN-wise summary, so the codes on invoices need to be consistent." },
    { q: "Are banana fibre and cotton sarees under the same HSN code?", a: "No. The code depends on the fibre. Cotton, silk and other plant fibre fabrics fall under different headings, and blends follow the fibre that weighs most. Send us the yarn details and we'll fix the code before you invoice." },
  ],

  related: nearbyAreas("P2-A4"),
  relatedTitle: "GST consultants in areas near Anakaputhur",

  final: {
    title: "Get your Anakaputhur handloom GST right",
    sub: "Tell us what you weave, how you sell and where your buyers are. We'll confirm the rates, codes and our fee before we start.",
    message: "Hi National Filings, I'm a weaver in Anakaputhur and I need help with GST.",
  },
  catalogue: ["GST registration for Anakaputhur handloom weavers", "Marketplace GST and TCS filing in Anakaputhur", "HSN code and invoice set-up for Anakaputhur textiles"],
};
