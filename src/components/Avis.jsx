import PropTypes from "prop-types";
import { AVIS_DATA } from "../constants";

// Sous-composant pour une carte d'avis
function AvisCard({ nom, commentaire, note, ville }) {
  const stars = "★".repeat(note) + "☆".repeat(5 - note);

  return (
    <article className="avis__card">
      <div className="avis__google">
        <img src="/google.png" alt="Avis Google" loading="lazy" />
      </div>
      <p className="avis__nom">– {nom}</p>
      <div className="avis__stars" aria-label={`Note : ${note} sur 5`}>
        {stars}
      </div>
      <p className="avis__commentaire">"{commentaire}"</p>
      <p className="avis_ville">{ville}</p>
    </article>
  );
}

AvisCard.propTypes = {
  nom: PropTypes.string.isRequired,
  commentaire: PropTypes.string.isRequired,
  note: PropTypes.number.isRequired,
  ville: PropTypes.string.isRequired,
};

// Composant principal
export default function Avis() {
  return (
    <section className="avis" aria-labelledby="avis-title">
      <div className="avis__container">
        <h2 id="avis-title" className="text-gradient">
          Ce que disent nos clients
        </h2>

        <div className="avis__list">
          {AVIS_DATA.map((avis) => (
            <AvisCard key={avis.id} {...avis} />
          ))}
        </div>
      </div>
    </section>
  );
}