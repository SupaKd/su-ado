import { useMemo } from "react";

// Images du marquee (peuvent être externalisées dans constants si nécessaire)
const MARQUEE_IMAGES = [
  "/newlogo.png",
  "/newlogo.png",
  "/newlogo.png",
  "/newlogo.png",
  "/newlogo.png",
  "/newlogo.png",
];

// Composant pour un groupe d'images
function MarqueeGroup({ images, isDuplicate = false }) {
  return (
    <div className="marquee__group" aria-hidden={isDuplicate}>
      {images.map((src, index) => (
        <div className="marquee__item" key={isDuplicate ? `dup-${index}` : index}>
          <img
            src={src}
            alt={isDuplicate ? "" : `Logo partenaire ${index + 1}`}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}

export default function Marquee() {
  // Mémorise les images pour éviter les recalculs inutiles
  const images = useMemo(() => MARQUEE_IMAGES, []);

  return (
    <section className="marquee" aria-label="Logos partenaires">
      <div className="marquee__wrapper">
        {/* Bande défilante */}
        <div className="marquee__track">
          <MarqueeGroup images={images} />
          {/* Duplication pour effet infini */}
          <MarqueeGroup images={images} isDuplicate />
        </div>

        {/* Dégradés latéraux */}
        <div className="marquee__fade marquee__fade--left" aria-hidden="true" />
        <div className="marquee__fade marquee__fade--right" aria-hidden="true" />
      </div>
    </section>
  );
}