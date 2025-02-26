import React, { useState } from "react";
import qrWhatsapp from "../assets/qr-whatsapp.png"; // Asegúrate de que la ruta sea correcta

const Footer = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <>
      <footer className="bg-gray-100 text-gray-700 py-6 text-center mt-10 border-t border-gray-200">
        <div className="w-full max-w-[1200px] mx-auto px-4">
          <p className="text-sm md:text-base">
            © 2025{" "}
            <span className="font-semibold text-blue-500">
              Academia de Ciberseguridad
            </span>
            . Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* Botón flotante fijo en la esquina inferior derecha */}
      <button 
        onClick={openContact}
        className="fixed bottom-8 right-8 z-50 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300"
      >
        Contáctanos
      </button>

      {/* Modal de Contacto */}
      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Fondo semitransparente */}
          <div className="absolute inset-0 bg-black opacity-50" onClick={closeContact}></div>
          {/* Contenido del modal */}
          <div className="bg-white rounded-lg p-8 max-w-md mx-auto z-10 shadow-2xl">
            <h2 className="text-2xl font-bold mb-4 text-center">Contáctanos</h2>
            <div className="flex flex-col items-center">
              <img 
                src={qrWhatsapp} 
                alt="QR de WhatsApp para contacto" 
                className="w-48 h-48 mb-4"
              />
              <p className="text-lg text-gray-700 mb-2">
                WhatsApp: <strong>+57 3215085296</strong>
              </p>
              <p className="text-lg text-gray-700 break-words text-center">
                Correo: <strong>dennis.prada@academia-ciberseguridad.com</strong>
              </p>
            </div>
            <button 
              onClick={closeContact}
              className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
