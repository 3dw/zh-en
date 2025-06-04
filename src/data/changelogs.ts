export const changelogs = [
  {
    version: '1.1.0',
    date: '2025-06-04',
    changes: [{ text: '新增幸運轉盤功能', route: '/lucky-slot', type: 'new' }],
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
