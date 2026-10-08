import { sharedReasons, type LicencePageData } from "./types";
import { link } from "./links";
import { heroTrustPoints } from "@/lib/proof";

/** L6 · Digital Signature Certificate (/chennai/digital-signature-certificate). Primary keyword: "digital signature certificate in chennai". */
export const dscPage: LicencePageData = {
  id: "L6",
  service: "Digital Signature Certificate",
  meta: {
    title: "Digital Signature Certificate in Chennai | Class 3 DSC",
    description: "Class 3 digital signature certificate in Chennai for MCA, GST, tax and tenders. Online video KYC, quick issuance and USB token setup by our experts.",
  },
  hero: {
    headline: { line1: "Digital Signature Certificate", line2Before: "", accent: "in Chennai" },
    sub: "Get a Class 3 digital signature certificate for MCA, GST, income tax, DGFT and tender filings, with quick online verification and expert help.",
    badges: heroTrustPoints,
    whatsapp: "Hi National Filings, I'd like a WhatsApp consultation about a digital signature certificate.",
  },
  illustration: { icon: "KeyRound", kicker: "Class 3", title: "Digital Signature", line: "Director · 2 years", stamp: "Issued", chips: ["Identity verified", "Video KYC done", "Token ready"], steps: ["Details", "KYC", "Verify", "Issue", "Token"] },
  benefitsSection: {
    title: "Benefits of a digital signature certificate in Chennai",
    lead: "A DSC is the legally valid way to sign documents and filings online.",
    cta: { title: "Not sure which DSC you need?", sub: "Tell us where you'll use it, such as MCA, GST, tenders or DGFT. We'll get the right type.", message: "Hi National Filings, which digital signature certificate do I need?" },
  },
  benefits: [
    { icon: "ShieldCheck", title: "Legally valid signature", line: "Recognised under the IT Act for signing documents online." },
    { icon: "Building2", title: "MCA filings", line: "Directors need a DSC to sign company and LLP forms." },
    { icon: "ReceiptIndianRupee", title: "GST and income tax", line: "Sign GST returns and income tax filings where required." },
    { icon: "Gavel", title: "Tenders and e-procurement", line: "Bid on government tenders that require a DSC." },
    { icon: "Lock", title: "Secure and tamper-proof", line: "Signed documents can't be altered without detection." },
    { icon: "Clock", title: "Saves time", line: "Sign and file from anywhere, without physical paperwork." },
  ],
  applicantsSection: { title: "Who needs a digital signature certificate in Chennai", lead: "Anyone who signs filings or documents online for a business or for themselves." },
  applicants: [
    { icon: "UserCheck", title: "Company directors", line: "For MCA forms and company filings." },
    { icon: "Briefcase", title: "Business owners", line: "For GST, tax and licence filings." },
    { icon: "Scale", title: "Professionals", line: "CAs, lawyers and consultants." },
    { icon: "Gavel", title: "Tender bidders", line: "For e-tender and procurement portals." },
    { icon: "Globe", title: "Importers and exporters", line: "For DGFT filings and IEC." },
    { icon: "Users", title: "Authorised signatories", line: "Staff who sign on behalf of a business." },
    { icon: "UserRound", title: "Individuals", line: "For personal tax and government portals." },
    { icon: "Building2", title: "LLP partners", line: "For LLP incorporation and filings." },
  ],
  highlights: {
    eyebrow: "Where you'll use it",
    title: "Common uses of a DSC in Chennai",
    lead: "One Class 3 DSC works across most government portals.",
    items: [
      { icon: "Building2", label: "Most common", title: "MCA filings", line: "Company and LLP incorporation, annual returns and director changes.", highlight: true },
      { icon: "ReceiptIndianRupee", label: "Tax", title: "GST and income tax", line: "Signing returns and replies on the GST and income tax portals." },
      { icon: "Gavel", label: "Tenders", title: "E-procurement", line: "Bidding on government and public sector tender portals." },
      { icon: "Globe", label: "Trade", title: "DGFT and IEC", line: "Import export filings and IEC applications on the DGFT portal." },
    ],
  },
  documentsSection: { title: "Documents required for a digital signature certificate in Chennai", lead: "Identity documents plus a quick online verification." },
  documents: [
    { icon: "UserRound", title: "For individuals", items: ["PAN", "Aadhaar", "Passport-size photo", "Mobile number and email"], hint: "Aadhaar-based eKYC makes verification quick." },
    { icon: "Building2", title: "For organisations", items: ["Organisation PAN", "Registration proof", "Authorisation letter", "Signatory's ID documents"], hint: "Needed when the DSC is issued in the name of an organisation." },
  ],
  documentsNote: { title: "Verification is done online", sub: "A short video or Aadhaar verification confirms your identity. We guide you through it on WhatsApp.", message: "Hi National Filings, I'd like to apply for a digital signature certificate." },
  processSection: {
    title: "Digital signature certificate process in Chennai",
    lead: "Five steps from your details to a working DSC.",
    cta: { title: "Ready to get your DSC?", sub: "Share your PAN and Aadhaar and we'll start today.", message: "Hi National Filings, I'm ready to get a digital signature certificate. Can we start?" },
  },
  steps: [
    { title: "Choose the DSC", time: "Day 1", sub: "We confirm the type and validity based on where you'll use it." },
    { title: "Application and KYC", time: "Same day", sub: "We submit your details for eKYC with a licensed certifying authority." },
    { title: "Identity verification", time: "Same day", sub: "A short video or Aadhaar OTP verification confirms it's you." },
    { title: "Certificate issued", time: "Usually same day", sub: "The certifying authority issues the DSC once verified." },
    { title: "Token and setup", time: "On issue", sub: "The DSC goes on a secure USB token, and we help you set it up." },
  ],
  processNote: "Issuance depends on the certifying authority's verification. Most DSCs are ready quickly once KYC is complete.",
  mistakesSection: { title: "Common digital signature certificate mistakes in Chennai", lead: "These cause rejected applications or a DSC that won't work on your portal." },
  mistakes: [
    { icon: "Shuffle", title: "Wrong DSC type", problem: "Buying a signing-only DSC when the portal needs encryption too, or vice versa.", fix: "We match the DSC type to the portals you'll use." },
    { icon: "FileWarning", title: "Name mismatch", problem: "The name differs between PAN, Aadhaar and the application.", fix: "We check every document matches before applying." },
    { icon: "Clock", title: "Letting it expire", problem: "DSC expires just before an important filing.", fix: "We track the expiry and renew in time." },
    { icon: "HardDrive", title: "Token setup issues", problem: "The DSC doesn't work because drivers or settings are missing.", fix: "We help set up the token and test it on your portal." },
  ],
  costSection: {
    title: "Digital signature certificate cost factors in Chennai",
    lead: "The price depends on the DSC type and validity. Quoted upfront.",
    cta: { title: "Get an exact quote for your DSC", sub: "Tell us where you'll use it and for how long, and we'll share the price.", message: "Hi National Filings, can I get a quote for a digital signature certificate?" },
  },
  costs: [
    { icon: "KeyRound", label: "By type", highlight: true, title: "DSC type", line: "Signing, encryption, or both, depending on the portals you use." },
    { icon: "CalendarClock", label: "By validity", title: "Validity period", line: "Longer validity costs more but avoids early renewal." },
    { icon: "HardDrive", label: "If needed", title: "USB token", line: "A secure token to store the DSC, if you don't already have one." },
    { icon: "Headset", label: "Quoted upfront", title: "Professional assistance", line: "Covers the application, verification help and token setup." },
  ],
  reasonsTitle: "Why choose National Filings for a digital signature certificate in Chennai",
  reasons: sharedReasons,
  faqTitle: "Digital signature certificate in Chennai: your questions",
  faqs: [
    { q: "What is a digital signature certificate?", a: "A digital signature certificate (DSC) is an electronic identity issued by a licensed certifying authority. It lets you sign documents and filings online with the same legal validity as a handwritten signature under the IT Act." },
    { q: "Which class of DSC do I need?", a: "Class 3 is the standard DSC today for MCA, GST, income tax, DGFT and most tender portals. We confirm the exact type for the portals you'll use." },
    { q: "How long does it take to get a DSC in Chennai?", a: "Often the same day, once your online identity verification is complete. Timing depends on the certifying authority." },
    { q: "How long is a DSC valid?", a: "DSCs are usually issued for one to three years. You renew it with a fresh certificate when it expires." },
    { q: "Do I need to visit an office for verification?", a: "No. Verification is done online through Aadhaar eKYC or a short video, so you can get a DSC from anywhere." },
    { q: "What is a DSC token?", a: "A USB token is a secure device that stores your digital signature. You plug it in to sign documents on government portals." },
    { q: "Can a DSC be issued in a company's name?", a: "Yes. An organisation DSC can be issued for an authorised signatory with the company's details, using the organisation's documents." },
    { q: "How can National Filings help with a digital signature certificate in Chennai?", a: "We choose the right DSC, submit the application, guide you through verification, help set up the token and remind you before it expires." },
  ],
  related: [
    { icon: "Building2", label: "Company registration", href: link("P1") },
    { icon: "ReceiptIndianRupee", label: "GST consultant", href: link("P2") },
    { icon: "Globe", label: "IEC registration", href: link("L5") },
    { icon: "IndianRupee", label: "Income tax consultant", href: link("P3") },
  ],
  final: { title: "Need help with a digital signature certificate in Chennai?", sub: "Talk with our experts and get personalised guidance.", message: "Hi National Filings, I'd like a digital signature certificate. Please guide me." },
  catalogue: ["Class 3 digital signature certificate", "Organisation DSC", "DSC renewal"],
};
