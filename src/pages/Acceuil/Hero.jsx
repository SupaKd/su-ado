import { NavLink } from "react-router-dom";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Bienvenue chez SupaCo !</h1>
        <h2>
          <Typewriter
            options={{
              strings: [
                "Boostez votre présence en ligne",
                "Des sites modernes",
                "Créons ensemble votre site web",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>

        <p>
          Sites web, logos, identité visuelle : SupaCo transforme vos idées en résultats concrets.
          Design moderne, impact garanti.
        </p>

        <NavLink to="/contact">
          <button>Contactez‑nous</button>
        </NavLink>
      </div>
    </section>
  );
}

export default Hero;
