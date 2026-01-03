import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Atualiza o Service Worker automaticamente
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'], // Assets na pasta public
      workbox: {
        // Aqui está a mágica: ele vai caçar todos esses arquivos no build e salvar no cache
        globPatterns: ['**/*.{js,css,html,png,svg,jpg,jpeg,webp}'],
        
        // Se suas imagens forem muito grandes, o Workbox pode ignorá-las por padrão. 
        // Aumente o limite se necessário (ex: 5MB):
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, 
      },
      manifest: {
        name: 'Sigils Gallery',
        short_name: 'Sigils',
        description: 'Galeria de Sigilos Thall',
        theme_color: '#000000', // Alinhado com o tema dark/metal
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})