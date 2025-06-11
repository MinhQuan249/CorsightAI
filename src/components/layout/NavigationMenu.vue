<template>
  <nav class="hidden md:flex space-x-6 items-center">
    <div
      v-for="item in menuItems"
      :key="item.name"
      class="relative group"
    >
      <!-- Parent item -->
      <router-link
        v-if="!item.children"
        :to="item.to"
        class="text-gray-800 hover:text-indigo-600 px-3 py-2 font-medium transition"
      >
        {{ item.name }}
      </router-link>

      <div v-else class="px-3 py-2 font-medium text-gray-800 hover:text-indigo-600 cursor-pointer">
        {{ item.name }}
      </div>

      <!-- Dropdown menu -->
      <div
        v-if="item.children"
        class="absolute left-0 mt-2 w-52 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50"
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
