<template>
  <q-page class="q-pa-md">
    <div class="row items-center q-mb-md">
      <h1 class="col">
        <q-icon name="people" size="md" color="primary" class="q-mr-sm" />
        英國皇室家族關係稱謂學習
      </h1>
    </div>

    <!-- 遊戲模式選擇 -->
    <div class="row q-mb-lg justify-center">
      <q-btn-toggle
        v-model="gameMode"
        :options="[
          { label: '聽力練習', value: 'listening' },
          { label: '填空練習', value: 'quiz' },
          { label: '進階測驗', value: 'advanced' },
        ]"
        color="primary"
        class="q-mb-md"
      />
    </div>

    <!-- 主要內容區域 -->
    <div class="row q-mt-lg">
      <!-- 左側族譜圖 -->
      <div class="col-12 col-md-7 q-pr-md">
        <q-img src="src/assets/royal_family.jpg" class="family-tree-image" fit="contain">
          <template v-slot:loading>
            <q-spinner-dots color="primary" />
          </template>
        </q-img>
      </div>

      <!-- 右側遊戲區域 -->
      <div class="col-12 col-md-5">
        <!-- 聽力練習模式 -->
        <div v-if="gameMode === 'listening'" class="game-section">
          <q-card class="story-card">
            <q-card-section>
              <div class="text-h6">家族故事</div>
              <div class="text-body1 q-mt-md">{{ currentStory }}</div>
            </q-card-section>
            <q-card-actions align="center">
              <q-btn color="primary" icon="volume_up" label="播放故事" @click="speakStory" />
              <q-btn color="secondary" icon="skip_next" label="下一個" @click="nextStory" />
            </q-card-actions>
          </q-card>
        </div>

        <!-- 填空練習模式 -->
        <div v-if="gameMode === 'quiz'" class="game-section">
          <q-card class="quiz-card">
            <q-card-section>
              <div class="text-h6">關係稱謂填空</div>
              <div class="text-body1 q-mt-md">{{ currentQuiz.question }}</div>
              <div class="q-mt-md">
                <q-option-group
                  v-model="userAnswer"
                  :options="currentQuiz.options"
                  type="radio"
                  @update:model-value="checkAnswer"
                />
              </div>
            </q-card-section>
            <q-card-actions align="center">
              <q-btn
                color="primary"
                icon="check_circle"
                label="檢查答案"
                @click="checkAnswer"
                :disable="!userAnswer"
              />
              <q-btn color="secondary" icon="skip_next" label="下一題" @click="nextQuiz" />
            </q-card-actions>
          </q-card>
        </div>

        <!-- 進階測驗模式 -->
        <div v-if="gameMode === 'advanced'" class="game-section">
          <q-card class="advanced-card">
            <q-card-section>
              <div class="text-h6">進階關係描述</div>
              <div class="text-body1 q-mt-md">{{ currentAdvanced.question }}</div>
              <q-input
                v-model="advancedAnswer"
                outlined
                label="請輸入答案"
                class="q-mt-md"
                @keyup.enter="checkAdvancedAnswer"
              />
            </q-card-section>
            <q-card-actions align="center">
              <q-btn
                color="primary"
                icon="check_circle"
                label="檢查答案"
                @click="checkAdvancedAnswer"
              />
              <q-btn color="secondary" icon="skip_next" label="下一題" @click="nextAdvanced" />
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>

    <!-- 結果提示對話框 -->
    <q-dialog v-model="showResult">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ resultMessage }}</div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="關閉" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

interface Quiz {
  question: string
  options: Array<{ label: string; value: string }>
  answer: string
}

interface AdvancedQuiz {
  question: string
  answer: string
}

