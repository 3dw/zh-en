import type { WordPair } from './types'

/** 工具 */
export const toolWords: WordPair[] = [
  // 初階 (0-3000分)
  { word: 'hammer', translation: '鎚子', minScore: 0, maxScore: 3000, category: '工具' },
  { word: 'saw', translation: '鋸子', minScore: 0, maxScore: 3000, category: '工具' },
  { word: 'nail', translation: '釘子', minScore: 0, maxScore: 3000, category: '工具' },
  { word: 'screw', translation: '螺絲', minScore: 0, maxScore: 3000, category: '工具' },
  { word: 'knife', translation: '刀子', minScore: 0, maxScore: 3000, category: '工具' },
  { word: 'scissors', translation: '剪刀', minScore: 0, maxScore: 3000, category: '工具' },
  { word: 'ruler', translation: '尺', minScore: 0, maxScore: 3000, category: '工具' },
  { word: 'rope', translation: '繩子', minScore: 0, maxScore: 3000, category: '工具' },
  // 中階 (3000-7000分)
  { word: 'screwdriver', translation: '螺絲起子', minScore: 3000, maxScore: 7000, category: '工具' },
  { word: 'wrench', translation: '扳手', minScore: 3000, maxScore: 7000, category: '工具' },
  { word: 'drill', translation: '電鑽', minScore: 3000, maxScore: 7000, category: '工具' },
  { word: 'pliers', translation: '鉗子', minScore: 3000, maxScore: 7000, category: '工具' },
  { word: 'ladder', translation: '梯子', minScore: 3000, maxScore: 7000, category: '工具' },
  { word: 'shovel', translation: '鏟子', minScore: 3000, maxScore: 7000, category: '工具' },
  // 進階 (5000-9000分)
  { word: 'glue', translation: '膠水', minScore: 5000, maxScore: 9000, category: '工具' },
]
