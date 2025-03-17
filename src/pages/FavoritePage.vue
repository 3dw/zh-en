<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md full-width">
      <h2>我的最愛字卡</h2>

      <!-- 使用 q-tabs 切換「檢視卡片」與「克漏字練習」 -->
      <q-tabs v-model="activeTab" dense border-color="primary" class="q-mb-md">
        <q-tab name="view" label="卡片"></q-tab>
        <q-tab name="cloze" label="克漏字"></q-tab>
        <q-tab name="multipleChoice" label="四選一"></q-tab>
        <q-tab name="speakout" label="開口說"></q-tab>
      </q-tabs>

      <q-tab-panels v-model="activeTab" animated>
        <!-- 檢視卡片頁面 -->
        <q-tab-panel name="view">
          <div v-if="favoriteCards.length === 0" class="text-center q-pa-lg">
            <q-icon name="favorite_border" size="50px" color="grey-5" />
            <p class="text-grey-7">還沒有收藏的字卡</p>
            <p class="text-grey-7">在學習時點擊愛心圖示來收藏字卡</p>
          </div>
          <div v-else>
            <FlashCard :sentences="favoriteCards" @earn-xp="(xp) => $emit('earn-xp', xp)" />
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
                <!-- 將發音按鈕改為較大的發音圖示 -->
                <q-btn icon="volume_up" size="lg" color="primary" @click="playSpeakoutAudio" flat />
              </h2>
              <q-btn
                v-if="!isRecording"
                icon="mic"
                size="lg"
                color="primary"
                @click="startRecording"
                flat
              />
              <span v-else class="text-red-7">錄音中...</span>
              <p v-if="recordedText">錄音結果：{{ recordedText }}</p>
              <p v-if="recordedText && recordedText === currentCard.english">答對了！</p>
              <audio v-show="!isRecording && hasRecorded" ref="audioPlayer" controls></audio>
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
// import axios from 'axios'

interface Card {
  english: string
  chinese: string
  category: string
}

interface Sentence {
  chinese: string
  english: string
  flipped: boolean
}

export default defineComponent({
  name: 'FavoritePage',
  components: {
    FlashCard,
  },
  setup(props, { emit }) {
    const $q = useQuasar()
    const favoriteCards = ref<Sentence[]>([])
    const isRecording = ref(false)
    const audioChunks = ref<Blob[]>([])
    const audioPlayer = ref<HTMLAudioElement | null>(null)
    const hasRecorded = ref(false)
    // 讀取 localStorage 中收藏的字卡資料
    onMounted(() => {
      const savedFavorites = localStorage.getItem('en_love_arr')
      console.log(savedFavorites)

      function toSentence(arr: Card[]) {
        return arr.map((item: Card) => ({
          chinese: item.chinese,
          english: item.english,
          flipped: false,
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
    })

    const removeFromFavorites = (card: Card) => {
      favoriteCards.value = favoriteCards.value.filter(
        (c) => !(c.english === card.english && c.chinese === card.chinese),
      )
      localStorage.setItem('favoriteCards', JSON.stringify(favoriteCards.value))
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
        emit('earn-xp', 50)
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

    // 發音
    function playAudio() {
      // 用speechSynthesis發音
      const utterance = new SpeechSynthesisUtterance(currentClozeCard.value?.english)
      window.speechSynthesis.speak(utterance)
    }

    function playSpeakoutAudio() {
      // 用speechSynthesis發音
      const utterance = new SpeechSynthesisUtterance(currentCard.value?.english)
      window.speechSynthesis.speak(utterance)
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
          message: `答對了！您已連續答對${correctCount.value}題！獲得100xp！`,
          position: 'top',
          timeout: 2500,
          actions: [{ icon: 'close', color: 'white' }],
        })
        emit('earn-xp', 100)
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
      // 用speechSynthesis發音
      const utterance = new SpeechSynthesisUtterance(currentMultipleChoiceCard.value?.english)
      window.speechSynthesis.speak(utterance)
    }

    // 監聽 selectedOption 的變化，並播放選項的英文聲音
    watch(selectedOption, (newVal) => {
      if (newVal) {
        const utterance = new SpeechSynthesisUtterance(newVal)
        window.speechSynthesis.speak(utterance)
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
      const audioBlob = new Blob(audioChunks.value, { type: 'audio/wav' })
      const formData = new FormData()
      formData.append('file', audioBlob, 'recording.wav')

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

      /* // 上傳錄音檔案
      const response = await axios.post(
        'https://zh-en-backend.alearn13994229.workers.dev/convert-speech-to-text',
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } },
      )
      console.log(response.data)
      console.log(response.data.text)
      recordedText.value = response.data.text */
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
</style>
