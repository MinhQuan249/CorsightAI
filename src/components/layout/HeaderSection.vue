<template>
  <header class="bg-white shadow sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <router-link to="/" class="flex items-center">
          <img
            src="@/assets/images/Asset-2logowhite-1-2048x391.png"
            alt="Corsight AI"
            class="h-8 w-auto"
            @error="handleImageError"
          />
        </router-link>

        <!-- Desktop nav -->
        <nav class="hidden md:flex space-x-6">
          <DropdownButton
            v-for="item in menuItems"
            :key="item.name"
            :item="item"
          />
        </nav>

        <!-- CTA & Mobile toggle -->
        <div class="flex items-center space-x-4">
          <button
            class="hidden md:block bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Book a Demo
          </button>

          <button
            class="md:hidden focus:outline-none"
            @click="toggleMenu"
            aria-label="Toggle navigation"
          >
            <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" stroke-width="2"
                 viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <MobileMenu
      v-if="mobileOpen"
      :menu-items="menuItems"
      @close="toggleMenu"
    />
  </header>
</template>

<script setup>
import { ref } from 'vue'
import DropdownButton from './DropdownButton.vue'
import MobileMenu from './MobileMenu.vue'

const mobileOpen = ref(false)
const toggleMenu = () => {
  mobileOpen.value = !mobileOpen.value
}

function handleImageError(event) {
  event.target.src = 'https://via.placeholder.com/150x40?text=Logo'
}

const menuItems = [
  {
    name: 'Industries',
    to: '/industries',
    children: [
      { name: 'Law Enforcement', to: '/industries/law' },
      { name: 'Retail', to: '/industries/retail' },
      { name: 'Prisons', to: '/industries/prisons' },
      { name: 'Airports', to: '/industries/airports' },
    ],
  },
  {
    name: 'Products',
    to: '/products',
    children: [
      { name: 'Face Intelligence', to: '/products/face' },
      { name: 'Real-time Analytics', to: '/products/analytics' },
    ],
  },
  { name: 'About Us', to: '/about' },
  { name: 'Partners', to: '/partners' },
]
</script>
