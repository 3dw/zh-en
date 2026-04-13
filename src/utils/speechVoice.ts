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

export const speakTextWithPreferredVoice = (
  text: string,
  lang: string,
  preferredNameKeywords: string[],
  rate = 0.6,
) => {
  if (!text) return

  if (typeof window === 'undefined' || !window.speechSynthesis) return

  const synth = window.speechSynthesis
  synth.cancel()
  // iOS Safari 有時需要先 resume，否則 speak 會被靜默忽略。
  synth.resume()

  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = lang
  utterance.rate = rate

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
