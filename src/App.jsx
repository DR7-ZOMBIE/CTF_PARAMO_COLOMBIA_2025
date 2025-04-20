import React, { useState, useEffect } from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import ChallengesPage from "./components/ChallengesOverview";
import TechnicalTalks from "./components/TechnicalTalks";
import RegistrationForm from "./components/RegistrationForm";
import TeamsList from "./components/TeamsList";
// import ExtraerEmails from "./extraerEmails.jsx"; // ✅
import "./App.css";
import "./index.css";

function App() {
  // Cargar los equipos del localStorage al iniciar la app
  const [teams, setTeams] = useState(() => {
    const storedTeams = localStorage.getItem("teams");
    return storedTeams ? JSON.parse(storedTeams) : [];
  });

  // Cada vez que cambie el estado, se guarda en localStorage
  useEffect(() => {
    localStorage.setItem("teams", JSON.stringify(teams));
  }, [teams]);

  const addTeam = (team) => setTeams([...teams, team]);

  return (
    <> 
    <Router>
      <div className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/challenges" element={<ChallengesPage />} />
            <Route path="/speaks" element={<TechnicalTalks />} />
            {/* Ruta para registrar equipo */}
            <Route path="/registro" element={<RegistrationForm addTeam={addTeam} />} />
            {/* Ruta para ver equipos registrados */}
            <Route path="/teams" element={<TeamsList teams={teams} />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;
