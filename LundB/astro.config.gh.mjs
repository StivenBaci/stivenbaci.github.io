import { defineConfig } from 'astro/config';

// -------------------------------------------------------------------
//  VORSCHAU-KONFIGURATION – GitHub Pages
//  https://stivenbaci.github.io/LundB
//
//    npm run build:gh      (Build)
//    npm run preview:gh    (lokal ansehen)
//
//  Unterschiede zur Produktion:
//   - base '/LundB'  -> alle internen Links laufen über u() aus src/lib/url.ts
//   - keine Sitemap  -> die Vorschau soll nicht in den Index
//   - isPreview=true -> Layout setzt noindex, Kontaktformular ohne Versand
//     (GitHub Pages ist rein statisch, kann kein PHP ausführen)
//
//  Sobald die echte Domain steht, wird diese Datei nicht mehr gebraucht.
// -------------------------------------------------------------------

export default defineConfig({
  site: 'https://stivenbaci.github.io',
  base: '/LundB',
  trailingSlash: 'ignore',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
