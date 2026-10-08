import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Ban,
  BadgeCheck,
  BadgeIndianRupee,
  BellOff,
  Briefcase,
  Building2,
  Calculator,
  CalendarCheck,
  CalendarClock,
  Check,
  ChevronDown,
  ClipboardCheck,
  EyeOff,
  FileCheck2,
  FileSpreadsheet,
  FileText,
  FileWarning,
  Globe,
  Headset,
  HeartHandshake,
  Landmark,
  Laptop,
  MailCheck,
  MailWarning,
  MessageCircle,
  PenTool,
  Phone,
  PiggyBank,
  Plane,
  ReceiptIndianRupee,
  ReceiptText,
  Rocket,
  Scale,
  SearchCheck,
  Send,
  ShieldCheck,
  Smile,
  Stethoscope,
  Store,
  TrendingDown,
  TrendingUp,
  UserRound,
  X,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { AutoScrollRow } from "@/components/ui/AutoScrollRow";
import { SampleTag } from "@/components/ui/SampleTag";
import { SHOW_SAMPLES } from "@/lib/proof";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { telLink, whatsappLink } from "@/lib/site";
import { linkTarget } from "@/lib/routes";
import { TaxDocumentsIllustration } from "./TaxDocumentsIllustration";
import {
  CALL_LABEL,
  audienceIntro,
  audiences,
  benefits,
  documents,
  documentsHelp,
  everyPackage,
  included,
  mistakes,
  packages,
  packagesNote,
  related,
  reviewChecks,
  reviewCta,
  services,
  timeline,
  timelineNote,
} from "@/lib/income-tax";

