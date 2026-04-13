import { computed, ref } from 'vue'
import {
  ZH_TW_PREFERRED_KEYWORDS,
  detectClientPlatform,
  getPreferredVoice,
  getVoicesAsync,
  type ClientPlatform,
} from 'src/utils/speechVoice'

const ttsSupported = ref(false)
const zhTwVoiceAvailable = ref(false)
const detectedPlatform = ref<ClientPlatform>('unknown')
const speechAvailabilityChecked = ref(false)

let initialized = false

export async function refreshSpeechAvailability() {
  if (typeof window === 'undefined') return

  ttsSupported.value = 'speechSynthesis' in window
  detectedPlatform.value = detectClientPlatform()

  if (!ttsSupported.value) {
    zhTwVoiceAvailable.value = false
    speechAvailabilityChecked.value = true
    return
  }

  await getVoicesAsync()
  zhTwVoiceAvailable.value = getPreferredVoice('zh-TW', ZH_TW_PREFERRED_KEYWORDS) !== null
  speechAvailabilityChecked.value = true
}

export function useSpeechAvailability() {
  if (!initialized && typeof window !== 'undefined') {
    initialized = true
    void refreshSpeechAvailability()

    if ('speechSynthesis' in window) {
      window.speechSynthesis.addEventListener('voiceschanged', refreshSpeechAvailability)
    }
  }

  const voicePlaybackAvailable = computed(() => ttsSupported.value && zhTwVoiceAvailable.value)
  const voicePlaybackBlocked = computed(
    () => speechAvailabilityChecked.value && !voicePlaybackAvailable.value,
  )

  return {
    ttsSupported,
    zhTwVoiceAvailable,
    voicePlaybackAvailable,
    voicePlaybackBlocked,
    speechAvailabilityChecked,
    detectedPlatform,
    refreshSpeechAvailability,
  }
}
