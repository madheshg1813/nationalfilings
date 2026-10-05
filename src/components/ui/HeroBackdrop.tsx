import { BadgeCheck, Building2, FileText, IndianRupee, Landmark, ReceiptIndianRupee, ShieldCheck, type LucideIcon } from "lucide-react";

/**
 * Very faint decorative icons behind a centred hero: a few large filing symbols at 3-5% opacity,
 * placed off-centre so they read as texture, never as content. Decorative only (aria-hidden).
 * Phones show three, smaller.
 */
type Mark = { Icon: LucideIcon; cls: string; teal?: boolean; phone?: boolean };

const MARKS: Mark[] = [
  { Icon: ReceiptIndianRupee, cls: "left-[4%] top-[10%] h-24 w-24 -rotate-12 sm:h-40 sm:w-40 lg:h-48 lg:w-48", teal: true, phone: true },
  { Icon: Building2, cls: "right-[5%] top-[7%] h-24 w-24 rotate-6 sm:h-36 sm:w-36 lg:h-44 lg:w-44", phone: true },
  { Icon: IndianRupee, cls: "left-[13%] top-[56%] h-32 w-32 rotate-[8deg] lg:h-40 lg:w-40" },
  { Icon: ShieldCheck, cls: "right-[11%] top-[50%] h-36 w-36 -rotate-6 lg:h-48 lg:w-48", teal: true },
  { Icon: FileText, cls: "left-[30%] top-[2%] h-24 w-24 rotate-[14deg] lg:h-28 lg:w-28" },
  { Icon: Landmark, cls: "right-[27%] bottom-[4%] h-24 w-24 -rotate-[10deg] lg:h-32 lg:w-32" },
  { Icon: BadgeCheck, cls: "bottom-[6%] left-[5%] h-20 w-20 rotate-12 sm:h-28 sm:w-28 lg:h-36 lg:w-36", teal: true, phone: true },
];

export function HeroBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {MARKS.map(({ Icon, cls, teal, phone }, i) => (
        <Icon
          key={i}
          className={`absolute ${cls} ${phone ? "" : "hidden md:block"} ${teal ? "text-brand/[0.05]" : "text-ink/[0.04]"}`}
          strokeWidth={1}
        />
      ))}
    </div>
  );
}
