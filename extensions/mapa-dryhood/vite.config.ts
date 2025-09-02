import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  publicDir: path.resolve(__dirname, 'public'),
  envDir: path.resolve(__dirname, '.'),

  build: {
    outDir: path.resolve(__dirname, 'assets'),
    emptyOutDir: true,
    assetsDir: '.',
    cssCodeSplit: false,
    minify: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'src/index.tsx'),
      output: {
        entryFileNames: 'main.js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'main.css'
          return '[name][extname]'
        },
        // This disables code splitting
        inlineDynamicImports: true
      }
    }
  },

  plugins: [react() as any],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },

  css: {
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: '[local]_[hash:base64:5]'
    }
  },

  define: {
    'process.env.VITE_GOOGLE_MAPS_API_KEY': JSON.stringify(process.env.VITE_GOOGLE_MAPS_API_KEY),
    'process.env.VITE_GOOGLE_MAPS_MAP_ID': JSON.stringify(process.env.VITE_GOOGLE_MAPS_MAP_ID)
  }
})
