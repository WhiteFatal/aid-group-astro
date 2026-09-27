import { defineConfig } from 'astro/config';

// `site` and the sitemap integration are added in Phase 7, once the domain is known.
export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ka'],
    routing: { prefixDefaultLocale: true },
  },
});
