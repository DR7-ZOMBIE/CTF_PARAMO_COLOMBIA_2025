import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 text-center mt-10 border-t border-gray-200">
      <div className="w-full max-w-[1200px] mx-auto px-4">
        <p className="text-sm md:text-base">
          © 2025{" "}
          <span className="font-semibold text-blue-500">
            Academia de Ciberseguridad
          </span>
          . Todos los derechos reservados.
        </p>
        {/*
        <div className="mt-3 flex justify-center gap-4">
          <a
            href="#"
            className="font-medium transition-colors duration-200 ease-in-out hover:text-blue-500"
          >
            Política de Privacidad
          </a>
          <span>|</span>
          <a
            href="#"
            className="font-medium transition-colors duration-200 ease-in-out hover:text-blue-500"
          >
            Términos de Servicio
          </a>
          <span>|</span>
          <a
            href="#"
            className="font-medium transition-colors duration-200 ease-in-out hover:text-blue-500"
          >
            Contacto
          </a>
        </div>
        */}
      </div>
    </footer>
  );
};

export default Footer;
