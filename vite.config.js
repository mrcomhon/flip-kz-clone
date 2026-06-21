import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    react(),
    svgr(),
  ],

  // 1. Создаем алиас (шорткат) "@", который всегда ссылается на папку src
  resolve: {
    alias: {
      '@': '/src'
    }
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/styles/helpers" as *;
        `
      }
    }
  }
})