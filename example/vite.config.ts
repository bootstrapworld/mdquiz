import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile"

export default defineConfig(() => ({
  root: "./src",
  build: {
    emptyOutDir: false,
    outDir: "../dist/"
  },
  plugins: [react(), viteSingleFile()]
}));
