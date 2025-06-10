<template>
  <div class="relative group">
    <!-- Button label -->
    <div class="cursor-pointer text-gray-800 hover:text-indigo-600 px-2 py-2">
      {{ label }}
    </div>

    <!-- Dropdown menu -->
    <div
      class="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 z-50"
    >
      <router-link
        v-for="item in items"
        :key="item.name"
        :to="item.to"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
      >
        {{ item.name }}
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  items: Array<{ name: string; to: string }>
}>()
</script>
