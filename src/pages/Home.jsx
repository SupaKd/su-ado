import Hero from "./Acceuil/Hero";
import Service from "./Acceuil/Service";
import Method from "./Acceuil/Method";
import Question from "./Acceuil/Question";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <Hero />
      <Service />
      <Method />
      <Question />
      <section class="project-section">
  <div class="project-card">
    <div class="project-content">
      <h2>Ton avenir digital commence ici !</h2>
      <p>
      C’est le moment idéal pour développer ton image en ligne avec des supports modernes et adaptés à ta marque.
      Création ou refonte de site, boutique en ligne, identité visuelle…
      </p>
      <Link to="/contact">
      <button>Discutons ensemble</button>
      </Link>
    </div>
    <div class="project-image">
      <img src="/flyers.webp" alt="Mockup site web"/>
    </div>
  </div>
</section>
    </main>
  );
}
export default Home;
