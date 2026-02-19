import { boot } from 'quasar/wrappers'
import { ZH_TW_PREFERRED_KEYWORDS, getPreferredVoice } from 'src/utils/speechVoice'

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
      const shouldUseZhTw = lang.startsWith('zh') || (!lang && isChineseText)

      if (shouldUseZhTw) {
        const preferred = getPreferredVoice('zh-TW', ZH_TW_PREFERRED_KEYWORDS)
        if (preferred) {
          utterance.voice = preferred
          utterance.lang = preferred.lang
        } else if (!lang) {
          utterance.lang = 'zh-TW'
        }
      }
    } catch (error) {
      console.error('套用台灣口音失敗:', error)
    }

    originalSpeak(utterance)
  }

  window.__zhEnSpeechPatched = true
})
