import * as Dialog from "@radix-ui/react-dialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Typewriter from "typewriter-effect";
import { NavLink } from "react-router-dom";

function Service() {
  const services = [
    {
      title: "Site vitrine >",
      description:
        "Nous concevons des sites vitrines modernes, élégants et adaptés à tous les supports. Idéal pour présenter votre activité, vos services ou votre savoir-faire, le site vitrine renforce votre image professionnelle et améliore votre visibilité en ligne.",
      image: "vitrine2.webp",
      
    },
    {
      title: "Site e-commerce >",
      description:
        "Nous créons des boutiques en ligne performantes, sécurisées et faciles à gérer. Que vous souhaitiez vendre quelques produits ou lancer un catalogue complet, je vous accompagne dans la création d’un site e-commerce sur mesure, optimisé pour convertir vos visiteurs en clients.",
      image: "supacofooter.webp",
    },
    {
      title: "Logo >",
      description:
        "Votre identité visuelle commence par un logo fort et mémorable. Je crée pour vous un logo unique, à votre image, qui véhicule les valeurs de votre marque ou activité.",
      image: "logo2.webp",
    },
    {
      title: "Flyers >",
      description:
        "Besoin de communiquer efficacement sur vos événements, vos services ou vos offres ? Je réalise vos flyers, cartes de visite, affiches ou brochures avec un design percutant et professionnel.",
      image: "fly2.webp",
    },
    {
      title: "Video publicitaire >",
      description:
        "Attirez l’attention de vos clients dès le premier regard grâce à une vidéo publicitaire sur-mesure !",
      image: "fly2.webp",
    },
  ];
  return (
    <section className="services" id="service">
      <div className="pre">
      <h2>RÉIMAGINER VOTRE IMAGE</h2>
      <p>Sites web, logos, identité visuelle, SupaCo transforme vos idées en résultats concrets. Design moderne, impact garanti.</p>
      </div>
      <div className="serv">
        <img src="deco.webp" alt="deco" />
        <p>
          Nos services
        </p>
      </div>
      <div className="services__slider">
        {services.map((service, index) => (
          <Dialog.Root key={index}>
            <Dialog.Trigger asChild>
              <div
                className="service-card"
                tabIndex={0}
                aria-label={`Voir plus sur ${service.title}`}
              >
                <img src={service.image} alt={service.title} />
                <div className="service-card__content">
                  <h3>{service.title}</h3>
                </div>
              </div>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="modal-overlay" />
              <Dialog.Content
                className="modal-content"
                aria-describedby={`desc-${index}`}
              >
                <Dialog.Title>{service.title}</Dialog.Title>
                <img
                  src={service.image}
                  alt={service.title}
                  style={{
                    width: "100%",
                    borderRadius: "0.5rem",
                    marginTop: "1rem",
                  }}
                />
                <Dialog.Description
                  id={`desc-${index}`}
                  style={{ marginTop: "1rem" }}
                >
                  {service.description}
                </Dialog.Description>
                <NavLink to="service">
                  <button className="modal-btn">Devis</button>
                </NavLink>
                <Dialog.Close
                  className="modal-close"
                  aria-label="Fermer la fenêtre modale"
                >
                  <FontAwesomeIcon icon={faXmark} />
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        ))}
      </div>
    </section>
  );
}

export default Service;
