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
    path: '/main-image',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/MainImagePage.vue') }],
  },
  {
    path: '/image',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ImagePage.vue') }],
  },
  {
    path: '/body-image',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/BodyImagePage.vue') }],
  },
  {
    path: '/men-body-image',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/menBodyImagePage.vue') }],
  },
  {
    path: '/beginner',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/BeginnerPage.vue') }],
  },
  {
    path: '/main-game',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/MainGamePage.vue') }],
  },
  {
    path: '/game1',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Game1Page.vue') }],
  },
  {
    path: '/game2',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Game2Page.vue') }],
  },
  {
    path: '/favorites',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/FavoritePage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
