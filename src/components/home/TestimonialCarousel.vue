<!-- 📄 src/components/home/TestimonialCarousel.vue -->
<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>

      <div class="flex flex-col md:flex-row items-center justify-center gap-6">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="bg-gray-50 p-6 rounded-lg shadow-md w-full md:w-1/3 text-left"
        >
          <p class="text-gray-700 mb-4">“{{ testimonial.text }}”</p>
          <div class="font-semibold text-indigo-600">{{ testimonial.author }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    text: 'Corsight AI has completely transformed the way we manage security.',
    author: 'John Smith, Law Enforcement',
  },
  {
    text: 'The accuracy and speed are unmatched. Highly recommended!',
    author: 'Jane Doe, Airport Security',
  },
  {
    text: 'Incredible support and powerful features. It just works!',
    author: 'Alex Johnson, Retail Manager',
  },
]
</script>
