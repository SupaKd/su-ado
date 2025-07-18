import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Question() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const faqs = [
    {
      question: "Combien de temps pour la création d'un site internet ?",
      answer: (
        <>
          Afin de répondre au mieux à vos besoins, nous aimons vous recevoir
          dans le but de cibler votre demande. <br />
          Suite à ce premier contact, nous vous envoyons un cahier des
          charges/devis contenant toutes les étapes requises, ce qui nous permet
          d'avancer dans la sérénité.
          <br />
          <br />
          Les étapes varient selon le projet…
          <a href="/contact">contactez-nous !</a>
        </>
      ),
    },
    {
      question: "Ça coûte combien un logo ?",
      answer:
        "Le prix dépend du style, du nombre de propositions, et de l’utilisation prévue. Nous proposons des solutions sur mesure, adaptées à vos besoins et à vos envies. Quel que soit votre budget, nous trouvons ensemble la meilleure formule. Contactez-nous pour en discuter sereinement et obtenir un devis personnalisé.",
    },
    {
      question: "Combien coûte un site ?",
      answer:
        "Un site vitrine ? E-commerce ? Landing page ? Chaque projet est unique ! Discutons de vos besoins pour établir un devis clair et transparent.",
    },
  ];

  return (
    <section className="faq">
      <div className="faq__intro">
        <h2>FAQ</h2>
        <p>
          Retrouve ici toutes les réponses à tes interrogations. Et même celles
          que tu ne t’imagines pas !
        </p>
      </div>

      <div className="faq__list">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`faq__item ${isOpen ? "open" : ""}`}
              onClick={() => toggle(index)}
            >
              <div className="faq__question">
                <span>{item.question}</span>
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className="faq__answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="faq__answer-inner">{item.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Question;
