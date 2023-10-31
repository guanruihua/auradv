import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/form/demo/index.vue')
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('@/form/demo/index.vue')
  },
  {
    path: '/input',
    name: 'input',
    component: () => import('@/form/input/demo/index.vue')
  },
  {
    path: '/table',
    name: 'table',
    component: () => import('@/data/table/demo/index.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
