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

export const SPEECH_RATE_STORAGE_KEY = 'zh-en-speech-rate'
export const SPEECH_RATE_OPTIONS = [0.1, 0.25, 0.5, 0.75, 1, 1.25, 1.5] as const
export type SpeechRatePreference = (typeof SPEECH_RATE_OPTIONS)[number]

const DEFAULT_SPEECH_RATE: SpeechRatePreference = 1

const normalizeSpeechRate = (rate: unknown): SpeechRatePreference => {
  const numericRate = typeof rate === 'number' ? rate : Number(rate)
  const matchedRate = SPEECH_RATE_OPTIONS.find((option) => option === numericRate)

  return matchedRate ?? DEFAULT_SPEECH_RATE
}

export const getSpeechRatePreference = (): SpeechRatePreference => {
  if (typeof window !== 'undefined' && typeof window.__zhEnSpeechRate === 'number') {
    return normalizeSpeechRate(window.__zhEnSpeechRate)
  }

  if (typeof localStorage === 'undefined') {
    return DEFAULT_SPEECH_RATE
  }

  return normalizeSpeechRate(localStorage.getItem(SPEECH_RATE_STORAGE_KEY))
}

export const setSpeechRatePreference = (rate: unknown): SpeechRatePreference => {
  const normalizedRate = normalizeSpeechRate(rate)

  if (typeof window !== 'undefined') {
    window.__zhEnSpeechRate = normalizedRate
  }

  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(SPEECH_RATE_STORAGE_KEY, String(normalizedRate))
  }

  return normalizedRate
}

export type ClientPlatform =
  | 'windows'
  | 'macos'
  | 'ios'
  | 'android'
  | 'linux'
  | 'chromeos'
  | 'unknown'

export const detectClientPlatform = (): ClientPlatform => {
  if (typeof navigator === 'undefined') return 'unknown'

  const nav = navigator as Navigator & { userAgentData?: { platform?: string } }
  const userAgentDataPlatform = nav.userAgentData?.platform?.toLowerCase() ?? ''
  const platform = navigator.platform?.toLowerCase() ?? ''
  const userAgent = navigator.userAgent.toLowerCase()
  const combined = `${userAgentDataPlatform} ${platform} ${userAgent}`

  if (
    combined.includes('iphone') ||
    combined.includes('ipad') ||
    combined.includes('ipod') ||
    combined.includes('ios')
  ) {
    return 'ios'
  }
  if (combined.includes('mac')) return 'macos'
  if (combined.includes('android')) return 'android'
  if (combined.includes('cros')) return 'chromeos'
  if (combined.includes('win')) return 'windows'
  if (combined.includes('linux')) return 'linux'

  return 'unknown'
}

const isLikelyIOS = () => detectClientPlatform() === 'ios'

export const getVoicesAsync = (timeoutMs = 1500): Promise<SpeechSynthesisVoice[]> => {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      resolve([])
      return
    }

    const synth = window.speechSynthesis
    const immediateVoices = synth.getVoices()
    if (immediateVoices.length > 0) {
      resolve(immediateVoices)
      return
    }

    const cleanup = () => {
      synth.removeEventListener('voiceschanged', handleVoicesChanged)
      window.clearInterval(pollId)
      window.clearTimeout(timeoutId)
    }

    const finish = (voices: SpeechSynthesisVoice[]) => {
      cleanup()
      resolve(voices)
    }

    const handleVoicesChanged = () => {
      const voices = synth.getVoices()
      if (voices.length > 0) finish(voices)
    }

    synth.addEventListener('voiceschanged', handleVoicesChanged)

    const pollId = window.setInterval(() => {
      const voices = synth.getVoices()
      if (voices.length > 0) finish(voices)
    }, 120)

    const timeoutId = window.setTimeout(() => {
      finish(synth.getVoices())
    }, timeoutMs)
  })
}

