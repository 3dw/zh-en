<template>
  <q-page class="q-pa-md">
    <!-- 頁面標題 -->
    <div class="row items-center q-mb-md">
      <h1 class="col">運動規則學習</h1>
      <div class="col-auto" v-if="selectedSport">
        <q-btn
          icon="arrow_back"
          color="primary"
          round
          @click="selectedSport = null"
          class="q-mr-sm"
        />
        <q-btn
          icon="volume_up"
          color="primary"
          round
          @click="speakContent"
          :disable="!currentSpeakText"
        />
      </div>
    </div>

    <!-- 運動選擇區域 -->
    <div v-if="!selectedSport" class="row q-col-gutter-md justify-center">
      <div v-for="sport in sports" :key="sport.id" class="col-12 col-sm-6 col-md-4">
        <q-card class="sport-card cursor-pointer" @click="selectSport(sport)">
          <!-- <q-img :src="sport.image" style="height: 200px" /> -->
          <q-card-section class="text-center">
            <div class="text-h6">{{ sport.name }}</div>
            <div class="text-subtitle2">{{ sport.nameZh }}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!-- 運動內容區域 -->
    <div v-else class="sport-content">
      <q-stepper v-model="step" vertical color="primary" animated>
        <!-- 介紹步驟 -->
        <q-step :name="1" title="Introduction" icon="info" :done="step > 1">
          <div class="text-h5 q-mb-md">Let's Learn About {{ selectedSport.name }}!</div>
          <p class="text-body1">{{ selectedSport.introduction }}</p>
          <q-video v-if="selectedSport.videoUrl" :src="selectedSport.videoUrl" class="q-mt-md" />
        </q-step>

        <!-- 基本規則步驟 -->
        <q-step :name="2" title="Basic Rules" icon="rule" :done="step > 2">
          <div class="text-h6 q-mb-md">How to Start</div>
          <div v-for="(rule, index) in selectedSport.rules" :key="index" class="q-mb-md">
            <div class="row items-center q-gutter-md">
              <div class="col-12 col-md-5">{{ rule.chinese }}</div>
              <div class="col-12 col-md-5 text-primary">{{ rule.english }}</div>
              <q-btn flat round icon="volume_up" @click="speak(rule.english)" />
            </div>
          </div>
        </q-step>

        <!-- 計分方式步驟 -->
        <q-step :name="3" title="Scoring System" icon="sports_score" :done="step > 3">
          <div class="text-h6 q-mb-md">How to Score in {{ selectedSport.name }}</div>
          <div v-for="(score, index) in selectedSport.scoring" :key="index" class="q-mb-md">
            <div class="row items-center q-gutter-md">
              <div class="col-12 col-md-5">{{ score.chinese }}</div>
              <div class="col-12 col-md-5 text-primary">{{ score.english }}</div>
              <q-btn flat round icon="volume_up" @click="speak(score.english)" />
            </div>
          </div>
        </q-step>

        <!-- 單字學習步驟 -->
        <q-step :name="4" title="Key Vocabulary" icon="menu_book" :done="step > 4">
          <div class="row q-col-gutter-md justify-center">
            <div
              v-for="word in selectedSport.vocabulary"
              :key="word.id"
              class="col-12 col-sm-6 col-md-4"
            >
              <q-card flat bordered class="vocabulary-card">
                <!-- <q-img :src="word.image" style="height: 150px" /> -->
                <q-card-section class="text-center">
                  <div class="text-h6">{{ word.english }}</div>
                  <div class="text-subtitle2">{{ word.chinese }}</div>
                  <q-btn flat round icon="volume_up" @click="speak(word.english)" />
                </q-card-section>
              </q-card>
            </div>
          </div>
        </q-step>

        <!-- 測驗步驟 -->
        <q-step :name="5" title="Quiz" icon="quiz">
          <div v-if="!showQuizResult">
            <div class="text-h6 q-mb-md">Test Your Knowledge</div>
            <q-list>
              <q-item v-for="(question, index) in selectedSport.quiz" :key="index">
                <q-item-section>
                  <div class="text-subtitle1 q-mb-sm">{{ question.question }}</div>
                  <q-option-group
                    v-model="quizAnswers[index]"
                    :options="question.options.map((opt) => ({ label: opt, value: opt }))"
                    type="radio"
                  />
                </q-item-section>
              </q-item>
            </q-list>
            <div class="text-center q-mt-lg">
              <q-btn label="Check Answers" color="primary" @click="checkQuizAnswers" />
            </div>
          </div>
          <div v-else class="text-center">
            <div class="text-h6 q-mb-md">
              You scored {{ quizScore }} out of {{ selectedSport.quiz.length }}!
            </div>
            <q-btn label="Try Again" color="primary" @click="resetQuiz" />
          </div>
        </q-step>
      </q-stepper>
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
import { defineComponent, ref } from 'vue'
import { useQuasar } from 'quasar'

