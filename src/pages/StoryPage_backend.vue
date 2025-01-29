<template>
  <q-page class="story-page-backend">
    <div class="story-container">
      <h2 class="hero-title">
        <q-icon name="auto_stories" size="md" color="primary" class="q-mr-sm" />
        Create <span class="highlight">Bedtime Stories</span>
        <div class="subtitle">創造獨特的英文睡前故事</div>
      </h2>

      <div class="content-wrapper">
        <!-- 表單卡片 -->
        <div class="form-wrapper">
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
                />
              </div>
            </q-form>
          </q-card>
        </div>

        <!-- 老虎圖片 -->
        <div class="tiger-image">
          <img src="/images/tiger.png" alt="Storyteller Tiger" />
        </div>
      </div>
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
            label="下載語音"
            :disable="loading || !generatedStory?.audioUrl"
            @click="downloadAudio"
            icon="download"
          />
          <q-btn
            flat
            color="primary"
            label="列印故事"
            :disable="loading"
            @click="printStory"
            icon="print"
          />
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
  emits: ['closeLeftDrawer'],
  setup(props, { emit }) {
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

    // 修改 printStory 函數
    const printStory = () => {
      console.log('列印故事')
      if (generatedStory.value) {
        emit('closeLeftDrawer')
        setTimeout(() => {
          window.print()
        }, 1000)
      } else {
        $q.notify({
          type: 'negative',
          message: '故事尚未生成',
        })
      }
    }

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
        for (let i = 0; i < translatedParagraphs.value.length; i++) {
          const paragraph = translatedParagraphs.value[i]

          progressMessage.value = `正在生成配圖...${i + 1}/${translatedParagraphs.value.length}`
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

    // 下載語音檔案
    const downloadAudio = async () => {
      try {
        if (!generatedStory.value?.audioUrl) {
          throw new Error('找不到音頻檔案')
        }

        const response = await fetch(generatedStory.value.audioUrl)
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `${formData.childName}的故事.mp3`
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
        document.body.removeChild(a)

        $q.notify({
          type: 'positive',
          message: '音頻檔案下載成功！',
          position: 'top',
        })
      } catch (error) {
        $q.notify({
          type: 'negative',
          message: `下載失敗：${error instanceof Error ? error.message : '請稍後重試'}`,
          position: 'top',
        })
        console.error('下載音頻時發生錯誤：', error)
      }
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
      printStory,
      generateStory,
      audioEnded,
      downloadAudio,
      ageOptions,
      storyTypeOptions,
    }
  },
})
</script>

<style>
/* 引入 Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:wght@400;700&family=Poppins:wght@400;600;700&display=swap');

/* 直接設置背景色，只針對 story-page-backend */
.story-page-backend {
  background: linear-gradient(135deg, #1e1b2e 0%, #2d2640 100%) !important;
  min-height: 100vh;
  font-family: var(--font-primary);
  color: #ffffff !important;
  position: relative;
  z-index: 0;
}

.story-container {
  max-width: 1200px;
  margin: 0 auto;
  width: 90%;
  position: relative;
  z-index: 1;
  padding: 4rem 1rem;
  text-align: center;
}

.hero-title {
  font-family: 'Libre Caslon Text', serif;
  font-weight: 700;
  font-size: 4rem;
  color: #ffffff !important;
  margin-bottom: 2rem;
  position: relative;
  line-height: 1.2;
  display: inline-block;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.hero-title .highlight {
  color: #ffa352 !important;
  display: inline-block;
  margin-left: 0.25rem;
  text-shadow: 0 2px 4px rgba(255, 163, 82, 0.3);
}

.subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 0.5rem;
  font-weight: 400;
}

.content-wrapper {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  justify-content: center;
  position: relative;
}

.form-wrapper {
  flex: 1;
  max-width: 600px;
  min-width: 300px;
}

.form-card {
  border-radius: 24px;
  background-color: rgba(255, 255, 255, 0.95) !important;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  text-align: left;
  padding: 2rem;
}

/* 美化輸入框 */
:deep(.q-field__control) {
  border-radius: 12px;
  height: 56px;
  background: rgba(255, 255, 255, 0.9);
}

/* 美化按鈕 */
.submit-btn {
  background: linear-gradient(45deg, #ffa352, #ffb77d) !important;
  color: #fff;
  border-radius: 28px;
  min-width: 200px;
  padding: 12px 36px;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 163, 82, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 163, 82, 0.4);
  }
}

