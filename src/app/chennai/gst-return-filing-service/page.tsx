import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { gstReturnFilingPage as data } from "@/lib/clusters/gst-return-filing";
import { clusterRoute } from "@/lib/clusters/shared";

// P2-C2 · GST Return Filing in Chennai. Primary keyword: "gst return filing in chennai". Goes live on its date in publish-schedule.json.
const route = clusterRoute(data.id);
const page = servicePage(route.path, {
  ...data.meta,
  headline: "GST Return Filing in Chennai",
  service: { name: "GST Return Filing in Chennai", serviceType: "GST return filing" },
});
export const metadata = page.metadata;

export default function GstReturnFilingPage() {
  return <LicencePage data={data} page={page} />;
}
