import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/contact@supaco.fr", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setShowModal(true);
        form.reset();
      } else {
        alert("Erreur lors de l'envoi.");
      }
    } catch (error) {
      alert("Une erreur s'est produite.");
      console.error(error);
    }
  };

  return (
    <footer className="footer-form" id="devis">
      <section>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Partage-nous ton projet !</h2>

          <input type="text" name="Nom" placeholder="Nom" required />
          <input type="tel" name="Téléphone" placeholder="Numéro de téléphone" required />
          <input type="email" name="Email" placeholder="Adresse e-mail" required />

          <fieldset>
            <legend>Que souhaitez-vous ?</legend>
            <label>
              <input type="checkbox" name="Prestation" value="Site vitrine" />
              Site vitrine
            </label>
            <label>
              <input type="checkbox" name="Prestation" value="Site e-commerce" />
              Site e-commerce
            </label>
            <label>
              <input type="checkbox" name="Prestation" value="Logo" />
              Logo
            </label>
            <label>
              <input type="checkbox" name="Prestation" value="Flyers" />
              Flyers
            </label>
          </fieldset>

          <textarea
            name="Projet"
            placeholder="Décrivez votre projet en quelques mots"
            required
          ></textarea>

          {/* Sécurité & paramètres */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_honey" style={{ display: "none" }} />

          <div className="social-btn">
            <div className="footer-socials">
              <a href="https://wa.me/33783052412?text=Bonjour%20je%20souhaite%20des%20infos%20sur%20vos%20services" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a href="https://www.instagram.com/supa_c0/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
            <button type="submit">Envoyer</button>
          </div>
        </form>

        <div className="footer-image">
          <img src="/fond_logo.webp" alt="Illustration" />
        </div>
      </section>

      <div className="footer__bottom">
        <p>&copy; 2025 SupaCo Digital. Tous droits réservés.</p>
      </div>

      {/* MODALE DE SUCCÈS */}
      {showModal && (
        <div className="success-modal-backdrop">
          <div className="success-modal">
            <p>🎉 Merci ! Votre message a bien été envoyé.</p>
            <button onClick={() => setShowModal(false)}>Fermer</button>
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;
