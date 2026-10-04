// Home page text — English and Georgian side by side.
// Texts containing <mark> are rendered as HTML (our own content), so highlighted phrases can sit inside the sentence in each language.
export const homeText = {
  metaTitle: {
    en: 'AID Group | Pharmaceutical Engineering & GMP Consulting',
    ka: 'AID Group | ფარმაცევტული ინჟინერია და GMP კონსულტაცია',
  },
  metaDescription: {
    en: 'Pharmaceutical consulting & engineering across the Caucasus region — GMP/GDP compliance, facility design, equipment selection, qualification & validation.',
    ka: 'ფარმაცევტული საკონსულტაციო და საინჟინრო მომსახურება კავკასიის რეგიონში — GMP/GDP შესაბამისობა, საწარმოს დაპროექტება, აღჭურვილობის შერჩევა, კვალიფიკაცია და ვალიდაცია.',
  },

  hero: {
    kicker: { en: 'For a Healthier Tomorrow', ka: 'ჯანსაღი მომავლისთვის' },
    title: {
      en: 'Engineering Pharmaceutical Facilities for Compliance, Performance and Long-Term Reliability',
      ka: 'ფარმაცევტული საწარმოების ინჟინერია შესაბამისობის, ეფექტიანობისა და გრძელვადიანი საიმედოობისთვის',
    },
    subline: {
      en: 'AID Group combines pharmaceutical GMP expertise, engineering knowledge and project execution experience to support manufacturing facilities from concept and design through implementation, commissioning and qualification.',
      ka: 'AID Group აერთიანებს ფარმაცევტული GMP-ის ექსპერტიზას, საინჟინრო ცოდნასა და პროექტების განხორციელების გამოცდილებას, რათა მხარი დაუჭიროს საწარმოებს კონცეფციიდან და დაპროექტებიდან დაწყებული, განხორციელების, ექსპლუატაციაში გაშვებისა და კვალიფიკაციის ჩათვლით.',
    },
    cta: { en: 'Discuss Your Project →', ka: 'განვიხილოთ თქვენი პროექტი →' },
    imageAlt: {
      en: 'Meeting room with a wall-mounted monitor showing facility design drawings',
      ka: 'სათათბირო ოთახი, სადაც კედელზე დამაგრებულ მონიტორზე საწარმოს საპროექტო ნახაზებია ნაჩვენები',
    },
  },

  engagement: {
    title: { en: 'Areas of Engagement', ka: 'თანამშრომლობის მიმართულებები' },
    items: [
      {
        title: { en: 'Turnkey Factory Setup', ka: 'საწარმოს მოწყობა „გასაღები ხელში“' },
        description: {
          en: 'For start-ups, foreign investors, and facility developers looking to build or expand compliant manufacturing facilities in Georgia.',
          ka: 'სტარტაპებისთვის, უცხოელი ინვესტორებისა და ობიექტების დეველოპერებისთვის, რომლებიც საქართველოში მოთხოვნებთან შესაბამისი საწარმოო ობიექტების აშენებას ან გაფართოებას გეგმავენ.',
        },
      },
      {
        title: { en: 'GMP & Engineering Localization', ka: 'GMP-ისა და საინჟინრო მომსახურების ლოკალიზაცია' },
        description: {
          en: 'For international pharma brands and global engineering firms needing an on-the-ground partner to execute local projects.',
          ka: 'საერთაშორისო ფარმაცევტული ბრენდებისა და გლობალური საინჟინრო კომპანიებისთვის, რომლებსაც ადგილზე პარტნიორი სჭირდებათ ადგილობრივი პროექტების განსახორციელებლად.',
        },
      },
      {
        title: { en: 'Line Upgrades & Modernization', ka: 'ხაზების განახლება და მოდერნიზაცია' },
        description: {
          en: 'For existing local manufacturers optimizing infrastructure to meet international regulatory standards.',
          ka: 'არსებული ადგილობრივი მწარმოებლებისთვის, რომლებიც ინფრასტრუქტურას აუმჯობესებენ საერთაშორისო მარეგულირებელ სტანდარტებთან შესაბამისობისთვის.',
        },
      },
    ],
  },

  partners: {
    title: { en: 'Partners', ka: 'პარტნიორები' },
    lead: {
      en: 'We work alongside manufacturers, equipment vendors and engineering partners across the region.',
      ka: 'ჩვენ ვმუშაობთ რეგიონის მწარმოებლებთან, აღჭურვილობის მომწოდებლებთან და საინჟინრო პარტნიორებთან ერთად.',
    },
    // {name} is replaced by the partner's name from src/data/partners.json
    logoAlt: { en: '{name} logo', ka: '{name}-ის ლოგო' },
  },

  expertise: {
    title: { en: 'AID Group Expertise', ka: 'AID Group-ის ექსპერტიზა' },
    // "em: true" marks the highlighted word(s) in each card title.
    items: [
      {
        parts: {
          en: [{ t: 'GMP/GDP', em: true }, { t: ' Consulting' }],
          ka: [{ t: 'GMP/GDP', em: true }, { t: ' კონსულტაცია' }],
        },
        desc: {
          en: 'GMP readiness assessments, gap assessments and internal audits',
          ka: 'GMP-სთვის მზადყოფნის შეფასება, ხარვეზების (gap) ანალიზი და შიდა აუდიტები',
        },
      },
      {
        parts: {
          en: [{ t: 'Facility & Engineering ' }, { t: 'Design', em: true }],
          ka: [{ t: 'საწარმო და საინჟინრო სისტემების ' }, { t: 'დაპროექტება', em: true }],
        },
        desc: {
          en: 'Pharmaceutical facility concept development and layout planning',
          ka: 'ფარმაცევტული საწარმოს კონცეფციის შემუშავება და განლაგების დაგეგმვა',
        },
      },
      {
        parts: {
          en: [{ t: 'Equipment & ' }, { t: 'Procurement', em: true }],
          ka: [{ t: 'აღჭურვილობა და ' }, { t: 'შესყიდვები', em: true }],
        },
        desc: {
          en: 'Vendor assessment, technical bid comparison and procurement support',
          ka: 'მომწოდებლების შეფასება, ტექნიკური შეთავაზებების შედარება და შესყიდვის მხარდაჭერა',
        },
      },
      {
        parts: {
          en: [{ t: 'Qualification & ' }, { t: 'Validation', em: true }],
          ka: [{ t: 'კვალიფიკაცია და ' }, { t: 'ვალიდაცია', em: true }],
        },
        desc: {
          en: 'Qualification and validation planning and execution support, including DQ, IQ, OQ and PQ',
          ka: 'კვალიფიკაციისა და ვალიდაციის დაგეგმვისა და განხორციელების მხარდაჭერა, მათ შორის DQ, IQ, OQ და PQ',
        },
      },
    ],
  },

  why: {
    title: { en: 'Why AID Group', ka: 'რატომ AID Group' },
    imageAlt: {
      en: 'Two pharmaceutical engineers in cleanroom garments reviewing a tablet beside a stainless-steel filling machine',
      ka: 'ორი ფარმაცევტული ინჟინერი სუფთა ოთახის ტანსაცმლით ამოწმებს ტაბლეტს უჟანგავი ფოლადის შესავსები დანადგარის გვერდით',
    },
    items: [
      { en: 'Pharmaceutical-sector specialization, not general construction', ka: 'სპეციალიზაცია ფარმაცევტულ სექტორში და არა ზოგად მშენებლობაში' },
      { en: 'GMP/GDP and validation built into engineering decisions from day one', ka: 'GMP/GDP და ვალიდაცია საინჟინრო გადაწყვეტილებებში პირველივე დღიდან' },
      { en: 'One team connecting Quality, Production, Engineering and vendors', ka: 'ერთი გუნდი, რომელიც აერთიანებს ხარისხს, წარმოებას, ინჟინერიას და მომწოდებლებს' },
      { en: 'Flexible engagement — full lifecycle or a targeted stage', ka: 'მოქნილი თანამშრომლობა — სრული ციკლი ან კონკრეტული ეტაპი' },
    ],
  },

  glance: {
    title: { en: 'At a Glance', ka: 'მოკლედ კომპანიის შესახებ' },
    text: {
      en: 'AID Group provides <mark>integrated consulting, engineering and qualification services</mark> for pharmaceutical manufacturing facilities. We help clients turn operational needs and regulatory requirements into <mark>practical, compliant and efficient facilities</mark> — from early concept and user requirements, through design and equipment/utility selection, to implementation support, commissioning, qualification and validation.',
      ka: 'AID Group გთავაზობთ <mark>ინტეგრირებულ საკონსულტაციო, საინჟინრო და კვალიფიკაციის მომსახურებას</mark> ფარმაცევტული საწარმოებისთვის. ჩვენ ვეხმარებით კლიენტებს, საოპერაციო საჭიროებები და მარეგულირებელი მოთხოვნები გადააქციონ <mark>პრაქტიკულ, მოთხოვნებთან შესაბამის და ეფექტიან საწარმოებად</mark> — ადრეული კონცეფციიდან და მომხმარებლის მოთხოვნებიდან, დაპროექტებისა და აღჭურვილობის/დამხმარე სისტემების შერჩევის გავლით, განხორციელების მხარდაჭერამდე, ექსპლუატაციაში გაშვებამდე, კვალიფიკაციამდე და ვალიდაციამდე.',
    },
    positioningTitle: { en: 'Our Positioning', ka: 'ჩვენი პოზიციონირება' },
    positioningText: {
      en: 'AID Group <mark>bridges the gap between pharmaceutical quality requirements and engineering execution</mark>. Our goal is to ensure that every technical decision supports not only project delivery, but also <mark>GMP compliance, operational efficiency, maintainability and successful qualification</mark>.',
      ka: 'AID Group <mark>ხიდს აგებს ფარმაცევტული ხარისხის მოთხოვნებსა და საინჟინრო შესრულებას შორის</mark>. ჩვენი მიზანია, ყველა ტექნიკური გადაწყვეტილება ემსახურებოდეს არა მხოლოდ პროექტის განხორციელებას, არამედ <mark>GMP-თან შესაბამისობას, ოპერაციულ ეფექტიანობას, მოვლა-შენახვის შესაძლებლობასა და წარმატებულ კვალიფიკაციას</mark>.',
    },
  },

  cta: {
    text: {
      en: "Planning a new facility or upgrading an existing one? Let's talk.",
      ka: 'გეგმავთ ახალ საწარმოს ან არსებულის განახლებას? მოდით, ვისაუბროთ.',
    },
    button: { en: 'Contact Us', ka: 'დაგვიკავშირდით' },
  },
};
