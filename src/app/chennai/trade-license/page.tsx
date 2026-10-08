import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { tradeLicensePage as data } from "@/lib/licences/trade-license";
import { licences } from "@/lib/routes";

// L3 · Trade License. Goes live on its date in publish-schedule.json (the publish gate keeps it out of the build until then).
const page = servicePage(licences.find((l) => l.id === data.id)!.path, { ...data.meta, headline: "Trade License in Chennai" });
export const metadata = page.metadata;

export default function TradeLicensePage() {
  return <LicencePage data={data} page={page} />;
}
