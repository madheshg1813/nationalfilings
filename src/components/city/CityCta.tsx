import { chennaiCta as c } from "@/lib/chennai";
import { telLink, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function CityCta() {
  const tel = telLink();
  return (
    <section id="contact" className="section scroll-mt-16" aria-labelledby="city-cta-title">
      <div className="shell">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-4 py-10 text-center min-[375px]:px-5 sm:rounded-[2rem] sm:px-10 sm:py-16">
          <svg aria-hidden viewBox="0 0 400 400" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 opacity-[0.12] sm:h-96 sm:w-96">
            <path d="M60 170a140 140 0 0 1 280 0h-56a84 84 0 0 0-168 0z" fill="#C9EE7C" />
            <path d="M60 230a140 140 0 0 0 280 0h-56a84 84 0 0 1-168 0z" fill="#C9EE7C" />
          </svg>
          <h2
            id="city-cta-title"
            className="relative mx-auto max-w-2xl font-display text-[1.6rem] font-extrabold leading-tight tracking-tight text-white [text-wrap:balance] sm:text-[2.5rem]"
          >
            {c.title}
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl text-[14px] leading-relaxed text-white/70 [text-wrap:balance] sm:mt-4 sm:text-[17px]">{c.sub}</p>
          <div className="relative mt-6 flex items-center justify-center gap-2 min-[375px]:gap-2.5 sm:mt-8 sm:gap-3">
            <a
              href={tel ?? whatsappLink(c.primary.message)}
              {...(tel ? {} : { target: "_blank", rel: "noopener noreferrer" })}
              className="btn-primary max-[374px]:!px-3.5 max-[374px]:!text-[13px]"
            >
              {c.primary.label}
            </a>
            <a
              href={whatsappLink(c.whatsapp.message)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-on-ink max-[374px]:!px-3.5 max-[374px]:!text-[13px]"
            >
              <WhatsAppIcon /> {c.whatsapp.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
