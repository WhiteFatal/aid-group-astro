// All shared UI strings live here so /ka/ only needs a matching ka.ts.
export const en = {
  lang: 'en',
  nav: [
    { label: 'Home', path: '/en/' },
    { label: 'About', path: '/en/about/' },
    { label: 'Services', path: '/en/services/' },
    { label: 'Projects', path: '/en/projects/' },
    { label: 'Contact', path: '/en/contact/' },
  ],
  langSwitch: { current: 'EN', other: 'GE', otherLabel: 'Georgian version coming soon' },
  footer: {
    tagline: 'For a Healthier Tomorrow',
    blurb:
      'AID Group is a pharmaceutical consulting and engineering company providing GMP/GDP consulting, facility and utility engineering support, equipment selection, project coordination, qualification and validation services.',
    quickLinks: 'Quick Links',
    contact: 'Contact',
    followUs: 'Follow Us',
    credit: 'Built by Radiance',
    creditHref: 'https://radiance.ge',
  },
  contact: {
    email: 'aidgcec@gmail.com',
    phone: '+995 571 13 03 35',
    phoneHref: 'tel:+995571130335',
    whatsapp: 'https://wa.me/995571130335',
    addressLines: ['166 Otar Chiladze Str.', 'Tbilisi 0160, Georgia.'],
  },
  facebook: 'https://www.facebook.com/profile.php?id=61593867286368',
};
export type Strings = typeof en;
