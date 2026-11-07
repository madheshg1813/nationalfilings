import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { gstGerugambakkamPage as data } from "@/lib/clusters/gst-gerugambakkam";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P2-A10 · GST Consultant in Gerugambakkam (locality page under the P2 pillar). Primary keyword: "gst consultant in gerugambakkam".
const route = localityRoute(data.id);
const pillar = pillarRoute("P2");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "GST Consultant in Gerugambakkam, Chennai",
  // Home › GST Services › Gerugambakkam (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Gerugambakkam", path: route.path }],
  service: { name: "GST Consultant in Gerugambakkam, Chennai", serviceType: "GST consultant" },
});
export const metadata = page.metadata;

export default function GerugambakkamGstConsultantPage() {
  return <LicencePage data={data} page={page} />;
}
