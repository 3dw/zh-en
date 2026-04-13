<template>
  <q-page class="q-pa-md">
    <div class="word-card-list">
      <h1 class="page-title">自訂字卡</h1>
      <VoiceInstallGuideCard v-if="voicePlaybackBlocked" :platform="detectedPlatform" />

      <q-tabs v-model="activeTab" class="text-primary q-mb-lg">
        <q-tab name="create" label="新增字卡" icon="add_circle" />
        <q-tab name="view" label="我的字卡" icon="list" />
        <q-tab name="manage" label="管理字卡" icon="settings" />
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
              type="textarea"
            />

            <q-input
              v-model="newCard.chinese"
              label="中文翻譯"
              :rules="[(val) => !!val || '請輸入中文翻譯']"
              outlined
              class="large-input"
              type="textarea"
            />

            <!-- 自動英翻中補完按鈕 -->
            <q-btn
              class="little-margin"
              v-show="newCard.english && !newCard.chinese"
              icon="language"
              label="自動英翻中"
              color="primary"
              @click="autoTranslateEnToZh"
            />

            <!-- 自動中翻英補完按鈕 -->
            <q-btn
              class="little-margin"
              v-show="newCard.chinese && !newCard.english"
              icon="language"
              label="自動中翻英"
              color="primary"
              @click="autoTranslateZhToEn"
            />

            <div class="row justify-between q-mt-lg">
              <q-btn
                class="little-margin"
                icon="volume_up"
                color="secondary"
                label="英文發音測試"
                @click="speakText(newCard.english, 'en-US')"
                :disable="!newCard.english"
              />
              <q-btn
                class="little-margin"
                icon="volume_up"
                color="green-8"
                label="中文發音測試"
                @click="speakText(newCard.chinese, 'zh-TW')"
                :disable="!newCard.chinese"
              />
              <q-btn
                class="little-margin"
                type="submit"
                color="primary"
                label="新增字卡"
                icon="save"
              />
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

        <!-- 管理字卡頁面 -->
        <q-tab-panel name="manage">
          <div class="text-h6 q-mb-md">管理自訂字卡</div>
          <div class="row q-gutter-sm q-mb-md">
            <q-btn
              class="little-margin"
              icon="download"
              color="primary"
              label="匯出 JSON"
              @click="exportCardsAsJson"
              :disable="customCards.length === 0"
            />
            <q-btn
              class="little-margin"
              icon="upload"
              color="secondary"
              label="匯入 JSON"
              @click="triggerImportJson"
            />
            <input
              ref="importJsonInput"
              type="file"
              accept="application/json,.json"
              class="hidden-file-input"
              @change="handleImportJson"
            />
          </div>
          <q-list bordered>
            <q-item v-for="(card, index) in customCards" :key="index" clickable>
              <q-item-section>
                <q-item-label>{{ card.english }}</q-item-label>
                <q-item-label caption>{{ card.chinese }}</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn flat icon="delete" color="negative" @click="confirmDelete(index)" />
              </q-item-section>
            </q-item>
          </q-list>
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
import { useQuasar } from 'quasar'
import FlashCard from '../components/FlashCard.vue'
import VoiceInstallGuideCard from 'src/components/VoiceInstallGuideCard.vue'
import { useSpeechAvailability } from 'src/composables/useSpeechAvailability'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getDatabase, ref as dbRef, get, set } from 'firebase/database'
import {
  EN_US_PREFERRED_KEYWORDS,
  ZH_TW_PREFERRED_KEYWORDS,
  speakTextWithPreferredVoice,
} from 'src/utils/speechVoice'

interface Card {
  english: string
  chinese: string
  flipped: boolean
}

