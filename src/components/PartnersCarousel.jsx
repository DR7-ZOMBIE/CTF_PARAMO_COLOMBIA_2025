// PartnersCarousel.jsx

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/PartnersCarousel.css";

// Import images using relative paths (from src/components/ to src/assets)
import velascoImg from "../assets/Velasco.png";
import eiaImg from "../assets/EIA_Logo.png";
import academiaImg from "../assets/Academia_Ciberseguridad_Logo.png";
import eccouncilImg from "../assets/EC-COUNCIL.png";
import owaspImg from "../assets/OWASP_black_logo.svg";
import stcImg from "../assets/STC B1N cg.png";
import certiprofImg from "../assets/Certiprof.png";

const PartnersCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  // Build partners array with imported images
  const partners = [
    { src: velascoImg, name: "Partner 1" },
    { src: eiaImg, name: "Partner 2" },
    { src: academiaImg, name: "Partner 3" },
    { src: eccouncilImg, name: "Partner 4" },
    { src: owaspImg, name: "Partner 5" },
    { src: stcImg, name: "Partner 6" },
    { src: certiprofImg, name: "Partner 7" },
  ];

  return (
    <section className="partners-carousel">
      <div className="partners-carousel__container">
        <h2 className="partners-carousel__title">
          Nuestros <span className="partners-carousel__highlight">Partners</span>
        </h2>
        <div className="partners-carousel__slider-container">
          <Slider {...settings}>
            {partners.map((partner, index) => (
              <div key={index} className="partners-carousel__slide-wrapper">
                <div className="partners-carousel__item">
                  <img
                    src={partner.src}
                    alt={`Logotipo de ${partner.name}`}
                    className="partners-carousel__img"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;
