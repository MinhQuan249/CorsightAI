<template>
  <section id="use-cases-tabs" class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-8">Use Cases</h2>

      <!-- Tabs Navigation -->
      <div class="flex flex-wrap justify-center gap-4 mb-8">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="selected = tab.id"
          :class="[
            selected === tab.id
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-indigo-600',
            'px-4 py-2 rounded shadow hover:bg-indigo-100 transition'
          ]"
        >
          {{ tab.name }}
        </button>
      </div>

      <!-- Tabs Content -->
      <UseCaseTabItem
        v-for="tab in tabs"
        :key="tab.id"
        :title="tab.title"
        :description="tab.content"
        :image="tab.image"
        :link="tab.link"
        :badge="tab.badge"
        :isActive="selected === tab.id"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UseCaseTabItem from './UseCaseTabItem.vue'

const selected = ref('law')

const tabs = [
  {
    id: 'law',
    name: 'Law Enforcement',
    title: 'Empower Public Safety Agencies',
    content: 'Instantly match suspects, find missing persons, and reduce crime with real-time alerts and forensics.',
    image: '/assets/images/law.jpg',
    link: '/industries/law',
    badge: 'Popular'
  },
  {
    id: 'airports',
    name: 'Airports',
    title: 'Streamline Airport Operations',
    content: 'Reduce security bottlenecks, enable seamless passenger flow, and enhance safety across all terminals.',
    image: '/assets/images/airport.jpg',
    link: '/industries/airports',
  },
  {
    id: 'retail',
    name: 'Retail',
    title: 'Optimize Retail Experiences',
    content: 'Deliver personalized experiences, deter theft, and understand in-store traffic with powerful analytics.',
    image: '/assets/images/retail.jpg',
    link: '/industries/retail',
  },
  {
    id: 'prisons',
    name: 'Prisons',
    title: 'Secure Correctional Facilities',
    content: 'Prevent impersonation, monitor inmate movements, and reinforce facility safety at all times.',
    image: '/assets/images/prison.jpg',
    link: '/industries/prisons',
  },
]
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
