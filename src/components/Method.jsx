import { useEffect, useRef, useState } from "react";

export default function Promesses() {
  const cards = [
    {
      t: "Découverte",
      d: "Chaque projet commence par une rencontre. Nous plongeons dans votre univers, écoutons votre histoire et décryptons vos besoins. Cette immersion nous permet de cerner vos ambitions et de poser des fondations solides pour une collaboration inspirée et sur-mesure."
    },
    {
      t: "Stratégie",
      d: "Nous transformons vos idées en une vision claire et motivante. Grâce à une feuille de route précise, nous traçons le chemin vers vos objectifs, en alliant créativité, innovation et pragmatisme. Notre ambition : bâtir une stratégie qui vous distingue et qui inspire confiance."
    },
    {
      t: "Développement",
      d: "C’est ici que la magie opère : nous donnons vie à vos idées. Entre design élégant et technologie performante, nous créons des expériences mémorables, fluides et centrées sur l’utilisateur. Chaque détail compte pour offrir une solution qui séduit, convainc et évolue avec vous."
    },
    {
      t: "Livraison",
      d: "Lancement, célébration, mais surtout accompagnement. Nous mettons en ligne votre projet avec soin et veillons à ce qu’il brille dès le premier jour. Et parce qu’un succès se construit dans le temps, nous restons à vos côtés pour optimiser, faire grandir et pérenniser votre réussite."
    },
  ];

  const ref = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Détection mobile
  const isMobile = window.innerWidth < 768;

  // === SCROLL DETECTION POUR VERSION DESKTOP ===
  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScroll = el.offsetHeight - windowHeight;
      const progress = Math.min(Math.max(-rect.top / totalScroll, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  // === ANIMATION D’APPARITION MOBILE ===
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    if (!isMobile) return;
    const observers = [];
    const elements = document.querySelectorAll(".promesses__mobile .card");

    elements.forEach((el, i) => {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => [...new Set([...prev, i])]);
            }
          });
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isMobile]);

  return (
    <section className="promesses" ref={ref}>
      <div className="promesses__left">
        <div className="promesses__left-content">
          <h2>Notre approche</h2>
          <p>
            Une méthode simple, claire et humaine.
            Nous avançons à vos côtés, étape par étape — de la découverte à la livraison.
            Chaque phase est pensée pour donner du sens, de la cohérence et de l’impact à votre projet.
          </p>
        </div>
      </div>

      <div className="promesses__right">
        {isMobile ? (
          <div className="promesses__mobile">
            {cards.map((c, i) => (
              <article
                key={c.t}
                className={`card ${visibleCards.includes(i) ? "visible" : ""}`}
              >
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </article>
            ))}
          </div>
        ) : (
          <div className="promesses__sticky">
            {cards.map((c, i) => {
              const sectionSize = 1 / cards.length;
              const start = i * sectionSize;
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

              return (
                <article
                  key={c.t}
                  className="card"
                  style={{
                    opacity: Math.max(0, Math.min(1, opacity)),
                    transform: `scale(${scale})`,
                  }}
                >
                  <h3>{c.t}</h3>
                  <p>{c.d}</p>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
