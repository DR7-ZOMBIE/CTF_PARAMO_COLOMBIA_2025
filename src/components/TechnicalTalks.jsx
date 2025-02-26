import React from 'react';

const TechnicalTalks = () => {
  const talks = [
    {
      title: "Arquitectura Zero Trust en la era digital",
      speaker: "Dra. Ana Torres",
      date: "25 de abril, 2025",
      description:
        "Explora los principios y aplicaciones de la arquitectura Zero Trust para fortalecer la seguridad en entornos empresariales.",
    },
    {
      title: "Nuevas amenazas en ciberseguridad",
      speaker: "Dennis Patrick Juilland Prada",
      date: "25 de abril, 2025",
      description:
        "Análisis de las amenazas emergentes y estrategias para mitigar riesgos en infraestructuras críticas.",
    },
    {
      title: "Inteligencia artificial y seguridad",
      speaker: "María Rodríguez",
      date: "25 de abril, 2025",
      description:
        "Cómo la inteligencia artificial puede ayudar a detectar y prevenir ciberataques en tiempo real.",
    },
    {
      title: "Ciberdefensa en la nube",
      speaker: "Carlos Gómez",
      date: "25 de abril, 2025",
      description:
        "Estrategias para proteger servicios y datos en entornos cloud frente a ataques avanzados.",
    },
    {
      title: "Respuesta a incidentes y forense digital",
      speaker: "Lucía Fernández",
      date: "25 de abril, 2025",
      description:
        "Técnicas de respuesta a incidentes y análisis forense para identificar, contener y remediar brechas de seguridad.",
    },
    {
      title: "Ciberseguridad en el internet de las cosas",
      speaker: "Sofía Martínez",
      date: "25 de abril, 2025",
      description:
        "Explora cómo asegurar dispositivos IoT y proteger la infraestructura conectada frente a ciberataques.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
      <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-12">
        Charlas técnicas de ciberseguridad
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {talks.map((talk, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-4">
              <h2 className="text-xl font-bold text-white">{talk.title}</h2>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">{talk.date}</p>
              <p className="text-gray-700 mb-4">{talk.description}</p>
              <p className="text-sm font-semibold text-gray-800">
                Ponente: <span className="text-blue-600">{talk.speaker}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalTalks;
