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

    <!-- 卡片容器 -->
    <div class="row q-col-gutter-md">
      <!-- RPG 風格輸入卡片 -->
      <div class="col-12 col-md-6">
        <q-card class="rpg-card">
          <q-card-section>
            <div class="text-h6 q-mb-md">分享今天最深刻的經歷</div>

            <!-- 綠色漸層 + 不規則邊緣: 範圍加大 -->
            <div class="input-blob-container">
              <q-input
                v-model="userStory"
                type="textarea"
                rows="6"
                :placeholder="'請用英文或中文描述...\nPlease describe in English or Chinese...'"
                class="custom-input"
              />
            </div>

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
              <div
                v-for="(emotion, index) in emotions"
                :key="index"
                class="emotion-item"
                :class="{
                  'move-step-1': emotion.moveStep === 1,
                  'move-step-2': emotion.moveStep === 2,
                  'show-content': emotion.showContent,
                }"
              >
                <q-img
                  :src="emotion.imageUrl"
                  spinner-color="primary"
                  style="height: 200px; max-width: 200px"
                  class="rounded-borders"
                />
                <div v-if="emotion.showContent" class="emotion-content">
                  <div class="text-subtitle1 q-mt-sm">
                    {{ emotion.name }} ({{ emotion.enName }})
                  </div>
                  <q-btn
                    flat
                    round
                    color="primary"
                    icon="volume_up"
                    @click="speakEmotion(emotion)"
                  />
                </div>
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

interface EmotionImageResult {
  images: string[]
}

interface EmotionWithAnimation {
  name: string
  enName: string
  imageUrl: string
  isAnimating: boolean
  showContent: boolean
  moveStep: number
}

export default defineComponent({
  name: 'PlaybackPage',

  setup() {
    const userStory = ref('')
    const translatedStory = ref('')
    const emotions = ref<EmotionWithAnimation[]>([])
    const loading = ref(false)
    const error = ref('')
    const showProgress = ref(false)
    const progressMessage = ref('')

    // 步驟 1: 翻譯內容為中文
    const translateToZh = async (story: string) => {
      progressMessage.value = '正在翻譯故事內容...'
      const translateToZhResponse = await fetch(
        'https://zh-en-backend.alearn13994229.workers.dev/translate-en-to-zh',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ content: story }),
        },
      )
      if (!translateToZhResponse.ok) throw new Error('翻譯失敗')

      const data = await translateToZhResponse.text()
      translatedStory.value = data
      return data
    }

    // 步驟 2: 分析情緒
    const analyzeEmotions = async (zhText: string) => {
      progressMessage.value = '正在分析故事情緒...'
      const analyzeEmotionsResponse = await fetch(
        'https://zh-en-backend.alearn13994229.workers.dev/emotions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ content: zhText }),
        },
      )
      if (!analyzeEmotionsResponse.ok) throw new Error('情緒分析失敗')
      const data = await analyzeEmotionsResponse.json()

      // 添加类型检查和空值处理
      const emotionsList = (data.emotions || []).map((emo: string) => {
        if (!emo) return { name: '' }
        const parts = emo.split(':')
        const emotionName = parts[0] || ''
        return {
          name: emotionName.trim().replace(/^\d+\./, ''),
        }
      })

      return { emotions: emotionsList }
    }

    // 步驟 3: 生成情緒圖片
    const generateEmotionImages = async (zhText: string, emotion: string) => {
      progressMessage.value = `正在生成 ${emotion} 的情緒圖片...`
      const response = await fetch(
        'https://zh-en-backend.alearn13994229.workers.dev/playback/image',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ story: zhText, emotion: emotion }),
        },
      )

      if (!response.ok) throw new Error('圖片生成失敗')
      const result = await response.json()
      return result as EmotionImageResult
    }

    // 步驟 4: 將情緒翻譯成英文
    const translateEmotionToEn = async (zhEmotion: string) => {
      progressMessage.value = `正在翻譯 ${zhEmotion} 的英文說明...`
      const response = await fetch(
        'https://zh-en-backend.alearn13994229.workers.dev/translate-zh-to-en',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ content: `這個情緒是${zhEmotion}` }),
        },
      )
      if (!response.ok) throw new Error('情緒翻譯失敗')
      const enText = await response.text()
      return enText
    }

    const speakEmotion = (emotion: EmotionWithAnimation) => {
      speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(emotion.enName)
      utterance.lang = 'en-US'
      utterance.rate = 0.8
      speechSynthesis.speak(utterance)
    }

    // 顯示分析結果(無額外動畫)
    const animateEmotions = async (emotionResults: EmotionWithAnimation[]) => {
      emotions.value = emotionResults.map((e) => ({
        ...e,
        showContent: true,
        moveStep: 0,
      }))
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
        const zhContent = await translateToZh(story)
        const emotionsResult = await analyzeEmotions(zhContent)
        const emotionResults = []

        for (const emo of emotionsResult.emotions) {
          const imageResult = await generateEmotionImages(zhContent, emo.name)
          if (!imageResult.images || !Array.isArray(imageResult.images)) {
            throw new Error(`${emo.name} 的圖片生成結果格式不正確`)
          }
          const enEmotionText = await translateEmotionToEn(emo.name)

          emotionResults.push({
            name: emo.name,
            enName: enEmotionText,
            imageUrl: imageResult.images[0] || '',
            isAnimating: false,
            showContent: false,
            moveStep: 0,
          })
        }

        await animateEmotions(emotionResults)
      } catch (err) {
        error.value = err instanceof Error ? err.message : '分析過程發生錯誤，請稍後再試'
      } finally {
        loading.value = false
        showProgress.value = false
        progressMessage.value = ''
      }
    }

    return {
      userStory,
      translatedStory,
      emotions,
      loading,
      error,
      showProgress,
      progressMessage,
      analyzeEmotion,
      speakEmotion,
    }
  },
})
</script>

