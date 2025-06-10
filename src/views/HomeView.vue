<template>
  <div class="flex flex-col">
    <!-- Hero Section -->
    <HeroSection />

    <!-- Spacer -->
    <div class="h-12" />

    <!-- Logo Marquee -->
    <LogoMarquee />

    <!-- Spacer -->
    <div class="h-16" />

    <!-- Các section khác sẽ được thêm dần -->
    <!-- <UseCasesTabs /> -->
    <!-- <AutonomousAISection /> -->
    <!-- <TestimonialCarousel /> -->
    <!-- <BookDemoPopup /> -->
  </div>
</template>

<script setup>
import HeroSection from '@/components/home/HeroSection.vue'
import LogoMarquee from '@/components/home/LogoMarquee.vue'
import UseCasesTabs from '@/components/home/UseCasesTabs.vue'
// import TestimonialCarousel from '@/components/home/TestimonialCarousel.vue'
// import AutonomousAISection from '@/components/home/AutonomousAISection.vue'
</script>

<style scoped>
/* Style toàn cục nếu cần thêm */
</style>