const ICONS: Record<string, LucideIcon> = {
  Ban, BadgeCheck, BadgeIndianRupee, BellOff, Briefcase, Building2, Calculator, CalendarCheck, CalendarClock, ClipboardCheck, EyeOff,
  FileCheck2, FileSpreadsheet, FileText, FileWarning, Globe, Headset, HeartHandshake, Landmark, Laptop, MailCheck, MailWarning, MessageCircle,
  PenTool, PiggyBank, Plane, ReceiptIndianRupee, ReceiptText, Rocket, Scale, SearchCheck, Send, ShieldCheck, Smile, Stethoscope, Store,
  TrendingDown, TrendingUp, UserRound,
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
    <AutoScrollRow interval={4000} label="Income tax services" className="-mx-5 flex snap-x snap-mandatory scroll-px-5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:snap-none sm:scroll-px-0 sm:overflow-visible sm:px-0 sm:pb-0 gap-3 sm:grid sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
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

              {s.href.startsWith("/") ? "Learn more" : "Ask an expert"}
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
        <TaxDocumentsIllustration />
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

/* 6 · Packages ------------------------------------------------------ */

export function Packages() {
  return (
    <>
      <AutoScrollRow interval={4000} label="Income tax filing packages" className="-mx-5 flex snap-x snap-mandatory scroll-px-5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:snap-none sm:scroll-px-0 sm:overflow-visible sm:px-0 sm:pb-0 gap-3 sm:grid sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:items-stretch">
        {packages.map((p) => {
          const dark = p.popular;
          const showPrice = SHOW_SAMPLES || !p.price.sample;
          return (
            // plain <li> (no reveal): off-screen items in a swipe row would stay hidden until swiped
            <li key={p.id} className="sm:h-full w-[86%] shrink-0 snap-start sm:w-auto">
              <article
                className={`relative flex h-full flex-col rounded-3xl p-5 sm:p-7 ${
                  dark
                    ? "bg-ink text-white shadow-[0_30px_60px_-30px_rgba(15,60,58,0.7)] lg:-my-3 lg:py-10"
                    : "border border-ink/[0.07] bg-white transition duration-300 hover:-translate-y-1 hover:border-brand/25 hover:shadow-[0_18px_40px_-24px_rgba(15,60,58,0.5)]"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className={`grid h-11 w-11 place-items-center rounded-xl ${dark ? "bg-white/10" : "bg-brand-tint"}`}>
                    <Icon name={p.icon} className={`h-5 w-5 ${dark ? "text-lime" : "text-brand-deep"}`} />
                  </span>
                  {p.popular && (
                    <span className="rounded-full bg-lime px-3 py-1 text-[11.5px] font-bold uppercase tracking-[0.08em] text-ink">For most employees</span>
                  )}
                </div>
                <h3 className={`mt-4 font-display text-[19px] font-bold leading-snug sm:text-[21px] ${dark ? "text-white" : "text-ink"}`}>{p.name}</h3>
                <p className={`mt-1 text-[14px] leading-relaxed sm:text-[14.5px] ${dark ? "text-white/70" : "text-ink-muted"}`}>{p.description}</p>

                <div className={`mt-5 border-y py-4 ${dark ? "border-white/10" : "border-ink/[0.07]"}`}>
                  <p className={`text-[11px] font-semibold uppercase tracking-[0.12em] ${dark ? "text-white/50" : "text-ink-faint"}`}>Starting from</p>
                  {showPrice ? (
                    <p className="mt-1 flex items-center gap-2">
                      <span className={`font-display text-[30px] font-extrabold leading-none tracking-[-0.02em] sm:text-[34px] ${dark ? "text-white" : "text-ink"}`}>{p.price.value}</span>
                      <SampleTag show={SHOW_SAMPLES && p.price.sample} />
                    </p>
                  ) : (
                    <p className={`mt-1 font-display text-[20px] font-bold leading-tight ${dark ? "text-white" : "text-ink"}`}>Quoted after a short call</p>
                  )}
                  <p className={`mt-1.5 text-[12.5px] ${dark ? "text-white/55" : "text-ink-muted"}`}>Professional fee. Any tax due is paid to the department.</p>
                </div>

                <ul className="mt-5 grid gap-2.5">
                  {p.includes.map((it) => (
                    <li key={it} className={`flex items-center gap-2.5 text-[14px] font-medium sm:text-[14.5px] ${dark ? "text-white/90" : "text-ink-soft"}`}>
                      <span className={`grid h-5 w-5 shrink-0 place-items-center rounded-full ${dark ? "bg-lime/20" : "bg-brand-tint"}`}>
                        <Check className={`h-3 w-3 ${dark ? "text-lime" : "text-brand-deep"}`} strokeWidth={3} aria-hidden />
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <a
                    href={whatsappLink(p.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full !py-3.5 ${dark ? "btn-whatsapp" : "btn-ghost"}`}
                  >
                    <WhatsAppIcon className={`h-4 w-4 ${dark ? "" : "text-whatsapp"}`} />
                    Get a quote
                    <span className="sr-only"> for {p.name}</span>
                  </a>
                </div>
              </article>
            </li>
          );
        })}
      </AutoScrollRow>

      <div className="mt-12 sm:mt-16">
        <h3 className="text-center font-display text-[19px] font-bold text-ink sm:text-[22px]">What&apos;s included in every package?</h3>
        <ul className="mx-auto mt-5 grid max-w-4xl grid-cols-2 gap-2.5 sm:mt-7 sm:grid-cols-3 sm:gap-3">
          {everyPackage.map((f) => (
            <li key={f.title} className="flex items-center gap-3 rounded-2xl border border-ink/[0.06] bg-white p-3 sm:p-3.5">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-tint sm:h-10 sm:w-10">
                <Icon name={f.icon} className="h-[18px] w-[18px] text-brand-deep" />
              </span>
              <span className="text-[13.5px] font-semibold leading-snug text-ink sm:text-[15px]">{f.title}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 flex items-center justify-center gap-2 text-center text-[13px] font-medium text-ink-soft sm:text-[14px]">
          <ShieldCheck className="h-4 w-4 shrink-0 text-brand-deep" aria-hidden />
          {packagesNote}
        </p>
      </div>
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

      <AutoScrollRow interval={4000} label="Common tax filing mistakes" className="-mx-5 flex snap-x snap-mandatory scroll-px-5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:snap-none sm:scroll-px-0 sm:overflow-visible sm:px-0 sm:pb-0 gap-3 sm:block sm:space-y-6 lg:space-y-4">
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
          Every return is reviewed by a tax expert before filing
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

/* 10 · Related services --------------------------------------------- */

export function RelatedTaxServices() {
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
