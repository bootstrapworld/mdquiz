node --input-type=module -e 'import react from "@vitejs/plugin-react";
import { defineConfig, build } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import { viteStaticCopy } from "vite-plugin-static-copy";

const quizzes = ["demo/"];
const imageTypes = ["svg", "gif", "jpg", "png", "svg"];

// create the JSON objects for each of our quizzes
const buildConfigs = quizzes.map( quiz => ({
  root: ".",
  build: {
    emptyOutDir: true,
    outDir: "dist",
    minify: false,
    rollupOptions: {
      input: quiz+"index.html",
    }
  },
  plugins: [
    react(), 
    viteSingleFile(),
    // copy all image files from demo/, since they are not inlined
    viteStaticCopy({
      targets: [
        {
          src: imageTypes.map(t => quiz+"*."+t),
          dest: "./"
        }
      ]
    })
  ],
}));

//console.log(JSON.stringify(buildConfigs, null, 2))

// wait until all of the builds are complete
await Promise.all(buildConfigs.map( async (c) => await build(c)));'