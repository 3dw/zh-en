<template>
  <q-page class="mario-game-page">
    <div class="game-header">
      <h1 class="game-title">
        <q-icon name="sports_esports" size="md" color="primary" class="q-mr-sm" />
        Mario English Adventure
      </h1>
      <div class="score-display">Score: {{ score }}</div>
    </div>

    <!-- 遊戲畫布 -->
    <div class="game-container">
      <canvas ref="gameCanvas" @keydown="handleKeyDown" @keyup="handleKeyUp" tabindex="0"></canvas>
    </div>

    <!-- 遊戲控制區 -->
    <div class="game-controls">
      <div class="control-panel">
        <q-btn
          color="primary"
          icon="play_arrow"
          label="Start Game"
          @click="startGame"
          :disable="isGameRunning"
        />
        <q-btn
          color="secondary"
          icon="restart_alt"
          label="Reset"
          @click="resetGame"
          class="q-ml-sm"
        />
      </div>

      <!-- 遊戲說明 -->
      <div class="instructions">
        <h3>How to Play:</h3>
        <ul>
          <li>使用方向鍵 ← → 移動瑪莉歐</li>
          <li>使用空白鍵跳躍</li>
          <li>頭頂對應的英文單字香菇獲得分數</li>
          <li>撞到錯誤的香菇會失去生命值</li>
        </ul>
      </div>
    </div>

    <!-- 遊戲狀態顯示 -->
    <q-dialog v-model="showGameOver">
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="sentiment_very_satisfied" color="primary" text-color="white" />
          <span class="q-ml-sm">Game Over! Final Score: {{ score }}</span>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Play Again" color="primary" @click="resetGame" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'

interface GameObject {
  x: number
  y: number
  width: number
  height: number
  type: string
  word?: string
  isCorrect?: boolean
}

interface GameState {
  mario: GameObject
  mushrooms: GameObject[]
  platforms: GameObject[]
  currentWord: string
  targetWord: string
}

