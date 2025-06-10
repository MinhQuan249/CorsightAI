<template>
  <section class="relative w-full h-[80vh] overflow-hidden bg-black text-white">
    <!-- Video background -->
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute inset-0 w-full h-full object-cover opacity-50"
    >
      <source src="/assets/videos/hp_video.mp4" type="video/mp4" />
    </video>

    <!-- Overlay content -->
    <div class="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold max-w-3xl mb-6 leading-tight">
        The Hidden Costs of Missing Real Time Threats
      </h1>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base max-w-2xl mb-6">
        <p class="flex items-center gap-2">
          <span class="text-indigo-400">✔</span> Identify individuals in real time
        </p>
        <p class="flex items-center gap-2">
          <span class="text-indigo-400">✔</span> Flag unauthorized access
        </p>
        <p class="flex items-center gap-2">
          <span class="text-indigo-400">✔</span> Detect behavior & patterns
        </p>
        <p class="flex items-center gap-2">
          <span class="text-indigo-400">✔</span> Prevent future threats
        </p>
      </div>

      <button
        class="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl shadow transition"
      >
        Book a Meeting
      </button>
    </div>

    <!-- Gradient overlay (optional for contrast) -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 z-[1]"></div>
  </section>
</template>

<script setup>
// Không cần JS đặc biệt cho Hero ở bước này
</script>
