<template>
  <section class="relative isolate overflow-hidden bg-gradient-to-br from-[#E87A3A] to-[#CB5520] py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {{ $t('cta.title') }}
        </h2>
        <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-orange-100">
          {{ $t('cta.description') }}
        </p>
        <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="#"
            class="flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-base font-semibold text-[#2E2E2E] shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            <svg class="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div class="text-left">
              <div class="text-xs text-[#7D7D7D]">{{ $t('cta.downloadOn') }}</div>
              <div class="text-base font-bold">{{ $t('cta.appStore') }}</div>
            </div>
          </a>
          <a
            href="#"
            class="flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-base font-semibold text-[#2E2E2E] shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            <svg class="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
            </svg>
            <div class="text-left">
              <div class="text-xs text-[#7D7D7D]">{{ $t('cta.availableOn') }}</div>
              <div class="text-base font-bold">{{ $t('cta.googlePlay') }}</div>
            </div>
          </a>
        </div>
      </div>
    </div>

    <!-- Background decoration -->
    <svg
      class="absolute left-1/2 top-0 -z-10 h-[42.375rem] -translate-x-1/2 blur-3xl xl:-top-6"
      viewBox="0 0 1155 678"
      fill="none"
    >
      <path
        fill="url(#gradient)"
        fill-opacity=".3"
        d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
      />
      <defs>
        <linearGradient
          id="gradient"
          x1="1155.49"
          x2="-78.208"
          y1=".177"
          y2="474.645"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF985C" />
          <stop offset="1" stop-color="#F4C9A6" />
        </linearGradient>
      </defs>
    </svg>
  </section>
</template>

<script setup lang="ts">
</script>
