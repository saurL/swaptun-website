<template>
  <section
    class="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-[#FFF8F3] py-20 sm:py-32"
  >
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h1
          class="text-5xl font-bold tracking-tight text-[#2E2E2E] sm:text-7xl"
        >
          {{ $t("hero.title") }}
          <span
            class="bg-gradient-to-r from-[#E87A3A] to-[#CB5520] bg-clip-text text-transparent"
          >
            {{ $t("hero.titleHighlight") }}
          </span>
          {{ $t("hero.titleEnd") }}
        </h1>
        <p class="mt-6 text-lg leading-8 text-[#7D7D7D]">
          {{ $t("hero.description") }}
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <Button size="xl" variant="primary">
            {{ $t("hero.downloadApp") }}
          </Button>
          <!--
          <Button
            size="xl"
            variant="ghost"
          >
            {{ $t('hero.watchDemo') }}
          </Button>-->
        </div>
      </div>

      <!-- App Screenshot Mockup -->
      <!--
      <div class="mt-16 flow-root sm:mt-24">
        <div
          class="relative -m-2 rounded-xl bg-[#FFF8F3] p-2 ring-1 ring-inset ring-orange-200/50 lg:-m-4 lg:rounded-2xl lg:p-4"
        >
          <div
            class="aspect-[16/9] rounded-md bg-gradient-to-br from-[#E87A3A] to-[#CB5520] shadow-2xl ring-1 ring-orange-900/10 flex items-center justify-center"
          >
            <div class="text-white text-center">
              <div class="text-6xl mb-4">🎵</div>
              <p class="text-xl font-semibold">App Screenshot Placeholder</p>
              <p class="text-sm opacity-75 mt-2">Add your screenshots here</p>
            </div>
          </div>
        </div>
      </div>
       -->
    </div>

    <!-- Background decoration -->
    <div
      class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
    >
      <div
        class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#F4C9A6] to-[#FF985C] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      />
    </div>
  </section>
</template>

<script setup lang="ts"></script>
