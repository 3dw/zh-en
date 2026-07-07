import type { WordPair } from './types'

/** 數學 */
export const mathWords: WordPair[] = [
  // 初階 (0-3000分)
  { word: 'number', translation: '數字', minScore: 0, maxScore: 3000, category: '數學' },
  { word: 'add', translation: '加', minScore: 0, maxScore: 3000, category: '數學' },
  { word: 'subtract', translation: '減', minScore: 0, maxScore: 3000, category: '數學' },
  { word: 'count', translation: '計算', minScore: 0, maxScore: 3000, category: '數學' },
  { word: 'circle', translation: '圓形', minScore: 0, maxScore: 3000, category: '數學' },
  { word: 'square', translation: '正方形', minScore: 0, maxScore: 3000, category: '數學' },
  { word: 'equal', translation: '等於', minScore: 0, maxScore: 3000, category: '數學' },
  // 中階 (2000-6000分)
  { word: 'multiply', translation: '乘', minScore: 2000, maxScore: 6000, category: '數學' },
  { word: 'divide', translation: '除', minScore: 2000, maxScore: 6000, category: '數學' },
  { word: 'sum', translation: '總和', minScore: 2000, maxScore: 6000, category: '數學' },
  { word: 'angle', translation: '角度', minScore: 2000, maxScore: 6000, category: '數學' },
  { word: 'triangle', translation: '三角形', minScore: 2000, maxScore: 6000, category: '數學' },
  { word: 'rectangle', translation: '長方形', minScore: 2000, maxScore: 6000, category: '數學' },
  // 進階 (4000-8000分)
  { word: 'fraction', translation: '分數', minScore: 4000, maxScore: 8000, category: '數學' },
  { word: 'decimal', translation: '小數', minScore: 4000, maxScore: 8000, category: '數學' },
  { word: 'percent', translation: '百分比', minScore: 4000, maxScore: 8000, category: '數學' },
]
