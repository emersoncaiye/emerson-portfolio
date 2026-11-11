import type { Content } from './types';

const fr: Content = {
  lang: 'fr',
  htmlLang: 'fr',
  langLabel: 'FR',
  title: 'Emerson — Une vie en mouvement',
  description:
    'Un portfolio indépendant d’Emerson (Cai Ye) : projets choisis, notes de terrain et parcours — passer d’une culture à l’autre, collectionner des points de vue, transformer les observations en idées.',
  nav: {
    work: 'Projets',
    journal: 'Carnet',
    experience: 'Parcours',
    about: 'À propos',
    contact: 'Contact',
  },
  a11y: {
    skip: 'Aller au contenu',
    menu: 'Menu',
    language: 'Langue',
  },
  hero: {
    name: 'Emerson',
    nameMeta: 'CAI YE — Shenzhen / et après, on verra',
    label: 'Un portfolio indépendant / 2026',
    headline: 'Une vie en mouvement.',
    sub: 'Passer d’une culture à l’autre, collectionner des points de vue, et transformer les observations en idées.',
    meta: ['Communication', 'Projets créatifs', 'Observations du quotidien'],
    scroll: 'Défiler',
  },
  work: {
    label: 'Projets choisis',
    intro: 'Deux projets, deux échelles — un concept d’entreprise construit de bout en bout, et la page que vous êtes en train de lire.',
    delta: {
      num: '01',
      title: 'Delta — Too Good to Stay Put.',
      categories: ['Concept de marque', 'Commerce circulaire', 'Expérience numérique'],
      year: '2026',
      intro:
        'Delta explore une autre relation à la possession, à travers des objets choisis, la revente et des incitations au retour. Développé comme concept indépendant : identité de marque, modèle commercial proposé et prototype numérique.',
      image: '/images/delta/delta-cover.jpg',
      imageAlt:
        'Page de couverture du site concept Delta : un appareil photo d’occasion, des livres empilés et une couverture pliée posés sur une chaise usée, sous le titre « Too Good to Stay Put. »',
      imageCaption: 'Site concept — données de démonstration, images concept',
      link: { href: '/fr/work/delta/', label: 'Découvrir le projet' },
    },
    site: {
      num: '02',
      title: 'Un site en trois langues',
      categories: ['Communication numérique', 'Développement assisté par IA', 'Collaboration'],
      year: '2026',
      intro:
        'Ce portfolio a commencé comme un site de CV en trois langues — anglais, chinois et français — pensé, écrit et construit de zéro, puis étendu au cantonais. Le travail était autant éditorial que technique : décider quoi dire, dans quelle langue, et dans quel ordre.',
      points: [
        'Architecture d’information pour trois versions linguistiques, quatre ensuite',
        'Mise en page responsive conçue et testée sur plusieurs écrans, construite avec Astro sur Cloudflare Pages',
        'Coordination d’une équipe de sept personnes, chacune lançant son propre site de CV',
      ],
      image: '/images/site-cover-fr.jpg',
      imageMobile: '/images/site-mobile-fr.jpg',
      imageAlt:
        'Page d’accueil de ce portfolio : un grand titre serif sur fond blanc chaud, avec une grille éditoriale de projets, notes de terrain et parcours.',
      imageCaption: 'emerson-portfolio.pages.dev — vues ordinateur et mobile',
      link: { href: 'https://emerson-portfolio.pages.dev/', label: 'Voir le site', external: true },
    },
  },
  journal: {
    label: 'Notes de terrain',
    intro: 'Voyages, travail, et les petites choses qui méritent d’être notées.',
    labels: {
      entry: 'Entrée',
      forthcoming: 'À venir',
      read: 'Lire',
      back: 'Notes de terrain',
      all: 'Toutes les notes',
      contents: 'Sommaire',
      tags: 'Mots-clés',
    },
    entries: [
      {
        num: '01',
        title: 'La route parcourue seule',
        place: 'Tongariro, Nouvelle-Zélande',
        tags: ['Voyage', 'Solitude'],
        description:
          'Vingt kilomètres traversés seule — et les routes plus silencieuses des deux îles, venues ensuite.',
        slug: 'the-road-i-walked-alone',
        image: '/images/tongariro.jpg',
        imageAlt: 'Une crête volcanique sur le sentier Tongariro Alpine Crossing, en Nouvelle-Zélande.',
        aspect: 'portrait',
      },
      {
        num: '02',
        title: 'Ce que les gens choisissent d’emporter',
        place: 'Queenstown, Nouvelle-Zélande',
        tags: ['Culture', 'Observations'],
        description:
          'Derrière un comptoir de souvenirs, observer ce que des voyageurs venus d’une cinquantaine de pays jugent digne d’être rapporté.',
        slug: 'what-people-take-home',
      },
      {
        num: '03',
        title: 'Quelque part d’inconnu',
        place: 'États-Unis',
        tags: ['Vie à l’étranger'],
        description:
          'Quatre États, six emplois, et une voiture achetée avec un visa de travail — des notes sur l’art de s’installer.',
        slug: 'somewhere-unfamiliar',
      },
      {
        num: '04',
        title: 'Apprendre par le mouvement',
        place: 'Bloc',
        tags: ['Mouvement', 'Pratique'],
        description: 'Notes en cours de rédaction.',
        slug: null,
      },
    ],
    photos: [
      {
        image: '/images/wmrt-team.jpg',
        alt: 'Emerson avec l’équipe française de voile après la dernière course du WMRT à Shenzhen.',
        caption: 'WMRT Shenzhen',
        place: 'Avec l’équipe française, après la dernière course',
        aspect: 'landscape',
      },
      {
        image: '/images/slope-point.jpg',
        alt: 'Arbres façonnés par le vent à Slope Point, le point le plus au sud de la Nouvelle-Zélande.',
        caption: 'Slope Point',
        place: 'Le point le plus au sud de l’Île du Sud',
        aspect: 'portrait',
      },
      {
        image: '/images/timaru-sunrise.jpg',
        alt: 'Lever de soleil sur la côte à Timaru, côte est de l’Île du Sud.',
        caption: 'Timaru, lever du soleil',
        place: 'Côte est, Île du Sud',
        aspect: 'landscape',
      },
      {
        image: '/images/friends.jpg',
        alt: 'Des collègues réunis en plein air dans l’Île du Nord de la Nouvelle-Zélande, après le travail.',
        caption: 'Île du Nord, après le travail',
        place: 'Avec les collègues',
        aspect: 'portrait',
      },
    ],
  },
  experience: {
    label: 'Parcours',
    intro: 'Postes et projets sélectionnés, par ordre de pertinence.',
    items: [
      {
        role: 'Planification et coordination d’événements',
        org: 'Échange de jeunes Nanshan Shenzhen–Hong Kong',
        date: 'Terminé en oct. 2026',
        place: 'Shenzhen · Événement',
        description:
          'Co-conception d’un programme culturel et éducatif en quatre étapes pour 24 jeunes de Shenzhen et de Hong Kong : activités de groupe, tâches interactives et logistique sur place.',
      },
      {
        role: 'Interprète d’équipe (bénévole)',
        org: 'World Match Racing Tour · Shenzhen',
        date: 'Janv. 2026',
        place: 'Shenzhen · Événement',
        description:
          'Appui à l’équipe française durant une régate internationale de huit jours, en coordonnant la communication autour des inspections techniques, des remises de matériel et de l’organisation. Distinction WMRT Outstanding Volunteer.',
      },
      {
        role: 'Expérience de travail à l’étranger',
        org: 'Vente & restauration',
        date: 'Déc. 2023 – Sept. 2025',
        place: 'États-Unis & Nouvelle-Zélande',
        description:
          'Postes au contact de la clientèle — vente et restauration — aux États-Unis et en Nouvelle-Zélande : communication avec une clientèle internationale et adaptation à des environnements de travail différents.',
      },
      {
        role: 'Tutrice du soir',
        org: 'Li Feng Éducation (Shenzhen)',
        date: 'Juin – août 2026',
        place: 'Shenzhen · Temps partiel',
        description:
          'Soutien scolaire en anglais pour des élèves du secondaire de Shenzhen et de Hong Kong, en adaptant les explications aux besoins de chacun.',
      },
    ],
  },
  about: {
    label: 'À propos',
    heading: 'Curieuse des gens. À l’aise dans l’inconnu.',
    paragraphs: [
      'J’étudie le français appliqué à l’Université Polytechnique de Shenzhen, et je passe du mandarin à l’anglais, au cantonais ou au français selon la personne en face de moi.',
      'L’essentiel de ce que je sais vient du travail : un supermarché aux États-Unis, un comptoir à glaces et une boutique de souvenirs en Nouvelle-Zélande, une régate à Shenzhen, une salle de classe le soir. Des industries différentes, la même question — comment se faire comprendre, et comprendre l’autre en retour.',
      'Les marques m’intéressent, et la façon dont les gens achètent, gardent puis se séparent des choses. Delta est né de là. Ce site aussi, que j’ai conçu et construit moi-même avec des outils d’IA.',
    ],
    traits: ['Apprendre en faisant', 'Communiquer entre les cultures', 'Résoudre des problèmes'],
    image: '/images/slope-point.jpg',
    imageAlt: 'Arbres façonnés par le vent à Slope Point, à l’extrême sud de l’Île du Sud néo-zélandaise.',
    imageCaption: 'Slope Point, Nouvelle-Zélande',
    beyondLabel: 'En dehors du travail',
    beyondIntro: 'Quelques choses qui occupent le reste de la semaine.',
    beyond: [
      { title: 'Voyage', text: 'De longues marches et des journées lentes ; ce qu’un lieu ne montre qu’à pied.' },
      { title: 'Escalade', text: 'Du bloc, surtout — des problèmes résolus par le corps avant que la tête ne suive.' },
      { title: 'Musique', text: 'Toujours allumée, rarement commentée. La bande-son de tout ce qui précède.' },
      { title: 'Photographie', text: 'Des images du quotidien : la lumière sur un mur, ce qui reste sur la table.' },
    ],
  },
  contact: {
    label: 'Contact',
    heading: 'Restons en contact.',
    email: 'emerson.the.k@gmail.com',
    github: 'https://github.com/emersoncaiye',
    githubLabel: 'GitHub',
    note: 'Ouverte aux opportunités, aux collaborations, ou à une conversation sur les objets, les villes et les langues.',
  },
  articles: {
    'the-road-i-walked-alone': {
      slug: 'the-road-i-walked-alone',
      title: 'La route parcourue seule',
      place: 'Tongariro Alpine Crossing, Nouvelle-Zélande',
      meta: 'Tongariro · 20 km · plus de 1 000 m de dénivelé',
      tags: ['Voyage', 'Solitude'],
      intro:
        'Vingt kilomètres à travers un plateau volcanique, parcourus seule — pas comme une déclaration, mais parce que c’était l’organisation qui rendait la marche possible cette semaine-là.',
      image: '/images/tongariro.jpg',
      imageAlt: 'Une crête volcanique du Tongariro Alpine Crossing sous un ciel couvert.',
      body: [
        'J’ai fait le Tongariro Alpine Crossing seule : vingt kilomètres, plus de mille mètres de montée et de descente. La solitude n’était pas une posture — c’était simplement l’organisation qui rendait la marche possible cette semaine-là.',
        'La première heure est bondée. Tout le monde part en même temps, dans la même direction, et pendant un moment on a l’impression d’être dans une file d’attente avec vue. Puis le sentier se redresse, les gens s’écartent, et au col il ne reste guère que son propre souffle.',
        'Ce dont je me souviens, ce n’est pas le sommet mais le milieu : cette longue section exposée où le chemin n’est qu’une ligne de poteaux et où le vent emporte le son. On cesse d’y négocier avec soi-même. On compte ses pas, on boit, on avance.',
        'À la descente, le sentier devient une pierre mobile et les genoux se plaignent. Le retour est le même paysage vu de l’autre côté — ce qui s’avère être une marche tout à fait différente.',
        {
          image: '/images/timaru-sunrise.jpg',
          alt: 'Lever de soleil sur la côte à Timaru, côte est de l’Île du Sud.',
          caption: 'Ailleurs dans l’Île du Sud : lever de soleil à Timaru, côte est.',
        },
        'J’y pense depuis — non comme une preuve de quoi que ce soit, mais comme une façon de mesurer la difficulté. Quand quelque chose paraît impossible, je me souviens qu’un long chemin reste un chemin, et que la seule technique est de continuer à poser un pied devant l’autre.',
      ],
    },
    'what-people-take-home': {
      slug: 'what-people-take-home',
      title: 'Ce que les gens choisissent d’emporter',
      place: 'Queenstown, Nouvelle-Zélande',
      meta: 'Un comptoir de souvenirs · une saison',
      tags: ['Culture', 'Observations'],
      intro:
        'Une saison derrière un comptoir de souvenirs à Queenstown : surtout de la répétition, et parfois une vue nette sur ce que les gens décident d’emporter.',
      body: [
        'Pendant un temps, j’ai travaillé dans une boutique de souvenirs à Queenstown. Le travail, c’est plier, étiqueter, répondre aux trois mêmes questions. La partie intéressante se passe de l’autre côté du comptoir.',
        'Les objets chers se vendaient rarement le plus vite. Les gens hésitaient devant le bel objet inutile, puis achetaient quelque chose d’assez petit pour tenir dans une valise : un aimant, un torchon, une carte postale d’un lieu qu’ils avaient déjà photographié.',
        'Des voyageurs d’une cinquantaine de pays sont passés. Les uns voulaient quelque chose qui ressemblât à la Nouvelle-Zélande ; les autres, quelque chose qui ressemblât au fait qu’ils y avaient été. Ce ne sont pas les mêmes achats.',
        'Ce que j’en ai retenu, c’est une méfiance envers le goût comme chose fixe. Il dépend du contexte. La même personne passera une heure à choisir un cadeau pour quelqu’un d’autre, et une fraction de ce temps pour elle-même. Ce que l’on garde dépend moins de l’objet que de l’histoire qu’on veut lui faire porter.',
        'J’aime toujours les boutiques pour cette raison. Pas pour acheter — pour regarder ce que les gens jugent digne du poids dans leur sac.',
      ],
    },
    'somewhere-unfamiliar': {
      slug: 'somewhere-unfamiliar',
      title: 'Quelque part d’inconnu',
      place: 'États-Unis',
      meta: 'Quatre États · six emplois · depuis déc. 2023',
      tags: ['Vie à l’étranger'],
      intro:
        'Les premières semaines dans un nouveau pays sont faites de paperasse. Des notes sur l’arrivée dans un lieu inconnu — et sur l’art lent de s’y installer.',
      body: [
        'Les premières semaines dans un nouveau pays sont faites de paperasse. Un compte en banque qui exige une adresse, une adresse qui exige un bail, un bail qui exige un emploi, un emploi qui exige un numéro de téléphone. On résout le problème dans le mauvais ordre, plusieurs fois, jusqu’à ce qu’un après-midi la chaîne fonctionne soudain.',
        'J’ai appris à acheter une voiture dans une langue que j’apprenais encore, et à lire un contrat avec un dictionnaire ouvert sur le siège voisin. Rien de tout cela ne paraissait courageux sur le moment. Cela ressemblait à de l’administration — celle qui prend une journée entière et se termine par un reçu qu’on a peur de perdre.',
        'Les moments dont je me souviens sont petits et peu photogéniques : un rayon de supermarché où j’ai enfin compris une blague, un chauffeur de bus qui m’a reconnue, la première nuit où j’ai dormi sans mettre de réveil.',
        'Vivre à l’étranger ne m’a pas rendue intrépide. Cela a rendu l’inconnu plus petit — une catégorie de choses qu’on peut aborder, questionner, et finir par maîtriser. La confiance qu’on voit chez les gens est souvent une simple liste plus longue de choses qui ont mal tourné et ont été réparées.',
        'Quatre États, six emplois, une voiture très usée. Je n’appellerais pas cela une aventure. C’était une vie, menée dans une deuxième langue, avec toute l’administration ordinaire incluse.',
      ],
    },
  },
  deltaCase: {
    eyebrow: 'Projets choisis / 01',
    title: 'Delta — Too Good to Stay Put.',
    standfirst:
      'Un concept de marque pour un commerce circulaire curaté : des objets avec un passé documenté, et une vie plus longue devant eux.',
    meta: [
      { label: 'Rôle', value: 'Concept, marque, PRD' },
      { label: 'Année', value: '2026' },
      { label: 'Nature', value: 'Concept indépendant' },
    ],
    intro: [
      'Delta est né d’une question sur la possession. La plupart des plateformes de seconde main optimisent le prix et le volume, réduisant l’objet à une fiche : pas d’histoire, pas de preuve d’état, aucune raison de le garder. Le concept part dans l’autre sens — moins d’objets, mieux choisis, décrits honnêtement, et conçus pour continuer de circuler.',
      'C’est un concept indépendant, pas une entreprise en activité. Le site est un prototype fonctionnel avec des données de démonstration ; aucun résultat commercial, aucun client, aucun chiffre ne sont revendiqués ici.',
    ],
    modelTitle: 'Taste, Hold, Transfer',
    model: [
      { key: 'Taste', text: 'La curation remplace la recherche — un point de vue sur ce qui vaut la peine d’être possédé.' },
      { key: 'Hold', text: 'La possession comme période d’usage, non comme destination finale.' },
      { key: 'Transfer', text: 'Les objets reviennent, se revendent ou se transmettent ; l’archive garde la trace du voyage.' },
    ],
    notesTitle: 'Notes de projet',
    notes: [
      {
        title: 'Origine & problème',
        text: 'Les marchés de seconde main sont efficaces sur le prix, faibles sur la confiance. L’état est difficile à vérifier, et l’histoire d’un objet disparaît dès qu’il devient une fiche. Delta fait de la documentation une partie du produit.',
      },
      {
        title: 'Positionnement de marque',
        text: '« Too good to stay put. » Des objets d’occasion choisis pour une vie plus longue — le goût plutôt que la débrouille, la retenue plutôt que l’urgence.',
      },
      {
        title: 'Modèle de commerce circulaire',
        text: 'Un modèle tripartite : curation esthétique, crédits de retour échelonnés, et une part fixe des bénéfices de revente versée à un fonds d’intérêt général.',
      },
      {
        title: 'Incitations au retour',
        text: 'Un mécanisme de crédits de retour échelonnés invite le propriétaire à remettre un objet en circulation plutôt qu’à le laisser inutilisé.',
      },
      {
        title: 'Volet d’impact social',
        text: 'Une part fixe des bénéfices de seconde vente est affectée à un fonds caritatif — le « delta » du nom : le petit incrément qui quitte la boucle.',
      },
      {
        title: 'Considérations commerciales',
        text: 'La consigne est le modèle d’exploitation proposé. Chaque fiche devrait comporter quatre types de documentation — image principale, détail matière, preuve d’état et scène d’usage — sans filtres pour simuler l’usure. Prix, authentification et règlement restent des questions ouvertes.',
      },
      {
        title: 'Prototype numérique',
        text: 'Un site concept bilingue avec les sections Shop, The Edit, Consign, Archive et Flow Guide, accompagné d’un cahier des charges complet. Rédigé avec des agents d’IA pour accélérer la dérivation du concept ; le projet est open-source sur GitHub.',
      },
      {
        title: 'Stratégie de médias sociaux',
        text: 'Plutôt que des catalogues par catégorie, un contenu organisé par scènes — des objets pour déménager, des singularités du quotidien, des choses qui méritent d’être gardées. Des fragments d’image, de musique et de texte construisent le monde de la marque avant le catalogue.',
      },
    ],
    prototypeTitle: 'Prototype',
    prototypeText: [
      'Le prototype est en ligne et explicitement présenté comme un concept ; les données produits sont des données de démonstration et les images, des images concept.',
    ],
    links: [
      { label: 'Site concept', value: 'that-program.pages.dev', href: 'https://that-program.pages.dev/' },
      { label: 'Source & PRD', value: 'github.com/emersoncaiye/Delta', href: 'https://github.com/emersoncaiye/Delta' },
    ],
    disclaimer: 'Travail conceptuel. Aucun résultat commercial, client ni chiffre d’affaires n’est revendiqué.',
    back: 'Retour aux projets',
    gallery: [
      {
        image: '/images/delta/delta-cover.jpg',
        alt: 'Couverture de Delta : une chaise usée portant un appareil photo d’occasion, des livres et une couverture, sous le titre « Too Good to Stay Put. »',
        caption: 'Couverture — images concept',
      },
      {
        image: '/images/delta/delta-shop.jpg',
        alt: 'Section boutique de Delta : quatre objets de démonstration choisis, avec numéros d’article, prix et intention d’archivage d’état.',
        caption: 'Shop — sélection curatée, données de démonstration',
      },
      {
        image: '/images/delta/delta-edit.jpg',
        alt: 'Section éditoriale de Delta : « You may not need more things. You need better choices », avec trois sélections organisées par scènes.',
        caption: 'The Edit — par scènes, non par catégories',
      },
      {
        image: '/images/delta/delta-flow.jpg',
        alt: 'Page Flow Guide de Delta expliquant le processus de consigne et de retour.',
        caption: 'Flow Guide — consigne & retours',
      },
    ],
  },
  footer: {
    rights: '© 2026 Emerson',
    colophon: 'Composé en Newsreader, Noto Serif SC & Inter · Astro · Cloudflare Pages',
  },
};

export default fr;
