import Hero from "./Acceuil/Hero";
import Service from "./Acceuil/Service";
import Method from "./Acceuil/Method";
import Question from "./Acceuil/Question";
import LogoSlider from "../components/LogoSlider";
import Img from "../pages/Acceuil/Img";
import ScrollRevealWrapper from "../components/ScrollRevealWrapper";
import { motion } from "framer-motion";

const pageTransition = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeIn" } },
};

function Home() {
  return (
    <motion.main
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <ScrollRevealWrapper>
        <Hero />
      </ScrollRevealWrapper>

      <ScrollRevealWrapper delay={0.1}>
        <Service />
      </ScrollRevealWrapper>

      <ScrollRevealWrapper delay={0.2}>
        <Img />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper delay={0.3}>
        <Method />
      </ScrollRevealWrapper>

      <ScrollRevealWrapper delay={0.4}>
        <LogoSlider />
      </ScrollRevealWrapper>

      <ScrollRevealWrapper delay={0.5}>
        <Question />
      </ScrollRevealWrapper>
    </motion.main>
  );
}

export default Home;
