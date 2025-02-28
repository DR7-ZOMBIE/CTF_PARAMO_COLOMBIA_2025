import React from 'react';
import { Link } from "react-router-dom";
import logoParamoCTF from "../assets/Logo_Paramo_CTF.png";
import CountdownTimer from "./CountdownTimer"; // Componente del contador

const HeroSection = () => {
  return (
    <>
      {/* Estilos para la animación de colores */}
      <style>
        {`
          @keyframes colorCycle {
            0% { color: #FCD116; }      /* Amarillo */
            33% { color: #003893; }     /* Azul */
            66% { color: #CE1126; }     /* Rojo */
            100% { color: #FCD116; }
          }
          .color-cycle {
            animation: colorCycle 6s infinite;
          }
        `}
      </style>

      <section className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
        {/* Fondo decorativo opcional */}
        <div className="absolute inset-0 bg-pattern bg-no-repeat bg-center opacity-10 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Sección Izquierda: Texto y CTA */}
            <div className="flex-1 lg:pr-12 text-center lg:text-left">
              <h1 className="mb-6 font-extrabold text-5xl drop-shadow-lg">
                Bienvenido a <span className="color-cycle">Páramo CTF Colombia</span>
              </h1>
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                ¡Evento <strong className="text-gray-900">GRATUITO</strong> de Ciberseguridad 2025!<br className="hidden md:block" />
                Del <strong>24 al 26 de abril</strong> vive una experiencia única:
              </p>
              <p className="mb-8 text-gray-700 text-lg leading-relaxed">
                <strong>24 de abril:</strong> CTF de Ciberseguridad, donde pondrás a prueba tus habilidades.<br />
                <strong>25 de abril:</strong> Charlas técnicas de ciberseguridad impartidas por expertos.<br />
                <strong>26 de abril:</strong> Entrega de premios y reconocimientos.
              </p>
              <p className="mb-8 text-gray-700 text-lg leading-relaxed">
                Además, este evento es tu puerta de entrada a futuros desafíos: prepárate para el <strong>CyberSecurity Challenge</strong> en julio y para el <strong>ICC</strong> a final del año. 
                Conoce más en&nbsp;
                <a href="https://icclatinoamerica.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  ICC Latinoamérica
                </a>.
              </p>
              <div className="mb-8">
                <p className="text-xl text-gray-800 font-semibold">
                  ¡Forma tu equipo de <span className="text-blue-600">5 integrantes</span> y asegura tu lugar!
                </p>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <Link
                  to="/registro"
                  className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-xl transition transform hover:scale-105 hover:bg-blue-700"
                >
                  Regístrate ahora
                </Link>
                <p className="mt-2 text-sm text-red-600 font-bold uppercase tracking-wide">
                  ¡Cupos limitados!
                </p>
              </div>
            </div>
            {/* Sección Derecha: Logo y Tarjeta del Timer */}
            <div className="flex-1 mt-12 lg:mt-0 flex flex-col items-center">
              <img
                src={logoParamoCTF}
                alt="Logo de Páramo CTF Colombia - Evento Gratuito de Ciberseguridad 2025"
                className="w-80 h-80 object-cover rounded-full border-4 border-blue-500 drop-shadow-2xl mb-8 transform transition duration-300 hover:scale-110"
              />
              {/* Tarjeta del Contador */}
              <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-md rounded-xl p-6 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  Tiempo para el inicio
                </h3>
                <CountdownTimer />
              </div>
            </div>
          </div>
        </div>

        {/* Sección de Ubicación */}
        <div className="mt-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Ubicación del evento: <span className="text-blue-600">Escuela de Ingeniería de Antioquia (EIA)</span>
            </h2>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <iframe
                title="Ubicación de la Escuela de Ingeniería de Antioquia"
                src="https://maps.google.com/maps?q=6.157029,-75.517951&z=15&output=embed"
                className="w-full h-96 border-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
