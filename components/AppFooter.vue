<template>
  <footer class="footer">
    <div class="footer-content">
      <span>&copy; 2025 Swaply. All right reserved.</span>
    </div>
    <div class="footer-links">
      <nuxt-link to="/privacyPolicy" class="text-white underline">
        Privacy Policy
      </nuxt-link>
    </div>
  </footer>
</template>

<script setup>
// Pas de logique spécifique ici, c'est principalement le template
</script>

<style scoped>
@import "~/assets/css/main.css";
footer {
  @apply bg-blue-500 text-white p-4 flex justify-between items-center;
}
</style>
