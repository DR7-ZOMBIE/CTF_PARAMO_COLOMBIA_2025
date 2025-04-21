import React from 'react';

const categories = [
  {
    title: 'Explotación Web',
    description:
      'Identificación y explotación de vulnerabilidades en aplicaciones web para demostrar cómo los atacantes inyectan código malicioso y acceden a datos sensibles de usuarios.',
    borderColor: 'border-blue-400'
  },
  {
    title: 'Forense Digital',
    description:
      'Análisis estructurado de evidencias digitales (tráfico de red, imágenes de disco y memoria) para reconstruir incidentes de seguridad y extraer información relevante.',
    borderColor: 'border-green-400'
  },
  {
    title: 'Explotación en Servidor',
    description:
      'Explotación de configuraciones y servicios de servidor para escalar privilegios y demostrar los riesgos de entornos mal configurados.',
    borderColor: 'border-red-400'
  },
  {
    title: 'Ingeniería Inversa',
    description:
      'Descompilación y análisis de binarios y firmware para entender la lógica interna, revelar protecciones y extraer secretos ocultos.',
    borderColor: 'border-purple-400'
  },
  {
    title: 'OSINT',
    description:
      'Recolección y correlación de información pública (redes sociales, DNS, metadatos) para mapear infraestructuras y perfilar objetivos.',
    borderColor: 'border-yellow-400'
  },
  {
    title: 'Criptografía',
    description:
      'Análisis y ruptura de esquemas criptográficos (simétricos y asimétricos), así como técnicas de esteganografía para exponer datos ocultos.',
    borderColor: 'border-indigo-400'
  },
];

const ChallengesOverview = () => (
  <div className="max-w-6xl mx-auto px-4 pt-24 pb-12">
    <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-16">
      Visión General de Retos
    </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {categories.map((cat) => (
        <div
          key={cat.title}
          className={`bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl border-t-4 ${cat.borderColor} transition-all transform hover:-translate-y-3 hover:shadow-2xl`}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {cat.title}
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            {cat.description}
          </p>
        </div>
      ))}
    </div>

    {/* Flag del evento */}
    <div className="mt-16 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Flag del evento</h2>
      <div className="mx-auto max-w-lg inline-block bg-white border border-gray-300 rounded-lg px-6 py-4 text-lg font-mono text-blue-600 shadow-md break-all">
        CTF{'{4e5e494fa316ffc82b8252b23524f1433639858267d641c1217059dc4403e045}'}
      </div>
    </div>
  </div>
);

export default ChallengesOverview;