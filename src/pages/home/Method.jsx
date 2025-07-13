import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaSearch, FaLightbulb, FaTools, FaRocket } from "react-icons/fa";

function Method() {
  const steps = [
    {
      titles: ["Découverte"],
      desc: "Échange initial pour comprendre tes besoins, objectifs et contraintes.",
      icon: <FaSearch />,
    },
    {
      titles: ["Stratégie"],
      desc: "Définition d’un plan d’action clair adapté à ton activité et ton audience.",
      icon: <FaLightbulb />,
    },
    {
      titles: ["Développement"],
      desc: "Développement du projet avec suivi régulier et ajustements en temps réel.",
      icon: <FaTools />,
    },
    {
      titles: ["Livraison"],
      desc: "Mise en ligne finale, optimisations et accompagnement post-lancement.",
      icon: <FaRocket />,
    },
  ];
  return (
    <section className="method">
      <div className="method__container">
      <h2 className="method__title">
          <Typewriter
            options={{
              strings: ["Nos méthodes"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>        <div className="method__timeline">
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
                {step.titles}
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
