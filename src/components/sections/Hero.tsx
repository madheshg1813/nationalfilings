import { hero } from "@/lib/home";
import { ServiceHero } from "@/components/blocks/ServiceHero";

export function Hero() {
  const h = hero.headline;
  return (
    <ServiceHero
      kicker={hero.kicker}
      headline={{ line1: h.before, line2Before: h.lineTwoBefore, accent: h.accent, line2After: h.after }}
      sub={hero.sub}
      primary={hero.primary}
      secondary={hero.secondary}
      ticks={hero.ticks}
      useStats
    />
  );
}
