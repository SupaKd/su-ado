import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useIsMobile } from "../hooks/useScroll";

// Configuration
const PARALLAX_FACTOR = 0.1;
const TILT_SENSITIVITY = 20;

export default function Hero() {
  const [animate, setAnimate] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const isMobile = useIsMobile();

  // Déclenche l'animation d'entrée
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Effet parallax au scroll
  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * PARALLAX_FACTOR);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Gestion du tilt 3D sur l'image (desktop uniquement)
  const handleMouseMove = useCallback(
    (e) => {
      if (isMobile) return;

      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      setTilt({
        rotateX: (y / TILT_SENSITIVITY) * -1,
        rotateY: x / TILT_SENSITIVITY,
      });
    },
    [isMobile]
  );

  const resetTilt = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0 });
  }, []);

  const sectionStyle = {
    transform: `translateY(${offsetY}px)`,
  };

  const imageWrapperStyle = {
    transform: `perspective(900px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
  };

  return (
    <section
      className={`hero ${animate ? "animate" : ""}`}
      style={sectionStyle}
      aria-labelledby="hero-title"
    >
      <div
        className="hero__imageWrapper"
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        style={imageWrapperStyle}
      >
        <img
          src="/hero3.jpg"
          alt="Illustration création de sites web"
          className="hero__image"
          loading="eager"
        />
      </div>

      <div className="hero__text">
        <h1 id="hero-title">
          Des sites vitrines professionnels, rapides et modernes dès{" "}
          <span className="text-gradient">500€</span>.
        </h1>
        <p>
          Idéal pour artisans, freelances, commerces et petites entreprises
          voulant une présence en ligne efficace.
        </p>
        <p>
          <strong>Création en 72h | Design sur mesure | Optimisé SEO</strong>
        </p>
        <Link to="/contact">
          <button className="cta" type="button">
            Commencer mon projet
          </button>
        </Link>
      </div>
    </section>
  );
}