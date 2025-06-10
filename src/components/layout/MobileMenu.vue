<template>
  <div class="md:hidden bg-white border-t border-gray-200 px-4 pb-4">
    <div
      v-for="item in menuItems"
      :key="item.name"
      class="py-2"
    >
      <router-link
        :to="item.to"
        class="block text-gray-800 font-semibold hover:text-indigo-600"
        @click="toggleMenu"
      >
        {{ item.name }}
      </router-link>

      <div v-if="item.children" class="pl-4 mt-1 space-y-1">
        <router-link
          v-for="child in item.children"
          :key="child.name"
          :to="child.to"
          class="block text-sm text-gray-600 hover:text-indigo-500"
          @click="toggleMenu"
        >
          {{ child.name }}
        </router-link>
      </div>
    </div>

    <button
      class="w-full mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
    >
      Book a Demo
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  menuItems: Array<{
    name: string
    to: string
    children?: Array<{ name: string; to: string }>
  }>
  toggleMenu: () => void
}>()
</script>
