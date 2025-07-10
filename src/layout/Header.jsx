// src/layout/Header.jsx
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // dès 20px de scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <Link
        className={`burger ${isOpen ? "rotate" : ""}`}
        onClick={toggleMenu}
        aria-label="Menu mobile"
        aria-expanded={isOpen}
      >
        <FontAwesomeIcon icon={isOpen ? faXmark : faBarsStaggered} />
      </Link>

      <Link to="/" onClick={closeMenu} className="logo_mobile">
        <img src="/logoo.webp" alt="Logo" />
      </Link>
      <Link to="/" onClick={closeMenu} className="logo_desktop">
        <img src="/desk_logo.webp" alt="Logo" />
      </Link>

      <a href="#devis" className="devis">Devis</a>


      <nav
        className={`header__nav ${isOpen ? "show" : ""}`}
        aria-label="Navigation principale"
      >
        <NavLink to="/" className="acceuil" onClick={closeMenu}>
          Accueil
        </NavLink>
        <NavLink to="/portfolio" onClick={closeMenu}>
          Projets
        </NavLink>
        <NavLink to="/contact" onClick={closeMenu}>
          Contact
        </NavLink>
        <a href="#service">Service</a>

      </nav>
    </header>
  );
}

export default Header;
