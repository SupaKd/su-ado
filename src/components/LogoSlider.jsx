import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { NavLink } from "react-router-dom";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

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
    "/2onbini.webp",
    "belli.webp",
    "aqua.webp",
  ];

  return (
    <section className="logo-slider-container">
      

      <div className="swiper-wrapper-logo">
        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView={"auto"}
          spaceBetween={30}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={6000} // plus la valeur est grande, plus le défilement est lent
          grabCursor={true}
          allowTouchMove={true}
          dir="rtl" // ← ← ← sens droite vers gauche
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index} className="logo-slide">
        <NavLink to="/portfolio">

              <img src={logo} alt={`logo-${index}`} className="logo-img" />
              </NavLink>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="title-slide">
        <h3 className="title">Des projets, des rencontres, de la confiance.</h3>
        <NavLink className="voir" to="/portfolio">
          PROJETS
        </NavLink>
      </div>
    </section>
  );
};

export default LogoSlider;
