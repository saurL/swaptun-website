// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],

  colorMode: {
    preference: 'light'
  },

  ui: {
    primary: 'orange',
    gray: 'neutral'
  },

  app: {
    head: {
      title: 'Swaptun - Transfer Your Playlists Between Platforms',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Transfer your music playlists between streaming platforms effortlessly. Share your favorite music with friends across Spotify, Apple Music, YouTube Music, and more.' },
        { name: 'theme-color', content: '#CB5520' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})