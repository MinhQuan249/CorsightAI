<template>
  <section class="py-20 bg-white text-center">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-3xl font-bold mb-12">Proven Performance</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div v-for="metric in metrics" :key="metric.label" class="space-y-2">
          <div class="text-4xl font-extrabold text-indigo-600">{{ metric.value }}</div>
          <div class="text-sm text-gray-600">{{ metric.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const metrics = [
  { value: '99.97%', label: 'Face Recognition Accuracy' },
  { value: '30ms', label: 'Real-time Response' },
  { value: '24/7', label: 'Continuous Operation' },
  { value: '1B+', label: 'Images Processed' },
]
</script>
