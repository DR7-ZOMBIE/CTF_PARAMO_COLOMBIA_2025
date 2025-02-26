import React from "react";
import ToolsCarousel from "./ToolsCarousel";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center w-full bg-gray-50">
      {/* Sección Hero con fondo degradado y patrón sutil */}
      <section className="w-full bg-gradient-to-r from-blue-100 to-white py-20 px-4 text-center relative overflow-hidden">
        {/* Fondo decorativo opcional: ajusta la ruta de la imagen */}
        <div className="absolute inset-0 opacity-20 bg-[url('/assets/hero-pattern.svg')] bg-no-repeat bg-center"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 drop-shadow-lg">
            Páramo CTF Colombia
          </h1>
          <p className="text-xl text-gray-700">
            Mucho más que un evento de ciberseguridad.
          </p>
        </div>
      </section>

      {/* Sección de Contenido Principal en tarjeta */}
      <section className="max-w-4xl mx-auto my-12 px-6 py-8 bg-white rounded-lg shadow-lg text-gray-700 leading-relaxed">
        <p className="mb-6">
          Páramo CTF Colombia es la convergencia de tradición, innovación y compromiso con el futuro digital de nuestro país.
          Inspirados en la majestuosidad de nuestros páramos, este desafío reúne a expertos, estudiantes y entusiastas en un espacio donde
          el conocimiento se transforma en acción y la pasión por la seguridad informática se convierte en una experiencia transformadora.
        </p>
        <p className="mb-6">
          Con una planificación meticulosa y la colaboración de las principales instituciones académicas y del sector privado, nuestro evento impulsa el
          talento local y establece nuevas referencias en defensa digital. Enfrenta 50 retos enfocados en la ciberdefensa y hacking ético diseñados para simular
          escenarios reales, sumergiéndote en un ambiente donde la excelencia y el espíritu colaborativo marcan el camino hacia el futuro de la ciberseguridad.
        </p>
      </section>

      {/* Sección del Carrusel de Herramientas */}
      <section className="w-full max-w-5xl mx-auto my-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Herramientas Destacadas
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-2xl">
          <ToolsCarousel />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
