import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue'), meta: { title: '首頁' } },
    ],
  },
  {
    path: '/alphabet',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AlphabetPage.vue'), meta: { title: '字母' } },
    ],
  },
  {
    path: '/number',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/NumberPage.vue'), meta: { title: '數字' } },
    ],
  },
  {
    path: '/body',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/BodyPage.vue'), meta: { title: '身體部位' } },
    ],
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
    children: [
      { path: '', component: () => import('pages/BeginnerPage.vue'), meta: { title: '初學者' } },
    ],
  },
  {
    path: '/emotion',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/EmotionCardsPage.vue'), meta: { title: '情緒' } },
    ],
  },
  {
    path: '/main-game',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/MainGamePage.vue'), meta: { title: '主遊戲' } },
    ],
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
    children: [
      { path: '', component: () => import('pages/HandWrittenPage.vue'), meta: { title: '手寫' } },
    ],
  },
  {
    path: '/image-paint',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ImagePaintPage.vue'), meta: { title: '畫圖' } },
    ],
  },
  {
    path: '/favorites',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/FavoritePage.vue'), meta: { title: '最愛' } },
    ],
  },
  {
    path: '/story',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/StoryPage.vue'), meta: { title: '故事' } },
    ],
  },
  {
    path: '/what_this_this',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/WhatIsThisPage.vue'),
        meta: { title: '這是什麼？' },
      },
    ],
  },
  {
    path: '/gallery',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/GalleryPage.vue') }],
  },
  {
    path: '/opposites',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/OppositesGamePage.vue'),
        meta: { title: '反義詞' },
      },
    ],
  },
  {
    path: '/playback',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/PlaybackPage.vue') }],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
    meta: { title: '錯誤' },
  },
]

export default routes
