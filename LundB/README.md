# L&B Bausanierung – Website

Statische Website (Astro) für **L&B Bausanierung**, Frankfurt am Main.
Mobil-first, SEO-optimiert, deutschsprachig. Farbwelt: Blau (Leitfarbe) mit
Gold als Akzent, passend zum Logo.

## Schnellstart

```bash
npm install      # Abhängigkeiten installieren
npm run dev      # lokaler Entwicklungsserver (http://localhost:4321)
npm run build    # Produktions-Build nach ./dist (eigene Domain)
npm run preview  # Build lokal ansehen

npm run build:gh    # Vorschau-Build für GitHub Pages (Unterordner /LundB)
npm run preview:gh  # Vorschau-Build lokal ansehen
```

Voraussetzung: Node.js 18+.

## Struktur

```
src/
  data/site.ts          → Zentrale Inhalte: Firmendaten, Kontakt, Leistungen, Navigation
  layouts/Layout.astro  → Grundgerüst inkl. SEO-Meta, Open Graph, JSON-LD (LocalBusiness)
  components/           → Header, Footer, Hero, Services, About, Why, Contact
  pages/
    index.astro         → Startseite (Hero, Leistungen, Über uns, Warum L&B, Kontakt)
    impressum.astro     → Impressum (§5 TMG)
    datenschutz.astro   → Datenschutzerklärung (DSGVO)
    danke.astro         → Bestätigungsseite nach Formularversand
    404.astro           → Fehlerseite mit Wegweisern
    robots.txt.ts       → robots.txt wird beim Build erzeugt (je nach Ziel)
  lib/url.ts            → u()-Helfer für den Base-Pfad + isPreview-Flag
public/
  assets/               → Logos, favicon
  kontakt.php           → Formular-Verarbeitung (nur Produktion/IONOS)
  .nojekyll             → nötig für GitHub Pages
```

> **Interne Links immer über `u()` setzen**, z. B. `href={u('/impressum')}`.
> Sonst brechen sie in der GitHub-Pages-Vorschau, die in einem Unterordner läuft.

## Vor dem Livegang anpassen (wichtig)

Alle mit `[PLATZHALTER]` markierten Angaben ersetzen. Zentral gepflegt in
**`src/data/site.ts`**:

- Domain (auch in `astro.config.mjs`)
- Telefon, E-Mail, Straße, PLZ
- Impressum: Inhaber/Rechtsform, Registerdaten, USt-IdNr., zuständige Kammer
- Datenschutz: Hosting-Anbieter und tatsächlich genutzte Dienste ergänzen

## Kontaktformular (IONOS / PHP)

Das Formular sendet an das mitgelieferte PHP-Skript **`public/kontakt.php`**
(landet nach dem Build in `dist/kontakt.php`). Der Interessent klickt "Anfrage
absenden" und das Skript verschickt die Anfrage direkt per E-Mail – mit **Reply-To**
auf die Absenderadresse, sodass eine Antwort direkt an den Interessenten geht.

Vor dem Livegang in `public/kontakt.php` anpassen:
- `$recipient`   – Empfaengeradresse der Anfragen
- `$fromAddress` – Absenderadresse **auf der eigenen Domain** (IONOS verlangt das,
  sonst wird die Mail als Spam abgelehnt)
- `$siteUrl`     – echte Domain

Zusaetzlich in `src/data/site.ts` die WhatsApp-Nummer (`contact.whatsapp`)
eintragen. Nach dem Absenden wird auf `/danke/` weitergeleitet. Der Button
„Stattdessen per E-Mail" oeffnet das Mailprogramm des Besuchers vorbefuellt und
funktioniert auch ohne Serververarbeitung.

## SEO

- Sprechende `<title>`/Meta-Description je Seite, Canonical-URLs
- Open Graph + Twitter Cards
- Strukturierte Daten (JSON-LD, `HomeAndConstructionBusiness`) mit lokalem Bezug
- Automatische `sitemap-index.xml` via `@astrojs/sitemap`
- `robots.txt`, semantisches HTML, Lighthouse-freundlich (mobil-first)
- Rechtstexte auf `noindex`

## Deployment auf IONOS

1. `npm run build` – erzeugt die statische Seite inkl. `kontakt.php` in `./dist`.
2. Den **gesamten Inhalt von `dist/`** per FTP/SFTP oder ueber den IONOS
   Datei-Manager in das Web-Wurzelverzeichnis hochladen (z. B. `htdocs`).
3. Sicherstellen, dass PHP aktiv ist (bei IONOS Standard) und die unter
   `$fromAddress` genutzte Absenderadresse als IONOS-Postfach existiert.
4. Domain in `astro.config.mjs` und `src/data/site.ts` eintragen und neu bauen.

Es sind keine externen CDNs eingebunden (DSGVO-freundlich).

## Vorschau auf GitHub Pages

Zur Abnahme läuft eine Vorschau unter
**https://stivenbaci.github.io/LundB/** – das ist nicht die Live-Seite.

Dieses Projekt liegt als Unterordner `LundB/` im Repository
**stivenbaci.github.io**. Dort liegt daneben das ALVEX-Projekt (`alvex/`),
das die Seitenwurzel bedient. Der Workflow
`.github/workflows/deploy.yml` im Repository-Wurzelverzeichnis baut bei
jedem Push auf `main` **beide** Projekte und legt sie zusammen:

| Quellordner | Build-Befehl | Veröffentlicht unter |
|---|---|---|
| `alvex/` | `npm run build` | `https://stivenbaci.github.io/` |
| `LundB/` | `npm run build:gh` | `https://stivenbaci.github.io/LundB/` |

GitHub Pages erlaubt pro Repository nur ein Deployment – deshalb der
gemeinsame Build. Änderungen an diesem Ordner also einfach committen
und pushen, der Rest läuft automatisch.

### Unterschiede der Vorschau zur Live-Seite

| | Produktion (eigene Domain) | Vorschau (GitHub Pages) |
|---|---|---|
| Konfiguration | `astro.config.mjs` | `astro.config.gh.mjs` |
| URL | `https://www.lundb-bausanierung.de/` | `https://stivenbaci.github.io/LundB/` |
| Indexierung | erlaubt, Sitemap aktiv | `noindex` gesetzt |
| Kontaktformular | versendet per `kontakt.php` | deaktiviert (GitHub Pages kann kein PHP) |

Die Vorschau ist bewusst auf `noindex` gesetzt, damit sie später nicht mit
der echten Domain um Suchtreffer konkurriert. Sobald die Domain steht, können
`astro.config.gh.mjs` und der `LundB`-Teil des Workflows entfernt werden;
für IONOS zählt allein `npm run build`.
