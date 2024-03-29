import { defineConfig } from "vite";
import { resolve } from 'path';
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  root: 'src',
  esbuild: {
    target: 'esnext'
  },
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/index.html'),
      },
      output: {
        chunkFileNames: 'assets/js/[hash].js',
        entryFileNames: 'assets/js/[hash].js',

        assetFileNames: ({name}) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')){
              return 'assets/images/[hash][extname]';
          }
          
          if (/\.(css|scss)$/.test(name ?? '')) {
              return 'assets/css/[hash][extname]';   
          }

          return 'assets/[hash][extname]';
        },
        dir: 'dist'
      },
    },
  },
  plugins: [
    createHtmlPlugin({
      // minify: true,
      entry: './ts/script.ts',
      template: './index.html',
    })
  ]
});

