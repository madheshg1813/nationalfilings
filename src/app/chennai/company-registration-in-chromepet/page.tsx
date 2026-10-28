import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { chromepetPage as data } from "@/lib/clusters/chromepet";
import { localityRoute, pillarRoute } from "@/lib/clusters/shared";
import { isBuilt } from "@/lib/routes";

// P1-A5 · Company Registration in Chromepet (locality page under the P1 pillar). Primary keyword: "company registration in chromepet".
const route = localityRoute(data.id);
const pillar = pillarRoute("P1");
const page = servicePage(route.path, {
  ...data.meta,
  headline: "Company Registration in Chromepet, Chennai",
  // Home › Company Registration › Chromepet (the pillar crumb only once the pillar is in the build)
  trail: [...(isBuilt(pillar.path) ? [{ name: pillar.label, path: pillar.path }] : []), { name: "Chromepet", path: route.path }],
  service: { name: "Company Registration in Chromepet, Chennai", serviceType: "Company registration" },
});
export const metadata = page.metadata;

export default function ChromepetCompanyRegistrationPage() {
  return <LicencePage data={data} page={page} />;
}
