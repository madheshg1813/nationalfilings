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
import { NgoIllustration } from "@/components/ngo/NgoIllustration";
import {
  StructureComparison,
  ComplianceGrid,
  DocumentsGuide,
  Mistakes,
  ReviewCta,
  IncludedGrid,
  RelatedNgoServices,
  ServiceCards,
  AudienceGrid,
  Benefits,
  Timeline,
  TimelineNote,
} from "@/components/ngo/Sections";
import { servicePage } from "@/lib/page";
import { getGoogleReviews } from "@/lib/google-reviews";
import { audienceCta, CALL_LABEL, comparisonCta, faqs, finalCta, hero, includedCta, messages, pillar, processCta, SERVICE, services } from "@/lib/ngo";

// P4 · NGO Registration pillar, built on the Company Registration pillar framework. Primary keyword: "ngo registration in chennai".
const page = servicePage(pillar.path, {
  title: "NGO Registration in Chennai | Trust, Society & Section 8 | National Filings",
  description:
    "NGO registration in Chennai for trusts, societies and Section 8 companies, with 12A, 80G and CSR registration support. Expert guidance from structure to compliance.",
  headline: "NGO Registration in Chennai",
});
export const metadata = page.metadata;

// Adds the NGO services to the page's Service node (same @id, merged by search engines)
const catalogue = {
  "@type": "Service",
  "@id": `${page.url}#service`,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "NGO registration services in Chennai",
    itemListElement: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name } })),
  },
};

export default async function NgoRegistrationPage() {
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
          visual={<NgoIllustration />}
          proof={<HeroTrust google={google} />}
        />

        <TrustSection />

        <PillarSection
          id="services"
          eyebrow="NGO services"
          title="NGO registration services in Chennai"
          lead="From choosing a structure to 12A, 80G and yearly filings, one team handles your NGO's registration end to end."
        >
          <ServiceCards />
        </PillarSection>

        <PillarSection id="who-we-help" tone="cream" eyebrow="Who we help" title="NGOs we help register in Chennai">
          <AudienceGrid />
        </PillarSection>

        <PillarSection
          id="benefits"
          eyebrow="Why register"
          title="Benefits of NGO registration in Chennai"
          cta={
            <InlineCta title={audienceCta.title} sub={audienceCta.sub} message={audienceCta.message} callLabel={CALL_LABEL} whatsappLabel="WhatsApp us" />
          }
        >
          <Benefits />
        </PillarSection>

        <PillarSection
          id="process"
          eyebrow="Process"
          title="How to register an NGO in Chennai?"
          lead="Six steps from first call to registration certificate, with honest time estimates."
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
          title="Everything included in your NGO registration in Chennai"
          lead="From choosing the structure to your registration certificate, our team handles every step."
          cta={<InlineCta title={includedCta.title} sub={includedCta.sub} message={hero.whatsapp} callLabel={CALL_LABEL} whatsappLabel="WhatsApp us" />}
        >
          <IncludedGrid />
        </PillarSection>

        <PillarSection
          id="documents"
          eyebrow="Documents"
          title="Documents required for NGO registration in Chennai"
          lead="Most NGOs can start with a few basic documents. Share them on WhatsApp and we handle the rest."
        >
          <DocumentsGuide />
        </PillarSection>

        <PillarSection
          id="compare"
          tone="cream"
          eyebrow="Compare structures"
          title="Trust vs Society vs Section 8 Company in Chennai"
          lead="The main decision before NGO registration. Here is how the three structures differ."
          cta={<InlineCta title={comparisonCta.title} sub={comparisonCta.sub} message={comparisonCta.message} callLabel={CALL_LABEL} />}
        >
          <StructureComparison />
        </PillarSection>

        <PillarSection
          id="mistakes"
          eyebrow="Common NGO registration mistakes"
          title="Avoid mistakes that delay NGO registration in Chennai"
          lead="Most delays and refusals come from preventable errors. Our team reviews every application before it is filed."
          cta={<ReviewCta />}
        >
          <Mistakes />
        </PillarSection>

        <PillarSection
          id="compliance"
          tone="cream"
          eyebrow="After registration"
          title="NGO compliance after registration in Chennai"
          lead="Registration is the start. These filings and renewals keep your NGO's status and tax benefits intact."
        >
          <ComplianceGrid />
        </PillarSection>

        <Faq items={faqs} title="NGO registration in Chennai: your questions" message={messages.final} className="border-t border-ink/[0.06]" />

        <PillarSection id="related" tone="cream" eyebrow="Related services" title="Other NGO services in Chennai">
          <RelatedNgoServices />
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