// 導入圖片
// import badmintonImg from '../assets/sports/badminton.jpg'
// import racketImg from '../assets/sports/racket.jpg'
// import shuttlecockImg from '../assets/sports/shuttlecock.jpg'
// import netImg from '../assets/sports/net.jpg'
// import courtImg from '../assets/sports/court.jpg'

interface Sport {
  id: string
  name: string
  nameZh: string
  image: string
  introduction: string
  videoUrl?: string
  rules: Array<{
    english: string
    chinese: string
  }>
  scoring: Array<{
    english: string
    chinese: string
  }>
  vocabulary: Array<{
    id: string
    english: string
    chinese: string
    image: string
  }>
  quiz: Array<{
    question: string
    options: string[]
    answer: string
  }>
}

export default defineComponent({
  name: 'RulesPage',
  setup() {
    const $q = useQuasar()
    const selectedSport = ref<Sport | null>(null)
    const step = ref(1)
    const quizAnswers = ref<string[]>([])
    const showQuizResult = ref(false)
    const quizScore = ref(0)
    const showResult = ref(false)
    const resultMessage = ref('')
    const currentSpeakText = ref('')

    // 運動數據
    const sports = ref<Sport[]>([
      {
        id: 'badminton',
        name: 'Badminton',
        nameZh: '羽毛球',
        image: '', // 暫時使用空字符串
        introduction: 'Badminton is a fun sport played with rackets and a shuttlecock.',
        videoUrl: 'https://www.youtube.com/embed/example',
        rules: [
          {
            english: 'The server must hit the shuttlecock diagonally across the court',
            chinese: '發球者必須將羽毛球斜向對角發出',
          },
          {
            english: 'Players can only hit the shuttlecock once before it goes over the net',
            chinese: '球員在球過網前只能擊球一次',
          },
        ],
        scoring: [
          {
            english: 'A game is played to 21 points',
            chinese: '一局比賽打到21分',
          },
          {
            english: 'If the score reaches 20-all, the side which gains a 2-point lead first wins',
            chinese: '如果比分到達20平，先取得2分領先的一方獲勝',
          },
        ],
        vocabulary: [
          {
            id: 'racket',
            english: 'Racket',
            chinese: '球拍',
            image: '', // 暫時使用空字符串
          },
          {
            id: 'shuttlecock',
            english: 'Shuttlecock',
            chinese: '羽毛球',
            image: '', // 暫時使用空字符串
          },
          {
            id: 'net',
            english: 'Net',
            chinese: '球網',
            image: '', // 暫時使用空字符串
          },
          {
            id: 'court',
            english: 'Court',
            chinese: '球場',
            image: '', // 暫時使用空字符串
          },
        ],
        quiz: [
          {
            question: 'What do you hit in badminton?',
            options: ['Ball', 'Shuttlecock', 'Puck'],
            answer: 'Shuttlecock',
          },
          {
            question: 'How many points do you usually need to win a game?',
            options: ['11', '15', '21'],
            answer: '21',
          },
        ],
      },
      // 可以添加更多運動
    ])

    const selectSport = (sport: Sport) => {
      selectedSport.value = sport
      step.value = 1
      resetQuiz()
    }

    const speak = (text: string) => {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'en-US'
      utterance.rate = 0.8
      speechSynthesis.speak(utterance)
    }

    const speakContent = () => {
      if (currentSpeakText.value) {
        speak(currentSpeakText.value)
      }
    }

    const checkQuizAnswers = () => {
      if (!selectedSport.value) return

      quizScore.value = 0
      selectedSport.value.quiz.forEach((question, index) => {
        if (quizAnswers.value[index] === question.answer) {
          quizScore.value++
        }
      })
      showQuizResult.value = true

      $q.notify({
        message: `You scored ${quizScore.value} out of ${selectedSport.value.quiz.length}!`,
        color: quizScore.value === selectedSport.value.quiz.length ? 'positive' : 'warning',
      })
    }

    const resetQuiz = () => {
      quizAnswers.value = []
      showQuizResult.value = false
      quizScore.value = 0
    }

    return {
      sports,
      selectedSport,
      step,
      quizAnswers,
      showQuizResult,
      quizScore,
      showResult,
      resultMessage,
      currentSpeakText,
      selectSport,
      speak,
      speakContent,
      checkQuizAnswers,
      resetQuiz,
    }
  },
})
</script>

<style lang="scss" scoped>
.sport-card {
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
}

.vocabulary-card {
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
}

.sport-content {
  max-width: 800px;
  margin: 0 auto;
}

@media (max-width: 600px) {
  .sport-card {
    margin-bottom: 20px;
  }
}
</style>
