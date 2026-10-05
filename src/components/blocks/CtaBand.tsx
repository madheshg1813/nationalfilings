import { ArrowRight, CalendarCheck, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export type CtaAction = {
  label: string;
  /** Shorter label on phones, so two buttons fit side by side */
  shortLabel?: string;
  href: string;
  external?: boolean;
  icon?: "whatsapp" | "phone" | "calendar";
};

type Props = {
  title: string;
  sub?: string;
  primary: CtaAction;
  secondary?: CtaAction;
  /** Quiet text link under the buttons, e.g. "Browse all services" */
  link?: { label: string; href: string };
  /** Keep "contact" on the page's last CTA: the mobile sticky bar hides while it is on screen */
  id?: string;
};

const ICONS = {
  whatsapp: <WhatsAppIcon className="h-4 w-4 max-[374px]:hidden" />,
  phone: <Phone className="h-4 w-4 max-[374px]:hidden" aria-hidden />,
  calendar: <CalendarCheck className="h-4 w-4 max-[374px]:hidden" aria-hidden />,
};

function Action({ a, variant }: { a: CtaAction; variant: "primary" | "on-ink" }) {
  return (
    <a
      href={a.href}
      {...(a.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${variant === "primary" ? "btn-primary" : "btn-on-ink"} max-[374px]:!px-3.5 max-[374px]:!text-[13px]`}
    >
      {a.icon && ICONS[a.icon]}
      {a.shortLabel ? (
        <>
          <span className="sm:hidden">{a.shortLabel}</span>
          <span className="hidden sm:inline">{a.label}</span>
        </>
      ) : (
        a.label
      )}
    </a>
  );
}

/** Closing call-to-action: plain black band with the logo's arcs, one primary + one outlined action. */
export function CtaBand({ title, sub, primary, secondary, link, id = "contact" }: Props) {
  const titleId = `${id}-cta-title`;
  return (
    <section id={id} className="section scroll-mt-16" aria-labelledby={titleId}>
      <div className="shell">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-4 py-10 text-center min-[375px]:px-5 sm:rounded-[2rem] sm:px-10 sm:py-16">
          <svg aria-hidden viewBox="0 0 400 400" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 opacity-[0.12] sm:h-96 sm:w-96">
            <path d="M60 170a140 140 0 0 1 280 0h-56a84 84 0 0 0-168 0z" fill="#C9EE7C" />
            <path d="M60 230a140 140 0 0 0 280 0h-56a84 84 0 0 1-168 0z" fill="#C9EE7C" />
          </svg>
          <h2
            id={titleId}
            className="relative mx-auto max-w-2xl font-display text-[1.6rem] font-extrabold leading-tight tracking-tight text-white [text-wrap:balance] sm:text-[2.5rem]"
          >
            {title}
          </h2>
          {sub && (
            <p className="relative mx-auto mt-3 max-w-xl text-[14px] leading-relaxed text-white/70 [text-wrap:balance] sm:mt-4 sm:text-[17px]">{sub}</p>
          )}
          <div className="relative mt-6 flex items-center justify-center gap-2 min-[375px]:gap-2.5 sm:mt-8 sm:gap-3">
            <Action a={primary} variant="primary" />
            {secondary && <Action a={secondary} variant="on-ink" />}
          </div>
          {link && (
            <a
              href={link.href}
              className="group relative mt-5 inline-flex min-h-[44px] items-center gap-1.5 text-[14px] font-semibold text-white/80 underline-offset-4 hover:text-white hover:underline sm:mt-6"
            >
              {link.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
