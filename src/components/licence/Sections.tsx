import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeIndianRupee,
  Briefcase,
  Building2,
  CalendarClock,
  Check,
  ClipboardCheck,
  Factory,
  FileCheck2,
  FilePen,
  FileWarning,
  GraduationCap,
  HardHat,
  Headset,
  IdCard,
  IndianRupee,
  Landmark,
  Laptop,
  Layers,
  ListTree,
  MapPinned,
  MessageCircle,
  ReceiptIndianRupee,
  ReceiptText,
  Rocket,
  ShieldCheck,
  Ship,
  ShoppingBag,
  ShoppingCart,
  Shuffle,
  Stethoscope,
  Store,
  TrendingUp,
  Truck,
  UserCheck,
  UserRound,
  Users,
  X,
  Zap,
  UtensilsCrossed,
  ChefHat,
  Package,
  Soup,
  Coffee,
  Hotel,
  RefreshCw,
  ScrollText,
  Home,
  Clock,
  KeyRound,
  Globe,
  Plane,
  Lock,
  Fingerprint,
  Gavel,
  BadgeCheck,
  Leaf,
  HardDrive,
  Scale,
  SearchCheck,
  FileText,
  Mail,
  Gauge,
  ShieldAlert,
  Eye,
  Signature,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { AutoScrollRow } from "@/components/ui/AutoScrollRow";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { whatsappLink } from "@/lib/site";
import { linkTarget } from "@/lib/routes";
import type { LicencePageData } from "@/lib/licences/types";

