import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-[1200px] mx-auto px-8 py-3 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-gray-900 transition-colors hover:text-blue-600 mr-5"
        >
          Páramo CTF
        </Link>
        <ul className="hidden md:flex gap-6">
          <li>
            <Link
              to="/about"
              className="text-gray-700 font-medium transition-colors hover:text-blue-600"
            >
              Quiénes Somos
            </Link>
          </li>
          <li>
            <Link
              to="/challenges"
              className="text-gray-700 font-medium transition-colors hover:text-blue-600"
            >
              Desafíos
            </Link>
          </li>
          <li>
            <Link
              to="/speaks"
              className="text-gray-700 font-medium transition-colors hover:text-blue-600"
            >
              Charlas
            </Link>
          </li>
          <li>
            <Link
              to="/registro"
              className="text-gray-700 font-medium transition-colors hover:text-blue-600"
            >
              Registro
            </Link>
          </li>
          <li>
            <Link
              to="/teams"
              className="text-gray-700 font-medium transition-colors hover:text-blue-600"
            >
              Equipos
            </Link>
          </li>
          <li>
            <Link
              to="/registro"
              className="bg-blue-500 text-white font-bold py-2 px-5 rounded-lg transition-colors hover:bg-blue-600"
            >
              Inscripción
            </Link>
          </li>
        </ul>
        <button
          className="md:hidden text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isOpen && (
        <div className="bg-white shadow-md absolute top-full left-0 w-full py-4 md:hidden">
          <ul className="flex flex-col items-center gap-4">
            <li>
              <Link
                to="/about"
                className="text-gray-700 font-medium transition-colors hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Quiénes Somos
              </Link>
            </li>
            <li>
              <Link
                to="/challenges"
                className="text-gray-700 font-medium transition-colors hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Desafíos
              </Link>
            </li>
            <li>
              <Link
                to="/speaks"
                className="text-gray-700 font-medium transition-colors hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Charlas
              </Link>
            </li>
            <li>
              <Link
                to="/registro"
                className="text-gray-700 font-medium transition-colors hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Registro
              </Link>
            </li>
            <li>
              <Link
                to="/teams"
                className="text-gray-700 font-medium transition-colors hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Equipos
              </Link>
            </li>
            <li>
              <Link
                to="/registro"
                className="bg-blue-500 text-white font-bold py-2 px-5 rounded-lg transition-colors hover:bg-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Inscripción
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
