import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarClock,
  Check,
  ChevronDown,
  Phone,
  X,
  Activity,
  ArrowLeftRight,
  Award,
  BadgeIndianRupee,
  BellOff,
  Briefcase,
  Building2,
  CalendarCheck,
  ClipboardCheck,
  Clock,
  Factory,
  FileCheck2,
  FileSpreadsheet,
  FileWarning,
  FolderCheck,
  FolderX,
  Gauge,
  HardHat,
  Headset,
  HeartHandshake,
  HeartPulse,
  Hourglass,
  IndianRupee,
  Landmark,
  Laptop,
  MessageCircle,
  MonitorCheck,
  PiggyBank,
  ReceiptIndianRupee,
  ReceiptText,
  Rocket,
  Scale,
  ShieldCheck,
  ShoppingBag,
  Shuffle,
  Store,
  Target,
  TrendingUp,
  UserCheck,
  UserPlus,
  UserRound,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { AutoScrollRow } from "@/components/ui/AutoScrollRow";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { telLink, whatsappLink } from "@/lib/site";
import { linkTarget } from "@/lib/routes";
import { PayrollDocumentsIllustration } from "./PayrollDocumentsIllustration";
import {
  CALL_LABEL,
  audienceIntro,
  audiences,
  benefits,
  comparison,
  documents,
  documentsHelp,
  included,
  mistakes,
  monthly,
  monthlyCta,
  related,
  reviewChecks,
  reviewCta,
  schemes,
  services,
  timeline,
  timelineNote,
} from "@/lib/pf-esi";

const ICONS: Record<string, LucideIcon> = {
  CalendarClock, Activity, ArrowLeftRight, Award, BadgeIndianRupee, BellOff, Briefcase, Building2, CalendarCheck, ClipboardCheck, Clock, Factory, FileCheck2, FileSpreadsheet, FileWarning, FolderCheck, FolderX, Gauge, HardHat, Headset, HeartHandshake, HeartPulse, Hourglass, IndianRupee, Landmark, Laptop, MessageCircle, MonitorCheck, PiggyBank, ReceiptIndianRupee, ReceiptText, Rocket, Scale, ShieldCheck, ShoppingBag, Shuffle, Store, Target, TrendingUp, UserCheck, UserPlus, UserRound, Users,
};

function Icon({ name, className }: { name: string; className?: string }) {
  const I = ICONS[name] ?? ShieldCheck;
  return <I className={className} strokeWidth={1.75} aria-hidden />;
}

/** A link when the card has a page to go to, otherwise the same card as plain content (cards never open WhatsApp) */
function CardLink({ href, className, children }: { href: string; className: string; children: React.ReactNode }) {
  return href ? (
    <a href={href} {...linkTarget(href)} className={`${className} transition duration-300 hover:-translate-y-0.5 hover:border-ink/20 hover:shadow-lift`}>
      {children}
    </a>
  ) : (
    <div className={className}>{children}</div>
  );
}

const tile = "grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-ink/10 bg-white sm:h-11 sm:w-11";

/* 1 · Services ---------------------------------------------------- */

export function ServiceCards() {
  return (
    <AutoScrollRow interval={4000} label="PF and ESI services" className="-mx-5 flex snap-x snap-mandatory scroll-px-5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:snap-none sm:scroll-px-0 sm:overflow-visible sm:px-0 sm:pb-0 gap-3 sm:grid sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
      {services.map((s) => (
        // plain <li> (no reveal): off-screen items in a swipe row would stay hidden until swiped
        <li key={s.id} className="sm:h-full w-[82%] shrink-0 snap-start sm:w-auto">
          <article className={`card relative flex h-full flex-col p-5 sm:p-6 ${s.tag ? "border-brand/30 ring-1 ring-brand/15" : ""}`}>
            {s.tag && <span className="tag-green absolute right-4 top-4 sm:right-5 sm:top-5">{s.tag}</span>}
            <span className={tile}>
              <Icon name={s.icon} className="h-5 w-5 text-brand-deep" />
            </span>
            <h3 className="mt-4 font-display text-[17px] font-bold leading-snug text-ink sm:text-[19px]">{s.name}</h3>

            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-faint">Best for</p>
            <p className="mt-1 text-[14px] leading-relaxed text-ink-soft">{s.bestFor}</p>

            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-faint">Advantages</p>
            <ul className="mt-1.5 space-y-1.5">
              {s.advantages.map((a) => (
                <li key={a} className="flex items-start gap-2 text-[14px] leading-snug text-ink-soft">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-deep" strokeWidth={2.5} aria-hidden />
                  {a}
                </li>
              ))}
            </ul>

            {/* plain card until its page is published (cards never open WhatsApp) */}

            {s.href && (

            <a
              href={s.href}
              {...linkTarget(s.href)}
              className="group mt-auto inline-flex min-h-[44px] items-center gap-1.5 pt-4 text-[14.5px] font-semibold text-brand-deep hover:text-brand-hover"
            >

              Learn more
              <span className="sr-only">: {s.linkLabel}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </a>

            )}
          </article>
        </li>
      ))}
    </AutoScrollRow>
  );
}

