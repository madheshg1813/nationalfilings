import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { gstNoticeReplyPage as data } from "@/lib/clusters/gst-notice-reply";
import { clusterRoute } from "@/lib/clusters/shared";

// P2-C4 · GST Notice Reply in Chennai. Primary keyword: "gst notice reply in chennai". Goes live on its date in publish-schedule.json.
const route = clusterRoute(data.id);
const page = servicePage(route.path, {
  ...data.meta,
  headline: "GST Notice Reply in Chennai",
  service: { name: "GST Notice Reply in Chennai", serviceType: "GST notice reply" },
});
export const metadata = page.metadata;

export default function GstNoticeReplyPage() {
  return <LicencePage data={data} page={page} />;
}
