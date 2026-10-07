import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { MobileCtaBar } from "@/components/sections/MobileCtaBar";
import { Faq } from "@/components/sections/Faq";
import { PageSchema } from "@/components/PageSchema";
import { PillarHero } from "@/components/blocks/PillarHero";
import { PillarSection } from "@/components/blocks/PillarSection";
import { InlineCta } from "@/components/blocks/InlineCta";
import { HeroTrust } from "@/components/blocks/HeroTrust";
import { TrustSection } from "@/components/blocks/TrustSection";
import { LeadCta } from "@/components/blocks/LeadCta";
import { TaxReturnIllustration } from "@/components/income-tax/TaxReturnIllustration";
import {
  Packages,
  DocumentsGuide,
  Mistakes,
  ReviewCta,
  IncludedGrid,
  RelatedTaxServices,
  ServiceCards,
  AudienceGrid,
  Benefits,
  Timeline,
  TimelineNote,
} from "@/components/income-tax/Sections";
import { servicePage } from "@/lib/page";
import { getGoogleReviews } from "@/lib/google-reviews";
import { audienceCta, CALL_LABEL, faqs, finalCta, hero, includedCta, messages, packagesCta, pillar, processCta, SERVICE, services } from "@/lib/income-tax";

// P3 · Income Tax pillar, built on the Company Registration pillar framework. Primary keyword: "income tax consultant in chennai".
const page = servicePage(pillar.path, {
  title: "Income Tax Consultant in Chennai | ITR Filing | National Filings",
  description:
    "Income tax consultant in Chennai for ITR filing, tax planning, capital gains, NRI tax and notice replies. Salaried, business and professional returns, reviewed by experts.",
  headline: "Income Tax Consultant in Chennai",
});
export const metadata = page.metadata;

// Adds the tax services to the page's Service node (same @id, merged by search engines)
const catalogue = {
  "@type": "Service",
  "@id": `${page.url}#service`,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Income tax services in Chennai",
    itemListElement: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name } })),
  },
};

export default async function IncomeTaxConsultantPage() {
  const google = await getGoogleReviews();
  return (
    <>
      <PageSchema page={page} extra={[catalogue]} />
      <Header />
      <main>
        <PillarHero
          trail={page.trail!}
          headline={hero.headline}
          sub={hero.sub}
          badges={hero.badges}
          whatsapp={hero.whatsapp}
          callLabel={CALL_LABEL}
          visual={<TaxReturnIllustration />}
          proof={<HeroTrust google={google} />}
        />

        <TrustSection />

        <PillarSection
          id="services"
          eyebrow="Our services"
          title="Income tax services in Chennai"
          lead="From your yearly return to notices and capital gains, one team handles your income tax end to end."
        >
          <ServiceCards />
        </PillarSection>

        <PillarSection id="who-we-help" tone="cream" eyebrow="Who we help" title="Tax consultant in Chennai for every kind of taxpayer">
          <AudienceGrid />
        </PillarSection>

        <PillarSection
          id="benefits"
          eyebrow="Why use a tax consultant"
          title="Benefits of an income tax consultant in Chennai"
          cta={
            <InlineCta
              title={audienceCta.title}
              sub={audienceCta.sub}
              message={audienceCta.message}
              callLabel={CALL_LABEL}
              whatsappLabel="WhatsApp us"
            />
          }
        >
          <Benefits />
        </PillarSection>

        <PillarSection
          id="process"
          eyebrow="Process"
          title="How income tax filing works in Chennai"
          lead="Six steps from first call to filed return, with honest time estimates."
          cta={
            <>
              <InlineCta
                title={processCta.title}
                sub={processCta.sub}
                ticks={processCta.ticks}
                message={processCta.message}
                callLabel={CALL_LABEL}
                whatsappLabel="WhatsApp consultation"
              />
              <TimelineNote />
            </>
          }
        >
          <Timeline />
        </PillarSection>

        <PillarSection
          id="included"
          tone="cream"
          eyebrow="What's included"
          title="Everything included in your income tax filing in Chennai"
          lead="From reviewing your income to the filed acknowledgement, our team handles every step."
          cta={<InlineCta title={includedCta.title} sub={includedCta.sub} message={hero.whatsapp} callLabel={CALL_LABEL} whatsappLabel="WhatsApp us" />}
        >
          <IncludedGrid />
        </PillarSection>

        <PillarSection
          id="documents"
          eyebrow="Documents"
          title="Documents required for ITR filing in Chennai"
          lead="Most returns need only a few documents. Share them on WhatsApp and we handle the rest."
        >
          <DocumentsGuide />
        </PillarSection>

        <PillarSection
          id="cost"
          tone="cream"
          eyebrow="Packages"
          title="Income tax filing packages in Chennai"
          lead="Choose the package that matches how you earn."
          cta={<InlineCta title={packagesCta.title} sub={packagesCta.sub} message={packagesCta.message} callLabel={CALL_LABEL} />}
        >
          <Packages />
        </PillarSection>

        <PillarSection
          id="mistakes"
          eyebrow="Common tax filing mistakes"
          title="Avoid mistakes that lead to income tax notices in Chennai"
          lead="Most notices and refund delays come from preventable filing errors. A tax expert reviews every return before it is submitted."
          cta={<ReviewCta />}
        >
          <Mistakes />
        </PillarSection>

        <Faq items={faqs} title="Income tax filing in Chennai: your questions" message={messages.final} className="border-t border-ink/[0.06]" />

        <PillarSection id="related" tone="cream" eyebrow="Related services" title="Other tax services in Chennai">
          <RelatedTaxServices />
        </PillarSection>

        <LeadCta
          title={finalCta.title}
          sub={finalCta.sub}
          message={messages.final}
          service={SERVICE}
          page={pillar.path}
          google={google}
          callLabel={CALL_LABEL}
        />
      </main>
      <Footer />
      <MobileCtaBar callLabel={CALL_LABEL} message={hero.whatsapp} />
    </>
  );
}
