import { licences, pillars, serviceHref } from "../routes";

/** Card link for any pillar (P1...) or licence (L1...) page: its path once published, "" (plain card) until then */
export function link(id: string): string {
  const page = pillars.find((p) => p.id === id) ?? licences.find((l) => l.id === id);
  if (!page) throw new Error(`link: unknown page id ${id}`);
  return serviceHref(page);
}
