// Central translation dictionary for shared chrome (header, footer, meta).
// Page body copy lives in the individual page files (index.astro / en/index.astro).

export type Lang = 'de' | 'en';

// Shared company facts – identical across languages.
export const company = {
  name: 'ALVEX Handel GmbH',
  phoneDisplay: '+49 (0) 69 9505 7680',
  phoneHref: 'tel:+496995057680',
  email: 'info@alvexhandel.com',
  managingDirector: 'Mehmet S. Cellikkiran',
  registerCourt: 'Amtsgericht Frankfurt am Main, HRB 142640',
  vatId: '[Platzhalter USt-IdNr.]',
};

export const ui: Record<Lang, {
  htmlLang: string;
  ogLocale: string;
  meta: { title: string; description: string };
  nav: { home: string; about: string; industries: string; specs: string; team: string; contact: string };
  specsHref: string;
  salesLabel: string;
  navToggleAria: string;
  switch: { label: string; href: string; aria: string };
  footer: {
    tagline: string;
    impressum: string;
    datenschutz: string;
    managingDirectorLabel: string;
    registerCourtLabel: string;
    vatLabel: string;
    authorityLabel: string;
    authorityText: string;
    authoritySupervisor: string;
    rights: string;
    compliance: string;
  };
}> = {
  de: {
    htmlLang: 'de',
    ogLocale: 'de_DE',
    meta: {
      title: 'ALVEX Handel GmbH | B2B Natriumhydrogencarbonat Distribution',
      description:
        'ALVEX Handel GmbH ist Ihr zuverlässiger B2B-Partner für Natriumhydrogencarbonat in Großmengen. Sichere Logistik, höchste Reinheit und zertifizierte Qualität für Industrie, Pharma, Lebensmittel und Futtermittel.',
    },
    nav: { home: 'Home', about: 'Über uns', industries: 'Branchen', specs: 'Spezifikationen', team: 'Team', contact: 'Kontakt' },
    specsHref: '/spezifikationen',
    salesLabel: 'Vertrieb:',
    navToggleAria: 'Navigation öffnen',
    switch: { label: 'EN', href: '/en/', aria: 'Switch to English' },
    footer: {
      tagline:
        'Sicherer Handel und strategische Rohstoffversorgung für die europäische Chemie- und Verarbeitungsindustrie.',
      impressum: 'Impressum',
      datenschutz: 'Datenschutzerklärung',
      managingDirectorLabel: 'Geschäftsführer:',
      registerCourtLabel: 'Registergericht:',
      vatLabel: 'Umsatzsteuer-Identifikationsnummer:',
      authorityLabel: 'Aufsichtsbehörde & Gewerbe:',
      authorityText:
        'Der Import und Export sowie der nationale und internationale Handel mit Waren aller Art, der Groß- und Einzelhandel, für die keine besondere behördliche Genehmigung erforderlich ist. Erlaubnis nach § 34c Absatz 1 Satz 1 Nummer 4 Gewerbeordnung (Wohnimmobilienverwalter) erteilt.',
      authoritySupervisor:
        'Aufsichtsbehörde: Industrie- und Handelskammer Frankfurt am Main, Börsenplatz 4, 60313 Frankfurt am Main.',
      rights: '© 2026 ALVEX Handel GmbH. Alle Rechte vorbehalten.',
      compliance: '100% DSGVO-konform | Keine externen CDNs | Keine Cookies',
    },
  },
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    meta: {
      title: 'ALVEX Handel GmbH | B2B Sodium Bicarbonate Distribution',
      description:
        'ALVEX Handel GmbH is your reliable B2B partner for bulk sodium bicarbonate. Secure logistics, highest purity and certified quality for industry, pharma, food and animal feed.',
    },
    nav: { home: 'Home', about: 'About', industries: 'Industries', specs: 'Specifications', team: 'Team', contact: 'Contact' },
    specsHref: '/en/specifications',
    salesLabel: 'Sales:',
    navToggleAria: 'Open navigation',
    switch: { label: 'DE', href: '/', aria: 'Auf Deutsch wechseln' },
    footer: {
      tagline:
        'Secure trading and strategic raw-material supply for the European chemical and processing industry.',
      impressum: 'Legal Notice',
      datenschutz: 'Privacy Policy',
      managingDirectorLabel: 'Managing Director:',
      registerCourtLabel: 'Register Court:',
      vatLabel: 'VAT ID:',
      authorityLabel: 'Regulatory Authority & Trade:',
      authorityText:
        'Import and export as well as national and international trade in goods of all kinds, and wholesale and retail trade not requiring special official authorisation. Permit pursuant to Section 34c (1) sentence 1 no. 4 of the German Trade Regulation Act (GewO) granted.',
      authoritySupervisor:
        'Supervisory authority: Chamber of Industry and Commerce (IHK) Frankfurt am Main, Börsenplatz 4, 60313 Frankfurt am Main.',
      rights: '© 2026 ALVEX Handel GmbH. All rights reserved.',
      compliance: '100% GDPR-compliant | No external CDNs | No cookies',
    },
  },
};
