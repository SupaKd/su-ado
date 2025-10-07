
export default function Marquee() {
  const images = [
    "/newlogo.png",
    "/newlogo.png",
    "/newlogo.png",
    "/newlogo.png",
    "/newlogo.png",
    "/newlogo.png",
  ];

  return (
    <section className="marquee">
      <div className="marquee__wrapper">
        {/* Bande défilante */}
        <div className="marquee__track">
          <div className="marquee__group">
            {images.map((src, i) => (
              <div className="marquee__item" key={i}>
                <img src={src} alt={`logo-${i}`} />
              </div>
            ))}
          </div>
          {/* Duplication pour effet infini */}
          <div className="marquee__group" aria-hidden="true">
            <br />
            {images.map((src, i) => (
              <div className="marquee__item" key={`dup-${i}`}>
                <img src={src} alt="" />
              </div>
            ))}
          </div>
        </div>

        {/* Dégradés gauche/droite */}
        <div className="marquee__fade marquee__fade--left"></div>
        <div className="marquee__fade marquee__fade--right"></div>
      </div>
    </section>
  );
}
