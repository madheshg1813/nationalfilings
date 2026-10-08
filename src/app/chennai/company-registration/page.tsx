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
import { IncorporationIllustration } from "@/components/company-registration/IncorporationIllustration";
import {
  Packages,
  DocumentsGuide,
  Mistakes,
  ReviewCta,
  IncludedGrid,
  RelatedRegistrations,
  StructureCards,
  ChennaiSectors,
  Benefits,
  Timeline,
  TimelineNote,
} from "@/components/company-registration/Sections";
import { servicePage } from "@/lib/page";
import { getGoogleReviews } from "@/lib/google-reviews";
import { chennaiCta, faqs, finalCta, hero, includedCta, messages, packagesCta, pillar, processCta, SERVICE, structures, reasons } from "@/lib/company-registration";
import { ReasonCards } from "@/components/licence/Sections";

// P1 · Company Registration pillar. Primary keyword: "company registration service chennai".
const page = servicePage(pillar.path, {
  title: "Company Registration in Chennai | Pvt Ltd, LLP & OPC Experts",
  description: "Company registration in Chennai for Private Limited, LLP and OPC. Name approval, MCA filing and incorporation handled by experts, with a clear quote.",
  headline: "Company Registration Service in Chennai",
});
export const metadata = page.metadata;

// Adds the structures we register to the page's Service node (same @id, merged by search engines)
const catalogue = {
  "@type": "Service",
  "@id": `${page.url}#service`,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Business registration in Chennai",
    itemListElement: structures.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.id === "roc" ? s.name : `${s.name} registration` },
    })),
  },
};

export default async function CompanyRegistrationPage() {
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
          visual={<IncorporationIllustration />}
          proof={<HeroTrust google={google} />}
        />

        <TrustSection />

        <PillarSection
          id="structures"
          eyebrow="Business structures"
          title="Choose your business structure in Chennai"
          lead="Every structure suits a different kind of business. Here is what each one is best for."
        >
          <StructureCards />
        </PillarSection>

        <PillarSection id="chennai" tone="cream" eyebrow="Chennai business landscape" title="Business opportunities in Chennai">
          <ChennaiSectors />
        </PillarSection>

        <PillarSection
          id="benefits"
          eyebrow="Why register"
          title="Benefits of company registration in Chennai"
          cta={<InlineCta title={chennaiCta.title} sub={chennaiCta.sub} message={chennaiCta.message} whatsappLabel="WhatsApp us" />}
        >
          <Benefits />
        </PillarSection>

        <PillarSection
          id="process"
          eyebrow="Process"
          title="How to register a company in Chennai?"
          lead="Six steps from first call to Certificate of Incorporation, with honest time estimates."
          cta={
            <>
              <InlineCta
                title={processCta.title}
                sub={processCta.sub}
                ticks={processCta.ticks}
                message={processCta.message}
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
          title="Everything included in your Chennai company registration"
          lead="From structure selection to incorporation certificate, our team handles every step."
          cta={<InlineCta title={includedCta.title} sub={includedCta.sub} message={hero.whatsapp} whatsappLabel="WhatsApp us" />}
        >
          <IncludedGrid />
        </PillarSection>

        <PillarSection
          id="documents"
          eyebrow="Documents"
          title="Documents required for company registration in Chennai"
          lead="Most businesses can start with just a few basic documents. Share them on WhatsApp and we handle the rest."
        >
          <DocumentsGuide />
        </PillarSection>

        <PillarSection
          id="cost"
          tone="cream"
          eyebrow="Packages"
          title="Company registration packages in Chennai"
          lead="Choose the registration structure that matches your business goals."
          cta={<InlineCta title={packagesCta.title} sub={packagesCta.sub} message={packagesCta.message} />}
        >
          <Packages />
        </PillarSection>

        <PillarSection
          id="mistakes"
          eyebrow="Common registration issues"
          title="Avoid mistakes that delay company registration in Chennai"
          lead="Most registration delays happen because of preventable filing errors. Our team reviews every application before submission to reduce rejections and unnecessary delays."
          cta={<ReviewCta />}
        >
          <Mistakes />
        </PillarSection>

        <PillarSection id="why-us" tone="cream" eyebrow="Why National Filings" title="Why choose National Filings for company registration in Chennai">
          <ReasonCards reasons={reasons} />
        </PillarSection>

        <Faq items={faqs} title="Company registration in Chennai: your questions" message={messages.final} className="border-t border-ink/[0.06]" />

        <PillarSection id="related" tone="cream" eyebrow="Related services" title="Other registrations in Chennai">
          <RelatedRegistrations />
        </PillarSection>

        <LeadCta
          title={finalCta.title}
          sub={finalCta.sub}
          message={messages.final}
          service={SERVICE}
          page={pillar.path}
          google={google}
        />
      </main>
      <Footer />
      <MobileCtaBar callLabel="Talk to an expert" message={hero.whatsapp} />
    </>
  );
}
