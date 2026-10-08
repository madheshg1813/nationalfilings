import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { msmePage as data } from "@/lib/msme";
import { licences } from "@/lib/routes";

// L1 · MSME / Udyam Registration. Primary keyword: "msme registration in chennai". Goes live on its date in publish-schedule.json.
const page = servicePage(licences.find((l) => l.id === data.id)!.path, { ...data.meta, headline: "MSME / Udyam Registration in Chennai" });
export const metadata = page.metadata;

export default function MsmeRegistrationPage() {
  return <LicencePage data={data} page={page} />;
}
