<template>
  <q-page class="custom-page q-pa-md">
    <div class="custom-container">
      <h1 class="title">自訂朗讀 Demo</h1>

      <q-card flat bordered class="section-card q-mb-md">
        <q-card-section>
          <div class="section-title">1) 輸入長篇文字</div>
          <p class="section-help">
            使用說明：將想朗讀的內容貼到下方，可輸入多段文字。系統會保留換行，朗讀時依目前內容播放。
          </p>
          <q-input v-model="rawText" type="textarea" autogrow outlined label="Text" placeholder="請輸入要朗讀的內容..." />
        </q-card-section>
      </q-card>

      <q-card flat bordered class="section-card q-mb-md">
        <q-card-section>
          <div class="section-title">2) 輸入同音字對照（CSV）</div>
          <p class="section-help">
            使用說明：每行一組，格式為「原字詞,替換字詞」。例如：
            <code>教,叫</code>、<code>為人子,危人子</code>。空白行會自動忽略。
          </p>
          <q-input v-model="rawCsv" type="textarea" autogrow outlined label="homophoneMap (CSV)"
            placeholder="教,叫&#10;為人子,危人子" />

          <q-banner v-if="csvErrors.length > 0" dense rounded class="bg-orange-1 text-orange-10 q-mt-sm">
            <div v-for="error in csvErrors" :key="error">{{ error }}</div>
          </q-banner>
        </q-card-section>
      </q-card>

      <q-card flat bordered class="section-card q-mb-md">
        <q-card-section>
          <div class="section-title">3) 檢查替換後內容</div>
          <p class="section-help">
            使用說明：這裡會顯示朗讀前實際送出的文字，方便先確認同音字替換是否符合預期。
          </p>
          <q-input v-model="speechText" type="textarea" autogrow outlined readonly />
        </q-card-section>
      </q-card>

      <q-card flat bordered class="section-card">
        <q-card-section>
          <div class="section-title">4) 按鍵朗讀（台灣口音優先）</div>
          <p class="section-help">
            使用說明：按「開始朗讀」播放，按「停止朗讀」可立即停止。語音會優先使用 zh-TW 與台灣相關語音。
          </p>
          <div class="row items-center q-gutter-sm">
            <q-btn :label="isSpeaking ? '停止朗讀' : '開始朗讀'" :icon="isSpeaking ? 'stop_circle' : 'volume_up'"
              :color="isSpeaking ? 'negative' : 'primary'" text-color="white" @click="toggleSpeech" />
            <span class="status-text">{{ statusText }}</span>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue'
import { ZH_TW_PREFERRED_KEYWORDS, getPreferredVoice } from 'src/utils/speechVoice'

const rawText = ref(`人之初，性本善，性相近，習相遠。
苟不教，性乃遷，教之道，貴以專。
昔孟母，擇鄰處，子不學，斷機杼。
竇燕山，有義方，教五子，名俱揚。
養不教，父之過，教不嚴，師之惰。
子不學，非所宜，幼不學，老何為。
玉不琢，不成器，人不學，不知義。
為人子，方少時，親師友，習禮儀。
首孝悌，次見聞。`)

const rawCsv = ref(`教,叫
為人子,危人子`)

const isSpeaking = ref(false)

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const csvParseResult = computed(() => {
  const map: Record<string, string> = {}
  const errors: string[] = []
  const lines = rawCsv.value.split(/\r?\n/)

  lines.forEach((line, index) => {
    const trimmed = line.trim()
    if (!trimmed) return

    const normalized = trimmed.replace(/，/g, ',')
    const firstCommaIndex = normalized.indexOf(',')

    if (firstCommaIndex <= 0 || firstCommaIndex === normalized.length - 1) {
      errors.push(`第 ${index + 1} 行格式錯誤，請使用「原字詞,替換字詞」`)
      return
    }

    const original = normalized.slice(0, firstCommaIndex).trim()
    const replacement = normalized.slice(firstCommaIndex + 1).trim()

    if (!original || !replacement) {
      errors.push(`第 ${index + 1} 行內容不可為空`)
      return
    }

    map[original] = replacement
  })

  return { map, errors }
})

const csvErrors = computed(() => csvParseResult.value.errors)

const speechText = computed(() => {
  let processedText = rawText.value

  Object.entries(csvParseResult.value.map).forEach(([original, replacement]) => {
    processedText = processedText.replace(new RegExp(escapeRegExp(original), 'g'), replacement)
  })

  return processedText
})

const statusText = computed(() => {
  if (csvErrors.value.length > 0) return 'CSV 有格式錯誤，仍可朗讀原始可解析項目。'
  return isSpeaking.value ? '朗讀中...' : '待命中'
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

  if (!speechText.value.trim()) return

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
.custom-page {
  background: linear-gradient(135deg, #f8f4ef 0%, #eee5da 100%);
}

.custom-container {
  max-width: 900px;
  margin: 0 auto;
}

.title {
  font-size: 30px;
  font-weight: 700;
  margin: 0 0 16px;
  color: #4a3e2d;
}

.section-card {
  background: #ffffffd9;
}

.section-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #3b2f22;
}

.section-help {
  margin-bottom: 12px;
  line-height: 1.7;
  color: #4a4a4a;
}

.status-text {
  color: #5a4b3e;
  font-size: 14px;
}
</style>
