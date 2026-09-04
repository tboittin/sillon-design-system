import type { IconName } from '../lib/icons'

/* ============================================================================
   Contenu éditorial Sillon — textes d'UI listés mot pour mot.
   Les projets sont des études de cas fictives mais réalistes.
   ========================================================================== */

export const siteName = 'Sillon'
export const siteTagline = 'Design éditorial & data pour l’agronomie.'

export const navLinks = [
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projets', href: '#projets' },
  { label: 'Compétences', href: '#competences' },
] as const

export const hero = {
  eyebrow: 'Design éditorial & data — agronomie',
  title: 'L’agronomie a besoin de meilleurs outils.',
  titleAccent: 'meilleurs',
  lead: 'Ingénieur agronome et développeur web, je conçois des outils de terrain qui transforment des données complexes en décisions claires — du protocole d’essai au tableau de bord.',
  ctaPrimary: 'Voir les projets',
  ctaSecondary: 'Parlons de votre projet',
  figureCaption: 'Figure 01 — Parcelle d’essai variétal, plateau de Saclay, septembre 2025.',
  metrics: [
    { value: '30%', label: 'de temps de saisie économisé en moyenne' },
    { value: '12', label: 'structures agricoles accompagnées' },
    { value: '8 ans', label: 'entre le champ et le code' },
  ] as const,
}

export const expertise = {
  eyebrow: 'La double expertise',
  title: 'Deux regards, une même rigueur.',
  lead: 'Comprendre le vivant pour mieux le mesurer ; mesurer pour mieux décider. Chaque projet est mené de la parcelle au déploiement.',
  left: {
    title: 'Ingénieur agronome',
    icon: 'plant' as IconName,
    description: 'Une approche terrain, formée à la conduite des essais et à la lecture des phénomènes agronomiques.',
    items: [
      'Conduite d’essais & protocoles statistiques',
      'Phytotechnie et itinéraires culturaux',
      'Analyse de sols et de données de capteurs',
      'Médiation entre chercheurs et agriculteurs',
    ],
  },
  right: {
    title: 'Développeur web',
    icon: 'code' as IconName,
    description: 'Des produits web sobres et lisibles, pensés pour des usages de terrain exigeants.',
    items: [
      'Applications React / TypeScript',
      'Visualisation de données (D3, cartographie)',
      'API et automatisation de flux de données',
      'Design system & accessibilité',
    ],
  },
  connectorNote: 'Deux expertises reliées par un même fil : rendre l’information agronomique actionnable.',
}

export interface Project {
  slug: string
  title: string
  client: string
  year: string
  duration: string
  category: string
  description: string
  metric: { value: string; label: string }
  figure: 'field' | 'plots' | 'macro' | 'data'
  figureCaption: string
  contexte: string
  objectifs: string[]
  solutions: string[]
  outils: string[]
  resultats: { label: string; value: string; detail: string }[]
  chart: { label: string; value: number }[]
}

