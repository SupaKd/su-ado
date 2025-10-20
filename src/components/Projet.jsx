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
      title: "Site vitrine pour un serrurier, électricien",
      desc: "Un site vitrine en ligne pour un serrurier, offrant une visibilité accrue sur son travail et ses services.",
      logo: "/2.png",
      imgHover: "/depanne.webp",
      link: "https://depannage-gemeaux.fr/",
    },
    {
      title: "Site e-commerce pour un reseller.",
      desc: "Un site vitrine pour un reseller de boisson énergisante, offrant une visibilité accrue sur ses produits.",
      logo: "/1.png",
      imgHover: "/redseller.webp",
      link: "https://konbini-smoky.vercel.app/",
    },
    {
      title: "Plateforme pour association solidaire",
      desc: "Un site institutionnel clair et immersif, présentant l’action d’une association aidant les jeunes.",
      logo: "/logomobile.png",
      imgHover: "/yoje.webp",
      link: "https://www.yojeme.fr/",
    },
    {
      title: "Site vitrine pour un fast-food.",
      desc: "Un site vitrine pour un fast-food de French Tacos, offrant une visibilité accrue sur ses produits.",
      logo: "/belli.logo.webp",
      imgHover: "/belli.webp",
      link: "https://bellifood.com/",
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

  const renderCard = (p, i) => (
    <motion.div
      className="project-card"
      key={i}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.15, duration: 0.6 }}
    >
      <div className="project-card__image">
        <img src={p.logo} alt={`${p.title} logo`} className="logo" loading="lazy" />
        <img src={p.imgHover} alt={`${p.title} site`} className="hover" loading="lazy" />
      </div>
      <div className="project-card__info">
        <h3>{p.title}</h3>
        <p>{p.desc}</p>
        <a href={p.link} target="_blank" rel="noreferrer">
          Voir le projet
        </a>
      </div>
    </motion.div>
  );

  return (
    <section className="projects">
      <div className="projects__container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-gradient"
        >
          Ils nous ont fait confiance.
        </motion.h2>

        {isMobile ? (
          <>
            <div
              className="projects__slider"
              ref={sliderRef}
              onScroll={handleScroll}
            >
              {projects.map(renderCard)}
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
          <div className="projects__grid">{projects.map(renderCard)}</div>
        )}
      </div>
    </section>
  );
}