export default defineComponent({
  name: 'CustomCardsPage',
  components: {
    FlashCard,
    VoiceInstallGuideCard,
  },
  setup() {
    const { voicePlaybackBlocked, detectedPlatform } = useSpeechAvailability()
    const activeTab = ref('create')
    const customCards = ref<Card[]>([])
    const flippedCards = ref<boolean[]>([])
    const newCard = ref<Card>({ english: '', chinese: '', flipped: false })
    const showDeleteDialog = ref(false)
    const cardToDeleteIndex = ref(-1)
    const auth = getAuth()
    const db = getDatabase()
    const currentUser = ref(auth.currentUser)
    const importJsonInput = ref<HTMLInputElement | null>(null)
    const isLoading = ref(false)
    const synced = ref(false)
    const $q = useQuasar()
    const buildCardKey = (card: Pick<Card, 'english' | 'chinese'>) => `${card.english}\u0000${card.chinese}`
    // 監聽用戶登入狀態
    onMounted(() => {
      isLoading.value = true
      onAuthStateChanged(auth, async (user) => {
        currentUser.value = user
        if (user) {
          console.log('user', user)
          console.log('user.uid', user.uid)
          // 用戶已登入，進行資料同步
          await syncUserData(user.uid)
        } else {
          // 用戶未登入，從localStorage讀取資料
          loadLocalData()
        }
        isLoading.value = false
      })
    })

    watch(currentUser, async (newUser) => {
      if (newUser) {
        console.log('newUser', newUser)
        console.log('newUser.uid', newUser.uid)
        await syncUserData(newUser.uid)
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
      console.log('syncUserData', uid)
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
      if (cardToDeleteIndex.value !== -1) {
        const savedFavorites = localStorage.getItem('en_love_arr')
        const en_love_arr = JSON.parse(savedFavorites || '[]')
        const cardToDelete = customCards.value[cardToDeleteIndex.value]

        if (cardToDelete) {
          // 刪除收藏的卡片
          const updatedFavorites = en_love_arr.filter(
            (item: Card) => item.english !== cardToDelete.english,
          )
          localStorage.setItem('en_love_arr', JSON.stringify(updatedFavorites))

          // 刪除自訂字卡
          customCards.value.splice(cardToDeleteIndex.value, 1)
          flippedCards.value.splice(cardToDeleteIndex.value, 1)
          saveCards()
        }
      }
    }

    // 發音功能
    const speakText = async (text: string, lang = 'en-US') => {
      if (!text) return

      const normalizedLang = lang.toLowerCase()
      if (normalizedLang.startsWith('zh')) {
        await speakTextWithPreferredVoice(text, 'zh-TW', ZH_TW_PREFERRED_KEYWORDS, 0.8)
        return
      }

      if (normalizedLang.startsWith('en')) {
        await speakTextWithPreferredVoice(text, 'en-US', EN_US_PREFERRED_KEYWORDS, 0.8)
        return
      }

      await speakTextWithPreferredVoice(text, lang, [], 0.8)
    }

    // 自動英翻中
    const autoTranslateEnToZh = async () => {
      try {
        const response = await fetch(
          'https://zh-en-backend.alearn13994229.workers.dev/translate-en-to-zh',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content: newCard.value.english }),
          },
        )
        const data = await response.json()
        console.log(data)
        newCard.value.chinese = data || ''
        console.log('newCard.value.chinese', newCard.value.chinese)
      } catch (error) {
        console.error('翻譯失敗:', error)
      }
    }
    // 自動中翻英
    const autoTranslateZhToEn = async () => {
      try {
        const response = await fetch(
          'https://zh-en-backend.alearn13994229.workers.dev/translate-zh-to-en',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content: newCard.value.chinese }),
          },
        )
        const data = await response.json()
        console.log(data)
        newCard.value.english = data || ''
        console.log('newCard.value.english', newCard.value.english)
      } catch (error) {
        console.error('翻譯失敗:', error)
      }
    }

    const exportCardsAsJson = () => {
      if (customCards.value.length === 0) {
        $q.notify({ type: 'warning', message: '目前沒有可匯出的自訂字卡。' })
        return
      }

      const exportData = customCards.value.map(({ english, chinese }) => ({ english, chinese }))
      const blob = new Blob([JSON.stringify(exportData, null, 2)], {
        type: 'application/json;charset=utf-8',
      })
      const url = URL.createObjectURL(blob)
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
      const link = document.createElement('a')
      link.href = url
      link.download = `custom-cards-${timestamp}.json`
      document.body.appendChild(link)
      link.click()
      link.remove()
      URL.revokeObjectURL(url)
    }

    const triggerImportJson = () => {
      importJsonInput.value?.click()
    }

    const handleImportJson = async (event: Event) => {
      const input = event.target as HTMLInputElement
      const file = input.files?.[0]
      if (!file) return

      try {
        const content = await file.text()
        const parsed = JSON.parse(content)

        if (!Array.isArray(parsed)) {
          throw new Error('JSON 格式必須為陣列。')
        }

        const existingKeys = new Set(customCards.value.map((card) => buildCardKey(card)))
        let addedCount = 0
        let skippedCount = 0
        let invalidCount = 0

        for (const item of parsed) {
          if (!item || typeof item !== 'object') {
            invalidCount++
            continue
          }

          const englishRaw = (item as { english?: unknown }).english
          const chineseRaw = (item as { chinese?: unknown }).chinese

          if (typeof englishRaw !== 'string' || typeof chineseRaw !== 'string') {
            invalidCount++
            continue
          }

          const english = englishRaw.trim()
          const chinese = chineseRaw.trim()
          if (!english || !chinese) {
            invalidCount++
            continue
          }

          const key = buildCardKey({ english, chinese })
          if (existingKeys.has(key)) {
            skippedCount++
            continue
          }

          existingKeys.add(key)
          customCards.value.push({ english, chinese, flipped: false })
          flippedCards.value.push(false)
          addedCount++
        }

        if (addedCount > 0) {
          await saveCards()
        }

        $q.notify({
          type: addedCount > 0 ? 'positive' : 'info',
          message: `匯入完成：新增 ${addedCount} 筆，略過重複 ${skippedCount} 筆，格式不符 ${invalidCount} 筆。`,
        })
      } catch (error) {
        console.error('匯入 JSON 失敗:', error)
        $q.notify({ type: 'negative', message: '匯入失敗，請確認 JSON 格式是否正確。' })
      } finally {
        input.value = ''
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
      voicePlaybackBlocked,
      detectedPlatform,
      createCard,
      flipCard,
      confirmDelete,
      deleteCard,
      speakText,
      autoTranslateZhToEn,
      autoTranslateEnToZh,
      exportCardsAsJson,
      triggerImportJson,
      handleImportJson,
      importJsonInput,
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

.little-margin {
  margin: 1em;
}

.hidden-file-input {
  display: none;
}

.q-tab-centered {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
