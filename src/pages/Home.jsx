import Hero from "./Acceuil/Hero";
import Service from "./Acceuil/Service";
import Method from "./Acceuil/Method";
import Question from "./Acceuil/Question";
import LogoSlider from "../components/LogoSlider";
import Img from "../pages/Acceuil/Img";
function Home() {
  return (
    <main>
      <Hero />
      <Service />
      <Method />
      <LogoSlider />
      <Img />
      <Question />
    </main>
  );
}
export default Home;
