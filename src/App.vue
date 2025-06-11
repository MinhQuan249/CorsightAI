<template>
  <div class="min-h-screen flex flex-col font-sans text-gray-900">
    <!-- Header cố định -->
    <HeaderSection />

    <!-- Offset để tránh header che mất nội dung -->
    <div class="h-16 md:h-16"></div>

    <!-- Nội dung chính -->
    <main class="flex-1">
      <router-view />
    </main>

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup>
import HeaderSection from './components/layout/HeaderSection.vue'
import FooterSection from './components/layout/FooterSection.vue'
</script>
