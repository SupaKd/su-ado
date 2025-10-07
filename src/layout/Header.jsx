// src/layout/Header.jsx
import { useState, useEffect, useCallback } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Utilisation de useCallback pour les fonctions de gestion d'événements
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    // Scroll vers le haut uniquement si on est pas déjà en haut
    if (window.scrollY > 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  // Fermer le menu lors du changement de route
  useEffect(() => {
    closeMenu();
  }, [location.pathname, closeMenu]);

  // Gestion du scroll avec debounce léger
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Empêcher le scroll du body quand le menu est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header 
      className={`header ${isScrolled ? "header--scrolled" : ""} ${
        isMenuOpen ? "header--menu-open" : ""
      }`}
      role="banner"
    >
      <div className="header__container">
        {/* Bouton menu mobile */}
        <button
          className="header__menu-toggle"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
        >
          <FontAwesomeIcon 
            icon={isMenuOpen ? faXmark : faBarsStaggered} 
            className="header__menu-icon"
          />
        </button>

        {/* Logo */}
        <Link 
          to="/" 
          onClick={closeMenu}
          className="header__logo"
          aria-label="Retour à l'accueil"
        >
          <picture>
            <source srcSet="/newlogo.png" media="(min-width: 768px)" />
            <img 
              src="/newlogo.png" 
              alt="Logo" 
              className="header__logo-image"
              width="120"
              height="40"
            />
          </picture>
        </Link>

        {/* Bouton devis */}
        <a 
          href="#devis" 
          className="header__cta button button--primary"
        >
          Contact
        </a>

        {/* Navigation */}
        <nav 
          id="main-navigation"
          className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}
          aria-label="Navigation principale"
          role="navigation"
        >
          <div className="header__nav-content">
            <img className="header__nav-logo" src="/logoo.webp" alt="logo-nav" />
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `header__nav-link ${isActive ? "header__nav-link--active" : ""}`
              }
              onClick={closeMenu}
              end
            >
              Accueil
            </NavLink>

            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `header__nav-link ${isActive ? "header__nav-link--active" : ""}`
              }
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </div>
        </nav>

        {/* Overlay pour fermer le menu */}
        {isMenuOpen && (
          <div 
            className="header__overlay"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
      </div>
    </header>
  );
}

export default Header;