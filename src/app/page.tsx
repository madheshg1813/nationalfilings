import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { PortalStrip } from "@/components/sections/PortalStrip";
import { Services } from "@/components/sections/Services";
import { Licences } from "@/components/sections/Licences";
import { WhyUs } from "@/components/sections/WhyUs";
import { Comparison } from "@/components/sections/Comparison";
import { Audiences } from "@/components/sections/Audiences";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { PlatformProfiles } from "@/components/sections/PlatformProfiles";
import { RecentActivity } from "@/components/sections/RecentActivity";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { MobileCtaBar } from "@/components/sections/MobileCtaBar";
import { PageSchema } from "@/components/PageSchema";
import { definePage } from "@/lib/page";
import { servicesItemList } from "@/lib/schema";
import { testimonials, visible } from "@/lib/proof";
import { getGoogleReviews } from "@/lib/google-reviews";

const page = definePage({
  path: "/",
  title: "GST, Tax & Company Registration | National Filings",
  description:
    "Company registration, GST returns, income tax, TDS, trademark, NGO 12A/80G and licences, handled end to end by National Filings for businesses across India.",
  headline: "Business Registration, Tax & Compliance - Managed by Experts",
});
export const metadata = page.metadata;

export default async function HomePage() {
  const google = await getGoogleReviews(); // null until GOOGLE_PLACES_API_KEY is set
  const hasReviews = Boolean(google?.reviews.length) || visible(testimonials).length > 0;
  return (
    <>
      <PageSchema page={page} extra={[servicesItemList()]} />
      <Header />
      <main>
        <Hero />
        <PortalStrip />
        <Services />
        <Licences />
        <WhyUs />
        <Comparison />
        <Audiences />
        <Process />
        <Testimonials google={google} />
        {/* Same cream band as the testimonials, so it reads as their verification layer */}
        <PlatformProfiles continued={hasReviews} google={google} />
        <RecentActivity />
        <Faq className="bg-cream-soft" />
        <FinalCta />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
