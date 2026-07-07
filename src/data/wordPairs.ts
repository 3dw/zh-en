export type { WordPair } from './words/types'
export { allWordBanks } from './words/index'

import type { WordPair } from './words/types'
import { allWordBanks } from './words/index'

export const wordPairs: WordPair[] = allWordBanks.flat()

/** 跳跳人遊戲下拉選單用的「全部」選項（依當前分數套用 minScore/maxScore 難度篩選），見 issue #128 */
export const ALL_CATEGORY = '全部'

/** 由 wordPairs 推導出的所有字組分類（依資料出現順序），供下拉選單列出 */
export const wordCategories: string[] = Array.from(new Set(wordPairs.map((w) => w.category)))

/** 通關分數：最高難度單字的 maxScore，達到即顯示勝利畫面 */
export const WINNING_SCORE: number = Math.max(...wordPairs.map((w) => w.maxScore))

/** 跳跳人遊戲的「自訂」字組：取自使用者自訂字卡中的單一字詞，見 issue #135 */
export const CUSTOM_CATEGORY = '自訂'

/**
 * 判斷字卡英文是否為「單一字詞」：去掉前後空白、把標點視為分隔後，只剩一個不含空白的詞。
 * 單字內的撇號與連字號保留（如 don't、well-being 仍算一個詞），標點本身不計入字數。
 * 例："cat"、"cat."、"don't" 為單詞；"a cat"、"Hello, world" 不是。
 */
export function isSingleWordEnglish(english: string): boolean {
  const normalized = english
    .trim()
    // 把字母、數字、空白、撇號、連字號以外的字元（標點）換成空白，標點本身不計入字數
    .replace(/[^\p{L}\p{N}\s'-]/gu, ' ')
    .trim()
  if (!normalized) return false
  return !/\s/.test(normalized)
}

/** 取出單詞字卡實際用於遊戲的英文：去除前後標點，保留單字內的撇號與連字號 */
function toGameWord(english: string): string {
  return english.trim().replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, '')
}

/**
 * 從 localStorage 的自訂字卡讀出「單一字詞」並轉成 WordPair，供跳跳人遊戲的「自訂」字組使用。
 * 整組不分難度（0 ~ WINNING_SCORE），並依英文（不分大小寫）去除重覆。見 issue #135。
 */
export function getCustomWordPairs(): WordPair[] {
  if (typeof localStorage === 'undefined') return []

  let cards: unknown
  try {
    cards = JSON.parse(localStorage.getItem('customCards') || '[]')
  } catch {
    return []
  }
  if (!Array.isArray(cards)) return []

  const pairs: WordPair[] = []
  const seen = new Set<string>()
  for (const card of cards) {
    if (!card || typeof card !== 'object') continue
    const english =
      typeof (card as { english?: unknown }).english === 'string'
        ? (card as { english: string }).english
        : ''
    const chinese =
      typeof (card as { chinese?: unknown }).chinese === 'string'
        ? (card as { chinese: string }).chinese
        : ''

    if (!isSingleWordEnglish(english)) continue
    const word = toGameWord(english)
    if (!word) continue

    const key = word.toLowerCase()
    if (seen.has(key)) continue
    seen.add(key)

    pairs.push({
      word,
      translation: chinese.trim() || word,
      minScore: 0,
      maxScore: WINNING_SCORE,
      category: CUSTOM_CATEGORY,
    })
  }
  return pairs
}
