// src/layout/Header.jsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <Link
        className={`burger ${isOpen ? "rotate" : ""}`}
        onClick={toggleMenu}
        aria-label="Menu mobile"
        aria-expanded={isOpen}
      >
        <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
      </Link>

      <Link to="/" onClick={closeMenu} className="logo_mobile">
        <img src="/logoo.webp" alt="Logo" />
      </Link>
      <Link to="/" onClick={closeMenu} className="logo_desktop">
        <img src="/logo_desk.webp" alt="Logo" />
      </Link>

      <Link to="/contact" className="devis" onClick={closeMenu}>
        Devis
      </Link>

      <nav
        className={`header__nav ${isOpen ? "show" : ""}`}
        aria-label="Navigation principale"
      >
        <NavLink to="/" className="acceuil" onClick={closeMenu}>
          Accueil
        </NavLink>
        <NavLink to="/portfolio" onClick={closeMenu}>
          Modèles
        </NavLink>
        <NavLink to="/contact" onClick={closeMenu}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
