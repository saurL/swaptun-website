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
          <NuxtLink
            to="/#features"
            class="text-sm font-semibold text-[#2E2E2E] hover:text-[#CB5520] transition-colors"
          >
            {{ $t("header.features") }}
          </NuxtLink>
          <NuxtLink
            to="/#platforms"
            class="text-sm font-semibold text-[#2E2E2E] hover:text-[#CB5520] transition-colors"
          >
            {{ $t("header.platforms") }}
          </NuxtLink>
          <NuxtLink
            to="/privacyPolicy"
            class="text-sm font-semibold text-[#2E2E2E] hover:text-[#CB5520] transition-colors"
          >
            {{ $t("header.privacy") }}
          </NuxtLink>
          <NuxtLink
            to="/termsOfService"
            class="text-sm font-semibold text-[#2E2E2E] hover:text-[#CB5520] transition-colors"
          >
            {{ $t("header.terms") }}
          </NuxtLink>

          <!-- Language Selector -->
          <div class="relative">
            <UButton
              variant="ghost"
              size="sm"
              @click="langMenuOpen = !langMenuOpen"
              class="text-sm"
            >
              <span class="text-sm font-medium">{{
                currentLocale.code.toUpperCase()
              }}</span>
              <svg
                class="ml-1 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </UButton>

            <!-- Dropdown Menu -->
            <div
              v-if="langMenuOpen"
              @click="langMenuOpen = false"
              class="fixed inset-0 z-40"
            />
            <div
              v-if="langMenuOpen"
              class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-orange-200/50 z-50 overflow-hidden"
            >
              <button
                v-for="loc in availableLocales"
                :key="loc.code"
                @click="switchLocale(loc.code)"
                class="w-full text-left px-4 py-3 text-sm hover:bg-orange-50 transition-colors flex items-center justify-between"
                :class="{
                  'bg-orange-100 font-semibold text-[#CB5520]':
                    loc.code === locale,
                  'text-black': loc.code !== locale,
                }"
              >
                <span>{{ loc.name }}</span>
                <svg
                  v-if="loc.code === locale"
                  class="h-4 w-4 text-[#CB5520]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          <UButton
            size="sm"
            class="bg-gradient-to-r from-[#E87A3A] to-[#CB5520] hover:from-[#FF985C] hover:to-[#E87A3A] text-white shadow-md hover:shadow-lg transition-all"
          >
            {{ $t("header.download") }}
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
          <NuxtLink
            to="/#features"
            class="text-base font-semibold text-[#2E2E2E] hover:text-[#CB5520]"
            @click="mobileMenuOpen = false"
          >
            {{ $t("header.features") }}
          </NuxtLink>
          <NuxtLink
            to="/#platforms"
            class="text-base font-semibold text-[#2E2E2E] hover:text-[#CB5520]"
            @click="mobileMenuOpen = false"
          >
            {{ $t("header.platforms") }}
          </NuxtLink>
          <NuxtLink
            to="/privacyPolicy"
            class="text-base font-semibold text-[#2E2E2E] hover:text-[#CB5520]"
            @click="mobileMenuOpen = false"
          >
            {{ $t("header.privacy") }}
          </NuxtLink>
          <NuxtLink
            to="/termsOfService"
            class="text-base font-semibold text-[#2E2E2E] hover:text-[#CB5520]"
            @click="mobileMenuOpen = false"
          >
            {{ $t("header.terms") }}
          </NuxtLink>

          <!-- Mobile Language Selector -->
          <div class="border-t border-orange-200/50 pt-4">
            <p class="text-xs font-semibold text-[#7D7D7D] mb-2">Language</p>
            <div class="grid grid-cols-3 gap-2">
              <button
                v-for="locale in availableLocales"
                :key="locale.code"
                @click="switchLocale(locale.code)"
                class="px-3 py-2 text-sm font-medium rounded-lg transition-colors"
                :class="
                  currentLocale.code === locale.code
                    ? 'bg-gradient-to-r from-[#E87A3A] to-[#CB5520] text-white'
                    : 'bg-orange-50 text-[#2E2E2E] hover:bg-orange-100'
                "
              >
                {{ locale.code.toUpperCase() }}
              </button>
            </div>
          </div>

          <UButton
            block
            class="bg-gradient-to-r from-[#E87A3A] to-[#CB5520] hover:from-[#FF985C] hover:to-[#E87A3A] text-white shadow-md"
          >
            {{ $t("header.download") }}
          </UButton>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";

const mobileMenuOpen = ref(false);
const langMenuOpen = ref(false);
const isScrolled = ref(false);

const { locale, locales, setLocale } = useI18n();

const availableLocales = computed(() => locales.value);
const currentLocale = computed(
  () => locales.value.find((l) => l.code === locale.value) || locales.value[0]
);

const switchLocale = (code: string) => {
  setLocale(code);
  langMenuOpen.value = false;
  mobileMenuOpen.value = false;
};

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
