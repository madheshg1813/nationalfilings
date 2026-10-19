import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { opcPage as data } from "@/lib/clusters/opc";
import { clusterRoute } from "@/lib/clusters/shared";

// P1-C2 · One Person Company Registration in Chennai. Primary keyword: "one person company registration in chennai".
const route = clusterRoute(data.id);
const page = servicePage(route.path, {
  ...data.meta,
  headline: "One Person Company Registration in Chennai",
  service: { name: "One Person Company Registration in Chennai", serviceType: "One person company registration" },
});
export const metadata = page.metadata;

export default function OpcRegistrationPage() {
  return <LicencePage data={data} page={page} />;
}