export default defineComponent({
  name: 'RelationshipPage',
  setup() {
    const gameMode = ref('listening')
    const showResult = ref(false)
    const resultMessage = ref('')
    const userAnswer = ref('')
    const advancedAnswer = ref('')

    // 聽力練習故事
    const defaultStory =
      'Queen Elizabeth II married Prince Philip on November 20, 1947. They had four children: Charles, Anne, Andrew, and Edward.'

    const stories = [
      defaultStory,
      'Prince Charles and Diana had two children: William and Harry.',
      'Prince William married Catherine on April 29, 2011. They have three children: George, Charlotte, and Louis.',
      'Queen Elizabeth II is the grandmother of Prince William and Prince Harry.',
    ] as const

    // 填空練習題目
    const defaultQuiz: Quiz = {
      question: 'Prince Charles is the ______ of Queen Elizabeth II.',
      options: [
        { label: 'father', value: 'father' },
        { label: 'son', value: 'son' },
        { label: 'brother', value: 'brother' },
      ],
      answer: 'son',
    }

    const quizzes: Quiz[] = [
      defaultQuiz,
      {
        question: 'Prince George is the ______ of Princess Charlotte.',
        options: [
          { label: 'brother', value: 'brother' },
          { label: 'uncle', value: 'uncle' },
          { label: 'cousin', value: 'cousin' },
        ],
        answer: 'brother',
      },
    ]

    // 進階測驗題目
    const defaultAdvancedQuiz: AdvancedQuiz = {
      question: 'Who is the mother of Prince George?',
      answer: 'Catherine',
    }

    const advancedQuizzes: AdvancedQuiz[] = [
      defaultAdvancedQuiz,
      {
        question: 'What is the relationship between Queen Elizabeth II and Prince Louis?',
        answer: 'Great-grandmother',
      },
    ]

    const currentStoryIndex = ref(0)
    const currentStory = ref<string>(defaultStory)

    const currentQuizIndex = ref(0)
    const currentQuiz = ref<Quiz>(defaultQuiz)

    const currentAdvancedIndex = ref(0)
    const currentAdvanced = ref<AdvancedQuiz>(defaultAdvancedQuiz)

    // 聽力練習功能
    const speakStory = () => {
      const utterance = new SpeechSynthesisUtterance(currentStory.value)
      utterance.lang = 'en-GB'
      speechSynthesis.speak(utterance)
    }

    const nextStory = () => {
      const nextIndex = (currentStoryIndex.value + 1) % stories.length
      currentStoryIndex.value = nextIndex
      const nextStory = stories[nextIndex] ?? defaultStory
      currentStory.value = nextStory
    }

    // 填空練習功能
    const checkAnswer = () => {
      const quiz = currentQuiz.value
      if (userAnswer.value === quiz.answer) {
        resultMessage.value = '答對了！'
      } else {
        resultMessage.value = `答錯了。正確答案是：${quiz.answer}`
      }
      showResult.value = true
    }

    const nextQuiz = () => {
      const nextIndex = (currentQuizIndex.value + 1) % quizzes.length
      currentQuizIndex.value = nextIndex
      const nextQuiz = quizzes[nextIndex] ?? defaultQuiz
      currentQuiz.value = nextQuiz
      userAnswer.value = ''
    }

    // 進階測驗功能
    const checkAdvancedAnswer = () => {
      const advanced = currentAdvanced.value
      if (advancedAnswer.value.toLowerCase() === advanced.answer.toLowerCase()) {
        resultMessage.value = '答對了！'
      } else {
        resultMessage.value = `答錯了。正確答案是：${advanced.answer}`
      }
      showResult.value = true
    }

    const nextAdvanced = () => {
      const nextIndex = (currentAdvancedIndex.value + 1) % advancedQuizzes.length
      currentAdvancedIndex.value = nextIndex
      const nextAdvanced = advancedQuizzes[nextIndex] ?? defaultAdvancedQuiz
      currentAdvanced.value = nextAdvanced
      advancedAnswer.value = ''
    }

    return {
      gameMode,
      currentStory,
      currentQuiz,
      currentAdvanced,
      userAnswer,
      advancedAnswer,
      showResult,
      resultMessage,
      speakStory,
      nextStory,
      checkAnswer,
      nextQuiz,
      checkAdvancedAnswer,
      nextAdvanced,
    }
  },
})
</script>

<style scoped>
.family-tree-image {
  width: 100%;
  height: calc(100vh - 200px);
  min-height: 500px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 20px;
}

.game-section {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.story-card,
.quiz-card,
.advanced-card {
  width: 100%;
}

/* 在小螢幕上調整布局 */
@media (max-width: 1023px) {
  .family-tree-image {
    height: 400px;
    min-height: auto;
    margin-bottom: 20px;
    position: relative;
  }

  .game-section {
    margin-top: 20px;
  }
}

.text-h6 {
  color: #1976d2;
}

.q-card {
  border-radius: 12px;
}
</style>
