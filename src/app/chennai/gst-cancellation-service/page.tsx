import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { gstCancellationPage as data } from "@/lib/clusters/gst-cancellation";
import { clusterRoute } from "@/lib/clusters/shared";

// P2-C3 · GST Cancellation in Chennai. Primary keyword: "gst cancellation in chennai". Goes live on its date in publish-schedule.json.
const route = clusterRoute(data.id);
const page = servicePage(route.path, {
  ...data.meta,
  headline: "GST Cancellation in Chennai",
  service: { name: "GST Cancellation in Chennai", serviceType: "GST cancellation" },
});
export const metadata = page.metadata;

export default function GstCancellationPage() {
  return <LicencePage data={data} page={page} />;
}
