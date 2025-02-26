import React from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom"; // Use HashRouter
import AboutPage from "./components/AboutPage";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import ChallengesPage from "./components/ChallengesOverview";
import TechnicalTalks from "./components/TechnicalTalks";
// import CyberMovies from "./components/CyberMovies";
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
            <Route path="/challenges" element={<ChallengesPage />} />
            <Route path="/speaks" element={<TechnicalTalks />} />
            {/* <Route path="/cybermovies" element={<CyberMovies />} /> */}
            {/* Redirect all unmatched routes to HomePage */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
