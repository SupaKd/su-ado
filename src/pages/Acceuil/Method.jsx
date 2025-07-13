// src/components/Method.jsx
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaSearch, FaLightbulb, FaTools, FaRocket } from "react-icons/fa";

const steps = [
  {
    titles: ["Découverte", "Analyse", "Brief"],
    desc: "Échange initial pour comprendre tes besoins, objectifs et contraintes.",
    icon: <FaSearch />,
  },
  {
    titles: ["Stratégie", "Plan d'action", "Ciblage"],
    desc: "Définition d’un plan d’action clair adapté à ton activité et ton audience.",
    icon: <FaLightbulb />,
  },
  {
    titles: ["Construction", "Développement", "Suivi"],
    desc: "Développement du projet avec suivi régulier et ajustements en temps réel.",
    icon: <FaTools />,
  },
  {
    titles: ["Livraison", "Optimisation", "Support"],
    desc: "Mise en ligne finale, optimisations et accompagnement post-lancement.",
    icon: <FaRocket />,
  },
];
function Method() {
  return (
    <section className="method">
      <div className="method__container">
        <h2 className="method__title">Nos méthodes</h2>
        <div className="method__timeline">
          {steps.map((step, index) => (
            <motion.div
              className="method__card"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <div className="method__icon">{step.icon}</div>

              <h3 className="method__card-title">
                <Typewriter
                  options={{
                    strings: step.titles,
                    autoStart: true,
                    loop: true,
                    delay: 70,
                    deleteSpeed: 40,
                    pauseFor: 1500,
                  }}
                />
              </h3>

              <p className="method__card-desc">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Method;
