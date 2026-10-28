import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { SERVICE, clusterHref, licenceHref, localityHref, pillarHref } from "./shared";

/**
 * P1-A4 · Company Registration in Anakaputhur (/chennai/company-registration-in-anakaputhur).
 * Primary keyword: "company registration in anakaputhur". We have no office in Anakaputhur; clients work with us online
 * or visit our Kundrathur office.
 * Angle: Anakaputhur's handloom and natural fibre weaving. Weavers, artisans, handloom and craft sellers, small garment
 * units and online sellers, with a structure guide for groups of weavers (proprietorship, partnership, LLP, producer company).
 *
 * Local facts checked (Oct 2026): Anakaputhur was a municipality and was merged into Tambaram City Municipal Corporation in
 * 2021; Chengalpattu district; a revenue village in the Pammal firka of Pallavaram taluk; PIN 600070; it lies next to
 * Pammal on the western side (en.wikipedia.org/wiki/Anakaputhur, en.wikipedia.org/wiki/Pallavaram_taluk). The town was
 * once known for weaving, including the "Madras Real Handkerchief" exported to Nigeria; looms have fallen from about
 * 5,000 to a few hundred or fewer (citizenmatters.in, Jan 2018; dtnext.in, Oct 2023; etvbharat.com, Aug 2025). Weavers
 * there make sarees and garments from natural fibres such as banana, pineapple, aloe vera, bamboo and lotus, much of the
 * work is done by women, and orders come through social media and online platforms, with exports to the US, Singapore,
 * Malaysia and Germany (dtnext.in, Oct 2023; etvbharat.com, Aug 2025). No GI tag for Anakaputhur found, so none is claimed.
 * Producer company rules checked against Companies Act, 2013 ss. 378A(j)(ii), 378B, 378C, 378D(1)(a), 378P(1)
 * (ca2013.com): handloom, handicraft and cottage industry produce counts as primary produce; ten or more individual
 * producers (or two or more producer institutions, or a mix) can form one; members' liability is limited; it is treated
 * as a private limited company and can never become a public company; with only individual members, one member one vote;
 * at least five directors. Timelines are estimates.
 */

const whatsapp = "Hi National Filings, I'm a weaver or craft seller in Anakaputhur and I'd like to register my business.";

