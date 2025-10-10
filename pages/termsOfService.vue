<template>
  <div class="bg-white min-h-screen">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-orange-50 to-white py-20">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <h1
            class="text-4xl font-bold tracking-tight text-[#2E2E2E] sm:text-5xl"
          >
            {{ $t("terms.title") }}
          </h1>
          <p class="mt-6 text-lg leading-8 text-[#7D7D7D]">
            {{ $t("terms.description") }}
          </p>
          <p class="mt-4 text-sm text-[#7D7D7D]">
            {{ $t("terms.lastUpdated") }}:
            {{
              new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            }}
          </p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="mx-auto max-w-4xl px-6 py-16 lg:px-8">
      <!-- Agreement -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-[#2E2E2E] mb-6">
          {{ $t("terms.section1.title") }}
        </h2>
        <p class="text-[#7D7D7D] leading-7 mb-6">
          {{ $t("terms.section1.content") }}
        </p>
        <div class="bg-[#FFF8F3] rounded-2xl p-6 border border-orange-200/50">
          <p class="text-[#2E2E2E] leading-7">
            <strong>{{ $t("terms.section1.important") }}</strong>
            {{ $t("terms.section1.importantText") }}
          </p>
        </div>
      </section>

      <!-- Service Description -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-[#2E2E2E] mb-6">
          {{ $t("terms.section2.title") }}
        </h2>
        <p class="text-[#7D7D7D] leading-7 mb-6">
          {{ $t("terms.section2.intro") }}
        </p>
        <ul class="space-y-3">
          <li class="flex items-start">
            <span class="text-[#E87A3A] mr-3 mt-1">•</span>
            <span class="text-[#7D7D7D]">{{ $t("terms.section2.item1") }}</span>
          </li>
          <li class="flex items-start">
            <span class="text-[#E87A3A] mr-3 mt-1">•</span>
            <span class="text-[#7D7D7D]">{{ $t("terms.section2.item2") }}</span>
          </li>
          <li class="flex items-start">
            <span class="text-[#E87A3A] mr-3 mt-1">•</span>
            <span class="text-[#7D7D7D]">{{ $t("terms.section2.item3") }}</span>
          </li>
        </ul>
      </section>

      <!-- User Accounts -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-[#2E2E2E] mb-6">
          {{ $t("terms.section3.title") }}
        </h2>
        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-semibold text-[#CB5520] mb-4">
              {{ $t("terms.section3.requirements.title") }}
            </h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-[#E87A3A] mr-3 mt-1">•</span>
                <span class="text-[#7D7D7D]">{{
                  $t("terms.section3.requirements.item1")
                }}</span>
              </li>
              <li class="flex items-start">
                <span class="text-[#E87A3A] mr-3 mt-1">•</span>
                <span class="text-[#7D7D7D]">{{
                  $t("terms.section3.requirements.item2")
                }}</span>
              </li>
              <li class="flex items-start">
                <span class="text-[#E87A3A] mr-3 mt-1">•</span>
                <span class="text-[#7D7D7D]">{{
                  $t("terms.section3.requirements.item3")
                }}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-semibold text-[#CB5520] mb-4">
              {{ $t("terms.section3.security.title") }}
            </h3>
            <p class="text-[#7D7D7D] leading-7">
              {{ $t("terms.section3.security.content") }}
            </p>
          </div>
        </div>
      </section>

      <!-- Acceptable Use -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-[#2E2E2E] mb-6">
          {{ $t("terms.section4.title") }}
        </h2>
        <p class="text-[#7D7D7D] leading-7 mb-6">
          {{ $t("terms.section4.intro") }}
        </p>
        <div class="grid gap-4">
          <div
            class="flex items-start p-4 bg-white rounded-xl border border-red-200/50 shadow-sm"
          >
            <span class="text-[#E74C3C] text-xl mr-3 mt-1">✗</span>
            <div>
              <h4 class="font-semibold text-[#2E2E2E] mb-1">
                {{ $t("terms.section4.item1.title") }}
              </h4>
              <p class="text-sm text-[#7D7D7D]">
                {{ $t("terms.section4.item1.description") }}
              </p>
            </div>
          </div>
          <div
            class="flex items-start p-4 bg-white rounded-xl border border-red-200/50 shadow-sm"
          >
            <span class="text-[#E74C3C] text-xl mr-3 mt-1">✗</span>
            <div>
              <h4 class="font-semibold text-[#2E2E2E] mb-1">
                {{ $t("terms.section4.item2.title") }}
              </h4>
              <p class="text-sm text-[#7D7D7D]">
                {{ $t("terms.section4.item2.description") }}
              </p>
            </div>
          </div>
          <div
            class="flex items-start p-4 bg-white rounded-xl border border-red-200/50 shadow-sm"
          >
            <span class="text-[#E74C3C] text-xl mr-3 mt-1">✗</span>
            <div>
              <h4 class="font-semibold text-[#2E2E2E] mb-1">
                {{ $t("terms.section4.item3.title") }}
              </h4>
              <p class="text-sm text-[#7D7D7D]">
                {{ $t("terms.section4.item3.description") }}
              </p>
            </div>
          </div>
          <div
            class="flex items-start p-4 bg-white rounded-xl border border-red-200/50 shadow-sm"
          >
            <span class="text-[#E74C3C] text-xl mr-3 mt-1">✗</span>
            <div>
              <h4 class="font-semibold text-[#2E2E2E] mb-1">
                {{ $t("terms.section4.item4.title") }}
              </h4>
              <p class="text-sm text-[#7D7D7D]">
                {{ $t("terms.section4.item4.description") }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Intellectual Property -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-[#2E2E2E] mb-6">
          {{ $t("terms.section5.title") }}
        </h2>
        <p class="text-[#7D7D7D] leading-7 mb-6">
          {{ $t("terms.section5.content") }}
        </p>
        <div class="bg-[#FFF8F3] rounded-2xl p-6 border border-orange-200/50">
          <p class="text-[#2E2E2E] leading-7">
            <strong>{{ $t("terms.section5.yourContent") }}</strong>
            {{ $t("terms.section5.yourContentText") }}
          </p>
        </div>
      </section>

      <!-- Third-Party Services -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-[#2E2E2E] mb-6">
          {{ $t("terms.section6.title") }}
        </h2>
        <p class="text-[#7D7D7D] leading-7 mb-6">
          {{ $t("terms.section6.content") }}
        </p>
      </section>

      <!-- Service Availability -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-[#2E2E2E] mb-6">
          {{ $t("terms.section7.title") }}
        </h2>
        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-semibold text-[#CB5520] mb-4">
              {{ $t("terms.section7.changes.title") }}
            </h3>
            <p class="text-[#7D7D7D] leading-7">
              {{ $t("terms.section7.changes.content") }}
            </p>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-[#CB5520] mb-4">
              {{ $t("terms.section7.warranty.title") }}
            </h3>
            <p class="text-[#7D7D7D] leading-7">
              {{ $t("terms.section7.warranty.content") }}
            </p>
          </div>
        </div>
      </section>

      <!-- Limitation of Liability -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-[#2E2E2E] mb-6">
          {{ $t("terms.section8.title") }}
        </h2>
        <div
          class="bg-gradient-to-br from-[#FFF8F3] to-white rounded-2xl p-8 border border-orange-200/50"
        >
          <p class="text-[#2E2E2E] leading-7 mb-4">
            {{ $t("terms.section8.intro") }}
          </p>
          <ul class="space-y-3">
            <li class="flex items-start">
              <span class="text-[#E87A3A] mr-3 mt-1">•</span>
              <span class="text-[#7D7D7D]">{{
                $t("terms.section8.item1")
              }}</span>
            </li>
            <li class="flex items-start">
              <span class="text-[#E87A3A] mr-3 mt-1">•</span>
              <span class="text-[#7D7D7D]">{{
                $t("terms.section8.item2")
              }}</span>
            </li>
            <li class="flex items-start">
              <span class="text-[#E87A3A] mr-3 mt-1">•</span>
              <span class="text-[#7D7D7D]">{{
                $t("terms.section8.item3")
              }}</span>
            </li>
            <li class="flex items-start">
              <span class="text-[#E87A3A] mr-3 mt-1">•</span>
              <span class="text-[#7D7D7D]">{{
                $t("terms.section8.item4")
              }}</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- Termination -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-[#2E2E2E] mb-6">
          {{ $t("terms.section9.title") }}
        </h2>
        <p class="text-[#7D7D7D] leading-7 mb-6">
          {{ $t("terms.section9.content1") }}
        </p>
        <p class="text-[#7D7D7D] leading-7">
          {{ $t("terms.section9.content2") }}
        </p>
      </section>

      <!-- Governing Law -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-[#2E2E2E] mb-6">
          {{ $t("terms.section10.title") }}
        </h2>
        <p class="text-[#7D7D7D] leading-7">
          {{ $t("terms.section10.content") }}
        </p>
      </section>

      <!-- Changes to Terms -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-[#2E2E2E] mb-6">
          {{ $t("terms.section11.title") }}
        </h2>
        <p class="text-[#7D7D7D] leading-7">
          {{ $t("terms.section11.content") }}
        </p>
      </section>

      <!-- Contact -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-[#2E2E2E] mb-6">
          {{ $t("terms.section12.title") }}
        </h2>
        <div
          class="bg-gradient-to-br from-[#E87A3A] to-[#CB5520] rounded-2xl p-8 text-white shadow-lg"
        >
          <p class="text-lg mb-4">
            {{ $t("terms.section12.question") }}
          </p>
          <p class="mb-6">{{ $t("terms.section12.subtitle") }}</p>
          <div class="space-y-3">
            <div class="flex items-center">
              <span class="mr-3">📧</span>
              <a
                :href="`mailto:contact@swaptun.com`"
                class="hover:underline font-semibold transition-all hover:text-[#FFF8F3]"
              >
                contact@swaptun.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Terms of Service - Swaptun",
  meta: [
    {
      name: "description",
      content:
        "Read Swaptun's terms of service to understand the rules and guidelines for using our playlist sharing platform.",
    },
    { property: "og:title", content: "Terms of Service - Swaptun" },
    {
      property: "og:description",
      content:
        "Terms and conditions for using Swaptun's playlist sharing service.",
    },
    { property: "og:url", content: "https://swaptun.com/termsOfService" },
    { name: "robots", content: "index, follow" },
  ],
});
</script>
