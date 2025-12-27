import { motion } from "framer-motion";

// Configuration des animations
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

// Liste des avantages
const BENEFITS = [
  "Prix imbattable : site vitrine dès 500€",
  "Livraison express sous 72h",
  "Design 100% personnalisé",
  "SEO & performances inclus",
  "Accompagnement humain, sans IA",
];

export default function Presentation() {
  return (
    <section className="presentation" aria-labelledby="presentation-title">
      <div className="presentation__grid">
        {/* Colonne gauche — Texte principal */}
        <div className="presentation__left">
          <motion.h1
            id="presentation-title"
            {...fadeInUp}
            transition={{ duration: 0.6 }}
          >
            Création de{" "}
            <span className="text-gradient">sites web modernes</span> et{" "}
            <span className="text-gradient">logos</span> dans le pays de Gex.
          </motion.h1>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Nous créons des <strong>sites professionnels</strong>, rapides,
            optimisés SEO et pensés pour convertir. Identité visuelle, UX
            soignée, performances élevées : tout est fait pour aider votre
            entreprise à se démarquer.
          </motion.p>

          <motion.a
            href="#devis"
            className="presentation__cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Demander un devis gratuit
          </motion.a>
        </div>

        {/* Colonne droite — Bloc premium */}
        <motion.div
          className="presentation__right"
          {...fadeInUp}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2>Un site pro, rapide et qui attire vos clients</h2>

          <p>
            Chez Supaco Digital, on supprime le superflu : pas de jargon
            inutile, pas de frais cachés, pas d'abonnements forcés. Juste un
            site <strong>propre, moderne, optimisé</strong> et livré rapidement.
          </p>

          <ul>
            {BENEFITS.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>

          <p>
            Votre site doit vous représenter avec force, même avec un petit
            budget. <strong>Et c'est exactement ce que nous faisons.</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}