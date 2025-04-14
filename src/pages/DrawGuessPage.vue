<template>
  <q-page class="q-pa-md">
    <div class="row items-center q-mb-md">
      <h1 class="col">繪圖猜字遊戲</h1>
      <div class="col-auto">
        <q-badge color="teal" class="text-h6"> Level: {{ level }} </q-badge>
      </div>
    </div>

    <!-- 遊戲說明 -->
    <div class="text-h6 q-mb-md text-center">
      請繪製以下單字: <span class="text-weight-bold">{{ currentWord }}</span>
      <q-btn
        icon="volume_up"
        color="primary"
        round
        size="lg"
        class="q-ml-sm"
        @click="speakCurrentWord"
      />
    </div>

    <!-- 計時器 -->
    <div class="text-center q-mb-md">
      <q-circular-progress :value="timerProgress" color="primary" size="50px" class="q-mx-auto">
        <q-badge color="primary" class="text-h6">{{ timeLeft }}s</q-badge>
      </q-circular-progress>
    </div>

    <!-- 繪圖區域 -->
    <div class="row q-col-gutter-md">
      <!-- 用戶繪圖區域 -->
      <div class="col-12 col-md-6">
        <q-card class="drawing-card">
          <q-card-section>
            <div class="text-h6 text-center">你的繪圖</div>
            <canvas
              ref="userCanvas"
              class="drawing-canvas"
              @mousedown="startDrawing"
              @mousemove="draw"
              @mouseup="stopDrawing"
              @mouseleave="stopDrawing"
              @touchstart="handleTouchStart"
              @touchmove="handleTouchMove"
              @touchend="stopDrawing"
            ></canvas>
          </q-card-section>
          <q-card-actions align="center">
            <q-btn color="primary" label="清除" @click="clearCanvas" />
            <q-btn color="secondary" label="提交" @click="submitDrawing" />
          </q-card-actions>
        </q-card>
      </div>

      <!-- AI 參考圖像區域 -->
      <div class="col-12 col-md-6">
        <q-card class="drawing-card">
          <q-card-section>
            <div class="text-h6 text-center">AI 參考圖像</div>
            <div v-if="!showAIReference" class="ai-placeholder">
              <q-spinner-dots color="primary" size="40px" />
              <div class="text-center q-mt-md">繪製完成後將顯示 AI 參考圖像</div>
            </div>
            <img v-else :src="aiReferenceImage" class="ai-reference-image" alt="AI Reference" />
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!-- 相似度結果 -->
    <div v-if="showResult" class="result-container q-mt-lg">
      <q-card>
        <q-card-section class="text-center">
          <div class="text-h5 q-mb-md">相似度評分</div>
          <q-circular-progress
            :value="similarityScore"
            color="positive"
            size="120px"
            class="q-mx-auto"
          >
            <div class="text-h4">{{ similarityScore }}%</div>
          </q-circular-progress>
          <div class="text-h6 q-mt-md">{{ resultMessage }}</div>
        </q-card-section>
        <q-card-actions align="center">
          <q-btn color="primary" label="下一題" @click="nextRound" />
        </q-card-actions>
      </q-card>
    </div>

    <!-- 遊戲結束對話框 -->
    <q-dialog v-model="showGameOver">
      <q-card>
        <q-card-section class="row items-center">
          <div class="text-h6">遊戲結束</div>
        </q-card-section>

        <q-card-section>
          <div class="text-center">
            <div class="text-h5 q-mb-md">你的最終得分: {{ level }}</div>
            <div class="text-body1">你完成了 {{ level }} 個單字的繪製!</div>
          </div>
        </q-card-section>

        <q-card-actions align="center">
          <q-btn color="primary" label="再玩一次" @click="resetGame" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'

