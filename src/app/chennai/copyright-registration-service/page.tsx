import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { copyrightPage as data } from "@/lib/clusters/copyright";
import { clusterRoute } from "@/lib/clusters/shared";

// P5-C1 · Copyright Registration in Chennai. Primary keyword: "copyright registration in chennai". Goes live on its date in publish-schedule.json.
const route = clusterRoute(data.id);
const page = servicePage(route.path, {
  ...data.meta,
  headline: "Copyright Registration in Chennai",
  service: { name: "Copyright Registration in Chennai", serviceType: "Copyright registration" },
});
export const metadata = page.metadata;

export default function CopyrightRegistrationPage() {
  return <LicencePage data={data} page={page} />;
}
