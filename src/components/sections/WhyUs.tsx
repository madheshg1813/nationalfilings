import { whyUs as homeWhy } from "@/lib/home";
import type { IconName } from "@/components/ui/LucideByName";
import { LucideByName } from "@/components/ui/LucideByName";
import { Reveal } from "@/components/ui/Reveal";

type Props = {
  items?: { title: string; line: string; icon: IconName }[];
  eyebrow?: string;
  title?: string;
  id?: string;
  className?: string;
};

export function WhyUs({
  items = homeWhy,
  eyebrow = "Why National Filings",
  title = "What changes when we handle your filings",
  id = "why-us",
  className = "bg-cream-soft",
}: Props) {
  const whyUs = items;
  return (
    <section id={id} className={`section scroll-mt-16 ${className}`} aria-labelledby={`${id}-title`}>
      <div className="shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-text">{eyebrow}</p>
          <h2 id={`${id}-title`} className="h2">
            {title}
          </h2>
        </Reveal>

        <ul className="mt-7 grid gap-2.5 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {whyUs.map((w, i) => (
            <Reveal as="li" key={w.title} delay={(i % 3) * 0.05} className="h-full">
              <div className="card flex h-full items-start gap-3.5 p-4 sm:block sm:p-6">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-ink/10 bg-white sm:h-11 sm:w-11">
                  <LucideByName name={w.icon} className="h-[18px] w-[18px] text-ink sm:h-5 sm:w-5" />
                </span>
                <div className="sm:mt-4">
                  <h3 className="font-display text-[15px] font-bold leading-snug text-ink sm:text-[17px]">{w.title}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-ink-muted sm:mt-1.5 sm:text-[15px]">{w.line}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
