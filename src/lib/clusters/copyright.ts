import type { LicencePageData } from "../licences/types";
import { heroTrustPoints } from "@/lib/proof";
import { clusterHref, licenceHref, pillarHref } from "./shared";

/**
 * P5-C1 · Copyright Registration (/chennai/copyright-registration-service).
 * Primary keyword: "copyright registration in chennai".
 *
 * Facts checked Oct 2026: copyright exists from creation, but registration with the Copyright Office gives a certificate that
 * courts treat as prima facie evidence; Form XIV filed online at copyright.gov.in with a statement of particulars; one
 * application per work; a diary number is issued after payment, then a mandatory 30-day window for objections before
 * examination; an NOC from the author is needed if the applicant isn't the author; artistic works used on goods (such as
 * logos) also need a search certificate from the Trade Marks Registry. Fees vary by type of work and timelines vary widely,
 * so neither is quoted.
 */

export const copyrightPage: LicencePageData = {
  id: "P5-C1",
  service: "Trademark Registration",
  meta: {
    title: "Copyright Registration in Chennai | Protect Your Work",
    description: "Copyright registration in Chennai for books, art, music, software and logos. Form XIV, documents and objections handled until the certificate arrives.",
  },
  hero: {
    headline: { line1: "Copyright Registration", line2Before: "in Chennai, ", accent: "Prove It's Yours" },
    sub: "Your work is yours the moment you create it. Copyright registration in Chennai gives you the certificate to prove it when someone copies it.",
    badges: heroTrustPoints,
    whatsapp: "Hi National Filings, I'd like a consultation about copyright registration in Chennai.",
  },
  illustration: {
    icon: "ShieldCheck",
    kicker: "Copyright Office",
    title: "Copyright Certificate",
    line: "Your Original Work",
    stamp: "Registered",
    chips: ["Form XIV filed", "Diary number", "No objections"],
    steps: ["Work", "Form XIV", "30 days", "Review", "Certificate"],
  },

  benefitsSection: {
    title: "Why register copyright in Chennai",
    lead: "Registration isn't compulsory, but it makes your ownership far easier to prove and enforce.",
    cta: {
      title: "Not sure your work can be registered?",
      sub: "Tell us what you've created. We'll tell you the category and what the application needs.",
      message: "Hi National Filings, can my work be registered for copyright?",
    },
  },
  benefits: [
    { icon: "FileCheck2", title: "Proof of ownership", line: "Courts treat the registration certificate as prima facie evidence." },
    { icon: "Gavel", title: "Easier enforcement", line: "Act against copying with a registered record behind you." },
    { icon: "CalendarCheck", title: "Dated public record", line: "Shows who created the work and when, on the official register." },
    { icon: "Handshake", title: "License and sell rights", line: "Publishers, labels and clients deal more easily with registered works." },
    { icon: "Coins", title: "Royalty income", line: "Clear ownership supports royalty and licence agreements." },
    { icon: "Laptop", title: "Protects software", line: "Source code can be registered as a literary work." },
    { icon: "BadgeCheck", title: "Credibility", line: "Shows buyers and partners the work is properly owned." },
    { icon: "ArrowLeftRight", title: "Cleaner transfers", line: "Assignments and licences rest on a registered title." },
  ],

  applicantsSection: {
    title: "Who should apply for copyright registration in Chennai",
    lead: "Anyone who creates original work, or owns the rights to it, can apply.",
  },
  applicants: [
    { icon: "FileText", title: "Authors and writers", line: "Books, articles, scripts and blogs." },
    { icon: "UserRound", title: "Artists and illustrators", line: "Paintings, drawings and digital art." },
    { icon: "Eye", title: "Photographers", line: "Original photographs and collections." },
    { icon: "Award", title: "Musicians and lyricists", line: "Compositions, lyrics and sound recordings." },
    { icon: "Laptop", title: "Software developers", line: "Source code and app interfaces." },
    { icon: "Globe", title: "Film and video creators", line: "Films, ads and online video content." },
    { icon: "FilePen", title: "Designers", line: "Logos, packaging art and brand artwork." },
    { icon: "GraduationCap", title: "Educators", line: "Course material, notes and training content." },
  ],

  opportunities: {
    eyebrow: "Creative work we protect",
    title: "Creators who register copyright with us",
    intro: "Copyright registration in Chennai protects every kind of original work, from novels and paintings to source code and music.",
    // Unsplash licence (free commercial use, no attribution required; credits kept for reference). Each photo is unique on the site.
    industries: [
      { icon: "FileText", title: "Authors and writers", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=90", alt: "Fountain pen writing on lined paper", credit: "Aaron Burden / Unsplash" },
      { icon: "UserRound", title: "Artists and illustrators", image: "https://images.unsplash.com/photo-1758522276815-122cb642000c?auto=format&fit=crop&w=1600&q=90", alt: "Artist painting on a canvas in a sunlit studio", credit: "Vitaly Gariev / Unsplash" },
      { icon: "Laptop", title: "Software developers", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=90", alt: "Laptop showing lines of code on a desk", credit: "Christopher Gower / Unsplash" },
      { icon: "Award", title: "Musicians and producers", image: "https://images.unsplash.com/photo-1531651008558-ed1740375b39?auto=format&fit=crop&w=1600&q=90", alt: "Studio condenser microphone beside a pop filter", credit: "Leo Wieling / Unsplash" },
    ],
  },

  highlights: {
    eyebrow: "Types of work",
    title: "What copyright registration covers",
    lead: "Each work is registered under its category, with one application per work.",
    items: [
      { icon: "FileText", label: "Literary", title: "Books and software", line: "Books, articles, scripts and computer programs.", highlight: true },
      { icon: "FilePen", label: "Artistic", title: "Art and logos", line: "Paintings, drawings, photographs and logo artwork." },
      { icon: "Award", label: "Musical", title: "Music and recordings", line: "Compositions, lyrics and sound recordings." },
      { icon: "Globe", label: "Cinematograph", title: "Films and videos", line: "Films, ads and other audiovisual works." },
    ],
  },

  documentsSection: {
    title: "Documents for copyright registration in Chennai",
    lead: "What you need depends on the type of work and whether you are its author.",
  },
  documents: [
    { icon: "UserRound", title: "About you", items: ["Name, address and nationality", "PAN and ID proof", "Business documents, if applying as a company"], hint: "Companies apply in their own name as owner." },
    { icon: "FileText", title: "About the work", items: ["Copies of the work", "Title and language", "Date and place of first publication, if published", "Source code extracts, for software"], hint: "One application per work." },
    { icon: "FileSignature", title: "Permissions", items: ["NOC from the author, if you aren't the author", "Assignment deed, if rights were transferred", "Trade Marks search certificate, for logos used on goods"], hint: "We prepare the NOC and power of attorney for signature." },
  ],
  documentsNote: {
    title: "Start with a copy of your work",
    sub: "Send it on WhatsApp with who created it. We'll confirm the category and list what else is needed.",
    message: "Hi National Filings, I'd like to register copyright for my work. Here are the details.",
  },

  processSection: {
    title: "Copyright registration process in Chennai",
    lead: "Five steps from your work to the registration certificate.",
    cta: {
      title: "Start your copyright registration",
      sub: "Share your work and authorship details. We'll prepare Form XIV and the supporting documents.",
      message: "Hi National Filings, I'd like to start copyright registration in Chennai.",
    },
  },
  steps: [
    { title: "Work and category", time: "Day 1", sub: "We confirm the type of work, owner and authorship." },
    { title: "Form XIV filed", time: "1-2 days", sub: "Application, statement of particulars and copies filed online." },
    { title: "Diary number", time: "On payment", sub: "Your application is logged and the 30-day objection window begins." },
    { title: "Examination", time: "After 30 days", sub: "The Copyright Office reviews the application and may raise discrepancies." },
    { title: "Registration", time: "On approval", sub: "The work is entered in the Register of Copyrights and the extract issued." },
  ],
  processNote: "Timelines vary and can run to several months, especially if an objection or discrepancy is raised. We track and answer each one.",

  mistakesSection: {
    title: "Copyright application mistakes to avoid",
    lead: "Most delays come from missing permissions or the wrong category.",
  },
  mistakes: [
    { icon: "FileSignature", title: "Missing author NOC", problem: "Applying for work created by an employee or freelancer without their consent.", fix: "We prepare the NOC or check the assignment first." },
    { icon: "ListTree", title: "Wrong category", problem: "Filing a logo or software under the wrong type of work.", fix: "We confirm the right category before filing." },
    { icon: "Layers", title: "Several works in one form", problem: "Bundling separate works into one application.", fix: "We file one application per work, as the rules require." },
    { icon: "SearchCheck", title: "No search for logos", problem: "Logo artwork used on goods needs a Trade Marks search certificate.", fix: "We obtain it before filing the artistic work." },
  ],

  costSection: {
    title: "Copyright registration cost factors in Chennai",
    lead: "The government fee depends on the type of work. We quote the full cost before filing.",
    cta: {
      title: "Get a quote for copyright registration",
      sub: "Tell us what you want to register. We'll confirm the government fee and our fee.",
      message: "Hi National Filings, can I get a quote for copyright registration in Chennai?",
    },
  },
  costs: [
    { icon: "Landmark", label: "Per work", title: "Government fee", line: "Set by the Copyright Office for each type of work.", highlight: true },
    { icon: "Headset", label: "Quoted upfront", title: "Professional fee", line: "Category check, Form XIV, documents and follow-up." },
    { icon: "SearchCheck", label: "For logos", title: "Search certificate", line: "From the Trade Marks Registry, for artistic works used on goods." },
    { icon: "FilePen", label: "If needed", title: "NOC and assignment", line: "Drafting permissions from authors or earlier owners." },
  ],

  compliance: {
    eyebrow: "After registration",
    title: "Making the most of your copyright",
    lead: "Registration is a strong start. These steps keep your rights useful.",
    items: [
      { icon: "FileCheck2", label: "Keep safely", title: "Registration extract", line: "Your proof of ownership for licences, disputes and sales.", highlight: true },
      { icon: "BadgeCheck", label: "On every copy", title: "Copyright notice", line: "Show © with your name and the year on published work." },
      { icon: "FileSignature", label: "In writing", title: "Licences and assignments", line: "Transfer or license rights only through written agreements." },
      { icon: "Eye", label: "Ongoing", title: "Watch for copying", line: "Act early against copies, with the certificate as evidence." },
    ],
  },
  decision: {
    eyebrow: "Copyright or trademark?",
    title: "Which protection does your work need?",
    lead: "They protect different things, and a logo often needs both.",
    items: [
      { icon: "FilePen", label: "Copyright", title: "The creative work", line: "Protects the artwork, text, code or music itself.", highlight: true },
      { icon: "Stamp", label: "Trademark", title: "The brand in trade", line: "Protects a name or logo used to identify your goods or services." },
      { icon: "Layers", label: "Both", title: "Logos", line: "Copyright protects the artwork; trademark protects its use as your brand." },
      { icon: "CalendarClock", label: "Duration", title: "How long it lasts", line: "Usually the author's life plus 60 years. Trademarks are renewed every 10 years." },
    ],
  },

  reasonsTitle: "Why choose National Filings for copyright registration in Chennai",
  reasons: [
    { icon: "ListTree", title: "Right category, first time", line: "Your work filed under the correct type." },
    { icon: "FileSignature", title: "Permissions sorted", line: "NOCs and assignments prepared before filing." },
    { icon: "SearchCheck", title: "Logo searches handled", line: "Trade Marks search certificates arranged when needed." },
    { icon: "MessageCircle", title: "Objections answered", line: "Discrepancies and hearings handled for you." },
    { icon: "ShieldCheck", title: "Trademark too", line: "Brand protection for the same logo, from one team." },
    { icon: "ReceiptText", title: "Clear fees", line: "Government fee and our fee shown separately." },
  ],

  faqTitle: "Copyright registration in Chennai: your questions",
  faqs: [
    { q: "Is copyright registration compulsory in India?", a: "No. Copyright exists as soon as an original work is created. Registration gives you a certificate that courts treat as prima facie evidence of ownership, which makes it much easier to act against copying." },
    { q: "What can be registered for copyright?", a: "Literary works including software, artistic works such as paintings, photographs and logo artwork, musical works, sound recordings, and films. Each work needs its own application." },
    { q: "How long does copyright registration in Chennai take?", a: "After filing, there is a mandatory 30-day period for objections, followed by examination. The whole process often takes several months, and longer if an objection or discrepancy is raised." },
    { q: "Can I register a logo for copyright?", a: "Yes, as an artistic work. If the logo is used on goods, you also need a search certificate from the Trade Marks Registry. Most businesses also register the logo as a trademark." },
    { q: "Can a company own copyright?", a: "Yes. Work made by employees in the course of employment generally belongs to the employer, and other works can be assigned to a company in writing. The company then applies as owner, with the author's NOC where needed." },
    { q: "How long does copyright last?", a: "For literary, artistic, musical and dramatic works, generally the author's lifetime plus 60 years. Films and sound recordings are protected for 60 years from publication." },
    { q: "What is the difference between copyright and trademark?", a: "Copyright protects the creative work itself. A trademark protects a name or logo used to identify your goods or services in trade. A logo can be protected by both." },
    { q: "How much does copyright registration cost?", a: "The government fee depends on the type of work, plus our professional fee and any search certificate needed for logos. We confirm the full cost before filing." },
  ],

  related: [
    { icon: "ShieldCheck", label: "Trademark registration", href: pillarHref("P5") },
    { icon: "Building2", label: "Company registration", href: pillarHref("P1") },
    { icon: "Building2", label: "Private limited registration", href: clusterHref("P1-C6") },
    { icon: "Factory", label: "MSME registration", href: licenceHref("L1") },
    { icon: "ReceiptIndianRupee", label: "GST consultant", href: pillarHref("P2") },
    { icon: "Signature", label: "Digital signature certificate", href: licenceHref("L6") },
    { icon: "Award", label: "ISO certification", href: licenceHref("L7") },
    { icon: "IndianRupee", label: "Income tax consultant", href: pillarHref("P3") },
  ],
  relatedTitle: "Related brand and business services in Chennai",

  final: {
    title: "Register your copyright in Chennai",
    sub: "Tell us about your work. We'll confirm the category, prepare the application and see it through to registration.",
    message: "Hi National Filings, I'd like to register copyright for my work in Chennai.",
  },
  catalogue: ["Copyright registration", "Software copyright registration", "Artistic work and logo copyright"],
};
