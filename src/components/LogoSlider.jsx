import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { NavLink } from "react-router-dom";
import "swiper/css";
import "swiper/css/autoplay";


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
  ];

  return (
    <section className="logo-slider-container">
      <div className="title-slide">
        <h3 className="title">Des projets, des rencontres, de la confiance.</h3>
        <NavLink className="voir" to="/portfolio">
          PROJETS
        </NavLink>
      </div>
      <div className="swiper-wrapper-logo">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={"auto"}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={4000}
          grabCursor={true}
          freeMode={true}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index} className="logo-slide">
              <img src={logo} alt={`logo-${index}`} className="logo-img" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LogoSlider;
