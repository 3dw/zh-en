import type { WordPair } from './types'

/** 學校 */
export const schoolWords: WordPair[] = [
  // 初階 (0-3000分)
  { word: 'teacher', translation: '老師', minScore: 0, maxScore: 3000, category: '學校' },
  { word: 'student', translation: '學生', minScore: 0, maxScore: 3000, category: '學校' },
  { word: 'desk', translation: '書桌', minScore: 0, maxScore: 3000, category: '學校' },
  { word: 'pencil', translation: '鉛筆', minScore: 0, maxScore: 3000, category: '學校' },
  { word: 'pen', translation: '筆', minScore: 0, maxScore: 3000, category: '學校' },
  // 中階 (2000-6000分)
  { word: 'classroom', translation: '教室', minScore: 2000, maxScore: 6000, category: '學校' },
  { word: 'eraser', translation: '橡皮擦', minScore: 2000, maxScore: 6000, category: '學校' },
  { word: 'notebook', translation: '筆記本', minScore: 2000, maxScore: 6000, category: '學校' },
  { word: 'backpack', translation: '書包', minScore: 2000, maxScore: 6000, category: '學校' },
  { word: 'homework', translation: '作業', minScore: 2000, maxScore: 6000, category: '學校' },
  { word: 'lesson', translation: '課程', minScore: 2000, maxScore: 6000, category: '學校' },
  { word: 'recess', translation: '下課', minScore: 2000, maxScore: 6000, category: '學校' },
  // 進階 (4000-8000分)
  { word: 'blackboard', translation: '黑板', minScore: 4000, maxScore: 8000, category: '學校' },
  { word: 'exam', translation: '考試', minScore: 4000, maxScore: 8000, category: '學校' },
  { word: 'subject', translation: '科目', minScore: 4000, maxScore: 8000, category: '學校' },
  { word: 'library', translation: '圖書館', minScore: 4000, maxScore: 8000, category: '學校' },
]
