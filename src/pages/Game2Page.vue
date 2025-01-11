<template>
  <q-page class="q-pa-md">
    <div class="row items-center q-mb-md">
      <h1 class="col">小寫字母發音選字遊戲</h1>
      <div class="col-auto">
        <q-badge color="deep-orange" class="text-h6"> Level: {{ level }} </q-badge>
      </div>
    </div>

    <!-- 遊戲說明和發音按鈕 -->
    <div class="text-h6 q-mb-md text-center">
      請聽發音，選出正確的小寫字母
      <q-btn
        icon="volume_up"
        color="primary"
        round
        size="lg"
        class="q-ml-sm"
        @click="speakCurrentLetter"
      />
    </div>

    <!-- 選項區域 -->
    <div class="row q-col-gutter-md justify-center q-mt-lg">
      <div v-for="option in currentOptions" :key="option" class="col-auto">
        <q-btn
          :label="option"
          class="option-btn"
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

export default defineComponent({
  name: 'Game2Page',
  setup() {
    const level = ref(0)
    const currentLetter = ref('')
    const currentOptions = ref<string[]>([])
    const showResult = ref(false)
    const resultMessage = ref('')
    const showingResult = ref(false)
    const selectedOption = ref('')

    // 從 localStorage 讀取已保存的 level
    const savedLevel = localStorage.getItem('game2Level')
    if (savedLevel) {
      level.value = parseInt(savedLevel)
    }

    // 生成隨機字母
    function getRandomLetter(): string {
      const letters = 'abcdefghijklmnopqrstuvwxyz'
      return letters.charAt(Math.floor(Math.random() * letters.length))
    }

    // 生成選項
    function generateOptions() {
      const options = new Set<string>()
      options.add(currentLetter.value)

      while (options.size < 4) {
        options.add(getRandomLetter())
      }

      currentOptions.value = Array.from(options).sort(() => Math.random() - 0.5)
    }

    // 開始新一輪
    function startNewRound() {
      showingResult.value = false
      selectedOption.value = ''
      currentLetter.value = getRandomLetter()
      generateOptions()
      speakCurrentLetter()
    }

    // 發音當前字母
    function speakCurrentLetter() {
      if (currentLetter.value) {
        const utterance = new SpeechSynthesisUtterance(currentLetter.value)
        utterance.lang = 'en-US'
        utterance.rate = 0.8
        speechSynthesis.speak(utterance)
      }
    }

    // 檢查答案
    function checkAnswer(selected: string) {
      selectedOption.value = selected
      showingResult.value = true

      if (selected === currentLetter.value) {
        resultMessage.value = '答對了！'
        level.value++
        localStorage.setItem('game2Level', level.value.toString())
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
    function getButtonColor(letter: string): string {
      if (!showingResult.value) return 'primary'
      if (letter === currentLetter.value && letter === selectedOption.value) {
        return 'positive'
      }
      if (letter === selectedOption.value) {
        return 'negative'
      }
      return 'primary'
    }

    onMounted(() => {
      startNewRound()
    })

    return {
      level,
      currentOptions,
      showResult,
      resultMessage,
      showingResult,
      speakCurrentLetter,
      checkAnswer,
      getButtonColor,
    }
  },
})
</script>

<style scoped>
.option-btn {
  width: 80px;
  height: 80px;
  font-size: 2rem;
  margin: 8px;
  transition: all 0.3s ease;
  text-transform: none !important;
}

.option-btn:hover:not(:disabled) {
  transform: scale(1.1);
}

@media (max-width: 600px) {
  .option-btn {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }
}
</style>
