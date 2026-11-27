import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { NGO_SERVICE, nearbyAreas } from "./shared";

/**
 * P4-A11 · NGO Registration in Iyyappanthangal (/chennai/ngo-registration-in-iyyappanthangal).
 * Primary keyword: "ngo registration in iyyappanthangal". We have no office here; clients work with us over WhatsApp
 * and email or visit our Kundrathur office.
 * Angle: traders' associations and food charities along Mount Poonamallee Road. Merchants' associations (vanigar sangams)
 * register as societies: they serve members, so they are not charities and get no 80G. Community kitchens and food banks
 * run by restaurant and hotel owners suit a public charitable trust with 12A/80G (now sections 332 and 354). The page
 * explains keeping the two bodies separate: funds, bank accounts, books and donor receipts.
 *
 * Local facts (reused from the verified P1-A11 JSDoc): Iyyappanthangal lies in Kundrathur taluk, Kancheepuram district;
 * PIN 600056; it sits on Mount Poonamallee Road with a bus terminus; the Iyyappanthangal metro station on the Poonamallee to
 * Vadapalani stretch of Phase 2 opened on 11 October 2026.
 *
 * Facts checked (Nov 2026):
 * - Societies: Tamil Nadu Societies Registration Act, 1975, registration with the District Registrar through TNREGINET.
 *   Section 3(1) lists the objects a society may be registered for (including charitable purposes, public health and
 *   "such other useful object" as may be prescribed); section 3(2) excludes associations of fewer than seven persons,
 *   associations for improving the economic condition of workmen, and clubs running games of chance with prizes.
 *   (casemine.com/act/in/5a9cce284a932653478132b1; prsindia.org/files/bills_acts/acts_states/tamil-nadu/1975/1975TN27.pdf)
 * - Trusts: Tamil Nadu has no public trusts act; a charitable trust is created by a trust deed registered with the
 *   Sub-Registrar (as verified on P4-C1, trust.ts). Stamp duty depends on corpus and property, so no amount is quoted.
 * - Income-tax Act, 2025 from 1 April 2026: registration of non-profits (formerly 12A/12AB) is section 332; donor approval
 *   (formerly 80G) is section 354. Form 104 is the common application for provisional registration under section 332(3)
 *   and provisional approval under section 354(2), for entities that have not started activities; the order (Form 106,
 *   with a 16-digit URN) is generated about 7 days after filing; provisional status lasts up to three tax years or six
 *   months from the start of activities, whichever is earlier; Form 105 is the regular application.
 *   (incometaxindia.gov.in/documents/d/guest/form-104-faqs; incometaxindia.gov.in/documents/d/guest/form-106-faqs;
 *   incometax.gov.in/iec/foportal/newformpage/forms/form104%26106-faqs) Regular validity periods differ between sources,
 *   so none is quoted.
 * - Food donation: Food Safety and Standards (Recovery and Distribution of Surplus Food) Regulations, 2019; surplus food
 *   distribution organisations must register with FSSAI and follow the hygiene rules of the Licensing and Registration
 *   Regulations, 2011; compliance from 1 January 2021.
 *   (fssai.gov.in/upload/uploadfiles/files/Press_Release_Gazette_Notification_Surplus_Food_06_08_2019.pdf;
 *   fssai.gov.in/upload/media/FSSAI_News_Compliance_FNB_06_07_2020.pdf; foodsafetyhelpline.com)
 * - Temples come under the HR&CE Department in Tamil Nadu; the page tells annadhanam groups not to present the trust as
 *   running a temple.
 * - No fee figures. Timelines are estimates.
 */

const whatsapp = "Hi National Filings, I'm in Iyyappanthangal. Our traders want to start an association and a free food kitchen. Can you help?";