export const anakaputhurPage: LicencePageData = {
  id: "P1-A4",
  service: SERVICE,
  meta: {
    title: "Company Registration in Anakaputhur | National Filings",
    description: "Company registration in Anakaputhur for weavers, artisans and handloom sellers. Firm, LLP or producer company, plus GST and a trademark for a brand.",
  },
  hero: {
    headline: { line1: "Company Registration", line2Before: "in Anakaputhur, ", accent: "Loom to Brand" },
    sub: "Anakaputhur's looms now turn banana and other plant fibres into sarees sold online and abroad. We help weavers, artisans and sellers pick the right structure and register it.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "Layers",
    kicker: "Anakaputhur, Chennai 600070",
    title: "Certificate of Incorporation",
    line: "Your Anakaputhur Business",
    stamp: "CIN issued",
    chips: ["Weavers and artisans", "Producer company or LLP", "Trademark for your label"],
    steps: ["Group", "Structure", "DSC", "MCA", "CIN"],
  },

  benefitsSection: {
    title: "What registration does for Anakaputhur's weavers and makers",
    lead: "A handloom saree sells on its story and its quality. Registration helps with everything around it: getting paid, selling online, shipping abroad and asking for support.",
    cta: {
      title: "Weaving alone or as a group?",
      sub: "Tell us how many weavers are involved and how you sell today. We'll suggest a structure that fits the way you actually work.",
      message: "Hi National Filings, we are a group of weavers in Anakaputhur. Which registration suits us?",
    },
  },
  benefits: [
    { icon: "ShoppingCart", title: "Sell on marketplaces", line: "Online platforms ask for business details, GST and a bank account before you list." },
    { icon: "Users", title: "One entity for many looms", line: "A group of weavers can buy yarn, take orders and get paid under one name." },
    { icon: "BadgeCheck", title: "A label buyers trust", line: "Boutiques and overseas buyers look for a registered maker behind the saree." },
    { icon: "Banknote", title: "Bank and scheme access", line: "Loans and support schemes usually need a registered applicant with its own account." },
    { icon: "Plane", title: "Ready to export", line: "IEC and export paperwork are filed in the name of a registered business." },
    { icon: "ShieldCheck", title: "Limited liability", line: "In an LLP or company, a bad order doesn't put a weaver's home at risk." },
    { icon: "Scale", title: "Fair shares on paper", line: "Who contributes what, and who gets what, is written down from the start." },
    { icon: "TrendingUp", title: "Grow past a single loom", line: "Add weavers, a stitching unit or a shop without starting over." },
  ],

  applicantsSection: {
    title: "Anakaputhur businesses we register",
    lead: "Weaving here has shrunk from thousands of looms to a few hundred or fewer, but the craft and the trade around it are still alive.",
  },
  applicants: [
    { icon: "Layers", title: "Handloom weavers", line: "Individual weavers and families running looms at home." },
    { icon: "Users", title: "Weaver groups and women's collectives", line: "Groups that share work, orders and income." },
    { icon: "Leaf", title: "Natural fibre makers", line: "Units working with banana, pineapple, aloe vera and similar fibres." },
    { icon: "HeartHandshake", title: "Craft artisans", line: "Makers of bags, jewellery and small items from natural fibre." },
    { icon: "PenLine", title: "Small garment units", line: "Stitching shirts, kurtas and blouses from handwoven cloth." },
    { icon: "Store", title: "Handloom and saree sellers", line: "Shops and resellers who buy from local weavers." },
    { icon: "ShoppingBag", title: "Online sellers", line: "Selling through Instagram, WhatsApp and marketplaces." },
    { icon: "Ship", title: "Exporters of handloom", line: "Weavers and traders shipping orders to buyers abroad." },
  ],

  opportunities: {
    eyebrow: "Local sectors",
    title: "The craft economy around Anakaputhur's looms",
    intro: "Anakaputhur once wove handkerchiefs for export to Nigeria. Today its weavers are better known for sarees and clothes made from plant fibres, and many orders arrive through social media.",
    // Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "Layers", title: "Handloom weaving", image: "https://images.unsplash.com/photo-1638722661753-9b3ab8b4252b?auto=format&fit=crop&w=1600&q=90", alt: "Weaver working at a wooden handloom under a hanging bulb", credit: "Kishore V / Unsplash" },
      { icon: "Leaf", title: "Yarn and fibre preparation", image: "https://images.unsplash.com/photo-1739185127141-bb4aa70ad22a?auto=format&fit=crop&w=1600&q=90", alt: "Women spinning yarn beside a large wooden spinning wheel", credit: "Aman Chaturvedi / Unsplash" },
      { icon: "ShoppingBag", title: "Handwoven sarees", image: "https://images.unsplash.com/photo-1616986491129-3e37cb654c82?auto=format&fit=crop&w=1600&q=90", alt: "Close view of a red and green handwoven saree with a patterned border", credit: "soumya parthasarathy / Unsplash" },
      { icon: "PenLine", title: "Garment units", image: "https://images.unsplash.com/photo-1791962831671-c869576205f0?auto=format&fit=crop&w=1600&q=90", alt: "Tailor cutting fabric on a wooden table in a workshop", credit: "atelierbyvineeth / Unsplash" },
    ],
  },

  highlights: {
    eyebrow: "Structures for weaver groups",
    title: "Proprietorship, partnership, LLP or producer company?",
    lead: "Weavers rarely work completely alone. The right structure depends on how many of you there are and how you want to share decisions and income.",
    items: [
      { icon: "UserRound", label: "One weaver or family", title: "Proprietorship", line: "Quick to set up with a bank account and GST. The owner carries every risk personally, so it suits a single loom or a small family unit." },
      { icon: "Handshake", label: "Two to a few makers", title: "Partnership or LLP", line: "A partnership deed is simple. An LLP adds limited liability and its own legal identity, which helps when orders and suppliers grow." },
      { icon: "Users", label: "Ten or more weavers", title: "Producer company", line: "The Companies Act lets ten or more individual producers, including handloom and handicraft makers, form one to pool, process and sell their produce. Liability is limited.", highlight: true },
      { icon: "Scale", label: "How a producer company runs", title: "One member, one vote", line: "When all members are individuals, each gets one vote whatever their shareholding. It needs at least five directors and can never become a public company." },
    ],
  },

  documentsSection: {
    title: "Documents for company registration in Anakaputhur",
    lead: "Send photos on WhatsApp or bring them to our Kundrathur office. For a group, it helps to collect everyone's papers in one go.",
  },
  documents: [
    { icon: "UserRound", title: "For each member or director", items: ["PAN card", "Aadhaar, passport or voter ID", "Bank statement or utility bill, under two months old", "Passport-size photo", "Mobile number and email ID"], hint: "Every director or designated partner needs a DSC, so each person's mobile must be linked to Aadhaar." },
    { icon: "Home", title: "For the workshop or office address", items: ["Latest electricity bill for the premises", "No objection letter from the owner", "Rent agreement, if rented"], hint: "A weaver's home can be the registered address if the owner signs the NOC." },
    { icon: "Users", title: "For a group of weavers", items: ["List of members and what each makes", "Share or contribution of each member", "Who will be directors or designated partners", "Proposed name and label"], hint: "For a producer company, each member must be a producer, such as a weaver or artisan." },
  ],
  documentsNote: {
    title: "Collecting papers from many weavers?",
    sub: "We send one simple checklist per person and track who has sent what, so the group isn't held up by one missing PAN.",
    message: "Hi National Filings, we are registering a weavers' group in Anakaputhur. Can you send a checklist for each member?",
  },

  processSection: {
    title: "How we register an Anakaputhur weaving or craft business",
    lead: "A single maker's company or LLP usually takes two to three weeks from complete papers. A producer company takes longer, because more members and directors have to be lined up first.",
    cta: {
      title: "Plan it with us first",
      sub: "Tell us how many people, how you sell and whether you export. We'll recommend a structure and send a written quote.",
      message: "Hi National Filings, I'd like to register my handloom business in Anakaputhur. Where do we start?",
    },
  },
  steps: [
    { title: "Agree the structure", time: "Day 1", sub: "We compare the options for your group size, sales and plans." },
    { title: "Collect papers", time: "Depends on group size", sub: "IDs and photos from each person, and address proof for the premises." },
    { title: "Digital signatures", time: "1-2 days per batch", sub: "DSCs for directors or designated partners, verified online." },
    { title: "Name and filing", time: "About 1 week", sub: "Name reserved, then the incorporation forms with the MCA." },
    { title: "Certificate and set-up", time: "On approval", sub: "Certificate with PAN and TAN, then the bank account, GST and Udyam." },
  ],
  processNote: "Timelines are estimates. MCA workload, name objections and the number of members can add time.",

  mistakesSection: {
    title: "Mistakes that hold back weaving businesses",
    lead: "Most of these come from registering in a hurry for one big order or one marketplace listing.",
  },
  mistakes: [
    { icon: "Users", title: "One person registers for the whole group", problem: "A proprietorship is opened in one weaver's name and the others have no legal share.", fix: "We set up a partnership, LLP or producer company so each member's stake is recorded." },
    { icon: "ShieldAlert", title: "Label used without a trademark", problem: "A saree label builds a following online, then someone else files the same name.", fix: "We run a trademark search and file the application early." },
    { icon: "Globe", title: "Exporting in the wrong name", problem: "IEC is taken by an individual, then the group forms a company and must apply again.", fix: "We register the entity first, then file IEC and GST in its name." },
    { icon: "ListTree", title: "Objects that leave out stitching", problem: "The documents cover weaving only, and later the group starts making shirts and bags.", fix: "We draft objects covering weaving, garments, crafts and selling online." },
  ],

  costSection: {
    title: "Company registration fees for Anakaputhur businesses",
    lead: "Cost depends mainly on the structure and the number of people who need digital signatures. A producer company with five directors costs more than a two-partner LLP.",
    cta: {
      title: "Get a quote for your group",
      sub: "Tell us the structure, number of members and directors, and whether you need IEC or a trademark.",
      message: "Hi National Filings, can I get a quote to register our weaving business in Anakaputhur?",
    },
  },
  costs: [
    { icon: "Signature", label: "Per person", title: "Digital signatures", line: "One DSC for each director, designated partner or subscriber." },
    { icon: "Landmark", label: "Depends on structure", title: "Government fees", line: "No MCA filing fee for a company with authorised capital up to ₹15 lakh. LLP fees depend on contribution.", highlight: true },
    { icon: "ShieldCheck", label: "Optional", title: "Trademark filing", line: "Government fee for the brand application, quoted separately." },
    { icon: "Headset", label: "Quoted upfront", title: "Our professional fee", line: "Advice, drafting, filing and query replies for the whole group." },
  ],

  compliance: {
    eyebrow: "After registration",
    title: "What Anakaputhur makers usually need next",
    lead: "Once the business is registered, these are the steps that help a handloom label sell further.",
    items: [
      { icon: "ReceiptIndianRupee", label: "For online selling", title: "GST registration", line: "Most marketplaces ask for a GSTIN, and GST has its own rules for e-commerce sellers." },
      { icon: "ShieldCheck", label: "Protect the label", title: "Trademark", line: "Register the brand name and logo on your tags before it becomes known." },
      { icon: "Factory", label: "For MSMEs", title: "Udyam registration", line: "Free registration that helps with bank credit and government schemes." },
      { icon: "Globe", label: "For exporters", title: "IEC", line: "Needed to ship orders abroad, in the name of the registered entity." },
    ],
  },

  reasonsTitle: "Why Anakaputhur makers choose National Filings",
  reasons: [
    { icon: "Users", title: "Comfortable with groups", line: "We handle many members' papers and DSCs without confusion." },
    { icon: "Scale", title: "Honest structure advice", line: "We'll say when a simple firm is enough and a producer company isn't." },
    { icon: "ShieldCheck", title: "Brand and registration together", line: "Entity name and trademark checked side by side." },
    { icon: "MessageCircle", title: "WhatsApp first", line: "Send papers and get updates without leaving the loom." },
    { icon: "MapPinned", title: "Kundrathur office nearby", line: "Visit our office in Karaima Nagar whenever you'd like to meet." },
    { icon: "Award", title: "Experience since 2012", line: "Registration, tax and compliance work for Chennai businesses." },
  ],

  faqTitle: "Company registration in Anakaputhur: your questions",
  faqs: [
    { q: "Do you have an office in Anakaputhur?", a: "No. Our only office is in Karaima Nagar, Kundrathur. Most clients from Anakaputhur send documents and sign everything online, and you can visit Kundrathur if you'd like to sit down with us." },
    { q: "Can a group of weavers register a producer company?", a: "Yes, if there are at least ten of you and each is a producer. The Companies Act treats the produce of handloom, handicraft and cottage industries as primary produce, so weavers and artisans qualify. Two or more producer institutions can also form one." },
    { q: "How is a producer company different from a private limited company?", a: "Its business must relate to its members' produce, such as buying materials, processing, marketing and selling. When all members are individuals, voting is one member, one vote, whatever the shareholding. It needs at least five directors and can never become a public company." },
    { q: "We are only three weavers. Which structure suits us?", a: "A partnership is the quickest start. An LLP costs a little more but limits each partner's liability and gives the business its own identity for bank accounts and buyers. A producer company needs at least ten members, so it isn't an option yet." },
    { q: "Do I need GST to sell my sarees online?", a: "Usually, yes. Marketplaces generally ask for a GSTIN, and GST law has specific registration rules for people selling goods through e-commerce platforms. There are some exemptions for small sellers, so we'll check the current position for your turnover and states." },
    { q: "Should I trademark my handloom brand?", a: "If you sell under a name or logo, yes. Company registration only protects the name on the MCA register. A trademark protects the label you put on tags, packaging and online listings. We search for conflicts before filing." },
    { q: "How long does it take to register a weaving business in Anakaputhur?", a: "A company or LLP usually takes two to three weeks from complete documents. A producer company takes longer because every member's papers and five directors' signatures must be ready, and the law gives the Registrar up to thirty days to decide once documents are filed." },
  ],

  related: [
    { icon: "Building2", label: "Company registration in Chennai", href: pillarHref("P1") },
    { icon: "MapPinned", label: "Company registration in Pammal", href: localityHref("P1-A3") },
    { icon: "MapPinned", label: "Company registration in Kundrathur", href: localityHref("P1-A1") },
    { icon: "Handshake", label: "LLP registration", href: clusterHref("P1-C1") },
    { icon: "Users", label: "Partnership firm registration", href: clusterHref("P1-C3") },
    { icon: "ShieldCheck", label: "Trademark registration", href: pillarHref("P5") },
    { icon: "ReceiptIndianRupee", label: "GST registration", href: clusterHref("P2-C1") },
    { icon: "Globe", label: "IEC registration", href: licenceHref("L5") },
  ],
  relatedTitle: "Related registration services near Anakaputhur",

  final: {
    title: "Register your Anakaputhur weaving or craft business",
    sub: "Tell us who is involved and how you sell. We'll confirm the structure, documents and fees before we start.",
    message: "Hi National Filings, I'd like to register my business in Anakaputhur.",
  },
  catalogue: ["Producer company registration for Anakaputhur weavers", "LLP and partnership registration in Anakaputhur", "Trademark and GST for Anakaputhur handloom brands"],
};
