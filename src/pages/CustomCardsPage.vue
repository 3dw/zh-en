<template>
  <q-page class="q-pa-md">
    <div class="word-card-list">
      <h1 class="page-title">自訂字卡</h1>

      <q-tabs v-model="activeTab" class="text-primary q-mb-lg">
        <q-tab name="create" label="新增字卡" icon="add_circle" />
        <q-tab name="view" label="我的字卡" icon="list" />
      </q-tabs>

      <q-tab-panels v-model="activeTab" animated>
        <!-- 新增字卡頁面 -->
        <q-tab-panel name="create">
          <div class="text-h6 q-mb-md">新增自訂字卡</div>

          <q-form @submit="createCard" class="q-gutter-md">
            <q-input
              v-model="newCard.english"
              label="英文單字或句子"
              :rules="[(val) => !!val || '請輸入英文內容']"
              outlined
              class="large-input"
            />

            <q-input
              v-model="newCard.chinese"
              label="中文翻譯"
              :rules="[(val) => !!val || '請輸入中文翻譯']"
              outlined
              class="large-input"
            />

            <div class="row justify-between q-mt-lg">
              <q-btn
                icon="volume_up"
                color="secondary"
                label="英文發音測試"
                @click="speakText(newCard.english, 'en-US')"
                :disable="!newCard.english"
              />
              <q-btn
                icon="volume_up"
                color="green-8"
                label="中文發音測試"
                @click="speakText(newCard.chinese, 'zh-TW')"
                :disable="!newCard.chinese"
              />
              <q-btn type="submit" color="primary" label="新增字卡" icon="save" />
            </div>
          </q-form>
        </q-tab-panel>

        <!-- 檢視字卡頁面 -->
        <q-tab-panel name="view">
          <div class="text-h6 q-mb-md">我的自訂字卡</div>

          <div v-if="customCards.length === 0" class="text-center q-pa-lg">
            <q-icon name="info" size="50px" color="grey-5" />
            <p class="text-grey-7">還沒有自訂字卡</p>
            <p class="text-grey-7">請切換到「新增字卡」頁籤來創建</p>
          </div>

          <div v-else>
            <!-- 使用 FlashCard 組件 -->
            <FlashCard :sentences="customCards" />
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </div>

    <!-- 刪除確認對話框 -->
    <q-dialog v-model="showDeleteDialog">
      <q-card>
        <q-card-section class="row items-center">
          <div class="text-h6">確認刪除</div>
        </q-card-section>
        <q-card-section> 確定要刪除這張字卡嗎？此操作無法復原。 </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="取消" color="primary" v-close-popup />
          <q-btn flat label="刪除" color="negative" @click="deleteCard" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue'
import FlashCard from '../components/FlashCard.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getDatabase, ref as dbRef, get, set, onValue } from 'firebase/database'

interface Card {
  english: string
  chinese: string
  flipped: boolean
}

