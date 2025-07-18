import { NavLink } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Zoom entre 1 et 1.2 quand on scroll sur la section
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <motion.section
      className="hero"
      ref={heroRef}
      style={{ scale }} // Applique le zoom
    >
      <div className="hero-content">
        <h1>
          Bienvenue chez <span className="highlight-title">SupaCo</span> !
        </h1>
        <h2>
          Boostez votre p<span>résence</span> en ligne
        </h2>
        <NavLink to="/contact">
          <button>Contactez‑nous</button>
        </NavLink>
      </div>
    </motion.section>
  );
}

export default Hero;
