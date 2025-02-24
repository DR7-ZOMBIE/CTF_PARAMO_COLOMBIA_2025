// src/components/ToolsCarousel.jsx

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles/ToolsCarousel.css";

// Import images using relative paths (from src/components/ to src/assets/)
import burpsuiteImg from "../assets/Burpsuite.png";
import metasploitImg from "../assets/Metasploit.png";
import wiresharkImg from "../assets/Wireshark.png";
import johnImg from "../assets/John.png";
import nmapImg from "../assets/nmap.png";
import ghidraImg from "../assets/ghidra.png";
import veracryptImg from "../assets/Veracrypt.png";
import autopsyImg from "../assets/Autopsy.png";

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

  const tools = [
    { src: burpsuiteImg, name: 'Burp Suite' },
    { src: metasploitImg, name: 'Metasploit' },
    { src: wiresharkImg, name: 'Wireshark' },
    { src: johnImg, name: 'John the Ripper' },
    { src: nmapImg, name: 'Nmap' },
    { src: ghidraImg, name: 'Ghidra' },
    { src: veracryptImg, name: 'Veracrypt' },
    { src: autopsyImg, name: 'Autopsy' },
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
