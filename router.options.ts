import type { RouterConfig } from "@nuxt/schema";
console.log("[Nuxt Router Options] fichier chargé ✅");

// router.options.ts
export default <RouterConfig> {
  scrollBehavior(to, from, savedPosition) {
    console.log('Navigating to:', to)
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    return { top: 0 }
  },
}
