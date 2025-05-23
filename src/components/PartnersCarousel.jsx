import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Importa las imágenes
import velascoImg from "../assets/Velasco.png";
import eiaImg from "../assets/EIA_Logo.png";
import academiaImg from "../assets/Academia_Ciberseguridad_Logo.png";
import eccouncilImg from "../assets/EC-COUNCIL.png";
import owaspImg from "../assets/OWASP_black_logo.svg";
import stcImg from "../assets/STC B1N cg.png";
import certiprofImg from "../assets/Certiprof.png";
import cybersecurityImg from "../assets/Cybersecurity.png";
import dsteam from "../assets/DSTEAM.webp";
import eafit from "../assets/eafit.jpg";
import mesa from "../assets/Mesa de trabajo 1.png"
import dragon from "../assets/Dragon.png"
import fluid from "../assets/fluid.png";
import netsecteam from "../assets/netsecteam.png";
import aligo from "../assets/Aligo.png";
import certjoin from "../assets/certjoin.png";

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

  const partners = [
    { src: velascoImg, name: "Partner 1" },
    { src: eiaImg, name: "Partner 2" },
    { src: academiaImg, name: "Partner 3" },
    { src: eccouncilImg, name: "Partner 4" },
    { src: owaspImg, name: "Partner 5" },
    { src: stcImg, name: "Partner 6" },
    { src: certiprofImg, name: "Partner 7" },
    { src: cybersecurityImg, name: "Partner 8" },
    { src: dsteam, name: "Partner 9" },
    { src: eafit, name: "Partner 10" },
    { src: mesa, name: "Partner 11"},
    { src: dragon, name: "Partner 12"},
    { src: fluid, name: "Partner 13"},
    { src: netsecteam, name: "Partner 14"},
    { src: aligo, name: "Partner 15"},
    { src: certjoin, name: "Partner 16"},
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-[1024px] mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Nuestros <span className="text-blue-500">Partners</span>
        </h2>
        <div className="relative overflow-hidden">
          <Slider {...settings}>
            {partners.map((partner, index) => (
              <div key={index} className="flex justify-center">
                <div className="bg-gray-50 p-4 rounded shadow-md w-32 h-32 md:w-40 md:h-40 mx-auto flex items-center justify-center">
                  <img
                    src={partner.src}
                    alt={`Logotipo de ${partner.name}`}
                    className="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-300 ease-in-out hover:scale-105"
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
