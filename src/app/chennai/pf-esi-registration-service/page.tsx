import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { pfEsiRegistrationPage as data } from "@/lib/clusters/pf-esi-registration";
import { clusterRoute } from "@/lib/clusters/shared";

// P6-C1 · PF and ESI Registration in Chennai. Primary keyword: "pf registration in chennai". Goes live on its date in publish-schedule.json.
const route = clusterRoute(data.id);
const page = servicePage(route.path, {
  ...data.meta,
  headline: "PF and ESI Registration in Chennai",
  service: { name: "PF and ESI Registration in Chennai", serviceType: "PF and ESI registration" },
});
export const metadata = page.metadata;

export default function PfEsiRegistrationPage() {
  return <LicencePage data={data} page={page} />;
}
