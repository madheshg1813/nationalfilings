import { Plus } from "lucide-react";
import { faqs as homeFaqs } from "@/lib/home";
import { whatsappLink } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

function Item({ q, a, open }: { q: string; a: string; open?: boolean }) {
  return (
    // `name` makes it an exclusive accordion (one open at a time) with no JS
    <details name="faq" open={open} className="group card !rounded-2xl transition-colors open:border-ink/20 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-4 px-4 py-3.5 sm:px-5 sm:py-4">
        <h3 className="font-display text-[14px] font-semibold leading-snug text-ink sm:text-[16px]">{q}</h3>
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-ink/10 transition duration-200 group-open:rotate-45 group-open:border-ink group-open:bg-ink group-open:text-white">
          <Plus className="h-4 w-4" aria-hidden />
        </span>
      </summary>
      <p className="-mt-1 px-4 pb-4 text-[13.5px] leading-relaxed text-ink-muted sm:px-5 sm:pb-5 sm:text-[15px]">{a}</p>
    </details>
  );
}

export function Faq({
  items = homeFaqs,
  title = "Questions people ask us",
  message = "Hi National Filings, I have a question.",
  className = "",
  schema = true,
}: {
  items?: { q: string; a: string }[];
  title?: string;
  message?: string;
  className?: string;
  /** FAQPage JSON-LD is emitted wherever the FAQ is used (on by default) */
  schema?: boolean;
}) {
  const faqs = items;
  const half = Math.ceil(faqs.length / 2);
  const cols = [faqs.slice(0, half), faqs.slice(half)];
  return (
    <>
    {schema && (
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
    )}
    <section id="faq" className={`section scroll-mt-16 ${className}`} aria-labelledby="faq-title">
      <div className="shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-text">FAQ</p>
          <h2 id="faq-title" className="h2">
            {title}
          </h2>
        </Reveal>

        <div className="mt-7 grid gap-2.5 sm:mt-12 sm:gap-4 lg:grid-cols-2">
          {cols.map((col, ci) => (
            <div key={ci} className="flex flex-col gap-2.5 sm:gap-4">
              {col.map((f, fi) => (
                <Item key={f.q} {...f} open={ci === 0 && fi === 0} />
              ))}
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col items-center gap-3 text-center sm:mt-10 sm:flex-row sm:justify-center">
          <p className="text-[14px] text-ink-muted sm:text-[15px]">Didn&apos;t find your question?</p>
          <a
            href={whatsappLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <WhatsAppIcon /> Ask us on WhatsApp
          </a>
        </div>
      </div>
    </section>
    </>
  );
}
