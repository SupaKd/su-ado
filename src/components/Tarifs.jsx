import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { PRICING_DATA } from "../constants";

// Configuration des animations
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.15, duration: 0.6 },
  }),
};

// Sous-composant pour une carte tarif
function PricingCard({ plan, index }) {
  const {
    emoji,
    name,
    price,
    description,
    features,
    ideal,
    isHighlight,
    ctaText,
  } = plan;

  const cardClass = `pricing__card ${isHighlight ? "pricing__card--highlight" : ""}`;
  const ctaClass = `pricing__cta ${isHighlight ? "pricing__cta--primary" : ""}`;

  return (
    <motion.article
      className={cardClass}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h3>
        {emoji} {name} — <span>{price}</span>
      </h3>
      <p className="pricing__desc">{description}</p>

      <ul>
        {features.map((feature, featureIndex) => (
          <li key={featureIndex}>{feature}</li>
        ))}
      </ul>

      <p className="pricing__ideal">{ideal}</p>

      <a href="#devis" className={ctaClass}>
        {ctaText}
      </a>
    </motion.article>
  );
}

PricingCard.propTypes = {
  plan: PropTypes.shape({
    id: PropTypes.number.isRequired,
    emoji: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    ideal: PropTypes.string.isRequired,
    isHighlight: PropTypes.bool.isRequired,
    ctaText: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

// Composant principal
export default function Pricing() {
  return (
    <section className="pricing" aria-labelledby="pricing-title">
      <div className="pricing__container">
        <motion.h2
          id="pricing-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gradient"
        >
          Nos offres & tarifications
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="pricing__subtitle"
        >
          Des solutions adaptées à chaque projet — du site simple au sur-mesure
          complet.
        </motion.p>

        <div className="pricing__grid">
          {PRICING_DATA.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}