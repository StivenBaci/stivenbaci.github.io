import type { APIRoute } from 'astro';
import { isPreview, u } from '../lib/url';

// robots.txt wird beim Build erzeugt:
//  - Produktion: Indexierung erlaubt, Sitemap verlinkt
//  - GitHub-Pages-Vorschau: komplett gesperrt (zusätzlich zum noindex im <head>)
export const GET: APIRoute = ({ site }) => {
  const body = isPreview
    ? ['User-agent: *', 'Disallow: /', ''].join('\n')
    : [
        'User-agent: *',
        'Allow: /',
        '',
        `Sitemap: ${new URL(u('/sitemap-index.xml'), site ?? 'https://www.lundb-bausanierung.de').href}`,
        '',
      ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
