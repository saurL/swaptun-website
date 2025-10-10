<template>
  <div>
    <LandingHero />
    <LandingFeatures />
    <LandingPlatforms />
    <LandingCTA />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Swaptun - Share Playlists Between Spotify, Apple Music & More',
  meta: [
    { name: 'description', content: 'Share your playlists across all streaming platforms. Transfer music between Spotify, Apple Music, YouTube Music, Deezer & more. Connect friends through music.' },
    { property: 'og:title', content: 'Swaptun - Share Playlists Between Spotify, Apple Music & More' },
    { property: 'og:description', content: 'Share your playlists across all streaming platforms. Break barriers and connect friends through music.' },
    { property: 'og:url', content: 'https://swaptun.com' },
    { name: 'twitter:title', content: 'Swaptun - Share Playlists Between Platforms' },
    { name: 'twitter:description', content: 'Share your playlists across all streaming platforms. Connect friends through music.' }
  ]
})
</script>
