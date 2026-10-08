import { licences, pillars, serviceHref } from "./routes";

/**
 * L1 · MSME / Udyam Registration page (/chennai/msme-registration).
 * Primary keyword: "msme registration in chennai".
 * Secondary: udyam registration in chennai, udyam certificate, msme certificate, small business registration,
 * startup registration benefits.
 *
 * Honesty rules for this page: Udyam registration itself is free on the government portal, so we say so and only charge
 * for our help; timelines are estimates; scheme benefits are described as "eligible units may get", never promised.
 */

export const page = licences.find((l) => l.id === "L1")!;
const pillar = (id: string) => serviceHref(pillars.find((p) => p.id === id)!);

export const SERVICE = "MSME Registration"; // must match a contact form option (licence label)

export const hero = {
  // H1 carries the primary keyword "MSME / Udyam registration in Chennai"
  headline: { line1: "MSME / Udyam Registration", line2Before: "", accent: "in Chennai" },
  sub: "Get your Udyam Registration certificate online with expert assistance. Unlock MSME benefits, government schemes, subsidies, priority lending and tender eligibility.",
  badges: ["Expert Assistance", "Fast Application Support", "PAN India Service", "Transparent Process"],
  whatsapp: "Hi National Filings, I'd like a WhatsApp consultation about MSME / Udyam registration.",
};

/* 2 · Benefits ------------------------------------------------------ */

export const benefits = [
  { icon: "BadgeIndianRupee", title: "Government subsidies", line: "Eligible units get concessions on trademark and patent fees, certification costs and more." },
  { icon: "Landmark", title: "Easier business loans", line: "Collateral-free credit for eligible micro and small units under the CGTMSE guarantee scheme." },
  { icon: "TrendingUp", title: "Priority sector lending", line: "Banks count MSME loans as priority lending, which widens your access to credit." },
  { icon: "FileCheck2", title: "Tender eligibility", line: "Micro and small enterprises are often exempt from tender fees and earnest money in government tenders." },
  { icon: "ReceiptText", title: "Tax benefits", line: "Buyers can claim the expense for dues to micro and small suppliers only when they pay on time." },
  { icon: "ShieldCheck", title: "Protection against delayed payments", line: "Buyers must pay within the agreed term, at most 45 days, or owe interest on the delay." },
  { icon: "Rocket", title: "Startup support schemes", line: "Central and Tamil Nadu schemes for new businesses often ask for a Udyam certificate." },
  { icon: "Award", title: "Business credibility", line: "A government-issued Udyam number reassures banks, buyers and large clients." },
] as const;

export const benefitsCta = {
  title: "Want to know which benefits you qualify for?",
  sub: "Tell us your business activity and size. We'll tell you which schemes and benefits apply after Udyam registration.",
  message: "Hi National Filings, which MSME benefits can my business get after Udyam registration?",
};

/* 3 · Who should apply ---------------------------------------------- */

export const applicants = [
  { icon: "Rocket", title: "Startups", line: "Register early to use MSME loans and schemes from day one." },
  { icon: "Factory", title: "Manufacturers", line: "Unlock credit, subsidies and tender exemptions for your unit." },
  { icon: "Headset", title: "Service providers", line: "Agencies, IT firms and service businesses qualify too." },
  { icon: "Laptop", title: "Freelancers", line: "Proprietors with business income can get a Udyam certificate." },
  { icon: "Briefcase", title: "Consultants", line: "Get paid on time by larger clients under MSME rules." },
  { icon: "Store", title: "Small businesses", line: "Shops and traders can use Udyam for priority lending." },
  { icon: "ShoppingCart", title: "Ecommerce sellers", line: "Online brands and marketplace sellers can register." },
  { icon: "Ship", title: "Exporters", line: "Support under export and credit schemes for MSMEs." },
] as const;

/* 4 · MSME opportunities in Chennai (photo tiles) -------------------- */

export const opportunitiesIntro =
  "Chennai's small business base runs from auto components and engineering units to IT services, hospitals, schools, builders, transporters and retailers. Udyam registration in Chennai helps each of them reach the credit and schemes meant for MSMEs.";

