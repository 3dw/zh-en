<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md full-width">
      <h2>我的最愛字卡</h2>

      <!-- 使用 q-tabs 切換「檢視卡片」與「克漏字練習」 -->
      <q-tabs v-model="activeTab" dense border-color="primary" class="q-mb-md">
        <q-tab name="view" label="檢視卡片"></q-tab>
        <q-tab name="cloze" label="克漏字練習"></q-tab>
      </q-tabs>

      <q-tab-panels v-model="activeTab" animated>
        <!-- 檢視卡片頁面 -->
        <q-tab-panel name="view">
          <div v-if="favoriteCards.length === 0" class="text-center q-pa-lg">
            <q-icon name="favorite_border" size="50px" color="grey-5" />
            <p class="text-grey-7">還沒有收藏的字卡</p>
            <p class="text-grey-7">在學習時點擊愛心圖示來收藏字卡</p>
          </div>
          <div v-else>
            <FlashCard :sentences="favoriteCards" @earn-xp="(xp) => $emit('earn-xp', xp)" />
          </div>
        </q-tab-panel>

        <!-- 克漏字練習頁面 -->
        <q-tab-panel name="cloze">
          <div v-if="favoriteCards.length === 0" class="text-center q-pa-lg">
            <q-icon name="favorite_border" size="50px" color="grey-5" />
            <p class="text-grey-7">還沒有收藏的字卡，無法進行克漏字練習</p>
          </div>
          <div v-else class="q-pa-md">
            <div v-if="currentClozeCard">
              <h3>中文提示：</h3>
              <p>{{ currentClozeCard.chinese }}</p>

              <h3>英文句子：</h3>
              <p>
                <span v-for="(word, index) in splitEnglishSentence" :key="index">
                  <template v-if="index === blankIndex">
                    <span style="color: red">_______</span>
                  </template>
                  <template v-else>
                    {{ word }}
                  </template>
                  {{ index < splitEnglishSentence.length - 1 ? ' ' : '' }}
                </span>
              </p>

              <div class="q-mt-md">
                <q-input
                  :autofocus="true"
                  v-model="userAnswer"
                  label="請填入缺少的單字"
                  :disable="answered"
                  @keydown.enter="!answered && userAnswer && checkAnswer()"
                />
              </div>
              <div class="q-mt-md">
                <q-btn
                  color="primary"
                  label="檢查答案"
                  @click="checkAnswer"
                  :disable="answered || !userAnswer"
                />
              </div>
              <div class="q-mt-md">
                <p
                  v-if="feedback"
                  :class="{
                    'text-positive': feedback === '答對了！',
                    'text-negative': feedback !== '答對了！',
                  }"
                >
                  {{ feedback }}
                </p>
              </div>
              <div class="q-mt-md">
                <q-btn color="secondary" label="下一題" @click="nextQuestion" />
              </div>
            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed, watch } from 'vue'
import FlashCard from 'src/components/FlashCard.vue'

interface Card {
  english: string
  chinese: string
  category: string
}

interface Sentence {
  chinese: string
  english: string
  flipped: boolean
}

export default defineComponent({
  name: 'FavoritePage',
  components: {
    FlashCard,
  },
  setup() {
    const favoriteCards = ref<Sentence[]>([])

    // 讀取 localStorage 中收藏的字卡資料
    onMounted(() => {
      const savedFavorites = localStorage.getItem('en_love_arr')
      console.log(savedFavorites)
      function toSentence(arr: Card[]) {
        return arr.map((item: Card) => ({
          chinese: item.chinese,
          english: item.english,
          flipped: false,
        }))
      }
      if (savedFavorites) {
        favoriteCards.value = toSentence(JSON.parse(savedFavorites))
      }
    })

    const removeFromFavorites = (card: Card) => {
      favoriteCards.value = favoriteCards.value.filter(
        (c) => !(c.english === card.english && c.chinese === card.chinese),
      )
      localStorage.setItem('favoriteCards', JSON.stringify(favoriteCards.value))
    }

    // 用於切換檢視與克漏字分頁的變數
    const activeTab = ref('view')

    // 克漏字練習相關狀態
    const currentClozeCard = ref<Sentence | null>(null)
    const blankIndex = ref<number | null>(null)
    const userAnswer = ref('')
    const feedback = ref('')
    const answered = ref(false)

    // 計算英文句子分割後的字陣列
    const splitEnglishSentence = computed(() => {
      if (currentClozeCard.value) {
        return currentClozeCard.value.english.split(' ')
      }
      return []
    })

    // 載入一個新的克漏字題目
    function loadNewClozeCard() {
      if (favoriteCards.value.length === 0) {
        currentClozeCard.value = null
        return
      }
      const randomIndex = Math.floor(Math.random() * favoriteCards.value.length)
      currentClozeCard.value = favoriteCards.value[randomIndex] as Sentence
      const words = currentClozeCard.value.english.split(' ')
      if (words.length === 0) {
        blankIndex.value = null
      } else {
        blankIndex.value = Math.floor(Math.random() * words.length)
      }
      userAnswer.value = ''
      feedback.value = ''
      answered.value = false
    }

    // 檢查使用者填入的答案是否正確
    function checkAnswer() {
      if (!currentClozeCard.value || blankIndex.value === null) {
        return
      }
      const words = currentClozeCard.value.english.split(' ')
      const correctWord = (blankIndex.value !== null && words[blankIndex.value]) || ''

      // 移除標點符號後進行比較
      const cleanUserAnswer = userAnswer.value
        .trim()
        .toLowerCase()
        .replace(/[.,!?;:]/g, '')
      const cleanCorrectWord = correctWord
        .trim()
        .toLowerCase()
        .replace(/[.,!?;:]/g, '')

      if (cleanUserAnswer === cleanCorrectWord) {
        feedback.value = '答對了！'
      } else {
        feedback.value = `答錯了，正確答案是：${correctWord}`
      }
      answered.value = true
    }

    // 進入下一題
    function nextQuestion() {
      loadNewClozeCard()
    }

    // 當切換到「克漏字」分頁時，自動載入新的題目
    watch(activeTab, (newVal) => {
      if (newVal === 'cloze') {
        loadNewClozeCard()
      }
    })

    return {
      favoriteCards,
      removeFromFavorites,
      activeTab,
      currentClozeCard,
      blankIndex,
      userAnswer,
      feedback,
      answered,
      splitEnglishSentence,
      checkAnswer,
      nextQuestion,
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

.search-bar {
  display: flex;
  justify-content: center;
}
</style>
