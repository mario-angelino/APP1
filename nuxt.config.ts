// https://nuxt.com/docs/api/configuration/nuxt-config
// filepath: d:\OneDrive\Carrera\44 - AGENT LABS\APPS\APP1\nuxt.config.ts
export default defineNuxtConfig({
  css: ['APP1/assets/main.css'],
  postcss: {
   plugins: {
     '@tailwindcss/postcss': {},
     autoprefixer: {},
   },
  },
})