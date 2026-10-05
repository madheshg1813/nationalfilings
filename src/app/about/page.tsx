import { ArrowRight, Star } from "lucide-react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { ContactCard } from "@/components/sections/ContactCard";
import { WhyUs } from "@/components/sections/WhyUs";
import { PlatformProfiles } from "@/components/sections/PlatformProfiles";
import { PageSchema } from "@/components/PageSchema";
import { definePage } from "@/lib/page";
import { LucideByName } from "@/components/ui/LucideByName";
import { Reveal } from "@/components/ui/Reveal";
import { serviceCategories } from "@/lib/services";
import { audiences, process } from "@/lib/home";
import { ProcessSteps } from "@/components/blocks/ProcessSteps";
import { SectionHeader } from "@/components/blocks/SectionHeader";
import { platforms } from "@/lib/proof";
import { getGoogleReviews } from "@/lib/google-reviews";
import { site } from "@/lib/site";

const page = definePage({
  path: "/about",
  title: "About National Filings | Registration & Tax Consultants, Chennai",
  description:
    "National Filings is a Chennai-based registration, tax and compliance firm helping startups, SMEs, professionals and NGOs across India since 2012.",
  headline: "Your filing team in Chennai, since 2012",
  type: "AboutPage",
  trail: [{ name: "About us", path: "/about" }],
});
export const metadata = page.metadata;

// Facts come from the public profiles in lib/proof.ts, so this page and the home page never disagree
const google = platforms.find((p) => p.id === "google");
const justdial = platforms.find((p) => p.id === "justdial");
const established = justdial?.stats.find((s) => /established/i.test(s.label))?.value;
const reviews = google?.stats.find((s) => /review/i.test(s.label))?.value;

const facts = [
  established && { value: established, label: "Established" },
  google?.rating && { value: `${google.rating}`, label: "Google rating", star: true },
  reviews && { value: reviews, label: "Google reviews" },
  { value: "PAN India", label: "Online service" },
].filter(Boolean) as { value: string; label: string; star?: boolean }[];

export default async function AboutPage() {
  const googleLive = await getGoogleReviews();

  return (
    <>
      <PageSchema page={page} />
      <Header />
      <main>
        <PageHero
          crumb="About us"
          path="/about"
          eyebrow="About us"
          title="Your filing team in Chennai, since 2012"
          accent="since 2012"
          intro="We handle the registrations, returns and compliance that come with running a business, so you can spend your time on the business itself."
        >
          <dl className="mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-4 sm:gap-4">
            {facts.map((f) => (
              <div key={f.label} className="card px-4 py-4 sm:px-5">
                <dt className="sr-only">{f.label}</dt>
                <dd className="flex items-center gap-1.5 font-display text-[1.5rem] font-extrabold tracking-tight text-ink sm:text-[1.75rem]">
                  {f.value}
                  {f.star && <Star className="h-5 w-5 fill-[#FBBC04] text-[#FBBC04]" aria-hidden />}
                </dd>
                <dd className="mt-0.5 text-[12.5px] font-medium text-ink-muted sm:text-[13px]">{f.label}</dd>
              </div>
            ))}
          </dl>
        </PageHero>

        <section className="section" aria-labelledby="story-title">
          <div className="shell grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <Reveal>
              <p className="eyebrow-text">Who we are</p>
              <h2 id="story-title" className="h2">
                One team for the whole compliance calendar
              </h2>
            </Reveal>
            <Reveal className="space-y-4 text-[15px] leading-relaxed text-ink-soft sm:text-[17px]" delay={0.05}>
              <p>
                {site.name} is a registration, tax and compliance firm based in Kundrathur, Chennai. We work with startups, small and growing
                businesses, professionals and NGOs, from the day they register to the returns and renewals that follow every year.
              </p>
              <p>
                Instead of juggling a different consultant for GST, income tax, company filings and licences, our clients have one team that
                knows their business. We tell you the documents and the fee upfront, prepare everything for your approval, file it, and follow
                up with the department until the work is done.
              </p>
              <p>
                Most of our work happens online, so clients anywhere in India can share documents and approve filings without visiting an
                office. When you’d rather meet in person, our Chennai office is open to you.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section border-t border-ink/10" aria-labelledby="handle-title">
          <div className="shell">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="eyebrow-text">What we handle</p>
              <h2 id="handle-title" className="h2">
                Registrations, tax and compliance, end to end
              </h2>
            </Reveal>
            <ul className="mt-7 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
              {serviceCategories.map((c, i) => (
                <Reveal as="li" key={c.slug} delay={(i % 5) * 0.04}>
                  <a href="/#services" className="card card-hover flex h-full flex-col gap-3 p-4 sm:p-5">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-tint text-brand-deep">
                      <LucideByName name={c.icon} className="h-5 w-5" />
                    </span>
                    <span className="font-display text-[14px] font-bold leading-snug text-ink sm:text-[15px]">{c.name}</span>
                  </a>
                </Reveal>
              ))}
            </ul>
            <div className="mt-7 text-center sm:mt-10">
              <a href="/#services" className="btn-ghost group">
                See all services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </section>

        <section className="section bg-cream-soft" aria-labelledby="industries-title">
          <div className="shell">
            <SectionHeader
              id="industries-title"
              eyebrow="Industries we serve"
              title="Who we work with"
              lead="From first-time founders to established companies and charities, across every state."
            />
            <ul className="mt-7 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-4">
              {audiences.map((a, i) => (
                <Reveal as="li" key={a.title} delay={(i % 4) * 0.04} className="h-full">
                  <div className="card flex h-full flex-col p-4 sm:p-5">
                    <LucideByName name={a.icon} className="h-5 w-5 text-ink sm:h-6 sm:w-6" />
                    <p className="mt-3 font-display text-[14px] font-bold leading-snug text-ink [text-wrap:balance] sm:text-[16px]">{a.title}</p>
                    <p className="mt-1 text-[12.5px] leading-snug text-ink-muted sm:text-[14px]">{a.useCase}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <WhyUs eyebrow="Why National Filings" title="Why clients choose us" id="why-us" className="bg-white" />

        <ProcessSteps
          id="how-we-work"
          className="border-t border-ink/10"
          eyebrow="How we work"
          title={process.title}
          steps={process.steps}
          note="After you share your documents, we take it from drafting to delivery and update you at every step."
        />
        <PlatformProfiles google={googleLive} />
        <div className="pt-4 sm:pt-8" />
        <ContactCard
          title="Let's talk about your filing"
          text="Tell us what you need and we'll confirm the documents, the fee and the next step."
          message="Hi National Filings, I'd like to talk to an expert."
          showForm
        />
      </main>
      <Footer />
    </>
  );
}
