<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  name: 'Game2Page',
  setup() {
    const level = ref<number>(0)
    const letters = ref<string[]>('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''))
    const currentLetter = ref<string>('')
    const showResult = ref<boolean>(false)
    const resultMessage = ref<string>('')
    const selectedLetter = ref<string>('')

    // 從 localStorage 讀取已保存的 level
    const savedLevel = localStorage.getItem('letterGameLevel')
    if (savedLevel) {
      level.value = parseInt(savedLevel)
    }

    // 隨機選擇一個字母
    function selectRandomLetter() {
      if (letters.value.length > 0) {
        const randomIndex = Math.floor(Math.random() * letters.value.length)
        // 使用非空斷言運算符或提供預設值
        currentLetter.value = letters.value[randomIndex]!
        selectedLetter.value = ''
        speakCurrentLetter()
      }
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
    function checkAnswer(letter: string) {
      selectedLetter.value = letter
      if (letter === currentLetter.value) {
        resultMessage.value = '答對了！'
        level.value++
        localStorage.setItem('letterGameLevel', level.value.toString())
        showResult.value = true
        setTimeout(() => {
          showResult.value = false
          selectRandomLetter()
        }, 1000)
      } else {
        resultMessage.value = '答錯了，請再試一次！'
        showResult.value = true
        setTimeout(() => {
          showResult.value = false
        }, 1000)
      }
    }

    // 取得按鈕顏色
    function getBtnColor(letter: string): string {
      if (!selectedLetter.value) return 'primary'
      if (letter === currentLetter.value && letter === selectedLetter.value) {
        return 'positive'
      }
      if (letter === selectedLetter.value) {
        return 'negative'
      }
      return 'primary'
    }

    // 組件掛載時選擇第一個字母
    onMounted(() => {
      selectRandomLetter()
    })

    return {
      level,
      letters,
      showResult,
      resultMessage,
      speakCurrentLetter,
      checkAnswer,
      getBtnColor,
    }
  },
})
</script>
