import { getCollection, type CollectionEntry } from 'astro:content';

export type EventEntry = CollectionEntry<'events'>;

const TZ = 'Europe/Madrid';

/** Un evento sigue «próximo» hasta que termina su último día. */
export function isUpcoming(event: EventEntry, now = new Date()): boolean {
  const last = new Date(event.data.end ?? event.data.start);
  last.setUTCHours(23, 59, 59, 999);
  return last.getTime() >= now.getTime();
}

export async function getEvents() {
  const all = await getCollection('events');
  const upcoming = all
    .filter((e) => isUpcoming(e))
    .sort((a, b) => a.data.start.getTime() - b.data.start.getTime());
  const past = all
    .filter((e) => !isUpcoming(e))
    .sort((a, b) => b.data.start.getTime() - a.data.start.getTime());
  return { upcoming, past, all };
}

const fmt = (opts: Intl.DateTimeFormatOptions) => new Intl.DateTimeFormat('es-ES', { timeZone: TZ, ...opts });

/** «31 de enero de 2026» · «15–17 de mayo de 2026» · «28 de junio – 2 de julio de 2025» */
export function formatRange(start: Date, end?: Date): string {
  const full = fmt({ day: 'numeric', month: 'long', year: 'numeric' });
  if (!end || end.getTime() === start.getTime()) return full.format(start);
  const sameMonth = start.getUTCMonth() === end.getUTCMonth() && start.getUTCFullYear() === end.getUTCFullYear();
  if (sameMonth) return `${start.getUTCDate()}–${full.format(end)}`;
  const sameYear = start.getUTCFullYear() === end.getUTCFullYear();
  const startFmt = sameYear ? fmt({ day: 'numeric', month: 'long' }) : full;
  return `${startFmt.format(start)} – ${full.format(end)}`;
}

export function shortDate(d: Date) {
  return {
    day: fmt({ day: '2-digit' }).format(d),
    month: fmt({ month: 'short' }).format(d).replace('.', ''),
    year: fmt({ year: 'numeric' }).format(d),
  };
}
