<template>
  <q-page class="q-pa-md">
    <div class="row items-center q-mb-md">
      <h1 class="col">
        <q-icon name="psychology" size="md" color="primary" class="q-mr-sm" />
        今日回顧 | Daily Reflection
      </h1>
    </div>

    <!-- 載入中狀態 -->
    <div v-if="loading" class="loading-section">
      <q-spinner-dots color="primary" size="3em" />
      <p class="text-subtitle1 q-mt-md">{{ progressMessage }}</p>
    </div>

    <!-- 錯誤提示 -->
    <div v-if="error" class="error-section">
      <q-banner class="bg-negative text-white">
        {{ error }}
      </q-banner>
    </div>

    <!-- 進度提示 -->
    <div v-if="showProgress" class="progress-section">
      <q-linear-progress indeterminate rounded size="md" color="primary" class="q-mb-sm" />
      <div class="text-subtitle1 text-center">{{ progressMessage }}</div>
    </div>

    <!-- 分析結果展示 -->
    <div v-if="expressionResult" class="result-section">
      <h2 class="text-h4 q-mb-lg">故事情緒分析</h2>

      <!-- 情緒分析卡片 -->
      <div class="emotion-cards row q-col-gutter-md">
        <div
          v-for="(emotion, index) in expressionResult.emotions"
          :key="index"
          class="col-12 col-sm-6 col-md-4"
        >
          <q-card class="emotion-card">
            <!-- 情緒圖片 -->
            <q-img :src="expressionResult.images[index]" :ratio="1" class="emotion-image" />

            <q-card-section>
              <div class="text-h6">{{ emotion.name }}</div>
              <div class="text-subtitle2">強度: {{ emotion.intensity }}%</div>
              <p class="text-body2">{{ emotion.description }}</p>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <!-- 表達內容 -->
      <div class="expression-section q-mt-xl">
        <q-card class="expression-card">
          <q-card-section>
            <div class="text-h5 q-mb-md">故事表達分析</div>
            <div class="text-body1" v-html="expressionResult.expression"></div>
          </q-card-section>
        </q-card>
      </div>
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
  intensity: number
  description: string
}

interface EmotionAnalysis {
  emotions: {
    name: string
    intensity: number
    description: string
  }[]
}

interface EmotionImageResult {
  images: string[]
}

interface ExpressionResult {
  emotions: Emotion[]
  images: string[]
  expression: string
}

export default defineComponent({
  name: 'PlaybackPage',

  setup() {
    const userStory = ref('')
    const emotions = ref<{ name: string; imageUrl: string }[]>([])
    const loading = ref(false)
    const error = ref('')
    const expressionResult = ref<ExpressionResult>({
      emotions: [],
      images: [],
      expression: '',
    })
    const showProgress = ref(false)
    const progressMessage = ref('')

    // 步驟 1: 翻譯內容為英文
    const translateToEnglish = async (story: string) => {
      progressMessage.value = '正在翻譯故事內容...'
      const response = await fetch(
        'https://zh-en-backend.alearn13994229.workers.dev/translate-zh-to-en',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ content: story }),
        },
      )
      console.log('111111response', response)
      if (!response.ok) throw new Error('翻譯失敗')
      const data = await response.json()
      return data
    }

    // 步驟 2: 分析情緒
    const analyzeEmotions = async (englishText: string) => {
      progressMessage.value = '正在分析故事情緒...'
      const response = await fetch('https://zh-en-backend.alearn13994229.workers.dev/emotions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: englishText }),
      })
      if (!response.ok) throw new Error('情緒分析失敗')
      return (await response.json()) as EmotionAnalysis
    }

    // 步驟 3: 生成情緒圖片
    const generateEmotionImages = async (emotions: Emotion[]) => {
      progressMessage.value = '正在生成情緒圖片...'
      const response = await fetch(`https://zh-en-backend.alearn13994229.workers.dev/images`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ emotions }),
      })
      if (!response.ok) throw new Error('圖片生成失敗')
      return (await response.json()) as EmotionImageResult
    }

    // 步驟 4: 生成表達內容
    const generateExpression = async (story: string, emotions: Emotion[], images: string[]) => {
      progressMessage.value = '正在生成表達分析...'
      const response = await fetch(`https://zh-en-backend.alearn13994229.workers.dev/expression`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ story, emotions, images }),
      })
      if (!response.ok) throw new Error('表達分析生成失敗')
      return (await response.json()) as ExpressionResult
    }

    const speakEmotion = (text: string) => {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'en-US'
      utterance.rate = 0.8
      speechSynthesis.speak(utterance)
    }

    const analyzeEmotion = async () => {
      if (!userStory.value.trim()) {
        error.value = '請輸入故事內容'
        return
      }

      loading.value = true
      showProgress.value = true
      error.value = ''

      try {
        const story = userStory.value.trim()

        // 執行各個步驟
        const englishContent = await translateToEnglish(story)
        const emotionsResult = await analyzeEmotions(englishContent.content)
        const imagesResult = await generateEmotionImages(emotionsResult.emotions)
        const result = await generateExpression(story, emotionsResult.emotions, imagesResult.images)

        expressionResult.value = result
        emotions.value = result.emotions.map((emotion: Emotion, index: number) => ({
          name: emotion.name,
          imageUrl: result.images[index] || '',
        }))
      } catch (err) {
        console.error('分析錯誤:', err)
        if (err instanceof TypeError && err.message.includes('Failed to fetch')) {
          error.value = '無法連接到伺服器，請檢查網絡連接或稍後再試'
        } else {
          error.value = err instanceof Error ? err.message : '分析過程發生錯誤，請稍後再試'
        }
      } finally {
        loading.value = false
        showProgress.value = false
        progressMessage.value = ''
      }
    }

    return {
      userStory,
      emotions,
      loading,
      error,
      expressionResult,
      showProgress,
      progressMessage,
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

.loading-section,
.error-section {
  text-align: center;
  padding: 3rem;
}

.emotion-card {
  height: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
}

.emotion-image {
  border-radius: 8px 8px 0 0;
}

.expression-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  margin-top: 2rem;
}

.result-section {
  color: white;
}

@media (max-width: 600px) {
  .playback-page {
    padding: 1rem;
  }

  .emotion-cards {
    margin: 0;
  }
}

.progress-section {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
}
</style>
