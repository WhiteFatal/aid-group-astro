import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://gxp.ge',
  integrations: [
    sitemap({
      // `/` is only a redirect to `/en/`, so keep it out of the sitemap.
      filter: (page) => page !== 'https://gxp.ge/',
      // Adds hreflang alternates between /en/ and /ka/ versions of each page.
      i18n: { defaultLocale: 'en', locales: { en: 'en', ka: 'ka' } },
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ka'],
    routing: { prefixDefaultLocale: true },
  },
});
