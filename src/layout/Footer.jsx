import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { CONTACT_INFO, NAV_LINKS } from "../constants/data";

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    ...NAV_LINKS.filter((link) => link.path !== "/projet"),
    { path: "/confidentialite", label: "Mentions Légales" },
  ];

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <img src="/newlogo.png" alt="Logo Supaco Digital" />
          </Link>
          <p className="footer__desc">
            Nous concevons des expériences web sur mesure pour révéler
            l'identité de votre marque et booster votre visibilité en ligne.
          </p>
        </div>

        <div className="footer__links">
          <h3>Navigation</h3>
          <ul>
            {footerLinks.map(({ path, label }) => (
              <li key={path}>
                <Link to={path}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__contact">
          <h3>Contact</h3>
          <ul>
            <li>
              <FontAwesomeIcon icon={faEnvelope} /> {CONTACT_INFO.email}
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} /> {CONTACT_INFO.phone}
            </li>
            <li>
              <FontAwesomeIcon icon={faLocationDot} /> {CONTACT_INFO.location}
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