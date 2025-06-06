export interface Feature {
  id: string
  title: string
  description: string
  keywords: string[]
  route: string
  icon: string
  category: string
  featured?: boolean
}

export const features: Feature[] = [
  {
    id: 'beginner',
    featured: true,
    title: '雙語字卡',
    description:
      '提供中英雙語對照的字卡學習功能，幫助您快速記憶單字。每張字卡都包含發音、例句和相關圖片，讓學習更加生動有趣。',
    keywords: ['字卡', '單字', '學習', '英文', '中文', '對照', '發音', '例句', '圖片'],
    route: '/beginner',
    icon: 'school',
    category: '基礎學習',
  },
  {
    id: 'alphabet',
    title: 'ABC之歌',
    description: '透過生動有趣的歌曲學習英文字母，讓字母學習變得輕鬆有趣。適合初學者建立字母基礎。',
    keywords: ['字母', 'ABC', '歌曲', '音樂', '初學者', '基礎'],
    route: '/alphabet',
    icon: 'add',
    category: '基礎學習',
  },
  {
    id: 'hand-written',
    title: '英文字母手寫練習',
    description:
      '提供英文字母的書寫練習功能，包含大小寫字母的筆順動畫和練習空間。適合初學者練習英文書寫。',
    keywords: ['字母', '書寫', '練習', '筆順', '初學者', '手寫', 'ABC'],
    route: '/hand-written',
    icon: 'edit',
    category: '基礎學習',
  },
  {
    id: 'emotion',
    title: '狀態雙語字卡',
    description: '學習表達各種情緒和狀態的英文單字，幫助您更準確地表達自己的感受。',
    keywords: ['情緒', '狀態', '感受', '字卡', '表達'],
    route: '/emotion',
    icon: 'sentiment_satisfied',
    category: '基礎學習',
  },
  {
    id: 'body',
    title: '健康雙語字卡',
    description: '學習與身體健康相關的英文單字，包含身體部位、症狀和醫療用語等實用詞彙。',
    keywords: ['健康', '身體', '醫療', '症狀', '字卡'],
    route: '/body',
    icon: 'person',
    category: '基礎學習',
  },
  {
    id: 'number',
    title: '數字雙語字卡',
    description: '學習英文數字表達，從基本數字到複雜數字的讀法和寫法，幫助您掌握數字相關的英文。',
    keywords: ['數字', '計數', '數學', '字卡'],
    route: '/number',
    icon: 'school',
    category: '基礎學習',
  },
  {
    id: 'env1_at_home',
    title: '情境1：在家裡',
    description: '學習在家中常見物品和情境的英文表達，讓您能夠用英文描述居家生活。',
    keywords: ['情境', '居家', '生活', '字卡', '實用'],
    route: '/env1_at_home',
    icon: 'home',
    category: '情境學習',
  },
  {
    id: 'env2_playing_basketball',
    title: '情境2：打籃球',
    description: '學習籃球運動相關的英文詞彙，包含動作、規則和常用對話，讓您能夠用英文討論籃球。',
    keywords: ['籃球', '運動', '情境', '字卡', '實用'],
    route: '/env2_playing_basketball',
    icon: 'sports_basketball',
    category: '情境學習',
  },
  {
    id: 'env3_at_restaurant',
    title: '情境3：在餐廳',
    description:
      '學習餐廳用餐相關的英文表達，包含點餐、用餐禮儀和常見對話，讓您能夠自信地在餐廳使用英文。',
    keywords: ['餐廳', '用餐', '情境', '字卡', '實用'],
    route: '/env3_at_restaurant',
    icon: 'restaurant',
    category: '情境學習',
  },
  {
    id: 'env4_traveling',
    title: '情境4：旅行中',
    description: '學習旅行相關的英文詞彙，包含交通、住宿、觀光等實用表達，讓您的旅行更加順暢。',
    keywords: ['旅行', '觀光', '情境', '字卡', '實用'],
    route: '/env4_traveling',
    icon: 'travel_explore',
    category: '情境學習',
  },
  {
    id: 'favorites',
    title: '我的最愛',
    featured: true,
    description: '收藏您喜歡的單字和句子，方便日後複習。可以建立個人化的學習清單，追蹤學習進度。',
    keywords: ['收藏', '複習', '清單', '進度', '個人化'],
    route: '/favorites',
    icon: 'favorite',
    category: '個人管理',
  },
  {
    id: 'custom_cards',
    featured: true,
    title: '自訂字卡',
    description: '創建屬於自己的字卡，可以加入圖片、發音和例句，打造個人化的學習內容。',
    keywords: ['自訂', '字卡', '創建', '個人化', '學習'],
    route: '/custom_cards',
    icon: 'edit_note',
    category: '個人管理',
  },
  {
    id: 'structures',
    title: '句型學習',
    featured: true,
    description: '學習常用的英文句型結構，透過例句和練習，掌握正確的英文表達方式。',
    keywords: ['句型', '語法', '結構', '表達', '學習'],
    route: '/structures',
    icon: 'build',
    category: '進階學習',
  },
  {
    id: 'lucky-slot',
    title: '幸運轉盤',
    featured: true,
    description:
      '透過拉霸機的遊戲方式學習英文，每天可以玩100次。結合單字學習和趣味遊戲，讓學習過程更加有趣。',
    keywords: ['轉盤', '遊戲', '單字', '學習', '趣味', '每日任務', '獎勵'],
    route: '/lucky-slot',
    icon: 'attractions',
    category: '趣味學習',
  },
  {
    id: 'main-game',
    title: '小遊戲',
    description: '透過各種有趣的遊戲學習英文，讓學習過程充滿樂趣。適合所有年齡層的學習者。',
    keywords: ['遊戲', '趣味', '學習', '互動', '娛樂'],
    route: '/main-game',
    icon: 'gamepad',
    category: '趣味學習',
  },
  {
    id: 'ball-direction',
    title: '英文方向學習',
    description: '透過互動遊戲學習英文方向詞彙，幫助您掌握空間和方向的英文表達。',
    keywords: ['方向', '空間', '遊戲', '學習', '互動'],
    route: '/ball-direction',
    icon: 'swap_horiz',
    category: '趣味學習',
  },
  {
    id: 'image-paint',
    title: '圖片上色學英文',
    description: '透過圖片上色活動學習英文，結合視覺藝術和語言學習，讓學習更加生動有趣。',
    keywords: ['上色', '圖片', '藝術', '學習', '視覺'],
    route: '/image-paint',
    icon: 'palette',
    category: '趣味學習',
  },
  {
    id: 'nine-grid-game',
    title: '中英文九宮格對戰',
    description: '透過九宮格遊戲學習中英文對照，考驗您的反應能力和詞彙量。',
    keywords: ['九宮格', '對戰', '遊戲', '學習', '對照'],
    route: '/nine-grid-game',
    icon: 'grid_view',
    category: '趣味學習',
  },
  {
    id: 'relationship',
    title: '中英文關係稱謂學習',
    description: '學習各種人際關係的英文稱謂，幫助您準確表達人際關係。',
    keywords: ['關係', '稱謂', '人際', '學習', '對照'],
    route: '/relationship',
    icon: 'supervisor_account',
    category: '進階學習',
  },
  {
    id: 'mario-game',
    title: '跳跳人遊戲',
    featured: true,
    description: '透過跳跳人遊戲學習英文，讓學習過程更加有趣。',
    keywords: ['跳跳人', '遊戲', '學習', '英文'],
    route: '/mario-game',
    icon: 'sports_basketball',
    category: '趣味學習',
  },
  {
    id: 'opposites',
    featured: true,
    title: '相反詞拉鋸戰',
    description: '透過遊戲學習英文相反詞，加深對詞彙的理解和記憶。',
    keywords: ['相反詞', '對比', '遊戲', '學習', '詞彙'],
    route: '/opposites',
    icon: 'swap_horiz',
    category: '趣味學習',
  },
  {
    id: 'playback',
    title: '今日回顧',
    description: '回顧今天的學習內容，鞏固所學知識，追蹤學習進度。',
    keywords: ['回顧', '複習', '進度', '學習', '追蹤'],
    route: '/playback',
    icon: 'edit',
    category: '個人管理',
  },
  {
    id: 'speakout',
    featured: true,
    title: '開口說',
    description: '提供口說練習功能，幫助您提升英文口語能力，建立說英文的信心。',
    keywords: ['口說', '發音', '練習', '對話', '學習'],
    route: '/fav/speakout',
    icon: 'volume_up',
    category: '聽覺學習',
  },
  {
    id: 'main-song-word',
    title: '英文兒歌',
    description: '透過英文兒歌學習，讓學習過程更加輕鬆愉快，適合所有年齡層的學習者。',
    keywords: ['兒歌', '音樂', '歌曲', '學習', '聽覺'],
    route: '/main-song-word',
    icon: 'music_note',
    category: '聽覺學習',
  },
  {
    id: 'story_backend',
    title: '英文睡前故事',
    featured: true,
    description:
      '提供豐富的英文故事內容，包含不同難度等級的文章。每篇文章都配有中文翻譯和重點單字解釋，幫助您提升閱讀能力。',
    keywords: ['故事', '閱讀', '文章', '翻譯', '單字', '閱讀能力', '英文故事'],
    route: '/story_backend',
    icon: 'image',
    category: '聽覺學習',
  },
  {
    id: 'main-image',
    title: '看圖學單字',
    description: '透過圖片學習英文單字，結合視覺記憶，讓學習更加直觀有效。',
    keywords: ['圖片', '單字', '視覺', '學習', '記憶'],
    route: '/main-image',
    icon: 'visibility',
    category: '視覺學習',
  },
  {
    id: 'what_is_this',
    title: '拍照分析',
    featured: true,
    description:
      '使用相機拍攝物品，系統會自動識別並提供相關的英文單字和用法說明。適合在日常生活中學習實用英文。',
    keywords: ['拍照', '識別', '物品', '實用', '生活', '相機', 'AI', '識別'],
    route: '/what_is_this',
    icon: 'camera_alt',
    category: '視覺學習',
  },
  {
    id: 'gallery',
    title: '圖片小測驗',
    featured: true,
    description:
      '提供兩種學習模式：AI 圖片描述畫廊和 4 選 1 小測驗。在畫廊中可以瀏覽所有圖片及其英文描述，並能播放發音；在小測驗中，系統會隨機出題，測試您的英文理解能力，連續答對還能獲得額外獎勵！',
    keywords: ['測驗', '圖片', '選擇題', '畫廊', 'AI', '發音', '獎勵', '連續答對', '學習'],
    route: '/gallery',
    icon: 'collections',
    category: '視覺學習',
  },
]

// 根據關鍵字搜尋功能
export function searchFeatures(keyword: string): Feature[] {
  const searchTerm = keyword.toLowerCase().trim()
  if (!searchTerm) return features

  return features.filter((feature) => {
    // 搜尋標題
    if (feature.title.toLowerCase().includes(searchTerm)) return true
    // 搜尋描述
    if (feature.description.toLowerCase().includes(searchTerm)) return true
    // 搜尋關鍵字
    if (feature.keywords.some((k) => k.toLowerCase().includes(searchTerm))) return true
    // 搜尋分類
    if (feature.category.toLowerCase().includes(searchTerm)) return true

    return false
  })
}

// 獲取所有分類
export function getAllCategories(): string[] {
  return [...new Set(features.map((feature) => feature.category))]
}

// 根據分類獲取功能
export function getFeaturesByCategory(category: string): Feature[] {
  return features.filter((feature) => feature.category === category)
}
