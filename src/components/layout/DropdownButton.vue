<template>
  <div class="relative group">
    <!-- Button label with arrow -->
    <div
      class="cursor-pointer flex items-center text-gray-800 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition"
    >
      {{ label }}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4 ml-1 transition-transform group-hover:rotate-180"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>

    <!-- Dropdown menu -->
    <div
      class="absolute left-0 mt-2 min-w-[220px] bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
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
