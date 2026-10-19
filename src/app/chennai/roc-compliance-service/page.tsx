import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { rocPage as data } from "@/lib/clusters/roc";
import { clusterRoute } from "@/lib/clusters/shared";

// P1-C5 · ROC Compliance Services in Chennai. Primary keyword: "roc compliance services in chennai". Goes live on its date in publish-schedule.json.
const route = clusterRoute(data.id);
const page = servicePage(route.path, {
  ...data.meta,
  headline: "ROC Compliance Services in Chennai",
  service: { name: "ROC Compliance Services in Chennai", serviceType: "ROC compliance" },
});
export const metadata = page.metadata;

export default function RocCompliancePage() {
  return <LicencePage data={data} page={page} />;
}
