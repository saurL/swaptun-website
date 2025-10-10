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
          <AppStoreButton
            platform="apple"
            href="#"
            :top-text="$t('cta.downloadOn')"
            :store-name="$t('cta.appStore')"
          />
          <AppStoreButton
            platform="android"
            href="#"
            :top-text="$t('cta.availableOn')"
            :store-name="$t('cta.googlePlay')"
          />
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
