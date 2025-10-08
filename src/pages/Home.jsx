import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Method from "../components/Method";
import Presentation from "../components/Presentation";
import Projet from "../components/Projet";
import Question from "../components/Question";
import Waves from "../components/Waves";

function Home() {
  return (
    <main className="home">
      <Hero />
      <Waves />
      <Presentation />
      <Marquee />
      <Method />
      <Projet />
      <Question />
      <Contact />
    </main>
  );
}

export default Home;
