import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const projets = [
  {
    id: 1,
    title: "Site web associative",
    img: "/logo-yojeme.webp",
  },
  {
    id: 2,
    title: "Site web plombier",
    img: "/aqua.webp",
  },
  {
    id: 3,
    title: "Site web restauration",
    img: "belli.webp",
  }
];

export default function SectionProjets() {
  const [index, setIndex] = useState(0);
  const cardRef = useRef(null);

  // Animation GSAP au changement de projet
  useEffect(() => {
    if (!cardRef.current) return;

    const tl = gsap.timeline();
    tl.fromTo(
      cardRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
    );

    return () => {
      tl.kill();
    };
  }, [index]);

  const prevProject = () => {
    setIndex((prev) => (prev === 0 ? projets.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setIndex((prev) => (prev === projets.length - 1 ? 0 : prev + 1));
  };

  const currentProject = projets[index];

  return (
    <section className="section-projets" aria-label="Aperçu de mes projets">
      <h2 className="section-projets__title">Nos projets</h2>

      <div className="section-projets__carousel">
        <button
          className="section-projets__btn section-projets__btn--left"
          aria-label="Projet précédent"
          onClick={prevProject}
        >
          ‹
        </button>

        <a
          href={currentProject.url}
          className="projet-card"
          ref={cardRef}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="projet-card__img"
            src={currentProject.img}
            alt={`Aperçu du projet ${currentProject.title}`}
            loading="lazy"
          />
          <h3 className="projet-card__title">{currentProject.title}</h3>
        </a>

        <button
          className="section-projets__btn section-projets__btn--right"
          aria-label="Projet suivant"
          onClick={nextProject}
        >
          ›
        </button>
      </div>
    </section>
  );
}
