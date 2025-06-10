<template>
  <nav class="hidden md:flex space-x-6">
    <div
      v-for="item in menuItems"
      :key="item.name"
      class="relative group"
    >
      <div class="text-gray-800 hover:text-indigo-600 cursor-pointer px-2 py-2">
        {{ item.name }}
      </div>

      <div
        v-if="item.children"
        class="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50"
      >
        <router-link
          v-for="child in item.children"
          :key="child.name"
          :to="child.to"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
        >
          {{ child.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
defineProps<{
  menuItems: Array<{
    name: string
    to: string
    children?: Array<{ name: string; to: string }>
  }>
}>()
</script>
