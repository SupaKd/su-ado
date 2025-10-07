import { motion } from "framer-motion";

export default function Presentation() {
  return (
    <section className="presentation">
      <div className="presentation__content">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Création de sites web sur mesure à Saint-Genis-Pouilly.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Nous concevons des sites web modernes, rapides et optimisés pour le référencement. Des logos et identité visuelle distinctives, des interfaces intuitives et des fonctionnalités performantes.
          Notre objectif est simple&nbsp;: propulser votre entreprise locale sur le web grâce à
          une expérience utilisateur fluide et un design inspiré des plus grandes marques.
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
    </section>
  );
}
