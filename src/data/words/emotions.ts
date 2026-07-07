import type { WordPair } from './types'

/** 情緒（選「全部」時依分數難度篩選；選特定主題時整組隨機出題） */
export const emotionWords: WordPair[] = [
  // 初階 (0-3000分)
  { word: 'happy', translation: '快樂', minScore: 0, maxScore: 3000, category: '情緒' },
  { word: 'sad', translation: '難過', minScore: 0, maxScore: 3000, category: '情緒' },
  { word: 'angry', translation: '生氣', minScore: 0, maxScore: 3000, category: '情緒' },
  { word: 'scared', translation: '害怕', minScore: 0, maxScore: 3000, category: '情緒' },
  { word: 'surprised', translation: '驚訝', minScore: 0, maxScore: 3000, category: '情緒' },
  { word: 'tired', translation: '疲倦', minScore: 0, maxScore: 3000, category: '情緒' },
  { word: 'bored', translation: '無聊', minScore: 0, maxScore: 3000, category: '情緒' },
  // 中階 (2000-6000分)
  { word: 'excited', translation: '興奮', minScore: 2000, maxScore: 6000, category: '情緒' },
  { word: 'nervous', translation: '緊張', minScore: 2000, maxScore: 6000, category: '情緒' },
  { word: 'calm', translation: '平靜', minScore: 2000, maxScore: 6000, category: '情緒' },
  { word: 'proud', translation: '驕傲', minScore: 2000, maxScore: 6000, category: '情緒' },
  { word: 'worried', translation: '擔心', minScore: 2000, maxScore: 6000, category: '情緒' },
  // 進階 (4000-8000分)
  { word: 'lonely', translation: '孤單', minScore: 4000, maxScore: 8000, category: '情緒' },
  { word: 'jealous', translation: '嫉妒', minScore: 4000, maxScore: 8000, category: '情緒' },
  { word: 'confused', translation: '困惑', minScore: 4000, maxScore: 8000, category: '情緒' },
  { word: 'relaxed', translation: '放鬆', minScore: 4000, maxScore: 8000, category: '情緒' },
]
