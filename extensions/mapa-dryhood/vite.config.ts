import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  root: './src',
  build: {
    outDir: '../assets',
    emptyOutDir: true,
    assetsDir: '.',
    rollupOptions: {
      input: './src/index.tsx',
      output: {
        entryFileNames: 'main.js'
      }
    }
  },
  plugins: [
    react(),
    tailwindcss({
      content: [
        './src/**/*.{js,jsx,ts,tsx,html,liquid}', // Incluye archivos React y Liquid
        '../blocks/*.liquid', // Escanea archivos Liquid en la carpeta blocks/
        '../sections/*.liquid' // Escanea archivos Liquid en la carpeta sections/
      ],
      debug: true
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
