import React, { useState } from 'react';

const ChallengesOverview = () => {
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const closeModal = () => setSelectedChallenge(null);

  // Listas de retos por categoría, cada uno con su explicación
  const exploitationWebChallenges = [
    { name: "XSS (Cross-Site Scripting)", explanation: "Permite inyectar código malicioso en el navegador del usuario, aprovechando la confianza del sitio web." },
    { name: "SQL Injection (SQLi)", explanation: "Manipula consultas SQL para acceder o modificar datos en la base de datos mediante inyección de código." },
    { name: "SSRF (Server-Side Request Forgery)", explanation: "Forza al servidor a realizar peticiones a recursos internos o externos, permitiendo el acceso a información restringida." },
    { name: "CSRF (Cross-Site Request Forgery)", explanation: "Ejecuta acciones no autorizadas en nombre de un usuario autenticado mediante peticiones forzadas." },
    { name: "Deserialization", explanation: "Explotación de la deserialización insegura para ejecutar código arbitrario en el servidor." },
    { name: "File Upload Vulnerability", explanation: "Permite subir archivos maliciosos al servidor, comprometiendo la integridad y seguridad del sistema." },
    { name: "Command Injection", explanation: "Inyecta comandos en el sistema operativo del servidor para ejecutar acciones no autorizadas." },
    { name: "File Inclusion", explanation: "Incluye archivos locales o remotos que pueden contener código malicioso, alterando el comportamiento de la aplicación." },
    { name: "Race Condition", explanation: "Aprovecha condiciones de carrera en procesos concurrentes para obtener acceso indebido o alterar resultados." },
    { name: "Prototype Pollution", explanation: "Modifica propiedades del prototipo de objetos en JavaScript, afectando el funcionamiento global de la aplicación." },
    { name: "Open Redirect", explanation: "Redirige a los usuarios a sitios externos maliciosos sin su consentimiento, facilitando ataques de phishing." },
    { name: "Business Logic Vulnerability", explanation: "Examina fallos en la lógica de negocio que permiten acciones no previstas y vulneran la seguridad de la aplicación." },
    { name: "XML External Entity (XXE)", explanation: "Exploita el procesamiento de XML para acceder a archivos o realizar ataques de denegación de servicio." },
    { name: "NoSQL Injection", explanation: "Manipula consultas en bases de datos NoSQL para acceder o modificar datos sin autorización." },
    { name: "Server-Side Template Injection", explanation: "Inyecta código malicioso en plantillas del lado del servidor, comprometiendo la integridad de la aplicación." },
  ];

  const forenseDigitalChallenges = [
    { name: "Análisis de archivos .pcap con Wireshark", explanation: "Utiliza Wireshark para capturar y analizar tráfico de red, identificando patrones sospechosos." },
    { name: "Extracción de malware de una imagen usando Volatility", explanation: "Extrae y analiza malware contenido en una imagen de memoria mediante Volatility." },
    { name: "Análisis de imagen de disco con Autopsy", explanation: "Examina una imagen de disco para recuperar evidencia forense utilizando Autopsy." },
    { name: "Recuperación forense de datos en una USB con Sleuthkit", explanation: "Recupera datos eliminados o corruptos de una USB usando herramientas forenses de Sleuthkit." },
    { name: "Cargar y analizar un archivo encriptado con Veracrypt", explanation: "Desmonta y analiza archivos encriptados mediante Veracrypt para extraer información oculta." },
    { name: "Análisis de logs de firewall para encontrar una flag oculta", explanation: "Examina registros de firewall en busca de patrones que revelen una flag oculta." },
    { name: "Análisis de logs de servidor Apache para flag oculta", explanation: "Analiza los registros de Apache para detectar actividades sospechosas y encontrar una flag." },
    { name: "Análisis de memoria RAM para detectar actividad sospechosa", explanation: "Revisa una imagen de memoria para identificar procesos maliciosos o datos comprometidos." },
    { name: "Identificación de patrones en registros del sistema (syslog)", explanation: "Busca patrones anómalos en los registros del sistema que puedan indicar incidentes de seguridad." },
    { name: "Análisis de tráfico de red con Tcpdump", explanation: "Utiliza Tcpdump para capturar y analizar tráfico en tiempo real, identificando potenciales amenazas." },
    { name: "Reconstrucción de sesiones de red", explanation: "Reconstruye la secuencia de eventos de una sesión de red para comprender el ataque." },
    { name: "Extracción y análisis forense de datos de dispositivos móviles", explanation: "Extrae datos forenses de un dispositivo móvil para analizar evidencias y encontrar pistas." },
    { name: "Análisis de metadatos en archivos", explanation: "Examina metadatos de archivos para descubrir información oculta o manipulada." },
    { name: "Extracción de información de discos duros dañados", explanation: "Recupera datos de discos duros comprometidos o dañados, extrayendo información relevante." },
  ];

  const exploitationServerChallenges = [
    { name: "Escalada de privilegios mediante permisos SUID", explanation: "Aprovecha archivos SUID en sistemas Unix para obtener privilegios elevados." },
    { name: "Explotación de vulnerabilidades en configuraciones de sudo", explanation: "Utiliza configuraciones erróneas en sudo para acceder a funciones privilegiadas." },
    { name: "Técnicas de bypass de restricciones en entornos de contenedores", explanation: "Rompe barreras de seguridad en contenedores para acceder a recursos del sistema." },
    { name: "Explotación de servicios obsoletos para escalada de privilegios", explanation: "Aprovecha vulnerabilidades en servicios desactualizados para escalar privilegios." },
    { name: "Manipulación de variables de entorno para obtener privilegios", explanation: "Modifica variables de entorno para forzar la ejecución de acciones privilegiadas." },
    { name: "Ataque a servicios mal configurados para escalada a root", explanation: "Exploita configuraciones inseguras en servicios para lograr acceso root." },
  ];

  const reverseEngineeringChallenges = [
    { name: "Análisis de binario en Ghidra para extraer flag", explanation: "Utiliza Ghidra para descompilar y analizar un binario, descubriendo la flag oculta." },
    { name: "Descompilación y análisis de código ofuscado", explanation: "Examina código ofuscado para revertir su lógica y extraer información oculta." },
    { name: "Análisis de firmware con Ghidra", explanation: "Revisa firmware con Ghidra para identificar vulnerabilidades y extraer datos relevantes." },
    { name: "Ingeniería inversa de un ejecutable con técnicas anti-debugging", explanation: "Rompe protecciones anti-debugging para comprender el funcionamiento interno de un ejecutable." },
    { name: "Extracción de flag de un plugin o extensión en Ghidra", explanation: "Analiza un plugin ofuscado que utiliza cálculos del calendario gregoriano para ocultar la flag." },
  ];

  const osintChallenges = [
    { name: "Rastreo de actividad en redes sociales para hallar información oculta", explanation: "Emplea técnicas OSINT para seguir rastros en redes sociales y extraer datos sensibles." },
    { name: "Investigación de metadatos en imágenes públicas", explanation: "Analiza metadatos en imágenes para revelar información oculta o no evidente a simple vista." },
    { name: "Análisis de registros DNS para identificar infraestructura", explanation: "Examina registros DNS para mapear la infraestructura digital y descubrir vulnerabilidades." },
    { name: "Uso de motores de búsqueda especializados para detectar vulnerabilidades", explanation: "Utiliza herramientas de búsqueda avanzadas para identificar puntos débiles en sistemas." },
    { name: "Recopilación de información en foros y bases de datos públicas", explanation: "Extrae y correlaciona información de múltiples fuentes públicas para construir perfiles de riesgo." },
  ];

  const cryptoChallenges = [
    { name: "Criptoanálisis de cifrado simétrico", explanation: "Analiza algoritmos de cifrado simétrico en busca de debilidades para romper el cifrado." },
    { name: "Descodificación de mensajes en base64 y hexadecimal", explanation: "Convierte y decodifica mensajes en formatos base64 y hexadecimal para revelar información oculta." },
    { name: "Esteganografía en imágenes para ocultar mensajes", explanation: "Detecta y extrae mensajes ocultos en imágenes utilizando técnicas de esteganografía." },
    { name: "Análisis de mensajes cifrados con RSA", explanation: "Examina la seguridad de mensajes cifrados con RSA y busca vulnerabilidades en la implementación." },
    { name: "Decodificación de mensajes ocultos en archivos de audio", explanation: "Extrae y decodifica mensajes ocultos en archivos de audio mediante análisis espectral." },
  ];

  // Componente para cada ítem de reto
  const ChallengeItem = ({ challenge }) => (
    <li className="cursor-pointer hover:underline" onClick={() => setSelectedChallenge(challenge)}>
      {challenge.name}
    </li>
  );

  // Componente para cada sección de retos
  const ChallengeSection = ({ title, challenges, borderColor }) => (
    <section className={`bg-white p-6 rounded-lg shadow hover:shadow-lg border-t-4 ${borderColor} transition-transform transform hover:-translate-y-1`}>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      <ul className="list-disc space-y-2 text-gray-700 text-sm">
        {challenges.map((challenge, index) => (
          <ChallengeItem key={index} challenge={challenge} />
        ))}
      </ul>
    </section>
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-5xl m-5 font-extrabold text-center text-gray-800 mb-12">
        Desafíos del evento
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ChallengeSection title="Explotación Web (15 retos)" challenges={exploitationWebChallenges} borderColor="border-blue-500" />
        <ChallengeSection title="Forense Digital (14 retos)" challenges={forenseDigitalChallenges} borderColor="border-green-500" />
        <ChallengeSection title="Explotación en Servidor (6 retos)" challenges={exploitationServerChallenges} borderColor="border-red-500" />
        <ChallengeSection title="Ingeniería Reversa (5 retos)" challenges={reverseEngineeringChallenges} borderColor="border-purple-500" />
        <ChallengeSection title="OSINT (5 retos)" challenges={osintChallenges} borderColor="border-yellow-500" />
        <ChallengeSection title="Criptografía (5 retos)" challenges={cryptoChallenges} borderColor="border-indigo-500" />
      </div>

      {/* Bandera del Evento */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Flag del evento</h2>
        <div className="mx-auto max-w-full sm:max-w-xl inline-block bg-gray-100 border border-gray-300 rounded px-4 py-3 text-lg font-mono text-blue-600 break-words">
          CTF{'{4e5e494fa316ffc82b8252b23524f1433639858267d641c1217059dc4403e045}'}
        </div>
      </div>

      {/* Modal para la explicación del reto seleccionado */}
      {selectedChallenge && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50" onClick={closeModal}></div>
          <div className="bg-white rounded-lg p-6 z-10 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">{selectedChallenge.name}</h3>
            <p className="text-gray-700 mb-4">{selectedChallenge.explanation}</p>
            <button onClick={closeModal} className="bg-blue-600 text-white px-4 py-2 rounded">
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChallengesOverview;
