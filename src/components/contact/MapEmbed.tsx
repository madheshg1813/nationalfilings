import { ExternalLink } from "lucide-react";

/**
 * Google Maps embed of the office, shown directly.
 * `loading="lazy"` keeps it off the critical path: the map only loads when it scrolls near the viewport.
 */
export function MapEmbed({ embedUrl, linkUrl, label }: { embedUrl: string; linkUrl: string; label: string }) {
  return (
    <div className="card relative h-full min-h-[300px] overflow-hidden !rounded-2xl bg-cream-soft sm:min-h-[360px] sm:!rounded-3xl">
      <iframe
        src={embedUrl}
        title={`Map showing ${label}`}
        className="absolute inset-0 h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-3 left-3 inline-flex min-h-[40px] items-center gap-1.5 rounded-full border border-ink/10 bg-white px-3.5 text-[13px] font-semibold text-ink shadow-lift transition hover:border-ink/25"
      >
        <ExternalLink className="h-3.5 w-3.5" aria-hidden />
        Open in Google Maps
      </a>
    </div>
  );
}
