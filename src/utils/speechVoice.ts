export const getPreferredVoice = (langPrefix: string, preferredNameKeywords: string[]) => {
  const voices = window.speechSynthesis.getVoices()

  if (!voices.length) {
    return null
  }

  const targetVoices = voices.filter((voice) =>
    voice.lang.toLowerCase().startsWith(langPrefix.toLowerCase()),
  )

  if (!targetVoices.length) {
    return null
  }

  const preferredVoice =
    targetVoices.find((voice) =>
      preferredNameKeywords.some((keyword) =>
        voice.name.toLowerCase().includes(keyword.toLowerCase()),
      ),
    ) || targetVoices[0]

  return preferredVoice
}

export const ZH_TW_PREFERRED_KEYWORDS = [
  'taiwan',
  'zh-tw',
  '國語',
  '臺灣',
  '台湾',
  'hanhan',
  'hsiaochen',
]

export const EN_US_PREFERRED_KEYWORDS = ['google', 'microsoft', 'natural', 'en-us']

export const speakTextWithPreferredVoice = (
  text: string,
  lang: string,
  preferredNameKeywords: string[],
  rate = 0.6,
) => {
  if (!text) return

  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = lang
  utterance.rate = rate

  const setVoiceAndSpeak = () => {
    const voice = getPreferredVoice(lang, preferredNameKeywords)
    if (voice) {
      utterance.voice = voice
      utterance.lang = voice.lang
    }
    window.speechSynthesis.speak(utterance)
  }

  if (window.speechSynthesis.getVoices().length > 0) {
    setVoiceAndSpeak()
    return
  }

  // 某些瀏覽器初次載入時 voices 尚未就緒，等待 voiceschanged 再播放。
  const handleVoicesChanged = () => {
    window.speechSynthesis.removeEventListener('voiceschanged', handleVoicesChanged)
    setVoiceAndSpeak()
  }
  window.speechSynthesis.addEventListener('voiceschanged', handleVoicesChanged)
}
