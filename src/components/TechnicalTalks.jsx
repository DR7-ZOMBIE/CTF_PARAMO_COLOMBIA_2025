import React from 'react';

const TechnicalTalks = () => {
  const talks = [
    {
      "title": "Computación forense digital y ciberdefensa",
      "speaker": "Dr. Juan Manuel Madrid",
      "date": "25 de abril, 2025",
      "description": "Explora la sinergia entre la computación forense digital y la arquitectura Zero Trust, comprendiendo cómo estas estrategias permiten la detección, análisis y mitigación eficaz de amenazas cibernéticas en infraestructuras críticas, fortaleciendo la seguridad y resiliencia organizacional."
    },
    {
      "title": "International Cybersecurity Challenge: Impulsando el talento",
      "speaker": "Janett Garcia",
      "date": "25 de abril, 2025",
      "description": "Descubre cómo el equipo LATAM ha consolidado su presencia en el International Cybersecurity Challenge, fomentando el talento joven en ciberseguridad a nivel mundial. Exploraremos las competencias, los logros y el impacto del ICC en la región."
    },
    {
      "title": "Principios de seguridad y regulaciones en protección de datos",
      "speaker": "MSc Arean Velasco",
      "date": "25 de abril, 2025",
      "description": "Explora los principios fundamentales de seguridad y las regulaciones clave en protección de datos, desde GDPR y CCPA hasta normativas latinoamericanas. Analizaremos su impacto en la ciberseguridad y las mejores prácticas para el cumplimiento legal."
    },
    {
      "title": "Amenazas emergentes de ciberseguridad",
      "speaker": "MSc Dennis Patrick Juilland Prada",
      "date": "25 de abril, 2025",
      "description": "Un análisis profundo sobre las amenazas emergentes en ciberseguridad y su impacto. Exploraremos tácticas avanzadas utilizadas por atacantes, las vulnerabilidades más recientes y estrategias efectivas para proteger servicios y datos críticos."
    },
    {
      title: "Gestión y respuesta a incidentes de seguridad",
      speaker: "Dr. Enrique Santiago Chinchilla",
      date: "25 de abril, 2025",
      description:
        "Enfoques estratégicos y técnicos para la respuesta a incidentes de ciberseguridad, abarcando metodologías de identificación, contención y mitigación de brechas de seguridad, junto con procedimientos de análisis para evaluar el impacto y prevenir futuras vulnerabilidades.",
    },
    {
      title: "Ransomware: ¿Desconectar el sistema o cómo responder ante un ataque?",
      speaker: "Ángel Alamillo",
      date: "25 de abril, 2025",
      description:
        "Analizaremos en profundidad el impacto del ransomware, desde su evolución y las tácticas de ataque más sofisticadas hasta las metodologías empleadas por los atacantes para maximizar su alcance. Exploraremos estrategias avanzadas de respuesta, negociación y mitigación.",
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
