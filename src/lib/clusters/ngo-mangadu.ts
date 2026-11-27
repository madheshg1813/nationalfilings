import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { NGO_SERVICE, nearbyAreas } from "./shared";

/**
 * P4-A8 · NGO Registration in Mangadu (/chennai/ngo-registration-in-mangadu).
 * Primary keyword: "ngo registration in mangadu". We have no office in Mangadu; clients work with us over WhatsApp and email,
 * and can visit our Kundrathur office, which is in the same taluk.
 * Angle: religious and charitable trusts around the temple town: annadhanam, marriage assistance for poor families, help for
 * pilgrims and elderly people. Unique sections: religious vs charitable vs mixed trusts and what each means for 12A and 80G
 * (5% religious spending limit), and the HR&CE position of the Kamakshi Amman temple, so private trusts work alongside it.
 * Kept distinct from the company (P1-A8), GST (P2-A8) and income tax (P3-A8) pages for Mangadu and from P4-C1 to P4-C4.
 *
 * Local facts (reused from the verified P1-A8 JSDoc): Mangadu Municipality (constituted 07.12.2021) is in Kundrathur taluk,
 * Kancheepuram district; the Kamakshi Amman Temple is administered by the HR&CE Department, and devotees come to pray for
 * marriage among other needs; the Velleeswarar and Vaikunta Perumal temples are nearby.
 *
 * Facts checked (Nov 2026):
 * - HR&CE: Hindu temples and religious endowments in Tamil Nadu come under the Tamil Nadu Hindu Religious and Charitable
 *   Endowments Act, 1959 and the HR&CE Department. The department launched daily prasadam distribution for devotees at the
 *   Mangadu Kamakshi Amman Temple in June 2025. (newstodaynet.com/2025/06/30/daily-prasadam-distribution-launched-at-mangadu-temple/;
 *   HR&CE policy notes on cms.tn.gov.in) A private trust cannot take over or manage an HR&CE temple; the page says so.
 * - Tamil Nadu has no separate public trusts act; a public trust is created by a deed registered with the Sub-Registrar
 *   (TNREGINET). Societies: Tamil Nadu Societies Registration Act, 1975, District Registrar. Section 8, Companies Act, 2013.
 *   (as verified on P4-C1 to P4-C3)
 * - Income-tax Act, 2025 from 1 April 2026: registration (formerly 12A/12AB) is section 332; donor approval (formerly 80G)
 *   is section 354. Section 354(1) conditions include that the organisation is established for a charitable purpose, does
 *   not spend more than 5% of its total income in a tax year on religious purposes, and its activities are not expressed to
 *   be for the benefit of a particular religious community or caste. Section 351(1)(c): applying income for private religious
 *   purposes that do not benefit the public is a specified violation; 351(1)(d): an NPO set up for charitable purposes after
 *   the Act's commencement that applies income for a particular religious community or caste commits a specified violation.
 *   A wholly religious or religious-cum-charitable public trust can still be registered for exemption, but donor approval
 *   needs the charitable purpose and the 5% limit. (eztax.in/income-tax-act-2025/section-354; aaptaxlaw.com section 354;
 *   ebizfiling.com section 354; carajput.com taxation of NPOs under ITA 2025; taxtmi.com notes)
 * - Anonymous donations (section 337): taxed at 30% above the higher of ₹1 lakh or 5% of total donations; wholly religious
 *   NPOs are outside the rule; religious-cum-charitable NPOs are outside it except for anonymous donations earmarked for a
 *   university, educational institution, hospital or medical institution they run. (carajput.com, taxclue.in)
 * - Form 104 provisional registration/approval: three tax years or six months from the start of activities, whichever is
 *   earlier; Form 105 regular registration valid five tax years; old-Act registrations stay valid till expiry.
 *   (incometax.gov.in Form 104 FAQs; incometaxindia.gov.in form-105-faqs)
 * - CSR Schedule VII item (i) includes eradicating hunger, poverty and malnutrition. (csr.odisha.gov.in Schedule VII list)
 * - Stamp duty and registration fees not quoted ("as per Tamil Nadu rates"). No professional fee figures. Timelines are estimates.
 */

