import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import nist from '../assets/nist.png';
import game from '../assets/game.png';
import forense from '../assets/forense.png';
import international from '../assets/international.png';
import ransomware from '../assets/rasomware.png';
import delitos from '../assets/delitos.png';
import opensource from '../assets/opensource.png';
import start from '../assets/start.png';
import purple from '../assets/purple.png';

const TechnicalTalks = () => {
  const talks = [
    {
      title: 'Abierto, Seguro y Rentable: Ciberseguridad para Todos',
      speaker: 'Balam Sanchez Ibarra',
      date: '25 de abril, 2025',
      time: '8:00 a.m. - 9:00 a.m.',
      description:
        'Conoce cómo las tecnologías open source están siendo adoptadas como soluciones clave en la industria, con ejemplos concretos en ciberseguridad. Analizaremos cómo estas herramientas ofrecen flexibilidad, escalabilidad y oportunidades de monetización para empresas y profesionales.',
      image: opensource
    },
    {
      title: 'International Cybersecurity Challenge: Impulsando el talento',
      speaker: 'Janett Garcia',
      date: '25 de abril, 2025',
      time: '9:00 a.m. - 10:00 a.m.',
      description:
        'Descubre cómo el equipo LATAM ha consolidado su presencia en el International Cybersecurity Challenge, fomentando el talento joven en ciberseguridad a nivel mundial. Exploraremos las competencias, los logros y el impacto del ICC en la región.',
      image: international
    },
    {
      title: 'Cómo iniciar en la ciberseguridad',
      speaker: 'Christian Camilo Garzón',
      date: '25 de abril, 2025',
      time: '10:00 a.m. - 11:00 a.m.',
      description:
        'Una guía práctica para quienes desean adentrarse en el mundo de la ciberseguridad. Se explorarán rutas de aprendizaje, certificaciones clave, áreas de especialización y consejos para iniciarse en esta apasionante disciplina.',
      image: start
    },
    {
      title: 'Introducción al Game Hacking',
      speaker: 'Alejandro Monsalve',
      date: '25 de abril, 2025',
      time: '11:00 a.m. - 12:00 p.m.',
      description:
        'Exploración de conceptos fundamentales del funcionamiento de la memoria (Stack/Heap), introducción al Assembly básico y aplicación práctica de Game Hacking utilizando Cheat Engine.',
      image: game
    },
    {
      title: 'Computación forense digital y ciberdefensa',
      speaker: 'Dr. Juan Manuel Madrid',
      date: '25 de abril, 2025',
      time: '1:00 p.m. - 2:00 p.m.',
      description:
        'Explora la sinergia entre la computación forense digital y la arquitectura Zero Trust, comprendiendo cómo estas estrategias permiten la detección, análisis y mitigación eficaz de amenazas cibernéticas en infraestructuras críticas, fortaleciendo la seguridad y resiliencia organizacional.',
      image: forense
    },
    {
      title: 'Ransomware: ¿Desconectar el sistema o cómo responder ante un ataque?',
      speaker: 'Ángel Alamillo Diaz',
      date: '25 de abril, 2025',
      time: '2:00 p.m. - 3:00 p.m.',
      description:
        'Analizaremos en profundidad el impacto del ransomware, desde su evolución y las tácticas de ataque más sofisticadas hasta las metodologías empleadas por los atacantes para maximizar su alcance. Exploraremos estrategias avanzadas de respuesta, negociación y mitigación.',
      image: ransomware
    },
    {
      title: 'Principios de seguridad y regulaciones en protección de datos',
      speaker: 'MSc Arean Velasco',
      date: '25 de abril, 2025',
      time: '3:00 p.m. - 4:00 p.m.',
      description:
        'Explora los principios fundamentales de seguridad y las regulaciones clave en protección de datos, desde GDPR y CCPA hasta normativas latinoamericanas. Analizaremos su impacto en la ciberseguridad y las mejores prácticas para el cumplimiento legal.',
      image: delitos
    },
    {
      title: 'Gestión y respuesta a incidentes de seguridad',
      speaker: 'Dr. Enrique Santiago Chinchilla',
      date: '25 de abril, 2025',
      time: '4:00 p.m. - 5:00 p.m.',
      description:
        'Enfoques estratégicos y técnicos para la respuesta a incidentes de ciberseguridad, abarcando metodologías de identificación, contención y mitigación de brechas de seguridad, junto con procedimientos de análisis para evaluar el impacto y prevenir futuras vulnerabilidades.',
      image: nist
    },
    {
      title: 'Purple Team: Inteligencia ofensiva y defensa integrada',
      speaker: 'Dennis Patrick Juilland Prada',
      date: '25 de abril, 2025',
      time: '5:00 p.m. - 6:00 p.m.',
      description:
        'Panorama actual del Purple Team como enfoque integral en la ciberseguridad moderna. Se abordará cómo se combinan las capacidades ofensivas (Red Team) con la visión defensiva (Blue Team) para mejorar la detección, respuesta y resiliencia organizacional ante ciberataques.',
      image: purple
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 bg-gray-100">
      <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-12">Charlas Técnicas de Ciberseguridad</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {talks.map((talk, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-2xl hover:shadow-3xl transform transition duration-300 hover:scale-105"
          >
            <img
              src={talk.image}
              alt={talk.title}
              className="w-full h-52 object-cover rounded-t-3xl"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{talk.title}</h2>
              <p className="text-gray-600 mb-1">
                {talk.date} - {talk.time}
              </p>
              <p className="text-gray-700 mb-4">{talk.description}</p>
              <p className="text-sm font-semibold text-gray-800">
                Ponente: <span className="text-indigo-600">{talk.speaker}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalTalks;