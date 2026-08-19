import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// -------------------------------------------------------------------
//  PRODUKTIONS-KONFIGURATION (eigene Domain, z. B. Hosting bei IONOS)
//
//    npm run build
//
//  Root-Deployment, Sitemap aktiv, PHP-Kontaktformular aktiv.
//  WICHTIG: Vor Livegang die echte Domain hier UND in src/data/site.ts eintragen.
//
//  Für die GitHub-Pages-Vorschau unter stivenbaci.github.io/LundB
//  siehe astro.config.gh.mjs  ->  npm run build:gh
// -------------------------------------------------------------------

export default defineConfig({
  site: 'https://www.lundb-bausanierung.de',
  trailingSlash: 'ignore',
  compressHTML: true,
  integrations: [
    sitemap({
      // noindex-Seiten (Impressum, Datenschutz, Danke) aus der Sitemap entfernen
      filter: (page) => !/\/(impressum|datenschutz|danke)\/?$/.test(page),
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
