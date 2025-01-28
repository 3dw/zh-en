<template>
  <q-page class="story-page">
    <div class="story-container">
      <h2 class="hero-title">
        <q-icon name="auto_stories" size="md" color="primary" class="q-mr-sm" />
        Create your own
        <span class="highlight">Bedtime Stories</span>
        <div class="subtitle">為您的孩子創造獨特的睡前故事</div>
      </h2>

      <q-card class="form-card q-pa-xl">
        <q-form @submit.prevent="generateStory" class="q-gutter-md">
          <!-- 孩子名字輸入 -->
          <div class="input-group">
            <q-input
              v-model="formData.childName"
              outlined
              label="孩子的名字"
              :rules="[
                (val) => !!val || '請輸入名字',
                (val) => val.length <= 20 || '名字不能超過20個字符',
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="person" />
              </template>
              <template v-slot:hint> 可以輸入中文或英文名字 </template>
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
        <div
          v-for="(paragraph, index) in storyParagraphs"
          :key="index"
          class="paragraph-section q-mb-xl row items-start q-col-gutter-lg"
        >
          <!-- 段落文字 -->
          <div class="story-content col-12 col-md-7">
            <p class="text-body1">{{ translatedParagraphs[index] }}</p>
            <p class="text-body1">{{ paragraph }}</p>
          </div>

          <!-- 段落配圖 -->
          <div v-if="paragraphImages[index]" class="story-image col-12 col-md-5">
            <q-img
              :src="paragraphImages[index]"
              spinner-color="primary"
              style="border-radius: 12px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1)"
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
          <q-linear-progress indeterminate class="q-mt-md" color="primary" />
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script lang="ts">
import { ref, reactive, defineComponent } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'StoryPageBackend',
  setup() {
    const $q = useQuasar()
    const loading = ref(false)

    // 表單數據
    const formData = reactive({
      childName: '',
      ageGroup: '',
      storyType: '',
    })

    // 新增的狀態
    const showProgress = ref(false)
    const progressMessage = ref('正在生成故事...')
    const generatedStory = ref<{ content: string; audioUrl: string } | null>(null)
    const storyParagraphs = ref<string[]>([])
    const paragraphImages = ref<string[]>([])
    const translatedParagraphs = ref<string[]>([])
    const audioPlayer = ref<HTMLAudioElement | null>(null)
    const storySection = ref<HTMLElement | null>(null)

    // 修改 generateStory 函數
    const generateStory = async () => {
      try {
        loading.value = true
        showProgress.value = true

        // 清空之前的內容
        storyParagraphs.value = []
        paragraphImages.value = []
        translatedParagraphs.value = []
        generatedStory.value = null

        // 步驟 1: 生成故事內容
        progressMessage.value = '正在創作故事...'
        const storyResponse = await fetch(
          'https://zh-en-backend.alearn13994229.workers.dev/StoryGeneration',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              childName: formData.childName,
              ageGroup: formData.ageGroup,
              storyType: formData.storyType,
              step: 1,
            }),
          },
        )

        if (!storyResponse.ok) {
          throw new Error('故事生成失敗')
        }

        const storyData = await storyResponse.json()
        if (!storyData.success) {
          throw new Error(storyData.error || '故事生成失敗')
        }

        // 將故事分段
        storyParagraphs.value = storyData.content.split('\n\n').filter((p: string) => p.trim())

        // 步驟 2: 翻譯成英文
        for (let i = 0; i < storyParagraphs.value.length; i++) {
          progressMessage.value = `正在翻譯...${i + 1}/${storyParagraphs.value.length}`
          const paragraph = storyParagraphs.value[i]
          const translatedParagraph = await fetch(
            'https://zh-en-backend.alearn13994229.workers.dev/translate-zh-to-en',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ content: paragraph }),
            },
          )
          const translatedText = await translatedParagraph.text()
          translatedParagraphs.value.push(translatedText)
        }

        // 步驟 3: 生成圖片
        for (let i = 0; i < storyParagraphs.value.length; i++) {
          const paragraph = storyParagraphs.value[i]

          progressMessage.value = `正在生成配圖...${i + 1}/${storyParagraphs.value.length}`
          const imagesResponse = await fetch(
            'https://zh-en-backend.alearn13994229.workers.dev/generate-image-by-single-paragraph',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                storyParagraph: paragraph,
              }),
            },
          )

          if (!imagesResponse.ok) {
            throw new Error('圖片生成失敗')
          }

          const imagesData = await imagesResponse.json()
          paragraphImages.value.push(imagesData.image)
        }

        // 步驟 4: 生成語音
        progressMessage.value = '正在生成語音...'
        const voiceResponse = await fetch(
          'https://zh-en-backend.alearn13994229.workers.dev/StoryGeneration',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              step: 3,
              content: translatedParagraphs.value.join(),
            }),
          },
        )

        if (!voiceResponse.ok) {
          throw new Error('語音生成失敗')
        }

        const voiceData = await voiceResponse.json()
        if (!voiceData.success) {
          throw new Error(voiceData.error || '語音生成失敗')
        }

        // 保存生成的內容
        generatedStory.value = {
          content: storyData.content,
          audioUrl: voiceData.audioUrl,
        }

        // 自動播放音頻並滾動到故事部分
        setTimeout(() => {
          if (audioPlayer.value) {
            audioPlayer.value.play()
          }
          storySection.value?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }, 1000)

        $q.notify({
          type: 'positive',
          message: '故事生成完成！',
          position: 'top',
        })
      } catch (error: unknown) {
        $q.notify({
          type: 'negative',
          message: `發生錯誤：${error instanceof Error ? error.message : '請稍後重試'}`,
          position: 'top',
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

    // 年齡段選項
    const ageOptions = [
      {
        label: '2-4歲 (學前)',
        value: '2-4',
        description: '簡單有趣的故事，適合幼兒園前的寶寶',
      },
      {
        label: '5-7歲 (幼兒園)',
        value: '5-7',
        description: '包含基礎生活詞彙的故事',
      },
      {
        label: '8-10歲 (小學)',
        value: '8-10',
        description: '較長的故事，豐富的詞彙和情節',
      },
      {
        label: '10+歲 (小學高年級以上)',
        value: '10+',
        description: '更長的故事，更豐富的詞彙和情節',
      },
    ]

    // 故事類型選項
    const storyTypeOptions = [
      {
        label: '冒險故事',
        value: 'adventure',
        description: '充滿刺激和挑戰的冒險故事',
      },
      {
        label: '童話故事',
        value: 'fairy_tale',
        description: '充滿魔法和想像力的奇幻故事',
      },
      {
        label: '教育故事',
        value: 'educational',
        description: '包含生活教育意義的啟發性故事',
      },
      {
        label: '動物故事',
        value: 'animal',
        description: '以可愛動物為主角的溫馨故事',
      },
      {
        label: '科幻故事',
        value: 'sci_fi',
        description: '激發想像力的科學幻想故事',
      },
    ]

    return {
      formData,
      loading,
      showProgress,
      progressMessage,
      generatedStory,
      storyParagraphs,
      paragraphImages,
      translatedParagraphs,
      audioPlayer,
      storySection,
      generateStory,
      audioEnded,
      ageOptions,
      storyTypeOptions,
    }
  },
})
</script>

