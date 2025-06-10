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

    <!-- Use Cases -->
    <UseCasesTabs />

    <!-- Autonomous AI Section -->
    <AutonomousAISection />

    <!-- Testimonials -->
    <TestimonialCarousel />

    <!-- CTA -->
    <CallToAction />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/home/HeroSection.vue'
import LogoMarquee from '@/components/home/LogoMarquee.vue'
import UseCasesTabs from '@/components/home/UseCasesTabs.vue'
import AutonomousAISection from '@/components/home/AutonomousAISection.vue'
import TestimonialCarousel from '@/components/home/TestimonialCarousel.vue'
import CallToAction from '@/components/home/CallToAction.vue'
</script>
