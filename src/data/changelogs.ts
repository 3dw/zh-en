export const changelogs = [
  {
    version: '1.4.0',
    date: '2026-06-19',
    changes: [
      {
        text: '跳跳人遊戲新增克漏字母模式：挖掉單字中一個字母，選出正確的候選字母',
        route: '/mario-game',
        type: 'new',
      },
      {
        text: '跳跳人遊戲新增字組功能：可切換情緒、身體、動物、工具、數學、科學、學校、代名詞（主格／所有格／受格）等多種字組',
        route: '/mario-game',
        type: 'new',
      },
      {
        text: '跳跳人遊戲新增通關勝利畫面：總分達 15000 分即過關',
        route: '/mario-game',
        type: 'new',
      },
    ],
  },
  {
    version: '1.3.1',
    date: '2026-06-15',
    changes: [
      {
        text: '修正英文發音金屬音：統一語音播放函式並改用高品質偏好語音',
        route: '/',
        type: 'improvement',
      },
      {
        text: '修正 iPad 跳跳人遊戲無法移動：改用觸控偵測顯示虛擬按鈕',
        route: '/mario-game',
        type: 'improvement',
      },
      {
        text: '新增GitHub維護與回報問題功能',
        href: 'https://github.com/3dw/zh-en/issues',
        target: '_blank',
        rel: 'noopener noreferrer',
        type: 'improvement',
      },
    ],
  },
  {
    version: '1.3.0',
    date: '2026-06-08',
    changes: [
      {
        text: '自主學英文需要您捐款，以支持本站運作和更新',
        href: 'https://github.com/3dw/zh-en/wiki/%E5%B0%8F%E9%A1%8D%E6%8D%90%E6%AC%BE%E9%82%80%E7%B4%84',
        target: '_blank',
        rel: 'noopener noreferrer',
        type: 'improvement',
      },
      {
        text: '修復圖片小測驗之發音',
        route: '/gallery',
        type: 'improvement',
      },
      {
        text: '修復英文睡前故事生成功能',
        route: '/story_backend',
        type: 'improvement',
      },
    ],
  },
  {
    version: '1.2.8',
    date: '2026-05-18',
    changes: [
      {
        text: '我的最愛新增匯出 / 匯入 JSON 功能（含 isFavorite 標記）',
        route: '/favorites',
        type: 'improvement',
      },
      {
        text: '自訂字卡管理新增「編輯字卡」功能（可改中英文，圖片唯讀）',
        route: '/custom_cards',
        type: 'improvement',
      },
      {
        text: '拍照分析「存到最愛」同時寫入自訂字卡（含圖片），並移至「個人管理」分類',
        route: '/what_is_this',
        type: 'improvement',
      },
      {
        text: '允許手機與平板上以雙指縮放放大頁面',
        route: '/',
        type: 'improvement',
      },
    ],
  },
  {
    version: '1.2.7',
    date: '2026-05-07',
    changes: [
      {
        text: '修正我的最愛發音：對齊字卡語音設定',
        route: '/favorites',
        type: 'improvement',
      },
    ],
  },
  {
    version: '1.2.6',
    date: '2026-04-27',
    changes: [
      {
        text: '新增字卡播放速度偏好設定',
        route: '/favorites',
        type: 'improvement',
      },
    ],
  },
  {
    version: '1.2.5',
    date: '2026-04-13',
    changes: [
      {
        text: '自訂字卡管理功能優化：新增字卡匯出與匯入功能',
        route: '/custom_cards',
        type: 'improvement',
      },
    ],
  },
  {
    version: '1.2.4',
    date: '2026-04-11',
    changes: [
      {
        text: '大寫/小寫字母發音選字遊戲優化：改善合成發音品質（減少金屬音）',
        route: '/game1',
        type: 'improvement',
      },
      { text: '大寫/小寫字母選字按鈕字體放大', route: '/game2', type: 'improvement' },
      {
        text: '大寫/小寫字母發音選字遊戲加入側欄與首頁「字」分類',
        route: '/game1',
        type: 'improvement',
      },
    ],
  },
  {
    version: '1.2.3',
    date: '2026-04-10',
    changes: [
      { text: '情緒字卡新增圖片顯示', route: '/emotion', type: 'improvement' },
      {
        text: '看圖選單字遊戲升級：改善合成發音品質、新增50張情緒圖卡',
        route: '/game3',
        type: 'improvement',
      },
      { text: '看圖選單字遊戲加入側欄與首頁「詞」分類', route: '/game3', type: 'improvement' },
    ],
  },
  {
    version: '1.2.2',
    date: '2026-02-20',
    changes: [{ text: '新增正確發音讀詩詞與讀經功能', route: '/changelogs', type: 'improvement' }],
  },
  {
    version: '1.2.1',
    date: '2025-11-14',
    changes: [{ text: '以字、詞、句結構重整網站架構', route: '/', type: 'improvement' }],
  },
  {
    version: '1.1.1',
    date: '2025-08-06',
    changes: [{ text: '跳跳人遊戲優化', route: '/mario-game', type: 'improvement' }],
  },
  {
    version: '1.1.0',
    date: '2025-06-05',
    changes: [
      { text: '新增跳跳人遊戲功能', route: '/mario-game', type: 'new' },
      { text: '首頁新增精選項目', route: '/', type: 'improvement' },
      { text: '首頁新增搜尋功能', route: '/', type: 'improvement' },
      { text: '新增幸運轉盤功能', route: '/lucky-slot', type: 'new' },
    ],
  },
  {
    version: '1.0.2',
    date: '2025-03-24',
    changes: [{ text: '新增自訂字卡管理功能', route: '/custom_cards', type: 'improvement' }],
  },
  {
    version: '1.0.1',
    date: '2025-03-24',
    changes: [
      { text: '新增自訂字卡功能', route: '/custom_cards', type: 'new' },
      { text: '新增自動英翻中、中翻英功能', route: '/custom_cards', type: 'improvement' },
      { text: '新增版本更新記錄功能', route: '/changelogs', type: 'new' },
    ],
  },
  {
    version: '1.0.0',
    date: '2025-03-17',
    changes: [
      { text: '新增我的最愛的語音測驗功能', route: '/fav/speakout', type: 'new' },
      { text: '新增我的最愛的四選一測驗功能', route: '/favorites', type: 'new' },
      { text: '新增我的最愛的克漏字測驗功能', route: '/fav/cloze', type: 'new' },
    ],
  },
]
