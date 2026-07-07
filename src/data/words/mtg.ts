import type { WordPair } from './types'

/** MTG 魔法風雲會 */
export const mtgWords: WordPair[] = [
  // 初階 (0-3000分)
  { word: 'card', translation: '卡片', minScore: 0, maxScore: 3000, category: 'MTG' },
  { word: 'deck', translation: '牌組', minScore: 0, maxScore: 3000, category: 'MTG' },
  { word: 'draw', translation: '抽牌', minScore: 0, maxScore: 3000, category: 'MTG' },
  { word: 'discard', translation: '棄牌', minScore: 0, maxScore: 3000, category: 'MTG' },
  { word: 'attack', translation: '攻擊', minScore: 0, maxScore: 3000, category: 'MTG' },
  { word: 'block', translation: '阻擋', minScore: 0, maxScore: 3000, category: 'MTG' },
  { word: 'mana', translation: '法力', minScore: 0, maxScore: 3000, category: 'MTG' },
  { word: 'land', translation: '地', minScore: 0, maxScore: 3000, category: 'MTG' },
  { word: 'red', translation: '紅色', minScore: 0, maxScore: 3000, category: 'MTG' },
  { word: 'green', translation: '綠色', minScore: 0, maxScore: 3000, category: 'MTG' },
  { word: 'blue', translation: '藍色', minScore: 0, maxScore: 3000, category: 'MTG' },
  { word: 'black', translation: '黑色', minScore: 0, maxScore: 3000, category: 'MTG' },
  { word: 'white', translation: '白色', minScore: 0, maxScore: 3000, category: 'MTG' },
  { word: 'hand', translation: '手牌', minScore: 0, maxScore: 3000, category: 'MTG' },
  { word: 'life', translation: '生命', minScore: 0, maxScore: 3000, category: 'MTG' },
  { word: 'damage', translation: '傷害', minScore: 0, maxScore: 3000, category: 'MTG' },
  // 中階 (3000-7000分)
  { word: 'forest', translation: '樹林', minScore: 3000, maxScore: 7000, category: 'MTG' },
  { word: 'island', translation: '海島', minScore: 3000, maxScore: 7000, category: 'MTG' },
  { word: 'mountain', translation: '山脈', minScore: 3000, maxScore: 7000, category: 'MTG' },
  { word: 'plains', translation: '平原', minScore: 3000, maxScore: 7000, category: 'MTG' },
  { word: 'swamp', translation: '沼澤', minScore: 3000, maxScore: 7000, category: 'MTG' },
  { word: 'colorless', translation: '無色', minScore: 3000, maxScore: 7000, category: 'MTG' },
  { word: 'multicolored', translation: '多色', minScore: 3000, maxScore: 7000, category: 'MTG' },
  { word: 'destroy', translation: '消滅', minScore: 3000, maxScore: 7000, category: 'MTG' },
  { word: 'return', translation: '移回', minScore: 3000, maxScore: 7000, category: 'MTG' },
  { word: 'target', translation: '目標', minScore: 3000, maxScore: 7000, category: 'MTG' },
  { word: 'spell', translation: '咒語', minScore: 3000, maxScore: 7000, category: 'MTG' },
  { word: 'creature', translation: '生物', minScore: 3000, maxScore: 7000, category: 'MTG' },
  // 進階 (5000-9000分)
  {
    word: 'counter',
    translation: '指示物(名詞)/反擊(動詞)',
    minScore: 5000,
    maxScore: 9000,
    category: 'MTG',
  },
  { word: 'library', translation: '牌庫(圖書館)', minScore: 5000, maxScore: 9000, category: 'MTG' },
  { word: 'graveyard', translation: '墳場', minScore: 5000, maxScore: 9000, category: 'MTG' },
  { word: 'battlefield', translation: '戰場', minScore: 5000, maxScore: 9000, category: 'MTG' },
  { word: 'artifact', translation: '神器', minScore: 5000, maxScore: 9000, category: 'MTG' },
  { word: 'enchantment', translation: '結界', minScore: 5000, maxScore: 9000, category: 'MTG' },
  // 高階 (8000-12000分)
  { word: 'instant', translation: '瞬間', minScore: 8000, maxScore: 12000, category: 'MTG' },
  { word: 'sorcery', translation: '巫術', minScore: 8000, maxScore: 12000, category: 'MTG' },
  { word: 'planeswalker', translation: '旅法師', minScore: 8000, maxScore: 12000, category: 'MTG' },
]
