// src/components/EventContext.jsx
import React from 'react';
import "../styles/EventContext.css"; // Importa el CSS para EventContext

const EventContext = () => {
  return (
    <section className="event-context">
      <h2 className="event-context__subtitle">Plan de Trabajo y Visión 2025</h2>
      <article className="event-context__content">
        <p>
          En el corazón de nuestros majestuosos páramos, símbolo de resiliencia y patrimonio natural, se forja la esencia de Páramo CTF Colombia, 
          el evento insignia que transforma la pasión por la ciberseguridad en una experiencia única. Este plan de trabajo para el 2025 impulsa 
          la innovación tecnológica y la colaboración entre instituciones académicas y del sector privado, reuniendo a 100 a 500 participantes en cada 
          competencia para poner a prueba sus habilidades en entornos reales.
        </p>
        <p>
          Liderado por la Academia de Ciberseguridad, y con la colaboración de la Escuela de Ingeniería de Antioquia, la Universidad EAFIT y 
          VELLASCO & CALLE, este proyecto estratégico fortalece las capacidades técnicas y fomenta la unión entre universidades y empresas líderes. 
          Con 50 retos que abarcan tanto análisis forense como hacking ético, se garantiza una experiencia sin restricciones de red, gracias a la 
          infraestructura de una universidad anfitriona, permitiendo a los equipos enfrentarse a desafíos que simulan escenarios laborales reales.
        </p>
        <p>
          Además, se entregarán reconocimientos en forma de merchandising exclusivo y certificaciones avaladas por la industria, potenciando el perfil 
          profesional de los participantes y consolidando un ecosistema nacional de ciberseguridad. Este ambicioso plan no solo busca transformar el 
          panorama tecnológico de Colombia, sino también inspirar a futuras generaciones a liderar la defensa digital en un mundo cada vez más conectado.
        </p>
      </article>
    </section>
  );
};

export default EventContext;
