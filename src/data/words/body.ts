import type { WordPair } from './types'

/** 身體 */
export const bodyWords: WordPair[] = [
  // 初階 (0-3000分)
  { word: 'head', translation: '頭', minScore: 0, maxScore: 3000, category: '身體' },
  { word: 'hair', translation: '頭髮', minScore: 0, maxScore: 3000, category: '身體' },
  { word: 'eye', translation: '眼睛', minScore: 0, maxScore: 3000, category: '身體' },
  { word: 'ear', translation: '耳朵', minScore: 0, maxScore: 3000, category: '身體' },
  { word: 'nose', translation: '鼻子', minScore: 0, maxScore: 3000, category: '身體' },
  { word: 'mouth', translation: '嘴巴', minScore: 0, maxScore: 3000, category: '身體' },
  { word: 'hand', translation: '手', minScore: 0, maxScore: 3000, category: '身體' },
  { word: 'foot', translation: '腳', minScore: 0, maxScore: 3000, category: '身體' },
  { word: 'leg', translation: '腿', minScore: 0, maxScore: 3000, category: '身體' },
  { word: 'arm', translation: '手臂', minScore: 0, maxScore: 3000, category: '身體' },
  // 中階 (2000-6000分)
  { word: 'tooth', translation: '牙齒', minScore: 2000, maxScore: 6000, category: '身體' },
  { word: 'tongue', translation: '舌頭', minScore: 2000, maxScore: 6000, category: '身體' },
  { word: 'neck', translation: '脖子', minScore: 2000, maxScore: 6000, category: '身體' },
  { word: 'shoulder', translation: '肩膀', minScore: 2000, maxScore: 6000, category: '身體' },
  { word: 'finger', translation: '手指', minScore: 2000, maxScore: 6000, category: '身體' },
  { word: 'knee', translation: '膝蓋', minScore: 2000, maxScore: 6000, category: '身體' },
  // 進階 (4000-8000分)
  { word: 'heart', translation: '心臟', minScore: 4000, maxScore: 8000, category: '身體' },
  { word: 'bone', translation: '骨頭', minScore: 4000, maxScore: 8000, category: '身體' },
]
