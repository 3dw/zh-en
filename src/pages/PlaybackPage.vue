<template>
  <q-page class="q-pa-md">
    <div class="row items-center q-mb-md">
      <h1 class="col">
        <q-icon name="psychology" size="md" color="primary" class="q-mr-sm" />
        今日回顧 | Daily Reflection
      </h1>
    </div>

    <!-- 卡片容器 -->
    <div class="row q-col-gutter-md">
      <!-- RPG 風格輸入卡片 -->
      <div class="col-12 col-md-6">
        <q-card class="rpg-card">
          <q-card-section>
            <div class="text-h6 q-mb-md">分享今天最深刻的經歷</div>
            <q-input
              v-model="userStory"
              type="textarea"
              rows="6"
              outlined
              :placeholder="'請用英文或中文描述...\nPlease describe in English or Chinese...'"
              class="q-mb-md"
            />
            <div class="text-center">
              <q-btn
                color="primary"
                label="分析情緒"
                :loading="loading"
                @click="analyzeEmotion"
                class="rpg-button"
              >
                <template v-slot:loading>
                  <q-spinner-dots />
                </template>
              </q-btn>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <!-- 情緒分析結果卡片 -->
      <div v-if="emotions.length > 0" class="col-12 col-md-6">
        <q-card class="rpg-card">
          <q-card-section>
            <div class="text-h6 q-mb-md">情緒分析結果</div>
            <div class="emotion-grid">
              <div v-for="(emotion, index) in emotions" :key="index" class="emotion-item">
                <q-img
                  :src="emotion.imageUrl"
                  spinner-color="primary"
                  style="height: 200px; max-width: 200px"
                  class="rounded-borders"
                />
                <div class="text-subtitle1 q-mt-sm">{{ emotion.name }}</div>
                <q-btn
                  flat
                  round
                  color="primary"
                  icon="volume_up"
                  @click="speakEmotion(emotion.name)"
                />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

interface Emotion {
  name: string
  imageUrl: string
}

export default defineComponent({
  name: 'PlaybackPage',

  setup() {
    const userStory = ref('')
    const emotions = ref<Emotion[]>([])
    const loading = ref(false)

    const speakEmotion = (text: string) => {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'en-US'
      utterance.rate = 0.8
      speechSynthesis.speak(utterance)
    }

    const analyzeEmotion = async () => {
      if (!userStory.value.trim()) {
        return
      }

      loading.value = true
      try {
        const response = await fetch(
          `https://zh-en-backend.alearn13994229.workers.dev/playback/${encodeURIComponent(
            userStory.value,
          )}`,
        )
        const data = await response.json()
        emotions.value = data.emotions.map((emotion: string) => ({
          name: emotion,
          imageUrl: data.images[emotion],
        }))
      } catch (error) {
        console.error('Error analyzing emotion:', error)
      } finally {
        loading.value = false
      }
    }

    return {
      userStory,
      emotions,
      loading,
      analyzeEmotion,
      speakEmotion,
    }
  },
})
</script>

<style scoped>
.rpg-card {
  background-color: #fff;
  border: 2px solid #6b8cce;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.rpg-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #6b8cce, #a5b9e5, #6b8cce);
}

.rpg-button {
  background: linear-gradient(45deg, #6b8cce, #8ba3d7);
  border: none;
  padding: 12px 24px;
  border-radius: 24px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: transform 0.2s;
}

.rpg-button:hover {
  transform: translateY(-2px);
}

.emotion-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  justify-items: center;
}

.emotion-item {
  text-align: center;
  padding: 1rem;
  background: rgba(107, 140, 206, 0.1);
  border-radius: 8px;
  transition: transform 0.2s;
}

.emotion-item:hover {
  transform: translateY(-4px);
}

@media (max-width: 600px) {
  .emotion-grid {
    grid-template-columns: 1fr;
  }
}
</style>
