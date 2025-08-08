import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'landing',
    component: () => import('@/pages/public/Landing.vue')
  }
]

export default routes
