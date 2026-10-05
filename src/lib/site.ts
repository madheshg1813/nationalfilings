/**
 * ONE source of truth for business details.
 * Phone and address copied from the Google Business Profile (keep them identical to it for local SEO).
 * TODO(client): fill whatsapp, email and the live domain.
 * Empty values are hidden on the page and left out of the schema.
 */
export const site = {
  name: "National Filings",
  tagline: "Innovative Accountant",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.nationalfilings.co.in", // confirmed by the client (single L). www is the main host: GoDaddy forwards the bare domain to it
  description:
    "Company registration, GST, income tax, TDS, trademark, NGO and licence services for startups, SMEs, professionals and NGOs across India.",
  phone: "+91 89391 01000" as string, // display format
  whatsapp: "918939101000" as string, // digits only with country code (same number as the phone, confirmed 2026-10-05)
  email: "" as string,
  address: {
    street: "Corporate Office No 27, 1st Floor, Pallavaram to Main Road, Karaima Nagar, Kundrathur" as string,
    city: "Chennai" as string,
    region: "Tamil Nadu" as string,
    postalCode: "600069" as string,
    country: "IN",
  },
  /** Opening hours as shown on the Google Business Profile (checked 2026-09-30). Keep identical to it. */
  hours: [
    { days: "Monday – Saturday", time: "9:00 am – 7:00 pm", dayCodes: ["Mo", "Tu", "We", "Th", "Fr", "Sa"], opens: "09:00", closes: "19:00" },
    { days: "Sunday", time: "Closed", dayCodes: ["Su"], opens: "", closes: "" },
  ],
  /** Public Google Business Profile (directions, reviews) */
  googleProfile: "https://share.google/zjLwaTCe8tTkQ7DkT",
  socials: [] as { label: string; href: string }[], // real profiles only
  nav: [
    { label: "Services", href: "/#services" },
    { label: "Why us", href: "/#why-us" },
    { label: "How it works", href: "/#process" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms and Conditions", href: "/terms-and-conditions" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "Security", href: "/security" },
  ],
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "Chennai", href: "/chennai" }, // hidden automatically while /chennai isn't in the build
    { label: "About us", href: "/about" },
    { label: "Contact", href: "/contact" },
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

/** Google Maps search link / keyless embed for the office address */
export function mapsLink(embed = false): string {
  const q = encodeURIComponent(`${site.name}, ${addressLine() ?? site.address.city}`);
  return embed ? `https://www.google.com/maps?q=${q}&output=embed` : `https://www.google.com/maps/search/?api=1&query=${q}`;
}

/** One-line postal address for display, or null if not set */
export function addressLine(): string | null {
  const a = site.address;
  if (!a.street || !a.city) return null;
  return `${a.street}, ${a.city}, ${a.region} ${a.postalCode}`;
}
