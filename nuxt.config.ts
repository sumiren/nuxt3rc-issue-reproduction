import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    FOO: process.env.FOO ?? 'DEFAULT',
    public: {
      BAR: process.env.BAR ?? 'DEFAULT'
    }
  }
})
