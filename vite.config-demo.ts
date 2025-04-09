import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { viteSingleFile } from "vite-plugin-singlefile"
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vite.dev/config/
export default defineConfig({
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  root: "demo",
  build: {
    emptyOutDir: true,
    outDir: "../dist",
    minify: false,
  },
  plugins: [
    react(), 
    viteSingleFile(),
    // copy all image files from demo/, since they are not inlined
    viteStaticCopy({
      targets: [
        {
          src: ['*.svg', '*.gif', '*.jpg', '*.png'],
          dest: './'
        }
      ]
    })
  ],  
})
