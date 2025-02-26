// import React from 'react';
// import citizenfour from '../assets/citizenfour.png';
// import theGreatHack from '../assets/theGreatHack.png';
// import snowden from '../assets/snowden.png';
// import zeroDays from '../assets/zeroDays.png';

// const CyberMovies = () => {
//   const movies = [
//     {
//       title: "Citizenfour",
//       poster: citizenfour,
//       trailer: "https://www.youtube.com/watch?v=1CVs6-epA1o",
//       description: "Documental sobre Edward Snowden y la vigilancia global."
//     },
//     {
//       title: "The Great Hack",
//       poster: theGreatHack,
//       trailer: "https://www.youtube.com/watch?v=Xg81hQ1Sc2Q",
//       description: "Explora el impacto de la manipulación de datos en la política."
//     },
//     {
//       title: "Snowden",
//       poster: snowden,
//       trailer: "https://www.youtube.com/watch?v=UiDk4TAwPuo",
//       description: "La historia del ex contratista de la NSA, Edward Snowden."
//     },
//     {
//       title: "Zero Days",
//       poster: zeroDays,
//       trailer: "https://www.youtube.com/watch?v=cC9a_7HMRH0",
//       description: "Documental sobre el malware Stuxnet y la guerra cibernética."
//     }
//   ];

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
//           Películas de Ciberseguridad
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {movies.map((movie, index) => (
//             <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105">
//               <img
//                 src={movie.poster}
//                 alt={`Poster de ${movie.title}`}
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">{movie.title}</h3>
//                 <p className="text-gray-600 text-sm mb-4">{movie.description}</p>
//                 <a 
//                   href={movie.trailer} 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="block text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//                 >
//                   Ver Tráiler
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CyberMovies;
