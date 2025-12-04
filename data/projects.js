export const projects = [
  {
    slug: 'four-mycellium',
    titre: 'Four Mycellium',
    resume:
      'Conception d’un four expérimental utilisant le mycélium comme matériau structurel et isolant à faible impact carbone.',
    image: '/images/projects/four-mycellium.jpg',
    annee: '12/2024-04/2025',
    type: 'Projet d’ingénierie & R&D',
    role: 'idéation, prototypage et tests',
    contexte:
      'Dans un contexte de recherche de matériaux alternatifs, ce projet explore l’usage du mycélium comme matériau isolant à faible impact pour des applications domestiques. Le projet ne s’inscrit pas dans une démarche entrepreunariale mais plutôt dans le fait de mettre en avant les propriétés exxtraordianaires de ce matériau ainsi que les nombreux usages qu’on peut en faire.',
    approche:
      'Étude bibliographique sur les propriétés thermiques du mycélium, définition des contraintes fonctionnelles du four, réalisation de plusieurs prototypes à base de copeaux de bois inoculés au mycellium de pleurote. Ce substrat est mélangé à de l’eau puis à de l’amidon avant d’être moulé en demi-cercle, puis laissé à "pousser" pendant 2 semaines avant d’être collé avec un autre demi-cercle, puis découpé à l’avant et l’arrière de la boule pour y insérer un module chauffant (resistance 2800W+ventilateur 200W). après avoir fait tourner le four pendant plusieurs heures pour le faire sécher et tuer le mycellium, nous avons pu tester le four en conditions réelles en réchauffant une pizza à l’intérieur.',
    resultats:
      'Les résultats sont concluants, le prototype a montré un très bon comportement isolant, une bonne stabilité et a permis d’identifier des pistes d’optimisation sur la géométrie, la durabilité et l’intégration d’autres biomatériaux.',
    images: [
      '/images/projects/four-mycellium.jpg',
      '/images/projects/four-mycellium-detail1.jpg',
      '/images/projects/four-mycellium-detail2.jpg',
    ],
  },
  {
    slug: 'bioplastique',
    titre: 'Bioplastique (à venir...)',
    resume:
      'Exploration de formulations de bioplastiques, en vue d’applications packaging ou prototypage.',
    image: '/images/projects/bioplastique.jpg',
    annee: '11/2025-...',
    type: 'Projet de laboratoire',
    role: 'Formulation & caractérisation',
    contexte:
      'Face aux limites des plastiques pétrosourcés, ce projet vise à expérimenter des recettes de bioplastiques maison pour en comprendre les propriétés mécaniques et la faisabilité d’usage. Le but serait d’explorer une nouvelle manière de créer les bioplastiques, en superposant différentes couches pour maximiser les propriétés du bioplastiques. Cette superposition pourrait également permettre de nouvelles applications selon les composants(réaction à la lumière, au PH etc...)',
    approche:
      'à venir...',
    resultats:
      'à venir...',
    images: [
      '/images/projects/bioplastique.jpg',
      '/images/projects/bioplastique-detail1.jpg',
      '/images/projects/bioplastique-detail2.jpg',
    ],
  },
  {
    slug: 'kickstarter',
    titre: 'Kickstarter',
    resume:
      'Projet d’entrée dans l’entreprenariat et l’artisanat: Conception d’un étui de cartes en cuir et vente via Kickstarter.',
    image: '/images/projects/kickstarter.jpg',
    annee: '2025',
    type: 'Innovation & prototypage',
    role: 'Idéation, storytelling et prototypage',
    contexte:
      'Le Card Master Case est un étui en cuir pensé pour ranger et protéger un jeu de cartes tout en y ajoutant une touche d’innovation.Son originalité ?Un QR code embossé directement dans le cuir qui renvoie à un site web regroupant des dizaines de jeux de cartes et leurs règles. L’idée est née lors d’un moment de détente entre amis : nous voulions simplement jouer… mais nous avons passé plus de temps à débattre des règles qu’à faire une partie. De là est venue l’envie de créer un objet simple, élégant, qui redonne au jeu toute sa place : un accessoire utile, fiable, et qui limite les disputes autour des règles. Le projet a été développé dans le cadre de notre formation en Creative Technology, une filière d’ingénierie mêlant innovation, design, prototypage et technologies émergentes',
    approche:
      'Avant d’arriver au modèle final, nous avons conçu et testé plusieurs prototypes : expérimentations de formes arrondies et d’angles doux tests de différents cuirs (texture, toucher, épaisseur, tenue) réflexion sur la lisibilité et la durabilité du QR code optimisation du coût de production pour rester sous la barre des 50$ Notre objectif : créer un produit simple, robuste et élégant, fidèle aux principes du Quickstarter (projets rapides, budget limité, fabrication raisonnée). L’ensemble de la conception, du prototypage et de la fabrication a été réalisé en France, à Courbevoie et Suresnes.',
    resultats:
      'Le Card Master Case est devenu un objet : compact, facile à transporter résistant, grâce à un cuir épais et durable pratique, avec un QR code discret mais fonctionnel modulaire, avec plusieurs options de personnalisation Nous avons également conçu un site web compagnon, accessible via le QR code, regroupant les règles de nombreux jeux de cartes pour faciliter l’accès à l’information et accompagner les joueurs.',
    images: [
      '/images/projects/kickstarter.jpg',
      '/images/projects/kickstarter-detail1.jpg',
      '/images/projects/kickstarter-detail2.jpg',
    ],
  },
];
export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
