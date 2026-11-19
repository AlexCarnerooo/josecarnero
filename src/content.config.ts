import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Cada evento es un archivo Markdown en src/content/events/.
 * Si la fecha de fin ya pasó, el evento aparece automáticamente como «finalizado».
 */
const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      kind: z.enum(['retiro', 'workshop', 'curso', 'clase especial']),
      start: z.coerce.date(),
      end: z.coerce.date().optional(),
      place: z.string(),
      city: z.string(),
      address: z.string().optional(),
      summary: z.string(),
      cover: image(),
      coverAlt: z.string(),
      /** «poster» para carteles con texto: se muestran enteros, sin recortar. */
      coverFit: z.enum(['photo', 'poster']).default('photo'),
      gallery: z.array(z.object({ src: image(), alt: z.string() })).default([]),
      agenda: z
        .array(z.object({ day: z.string(), items: z.array(z.object({ time: z.string(), text: z.string() })) }))
        .default([]),
      includes: z.array(z.string()).default([]),
      prices: z.array(z.object({ label: z.string(), price: z.string() })).default([]),
      booking: z.object({ label: z.string(), url: z.string() }).optional(),
      links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
      contacts: z.array(z.object({ label: z.string(), value: z.string(), url: z.string().optional() })).default([]),
    }),
});

export const collections = { events };
