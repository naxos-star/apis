import { defineConfig } from 'astro/config';

// Fully static output: Cloudflare serves ./dist as static assets.
export default defineConfig({
  site: 'https://example.com', // TODO: your real domain
});