/** Photos: Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each is unique on the site. */
export const industries = [
  { icon: "Laptop", title: "IT & SaaS", image: "https://images.unsplash.com/photo-1716703371653-ca74beaa7a4a?auto=format&fit=crop&w=1600&q=90", alt: "Busy IT office with rows of desks", credit: "Musemind UX Agency / Unsplash" }, // unsplash.com/@musemindagency
  { icon: "Factory", title: "Manufacturing", image: "https://images.unsplash.com/photo-1764114441123-586d13fc6ece?auto=format&fit=crop&w=1600&q=90", alt: "Engineering workshop with a lathe", credit: "Zoshua Colah / Unsplash" }, // unsplash.com/@zoshuacolah
  { icon: "Stethoscope", title: "Healthcare", image: "https://images.unsplash.com/photo-1710074213374-e68503a1b795?auto=format&fit=crop&w=1600&q=90", alt: "Hospital ward with two beds", credit: "Zoshua Colah / Unsplash" }, // unsplash.com/@zoshuacolah
  { icon: "GraduationCap", title: "Education", image: "https://images.unsplash.com/photo-1719159381916-062fa9f435a6?auto=format&fit=crop&w=1600&q=90", alt: "Students at their desks in a classroom", credit: "Haseeb Modi / Unsplash" }, // unsplash.com/@haseebm
  { icon: "HardHat", title: "Construction", image: "https://images.unsplash.com/photo-1689574666551-52eb11c37bcd?auto=format&fit=crop&w=1600&q=90", alt: "Aerial view of high-rise construction", credit: "Auro Realty / Unsplash" }, // unsplash.com/@aurorealty
  { icon: "Truck", title: "Logistics", image: "https://images.unsplash.com/photo-1781863003869-ea9dfa522b34?auto=format&fit=crop&w=1600&q=90", alt: "Men beside a goods truck loaded with sacks", credit: "Amar Preet Singh / Unsplash" }, // unsplash.com/@amarallahabadi
  { icon: "ShoppingBag", title: "Retail", image: "https://images.unsplash.com/photo-1739066598279-1297113f5c6a?auto=format&fit=crop&w=1600&q=90", alt: "Provisions store with goods on display", credit: "Zoshua Colah / Unsplash" }, // unsplash.com/@zoshuacolah
  { icon: "Users", title: "Professional services", image: "https://images.unsplash.com/photo-1722573783625-eceb04251036?auto=format&fit=crop&w=1600&q=90", alt: "Team session in front of a projector screen", credit: "Adhitya Sibikumar / Unsplash" }, // unsplash.com/@adhitya_2505
] as const;

/* 5 · Documents ----------------------------------------------------- */

export const documents = [
  { icon: "UserRound", title: "For the proprietor", items: ["Aadhaar", "PAN", "Mobile number", "Email ID"], hint: "The mobile number must be linked to the Aadhaar, for the OTP." },
  { icon: "Building2", title: "For the business", items: ["Business address", "Bank details", "Business activity details"], hint: "Activity details decide your NIC codes, which we pick for you." },
] as const;

export const documentsNote = {
  title: "Most MSME registrations can be completed online",
  sub: "No documents are uploaded: details are checked against Aadhaar, PAN and GST records. Share them on WhatsApp and we handle the rest.",
  message: "Hi National Filings, I'd like to send my details for MSME / Udyam registration.",
};

/* 6 · Process (horizontal timeline) --------------------------------- */

export const steps = [
  { title: "Business information collection", time: "Day 1", sub: "We collect your details and choose the right NIC activity codes." },
  { title: "Aadhaar verification", time: "Same day", sub: "An OTP on the Aadhaar-linked mobile confirms the owner." },
  { title: "Application submission", time: "Same day", sub: "We file the Udyam form with PAN, bank and activity details." },
  { title: "Government verification", time: "Usually 1-3 days", sub: "PAN and GST details are checked against government records." },
  { title: "Udyam certificate issued", time: "On approval", sub: "Your certificate and permanent Udyam number arrive by email." },
] as const;

export const processNote = "Timelines depend on government verification. Most Udyam certificates are issued within a few working days of a correct application.";

export const processCta = {
  title: "Ready to apply for your Udyam certificate?",
  sub: "Share your Aadhaar-linked mobile and PAN, and we'll start today.",
  message: "Hi National Filings, I'm ready to apply for MSME / Udyam registration. Can we start?",
};

/* 7 · Mistakes ------------------------------------------------------ */

export const mistakes = [
  { icon: "IdCard", title: "Incorrect Aadhaar details", problem: "Using an Aadhaar that isn't the owner's or authorised signatory's, or one not linked to a working mobile.", fix: "We confirm the right Aadhaar holder and OTP access before starting the application." },
  { icon: "ListTree", title: "Wrong NIC code selection", problem: "Activity codes that don't match what the business does, which can affect scheme and loan eligibility.", fix: "We map your products and services to the correct NIC codes." },
  { icon: "FileWarning", title: "Mismatch in PAN information", problem: "Business name or type in the form differs from PAN or GST records, so verification fails.", fix: "We match every detail with your PAN and GST records before filing." },
  { icon: "Shuffle", title: "Invalid business activity selection", problem: "Choosing manufacturing instead of services, or the other way round, for your main activity.", fix: "We check the activity type against the benefits and schemes you want to use." },
] as const;

/* 8 · Cost factors -------------------------------------------------- */

