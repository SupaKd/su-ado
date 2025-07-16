import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Bienvenue chez <span className="highlight-title">SupaCo</span> !
        </h1>

        <h2>Boostez votre p<span>résence</span> en ligne</h2>
       

        <NavLink to="/contact">
          <button>Contactez‑nous</button>
        </NavLink>
      </div>
    </section>
  );
}

export default Hero;
