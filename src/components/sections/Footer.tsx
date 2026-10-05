import Image from "next/image";
import { Check, Clock3, MapPin, Phone } from "lucide-react";
import { serviceCategories } from "@/lib/services";
import { addressLine, mapsLink, site, telLink } from "@/lib/site";

// Subtle trust line (text ticks, not badges) so the footer never competes with page content
const trust = ["PAN India services", "Transparent pricing", "Dedicated support", "Secure document handling"];

const company = [
  { label: "Why us", href: "/#why-us" },
  { label: "How it works", href: "/#process" },
  { label: "FAQ", href: "/#faq" },
  { label: "Security", href: "/security" },
];

function Column({ title, links, className = "" }: { title: string; links: { label: string; href: string }[]; className?: string }) {
  return (
    <nav aria-label={title} className={className}>
      <p className="font-display text-[12.5px] font-bold uppercase tracking-wider text-ink">{title}</p>
      <ul className="mt-3 space-y-2 text-[13.5px] text-ink-muted sm:space-y-2.5 sm:text-[14px]">
        {links.map((l) => (
          <li key={l.href + l.label}>
            <a href={l.href} className="transition hover:text-ink">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  const tel = telLink();
  const address = addressLine();
  const year = new Date().getFullYear();
  const openHours = site.hours.find((h) => h.opens);
  const closed = site.hours.filter((h) => !h.opens).map((h) => h.days);

  return (
    <footer className="border-t border-ink/10 bg-white pb-[4.5rem] md:pb-0">
      <div className="shell grid gap-9 py-10 sm:py-14 lg:grid-cols-[1.35fr_2.4fr] lg:gap-12">
        {/* Brand + NAP (identical to the Google Business Profile) */}
        <div>
          <Image src="/brand/logo-full.png" alt={`${site.name}, ${site.tagline}`} width={924} height={465} className="h-14 w-auto sm:h-16" />
          <p className="mt-4 max-w-sm text-[13.5px] leading-relaxed text-ink-muted sm:text-[14px]">
            Tax, registration and compliance services for startups, SMEs, professionals and NGOs across India.
          </p>
          <ul className="mt-5 space-y-2.5 text-[13px] leading-relaxed text-ink-soft sm:text-[13.5px]">
            <li className="flex font-display text-[14px] font-bold text-ink">{site.name}</li>
            {address && (
              <li className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-deep" strokeWidth={1.8} aria-hidden />
                {/* Opens the Google Business Profile (reviews, hours, directions) */}
                <a
                  href={site.googleProfile || mapsLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 hover:text-ink hover:underline"
                  aria-label={`${address} (opens our Google Business Profile)`}
                >
                  <address className="not-italic">{address}</address>
                </a>
              </li>
            )}
            {tel && (
              <li className="flex gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-deep" strokeWidth={1.8} aria-hidden />
                <a href={tel} className="font-semibold hover:text-ink">
                  {site.phone}
                </a>
              </li>
            )}
            {openHours && (
              <li className="flex gap-2">
                <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-brand-deep" strokeWidth={1.8} aria-hidden />
                <span>
                  {openHours.days}, {openHours.time}
                  {closed.length > 0 && ` · ${closed.join(", ")} closed`}
                </span>
              </li>
            )}
          </ul>
          <ul className="mt-5 grid max-w-sm grid-cols-2 gap-x-3 gap-y-1.5 text-[12px] text-ink-muted sm:text-[12.5px]">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 shrink-0 text-brand-deep" strokeWidth={2.4} aria-hidden />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
          <Column title="Services" links={serviceCategories.map((c) => ({ label: c.name, href: "/#services" }))} />
          <Column title="Company" links={company} />
          <Column title="Legal" links={site.legal.filter((l) => l.href !== "/security")} />
          <Column title="Quick links" links={site.quickLinks.map((l) => ({ label: l.label, href: l.href }))} />
        </div>
      </div>

      <div className="border-t border-ink/10">
        <div className="shell flex flex-col gap-1.5 py-5 text-[12px] leading-relaxed text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>A private consultancy, not a government website or portal.</p>
        </div>
      </div>
    </footer>
  );
}
