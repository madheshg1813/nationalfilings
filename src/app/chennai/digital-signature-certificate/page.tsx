import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { dscPage as data } from "@/lib/licences/dsc";
import { licences } from "@/lib/routes";

// L6 · Digital Signature Certificate. Goes live on its date in publish-schedule.json (the publish gate keeps it out of the build until then).
const page = servicePage(licences.find((l) => l.id === data.id)!.path, { ...data.meta, headline: "Digital Signature Certificate in Chennai" });
export const metadata = page.metadata;

export default function DigitalSignatureCertificatePage() {
  return <LicencePage data={data} page={page} />;
}