export const ngoIyyappanthangalPage: LicencePageData = {
  id: "P4-A11",
  service: NGO_SERVICE,
  meta: {
    title: "NGO Registration in Iyyappanthangal | National Filings",
    description: "NGO registration in Iyyappanthangal for traders' associations and food charities. Society for the sangam, trust with 12A and 80G for the kitchen.",
  },
  hero: {
    headline: { line1: "NGO Registration", line2Before: "", accent: "in Iyyappanthangal" },
    sub: "We register NGOs in Iyyappanthangal and take them through 12A, 80G, NGO Darpan and CSR-1, so donors and funders can support you with confidence.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "UtensilsCrossed",
    kicker: "Iyyappanthangal, Chennai 600056",
    title: "Trust Deed Registered",
    line: "Your Iyyappanthangal NGO",
    stamp: "80G approved",
    chips: ["Society for traders", "Trust for the kitchen", "Separate bank accounts"],
    steps: ["Purpose", "Deed", "Register", "PAN", "12A"],
  },

  benefitsSection: {
    title: "Why Iyyappanthangal traders register their association and their charity",
    lead: "A sangam that collects monthly dues and a kitchen that feeds people both handle money that isn't one person's. Registration puts a name, a bank account and rules around that money.",
    cta: {
      title: "Running both from one shop counter today?",
      sub: "Tell us how the association and the food work are run now. We'll show you how to split them into two bodies.",
      message: "Hi National Filings, our traders' association in Iyyappanthangal also runs free meals. Should these be two separate bodies?",
    },
  },
  benefits: [
    { icon: "Store", title: "A sangam with legal standing", line: "A registered association can open a bank account, sign letters and write to the authorities in its own name." },
    { icon: "Soup", title: "A kitchen donors trust", line: "A registered trust gives receipts with its own PAN, so regular givers know where their money went." },
    { icon: "Percent", title: "80G for the food work", line: "Once approved, people who fund the meals by bank or UPI can claim a tax deduction." },
    { icon: "Scale", title: "Members' money kept apart", line: "Dues paid by shop owners stay with the association and are not mixed with charity funds." },
    { icon: "Users", title: "Office-bearers on record", line: "President, secretary and treasurer elected under written bylaws, not by habit." },
    { icon: "ShieldCheck", title: "Food safety covered", line: "We point out where the kitchen or food bank also needs FSSAI registration." },
    { icon: "MessageCircle", title: "Handled over WhatsApp", line: "Drafts, member lists and signatures collected without closing the shop for a day." },
    { icon: "FileText", title: "Books that pass scrutiny", line: "Separate accounts make the trust's 12A and 80G applications much easier to defend." },
  ],

  applicantsSection: {
    title: "Groups in Iyyappanthangal we register",
    lead: "Most of our work here starts with a few shop owners who already meet every month. These are the bodies they usually ask about.",
  },
  applicants: [
    { icon: "Store", title: "Merchants' associations", line: "Shop owners on one stretch of the main road who want a single voice." },
    { icon: "ShoppingBag", title: "Trade-wise sangams", line: "Mobile shops, hardware dealers or textile sellers forming their own association." },
    { icon: "UtensilsCrossed", title: "Hotel owners' groups", line: "Restaurant and mess owners who cook extra for a daily free meal." },
    { icon: "Package", title: "Food banks", line: "Volunteers collecting rice, dal and provisions for families in need." },
    { icon: "ChefHat", title: "Surplus food networks", line: "Groups picking up unsold food from hotels and caterers each night." },
    { icon: "HeartHandshake", title: "Annadhanam groups", line: "Devotees serving food on festival days, run as a trust of their own." },
    { icon: "Home", title: "Residents' welfare bodies", line: "Associations for the apartments and layouts coming up near the metro." },
    { icon: "UserRound", title: "Family charities", line: "A shop owner setting aside part of the profit for meals or school fees." },
  ],

  opportunities: {
    eyebrow: "Trade and service",
    title: "Where Iyyappanthangal's associations and food charities start",
    intro: "The same people show up in both: the shop owner who sits on the sangam committee and the hotel owner who sends rice to the night kitchen.",
    // Pexels licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "Store", title: "Grain and provision traders", image: "https://images.pexels.com/photos/12948471/pexels-photo-12948471.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Family of grain traders sitting among sacks and heaps of rice and seeds in their shop", credit: "Gaurav Gupta / Pexels" },
      { icon: "ShoppingBag", title: "Roadside shops and vendors", image: "https://images.pexels.com/photos/23884776/pexels-photo-23884776.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Elderly vendor sitting by a basket of bananas outside a row of small shops", credit: "Robert Stokoe / Pexels" },
      { icon: "ChefHat", title: "Community kitchens", image: "https://images.pexels.com/photos/26244112/pexels-photo-26244112.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Cook stirring a row of large metal pots over a wood fire in an outdoor kitchen", credit: "Amjed Wani / Pexels" },
      { icon: "Soup", title: "Free meals", image: "https://images.pexels.com/photos/11091383/pexels-photo-11091383.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Elderly woman in a shawl and face mask waiting as a volunteer serves from a tray of cups", credit: "Rupinder Singh / Pexels" },
    ],
  },

  highlights: {
    eyebrow: "Two bodies, two purposes",
    title: "Traders' association or food charity: which form fits",
    lead: "The question is who the body serves. An association serves its members. A charity serves the public. The law treats them differently, and so does the tax department.",
    items: [
      { icon: "Users", label: "For the traders' association", title: "A society under the 1975 Act", line: "Registered with the District Registrar, with at least seven members, a memorandum and bylaws. Members elect the committee.", highlight: true },
      { icon: "TriangleAlert", label: "No 80G for the sangam", title: "Members' benefit isn't charity", line: "A body that works for its own members usually can't get charity registration or donor approval. Its dues are not donations." },
      { icon: "ScrollText", label: "For the community kitchen", title: "A public charitable trust", line: "A trust deed registered with the Sub-Registrar, with trustees you choose. Feeding people in need is a charitable object." },
      { icon: "BadgeCheck", label: "Sections 332 and 354", title: "Formerly 12A and 80G", line: "The trust applies for registration and donor approval under the Income-tax Act, 2025, starting with Form 104 for provisional status." },
    ],
  },

  documentsSection: {
    title: "Papers for an Iyyappanthangal association or food trust",
    lead: "Send these on WhatsApp or email. If you are setting up both bodies, we prepare the two files side by side.",
  },
  documents: [
    { icon: "Users", title: "For the traders' society", items: ["Names, addresses and occupations of at least seven members", "PAN and Aadhaar of the office-bearers", "Proof of the meeting place, such as a rent agreement or owner's letter", "Minutes of the meeting that decided to register"], hint: "We draft the memorandum and bylaws from how your sangam already works, including dues and elections." },
    { icon: "ScrollText", title: "For the food trust", items: ["PAN, Aadhaar and photos of the settlor and each trustee", "Address of the kitchen or registered office, with proof", "The starting corpus amount", "Two witnesses for the deed"], hint: "Keep at least one trustee who is not on the association's committee. It makes the separation easier to show." },
    { icon: "Soup", title: "For the food work itself", items: ["Where the food is cooked or stored", "Which hotels or caterers give surplus food", "How meals or ration kits reach people", "FSSAI registration, if the kitchen already has one"], hint: "A food bank that collects and gives out surplus food generally needs FSSAI registration too. We tell you which kind." },
  ],
  documentsNote: {
    title: "Only have a list of members and a rough plan?",
    sub: "That's enough to begin. We'll ask the rest over WhatsApp and send drafts for your committee to read.",
    message: "Hi National Filings, we have a members' list for our Iyyappanthangal traders' association. What else do you need?",
  },

  processSection: {
    title: "How we set up an association and a food trust for Iyyappanthangal traders",
    lead: "Most of it runs on WhatsApp and email. Signatures and the deed registration need people in person, and we plan those around shop hours.",
    cta: {
      title: "Want to meet before you start?",
      sub: "Come to our Kundrathur office with two or three committee members, or we can talk on a call after closing time.",
      message: "Hi National Filings, can our Iyyappanthangal association committee meet you about registering a society and a trust?",
    },
  },
  steps: [
    { title: "Sort the purposes", time: "First call", sub: "We list what belongs to the members' association and what belongs to the charity." },
    { title: "Draft both documents", time: "3-5 days", sub: "Bylaws for the society and a trust deed for the kitchen, each with its own objects and office-bearers." },
    { title: "Register the society", time: "Depends on the Registrar", sub: "Application to the District Registrar with the memorandum, bylaws and member details." },
    { title: "Register the trust deed", time: "Day of registration", sub: "Trustees, settlor and witnesses sign before the Sub-Registrar. Then PAN and a bank account for each body." },
    { title: "Apply for 12A and 80G", time: "After PAN", sub: "Form 104 for the trust's provisional registration and donor approval under sections 332 and 354." },
  ],
  processNote: "Timelines are estimates and start from complete documents and signatures. The Registrar's and the tax department's processing time is outside our control.",

  mistakesSection: {
    title: "Mistakes we see when Iyyappanthangal traders mix the sangam and the charity",
    lead: "These usually come from good intentions and one shared cash box. They cause trouble when the tax department or a donor asks questions.",
  },
  mistakes: [
    { icon: "Coins", title: "One account for dues and donations", problem: "Monthly dues from shops and money for free meals go into the same account, so nobody can show what was spent on charity.", fix: "We open separate accounts for the society and the trust from day one, with a simple ledger for each." },
    { icon: "Percent", title: "Promising 80G on association dues", problem: "The association tells members their dues are tax deductible, though the body is not a charity.", fix: "We explain that only gifts to the approved trust qualify, and only when paid by bank, card or UPI." },
    { icon: "ScrollText", title: "A trust deed full of trade objects", problem: "The kitchen's deed also lists 'protecting traders' interests', which weakens its claim to be a public charity.", fix: "We keep the trust's objects purely charitable and put member work in the society's bylaws." },
    { icon: "Soup", title: "Running a food bank without FSSAI", problem: "Volunteers collect surplus food from hotels each night with no food safety registration or hygiene routine.", fix: "We add the FSSAI registration to the plan and help you write down how food is collected, stored and served." },
  ],

  costSection: {
    title: "What registering an Iyyappanthangal association or food trust costs",
    lead: "There are government fees and stamp duty on one side, and our professional fee on the other. We quote ours in writing once we know whether you need one body or two.",
    cta: {
      title: "Get a quote for one or both bodies",
      sub: "Tell us whether it's the association, the trust or both. We'll reply with the fee and the government charges to expect.",
      message: "Hi National Filings, please send a quote for registering a society and a trust in Iyyappanthangal.",
    },
  },
  costs: [
    { icon: "Users", label: "Government fee as per Tamil Nadu rates", title: "Society registration", line: "Our part covers bylaws, member records and the application to the District Registrar." },
    { icon: "Stamp", label: "Stamp duty as per Tamil Nadu rates", title: "Trust deed registration", line: "Duty depends on the corpus and any property settled. Our part covers drafting and the registration day.", highlight: true },
    { icon: "BadgeCheck", label: "No government fee", title: "12A and 80G for the trust", line: "We prepare and file Form 104, and later the regular application." },
    { icon: "ShieldCheck", label: "Quoted separately", title: "FSSAI for the kitchen or food bank", line: "Depends on what the body does with food and which registration applies." },
  ],

  compliance: {
    eyebrow: "After registration",
    title: "What each Iyyappanthangal body files every year",
    lead: "The society and the trust have different calendars. Keeping them apart on paper is what lets each pass its own checks.",
    items: [
      { icon: "Users", label: "Every year", title: "Society returns to the Registrar", line: "Accounts, the members' list and changes in office-bearers filed with the District Registrar." },
      { icon: "Calculator", label: "Every year", title: "Trust accounts and audit", line: "Income and spending on meals kept in books, with an audit where the tax law requires it." },
      { icon: "ReceiptText", label: "Every year", title: "Donation statement for 80G", line: "The trust reports donations so donors' deductions show up against their PAN." },
      { icon: "RefreshCw", label: "Before provisional status ends", title: "Regular registration", line: "The trust moves from provisional to regular registration on Form 105 within the time allowed." },
    ],
  },

  reasonsTitle: "Why Iyyappanthangal traders set up their NGOs with us",
  reasons: [
    { icon: "Scale", title: "Two bodies, clearly split", line: "We draw the line between the sangam and the charity before anything is filed." },
    { icon: "Soup", title: "Food work understood", line: "Community kitchens, food banks and annadhanam are familiar to us, FSSAI side included." },
    { icon: "MessageCircle", title: "Works around shop hours", line: "Drafts and questions on WhatsApp, calls after closing time." },
    { icon: "MapPinned", title: "Kundrathur office", line: "Our only office, in Karaima Nagar. Open Monday to Saturday, 9 am to 7 pm." },
    { icon: "Award", title: "Experience since 2012", line: "Registration and compliance work for Chennai businesses and NGOs." },
    { icon: "ReceiptText", title: "Fees agreed in writing", line: "You know our fee for each body before work starts." },
  ],

  faqTitle: "NGO registration in Iyyappanthangal: questions from traders and food volunteers",
  faqs: [
    { q: "Do you have an office in Iyyappanthangal?", a: "No. Our only office is in Karaima Nagar, Kundrathur, open Monday to Saturday, 9 am to 7 pm. Most Iyyappanthangal groups work with us over WhatsApp and email, and committee members are welcome to visit the office." },
    { q: "Should our traders' association be a society or a trust?", a: "Usually a society under the Tamil Nadu Societies Registration Act, 1975. An association has members who join, pay dues and elect a committee, and a society is built for exactly that. It needs at least seven members and is registered with the District Registrar. A trust is run by named trustees and suits a charity better than a members' body." },
    { q: "Can our merchants' association get 80G so members save tax?", a: "Generally no. Charity registration and donor approval, formerly 12A and 80G and now sections 332 and 354 of the Income-tax Act, 2025, are meant for bodies working for the public. An association that protects its own members' trade interests is not a charity, and members' dues are not donations. If the traders want to fund charity, they can give to a separate charitable trust." },
    { q: "Why not run the free meals through the association itself?", a: "Because the meals can qualify for 12A and 80G and the association can't. If charity money sits in the association's account, the food work loses its tax benefits and donors get no deduction. A separate trust with its own PAN, bank account and books keeps the charity clean and the association free to work for members." },
    { q: "Does a food bank or surplus food group need FSSAI registration?", a: "In most cases, yes. Under FSSAI's surplus food regulations of 2019, organisations that collect surplus food and give it out free must register with FSSAI and follow its hygiene rules. A kitchen that cooks meals has to meet food safety rules too. We add the right registration to your plan along with the trust." },
    { q: "Can hotel owners claim 80G for the food they give the kitchen?", a: "The deduction is for money donated to an approved trust, not for rice or cooked food given in kind. Hotel owners who want the deduction should give by bank transfer, card or UPI, and the trust should issue a proper receipt and report it. Large cash gifts don't qualify." },
    { q: "Our group serves annadhanam at a temple festival. Can the trust run the temple?", a: "No. Temples in Tamil Nadu come under the Hindu Religious and Charitable Endowments Department, and a private trust cannot take over or manage one. Your trust can serve food to devotees with permission where needed, but its deed should describe the food service, not the temple's affairs." },
  ],

  related: nearbyAreas("P4-A11"),
  relatedTitle: "NGO registration in areas near Iyyappanthangal",

  final: {
    title: "Register your Iyyappanthangal sangam and kitchen the right way",
    sub: "Tell us what your traders do for members and what they do for the public. We'll set up the right body for each.",
    message: "Hi National Filings, I'm from Iyyappanthangal. We want to register our traders' association and a food charity. Can we talk?",
  },
  catalogue: ["Traders' association society registration in Iyyappanthangal", "Food charity trust registration in Iyyappanthangal", "12A and 80G registration for food trusts in Iyyappanthangal"],
};
