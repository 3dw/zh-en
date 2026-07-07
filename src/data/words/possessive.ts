import type { WordPair } from './types'

/** 所有格代名詞 */
export const possessiveWords: WordPair[] = [
  { word: 'my', translation: '我的', minScore: 0, maxScore: 2000, category: '所有格' },
  { word: 'your', translation: '你的', minScore: 0, maxScore: 2000, category: '所有格' },
  { word: 'his', translation: '他的', minScore: 0, maxScore: 2000, category: '所有格' },
  { word: 'her', translation: '她的', minScore: 0, maxScore: 2000, category: '所有格' },
  { word: 'its', translation: '它的', minScore: 0, maxScore: 2000, category: '所有格' },
  { word: 'their', translation: '他們的', minScore: 0, maxScore: 2000, category: '所有格' },
  { word: 'our', translation: '我們的', minScore: 0, maxScore: 2000, category: '所有格' },
]