<style scoped>
/* --- 動畫 & 多螢幕 --- */
.move-step-1 {
  transform: translateX(33%);
  transition: transform 0.3s ease-out;
}
.emotion-content {
  opacity: 0;
  animation: fadeIn 0.5s ease-in-out forwards;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.show-content .emotion-content {
  display: block;
}

/* --- 整體佈局: 改為深藍灰色系 --- */
.q-page {
  background: linear-gradient(135deg, #2c3e50 0%, #3a4a5c 100%) !important;
  color: #fff !important;
}
.text-subtitle1,
.text-h6,
.error-section,
.loading-section,
.progress-section,
.q-banner.text-white {
  color: #fff !important;
}
.q-banner.bg-negative {
  background-color: #ff4c4c !important;
  color: #fff !important;
}

/* --- 卡片樣式 --- */
.rpg-card {
  background-color: rgba(255, 255, 255, 0.1) !important;
  color: #fff !important;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}
.rpg-button,
.q-btn--standard.q-btn--rectangle.q-btn--action,
.q-spinner-dots {
  background-color: #3498db !important;
  color: #fff !important;
  font-weight: bold;
  border-radius: 25px;
  padding: 12px 24px;
  text-transform: uppercase;
  transition: background 0.3s;
}
.rpg-button:hover {
  background-color: #2980b9 !important;
}
.q-linear-progress__determinate {
  background-color: #3498db !important;
}

/* --- 圖片陰影效果 --- */
.rounded-borders {
  border-radius: 8px;
  box-shadow: 0 0 4px rgba(255, 255, 255, 0.2);
}

/* --- 不規則綠色blob容器 --- */
.input-blob-container {
  position: relative;
  border-radius: 60% 40% 45% 55% / 35% 35% 65% 65%;
  background: linear-gradient(180deg, #3498db, #2ecc71);
  padding: 50px;
  margin-bottom: 16px;
  box-shadow: 0 0 20px rgba(52, 152, 219, 0.3);
}

/* 讓 QInput 背景透明、文字白 */
.custom-input >>> .q-field__control {
  background: transparent !important;
  color: #fff !important;
}
.custom-input >>> .q-field__native {
  background: transparent !important;
  color: #fff !important;
}

/* --- 情緒項目排版 --- */
.emotion-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding-top: 20px;
}
.emotion-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease-out;
}
.emotion-item img {
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(52, 152, 219, 0.3);
}
.emotion-content {
  text-align: center;
  font-size: 1.2rem;
  margin-top: 10px;
  color: white;
}

/* 小喇叭按鈕 */
.q-btn.flat.round {
  background: none;
  border: none;
  color: #3498db !important;
}
</style>
