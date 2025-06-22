import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  root: './src',
  envDir: '../',
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
  plugins: [react() as any],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  define: {
    'process.env.VITE_GOOGLE_MAPS_API_KEY': JSON.stringify(process.env.VITE_GOOGLE_MAPS_API_KEY),
    'process.env.VITE_GOOGLE_MAPS_MAP_ID': JSON.stringify(process.env.VITE_GOOGLE_MAPS_MAP_ID)
  }
})
