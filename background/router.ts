import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/form/demo/index.vue')
  },
  {
    path: '/button',
    name: 'button',
    component: () => import('@/form/button/demo/index.vue')
  },
  {
    path: '/formBox',
    name: 'Form',
    children: [
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
        path: '/inputFile',
        name: 'inputFile',
        component: () => import('@/form/file/demo/index.vue')
      }
    ]
  },
  {
    path: '/table',
    name: 'table',
    component: () => import('@/data/table/demo/index.vue')
  },
  {
    path: '/number',
    name: 'number',
    component: () => import('@/data/number/demo/index.vue')
  },
  {
    path: '/dialog',
    name: 'dialog',
    component: () => import('@/feedback/dialog/demo/index.vue')
  },
  {
    path: '/popover',
    name: 'popover',
    component: () => import('@/feedback/popover/demo/index.vue')
  },
  {
    path: '/tab',
    name: 'tab',
    component: () => import('@/layout/tab/demo/index.vue')
  },
  {
    path: '/chart',
    name: 'chart',
    component: () => import('@/chart/demo/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

