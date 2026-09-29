/**
 * ONE source of truth for business details.
 * Phone and address copied from the Google Business Profile (keep them identical to it for local SEO).
 * TODO(client): fill whatsapp, email and the live domain.
 * Empty values are hidden on the page and left out of the schema.
 */
export const site = {
  name: "National Filings",
  tagline: "Innovative Accountant",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nationalfillings.co.in", // from the SEO architecture doc; public profiles use nationalfilings.co.in (confirm)
  description:
    "Company registration, GST, income tax, TDS, trademark, NGO and licence services for startups, SMEs, professionals and NGOs across India.",
  phone: "+91 89391 01000" as string, // display format
  whatsapp: "" as string, // digits only with country code, e.g. "9198xxxxxxxx"
  email: "" as string,
  address: {
    street: "Corporate Office No 27, 1st Floor, Pallavaram to Main Road, Karaima Nagar, Kundrathur" as string,
    city: "Chennai" as string,
    region: "Tamil Nadu" as string,
    postalCode: "600069" as string,
    country: "IN",
  },
  socials: [] as { label: string; href: string }[], // real profiles only
  nav: [
    { label: "Services", href: "/#services" },
    { label: "Why us", href: "/#why-us" },
    { label: "How it works", href: "/#process" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
} as const;

/** WhatsApp chat link with a pre-filled message. Works without a number (opens contact picker). */
export function whatsappLink(message: string): string {
  const text = encodeURIComponent(message);
  return site.whatsapp ? `https://wa.me/${site.whatsapp}?text=${text}` : `https://wa.me/?text=${text}`;
}

export function telLink(): string | null {
  return site.phone ? `tel:${site.phone.replace(/[^\d+]/g, "")}` : null;
}

/** One-line postal address for display, or null if not set */
export function addressLine(): string | null {
  const a = site.address;
  if (!a.street || !a.city) return null;
  return `${a.street}, ${a.city}, ${a.region} ${a.postalCode}`;
}
