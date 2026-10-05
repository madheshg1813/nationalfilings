import { Phone, Star } from "lucide-react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { ContactForm } from "@/components/contact/ContactForm";
import { MapEmbed } from "@/components/contact/MapEmbed";
import { CompanyDetails } from "@/components/ui/CompanyDetails";
import { CtaBand } from "@/components/blocks/CtaBand";
import { SectionHeader } from "@/components/blocks/SectionHeader";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { PageSchema } from "@/components/PageSchema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { definePage } from "@/lib/page";
import { addressLine, mapsLink, site, telLink, whatsappLink } from "@/lib/site";

const page = definePage({
  path: "/contact",
  title: "Contact National Filings | GST, Tax & Registration Experts",
  description:
    "Call, WhatsApp or send us your requirement and a National Filings expert will call you back with the documents, fee and next steps.",
  headline: "Talk to a filing expert",
  type: "ContactPage",
  trail: [{ name: "Contact", path: "/contact" }],
});
export const metadata = page.metadata;

const steps = [
  { title: "We call you back", text: "An expert calls you, usually within working hours on the same day." },
  { title: "You get a clear quote", text: "We confirm the documents you need, the fee and the timeline." },
  { title: "We file and follow up", text: "We prepare, file and track your application until it's approved." },
];

export default function ContactPage() {
  const tel = telLink();
  const address = addressLine();


  return (
    <>
      <PageSchema page={page} />
      <Header />
      <main>
        <section className="relative overflow-hidden bg-white" aria-labelledby="contact-title">
          <div className="grid-backdrop pointer-events-none absolute inset-0" aria-hidden />
          <svg aria-hidden viewBox="0 0 400 400" className="pointer-events-none absolute -right-28 -top-20 hidden h-96 w-96 opacity-[0.35] sm:block">
            <path d="M60 170a140 140 0 0 1 280 0h-56a84 84 0 0 0-168 0z" fill="#C9EE7C" />
            <path d="M60 230a140 140 0 0 0 280 0h-56a84 84 0 0 1-168 0z" fill="#E6F5F5" />
          </svg>

          <div className="shell relative pb-12 pt-6 sm:pb-20 sm:pt-10">
            <Breadcrumbs trail={[{ name: "Contact", path: "/contact" }]} />

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
                <ContactForm page="/contact" />
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

              </div>
            </div>
          </div>
        </section>

        <section id="visit" className="section scroll-mt-16 border-t border-ink/10 bg-cream-soft/60" aria-labelledby="visit-title">
          <div className="shell">
            <SectionHeader
              id="visit-title"
              eyebrow="Visit or call us"
              title="Our Chennai office"
              lead="Walk in during business hours, or call before you come so the right consultant is free to meet you."
            />
            <div className="mx-auto mt-7 grid max-w-5xl gap-4 sm:mt-12 lg:grid-cols-[1fr_1.1fr] lg:gap-6">
              <CompanyDetails />
              <MapEmbed embedUrl={mapsLink(true)} linkUrl={site.googleProfile || mapsLink()} label={address ?? site.address.city} />
            </div>
            <p className="mt-5 text-center text-[13px] text-ink-muted sm:mt-6">
              <a href={site.googleProfile} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-brand-deep underline-offset-4 hover:underline">
                <Star className="h-3.5 w-3.5 fill-current" aria-hidden />
                See our reviews and directions on Google
              </a>
            </p>
          </div>
        </section>

        <CtaBand
          title="Prefer to talk it through?"
          sub="Call or message us with what you need to file. We'll tell you the documents, the fee and the timeline."
          primary={tel ? { label: `Call ${site.phone}`, shortLabel: "Call us", href: tel, icon: "phone" } : { label: "WhatsApp us", href: whatsappLink("Hi National Filings, I'd like to talk to an expert."), external: true, icon: "whatsapp" }}
          secondary={{ label: "WhatsApp us", shortLabel: "WhatsApp", href: whatsappLink("Hi National Filings, I'd like to talk to an expert."), external: true, icon: "whatsapp" }}
        />
      </main>
      <Footer />
    </>
  );
}
