// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const fsv = './node_modules/@fontsource-variable';

export default defineConfig({
  site: 'https://josecarnero.org',
  trailingSlash: 'ignore',
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  image: {
    layout: 'constrained',
    responsiveStyles: true,
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Newsreader',
      cssVariable: '--font-display',
      fallbacks: ['Georgia', 'serif'],
      options: {
        variants: [
          { src: [`${fsv}/newsreader/files/newsreader-latin-standard-normal.woff2`], weight: '200 800', style: 'normal' },
          { src: [`${fsv}/newsreader/files/newsreader-latin-standard-italic.woff2`], weight: '200 800', style: 'italic' },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Inter',
      cssVariable: '--font-body',
      fallbacks: ['system-ui', 'sans-serif'],
      options: {
        variants: [
          { src: [`${fsv}/inter/files/inter-latin-wght-normal.woff2`], weight: '100 900', style: 'normal' },
        ],
      },
    },
  ],
});
