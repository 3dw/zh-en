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
                <div class="text-subtitle1 q-mt-sm">{{ emotion.name }} ({{ emotion.enName }})</div>
                <q-btn flat round color="primary" icon="volume_up" @click="speakEmotion(emotion)" />
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

export default defineComponent({
  name: 'PlaybackPage',

  setup() {
    const userStory = ref('')
    const translatedStory = ref('')
    const emotions = ref<{ name: string; enName: string; imageUrl: string }[]>([])
    const loading = ref(false)
    const error = ref('')
    const showProgress = ref(false)
    const progressMessage = ref('')

    // 步驟 1: 不論使用者輸入中文或英文都翻譯內容為中文
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
      //console.log('第一步驟翻譯內容為英文response', translateToEnglishResponse)
      if (!translateToZhResponse.ok) throw new Error('翻譯失敗')

      const data = await translateToZhResponse.text()
      console.log('第一步驟翻譯內容為中文data', data)
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
      console.log('第二步驟情緒分析結果response', analyzeEmotionsResponse)
      const data = await analyzeEmotionsResponse.json()
      console.log('第二步驟情緒分析結果data', data)
      // 將字符串轉換為情緒對象數組
      const emotionsList = data.emotions.map((name: string) => ({
        name,
      }))
      return { emotions: emotionsList }
    }

    // 步驟 3: 生成情緒圖片
    const generateEmotionImages = async (zhText: string, emotion: string) => {
      progressMessage.value = `正在生成 ${emotion} 的情緒圖片...`
      console.log('生成圖片的情緒數據:', emotion)
      const response = await fetch(`https://zh-en-backend.alearn13994229.workers.dev/images`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ story: zhText, emotion: emotion }),
      })
      if (!response.ok) throw new Error('圖片生成失敗')
      const result = await response.json()
      console.log('生成的圖片結果:', result)
      return result as EmotionImageResult
    }

    // 步驟 4: 將情緒分析內容翻譯成英文
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
      console.log(`${zhEmotion} 的英文翻譯:`, enText)
      return enText
    }

    const speakEmotion = (emotion: { name: string; enName: string }) => {
      // 取消所有正在進行的朗讀
      speechSynthesis.cancel()
      // 朗讀英文
      const utterance = new SpeechSynthesisUtterance(emotion.enName)
      utterance.lang = 'en-US'
      utterance.rate = 0.8
      speechSynthesis.speak(utterance)
    }

    // 自動朗讀所有情緒的英文
    const speakAllEmotions = (emotions: { name: string; enName: string; imageUrl: string }[]) => {
      // 取消所有正在進行的朗讀
      speechSynthesis.cancel()

      // 建立朗讀隊列
      emotions.forEach((emotion, index) => {
        setTimeout(() => {
          const utterance = new SpeechSynthesisUtterance(emotion.enName)
          utterance.lang = 'en-US'
          utterance.rate = 0.8
          speechSynthesis.speak(utterance)
        }, index * 2000) // 每個情緒間隔 2 秒
      })
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
        translatedStory.value = zhContent
        console.log('在try執行地方翻譯內容為中文zhContent', zhContent)

        const emotionsResult = await analyzeEmotions(zhContent)
        console.log('在try執行地方情緒分析結果emotionsResult', emotionsResult)
        console.log('在try執行地方情緒分析結果emotionsResult.emotions', emotionsResult.emotions)

        // 為每個情緒單獨生成圖片
        const emotionResults = []
        for (const emotion of emotionsResult.emotions) {
          // 生成當前情緒的圖片
          const imageResult = await generateEmotionImages(zhContent, emotion.name)
          console.log(`${emotion.name} 的圖片生成結果:`, imageResult)

          // 確保圖片結果格式正確
          if (!imageResult.images || !Array.isArray(imageResult.images)) {
            throw new Error(`${emotion.name} 的圖片生成結果格式不正確`)
          }

          // 翻譯情緒說明為英文
          const enEmotionText = await translateEmotionToEn(emotion.name)

          // 保存情緒和對應的圖片
          emotionResults.push({
            name: emotion.name,
            enName: enEmotionText,
            imageUrl: imageResult.images[0] || '',
          })
        }

        // 更新情緒結果
        emotions.value = emotionResults

        // 自動朗讀所有情緒的英文
        speakAllEmotions(emotionResults)
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
