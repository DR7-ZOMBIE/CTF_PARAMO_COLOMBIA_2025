import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const RegistrationForm = ({ addTeam }) => {
  const [teamName, setTeamName] = useState("");
  const [memberName, setMemberName] = useState("");
  const [memberEmail, setMemberEmail] = useState("");
  const [members, setMembers] = useState([]);
  const [emails, setEmails] = useState([]);
  const [teamImage, setTeamImage] = useState(""); // Para almacenar la imagen en Base64
  const navigate = useNavigate();

  // Manejo del input file para convertir la imagen a Base64
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTeamImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Agregar integrante al presionar Enter en el input de nombre
  const handleMemberNameKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (memberName.trim() !== "" && members.length < 5) {
        setMembers([...members, memberName.trim()]);
        setMemberName("");
      }
    }
  };

  // Agregar correo al presionar Enter en el input de email
  const handleMemberEmailKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (memberEmail.trim() !== "" && emails.length < 5) {
        setEmails([...emails, memberEmail.trim()]);
        setMemberEmail("");
      }
    }
  };

  // Manejo del envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (teamName.trim() === "" || members.length !== 5 || emails.length !== 5) {
      Swal.fire({
        title: "¡Error!",
        text: "Por favor, completa el nombre del equipo, 5 nombres y 5 correos de integrantes.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    const teamData = { teamName, members, emails, teamImage };

    try {
      const response = await fetch("https://formspree.io/f/xovjgvjg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(teamData),
      });
      if (response.ok) {
        Swal.fire({
          title: "¡Registro Exitoso!",
          text: "El equipo se ha registrado correctamente.",
          icon: "success",
          confirmButtonText: "Aceptar",
        }).then(() => {
          addTeam(teamData);
          // Reseteamos el formulario
          setTeamName("");
          setMembers([]);
          setEmails([]);
          setTeamImage("");
          navigate("/teams");
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "Error al enviar el formulario.",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Error en la conexión: " + error.message,
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 py-10 px-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Registro de Equipo
        </h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          Cada equipo debe tener <strong>5 integrantes</strong>. Ingresa 5 nombres y 5 correos.  
          Presiona "Enter" para agregar cada integrante.
        </p>
        <form onSubmit={handleSubmit}>
          {/* Nombre del equipo */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Nombre del equipo de ciberseguridad
            </label>
            <input
              type="text"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              placeholder="Ej. CiberGuardianes"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          {/* Integrantes */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Nombres de los integrantes (presiona Enter para agregar)
            </label>
            <input
              type="text"
              value={memberName}
              onChange={(e) => setMemberName(e.target.value)}
              onKeyDown={handleMemberNameKeyDown}
              placeholder="Ej. Juan Pérez"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            <p className="text-xs text-gray-500 mt-1 italic">
              Integrantes registrados: {members.length} / 5
            </p>
            {members.length > 0 && (
              <ul className="mt-2 space-y-1">
                {members.map((name, index) => (
                  <li key={index} className="text-gray-600">
                    {name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Correos */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Correos de los integrantes (presiona Enter para agregar)
            </label>
            <input
              type="email"
              value={memberEmail}
              onChange={(e) => setMemberEmail(e.target.value)}
              onKeyDown={handleMemberEmailKeyDown}
              placeholder="Ej. juan@correo.com"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            <p className="text-xs text-gray-500 mt-1 italic">
              Correos registrados: {emails.length} / 5
            </p>
            {emails.length > 0 && (
              <ul className="mt-2 space-y-1">
                {emails.map((email, index) => (
                  <li key={index} className="text-gray-600">
                    {email}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Imagen del equipo (opcional) */}
          <div className="mb-8">
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Imagen representativa del equipo (opcional)
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            {teamImage && (
              <div className="mt-3">
                <img
                  src={teamImage}
                  alt="Vista previa"
                  className="w-32 h-32 object-cover rounded-md border-2 border-gray-200"
                />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white font-bold py-3 rounded-md shadow-lg"
          >
            Registrar Equipo
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
