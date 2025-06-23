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
                Je conçois des sites web modernes, responsives et adaptés à vos
                besoins. Que ce soit pour présenter votre activité, vendre en
                ligne ou améliorer votre visibilité, je vous accompagne de A à Z
                dans la réalisation de votre site vitrine ou e-commerce.
              </p>
            </div>

            <div className="service-card">
              <FontAwesomeIcon icon={faStar} className="icon"/>
              <h3>Site e-commerce</h3>
              <p>
                Je développe des sites vitrines modernes, rapides et adaptés à
                tous les écrans pour présenter votre activité, vos services ou
                votre portfolio. L’objectif : vous offrir une présence
                professionnelle sur internet, claire et efficace.
              </p>
            </div>
            <div className="service-card">
              <FontAwesomeIcon icon={faStar} className="icon"/>
              <h3>Logo</h3>
              <p>
                Votre identité visuelle commence par un logo fort et mémorable.
                Je crée pour vous un logo unique, à votre image, qui véhicule
                les valeurs de votre marque ou activité.
              </p>
            </div>
            <div className="service-card">
              <FontAwesomeIcon icon={faStar} className="icon"/>
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
