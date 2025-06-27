// src/layout/Footer.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer-form">
      <section>
      <form
  className="contact-form"
  action="https://formsubmit.co/contact@supaco.fr"
  method="POST"
>
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
  <input type="hidden" name="_next" value="https://supaco.fr/merci" />

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
    </footer>
  );
}

export default Footer;
