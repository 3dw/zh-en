<template>
  <q-page class="q-pa-md">
    <div class="row items-center q-mb-md">
      <h1 class="col">看圖選單字遊戲</h1>
      <div class="col-auto">
        <q-badge color="purple" class="text-h6"> Level: {{ level }} </q-badge>
      </div>
    </div>

    <!-- 遊戲說明和發音按鈕 -->
    <div class="text-h6 q-mb-md text-center">
      請看圖片，選出正確的單字
      <q-btn
        icon="volume_up"
        color="primary"
        round
        size="lg"
        class="q-ml-sm"
        @click="speakCurrentWord"
      />
    </div>

    <!-- 圖片顯示區域 -->
    <div class="row justify-center q-mb-lg">
      <div class="col-12 col-sm-6 col-md-4">
        <q-img :src="currentImage" style="height: 200px" fit="contain" class="rounded-borders" />
      </div>
    </div>

    <!-- 選項區域 -->
    <div class="row q-col-gutter-md justify-center">
      <div v-for="option in currentOptions" :key="option" class="col-12 col-sm-6 col-md-3">
        <q-btn
          :label="option"
          class="word-btn full-width"
          :color="getButtonColor(option)"
          size="lg"
          :disable="showingResult"
          @click="checkAnswer(option)"
        />
      </div>
    </div>

    <!-- 結果提示 -->
    <q-dialog v-model="showResult">
      <q-card>
        <q-card-section class="row items-center">
          <span class="text-h6">{{ resultMessage }}</span>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

// 匯入水果圖片
import apple from '../assets/Vocabulary/apple.jpg'
import banana from '../assets/Vocabulary/banana.jpg'
import orange from '../assets/Vocabulary/orange.jpg'
import pineapple from '../assets/Vocabulary/pineapple.jpg'

interface VocabularyItem {
  word: string
  image: string
}

