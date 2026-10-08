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
import { PayrollComplianceIllustration } from "@/components/pf-esi/PayrollComplianceIllustration";
import {
  SchemeComparison,
  MonthlyGrid,
  DocumentsGuide,
  Mistakes,
  ReviewCta,
  IncludedGrid,
  RelatedPfEsiServices,
  ServiceCards,
  AudienceGrid,
  Benefits,
  Timeline,
  TimelineNote,
} from "@/components/pf-esi/Sections";
import { servicePage } from "@/lib/page";
import { getGoogleReviews } from "@/lib/google-reviews";
import { audienceCta, CALL_LABEL, comparisonCta, faqs, finalCta, hero, includedCta, messages, pillar, processCta, SERVICE, services } from "@/lib/pf-esi";

// P6 · PF & ESI pillar, built on the Company Registration pillar framework. Primary keyword: "pf esi consultant in chennai".
const page = servicePage(pillar.path, {
  title: "PF & ESI Consultant in Chennai | Registration & Returns",
  description: "PF and ESI consultant in Chennai for registration, monthly returns and employee compliance. On-time filing that keeps interest and penalties away.",
  headline: "PF & ESI Consultant in Chennai",
});
export const metadata = page.metadata;

// Adds the PF & ESI services to the page's Service node (same @id, merged by search engines)
const catalogue = {
  "@type": "Service",
  "@id": `${page.url}#service`,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "PF and ESI services in Chennai",
    itemListElement: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name } })),
  },
};

export default async function PfEsiConsultantPage() {
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
          visual={<PayrollComplianceIllustration />}
          proof={<HeroTrust google={google} />}
        />

        <TrustSection />

        <PillarSection
          id="services"
          eyebrow="PF & ESI services"
          title="PF and ESI services in Chennai"
          lead="From registration to monthly returns, onboarding and inspections, one team keeps your employee compliance on track."
        >
          <ServiceCards />
        </PillarSection>

        <PillarSection id="who-we-help" tone="cream" eyebrow="Who we help" title="Employers we help in Chennai">
          <AudienceGrid />
        </PillarSection>

        <PillarSection
          id="benefits"
          eyebrow="Why it matters"
          title="Benefits of a PF and ESI consultant in Chennai"
          cta={
            <InlineCta title={audienceCta.title} sub={audienceCta.sub} message={audienceCta.message} callLabel={CALL_LABEL} whatsappLabel="WhatsApp us" />
          }
        >
          <Benefits />
        </PillarSection>

        <PillarSection
          id="process"
          eyebrow="Process"
          title="How PF and ESI registration works in Chennai"
          lead="Six steps from first call to monthly compliance, with honest time estimates."
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
          title="Everything included in your PF and ESI compliance in Chennai"
          lead="From registration to every monthly return, our team handles each step."
          cta={<InlineCta title={includedCta.title} sub={includedCta.sub} message={hero.whatsapp} callLabel={CALL_LABEL} whatsappLabel="WhatsApp us" />}
        >
          <IncludedGrid />
        </PillarSection>

        <PillarSection
          id="documents"
          eyebrow="Documents"
          title="Documents required for PF and ESI in Chennai"
          lead="Registration needs a few business documents; monthly filing needs your salary sheet. Share them on WhatsApp and we handle the rest."
        >
          <DocumentsGuide />
        </PillarSection>

        <PillarSection
          id="compare"
          tone="cream"
          eyebrow="PF vs ESI"
          title="PF vs ESI coverage explained for Chennai employers"
          lead="Two separate schemes with different purposes, limits and contributions. Here is how they compare."
          cta={<InlineCta title={comparisonCta.title} sub={comparisonCta.sub} message={comparisonCta.message} callLabel={CALL_LABEL} />}
        >
          <SchemeComparison />
        </PillarSection>

        <PillarSection
          id="mistakes"
          eyebrow="Common compliance mistakes"
          title="Avoid PF and ESI mistakes that lead to penalties in Chennai"
          lead="Most interest, damages and notices come from preventable errors. We check every return against your payroll before filing."
          cta={<ReviewCta />}
        >
          <Mistakes />
        </PillarSection>

        <PillarSection
          id="monthly"
          tone="cream"
          eyebrow="Monthly compliance"
          title="Monthly PF & ESI compliance requirements in Chennai"
          lead="Monthly PF and ESI return filing is where most employers slip. These are the recurring tasks we handle every month."
        >
          <MonthlyGrid />
        </PillarSection>

        <Faq items={faqs} title="PF and ESI in Chennai: your questions" message={messages.final} className="border-t border-ink/[0.06]" />

        <PillarSection id="related" tone="cream" eyebrow="Related services" title="Other compliance services in Chennai">
          <RelatedPfEsiServices />
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
