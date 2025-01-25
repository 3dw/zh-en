<template>
  <q-page class="q-pa-md">
    <div class="story-container">
      <h2 class="text-h4 q-mb-lg text-center">
        <q-icon name="auto_stories" size="md" color="primary" class="q-mr-sm" />
        創建英文睡前故事
      </h2>

      <q-card class="form-card q-pa-lg">
        <q-form @submit.prevent="generateStory" class="q-gutter-md">
          <!-- 孩子名字輸入 -->
          <div class="input-group">
            <q-input
              v-model="formData.childName"
              outlined
              label="孩子的名字"
              :rules="[
                (val) => !!val || '請輸入名字',
                (val) => val.length <= 20 || '名字不能超過20個字符'
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="person" />
              </template>
              <template v-slot:hint>
                可以輸入中文或英文名字
              </template>
            </q-input>
          </div>

          <!-- 年齡段選擇 -->
          <div class="input-group">
            <q-select
              v-model="formData.ageGroup"
              :options="ageOptions"
              outlined
              label="年齡段"
              emit-value
              map-options
              :rules="[(val) => !!val || '請選擇年齡段']"
            >
              <template v-slot:prepend>
                <q-icon name="child_care" />
              </template>
              <template v-slot:option="scope">
                <q-item v-bind="scope.itemProps">
                  <q-item-section>
                    <q-item-label>{{ scope.opt.label }}</q-item-label>
                    <q-item-label caption>{{ scope.opt.description }}</q-item-label>
                  </q-item-section>
                </q-item>
              </template>
            </q-select>
          </div>

          <!-- 故事類型選擇 -->
          <div class="input-group">
            <q-select
              v-model="formData.storyType"
              :options="storyTypeOptions"
              outlined
              label="故事類型"
              emit-value
              map-options
              :rules="[(val) => !!val || '請選擇故事類型']"
            >
              <template v-slot:prepend>
                <q-icon name="auto_stories" />
              </template>
              <template v-slot:option="scope">
                <q-item v-bind="scope.itemProps">
                  <q-item-section>
                    <q-item-label>{{ scope.opt.label }}</q-item-label>
                    <q-item-label caption>{{ scope.opt.description }}</q-item-label>
                  </q-item-section>
                </q-item>
              </template>
            </q-select>
          </div>

          <!-- 提交按鈕 -->
          <div class="row justify-center q-mt-lg">
            <q-btn
              type="submit"
              color="primary"
              label="開始創建故事"
              :loading="loading"
              class="submit-btn"
              icon="magic_button"
            />
          </div>
        </q-form>
      </q-card>
    </div>

    <!-- 故事展示部分 -->
    <div v-if="generatedStory" ref="storySection" class="story-section q-mt-xl">
      <q-card class="story-card q-pa-lg">
        <h3 class="story-title q-mb-lg">{{ formData.childName }} 的故事</h3>

        <!-- 故事內容和圖片 -->
        <div v-for="(paragraph, index) in storyParagraphs" :key="index" class="paragraph-section q-mb-xl row items-start q-col-gutter-lg">
          <!-- 段落文字 -->
          <div class="story-content col-12 col-md-7">
            <p class="text-body1">{{ paragraph }}</p>
          </div>

          <!-- 段落配圖 -->
          <div v-if="paragraphImages[index]" class="story-image col-12 col-md-5">
            <q-img
              :src="paragraphImages[index]"
              spinner-color="primary"
              style="border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);"
            />
          </div>
        </div>

        <!-- 音頻播放器 -->
        <div v-if="generatedStory.audioUrl" class="audio-player">
          <audio
            ref="audioPlayer"
            :src="generatedStory.audioUrl"
            controls
            class="full-width"
            @ended="audioEnded"
          />
        </div>

        <!-- 重新生成按鈕 -->
        <div class="row justify-end q-mt-md">
          <q-btn
            flat
            color="primary"
            label="重新生成"
            :disable="loading"
            @click="generateStory"
            icon="refresh"
          />
        </div>
      </q-card>
    </div>

    <!-- 載入中提示 -->
    <q-dialog v-model="showProgress" persistent>
      <q-card style="min-width: 300px">
        <q-card-section class="row items-center">
          <span class="q-ml-sm">{{ progressMessage }}</span>
          <q-linear-progress
            indeterminate
            class="q-mt-md"
            color="primary"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useQuasar } from 'quasar'
import { generateStoryContent, generateImage, generateAudio } from '../services/openai'

interface FormData {
  childName: string
  ageGroup: string
  storyType: string
}

interface Option {
  label: string
  value: string
  description: string
}

const $q = useQuasar()
const loading = ref(false)

// 表單數據
const formData = reactive<FormData>({
  childName: '',
  ageGroup: '',
  storyType: ''
})

