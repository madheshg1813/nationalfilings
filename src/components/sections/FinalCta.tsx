import { ArrowRight, CalendarCheck, Phone } from "lucide-react";
import { finalCta } from "@/lib/home";
import { telLink, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function FinalCta() {
  const tel = telLink();
  return (
    <section id="contact" className="section scroll-mt-16" aria-labelledby="cta-title">
      <div className="shell">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-4 py-10 text-center min-[375px]:px-5 sm:rounded-[2rem] sm:px-10 sm:py-16">
          {/* the logo's lime arcs, kept faint */}
          <svg aria-hidden viewBox="0 0 400 400" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 opacity-[0.12] sm:h-96 sm:w-96">
            <path d="M60 170a140 140 0 0 1 280 0h-56a84 84 0 0 0-168 0z" fill="#C9EE7C" />
            <path d="M60 230a140 140 0 0 0 280 0h-56a84 84 0 0 1-168 0z" fill="#C9EE7C" />
          </svg>
          <h2
            id="cta-title"
            className="relative mx-auto max-w-2xl font-display text-[1.6rem] font-extrabold leading-tight tracking-tight text-white [text-wrap:balance] sm:text-[2.5rem]"
          >
            {finalCta.title}
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl text-[14px] leading-relaxed text-white/70 [text-wrap:balance] sm:mt-4 sm:text-[17px]">
            {finalCta.sub}
          </p>

          <div className="relative mt-6 flex items-center justify-center gap-2 min-[375px]:gap-2.5 sm:mt-8 sm:gap-3">
            <a href={whatsappLink(finalCta.whatsapp.message)} target="_blank" rel="noopener noreferrer" className="btn-primary group max-[374px]:!px-3.5 max-[374px]:!text-[13px]">
              <WhatsAppIcon />
              <span className="sm:hidden">WhatsApp</span>
              <span className="hidden sm:inline">{finalCta.whatsapp.label}</span>
            </a>
            <a
              href={tel ?? whatsappLink(finalCta.consult.message)}
              {...(tel ? {} : { target: "_blank", rel: "noopener noreferrer" })}
              className="btn-on-ink max-[374px]:!px-3.5 max-[374px]:!text-[13px]"
            >
              {tel ? <Phone className="h-4 w-4 max-[374px]:hidden" /> : <CalendarCheck className="h-4 w-4 max-[374px]:hidden" />}
              <span className="sm:hidden">Consultation</span>
              <span className="hidden sm:inline">{finalCta.consult.label}</span>
            </a>
          </div>

          <a
            href={finalCta.directory.href}
            className="group relative mt-5 inline-flex min-h-[44px] items-center gap-1.5 text-[14px] font-semibold text-white/80 underline-offset-4 hover:text-white hover:underline sm:mt-6"
          >
            {finalCta.directory.label}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
