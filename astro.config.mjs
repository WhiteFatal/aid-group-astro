import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://gxp.ge',
  integrations: [
    sitemap({
      // `/` is only a redirect to `/en/`, so keep it out of the sitemap.
      filter: (page) => page !== 'https://gxp.ge/',
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ka'],
    routing: { prefixDefaultLocale: true },
  },
});
