import Hero from "./Acceuil/Hero";
import Service from "./Acceuil/Service";
import Method from "./Acceuil/Method";
import Contacter from "./Acceuil/Contacter";
import Question from "./Acceuil/Question";

function Home() {
  return (
    <main>
      <Hero />
      <Service />
      <Method />
      <div className="bureau">
          <img src="/bureau.webp" alt="bureau" className="bur" />
        </div>
      <Question />
    </main>
  );
}
export default Home;
