import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { isoPage as data } from "@/lib/licences/iso";
import { licences } from "@/lib/routes";

// L7 · ISO Certification. Goes live on its date in publish-schedule.json (the publish gate keeps it out of the build until then).
const page = servicePage(licences.find((l) => l.id === data.id)!.path, { ...data.meta, headline: "ISO Certification in Chennai" });
export const metadata = page.metadata;

export default function IsoCertificationPage() {
  return <LicencePage data={data} page={page} />;
}
