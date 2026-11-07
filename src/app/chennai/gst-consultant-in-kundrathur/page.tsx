import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { gstKundrathurPage as data } from "@/lib/clusters/gst-kundrathur";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P2-A1 · GST Consultant in Kundrathur (locality page under the P2 pillar). Primary keyword: "gst consultant in kundrathur".
const route = localityRoute(data.id);
const pillar = pillarRoute("P2");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "GST Consultant in Kundrathur, Chennai",
  // Home › GST Services › Kundrathur (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Kundrathur", path: route.path }],
  service: { name: "GST Consultant in Kundrathur, Chennai", serviceType: "GST consultant" },
});
export const metadata = page.metadata;

export default function KundrathurGstConsultantPage() {
  return <LicencePage data={data} page={page} />;
}
