import { NavLink } from "react-router-dom";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <section className="hero text-center px-4 py-20 bg-black text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        <Typewriter
          options={{
            strings: [
              "Boostez votre présence en ligne 🚀",
              "Des sites modernes, rapides et efficaces",
              "Créons ensemble votre vitrine digitale 💻",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>

      <p className="text-lg max-w-xl mx-auto mb-6">
        Sites web, logos, identité visuelle : SupaCo transforme vos idées en résultats concrets.
        Design moderne, impact garanti.
      </p>

      <NavLink to="/contact">
        <button>
          Contactez‑nous
        </button>
      </NavLink>
    </section>
  );
}

export default Hero;
