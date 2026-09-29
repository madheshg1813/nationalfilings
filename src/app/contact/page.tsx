import type { Metadata } from "next";
import { ChevronRight, MapPin, Phone, Star } from "lucide-react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { ContactForm } from "@/components/contact/ContactForm";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { JsonLd } from "@/components/JsonLd";
import { serviceOptions } from "@/lib/contact";
import { addressLine, site, telLink, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Contact National Filings | GST, Tax & Registration Experts" },
  description:
    "Call, WhatsApp or send us your requirement and a National Filings expert will call you back with the documents, fee and next steps.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact National Filings",
    description: "Tell us what you need to file and we'll call you back with the documents, fee and next steps.",
    url: "/contact",
    images: [{ url: "/brand/logo-full.png", width: 924, height: 465, alt: site.name }],
  },
};

const GOOGLE_PROFILE = "https://share.google/zjLwaTCe8tTkQ7DkT";

const steps = [
  { title: "We call you back", text: "An expert calls you, usually within working hours on the same day." },
  { title: "You get a clear quote", text: "We confirm the documents you need, the fee and the timeline." },
  { title: "We file and follow up", text: "We prepare, file and track your application until it's approved." },
];

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const { service } = await searchParams;
  const preset = service && serviceOptions.includes(service) ? service : undefined;
  const tel = telLink();
  const address = addressLine();

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${site.url}/contact#webpage`,
        url: `${site.url}/contact`,
        name: "Contact National Filings",
        isPartOf: { "@id": `${site.url}/#website` },
        about: { "@id": `${site.url}/#organization` },
        breadcrumb: { "@id": `${site.url}/contact#breadcrumb` },
        inLanguage: "en-IN",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${site.url}/contact#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
          { "@type": "ListItem", position: 2, name: "Contact", item: `${site.url}/contact` },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={graph} />
      <Header />
      <main>
        <section className="relative overflow-hidden bg-white" aria-labelledby="contact-title">
          <div className="grid-backdrop pointer-events-none absolute inset-0" aria-hidden />
          <svg aria-hidden viewBox="0 0 400 400" className="pointer-events-none absolute -right-28 -top-20 hidden h-96 w-96 opacity-[0.35] sm:block">
            <path d="M60 170a140 140 0 0 1 280 0h-56a84 84 0 0 0-168 0z" fill="#C9EE7C" />
            <path d="M60 230a140 140 0 0 0 280 0h-56a84 84 0 0 1-168 0z" fill="#E6F5F5" />
          </svg>

          <div className="shell relative pb-12 pt-6 sm:pb-20 sm:pt-10">
            <nav aria-label="Breadcrumb" className="text-[12.5px] text-ink-muted">
              <ol className="flex items-center gap-1">
                <li>
                  <a href="/" className="hover:text-ink">
                    Home
                  </a>
                </li>
                <li aria-hidden>
                  <ChevronRight className="h-3.5 w-3.5" />
                </li>
                <li aria-current="page" className="font-medium text-ink-soft">
                  Contact
                </li>
              </ol>
            </nav>

            {/* Phones: intro, form, then details. Desktop: intro and details on the left, form on the right. */}
            <div className="mt-5 grid gap-8 sm:mt-8 lg:grid-cols-[1fr_1.1fr] lg:grid-rows-[auto_1fr] lg:gap-x-14 lg:gap-y-0">
              <div>
                <h1 id="contact-title">
                  <span className="eyebrow-text block">Contact us</span>
                  <span className="block font-display text-[2.2rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink sm:text-[3rem] lg:text-[3.4rem]">
                    Talk to a filing <span className="accent-mark">expert</span>
                  </span>
                </h1>
                <p className="lead mt-4 max-w-xl sm:mt-5">
                  Tell us what you need and we&apos;ll call you back with the documents, the fee and the next step. No obligation.
                </p>

                <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">
                  <a href={whatsappLink("Hi National Filings, I'd like to talk to an expert.")} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                    <WhatsAppIcon className="h-4 w-4" />
                    WhatsApp us
                  </a>
                  {tel && (
                    <a href={tel} className="btn-ghost">
                      <Phone className="h-4 w-4" />
                      {site.phone}
                    </a>
                  )}
                </div>
              </div>

              <div id="enquiry" className="card relative scroll-mt-24 p-5 shadow-lift sm:p-8 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-start">
                <h2 className="font-display text-[1.3rem] font-extrabold tracking-tight text-ink sm:text-[1.6rem]">Request a call back</h2>
                <p className="mb-6 mt-1 text-[14px] text-ink-muted">Takes under a minute. We reply during working hours.</p>
                <ContactForm defaultService={preset} page="/contact" />
              </div>

              <div className="lg:col-start-1">
                <ol className="space-y-4 lg:mt-10">
                  {steps.map((s, i) => (
                    <li key={s.title} className="flex gap-3.5">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-tint text-[13px] font-bold text-brand-deep">{i + 1}</span>
                      <div>
                        <p className="font-display text-[15px] font-bold text-ink">{s.title}</p>
                        <p className="mt-0.5 text-[14px] leading-relaxed text-ink-muted">{s.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                {address && (
                  <div className="card mt-8 flex gap-3.5 p-5 sm:mt-10">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-tint text-brand-deep">
                      <MapPin className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="font-display text-[15px] font-bold text-ink">Visit our office</p>
                      <address className="mt-1 text-[14px] not-italic leading-relaxed text-ink-soft">{address}</address>
                      <a
                        href={GOOGLE_PROFILE}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-brand-deep underline-offset-4 hover:underline"
                      >
                        <Star className="h-3.5 w-3.5 fill-current" aria-hidden />
                        Directions and reviews on Google
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
