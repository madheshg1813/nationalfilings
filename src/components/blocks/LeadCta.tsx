import Image from "next/image";
import { Clock, MapPin, Phone } from "lucide-react";
import { site, telLink, whatsappLink } from "@/lib/site";
import { platforms, visible } from "@/lib/proof";
import type { GoogleReviews } from "@/lib/google-reviews";
import { ContactForm } from "@/components/contact/ContactForm";
import { Stars } from "@/components/ui/Stars";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

/**
 * Closing conversion section for service pages: black panel with call + WhatsApp and trust points,
 * next to a two-field call-back form (service pre-set). id="contact" hides the mobile sticky bar here.
 */
export function LeadCta({
  title,
  sub,
  message,
  service,
  page,
  google,
  callLabel = "Talk to an expert",
  whatsappLabel = "WhatsApp consultation",
}: {
  title: string;
  sub: string;
  message: string;
  /** Contact form service option this page maps to */
  service: string;
  page: string;
  google: GoogleReviews | null;
  callLabel?: string;
  /** Label from sm up; phones always show "WhatsApp" */
  whatsappLabel?: string;
}) {
  const tel = telLink();
  const g = visible(platforms).find((p) => p.id === "google");
  const rating = google?.rating ?? g?.rating;
  const reviews = google?.total ? `${Math.floor(google.total / 10) * 10}+` : g?.stats[1].value;
  const weekdays = site.hours.find((h) => h.opens);

  return (
    <section id="contact" className="section scroll-mt-16" aria-labelledby="contact-cta-title">
      <div className="shell">
        <div className="grid overflow-hidden rounded-3xl border border-ink/10 sm:rounded-[2rem] lg:grid-cols-[1.05fr_1fr]">
          <div className="relative overflow-hidden bg-ink px-5 py-9 text-center sm:px-10 sm:py-14 lg:text-left">
            <svg aria-hidden viewBox="0 0 400 400" className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 opacity-[0.1] sm:h-96 sm:w-96">
              <path d="M60 170a140 140 0 0 1 280 0h-56a84 84 0 0 0-168 0z" fill="#C9EE7C" />
              <path d="M60 230a140 140 0 0 0 280 0h-56a84 84 0 0 1-168 0z" fill="#C9EE7C" />
            </svg>
            <h2
              id="contact-cta-title"
              className="relative font-display text-[1.6rem] font-extrabold leading-tight tracking-tight text-white [text-wrap:balance] sm:text-[2.5rem]"
            >
              {title}
            </h2>
            <p className="relative mx-auto mt-3 max-w-xl text-[14px] leading-relaxed text-white/70 sm:mt-4 sm:text-[17px] lg:mx-0">{sub}</p>

            <div className="relative mt-7 flex flex-wrap items-center justify-center gap-2 min-[375px]:gap-2.5 sm:mt-8 sm:gap-3 lg:justify-start">
              {tel && (
                <a href={tel} className="btn-primary max-[374px]:!px-3.5 max-[374px]:!text-[13px]">
                  <Phone className="h-4 w-4 max-[374px]:hidden" aria-hidden />
                  {callLabel}
                </a>
              )}
              <a
                href={whatsappLink(message)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp max-[374px]:!px-3.5 max-[374px]:!text-[13px]"
              >
                <WhatsAppIcon className="h-4 w-4 max-[374px]:hidden" />
                <span className="sm:hidden">WhatsApp</span>
                <span className="hidden sm:inline">{whatsappLabel}</span>
              </a>
            </div>

            <ul className="relative mx-auto mt-8 grid max-w-md gap-3 text-left text-[13.5px] text-white/75 sm:mt-10 sm:text-[14.5px] lg:mx-0">
              {g && rating && (
                <li className="flex items-center gap-2.5">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white">
                    <Image src="/logos/google.svg" alt="" width={16} height={16} className="h-4 w-4" />
                  </span>
                  <span className="flex flex-wrap items-center gap-x-1.5">
                    <span className="font-semibold text-white">{rating.toFixed(1)}</span>
                    <Stars rating={rating} size="h-3 w-3" />
                    <span>from {reviews} Google reviews</span>
                  </span>
                </li>
              )}
              {weekdays && (
                <li className="flex items-center gap-2.5">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/10">
                    <Clock className="h-4 w-4 text-lime" aria-hidden />
                  </span>
                  {weekdays.days.replace(" - ", " to ")}, {weekdays.time}
                </li>
              )}
              <li className="flex items-center gap-2.5">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/10">
                  <MapPin className="h-4 w-4 text-lime" aria-hidden />
                </span>
                Chennai office, serving clients across India
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-center bg-white px-5 py-8 sm:px-10 sm:py-14">
            <p className="font-display text-[19px] font-bold text-ink sm:text-[22px]">Request a call back</p>
            <p className="mb-6 mt-1.5 text-[14px] leading-relaxed text-ink-muted sm:text-[15px]">
              Just your name and number. An expert calls you during working hours, with no obligation.
            </p>
            <ContactForm compact defaultService={service} page={page} />
          </div>
        </div>
      </div>
    </section>
  );
}
