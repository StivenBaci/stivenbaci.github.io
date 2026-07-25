import { defineConfig } from 'astro/config';

// Static site output; assets live in /public and are served from the site root.
// `site` drives all absolute URLs (canonical, hreflang, Open Graph, sitemap).
export default defineConfig({
  site: 'https://alvexhandel.com',
  trailingSlash: 'always',
});
