import type { WordPair } from './types'

/** 受格代名詞；"we" 的受格為 "us"，已修正 */
export const objectPronounWords: WordPair[] = [
  { word: 'me', translation: '我', minScore: 0, maxScore: 2000, category: '受格' },
  { word: 'you', translation: '你', minScore: 0, maxScore: 2000, category: '受格' },
  { word: 'him', translation: '他', minScore: 0, maxScore: 2000, category: '受格' },
  { word: 'her', translation: '她', minScore: 0, maxScore: 2000, category: '受格' },
  { word: 'them', translation: '他們', minScore: 0, maxScore: 2000, category: '受格' },
  { word: 'us', translation: '我們', minScore: 0, maxScore: 2000, category: '受格' },
]
