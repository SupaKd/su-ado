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
          <h2>Partage nous ton projet !</h2>
          <input type="text" name="Nom" placeholder="Nom complet" required />
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
          <textarea
            name="Projet"
            placeholder="Votre projet en quelques mots"
            required
          />

          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <button type="submit">Envoyer</button>
        </form>

        <div className="footer-image">
          <img src="/vitrine.webp" alt="Illustration" />
        </div>

        <div className="footer-socials">
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a
            href="https://www.instagram.com/supa_c0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>

        <div className="footer-credit">
          Powered by <strong>SupaCo</strong>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
