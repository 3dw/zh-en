import { boot } from 'quasar/wrappers'
import VueGtag from 'vue-gtag'
import { pageview } from 'vue-gtag'

export default boot(({ app, router }) => {
  // 設定 Google Analytics
  app.use(VueGtag, {
    config: {
      id: 'G-J5RJM4B7JW', // 替換為你的 Google Analytics 測量 ID
    },
  })

  // 自動追蹤 Vue Router 的導航事件
  router.afterEach((to) => {
    pageview({
      page_path: to.fullPath,
      page_title: to.meta.title || document.title,
    })
  })
})
