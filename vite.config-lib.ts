import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { viteSingleFile } from "vite-plugin-singlefile"
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vite.dev/config/
export default defineConfig({
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  build: {
    emptyOutDir: true,
    outDir: "./dist",
    minify: false,
    lib: {
      entry: 'src/lib.tsx',
      formats: ['es']
    },
  },
  plugins: [react()],  
})