export const costs = [
  { icon: "Landmark", label: "₹0", title: "Government fees", line: "Udyam registration is free on the official government portal. Be wary of websites that charge a \"government fee\" for it." },
  { icon: "Headset", label: "Quoted upfront", title: "Professional assistance", line: "Our fee covers NIC code selection, the application and follow-up, and is shared before we start." },
  { icon: "FilePen", label: "If needed", title: "Corrections or amendments", line: "Updating address, activity or bank details later is done online and quoted separately." },
  { icon: "Layers", label: "Optional", title: "Additional registrations", line: "GST, trademark or licences you may need alongside Udyam, each quoted separately." },
] as const;

export const costCta = {
  title: "Get an exact quote for your MSME registration",
  sub: "No hidden charges. The government fee is zero, and our fee is confirmed upfront.",
  message: "Hi National Filings, can I get a quote for MSME / Udyam registration?",
};

/* 9 · Why choose us ------------------------------------------------- */

export const reasons = [
  { icon: "UserCheck", title: "Dedicated expert", line: "One person handles your application from start to certificate." },
  { icon: "Zap", title: "Fast processing", line: "Most applications are filed the same day we receive your details." },
  { icon: "ReceiptText", title: "Transparent pricing", line: "A clear quote upfront, and no fee for the government step." },
  { icon: "MessageCircle", title: "WhatsApp support", line: "Share details and get updates on WhatsApp, Monday to Saturday." },
  { icon: "MapPinned", title: "PAN India service", line: "Based in Chennai, serving businesses across India online." },
  { icon: "ClipboardCheck", title: "Compliance guidance", line: "Help with GST, trademark and filings after your Udyam registration." },
] as const;

/* 10 · FAQ ---------------------------------------------------------- */

export const faqs = [
  {
    q: "What is MSME registration?",
    a: "MSME registration records your business as a micro, small or medium enterprise with the Ministry of MSME, based on your investment in plant and machinery or equipment and your turnover. It is done online through the Udyam portal, and you receive an MSME certificate called the Udyam certificate.",
  },
  {
    q: "What is Udyam registration?",
    a: "Udyam registration is the government's online MSME registration system, which replaced Udyog Aadhaar in 2020. It is free on the official portal, uses your Aadhaar for verification, and gives your business a permanent Udyam Registration Number and certificate.",
  },
  {
    q: "Is MSME registration mandatory?",
    a: "No, it is voluntary. But you need a Udyam certificate to claim MSME benefits such as collateral-free loans, protection against delayed payments, tender exemptions and many government schemes, so most small businesses register.",
  },
  {
    q: "How long does MSME registration in Chennai take?",
    a: "The application is usually filed the same day we have your details. After government verification of your PAN and GST data, most Udyam certificates are issued within a few working days.",
  },
  {
    q: "Can a freelancer apply for MSME registration?",
    a: "Yes. Freelancers and consultants with business income can register as a service enterprise in their own name as a proprietor and get a Udyam certificate.",
  },
  {
    q: "Can a startup get MSME benefits?",
    a: "Yes. A startup that falls within the MSME limits can register for Udyam and use MSME loans and schemes. This is separate from DPIIT startup recognition, and a business can have both, which adds to the startup registration benefits available.",
  },
  {
    q: "What are the main MSME benefits?",
    a: "Collateral-free credit for eligible units, priority sector lending, concessions on trademark and patent fees, exemptions in government tenders, protection against delayed payments and access to central and Tamil Nadu schemes. Which ones apply depends on your business.",
  },
  {
    q: "Can I update my Udyam certificate later?",
    a: "Yes. Details like address, activity, bank account or employees can be updated online at any time. Investment and turnover figures are also updated from your income tax and GST records.",
  },
  {
    q: "Do I need GST for MSME registration?",
    a: "Not if your business is not required to register for GST. If it is, your GSTIN is linked to the Udyam registration. We can handle GST registration too if you need it.",
  },
  {
    q: "How can National Filings help with Udyam registration in Chennai?",
    a: "We choose the right NIC codes, check your details against PAN and GST records, file the application and follow it up until your Udyam certificate is issued. The government step is free; we charge only for our help, quoted upfront.",
  },
];

/* 11 · Related services (internal links) ----------------------------- */

export const related = [
  { icon: "Building2", label: "Company registration", href: pillar("P1") },
  { icon: "ReceiptIndianRupee", label: "GST consultant", href: pillar("P2") },
  { icon: "IndianRupee", label: "Income tax consultant", href: pillar("P3") },
  { icon: "ShieldCheck", label: "Trademark registration", href: pillar("P5") },
] as const;

/* CTAs ---------------------------------------------------------------- */

export const messages = {
  final: "Hi National Filings, I'd like to get my MSME / Udyam registration certificate. Please guide me.",
};

export const finalCta = {
  // the brief's heading, with "in Chennai" added for the every-H2-names-the-city rule
  title: "Get your MSME registration certificate in Chennai today",
  sub: "Talk with our experts and complete your MSME registration process quickly and correctly.",
};
