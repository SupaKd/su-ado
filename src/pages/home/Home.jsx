import Hero from "../home/Hero";
import Service from "../home/Service";
import Method from "../home/Method";
import Question from "../home/Question";
import LogoSlider from "../../components/LogoSlider";
import Img from "../home/Img";
import ScrollRevealWrapper from "../../components/ScrollRevealWrapper";

function Home() {
 
  return (
    
    <main className="home">
      <ScrollRevealWrapper>
        <Hero />
      </ScrollRevealWrapper>

      <ScrollRevealWrapper delay={0.2}>
        <Service />
      </ScrollRevealWrapper>

      <ScrollRevealWrapper delay={0.2}>
        <Method />
      </ScrollRevealWrapper>

      <ScrollRevealWrapper delay={0.3}>
        <Img />
      </ScrollRevealWrapper>

      <ScrollRevealWrapper delay={0.4}>
        <Question />
      </ScrollRevealWrapper>
      
    </main>
  );
}

export default Home;
