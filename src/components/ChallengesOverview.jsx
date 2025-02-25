import React from 'react';

const ChallengesOverview = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-5xl m-5 font-extrabold text-center text-gray-800 mb-12">
        Desafíos del evento
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 1. Explotación Web */}
        <section className="bg-white p-6 rounded-lg shadow hover:shadow-lg border-t-4 border-blue-500 transition-transform transform hover:-translate-y-1">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Explotación Web (15 retos)
          </h2>
          <ul className="list-disc space-y-2 text-gray-700 text-sm">
            <li>XSS (Cross-Site Scripting)</li>
            <li>SQL Injection (SQLi)</li>
            <li>SSRF (Server-Side Request Forgery)</li>
            <li>CSRF (Cross-Site Request Forgery)</li>
            <li>Deserialization</li>
            <li>File Upload Vulnerability</li>
            <li>Command Injection</li>
            <li>File Inclusion</li>
            <li>Web Shell</li>
            <li>Remote Code Execution (RCE)</li>
            <li>Open Redirect</li>
            <li>HTTP Parameter Pollution</li>
            <li>XML External Entity (XXE)</li>
            <li>NoSQL Injection</li>
            <li>Server-Side Template Injection</li>
          </ul>
        </section>

        {/* 2. Forense Digital */}
        <section className="bg-white p-6 rounded-lg shadow hover:shadow-lg border-t-4 border-green-500 transition-transform transform hover:-translate-y-1">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            Forense Digital (14 retos)
          </h2>
          <ul className="list-disc space-y-2 text-gray-700 text-sm">
            <li>Análisis de archivos .pcap con Wireshark</li>
            <li>Extracción de malware de una imagen usando Volatility</li>
            <li>Análisis de imagen de disco con Autopsy</li>
            <li>Recuperación de información perdida en una USB con Sleuthkit</li>
            <li>Cargar y analizar un archivo encriptado con Veracrypt</li>
            <li>Análisis de logs de firewall para encontrar una flag oculta</li>
            <li>Análisis de logs de servidor Apache para flag oculta</li>
            <li>Análisis de memoria RAM para detectar actividad sospechosa</li>
            <li>Identificación de patrones en registros de sistema (syslog)</li>
            <li>Análisis de tráfico de red con Tcpdump</li>
            <li>Reconstrucción de sesiones de red</li>
            <li>Uso de herramientas forenses (p.ej., FTK Imager)</li>
            <li>Análisis de metadatos en archivos</li>
            <li>Extracción de información de discos duros dañados</li>
          </ul>
        </section>

        {/* 3. Explotación en Servidor */}
        <section className="bg-white p-6 rounded-lg shadow hover:shadow-lg border-t-4 border-red-500 transition-transform transform hover:-translate-y-1">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Explotación en Servidor (6 retos)
          </h2>
          <ul className="list-disc space-y-2 text-gray-700 text-sm">
            <li>Escalada de privilegios mediante permisos SUID</li>
            <li>Explotación de vulnerabilidades en configuraciones de sudo</li>
            <li>Uso de técnicas de bypass de restricciones de contenedor</li>
            <li>Explotación de servicios desactualizados para escalada</li>
            <li>Manipulación de variables de entorno para privilegios</li>
            <li>Ataque a servicios mal configurados para escalada a root</li>
          </ul>
        </section>

        {/* 4. Ingeniería Reversa */}
        <section className="bg-white p-6 rounded-lg shadow hover:shadow-lg border-t-4 border-purple-500 transition-transform transform hover:-translate-y-1">
          <h2 className="text-2xl font-bold text-purple-600 mb-4">
            Ingeniería Reversa (5 retos)
          </h2>
          <ul className="list-disc space-y-2 text-gray-700 text-sm">
            <li>Análisis de binario simple en Ghidra para extraer flag</li>
            <li>Descompilación y análisis de código ofuscado</li>
            <li>Análisis de firmware con Ghidra</li>
            <li>Reverse de un ejecutable con técnicas anti-debugging</li>
            <li>Extracción de flag de un plugin o extensión en Ghidra</li>
          </ul>
        </section>

        {/* 5. OSINT */}
        <section className="bg-white p-6 rounded-lg shadow hover:shadow-lg border-t-4 border-yellow-500 transition-transform transform hover:-translate-y-1">
          <h2 className="text-2xl font-bold text-yellow-600 mb-4">
            OSINT (5 retos)
          </h2>
          <ul className="list-disc space-y-2 text-gray-700 text-sm">
            <li>Rastreo de actividad en redes sociales para hallar información oculta</li>
            <li>Investigación de metadatos en imágenes públicas</li>
            <li>Análisis de registros DNS para identificar infraestructura</li>
            <li>Uso de motores de búsqueda especializados para encontrar vulnerabilidades</li>
            <li>Recopilación de información a partir de foros y bases de datos públicas</li>
          </ul>
        </section>

        {/* 6. Criptografía & Esteganografía */}
        <section className="bg-white p-6 rounded-lg shadow hover:shadow-lg border-t-4 border-indigo-500 transition-transform transform hover:-translate-y-1">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">
            Criptografía & Esteganografía (5 retos)
          </h2>
          <ul className="list-disc space-y-2 text-gray-700 text-sm">
            <li>Criptoanálisis de cifrado simétrico</li>
            <li>Descodificación de mensajes en base64 y hexadecimal</li>
            <li>Esteganografía en imágenes para ocultar mensajes</li>
            <li>Análisis de mensajes cifrados con RSA</li>
            <li>Decodificación de mensajes ocultos en archivos de audio</li>
          </ul>
        </section>
      </div>

      {/* Bandera del Evento */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Flag del evento
        </h2>
        <p className="inline-block bg-gray-100 border border-gray-300 rounded px-6 py-3 text-lg font-mono text-blue-600">
          CTF{'{4e5e494fa316ffc82b8252b23524f1433639858267d641c1217059dc4403e045}'}
        </p>
      </div>
    </div>
  );
};

export default ChallengesOverview;
