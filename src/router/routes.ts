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
    path: '/about',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/AboutPage.vue') }],
  },
  {
    path: '/structures',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Structures/SimpleSentencesPage.vue'),
        meta: { title: '簡單句型' },
      },
    ],
  },
  {
    path: '/env1_at_home',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Flashcards/Env1AtHomePage.vue') }],
  },
  {
    path: '/env2_playing_basketball',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Flashcards/Env2PlayingBasketballPage.vue') },
    ],
  },
  {
    path: '/env3_at_restaurant',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Flashcards/Env3AtRestaurantPage.vue') }],
  },
  {
    path: '/env4_traveling',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Flashcards/Env4TravelingPage.vue') }],
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
      {
        path: '',
        component: () => import('pages/Flashcards/NumberPage.vue'),
        meta: { title: '數字' },
      },
    ],
  },
  {
    path: '/body',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Flashcards/BodyPage.vue'),
        meta: { title: '身體部位' },
      },
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
      {
        path: '',
        component: () => import('pages/Flashcards/BeginnerPage.vue'),
        meta: { title: '初學者' },
      },
    ],
  },
  {
    path: '/emotion',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Flashcards/EmotionCardsPage.vue'),
        meta: { title: '情緒' },
      },
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
    path: '/fav/:activeTab',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/FavoritePage.vue') }],
  },
  {
    path: '/story',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/StoryPage.vue'), meta: { title: '故事' } },
    ],
  },
  {
    path: '/story_backend',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/StoryPage_backend.vue') }],
  },
  {
    path: '/what_is_this',
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
  {
    path: '/rules',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/RulesPage.vue') }],
  },
  {
    path: '/mario-game',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/MarioGamePage.vue') }],
  },
  {
    path: '/lucky-slot',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/LuckySlotPage.vue') }],
  },
  {
    path: '/draw-guess',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/DrawGuessPage.vue') }],
  },
  {
    path: '/custom_cards',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/CustomCardsPage.vue'),
        meta: { title: '自訂字卡' },
      },
    ],
  },
  {
    path: '/changelogs',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/ChangeLogsPage.vue'),
        meta: { title: '版本更新記錄' },
      },
    ],
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
