import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { viteSingleFile } from "vite-plugin-singlefile"
import { viteStaticCopy } from 'vite-plugin-static-copy'

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
    // copy all image files, since they are not inlined
    viteStaticCopy({
      targets: [
        {
          src: ['*.svg', '*.png', '*.gif', '*.jpg'],
          dest: '../dist'
        }
      ]
    })
  ],  
})
