<template>
  <q-page class="three-character-page q-pa-md">
    <div class="sanzijing-container">
      <h1 class="title">三字經節選</h1>
      <div class="content">{{ text }}</div>
      <q-btn :label="isSpeaking ? '暫停' : '朗讀'" :icon="isSpeaking ? 'stop_circle' : 'volume_up'" color="primary"
        text-color="white" class="speak-btn" @click="toggleSpeech" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue'
import { ZH_TW_PREFERRED_KEYWORDS, getPreferredVoice } from 'src/utils/speechVoice'

const text = `人之初，性本善，性相近，習相遠。
苟不教，性乃遷，教之道，貴以專。
昔孟母，擇鄰處，子不學，斷機杼。
竇燕山，有義方，教五子，名俱揚。
養不教，父之過，教不嚴，師之惰。
子不學，非所宜，幼不學，老何為。
玉不琢，不成器，人不學，不知義。
為人子，方少時，親師友，習禮儀。
首孝悌，次見聞。`

const homophoneMap: Record<string, string> = {
  教: '叫',
  為人子: '危人子',
  擇鄰處: '擇鄰杵',
  方少時: '方哨時'
}

const isSpeaking = ref(false)

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const speechText = computed(() => {
  let processedText = text

  Object.entries(homophoneMap).forEach(([original, replacement]) => {
    processedText = processedText.replace(new RegExp(escapeRegExp(original), 'g'), replacement)
  })

  return processedText
})

const createUtterance = () => {
  const utterance = new SpeechSynthesisUtterance(speechText.value)
  utterance.lang = 'zh-TW'
  utterance.rate = 0.9

  const preferredVoice = getPreferredVoice('zh-TW', ZH_TW_PREFERRED_KEYWORDS)
  if (preferredVoice) {
    utterance.voice = preferredVoice
    utterance.lang = preferredVoice.lang
  }

  utterance.onend = () => {
    isSpeaking.value = false
  }

  utterance.onerror = () => {
    isSpeaking.value = false
  }

  return utterance
}

const toggleSpeech = () => {
  if (typeof window === 'undefined' || !window.speechSynthesis) return

  if (isSpeaking.value) {
    window.speechSynthesis.cancel()
    isSpeaking.value = false
    return
  }

  window.speechSynthesis.cancel()
  window.speechSynthesis.speak(createUtterance())
  isSpeaking.value = true
}

onBeforeUnmount(() => {
  if (typeof window === 'undefined' || !window.speechSynthesis) return
  window.speechSynthesis.cancel()
})
</script>

<style scoped>
.three-character-page {
  background: linear-gradient(135deg, #f8f4ef 0%, #eee5da 100%);
}

.sanzijing-container {
  max-width: 680px;
  margin: 0 auto;
  text-align: center;
  font-family: 'Arial', sans-serif;
  background: #ffffffcc;
  border-radius: 14px;
  padding: 24px;
}

.title {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 14px;
  color: #4a3e2d;
}

.content {
  white-space: pre-wrap;
  font-size: 20px;
  line-height: 1.8;
  text-align: left;
  margin-bottom: 24px;
  color: #2f2f2f;
}

.speak-btn {
  min-width: 120px;
}
</style>
