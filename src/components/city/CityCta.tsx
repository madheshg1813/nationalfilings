import { chennaiCta as c } from "@/lib/chennai";
import { telLink, whatsappLink } from "@/lib/site";
import { CtaBand } from "@/components/blocks/CtaBand";

export function CityCta() {
  const tel = telLink();
  return (
    <CtaBand
      title={c.title}
      sub={c.sub}
      primary={tel ? { label: c.primary.label, href: tel } : { label: c.primary.label, href: whatsappLink(c.primary.message), external: true }}
      secondary={{ label: c.whatsapp.label, href: whatsappLink(c.whatsapp.message), external: true, icon: "whatsapp" }}
    />
  );
}
