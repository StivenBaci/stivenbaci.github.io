// -------------------------------------------------------------------
//  URL-Helfer für Deployments in einem Unterordner
//
//  Produktion (eigene Domain):  BASE_URL = '/'        -> u('/impressum') = '/impressum'
//  GitHub-Pages-Vorschau:       BASE_URL = '/LundB/'  -> u('/impressum') = '/LundB/impressum'
//
//  Alle internen Links und Asset-Pfade MÜSSEN durch u() laufen,
//  sonst brechen sie in der Unterordner-Vorschau.
// -------------------------------------------------------------------

const BASE = import.meta.env.BASE_URL;

/** true, wenn die Seite in einem Unterordner läuft (= GitHub-Pages-Vorschau) */
export const isPreview = BASE !== '/';

/** Wandelt einen absoluten Pfad ('/impressum') in einen base-fähigen Pfad um. */
export function u(path = '/'): string {
  if (!path.startsWith('/')) return path;
  const prefix = BASE.replace(/\/+$/, '');
  return prefix + path;
}
