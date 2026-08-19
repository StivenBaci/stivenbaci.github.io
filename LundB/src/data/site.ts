// -------------------------------------------------------------------
//  ZENTRALE KONFIGURATION – L&B Bausanierung
//  Alle mit [PLATZHALTER] markierten Werte vor dem Livegang ersetzen.
// -------------------------------------------------------------------

export const site = {
  name: 'L&B Bausanierung',
  legalName: 'L&B Bausanierung [PLATZHALTER Rechtsform, z. B. GmbH]',
  shortName: 'L&B',
  url: 'https://www.lundb-bausanierung.de', // [PLATZHALTER] echte Domain
  domain: 'www.lundb-bausanierung.de',
  founded: 1995, // seit ~30 Jahren tätig
  city: 'Frankfurt am Main',
  region: 'Hessen',
  tagline: 'Bausanierung aus Frankfurt am Main – seit über 30 Jahren.',
  description:
    'L&B Bausanierung aus Frankfurt am Main: Ihr eingetragener Fachbetrieb für Bausanierung, Fassaden, Innenausbau und Renovierung. Seit über 30 Jahren zuverlässig, termintreu und in Meisterqualität.',
};

// Kontaktdaten – Adresse real, übrige Angaben Platzhalter
export const contact = {
  phone: '+49 (0) 69 [PLATZHALTER]',
  phoneHref: 'tel:+4969000000',
  email: 'info@lundb-bausanierung.de', // [PLATZHALTER]
  emailHref: 'mailto:info@lundb-bausanierung.de',
  street: 'Darmstädter Landstraße 312',
  zip: '60598',
  cityLine: 'Frankfurt am Main',
  hours: 'Mo–Fr 08:00–17:00 Uhr',
  whatsapp: 'https://wa.me/49XXXXXXXXXX', // [PLATZHALTER WhatsApp-Nummer, ohne + und Nullen, z. B. 4915112345678]
  // Für die Kartendarstellung (Google Maps)
  mapQuery: 'Darmstädter Landstraße 312, 60598 Frankfurt am Main',
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=Darmst%C3%A4dter%20Landstra%C3%9Fe%20312%2C%2060598%20Frankfurt%20am%20Main',
};

// Impressum-Angaben – Platzhalter (§5 TMG)
export const legal = {
  owner: '[PLATZHALTER Inhaber / Geschäftsführer]',
  companyLine: 'L&B Bausanierung [Rechtsform]',
  register: '[PLATZHALTER Handelsregister & Nr., falls vorhanden]',
  registerCourt: '[PLATZHALTER Registergericht]',
  vatId: '[PLATZHALTER USt-IdNr. gem. §27a UStG]',
  taxNumber: '[PLATZHALTER Steuernummer, optional]',
  chamber: 'Handwerkskammer Frankfurt-Rhein-Main [prüfen]',
  professionTitle: 'Handwerksmeister / Bausanierung (verliehen in Deutschland)',
  responsible: '[PLATZHALTER inhaltlich Verantwortlicher, §18 Abs.2 MStV]',
};

// Leistungen – Fassade ist EINE von mehreren Leistungen (nicht überbetont)
export const services = [
  {
    slug: 'bausanierung',
    icon: 'building',
    title: 'Bausanierung & Altbausanierung',
    teaser:
      'Fachgerechte Instandsetzung und Modernisierung von Wohn- und Gewerbegebäuden – vom Detail bis zur Komplettsanierung.',
    points: ['Komplettsanierung', 'Altbau & Bestand', 'Schadensbeseitigung', 'Modernisierung'],
  },
  {
    slug: 'innenausbau',
    icon: 'interior',
    title: 'Innenausbau & Renovierung',
    teaser:
      'Trockenbau, Boden-, Maler- und Putzarbeiten sowie durchdachte Grundrisslösungen für neuen Wohn- und Arbeitsraum.',
    points: ['Trockenbau', 'Maler- & Putzarbeiten', 'Bodenbeläge', 'Raumaufteilung'],
  },
  {
    slug: 'fassade',
    icon: 'facade',
    title: 'Fassade & Wärmedämmung',
    teaser:
      'Fassadensanierung, Putz und Wärmedämmung (WDVS) – für ein gepflegtes Erscheinungsbild und geringere Energiekosten.',
    points: ['Fassadensanierung', 'WDVS-Dämmung', 'Verputzen', 'Anstrich'],
  },
  {
    slug: 'abdichtung',
    icon: 'shield',
    title: 'Abdichtung & Bautenschutz',
    teaser:
      'Wirksamer Schutz gegen Feuchtigkeit: Keller- und Bauwerksabdichtung, Feuchteschäden und dauerhafter Bautenschutz.',
    points: ['Kellerabdichtung', 'Feuchteschäden', 'Bauwerksabdichtung', 'Schimmelsanierung'],
  },
  {
    slug: 'beton',
    icon: 'concrete',
    title: 'Beton- & Balkonsanierung',
    teaser:
      'Instandsetzung von Beton, Balkonen und Betonbauteilen – tragfähig, normgerecht und langlebig ausgeführt.',
    points: ['Betoninstandsetzung', 'Balkonsanierung', 'Rissverpressung', 'Korrosionsschutz'],
  },
  {
    slug: 'rohbau',
    icon: 'trowel',
    title: 'Maurer- & Rohbauarbeiten',
    teaser:
      'Mauerwerk, Durchbrüche und Umbauten – solides Handwerk als Grundlage jeder gelungenen Sanierung.',
    points: ['Mauerwerk', 'Durchbrüche', 'Umbauten', 'Statische Anpassungen'],
  },
];

export const nav = [
  { href: '/#leistungen', label: 'Dienstleistungen' },
  { href: '/#ueber-uns', label: 'Über uns' },
  { href: '/#warum', label: 'Warum L&B' },
  { href: '/#standort', label: 'Standort' },
  { href: '/#kontakt', label: 'Kontakt' },
];
