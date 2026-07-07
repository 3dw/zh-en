import type { WordPair } from './types'

/** 水果 */
export const fruitWords: WordPair[] = [
  // 基礎 (0-2500分)
  { word: 'apple', translation: '蘋果', minScore: 0, maxScore: 2500, category: '水果' },
  { word: 'banana', translation: '香蕉', minScore: 0, maxScore: 2500, category: '水果' },
  { word: 'orange', translation: '橘子', minScore: 0, maxScore: 2500, category: '水果' },
  { word: 'pear', translation: '梨', minScore: 0, maxScore: 2500, category: '水果' },
  { word: 'grape', translation: '葡萄', minScore: 0, maxScore: 2500, category: '水果' },
  { word: 'peach', translation: '桃子', minScore: 0, maxScore: 2500, category: '水果' },
  { word: 'cherry', translation: '櫻桃', minScore: 0, maxScore: 2500, category: '水果' },
  // 進階 (1000-5000分)
  { word: 'pineapple', translation: '鳳梨', minScore: 1000, maxScore: 5000, category: '水果' },
  { word: 'mango', translation: '芒果', minScore: 1000, maxScore: 5000, category: '水果' },
  { word: 'watermelon', translation: '西瓜', minScore: 1000, maxScore: 5000, category: '水果' },
  { word: 'strawberry', translation: '草莓', minScore: 1000, maxScore: 5000, category: '水果' },
]