export default defineComponent({
  name: 'Game3Page',
  setup() {
    const level = ref(0)
    const currentWord = ref('')
    const currentImage = ref('')
    const currentOptions = ref<string[]>([])
    const showResult = ref(false)
    const resultMessage = ref('')
    const showingResult = ref(false)
    const selectedOption = ref('')
    const previousWord = ref('')

    // 定義詞彙和圖片的對應關係
    const vocabulary: VocabularyItem[] = [
      // 水果
      { word: 'apple', image: apple },
      { word: 'banana', image: banana },
      { word: 'orange', image: orange },
      { word: 'pineapple', image: pineapple },
      // 基本情緒
      { word: 'happy', image: '/images/emotions/happy.webp' },
      { word: 'sad', image: '/images/emotions/sad.webp' },
      { word: 'angry', image: '/images/emotions/angry.webp' },
      { word: 'nervous', image: '/images/emotions/nervous.webp' },
      { word: 'excited', image: '/images/emotions/excited.webp' },
      // 生理狀態
      { word: 'tired', image: '/images/emotions/tired.webp' },
      { word: 'sleepy', image: '/images/emotions/sleepy.webp' },
      { word: 'hungry', image: '/images/emotions/hungry.webp' },
      { word: 'thirsty', image: '/images/emotions/thirsty.webp' },
      { word: 'sick', image: '/images/emotions/not_feeling_well.webp' },
      { word: 'headache', image: '/images/emotions/headache.webp' },
      { word: 'cold', image: '/images/emotions/cold.webp' },
      { word: 'hot', image: '/images/emotions/hot.webp' },
      { word: 'in pain', image: '/images/emotions/in_pain.webp' },
      { word: 'dizzy', image: '/images/emotions/dizzy.webp' },
      { word: 'nauseous', image: '/images/emotions/nauseous.webp' },
      { word: 'sore throat', image: '/images/emotions/sore_throat.webp' },
      { word: 'fever', image: '/images/emotions/fever.webp' },
      { word: 'coughing', image: '/images/emotions/coughing.webp' },
      { word: 'runny nose', image: '/images/emotions/runny_nose.webp' },
      // 心理狀態
      { word: 'focused', image: '/images/emotions/focused.webp' },
      { word: 'distracted', image: '/images/emotions/distracted.webp' },
      { word: 'motivated', image: '/images/emotions/motivated.webp' },
      { word: 'no energy', image: '/images/emotions/no_energy.webp' },
      { word: 'relieved', image: '/images/emotions/relieved.webp' },
      { word: 'hesitant', image: '/images/emotions/hesitant.webp' },
      { word: 'looking forward', image: '/images/emotions/looking_forward.webp' },
      { word: 'impatient', image: '/images/emotions/impatient.webp' },
      { word: 'calm', image: '/images/emotions/calm.webp' },
      { word: 'irritated', image: '/images/emotions/irritated.webp' },
      // 複雜情緒
      { word: 'worried', image: '/images/emotions/worried.webp' },
      { word: 'scared', image: '/images/emotions/scared.webp' },
      { word: 'troubled', image: '/images/emotions/troubled.webp' },
      { word: 'surprised', image: '/images/emotions/surprised.webp' },
      { word: 'disappointed', image: '/images/emotions/disappointed.webp' },
      { word: 'touched', image: '/images/emotions/touched.webp' },
      { word: 'satisfied', image: '/images/emotions/satisfied.webp' },
      { word: 'confused', image: '/images/emotions/confused.webp' },
      { word: 'envious', image: '/images/emotions/envious.webp' },
      { word: 'grateful', image: '/images/emotions/grateful.webp' },
      { word: 'regretful', image: '/images/emotions/regretful.webp' },
      { word: 'bored', image: '/images/emotions/bored.webp' },
      { word: 'anxious', image: '/images/emotions/anxious.webp' },
      { word: 'depressed', image: '/images/emotions/depressed.webp' },
      { word: 'proud', image: '/images/emotions/proud.webp' },
      { word: 'ashamed', image: '/images/emotions/ashamed.webp' },
      { word: 'jealous', image: '/images/emotions/jealous.webp' },
      { word: 'embarrassed', image: '/images/emotions/embarrassed.webp' },
      { word: 'lonely', image: '/images/emotions/lonely.webp' },
      { word: 'relaxed', image: '/images/emotions/relaxed.webp' },
    ]

    // 從 localStorage 讀取已保存的 level
    const savedLevel = localStorage.getItem('game3Level')
    if (savedLevel) {
      level.value = parseInt(savedLevel)
    }

    // 選擇高品質英文語音（避免金屬音）
    function pickEnVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
      try {
        let en = voices.filter(
          (v) => v && v.lang && String(v.lang).toLowerCase().indexOf('en') === 0,
        )
        en = en.filter((v) => {
          const nm = (v.name || '').toLowerCase()
          return nm.indexOf('compact') < 0 && nm !== 'fred'
        })
        const prefName =
          en.find((v) => (v.name || '').toLowerCase().indexOf('samantha') >= 0) ||
          en.find((v) => (v.name || '').toLowerCase().indexOf('alex') >= 0)
        if (prefName) return prefName
        return (
          en.find((v) => String(v.lang).toLowerCase() === 'en-us') ||
          en.find((v) => String(v.lang).toLowerCase() === 'en-gb') ||
          en.find((v) => String(v.lang).toLowerCase() === 'en-au') ||
          en[0] ||
          null
        )
      } catch {
        return null
      }
    }

    // 生成隨機單字和圖片
    function selectRandomWord() {
      let selected
      do {
        const randomIndex = Math.floor(Math.random() * vocabulary.length)
        selected = vocabulary[randomIndex]!
      } while (selected.word === previousWord.value)

      currentWord.value = selected.word
      currentImage.value = selected.image
      previousWord.value = selected.word
    }

    // 生成選項
    function generateOptions() {
      const options = new Set<string>()
      options.add(currentWord.value)

      while (options.size < 4) {
        const randomIndex = Math.floor(Math.random() * vocabulary.length)
        const randomItem = vocabulary[randomIndex]!
        options.add(randomItem.word)
      }

      currentOptions.value = Array.from(options).sort(() => Math.random() - 0.5)
    }

    // 開始新一輪
    function startNewRound() {
      showingResult.value = false
      selectedOption.value = ''
      selectRandomWord()
      generateOptions()
      speakCurrentWord()
    }

    // 發音當前單字（高品質語音）
    function speakCurrentWord() {
      if (!currentWord.value) return
      window.speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(currentWord.value)
      utterance.lang = 'en-US'
      utterance.rate = 0.9
      utterance.pitch = 1.0
      utterance.volume = 1.0

      const doSpeak = () => {
        const voices = window.speechSynthesis.getVoices()
        if (voices.length > 0) {
          const voice = pickEnVoice(voices)
          if (voice) utterance.voice = voice
        }
        window.speechSynthesis.speak(utterance)
      }

      const voices = window.speechSynthesis.getVoices()
      if (voices.length === 0) {
        window.speechSynthesis.onvoiceschanged = doSpeak
      } else {
        doSpeak()
      }
    }

    // 檢查答案
    function checkAnswer(selected: string) {
      selectedOption.value = selected
      showingResult.value = true

      if (selected === currentWord.value) {
        resultMessage.value = '答對了！'
        level.value++
        localStorage.setItem('game3Level', level.value.toString())
        showResult.value = true

        setTimeout(() => {
          showResult.value = false
          startNewRound()
        }, 1000)
      } else {
        resultMessage.value = '答錯了，請再試一次！'
        showResult.value = true

        setTimeout(() => {
          showResult.value = false
          showingResult.value = false
        }, 1000)
      }
    }

    // 取得按鈕顏色
    function getButtonColor(word: string): string {
      if (!showingResult.value) return 'primary'
      if (word === currentWord.value && word === selectedOption.value) return 'positive'
      if (word === selectedOption.value) return 'negative'
      return 'primary'
    }

    onMounted(() => {
      startNewRound()
    })

    return {
      level,
      currentImage,
      currentOptions,
      showResult,
      resultMessage,
      showingResult,
      speakCurrentWord,
      checkAnswer,
      getButtonColor,
    }
  },
})
</script>

<style scoped>
.word-btn {
  height: 50px;
  font-size: 1.2rem;
  text-transform: none;
  transition: all 0.3s ease;
}

.word-btn:hover:not(:disabled) {
  transform: scale(1.05);
}

@media (max-width: 600px) {
  .word-btn {
    height: 40px;
    font-size: 1rem;
  }
}
</style>
