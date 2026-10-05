import { chennaiHero as h } from "@/lib/chennai";
import { ServiceHero } from "@/components/blocks/ServiceHero";

export function CityHero() {
  return (
    <ServiceHero
      trail={[{ name: "Chennai", path: "/chennai" }]}
      eyebrow={h.eyebrow}
      headline={{ line1: h.line1, line2Before: h.line2Before, accent: h.accent, line2After: h.line2After }}
      sub={h.sub}
      primary={h.primary}
      secondary={h.secondary}
      ticks={h.ticks}
    />
  );
}
