<template>
  <section id="features" class="py-24 sm:py-32 bg-white">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-base font-semibold leading-7 text-[#CB5520]">{{ $t('features.subtitle') }}</h2>
        <p class="mt-2 text-4xl font-bold tracking-tight text-[#2E2E2E] sm:text-5xl">
          {{ $t('features.title') }}
        </p>
        <p class="mt-6 text-lg leading-8 text-[#7D7D7D]">
          {{ $t('features.description') }}
        </p>
      </div>

      <div class="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <!-- Feature 1 -->
          <div class="flex flex-col">
            <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-[#2E2E2E]">
              <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#E87A3A] to-[#CB5520] shadow-md">
                <span class="text-2xl">⚡</span>
              </div>
              {{ $t('features.instantSharing.title') }}
            </dt>
            <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-[#7D7D7D]">
              <p class="flex-auto">
                {{ $t('features.instantSharing.description') }}
              </p>
            </dd>
          </div>

          <!-- Feature 2 -->
          <div class="flex flex-col">
            <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-[#2E2E2E]">
              <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#E87A3A] to-[#CB5520] shadow-md">
                <span class="text-2xl">🤝</span>
              </div>
              {{ $t('features.crossPlatform.title') }}
            </dt>
            <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-[#7D7D7D]">
              <p class="flex-auto">
                {{ $t('features.crossPlatform.description') }}
              </p>
            </dd>
          </div>

          <!-- Feature 3 -->
          <div class="flex flex-col">
            <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-[#2E2E2E]">
              <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#E87A3A] to-[#CB5520] shadow-md">
                <span class="text-2xl">🔒</span>
              </div>
              {{ $t('features.secure.title') }}
            </dt>
            <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-[#7D7D7D]">
              <p class="flex-auto">
                {{ $t('features.secure.description') }}
              </p>
            </dd>
          </div>

          <!-- Feature 4 -->
          <div class="flex flex-col">
            <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-[#2E2E2E]">
              <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#FF985C] to-[#E87A3A] shadow-md">
                <span class="text-2xl">🎯</span>
              </div>
              {{ $t('features.accuracy.title') }}
            </dt>
            <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-[#7D7D7D]">
              <p class="flex-auto">
                {{ $t('features.accuracy.description') }}
              </p>
            </dd>
          </div>

          <!-- Feature 5 -->
          <div class="flex flex-col">
            <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-[#2E2E2E]">
              <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#FF985C] to-[#E87A3A] shadow-md">
                <span class="text-2xl">📱</span>
              </div>
              {{ $t('features.mobile.title') }}
            </dt>
            <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-[#7D7D7D]">
              <p class="flex-auto">
                {{ $t('features.mobile.description') }}
              </p>
            </dd>
          </div>

          <!-- Feature 6 -->
          <div class="flex flex-col">
            <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-[#2E2E2E]">
              <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#FF985C] to-[#E87A3A] shadow-md">
                <span class="text-2xl">♾️</span>
              </div>
              {{ $t('features.unlimited.title') }}
            </dt>
            <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-[#7D7D7D]">
              <p class="flex-auto">
                {{ $t('features.unlimited.description') }}
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