const ICONS: Record<string, LucideIcon> = {
  Award, BadgeIndianRupee, Briefcase, Building2, ClipboardCheck, Factory, FileCheck2, FilePen, FileWarning, GraduationCap, HardHat,
  Headset, IdCard, IndianRupee, Landmark, Laptop, Layers, ListTree, MapPinned, MessageCircle, ReceiptIndianRupee, ReceiptText, Rocket,
  ShieldCheck, Ship, ShoppingBag, ShoppingCart, Shuffle, Stethoscope, Store, TrendingUp, Truck, UserCheck, UserRound, Users, Zap,
  UtensilsCrossed, ChefHat, Package, Soup, Coffee, Hotel, CalendarClock, RefreshCw, ScrollText, Home, Clock, KeyRound, Globe, Plane,
  Lock, Fingerprint, Gavel, BadgeCheck, Leaf, HardDrive, Scale, SearchCheck, FileText, Mail, Gauge, ShieldAlert, Eye, Signature,
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

/* 2 · Benefits: tinted icon cards, 4 across ---------------------------- */

export function BenefitCards({ benefits }: { benefits: LicencePageData["benefits"] }) {
  return (
    <ul className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-4">
      {benefits.map((b, i) => (
        <Reveal as="li" key={b.title} delay={(i % 4) * 0.05} className="h-full">
          <div className="group h-full rounded-2xl border border-ink/[0.06] bg-white p-3.5 transition duration-300 hover:-translate-y-1 hover:border-brand/25 hover:shadow-[0_18px_40px_-24px_rgba(15,60,58,0.5)] sm:rounded-3xl sm:p-5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-tint transition duration-300 group-hover:bg-brand-deep sm:h-12 sm:w-12">
              <Icon name={b.icon} className="h-5 w-5 text-brand-deep transition duration-300 group-hover:text-white sm:h-[22px] sm:w-[22px]" />
            </span>
            <h3 className="mt-3 font-display text-[14.5px] font-bold leading-snug text-ink sm:mt-4 sm:text-[17px]">{b.title}</h3>
            <p className="mt-1 text-[12.5px] leading-snug text-ink-muted sm:text-[14px]">{b.line}</p>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}

/* 3 · Who should apply: compact rows, icon left ------------------------- */

export function ApplicantGrid({ applicants }: { applicants: LicencePageData["applicants"] }) {
  return (
    <ul className="grid gap-2.5 min-[420px]:grid-cols-2 sm:gap-3 lg:grid-cols-4">
      {applicants.map((a, i) => (
        <Reveal as="li" key={a.title} delay={(i % 4) * 0.04} className="h-full">
          <div className="flex h-full items-start gap-3 rounded-2xl border border-ink/[0.07] bg-white p-3.5 sm:p-4">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-ink/10 bg-white">
              <Icon name={a.icon} className="h-5 w-5 text-ink" />
            </span>
            <div className="min-w-0">
              <h3 className="font-display text-[15px] font-bold leading-snug text-ink sm:text-[16px]">{a.title}</h3>
              <p className="mt-0.5 text-[12.5px] leading-snug text-ink-muted sm:text-[13.5px]">{a.line}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}

/* 4 · MSME opportunities in Chennai: photo tiles (Business Opportunities style) */

export function IndustryTiles({ intro: opportunitiesIntro, industries }: Omit<NonNullable<LicencePageData["opportunities"]>, "title">) {
  return (
    <>
      <p className="mx-auto max-w-3xl text-center text-[15px] leading-relaxed text-ink-soft sm:text-[17px]">{opportunitiesIntro}</p>
      {/* phones: swipeable row (snap); sm+: grid */}
      <AutoScrollRow label="Sectors in Chennai" className="-mx-5 mt-8 flex snap-x snap-mandatory scroll-px-5 gap-2.5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:mt-10 sm:grid sm:snap-none sm:scroll-px-0 sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">
        {industries.map((x) => (
          // no reveal animation: off-screen items in a swipe row would stay hidden until swiped
          <li key={x.title} className="w-[40%] shrink-0 snap-start sm:h-full sm:w-auto">
            <figure className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink/5 sm:aspect-[4/3] sm:rounded-3xl">
              <Image
                src={x.image}
                alt={x.alt}
                fill
                sizes="(min-width: 1280px) 300px, (min-width: 1024px) 23vw, (min-width: 640px) 46vw, 40vw"
                quality={90}
                className="object-cover transition duration-500 group-hover:scale-105"
              />
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

/* 5 · Documents: two cards + online note -------------------------------- */

export function DocumentCards({ documents, documentsNote }: Pick<LicencePageData, "documents" | "documentsNote">) {
  return (
    <>
      <ul className="grid gap-3 sm:grid-cols-2 sm:gap-5">
        {documents.map((d, i) => (
          <Reveal as="li" key={d.title} delay={i * 0.06} className="h-full">
            <div className="h-full rounded-3xl border border-ink/[0.07] bg-white p-5 shadow-[0_14px_36px_-26px_rgba(15,60,58,0.45)] sm:p-7">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-deep text-white">
                  <Icon name={d.icon} className="h-5 w-5" />
                </span>
                <h3 className="font-display text-[17px] font-bold text-ink sm:text-[19px]">{d.title}</h3>
              </div>
              <ul className="mt-5 grid gap-2.5">
                {d.items.map((it) => (
                  <li key={it} className="flex items-center gap-2.5 text-[15px] font-medium text-ink">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-tint">
                      <Check className="h-3 w-3 text-brand-deep" strokeWidth={3} aria-hidden />
                    </span>
                    {it}
                  </li>
                ))}
              </ul>
              <p className="mt-4 border-t border-ink/[0.06] pt-3 text-[13px] leading-relaxed text-ink-muted">{d.hint}</p>
            </div>
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-4 sm:mt-6">
        <div className="flex flex-col gap-4 rounded-2xl border border-brand/15 bg-brand-tint/60 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <div className="flex items-start gap-3">
            <span className="relative mt-1.5 flex h-2.5 w-2.5 shrink-0" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
            </span>
            <div>
              <p className="font-display text-[15px] font-bold text-ink sm:text-[16px]">{documentsNote.title}</p>
              <p className="mt-0.5 text-[13.5px] leading-relaxed text-ink-muted sm:text-[14px]">{documentsNote.sub}</p>
            </div>
          </div>
          <a href={whatsappLink(documentsNote.message)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp shrink-0 !py-3">
            <WhatsAppIcon className="h-[18px] w-[18px]" />
            Send details on WhatsApp
          </a>
        </div>
      </Reveal>
    </>
  );
}

/* 6 · Process: horizontal timeline (vertical on phones) ------------------ */

export function HorizontalTimeline({ steps, processNote }: Pick<LicencePageData, "steps" | "processNote">) {
  return (
    <>
      <ol className="relative grid gap-5 lg:grid-cols-5 lg:gap-4">
        {/* connecting line behind the numbers, desktop only */}
        <span className="pointer-events-none absolute left-[10%] right-[10%] top-[22px] hidden h-0.5 bg-gradient-to-r from-brand/40 via-brand to-lime lg:block" aria-hidden />
        {steps.map((s, i) => (
          <Reveal as="li" key={s.title} delay={i * 0.06} className="relative flex gap-4 lg:block lg:text-center">
            {/* vertical connector on phones */}
            {i < steps.length - 1 && <span className="absolute left-[21px] top-12 h-[calc(100%-1.5rem)] w-0.5 bg-brand/20 lg:hidden" aria-hidden />}
            <span
              className={`relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full font-display text-[15px] font-bold ring-4 ring-white lg:mx-auto ${
                i === steps.length - 1 ? "bg-lime text-ink" : "bg-ink text-white"
              }`}
            >
              {i + 1}
            </span>
            <div className="min-w-0 pb-1 lg:mt-4">
              <h3 className="font-display text-[16px] font-bold leading-snug text-ink sm:text-[17px]">{s.title}</h3>
              <p className="mt-1 text-[13.5px] leading-relaxed text-ink-muted sm:text-[14px]">{s.sub}</p>
              <span className="mt-2 inline-flex rounded-full bg-brand-tint px-2.5 py-0.5 text-[11.5px] font-semibold text-brand-hover sm:text-[12px]">{s.time}</span>
            </div>
          </Reveal>
        ))}
      </ol>
      <p className="mx-auto mt-6 flex max-w-3xl items-start justify-center gap-2 text-center text-[12.5px] leading-relaxed text-ink-muted sm:mt-8 sm:text-[13.5px]">
        <CalendarClock className="mt-0.5 hidden h-4 w-4 shrink-0 text-brand-deep sm:block" aria-hidden />
        {processNote}
      </p>
    </>
  );
}

/* 7 · Mistakes: problem / prevention cards ------------------------------- */

export function MistakeCards({ mistakes }: { mistakes: LicencePageData["mistakes"] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 sm:gap-5">
      {mistakes.map((m, i) => (
        <Reveal as="li" key={m.title} delay={(i % 2) * 0.06} className="h-full">
          <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-ink/[0.07] bg-white">
            <div className="flex items-start gap-3.5 bg-[#FEF3F2] p-5 sm:p-6">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-[#D92D20] shadow-[0_6px_16px_-10px_rgba(217,45,32,0.6)]">
                <Icon name={m.icon} className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h3 className="flex items-center gap-1.5 font-display text-[16.5px] font-bold leading-snug text-ink sm:text-[18px]">
                  <X className="h-4 w-4 shrink-0 text-[#D92D20]" strokeWidth={3} aria-hidden />
                  {m.title}
                </h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-ink-soft">{m.problem}</p>
              </div>
            </div>
            <div className="flex flex-1 items-start gap-3.5 p-5 sm:p-6">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#E7F8EE] text-[#15803D] ring-1 ring-inset ring-[#15803D]/10">
                <ShieldCheck className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-deep">How National Filings prevents it</p>
                <p className="mt-1 text-[14px] leading-relaxed text-ink-soft">{m.fix}</p>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}

/* 8 · Cost factors: label-led cards -------------------------------------- */

export function CostCards({ costs }: { costs: LicencePageData["costs"] }) {
  return (
    <ul className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:gap-4 lg:grid-cols-4">
      {costs.map((c, i) => {
        const free = Boolean(c.highlight);
        return (
          <Reveal as="li" key={c.title} delay={(i % 4) * 0.05} className="h-full">
            <div className={`relative h-full overflow-hidden rounded-3xl p-5 sm:p-6 ${free ? "bg-ink text-white" : "border border-ink/[0.07] bg-white"}`}>
              <div className="flex items-center justify-between gap-3">
                <span className={`grid h-10 w-10 place-items-center rounded-xl ${free ? "bg-white/10" : "bg-brand-tint"}`}>
                  <Icon name={c.icon} className={`h-5 w-5 ${free ? "text-lime" : "text-brand-deep"}`} />
                </span>
                <span className={`rounded-full px-2.5 py-1 text-[11.5px] font-bold ${free ? "bg-lime text-ink" : "bg-cream-soft text-ink-soft"}`}>{c.label}</span>
              </div>
              <h3 className={`mt-4 font-display text-[17px] font-bold leading-snug ${free ? "text-white" : "text-ink"}`}>{c.title}</h3>
              <p className={`mt-1.5 text-[13.5px] leading-relaxed ${free ? "text-white/70" : "text-ink-muted"}`}>{c.line}</p>
            </div>
          </Reveal>
        );
      })}
    </ul>
  );
}

/* 9 · Why choose National Filings ---------------------------------------- */

export function ReasonCards({ reasons }: { reasons: LicencePageData["reasons"] }) {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-8 sm:gap-y-8 lg:grid-cols-3">
      {reasons.map((r, i) => (
        <Reveal as="li" key={r.title} delay={(i % 3) * 0.05} className="flex flex-col gap-2.5 sm:flex-row sm:gap-4">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-brand/15 text-brand-deep sm:h-12 sm:w-12">
            <Icon name={r.icon} className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />
          </span>
          <div className="min-w-0">
            <h3 className="font-display text-[14.5px] font-bold leading-snug text-ink sm:text-[17px]">{r.title}</h3>
            <p className="mt-0.5 text-[12.5px] leading-snug text-ink-muted sm:mt-1 sm:text-[14.5px] sm:leading-relaxed">{r.line}</p>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}

/* 11 · Related services (internal links) --------------------------------- */

export function RelatedLinks({ related }: { related: LicencePageData["related"] }) {
  return (
    <ul className="flex flex-wrap justify-center gap-2.5 sm:gap-4">
      {related.map((s) => (
        <li key={s.label} className="w-[calc(50%-5px)] sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)]">
          <CardLink href={s.href} className="card group flex h-full flex-col !rounded-2xl p-4 sm:p-5">
            <span className="flex items-start justify-between">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-tint">
                <Icon name={s.icon} className="h-5 w-5 text-brand-deep" />
              </span>
              {s.href && <ArrowUpRight className="h-4 w-4 text-ink-faint transition group-hover:text-ink" aria-hidden />}
            </span>
            <span className="mt-4 font-display text-[14.5px] font-bold leading-snug text-ink sm:text-[16px]">{s.label.replace(/^\w/, (c) => c.toUpperCase())}</span>
            <span className="mt-1 flex items-center gap-1 text-[12.5px] text-ink-muted sm:text-[13px]">
              in Chennai {s.href && <ArrowRight className="h-3 w-3" aria-hidden />}
            </span>
          </CardLink>
        </li>
      ))}
    </ul>
  );
}

/* Page-specific section: label-led cards (licence types, standards, uses...) */

export function HighlightCards({ items }: { items: NonNullable<LicencePageData["highlights"]>["items"] }) {
  return (
    <ul className="flex flex-wrap justify-center gap-3 sm:gap-4">
      {items.map((h, i) => (
        <Reveal as="li" key={h.title} delay={(i % 4) * 0.05} className="w-full min-[420px]:w-[calc(50%-6px)] lg:w-[calc(25%-12px)]">
          <div className={`h-full rounded-3xl p-5 sm:p-6 ${h.highlight ? "bg-ink text-white" : "border border-ink/[0.07] bg-white"}`}>
            <div className="flex items-center justify-between gap-3">
              <span className={`grid h-10 w-10 place-items-center rounded-xl ${h.highlight ? "bg-white/10" : "bg-brand-tint"}`}>
                <Icon name={h.icon} className={`h-5 w-5 ${h.highlight ? "text-lime" : "text-brand-deep"}`} />
              </span>
              {h.label && <span className={`rounded-full px-2.5 py-1 text-[11.5px] font-bold ${h.highlight ? "bg-lime text-ink" : "bg-cream-soft text-ink-soft"}`}>{h.label}</span>}
            </div>
            <h3 className={`mt-4 font-display text-[17px] font-bold leading-snug ${h.highlight ? "text-white" : "text-ink"}`}>{h.title}</h3>
            <p className={`mt-1.5 text-[13.5px] leading-relaxed ${h.highlight ? "text-white/70" : "text-ink-muted"}`}>{h.line}</p>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
