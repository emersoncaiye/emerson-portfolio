import type { Content } from './types';

const en: Content = {
  lang: 'en',
  htmlLang: 'en',
  langLabel: 'EN',
  title: 'Emerson — A life in motion',
  description:
    'An independent portfolio by Emerson (Cai Ye): selected work, field notes and experience — moving between cultures, collecting perspectives, and turning observations into ideas.',
  nav: {
    work: 'Work',
    journal: 'Journal',
    experience: 'Experience',
    about: 'About',
    contact: 'Contact',
  },
  a11y: {
    skip: 'Skip to content',
    menu: 'Menu',
    language: 'Language',
  },
  hero: {
    name: 'Emerson',
    nameMeta: 'CAI YE — Shenzhen / wherever next',
    label: 'An independent portfolio / 2026',
    headline: 'A life in motion.',
    sub: 'Moving between cultures, collecting perspectives, and turning observations into ideas.',
    meta: ['Communication', 'Creative Projects', 'Everyday Observations'],
    scroll: 'Scroll',
  },
  work: {
    label: 'Selected Work',
    intro:
      'Two projects, different in scale — one a business concept built end to end, one the page you are reading now.',
    delta: {
      num: '01',
      title: 'Delta — Too Good to Stay Put.',
      categories: ['Brand Concept', 'Circular Commerce', 'Digital Experience'],
      year: '2026',
      intro:
        'Delta explores a different relationship with ownership through curated objects, resale and return incentives. Developed as an independent concept combining brand identity, a proposed commercial model and a digital prototype.',
      image: '/images/delta/delta-cover.jpg',
      imageAlt:
        'Cover of the Delta concept site: a second-hand camera, stacked books and a folded blanket resting on a worn chair, under the headline “Too Good to Stay Put.”',
      imageCaption: 'Concept site — demo data, concept imagery',
      link: { href: '/work/delta/', label: 'Explore Project' },
    },
    site: {
      num: '02',
      title: 'A Website in Three Languages',
      categories: ['Digital Communication', 'AI-assisted Development', 'Collaboration'],
      year: '2026',
      intro:
        'This portfolio began as a three-language résumé site — English, Chinese and French — planned, written and built from scratch, and later extended to Cantonese. The work was as much editorial as technical: deciding what to say, in which language, and in what order.',
      points: [
        'Information architecture for three language versions, later four',
        'Responsive layouts designed and tested across screens, built with Astro on Cloudflare Pages',
        'Coordinated a seven-person team so each member launched a résumé site of their own',
      ],
      image: '/images/site-cover.jpg',
      imageMobile: '/images/site-mobile.jpg',
      imageAlt:
        'The homepage of this portfolio: a large serif headline on a warm off-white background with an editorial grid of work, field notes and experience.',
      imageCaption: 'emerson-portfolio.pages.dev — desktop and mobile views',
      link: { href: 'https://emerson-portfolio.pages.dev/', label: 'Visit the Site', external: true },
    },
  },
  journal: {
    label: 'Field Notes',
    intro: 'Travel, work, and the small things worth writing down.',
    labels: {
      entry: 'Entry',
      forthcoming: 'Forthcoming',
      read: 'Read',
      back: 'Field Notes',
      all: 'All field notes',
      contents: 'Contents',
      tags: 'Tags',
    },
    entries: [
      {
        num: '01',
        title: 'The Road I Walked Alone',
        place: 'Tongariro, New Zealand',
        tags: ['Travel', 'Solitude'],
        description:
          'Twenty kilometres across the crossing, alone — and the quieter roads around both islands that came after it.',
        slug: 'the-road-i-walked-alone',
        image: '/images/tongariro.jpg',
        imageAlt: 'A volcanic ridge on the Tongariro Alpine Crossing trail, New Zealand.',
        aspect: 'portrait',
      },
      {
        num: '02',
        title: 'What People Choose to Take Home',
        place: 'Queenstown, New Zealand',
        tags: ['Culture', 'Observations'],
        description:
          'Behind a souvenir counter, watching what travellers from fifty-odd countries decide is worth carrying home.',
        slug: 'what-people-take-home',
      },
      {
        num: '03',
        title: 'Somewhere Unfamiliar',
        place: 'United States',
        tags: ['Living Abroad'],
        description:
          'Four states, six jobs, and a car bought on a work visa — notes on arriving somewhere and making it work.',
        slug: 'somewhere-unfamiliar',
      },
      {
        num: '04',
        title: 'Learning Through Movement',
        place: 'Bouldering',
        tags: ['Movement', 'Practice'],
        description: 'Notes in progress.',
        slug: null,
      },
    ],
    photos: [
      {
        image: '/images/wmrt-team.jpg',
        alt: 'Emerson with the French sailing team after the final race at WMRT Shenzhen.',
        caption: 'WMRT Shenzhen',
        place: 'With the French team, after the last race',
        aspect: 'landscape',
      },
      {
        image: '/images/slope-point.jpg',
        alt: 'Wind-shaped trees at Slope Point, the southernmost point of New Zealand.',
        caption: 'Slope Point',
        place: 'Southernmost point of the South Island',
        aspect: 'portrait',
      },
      {
        image: '/images/timaru-sunrise.jpg',
        alt: 'Sunrise over the coast at Timaru, on the east coast of the South Island.',
        caption: 'Timaru, sunrise',
        place: 'East coast, South Island',
        aspect: 'landscape',
      },
      {
        image: '/images/friends.jpg',
        alt: 'Coworkers together outdoors in the North Island of New Zealand, after work.',
        caption: 'North Island, after hours',
        place: 'With coworkers',
        aspect: 'portrait',
      },
    ],
  },
  experience: {
    label: 'Experience',
    intro: 'Selected roles and projects, in order of relevance.',
    items: [
      {
        role: 'Event Planning & Coordination',
        org: 'Nanshan Shenzhen–Hong Kong Youth Exchange',
        date: 'Ended Oct 2026',
        place: 'Shenzhen · Event',
        description:
          'Co-planned a four-stop cultural and educational programme for 24 young participants from Shenzhen and Hong Kong, coordinating group activities, interactive tasks and on-site logistics.',
      },
      {
        role: 'Team Translator (Volunteer)',
        org: 'World Match Racing Tour · Shenzhen',
        date: 'Jan 2026',
        place: 'Shenzhen · Event',
        description:
          'Supported the French sailing team during an eight-day international regatta, coordinating communication across technical inspections, equipment handovers and event operations. Awarded WMRT Outstanding Volunteer.',
      },
      {
        role: 'Overseas Work Experience',
        org: 'Retail & Hospitality',
        date: 'Dec 2023 – Sep 2025',
        place: 'United States & New Zealand',
        description:
          'Worked across customer-facing roles in retail and hospitality in the United States and New Zealand, communicating with international customers and adapting to different workplace environments.',
      },
      {
        role: 'Evening Tutor',
        org: 'Li Feng Education (Shenzhen) Co.',
        date: 'Jun – Aug 2026',
        place: 'Shenzhen · Part-time',
        description:
          'Provided English-language academic support to secondary students from Shenzhen and Hong Kong, adapting explanations to different learning needs.',
      },
    ],
  },
  about: {
    label: 'About',
    heading: 'Curious about people. Comfortable with the unfamiliar.',
    paragraphs: [
      'I study Applied French at Shenzhen Polytechnic University, and move between Mandarin, English, Cantonese and French depending on who is in the room.',
      'Most of what I know came from working: a supermarket in the United States, a gelato counter and a souvenir shop in New Zealand, a regatta in Shenzhen, an evening classroom. Different industries, same question — how do you make yourself understood, and how do you understand someone back.',
      'I am interested in brands and in why people buy, keep and let go of things. Delta began there. So did this site, which I designed and built myself with AI-assisted tools.',
    ],
    traits: ['Applied learner', 'Cross-cultural communicator', 'Problem solver'],
    image: '/images/slope-point.jpg',
    imageAlt: 'Wind-shaped trees at Slope Point, the southernmost tip of New Zealand’s South Island.',
    imageCaption: 'Slope Point, New Zealand',
    beyondLabel: 'Beyond Work',
    beyondIntro: 'A few things that take up the rest of the week.',
    beyond: [
      { title: 'Travel', text: 'Long walks and slow days; the parts of a place you only see on foot.' },
      { title: 'Climbing', text: 'Bouldering, mostly — problems solved with the body before the head catches up.' },
      { title: 'Music', text: 'Always on, rarely discussed. The background track to most of the above.' },
      { title: 'Photography', text: 'Everyday pictures of light on walls and whatever is left on the table.' },
    ],
  },
  contact: {
    label: 'Contact',
    heading: 'Let’s stay in touch.',
    email: 'emerson.the.k@gmail.com',
    github: 'https://github.com/emersoncaiye',
    githubLabel: 'GitHub',
    note: 'Open to work, collaboration, or a conversation about objects, cities or language.',
  },
  articles: {
    'the-road-i-walked-alone': {
      slug: 'the-road-i-walked-alone',
      title: 'The Road I Walked Alone',
      place: 'Tongariro Alpine Crossing, New Zealand',
      meta: 'Tongariro · 20 km · over 1,000 m of descent',
      tags: ['Travel', 'Solitude'],
      intro:
        'Twenty kilometres across a volcanic plateau, walked alone — not as a statement, but because that was the arrangement that made the walk possible that week.',
      image: '/images/tongariro.jpg',
      imageAlt: 'A volcanic ridge on the Tongariro Alpine Crossing trail under an overcast sky.',
      body: [
        'I walked the Tongariro Alpine Crossing alone: twenty kilometres, over a thousand metres of climbing and descent. Going alone was not a statement. It was simply the arrangement that made the walk possible that week.',
        'The first hour is crowded. Everyone leaves at the same time, in the same direction, and for a while it feels like a queue with a view. Then the track tilts upward, people spread out, and by the saddle you are mostly alone with your own breathing.',
        'What I remember is not the summit but the middle: the long, exposed stretch where the path is only a line of poles and the wind takes the sound away. You stop negotiating with yourself there. You count steps, drink water, keep going.',
        'Coming down, the track turns to loose scree and the knees complain. The way back is the same landscape seen from the other side, which turns out to be a different walk entirely.',
        {
          image: '/images/timaru-sunrise.jpg',
          alt: 'Sunrise over the coast at Timaru, on the east coast of the South Island.',
          caption: 'Elsewhere in the South Island: sunrise at Timaru, east coast.',
        },
        'I have thought about that walk since — not as proof of anything, but as a way of measuring difficulty. When something feels impossible, I remember that a long path is still a path, and that the only technique is to keep putting one foot in front of the other.',
      ],
    },
    'what-people-take-home': {
      slug: 'what-people-take-home',
      title: 'What People Choose to Take Home',
      place: 'Queenstown, New Zealand',
      meta: 'A souvenir counter · one season',
      tags: ['Culture', 'Observations'],
      intro:
        'One season behind a souvenir counter in Queenstown — mostly repetition, and occasionally a clear view of what people decide is worth carrying home.',
      body: [
        'I worked in a souvenir shop in Queenstown for a while. The job is folding, pricing, answering the same three questions. The interesting part happens on the other side of the counter.',
        'The expensive things rarely sold fastest. People hesitated over the beautiful, useless object and then bought something small enough to fit in a suitcase: a magnet, a tea towel, a postcard of a place they had already photographed.',
        'Tourists from fifty-odd countries came through. Some wanted something that looked like New Zealand. Others wanted something that looked like they had been to New Zealand. The two are not the same purchase.',
        'What I took from it was a suspicion of taste as a fixed thing. It is situational. The same person will spend an hour choosing a gift for someone else and a fraction of that on something for themselves. What we keep is often less about the object than about the story we want it to carry.',
        'I still like shops for this reason. Not to buy anything — to watch what people decide is worth the weight in their bag.',
      ],
    },
    'somewhere-unfamiliar': {
      slug: 'somewhere-unfamiliar',
      title: 'Somewhere Unfamiliar',
      place: 'United States',
      meta: 'Four states · six jobs · Dec 2023 –',
      tags: ['Living Abroad'],
      intro:
        'The first weeks in a new country are made of paperwork. Notes on arriving somewhere unfamiliar and slowly making it work.',
      body: [
        'The first weeks in a new country are made of paperwork. A bank account that requires an address, an address that requires a lease, a lease that requires a job, a job that requires a phone number. You solve it in the wrong order, several times, until one afternoon the sequence suddenly works.',
        'I learned to buy a car in a language I was still learning, and to read a contract with a dictionary open on the seat next to me. Neither felt brave at the time. It felt like admin — the kind that takes an entire day and ends with a receipt you are afraid to lose.',
        'The moments I remember are small and unphotogenic: a supermarket aisle where I finally understood a joke, a bus driver who recognised me, the first night I slept without setting an alarm.',
        'Living abroad did not make me fearless. It made the unfamiliar smaller — a category of thing that can be approached, asked about, and eventually handled. Most of the confidence people see is just a longer list of things that once went wrong and were fixed.',
        'Four states, six jobs, one very used car. I would not describe it as an adventure. It was a life, conducted in a second language, with all the ordinary admin included.',
      ],
    },
  },
  deltaCase: {
    eyebrow: 'Selected Work / 01',
    title: 'Delta — Too Good to Stay Put.',
    standfirst:
      'A concept for a curated circular-commerce brand: objects with a documented past, and a longer life ahead.',
    meta: [
      { label: 'Role', value: 'Concept, brand, PRD' },
      { label: 'Year', value: '2026' },
      { label: 'Type', value: 'Independent concept' },
    ],
    intro: [
      'Delta began as a question about ownership. Most second-hand platforms optimise for price and volume, which flattens an object into a listing: no history, no condition evidence, no reason to keep it. The concept starts from the opposite direction — fewer, better objects, described honestly, and designed to keep moving.',
      'It is an independent concept, not an operating company. The site is a working prototype with demo data; no sales, customers or commercial results are claimed here.',
    ],
    modelTitle: 'Taste, Hold, Transfer',
    model: [
      { key: 'Taste', text: 'Curation replaces search — a point of view about what is worth owning.' },
      { key: 'Hold', text: 'Ownership as a period of use, not a final destination.' },
      { key: 'Transfer', text: 'Objects return, resell or pass on; the archive records the journey.' },
    ],
    notesTitle: 'Project Notes',
    notes: [
      {
        title: 'Origin & problem',
        text: 'Second-hand markets are efficient at price and weak at trust. Condition is hard to verify, and the story of an object disappears the moment it becomes a listing. Delta treats documentation as part of the product.',
      },
      {
        title: 'Brand positioning',
        text: '“Too good to stay put.” Curated pre-owned objects for a longer life — taste rather than thrift, restraint rather than urgency.',
      },
      {
        title: 'Curated circular-commerce model',
        text: 'A tripartite model: aesthetic curation, tiered return credits, and a fixed share of resale profit directed to a public-interest fund.',
      },
      {
        title: 'Return incentives',
        text: 'A tiered return-credit mechanism invites an owner to send an object back into circulation instead of leaving it unused at home.',
      },
      {
        title: 'Social-impact component',
        text: 'A fixed share of second-sale profit is allocated to a charitable fund — the “delta” in the name: the small increment that leaves the loop.',
      },
      {
        title: 'Commercial considerations',
        text: 'Consignment is the proposed operating model. Every listing would carry four types of documentation — main image, material detail, condition evidence and a usage scene — with no filters used to fake age. Pricing, authentication and settlement remain open questions.',
      },
      {
        title: 'Digital prototype',
        text: 'A bilingual concept site with Shop, The Edit, Consign, Archive and Flow Guide sections, plus a full product requirements document. Written with AI agents to accelerate concept derivation; the project is open-sourced on GitHub.',
      },
      {
        title: 'Social media strategy',
        text: 'Instead of category catalogues, content is organised by scene — objects for moving, everyday oddities, things worth keeping. Fragments of image, music and text build the brand world before the catalogue does.',
      },
    ],
    prototypeTitle: 'Prototype',
    prototypeText: [
      'The prototype is live and openly labelled as a concept; product data is demo data and imagery is concept imagery.',
    ],
    links: [
      { label: 'Concept site', value: 'that-program.pages.dev', href: 'https://that-program.pages.dev/' },
      { label: 'Source & PRD', value: 'github.com/emersoncaiye/Delta', href: 'https://github.com/emersoncaiye/Delta' },
    ],
    disclaimer: 'Concept work. No commercial results, customers or revenue are claimed.',
    back: 'Back to Work',
    gallery: [
      {
        image: '/images/delta/delta-cover.jpg',
        alt: 'Delta cover: a worn chair holding a second-hand camera, books and a blanket, under the headline “Too Good to Stay Put.”',
        caption: 'Cover — concept imagery',
      },
      {
        image: '/images/delta/delta-shop.jpg',
        alt: 'Delta shop section: four curated demo objects with item numbers, prices and condition-label intentions.',
        caption: 'Shop — curated selection, demo data',
      },
      {
        image: '/images/delta/delta-edit.jpg',
        alt: 'Delta editorial section: “You may not need more things. You need better choices,” with three scene-based edits.',
        caption: 'The Edit — by scenes, not categories',
      },
      {
        image: '/images/delta/delta-flow.jpg',
        alt: 'Delta flow guide page explaining the consignment and return process.',
        caption: 'Flow Guide — consignment & returns',
      },
    ],
  },
  footer: {
    rights: '© 2026 Emerson',
    colophon: 'Set in Newsreader, Noto Serif SC & Inter · Built with Astro · Hosted on Cloudflare Pages',
  },
};

export default en;
