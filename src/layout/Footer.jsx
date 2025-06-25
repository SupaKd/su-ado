// src/layout/Footer.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer-form">
      <section>
        <form
          className="contact-form"
          action="https://formsubmit.co/supaco.digital@gmail.com"
          method="POST"
        >
          <h2>Partage-nous ton projet !</h2>

          <input type="text" name="Nom" placeholder="Nom" required />
          <input
            type="tel"
            name="Téléphone"
            placeholder="Numéro de téléphone"
            required
          />
          <input
            type="email"
            name="Email"
            placeholder="Adresse e-mail"
            required
          />

          <fieldset>
            <legend>Que souhaitez-vous ?</legend>
            <label>
              <input type="checkbox" name="Prestation" value="Site vitrine" />
              Site vitrine
            </label>
            <label>
              <input
                type="checkbox"
                name="Prestation"
                value="Site e-commerce"
              />
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

          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div className="social-btn">
          <div className="footer-socials">
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
          <button type="submit">Envoyer</button>
            </div>
        </form>

        <div className="footer-image">
          <img src="/logo.webp" alt="Illustration" />
        </div>

        

        
      </section>
      
      <div className="footer__bottom">
        <p>&copy; 2025 SupaCo Digital. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
