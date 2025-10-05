<template>
  <header
    class="sticky top-0 z-50 transition-all duration-300"
    :class="
      isScrolled
        ? 'bg-white/80 backdrop-blur-md border-b border-orange-200/50 shadow-sm'
        : 'bg-transparent'
    "
  >
    <nav class="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
      <div class="flex h-16 items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-x-3">
          <img src="/icon.svg" alt="Swaptun" class="h-8 w-8" />
          <span
            class="text-xl font-bold bg-gradient-to-r from-[#E87A3A] to-[#CB5520] bg-clip-text text-transparent"
          >
            Swaptun
          </span></NuxtLink
        >

        <!-- Desktop Navigation -->
        <div class="hidden md:flex md:items-center md:gap-x-8">
          <a
            href="#features"
            class="text-sm font-semibold text-[#2E2E2E] hover:text-[#CB5520] transition-colors"
          >
            Features
          </a>
          <a
            href="#platforms"
            class="text-sm font-semibold text-[#2E2E2E] hover:text-[#CB5520] transition-colors"
          >
            Platforms
          </a>
          <a
            href="/privacyPolicy"
            class="text-sm font-semibold text-[#2E2E2E] hover:text-[#CB5520] transition-colors"
          >
            Privacy
          </a>
          <UButton
            size="sm"
            class="bg-gradient-to-r from-[#E87A3A] to-[#CB5520] hover:from-[#FF985C] hover:to-[#E87A3A] text-white shadow-md hover:shadow-lg transition-all"
          >
            Download
          </UButton>
        </div>

        <!-- Mobile menu button -->
        <div class="flex md:hidden">
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-md p-2 text-[#2E2E2E] hover:bg-orange-50 hover:text-[#CB5520]"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <span class="sr-only">Open menu</span>
            <svg
              v-if="!mobileMenuOpen"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <svg
              v-else
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div
        v-if="mobileMenuOpen"
        class="md:hidden py-4 border-t border-orange-200/50 mt-2"
      >
        <div class="flex flex-col gap-y-4">
          <a
            href="#features"
            class="text-base font-semibold text-[#2E2E2E] hover:text-[#CB5520]"
            @click="mobileMenuOpen = false"
          >
            Features
          </a>
          <a
            href="#platforms"
            class="text-base font-semibold text-[#2E2E2E] hover:text-[#CB5520]"
            @click="mobileMenuOpen = false"
          >
            Platforms
          </a>
          <a
            href="/privacyPolicy"
            class="text-base font-semibold text-[#2E2E2E] hover:text-[#CB5520]"
            @click="mobileMenuOpen = false"
          >
            Privacy
          </a>
          <UButton
            block
            class="bg-gradient-to-r from-[#E87A3A] to-[#CB5520] hover:from-[#FF985C] hover:to-[#E87A3A] text-white shadow-md"
          >
            Download
          </UButton>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const mobileMenuOpen = ref(false);
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
