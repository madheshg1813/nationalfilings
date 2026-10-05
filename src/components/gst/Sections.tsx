import Image from "next/image";
import {
  ArrowLeftRight,
  ArrowRight,
  Award,
  BadgeIndianRupee,
  Briefcase,
  CalendarCheck,
  CalendarClock,
  CalendarRange,
  CalendarX2,
  Check,
  Factory,
  FilePen,
  FilePlus2,
  FileSpreadsheet,
  FileX2,
  GraduationCap,
  HardHat,
  Headset,
  HeartHandshake,
  Laptop,
  ListChecks,
  MailCheck,
  MailWarning,
  MapPin,
  MapPinned,
  MapPinOff,
  Megaphone,
  MessageCircle,
  Plane,
  ReceiptText,
  Rocket,
  Scale,
  Ship,
  ShieldAlert,
  ShieldCheck,
  ShoppingCart,
  Shuffle,
  Stethoscope,
  Store,
  TrendingUp,
  UserCheck,
  UtensilsCrossed,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { AutoScrollRow } from "@/components/ui/AutoScrollRow";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { whatsappLink } from "@/lib/site";
import { DocumentTabs } from "./DocumentTabs";
import {
  audiences,
  benefits,
  documentTabs,
  documentsMessage,
  insights,
  packages,
  packagesNote,
  problems,
  reasons,
  services,
  steps,
  stepsNote,
} from "@/lib/gst";

const ICONS: Record<string, LucideIcon> = {
  ArrowLeftRight, Award, BadgeIndianRupee, Briefcase, CalendarCheck, CalendarClock, CalendarRange, CalendarX2, Factory,
  FilePen, FilePlus2, FileSpreadsheet, FileX2, GraduationCap, HardHat, Headset, HeartHandshake, Laptop, ListChecks,
  MailCheck, MailWarning, MapPinned, MapPinOff, Megaphone, MessageCircle, Plane, ReceiptText, Rocket, Scale, Ship,
  ShieldAlert, ShieldCheck, ShoppingCart, Shuffle, Stethoscope, Store, TrendingUp, UserCheck, UtensilsCrossed, Zap,
};

function Icon({ name, className }: { name: string; className?: string }) {
  const I = ICONS[name] ?? ShieldCheck;
  return <I className={className} strokeWidth={1.75} aria-hidden />;
}

/* 3 · Who needs GST support ------------------------------------------- */

export function Audiences() {
  return (
    // phones: swipeable row (snap); sm+: grid
    <AutoScrollRow label="Businesses that need GST support" className="-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-2.5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:grid sm:snap-none sm:scroll-px-0 sm:grid-cols-3 sm:gap-3 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-6">
      {audiences.map((a) => (
        // no reveal animation: off-screen items in a swipe row would stay hidden until swiped
        <li key={a.title} className="w-[40%] shrink-0 snap-start sm:w-auto">
          <figure className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink/5">
            <Image
              src={a.image}
              alt={a.alt}
              fill
              // oversampled so cards stay sharp on Retina screens
              sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 80vw"
              quality={90}
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            {/* gradient only behind the caption, so the photo stays clear */}
            <span className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" aria-hidden />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-2 p-3">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-white/15 text-white ring-1 ring-inset ring-white/25 backdrop-blur">
                <Icon name={a.icon} className="h-3.5 w-3.5" />
              </span>
              <span className="font-display text-[13.5px] font-bold leading-snug text-white sm:text-[14.5px]">{a.title}</span>
            </figcaption>
          </figure>
        </li>
      ))}
    </AutoScrollRow>
  );
}

/* 4 · Services --------------------------------------------------------- */

export function Services() {
  return (
    // phones: swipeable row (snap); sm+: grid
    <AutoScrollRow interval={4000} label="GST services" className="-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-3 overflow-x-auto px-5 pb-3 [scrollbar-width:none] sm:mx-0 sm:grid sm:snap-none sm:scroll-px-0 sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">
      {services.map((s) => (
        <li key={s.title} className="w-[78%] shrink-0 snap-start sm:w-auto">
          <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-ink/[0.06] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_48px_-28px_rgba(15,60,58,0.55)] hover:ring-brand/20">
            {/* visual header */}
            <div className="relative flex h-24 items-center justify-between overflow-hidden bg-gradient-to-br from-brand-tint via-white to-lime-tint px-5 sm:h-28">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-brand-deep shadow-[0_10px_24px_-14px_rgba(15,60,58,0.55)] sm:h-14 sm:w-14">
                <Icon name={s.icon} className="h-6 w-6 sm:h-7 sm:w-7" />
              </span>
              <Icon name={s.icon} className="absolute -bottom-5 -right-3 h-24 w-24 text-brand/[0.08]" />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-display text-[17px] font-bold leading-snug text-ink sm:text-[18px]">{s.title}</h3>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-muted sm:text-[14px]">{s.line}</p>
              <ul className="mt-3.5 space-y-1.5">
                {s.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-[13px] font-medium text-ink-soft sm:text-[13.5px]">
                    <Check className="h-3.5 w-3.5 shrink-0 text-brand-deep" strokeWidth={3} aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink(s.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex min-h-[44px] items-center gap-1.5 pt-4 text-[14px] font-semibold text-brand-deep hover:text-brand-hover"
              >
                {s.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </a>
            </div>
          </article>
        </li>
      ))}
    </AutoScrollRow>
  );
}

/* 5 · Benefits --------------------------------------------------------- */

export function Benefits() {
  return (
    // phones: compact 2-column tiles (icon on top); sm+: icon beside the text
    <ul className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-4">
      {benefits.map((b, i) => (
        <Reveal as="li" key={b.title} delay={(i % 4) * 0.04} className="h-full">
          <div className="flex h-full flex-col gap-2.5 rounded-2xl bg-cream-soft/70 p-3.5 sm:flex-row sm:items-start sm:gap-3 sm:p-5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white text-brand-deep ring-1 ring-ink/[0.06] sm:h-10 sm:w-10">
              <Icon name={b.icon} className="h-[18px] w-[18px] sm:h-5 sm:w-5" />
            </span>
            <div className="min-w-0">
              <h3 className="font-display text-[14px] font-bold leading-snug text-ink sm:text-[16.5px]">{b.title}</h3>
              <p className="mt-0.5 text-[12px] leading-snug text-ink-muted sm:text-[14px] sm:leading-relaxed">{b.line}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}

/* 6 · Process (horizontal timeline on desktop, vertical on phones) ---- */

export function ProcessTimeline() {
  return (
    <>
      <ol className="relative grid gap-0 lg:grid-cols-6 lg:gap-4">
        {/* connecting line */}
        <span className="absolute bottom-6 left-[19px] top-6 w-0.5 bg-gradient-to-b from-brand/40 to-brand/10 lg:bottom-auto lg:left-[8%] lg:right-[8%] lg:top-[19px] lg:h-0.5 lg:w-auto lg:bg-gradient-to-r" aria-hidden />
        {steps.map((s, i) => (
          <li key={s.title} className="relative flex gap-4 pb-6 last:pb-0 lg:flex-col lg:items-center lg:gap-0 lg:pb-0 lg:text-center">
            <span
              className={`relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full font-display text-[15px] font-bold ring-4 ring-cream-soft ${
                i === steps.length - 1 ? "bg-brand-deep text-white" : "bg-white text-ink ring-offset-0"
              } shadow-[0_6px_16px_-8px_rgba(15,60,58,0.5)]`}
            >
              {i + 1}
            </span>
            <div className="min-w-0 pt-1 lg:mt-4 lg:pt-0">
              <span className="inline-flex rounded-full bg-white px-2.5 py-0.5 text-[11.5px] font-semibold text-brand-hover ring-1 ring-brand/15">{s.time}</span>
              <h3 className="mt-1.5 font-display text-[16px] font-bold leading-snug text-ink sm:text-[17px]">{s.title}</h3>
              <p className="mt-1 text-[13.5px] leading-relaxed text-ink-muted lg:text-[13.5px]">{s.sub}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mx-auto mt-6 flex max-w-3xl items-start justify-center gap-2 text-center text-[12.5px] leading-relaxed text-ink-muted sm:mt-8 sm:text-[13.5px]">
        <CalendarClock className="mt-0.5 hidden h-4 w-4 shrink-0 text-brand-deep sm:block" aria-hidden />
        {stepsNote}
      </p>
    </>
  );
}

/* 7 · Documents (tabs) ------------------------------------------------- */

export function Documents() {
  return (
    <>
      <DocumentTabs tabs={documentTabs} />
      <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center gap-3 rounded-2xl bg-brand-tint/60 p-4 text-center ring-1 ring-brand/15 sm:mt-10 sm:flex-row sm:justify-between sm:p-5 sm:text-left">
        <p className="text-[14px] text-ink-soft sm:text-[15px]">
          <strong className="font-display text-ink">Scanned copies are enough.</strong> We check every document before applying.
        </p>
        <a href={whatsappLink(documentsMessage)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp shrink-0 !py-3">
          <WhatsAppIcon className="h-4 w-4" />
          Send documents
        </a>
      </div>
    </>
  );
}

/* 8 · Common GST problems (issue → impact → fix) ---------------------- */

export function Problems() {
  return (
    <div>
      <div className="mb-3 hidden grid-cols-[1.1fr_1.2fr_1.2fr_1.4fr] gap-4 px-5 lg:grid">
        {["Problem", "What happens", "Impact"].map((h, i) => (
          <p key={h} className={`text-[11.5px] font-semibold uppercase tracking-[0.14em] ${i === 2 ? "text-[#B42318]" : "text-ink-faint"}`}>
            {h}
          </p>
        ))}
        <p>
          <Image src="/brand/logo-name.png" alt="How National Filings solves it" width={924} height={71} className="h-4 w-auto" />
        </p>
      </div>
      <AutoScrollRow interval={4000} label="Common GST problems" className="-mx-5 flex snap-x snap-mandatory scroll-px-5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:snap-none sm:scroll-px-0 sm:overflow-visible sm:px-0 sm:pb-0 gap-3 sm:block sm:space-y-3">
        {problems.map((p, i) => (
          // plain <li> (no reveal): off-screen items in a swipe row would stay hidden until swiped
          <li key={p.title} className="w-[86%] shrink-0 snap-start sm:w-auto">
            <div className="flex h-full flex-col gap-3 rounded-2xl bg-white p-4 ring-1 ring-ink/[0.06] sm:grid sm:p-5 lg:grid-cols-[1.1fr_1.2fr_1.2fr_1.4fr] lg:items-center lg:gap-4">
              <h3 className="flex items-center gap-3 font-display text-[16px] font-bold leading-snug text-ink">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#FEF3F2] text-[#D92D20]">
                  <Icon name={p.icon} className="h-5 w-5" />
                </span>
                {p.title}
              </h3>
              <p className="text-[13.5px] leading-relaxed text-ink-soft sm:text-[14px]">
                <span className="font-semibold text-ink lg:hidden">What happens: </span>
                {p.issue}
              </p>
              <p className="flex items-start gap-2 rounded-xl bg-[#FEF3F2] px-3 py-2.5 text-[13.5px] leading-relaxed text-[#912018] sm:text-[14px]">
                <X className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.5} aria-hidden />
                <span>
                  <span className="font-semibold lg:hidden">Impact: </span>
                  {p.impact}
                </span>
              </p>
              <p className="mt-auto flex items-start gap-2 rounded-xl bg-[#E7F8EE] px-3 py-2.5 text-[13.5px] leading-relaxed text-[#14532D] sm:mt-0 sm:text-[14px]">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#15803D]" strokeWidth={3} aria-hidden />
                <span>
                  <span className="font-semibold lg:hidden">How we solve it: </span>
                  {p.fix}
                </span>
              </p>
            </div>
          </li>
        ))}
      </AutoScrollRow>
    </div>
  );
}

/* 9 · Packages --------------------------------------------------------- */

export function Packages() {
  return (
    <>
      <AutoScrollRow interval={4000} label="GST service packages" className="-mx-5 flex snap-x snap-mandatory scroll-px-5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:snap-none sm:scroll-px-0 sm:overflow-visible sm:px-0 sm:pb-0 gap-3 sm:grid sm:gap-5 lg:grid-cols-3 lg:items-stretch">
        {packages.map((p, i) => {
          const dark = "highlight" in p && p.highlight;
          return (
            // plain <li> (no reveal): off-screen items in a swipe row would stay hidden until swiped
            <li key={p.name} className="sm:h-full w-[86%] shrink-0 snap-start sm:w-auto">
              <article
                className={`relative flex h-full flex-col rounded-3xl p-5 sm:p-7 ${
                  dark ? "bg-ink text-white shadow-[0_30px_60px_-30px_rgba(15,60,58,0.7)] lg:-my-3 lg:py-10" : "bg-white ring-1 ring-ink/[0.07]"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className={`grid h-11 w-11 place-items-center rounded-xl ${dark ? "bg-white/10 text-lime" : "bg-brand-tint text-brand-deep"}`}>
                    <Icon name={p.icon} className="h-5 w-5" />
                  </span>
                  <span className={`rounded-full px-3 py-1 text-[11.5px] font-semibold ${dark ? "bg-lime text-ink" : "bg-cream-soft text-ink-soft"}`}>{p.tag}</span>
                </div>
                <h3 className={`mt-4 font-display text-[20px] font-bold sm:text-[22px] ${dark ? "text-white" : "text-ink"}`}>{p.name}</h3>

                <p className={`mt-4 text-[11px] font-semibold uppercase tracking-[0.12em] ${dark ? "text-white/50" : "text-ink-faint"}`}>Ideal for</p>
                <p className={`mt-1 text-[14px] leading-relaxed ${dark ? "text-white/80" : "text-ink-soft"}`}>{p.idealFor}</p>

                <p className={`mt-5 text-[11px] font-semibold uppercase tracking-[0.12em] ${dark ? "text-white/50" : "text-ink-faint"}`}>Included</p>
                <ul className="mt-2 grid gap-2">
                  {p.includes.map((it) => (
                    <li key={it} className={`flex items-center gap-2.5 text-[14px] font-medium ${dark ? "text-white/90" : "text-ink-soft"}`}>
                      <Check className={`h-4 w-4 shrink-0 ${dark ? "text-lime" : "text-brand-deep"}`} strokeWidth={3} aria-hidden />
                      {it}
                    </li>
                  ))}
                </ul>

                <div className={`mt-5 flex items-center gap-2.5 rounded-xl px-3.5 py-3 text-[13.5px] ${dark ? "bg-white/[0.06] text-white/85" : "bg-cream-soft text-ink-soft"}`}>
                  <Headset className={`h-4 w-4 shrink-0 ${dark ? "text-lime" : "text-brand-deep"}`} aria-hidden />
                  <span>
                    <span className="font-semibold">Support:</span> {p.support}
                  </span>
                </div>

                <div className="mt-auto pt-6">
                  <a href={whatsappLink(p.message)} target="_blank" rel="noopener noreferrer" className={`w-full !py-3.5 ${dark ? "btn-whatsapp" : "btn-ghost"}`}>
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
      <p className="mx-auto mt-6 flex max-w-3xl items-start justify-center gap-2 text-center text-[13px] text-ink-muted sm:mt-8 sm:text-[14px]">
        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-deep" aria-hidden />
        {packagesNote}
      </p>
    </>
  );
}

/* 10 · Why National Filings ------------------------------------------- */

export function Reasons() {
  return (
    <ul className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-4">
      {reasons.map((r, i) => (
        <Reveal as="li" key={r.title} delay={(i % 4) * 0.04} className="h-full">
          <div className="h-full rounded-2xl bg-white p-4 ring-1 ring-ink/[0.06] sm:p-5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-tint text-brand-deep">
              <Icon name={r.icon} className="h-5 w-5" />
            </span>
            <h3 className="mt-3 font-display text-[14.5px] font-bold leading-snug text-ink sm:text-[16.5px]">{r.title}</h3>
            <p className="mt-1 text-[12.5px] leading-relaxed text-ink-muted sm:text-[14px]">{r.line}</p>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}

/* 11 · GST in Chennai insights ---------------------------------------- */

export function Insights() {
  return (
    <AutoScrollRow interval={4000} label="GST insights for Chennai businesses" className="-mx-5 flex snap-x snap-mandatory scroll-px-5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:snap-none sm:scroll-px-0 sm:overflow-visible sm:px-0 sm:pb-0 gap-3 sm:grid sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
      {insights.map((x, i) => (
        // plain <li> (no reveal): off-screen items in a swipe row would stay hidden until swiped
        <li key={x.title} className="sm:h-full w-[82%] shrink-0 snap-start sm:w-auto">
          <div className="h-full rounded-3xl bg-gradient-to-br from-white to-cream-soft/60 p-5 ring-1 ring-ink/[0.06] sm:p-6">
            <div className="flex items-center justify-between">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-tint text-brand-deep">
                <Icon name={x.icon} className="h-5 w-5" />
              </span>
              <span className="flex items-center gap-1 text-[11.5px] font-semibold text-ink-faint">
                <MapPin className="h-3.5 w-3.5" aria-hidden />
                Chennai
              </span>
            </div>
            <h3 className="mt-4 font-display text-[16.5px] font-bold leading-snug text-ink sm:text-[18px]">{x.title}</h3>
            <p className="mt-1.5 text-[14px] leading-relaxed text-ink-muted sm:text-[14.5px]">{x.line}</p>
          </div>
        </li>
      ))}
    </AutoScrollRow>
  );
}
