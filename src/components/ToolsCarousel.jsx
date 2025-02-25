import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Importamos las imágenes de las herramientas
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
    <section className="bg-[#f8f9fa] py-12">
      <div className="max-w-[1024px] mx-auto px-4 text-center">
        <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold text-gray-800 mb-8">
          Herramientas que deberás utilizar!!!
        </h2>
        <div className="relative overflow-hidden">
          <Slider {...settings}>
            {tools.map((tool, index) => (
              <div key={index} className="flex justify-center">
                <div className="bg-white p-4 rounded shadow-md w-32 h-32 md:w-40 md:h-40 mx-auto flex items-center justify-center">
                  <img
                    src={tool.src}
                    alt={`Logo de ${tool.name}`}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 ease-in-out hover:scale-105"
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
