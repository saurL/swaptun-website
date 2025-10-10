<script setup lang="ts">
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Swaptun",
        "applicationCategory": "MultimediaApplication",
        "operatingSystem": "iOS, Android",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "1250"
        },
        "description": "Share your playlists across all streaming platforms. Transfer music between Spotify, Apple Music, YouTube Music, Deezer and more. Connect friends through music.",
        "url": "https://swaptun.com",
        "image": "https://swaptun.com/icon.png",
        "author": {
          "@type": "Organization",
          "name": "Swaptun"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Swaptun",
          "logo": {
            "@type": "ImageObject",
            "url": "https://swaptun.com/icon.svg"
          }
        }
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Swaptun",
        "url": "https://swaptun.com",
        "logo": "https://swaptun.com/icon.svg",
        "sameAs": [
          "https://twitter.com/swaptun",
          "https://www.instagram.com/swaptun",
          "https://www.facebook.com/swaptun"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "contact@swaptun.com",
          "contactType": "Customer Service"
        }
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Swaptun",
        "url": "https://swaptun.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://swaptun.com/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      })
    }
  ]
})
</script>

<template>
  <div></div>
</template>
