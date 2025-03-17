<template>
  <q-page class="q-pa-md">
    <!-- 加上 tabs 可以切換功能為"AI 圖片描述畫廊" 和 "4選1小測驗"-->
    <q-tabs v-model="tab" class="text-grey">
      <q-tab name="gallery" label="AI 圖片描述畫廊" />
      <q-tab name="quiz" label="4選1小測驗" />
    </q-tabs>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="gallery">
        <div class="word-card-list">
          <h1>AI 圖片描述畫廊</h1>

          <!-- 添加搜尋框 -->
          <div class="search-bar q-mb-md">
            <q-input
              v-model="searchQuery"
              outlined
              dense
              placeholder="搜尋圖片描述..."
              class="search-input"
              clearable
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>

          <!-- 顯示卡片畫廊 -->
          <div class="gallery-grid q-mt-lg flex flex-row-reverse flex-wrap-reverse">
            <q-card
              v-for="(card, index) in filteredCards"
              :key="index"
              class="gallery-card q-ma-sm"
              flat
              bordered
            >
              <q-img :src="card.image" :ratio="1" class="gallery-image" />
              <q-card-section>
                <div class="text-body1">{{ card.description }}</div>
                <div class="row q-mt-sm justify-between">
                  <q-btn
                    color="primary"
                    icon="volume_up"
                    label="播放發音"
                    @click="playCardAudio(card.description)"
                    flat
                  />
                  <q-btn
                    v-if="user && user.isAdmin"
                    color="negative"
                    icon="delete"
                    label="刪除"
                    @click="deleteCard(index)"
                    flat
                  />
                </div>
              </q-card-section>
              <q-card-section>
                <!-- 顯示圖片的createdAt 和 createdBy -->
                <div class="text-body2" v-if="user && user.isAdmin">
                  upload by
                  <img :src="getPhotoById(card.createdBy || '未知')" class="avatar" />
                  {{ (card.createdAt || '未知').split('T')[0] }}
                </div>
                <div class="text-body2" v-else>
                  upload at {{ (card.createdAt || '未知').split('T')[0] }}
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-tab-panel>
      <q-tab-panel name="quiz">
        <div class="word-card-list">
          <div class="quiz-container">
            <div class="quiz-question" v-if="quiz.image !== 'https://via.placeholder.com/150'">
              <h2>
                這是什麼？<span v-if="wins > 0"> - 連續答對 {{ wins }} 題</span>
              </h2>
              <q-img :src="quiz.image" :ratio="1" class="quiz-image" />
              <!-- 發音按鈕 -->
              <q-btn
                color="primary"
                icon="volume_up"
                label="播放發音"
                @click="playCardAudio(quiz.answer)"
                flat
              />
            </div>

            <q-separator v-if="quiz.image !== 'https://via.placeholder.com/150'" />

            <div class="quiz-options" v-if="quiz.image !== 'https://via.placeholder.com/150'">
              <div v-for="(option, index) in quiz.options" :key="index" class="quiz-option">
                <q-radio v-model="selectedOption" :val="option" :label="option" />
                <!-- <q-btn
                  color="primary"
                  icon="volume_up"
                  label="播放發音"
                  @click="playCardAudio(option)"
                  flat
                /> -->
              </div>
              <!-- 檢查答案按鈕 -->
              <q-btn color="primary" icon="check" label="檢查答案" @click="checkAnswer" />
            </div>

            <q-btn
              v-if="quiz.image == 'https://via.placeholder.com/150'"
              color="primary"
              size="xl"
              icon="refresh"
              label="開始出題！"
              @click="makeQuiz"
            />
            <q-btn
              v-else
              color="primary"
              icon="refresh"
              label="重新出題！"
              @click="makeQuiz"
              flat
            />
          </div>
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import type { PropType } from 'vue'
import { set, ref as dbRef, getDatabase } from 'firebase/database'
import { useQuasar } from 'quasar'

