import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
  },
  {
    path: '/about/company',
    name: 'about-company',
    component: () => import('@/views/AboutView.vue'), // reuse or split if needed
  },
  {
    path: '/about/partners',
    name: 'about-partners',
    component: () => import('@/views/AboutView.vue'),
  },
  {
    path: '/about/blog',
    name: 'about-blog',
    component: () => import('@/views/AboutView.vue'),
  },
  {
    path: '/about/resources',
    name: 'about-resources',
    component: () => import('@/views/AboutView.vue'),
  },
  {
    path: '/about/careers',
    name: 'about-careers',
    component: () => import('@/views/AboutView.vue'),
  },
  {
    path: '/about/contact',
    name: 'about-contact',
    component: () => import('@/views/AboutView.vue'),
  },
  {
    path: '/industries',
    name: 'industries',
    component: () => import('@/views/IndustriesView.vue'),
  },
  {
    path: '/industries/:id',
    name: 'industry-detail',
    component: () => import('@/views/IndustryDetailView.vue'),
    props: true,
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('@/views/ProductsView.vue'),
  },
  {
    path: '/products/:id',
    name: 'product-detail',
    component: () => import('@/views/ProductDetailView.vue'),
    props: true,
  },
  {
    path: '/partners',
    name: 'partners',
    component: () => import('@/views/PartnersView.vue'),
  },
  {
    path: '/trust',
    name: 'trust',
    component: () => import('@/views/AboutView.vue'), // or a specific TrustView.vue
  },
  {
    path: '/press',
    name: 'press',
    component: () => import('@/views/AboutView.vue'), // or a specific PressView.vue
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
