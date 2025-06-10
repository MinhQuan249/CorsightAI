<template>
  <div class="min-h-screen py-20 px-4 text-center">
    <h1 class="text-3xl font-bold mb-4">Product: {{ product }}</h1>
    <p class="text-gray-600">Details about this product will go here.</p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const product = route.params.id as string
</script>