const whatsapp = "Hi National Filings, I'm in Mangadu and want to register a trust for annadhanam and charity work.";

export const ngoMangaduPage: LicencePageData = {
  id: "P4-A8",
  service: NGO_SERVICE,
  meta: {
    title: "NGO Registration in Mangadu, Chennai | National Filings",
    description: "NGO registration in Mangadu for annadhanam, marriage aid and elderly care trusts. Religious or charitable objects, 12A, 80G and the 5% rule explained.",
  },
  hero: {
    headline: { line1: "NGO Registration", line2Before: "", accent: "in Mangadu" },
    sub: "Turning a good cause into a registered NGO in Mangadu is simpler than it looks. We prepare the documents, file the registration and handle 12A and 80G.",
    badges: heroTrustPoints,
    whatsapp,
  },
  illustration: {
    icon: "HeartHandshake",
    kicker: "Mangadu, Kancheepuram district",
    title: "Charitable Trust Deed",
    line: "Your Mangadu NGO",
    stamp: "12A registered",
    chips: ["Objects checked for 80G", "Religious spend within 5%", "Office in the same taluk"],
    steps: ["Seva", "Objects", "Deed", "Register", "12A/80G"],
  },

  benefitsSection: {
    title: "Why Mangadu seva groups register as a trust",
    lead: "Annadhanam on Fridays and festival days, a thali for a poor bride, a meal for an old pilgrim. When the giving grows, a registered body keeps it honest and lasting.",
    cta: {
      title: "Feeding devotees or helping poor families already?",
      sub: "Tell us what you do and how it is paid for. We'll tell you whether your trust is religious, charitable or mixed, and what that means for tax.",
      message: "Hi National Filings, we do annadhanam and help poor families in Mangadu. Should our trust be religious or charitable?",
    },
  },
  benefits: [
    { icon: "ScrollText", title: "Seva that outlives the founder", line: "A registered deed keeps the work going when the family that started it can't." },
    { icon: "Banknote", title: "A bank account for the trust", line: "Devotees' contributions kept apart from household money." },
    { icon: "ShieldCheck", title: "Exempt income", line: "With 12A, money spent on annadhanam and relief is not taxed." },
    { icon: "ReceiptText", title: "80G for charitable work", line: "Donors get a deduction where the trust is charitable and religious spending stays within the limit." },
    { icon: "Scale", title: "Clear objects", line: "Religious, charitable or both, written down so the tax position is not argued later." },
    { icon: "Users", title: "Trustees in writing", line: "Who decides on a marriage grant or a festival meal is settled in the deed." },
    { icon: "Landmark", title: "Respect for the temple's role", line: "Your trust's work sits clearly outside the HR&CE administration of the temple." },
    { icon: "BadgeCheck", title: "Trust from donors", line: "Regular donors and NRI families give more readily to a registered body." },
  ],

  applicantsSection: {
    title: "Mangadu groups we set up trusts and NGOs for",
    lead: "Most are families, devotee groups or local traders who have quietly done this work for years.",
  },
  applicants: [
    { icon: "UtensilsCrossed", title: "Annadhanam groups", line: "Feeding devotees and the poor on Fridays, festival days and new moon days." },
    { icon: "HeartHandshake", title: "Marriage assistance trusts", line: "Help with thali, clothes and simple weddings for poor families." },
    { icon: "UserRound", title: "Elderly care groups", line: "Meals, medicines and shelter for old people living alone." },
    { icon: "Users", title: "Pilgrim help groups", line: "Water, rest spaces and guidance for devotees walking in on festival days." },
    { icon: "Landmark", title: "Bhajan and devotee mandalis", line: "Groups that also run religious events and want the tax position right." },
    { icon: "Store", title: "Traders' welfare trusts", line: "Pooja item sellers, hall owners and caterers pooling money for local charity." },
    { icon: "GraduationCap", title: "Education funds", line: "Fees and books for children of poor families in the town." },
    { icon: "Home", title: "Memorial family trusts", line: "A trust in an elder's name, set up with family property or savings." },
  ],

  opportunities: {
    eyebrow: "Seva in Mangadu",
    title: "The giving that grows around a temple town",
    intro: "Feeding, weddings and care for the old are the oldest charities in Mangadu. Each one is charitable in law, so long as it is open to the public and not tied to one community.",
    // Pexels licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "UtensilsCrossed", title: "Annadhanam", image: "https://images.pexels.com/photos/9266190/pexels-photo-9266190.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Vegetarian meal of rice, curries, poppadam and banana laid out on a banana leaf beside a plate of flowers", credit: "Saveurs Secretes / Pexels" },
      { icon: "HeartHandshake", title: "Marriage assistance", image: "https://images.pexels.com/photos/7669990/pexels-photo-7669990.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Groom in a white shirt placing a garland on a bride in a red silk saree as family looks on", credit: "Anoop VS / Pexels" },
      { icon: "UserRound", title: "Care for the elderly", image: "https://images.pexels.com/photos/8704976/pexels-photo-8704976.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Elderly woman in an orange saree sitting between white pillars", credit: "Manik Mandal / Pexels" },
      { icon: "Landmark", title: "Help for pilgrims", image: "https://images.pexels.com/photos/11964422/pexels-photo-11964422.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Brightly painted temple gopuram in Tamil Nadu against a clear blue sky", credit: "Phaneendra B / Pexels" },
    ],
  },

  highlights: {
    eyebrow: "Religious, charitable or mixed",
    title: "How your trust's objects decide 12A and 80G in Mangadu",
    lead: "The deed's objects matter more here than anywhere else. A trust for poojas and a trust for feeding the poor are taxed differently, and a mixed trust sits between the two.",
    items: [
      { icon: "Landmark", label: "Wholly religious", title: "12A yes, 80G no", line: "A public religious trust, for festivals or poojas, can be registered for exemption. Donor approval is only for charitable bodies.", highlight: true },
      { icon: "HeartHandshake", label: "Wholly charitable", title: "12A and 80G both possible", line: "Annadhanam for all, marriage aid for poor families and elderly care are charitable when open to the public." },
      { icon: "Percent", label: "Mixed objects", title: "The 5% religious spend limit", line: "For donor approval under section 354, formerly 80G, religious spending can't exceed 5% of the trust's total income in a tax year." },
      { icon: "Scale", label: "Any new charitable trust", title: "Not for one caste or community", line: "Spending a new charitable trust's income only on one religious community or caste is a violation that can cost its registration." },
    ],
  },

  documentsSection: {
    title: "What we need to draft a Mangadu trust deed",
    lead: "Send these on WhatsApp or bring them to our Kundrathur office. We draft the deed, so you only need the people and the plan.",
  },
  documents: [
    { icon: "IdCard", title: "For the founder and trustees", items: ["PAN and Aadhaar of each trustee", "Passport-size photos", "Two witnesses with ID for the registration day"], hint: "The settlor and witnesses must be at the Sub-Registrar office when the deed is registered." },
    { icon: "Home", title: "For the trust's address and corpus", items: ["Rent agreement, property tax receipt or EB bill for the address", "Amount of the initial corpus", "Details of any property being given to the trust"], hint: "Stamp duty depends on the corpus and any property settled, as per Tamil Nadu rates." },
    { icon: "ScrollText", title: "For the objects", items: ["List of the work you do now, such as annadhanam or marriage aid", "Any religious events you also want to fund", "Who can receive help and how they are chosen"], hint: "This is where we decide whether your trust should be charitable, religious or mixed." },
  ],
  documentsNote: {
    title: "Want to fund both poojas and annadhanam?",
    sub: "Tell us roughly how your spending splits. We'll show how the objects should read so 12A is safe and 80G is still possible.",
    message: "Hi National Filings, our Mangadu trust wants to fund festival poojas and annadhanam. How do we draft the objects?",
  },

  processSection: {
    title: "How we register a seva trust in Mangadu",
    lead: "Our office is in Kundrathur, in the same taluk, so meeting in person is easy. The drafting and filing run on WhatsApp in between.",
    cta: {
      title: "Talk to us before the deed is drafted",
      sub: "Objects are hard to change after registration. A short call first saves an amendment later.",
      message: "Hi National Filings, I want to register a charitable trust in Mangadu. Can I meet you at your Kundrathur office?",
    },
  },
  steps: [
    { title: "Hear the seva", time: "Day 1", sub: "What you do, for whom, and how much of it is religious." },
    { title: "Decide the character", time: "1-2 days", sub: "Charitable, religious or mixed, with the 12A and 80G effect of each explained." },
    { title: "Draft the deed", time: "2-4 days", sub: "Objects, trustees, succession and a clause on the temple's HR&CE role where relevant." },
    { title: "Register at the Sub-Registrar", time: "On the slot", sub: "Settlor, trustees and witnesses sign. Stamp duty and fees paid as per Tamil Nadu rates." },
    { title: "PAN, bank and 12A/80G", time: "After registration", sub: "PAN and bank account opened, then provisional registration and, if eligible, donor approval." },
  ],
  processNote: "Timelines are estimates and depend on Sub-Registrar slots and the tax department. A religious trust can get 12A but not 80G, so we tell you that before drafting.",

  mistakesSection: {
    title: "Mistakes we see in Mangadu trusts",
    lead: "Most come from a deed copied from another trust, or from mixing the temple's affairs with the trust's own.",
  },
  mistakes: [
    { icon: "Landmark", title: "Deed that claims a role in the temple", problem: "A trust deed says the trust will manage or renovate the Kamakshi Amman temple. The temple is administered by the HR&CE Department, so this clause has no effect and raises questions.", fix: "Objects cover the trust's own work, such as feeding devotees outside or helping pilgrims. Any offering to the temple goes through the temple administration." },
    { icon: "Percent", title: "Festival spending eats into 80G", problem: "A mixed trust spends heavily on a festival year after year, so religious spending crosses 5% of its income.", fix: "We help you track religious and charitable spending separately, so you know where you stand before the year closes." },
    { icon: "Users", title: "Marriage aid limited to one community", problem: "A new trust helps only brides from one caste, which the new Act treats as a violation for a charitable trust.", fix: "We draft eligibility around need, such as poor families of any community, and record how each grant is decided." },
    { icon: "FileWarning", title: "Hundi cash with no record", problem: "Collection boxes at annadhanam counters bring in cash with no donor details, and this money gets mixed up with personal funds.", fix: "A UPI QR code, a counted-and-signed cash register and prompt deposits into the trust's account." },
  ],

  costSection: {
    title: "What a Mangadu trust registration costs",
    lead: "The state's charges depend on the corpus and any property you settle. Our fee depends on the drafting and approvals, and is agreed in writing first.",
    cta: {
      title: "Ask for a written quote",
      sub: "Tell us the corpus, whether property is involved and whether you want 12A and 80G handled.",
      message: "Hi National Filings, can I get a quote to register a charitable trust in Mangadu with 12A and 80G?",
    },
  },
  costs: [
    { icon: "Stamp", label: "As per Tamil Nadu rates", title: "Stamp duty on the deed", line: "Based on the corpus and any property settled on the trust.", highlight: true },
    { icon: "Landmark", label: "As per Tamil Nadu rates", title: "Sub-Registrar fees", line: "Registration fee and charges paid at the Sub-Registrar office." },
    { icon: "ReceiptText", label: "No government fee", title: "12A and 80G applications", line: "Filing with the tax department costs nothing." },
    { icon: "FilePen", label: "Quoted upfront", title: "Our professional fee", line: "Depends on the drafting, the number of trustees and the approvals we handle." },
  ],

  compliance: {
    eyebrow: "Every year",
    title: "Running a Mangadu seva trust after registration",
    lead: "A few habits keep a temple-town trust's approvals safe, especially in heavy festival years.",
    items: [
      { icon: "Coins", label: "Every year", title: "Apply 85% of income", line: "Spend at least 85% of the year's income on the objects, or accumulate it within the rules." },
      { icon: "Calculator", label: "Every year", title: "Religious spend tracked", line: "Religious and charitable spending kept apart, so the 5% limit for donor approval is watched.", highlight: true },
      { icon: "FileText", label: "Every donation", title: "Donor details recorded", line: "Name and address noted for each donation, so it isn't treated as anonymous." },
      { icon: "RefreshCw", label: "Before expiry", title: "Renewal on time", line: "Provisional approval moved to regular approval, which runs for five tax years and is then renewed." },
    ],
  },

  reasonsTitle: "Why Mangadu trusts choose us",
  reasons: [
    { icon: "MapPinned", title: "Same taluk, short ride", line: "Our office is in Kundrathur. Open Monday to Saturday, 9 am to 7 pm." },
    { icon: "Scale", title: "Religious and charitable sorted", line: "Objects drafted with the 12A and 80G effect explained first." },
    { icon: "Landmark", title: "Clear about HR&CE", line: "Your trust works alongside the temple administration, never in its place." },
    { icon: "ScrollText", title: "Deeds written fresh", line: "No copied deeds. Objects follow the work you actually do." },
    { icon: "MessageCircle", title: "On WhatsApp", line: "Drafts, questions and reminders without trips to the city." },
    { icon: "Award", title: "Experience since 2012", line: "Registration, tax and compliance work for Chennai clients." },
  ],

  faqTitle: "Trust and NGO registration in Mangadu: questions we get",
  faqs: [
    { q: "Can our trust take over the running of the Kamakshi Amman temple or its annadhanam?", a: "No. The Kamakshi Amman temple is administered by the Tamil Nadu HR&CE Department under the Hindu Religious and Charitable Endowments Act, 1959, and the department runs the temple's own prasadam distribution. A private trust works alongside it, for example by feeding devotees and the poor at its own premises or helping pilgrims, and any offering to the temple goes through the temple administration." },
    { q: "Is a trust for annadhanam religious or charitable?", a: "Feeding the poor and devotees, open to anyone who comes, is relief of the poor and is treated as charitable. It becomes religious when the trust's purpose is tied to rituals, such as prasadam for a particular pooja. Many Mangadu trusts are mixed. We write the objects so the main work reads as charitable where that is what you do." },
    { q: "Can a religious trust get 80G?", a: "A wholly religious public trust can be registered for exemption under section 332 (formerly 12A), but it can't get donor approval under section 354 (formerly 80G). For donor approval, the trust must be set up for a charitable purpose, must not spend more than 5% of its total income in a tax year on religious purposes, and must not be meant for one religious community or caste." },
    { q: "We help poor brides with marriage expenses. Is that charitable?", a: "Yes, helping poor families with a wedding is relief of the poor. Choose people by need and keep a record of how each grant was decided. If a new charitable trust spends its income only on one religious community or caste, the new Income-tax Act treats that as a violation that can lead to cancellation of registration." },
    { q: "What changed for trusts under the Income-tax Act, 2025?", a: "From 1 April 2026, 12A is section 332 and 80G is section 354. A new trust applies in Form 104 for provisional approval, valid for three tax years or until six months after activities start, whichever is earlier, and then in Form 105 for regular approval, which runs for five tax years. Registrations under the old Act stay valid until they expire." },
    { q: "Our annadhanam counter collects cash from devotees without names. Is that a problem?", a: "It can be. Anonymous donations above the higher of ₹1 lakh or 5% of total donations are taxed at 30% for most trusts. A wholly religious trust is outside this rule, and a mixed religious and charitable trust is largely outside it. Even so, a UPI QR code and a signed cash register keep the trust's accounts clean." },
    { q: "Do you have an office in Mangadu?", a: "No. Our office is in Karaima Nagar, Kundrathur, in the same taluk as Mangadu. You can meet us there Monday to Saturday, 9 am to 7 pm, or work with us over WhatsApp and email." },
  ],

  related: nearbyAreas("P4-A8"),
  relatedTitle: "NGO registration in areas near Mangadu",

  final: {
    title: "Give your Mangadu seva a registered home",
    sub: "Tell us what your group does for devotees and poor families. We'll decide the trust's character with you, draft the deed and handle 12A and 80G.",
    message: "Hi National Filings, I want to register a trust in Mangadu for annadhanam and helping poor families. Can we talk?",
  },
  catalogue: ["Charitable and religious trust registration in Mangadu", "Annadhanam and seva trust deed drafting in Mangadu", "12A and 80G registration for trusts in Mangadu"],
};
