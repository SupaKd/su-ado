import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const projects = [
    {
      title: "Site vitrine pour un serrurier",
      desc: "Un site vitrine en ligne pour un serrurier, offrant une visibilité accrue sur son travail et ses services.",
      tech: ["React", "Node.js", "MySQL", "Framer Motion"],
      img: "/logo2.svg",
      link: "https://depannage-gemeaux.vercel.app/",
    },
    {
      title: "Plateforme pour association solidaire",
      desc: "Un site institutionnel clair et immersif, présentant l’action d’une association aidant les jeunes dans des zones rurales du Maroc.",
      tech: ["React", "SCSS", "AOS", "Vite"],
      img: "yojeme.png",
      link: "https://www.yojeme.fr/",
    },
  ];

  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;
    const index = Math.round(slider.scrollLeft / slider.offsetWidth);
    setActiveIndex(index);
  };

  const scrollTo = (index) => {
    const slider = sliderRef.current;
    if (!slider) return;
    slider.scrollTo({
      left: slider.offsetWidth * index,
      behavior: "smooth",
    });
  };

  return (
    <section className="projects">
      <div className="projects__container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nos Réalisations
        </motion.h2>

        {isMobile ? (
          <>
            <div
              className="projects__slider"
              ref={sliderRef}
              onScroll={handleScroll}
            >
              {projects.map((p, i) => (
                <div className="project-card" key={i}>
                  <div className="project-card__image">
                    <img src={p.img} alt={p.title} loading="lazy" />
                  </div>
                  <div className="project-card__info">
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    
                    <a href={p.link} target="_blank" rel="noreferrer">
                      Voir le projet
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="projects__dots">
              {projects.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${activeIndex === i ? "active" : ""}`}
                  onClick={() => scrollTo(i)}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="projects__grid">
            {projects.map((p, i) => (
              <motion.div
                className="project-card"
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
              >
                <div className="project-card__image">
                  <img src={p.img} alt={p.title} loading="lazy" />
                </div>
                <div className="project-card__info">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  
                  <a href={p.link} target="_blank" rel="noreferrer">
                    Voir le projet
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
