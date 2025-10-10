<script setup lang="ts">
import { NuxtPage } from "#components";
</script>

<template>
  <div class="bg-white">
    <StructuredData />
    <UApp>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UApp>
  </div>
</template>
