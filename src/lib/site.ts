/**
 * ONE source of truth for business details.
 * TODO(client): fill phone, whatsapp, email, address and the live domain.
 * Empty values are hidden on the page and left out of the schema.
 */
export const site = {
  name: "National Filings",
  tagline: "Innovative Accountant",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nationalfillings.co.in", // from the SEO architecture doc; public profiles use nationalfilings.co.in (confirm)
  description:
    "Company registration, GST, income tax, TDS, trademark, NGO and licence services for startups, SMEs, professionals and NGOs across India.",
  phone: "" as string, // display format, e.g. "+91 98xxx xxxxx"
  whatsapp: "" as string, // digits only with country code, e.g. "9198xxxxxxxx"
  email: "" as string,
  address: {
    street: "" as string,
    city: "" as string,
    region: "" as string,
    postalCode: "" as string,
    country: "IN",
  },
  socials: [] as { label: string; href: string }[], // real profiles only
  nav: [
    { label: "Services", href: "/#services" },
    { label: "Why us", href: "/#why-us" },
    { label: "How it works", href: "/#process" },
    { label: "FAQ", href: "/#faq" },
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
