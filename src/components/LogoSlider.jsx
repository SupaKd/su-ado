import React, { useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import { NavLink } from "react-router-dom";

const LogoSlider = () => {
  const [isPaused, setIsPaused] = useState(false);
  const marqueeRef = useRef(null);
  const touchStartX = useRef(0);
  const scrollStartX = useRef(0);

  const handleTouchStart = (e) => {
    setIsPaused(true); // pause le scroll auto
    touchStartX.current = e.touches[0].clientX;
    scrollStartX.current = marqueeRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    const touchX = e.touches[0].clientX;
    const deltaX = touchStartX.current - touchX;
    marqueeRef.current.scrollLeft = scrollStartX.current + deltaX;
  };

  const handleTouchEnd = () => {
    setIsPaused(false); // relance le scroll auto
  };

  const logos = [
    "/2onbini.webp",
    "belli.webp",
    "aqua.webp",
    "/2onbini.webp",
    "belli.webp",
    "aqua.webp",
    "/2onbini.webp",
    "belli.webp",
    "aqua.webp",
    "/2onbini.webp",
    "belli.webp",
    "aqua.webp",
  ];

  return (
    <section className="logo-slider-container">
      <div className="title-slide">
        <h3 className="title">Des projets, des rencontres, de la confiance.</h3>
        <NavLink className="voir" to="/portfolio">
          PROJETS
        </NavLink>
      </div>
      <div
        className="marquee-wrapper touch-scroll-wrapper"
        ref={marqueeRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Marquee
          direction="right"
          speed={40}
          gradient={true}
          gradientColor={[249, 249, 249]}
          gradientWidth={100}
          pauseOnHover={true}
          pauseOnClick={true}
          play={!isPaused}
        >
          {logos.map((logo, index) => (
            <div key={index} className="logo-slide">
              <img src={logo} alt={`logo-${index}`} className="logo-img" />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default LogoSlider;
