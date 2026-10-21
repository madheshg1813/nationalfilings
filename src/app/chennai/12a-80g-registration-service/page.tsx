import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { twelveA80gPage as data } from "@/lib/clusters/12a-80g";
import { clusterRoute } from "@/lib/clusters/shared";

// P4-C4 · 12A and 80G Registration in Chennai. Primary keyword: "12a and 80g registration in chennai". Goes live on its date in publish-schedule.json.
const route = clusterRoute(data.id);
const page = servicePage(route.path, {
  ...data.meta,
  headline: "12A and 80G Registration in Chennai",
  service: { name: "12A and 80G Registration in Chennai", serviceType: "12A and 80G registration" },
});
export const metadata = page.metadata;

export default function TwelveA80gRegistrationPage() {
  return <LicencePage data={data} page={page} />;
}
