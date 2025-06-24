import { useState } from "react";

function Question() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggle = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
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
          Les étapes varient selon le projet… alors,{" "}
          <a href="/contact">contactez-nous !</a>
        </>
      ),
    },
    {
      question: "Ça coûte combien un logo ?",
      answer:
        "Le prix dépend du style, du nombre de propositions, et de l’utilisation prévue. On s’adapte à votre budget : parlons-en !",
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
        <span className="faq__label">Questions posées fréquemment</span>
        <h2>FAQ</h2>
        <p>
          Retrouves ici toutes les réponses à tes interrogations, sinon
          contacte-nous. Et même celles que tu ne pourrais pas t’imaginer !
        </p>
      </div>

      <div className="faq__list">
        {faqs.map((item, index) => {
          const isOpen = openIndexes.includes(index);
          return (
            <div
              className={`faq__item ${isOpen ? "open" : ""}`}
              key={index}
              onClick={() => toggle(index)}
            >
              <div className="faq__question">
                {item.question}
                <span className="faq__icon">{isOpen ? "˄" : "˅"}</span>
              </div>

              <div
                className="faq__answer-wrapper"
                style={{
                  maxHeight: isOpen ? "500px" : "0px",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div className="faq__answer">{item.answer}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Question;
