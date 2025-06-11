<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-colors duration-300',
      isScrolled ? 'bg-white shadow backdrop-blur' : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex justify-between items-center h-20 py-2">
        <router-link to="/" class="flex items-center space-x-2 pl-6">
          <img
            :src="logoSrc"
            alt="Corsight AI"
            class="h-7 w-auto object-contain max-w-[140px] transition duration-300"
            @error="handleImageError"
          />
        </router-link>


        <!-- Desktop nav -->
        <nav class="hidden md:flex items-center space-x-6">
          <template v-for="item in menuItems" :key="item.name">
            <DropdownButton v-if="item.children" :label="item.name" :items="item.children" />
            <router-link
              v-else
              :to="item.to"
              class="text-gray-900 hover:text-indigo-600 px-2 py-2 transition"
            >
              {{ item.name }}
            </router-link>
          </template>

          <!-- Globe Icon -->
          <button class="ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-500 hover:text-indigo-600 transition"
                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9z" />
            </svg>
          </button>
        </nav>

        <!-- CTA & Mobile toggle -->
        <div class="flex items-center space-x-3">
          <!-- Partner Login -->
          <button
            class="hidden md:block border border-indigo-600 text-indigo-600 px-4 py-1 rounded-md hover:bg-indigo-50 transition">
            Partner Login
          </button>

          <!-- Book a Demo -->
          <button class="hidden md:block bg-[#2563eb] text-white px-4 py-1 rounded-md hover:bg-[#1e40af] transition">
            Book a Demo
          </button>

          <!-- Mobile toggle -->
          <button
            class="md:hidden focus:outline-none"
            @click="toggleMenu"
            aria-label="Toggle navigation"
          >
            <svg
              class="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <MobileMenu v-if="mobileOpen" :menu-items="menuItems" @close="toggleMenu" />
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import DropdownButton from "./DropdownButton.vue";
import MobileMenu from "./MobileMenu.vue";

const mobileOpen = ref(false);
const toggleMenu = () => (mobileOpen.value = !mobileOpen.value);

// Scroll effect
const isScrolled = ref(false);
const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

// Logo change (optional)
const logoSrc = computed(() =>
  require("@/assets/images/logo-1-1024x194.png")
);

function handleImageError(event: Event) {
  const target = event.target as HTMLImageElement;
  target.src = "https://via.placeholder.com/150x40?text=Logo";
}

// Menu
const menuItems = [
  {
    name: "Industries",
    to: "/industries",
    children: [
      { name: "Retail", to: "/industries/retail" },
      { name: "Gaming", to: "/industries/gaming" },
      { name: "Law Enforcement", to: "/industries/law" },
      { name: "Banks", to: "/industries/banks" },
      { name: "Construction", to: "/industries/construction" },
      { name: "Airports", to: "/industries/airports" },
      { name: "Prisons", to: "/industries/prisons" },
      { name: "Transportation", to: "/industries/transportation" },
      { name: "Entertainment & Venues", to: "/industries/entertainment" },
      { name: "Tourism", to: "/industries/tourism" },
      { name: "Critical Infrastructure", to: "/industries/infrastructure" },
      { name: "Corporate Safety", to: "/industries/safety" },
      { name: "Smart & Safe City", to: "/industries/smart-city" }
    ]
  },
  {
    name: "Products",
    to: "/products",
    children: [
      { name: "Fortify", to: "/products/fortify" },
      { name: "API", to: "/products/api" }
    ]
  },
  { name: "Trust Center", to: "/trust" },
  { name: "Partner With Us", to: "/partners" },
  { name: "Press", to: "/press" },
  {
    name: "About Us",
    to: "/about",
    children: [
      { name: "Company", to: "/about/company" },
      { name: "Corsight Partners", to: "/about/partners" },
      { name: "Blog", to: "/about/blog" },
      { name: "Resources", to: "/about/resources" },
      { name: "Careers", to: "/about/careers" },
      { name: "Contact Us", to: "/about/contact" }
    ]
  }
];
</script>
