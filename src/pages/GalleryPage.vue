<template>
  <q-page class="q-pa-md">
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
      <div class="gallery-grid q-mt-lg">
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
            <div class="text-body2">
              upload by
              <img :src="getPhotoById(card.createdBy || '未知')" class="avatar" />
              {{ (card.createdAt || '未知').split('T')[0] }}
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import type { PropType } from 'vue'
import { set, ref as dbRef, getDatabase } from 'firebase/database'

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

  emits: ['delete-card'],

  setup(props) {
    const searchQuery = ref('')

    const getPhotoById = (id: string) => {
      const user = props.users.find((user) => user.uid === id)
      return user?.photoURL || 'https://cdn.quasar.dev/img/boy-avatar.png'
    }

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

    return {
      getPhotoById,
      playCardAudio,
      deleteCard,
      searchQuery,
      filteredCards,
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
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
}

.gallery-image {
  object-fit: cover;
  border-radius: 8px 8px 0 0;
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
