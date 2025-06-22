import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

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
  plugins: [react() as any],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
