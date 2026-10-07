// Shared site text (header, footer, contact details). Each text that differs by language is written as
// { en: '…', ka: '…' } so the two versions sit side by side. Values without a pair are the same in both languages.
export const common = {
  nav: [
    { slug: "", label: { en: "Home", ka: "მთავარი" } },
    { slug: "about", label: { en: "About", ka: "ჩვენს შესახებ" } },
    { slug: "services", label: { en: "Services", ka: "სერვისები" } },
    { slug: "projects", label: { en: "Projects", ka: "პროექტები" } },
    { slug: "contact", label: { en: "Contact", ka: "კონტაქტი" } },
  ],
  legalName: {
    en: 'LLC "Engineering and Consulting Company AID Group"',
    ka: "შპს „საინჟინრო და საკონსულტაციო კომპანია აიდ ჯგუფი“",
  },
  a11y: {
    skipLink: { en: "Skip to content", ka: "გადადით შინაარსზე" },
    menu: { en: "Menu", ka: "მენიუ" },
    mainNav: { en: "Main", ka: "მთავარი ნავიგაცია" },
    language: { en: "Language", ka: "ენა" },
    logoAlt: { en: "AID Group — home", ka: "AID Group — მთავარი გვერდი" },
  },
  langSwitch: {
    unavailableLabel: {
      en: "Georgian version coming soon",
      ka: "ინგლისური ვერსია მიუწვდომელია",
    },
  },
  footer: {
    tagline: { en: "For a Healthier Tomorrow", ka: "ჯანსაღი მომავლისთვის" },
    blurb: {
      en: "AID Group is a pharmaceutical consulting and engineering company providing GMP/GDP consulting, facility and utility engineering support, equipment selection, project coordination, qualification and validation services.",
      ka: "AID Group არის ფარმაცევტული საკონსულტაციო და საინჟინრო კომპანია, რომელიც გთავაზობთ GMP/GDP კონსულტაციას, საწარმოსა და დამხმარე საინჟინრო სისტემების საინჟინრო მხარდაჭერას, აღჭურვილობის შერჩევას, პროექტის კოორდინაციას, კვალიფიკაციისა და ვალიდაციის მომსახურებას.",
    },
    quickLinks: { en: "Quick Links", ka: "სწრაფი ბმულები" },
    contact: { en: "Contact", ka: "კონტაქტი" },
    followUs: { en: "Follow Us", ka: "გამოგვყევით" },
    credit: { en: "Built by Radiance", ka: "შექმნილია Radiance-ის მიერ" },
    creditHref: "https://radiance.ge",
  },
  city: { en: "Tbilisi", ka: "თბილისი" },
  contact: {
    email: "aidgcec@gmail.com",
    phone: "+995 544556955",
    phoneHref: "tel:+995 544556955",
    whatsapp: "https://wa.me/995544556955",
    addressLines: {
      en: ["166 Otar Chiladze Str.", "Tbilisi 0160, Georgia."],
      ka: ["ოთარ ჭილაძის ქ. №166", "თბილისი 0160, საქართველო"],
    },
  },
  facebook: "https://www.facebook.com/profile.php?id=61593867286368",
};
