import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { trustPage as data } from "@/lib/clusters/trust";
import { clusterRoute } from "@/lib/clusters/shared";

// P4-C1 · Trust Registration Service in Chennai. Primary keyword: "trust registration service chennai". Goes live on its date in publish-schedule.json.
const route = clusterRoute(data.id);
const page = servicePage(route.path, {
  ...data.meta,
  headline: "Trust Registration Service in Chennai",
  service: { name: "Trust Registration Service in Chennai", serviceType: "Charitable trust registration" },
});
export const metadata = page.metadata;

export default function TrustRegistrationPage() {
  return <LicencePage data={data} page={page} />;
}
