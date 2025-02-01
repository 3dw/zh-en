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
      const response = await fetch(`https://zh-en-backend.alearn13994229.workers.dev/playback/image`, {
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

    const speakEmotion = (emotion: EmotionWithAnimation) => {
      // 取消所有正在進行的朗讀
      speechSynthesis.cancel()
      // 朗讀英文
      const utterance = new SpeechSynthesisUtterance(emotion.enName)
      utterance.lang = 'en-US'
      utterance.rate = 0.8
      speechSynthesis.speak(utterance)
    }

    // 執行單個情緒的動畫和朗讀
    const animateAndSpeakEmotion = async (emotion: EmotionWithAnimation) => {
      emotion.isAnimating = true
      emotion.showContent = false

      for (let i = 0; i < 3; i++) {
        // 向右移動 1/3
        emotion.moveStep = 1
        await new Promise((resolve) => setTimeout(resolve, 500))

        // 停住並朗讀
        const utterance = new SpeechSynthesisUtterance(emotion.enName)
        utterance.lang = 'en-US'
        utterance.rate = 0.8

        await new Promise<void>((resolve) => {
          utterance.onend = () => resolve()
          speechSynthesis.speak(utterance)
        })

        // 回到原位
        emotion.moveStep = 0
        await new Promise((resolve) => setTimeout(resolve, 500))
      }

      // 動畫結束，顯示內容
      emotion.isAnimating = false
      emotion.showContent = true
    }

    // 依序執行所有情緒的動畫
    const animateAllEmotions = async (emotionResults: EmotionWithAnimation[]) => {
      for (const emotion of emotionResults) {
        await animateAndSpeakEmotion(emotion)
      }

      // 所有情緒動畫結束後，播放結束語
      await new Promise((resolve) => setTimeout(resolve, 1000)) // 稍等一下再播放
      const finalMessage = new SpeechSynthesisUtterance('Above is for you')
      finalMessage.lang = 'en-US'
      finalMessage.rate = 0.8

      await new Promise<void>((resolve) => {
        finalMessage.onend = () => resolve()
        speechSynthesis.speak(finalMessage)
      })

      const chineseMessage = new SpeechSynthesisUtterance('送給你')
      chineseMessage.lang = 'zh-TW'
      chineseMessage.rate = 0.8
      speechSynthesis.speak(chineseMessage)
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

        const emotionsResult = await analyzeEmotions(zhContent)

        // 為每個情緒單獨生成圖片
        const emotionResults = []
        for (const emotion of emotionsResult.emotions) {
          // 生成當前情緒的圖片
          const imageResult = await generateEmotionImages(zhContent, emotion.name)

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
            isAnimating: false,
            showContent: false,
            moveStep: 0,
          })
        }

        // 更新情緒結果並開始動畫
        emotions.value = emotionResults
        await animateAllEmotions(emotions.value)
      } catch (err) {
        console.error('分析錯誤:', err)
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
</style>
