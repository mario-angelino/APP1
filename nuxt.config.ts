// https://nuxt.com/docs/api/configuration/nuxt-config
// filepath: d:\OneDrive\Carrera\44 - AGENT LABS\APPS\APP1\nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-08-05', // Adicione esta linha
  css: ['c:/APPS/APP2/assets/main.css'],
  postcss: {
   plugins: {
     '@tailwindcss/postcss': {},
     autoprefixer: {},
   },
  },
})