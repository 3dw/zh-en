<template>
  <div class="draw-guess-page">
    <!-- 遊戲標題和計時器 -->
    <div class="game-header">
      <h1>Quick Draw Game</h1>
      <div class="timer" :class="{ warning: timeLeft <= 5 }">{{ timeLeft }}s</div>
    </div>

    <!-- 提示詞顯示 -->
    <div class="prompt-box">
      <h2>Draw: {{ currentWord }}</h2>
    </div>

    <!-- 繪圖區域 -->
    <div class="drawing-area">
      <canvas
        ref="drawingCanvas"
        @mousedown="startDrawing"
        @mousemove="draw"
        @mouseup="stopDrawing"
        @mouseleave="stopDrawing"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="stopDrawing"
      ></canvas>
    </div>

    <!-- 控制按鈕 -->
    <div class="controls">
      <button @click="clearCanvas" class="control-btn">Clear</button>
      <button @click="startNewRound" class="control-btn">Try Another Word</button>
    </div>

    <!-- 結果顯示 -->
    <div v-if="showResult" class="result-box">
      <h3>Time's up!</h3>
      <p>You were asked to draw: {{ currentWord }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue'

// 預設的繪圖詞彙
const words = [
  'cat',
  'dog',
  'house',
  'tree',
  'car',
  'flower',
  'bird',
  'fish',
  'bicycle',
  'book',
  'chair',
  'clock',
  'cloud',
  'cup',
  'door',
  'eye',
  'face',
  'foot',
  'hand',
  'heart',
] as const

type Word = (typeof words)[number]

export default defineComponent({
  name: 'DrawGuessPage',
  setup() {
    const isDrawing = ref(false)
    const timeLeft = ref(20)
    const timer = ref<number | null>(null)
    const currentWord = ref<Word>('cat')
    const showResult = ref(false)
    const drawingCanvas = ref<HTMLCanvasElement | null>(null)
    const ctx = ref<CanvasRenderingContext2D | null>(null)
    const lastX = ref(0)
    const lastY = ref(0)

    const initCanvas = () => {
      if (!drawingCanvas.value) return
      ctx.value = drawingCanvas.value.getContext('2d')
      if (!ctx.value) return

      drawingCanvas.value.width = 400
      drawingCanvas.value.height = 400
      ctx.value.strokeStyle = '#000'
      ctx.value.lineWidth = 3
      ctx.value.lineCap = 'round'
      ctx.value.lineJoin = 'round'
    }

    const startDrawing = (event: MouseEvent) => {
      isDrawing.value = true
      const { offsetX, offsetY } = event
      lastX.value = offsetX
      lastY.value = offsetY
    }

    const draw = (event: MouseEvent) => {
      if (!isDrawing.value || !ctx.value) return
      const { offsetX, offsetY } = event
      ctx.value.beginPath()
      ctx.value.moveTo(lastX.value, lastY.value)
      ctx.value.lineTo(offsetX, offsetY)
      ctx.value.stroke()
      lastX.value = offsetX
      lastY.value = offsetY
    }

    const stopDrawing = () => {
      isDrawing.value = false
    }

    const handleTouchStart = (event: TouchEvent) => {
      event.preventDefault()
      if (!drawingCanvas.value) return
      const touch = event.touches[0]
      if (!touch) return
      const rect = drawingCanvas.value.getBoundingClientRect()
      const offsetX = touch.clientX - rect.left
      const offsetY = touch.clientY - rect.top
      lastX.value = offsetX
      lastY.value = offsetY
      isDrawing.value = true
    }

    const handleTouchMove = (event: TouchEvent) => {
      event.preventDefault()
      if (!isDrawing.value || !ctx.value || !drawingCanvas.value) return
      const touch = event.touches[0]
      if (!touch) return
      const rect = drawingCanvas.value.getBoundingClientRect()
      const offsetX = touch.clientX - rect.left
      const offsetY = touch.clientY - rect.top
      ctx.value.beginPath()
      ctx.value.moveTo(lastX.value, lastY.value)
      ctx.value.lineTo(offsetX, offsetY)
      ctx.value.stroke()
      lastX.value = offsetX
      lastY.value = offsetY
    }

    const clearCanvas = () => {
      if (!ctx.value || !drawingCanvas.value) return
      ctx.value.clearRect(0, 0, drawingCanvas.value.width, drawingCanvas.value.height)
    }

    const startNewRound = () => {
      clearCanvas()
      showResult.value = false
      timeLeft.value = 20
      const randomIndex = Math.floor(Math.random() * words.length)
      const newWord = words[randomIndex]
      if (newWord) {
        currentWord.value = newWord
      }
      startTimer()
    }

    const startTimer = () => {
      stopTimer()
      timer.value = window.setInterval(() => {
        if (timeLeft.value > 0) {
          timeLeft.value--
        } else {
          stopTimer()
          showResult.value = true
        }
      }, 1000)
    }

    const stopTimer = () => {
      if (timer.value) {
        clearInterval(timer.value)
        timer.value = null
      }
    }

    onMounted(() => {
      initCanvas()
      startNewRound()
    })

    onBeforeUnmount(() => {
      stopTimer()
    })

    return {
      isDrawing,
      timeLeft,
      currentWord,
      showResult,
      drawingCanvas,
      startDrawing,
      draw,
      stopDrawing,
      handleTouchStart,
      handleTouchMove,
      clearCanvas,
      startNewRound,
    }
  },
})
</script>

<style scoped>
.draw-guess-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.game-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.timer {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.timer.warning {
  color: #ff4444;
  animation: pulse 1s infinite;
}

.prompt-box {
  margin: 20px 0;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 8px;
}

.drawing-area {
  margin: 20px 0;
  display: flex;
  justify-content: center;
}

canvas {
  border: 2px solid #333;
  border-radius: 8px;
  background: white;
  cursor: crosshair;
}

.controls {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
}

.control-btn {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #4caf50;
  color: white;
  transition: background-color 0.3s;
}

.control-btn:hover {
  background-color: #45a049;
}

.result-box {
  margin-top: 20px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
