<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-orange-50 to-white py-20">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <h1
            class="text-4xl font-bold tracking-tight text-[#2E2E2E] sm:text-5xl"
          >
            {{ $t("privacy.title") }}
          </h1>
          <p class="mt-6 text-lg leading-8 text-[#7D7D7D]">
            {{ $t("privacy.description") }}
          </p>
          <p class="mt-4 text-sm text-[#7D7D7D]">
            {{ $t("privacy.lastUpdated") }}:
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
      <!-- Summary -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-[#2E2E2E] mb-6">
          {{ $t("privacy.summary.title") }}
        </h2>
        <div class="bg-[#FFF8F3] rounded-2xl p-8 border border-orange-200/50">
          <p class="text-[#2E2E2E] leading-7">
            {{ $t("privacy.summary.content") }}
          </p>
        </div>
      </section>

      <!-- Information We Collect -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-[#2E2E2E] mb-6">
          {{ $t("privacy.section1.title") }}
        </h2>

        <h3 class="text-xl font-semibold text-[#CB5520] mb-4">
          {{ $t("privacy.section1.personalInfo.title") }}
        </h3>
        <p class="text-[#7D7D7D] leading-7 mb-6">
          {{ $t("privacy.section1.personalInfo.intro") }}
        </p>
        <ul class="space-y-3 mb-8">
          <li class="flex items-start">
            <span class="text-[#E87A3A] mr-3 mt-1">•</span>
            <span class="text-[#7D7D7D]"
              ><strong class="text-[#2E2E2E]">{{
                $t("privacy.section1.personalInfo.email")
              }}</strong>
              - {{ $t("privacy.section1.personalInfo.emailDesc") }}</span
            >
          </li>
          <li class="flex items-start">
            <span class="text-[#E87A3A] mr-3 mt-1">•</span>
            <span class="text-[#7D7D7D]"
              ><strong class="text-[#2E2E2E]">{{
                $t("privacy.section1.personalInfo.username")
              }}</strong>
              - {{ $t("privacy.section1.personalInfo.usernameDesc") }}</span
            >
          </li>
          <li class="flex items-start">
            <span class="text-[#E87A3A] mr-3 mt-1">•</span>
            <span class="text-[#7D7D7D]"
              ><strong class="text-[#2E2E2E]">{{
                $t("privacy.section1.personalInfo.playlist")
              }}</strong>
              - {{ $t("privacy.section1.personalInfo.playlistDesc") }}</span
            >
          </li>
        </ul>

        <h3 class="text-xl font-semibold text-[#CB5520] mb-4">
          {{ $t("privacy.section1.socialMedia.title") }}
        </h3>
        <p class="text-[#7D7D7D] leading-7 mb-6">
          {{ $t("privacy.section1.socialMedia.content") }}
        </p>
      </section>

      <!-- How We Use Your Information -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-[#2E2E2E] mb-6">
          {{ $t("privacy.section2.title") }}
        </h2>
        <p class="text-[#7D7D7D] leading-7 mb-6">
          {{ $t("privacy.section2.intro") }}
        </p>
        <div class="grid gap-4">
          <div
            class="flex items-start p-4 bg-[#FFF8F3] rounded-xl border border-orange-200/50"
          >
            <span class="text-2xl mr-4">🔄</span>
            <div>
              <h4 class="font-semibold text-[#2E2E2E] mb-1">
                {{ $t("privacy.section2.transfer.title") }}
              </h4>
              <p class="text-sm text-[#7D7D7D]">
                {{ $t("privacy.section2.transfer.description") }}
              </p>
            </div>
          </div>
          <div
            class="flex items-start p-4 bg-[#FFF8F3] rounded-xl border border-orange-200/50"
          >
            <span class="text-2xl mr-4">👤</span>
            <div>
              <h4 class="font-semibold text-[#2E2E2E] mb-1">
                {{ $t("privacy.section2.account.title") }}
              </h4>
              <p class="text-sm text-[#7D7D7D]">
                {{ $t("privacy.section2.account.description") }}
              </p>
            </div>
          </div>
          <div
            class="flex items-start p-4 bg-[#FFF8F3] rounded-xl border border-orange-200/50"
          >
            <span class="text-2xl mr-4">🛡️</span>
            <div>
              <h4 class="font-semibold text-[#2E2E2E] mb-1">
                {{ $t("privacy.section2.security.title") }}
              </h4>
              <p class="text-sm text-[#7D7D7D]">
                {{ $t("privacy.section2.security.description") }}
              </p>
            </div>
          </div>
          <div
            class="flex items-start p-4 bg-[#FFF8F3] rounded-xl border border-orange-200/50"
          >
            <span class="text-2xl mr-4">📧</span>
            <div>
              <h4 class="font-semibold text-[#2E2E2E] mb-1">
                {{ $t("privacy.section2.communication.title") }}
              </h4>
              <p class="text-sm text-[#7D7D7D]">
                {{ $t("privacy.section2.communication.description") }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Data Sharing -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-[#2E2E2E] mb-6">
          {{ $t("privacy.section3.title") }}
        </h2>
        <p class="text-[#7D7D7D] leading-7 mb-6">
          {{ $t("privacy.section3.intro") }}
        </p>
        <ul class="space-y-3">
          <li class="flex items-start">
            <span class="text-[#E87A3A] mr-3 mt-1">•</span>
            <span class="text-[#7D7D7D]">{{
              $t("privacy.section3.item1")
            }}</span>
          </li>
          <li class="flex items-start">
            <span class="text-[#E87A3A] mr-3 mt-1">•</span>
            <span class="text-[#7D7D7D]">{{
              $t("privacy.section3.item2")
            }}</span>
          </li>
          <li class="flex items-start">
            <span class="text-[#E87A3A] mr-3 mt-1">•</span>
            <span class="text-[#7D7D7D]">{{
              $t("privacy.section3.item3")
            }}</span>
          </li>
        </ul>
      </section>

      <!-- Data Security -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-[#2E2E2E] mb-6">
          {{ $t("privacy.section4.title") }}
        </h2>
        <p class="text-[#7D7D7D] leading-7 mb-6">
          {{ $t("privacy.section4.intro") }}
        </p>
        <div
          class="bg-gradient-to-br from-[#FFF8F3] to-white rounded-2xl p-8 border border-orange-200/50"
        >
          <ul class="space-y-4">
            <li class="flex items-center">
              <span class="text-[#27AE60] text-2xl mr-3">✓</span>
              <span class="text-[#2E2E2E]">{{
                $t("privacy.section4.item1")
              }}</span>
            </li>
            <li class="flex items-center">
              <span class="text-[#27AE60] text-2xl mr-3">✓</span>
              <span class="text-[#2E2E2E]">{{
                $t("privacy.section4.item2")
              }}</span>
            </li>
            <li class="flex items-center">
              <span class="text-[#27AE60] text-2xl mr-3">✓</span>
              <span class="text-[#2E2E2E]">{{
                $t("privacy.section4.item3")
              }}</span>
            </li>
            <li class="flex items-center">
              <span class="text-[#27AE60] text-2xl mr-3">✓</span>
              <span class="text-[#2E2E2E]">{{
                $t("privacy.section4.item4")
              }}</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- Your Rights -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-[#2E2E2E] mb-6">
          {{ $t("privacy.section5.title") }}
        </h2>
        <p class="text-[#7D7D7D] leading-7 mb-6">
          {{ $t("privacy.section5.intro") }}
        </p>
        <div class="space-y-4">
          <div
            class="p-6 bg-white rounded-xl border border-orange-200/50 shadow-sm"
          >
            <h4 class="font-semibold text-[#CB5520] mb-2">
              {{ $t("privacy.section5.access.title") }}
            </h4>
            <p class="text-[#7D7D7D] text-sm">
              {{ $t("privacy.section5.access.description") }}
            </p>
          </div>
          <div
            class="p-6 bg-white rounded-xl border border-orange-200/50 shadow-sm"
          >
            <h4 class="font-semibold text-[#CB5520] mb-2">
              {{ $t("privacy.section5.correct.title") }}
            </h4>
            <p class="text-[#7D7D7D] text-sm">
              {{ $t("privacy.section5.correct.description") }}
            </p>
          </div>
          <div
            class="p-6 bg-white rounded-xl border border-orange-200/50 shadow-sm"
          >
            <h4 class="font-semibold text-[#CB5520] mb-2">
              {{ $t("privacy.section5.delete.title") }}
            </h4>
            <p class="text-[#7D7D7D] text-sm">
              {{ $t("privacy.section5.delete.description") }}
            </p>
          </div>
          <div
            class="p-6 bg-white rounded-xl border border-orange-200/50 shadow-sm"
          >
            <h4 class="font-semibold text-[#CB5520] mb-2">
              {{ $t("privacy.section5.export.title") }}
            </h4>
            <p class="text-[#7D7D7D] text-sm">
              {{ $t("privacy.section5.export.description") }}
            </p>
          </div>
        </div>
      </section>

      <!-- Cookies -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-[#2E2E2E] mb-6">
          {{ $t("privacy.section6.title") }}
        </h2>
        <p class="text-[#7D7D7D] leading-7 mb-6">
          {{ $t("privacy.section6.intro") }}
        </p>
        <ul class="space-y-3 mb-6">
          <li class="flex items-start">
            <span class="text-[#E87A3A] mr-3 mt-1">•</span>
            <span class="text-[#7D7D7D]">{{
              $t("privacy.section6.item1")
            }}</span>
          </li>
          <li class="flex items-start">
            <span class="text-[#E87A3A] mr-3 mt-1">•</span>
            <span class="text-[#7D7D7D]">{{
              $t("privacy.section6.item2")
            }}</span>
          </li>
          <li class="flex items-start">
            <span class="text-[#E87A3A] mr-3 mt-1">•</span>
            <span class="text-[#7D7D7D]">{{
              $t("privacy.section6.item3")
            }}</span>
          </li>
        </ul>
        <p class="text-[#7D7D7D] leading-7">
          {{ $t("privacy.section6.outro") }}
        </p>
      </section>

      <!-- Data Retention -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-[#2E2E2E] mb-6">
          {{ $t("privacy.section7.title") }}
        </h2>
        <p class="text-[#7D7D7D] leading-7">
          {{ $t("privacy.section7.content") }}
        </p>
      </section>

      <!-- Children's Privacy -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-[#2E2E2E] mb-6">
          {{ $t("privacy.section8.title") }}
        </h2>
        <p class="text-[#7D7D7D] leading-7">
          {{ $t("privacy.section8.content") }}
        </p>
      </section>

      <!-- Changes to Policy -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-[#2E2E2E] mb-6">
          {{ $t("privacy.section9.title") }}
        </h2>
        <p class="text-[#7D7D7D] leading-7">
          {{ $t("privacy.section9.content") }}
        </p>
      </section>

      <!-- Contact -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-[#2E2E2E] mb-6">
          {{ $t("privacy.section10.title") }}
        </h2>
        <div
          class="bg-gradient-to-br from-[#E87A3A] to-[#CB5520] rounded-2xl p-8 text-white"
        >
          <p class="text-lg mb-4">
            {{ $t("privacy.section10.question") }}
          </p>
          <p class="mb-6">{{ $t("privacy.section10.subtitle") }}</p>
          <div class="space-y-3">
            <div class="flex items-center">
              <span class="mr-3">📧</span>
              <a
                :href="`mailto:contact@swaptun.com`"
                class="hover:underline font-semibold"
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
  title: "Privacy Policy - Swaptun",
  meta: [
    {
      name: "description",
      content:
        "Read Swaptun's privacy policy to understand how we collect, use, and protect your personal information when you use our playlist sharing service.",
    },
    { property: "og:title", content: "Privacy Policy - Swaptun" },
    {
      property: "og:description",
      content:
        "Learn about how Swaptun protects your privacy and handles your data.",
    },
    { property: "og:url", content: "https://swaptun.com/privacyPolicy" },
    { name: "robots", content: "index, follow" },
  ],
});
</script>
