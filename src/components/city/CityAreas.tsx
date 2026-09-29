import { MapPin } from "lucide-react";
import { chennaiAreas as a } from "@/lib/chennai";
import { Reveal } from "@/components/ui/Reveal";

export function CityAreas() {
  return (
    <section className="section" aria-labelledby="areas-title">
      <div className="shell grid items-start gap-7 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow-text">{a.eyebrow}</p>
          <h2 id="areas-title" className="h2">
            {a.title}
          </h2>
          <p className="lead mt-3 max-w-md">{a.sub}</p>
          <div className="mt-5 inline-flex items-center gap-3 rounded-2xl border border-ink/10 bg-white px-4 py-3 sm:mt-7">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-lime-tint ring-1 ring-lime">
              <MapPin className="h-4 w-4 text-ink" strokeWidth={1.8} aria-hidden />
            </span>
            <span>
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-ink-faint">{a.office.label}</span>
              <span className="block font-display text-[15px] font-bold text-ink">{a.office.place}</span>
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="card divide-y divide-ink/10 !rounded-2xl sm:!rounded-3xl">
            {a.zones.map((z) => (
              <div key={z.name} className="flex flex-col gap-2 px-4 py-3.5 sm:flex-row sm:items-center sm:gap-4 sm:px-6 sm:py-4">
                <span className="w-40 shrink-0 text-[11.5px] font-semibold uppercase tracking-wider text-ink-faint">{z.name}</span>
                <ul className="flex flex-wrap gap-1.5 sm:gap-2">
                  {z.areas.map((area) => (
                    <li key={area} className="chip !py-1.5 !text-[12.5px] sm:!text-[13.5px]">
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <p className="px-4 py-3.5 text-[13px] text-ink-muted sm:px-6 sm:text-[14px]">{a.footnote}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
