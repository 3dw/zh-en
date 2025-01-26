import { boot } from 'quasar/wrappers'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getAnalytics } from 'firebase/analytics'

// Firebase 設定
const firebaseConfig = {
  apiKey: 'AIzaSyCijsksMi5VEVyCX2cHm57TdlH6SI1OAuw',
  authDomain: 'zh-en-6b65d.firebaseapp.com',
  databaseURL: 'https://zh-en-6b65d-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'zh-en-6b65d',
  storageBucket: 'zh-en-6b65d.firebasestorage.app',
  messagingSenderId: '460324871865',
  appId: '1:460324871865:web:85079b66d2727d2b2d4568',
  measurementId: 'G-N6KED3FETJ',
}

// 初始化 Firebase
const firebaseApp = initializeApp(firebaseConfig)
const analytics = getAnalytics(firebaseApp)
const auth = getAuth(firebaseApp)
export default boot(({ app }) => {
  app.config.globalProperties.$firebaseApp = firebaseApp
  app.config.globalProperties.$analytics = analytics
  app.config.globalProperties.$auth = auth
})