export interface SpeakOptions {
  /** 語速倍率，預設依語言而定（中文 0.9、英文 0.85）。 */
  rate?: number
  /** 音高，1 為預設。 */
  pitch?: number
  /** 音量，1 為預設。 */
  volume?: number
  /** 播放結束時的 callback。 */
  onend?: () => void
  /** 播放發生錯誤時的 callback。 */
  onerror?: (event: SpeechSynthesisErrorEvent) => void
  /** 是否在播放前取消前一段語音，預設 true。需要連續播放時可設為 false。 */
  cancelPrevious?: boolean
}

const DEFAULT_EN_RATE = 0.85
const DEFAULT_ZH_RATE = 0.9

/**
 * 共用的語音播放核心：挑選偏好的高品質語音後播放，避免各頁面各自實作而出現
 * 「金屬音」等品質不一致的問題（見 issue #109）。
 */
const speakWithPreferredVoice = (
  text: string,
  lang: string,
  preferredNameKeywords: string[],
  options: SpeakOptions = {},
) => {
  if (!text) return

  if (typeof window === 'undefined' || !window.speechSynthesis) return

  const { rate = 0.6, pitch, volume, onend, onerror, cancelPrevious = true } = options

  const synth = window.speechSynthesis
  if (cancelPrevious) synth.cancel()
  // iOS Safari 有時需要先 resume，否則 speak 會被靜默忽略。
  synth.resume()

  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = lang
  utterance.rate = rate
  if (typeof pitch === 'number') utterance.pitch = pitch
  if (typeof volume === 'number') utterance.volume = volume
  if (onend) utterance.onend = onend
  if (onerror) utterance.onerror = onerror

  const setVoiceAndSpeak = () => {
    const voice = getPreferredVoice(lang, preferredNameKeywords)
    if (voice) {
      utterance.voice = voice
      utterance.lang = voice.lang
    }
    synth.speak(utterance)
  }

  if (synth.getVoices().length > 0) {
    setVoiceAndSpeak()
    return
  }

  // 某些瀏覽器初次載入時 voices 尚未就緒，等待 voiceschanged 再播放。
  const handleVoicesChanged = () => {
    synth.removeEventListener('voiceschanged', handleVoicesChanged)
    setVoiceAndSpeak()
  }
  synth.addEventListener('voiceschanged', handleVoicesChanged)

  // iOS Safari 偶爾不觸發 voiceschanged，使用 timeout 作為保底。
  if (isLikelyIOS()) {
    window.setTimeout(() => {
      synth.removeEventListener('voiceschanged', handleVoicesChanged)
      if (!synth.speaking) setVoiceAndSpeak()
    }, 900)
  }
}

export const speakTextWithPreferredVoice = (
  text: string,
  lang: string,
  preferredNameKeywords: string[],
  rate = 0.6,
) => speakWithPreferredVoice(text, lang, preferredNameKeywords, { rate })

/** 朗讀英文，永遠挑選偏好的高品質英文語音。各頁面請統一使用此函式。 */
export const speakEnglish = (text: string, options: SpeakOptions = {}) =>
  speakWithPreferredVoice(text, 'en-US', EN_US_PREFERRED_KEYWORDS, {
    rate: DEFAULT_EN_RATE,
    ...options,
  })

/** 朗讀中文（繁體台灣），永遠挑選偏好的台灣國語語音。各頁面請統一使用此函式。 */
export const speakChinese = (text: string, options: SpeakOptions = {}) =>
  speakWithPreferredVoice(text, 'zh-TW', ZH_TW_PREFERRED_KEYWORDS, {
    rate: DEFAULT_ZH_RATE,
    ...options,
  })

/** 依語言代碼自動選擇中文或英文語音的便利函式。 */
export const speakText = (text: string, lang = 'en-US', options: SpeakOptions = {}) =>
  lang.toLowerCase().startsWith('zh')
    ? speakChinese(text, options)
    : speakEnglish(text, options)
