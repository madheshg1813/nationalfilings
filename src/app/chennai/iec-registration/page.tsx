import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { iecPage as data } from "@/lib/licences/iec";
import { licences } from "@/lib/routes";

// L5 · IEC Registration. Goes live on its date in publish-schedule.json (the publish gate keeps it out of the build until then).
const page = servicePage(licences.find((l) => l.id === data.id)!.path, { ...data.meta, headline: "IEC Registration in Chennai" });
export const metadata = page.metadata;

export default function IecRegistrationPage() {
  return <LicencePage data={data} page={page} />;
}
