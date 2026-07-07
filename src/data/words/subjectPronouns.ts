import type { WordPair } from './types'

/** 主格代名詞 */
export const subjectPronounWords: WordPair[] = [
  { word: 'I', translation: '我', minScore: 0, maxScore: 2000, category: '主格' },
  { word: 'you', translation: '你', minScore: 0, maxScore: 2000, category: '主格' },
  { word: 'he', translation: '他', minScore: 0, maxScore: 2000, category: '主格' },
  { word: 'she', translation: '她', minScore: 0, maxScore: 2000, category: '主格' },
  { word: 'it', translation: '它', minScore: 0, maxScore: 2000, category: '主格' },
  { word: 'they', translation: '他們', minScore: 0, maxScore: 2000, category: '主格' },
  { word: 'we', translation: '我們', minScore: 0, maxScore: 2000, category: '主格' },
]
