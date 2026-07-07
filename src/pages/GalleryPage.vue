<template>
  <q-page class="q-pa-md">
    <div class="word-card-list">
      <div class="quiz-container">
        <h1>本機圖片字卡小測驗</h1>
        <p class="text-body1 text-grey-8">
          題目會從「拍照分析」或「自訂字卡」儲存在本機的圖片字卡中產生。
        </p>

        <div v-if="imageCards.length < 2" class="empty-state q-pa-lg">
          <q-icon name="style" size="48px" color="grey-6" />
          <p class="q-mt-md">目前圖片字卡不足，請先建立至少 2 張含圖片的本機字卡。</p>
          <q-btn color="primary" label="去拍照建立字卡" to="/what_is_this" />
        </div>

        <template v-else>
          <div v-if="quiz.image" class="quiz-question">
            <h2>
              這是什麼？<span v-if="wins > 0"> - 連續答對 {{ wins }} 題</span>
            </h2>
            <q-img :src="quiz.image" :ratio="1" class="quiz-image" />
            <div class="q-mt-sm">
              <q-btn
                color="primary"
                icon="volume_up"
                label="播放英文發音"
                @click="playCardAudio(quiz.answer)"
                flat
              />
            </div>
          </div>

          <q-separator v-if="quiz.image" class="q-my-md" />

          <div v-if="quiz.image" class="quiz-options">
            <div v-for="(option, index) in quiz.options" :key="index" class="quiz-option">
              <q-radio v-model="selectedOption" :val="option" :label="option" />
            </div>
            <q-btn color="primary" icon="check" label="檢查答案" @click="checkAnswer" />
          </div>

          <q-btn
            color="primary"
            :size="quiz.image ? undefined : 'xl'"
            icon="refresh"
            :label="quiz.image ? '重新出題！' : '開始出題！'"
            @click="makeQuiz"
            :flat="Boolean(quiz.image)"
          />
        </template>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue'
import { useQuasar } from 'quasar'
import { EN_US_PREFERRED_KEYWORDS, speakTextWithPreferredVoice } from 'src/utils/speechVoice'

interface Card {
  english: string
  chinese: string
  flipped?: boolean
  image?: string
}

export default defineComponent({
  name: 'GalleryPage',
  setup() {
    const $q = useQuasar()
    const cards = ref<Card[]>([])

    const quiz = ref({
      image: '',
      options: ['選項1', '選項2', '選項3', '選項4'],
      answer: '選項1',
    })

    const imageCards = computed(() => {
      return cards.value.filter((card) => card.image && card.english && card.chinese)
    })

    const playCardAudio = (text: string) => {
      speakTextWithPreferredVoice(text, 'en-US', EN_US_PREFERRED_KEYWORDS, 0.85)
    }

    const loadLocalCards = () => {
      try {
        const stored = localStorage.getItem('customCards')
        const parsed = stored ? JSON.parse(stored) : []
        cards.value = Array.isArray(parsed) ? parsed : []
      } catch (error) {
        console.error('讀取本機字卡失敗:', error)
        cards.value = []
      }
    }

    const selectedOption = ref('')

    const wins = ref(0)

    const incorrectAttempts = ref(0)

    const checkAnswer = () => {
      if (selectedOption.value === quiz.value.answer) {
        wins.value++
        incorrectAttempts.value = 0
        $q.notify({
          type: 'positive',
          message: '答對了！您已連續答對 ' + wins.value + ' 題，得到 ' + wins.value * 100 + '分',
          position: 'top',
          timeout: 1500,
        })
        makeQuiz()
      } else {
        incorrectAttempts.value++
        wins.value = 0
        $q.notify({
          type: 'negative',
          message: '答錯了！再試一次',
          position: 'top',
          timeout: 1500,
        })
        if (incorrectAttempts.value >= 2) {
          incorrectAttempts.value = 0
          makeQuiz()
        }
      }
    }

    const makeQuiz = () => {
      const availableCards = imageCards.value
      if (availableCards.length < 2) return

      const randomIndex = Math.floor(Math.random() * availableCards.length)
      const randomCard = availableCards[randomIndex]
      if (!randomCard?.image) return

      quiz.value.image = randomCard.image
      quiz.value.answer = randomCard.english
      selectedOption.value = ''

      const options = availableCards.filter((card) => card.english !== randomCard.english)
      const randomOptions = options.sort(() => Math.random() - 0.5).slice(0, 3)
      quiz.value.options = [randomCard.english, ...randomOptions.map((card) => card.english)].sort(
        () => Math.random() - 0.5,
      )
    }

    onMounted(() => {
      loadLocalCards()
    })

    return {
      playCardAudio,
      imageCards,
      quiz,
      selectedOption,
      checkAnswer,
      wins,
      makeQuiz,
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

.quiz-container {
  text-align: center;
}

.quiz-image {
  object-fit: cover;
  border-radius: 8px;
  max-width: 300px;
}

.empty-state {
  border: 1px dashed #d0d0d0;
  border-radius: 8px;
  background: #fafafa;
}
</style>
