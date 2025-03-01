import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const RegistrationForm = ({ addTeam }) => {
  const [teamName, setTeamName] = useState("");
  const [participantCount, setParticipantCount] = useState(1);
  const [participants, setParticipants] = useState([{ name: "", email: "" }]);
  const [teamImage, setTeamImage] = useState("");
  const navigate = useNavigate();

  // Ajusta la cantidad de participantes cuando cambia participantCount
  useEffect(() => {
    setParticipants((prev) => {
      const newParticipants = [...prev];
      if (participantCount > prev.length) {
        for (let i = prev.length; i < participantCount; i++) {
          newParticipants.push({ name: "", email: "" });
        }
      } else if (participantCount < prev.length) {
        newParticipants.splice(participantCount);
      }
      return newParticipants;
    });
  }, [participantCount]);

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

  // Actualiza el campo (nombre o correo) del participante según su índice
  const handleParticipantChange = (index, field, value) => {
    setParticipants((prev) => {
      const newParticipants = [...prev];
      newParticipants[index] = { ...newParticipants[index], [field]: value };
      return newParticipants;
    });
  };

  // Manejo del envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (teamName.trim() === "") {
      Swal.fire({
        title: "¡Error!",
        text: "Por favor, ingresa el nombre del equipo.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      return;
    }
    for (let i = 0; i < participantCount; i++) {
      if (participants[i].name.trim() === "" || participants[i].email.trim() === "") {
        Swal.fire({
          title: "¡Error!",
          text: `Completa el nombre y correo del integrante ${i + 1}.`,
          icon: "error",
          confirmButtonText: "Aceptar",
        });
        return;
      }
    }

    const teamData = { teamName, participants, teamImage };

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
          // Reiniciamos el formulario
          setTeamName("");
          setParticipantCount(1);
          setParticipants([{ name: "", email: "" }]);
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
          Cada equipo puede tener entre <strong>1 y 3 integrantes</strong>. Selecciona la cantidad y completa la información.
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

          {/* Selección de cantidad de integrantes */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              ¿Cuántos integrantes deseas registrar?
            </label>
            <div className="flex space-x-4">
              {[1, 2, 3].map((count) => (
                <label key={count} className="flex items-center space-x-1">
                  <input
                    type="radio"
                    name="participantCount"
                    value={count}
                    checked={participantCount === count}
                    onChange={(e) => setParticipantCount(parseInt(e.target.value))}
                    className="form-radio"
                  />
                  <span>{count}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Integrantes */}
          {participants.map((participant, index) => (
            <div key={index} className="mb-6 border p-4 rounded-md">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Integrante {index + 1}
              </h3>
              <div className="mb-4">
                <label className="block text-md font-medium text-gray-600 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  value={participant.name}
                  onChange={(e) => handleParticipantChange(index, "name", e.target.value)}
                  placeholder="Ej. Juan Pérez"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>
              <div>
                <label className="block text-md font-medium text-gray-600 mb-1">
                  Correo
                </label>
                <input
                  type="email"
                  value={participant.email}
                  onChange={(e) => handleParticipantChange(index, "email", e.target.value)}
                  placeholder="Ej. juan@correo.com"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>
            </div>
          ))}

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
