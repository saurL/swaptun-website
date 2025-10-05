<template>
  <section id="platforms" class="py-24 sm:py-32 bg-[#FFF8F3]">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-base font-semibold leading-7 text-[#CB5520]">Compatibility</h2>
        <p class="mt-2 text-4xl font-bold tracking-tight text-[#2E2E2E] sm:text-5xl">
          All your favorite platforms
        </p>
        <p class="mt-6 text-lg leading-8 text-[#7D7D7D]">
          Swaptun supports the major music streaming platforms and regularly adds new ones.
        </p>
      </div>

      <div class="mx-auto mt-16 max-w-5xl">
        <div class="overflow-hidden bg-white shadow-xl rounded-2xl ring-1 ring-orange-200/50">
          <table class="min-w-full divide-y divide-orange-100">
            <thead class="bg-gradient-to-r from-orange-50 to-[#FFF8F3]">
              <tr>
                <th scope="col" class="py-4 pl-6 pr-3 text-left text-sm font-semibold text-[#2E2E2E]">
                  Platform
                </th>
                <th scope="col" class="px-3 py-4 text-center text-sm font-semibold text-[#2E2E2E]">
                  Import
                </th>
                <th scope="col" class="px-3 py-4 text-center text-sm font-semibold text-[#2E2E2E]">
                  Export
                </th>
                <th scope="col" class="px-3 py-4 text-center text-sm font-semibold text-[#2E2E2E]">
                  Status
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
                    />
                    <div class="font-medium text-[#2E2E2E]">{{ platform.name }}</div>
                  </div>
                </td>
                <td class="whitespace-nowrap px-3 py-5 text-center">
                  <span v-if="platform.import" class="text-2xl">✅</span>
                  <span v-else class="text-2xl opacity-30">⬜</span>
                </td>
                <td class="whitespace-nowrap px-3 py-5 text-center">
                  <span v-if="platform.export" class="text-2xl">✅</span>
                  <span v-else class="text-2xl opacity-30">⬜</span>
                </td>
                <td class="whitespace-nowrap px-3 py-5 text-center">
                  <UBadge
                    :color="platform.status === 'Available' ? 'green' : platform.status === 'Coming Soon' ? 'yellow' : 'gray'"
                    variant="subtle"
                    size="md"
                  >
                    {{ platform.status }}
                  </UBadge>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="mt-8 text-center">
          <p class="text-sm text-[#7D7D7D]">
            More platforms coming soon! Have a request?
            <a href="mailto:contact@swaptun.com" class="font-semibold text-[#CB5520] hover:text-[#E87A3A] transition-colors">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
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
