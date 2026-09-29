import Image from "next/image";
import { UserRound } from "lucide-react";
import { team, visible } from "@/lib/proof";
import { Reveal } from "@/components/ui/Reveal";
import { SampleTag } from "@/components/ui/SampleTag";

/** Portrait area: real photo when provided, otherwise a monogram-free placeholder on the logo's lime arcs. */
function Portrait({ name, photo }: { name: string; photo?: string }) {
  return (
    <div className="relative mx-auto grid h-24 w-24 place-items-center sm:h-32 sm:w-32">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
        <path d="M8 44a42 42 0 0 1 84 0h-12a30 30 0 0 0-60 0z" fill="#C9EE7C" />
        <path d="M8 56a42 42 0 0 0 84 0h-12a30 30 0 0 1-60 0z" fill="#C9EE7C" />
      </svg>
      <div className="relative h-[70%] w-[70%] overflow-hidden rounded-full border border-ink/10 bg-cream-soft">
        {photo ? (
          <Image src={photo} alt={name} fill sizes="128px" className="object-cover" />
        ) : (
          <UserRound className="absolute inset-0 m-auto h-1/2 w-1/2 text-ink-faint" strokeWidth={1.4} aria-hidden />
        )}
      </div>
    </div>
  );
}

export function Team() {
  const members = visible(team);
  if (!members.length) return null;
  return (
    <section className="section" aria-labelledby="team-title">
      <div className="shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-text">The team</p>
          <h2 id="team-title" className="h2">
            The people behind your filings
          </h2>
          <p className="lead mt-3">Meet the consultants who prepare, file and follow up on your work.</p>
        </Reveal>

        <ul className="mt-7 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 lg:grid-cols-4">
          {members.map((p, i) => (
            <Reveal as="li" key={p.role} delay={(i % 4) * 0.05} className="h-full">
              <div className="card relative flex h-full flex-col items-center p-4 text-center sm:p-6">
                <SampleTag show={p.sample} className="mb-2 sm:absolute sm:right-4 sm:top-4 sm:mb-0" />
                <Portrait name={p.name} photo={p.photo} />
                <h3 className="mt-3 font-display text-[14px] font-bold leading-snug text-ink sm:mt-4 sm:text-[17px]">{p.name}</h3>
                <p className="mt-0.5 text-[12px] font-semibold text-brand-deep sm:text-[14px]">{p.role}</p>
                <p className="mt-1 text-[11.5px] leading-snug text-ink-muted sm:text-[13px]">{p.credential}</p>
                <ul className="mt-auto flex flex-wrap justify-center gap-1 pt-3 sm:gap-1.5 sm:pt-4">
                  {p.focus.map((f) => (
                    <li key={f} className="chip whitespace-nowrap !px-2 !py-0.5 !text-[10.5px] sm:!px-2.5 sm:!py-1 sm:!text-xs">
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
