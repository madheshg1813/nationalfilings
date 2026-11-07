import { MapPinned } from "lucide-react";
import { pillars, serviceHref } from "@/lib/routes";

/**
 * Text links to a pillar's area pages around our Kundrathur office ("GST consultant near our Kundrathur office: Pammal ...").
 * Only published areas are listed, so the line grows as each area goes live and never shows a half-empty card row.
 */
export function NearbyAreas({ pillarId, label }: { pillarId: string; label: string }) {
  const areas = (pillars.find((p) => p.id === pillarId)?.localities ?? [])
    .map((a) => ({ name: a.title.replace(/^.* in /, ""), href: serviceHref(a) }))
    .filter((a) => a.href);
  if (areas.length === 0) return null;
  return (
    <p className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center text-[15px] text-ink-soft sm:mt-10">
      <span className="w-full font-semibold text-ink sm:w-auto">
        <MapPinned className="mr-1.5 inline h-4 w-4 align-[-2px] text-brand-deep" aria-hidden />
        {label} near our Kundrathur office:
      </span>
      {areas.map((a) => (
        <a key={a.href} href={a.href} className="inline-flex min-h-[44px] items-center font-semibold text-brand-deep underline decoration-brand/30 underline-offset-4 hover:text-brand-hover">
          {a.name}
        </a>
      ))}
    </p>
  );
}
