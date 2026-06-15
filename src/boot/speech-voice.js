import { boot } from 'quasar/wrappers'
import {
  EN_US_PREFERRED_KEYWORDS,
  ZH_TW_PREFERRED_KEYWORDS,
  getPreferredVoice,
  getSpeechRatePreference,
} from 'src/utils/speechVoice'

export default boot(() => {
  if (typeof window === 'undefined' || !window.speechSynthesis) return
  if (window.__zhEnSpeechPatched) return

  const synth = window.speechSynthesis
  const originalSpeak = synth.speak.bind(synth)

  synth.speak = (utterance) => {
    try {
      const text = utterance?.text || ''
      const lang = String(utterance?.lang || '').toLowerCase()
      const isChineseText = /[\u3400-\u9fff]/.test(text)
      const hasLatinText = /[a-z]/i.test(text)
      const shouldUseZhTw = lang.startsWith('zh') || (!lang && isChineseText)
      const shouldUseEn =
        !shouldUseZhTw && (lang.startsWith('en') || (!lang && !isChineseText && hasLatinText))

      // \u53ea\u5728\u9801\u9762\u5c1a\u672a\u6307\u5b9a\u8a9e\u97f3\u6642\u4ecb\u5165\uff0c\u5c0a\u91cd\u5df2\u81ea\u884c\u6311\u9078\u8a9e\u97f3\u7684\u9801\u9762\uff08\u5982\u523b\u610f\u4f7f\u7528\u82f1\u5f0f\u767c\u97f3\u8005\uff09\u3002
      if (!utterance.voice && shouldUseZhTw) {
        const preferred = getPreferredVoice('zh-TW', ZH_TW_PREFERRED_KEYWORDS)
        if (preferred) {
          utterance.voice = preferred
          utterance.lang = preferred.lang
        } else if (!lang) {
          utterance.lang = 'zh-TW'
        }
      } else if (!utterance.voice && shouldUseEn) {
        // \u6311\u9078\u9ad8\u54c1\u8cea\u82f1\u6587\u8a9e\u97f3\uff0c\u907f\u514d\u9810\u8a2d\u8a9e\u97f3\u9020\u6210\u7684\u300c\u91d1\u5c6c\u97f3\u300d\uff08issue #109\uff09\u3002
        const preferred = getPreferredVoice('en-US', EN_US_PREFERRED_KEYWORDS)
        if (preferred) {
          utterance.voice = preferred
          utterance.lang = preferred.lang
        } else if (!lang) {
          utterance.lang = 'en-US'
        }
      }

      if (!utterance.__zhEnSpeechRateApplied) {
        const baseRate = Number(utterance?.rate) || 1
        utterance.rate = Math.min(10, Math.max(0.1, baseRate * getSpeechRatePreference()))
      }
    } catch (error) {
      console.error('套用語音偏好設定失敗:', error)
    }

    originalSpeak(utterance)
  }

  window.__zhEnSpeechPatched = true
})
