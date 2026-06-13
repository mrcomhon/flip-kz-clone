import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

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