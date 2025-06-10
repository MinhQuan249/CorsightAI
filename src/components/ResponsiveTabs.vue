<template>
  <div
    id="uc_content_tabs_elementor_2ad63649"
    ref="tabs"
    class="tabs-wrapper"
    data-hash="true"
    data-hash-scroll="desktop+mobile"
    data-scroll-to-selected-tab-offset="-80"
    data-scroll-after-selected="true"
  >
    <ul class="tab-buttons">
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ active: activeTab === index }"
        @click="selectTab(index)"
      >
        {{ tab.title }}
      </li>
    </ul>
    <div class="tab-content">
      <div v-for="(tab, index) in tabs" :key="index" v-show="activeTab === index">
        <slot :name="tab.slot" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const activeTab = ref(0)
const tabs = [
  { title: 'Tab 1', slot: 'tab1' },
  { title: 'Tab 2', slot: 'tab2' },
  { title: 'Tab 3', slot: 'tab3' },
]

function selectTab(index) {
  activeTab.value = index
  scrollToTab()
}

// Scroll đến tab được chọn nếu không nằm trong viewport
function scrollToTab() {
  nextTick(() => {
    const tabEl = document.querySelector('.tabs-wrapper')
    if (!tabEl) return

    const offsetTop = tabEl.getBoundingClientRect().top + window.scrollY
    window.scrollTo({ top: offsetTop - 80, behavior: 'smooth' })
  })
}

// Nếu có hash thì kích hoạt tab tương ứng
onMounted(() => {
  const hash = window.location.hash.replace('#', '')
  const index = tabs.findIndex((tab) => tab.slot === hash)
  if (index !== -1) activeTab.value = index
})
</script>

<style scoped>
.tabs-wrapper {
  margin-top: 2rem;
}
.tab-buttons {
  display: flex;
  list-style: none;
  padding: 0;
}
.tab-buttons li {
  padding: 0.5rem 1rem;
  cursor: pointer;
  background: #ddd;
  margin-right: 1px;
}
.tab-buttons li.active {
  background: #666;
  color: white;
}
.tab-content {
  padding: 1rem;
  border: 1px solid #ddd;
  background: #fafafa;
}
</style>
