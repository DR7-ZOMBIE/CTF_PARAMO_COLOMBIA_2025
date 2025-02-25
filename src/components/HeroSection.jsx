import React from 'react';
import logoParamoCTF from "../assets/Logo_Paramo_CTF.png";

const HeroSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-r from-[#eff6ff] via-white to-[#eff6ff]">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left">
        {/* Texto y CTA */}
        <div className="flex-1 sm:pr-8">
          <h1 className="mb-4 font-extrabold leading-tight text-4xl sm:text-5xl text-gray-800">
            Bienvenido a <span className="text-blue-500">Páramo CTF Colombia</span>
          </h1>
          <p className="mb-8 text-black text-lg text-justify">
            ¡Evento <strong>GRATUITO</strong> de Ciberseguridad 2025! Del <strong>24 al 26 de abril</strong>, vive una experiencia única:
            <br /><br />
            <strong>24 de abril:</strong> Demuestra tus habilidades en un desafiante CTF con retos de ciberseguridad.
            <br />
            <strong>25 de abril:</strong> Asiste a charlas técnicas impartidas por expertos en el teatro de la Escuela de Ingeniería de Antioquia.
            <br />
            <strong>26 de abril:</strong> Celebra la entrega de premios: stickers, libros, certificaciones, busos y camisas.
            <br /><br />
            ¡No pierdas la oportunidad de formar parte del evento que posicionará a Colombia como líder en ciberseguridad!
          </p>
          <div>
            <a
              href="https://www.meetup.com/paramo-ctf-colombia-2025/events/306328322/?utm_medium=referral&utm_campaign=share-btn_savedevents_share_modal&utm_source=link"
              className="inline-block bg-blue-500 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 ease-in-out hover:bg-blue-600 hover:-translate-y-1"
            >
              Regístrate ahora
            </a>
          </div>
        </div>
        {/* Logo */}
        <div className="mt-8 max-w-[300px] sm:mt-0">
          <img
            src={logoParamoCTF}
            alt="Logo de Páramo CTF Colombia - Evento gratuito de ciberseguridad"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Sección del Mapa */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Ubicación del evento: Escuela de Ingeniería de Antioquia (EIA)
        </h2>
        <div className="w-290 h-64 sm:h-96 mx-auto rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Ubicación de la Escuela de Ingeniería de Antioquia"
            src="https://maps.google.com/maps?q=6.157029, -75.517951&z=15&output=embed"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
