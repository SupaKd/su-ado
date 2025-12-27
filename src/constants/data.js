export const AVIS_DATA = [
    {
      id: 1,
      nom: "Jérémy",
      commentaire: "Excellente expérience ! L'équipe a compris mes besoins dès le départ et a livré un site rapide, moderne et bien référencé. Communication fluide du début à la fin.",
      note: 5,
      ville: "Saint-Brieuc",
    },
    {
      id: 2,
      nom: "Khaled",
      commentaire: "Très satisfait du design et du suivi technique. L'agence m'a aussi aidée à améliorer mon SEO et mes performances. Excellent rapport qualité-prix.",
      ville: "Oyonnax",
      note: 5,
    },
    {
      id: 3,
      nom: "Béatrice",
      commentaire: "Très professionnel, rapide et rigoureux. Après un première échange, il a tout de suite compris notre projet et a su nous accompagner sur la création de notre boutique en ligne avec beaucoup de créativité !",
      ville: "Saint-Genis-Pouilly",
      note: 5,
    },
  ];
  
  export const PROJECTS_DATA = [
    {
      id: 1,
      title: "Site de commande pour un restaurateur.",
      desc: "Un site de commande pour un restaurateur, offrant une visibilité accrue et des commandes supplémentaires.",
      logo: "/logosabai.png",
      imgHover: "/logosabai.png",
      link: "https://sabai-thoiry.com",
    },
    {
      id: 2,
      title: "Site de réservation pour un coiffeur.",
      desc: "Un site vitrine pour un coiffeur, offrant une visibilité accrue sur son travail et ses services.",
      logo: "/logohair.png",
      imgHover: "/coif.png",
      link: "https://barber-ten-bay.vercel.app/",
    },
    {
      id: 3,
      title: "Site vitrine pour un serrurier, électricien",
      desc: "Un site vitrine en ligne pour un serrurier, offrant une visibilité accrue sur son travail et ses services.",
      logo: "/depanne.png",
      imgHover: "/depanne.webp",
      link: "https://depannage-gemeaux.fr/",
    },
    {
      id: 4,
      title: "Plateforme pour association solidaire",
      desc: "Un site institutionnel clair et immersif, présentant l'action d'une association aidant les jeunes.",
      logo: "/logomobile.png",
      imgHover: "/yoje.webp",
      link: "https://www.yojeme.fr/",
    },
    {
      id: 5,
      title: "Site e-commerce pour un reseller.",
      desc: "Un site vitrine pour un reseller de boisson énergisante, offrant une visibilité accrue sur ses produits.",
      logo: "/redo.png",
      imgHover: "/redseller.webp",
      link: "https://konbini-smoky.vercel.app/",
    },
    {
      id: 6,
      title: "Site vitrine pour un fast-food.",
      desc: "Un site vitrine pour un fast-food de French Tacos, offrant une visibilité accrue sur ses produits.",
      logo: "/belli.logo.webp",
      imgHover: "/belli.webp",
      link: "https://bellifood.com/",
    },
  ];
  
  export const FAQ_DATA = [
    {
      id: 1,
      question: "Combien de temps pour la création d'un site internet ?",
      answer: `Afin de répondre au mieux à vos besoins, nous aimons vous recevoir dans le but de cibler votre demande. Suite à ce premier contact, nous vous envoyons un cahier des charges/devis contenant toutes les étapes requises, ce qui nous permet d'avancer dans la sérénité. Les étapes varient selon le projet…`,
      hasLink: true,
    },
    {
      id: 2,
      question: "Ça coûte combien un logo ?",
      answer: "Le prix dépend du style, du nombre de propositions, et de l'utilisation prévue. Nous proposons des solutions sur mesure, adaptées à vos besoins et à vos envies. Quel que soit votre budget, nous trouvons ensemble la meilleure formule. Contactez-nous pour en discuter sereinement et obtenir un devis personnalisé.",
      hasLink: false,
    },
    {
      id: 3,
      question: "Combien coûte un site ?",
      answer: "Un site vitrine ? E-commerce ? Landing page ? Chaque projet est unique ! Discutons de vos besoins pour établir un devis clair et transparent.",
      hasLink: false,
    },
  ];
  
  export const METHOD_CARDS = [
    {
      id: 1,
      title: "Découverte",
      description: "Chaque projet commence par une rencontre. Nous plongeons dans votre univers, écoutons votre histoire et décryptons vos besoins. Cette immersion nous permet de cerner vos ambitions et de poser des fondations solides pour une collaboration inspirée et sur-mesure.",
    },
    {
      id: 2,
      title: "Stratégie",
      description: "Nous transformons vos idées en une vision claire et motivante. Grâce à une feuille de route précise, nous traçons le chemin vers vos objectifs, en alliant créativité, innovation et pragmatisme. Notre ambition : bâtir une stratégie qui vous distingue et qui inspire confiance.",
    },
    {
      id: 3,
      title: "Développement",
      description: "C'est ici que la magie opère : nous donnons vie à vos idées. Entre design élégant et technologie performante, nous créons des expériences mémorables, fluides et centrées sur l'utilisateur. Chaque détail compte pour offrir une solution qui séduit, convainc et évolue avec vous.",
    },
    {
      id: 4,
      title: "Livraison",
      description: "Lancement, célébration, mais surtout accompagnement. Nous mettons en ligne votre projet avec soin et veillons à ce qu'il brille dès le premier jour. Et parce qu'un succès se construit dans le temps, nous restons à vos côtés pour optimiser, faire grandir et pérenniser votre réussite.",
    },
  ];
  
  export const PRICING_DATA = [
    {
      id: 1,
      emoji: "💎",
      name: "Offre Starter",
      price: "500€",
      description: "Parfaite pour artisans, indépendants et micro-entreprises.",
      features: [
        "Site 1 page (scroll fluide)",
        "Design professionnel et sur-mesure",
        "Optimisation mobile + vitesse",
        "Formulaire de contact connecté",
        "SEO technique (structure, performances, titres optimisés)",
        "Mise en ligne + configuration du domaine",
        "Livraison rapide : 72h",
      ],
      ideal: "Idéal pour : photographe, coiffeur, artisan, coach, freelance.",
      isHighlight: false,
      ctaText: "Commencer",
    },
    {
      id: 2,
      emoji: "🚀",
      name: "Offre Business",
      price: "1000€",
      description: "Pour plus de contenu, plus de crédibilité et plus de visibilité.",
      features: [
        "Jusqu'à 5 pages (Accueil, Services, À propos, Contact, +1)",
        "Blog / actualités intégré",
        "SEO avancé (meta, balisage, structure Google)",
        "Animations modernes & micro-interactions",
        "Intégration réseaux sociaux",
        "Sécurité renforcée + sauvegardes",
        "Analytics configuré (Google Analytics / Matomo)",
        "Assistance 7 jours après livraison",
      ],
      ideal: "Idéal pour : PME, commerces, bien-être, restaurants, associations.",
      isHighlight: true,
      ctaText: "Je choisis cette offre",
    },
    {
      id: 3,
      emoji: "🎨",
      name: "Offre Sur-Mesure",
      price: "Sur devis",
      description: "Pour les projets nécessitant un travail 100% unique.",
      features: [
        "Branding complet",
        "Landing page premium",
        "Site événementiel",
        "Charte graphique",
        "Système de réservation",
        "Catalogue produits",
        "Design + structure + SEO + contenu",
      ],
      ideal: "Pour les projets ambitieux cherchant une identité forte.",
      isHighlight: false,
      ctaText: "Demander un devis",
    },
  ];
  
  export const NAV_LINKS = [
    { path: "/", label: "Accueil" },
    { path: "/contact", label: "Contact" },
    { path: "/projet", label: "Projet" },
  ];
  
  export const SOCIAL_LINKS = {
    whatsapp: "https://wa.me/33783052412",
    instagram: "https://www.instagram.com/supa_c0/",
  };
  
  export const CONTACT_INFO = {
    email: "contact@supaco-digital.com",
    phone: "+33 7 83 05 24 12",
    location: "Saint-Genis-Pouilly, France",
  };