<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md full-width">
      <h2>我的最愛字卡</h2>

      <div class="row q-gutter-sm q-mb-md">
        <q-btn
          icon="download"
          color="primary"
          label="匯出 JSON"
          @click="exportFavoritesAsJson"
          :disable="favoriteCards.length === 0"
        />
        <q-btn icon="upload" color="secondary" label="匯入 JSON" @click="triggerImportJson" />
        <input
          ref="importJsonInput"
          type="file"
          accept="application/json,.json"
          class="hidden-file-input"
          @change="handleImportJson"
        />
      </div>

      <div v-if="favoriteCards.length === 0">
        <div class="text-center q-pa-lg">
          <p class="text-grey-7">還沒有收藏的字卡</p>
          <p class="text-grey-7">在學習時點擊愛心圖示來收藏字卡</p>
          <router-link to="/beginner">
            <q-btn size="lg" color="primary" label="收集字卡" />
          </router-link>
        </div>
      </div>

      <!-- 使用 q-tabs 切換「檢視卡片」與「克漏字練習」 -->
      <q-tabs
        v-if="favoriteCards.length > 0"
        v-model="activeTab"
        dense
        border-color="primary"
        class="q-mb-md"
      >
        <q-tab name="view" label="卡片"></q-tab>
        <q-tab name="cloze" label="克漏字"></q-tab>
        <q-tab name="multipleChoice" label="四選一"></q-tab>
        <q-tab name="speakout" label="開口說"></q-tab>
      </q-tabs>

      <q-tab-panels v-if="favoriteCards.length > 0" v-model="activeTab" animated>
        <!-- 檢視卡片頁面 -->
        <q-tab-panel name="view">
          <div v-if="favoriteCards.length === 0" class="text-center q-pa-lg">
            <q-icon name="favorite_border" size="50px" color="grey-5" />
            <p class="text-grey-7">還沒有收藏的字卡</p>
            <p class="text-grey-7">在學習時點擊愛心圖示來收藏字卡</p>
          </div>
          <div v-else>
            <FlashCard :sentences="favoriteCards" :speech-rate="speechRate" />
          </div>
        </q-tab-panel>

        <!-- 開口說頁面 -->
        <q-tab-panel name="speakout">
          <div v-if="favoriteCards.length === 0" class="text-center q-pa-lg">
            <q-icon name="favorite_border" size="50px" color="grey-5" />
            <p class="text-grey-7">還沒有收藏的字卡</p>
          </div>

          <div v-else>
            <div class="q-mt-md">
              <h2>
                中文：{{ currentCard.chinese }}
                <br />
                英文：{{ currentCard.english }}
                <q-btn icon="volume_up" size="lg" color="primary" @click="playSpeakoutAudio" flat />
              </h2>
              <img
                v-if="currentCard.image"
                :src="currentCard.image"
                alt="字卡圖片"
                class="favorite-card-image q-mb-md"
              />
              <q-btn
                v-if="!isRecording"
                icon="mic"
                size="lg"
                color="primary"
                @click="startRecording"
                flat
              />
              <span v-else class="text-red-7">錄音中...</span>
              <audio v-show="!isRecording && hasRecorded" ref="audioPlayer" controls></audio>

              <p v-if="recordedText">AI分析錄音結果：{{ recordedText }}</p>
              <p v-if="recordedText && isSimilar(recordedText, currentCard.english)">答對了！</p>
              <p v-if="recordedText && !isSimilar(recordedText, currentCard.english)">
                有點不像...
              </p>

              <div class="q-mt-md" v-if="!isRecording && hasRecorded && recordedText">
                <q-btn
                  v-if="recordedText && isSimilar(recordedText, currentCard.english)"
                  color="primary"
                  label="很棒！下一題"
                  @click="checkAnswerSpeakoutAnswer(true)"
                />
                <q-btn
                  v-if="recordedText && !isSimilar(recordedText, currentCard.english)"
                  color="secondary"
                  label="再試一次"
                  @click="checkAnswerSpeakoutAnswer(false)"
                />
              </div>
            </div>
          </div>
        </q-tab-panel>

        <!-- 克漏字練習頁面 -->
        <q-tab-panel name="cloze">
          <div v-if="favoriteCards.length === 0" class="text-center q-pa-lg">
            <q-icon name="favorite_border" size="50px" color="grey-5" />
            <p class="text-grey-7">還沒有收藏的字卡，無法進行克漏字練習</p>
          </div>
          <div v-else class="q-pa-md">
            <div v-if="currentClozeCard">
              <h2>
                中文：{{ currentClozeCard.chinese }}
                <!-- 將發音按鈕改為較大的發音圖示 -->
                <q-btn icon="volume_up" size="lg" color="primary" @click="playAudio" flat />
              </h2>
              <img
                v-if="currentClozeCard.image"
                :src="currentClozeCard.image"
                alt="字卡圖片"
                class="favorite-card-image q-mb-md"
              />

              <h2>英文：</h2>
              <p>
                <span v-for="(word, index) in splitEnglishSentence" :key="index">
                  <template v-if="index === blankIndex">
                    <span style="color: red">_______</span>
                  </template>
                  <template v-else>
                    {{ word }}
                  </template>
                  {{ index < splitEnglishSentence.length - 1 ? ' ' : '' }}
                </span>
              </p>

              <div class="q-mt-md">
                <q-input
                  :autofocus="true"
                  v-model="userAnswer"
                  label="請填入缺少的單字"
                  :disable="answered"
                  @keydown.enter="!answered && userAnswer && checkAnswer()"
                  class="large-input"
                />
              </div>
              <div class="q-mt-md">
                <q-btn
                  color="primary"
                  label="檢查答案"
                  @click="checkAnswer"
                  :disable="answered || !userAnswer"
                />
              </div>
              <div class="q-mt-md">
                <q-btn color="secondary" label="下一題" @click="nextQuestion" />
              </div>
            </div>
          </div>
        </q-tab-panel>

        <!-- 四選一測驗頁面 -->
        <q-tab-panel name="multipleChoice">
          <div v-if="favoriteCards.length < 4" class="text-center q-pa-lg">
            <q-icon name="favorite_border" size="50px" color="grey-5" />
            <p class="text-grey-7">收藏的字卡不足以進行四選一測驗，請收藏更多字卡</p>
          </div>
          <div v-else class="q-pa-md">
            <div v-if="currentMultipleChoiceCard">
              <h2>
                中文：{{ currentMultipleChoiceCard.chinese }}
                <!-- 新增發音按鈕 -->
                <!-- <q-btn
                  icon="volume_up"
                  size="lg"
                  color="primary"
                  @click="playMultipleChoiceAudio"
                  flat
                />   -->
              </h2>
              <img
                v-if="currentMultipleChoiceCard.image"
                :src="currentMultipleChoiceCard.image"
                alt="字卡圖片"
                class="favorite-card-image q-mb-md"
              />
              <q-option-group
                v-model="selectedOption"
                :options="multipleChoiceOptions"
                type="radio"
              />
              <div class="q-mt-md">
                <q-btn
                  color="primary"
                  label="檢查答案"
                  @click="checkMultipleChoiceAnswer"
                  :disable="!selectedOption"
                />
              </div>
              <div class="q-mt-md">
                <q-btn color="secondary" label="下一題" @click="nextMultipleChoiceQuestion" />
              </div>
            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed, watch, nextTick } from 'vue'
