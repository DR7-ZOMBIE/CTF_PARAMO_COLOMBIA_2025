import React, { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const TeamsList = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "teams"), (snapshot) => {
      const teamsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      // Filtramos para dejar sólo un equipo por cada teamName
      const uniqueTeams = [];
      const namesSeen = new Set();

      for (const team of teamsData) {
        if (!namesSeen.has(team.teamName)) {
          namesSeen.add(team.teamName);
          uniqueTeams.push(team);
        } else {
          // Opcionalmente, podrías eliminar el duplicado de la base de datos 
          // si realmente quieres "eliminarlo" del sistema:
          // await deleteDoc(doc(db, "teams", team.id));
        }
      }

      setTeams(uniqueTeams);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="container mx-auto px-4 mt-8 mb-12">
      <h2 className="text-2xl m-24 md:text-3xl font-bold text-center text-gray-800 mb-6 md:mb-10">
        Equipos Registrados
      </h2>

      {teams.length === 0 ? (
        <p className="text-center text-lg text-gray-600">No hay equipos registrados aún.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {teams.map((team) => (
            <div
              key={team.id}
              className="bg-white p-4 md:p-5 rounded-xl shadow-md text-center flex flex-col items-center"
            >
              {team.teamImage && (
                <img
                  src={team.teamImage}
                  alt={team.teamName}
                  className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-2 md:mb-4 rounded-full border"
                />
              )}
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                {team.teamName}
              </h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TeamsList;
