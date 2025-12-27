import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useIsMobile } from "../hooks/useScroll";
import { PROJECTS_DATA } from "../constants";

// Configuration des animations
const CARD_ANIMATION = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

// Sous-composant pour une carte projet
function ProjectCard({ project, index }) {
  const { title, desc, logo, imgHover, link } = project;

  return (
    <motion.article
      className="project-card"
      {...CARD_ANIMATION}
      transition={{ delay: index * 0.15, duration: 0.6 }}
    >
      <div className="project-card__image">
        <img
          src={logo}
          alt={`${title} logo`}
          className="logo"
          loading="lazy"
        />
        <img
          src={imgHover}
          alt={`${title} aperçu`}
          className="hover"
          loading="lazy"
        />
      </div>
      <div className="project-card__info">
        <h3>{title}</h3>
        <p>{desc}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Voir
        </a>
      </div>
    </motion.article>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    imgHover: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

// Composant de pagination (dots)
function SliderDots({ count, activeIndex, onDotClick }) {
  return (
    <div className="projects__dots" role="tablist" aria-label="Navigation projets">
      {Array.from({ length: count }, (_, index) => (
        <button
          key={index}
          className={`dot ${activeIndex === index ? "active" : ""}`}
          onClick={() => onDotClick(index)}
          role="tab"
          aria-selected={activeIndex === index}
          aria-label={`Projet ${index + 1}`}
        />
      ))}
    </div>
  );
}

SliderDots.propTypes = {
  count: PropTypes.number.isRequired,
  activeIndex: PropTypes.number.isRequired,
  onDotClick: PropTypes.func.isRequired,
};

// Composant principal
export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);
  const isMobile = useIsMobile();

  const handleScroll = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const index = Math.round(slider.scrollLeft / slider.offsetWidth);
    setActiveIndex(index);
  }, []);

  const scrollToSlide = useCallback((index) => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.scrollTo({
      left: slider.offsetWidth * index,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="projects" aria-labelledby="projects-title">
      <div className="projects__container">
        <motion.h2
          id="projects-title"
          {...CARD_ANIMATION}
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
              role="tabpanel"
            >
              {PROJECTS_DATA.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>

            <SliderDots
              count={PROJECTS_DATA.length}
              activeIndex={activeIndex}
              onDotClick={scrollToSlide}
            />
          </>
        ) : (
          <div className="projects__grid">
            {PROJECTS_DATA.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}