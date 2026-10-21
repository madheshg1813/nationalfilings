import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { societyPage as data } from "@/lib/clusters/society";
import { clusterRoute } from "@/lib/clusters/shared";

// P4-C2 · Society Registration in Chennai. Primary keyword: "society registration in chennai". Goes live on its date in publish-schedule.json.
const route = clusterRoute(data.id);
const page = servicePage(route.path, {
  ...data.meta,
  headline: "Society Registration in Chennai",
  service: { name: "Society Registration in Chennai", serviceType: "Society registration" },
});
export const metadata = page.metadata;

export default function SocietyRegistrationPage() {
  return <LicencePage data={data} page={page} />;
}
