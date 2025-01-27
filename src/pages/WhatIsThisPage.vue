<template>
  <q-page class="q-pa-md">
    <div class="word-card-list">
      <h1>AI 圖片描述</h1>

      <!-- 上傳圖片區域 -->
      <div class="upload-section q-mb-md">
        <!-- 新增拍照按鈕 -->
        <div class="camera-buttons q-mb-sm">
          <q-btn
            color="primary"
            icon="photo_camera"
            label="使用相機拍照"
            @click="openCamera"
            class="q-mr-sm"
          />

          <q-file
            v-model="imageFile"
            label="上傳圖片"
            outlined
            accept=".jpg,.jpeg,.png,.heic,.heif"
            @update:model-value="handleImageUpload"
          >
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
        </div>

        <!-- 相機預覽 -->
        <video
          v-show="showCamera"
          ref="videoRef"
          autoplay
          playsinline
          class="camera-preview q-mb-md"
        ></video>

        <!-- 拍照按鈕 -->
        <q-btn
          v-if="showCamera"
          color="primary"
          icon="camera"
          label="拍照"
          @click="takePhoto"
          class="q-mb-md"
        />

        <!-- 預覽圖片 -->
        <div v-if="imagePreview" class="image-preview q-mt-md">
          <img :src="imagePreview" alt="預覽圖片" style="max-width: 200px" />
        </div>
      </div>

      <!-- 載入中提示 -->
      <div v-if="loading" class="text-center">
        <q-spinner color="primary" size="3em" />
        <p>正在分析圖片...</p>
      </div>

      <!-- 顯示 AI 描述結果 -->
      <div v-if="result" class="result-section q-mt-lg">
        <div class="text-h6">AI 描述：</div>
        <q-card class="q-pa-md q-mt-sm">
          <div class="text-body1">{{ result }}</div>

          <q-btn
            class="q-mt-sm"
            color="primary"
            icon="volume_up"
            label="播放發音"
            @click="playAudio"
          />
          <q-btn
            v-if="uid"
            class="q-mt-sm"
            color="secondary"
            icon="arrow_upward"
            label="上傳至資料庫"
            @click="uploadCard"
          />

          <div class="q-mt-sm">
            <!-- check box -->
            <q-checkbox v-model="isChecked" label="我已閱讀並同意"></q-checkbox>

            <a
              href="https://github.com/3dw/zh-en/wiki/%E9%9A%B1%E7%A7%81%E6%AC%8A%E6%94%BF%E7%AD%96"
              target="_blank"
              rel="noopener noreferrer"
            >
              隱私權政策
            </a>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, onUnmounted } from 'vue'
import axios from 'axios'
import heic2any from 'heic2any'
import Pica from 'pica'
import { set, ref as dbRef } from 'firebase/database'
import { getDatabase } from 'firebase/database'

const database = getDatabase()

