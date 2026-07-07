export interface WordPair {
  word: string
  translation: string
  minScore: number
  maxScore: number
  /** 字組分類（中文標籤），供跳跳人遊戲下拉選單切換，見 issue #128 */
  category: string
}
