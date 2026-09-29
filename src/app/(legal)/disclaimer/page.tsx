import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { site } from "@/lib/site";

// TODO(client): have this reviewed, then remove `robots` and add to the sitemap.
export const metadata: Metadata = { title: "Disclaimer", robots: { index: false, follow: true }, alternates: { canonical: "/disclaimer" } };

export default function Page() {
  return (
    <LegalPage title="Disclaimer">
      <p>
        {site.name} is a private professional services firm. We are not a government department, and we are not affiliated with or endorsed
        by any government body or portal, including the GST, Income Tax, MCA, EPFO, ESIC, DGFT and IP India portals named on this website.
        Portal names are used only to describe the filings we handle.
      </p>
      <p>
        Approvals, registrations and processing times are decided by the relevant government authorities. We prepare and file applications
        on your behalf and follow up on them, but we cannot guarantee a particular outcome or timeline.
      </p>
      <p>
        Information on this website is general in nature and is not legal or tax advice for your specific situation. Please speak to us
        before acting on it.
      </p>
    </LegalPage>
  );
}