export const projects: Project[] = [
  {
    slug: 'observatoire-ferme',
    title: 'Observatoire de la Ferme',
    client: 'Coopérative Val de Loire',
    year: '2025',
    duration: '6 mois',
    category: 'OAD — suivi d’essais',
    description:
      'Application de saisie et de restitution pour le suivi des essais variétaux de blé sur 14 parcelles.',
    metric: { value: '−30%', label: 'de temps de saisie' },
    figure: 'field',
    figureCaption: 'Figure 02 — Blé au stade épiaison, parcelle suivie via l’observatoire.',
    contexte:
      'Les techniciens de la coopérative saisissaient les notations d’essais sur papier, puis ressaisissaient les données dans un tableur. Les erreurs de retranscription et le délai de disponibilité des données pénalisaient les décisions de récolte.',
    objectifs: [
      'Réduire le temps de saisie et les erreurs de retranscription',
      'Centraliser les notations terrain dans un référentiel unique',
      'Restituer les résultats par parcelle et par traitement en temps réel',
    ],
    solutions: [
      'Formulaire de saisie mobile-first optimisé pour le terrain (clavier, offline)',
      'Contrôle de cohérence agronomique à la saisie (stades, doses)',
      'Exports automatiques vers le tableur de la coopérative',
    ],
    outils: ['React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'MapLibre'],
    resultats: [
      { label: 'Temps de saisie', value: '−30%', detail: 'par notation, à protocole identique' },
      { label: 'Erreurs de saisie', value: '−22%', detail: 'sur les campagnes comparées' },
      { label: 'Délai de restitution', value: 'J+1', detail: 'au lieu de 10 jours ouvrés' },
    ],
    chart: [
      { label: '2023', value: 42 },
      { label: '2024', value: 36 },
      { label: '2025', value: 28 },
    ],
  },
  {
    slug: 'irrigation-pilotee',
    title: 'Irrigation pilotée par le sol',
    client: 'Chambre d’agriculture — Pays de la Loire',
    year: '2024',
    duration: '9 mois',
    category: 'Tableau de bord — capteurs',
    description:
      'Tableau de bord agrégeant les sondes tensionétriques et le modèle de bilan hydrique pour décider de l’irrigation.',
    metric: { value: '−18%', label: 'de consommation d’eau' },
    figure: 'plots',
    figureCaption: 'Figure 03 — Vue aérienne des mailles d’irrigation instrumentées.',
    contexte:
      'Les conseillers irrigation suivaient les sondes site par site, sans vue d’ensemble. La décision d’irriguer revenait à chaque agriculteur, sans partage des données entre parcelles proches.',
    objectifs: [
      'Fédérer les données de 40 sondes dans un seul tableau de bord',
      'Traduire les tensions hydriques en conseil d’irrigation lisible',
      'Alerter en cas de dépassement de seuil',
    ],
    solutions: [
      'Ingestion des données capteurs via API (MQTT → API REST)',
      'Modèle de bilan hydrique J+3 intégré au tableau de bord',
      'Alertes par mail et notification quand le seuil est franchi',
    ],
    outils: ['React', 'D3.js', 'Python', 'FastAPI', 'InfluxDB'],
    resultats: [
      { label: 'Consommation d’eau', value: '−18%', detail: 'sur les parcelles pilotes' },
      { label: 'Sondes suivies', value: '40', detail: 'en un seul tableau de bord' },
      { label: 'Adoption', value: '87%', detail: 'des irrigants après une campagne' },
    ],
    chart: [
      { label: '2022', value: 100 },
      { label: '2023', value: 94 },
      { label: '2024', value: 82 },
    ],
  },
  {
    slug: 'carto-sols',
    title: 'Carto Sols',
    client: 'Réseau des laboratoires d’analyse',
    year: '2025',
    duration: '4 mois',
    category: 'Cartographie — analyse de sols',
    description:
      'Application de cartographie des analyses de sols, du prélèvement au rendu cartographique pour l’agriculteur.',
    metric: { value: '+40%', label: 'd’échantillons traités' },
    figure: 'data',
    figureCaption: 'Figure 04 — Couches d’analyse (pH, matière organique, texture) superposées.',
    contexte:
      'Les laboratoires recevaient les analyses dans des formats hétérogènes et devaient produire des cartes « à la main » dans un SIG. Chaque échantillon exigeait plusieurs manipulations manuelles.',
    objectifs: [
      'Uniformiser l’ingestion des résultats d’analyse (25 formats reçus)',
      'Générer automatiquement des cartes par campagne et par parcelle',
      'Donner à l’agriculteur un document lisible, imprimable et partageable',
    ],
    solutions: [
      'Module d’import et de normalisation des fichiers laboratoire',
      'Rendu cartographique vectoriel avec légende documentaire automatique',
      'Génération d’un carnet de bord PDF par parcelle',
    ],
    outils: ['React', 'TypeScript', 'MapLibre', 'Python', 'pdfme'],
    resultats: [
      { label: 'Échantillons traités', value: '+40%', detail: 'à effectif constant' },
      { label: 'Formats normalisés', value: '25', detail: 'de fichiers laboratoire' },
      { label: 'Temps de carte', value: '3 min', detail: 'contre une demi-journée' },
    ],
    chart: [
      { label: 'T1', value: 210 },
      { label: 'T2', value: 260 },
      { label: 'T3', value: 305 },
    ],
  },
  {
    slug: 'reseau-essais',
    title: 'Réseau d’essais partagé',
    client: 'Groupement d’intérêt scientifique',
    year: '2023',
    duration: '12 mois',
    category: 'Plateforme — données mutualisées',
    description:
      'Plateforme de partage et d’analyse croisée des essais menés par 12 structures de recherche appliquée.',
    metric: { value: '12', label: 'structures connectées' },
    figure: 'macro',
    figureCaption: 'Figure 05 — Détail d’une placette de comptage au stade tallage.',
    contexte:
      'Chaque structure menait ses essais de son côté, avec ses propres référentiels et tableurs. Les comparaisons inter-annuelles et inter-site étaient impossibles sans un long travail de rapprochement.',
    objectifs: [
      'Harmoniser les référentiels (traitements, stades, unités)',
      'Permettre l’analyse croisée des essais entre structures',
      'Documenter chaque donnée (responsable, protocole, date)',
    ],
    solutions: [
      'Data model commun et dictionnaire de données versionné',
      'API d’import avec validation des référentiels',
      'Cartographie des essais et vue comparée des itinéraires',
    ],
    outils: ['React', 'TypeScript', 'PostgreSQL', 'Node.js', 'MapLibre'],
    resultats: [
      { label: 'Structures connectées', value: '12', detail: 'au second semestre' },
      { label: 'Essais partagés', value: '+120', detail: 'd’essais dans le référentiel' },
      { label: 'Temps de rapprochement', value: '×4', detail: 'plus rapide (semaines → jours)' },
    ],
    chart: [
      { label: '2022', value: 18 },
      { label: '2023', value: 54 },
      { label: '2024', value: 120 },
    ],
  },
]

export const skills = [
  {
    group: 'Agronomie',
    icon: 'plant' as IconName,
    items: [
      { name: 'Phytotechnie & itinéraires culturaux', level: 90 },
      { name: 'Expérimentation & analyse statistique', level: 85 },
      { name: 'Analyse de sols & fertilité', level: 80 },
      { name: 'Modélisation agronomique', level: 70 },
    ],
  },
  {
    group: 'Développement',
    icon: 'code' as IconName,
    items: [
      { name: 'React / TypeScript', level: 92 },
      { name: 'Visualisation de données', level: 82 },
      { name: 'API & automatisation (Python)', level: 78 },
      { name: 'Géomatique & SIG web', level: 72 },
    ],
  },
]

export const contact = {
  eyebrow: 'Contact',
  title: 'Un projet à cultiver ensemble ?',
  lead: 'Décrivez votre besoin — essai à instrumenter, données à valoriser, outil à concevoir. Réponse sous 48 h ouvrées.',
  email: 'contact@sillon-agri.fr',
  location: 'Nantes & télétravail — interventions sur site possible',
  availability: 'Disponible pour de nouvelles missions — Q3 2026',
  form: {
    nameLabel: 'Nom',
    namePlaceholder: 'Votre nom',
    emailLabel: 'Email',
    emailPlaceholder: 'vous@exemple.fr',
    subjectLabel: 'Votre besoin',
    subjectPlaceholder: 'Ex. : tableau de bord pour nos sondes irrigation…',
    messageLabel: 'Message',
    messagePlaceholder: 'Parlez-moi du contexte, des données disponibles, des délais…',
    submit: 'Envoyer le message',
    successTitle: 'Message envoyé !',
    successBody: 'Merci — je reviens vers vous sous 48 h ouvrées.',
  },
}

export const footer = {
  tagline: 'Design éditorial & data pour l’agronomie. Du protocole d’essai au déploiement, un seul fil conducteur : des outils que le terrain adopte.',
  navTitle: 'Navigation',
  contactTitle: 'Contact',
  bottom: '© 2026 Sillon. Fait avec soin, quelque part entre le champ et le code.',
  legal: ['Mentions légales', 'Confidentialité'],
  backToTop: 'Haut de page',
}