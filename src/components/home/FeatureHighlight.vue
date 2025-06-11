<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold mb-12">Why Choose Corsight AI</h2>
      <div class="grid gap-10 md:grid-cols-3 text-left">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
        >
          <div class="text-indigo-600 text-3xl mb-4">
            <component :is="feature.icon" />
          </div>
          <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
          <p class="text-gray-600">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ShieldCheck, Zap, Eye } from 'lucide-vue-next'

const features = [
  {
    title: 'Privacy First',
    description: 'We adhere to the highest global standards of data privacy and ethical AI usage.',
    icon: ShieldCheck,
  },
  {
    title: 'Ultra-Fast AI',
    description: 'Real-time processing and analytics for instant decision-making and alerts.',
    icon: Zap,
  },
  {
    title: 'Advanced Vision',
    description: 'Industry-leading facial recognition technology in any lighting or angle.',
    icon: Eye,
  },
]
</script>
