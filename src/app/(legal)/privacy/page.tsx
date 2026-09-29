import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { whatsappLink } from "@/lib/site";

// TODO(client): replace with the reviewed privacy policy, then remove `robots` and add to the sitemap.
export const metadata: Metadata = { title: "Privacy Policy", robots: { index: false, follow: true }, alternates: { canonical: "/privacy" } };

export default function Page() {
  return (
    <LegalPage title="Privacy Policy">
      <p>Our full privacy policy is being prepared.</p>
      <p>
        If you have a question about how we handle the information and documents you share with us,{" "}
        <a className="font-semibold text-brand-deep underline underline-offset-4" href={whatsappLink("Hi National Filings, I have a privacy question.")} target="_blank" rel="noopener noreferrer">
          message us on WhatsApp
        </a>
        .
      </p>
    </LegalPage>
  );
}