/* 2 · Who we help + benefits ---------------------------------- */

export function AudienceGrid() {
  return (
    <>
      <p className="mx-auto max-w-3xl text-center text-[15px] leading-relaxed text-ink-soft sm:text-[17px]">{audienceIntro}</p>
      {/* phones: swipeable row (snap); sm+: grid */}
      <AutoScrollRow label="Who we help in Chennai" className="-mx-5 mt-8 flex snap-x snap-mandatory scroll-px-5 gap-2.5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:mt-10 sm:grid sm:snap-none sm:scroll-px-0 sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">
        {audiences.map((x) => (
          // no reveal animation: off-screen items in a swipe row would stay hidden until swiped
          <li key={x.title} className="sm:h-full w-[40%] shrink-0 snap-start sm:w-auto">
            <figure className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink/5 sm:aspect-[4/3] sm:rounded-3xl">
              <Image
                src={x.image}
                alt={x.alt}
                fill
                sizes="(min-width: 1280px) 480px, (min-width: 1024px) 40vw, 90vw"
                quality={90}
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              {/* legibility gradient */}
              <span className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" aria-hidden />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-2.5 p-3 sm:p-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/15 text-white ring-1 ring-inset ring-white/25 backdrop-blur sm:h-9 sm:w-9">
                  <Icon name={x.icon} className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                </span>
                <span className="font-display text-[13.5px] font-bold leading-snug text-white sm:text-[16px]">{x.title}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </AutoScrollRow>
    </>
  );
}

export function Benefits() {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-8 sm:gap-y-8 lg:grid-cols-4">
      {benefits.map((b, i) => (
        <Reveal as="li" key={b.title} delay={(i % 4) * 0.04} className="flex flex-col gap-2.5 sm:block">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-brand/15 text-brand-deep sm:h-11 sm:w-11">
            <Icon name={b.icon} className="h-5 w-5" />
          </span>
          <div className="min-w-0 sm:mt-3.5">
            <h3 className="font-display text-[14px] font-bold leading-snug text-ink sm:text-[17px]">{b.title}</h3>
            <p className="mt-0.5 text-[12px] leading-snug text-ink-muted sm:mt-1 sm:text-[14.5px] sm:leading-relaxed">{b.line}</p>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}

/* 3 · Timeline ---------------------------------------------------- */

export function Timeline() {
  return (
    <ol className="relative grid gap-3.5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
      {timeline.map((t, i) => (
        <Reveal as="li" key={t.title} delay={(i % 3) * 0.05} className="h-full">
          {/* lighter border + soft shadow so the steps read as easy, not boxed-in */}
          <div className="relative flex h-full gap-4 rounded-2xl border border-ink/[0.06] bg-white p-4 shadow-[0_10px_30px_-22px_rgba(15,60,58,0.45)] sm:block sm:rounded-3xl sm:p-6">
            <div className="flex shrink-0 flex-col items-center sm:flex-row sm:items-center sm:justify-between">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-ink font-display text-[15px] font-bold text-white sm:h-11 sm:w-11">
                {i + 1}
              </span>
              <span className="hidden rounded-full bg-brand-tint px-3 py-1 text-[12px] font-semibold text-brand-hover sm:inline-flex">{t.time}</span>
            </div>
            <div className="min-w-0 sm:mt-4">
              <h3 className="font-display text-[17px] font-extrabold leading-snug tracking-[-0.01em] text-ink sm:text-[20px]">{t.title}</h3>
              <p className="mt-1 text-[13.5px] leading-relaxed text-ink-muted sm:mt-1.5 sm:text-[14.5px]">{t.sub}</p>
              <span className="mt-2.5 inline-flex rounded-full bg-brand-tint px-2.5 py-0.5 text-[11.5px] font-semibold text-brand-hover sm:hidden">{t.time}</span>
            </div>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

/** Reassurance line shown under the process CTA */
export function TimelineNote() {
  return (
    <p className="mx-auto mt-4 flex max-w-3xl items-start justify-center gap-2 text-center text-[12.5px] leading-relaxed text-ink-muted sm:mt-5 sm:text-[13.5px]">
      <CalendarClock className="mt-0.5 hidden h-4 w-4 shrink-0 text-brand-deep sm:block" aria-hidden />
      {timelineNote}
    </p>
  );
}

/* 4 · What's included ------------------------------------------------ */

export function IncludedGrid() {
  return (
    <ul className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-4">
      {included.map((f, i) => (
        <Reveal as="li" key={f.title} delay={(i % 4) * 0.05} className="h-full">
          <div className="group relative h-full rounded-2xl border border-ink/[0.06] bg-white p-3.5 transition duration-300 hover:-translate-y-1 hover:border-brand/25 hover:shadow-[0_18px_40px_-24px_rgba(15,60,58,0.5)] sm:rounded-3xl sm:p-5">
            <span className="absolute right-3 top-3 grid h-5 w-5 place-items-center rounded-full bg-brand-tint sm:right-4 sm:top-4" aria-hidden>
              <Check className="h-3 w-3 text-brand-deep" strokeWidth={3} />
            </span>
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-tint transition duration-300 group-hover:bg-brand-deep sm:h-12 sm:w-12">
              <Icon name={f.icon} className="h-5 w-5 text-brand-deep transition duration-300 group-hover:text-white sm:h-[22px] sm:w-[22px]" />
            </span>
            <h3 className="mt-3 font-display text-[14.5px] font-bold leading-snug text-ink sm:mt-4 sm:text-[17px]">{f.title}</h3>
            <p className="mt-1 text-[12.5px] leading-snug text-ink-muted sm:text-[14px]">{f.line}</p>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}

/* 5 · Documents ------------------------------------------------------ */

export function DocumentsGuide() {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-14">
      <Reveal className="hidden md:block">
        <PayrollDocumentsIllustration />
      </Reveal>

      <Reveal>
        {/* native exclusive accordion: same `name` keeps one panel open */}
        <div className="divide-y divide-ink/[0.07] border-y border-ink/[0.07]">
          {documents.map((d, i) => (
            <details key={d.title} name="documents" open={i === 0} className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex min-h-[60px] cursor-pointer list-none items-center gap-3.5 py-3 sm:min-h-[64px] sm:gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-tint transition group-open:bg-brand-deep sm:h-11 sm:w-11">
                  <Icon name={d.icon} className="h-5 w-5 text-brand-deep transition group-open:text-white" />
                </span>
                <h3 className="min-w-0 flex-1 font-display text-[16px] font-bold leading-snug text-ink sm:text-[18px]">{d.title}</h3>
                <span className="hidden text-[12.5px] text-ink-faint sm:inline sm:text-[13px]">{d.items.length} items</span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-ink/10 text-ink-soft transition duration-200 group-open:rotate-180 group-open:border-ink group-open:bg-ink group-open:text-white">
                  <ChevronDown className="h-4 w-4" aria-hidden />
                </span>
              </summary>
              <div className="pb-4 pl-[54px] sm:pb-5 sm:pl-[60px]">
                <ul className="grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                  {d.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-[14px] font-medium leading-snug text-ink sm:text-[15px]">
                      <span className="mt-0.5 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-brand-tint">
                        <Check className="h-3 w-3 text-brand-deep" strokeWidth={3} aria-hidden />
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>
                <p className="mt-2.5 text-[12.5px] leading-relaxed text-ink-muted sm:text-[13px]">{d.hint}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-brand/15 bg-brand-tint/60 p-4 sm:mt-7 sm:p-5">
          <div className="flex items-start gap-3">
            <span className="relative mt-1.5 flex h-2.5 w-2.5 shrink-0" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
            </span>
            <div>
              <p className="font-display text-[15px] font-bold text-ink sm:text-[16px]">{documentsHelp.title}</p>
              <p className="mt-0.5 text-[13.5px] leading-relaxed text-ink-muted sm:text-[14px]">{documentsHelp.sub}</p>
            </div>
          </div>
          <a
            href={whatsappLink(documentsHelp.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp mt-4 w-full !py-3 sm:ml-[22px] sm:w-auto"
          >
            <WhatsAppIcon className="h-[18px] w-[18px]" />
            Send documents on WhatsApp
          </a>
        </div>
      </Reveal>
    </div>
  );
}

/* 6 · PF vs ESI coverage explained (in the Packages slot) ------------ */

/** Desktop: one table, criteria down the side. Phones/tablets: a swipe row with one card per structure. */
export function SchemeComparison() {
  return (
    <>
      <div className="hidden overflow-hidden rounded-3xl border border-ink/[0.07] bg-white shadow-[0_18px_40px_-28px_rgba(15,60,58,0.45)] lg:block">
        <table className="w-full table-fixed border-collapse text-left">
          <caption className="sr-only">PF vs ESI coverage</caption>
          <thead>
            <tr className="border-b border-ink/[0.07] bg-brand-tint/50">
              <th scope="col" className="w-[22%] p-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-faint">Compare</th>
              {schemes.map((st) => (
                <th key={st.id} scope="col" className="p-5">
                  <span className="flex items-center gap-3">
                    <span className={tile}>
                      <Icon name={st.icon} className="h-5 w-5 text-brand-deep" />
                    </span>
                    <span className="font-display text-[18px] font-bold leading-snug text-ink">{st.name}</span>
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-ink/[0.06]">
            {comparison.map((row) => (
              <tr key={row.label}>
                <th scope="row" className="p-5 align-top">
                  <span className="flex items-center gap-2.5 text-[14.5px] font-semibold text-ink">
                    <Icon name={row.icon} className="h-[18px] w-[18px] shrink-0 text-brand-deep" />
                    {row.label}
                  </span>
                </th>
                {row.values.map((v, i) => (
                  <td key={i} className="p-5 align-top text-[14.5px] leading-relaxed text-ink-soft">
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AutoScrollRow interval={4000} label="PF vs ESI coverage" className="-mx-5 flex snap-x snap-mandatory scroll-px-5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:snap-none sm:scroll-px-0 sm:overflow-visible sm:px-0 sm:pb-0 gap-3 sm:grid sm:grid-cols-2 sm:gap-4 lg:hidden">
        {schemes.map((st, col) => (
          // plain <li> (no reveal): off-screen items in a swipe row would stay hidden until swiped
          <li key={st.id} className="sm:h-full w-[86%] shrink-0 snap-start sm:w-auto">
            <article className="card flex h-full flex-col p-5">
              <span className="flex items-center gap-3">
                <span className={tile}>
                  <Icon name={st.icon} className="h-5 w-5 text-brand-deep" />
                </span>
                <h3 className="font-display text-[17px] font-bold leading-snug text-ink">{st.name}</h3>
              </span>
              <dl className="mt-4 space-y-3.5">
                {comparison.map((row) => (
                  <div key={row.label}>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-faint">{row.label}</dt>
                    <dd className="mt-0.5 text-[14px] leading-relaxed text-ink-soft">{row.values[col]}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </li>
        ))}
      </AutoScrollRow>
    </>
  );
}

/* 8 · Mistakes (problem → solution) ---------------------------------- */

export function Mistakes() {
  return (
    <div>
      {/* column labels, desktop only */}
      <div className="mb-4 hidden grid-cols-[1fr_44px_1fr] items-center lg:grid">
        <p className="pl-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#B42318]">Common mistake</p>
        <span />
        <p className="pl-6">
          <Image src="/brand/logo-name.png" alt="How National Filings prevents it" width={924} height={71} className="h-4 w-auto" />
        </p>
      </div>

      <AutoScrollRow interval={4000} label="Common PF and ESI mistakes" className="-mx-5 flex snap-x snap-mandatory scroll-px-5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:snap-none sm:scroll-px-0 sm:overflow-visible sm:px-0 sm:pb-0 gap-3 sm:block sm:space-y-6 lg:space-y-4">
        {mistakes.map((m, i) => (
          // plain <li> (no reveal): off-screen items in a swipe row would stay hidden until swiped
          <li key={m.title} className="grid w-[86%] shrink-0 snap-start grid-rows-[1fr_auto_1fr] items-stretch sm:w-auto sm:grid-rows-none lg:grid-cols-[1fr_44px_1fr]">
            {/* problem */}
            <div className="rounded-2xl bg-[#FEF3F2] p-5 sm:rounded-3xl sm:p-6">
              <div className="flex items-start gap-3.5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-[#D92D20] shadow-[0_6px_16px_-10px_rgba(217,45,32,0.6)]">
                  <Icon name={m.icon} className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="flex items-center gap-1.5 font-display text-[16.5px] font-bold leading-snug text-ink sm:text-[18px]">
                    <X className="h-4 w-4 shrink-0 text-[#D92D20]" strokeWidth={3} aria-hidden />
                    {m.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-ink-soft sm:text-[15px]">{m.problem}</p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft sm:text-[14.5px]">
                    <span className="font-semibold text-[#B42318]">Impact: </span>
                    {m.impact}
                  </p>
                </div>
              </div>
            </div>

            {/* connector: down on phones, right on desktop */}
            <div className="flex justify-center py-1.5 lg:items-center lg:py-0" aria-hidden>
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-brand-deep shadow-[0_6px_16px_-8px_rgba(15,60,58,0.45)]">
                <ArrowRight className="h-4 w-4 rotate-90 lg:rotate-0" />
              </span>
            </div>

            {/* solution */}
            <div className="rounded-2xl bg-white p-5 shadow-[0_14px_36px_-22px_rgba(15,60,58,0.45)] ring-1 ring-brand/10 sm:rounded-3xl sm:p-6">
              <div className="flex items-start gap-3.5">
                {/* soft success green, distinct from the teal CTA buttons */}
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#E7F8EE] text-[#15803D] ring-1 ring-inset ring-[#15803D]/10">
                  <Icon name={m.fixIcon} className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="flex items-center gap-1.5 font-display text-[16.5px] font-bold leading-snug text-brand-deep sm:text-[18px]">
                    <Check className="h-4 w-4 shrink-0" strokeWidth={3} aria-hidden />
                    How National Filings helps
                  </p>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-ink-soft sm:text-[15px]">{m.fix}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </AutoScrollRow>

      {/* trust banner */}
      <div className="mt-10 rounded-3xl bg-gradient-to-r from-brand-tint via-[#EEF8F1] to-lime-tint p-5 sm:mt-14 sm:p-7 lg:flex lg:items-center lg:justify-between lg:gap-8">
        <p className="flex items-center gap-3 font-display text-[17px] font-bold leading-snug text-ink sm:text-[19px] lg:max-w-[300px]">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-[#15803D] shadow-[0_6px_16px_-10px_rgba(21,128,61,0.5)]">
            <ShieldCheck className="h-5 w-5" strokeWidth={2} aria-hidden />
          </span>
          Every return is checked against payroll before filing
        </p>
        <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 lg:mt-0 lg:flex lg:gap-6">
          {reviewChecks.map((c) => (
            <li key={c} className="flex items-center gap-2 text-[13.5px] font-semibold text-ink sm:text-[14.5px] lg:whitespace-nowrap">
              <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white">
                <Check className="h-3 w-3 text-brand-deep" strokeWidth={3} aria-hidden />
              </span>
              {c}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/** Pre-filing review CTA: WhatsApp first (send documents), call second */
export function ReviewCta() {
  const tel = telLink();
  return (
    <div className="rounded-3xl bg-ink px-5 py-8 text-center sm:px-10 sm:py-10 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:text-left">
      <div className="lg:max-w-[520px]">
        <p className="font-display text-[22px] font-bold leading-tight text-white sm:text-[28px]">{reviewCta.title}</p>
        <p className="mt-2 text-[14.5px] leading-relaxed text-white/70 sm:text-[16px]">{reviewCta.sub}</p>
        <ul className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 lg:justify-start">
          {reviewCta.badges.map((b) => (
            <li key={b} className="flex items-center gap-1.5 text-[13px] font-medium text-white/85 sm:text-[14px]">
              <Check className="h-3.5 w-3.5 text-lime" strokeWidth={3} aria-hidden />
              {b}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center lg:mt-0 lg:shrink-0">
        <a href={whatsappLink(reviewCta.message)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp !py-3.5 sm:!px-7">
          <WhatsAppIcon className="h-[18px] w-[18px]" />
          WhatsApp documents
        </a>
        {tel && (
          <a href={tel} className="btn-on-ink !py-3.5 sm:!px-7">
            <Phone className="h-4 w-4" aria-hidden />
            {CALL_LABEL}
          </a>
        )}
      </div>
    </div>
  );
}

/* 9 · Monthly PF & ESI compliance --------------------------------------- */

export function MonthlyGrid() {
  return (
    <ul className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-4">
      {monthly.map((c, i) => (
        <Reveal as="li" key={c.title} delay={(i % 4) * 0.05} className="h-full">
          <div className="flex h-full flex-col rounded-2xl border border-ink/[0.06] bg-white p-3.5 sm:rounded-3xl sm:p-5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-tint sm:h-12 sm:w-12">
              <Icon name={c.icon} className="h-5 w-5 text-brand-deep sm:h-[22px] sm:w-[22px]" />
            </span>
            <h3 className="mt-3 font-display text-[14.5px] font-bold leading-snug text-ink sm:mt-4 sm:text-[17px]">{c.title}</h3>
            <p className="mt-1 text-[12.5px] leading-snug text-ink-muted sm:text-[14px]">{c.line}</p>
            <span className="mt-auto pt-3">
              <span className="inline-flex items-center gap-1 rounded-full bg-brand-tint px-2.5 py-0.5 text-[11.5px] font-semibold text-brand-hover sm:text-[12px]">
                <CalendarClock className="h-3 w-3" aria-hidden />
                {c.when}
              </span>
            </span>
          </div>
        </Reveal>
      ))}
      {/* CTA tile spans the last two cells, so the grid ends on an action instead of a gap */}
      <Reveal as="li" delay={0.15} className="col-span-2 h-full">
        <a
          href={whatsappLink(monthlyCta.message)}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-full flex-col rounded-2xl bg-ink p-3.5 text-white transition duration-300 hover:-translate-y-1 sm:rounded-3xl sm:p-5"
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 sm:h-12 sm:w-12">
            <WhatsAppIcon className="h-5 w-5 text-lime" />
          </span>
          <span className="mt-3 font-display text-[14.5px] font-bold leading-snug sm:mt-4 sm:text-[17px]">{monthlyCta.title}</span>
          <span className="mt-1 text-[12.5px] leading-snug text-white/70 sm:text-[14px]">{monthlyCta.sub}</span>
          <span className="mt-auto flex items-center gap-1 pt-3 text-[13px] font-semibold text-lime sm:text-[14px]">
            Send this month's salary sheet
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </span>
        </a>
      </Reveal>
    </ul>
  );
}

/* 10 · Related services --------------------------------------------- */

export function RelatedPfEsiServices() {
  return (
    <ul className="grid grid-cols-2 gap-2.5 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
      {related.map((s, i) => (
        <li key={s.label} className={related.length % 2 === 1 && i === related.length - 1 ? "col-span-2 md:col-span-1" : ""}>
          {/* links once the page is published; a plain card until then */}
          <CardLink href={s.href} className="card group flex h-full flex-col !rounded-2xl p-4 sm:p-5">
            <span className="flex items-start justify-between">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-tint">
                <Icon name={s.icon} className="h-5 w-5 text-brand-deep" />
              </span>
              {s.href && <ArrowUpRight className="h-4 w-4 text-ink-faint transition group-hover:text-ink" aria-hidden />}
            </span>
            <span className="mt-4 font-display text-[14.5px] font-bold leading-snug text-ink sm:text-[16px]">{s.label.replace(/^\w/, (c) => c.toUpperCase())}</span>
            <span className="mt-1 text-[12.5px] text-ink-muted sm:text-[13px]">in Chennai</span>
          </CardLink>
        </li>
      ))}
    </ul>
  );
}
