import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const TeamsList = ({ teams }) => {
  // Determinamos cuántas tarjetas mostrar según la cantidad de equipos
  const slidesToShow = teams.length < 3 ? teams.length : 3;
  
  // Array de clases de colores para los nombres
  const colorClasses = [
    "text-indigo-600", 
    "text-blue-600", 
    "text-red-600", 
    "text-green-600", 
    "text-purple-600", 
    "text-orange-600"
  ];
  
  const settings = {
    dots: true,
    infinite: teams.length > slidesToShow,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: teams.length < 2 ? teams.length : 2,
          slidesToScroll: 1,
          infinite: teams.length > 2,
          dots: true
        }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1, dots: true }
      }
    ]
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl m-10 font-extrabold text-center text-gray-800 mb-6">
          Equipos registrados
        </h2>
        {teams.length === 0 ? (
          <p className="text-center text-lg text-gray-600 mt-10">
            No hay equipos registrados aún.
          </p>
        ) : (
          <Slider {...settings}>
            {teams.map((team, index) => (
              <div key={index} className="px-4">
                <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center min-h-[16rem] transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                  {team.teamImage && (
                    <img
                      src={team.teamImage}
                      alt={team.teamName}
                      className="w-24 h-24 object-cover rounded-full border-2 border-gray-200 mb-4"
                    />
                  )}
                  <h3 className={`text-2xl font-bold text-center ${colorClasses[index % colorClasses.length]}`}>
                    {team.teamName}
                  </h3>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default TeamsList;
