import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/alphabet',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/AlphabetPage.vue') }],
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
  /* {
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
  }, */
  {
    path: '/beginner',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/BeginnerPage.vue') }],
  },
  {
    path: '/emotion',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/EmotionCardsPage.vue') }],
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
    path: '/game3',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Game3Page.vue') }],
  },
  {
    path: '/game4',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Game4Page.vue') }],
  },
  {
    path: '/main-image',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/MainImagePage.vue') }],
  },
  {
    path: '/preposition-image',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/prepositionImagePage.vue') }],
  },
  {
    path: '/math-image',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/MathImagePage.vue') }],
  },
  {
    path: '/men-body-image',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/menBodyImagePage.vue') }],
  },
  {
    path: '/main-song-word',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/MainSongWordPage.vue') }],
  },
  {
    path: '/song-word',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/SongWordPage.vue') }],
  },
  {
    path: '/song2-word',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Song2WordPage.vue') }],
  },
  {
    path: '/song3-word',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Song3WordPage.vue') }],
  },
  {
    path: '/song4-word',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Song4WordPage.vue') }],
  },
  {
    path: '/nine-grid-game',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/NineGridGame.vue') }],
  },
  {
    path: '/relationship',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/RelationshipPage.vue') }],
  },
  {
    path: '/ball-direction',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/BallDirectionPage.vue') }],
  },
  {
    path: '/hand-written',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/HandWrittenPage.vue') }],
  },
  {
    path: '/image-paint',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ImagePaintPage.vue') }],
  },
  {
    path: '/favorites',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/FavoritePage.vue') }],
  },
  {
    path: '/story',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/StoryPage.vue') }],
  },
  {
    path: '/what_this_this',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/WhatIsThisPage.vue') }],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