const database = getDatabase()

interface Card {
  image: string
  description: string
  createdAt?: string
  createdBy?: string
}

interface User {
  uid: string
  isAdmin: boolean
  photoURL: string
}

export default defineComponent({
  name: 'GalleryPage',

  props: {
    cards: {
      type: Array as PropType<Card[]>,
      default: () => [],
    },
    user: {
      type: Object as PropType<User>,
      default: () => ({}),
    },
    users: {
      type: Array as PropType<User[]>,
      default: () => [],
    },
  },

  emits: ['earn-xp'],

  setup(props, { emit }) {
    const $q = useQuasar()
    const searchQuery = ref('')

    const tab = ref('quiz')

    const getPhotoById = (id: string) => {
      const user = props.users.find((user) => user.uid === id)
      return user?.photoURL || 'https://cdn.quasar.dev/img/boy-avatar.png'
    }

    const quiz = ref({
      image: 'https://via.placeholder.com/150',
      options: ['選項1', '選項2', '選項3', '選項4'],
      answer: '選項1',
    })

    // 添加過濾邏輯
    const filteredCards = computed(() => {
      if (!searchQuery.value) return props.cards
      const query = searchQuery.value.toLowerCase()
      return props.cards.filter((card) => card.description.toLowerCase().includes(query))
    })

    const playCardAudio = (text: string) => {
      if (text) {
        const utterance = new SpeechSynthesisUtterance(text)
        utterance.lang = 'en-US'
        utterance.rate = 0.6
        window.speechSynthesis.speak(utterance)
      }
    }

    const deleteCard = (index: number) => {
      if (window.confirm('確定要刪除這張卡片嗎？此動作無法復原。')) {
        const newCards = props.cards.filter((_, i) => i !== index)
        set(dbRef(database, 'cards'), newCards)
      }
    }

    const selectedOption = ref('')

    const wins = ref(0)

    const incorrectAttempts = ref(0)

    const checkAnswer = () => {
      if (selectedOption.value === quiz.value.answer) {
        wins.value++
        incorrectAttempts.value = 0
        emit('earn-xp', wins.value * 100)
        $q.notify({
          type: 'positive',
          message: '答對了！您已連續答對 ' + wins.value + ' 題，得到 ' + wins.value * 100 + 'XP',
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
      if (!props.cards.length) return
      const randomIndex = Math.floor(Math.random() * props.cards.length)
      const randomCard = props.cards[randomIndex]
      quiz.value.image = (randomCard as Card).image
      quiz.value.answer = (randomCard as Card).description
      selectedOption.value = ''

      // 隨機選擇3個選項
      const options = props.cards.filter(
        (card) => card.description !== (randomCard as Card).description,
      )
      const randomOptions = options.sort(() => Math.random() - 0.5).slice(0, 3)
      quiz.value.options = [
        (randomCard as Card).description,
        ...randomOptions.map((card) => card.description),
      ].sort(() => Math.random() - 0.5)
    }

    return {
      getPhotoById,
      playCardAudio,
      deleteCard,
      searchQuery,
      filteredCards,
      quiz,
      selectedOption,
      checkAnswer,
      wins,
      tab,
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

.avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin: 2px;
  display: inline-block !important;
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

.upload-section {
  text-align: center;
}

.image-preview {
  display: flex;
  justify-content: center;
  img {
    border-radius: 8px;
  }
}

.result-section {
  max-width: 600px;
  margin: 0 auto;
}

.camera-preview {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  border-radius: 8px;
}

.camera-buttons {
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  padding: 16px;
}

.gallery-card {
  max-width: 280px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
}

.gallery-image {
  object-fit: cover;
  border-radius: 8px 8px 0 0;
}

.quiz-image {
  object-fit: cover;
  border-radius: 8px;
  max-width: 300px;
}

.search-input {
  width: 100%;
  max-width: 400px;
}

.text-body2 {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
