import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'landing',
    component: () => import('@/pages/public/Landing.vue')
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('@/pages/public/PrivacyPolicy.vue')
  },
  {
    path: '/agreement',
    name: 'agreement',
    component: () => import('@/pages/public/UserAgreement.vue')
  }
]

export default routes
