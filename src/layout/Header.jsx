import { useState, useEffect, useCallback } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useScroll, useLockBodyScroll } from "../hooks/useScroll";
import { NAV_LINKS } from "../constants";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  
  const location = useLocation();
  const { scrollY, isScrollingDown, isScrolled } = useScroll(20);

  // Verrouille le scroll quand le menu est ouvert
  useLockBodyScroll(isMenuOpen);

  // Toggle menu avec useCallback pour éviter les re-créations
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Ferme le menu lors du changement de route
  useEffect(() => {
    closeMenu();
  }, [location.pathname, closeMenu]);

  // Gère la visibilité du header basée sur le scroll
  useEffect(() => {
    if (scrollY > 120) {
      setShowHeader(!isScrollingDown);
    } else {
      setShowHeader(true);
    }
  }, [scrollY, isScrollingDown]);

  // Gestion du clavier pour l'accessibilité
  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") {
      closeMenu();
    }
  }, [closeMenu]);

  // Construction des classes CSS
  const headerClasses = [
    "header",
    isScrolled && "header--scrolled",
    isMenuOpen && "header--menu-open",
    showHeader ? "header--show" : "header--hide",
  ]
    .filter(Boolean)
    .join(" ");

  const getNavLinkClass = ({ isActive }) =>
    `header__nav-link ${isActive ? "header__nav-link--active" : ""}`;

  return (
    <header className={headerClasses} role="banner">
      <div className="header__container">
        {/* Menu Toggle Button */}
        <button
          className="header__menu-toggle"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          type="button"
        >
          <FontAwesomeIcon
            icon={isMenuOpen ? faXmark : faBarsStaggered}
            className="header__menu-icon"
            aria-hidden="true"
          />
        </button>

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="header__logo"
          aria-label="Retour à l'accueil"
        >
          <img
            src="/newlogo.png"
            alt="Logo Supaco Digital"
            className="header__logo-image"
            width="120"
            height="40"
            loading="eager"
          />
        </Link>

        {/* CTA Button */}
        <a
          href="#devis"
          className="header__cta button button--primary"
          aria-label="Nous contacter"
        >
          Contact
        </a>

        {/* Navigation */}
        <nav
          id="main-navigation"
          className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}
          aria-label="Navigation principale"
        >
          <div className="header__nav-content">
            {NAV_LINKS.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={getNavLinkClass}
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </nav>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="header__overlay"
            onClick={closeMenu}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
            aria-label="Fermer le menu"
          />
        )}
      </div>
    </header>
  );
}

export default Header;