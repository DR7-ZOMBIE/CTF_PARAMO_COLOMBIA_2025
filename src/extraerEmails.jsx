// // src/utils/extraerEquiposYParticipantes.jsx
// import { useEffect, useState } from "react";
// import { getDocs, collection } from "firebase/firestore";
// import { db } from "./firebase"; // Ajusta la ruta según tu estructura

// const extraerEmails = () => {
//   const [csvUrl, setCsvUrl] = useState(null);

//   useEffect(() => {
//     const fetchTeams = async () => {
//       const snapshot = await getDocs(collection(db, "teams"));
//       const records = [];

//       snapshot.forEach((doc) => {
//         // Obtén el nombre del equipo o usa el ID si no existe
//         const teamName = doc.data().teamName || doc.id;
//         const participants = doc.data().participants;

//         if (Array.isArray(participants)) {
//           participants.forEach((p) => {
//             // Asegúrate de incluir aquí cualquier otro campo de p que te interese
//             records.push({
//               teamName,
//               name: p.name || "",
//               email: p.email || "",
//               // por ejemplo:
//               role: p.role || "",
//               institution: p.institution || "",
//             });
//           });
//         }
//       });

//       // 1) JSON en consola
//       console.log("🔍 Datos extraídos:", records);

//       // 2) CSV listo para Excel
//       if (records.length > 0) {
//         // Cabeceras (keys) dinámicas
//         const headers = Object.keys(records[0]);
//         const csvRows = [
//           headers.join(","), // línea de cabecera
//           ...records.map(row =>
//             headers.map(field => {
//               // Escapa comillas dobles
//               const val = row[field] != null ? String(row[field]) : "";
//               return `"${val.replace(/"/g, '""')}"`;
//             }).join(",")
//           )
//         ];
//         const csvString = csvRows.join("\r\n");
//         console.log("📑 CSV:\n" + csvString);

//         // Crea un blob y URL para descarga
//         const blob = new Blob([csvString], { type: "text/csv" });
//         setCsvUrl(URL.createObjectURL(blob));
//       }
//     };

//     fetchTeams();
//   }, []);

//   return (
//     <>
//       {csvUrl && (
//         <a
//           href={csvUrl}
//           download="equipos_participantes.csv"
//           style={{
//             display: "inline-block",
//             margin: "1rem 0",
//             padding: "0.5rem 1rem",
//             backgroundColor: "#2c5364",
//             color: "#fff",
//             borderRadius: "4px",
//             textDecoration: "none",
//           }}
//         >
//           ⬇️ Descargar CSV
//         </a>
//       )}
//     </>
//   );
// };

// export default extraerEmails;
