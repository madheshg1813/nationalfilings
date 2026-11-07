import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { gstIyyappanthangalPage as data } from "@/lib/clusters/gst-iyyappanthangal";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P2-A11 · GST Consultant in Iyyappanthangal (locality page under the P2 pillar). Primary keyword: "gst consultant in iyyappanthangal".
const route = localityRoute(data.id);
const pillar = pillarRoute("P2");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "GST Consultant in Iyyappanthangal, Chennai",
  // Home › GST Services › Iyyappanthangal (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Iyyappanthangal", path: route.path }],
  service: { name: "GST Consultant in Iyyappanthangal, Chennai", serviceType: "GST consultant" },
});
export const metadata = page.metadata;

export default function IyyappanthangalGstConsultantPage() {
  return <LicencePage data={data} page={page} />;
}
