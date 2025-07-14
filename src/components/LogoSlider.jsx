import React from "react";
import Marquee from "react-fast-marquee";
import { NavLink } from "react-router-dom";

const LogoSlider = () => {
  const logos = [
    "/2onbini.webp",
    "belli.webp",
    "aqua.webp",
    "/supasushi.webp",
    "/2onbini.webp",
    "belli.webp",
    "aqua.webp",
    "/supasushi.webp",
    "/2onbini.webp",
    "belli.webp",
    "aqua.webp",
    "/supasushi.webp",
    "/2onbini.webp",
    "belli.webp",
    "aqua.webp",
    "/supasushi.webp",
  ];
  return (
    <section className="logo-slider-container">
      <div className="marquee-wrapper">
        <Marquee
          direction="right"
          speed={40}
          gradient={true}
          gradientColor={[255, 255, 255]}
          gradientWidth={100}
          pauseOnHover={true}
        >
          {logos.map((logo, index) => (
            <div key={index} className="logo-slide">
              <img src={logo} alt={`logo-${index}`} className="logo-img" />
            </div>
          ))}
        </Marquee>
          <h3 className="title">Des projets, des rencontres, de la confiance</h3>
      </div>
      <NavLink className="voir" to="/portfolio">PROJETS</NavLink>
    </section>
  );
};

export default LogoSlider;
