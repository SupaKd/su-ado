// src/layout/Header.jsx
import { useState, useEffect, useCallback, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  const location = useLocation();
  const lastY = useRef(0);
  const ticking = useRef(false);

  // Toggle menu
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [location.pathname, closeMenu]);

  // Scroll listener (direction + scrolled)
  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;

      ticking.current = true;

      requestAnimationFrame(() => {
        const currentY = window.scrollY;

        setIsScrolled(currentY > 20);

        if (currentY > 120) {
          const isScrollingDown = currentY > lastY.current;
          setShowHeader(!isScrollingDown);
        } else {
          setShowHeader(true);
        }

        lastY.current = currentY;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const headerClasses = [
    "header",
    isScrolled && "header--scrolled",
    isMenuOpen && "header--menu-open",
    showHeader ? "header--show" : "header--hide",
  ]
    .filter(Boolean)
    .join(" ");

  const navLinkClass = ({ isActive }) =>
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
        <Link to="/" onClick={closeMenu} className="header__logo" aria-label="Retour à l'accueil">
          <img
            src="/newlogo.png"
            alt="Logo"
            className="header__logo-image"
            width="120"
            height="40"
            loading="eager"
          />
        </Link>

        {/* CTA Button */}
        <a href="#devis" className="header__cta button button--primary" aria-label="Nous contacter">
          Contact
        </a>

        {/* Navigation */}
        <nav
          id="main-navigation"
          className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}
          aria-label="Navigation principale"
        >
          <div className="header__nav-content">
            <NavLink to="/" className={navLinkClass} onClick={closeMenu}>
              Accueil
            </NavLink>

            <NavLink to="/contact" className={navLinkClass} onClick={closeMenu}>
              Contact
            </NavLink>

            <NavLink to="/projet" className={navLinkClass} onClick={closeMenu}>
              Projet
            </NavLink>
          </div>
        </nav>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="header__overlay"
            onClick={closeMenu}
            onKeyDown={(e) => e.key === "Escape" && closeMenu()}
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