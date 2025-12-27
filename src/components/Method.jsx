import { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useIsMobile, useScrollProgress } from "../hooks/useScroll";
import { METHOD_CARDS } from "../constants";

// Sous-composant pour une carte de méthode
function MethodCard({ title, description, style, className = "" }) {
  return (
    <article className={`card ${className}`} style={style}>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

MethodCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
};

// Version Mobile avec Intersection Observer
function MobileCards() {
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    const elements = document.querySelectorAll(".promesses__mobile .card");
    const observers = [];

    elements.forEach((el, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, index]));
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <div className="promesses__mobile">
      {METHOD_CARDS.map((card, index) => (
        <MethodCard
          key={card.id}
          title={card.title}
          description={card.description}
          className={visibleCards.has(index) ? "visible" : ""}
        />
      ))}
    </div>
  );
}

// Version Desktop avec animation au scroll
function DesktopCards({ scrollProgress }) {
  const totalCards = METHOD_CARDS.length;
  const sectionSize = 1 / totalCards;

  const calculateCardStyle = (index) => {
    const start = index * sectionSize;
    const end = start + sectionSize;
    const localProgress = Math.min(
      Math.max((scrollProgress - start) / (end - start), 0),
      1
    );

    const opacity =
      localProgress < 0.15
        ? localProgress / 0.15
        : localProgress > 0.85
        ? (1 - localProgress) / 0.15
        : 1;

    const scale = 0.95 + 0.05 * localProgress;

    return {
      opacity: Math.max(0, Math.min(1, opacity)),
      transform: `scale(${scale})`,
    };
  };

  return (
    <div className="promesses__sticky">
      {METHOD_CARDS.map((card, index) => (
        <MethodCard
          key={card.id}
          title={card.title}
          description={card.description}
          style={calculateCardStyle(index)}
        />
      ))}
    </div>
  );
}

DesktopCards.propTypes = {
  scrollProgress: PropTypes.number.isRequired,
};

// Composant principal
export default function Method() {
  const sectionRef = useRef(null);
  const isMobile = useIsMobile();
  const scrollProgress = useScrollProgress(sectionRef);

  return (
    <section className="promesses" ref={sectionRef} aria-labelledby="method-title">
      <div className="promesses__left">
        <div className="promesses__left-content">
          <h2 id="method-title" className="text-gradient">
            Notre approche
          </h2>
          <p>
            Une méthode <span>simple</span>, claire et <span>humaine</span>.
            Nous avançons à vos côtés, étape par étape — de la découverte à la
            livraison. Chaque phase est pensée pour donner du sens, de la
            cohérence et de l'impact à votre <span>projet</span>.
          </p>
        </div>
      </div>

      <div className="promesses__right">
        {isMobile ? (
          <MobileCards />
        ) : (
          <DesktopCards scrollProgress={scrollProgress} />
        )}
      </div>
    </section>
  );
}