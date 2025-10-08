import { useEffect, useState } from "react";

const IMGS = ["/hero3.jpg", "/supahero.webp", "/vitrine.webp"];

export default function Hero() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`hero ${animate ? "animate" : ""}`}>
      <div className="hero__stage">
        <img
          src={IMGS[1]}
          alt=""
          className="hero__card hero__card--center"
          style={{ zIndex: 6 }}
        />
        <img
          src={IMGS[0]}
          alt=""
          className="hero__card hero__card--left"
          style={{ zIndex: 5 }}
        />
        <img
          src={IMGS[2]}
          alt=""
          className="hero__card hero__card--right"
          style={{ zIndex: 4 }}
        />
      </div>

      <div className="hero__text">
        <h1>Bienvenue chez SupaCo !</h1>
      <p>Votre Agence Web sur mesure.</p>
      </div>
    </section>
  );
}