export default defineComponent({
  name: 'DrawGuessPage',
  setup() {
    // 遊戲狀態
    const level = ref(0)
    const currentWord = ref('')
    const timeLeft = ref(30)
    const timerProgress = ref(100)
    const timer = ref<number | null>(null)
    const showResult = ref(false)
    const showGameOver = ref(false)
    const similarityScore = ref(0)
    const resultMessage = ref('')
    const showAIReference = ref(false)
    const aiReferenceImage = ref('')

    // 繪圖相關
    const userCanvas = ref<HTMLCanvasElement | null>(null)
    const isDrawing = ref(false)
    const lastX = ref(0)
    const lastY = ref(0)

    // 單字列表
    const words = [
      'apple',
      'banana',
      'cat',
      'dog',
      'elephant',
      'house',
      'tree',
      'car',
      'bird',
      'fish',
      'flower',
      'sun',
      'moon',
      'star',
      'book',
      'chair',
      'table',
      'phone',
      'computer',
      'keyboard',
      'mouse',
      'door',
      'window',
      'bed',
      'shoe',
      'hat',
      'shirt',
      'pants',
      'sock',
      'clock',
      'watch',
    ]

    // 從 localStorage 讀取已保存的 level
    const savedLevel = localStorage.getItem('drawGuessLevel')
    if (savedLevel) {
      level.value = parseInt(savedLevel)
    }

    // 初始化畫布
    function initCanvas() {
      if (!userCanvas.value) return

      const canvas = userCanvas.value
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      // 設置畫布大小
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight

      // 設置繪圖樣式
      ctx.strokeStyle = '#000'
      ctx.lineWidth = 3
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'

      // 填充白色背景
      ctx.fillStyle = '#fff'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    // 開始繪圖
    function startDrawing(event: MouseEvent | TouchEvent) {
      isDrawing.value = true

      if (event instanceof MouseEvent) {
        lastX.value = event.offsetX
        lastY.value = event.offsetY
      } else if (event instanceof TouchEvent && event.touches.length > 0) {
        const touch = event.touches[0]
        const rect = userCanvas.value?.getBoundingClientRect()
        if (rect && touch) {
          lastX.value = touch.clientX - rect.left
          lastY.value = touch.clientY - rect.top
        }
      }
    }

    // 繪圖
    function draw(event: MouseEvent | TouchEvent) {
      if (!isDrawing.value || !userCanvas.value) return

      const canvas = userCanvas.value
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      let currentX = 0
      let currentY = 0

      if (event instanceof MouseEvent) {
        currentX = event.offsetX
        currentY = event.offsetY
      } else if (event instanceof TouchEvent && event.touches.length > 0) {
        const touch = event.touches[0]
        const rect = canvas.getBoundingClientRect()
        if (touch) {
          currentX = touch.clientX - rect.left
          currentY = touch.clientY - rect.top
        }
      }

      ctx.beginPath()
      ctx.moveTo(lastX.value, lastY.value)
      ctx.lineTo(currentX, currentY)
      ctx.stroke()

      lastX.value = currentX
      lastY.value = currentY
    }

    // 停止繪圖
    function stopDrawing() {
      isDrawing.value = false
    }

    // 處理觸摸開始
    function handleTouchStart(event: TouchEvent) {
      event.preventDefault()
      startDrawing(event)
    }

    // 處理觸摸移動
    function handleTouchMove(event: TouchEvent) {
      event.preventDefault()
      draw(event)
    }

    // 清除畫布
    function clearCanvas() {
      if (!userCanvas.value) return

      const canvas = userCanvas.value
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      ctx.fillStyle = '#fff'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    // 選擇隨機單字
    function selectRandomWord() {
      const randomIndex = Math.floor(Math.random() * words.length)
      currentWord.value = words[randomIndex]!
    }

    // 開始計時器
    function startTimer() {
      timeLeft.value = 30
      timerProgress.value = 100

      if (timer.value) {
        clearInterval(timer.value)
      }

      timer.value = window.setInterval(() => {
        timeLeft.value--
        timerProgress.value = (timeLeft.value / 30) * 100

        if (timeLeft.value <= 0) {
          stopTimer()
          submitDrawing()
        }
      }, 1000)
    }

    // 停止計時器
    function stopTimer() {
      if (timer.value) {
        clearInterval(timer.value)
        timer.value = null
      }
    }

    // 發音當前單字
    function speakCurrentWord() {
      if (currentWord.value) {
        const utterance = new SpeechSynthesisUtterance(currentWord.value)
        utterance.lang = 'en-US'
        utterance.rate = 0.8
        speechSynthesis.speak(utterance)
      }
    }

    // 提交繪圖
    function submitDrawing() {
      stopTimer()

      // 模擬 AI 分析相似度
      // 在實際應用中，這裡應該調用 AI API 進行圖像分析
      setTimeout(() => {
        // 隨機生成相似度分數 (60-100)
        similarityScore.value = Math.floor(Math.random() * 41) + 60

        // 設置結果消息
        if (similarityScore.value >= 90) {
          resultMessage.value = '太棒了！你的繪圖非常像！'
        } else if (similarityScore.value >= 80) {
          resultMessage.value = '很好！你的繪圖很接近！'
        } else if (similarityScore.value >= 70) {
          resultMessage.value = '不錯！你的繪圖還算像！'
        } else {
          resultMessage.value = '繼續努力！你的繪圖可以更好！'
        }

        // 顯示 AI 參考圖像
        // 在實際應用中，這裡應該顯示 AI 生成的圖像
        showAIReference.value = true
        aiReferenceImage.value = `https://source.unsplash.com/300x300/?${currentWord.value}`

        // 顯示結果
        showResult.value = true

        // 更新分數
        if (similarityScore.value >= 70) {
          level.value++
          localStorage.setItem('drawGuessLevel', level.value.toString())

          // 檢查遊戲是否結束
          if (level.value >= 10) {
            showGameOver.value = true
          }
        }
      }, 1000)
    }

    // 下一輪
    function nextRound() {
      showResult.value = false
      showAIReference.value = false
      clearCanvas()
      selectRandomWord()
      startTimer()
      speakCurrentWord()
    }

    // 重置遊戲
    function resetGame() {
      level.value = 0
      localStorage.setItem('drawGuessLevel', '0')
      showGameOver.value = false
      nextRound()
    }

    onMounted(() => {
      initCanvas()
      selectRandomWord()
      startTimer()
      speakCurrentWord()

      // 監聽窗口大小變化，重新初始化畫布
      window.addEventListener('resize', initCanvas)
    })

    onUnmounted(() => {
      stopTimer()
      window.removeEventListener('resize', initCanvas)
    })

    return {
      level,
      currentWord,
      timeLeft,
      timerProgress,
      userCanvas,
      showResult,
      showGameOver,
      similarityScore,
      resultMessage,
      showAIReference,
      aiReferenceImage,
      startDrawing,
      draw,
      stopDrawing,
      handleTouchStart,
      handleTouchMove,
      clearCanvas,
      submitDrawing,
      nextRound,
      resetGame,
      speakCurrentWord,
    }
  },
})
</script>

<style scoped>
.drawing-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.drawing-canvas {
  width: 100%;
  height: 300px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  touch-action: none;
}

.ai-placeholder {
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 4px;
}

.ai-reference-image {
  width: 100%;
  height: 300px;
  object-fit: contain;
  border-radius: 4px;
}

.result-container {
  max-width: 500px;
  margin: 0 auto;
}

@media (max-width: 600px) {
  .drawing-canvas,
  .ai-placeholder,
  .ai-reference-image {
    height: 250px;
  }
}
</style>
