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

  // Scroll direction
  const lastY = useRef(0);
  const ticking = useRef(false);

  // Toggle menu
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    if (window.scrollY > 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [location.pathname, closeMenu]);

  // Scroll listener (direction + scrolled)
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (!ticking.current) {
        requestAnimationFrame(() => {
          setIsScrolled(currentY > 20);

          const isScrollingDown = currentY > lastY.current;

          if (currentY > 120) {
            if (isScrollingDown) setShowHeader(false); // hide
            else setShowHeader(true); // show
          } else {
            setShowHeader(true);
          }

          lastY.current = currentY;
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`
        header
        ${isScrolled ? "header--scrolled" : ""}
        ${isMenuOpen ? "header--menu-open" : ""}
        ${showHeader ? "header--show" : "header--hide"}
      `}
      role="banner"
    >
      <div className="header__container">
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

        <Link to="/" onClick={closeMenu} className="header__logo" aria-label="Accueil">
          <img
            src="/newlogo.png"
            alt="Logo"
            className="header__logo-image"
            width="120"
            height="40"
          />
        </Link>

        <a href="#devis" className="header__cta button button--primary">
          Contact
        </a>

        <nav
          id="main-navigation"
          className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}
          aria-label="Navigation principale"
        >
          <div className="header__nav-content">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `header__nav-link ${isActive ? "header__nav-link--active" : ""}`
              }
              onClick={closeMenu}
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
