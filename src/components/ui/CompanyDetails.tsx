import { Clock3, Globe2, Landmark, Mail, MapPin, Phone } from "lucide-react";
import { addressLine, mapsLink, site, telLink } from "@/lib/site";

/**
 * NAP (name, address, phone) + hours + status, from lib/site.ts only, so every page shows
 * exactly the same business details as the Google Business Profile.
 */
export function CompanyDetails({ className = "" }: { className?: string }) {
  const tel = telLink();
  const address = addressLine();
  const rows = [
    { icon: Landmark, label: "Business name", value: <span className="font-semibold text-ink">{site.name}</span> },
    address && {
      icon: MapPin,
      label: "Office",
      value: (
        <address className="not-italic">
          {address}
          <br />
          <a href={mapsLink()} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-deep underline-offset-4 hover:underline">
            Get directions
          </a>
        </address>
      ),
    },
    tel && { icon: Phone, label: "Phone", value: <a href={tel} className="font-semibold text-brand-deep underline-offset-4 hover:underline">{site.phone}</a> },
    site.email && { icon: Mail, label: "Email", value: <a href={`mailto:${site.email}`} className="font-semibold text-brand-deep underline-offset-4 hover:underline">{site.email}</a> },
    {
      icon: Clock3,
      label: "Business hours",
      value: (
        <ul className="!space-y-0.5">
          {site.hours.map((h) => (
            <li key={h.days} className="!pl-0 before:!hidden">
              {h.days}: {h.time}
            </li>
          ))}
        </ul>
      ),
    },
    {
      icon: Globe2,
      label: "Service area",
      value: "PAN India. We serve clients in every state, mostly online, from our office in Chennai.",
    },
  ].filter(Boolean) as { icon: typeof Phone; label: string; value: React.ReactNode }[];

  return (
    <div className={`card overflow-hidden !rounded-2xl ${className}`}>
      <dl className="divide-y divide-ink/5">
        {rows.map(({ icon: Icon, label, value }) => (
          // dt/dd must be direct children of the row div (valid definition list)
          <div key={label} className="px-4 py-3.5 text-[14px] leading-relaxed sm:px-5 sm:text-[15px]">
            <dt className="flex items-center gap-2.5 text-[11.5px] font-semibold uppercase tracking-wider text-ink-faint">
              <Icon className="h-4 w-4 shrink-0 text-brand-deep" strokeWidth={1.8} aria-hidden />
              {label}
            </dt>
            <dd className="mt-1 pl-[26px] text-ink-soft">{value}</dd>
          </div>
        ))}
      </dl>
      <p className="border-t border-ink/10 bg-cream-soft/60 px-4 py-3.5 text-[13px] leading-relaxed text-ink-muted sm:px-5">
        {site.name} is a private consultancy. It is not a government department and is not affiliated with, or endorsed by, any government
        body or portal. Portal names on this website only describe the filings we handle.
      </p>
    </div>
  );
}
