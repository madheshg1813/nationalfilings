import { sharedReasons, type LicencePageData } from "./types";
import { link } from "./links";

/**
 * L7 · ISO Certification (/chennai/iso-certification). Primary keyword: "iso certification in chennai".
 * Honesty: certificates are issued by accredited certification bodies after their audit. We prepare the business and
 * coordinate with an accredited body; we never issue certificates ourselves or promise a pass.
 */
export const isoPage: LicencePageData = {
  id: "L7",
  service: "ISO Certification",
  meta: {
    title: "ISO Certification in Chennai | ISO 9001, 27001 & More",
    description: "ISO certification in Chennai with expert guidance. Gap analysis, documents and audit support with accredited bodies for ISO 9001, 14001 and 27001.",
  },
  hero: {
    headline: { line1: "ISO Certification", line2Before: "", accent: "in Chennai" },
    sub: "Build trust and improve business standards with ISO certification. We guide you through the standard, documentation and audit with an accredited certification body.",
    badges: ["Accredited Certification Bodies", "Documentation Support", "Audit Preparation", "Transparent Process"],
    whatsapp: "Hi National Filings, I'd like a WhatsApp consultation about ISO certification.",
  },
  illustration: { icon: "Award", kicker: "ISO 9001", title: "Certification", line: "Your Company · Quality", stamp: "Certified", chips: ["Gap analysis done", "Documents ready", "Audit passed"], steps: ["Scope", "Gap review", "Documents", "Audit", "Certificate"] },
  benefitsSection: {
    title: "Benefits of ISO certification in Chennai",
    lead: "ISO certification shows clients that your business follows internationally recognised standards.",
    cta: { title: "Not sure which ISO standard you need?", sub: "Tell us your industry and why you want ISO. We'll suggest the right standard and plan.", message: "Hi National Filings, which ISO certification does my business need?" },
  },
  benefits: [
    { icon: "Award", title: "Client and tender trust", line: "Many clients and tenders ask suppliers for ISO certification." },
    { icon: "TrendingUp", title: "Better processes", line: "A clear system reduces errors, rework and waste." },
    { icon: "Globe", title: "Export and global buyers", line: "Recognised by international buyers and partners." },
    { icon: "BadgeCheck", title: "Brand credibility", line: "Shows a consistent, audited approach to quality." },
    { icon: "Users", title: "Clear roles for staff", line: "Defined responsibilities and training for your team." },
    { icon: "ShieldCheck", title: "Risk management", line: "Identify and control risks before they become problems." },
  ],
  applicantsSection: { title: "Who should get ISO certification in Chennai", lead: "Businesses of any size that want to prove consistent quality and standards." },
  applicants: [
    { icon: "Factory", title: "Manufacturers", line: "Quality and environmental systems." },
    { icon: "Laptop", title: "IT and SaaS firms", line: "Information security (ISO 27001)." },
    { icon: "Soup", title: "Food businesses", line: "Food safety (ISO 22000)." },
    { icon: "HardHat", title: "Construction firms", line: "Quality and safety for site work." },
    { icon: "Stethoscope", title: "Healthcare providers", line: "Quality systems for clinics and labs." },
    { icon: "Briefcase", title: "Service businesses", line: "Consulting, agencies and BPOs." },
    { icon: "Gavel", title: "Tender bidders", line: "Suppliers to government and PSUs." },
    { icon: "Ship", title: "Exporters", line: "Suppliers to overseas buyers." },
  ],
  highlights: {
    eyebrow: "ISO standards",
    title: "Popular ISO standards in Chennai",
    lead: "We help you choose the standard that fits your industry and goals.",
    items: [
      { icon: "Award", label: "Most requested", title: "ISO 9001", line: "Quality management systems, for almost any business.", highlight: true },
      { icon: "Leaf", label: "Environment", title: "ISO 14001", line: "Environmental management for manufacturers and large sites." },
      { icon: "HardHat", label: "Safety", title: "ISO 45001", line: "Occupational health and safety for workplaces with risk." },
      { icon: "Lock", label: "Security", title: "ISO 27001", line: "Information security for IT, SaaS and data-driven businesses." },
      { icon: "UtensilsCrossed", label: "Food", title: "ISO 22000", line: "Food safety management across the food chain." },
    ],
  },
  documentsSection: { title: "Documents required for ISO certification in Chennai", lead: "Business details to start; we help build the system documents." },
  documents: [
    { icon: "Building2", title: "Business details", items: ["Business registration proof", "GST or PAN details", "Address of sites to be certified", "Scope of activities"], hint: "The scope decides what the certificate covers." },
    { icon: "FileText", title: "System documents", items: ["Quality or management policy", "Process and procedure records", "Roles and responsibilities", "Internal audit records"], hint: "Don't have these yet? We help prepare them as part of the process." },
  ],
  documentsNote: { title: "Most preparation happens online", sub: "Share your current documents on WhatsApp and we'll show you what's needed for the audit.", message: "Hi National Filings, I'd like to start ISO certification for my business." },
  processSection: {
    title: "ISO certification process in Chennai",
    lead: "Five steps from choosing the standard to your certificate.",
    cta: { title: "Ready to start your ISO certification?", sub: "Tell us your industry and goals and we'll plan the steps.", message: "Hi National Filings, I'm ready to start ISO certification. Can we plan it?" },
  },
  steps: [
    { title: "Scope and standard", time: "Day 1", sub: "We confirm the right standard and what the certificate should cover." },
    { title: "Gap analysis", time: "A few days", sub: "We compare your current processes with the standard's requirements." },
    { title: "Documentation", time: "Varies", sub: "We help prepare policies, procedures and records, and run an internal check." },
    { title: "Certification audit", time: "By the certifier", sub: "An accredited certification body audits your system." },
    { title: "Certificate issued", time: "After the audit", sub: "The certification body issues the certificate, with yearly surveillance audits." },
  ],
  processNote: "Timelines depend on your size, the standard and how ready your processes are. Certificates are issued by the certification body after its audit.",
  mistakesSection: { title: "Common ISO certification mistakes in Chennai", lead: "Avoid these and your certificate is both valid and useful." },
  mistakes: [
    { icon: "ShieldAlert", title: "Non-accredited certificates", problem: "Buying a cheap certificate from a body that isn't accredited, which clients and tenders may reject.", fix: "We work only with accredited certification bodies." },
    { icon: "Shuffle", title: "Wrong standard", problem: "Choosing a standard that doesn't match what your clients ask for.", fix: "We confirm which standard your clients or tenders need." },
    { icon: "FileWarning", title: "Paper-only systems", problem: "Documents that don't reflect how the business actually works.", fix: "We build documents around your real processes." },
    { icon: "Clock", title: "Missing surveillance audits", problem: "Skipping yearly audits, so the certificate lapses.", fix: "We remind you and help prepare for each surveillance audit." },
  ],
  costSection: {
    title: "ISO certification cost factors in Chennai",
    lead: "Cost depends on the standard, your size and number of sites. Quoted upfront.",
    cta: { title: "Get an exact quote for ISO certification", sub: "Tell us the standard, team size and sites, and we'll share a clear quote.", message: "Hi National Filings, can I get a quote for ISO certification?" },
  },
  costs: [
    { icon: "Award", label: "By standard", highlight: true, title: "Certification body fee", line: "Charged by the accredited certification body for the audit and certificate." },
    { icon: "Users", label: "By size", title: "Size and sites", line: "More employees and sites mean a longer audit." },
    { icon: "Headset", label: "Quoted upfront", title: "Consulting and documentation", line: "Gap analysis, documents and audit preparation." },
    { icon: "RefreshCw", label: "Yearly", title: "Surveillance audits", line: "Yearly audits that keep the certificate valid." },
  ],
  reasonsTitle: "Why choose National Filings for ISO certification in Chennai",
  reasons: sharedReasons,
  faqTitle: "ISO certification in Chennai: your questions",
  faqs: [
    { q: "What is ISO certification?", a: "ISO certification confirms that your business meets an international standard, such as ISO 9001 for quality management. It is issued by an independent certification body after auditing your system." },
    { q: "Which ISO certification do I need?", a: "Most businesses start with ISO 9001 (quality). Others include ISO 14001 (environment), ISO 45001 (health and safety), ISO 27001 (information security) and ISO 22000 (food safety). We help you choose based on your clients and industry." },
    { q: "How long does ISO certification take?", a: "It depends on your size, the standard and how ready your processes are. Smaller businesses with clear processes can move faster; we give you a realistic plan after the gap analysis." },
    { q: "How long is an ISO certificate valid?", a: "Typically three years, with surveillance audits every year to keep it valid, followed by recertification." },
    { q: "Who issues the ISO certificate?", a: "An accredited certification body issues it after its audit. National Filings prepares your business and coordinates with an accredited body; we don't issue certificates ourselves." },
    { q: "Is ISO certification mandatory?", a: "It is usually voluntary, but many clients, tenders and export buyers ask for it, which makes it valuable for winning work." },
    { q: "Can small businesses get ISO certified?", a: "Yes. ISO standards work for businesses of any size, and the system can be kept simple for a small team." },
    { q: "How can National Filings help with ISO certification in Chennai?", a: "We help choose the standard, run a gap analysis, prepare documents, get you audit-ready, coordinate with an accredited certification body and remind you of surveillance audits." },
  ],
  related: [
    { icon: "Factory", label: "MSME registration", href: link("L1") },
    { icon: "ShieldCheck", label: "Trademark registration", href: link("P5") },
    { icon: "Building2", label: "Company registration", href: link("P1") },
    { icon: "Globe", label: "IEC registration", href: link("L5") },
  ],
  final: { title: "Start your ISO certification in Chennai today", sub: "Talk with our experts and plan your ISO certification the right way.", message: "Hi National Filings, I'd like to get ISO certification. Please guide me." },
  catalogue: ["ISO 9001 certification", "ISO 14001 certification", "ISO 45001 certification", "ISO 27001 certification", "ISO 22000 certification"],
};
