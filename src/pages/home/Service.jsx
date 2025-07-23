import { useRef } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function Service() {
  const services = [
    {
      title: "Site vitrine >",
      description: "Nous concevons des sites vitrines modernes...",
      image: "vitrine2.webp",
    },
    {
      title: "Site e-commerce >",
      description: "Nous créons des boutiques en ligne performantes...",
      image: "supacofooter.webp",
    },
    {
      title: "Logo >",
      description: "Votre identité visuelle commence par un logo fort...",
      image: "logo2.webp",
    },
    {
      title: "Flyers >",
      description: "Besoin de communiquer efficacement sur vos événements...",
      image: "fly2.webp",
    },
  ];

  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="services" id="service">
      <div className="pre">
        <h2>RÉIMAGINER VOTRE IMAGE</h2>
        <p>
          Sites web, logos, identité visuelle, SupaCo transforme vos idées en résultats concrets. Design moderne, impact garanti.
        </p>
      </div>

      <div className="serv">
        <img src="deco.webp" alt="deco" />
        <p>Nos services</p>
      </div>

      {/* Slider */}
      <div className="services__slider" ref={sliderRef}>
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
                <Dialog.Close className="modal-close" aria-label="Fermer la fenêtre modale">
                  <FontAwesomeIcon icon={faXmark} />
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        ))}
      </div>
        {/* Boutons flèches */}
        <div className="slider-controls">
        <button
          className="slider-btn left"
          onClick={() => scroll("left")}
          aria-label="Faire défiler vers la gauche"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          className="slider-btn right"
          onClick={() => scroll("right")}
          aria-label="Faire défiler vers la droite"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  );
}

export default Service;
