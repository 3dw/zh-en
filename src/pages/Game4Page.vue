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
      請看圖片，聽對白，選出正確的對話
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
      <div v-for="option in currentOptions" :key="option.id" class="col-12 col-sm-10 col-md-8">
        <q-btn
          :label="option.dialogue"
          class="dialogue-btn full-width"
          :color="getButtonColor(option.dialogue)"
          size="lg"
          :disable="showingResult"
          @click="checkAnswer(option.dialogue)"
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
import oldFriendsMeet from '../assets/Conversations/oldfriendsmeet.jpg'
import couplefight from '../assets/Conversations/couplefight.jpg'

interface DialogueOption {
  id: number
  dialogue: string
  isCorrect: boolean
}

interface DialogueScene {
  id: number
  image: string
  correctDialogue: string
  options: DialogueOption[]
}

export default defineComponent({
  name: 'Game4Page',
  setup() {
    const level = ref(0)
    const currentImage = ref('')
    const currentDialogue = ref('')
    const currentOptions = ref<DialogueOption[]>([])
    const showResult = ref(false)
    const resultMessage = ref('')
    const showingResult = ref(false)
    const selectedOption = ref('')
    const usedScenes = ref<number[]>([])

    // 定義對話場景
    const dialogueScenes: DialogueScene[] = [
      {
        id: 1,
        image: oldFriendsMeet,
        correctDialogue:
          "A: It's been so long! How have you been?\nB: I missed you so much! Let's catch up!",
        options: [
          {
            id: 1,
            dialogue:
              "A: It's been so long! How have you been?\nB: I missed you so much! Let's catch up!",
            isCorrect: true,
          },
          {
            id: 2,
            dialogue:
              'A: Why are you here? I thought we were meeting online.\nB: Oh, I just wanted to surprise you.',
            isCorrect: false,
          },
          {
            id: 3,
            dialogue:
              'A: Do I know you? You look familiar.\nB: Yes, we went to the same school for years!',
            isCorrect: false,
          },
          {
            id: 4,
            dialogue:
              "A: I thought you moved abroad!\nB: No, I've been living next door to you all this time.",
            isCorrect: false,
          },
        ],
      },
      {
        id: 2,
        image: couplefight,
        correctDialogue:
          "A: You never listen to me anymore!\nB: I do listen, but you don't give me a chance to explain!",
        options: [
          {
            id: 1,
            dialogue:
              "A: You never listen to me anymore!\nB: I do listen, but you don't give me a chance to explain!",
            isCorrect: true,
          },
          {
            id: 2,
            dialogue:
              'A: Why did you eat my dessert?\nB: I didn’t know it was yours, the fridge was empty!',
            isCorrect: false,
          },
          {
            id: 3,
            dialogue:
              'A: Let’s break up! I can’t stand your cooking.\nB: Fine! I was tired of you complaining anyway.',
            isCorrect: false,
          },
          {
            id: 4,
            dialogue:
              'A: You forgot my birthday again!\nB: No, I just wanted to surprise you tomorrow.',
            isCorrect: false,
          },
        ],
      },
      // 可以在這裡添加更多場景
    ]

    // 從 localStorage 讀取已保存的 level
    const savedLevel = localStorage.getItem('game4Level')
    if (savedLevel) {
      level.value = parseInt(savedLevel)
    }

    // 選擇隨機場景
    function selectRandomScene() {
      // 過濾掉已使用過的場景
      const availableScenes = dialogueScenes.filter((scene) => !usedScenes.value.includes(scene.id))

      // 如果所有場景都用完了，重置已使用場景列表
      if (availableScenes.length === 0) {
        usedScenes.value = []
        return selectRandomScene()
      }

      const randomIndex = Math.floor(Math.random() * availableScenes.length)
      const selected = availableScenes[randomIndex]!

      // 將選中的場景ID加入已使用列表
      usedScenes.value.push(selected.id)

      currentImage.value = selected.image
      currentDialogue.value = selected.correctDialogue
      currentOptions.value = [...selected.options].sort(() => Math.random() - 0.5)
    }

    // 開始新一輪
    function startNewRound() {
      showingResult.value = false
      selectedOption.value = ''
      selectRandomScene()
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
        }, 1500)
      } else {
        resultMessage.value = '答錯了，請再試一次！'
        showResult.value = true

        setTimeout(() => {
          showResult.value = false
          showingResult.value = false
        }, 1500)
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
  min-height: 80px;
  font-size: 1.1rem;
  text-transform: none;
  transition: all 0.3s ease;
  white-space: pre-line;
  line-height: 1.4;
  padding: 12px 20px;
  text-align: left;
}

.dialogue-btn:hover:not(:disabled) {
  transform: scale(1.02);
}

@media (max-width: 600px) {
  .dialogue-btn {
    min-height: 70px;
    font-size: 1rem;
    padding: 8px 16px;
  }
}
</style>
