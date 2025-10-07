import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Method from "../components/Method";
import Presentation from "../components/Presentation";
import Projet from "../components/Projet";
import Question from "../components/Question";

function Home() {
  return (
    <main className="home">
      <Hero />
      <Presentation />
      <Method />
      <Projet />
      <Question />
      <Contact />
    </main>
  );
}

export default Home;
