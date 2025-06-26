import React from 'react';

const logos = [
  '/2onbini.webp',
  'belli.webp',
  'supa.webp',
  '/supasushi.webp',
  '/2onbini.webp',
  'belli.webp',
  'supa.webp',
  '/supasushi.webp',
  '/2onbini.webp',
  'belli.webp',
  'supa.webp',
  '/supasushi.webp',
  '/2onbini.webp',
  'belli.webp',
  'supa.webp',
  '/supasushi.webp',
  // Ajoute autant de logos que nécessaire
];

const LogoSlider = () => {
  return (
    <div className="logo-slider">
        <h3>Des projets, des rencontres, de la confiance</h3>
      <div className="slider-track">
        {logos.concat(logos).map((logo, index) => (
          <div className="slide" key={index}>
            <img src={logo} alt={`logo-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
