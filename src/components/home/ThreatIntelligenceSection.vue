<template>
  <section class="bg-gradient-to-br from-[#0d0c1d] to-[#0a1f3d] py-20 text-white">
    <div class="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center">
      <!-- Left Text Block -->
      <div class="w-full lg:w-1/2 text-center lg:text-left">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          The Hidden Costs of Missing Real Time Threats
        </h2>
        <p class="text-lg text-gray-300 mb-6">
          Critical information often goes unnoticed in standard video footage, endangering visitors and staff. Our Facial Intelligence technology empowers security teams to act decisively.
        </p>
        <ul class="text-base space-y-2 text-left">
          <li class="flex items-start">
            <span class="text-blue-400 mr-2 mt-1">✔</span>
            Identify Individuals on Watchlists
          </li>
          <li class="flex items-start">
            <span class="text-blue-400 mr-2 mt-1">✔</span>
            Flag Unauthorized Access to Restricted Areas
          </li>
          <li class="flex items-start">
            <span class="text-blue-400 mr-2 mt-1">✔</span>
            Detect Patterns of Shoplifting, Burglary and Fraud
          </li>
        </ul>
        <div class="mt-8">
          <button class="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-semibold transition">
            Book a Meeting
          </button>
        </div>
      </div>

      <!-- Right Video Block -->
      <div class="w-full lg:w-1/2 mb-10 lg:mb-0">
        <video
          autoplay
          muted
          loop
          playsinline
          class="w-full h-auto rounded-lg shadow-lg"
        >
          <source :src="videoUrl" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import videoUrl from '@/assets/videos/hp_v2-video.mp4'
</script>

<style scoped>
/* Additional styles if needed */
</style>
