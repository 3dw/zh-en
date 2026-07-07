import type { WordPair } from './types'

/** 家庭 */
export const familyWords: WordPair[] = [
  // 基礎 (0-3000分)
  { word: 'father', translation: '爸爸', minScore: 0, maxScore: 3000, category: '家庭' },
  { word: 'mother', translation: '媽媽', minScore: 0, maxScore: 3000, category: '家庭' },
  { word: 'baby', translation: '嬰兒', minScore: 0, maxScore: 3000, category: '家庭' },
  { word: 'child', translation: '小孩', minScore: 0, maxScore: 3000, category: '家庭' },
  // 進階 (2000-6000分)
  { word: 'brother', translation: '兄弟', minScore: 2000, maxScore: 6000, category: '家庭' },
  { word: 'sister', translation: '姐妹', minScore: 2000, maxScore: 6000, category: '家庭' },
  { word: 'grandfather', translation: '爺爺', minScore: 2000, maxScore: 6000, category: '家庭' },
  { word: 'grandmother', translation: '奶奶', minScore: 2000, maxScore: 6000, category: '家庭' },
  { word: 'uncle', translation: '叔叔', minScore: 2000, maxScore: 6000, category: '家庭' },
  { word: 'aunt', translation: '阿姨', minScore: 2000, maxScore: 6000, category: '家庭' },
  { word: 'cousin', translation: '堂兄弟姊妹', minScore: 2000, maxScore: 6000, category: '家庭' },
  { word: 'grandchild', translation: '孫子', minScore: 2000, maxScore: 6000, category: '家庭' },
  { word: 'grandparent', translation: '祖父母', minScore: 2000, maxScore: 6000, category: '家庭' },
]
