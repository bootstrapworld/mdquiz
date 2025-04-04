import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { viteSingleFile } from "vite-plugin-singlefile"
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vite.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: true,
    outDir: "./dist",
    lib: {
      entry: 'src/lib.ts',
      formats: ['es']
    },
  },
  plugins: [
    react(), 
    viteSingleFile(),
    /*
    // copy all image files from sample-quiz, since they are not inlined
    viteStaticCopy({
      targets: [
        {
          src: [
            'sample-quiz/*'
          ],
          dest: './'
        }
      ]
    })
    */
  ],  
})
