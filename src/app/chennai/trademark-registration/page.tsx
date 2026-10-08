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
import { TrademarkIllustration } from "@/components/trademark/TrademarkIllustration";
import {
  BrandComparison,
  RecommendationCta,
  ClassGuide,
  ObjectionGuide,
  DocumentsGuide,
  Mistakes,
  ReviewCta,
  IncludedGrid,
  RelatedTrademarkServices,
  ServiceCards,
  AudienceGrid,
  Benefits,
  Timeline,
  TimelineNote,
} from "@/components/trademark/Sections";
import { servicePage } from "@/lib/page";
import { getGoogleReviews } from "@/lib/google-reviews";
import { audienceCta, CALL_LABEL, classCta, faqs, finalCta, hero, includedCta, messages, pillar, processCta, SERVICE, services } from "@/lib/trademark";

// P5 · Trademark pillar, built on the Company Registration pillar framework. Primary keyword: "trademark registration in chennai".
const page = servicePage(pillar.path, {
  title: "Trademark Registration in Chennai | Protect Your Brand Name",
  description: "Trademark registration in Chennai for brand names, logos and slogans. Search, filing, objection replies and renewals handled by IP consultants.",
  headline: "Trademark Registration in Chennai",
});
export const metadata = page.metadata;

// Adds the trademark services to the page's Service node (same @id, merged by search engines)
const catalogue = {
  "@type": "Service",
  "@id": `${page.url}#service`,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Trademark services in Chennai",
    itemListElement: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name } })),
  },
};

export default async function TrademarkRegistrationPage() {
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
          visual={<TrademarkIllustration />}
          proof={<HeroTrust google={google} />}
        />

        <TrustSection />

        <PillarSection
          id="services"
          eyebrow="Trademark services"
          title="Trademark registration services in Chennai"
          lead="From searching your brand name to replying to objections and renewing on time, one team protects your brand end to end."
        >
          <ServiceCards />
        </PillarSection>

        <PillarSection id="who-we-help" tone="cream" eyebrow="Who we help" title="Brands we help protect in Chennai">
          <AudienceGrid />
        </PillarSection>

        <PillarSection
          id="benefits"
          eyebrow="Why register"
          title="Benefits of trademark registration in Chennai"
          cta={
            <InlineCta title={audienceCta.title} sub={audienceCta.sub} message={audienceCta.message} callLabel={CALL_LABEL} whatsappLabel="WhatsApp us" />
          }
        >
          <Benefits />
        </PillarSection>

        <PillarSection
          id="process"
          eyebrow="Process"
          title="How to register a trademark in Chennai?"
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
          title="Everything included in your trademark registration in Chennai"
          lead="From the availability search to your registration certificate, our team handles every step."
          cta={<InlineCta title={includedCta.title} sub={includedCta.sub} message={hero.whatsapp} callLabel={CALL_LABEL} whatsappLabel="WhatsApp us" />}
        >
          <IncludedGrid />
        </PillarSection>

        <PillarSection
          id="documents"
          eyebrow="Documents"
          title="Documents required for trademark registration in Chennai"
          lead="Most applications need only a few documents. Share them on WhatsApp and we handle the rest."
        >
          <DocumentsGuide />
        </PillarSection>

        <PillarSection
          id="compare"
          tone="cream"
          eyebrow="Why register"
          title="Registered trademark vs unregistered brand in Chennai"
          lead="Using a brand name isn't the same as owning it. Here is what registration changes."
          cta={<RecommendationCta />}
        >
          <BrandComparison />
        </PillarSection>

        <PillarSection
          id="mistakes"
          eyebrow="Common trademark mistakes"
          title="Avoid mistakes that delay trademark registration in Chennai"
          lead="Most objections and delays come from preventable errors. Our team reviews every application before it is filed."
          cta={<ReviewCta />}
        >
          <Mistakes />
        </PillarSection>

        <PillarSection
          id="classes"
          tone="cream"
          eyebrow="Trademark classes"
          title="Choosing the right trademark class for your Chennai business"
          lead="Your trademark is protected only in the classes you file in, so choose them carefully before filing."
          cta={<InlineCta title={classCta.title} sub={classCta.sub} message={classCta.message} callLabel={CALL_LABEL} />}
        >
          <ClassGuide />
        </PillarSection>

        <PillarSection
          id="objection"
          eyebrow="Trademark objection reply"
          title="Received a trademark objection in Chennai?"
          lead="An objection is common and can usually be answered. What matters is replying well, and on time."
        >
          <ObjectionGuide />
        </PillarSection>

        <Faq items={faqs} title="Trademark registration in Chennai: your questions" message={messages.final} className="border-t border-ink/[0.06]" />

        <PillarSection id="related" tone="cream" eyebrow="Related services" title="Other registrations in Chennai">
          <RelatedTrademarkServices />
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
