<template>
  <q-page class="q-pa-md">
    <div class="row items-center q-mb-md">
      <h1 class="col">
        <q-icon name="edit" size="md" color="primary" class="q-mr-sm" />
        英文字母手寫練習
      </h1>
    </div>

    <!-- 遊戲說明和分數 -->
    <div class="text-h6 q-mb-md text-center">
      <div>
        請寫出字母：<span class="text-primary text-weight-bold text-h4">{{ currentLetter }}</span>
      </div>
      <div class="text-subtitle1 q-mt-sm">
        得分：<span class="text-positive">{{ score }}</span>
      </div>
    </div>

    <!-- 手寫區域 -->
    <div class="row justify-center q-mb-md">
      <div class="col-12 col-sm-6 col-md-4">
        <div class="canvas-container">
          <canvas
            ref="canvas"
            class="writing-canvas"
            @mousedown="startDrawing"
            @mousemove="draw"
            @mouseup="stopDrawing"
            @mouseleave="stopDrawing"
            @touchstart="handleTouch"
            @touchmove="handleTouch"
            @touchend="stopDrawing"
          ></canvas>
        </div>

        <!-- 操作按鈕 -->
        <div class="row q-gutter-sm justify-center q-mt-md">
          <q-btn
            color="primary"
            icon="check_circle"
            label="檢查"
            @click="checkAnswer"
            :loading="isChecking"
          />
          <q-btn color="secondary" icon="refresh" label="清除" @click="clearCanvas" />
          <q-btn color="accent" icon="skip_next" label="下一個" @click="nextLetter" />
        </div>

        <!-- 提示區域 -->
        <div class="text-center q-mt-md" v-if="devMode">
          <q-btn flat color="info" icon="help" label="顯示筆順" @click="showHint = true" />
        </div>
      </div>
    </div>

    <!-- 結果提示 -->
    <q-dialog v-model="showResult">
      <q-card style="min-width: 300px">
        <q-card-section class="row items-center">
          <q-avatar
            :icon="isCorrect ? 'sentiment_very_satisfied' : 'sentiment_dissatisfied'"
            :color="isCorrect ? 'positive' : 'negative'"
            text-color="white"
          />
          <span class="text-h6 q-ml-md" :class="isCorrect ? 'text-positive' : 'text-negative'">
            {{ resultMessage }}
          </span>
        </q-card-section>
      </q-card>
    </q-dialog>

    <!-- 筆順提示 -->
    <q-dialog v-model="showHint">
      <q-card>
        <q-card-section>
          <div class="text-h6">字母 {{ currentLetter }} 的筆順</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <img :src="`/images/letters/${currentLetter.toLowerCase()}.gif`" alt="筆順動畫" />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="關閉" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'HandWrittenPage',
  props: {
    devMode: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const canvas = ref<HTMLCanvasElement | null>(null)
    const ctx = ref<CanvasRenderingContext2D | null>(null)
    const isDrawing = ref(false)
    const currentLetter = ref<string>('A')
    const showResult = ref(false)
    const showHint = ref(false)
    const resultMessage = ref('')
    const isCorrect = ref(false)
    const isChecking = ref(false)
    const score = ref(0)

    const letters: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
    let lastX = 0
    let lastY = 0

    onMounted(() => {
      initCanvas()
      randomLetter()
      window.addEventListener('resize', initCanvas)
    })

    const randomLetter = () => {
      const randomIndex = Math.floor(Math.random() * letters.length)
      currentLetter.value = letters[randomIndex] as string
      sayPleaseWrite()
    }

    const sayPleaseWrite = () => {
      console.log('currentLetter.value:', currentLetter.value)
      const speech = new SpeechSynthesisUtterance(
        'Please write the letter: ' +
          detectLetterCase(currentLetter.value) +
          ' ' +
          currentLetter.value,
      )
      speech.lang = 'en'
      speech.rate = 1.2
      speech.pitch = 1.1
      speech.volume = 0.8
      speechSynthesis.speak(speech)
    }

    const initCanvas = () => {
      if (!canvas.value) return

      const CANVAS_SIZE = 280
      canvas.value.width = CANVAS_SIZE
      canvas.value.height = CANVAS_SIZE

      canvas.value.style.width = '100%'
      canvas.value.style.height = 'auto'
      canvas.value.style.aspectRatio = '1/1'

      ctx.value = canvas.value.getContext('2d', { willReadFrequently: true })

      if (ctx.value) {
        // 先填滿白色背景
        ctx.value.fillStyle = '#FFFFFF'
        ctx.value.fillRect(0, 0, canvas.value.width, canvas.value.height)

        // 筆畫參數
        ctx.value.strokeStyle = '#000'
        ctx.value.lineWidth = 8
        ctx.value.lineCap = 'round'
        ctx.value.lineJoin = 'round'
      }
    }

    const startDrawing = (e: MouseEvent) => {
      isDrawing.value = true
      if (!canvas.value) return

      const rect = canvas.value.getBoundingClientRect()
      const scaleX = canvas.value.width / rect.width
      const scaleY = canvas.value.height / rect.height

      lastX = (e.clientX - rect.left) * scaleX
      lastY = (e.clientY - rect.top) * scaleY
    }

    const draw = (e: MouseEvent) => {
      if (!isDrawing.value || !ctx.value || !canvas.value) return

      const rect = canvas.value.getBoundingClientRect()
      const scaleX = canvas.value.width / rect.width
      const scaleY = canvas.value.height / rect.height

      const x = (e.clientX - rect.left) * scaleX
      const y = (e.clientY - rect.top) * scaleY

      ctx.value.beginPath()
      ctx.value.moveTo(lastX, lastY)
      ctx.value.lineTo(x, y)
      ctx.value.stroke()
      lastX = x
      lastY = y
    }

    const stopDrawing = () => {
      isDrawing.value = false
    }

    const handleTouch = (e: TouchEvent) => {
      e.preventDefault()
      if (!canvas.value) return

      const rect = canvas.value.getBoundingClientRect()
      const touch = e.touches[0]
      if (!touch) return

      // 計算畫布的縮放比例
      const scaleX = canvas.value.width / rect.width
      const scaleY = canvas.value.height / rect.height

      // 加入頁面滾動位置的補償
      const x = (touch.clientX - rect.left + window.pageXOffset) * scaleX
      const y = (touch.clientY - rect.top + window.pageYOffset) * scaleY

      if (e.type === 'touchstart') {
        isDrawing.value = true
        lastX = x
        lastY = y
      } else if (e.type === 'touchmove' && isDrawing.value && ctx.value) {
        ctx.value.beginPath()
        ctx.value.moveTo(lastX, lastY)
        ctx.value.lineTo(x, y)
        ctx.value.stroke()
        lastX = x
        lastY = y
      }
    }

    const clearCanvas = () => {
      if (!ctx.value || !canvas.value) return
      // 清除時也要重新填入白色背景
      ctx.value.fillStyle = '#FFFFFF'
      ctx.value.fillRect(0, 0, canvas.value.width, canvas.value.height)
    }

    const nextLetter = () => {
      let randomIndex: number
      do {
        randomIndex = Math.floor(Math.random() * letters.length)
      } while (letters[randomIndex] === currentLetter.value) // 確保不會選到當前字母

      currentLetter.value = letters[randomIndex] as string
      sayPleaseWrite()
      clearCanvas()
      showResult.value = false
    }

    const detectLetterCase = (letter: string) => {
      if (letter.toLowerCase() === letter) {
        return 'lowercase'
      } else {
        return 'capital'
      }
    }

    const checkAnswer = async () => {
      if (!canvas.value || !ctx.value) return
      isChecking.value = true

      try {
        // 確保 canvas 內容完整性
        const imageData = ctx.value.getImageData(0, 0, canvas.value.width, canvas.value.height)
        const tempCanvas = document.createElement('canvas')
        tempCanvas.width = canvas.value.width
        tempCanvas.height = canvas.value.height
        const tempCtx = tempCanvas.getContext('2d')
        tempCtx?.putImageData(imageData, 0, 0)

        // 將臨時 canvas 轉換為 blob
        const blob = await new Promise<Blob>((resolve) => {
          tempCanvas.toBlob((blob) => {
            if (blob) resolve(blob)
          }, 'image/png')
        })

        // 下載圖片
        /* const imageUrl = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = imageUrl
        a.download = 'drawing.png'
        a.click() */

        const formData = new FormData()
        formData.append('image', blob, 'drawing.png')

        const letterCase = detectLetterCase(currentLetter.value)
        console.log('字母大小寫:', letterCase)
        console.log('當前字母:', currentLetter.value)

        const response = await axios.post(
          `https://zh-en-backend.alearn13994229.workers.dev/detect-letter/${letterCase}/${currentLetter.value}`,
          formData,
        )
        console.log('response:', response)
        console.log('response.data:', response.data)
        console.log('response.data.letter:', response.data.letter)

        if (response.data.letter === currentLetter.value) {
          isCorrect.value = true
          resultMessage.value = '太棒了！寫得很好！'
          score.value += 10
          showResult.value = true
          setTimeout(() => {
            nextLetter()
          }, 1500)
        } else {
          isCorrect.value = false
          resultMessage.value = '再試一次，記得要寫工整喔！'
          showResult.value = true
        }
      } catch (error) {
        console.error('Error checking answer:', error)
      } finally {
        isChecking.value = false
      }
    }

    return {
      canvas,
      currentLetter,
      showResult,
      showHint,
      resultMessage,
      isCorrect,
      isChecking,
      score,
      startDrawing,
      draw,
      stopDrawing,
      handleTouch,
      clearCanvas,
      checkAnswer,
      nextLetter,
      randomLetter,
      letters,
      detectLetterCase,
      sayPleaseWrite,
    }
  },
})
</script>

<style scoped>
.canvas-container {
  border: 2px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
}

.writing-canvas {
  width: 100%;
  touch-action: none;
  cursor: crosshair;
}

.text-h4 {
  font-size: 2.5rem;
}
</style>
