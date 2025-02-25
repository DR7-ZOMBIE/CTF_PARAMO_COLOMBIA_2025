import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: "/CTF_PARAMO_COLOMBIA_2025/", // Asegúrate de que coincide con el nombre del repo
  plugins: [
    tailwindcss(),
    react()
  ],
  build: {
    outDir: "dist",
  }
});
