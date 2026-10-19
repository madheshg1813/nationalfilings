import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { gstRegistrationPage as data } from "@/lib/clusters/gst-registration";
import { clusterRoute } from "@/lib/clusters/shared";

// P2-C1 · GST Registration Service in Chennai. Primary keyword: "gst registration service chennai". Goes live on its date in publish-schedule.json.
const route = clusterRoute(data.id);
const page = servicePage(route.path, {
  ...data.meta,
  headline: "GST Registration Service in Chennai",
  service: { name: "GST Registration Service in Chennai", serviceType: "GST registration" },
});
export const metadata = page.metadata;

export default function GstRegistrationPage() {
  return <LicencePage data={data} page={page} />;
}
