import Avis from "../components/Avis";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Method from "../components/Method";
import Presentation from "../components/Presentation";
import Projet from "../components/Projet";
import Question from "../components/Question";
import Tarifs from "../components/Tarifs";

function Home() {
  return (
    <main className="home">
      <Hero />
      <Presentation />
      <Tarifs />
      <Projet />
      <Method />
      <Avis />
      <Question />
      <Contact />
      <Marquee />
    </main>
  );
}

export default Home;
