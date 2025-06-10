<template>
  <div class="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
    <!-- Header cố định hoặc tùy chỉnh -->
    <HeaderSection />

    <!-- Nội dung chính (thay đổi theo route) -->
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

<style>
/* Nếu bạn cần cấu hình font mặc định hoặc animation toàn cục */
</style>