export default defineComponent({
  name: 'MarioGamePage',
  setup() {
    const gameCanvas = ref<HTMLCanvasElement | null>(null)
    const ctx = ref<CanvasRenderingContext2D | null>(null)
    const score = ref(0)
    const isGameRunning = ref(false)
    const showGameOver = ref(false)
    const gameLoop = ref<number | null>(null)

    // 遊戲狀態
    const gameState = ref<GameState>({
      mario: {
        x: 100,
        y: 400,
        width: 32,
        height: 32,
        type: 'mario',
      },
      mushrooms: [],
      platforms: [{ x: 0, y: 450, width: 800, height: 50, type: 'platform' }],
      currentWord: '',
      targetWord: '',
    })

    // 英文單字庫
    const wordPairs = [
      { word: 'cat', translation: '貓' },
      { word: 'dog', translation: '狗' },
      { word: 'bird', translation: '鳥' },
      { word: 'fish', translation: '魚' },
      { word: 'tree', translation: '樹' },
    ]

    // 遊戲物理參數
    const physics = {
      gravity: 0.5,
      jumpForce: -12,
      moveSpeed: 5,
    }

    // 瑪莉歐狀態
    const marioState = ref({
      velocityY: 0,
      isJumping: false,
      direction: 1, // 1 右, -1 左
      isMovingLeft: false,
      isMovingRight: false,
    })

    // 在 setup() 中添加新的遊戲元素
    const clouds = ref([
      { x: 100, y: 50, width: 80, height: 40 },
      { x: 300, y: 70, width: 100, height: 50 },
      { x: 600, y: 40, width: 90, height: 45 },
    ])

    const pipes = ref([
      { x: 500, y: 370, width: 60, height: 80 },
      { x: 700, y: 350, width: 60, height: 100 },
    ])

    const bricks = ref([
      { x: 200, y: 200, width: 40, height: 40 },
      { x: 240, y: 200, width: 40, height: 40 },
      { x: 280, y: 200, width: 40, height: 40 },
      { x: 400, y: 250, width: 40, height: 40 },
      { x: 440, y: 250, width: 40, height: 40 },
    ])

    // 音效系統
    const sounds = {
      jump: new Audio('/sounds/jump_11.wav'),
      coin: new Audio('/sounds/coin.aif'),
      gameover: new Audio('/sounds/mario-die.mp3'),
      background: new Audio('/sounds/mario-theme.mp3'),
    }

    // 設置背景音樂循環播放
    sounds.background.loop = true
    sounds.background.volume = 0.5

    const initCanvas = () => {
      if (!gameCanvas.value) return
      gameCanvas.value.width = 800
      gameCanvas.value.height = 500
      ctx.value = gameCanvas.value.getContext('2d')
      if (!ctx.value) return

      // 設置平滑化
      ctx.value.imageSmoothingEnabled = false
    }

    const generateMushrooms = () => {
      const mushrooms: GameObject[] = []
      const words = [...wordPairs]
      const correctIndex = Math.floor(Math.random() * words.length)
      const targetPair = words[correctIndex]

      if (!targetPair) return

      gameState.value.targetWord = targetPair.word
      gameState.value.currentWord = targetPair.translation

      // 生成3個香菇，一個正確，兩個錯誤
      for (let i = 0; i < 3; i++) {
        const word = i === correctIndex ? targetPair.word : words[(i + 1) % words.length]?.word
        if (!word) continue

        mushrooms.push({
          x: 200 + i * 200,
          y: 200,
          width: 32,
          height: 32,
          type: 'mushroom',
          word,
          isCorrect: i === correctIndex,
        })
      }

      gameState.value.mushrooms = mushrooms
    }

    const drawMushrooms = () => {
      if (!ctx.value) return
      gameState.value.mushrooms.forEach((mushroom) => {
        ctx.value!.fillStyle = mushroom.isCorrect ? '#4CAF50' : '#FFA000'
        ctx.value!.fillRect(mushroom.x, mushroom.y, mushroom.width, mushroom.height)

        // 繪製單字
        ctx.value!.fillStyle = '#000'
        ctx.value!.font = '14px Arial'
        ctx.value!.textAlign = 'center'
        ctx.value!.fillText(mushroom.word || '', mushroom.x + mushroom.width / 2, mushroom.y - 5)
      })
    }

    const drawMario = () => {
      if (!ctx.value) return
      const mario = gameState.value.mario
      ctx.value.fillStyle = '#ff0000'
      ctx.value.fillRect(mario.x, mario.y, mario.width, mario.height)
    }

    const drawCurrentWord = () => {
      if (!ctx.value) return
      ctx.value.fillStyle = '#000'
      ctx.value.font = '24px Arial'
      ctx.value.textAlign = 'center'
      ctx.value.fillText(
        `找出 "${gameState.value.currentWord}" 的英文: ${gameState.value.targetWord}`,
        400,
        50,
      )
    }

    const drawGame = () => {
      if (!ctx.value) return

      // 清空畫布
      ctx.value.clearRect(0, 0, 800, 500)

      // 繪製天空
      ctx.value.fillStyle = '#87CEEB'
      ctx.value.fillRect(0, 0, 800, 500)

      // 繪製雲朵
      ctx.value.fillStyle = '#FFFFFF'
      clouds.value.forEach((cloud) => {
        ctx.value!.beginPath()
        ctx.value!.arc(cloud.x, cloud.y, 20, 0, Math.PI * 2)
        ctx.value!.arc(cloud.x + 15, cloud.y - 10, 15, 0, Math.PI * 2)
        ctx.value!.arc(cloud.x + 30, cloud.y, 20, 0, Math.PI * 2)
        ctx.value!.fill()
      })

      // 繪製地面
      ctx.value.fillStyle = '#8B4513'
      ctx.value.fillRect(0, 450, 800, 50)

      // 繪製磚塊
      ctx.value.fillStyle = '#B87333'
      bricks.value.forEach((brick) => {
        ctx.value!.fillRect(brick.x, brick.y, brick.width, brick.height)
        // 添加磚塊紋理
        ctx.value!.strokeStyle = '#8B4513'
        ctx.value!.strokeRect(brick.x, brick.y, brick.width, brick.height)
      })

      // 繪製管道
      ctx.value.fillStyle = '#00FF00'
      pipes.value.forEach((pipe) => {
        ctx.value!.fillRect(pipe.x, pipe.y, pipe.width, pipe.height)
        // 添加管道邊緣
        ctx.value!.fillStyle = '#00CC00'
        ctx.value!.fillRect(pipe.x - 5, pipe.y, 5, 10)
        ctx.value!.fillRect(pipe.x + pipe.width, pipe.y, 5, 10)
      })

      // 繪製遊戲元素
      drawMushrooms()
      drawMario()
      drawCurrentWord()
    }

    const updateGame = () => {
      if (!isGameRunning.value) return

      const mario = gameState.value.mario

      // 水平移動
      if (marioState.value.isMovingLeft) {
        mario.x -= physics.moveSpeed
      }
      if (marioState.value.isMovingRight) {
        mario.x += physics.moveSpeed
      }

      // 限制移動範圍
      mario.x = Math.max(0, Math.min(mario.x, 800 - mario.width))

      // 垂直移動
      marioState.value.velocityY += physics.gravity
      mario.y += marioState.value.velocityY

      // 檢查平台碰撞
      const checkPlatformCollision = (platform: {
        x: number
        y: number
        width: number
        height: number
      }) => {
        if (
          mario.y + mario.height > platform.y &&
          mario.y < platform.y + platform.height &&
          mario.x + mario.width > platform.x &&
          mario.x < platform.x + platform.width
        ) {
          if (marioState.value.velocityY > 0) {
            mario.y = platform.y - mario.height
            marioState.value.velocityY = 0
            marioState.value.isJumping = false
          }
        }
      }

      // 檢查所有平台類型的碰撞
      gameState.value.platforms.forEach(checkPlatformCollision)
      bricks.value.forEach(checkPlatformCollision)
      pipes.value.forEach(checkPlatformCollision)

      // 檢查香菇碰撞
      gameState.value.mushrooms.forEach((mushroom) => {
        if (
          mario.y + mario.height > mushroom.y &&
          mario.y < mushroom.y + mushroom.height &&
          mario.x + mario.width > mushroom.x &&
          mario.x < mushroom.x + mushroom.width
        ) {
          if (mushroom.isCorrect) {
            score.value += 100
            // 播放收集音效
            sounds.coin.currentTime = 0
            sounds.coin.play()
            generateMushrooms()
          } else {
            showGameOver.value = true
            // 播放遊戲結束音效
            sounds.gameover.play()
            stopGame()
          }
        }
      })
    }

    const gameUpdate = () => {
      updateGame()
      drawGame()
      gameLoop.value = requestAnimationFrame(gameUpdate)
    }

    const startGame = () => {
      if (isGameRunning.value) return
      isGameRunning.value = true
      score.value = 0
      generateMushrooms()
      gameLoop.value = requestAnimationFrame(gameUpdate)
      if (gameCanvas.value) {
        gameCanvas.value.focus()
      }
      // 開始播放背景音樂
      sounds.background.play()
    }

    const stopGame = () => {
      isGameRunning.value = false
      if (gameLoop.value) {
        cancelAnimationFrame(gameLoop.value)
      }
      // 停止背景音樂
      sounds.background.pause()
      sounds.background.currentTime = 0
    }

    const resetGame = () => {
      stopGame()
      gameState.value.mario.x = 100
      gameState.value.mario.y = 400
      marioState.value.velocityY = 0
      marioState.value.isJumping = false
      score.value = 0
      showGameOver.value = false
      startGame()
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isGameRunning.value) return

      switch (event.code) {
        case 'Space':
          if (!marioState.value.isJumping) {
            marioState.value.velocityY = physics.jumpForce
            marioState.value.isJumping = true
            // 播放跳躍音效
            sounds.jump.currentTime = 0
            sounds.jump.play()
          }
          break
        case 'ArrowLeft':
          marioState.value.isMovingLeft = true
          marioState.value.direction = -1
          break
        case 'ArrowRight':
          marioState.value.isMovingRight = true
          marioState.value.direction = 1
          break
      }
    }

    const handleKeyUp = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'ArrowLeft':
          marioState.value.isMovingLeft = false
          break
        case 'ArrowRight':
          marioState.value.isMovingRight = false
          break
      }
    }

    onMounted(() => {
      initCanvas()
      window.addEventListener('keydown', handleKeyDown)
      window.addEventListener('keyup', handleKeyUp)
    })

    onUnmounted(() => {
      stopGame()
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    })

    return {
      gameCanvas,
      score,
      isGameRunning,
      showGameOver,
      startGame,
      resetGame,
      handleKeyDown,
      handleKeyUp,
    }
  },
})
</script>

<style scoped>
.mario-game-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.game-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.game-title {
  font-size: 2rem;
  margin: 0;
  color: #1a73e8;
}

.score-display {
  font-size: 1.5rem;
  font-weight: bold;
  color: #4caf50;
}

.game-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

canvas {
  border: 4px solid #1a73e8;
  border-radius: 8px;
  background: #87ceeb;
}

.game-controls {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.control-panel {
  display: flex;
  gap: 10px;
}

.instructions {
  background: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
  margin: 0 auto;
}

.instructions h3 {
  color: #1a73e8;
  margin-top: 0;
}

.instructions ul {
  list-style-type: none;
  padding: 0;
}

.instructions li {
  margin: 10px 0;
  color: #5f6368;
}

.instructions li:before {
  content: '•';
  color: #1a73e8;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}
</style>
