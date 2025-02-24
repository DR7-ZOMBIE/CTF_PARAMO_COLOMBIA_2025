import React from "react";
import "../styles/Footer.css";  // Importa el CSS del Footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">
          © 2025{" "}
          <span className="footer__highlight">
            Academia de Ciberseguridad
          </span>. 
          Todos los derechos reservados.
        </p>
        {/* <div className="footer__links">
          <a href="#" className="footer__link">Política de Privacidad</a>
          <span>|</span>
          <a href="#" className="footer__link">Términos de Servicio</a>
          <span>|</span>
          <a href="#" className="footer__link">Contacto</a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