/* 故事卡片樣式 */
.story-card {
  margin-top: 2rem;
  border-radius: 24px;
  background-color: rgba(255, 255, 255, 0.95) !important;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  padding: 2rem;
}

.story-title {
  font-family: 'Libre Caslon Text', serif;
  font-weight: 700;
  color: #ffa352;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
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

/* 列印樣式設定 */
@media print {
  /* 隱藏不需要列印的元素 */
  .form-card,
  .submit-btn,
  .audio-player,
  .q-btn,
  .q-dialog {
    display: none !important;
  }

  /* 調整列印時的整體樣式 */
  .story-page-backend {
    background: none;
    padding: 1em;
    margin: 0;
  }

  .story-section {
    margin: 1em;
    padding: 0;
  }

  .story-card {
    box-shadow: none;
    padding: 1em !important;
  }

  /* 調整故事內容的列印樣式 */
  .story-content {
    page-break-inside: avoid;
    break-inside: avoid;
    box-shadow: none;
    padding: 0;
    font-size: 12pt;
    line-height: 1.6;
  }

  /* 確保圖片正確顯示 */
  .story-image {
    page-break-inside: avoid;
    break-inside: avoid;
  }

  .story-image img {
    max-width: 50%;
    height: auto;
    margin: 0 auto;
  }

  /* 調整標題樣式 */
  .story-title {
    font-size: 18pt;
    margin-bottom: 1cm;
  }

  /* 設定頁面邊距 */
  @page {
    margin: 2cm;
  }

  /* 調整段落分頁控制 */
  .paragraph-section {
    margin-bottom: 1cm;
    padding-bottom: 0;
    page-break-inside: avoid !important;
    break-inside: avoid !important;
    display: block;
  }

  /* 確保段落和圖片在同一頁 */
  .story-content,
  .story-image {
    page-break-inside: avoid !important;
    break-inside: avoid !important;
    display: block;
  }

  /* 強制每個段落區塊保持完整 */
  .row {
    page-break-inside: avoid !important;
    break-inside: avoid !important;
    display: block;
  }
}

/* 老虎圖片樣式 */
.tiger-image {
  flex: 1;
  max-width: 500px;
  position: sticky;
  top: 2rem;
  width: 35%;
  min-width: 300px;
  height: auto;
  transition: all 0.3s ease;
}

.tiger-image img {
  width: 100%;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 0 20px rgba(0, 0, 0, 0.2));
}

/* 響應式設計 */
@media (min-width: 1441px) {
  .tiger-image {
    width: 30%;
  }

  .story-container {
    max-width: 1400px;
  }
}

@media (max-width: 1440px) {
  .tiger-image {
    width: 32%;
  }
}

@media (max-width: 1200px) {
  .tiger-image {
    width: 28%;
  }
}

@media (max-width: 992px) {
  .content-wrapper {
    flex-direction: column;
    align-items: center;
  }

  .tiger-image {
    margin: 2rem auto;
    position: relative;
    top: 0;
  }

  .form-wrapper {
    width: 100%;
  }

  .story-container {
    margin: 0 auto;
    padding: 2rem 1rem;
  }
}

@media (max-width: 600px) {
  .tiger-image {
    width: 200px;
    margin: 1rem auto;
  }

  .story-container {
    padding: 1rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 400px) {
  .tiger-image {
    width: 150px;
  }

  .story-container {
    padding: 0.5rem;
  }

  .hero-title {
    font-size: 2rem;
  }
}

/* 處理側邊欄收合狀態 */
@media (min-width: 992px) {
  .q-drawer--mini-animate + .q-page-container .story-container {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
