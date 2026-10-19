import { LicencePage } from "@/components/licence/LicencePage";
import { servicePage } from "@/lib/page";
import { partnershipPage as data } from "@/lib/clusters/partnership";
import { clusterRoute } from "@/lib/clusters/shared";

// P1-C3 · Partnership Firm Registration in Chennai. Primary keyword: "partnership firm registration in chennai".
const route = clusterRoute(data.id);
const page = servicePage(route.path, {
  ...data.meta,
  headline: "Partnership Firm Registration in Chennai",
  service: { name: "Partnership Firm Registration in Chennai", serviceType: "Partnership firm registration" },
});
export const metadata = page.metadata;

export default function PartnershipFirmRegistrationPage() {
  return <LicencePage data={data} page={page} />;
}
