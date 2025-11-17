import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const [animate, setAnimate] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setOffsetY(window.scrollY * 0.10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMove = (e) => {
    if (window.innerWidth < 700) return; // désactive tilt sur mobile

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setTilt({
      rotateX: (y / 20) * -1,
      rotateY: x / 20,
    });
  };

  const resetTilt = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <section
      className={`hero ${animate ? "animate" : ""}`}
      style={{ transform: `translateY(${offsetY}px)` }}
    >
      <div
        className="hero__imageWrapper"
        onMouseMove={handleMove}
        onMouseLeave={resetTilt}
        style={{
          transform: `perspective(900px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        }}
      >
        <img src="/supahero.webp" alt="hero visuel" className="hero__image" />
      </div>

      <div className="hero__text">
        <h1>Des <span className="text-gradient">sites vitrines professionnels</span> , rapides et modernes dès <span className="text-gradient">200€</span>.</h1>
        <p>
          Idéal pour artisans, freelances, commerces et petites entreprises
          voulant une présence en ligne efficace.
        </p>
        <p>
          <strong>Création en 72h | Design sur mesure | Optimisé SEO</strong>
        </p>
        <Link to="/contact">
        <button className="cta">Commencer mon projet</button>
        </Link>
      </div>
    </section>
  );
}
