<template>
  <div
    id="uc_content_carousel_new_elementor_6766767"
    ref="carousel"
    class="carousel-wrapper"
    :data-lightbox="true"
  >
    <div
      class="uc_image_carousel_container_holder"
      v-for="(item, index) in items"
      :key="index"
      :data-fancy-index="index"
    >
      <a class="ue_img_link" :href="item.src" data-fancybox="gallery">
        <img :src="item.thumbnail" :alt="item.alt" />
      </a>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import $ from 'jquery'
import 'owl.carousel'
import '@fancyapps/fancybox'

const items = [
  {
    src: '/assets/img/gallery1.jpg',
    thumbnail: '/assets/img/thumb1.jpg',
    alt: 'Image 1',
  },
  {
    src: '/assets/img/gallery2.jpg',
    thumbnail: '/assets/img/thumb2.jpg',
    alt: 'Image 2',
  },
  // thêm ảnh khác nếu có
]

onMounted(() => {
  const $carousel = $('#uc_content_carousel_new_elementor_6766767')

  $carousel.owlCarousel({
    loop: true,
    rtl: false,
    center: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    dots: true,
    navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
    nav: true,
    autoplay: true,
    margin: 50,
    autoHeight: false,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      980: { items: 3 },
    },
  })

  // Gắn fancybox
  setTimeout(() => {
    const fancyLink = $carousel.find('.owl-item:not(.cloned) .ue_img_link')
    fancyLink.attr('data-fancybox', 'gallery')
    fancyLink.fancybox({
      loop: true,
      arrows: true,
      backFocus: false,
    })

    // Trigger clone click
    $carousel.find('.owl-item.cloned').on('click', function () {
      const index = $(this).find('.uc_image_carousel_container_holder').data('fancy-index')
      const originItem = $carousel.find(
        `.owl-item:not(.cloned) [data-fancy-index="${index}"] .ue_img_link`
      )
      originItem.trigger('click')
    })
  }, 300)
})
</script>

<style scoped>
.carousel-wrapper {
  margin: 0 auto;
  max-width: 1200px;
}
.uc_image_carousel_container_holder img {
  width: 100%;
  display: block;
}
</style>
