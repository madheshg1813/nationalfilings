import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { shopEstablishmentPage as data } from "@/lib/licences/shop-establishment";
import { licences } from "@/lib/routes";

// L4 · Shop & Establishment. Goes live on its date in publish-schedule.json (the publish gate keeps it out of the build until then).
const page = servicePage(licences.find((l) => l.id === data.id)!.path, { ...data.meta, headline: "Shop & Establishment Registration in Chennai" });
export const metadata = page.metadata;

export default function ShopEstablishmentRegistrationPage() {
  return <LicencePage data={data} page={page} />;
}