export default defineComponent({
  name: 'CustomCardsPage',
  components: {
    FlashCard,
  },
  setup() {
    const activeTab = ref('create')
    const customCards = ref<Card[]>([])
    const flippedCards = ref<boolean[]>([])
    const newCard = ref<Card>({ english: '', chinese: '', flipped: false })
    const showDeleteDialog = ref(false)
    const cardToDeleteIndex = ref(-1)
    const auth = getAuth()
    const db = getDatabase()
    const currentUser = ref(auth.currentUser)
    const isLoading = ref(false)
    const synced = ref(false)
    // 監聽用戶登入狀態
    onMounted(() => {
      isLoading.value = true
      onValue(dbRef(db, 'users'), (snapshot) => {
        const userData = snapshot.val()
        if (userData && synced.value === false) {
          console.log(userData)
          syncUserData(userData.uid)
          synced.value = true
        }
      })
      onAuthStateChanged(auth, (user) => {
        currentUser.value = user
        if (user) {
          // 用戶已登入，進行資料同步
          syncUserData(user.uid)
        } else {
          // 用戶未登入，從localStorage讀取資料
          loadLocalData()
        }
        isLoading.value = false
      })
    })

    watch(currentUser, (newUser) => {
      if (newUser) {
        syncUserData(newUser.uid)
      } else {
        loadLocalData()
      }
    })

    // 從 localStorage 加載卡片
    const loadLocalData = () => {
      const savedCards = localStorage.getItem('customCards')
      if (savedCards) {
        customCards.value = JSON.parse(savedCards)
        flippedCards.value = Array(customCards.value.length).fill(false)
      }
    }

    // 同步用戶資料
    const syncUserData = async (uid: string) => {
      try {
        // 從 localStorage 讀取資料
        const localData = localStorage.getItem('customCards')
        const localCards: Card[] = localData ? JSON.parse(localData) : []

        // 從 Firebase 讀取資料
        const userRef = dbRef(db, `users/${uid}/customCards`)
        const snapshot = await get(userRef)
        const firebaseCards: Card[] = snapshot.exists() ? snapshot.val() : []

        // 同步策略：合併兩邊的資料，使用較新的資料
        if (localCards.length > 0 && firebaseCards.length === 0) {
          // localStorage 有資料，Firebase 無資料
          await set(userRef, localCards)
          customCards.value = localCards
        } else if (localCards.length === 0 && firebaseCards.length > 0) {
          // Firebase 有資料，localStorage 無資料
          localStorage.setItem('customCards', JSON.stringify(firebaseCards))
          customCards.value = firebaseCards
        } else if (localCards.length > 0 && firebaseCards.length > 0) {
          // 兩邊都有資料，進行合併（這裡採用簡單的合併策略，可以根據需求調整）
          const mergedCards = [...firebaseCards]

          // 尋找 localStorage 中 Firebase 沒有的卡片
          for (const localCard of localCards) {
            const exists = mergedCards.some(
              (card) => card.english === localCard.english && card.chinese === localCard.chinese,
            )
            if (!exists) {
              mergedCards.push(localCard)
            }
          }

          // 更新到兩邊
          await set(userRef, mergedCards)
          localStorage.setItem('customCards', JSON.stringify(mergedCards))
          customCards.value = mergedCards
        }

        flippedCards.value = Array(customCards.value.length).fill(false)
      } catch (error) {
        console.error('同步用戶資料失敗:', error)
      }
    }

    // 保存卡片到 localStorage 和 Firebase（如果用戶已登入）
    const saveCards = async () => {
      localStorage.setItem('customCards', JSON.stringify(customCards.value))

      // 如果用戶已登入，同時保存到 Firebase
      if (currentUser.value) {
        try {
          const userRef = dbRef(db, `users/${currentUser.value.uid}/customCards`)
          await set(userRef, customCards.value)
        } catch (error) {
          console.error('保存到 Firebase 失敗:', error)
        }
      }
    }

    // 創建新卡片
    const createCard = () => {
      if (!newCard.value.english || !newCard.value.chinese) return

      customCards.value.push({
        english: newCard.value.english,
        chinese: newCard.value.chinese,
        flipped: false,
      })

      flippedCards.value.push(false)
      saveCards()

      // 清空表單
      newCard.value = { english: '', chinese: '', flipped: false }

      // 切換到檢視頁面
      activeTab.value = 'view'
    }

    // 翻轉卡片
    const flipCard = (index: number) => {
      flippedCards.value[index] = !flippedCards.value[index]
    }

    // 確認刪除
    const confirmDelete = (index: number) => {
      cardToDeleteIndex.value = index
      showDeleteDialog.value = true
    }

    // 刪除卡片
    const deleteCard = () => {
      if (
        cardToDeleteIndex.value !== -1 &&
        window.confirm('確定要刪除這張字卡嗎？此操作無法復原。')
      ) {
        customCards.value.splice(cardToDeleteIndex.value, 1)
        flippedCards.value.splice(cardToDeleteIndex.value, 1)
        saveCards()
      }
    }

    // 發音功能
    const speakText = (text: string, lang = 'en-US') => {
      if (text) {
        const utterance = new SpeechSynthesisUtterance(text)
        utterance.lang = lang
        utterance.rate = 0.8
        window.speechSynthesis.speak(utterance)
      }
    }

    return {
      activeTab,
      customCards,
      flippedCards,
      newCard,
      showDeleteDialog,
      currentUser,
      isLoading,
      synced,
      createCard,
      flipCard,
      confirmDelete,
      deleteCard,
      speakText,
    }
  },
})
</script>

<style scoped lang="scss">
/* 與其他頁面風格一致 */
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

.large-input {
  :deep(.q-field__native) {
    font-size: 1.2rem;
  }
  :deep(.q-field__label) {
    font-size: 1rem;
  }
}

/* 卡片翻轉效果 */
.word-card {
  cursor: pointer;
  perspective: 1000px;
  height: 160px;
  margin-bottom: 16px;
}

.word-card .q-card__section {
  transition: transform 0.6s;
  transform-style: preserve-3d;
  position: relative;
  height: 100%;
}

.front,
.back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.back {
  transform: rotateY(180deg);
}

.flipped {
  transform: rotateY(180deg);
}
</style>
