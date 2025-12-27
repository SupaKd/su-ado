import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import PropTypes from "prop-types";
import { FAQ_DATA } from "../constants";

// Sous-composant pour un item FAQ
function FAQItem({ item, isOpen, onToggle }) {
  const { question, answer, hasLink } = item;

  return (
    <article className={`faq__item ${isOpen ? "open" : ""}`}>
      <button
        className="faq__question"
        onClick={onToggle}
        aria-expanded={isOpen}
        type="button"
      >
        <span>{question}</span>
        {isOpen ? <FaChevronUp aria-hidden="true" /> : <FaChevronDown aria-hidden="true" />}
      </button>

      <div
        className="faq__answer"
        style={{
          maxHeight: isOpen ? "1000px" : "0",
          opacity: isOpen ? 1 : 0,
        }}
        aria-hidden={!isOpen}
      >
        <div className="faq__answer-inner">
          {answer}
          {hasLink && (
            <>
              {" "}
              <Link to="/contact">Contactez-nous !</Link>
            </>
          )}
        </div>
      </div>
    </article>
  );
}

FAQItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    hasLink: PropTypes.bool,
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

// Composant principal
export default function Question() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = useCallback((index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <section className="faq" aria-labelledby="faq-title">
      <div className="faq__intro">
        <h2 id="faq-title" className="text-gradient">
          FAQ
        </h2>
        <p>
          Retrouve ici toutes les réponses à tes interrogations. Et même celles
          que tu ne t'imagines pas !
        </p>
      </div>

      <div className="faq__list" role="list">
        {FAQ_DATA.map((item, index) => (
          <FAQItem
            key={item.id}
            item={item}
            isOpen={openIndex === index}
            onToggle={() => toggleItem(index)}
          />
        ))}
      </div>
    </section>
  );
}