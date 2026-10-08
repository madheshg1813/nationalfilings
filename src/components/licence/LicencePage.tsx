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
import { LicenceIllustration } from "./LicenceIllustration";
import {
  ApplicantGrid,
  BenefitCards,
  CostCards,
  DocumentCards,
  HighlightCards,
  HorizontalTimeline,
  IndustryTiles,
  MistakeCards,
  ReasonCards,
  RelatedLinks,
} from "./Sections";
import { getGoogleReviews } from "@/lib/google-reviews";
import { licences } from "@/lib/routes";
import type { Page } from "@/lib/page";
import type { LicencePageData } from "@/lib/licences/types";

/**
 * One template for every licence / registration / certification page. Section order follows the MSME brief;
 * backgrounds alternate white / cream automatically, so optional sections never break the rhythm.
 * The page goes live on its date in publish-schedule.json (the publish gate keeps it out of the build until then).
 */
export async function LicencePage({ data: d, page }: { data: LicencePageData; page: Page }) {
  const google = await getGoogleReviews();
  const route = licences.find((l) => l.id === d.id)!;
  let n = 0;
  const tone = () => (n++ % 2 === 1 ? "cream" : undefined); // first section white, then alternate

  const catalogue = {
    "@type": "Service",
    "@id": `${page.url}#service`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: route.title,
      itemListElement: d.catalogue.map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
    },
  };

  return (
    <>
      <PageSchema page={page} extra={[catalogue]} />
      <Header />
      <main>
        <PillarHero
          trail={page.trail!}
          headline={d.hero.headline}
          sub={d.hero.sub}
          badges={d.hero.badges}
          whatsapp={d.hero.whatsapp}
          visual={<LicenceIllustration data={d.illustration} />}
          proof={<HeroTrust google={google} />}
        />

        <TrustSection />

        <PillarSection
          id="benefits"
          tone={tone()}
          eyebrow="Benefits"
          title={d.benefitsSection.title}
          lead={d.benefitsSection.lead}
          cta={<InlineCta title={d.benefitsSection.cta.title} sub={d.benefitsSection.cta.sub} message={d.benefitsSection.cta.message} whatsappLabel="WhatsApp us" />}
        >
          <BenefitCards benefits={d.benefits} />
        </PillarSection>

        <PillarSection id="who-should-apply" tone={tone()} eyebrow="Who should apply" title={d.applicantsSection.title} lead={d.applicantsSection.lead}>
          <ApplicantGrid applicants={d.applicants} />
        </PillarSection>

        {d.opportunities && (
          <PillarSection id="opportunities" tone={tone()} eyebrow="Chennai landscape" title={d.opportunities.title}>
            <IndustryTiles intro={d.opportunities.intro} industries={d.opportunities.industries} />
          </PillarSection>
        )}

        {d.highlights && (
          <PillarSection id="types" tone={tone()} eyebrow={d.highlights.eyebrow} title={d.highlights.title} lead={d.highlights.lead}>
            <HighlightCards items={d.highlights.items} />
          </PillarSection>
        )}

        <PillarSection id="documents" tone={tone()} eyebrow="Documents" title={d.documentsSection.title} lead={d.documentsSection.lead}>
          <DocumentCards documents={d.documents} documentsNote={d.documentsNote} />
        </PillarSection>

        <PillarSection
          id="process"
          tone={tone()}
          eyebrow="Process"
          title={d.processSection.title}
          lead={d.processSection.lead}
          cta={<InlineCta title={d.processSection.cta.title} sub={d.processSection.cta.sub} message={d.processSection.cta.message} whatsappLabel="WhatsApp consultation" />}
        >
          <HorizontalTimeline steps={d.steps} processNote={d.processNote} />
        </PillarSection>

        <PillarSection id="mistakes" tone={tone()} eyebrow="Common mistakes" title={d.mistakesSection.title} lead={d.mistakesSection.lead}>
          <MistakeCards mistakes={d.mistakes} />
        </PillarSection>

        <PillarSection
          id="cost"
          tone={tone()}
          eyebrow="Cost"
          title={d.costSection.title}
          lead={d.costSection.lead}
          cta={<InlineCta title={d.costSection.cta.title} sub={d.costSection.cta.sub} message={d.costSection.cta.message} />}
        >
          <CostCards costs={d.costs} />
        </PillarSection>

        <PillarSection id="why-us" tone={tone()} eyebrow="Why National Filings" title={d.reasonsTitle}>
          <ReasonCards reasons={d.reasons} />
        </PillarSection>

        <Faq items={d.faqs} title={d.faqTitle} message={d.final.message} className="border-t border-ink/[0.06]" />

        <PillarSection id="related" tone="cream" eyebrow="Related services" title="Other business services in Chennai">
          <RelatedLinks related={d.related} />
        </PillarSection>

        <LeadCta title={d.final.title} sub={d.final.sub} message={d.final.message} service={d.service} page={route.path} google={google} />
      </main>
      <Footer />
      <MobileCtaBar callLabel="Talk to an expert" message={d.hero.whatsapp} />
    </>
  );
}
