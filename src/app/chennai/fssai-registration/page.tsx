import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { fssaiPage as data } from "@/lib/licences/fssai";
import { licences } from "@/lib/routes";

// L2 · FSSAI Registration. Goes live on its date in publish-schedule.json (the publish gate keeps it out of the build until then).
const page = servicePage(licences.find((l) => l.id === data.id)!.path, { ...data.meta, headline: "FSSAI Registration in Chennai" });
export const metadata = page.metadata;

export default function FssaiRegistrationPage() {
  return <LicencePage data={data} page={page} />;
}
