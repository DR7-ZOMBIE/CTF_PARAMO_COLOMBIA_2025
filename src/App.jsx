// src/App.jsx
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
// Importar estilos generales
import "./App.css";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            {/* Otras rutas, por ejemplo para Inscripción, se pueden agregar aquí */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
