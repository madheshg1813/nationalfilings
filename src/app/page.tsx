import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { PortalStrip } from "@/components/sections/PortalStrip";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Comparison } from "@/components/sections/Comparison";
import { Audiences } from "@/components/sections/Audiences";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { PlatformProfiles } from "@/components/sections/PlatformProfiles";
import { Team } from "@/components/sections/Team";
import { RecentActivity } from "@/components/sections/RecentActivity";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { MobileCtaBar } from "@/components/sections/MobileCtaBar";
import { JsonLd } from "@/components/JsonLd";
import { homeGraph } from "@/lib/schema";
import { faqs } from "@/lib/home";
import { testimonials, visible } from "@/lib/proof";
import { getGoogleReviews } from "@/lib/google-reviews";

export const metadata: Metadata = {
  title: { absolute: "GST, Tax & Company Registration | National Filings" },
  description:
    "Company registration, GST returns, income tax, TDS, trademark, NGO 12A/80G and licences, handled end to end by National Filings for businesses across India.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "GST, Tax & Company Registration | National Filings",
    description: "Registrations, returns and compliance handled end to end for startups, SMEs, professionals and NGOs across India.",
    url: "/",
    images: [{ url: "/brand/logo-full.png", width: 924, height: 465, alt: "National Filings" }],
  },
};

export default async function HomePage() {
  const google = await getGoogleReviews(); // null until GOOGLE_PLACES_API_KEY is set
  const hasReviews = Boolean(google?.reviews.length) || visible(testimonials).length > 0;
  return (
    <>
      <JsonLd data={homeGraph(faqs)} />
      <Header />
      <main>
        <Hero />
        <PortalStrip />
        <Services />
        <WhyUs />
        <Comparison />
        <Audiences />
        <Process />
        <Testimonials google={google} />
        {/* Same cream band as the testimonials, so it reads as their verification layer */}
        <PlatformProfiles continued={hasReviews} google={google} />
        <Team />
        <RecentActivity />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
