<template>
  <section class="bg-white py-20">
    <div class="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center">
      <div class="w-full lg:w-1/2 text-center lg:text-left">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          Any face. Any camera. <br class="hidden md:block" /> Recognized instantly.
        </h1>
        <ul class="text-lg text-gray-700 mb-6 space-y-2">
          <li class="flex items-center">
            <span class="mr-2 text-indigo-600 font-bold">•</span> Unparalleled speed
          </li>
          <li class="flex items-center">
            <span class="mr-2 text-indigo-600 font-bold">•</span> Highest accuracy
          </li>
          <li class="flex items-center">
            <span class="mr-2 text-indigo-600 font-bold">•</span> Privacy protection
          </li>
        </ul>
        <button class="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-indigo-700 transition">
          Learn More
        </button>
      </div>
      <div class="w-full lg:w-1/2 mb-10 lg:mb-0">
        <img src="/assets/images/hero-img.webp" alt="AI Face Recognition" class="w-full h-auto" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No logic needed here
</script>

<style scoped>
/* Additional styles if needed */
</style>
