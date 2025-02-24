// src/components/ToolsCarousel.jsx
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles/ToolsCarousel.css"; // Importa el CSS para ToolsCarousel

const ToolsCarousel = () => {
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

  // Lista de imágenes de herramientas (ejemplo)
  const tools = [
    { src: 'src/assets/Burpsuite.png', name: 'Burp Suite' },
    { src: 'src/assets/Metasploit.png', name: 'Metasploit' },
    { src: 'src/assets/Wireshark.png', name: 'Wireshark' },
    { src: 'src/assets/John.png', name: 'John the Ripper' },
    { src: 'src/assets/nmap.png', name: 'Nmap' },
    { src: 'src/assets/ghidra.png', name: 'Ghidra' },
    { src: 'src/assets/Veracrypt.png', name: 'Veracrypt' },
    { src: 'src/assets/Autopsy.png', name: 'Autopsy' },
  ];

  return (
    <section className="tools-carousel">
      <div className="tools-carousel__container">
        <h2 className="tools-carousel__title">Herramientas que deberás utilizar!!!</h2>
        <div className="tools-carousel__slider-container">
          <Slider {...settings}>
            {tools.map((tool, index) => (
              <div key={index} className="tools-carousel__slide">
                <div className="tools-carousel__item">
                  <img
                    src={tool.src}
                    alt={`Logo de ${tool.name}`}
                    className="tools-carousel__img"
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

export default ToolsCarousel;
