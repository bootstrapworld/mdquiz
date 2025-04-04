import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { viteSingleFile } from "vite-plugin-singlefile"

// https://vite.dev/config/
export default defineConfig({
  root: "./src",
  build: {
    emptyOutDir: true,
    outDir: "../dist"
  },
  plugins: [
    react(), 
    viteSingleFile(),
  ],  
})
