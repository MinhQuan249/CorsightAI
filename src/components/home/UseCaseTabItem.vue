<template>
  <div class="tab-content" :class="{ hidden: !isActive }" role="tabpanel">
    <div class="grid md:grid-cols-2 gap-10 items-center">
      <!-- Text -->
      <div>
        <h3 class="text-2xl font-bold mb-4 text-gray-900">{{ title }}</h3>
        <p class="text-gray-700 mb-6">
          {{ description }}
        </p>
        <router-link
          :to="link"
          class="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
        >
          Learn More
        </router-link>
      </div>

      <!-- Image -->
      <div class="relative">
        <img :src="image" :alt="title" class="rounded-lg shadow-md w-full h-auto object-cover" />
        <div
          v-if="badge"
          class="absolute top-4 left-4 bg-indigo-500 text-white text-sm px-3 py-1 rounded-full"
        >
          {{ badge }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  image: string
  link: string
  badge?: string
  isActive: boolean
}>()
</script>

<style scoped>
.tab-content.hidden {
  display: none;
}
</style>
