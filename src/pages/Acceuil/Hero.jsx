import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <>
      <section className="hero">
        <h1>Boostez votre présence en ligne</h1>
        <p>
          Sites web, logos, identité visuelle : SupaCo transforme vos idées en
          résultats concrets. Design moderne, impact garanti.
        </p>
        <NavLink to="/contact">
          <button>Contactez‑nous</button>
        </NavLink>
      </section>
    </>
  );
}
export default Hero;
