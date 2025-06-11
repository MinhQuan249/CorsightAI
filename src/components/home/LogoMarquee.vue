<template>
  <section class="bg-white py-8 overflow-hidden">
    <div class="relative w-full">
      <div class="marquee-track flex whitespace-nowrap gap-10 items-center">
        <!-- Logo chính -->
        <img
          v-for="(src, index) in logoUrls"
          :key="index"
          :src="src"
          alt="Partner Logo"
          class="h-12 sm:h-16 max-w-[140px] object-contain filter grayscale hover:grayscale-0 transition duration-300 cursor-pointer"
        />

        <!-- Bản sao để lặp vô hạn -->
        <img
          v-for="(src, index) in logoUrls"
          :key="'copy-' + index"
          :src="src"
          alt="Partner Logo"
          class="h-12 sm:h-16 max-w-[140px] object-contain filter grayscale hover:grayscale-0 transition duration-300 cursor-pointer"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Dùng Webpack require.context để import tất cả ảnh
const context = require.context('@/assets/images/partners', false, /\.(png|jpe?g)$/)
const logoUrls = context.keys().map(context)
</script>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
.marquee-track {
  animation: marquee 60s linear infinite;
  width: max-content;
}
</style>
