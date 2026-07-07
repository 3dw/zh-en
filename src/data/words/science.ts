import type { WordPair } from './types'

/** 科學 */
export const scienceWords: WordPair[] = [
  // 初階 (0-3000分)
  { word: 'star', translation: '星星', minScore: 0, maxScore: 3000, category: '科學' },
  { word: 'planet', translation: '行星', minScore: 0, maxScore: 3000, category: '科學' },
  { word: 'gas', translation: '氣體', minScore: 0, maxScore: 3000, category: '科學' },
  { word: 'liquid', translation: '液體', minScore: 0, maxScore: 3000, category: '科學' },
  { word: 'solid', translation: '固體', minScore: 0, maxScore: 3000, category: '科學' },
  { word: 'temperature', translation: '溫度', minScore: 0, maxScore: 3000, category: '科學' },
  { word: 'force', translation: '力', minScore: 0, maxScore: 3000, category: '科學' },
  // 中階 (3000-7000分)
  { word: 'atom', translation: '原子', minScore: 3000, maxScore: 7000, category: '科學' },
  { word: 'energy', translation: '能量', minScore: 3000, maxScore: 7000, category: '科學' },
  { word: 'gravity', translation: '重力', minScore: 3000, maxScore: 7000, category: '科學' },
  { word: 'matter', translation: '物質', minScore: 3000, maxScore: 7000, category: '科學' },
  { word: 'cell', translation: '細胞', minScore: 3000, maxScore: 7000, category: '科學' },
  { word: 'chemical', translation: '化學物質', minScore: 3000, maxScore: 7000, category: '科學' },
  // 進階 (5000-9000分)
  { word: 'molecule', translation: '分子', minScore: 5000, maxScore: 9000, category: '科學' },
  { word: 'gene', translation: '基因', minScore: 5000, maxScore: 9000, category: '科學' },
  { word: 'experiment', translation: '實驗', minScore: 5000, maxScore: 9000, category: '科學' },
]
