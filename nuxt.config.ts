// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
   vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ['@nuxtjs/i18n'],
  css: ['~/assets/css/main.css'],

  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
      { code: 'fr', iso: 'fr-FR', file: 'fr.json', name: 'Français' },
      { code: 'es', iso: 'es-ES', file: 'es.json', name: 'Español' },
      { code: 'it', iso: 'it-IT', file: 'it.json', name: 'Italiano' },
      { code: 'de', iso: 'de-DE', file: 'de.json', name: 'Deutsch' }
    ],
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'en',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: false,
      fallbackLocale: 'en'
    }
  },

  colorMode: {
    preference: 'light'
  },

  ui: {
    primary: 'orange',
    gray: 'neutral'
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Swaptun - Share Playlists Between Spotify, Apple Music & More',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Share your playlists across all streaming platforms. Transfer music between Spotify, Apple Music, YouTube Music, Deezer & more. Connect friends through music.' },
        { name: 'keywords', content: 'playlist transfer, share playlists, Spotify to Apple Music, YouTube Music, playlist converter, music sharing, cross-platform playlists' },
        { name: 'author', content: 'Swaptun' },
        { name: 'theme-color', content: '#CB5520' },

        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Swaptun' },
        { property: 'og:title', content: 'Swaptun - Share Playlists Between Spotify, Apple Music & More' },
        { property: 'og:description', content: 'Share your playlists across all streaming platforms. Transfer music between Spotify, Apple Music, YouTube Music, Deezer & more.' },
        { property: 'og:image', content: 'https://swaptun.com/og-image.png' },
        { property: 'og:url', content: 'https://swaptun.com' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Swaptun - Share Playlists Between Platforms' },
        { name: 'twitter:description', content: 'Share your playlists across all streaming platforms. Transfer music between Spotify, Apple Music, YouTube Music & more.' },
        { name: 'twitter:image', content: 'https://swaptun.com/og-image.png' },

        // Mobile
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/icon.svg' },
        { rel: 'canonical', href: 'https://swaptun.com' },
        { rel: 'apple-touch-icon', href: '/icon.svg' }
      ]
    }
  }
})