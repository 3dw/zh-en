<template>
  <q-page class="q-pa-md">
    <div class="row items-center q-mb-md">
      <h1 class="col">看圖選對白遊戲</h1>
      <div class="col-auto">
        <q-badge color="deep-orange" class="text-h6"> Level: {{ level }} </q-badge>
      </div>
    </div>

    <!-- 遊戲說明和發音按鈕 -->
    <div class="text-h6 q-mb-md text-center">
      請看圖片，聽對白，選出正確的句子
      <q-btn
        icon="volume_up"
        color="primary"
        round
        size="lg"
        class="q-ml-sm"
        @click="speakCurrentDialogue"
      />
    </div>

    <!-- 圖片顯示區域 -->
    <div class="row justify-center q-mb-lg">
      <div class="col-12 col-sm-8 col-md-6">
        <q-img :src="currentImage" style="height: 300px" fit="contain" class="rounded-borders" />
      </div>
    </div>

    <!-- 選項區域 -->
    <div class="row q-col-gutter-md justify-center">
      <div v-for="option in currentOptions" :key="option" class="col-12 col-sm-10 col-md-8">
        <q-btn
          :label="option"
          class="dialogue-btn full-width"
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

// 修改圖片導入路徑
import conversation1 from '../assets/Conversations/conversation1.jpg'
import conversation2 from '../assets/Conversations/conversation2.jpg'
import conversation3 from '../assets/Conversations/conversation3.jpg'
import conversation4 from '../assets/Conversations/conversation4.jpg'

interface DialogueItem {
  image: string
  correctDialogue: string
  options: string[]
}

export default defineComponent({
  name: 'Game4Page',
  setup() {
    const level = ref(0)
    const currentImage = ref('')
    const currentDialogue = ref('')
    const currentOptions = ref<string[]>([])
    const showResult = ref(false)
    const resultMessage = ref('')
    const showingResult = ref(false)
    const selectedOption = ref('')

    // 定義對話場景
    const dialogues: DialogueItem[] = [
      {
        image: conversation1,
        correctDialogue: 'How are you today?',
        options: [
          'How are you today?',
          "What's your name?",
          'Where are you going?',
          'What time is it?',
        ],
      },
      {
        image: conversation2,
        correctDialogue: 'Nice to meet you!',
        options: ['Nice to meet you!', 'Good bye!', 'See you later!', 'Thank you!'],
      },
      {
        image: conversation3,
        correctDialogue: 'Have a nice day!',
        options: ['Have a nice day!', 'Good night!', 'Good morning!', 'Good afternoon!'],
      },
      {
        image: conversation4,
        correctDialogue: 'Thank you very much!',
        options: ['Thank you very much!', "You're welcome!", "I'm sorry!", 'Excuse me!'],
      },
    ]

    // 從 localStorage 讀取已保存的 level
    const savedLevel = localStorage.getItem('game4Level')
    if (savedLevel) {
      level.value = parseInt(savedLevel)
    }

    // 選擇隨機對話場景
    function selectRandomDialogue() {
      const randomIndex = Math.floor(Math.random() * dialogues.length)
      const selected = dialogues[randomIndex]!
      currentImage.value = selected.image
      currentDialogue.value = selected.correctDialogue
      currentOptions.value = [...selected.options].sort(() => Math.random() - 0.5)
    }

    // 開始新一輪
    function startNewRound() {
      showingResult.value = false
      selectedOption.value = ''
      selectRandomDialogue()
      speakCurrentDialogue()
    }

    // 發音當前對白
    function speakCurrentDialogue() {
      if (currentDialogue.value) {
        const utterance = new SpeechSynthesisUtterance(currentDialogue.value)
        utterance.lang = 'en-US'
        utterance.rate = 0.8
        speechSynthesis.speak(utterance)
      }
    }

    // 檢查答案
    function checkAnswer(selected: string) {
      selectedOption.value = selected
      showingResult.value = true

      if (selected === currentDialogue.value) {
        resultMessage.value = '答對了！'
        level.value++
        localStorage.setItem('game4Level', level.value.toString())
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
    function getButtonColor(dialogue: string): string {
      if (!showingResult.value) return 'primary'
      if (dialogue === currentDialogue.value && dialogue === selectedOption.value) {
        return 'positive'
      }
      if (dialogue === selectedOption.value) {
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
      speakCurrentDialogue,
      checkAnswer,
      getButtonColor,
    }
  },
})
</script>

<style scoped>
.dialogue-btn {
  min-height: 60px;
  font-size: 1.2rem;
  text-transform: none;
  transition: all 0.3s ease;
  white-space: normal;
  line-height: 1.4;
  padding: 8px 16px;
}

.dialogue-btn:hover:not(:disabled) {
  transform: scale(1.02);
}

@media (max-width: 600px) {
  .dialogue-btn {
    min-height: 50px;
    font-size: 1rem;
  }
}
</style>