// 年齡段選項
const ageOptions: Option[] = [
  {
    label: '2-4歲 (學前)',
    value: '2-4',
    description: '簡單有趣的故事，適合幼兒園前的寶寶'
  },
  {
    label: '5-7歲 (幼兒園)',
    value: '5-7',
    description: '包含基礎生活詞彙的故事'
  },
  {
    label: '8-10歲 (小學)',
    value: '8-10',
    description: '較長的故事，包含更豐富的詞彙和情節'
  }
]

// 故事類型選項
const storyTypeOptions: Option[] = [
  {
    label: '冒險故事',
    value: 'adventure',
    description: '充滿刺激和挑戰的冒險故事'
  },
  {
    label: '童話故事',
    value: 'fairy_tale',
    description: '充滿魔法和想像力的奇幻故事'
  },
  {
    label: '教育故事',
    value: 'educational',
    description: '包含生活教育意義的啟發性故事'
  },
  {
    label: '動物故事',
    value: 'animal',
    description: '以可愛動物為主角的溫馨故事'
  },
  {
    label: '科幻故事',
    value: 'sci_fi',
    description: '激發想像力的科學幻想故事'
  }
]

// 新增的狀態
const showProgress = ref(false)
const progressMessage = ref('正在生成故事...')
const generatedStory = ref<{ content: string; audioUrl: string } | null>(null)
const storyParagraphs = ref<string[]>([])
const paragraphImages = ref<string[]>([])
const audioPlayer = ref<HTMLAudioElement | null>(null)
const storySection = ref<HTMLElement | null>(null)

// 表單提交處理
const generateStory = async () => {
  try {
    loading.value = true
    showProgress.value = true

    // 1. 生成故事內容
    progressMessage.value = '正在創作故事...'
    const storyContent = await generateStoryContent(
      formData.childName,
      formData.ageGroup,
      formData.storyType
    )

    // 將故事分段
    storyParagraphs.value = storyContent.split('\n\n').filter(p => p.trim())

    // 2. 為每個段落生成配圖
    progressMessage.value = '正在繪製插圖...'
    paragraphImages.value = []
    for (const paragraph of storyParagraphs.value) {
      const imageUrl = await generateImage(paragraph)
      paragraphImages.value.push(imageUrl)
    }

    // 3. 生成語音
    progressMessage.value = '正在生成語音...'
    const audioUrl = await generateAudio(storyContent)

    // 保存生成的內容
    generatedStory.value = {
      content: storyContent,
      audioUrl
    }

    // 自動播放音頻並滾動到故事部分
    setTimeout(() => {
      if (audioPlayer.value) {
        audioPlayer.value.play()
      }
      // 滾動到故事部分
      storySection.value?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }, 1000)

    $q.notify({
      type: 'positive',
      message: '故事生成完成！',
      position: 'top'
    })
  } catch (error: unknown) {
    $q.notify({
      type: 'negative',
      message: `發生錯誤：${error instanceof Error ? error.message : '請稍後重試'}`,
      position: 'top'
    })
    console.error('生成故事時發生錯誤：', error)
  } finally {
    loading.value = false
    showProgress.value = false
  }
}

// 音頻播放結束處理
const audioEnded = () => {
  console.log('音頻播放結束')
}
</script>

<style scoped>
.story-container {
  max-width: 600px;
  margin: 0 auto;
  padding-top: 2rem;
}

.form-card {
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.input-group {
  margin-bottom: 1.5rem;
}

.submit-btn {
  min-width: 200px;
  padding: 10px 20px;
}

/* 響應式設計 */
@media (max-width: 600px) {
  .story-container {
    padding: 1rem;
  }

  .form-card {
    padding: 1rem !important;
  }

  .submit-btn {
    width: 100%;
  }

  .story-title {
    font-size: 1.8rem;
  }

  .story-content {
    font-size: 1.1rem;
    padding: 1rem;
  }

  .story-image {
    position: static;
    margin-bottom: 2rem;
  }
}

.story-section {
  max-width: 1200px;
  margin: 0 auto;
  scroll-margin-top: 2rem;
}

.story-title {
  font-size: 2.5rem;
  font-weight: 300;
  color: #2c3e50;
  text-align: center;
  font-family: 'Noto Serif TC', serif;
}

.story-card {
  margin-top: 2rem;
  border-radius: 12px;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.06);
  background-color: #fafafa;
}

.story-content {
  line-height: 1.8;
  white-space: pre-wrap;
  font-size: 1.25rem;
  font-family: 'Noto Serif TC', serif;
  color: #34495e;
  padding: 1.5rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
}

.story-image {
  border-radius: 8px;
  overflow: hidden;
  position: sticky;
  top: 2rem;
}

.paragraph-section {
  padding-bottom: 2rem;
  margin-bottom: 3rem;
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
}

.audio-player {
  margin-top: 2rem;
  padding-top: 1rem;
  background-color: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
}

audio {
  width: 100%;
  height: 40px;
}
</style>
