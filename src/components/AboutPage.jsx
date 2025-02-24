// src/components/AboutPage.jsx
import React from "react";
import "../styles/AboutPage.css"; // Importa tus estilos
import ToolsCarousel from "./ToolsCarousel";

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Sección "hero" en la parte superior */}
      <section className="about-page__hero">
        <p className="about-page__subtitle">
          Páramo CTF Colombia, mucho más que un evento de ciberseguridad.
        </p>
      </section>

      {/* Contenido principal (texto) */}
      <section className="about-page__content">
        <p>
          Páramo CTF Colombia es la convergencia de tradición, innovación y compromiso
          con el futuro digital de nuestro país. Inspirados en la majestuosidad de
          nuestros páramos, este desafío reúne a expertos, estudiantes y entusiastas en
          un espacio donde el conocimiento se transforma en acción y la pasión por la
          seguridad informática se convierte en una experiencia transformadora.
        </p>
        <p>
          Con una planificación meticulosa y la colaboración de las principales
          instituciones académicas y del sector privado, nuestro evento impulsa el
          talento local y establece nuevas referencias en defensa digital. Enfrenta 50
          retos enfocados en la ciberdefensa y hacking ético diseñados para simular escenarios 
          reales y sumérgete en un ambiente donde la excelencia y el espíritu colaborativo marcan 
          el camino hacia el futuro de la ciberseguridad.
        </p>
      </section>

      {/* Carrusel de herramientas */}
      <section className="about-page__tools"> 
        <ToolsCarousel />
      </section>
    </div>
  );
};

export default AboutPage;