export default defineComponent({
  name: 'WhatIsThisPage',

  props: {
    uid: {
      type: String,
      default: '',
    },
    cards: {
      type: Array,
      default: () => [],
    },
  },

  setup(props) {
    const isChecked = ref(false)
    const imageFile = ref(null)
    const imagePreview = ref('')
    const loading = ref(false)
    const result = ref('')
    const videoRef = ref<HTMLVideoElement | null>(null)
    const showCamera = ref(false)
    let stream: MediaStream | null = null

    const uploadCard = async () => {
      if (props.cards) {
        if (!isChecked.value) {
          window.alert('請先閱讀並同意隱私權政策')
          return
        }

        console.log('上傳卡片')

        if (!imagePreview.value) {
          console.error('無法取得圖片')
          return
        }

        try {
          // 從 blob URL 讀取圖片
          const response = await fetch(imagePreview.value)
          const blob = await response.blob()

          // 創建 Image 物件
          const img = new Image()
          const imgLoadPromise = new Promise((resolve, reject) => {
            img.onload = () => resolve(img)
            img.onerror = reject
          })
          img.src = URL.createObjectURL(blob)
          await imgLoadPromise

          // 計算新的尺寸，保持原始比例
          let width = img.width
          let height = img.height
          const aspectRatio = width / height
          const MAX_FILE_SIZE = 400 * 1024 // 400KB

          // 初始縮放比例
          let scale = 0.8
          const canvas = document.createElement('canvas')
          const pica = new Pica()
          let compressedBlob

          do {
            width = Math.floor(img.width * scale)
            height = Math.floor(width / aspectRatio)

            canvas.width = width
            canvas.height = height

            await pica.resize(img, canvas, {
              quality: 3,
              unsharpAmount: 80,
              unsharpRadius: 0.6,
              unsharpThreshold: 2,
            })

            compressedBlob = await new Promise<Blob>((resolve) => {
              canvas.toBlob((blob) => resolve(blob!), 'image/jpeg', 0.9)
            })

            scale *= 0.9
          } while (compressedBlob.size > MAX_FILE_SIZE)

          // 轉換為 base64
          const base64 = await new Promise<string>((resolve) => {
            const reader = new FileReader()
            reader.onloadend = () => resolve(reader.result as string)
            reader.readAsDataURL(compressedBlob)
          })

          console.log(base64)

          const newCard = {
            image: base64,
            description: result.value,
            createdAt: new Date().toISOString(),
            createdBy: props.uid,
          }
          const newIndex = props.cards.length
          set(dbRef(database, `cards/${newIndex}`), newCard).then(() => {
            alert('上傳成功')
            console.log('上傳成功')
          })
        } catch (error) {
          console.error('處理圖片失敗:', error)
          window.alert('處理圖片失敗，請重試')
        }
      }
    }

    const handleImageUpload = async (file: File) => {
      if (!file) return

      // 檢查檔案大小是否超過 1.5MB
      const MAX_FILE_SIZE = 1.5 * 1024 * 1024 // 1.5MB in bytes

      let processedFile = file
      const isHeic = /\.(heic|HEIC|heif|HEIF)$/.test(file.name)

      if (isHeic) {
        console.log('處理 HEIC 檔案:', file.name)
        try {
          const blob = await heic2any({
            blob: file,
            toType: 'image/jpeg',
            quality: 0.95,
          })

          const resultBlob = Array.isArray(blob) ? blob[0] : blob
          if (!resultBlob) return

          processedFile = new File(
            [resultBlob],
            file.name.replace(/\.(heic|HEIC|heif|HEIF)$/, '.jpg'),
            {
              type: 'image/jpeg',
            },
          )
        } catch (heicError: unknown) {
          if ((heicError as Error).message.includes('already browser readable')) {
            console.log('檔案已經是可讀格式，繼續處理')
            processedFile = file
          } else {
            console.error('HEIC 轉換錯誤:', heicError)
            window.alert('HEIC 圖片轉換失敗，請重試')
            return
          }
        }
      }

      // 如果檔案大於 1.5MB，進行壓縮
      if (processedFile.size > MAX_FILE_SIZE) {
        try {
          const img = new Image()
          const imgLoadPromise = new Promise((resolve, reject) => {
            img.onload = () => resolve(img)
            img.onerror = reject
          })

          img.src = URL.createObjectURL(processedFile)
          await imgLoadPromise

          // 計算新的尺寸，保持原始比例
          let width = img.width
          let height = img.height
          const aspectRatio = width / height

          // 初始縮放比例為 0.8
          let scale = 0.8

          const canvas = document.createElement('canvas')
          const pica = new Pica({
            features: ['js', 'wasm', 'cib'],
          })

          // 使用迴圈嘗試壓縮，直到檔案小於 1.5MB
          let attempts = 0
          let compressedBlob

          do {
            width = Math.floor(img.width * scale)
            height = Math.floor(width / aspectRatio)

            canvas.width = width
            canvas.height = height

            await pica.resize(img, canvas, {
              quality: 3,
              unsharpAmount: 80,
              unsharpRadius: 0.6,
              unsharpThreshold: 2,
            })

            compressedBlob = await new Promise<Blob>((resolve) => {
              canvas.toBlob((blob) => resolve(blob!), 'image/jpeg', 0.95)
            })

            scale *= 0.9
            attempts++
          } while (compressedBlob.size > MAX_FILE_SIZE && attempts < 5)

          processedFile = new File([compressedBlob], processedFile.name, {
            type: 'image/jpeg',
          })
        } catch (error) {
          console.error('圖片壓縮失敗:', error)
          window.alert('圖片壓縮失敗，請重試')
          return
        }
      }

      // 創建圖片預覽
      imagePreview.value = URL.createObjectURL(processedFile)

      loading.value = true
      result.value = ''

      try {
        const formData = new FormData()
        formData.append('image', processedFile)

        const response = await axios.post(
          'https://zh-en-backend.alearn13994229.workers.dev/detect-image',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
        )

        result.value = response.data.description
      } catch (error) {
        console.error('上傳圖片失敗:', error)
        // 可以加入錯誤提示
      } finally {
        loading.value = false
      }
    }

    const playAudio = () => {
      if (result.value) {
        const utterance = new SpeechSynthesisUtterance(result.value)
        utterance.lang = 'en-US'
        utterance.rate = 0.6
        window.speechSynthesis.speak(utterance)
      }
    }

    const openCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment' },
          audio: false,
        })

        if (videoRef.value) {
          videoRef.value.srcObject = stream
          showCamera.value = true
        }
      } catch (error) {
        console.error('無法存取相機:', error)
        window.alert('無法存取相機，請確認權限設定')
      }
    }

    const takePhoto = () => {
      if (!videoRef.value || !stream) return

      const canvas = document.createElement('canvas')
      canvas.width = videoRef.value.videoWidth
      canvas.height = videoRef.value.videoHeight

      const ctx = canvas.getContext('2d')
      if (!ctx) return

      ctx.drawImage(videoRef.value, 0, 0)

      canvas.toBlob(
        (blob) => {
          if (!blob) return

          const file = new File([blob], 'camera-photo.jpg', { type: 'image/jpeg' })
          handleImageUpload(file)

          // 關閉相機
          if (stream) {
            stream.getTracks().forEach((track) => track.stop())
            stream = null
          }
          showCamera.value = false
        },
        'image/jpeg',
        0.95,
      )
    }

    // 組件卸載時清理相機
    onUnmounted(() => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop())
      }
    })

    return {
      isChecked,
      imageFile,
      imagePreview,
      loading,
      result,
      handleImageUpload,
      playAudio,
      videoRef,
      showCamera,
      openCamera,
      takePhoto,
      uploadCard,
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
</style>
