import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  // Fecha del evento: 24 de abril de 2025
  const eventDate = new Date("2025-04-24T00:00:00").getTime();

  // Calcula el tiempo restante
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = eventDate - now;
    if (difference <= 0) return { dias: 0, horas: 0, minutos: 0, segundos: 0 };

    const dias = Math.floor(difference / (1000 * 60 * 60 * 24));
    const horas = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((difference % (1000 * 60)) / 1000);

    return { dias, horas, minutos, segundos };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex space-x-6 justify-center">
      <div className="flex flex-col items-center px-3 py-2 bg-blue-100 rounded-lg shadow-md">
        <span className="text-4xl font-extrabold text-blue-700">{timeLeft.dias}</span>
        <span className="uppercase text-xs font-semibold text-blue-500">Días</span>
      </div>
      <div className="flex flex-col items-center px-3 py-2 bg-blue-100 rounded-lg shadow-md">
        <span className="text-4xl font-extrabold text-blue-700">{timeLeft.horas}</span>
        <span className="uppercase text-xs font-semibold text-blue-500">Horas</span>
      </div>
      <div className="flex flex-col items-center px-3 py-2 bg-blue-100 rounded-lg shadow-md">
        <span className="text-4xl font-extrabold text-blue-700">{timeLeft.minutos}</span>
        <span className="uppercase text-xs font-semibold text-blue-500">Minutos</span>
      </div>
      <div className="flex flex-col items-center px-3 py-2 bg-blue-100 rounded-lg shadow-md">
        <span className="text-4xl font-extrabold text-blue-700">{timeLeft.segundos}</span>
        <span className="uppercase text-xs font-semibold text-blue-500">Segundos</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
