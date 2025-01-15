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
        <div class="text-center q-mt-md">
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

export default defineComponent({
  name: 'HandWrittenPage',
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
    })

    const initCanvas = () => {
      if (!canvas.value) return

      canvas.value.width = 280
      canvas.value.height = 280

      ctx.value = canvas.value.getContext('2d')
      if (ctx.value) {
        ctx.value.strokeStyle = '#000'
        ctx.value.lineWidth = 8
        ctx.value.lineCap = 'round'
        ctx.value.lineJoin = 'round'
      }
    }

    const startDrawing = (e: MouseEvent) => {
      isDrawing.value = true
      lastX = e.offsetX
      lastY = e.offsetY
    }

    const draw = (e: MouseEvent) => {
      if (!isDrawing.value || !ctx.value) return

      ctx.value.beginPath()
      ctx.value.moveTo(lastX, lastY)
      ctx.value.lineTo(e.offsetX, e.offsetY)
      ctx.value.stroke()
      lastX = e.offsetX
      lastY = e.offsetY
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

      const x = touch.clientX - rect.left
      const y = touch.clientY - rect.top

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
      ctx.value.clearRect(0, 0, canvas.value.width, canvas.value.height)
    }

    const nextLetter = () => {
      let randomIndex: number
      do {
        randomIndex = Math.floor(Math.random() * letters.length)
      } while (letters[randomIndex] === currentLetter.value) // 確保不會選到當前字母

      currentLetter.value = letters[randomIndex] as string
      clearCanvas()
      showResult.value = false
    }

    const checkAnswer = async () => {
      if (!canvas.value) return

      isChecking.value = true

      try {
        // 模擬 API 呼叫延遲
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // 這裡應該要呼叫手寫辨識 API
        // 目前使用true 當作示範
        const randomSuccess = true
        isCorrect.value = randomSuccess

        if (randomSuccess) {
          resultMessage.value = '太棒了！寫得很好！'
          score.value += 10
        } else {
          resultMessage.value = '再試一次，記得要寫工整喔！'
        }

        showResult.value = true

        // 如果答對，延遲後自動進入下一題
        if (randomSuccess) {
          setTimeout(() => {
            nextLetter()
          }, 1500)
        }
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
