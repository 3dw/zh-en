export type { WordPair } from './types'
export { abstractWords } from './abstract'
export { actionWords } from './actions'
export { animalWords } from './animals'
export { bodyWords } from './body'
export { businessWords } from './business'
export { emotionWords } from './emotions'
export { familyWords } from './family'
export { fruitWords } from './fruits'
export { homeWords } from './home'
export { itWords } from './it'
export { mathWords } from './math'
export { mtgWords } from './mtg'
export { objectPronounWords } from './objectPronouns'
export { plantWords } from './plants'
export { possessiveWords } from './possessive'
export { researchWords } from './research'
export { schoolWords } from './school'
export { scienceWords } from './science'
export { societyWords } from './society'
export { subjectPronounWords } from './subjectPronouns'
export { toolWords } from './tools'

import type { WordPair } from './types'
import { abstractWords } from './abstract'
import { actionWords } from './actions'
import { animalWords } from './animals'
import { bodyWords } from './body'
import { businessWords } from './business'
import { emotionWords } from './emotions'
import { familyWords } from './family'
import { fruitWords } from './fruits'
import { homeWords } from './home'
import { itWords } from './it'
import { mathWords } from './math'
import { mtgWords } from './mtg'
import { objectPronounWords } from './objectPronouns'
import { plantWords } from './plants'
import { possessiveWords } from './possessive'
import { researchWords } from './research'
import { schoolWords } from './school'
import { scienceWords } from './science'
import { societyWords } from './society'
import { subjectPronounWords } from './subjectPronouns'
import { toolWords } from './tools'

/** 各單字庫依出現順序合併；新增字詞請在 words/ 對應檔案擴充後 import 至此 */
export const allWordBanks: WordPair[][] = [
  animalWords,
  fruitWords,
  familyWords,
  actionWords,
  homeWords,
  plantWords,
  itWords,
  abstractWords,
  businessWords,
  researchWords,
  societyWords,
  emotionWords,
  bodyWords,
  toolWords,
  mathWords,
  scienceWords,
  schoolWords,
  subjectPronounWords,
  possessiveWords,
  objectPronounWords,
  mtgWords,
]
