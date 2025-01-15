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

// 匯入圖片
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
      { word: 'apple', image: apple },
      { word: 'banana', image: banana },
      { word: 'orange', image: orange },
      { word: 'pineapple', image: pineapple },
    ]

    // 從 localStorage 讀取已保存的 level
    const savedLevel = localStorage.getItem('game3Level')
    if (savedLevel) {
      level.value = parseInt(savedLevel)
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

    // 發音當前單字
    function speakCurrentWord() {
      if (currentWord.value) {
        const utterance = new SpeechSynthesisUtterance(currentWord.value)
        utterance.lang = 'en-US'
        utterance.rate = 0.8
        speechSynthesis.speak(utterance)
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
      if (word === currentWord.value && word === selectedOption.value) {
        return 'positive'
      }
      if (word === selectedOption.value) {
        return 'negative'
      }
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
