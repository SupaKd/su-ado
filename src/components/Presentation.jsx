import { motion } from "framer-motion";

export default function Presentation() {
  return (
    <section className="presentation">
      <div className="presentation__grid">

        {/* COLONNE GAUCHE — Texte principal */}
        <div className="presentation__left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Création de <span className="text-gradient">sites web modernes</span> et <span className="text-gradient">logos </span> dans le pays de Gex.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Nous créons des <strong>sites professionnels</strong>, rapides, optimisés SEO
            et pensés pour convertir. Identité visuelle, UX soignée, performances élevées :
            tout est fait pour aider votre entreprise à se démarquer.
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

        {/* COLONNE DROITE — Nouveau bloc premium */}
        <motion.div 
          className="presentation__right"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2>Un site pro, rapide et qui attire vos clients</h2>

          <p>
            Chez Supaco Digital, on supprime le superflu : pas de jargon inutile, 
            pas de frais cachés, pas d’abonnements forcés.  
            Juste un site <strong>propre, moderne, optimisé</strong> et livré rapidement.
          </p>

          <ul>
            <li>Prix imbattable : site vitrine dès 500€</li>
            <li>Livraison express sous 72h</li>
            <li>Design 100% personnalisé</li>
            <li>SEO & performances inclus</li>
            <li>Accompagnement humain, sans IA</li>
          </ul>

          <p>
            Votre site doit vous représenter avec force, même avec un petit budget.  
            <strong> Et c’est exactement ce que nous faisons.</strong>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
