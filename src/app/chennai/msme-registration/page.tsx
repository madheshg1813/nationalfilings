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
import { UdyamIllustration } from "@/components/msme/UdyamIllustration";
import {
  ApplicantGrid,
  BenefitCards,
  CostCards,
  DocumentCards,
  HorizontalTimeline,
  IndustryTiles,
  MistakeCards,
  ReasonCards,
  RelatedMsmeServices,
} from "@/components/msme/Sections";
import { servicePage } from "@/lib/page";
import { getGoogleReviews } from "@/lib/google-reviews";
import { benefitsCta, costCta, faqs, finalCta, hero, messages, page as route, processCta, SERVICE } from "@/lib/msme";

// L1 · MSME / Udyam Registration. Primary keyword: "msme registration in chennai". Goes live on its date in publish-schedule.json.
const page = servicePage(route.path, {
  title: "MSME Registration in Chennai | Udyam Certificate | National Filings",
  description:
    "MSME registration in Chennai with expert help. Get your Udyam certificate online for MSME loans, subsidies, tender exemptions and delayed-payment protection.",
  headline: "MSME / Udyam Registration in Chennai",
});
export const metadata = page.metadata;

// The benefits this registration unlocks, on the page's Service node (same @id, merged by search engines)
const catalogue = {
  "@type": "Service",
  "@id": `${page.url}#service`,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "MSME / Udyam registration in Chennai",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Udyam registration" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Udyam certificate update" } },
    ],
  },
};

export default async function MsmeRegistrationPage() {
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
          visual={<UdyamIllustration />}
          proof={<HeroTrust google={google} />}
        />

        <TrustSection />

        <PillarSection
          id="benefits"
          eyebrow="Benefits"
          title="Benefits of MSME registration in Chennai"
          lead="A Udyam certificate opens the credit, schemes and protections built for small businesses."
          cta={<InlineCta title={benefitsCta.title} sub={benefitsCta.sub} message={benefitsCta.message} whatsappLabel="WhatsApp us" />}
        >
          <BenefitCards />
        </PillarSection>

        <PillarSection
          id="who-should-apply"
          tone="cream"
          eyebrow="Who should apply"
          title="Who should apply for MSME registration in Chennai"
          lead="If you run a business in manufacturing, services or trade, Udyam registration is usually worth having."
        >
          <ApplicantGrid />
        </PillarSection>

        <PillarSection id="opportunities" eyebrow="Chennai MSME landscape" title="MSME opportunities in Chennai">
          <IndustryTiles />
        </PillarSection>

        <PillarSection
          id="documents"
          tone="cream"
          eyebrow="Documents"
          title="Documents required for Udyam registration in Chennai"
          lead="Just a few details, no paperwork to upload."
        >
          <DocumentCards />
        </PillarSection>

        <PillarSection
          id="process"
          eyebrow="Process"
          title="MSME registration process in Chennai"
          lead="Five steps from your details to the Udyam certificate."
          cta={<InlineCta title={processCta.title} sub={processCta.sub} message={processCta.message} whatsappLabel="WhatsApp consultation" />}
        >
          <HorizontalTimeline />
        </PillarSection>

        <PillarSection
          id="mistakes"
          tone="cream"
          eyebrow="Common mistakes"
          title="Common MSME registration mistakes in Chennai"
          lead="Small errors in the Udyam form can block benefits later. We check each one before filing."
        >
          <MistakeCards />
        </PillarSection>

        <PillarSection
          id="cost"
          eyebrow="Cost"
          title="MSME registration cost factors in Chennai"
          lead="The government step is free. You pay only for expert help, quoted upfront."
          cta={<InlineCta title={costCta.title} sub={costCta.sub} message={costCta.message} />}
        >
          <CostCards />
        </PillarSection>

        <PillarSection id="why-us" tone="cream" eyebrow="Why National Filings" title="Why choose National Filings for MSME registration in Chennai">
          <ReasonCards />
        </PillarSection>

        <Faq items={faqs} title="MSME registration in Chennai: your questions" message={messages.final} className="border-t border-ink/[0.06]" />

        <PillarSection id="related" tone="cream" eyebrow="Related services" title="Other business services in Chennai">
          <RelatedMsmeServices />
        </PillarSection>

        <LeadCta title={finalCta.title} sub={finalCta.sub} message={messages.final} service={SERVICE} page={route.path} google={google} />
      </main>
      <Footer />
      <MobileCtaBar callLabel="Talk to an expert" message={hero.whatsapp} />
    </>
  );
}
