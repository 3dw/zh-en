<template>
  <q-page class="q-pa-md">
    <div class="row items-center q-mb-md">
      <h1 class="col">
        <q-icon name="image" size="md" color="primary" class="q-mr-sm" />
        介系詞圖片學習 | Preposition Image Learning
      </h1>
    </div>

    <div class="row q-col-gutter-md justify-center">
      <div
        v-for="(image, index) in prepositionImages"
        :key="index"
        class="col-12 col-sm-6 col-md-4 col-lg-3"
      >
        <q-card class="image-card cursor-pointer" @click="speakText(image.title)">
          <q-img :src="image.src" :ratio="1" class="card-image">
            <template v-slot:loading>
              <q-spinner-dots color="white" />
            </template>
          </q-img>

          <q-card-section class="text-center">
            <div class="text-subtitle1 text-weight-bold">{{ image.title }}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

interface ImageModule {
  default: string
}

interface PrepositionImage {
  src: string
  title: string
}

export default defineComponent({
  name: 'PrepositionImagePage',
  setup() {
    const prepositionImages = ref<PrepositionImage[]>([])

    onMounted(async () => {
      try {
        // 修改圖片導入路徑並指定類型
        const imageModules = import.meta.glob<ImageModule>(
          '../assets/learnfromimage/proposition/*.{png,jpg,jpeg}',
          { eager: true },
        )

        console.log('Available images:', imageModules)

        // 處理每個圖片
        for (const [path, module] of Object.entries(imageModules)) {
          const pathParts = path.split('/')
          const fileName = pathParts[pathParts.length - 1]
          if (!fileName) continue

          const titleParts = fileName.split('.')
          if (titleParts.length === 0) continue

          // 確保 titleParts[0] 存在
          const baseName = titleParts[0]
          if (!baseName) continue
          console.log('Base Name:', baseName)
          // 處理標題
          const title = baseName.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())
          console.log('Title:', title)
          prepositionImages.value.push({
            src: module.default,
            title: title,
          })
        }

        // 依照標題排序
        prepositionImages.value.sort((a, b) => a.title.localeCompare(b.title))
      } catch (error) {
        console.error('Error loading images:', error)
      }
    })

    // 播放英文語音
    const speakText = (text: string) => {
      const utterance = new SpeechSynthesisUtterance('The snake is ' + text)
      utterance.lang = 'en-US'
      utterance.rate = 0.9
      speechSynthesis.speak(utterance)
    }

    return {
      prepositionImages,
      speakText,
    }
  },
})
</script>

<style scoped>
.image-card {
  transition: transform 0.2s;
  height: 100%;
}

.image-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-image {
  height: 200px;
  object-fit: contain;
  background-color: #f5f5f5;
}

.text-subtitle1 {
  color: #1976d2;
  font-size: 1.1em;
  line-height: 1.4;
}

@media (max-width: 600px) {
  .card-image {
    height: 150px;
  }
}
</style>
