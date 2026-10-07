import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { MobileCtaBar } from "@/components/sections/MobileCtaBar";
import { WhyUs } from "@/components/sections/WhyUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { PlatformProfiles } from "@/components/sections/PlatformProfiles";
import { Faq } from "@/components/sections/Faq";
import { CityHero } from "@/components/city/CityHero";
import { CityAbout } from "@/components/city/CityAbout";
import { ServiceDirectory, LicenceGrid, ExploreServices } from "@/components/city/ServiceDirectory";
import { CityAudiences } from "@/components/city/CityAudiences";
import { CityAreas } from "@/components/city/CityAreas";
import { CityCta } from "@/components/city/CityCta";
import { PageSchema } from "@/components/PageSchema";
import { definePage } from "@/lib/page";
import { chennaiFaqs, chennaiWhy } from "@/lib/chennai";
import { pillars } from "@/lib/routes";
import { chennaiCatalogue } from "@/lib/schema";
import { getGoogleReviews } from "@/lib/google-reviews";
import { testimonials, visible } from "@/lib/proof";

// C0 · City hub. Branded keyword only ("national filings chennai"); service keywords belong to pillar pages.
const page = definePage({
  path: "/chennai",
  title: "National Filings Chennai | Registration, Tax & Compliance",
  description:
    "National Filings Chennai helps startups, businesses, professionals and NGOs with registrations, tax filing, licences and compliance. Talk to an expert today.",
  headline: "Helping Chennai Businesses Grow Without Paperwork",
  type: "CollectionPage",
  trail: [{ name: "Chennai", path: "/chennai" }],
});
export const metadata = page.metadata;

export default async function ChennaiPage() {
  const google = await getGoogleReviews();
  const hasReviews = Boolean(google?.reviews.length) || visible(testimonials).length > 0;
  return (
    <>
      <PageSchema page={page} extra={[chennaiCatalogue(pillars.map((p) => ({ name: p.label, path: p.path })))]} />
      <Header />
      <main>
        <CityHero />
        <CityAbout />
        <ServiceDirectory />
        <LicenceGrid />
        <CityAudiences />
        <CityAreas />
        <WhyUs
          items={chennaiWhy}
          eyebrow="Why National Filings"
          title="Why Chennai businesses choose National Filings"
          id="why-chennai"
          className="border-t border-ink/10 bg-white"
        />
        <Testimonials google={google} />
        <PlatformProfiles
          continued={hasReviews}
          google={google}
          sub="Explore our public profiles, reviews and business listings before getting started."
        />
        <ExploreServices />
        <Faq
          items={chennaiFaqs}
          title="Questions about working with us in Chennai"
          message="Hi National Filings Chennai, I have a question."
          className="bg-cream-soft"
        />
        <CityCta />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
