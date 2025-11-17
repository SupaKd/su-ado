import { motion } from "framer-motion";

export default function Pricing() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  };

  return (
    <section className="pricing">
      <div className="pricing__container">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gradient"
        >
          Nos offres & tarifications
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="pricing__subtitle"
        >
          Des solutions adaptées à chaque projet — du site simple au sur-mesure complet.
        </motion.p>

        <div className="pricing__grid">

          {/* 🔹 OFFRE STARTER */}
          <motion.div
            className="pricing__card"
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
          >
            <h3>💎 Offre Starter — <span>200€</span></h3>
            <p className="pricing__desc">
              Parfaite pour artisans, indépendants et micro-entreprises.
            </p>

            <ul>
              <li>Site 1 page (scroll fluide)</li>
              <li>Design professionnel et sur-mesure</li>
              <li>Optimisation mobile + vitesse</li>
              <li>Formulaire de contact connecté</li>
              <li>SEO technique (structure, performances, titres optimisés)</li>
              <li>Mise en ligne + configuration du domaine</li>
              <li>Livraison rapide : 72h</li>
            </ul>

            <p className="pricing__ideal">
              Idéal pour : photographe, coiffeur, artisan, coach, freelance.
            </p>

            <a href="#devis" className="pricing__cta">Commencer</a>
          </motion.div>

          {/* 🔹 OFFRE BUSINESS */}
          <motion.div
            className="pricing__card pricing__card--highlight"
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
          >
            <h3>🚀 Offre Business — <span>500€</span></h3>
            <p className="pricing__desc">
              Pour plus de contenu, plus de crédibilité et plus de visibilité.
            </p>

            <ul>
              <li>Jusqu’à 5 pages (Accueil, Services, À propos, Contact, +1)</li>
              <li>Blog / actualités intégré</li>
              <li>SEO avancé (meta, balisage, structure Google)</li>
              <li>Animations modernes & micro-interactions</li>
              <li>Intégration réseaux sociaux</li>
              <li>Sécurité renforcée + sauvegardes</li>
              <li>Analytics configuré (Google Analytics / Matomo)</li>
              <li>Assistance 7 jours après livraison</li>
            </ul>

            <p className="pricing__ideal">
              Idéal pour : PME, commerces, bien-être, restaurants, associations.
            </p>

            <a href="#devis" className="pricing__cta pricing__cta--primary">
              Je choisis cette offre
            </a>
          </motion.div>

          {/* 🔹 OFFRE SUR-MESURE */}
          <motion.div
            className="pricing__card"
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
          >
            <h3>🎨 Offre Sur-Mesure — <span>Sur devis</span></h3>
            <p className="pricing__desc">
              Pour les projets nécessitant un travail 100% unique.
            </p>

            <ul>
              <li>Branding complet</li>
              <li>Landing page premium</li>
              <li>Site événementiel</li>
              <li>Charte graphique</li>
              <li>Système de réservation</li>
              <li>Catalogue produits</li>
              <li>Design + structure + SEO + contenu</li>
            </ul>

            <p className="pricing__ideal">
              Pour les projets ambitieux cherchant une identité forte.
            </p>

            <a href="#devis" className="pricing__cta">Demander un devis</a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
