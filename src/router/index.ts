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
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
