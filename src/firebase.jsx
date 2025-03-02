// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Si planeas usar Firestore, también importa y configura:
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIEgaFoVc30z5l8Jw6FgaGdAM3_o3zKM0",
  authDomain: "web-app-paramo.firebaseapp.com",
  projectId: "web-app-paramo",
  storageBucket: "web-app-paramo.firebasestorage.app",
  messagingSenderId: "400482238140",
  appId: "1:400482238140:web:5cbfeb8ced1e69321ddab9",
  measurementId: "G-L2QVJQ9VX2"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Si usas Firestore

export { app, analytics, db };
