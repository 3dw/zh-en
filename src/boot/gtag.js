import { boot } from 'quasar/wrappers'
import { install as VueGtag } from 'vue-gtag'

export default boot(({ app, router }) => {
  // 設定 Google Analytics
  app.use(
    VueGtag,
    {
      config: {
        id: 'G-J5RJM4B7JW',
      },
      pageTrackerTemplate(to) {
        return {
          page_path: to.fullPath,
          page_title: to.meta.title || document.title,
        }
      },
    },
    router,
  )
})
