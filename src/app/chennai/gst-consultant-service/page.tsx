import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { MobileCtaBar } from "@/components/sections/MobileCtaBar";
import { Faq } from "@/components/sections/Faq";
import { PageSchema } from "@/components/PageSchema";
import { PillarHero } from "@/components/blocks/PillarHero";
import { PillarSection } from "@/components/blocks/PillarSection";
import { InlineCta } from "@/components/blocks/InlineCta";
import { LeadCta } from "@/components/blocks/LeadCta";
import { HeroTrust } from "@/components/blocks/HeroTrust";
import { TrustSection } from "@/components/blocks/TrustSection";
import { gstFilingsStat } from "@/lib/proof";
import { GstDashboardIllustration } from "@/components/gst/GstDashboardIllustration";
import {
  Audiences,
  Benefits,
  Documents,
  Insights,
  Packages,
  Problems,
  ProcessTimeline,
  Reasons,
  Services,
} from "@/components/gst/Sections";
import { servicePage } from "@/lib/page";
import { site } from "@/lib/site";
import { getGoogleReviews } from "@/lib/google-reviews";
import { faqs, finalCta, hero, pillar, problemsCta, processCta, SERVICE, services } from "@/lib/gst";

// P2 · GST Consultant pillar. Primary keyword: "gst consultant in chennai".
const page = servicePage(pillar.path, {
  title: "GST Consultant in Chennai | National Filings",
  description:
    "GST consultant in Chennai for GST registration, return filing, notices, amendments, cancellation and refunds. Dedicated GST experts with updates on WhatsApp.",
  headline: "GST Consultant in Chennai",
});
export const metadata = page.metadata;

// Service catalogue on the page's Service node, and ProfessionalService on the site-wide LocalBusiness
// (same @ids, so search engines merge them with the root graph).
const extra = [
  {
    "@type": "Service",
    "@id": `${page.url}#service`,
    serviceType: "GST consultancy",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "GST services in Chennai",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title },
      })),
    },
  },
  {
    "@type": ["AccountingService", "ProfessionalService"],
    "@id": `${site.url}/#localbusiness`,
    knowsAbout: ["GST registration", "GST return filing", "GST notices", "GST amendments", "GST cancellation", "GST refunds", "GST LUT"],
  },
];

export default async function GstConsultantPage() {
  const google = await getGoogleReviews();
  return (
    <>
      <PageSchema page={page} extra={extra} />
      <Header />
      <main>
        <PillarHero
          trail={page.trail!}
          headline={hero.headline}
          sub={hero.sub}
          badges={hero.badges}
          whatsapp={hero.whatsapp}
          callLabel="Talk to GST expert"
          visual={<GstDashboardIllustration />}
          proof={<HeroTrust google={google} />}
        />

        <TrustSection completedStat={gstFilingsStat} />

        <PillarSection
          id="who-needs-gst"
          eyebrow="Who it's for"
          title="Businesses that need GST support in Chennai"
          lead="From corner shops to exporters, every GST-registered business has returns, credits and deadlines to manage."
        >
          <Audiences />
        </PillarSection>

        <PillarSection
          id="services"
          tone="cream"
          eyebrow="GST services"
          title="GST services we provide in Chennai"
          lead="Everything GST, handled by one consultant. Pick a service to get started on WhatsApp."
        >
          <Services />
        </PillarSection>

        <PillarSection id="benefits" eyebrow="Why use a consultant" title="Benefits of professional GST support in Chennai">
          <Benefits />
        </PillarSection>

        <PillarSection
          id="process"
          tone="cream"
          eyebrow="Process"
          title="How GST registration works in Chennai"
          lead="Six steps from first call to GSTIN, then ongoing compliance."
          cta={<InlineCta title={processCta.title} sub={processCta.sub} message={processCta.message} whatsappLabel="WhatsApp consultation" callLabel="Talk to GST expert" />}
        >
          <ProcessTimeline />
        </PillarSection>

        <PillarSection
          id="documents"
          eyebrow="Documents"
          title="Documents required for GST registration in Chennai"
          lead="Pick your business type to see the checklist."
        >
          <Documents />
        </PillarSection>

        <PillarSection
          id="gst-problems"
          tone="cream"
          eyebrow="Common GST problems"
          title="GST problems Chennai businesses face, and how we fix them"
          cta={<InlineCta title={problemsCta.title} sub={problemsCta.sub} message={problemsCta.message} whatsappLabel="WhatsApp us" callLabel="Talk to GST expert" />}
        >
          <Problems />
        </PillarSection>

        <PillarSection
          id="packages"
          eyebrow="Packages"
          title="GST service packages in Chennai"
          lead="Three ways to work with us, depending on where your business is."
        >
          <Packages />
        </PillarSection>

        <PillarSection id="why-us" tone="cream" eyebrow="Why National Filings" title="Why choose us as your GST consultant in Chennai">
          <Reasons />
        </PillarSection>

        <PillarSection
          id="chennai-insights"
          eyebrow="GST in Chennai"
          title="GST insights for Chennai businesses"
          lead="What GST looks like for the industries that drive Chennai."
        >
          <Insights />
        </PillarSection>

        <Faq items={faqs} title="GST consultant in Chennai: your questions" message={finalCta.message} className="border-t border-ink/[0.06]" />

        <LeadCta
          title={finalCta.title}
          sub={finalCta.sub}
          message={finalCta.message}
          service={SERVICE}
          page={pillar.path}
          google={google}
          callLabel="Talk to GST expert"
          whatsappLabel="WhatsApp now"
        />
      </main>
      <Footer />
      <MobileCtaBar callLabel="Talk to GST expert" message={hero.whatsapp} />
    </>
  );
}
