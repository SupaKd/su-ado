import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const containerRef = useRef();
  const sectionRef = useRef();

  useEffect(() => {
    const sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + sectionRef.current.offsetWidth,
      },
    });
  }, []);

  return (
    <section className="horizontal-scroll" ref={containerRef}>
      <div className="scroll-inner" ref={sectionRef}>
        <div className="panel blue">
          <h2>Ton avenir digital commence ici !</h2>
        </div>
        <div className="panel green">
          <img src="/vitrine.webp" alt="Projet 1" />
        </div>
        <div className="panel red">
          <h2>Discutons ensemble</h2>
        </div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
