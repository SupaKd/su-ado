import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <img src="/newlogo.png" alt="Logo agence" />
          </Link>
          <p className="footer__desc">
            Nous concevons des expériences web sur mesure pour révéler
            l’identité de votre marque et booster votre visibilité en ligne.
          </p>
        </div>

        <div className="footer__links">
          <h3>Navigation</h3>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer__contact">
          <h3>Contact</h3>
          <ul>
            <li>
              <FontAwesomeIcon icon={faEnvelope} /> contact@supaco-digital.com
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} /> +33 7 83 05 24 12
            </li>
            <li>
              <FontAwesomeIcon icon={faLocationDot} /> Saint-Genis-Pouilly,
              France
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {currentYear} SupaCo digital. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