import { useQuasar } from 'quasar'
import FlashCard from 'src/components/FlashCard.vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import { getVoicesAsync } from 'src/utils/speechVoice'

interface Card {
  english: string
  chinese: string
  category?: string
  image?: string
  flipped?: boolean
}

interface Sentence {
  chinese: string
  english: string
  flipped: boolean
  image?: string
}

export default defineComponent({
  name: 'FavoritePage',
  components: {
    FlashCard,
  },
  props: {
    speechRate: {
      type: Number,
      default: 1,
    },
  },
  setup(props) {
    const $q = useQuasar()
    const favoriteCards = ref<Sentence[]>([])
    const isRecording = ref(false)
    const audioChunks = ref<Blob[]>([])
    const audioPlayer = ref<HTMLAudioElement | null>(null)
    const hasRecorded = ref(false)
    const importJsonInput = ref<HTMLInputElement | null>(null)

    const buildCardKey = (card: { english: string; chinese: string }) =>
      `${card.english}\u0000${card.chinese}`

    // 讀取 localStorage 中收藏的字卡資料
    onMounted(() => {
      const savedFavorites = localStorage.getItem('en_love_arr')
      console.log(savedFavorites)

      function toSentence(arr: Card[]) {
        return arr.map((item: Card) => ({
          chinese: item.chinese,
          english: item.english,
          flipped: false,
          ...(item.image ? { image: item.image } : {}),
        }))
      }
      if (savedFavorites) {
        favoriteCards.value = toSentence(JSON.parse(savedFavorites))
        loadNewClozeCard()
      }

      if (favoriteCards.value.length >= 4) {
        loadNewMultipleChoiceCard()
        activeTab.value = 'multipleChoice'
      }

      // 如果路由參數有activeTab，則設置activeTab
      const route = useRoute()
      if (route.params.activeTab) {
        activeTab.value = route.params.activeTab as string
      }
    })

    function isSimilar(text1: string, text2: string) {
      // 標點符號不記, 空白不記
      const cleanText1 = text1.replace(/[.,!?;:]/g, '').replace(/\s/g, '')
      const cleanText2 = text2.replace(/[.,!?;:]/g, '').replace(/\s/g, '')
      return cleanText1.toLowerCase() === cleanText2.toLowerCase()
    }

    const removeFromFavorites = (card: Card) => {
      favoriteCards.value = favoriteCards.value.filter(
        (c) => !(c.english === card.english && c.chinese === card.chinese),
      )
      localStorage.setItem('en_love_arr', JSON.stringify(favoriteCards.value))
    }

    // 用於切換檢視與克漏字分頁的變數
    const activeTab = ref('view')

    // 克漏字練習相關狀態
    const currentClozeCard = ref<Sentence | null>(null)
    const blankIndex = ref<number | null>(null)
    const userAnswer = ref('')
    const feedback = ref('')
    const answered = ref(false)
    const correctCount = ref(0)
    // 計算英文句子分割後的字陣列
    const splitEnglishSentence = computed(() => {
      if (currentClozeCard.value) {
        return currentClozeCard.value.english.split(' ')
      }
      return []
    })

    function checkAnswerSpeakoutAnswer(isCorrect: boolean) {
      if (isCorrect) {
        correctCount.value++
        $q.notify({
          type: 'positive',
          message: `答對了！您已連續答對${correctCount.value}題！`,
          position: 'top',
          timeout: 2500,
        })
        // 重置錄音
        isRecording.value = false
        hasRecorded.value = false
        // audioPlayer.value = null
        // 下一題
        loadNewSpeakoutCard()
      } else {
        correctCount.value = 0
        $q.notify({
          type: 'negative',
          message: `不太像，再試一次！請再按一次錄音按鈕`,
          position: 'top',
          timeout: 2500,
        })
      }
    }

    // 載入一個新的克漏字題目
    function loadNewClozeCard() {
      if (favoriteCards.value.length === 0) {
        currentClozeCard.value = null
        return
      }
      const randomIndex = Math.floor(Math.random() * favoriteCards.value.length)
      currentClozeCard.value = favoriteCards.value[randomIndex] as Sentence
      const words = currentClozeCard.value.english.split(' ')
      if (words.length === 0) {
        blankIndex.value = null
      } else {
        blankIndex.value = Math.floor(Math.random() * words.length)
      }
      userAnswer.value = ''
      feedback.value = ''
      answered.value = false

      // 使用 nextTick 確保 DOM 更新後再設置焦點
      nextTick(() => {
        const inputEl = document.querySelector('input')
        if (inputEl) inputEl.focus()
      })
    }

    // 檢查使用者填入的答案是否正確
    function checkAnswer() {
      if (!currentClozeCard.value || blankIndex.value === null) {
        return
      }
      const words = currentClozeCard.value.english.split(' ')
      const correctWord = (blankIndex.value !== null && words[blankIndex.value]) || ''

      const cleanUserAnswer = userAnswer.value
        .trim()
        .toLowerCase()
        .replace(/[.,!?;:]/g, '')
      const cleanCorrectWord = correctWord
        .trim()
        .toLowerCase()
        .replace(/[.,!?;:]/g, '')

      if (cleanUserAnswer === cleanCorrectWord) {
        correctCount.value++
        feedback.value = '答對了！您已連續答對' + correctCount.value + '題！'
        $q.notify({
          type: 'positive',
          message: feedback.value,
          position: 'top',
          timeout: 2500,
          actions: [{ icon: 'close', color: 'white' }],
        })
      } else {
        feedback.value = `答錯了，正確答案是：${correctWord}`
        correctCount.value = 0
        $q.notify({
          type: 'negative',
          message: feedback.value,
          position: 'top',
          timeout: 2500,
          actions: [{ icon: 'close', color: 'white' }],
        })
      }
      answered.value = true

      // 新增：在答案檢查後添加 enter 鍵監聽
      const handleEnter = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
          nextQuestion()
          document.removeEventListener('keydown', handleEnter)
        }
      }
      document.addEventListener('keydown', handleEnter)
    }

    // 進入下一題
    function nextQuestion() {
      loadNewClozeCard()
    }

    const pickEnVoice = (voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null => {
      try {
        voices = voices || []
        let en = voices.filter((v) => v && v.lang && String(v.lang).toLowerCase().indexOf('en') === 0)

        // 避免較差音色的候選（如 Compact/Fred 等）
        en = en.filter((v) => {
          const nm = (v.name || '').toLowerCase()
          return nm.indexOf('compact') < 0 && nm !== 'fred'
        })

        // 優先序（iOS/macOS 常見）：Samantha, Alex，其次 en-US，再退 en-GB / en-AU / 其他 en*
        const prefName =
          en.find((v) => (v.name || '').toLowerCase().includes('samantha')) ||
          en.find((v) => (v.name || '').toLowerCase().includes('alex'))
        if (prefName) return prefName

        const enus = en.find((v) => String(v.lang).toLowerCase() === 'en-us')
        if (enus) return enus

        const engb = en.find((v) => String(v.lang).toLowerCase() === 'en-gb')
        if (engb) return engb

        const enau = en.find((v) => String(v.lang).toLowerCase() === 'en-au')
        if (enau) return enau

        return en[0] || null
      } catch {
        return null
      }
    }

    const speakEnglish = async (text?: string | null) => {
      if (!text || typeof window === 'undefined' || !window.speechSynthesis) return

      const synth = window.speechSynthesis
      // 停止之前的語音，避免重疊；iOS Safari 有時需要先 resume，否則 speak 會被靜默忽略。
      synth.cancel()
      synth.resume()

      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'en-US'
      utterance.rate = props.speechRate
      utterance.__zhEnSpeechRateApplied = true
      utterance.pitch = 1.0
      utterance.volume = 1.0
      utterance.onerror = (event) => {
        console.error('語音合成錯誤:', event)
      }

      const voices = await getVoicesAsync()
      if (voices.length > 0) {
        const selected = pickEnVoice(voices)
        if (selected) utterance.voice = selected
      }

      synth.speak(utterance)
    }

    // 發音（對齊 FlashCard 的發音設定）
    function playAudio() {
      void speakEnglish(currentClozeCard.value?.english)
    }

    function playSpeakoutAudio() {
      void speakEnglish(currentCard.value?.english)
    }

    // 當切換到「克漏字」分頁時，自動載入新的題目
    watch(activeTab, (newVal) => {
      if (newVal === 'cloze') {
        loadNewClozeCard()
      }
    })

    // 四選一測驗相關狀態
    const currentMultipleChoiceCard = ref<Sentence | null>(null)
    const multipleChoiceOptions = ref<Array<{ label: string; value: string }>>([])
    const selectedOption = ref<string | null>(null)

    function loadNewMultipleChoiceCard() {
      if (favoriteCards.value.length < 4) {
        currentMultipleChoiceCard.value = null
        return
      }
      const randomIndex = Math.floor(Math.random() * favoriteCards.value.length)
      currentMultipleChoiceCard.value = favoriteCards.value[randomIndex] as Sentence
      generateMultipleChoiceOptions()
    }

    function generateMultipleChoiceOptions() {
      if (!currentMultipleChoiceCard.value) return
      const correctEnglish = currentMultipleChoiceCard.value.english
      const incorrectOptions = favoriteCards.value
        .filter((card) => card.english !== correctEnglish)
        .map((card) => card.english)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)

      // 將選項轉換為包含 label 和 value 的物件
      multipleChoiceOptions.value = [
        { label: correctEnglish, value: correctEnglish },
        ...incorrectOptions.map((option) => ({ label: option, value: option })),
      ].sort(() => Math.random() - 0.5)
    }

    function checkMultipleChoiceAnswer() {
      if (selectedOption.value === currentMultipleChoiceCard.value?.english) {
        correctCount.value++
        $q.notify({
          type: 'positive',
          message: `答對了！您已連續答對${correctCount.value}題！`,
          position: 'top',
          timeout: 2500,
          actions: [{ icon: 'close', color: 'white' }],
        })
      } else {
        correctCount.value = 0
        $q.notify({
          type: 'negative',
          message: `答錯了，正確答案是：${currentMultipleChoiceCard.value?.english}`,
          position: 'top',
          timeout: 2500,
          actions: [{ icon: 'close', color: 'white' }],
        })
      }
      loadNewMultipleChoiceCard()
    }

    function nextMultipleChoiceQuestion() {
      loadNewMultipleChoiceCard()
    }

    // 當切換到「四選一測驗」分頁時，自動載入新的題目
    watch(activeTab, (newVal) => {
      if (newVal === 'multipleChoice') {
        loadNewMultipleChoiceCard()
      } else if (newVal === 'speakout') {
        loadNewSpeakoutCard()
      }
    })

    const currentCard = ref<Sentence>({
      chinese: '',
      english: '',
      flipped: false,
    } as Sentence)

    function loadNewSpeakoutCard() {
      if (favoriteCards.value.length === 0) {
        currentCard.value = favoriteCards.value[0] as Sentence
        return
      }
      const randomIndex = Math.floor(Math.random() * favoriteCards.value.length)
      currentCard.value = favoriteCards.value[randomIndex] as Sentence
      recordedText.value = ''
    }

    // 新增發音功能
    function playMultipleChoiceAudio() {
      void speakEnglish(currentMultipleChoiceCard.value?.english)
    }

    // 監聽 selectedOption 的變化，並播放選項的英文聲音
    watch(selectedOption, (newVal) => {
      if (newVal) {
        void speakEnglish(newVal)
      }
    })

    const recordedText = ref('')

    async function startRecording() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
        const mediaRecorder = new MediaRecorder(stream)
        audioChunks.value = [] // 清空之前的錄音片段
        mediaRecorder.start()
        isRecording.value = true
        console.log('錄音開始')

        mediaRecorder.ondataavailable = (event) => {
          console.log('錄音中')
          console.log(event.data)
          audioChunks.value.push(event.data)
          // console.log(audioChunks.value)
          uploadAudio()
        }

        mediaRecorder.onstop = () => {
          isRecording.value = false
          console.log('錄音結束')
          // 釋放音頻流
          stream.getTracks().forEach((track) => track.stop())
          // console.log(audioChunks.value)
        }

        // 自動在5秒後停止錄音
        setTimeout(() => {
          mediaRecorder.stop()
          hasRecorded.value = true
        }, 5000)
      } catch (error) {
        console.error('錄音失敗:', error)
      }
    }

    async function uploadAudio() {
      const audioBlob = new Blob(audioChunks.value, { type: 'audio/mp4' })
      const formData = new FormData()
      formData.append('file', audioBlob, 'recording.mp4')

      const audioUrl = URL.createObjectURL(audioBlob)
      /*
      // 下載錄音檔案
      const a = document.createElement('a')
      a.href = audioUrl
      a.download = 'recording.wav'
      a.click() */

      // 新增：將錄音的 URL 設定為 audio 元件的 src
      if (audioPlayer.value) {
        audioPlayer.value.src = audioUrl
      }

      // 上傳錄音檔案
      const response = await axios.post(
        'https://zh-en-backend.alearn13994229.workers.dev/convert-speech-to-text',
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } },
      )
      console.log(response.data)
      console.log(response.data.text)
      recordedText.value = response.data.text
    }

    function resetAudio() {
      if (audioPlayer.value) {
        audioPlayer.value.src = ''
        hasRecorded.value = false
      }
    }

    const exportFavoritesAsJson = () => {
      if (favoriteCards.value.length === 0) {
        $q.notify({ type: 'warning', message: '目前沒有可匯出的最愛字卡。' })
        return
      }

      const exportData = favoriteCards.value.map((card) => ({
        english: card.english,
        chinese: card.chinese,
        ...(card.image ? { image: card.image } : {}),
        isFavorite: true,
      }))
      const blob = new Blob([JSON.stringify(exportData, null, 2)], {
        type: 'application/json;charset=utf-8',
      })
      const url = URL.createObjectURL(blob)
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
      const link = document.createElement('a')
      link.href = url
      link.download = `favorite-cards-${timestamp}.json`
      document.body.appendChild(link)
      link.click()
      link.remove()
      URL.revokeObjectURL(url)
    }

    const triggerImportJson = () => {
      importJsonInput.value?.click()
    }

    const handleImportJson = async (event: Event) => {
      const input = event.target as HTMLInputElement
      const file = input.files?.[0]
      if (!file) return

      try {
        const content = await file.text()
        const parsed = JSON.parse(content)

        if (!Array.isArray(parsed)) {
          throw new Error('JSON 格式必須為陣列。')
        }

        const customStored = localStorage.getItem('customCards')
        const customCards: Card[] = customStored ? JSON.parse(customStored) : []
        const favoritesStored = localStorage.getItem('en_love_arr')
        const favorites: Card[] = favoritesStored ? JSON.parse(favoritesStored) : []

        const customKeys = new Set(customCards.map((card) => buildCardKey(card)))
        const favoriteKeys = new Set(favorites.map((card) => buildCardKey(card)))

        let addedCustomCount = 0
        let addedFavoriteCount = 0
        let skippedCount = 0
        let invalidCount = 0

        for (const item of parsed) {
          if (!item || typeof item !== 'object') {
            invalidCount++
            continue
          }

          const englishRaw = (item as { english?: unknown }).english
          const chineseRaw = (item as { chinese?: unknown }).chinese
          const imageRaw = (item as { image?: unknown }).image
          const isFavoriteRaw = (item as { isFavorite?: unknown }).isFavorite

          if (typeof englishRaw !== 'string' || typeof chineseRaw !== 'string') {
            invalidCount++
            continue
          }

          const english = englishRaw.trim()
          const chinese = chineseRaw.trim()
          if (!english || !chinese) {
            invalidCount++
            continue
          }

          const image = typeof imageRaw === 'string' && imageRaw.trim() ? imageRaw : undefined
          const key = buildCardKey({ english, chinese })

          let wasAdded = false
          if (!customKeys.has(key)) {
            customKeys.add(key)
            customCards.push({ english, chinese, flipped: false })
            addedCustomCount++
            wasAdded = true
          }

          if (isFavoriteRaw === true && !favoriteKeys.has(key)) {
            favoriteKeys.add(key)
            favorites.push({
              english,
              chinese,
              ...(image ? { image } : {}),
            })
            addedFavoriteCount++
            wasAdded = true
          }

          if (!wasAdded) {
            skippedCount++
          }
        }

        if (addedCustomCount > 0) {
          localStorage.setItem('customCards', JSON.stringify(customCards))
        }

        if (addedFavoriteCount > 0) {
          localStorage.setItem('en_love_arr', JSON.stringify(favorites))
          favoriteCards.value = favorites.map((item) => ({
            chinese: item.chinese,
            english: item.english,
            flipped: false,
            ...(item.image ? { image: item.image } : {}),
          }))
        }

        $q.notify({
          type: addedCustomCount > 0 || addedFavoriteCount > 0 ? 'positive' : 'info',
          message: `匯入完成：新增自訂字卡 ${addedCustomCount} 筆，新增最愛 ${addedFavoriteCount} 筆，略過重複 ${skippedCount} 筆，格式不符 ${invalidCount} 筆。`,
        })
      } catch (error) {
        console.error('匯入 JSON 失敗:', error)
        $q.notify({ type: 'negative', message: '匯入失敗，請確認 JSON 格式是否正確。' })
      } finally {
        input.value = ''
      }
    }

    return {
      favoriteCards,
      removeFromFavorites,
      activeTab,
      currentCard,
      currentClozeCard,
      blankIndex,
      userAnswer,
      feedback,
      answered,
      correctCount,
      splitEnglishSentence,
      checkAnswer,
      nextQuestion,
      playAudio,
      playSpeakoutAudio,
      isSimilar,
      isRecording,
      hasRecorded,
      audioChunks,
      currentMultipleChoiceCard,
      multipleChoiceOptions,
      selectedOption,
      checkMultipleChoiceAnswer,
      nextMultipleChoiceQuestion,
      playMultipleChoiceAudio,
      startRecording,
      uploadAudio,
      recordedText,
      audioPlayer,
      checkAnswerSpeakoutAnswer,
      resetAudio,
      importJsonInput,
      exportFavoritesAsJson,
      triggerImportJson,
      handleImportJson,
    }
  },
})
</script>

<style scoped lang="scss">
/* 與 MainLayout/其他頁面風格一致 */
.op-page {
  background-color: #f4f1eb;
  font-size: 1.1rem;
}

.word-card-list {
  max-width: 1000px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
}

.page-title {
  margin-bottom: 16px;
  font-size: 1.4rem;
  font-weight: 600;
  color: #3e3e3e;
}

.search-bar {
  display: flex;
  justify-content: center;
}

// 新增大型輸入框樣式
.large-input {
  :deep(.q-field__native) {
    font-size: 1.5rem;
  }
  :deep(.q-field__label) {
    font-size: 1.2rem;
  }
}

.favorite-card-image {
  width: 100%;
  max-width: 360px;
  max-height: 220px;
  object-fit: cover;
  border-radius: 8px;
}

.hidden-file-input {
  display: none;
}
</style>
