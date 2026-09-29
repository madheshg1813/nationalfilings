import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { whatsappLink } from "@/lib/site";

// TODO(client): replace with reviewed terms of service, then remove `robots` and add to the sitemap.
export const metadata: Metadata = { title: "Terms of Service", robots: { index: false, follow: true }, alternates: { canonical: "/terms" } };

export default function Page() {
  return (
    <LegalPage title="Terms of Service">
      <p>Our full terms of service are being prepared.</p>
      <p>
        For questions about an engagement,{" "}
        <a className="font-semibold text-brand-deep underline underline-offset-4" href={whatsappLink("Hi National Filings, I have a question about your terms.")} target="_blank" rel="noopener noreferrer">
          message us on WhatsApp
        </a>
        .
      </p>
    </LegalPage>
  );
}
