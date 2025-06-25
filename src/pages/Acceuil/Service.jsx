import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Service() {
  return (
    <>
      <section className="services">
        <h2>Nos services</h2>
        <div className="services__slider">
          <div className="services__track">
            <div className="service-card">
              <FontAwesomeIcon icon={faStar} className="icon" />
              <h3>Site vitrine</h3>
              <p>
                Nous concevons des sites vitrines modernes, élégants et adaptés à
                tous les supports. Idéal pour présenter votre activité, vos
                services ou votre savoir-faire, le site vitrine renforce votre
                image professionnelle et améliore votre visibilité en ligne.
              </p>
            </div>

            <div className="service-card">
              <FontAwesomeIcon icon={faStar} className="icon" />
              <h3>Site e-commerce</h3>
              <p>
                Nous créons des boutiques en ligne performantes, sécurisées et
                faciles à gérer. Que vous souhaitiez vendre quelques produits ou
                lancer un catalogue complet, je vous accompagne dans la création
                d’un site e-commerce sur mesure, optimisé pour convertir vos
                visiteurs en clients.
              </p>
            </div>
            <div className="service-card">
              <FontAwesomeIcon icon={faStar} className="icon" />
              <h3>Logo</h3>
              <p>
                Votre identité visuelle commence par un logo fort et mémorable.
                Je crée pour vous un logo unique, à votre image, qui véhicule
                les valeurs de votre marque ou activité.
              </p>
            </div>
            <div className="service-card">
              <FontAwesomeIcon icon={faStar} className="icon" />
              <h3>Flyers</h3>
              <p>
                Besoin de communiquer efficacement sur vos événements, vos
                services ou vos offres ? Je réalise vos flyers, cartes de
                visite, affiches ou brochures avec un design percutant et
                professionnel.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Service;
