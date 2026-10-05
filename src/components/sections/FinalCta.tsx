import { finalCta } from "@/lib/home";
import { telLink, whatsappLink } from "@/lib/site";
import { CtaBand } from "@/components/blocks/CtaBand";

export function FinalCta() {
  const tel = telLink();
  return (
    <CtaBand
      title={finalCta.title}
      sub={finalCta.sub}
      primary={{ label: finalCta.whatsapp.label, shortLabel: "WhatsApp", href: whatsappLink(finalCta.whatsapp.message), external: true, icon: "whatsapp" }}
      secondary={
        tel
          ? { label: finalCta.consult.label, shortLabel: "Consultation", href: tel, icon: "phone" }
          : { label: finalCta.consult.label, shortLabel: "Consultation", href: whatsappLink(finalCta.consult.message), external: true, icon: "calendar" }
      }
      link={finalCta.directory}
    />
  );
}