<style scoped>
/* 若需要引入外部字體，可視需求增加下列字體 (範例為 Google Fonts) */
/* @import url('https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:wght@400;700&family=Poppins:wght@400;700&display=swap'); */

/* 建議可在 :root 中定義全站色彩、字體或其他參數，方便全域控管 */
:root {
  --primary-color: #8f68ee; /* 主色調，可參考 OscarStories 的紫色系 */
  --secondary-color: #f6f0ff; /* 輔助色/淡色系 */
  --bg-gradient-start: #fffefc; /* 漸層背景起始色 */
  --bg-gradient-end: #fdf1f2; /* 漸層背景結束色 */

  /* 字體示例：可換成你想使用的字體 */
  --font-primary: 'Poppins', sans-serif;
  --font-hero: 'Libre Caslon Text', serif;
}

.story-page {
  /* 使用柔和漸層背景 */
  background: linear-gradient(120deg, var(--bg-gradient-start) 0%, var(--bg-gradient-end) 100%);
  min-height: 100vh;
  font-family: var(--font-primary);
  color: #2c3e50;
}

.story-container {
  max-width: 720px;
  margin: 0 auto;
  padding: 5rem 1rem 3rem;
  text-align: center;
}

.hero-title {
  font-family: var(--font-hero);
  font-weight: 700;
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  position: relative;
  line-height: 1.2;
  display: inline-block;
}

.hero-title .highlight {
  color: var(--primary-color);
  display: inline-block;
  margin-left: 0.25rem;
}

.subtitle {
  font-size: 1.2rem;
  color: #636e72;
  margin-top: 0.5rem;
  font-weight: 400;
}

.form-card {
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
  background-color: #fff;
  text-align: left;
}

.input-group {
  margin-bottom: 1.5rem;
}

.submit-btn {
  background-color: var(--primary-color);
  color: #fff;
  border-radius: 8px;
  min-width: 200px;
  padding: 10px 20px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: #7b52e5; /* hover 狀態再深一點 */
  }
}

/* 響應式設計 */
@media (max-width: 600px) {
  .story-container {
    padding: 2rem 1rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .submit-btn {
    width: 100%;
    margin-top: 1rem;
  }
}

.story-section {
  max-width: 1200px;
  margin: 0 auto;
  scroll-margin-top: 2rem;
}

.story-card {
  margin-top: 2rem;
  border-radius: 16px;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.06);
  background-color: #fafafa;
}

.story-title {
  font-family: var(--font-hero);
  font-weight: 700;
  color: #2c3e50;
  text-align: center;
  font-size: 2.2rem;
}

.story-content {
  line-height: 1.8;
  white-space: pre-wrap;
  font-size: 1.15rem;
  color: #34495e;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
  font-family: var(--font-primary);
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
    margin-bottom: 0;
  }
}

.audio-player {
  margin-top: 2rem;
  padding-top: 1rem;
  background-color: #fff;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
}

audio {
  width: 100%;
  height: 40px;
}
</style>
