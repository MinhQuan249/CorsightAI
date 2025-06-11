<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>

      <swiper
        :modules="[Navigation, Pagination, Autoplay]"
        :slides-per-view="1"
        :loop="true"
        :autoplay="{ delay: 5000 }"
        pagination
        class="testimonial-swiper"
      >
        <swiper-slide v-for="(testimonial, index) in testimonials" :key="index">
          <div class="max-w-2xl mx-auto text-center">
            <p class="text-lg italic text-gray-700 mb-6">“{{ testimonial.quote }}”</p>
            <h4 class="text-xl font-semibold text-indigo-600">{{ testimonial.name }}</h4>
            <p class="text-gray-500">{{ testimonial.title }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'

SwiperCore.use([Navigation, Pagination, Autoplay])

const testimonials = [
  {
    quote:
      'Corsight AI has revolutionized our approach to security. Their technology is unmatched.',
    name: 'John Doe',
    title: 'Chief Security Officer, City Surveillance',
  },
  {
    quote:
      'Thanks to Corsight, we’ve drastically improved operational efficiency in our retail chain.',
    name: 'Jane Smith',
    title: 'Head of Operations, RetailMax',
  },
  {
    quote: 'Unbelievable results and outstanding support from the Corsight team!',
    name: 'Michael Nguyen',
    title: 'Director of IT, TechSecure Solutions',
  },
]
</script>

<style scoped>
.testimonial-swiper {
  max-width: 700px;
  margin: auto;
}
</style>
