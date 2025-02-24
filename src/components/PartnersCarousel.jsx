import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/PartnersCarousel.css";  // Importa el CSS personalizado

const PartnersCarousel = () => {
  // Configuración del carrusel
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

  // Lista de imágenes de los partners
  const partners = [
    { src: "src/assets/Velasco.png", name: "Partner 1" },
    { src: "src/assets/EIA_Logo.png", name: "Partner 2" },
    { src: "src/assets/Academia_Ciberseguridad_Logo.png", name: "Partner 3" },
    { src: "src/assets/EC-COUNCIL.png", name: "Partner 4" },
    { src: "src/assets/OWASP_black_logo.svg", name: "Partner 5" },
    { src: "src/assets/STC B1N cg.png", name: "Partner 6" },
    { src: "src/assets/Certiprof.png", name: "Partner 7" },
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
