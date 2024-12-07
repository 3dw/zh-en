import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/number',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/NumberPage.vue') }],
  },
  {
    path: '/body',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/BodyPage.vue') }],
  },
  {
    path: '/beginner',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/BeginnerPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
