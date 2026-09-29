import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { LeadTracked } from "@/components/contact/LeadTracked";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = { title: "Thank you", robots: { index: false, follow: false } };

export default async function ThankYouPage({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const { service } = await searchParams;
  return (
    <>
      <Header />
      <main className="relative overflow-hidden">
        <div className="grid-backdrop pointer-events-none absolute inset-0" aria-hidden />
        <div className="shell relative flex min-h-[70vh] flex-col items-center justify-center py-16 text-center">
          {/* only real submissions carry a service, so spam redirects aren't counted as leads */}
          {service && <LeadTracked service={service} />}
          <span className="grid h-16 w-16 place-items-center rounded-full bg-brand-tint text-brand-deep">
            <CheckCircle2 className="h-8 w-8" aria-hidden />
          </span>
          <h1 className="mt-6 font-display text-[2rem] font-extrabold leading-tight tracking-tight text-ink sm:text-[2.75rem]">
            Thanks, we&apos;ve got your <span className="accent-mark">enquiry</span>
          </h1>
          <p className="lead mx-auto mt-4 max-w-xl">
            {service ? `An expert will call you about ${service} shortly. ` : "An expert will call you shortly. "}
            If it&apos;s urgent, message us on WhatsApp and we&apos;ll pick it up right away.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2.5 sm:gap-3">
            <a
              href={whatsappLink(`Hi National Filings, I just sent an enquiry${service ? ` about ${service}` : ""}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Message us on WhatsApp
            </a>
            <a href="/" className="btn-ghost group">
              Back to home
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
