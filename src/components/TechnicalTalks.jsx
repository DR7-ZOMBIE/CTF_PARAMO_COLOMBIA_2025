import React from 'react';

const TechnicalTalks = () => {
  const talks = [
    {
      "title": "Computación Forense Digital y Ciberdefensa",
      "speaker": "Dr. Juan Manuel Madrid",
      "date": "25 de abril, 2025",
      "description": "Descubre cómo la computación forense digital y la arquitectura Zero Trust se combinan para detectar, analizar y mitigar amenazas cibernéticas en infraestructuras críticas."
    },
    {
      "title": "International Cybersecurity Challenge: Impulsando el Talento Latinoamericano",
      "speaker": "Janett Garcia",
      "date": "25 de abril, 2025",
      "description": "Descubre cómo el equipo LATAM ha consolidado su presencia en el International Cybersecurity Challenge, fomentando el talento joven en ciberseguridad a nivel mundial. Exploraremos las competencias, los logros y el impacto del ICC en la región."
    },
    {
      "title": "Principios de Seguridad y Regulaciones en Protección de Datos",
      "speaker": "MSc Arean Velasco",
      "date": "25 de abril, 2025",
      "description": "Explora los principios fundamentales de seguridad y las regulaciones clave en protección de datos, desde GDPR y CCPA hasta normativas latinoamericanas. Analizaremos su impacto en la ciberseguridad y las mejores prácticas para el cumplimiento legal."
    },
    {
      "title": "Amenazas Emergentes de Ciberseguridad",
      "speaker": "MSc Dennis Patrick Juilland Prada",
      "date": "25 de abril, 2025",
      "description": "Un análisis profundo sobre las amenazas emergentes en ciberseguridad y su impacto. Exploraremos tácticas avanzadas utilizadas por atacantes, las vulnerabilidades más recientes y estrategias efectivas para proteger servicios y datos críticos."
    },
    {
      title: "Respuesta a Incidentes y Forense Digital",
      speaker: "Dr. Enrique Santiago Chinchilla",
      date: "25 de abril, 2025",
      description:
        "Técnicas de respuesta a incidentes y análisis forense para identificar, contener y remediar brechas de seguridad.",
    },
    {
      title: "Rasomware: Jalar el cable o cómo actuar?",
      speaker: "Ángel Alamillo",
      date: "25 de abril, 2025",
      description:
        "Exploraremos el impacto del ransomware, desde su evolución hasta las tácticas de ataque más sofisticadas. Analizaremos estrategias de respuesta, negociación y mitigación para minimizar daños y proteger activos críticos.",
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
