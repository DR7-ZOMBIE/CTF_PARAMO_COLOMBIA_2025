import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "../styles/Navbar.css";  // Importa el CSS personalizado

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          Páramo CTF
        </Link>
        <ul className="navbar__links">_
          <li>
            <Link to="/about" className="navbar__link">
              Quiénes Somos
            </Link>
          </li>
        <li>
            <a
                href="https://www.meetup.com/paramo-ctf-colombia-2025/events/306328322/?utm_medium=referral&utm_campaign=share-btn_savedevents_share_modal&utm_source=link"
                target="_blank"              // Abre en nueva pestaña (opcional)
                rel="noopener noreferrer"   // Recomendado por seguridad
                className="navbar__cta"
                onClick={() => setIsOpen(false)}
            >
                Inscripción
            </a>
        </li> 
        </ul>
        <button
          className="navbar__mobile-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isOpen && (
        <div className="navbar__mobile-menu">
          <ul>
            <li>
              <Link
                to="/about"
                className="navbar__link"
                onClick={() => setIsOpen(false)}
              >
                Quiénes Somos
              </Link>
            </li>
            <li>
                <a
                    href="https://www.meetup.com/paramo-ctf-colombia-2025/events/306328322/?utm_medium=referral&utm_campaign=share-btn_savedevents_share_modal&utm_source=link"
                    target="_blank"              // Abre en nueva pestaña (opcional)
                    rel="noopener noreferrer"   // Recomendado por seguridad
                    className="navbar__cta"
                    onClick={() => setIsOpen(false)}
                >
                    Inscripción
                </a>
            </li> 
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
