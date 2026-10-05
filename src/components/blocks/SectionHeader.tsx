import { Reveal } from "@/components/ui/Reveal";

/** Centred eyebrow + H2 + optional lead, used at the top of most sections. */
export function SectionHeader({ id, eyebrow, title, lead }: { id: string; eyebrow?: string; title: string; lead?: string }) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      {eyebrow && <p className="eyebrow-text">{eyebrow}</p>}
      <h2 id={id} className="h2">
        {title}
      </h2>
      {lead && <p className="lead mt-3">{lead}</p>}
    </Reveal>
  );
}
