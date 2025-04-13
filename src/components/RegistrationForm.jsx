import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const RegistrationForm = () => {
  const [teamName, setTeamName] = useState("");
  const [participantCount, setParticipantCount] = useState(1);
  const [participants, setParticipants] = useState([{ name: "", email: "" }]);
  const [teamImage, setTeamImage] = useState("");
  const navigate = useNavigate();

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

  const handleParticipantChange = (index, field, value) => {
    setParticipants((prev) => {
      const newParticipants = [...prev];
      newParticipants[index] = { ...newParticipants[index], [field]: value };
      return newParticipants;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones de campos
    if (teamName.trim() === "") {
      Swal.fire("¡Error!", "Por favor, ingresa el nombre del equipo.", "error");
      return;
    }

    for (let i = 0; i < participantCount; i++) {
      if (participants[i].name.trim() === "" || participants[i].email.trim() === "") {
        Swal.fire("¡Error!", `Completa el nombre y correo del integrante ${i + 1}.`, "error");
        return;
      }
    }

    // 1. Hacemos la consulta a Firestore para verificar si ya existe el equipo con el mismo nombre
    try {
      const q = query(collection(db, "teams"), where("teamName", "==", teamName));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // Si encuentra al menos un documento con el mismo nombre, mostramos el error y salimos
        Swal.fire("¡Error!", "Ya existe un equipo registrado con este nombre.", "error");
        return;
      }

      // 2. Si llegamos aquí, significa que no hay duplicado, entonces creamos el equipo
      const teamData = { teamName, participants, teamImage };

      await addDoc(collection(db, "teams"), teamData);
      Swal.fire("¡Registro Exitoso!", "El equipo se ha registrado correctamente.", "success").then(() => {
        setTeamName("");
        setParticipantCount(1);
        setParticipants([{ name: "", email: "" }]);
        setTeamImage("");
        navigate("/teams");
      });
    } catch (error) {
      Swal.fire("Error", "No se pudo registrar el equipo. " + error.message, "error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 py-10 px-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Registro de Equipo
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Nombre del equipo */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Nombre del equipo
            </label>
            <input
              type="text"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              placeholder="Ej. CiberGuardianes"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-400 transition"
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
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Integrante {index + 1}</h3>
              <input
                type="text"
                value={participant.name}
                onChange={(e) => handleParticipantChange(index, "name", e.target.value)}
                placeholder="Nombre"
                className="w-full border rounded-md p-2 mb-2"
              />
              <input
                type="email"
                value={participant.email}
                onChange={(e) => handleParticipantChange(index, "email", e.target.value)}
                placeholder="Correo"
                className="w-full border rounded-md p-2"
              />
            </div>
          ))}

          {/* Imagen representativa del equipo (opcional) */}
          <div className="mb-6">
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
              <div className="mt-3 flex justify-center">
                <img
                  src={teamImage}
                  alt="Vista previa"
                  className="w-32 h-32 object-cover rounded-md border-2 border-gray-200"
                />
              </div>
            )}
          </div>

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md">
            Registrar Equipo
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
