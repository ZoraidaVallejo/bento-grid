import { defineConfig } from 'vite'

export default defineConfig({
  // Configurar el directorio root como public
  root: 'public',
  
  // Configuración del build
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    // Optimizar assets
    assetsDir: 'assets',
    // Configurar el chunking para mejor performance
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar vendor chunks si es necesario en el futuro
        }
      }
    }
  },
  
  // Configuración del servidor de desarrollo
  server: {
    open: true,
    port: 3000,
    host: true
  },
  
  // Configuración de CSS
  css: {
    devSourcemap: true
  },
  
  // Configurar alias para imports más limpios
  resolve: {
    alias: {
      '@': '/src',
      '@assets': '/src/assets',
      '@css': '/src/css',
      '@js': '/src/js'
    }
  }
})
