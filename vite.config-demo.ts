import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import { viteSingleFile } from "vite-plugin-singlefile"
import { copyFileSync, mkdirSync, readdirSync } from 'node:fs'
import { resolve } from 'node:path'

// Copy all image files from demo/ into the build output, since they are not
// inlined. (A few lines of fs instead of vite-plugin-static-copy, which drags
// in chokidar 3 and its vulnerable braces dependency.)
function copyDemoImages(): Plugin {
  let root = '', outDir = ''
  return {
    name: 'copy-demo-images',
    apply: 'build',
    configResolved(config) {
      root = config.root
      outDir = resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      mkdirSync(outDir, { recursive: true })
      for (const f of readdirSync(root)) {
        if (/\.(svg|gif|jpg|png)$/.test(f)) copyFileSync(resolve(root, f), resolve(outDir, f))
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  root: "demo",
  build: {
    emptyOutDir: false,
    outDir: "../dist",
    minify: false,
  },
  plugins: [
    react(),
    viteSingleFile(),
    copyDemoImages(),
  ],
})
