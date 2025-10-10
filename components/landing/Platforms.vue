<template>
  <section id="platforms" class="py-24 sm:py-32 bg-[#FFF8F3]">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-base font-semibold leading-7 text-[#CB5520]">{{ $t('platforms.subtitle') }}</h2>
        <p class="mt-2 text-4xl font-bold tracking-tight text-[#2E2E2E] sm:text-5xl">
          {{ $t('platforms.title') }}
        </p>
        <p class="mt-6 text-lg leading-8 text-[#7D7D7D]">
          {{ $t('platforms.description') }}
        </p>
      </div>

      <div class="mx-auto mt-16 max-w-5xl">
        <div class="overflow-hidden bg-white shadow-xl rounded-2xl ring-1 ring-orange-200/50">
          <table class="min-w-full divide-y divide-orange-100">
            <thead class="bg-gradient-to-r from-orange-50 to-[#FFF8F3]">
              <tr>
                <th scope="col" class="py-4 pl-6 pr-3 text-left text-sm font-semibold text-[#2E2E2E]">
                  {{ $t('platforms.platform') }}
                </th>
                <th scope="col" class="px-3 py-4 text-center text-sm font-semibold text-[#2E2E2E]">
                  {{ $t('platforms.import') }}
                </th>
                <th scope="col" class="px-3 py-4 text-center text-sm font-semibold text-[#2E2E2E]">
                  {{ $t('platforms.export') }}
                </th>
                <th scope="col" class="px-3 py-4 text-center text-sm font-semibold text-[#2E2E2E]">
                  {{ $t('platforms.status') }}
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-orange-100 bg-white">
              <tr v-for="platform in platforms" :key="platform.name" class="hover:bg-orange-50/50 transition-colors">
                <td class="whitespace-nowrap py-5 pl-6 pr-3">
                  <div class="flex items-center gap-x-4">
                    <img
                      :src="platform.logo"
                      :alt="platform.name"
                      class="h-10 w-10 rounded-lg object-contain"
                      :class="{ 'opacity-40': platform.status !== 'Available' }"
                    />
                    <div class="font-medium text-[#2E2E2E]">{{ platform.name }}</div>
                  </div>
                </td>
                <td class="whitespace-nowrap px-3 py-5 text-center">
                  <span v-if="platform.import" class="text-2xl">✅</span>
                  <span v-else class="text-2xl text-[#E87A3A] opacity-40">✗</span>
                </td>
                <td class="whitespace-nowrap px-3 py-5 text-center">
                  <span v-if="platform.export" class="text-2xl">✅</span>
                  <span v-else class="text-2xl text-[#E87A3A] opacity-40">✗</span>
                </td>
                <td class="whitespace-nowrap px-3 py-5 text-center">
                  <span
                    v-if="platform.status === 'Available'"
                    class="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-sm font-semibold text-green-700 ring-1 ring-inset ring-green-600/20"
                  >
                    {{ $t('platforms.available') }}
                  </span>
                  <span
                    v-else-if="platform.status === 'Coming Soon'"
                    class="inline-flex items-center rounded-full bg-yellow-50 px-3 py-1 text-sm font-semibold text-yellow-800 ring-1 ring-inset ring-yellow-600/20"
                  >
                    {{ $t('platforms.comingSoon') }}
                  </span>
                  <span
                    v-else
                    class="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-sm font-semibold text-[#CB5520] ring-1 ring-inset ring-orange-600/20"
                  >
                    {{ $t('platforms.inDevelopment') }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="mt-8 text-center">
          <p class="text-sm text-[#7D7D7D]">
            {{ $t('platforms.moreInfo') }}
            <a href="mailto:contact@swaptun.com" class="font-semibold text-[#CB5520] hover:text-[#E87A3A] transition-colors">
              {{ $t('platforms.contactUs') }}
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

interface Platform {
  name: string;
  logo: string;
  import: boolean;
  export: boolean;
  status: 'Available' | 'Coming Soon' | 'In Development';
}

const platforms: Platform[] = [
  {
    name: 'Spotify',
    logo: '/platforms/spotify.svg',
    import: true,
    export: true,
    status: 'Available'
  },
  {
    name: 'Apple Music',
    logo: '/platforms/apple-music.png',
    import: true,
    export: true,
    status: 'Available'
  },
  {
    name: 'YouTube Music',
    logo: '/platforms/youtube-music.png',
    import: true,
    export: true,
    status: 'Available'
  },
  {
    name: 'Deezer',
    logo: '/platforms/deezer.png',
    import: false,
    export: false,
    status: 'Coming Soon'
  },
  {
    name: 'Tidal',
    logo: '/platforms/tidal.svg',
    import: false,
    export: false,
    status: 'In Development'
  },
  {
    name: 'Amazon Music',
    logo: '/platforms/amazon-music.svg',
    import: false,
    export: false,
    status: 'In Development'
  }
];
</script>
