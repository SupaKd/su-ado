import Hero from "./Acceuil/Hero";
import Service from "./Acceuil/Service";
import Method from "./Acceuil/Method";
import Question from "./Acceuil/Question";
import LogoSlider from "../components/LogoSlider";
import Img from "../pages/Acceuil/Img";
import ScrollRevealWrapper from "../components/ScrollRevealWrapper";

function Home() {
  return (
    <main>
      <ScrollRevealWrapper>
        <Hero />
      </ScrollRevealWrapper>

      <ScrollRevealWrapper delay={0.1}>
        <Service />
      </ScrollRevealWrapper>

      <ScrollRevealWrapper delay={0.2}>
        <Method />
      </ScrollRevealWrapper>

      <ScrollRevealWrapper delay={0.3}>
        <LogoSlider />
      </ScrollRevealWrapper>

      <ScrollRevealWrapper delay={0.4}>
        <Img />
      </ScrollRevealWrapper>

      <ScrollRevealWrapper delay={0.5}>
        <Question />
      </ScrollRevealWrapper>
    </main>
  );
}

export default Home;
