import Image from "next/image";
import { Headset, MapPin, MapPinned, ReceiptIndianRupee } from "lucide-react";
import { serviceCategories } from "@/lib/services";
import { addressLine, site, telLink, whatsappLink } from "@/lib/site";

const trust = [
  { icon: MapPinned, label: "PAN India service" },
  { icon: ReceiptIndianRupee, label: "Fee shared upfront" },
  { icon: Headset, label: "Dedicated support" },
];

export function Footer() {
  const tel = telLink();
  const address = addressLine();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink/10 bg-white pb-[4.5rem] md:pb-0">
      <div className="shell grid gap-8 py-10 sm:py-14 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <Image src="/brand/logo-full.png" alt={`${site.name}, ${site.tagline}`} width={924} height={465} className="h-16 w-auto sm:h-20" />
          <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-ink-muted">
            Tax, registration and compliance services for startups, SMEs, professionals and NGOs across India.
          </p>
          {address && (
            <address className="mt-4 flex max-w-sm gap-2 text-[13.5px] not-italic leading-relaxed text-ink-soft">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-deep" aria-hidden />
              {address}
            </address>
          )}
          <ul className="mt-5 flex flex-wrap gap-2">
            {trust.map(({ icon: Icon, label }) => (
              <li key={label} className="chip gap-1.5 !py-1.5">
                <Icon className="h-3.5 w-3.5 text-brand-deep" strokeWidth={1.8} aria-hidden />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
          <div className="col-span-2">
            <p className="font-display text-[13px] font-bold uppercase tracking-wider text-ink">Services</p>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2.5 text-[14px] text-ink-muted">
              {serviceCategories.map((c) => (
                <li key={c.slug}>
                  <a href="/#services" className="hover:text-ink">
                    {c.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="font-display text-[13px] font-bold uppercase tracking-wider text-ink">Company</p>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2.5 text-[14px] text-ink-muted sm:grid-cols-1">
              <li>
                <a href="/chennai" className="hover:text-ink">
                  Chennai
                </a>
              </li>
              {site.nav.slice(1).map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-ink">
                    {n.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={whatsappLink("Hi National Filings, I have a question.")} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
                  WhatsApp
                </a>
              </li>
              {tel && (
                <li>
                  <a href={tel} className="hover:text-ink">
                    {site.phone}
                  </a>
                </li>
              )}
              {site.email && (
                <li>
                  <a href={`mailto:${site.email}`} className="break-all hover:text-ink">
                    {site.email}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-ink/10">
        <div className="shell flex flex-col gap-3 py-5 text-[12px] leading-relaxed text-ink-faint lg:flex-row lg:items-center lg:justify-between">
          <p>
            © {year} {site.name}. A private consultancy, not a government website or portal.
          </p>
          <ul className="flex gap-5">
            {site.legal.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="inline-flex min-h-[32px] items-center hover:text-ink">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
