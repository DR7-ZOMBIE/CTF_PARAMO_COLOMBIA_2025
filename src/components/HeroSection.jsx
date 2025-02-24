import React from "react";
import "../styles/HeroSection.css"; // Importamos el CSS personalizado
import logoParamoCTF from "../assets/Logo_Paramo_CTF.png";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            Bienvenido a{" "}
            <span className="hero__highlight">Páramo CTF Colombia</span>
          </h1>
          <p className="hero__description">
            En el corazón de nuestros majestuosos páramos, símbolo de resiliencia y patrimonio natural, se forja la esencia de Páramo CTF Colombia, 
            el evento insignia que transforma la pasión por la ciberseguridad en una experiencia única. Este desafío, que reúne a las mentes más brillantes y 
            creativas del país, no solo impulsa la innovación tecnológica, sino que también rinde homenaje a la herencia y belleza de nuestros paisajes emblemáticos. 
            Únete a esta competencia de captura la bandera y forma parte de un movimiento que integra tradición, tecnología y compromiso, posicionando a Colombia como líder 
            en la defensa digital y la excelencia en ciberseguridad. El evento definitivo para apasionados de la ciberseguridad. Demuestra tus habilidades y compite con los mejores en 
            un entorno desafiante.
          </p>
          <div>
            <a href="https://www.meetup.com/paramo-ctf-colombia-2025/events/306328322/?utm_medium=referral&utm_campaign=share-btn_savedevents_share_modal&utm_source=link" className="hero__cta">
              Regístrate ahora
            </a>
          </div>
        </div>
        <div className="hero__logo">
          <img src={logoParamoCTF} alt="Logo de Páramo CTF Colombia" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
