import React from "react";
import Marquee from "react-fast-marquee";
import { NavLink } from "react-router-dom";

const LogoSlider = () => {
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
      <div className="marquee-wrapper">
        <Marquee
          direction="right"
          speed={40}
          gradient={true}
          gradientColor={[249, 249, 249]}
          gradientWidth={100}
          pauseOnHover={true}
        >
          {logos.map((logo, index) => (
            <div key={index} className="logo-slide">
              <img src={logo} alt={`logo-${index}`} className="logo-img" />
            </div>
          ))}
        </Marquee>
      </div>
          <h3 className="title">Des projets, des rencontres, de la confiance</h3>
      <NavLink className="voir" to="/portfolio">PROJETS</NavLink>
    </section>
  );
};

export default LogoSlider;
