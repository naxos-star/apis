import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://example.com', // TODO: your real domain
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'it'],
    routing: { prefixDefaultLocale: false }, // English at /, Italian at /it/
  },
});
