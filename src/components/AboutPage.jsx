import React from "react";
import ToolsCarousel from "./ToolsCarousel";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Sección "hero" */}
      <section className="w-full bg-gradient-to-r from-[#eff6ff] via-white to-[#eff6ff] py-16 px-4 text-center mb-8">
        <p className="text-xl text-gray-600">
          Páramo CTF Colombia, mucho más que un evento de ciberseguridad.
        </p>
      </section>

      {/* Contenido principal */}
      <section className="max-w-[800px] mx-auto mb-12 px-4 text-gray-600 leading-relaxed text-justify">
        <p className="mb-6">
          Páramo CTF Colombia es la convergencia de tradición, innovación y compromiso
          con el futuro digital de nuestro país. Inspirados en la majestuosidad de
          nuestros páramos, este desafío reúne a expertos, estudiantes y entusiastas en
          un espacio donde el conocimiento se transforma en acción y la pasión por la
          seguridad informática se convierte en una experiencia transformadora.
        </p>
        <p className="mb-6">
          Con una planificación meticulosa y la colaboración de las principales
          instituciones académicas y del sector privado, nuestro evento impulsa el
          talento local y establece nuevas referencias en defensa digital. Enfrenta 50
          retos enfocados en la ciberdefensa y hacking ético diseñados para simular escenarios 
          reales y sumérgete en un ambiente donde la excelencia y el espíritu colaborativo marcan 
          el camino hacia el futuro de la ciberseguridad.
        </p>
      </section>

      {/* Carrusel de herramientas */}
      <section className="w-full max-w-[1024px] mx-auto mb-16 px-4 text-center">
        <ToolsCarousel />
      </section>
    </div>
  );
};

export default AboutPage;
