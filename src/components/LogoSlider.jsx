import React from 'react';
import Marquee from 'react-fast-marquee';

const logos = [
  '/2onbini.webp',
  'belli.webp',
  'aqua.webp',
  '/supasushi.webp',
  '/2onbini.webp',
  'belli.webp',
  'aqua.webp',
  '/supasushi.webp',
];

const LogoSlider = () => {
  return (
    <div className="logo-slider-container">
      <h3 className="title">Des projets, des rencontres, de la confiance</h3>
      <div className="marquee-wrapper">
        <Marquee
          direction="right"
          speed={40}
          gradient={true}
          gradientColor={[255, 255, 255]} // blanc
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
    </div>
  );
};

export default LogoSlider;
