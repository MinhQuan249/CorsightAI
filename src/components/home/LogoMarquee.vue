<template>
  <section class="bg-white py-8 overflow-hidden">
    <div class="relative w-full">
      <div
        class="flex animate-marquee whitespace-nowrap gap-10 items-center"
      >
        <img
          v-for="logo in logos"
          :key="logo"
          :src="`/assets/images/partners/${logo}`"
          alt="Partner Logo"
          class="h-12 sm:h-16 object-contain opacity-70 hover:opacity-100 transition"
        />
        <!-- Repeat logos for infinite loop -->
        <img
          v-for="logo in logos"
          :key="logo + '-copy'"
          :src="`/assets/images/partners/${logo}`"
          alt="Partner Logo"
          class="h-12 sm:h-16 object-contain opacity-70 hover:opacity-100 transition"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const logos = [
  'oracle-1-scaled.png',
  'Newsat-1.png',
  'Milestone-Logo-Clear-Blue.png',
  'google_play_logo-1.png',
  'AusComply-1.png',
  'appstore-1.png',
  'genetec-inc-vector-logo-1.png',
  'ISEG-Logo-1.png',
]
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
.animate-marquee {
  animation: marquee 30s linear infinite;
}
</style>
