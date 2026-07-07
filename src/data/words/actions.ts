import type { WordPair } from './types'

/** 動作 */
export const actionWords: WordPair[] = [
  // 基礎 (0-3000分)
  { word: 'run', translation: '跑步', minScore: 0, maxScore: 3000, category: '動作' },
  { word: 'walk', translation: '走路', minScore: 0, maxScore: 3000, category: '動作' },
  { word: 'jump', translation: '跳躍', minScore: 0, maxScore: 3000, category: '動作' },
  { word: 'eat', translation: '吃', minScore: 0, maxScore: 3000, category: '動作' },
  { word: 'drink', translation: '喝', minScore: 0, maxScore: 3000, category: '動作' },
  // 進階 (3000-7000分)
  { word: 'swim', translation: '游泳', minScore: 3000, maxScore: 7000, category: '動作' },
  { word: 'sleep', translation: '睡覺', minScore: 3000, maxScore: 7000, category: '動作' },
  { word: 'read', translation: '閱讀', minScore: 3000, maxScore: 7000, category: '動作' },
  { word: 'write', translation: '寫字', minScore: 3000, maxScore: 7000, category: '動作' },
  { word: 'draw', translation: '畫畫', minScore: 3000, maxScore: 7000, category: '動作' },
  { word: 'sing', translation: '唱歌', minScore: 3000, maxScore: 7000, category: '動作' },
  { word: 'dance', translation: '跳舞', minScore: 3000, maxScore: 7000, category: '動作' },
  { word: 'play', translation: '玩', minScore: 3000, maxScore: 7000, category: '動作' },
  // 高級 (4000-8000分)
  { word: 'study', translation: '學習', minScore: 4000, maxScore: 8000, category: '動作' },
  { word: 'cook', translation: '煮飯', minScore: 4000, maxScore: 8000, category: '動作' },
  { word: 'clean', translation: '打掃', minScore: 4000, maxScore: 8000, category: '動作' },
  { word: 'wash', translation: '洗', minScore: 4000, maxScore: 8000, category: '動作' },
  { word: 'brush', translation: '刷', minScore: 4000, maxScore: 8000, category: '動作' },
  { word: 'smile', translation: '微笑', minScore: 4000, maxScore: 8000, category: '動作' },
  { word: 'laugh', translation: '大笑', minScore: 4000, maxScore: 8000, category: '動作' },
]
