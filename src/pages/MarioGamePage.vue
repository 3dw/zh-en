<template>
  <q-page class="mario-game-page">
    <div class="game-header">
      <h1 class="game-title">
        <q-icon name="sports_esports" size="md" color="primary" class="q-mr-sm" />
        Jump Jump English Adventure
      </h1>
      <div class="score-display">
        <div>Score: {{ score }}</div>
        <div class="difficulty-level">Level: {{ getDifficultyLevel() }}</div>
        <div class="xp-info">下題答對獎勵：50×{{ consecutiveCorrect + 1 }} XP</div>
      </div>
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

      <!-- 虛擬按鈕控制區 -->
      <div class="virtual-controls">
        <div class="movement-buttons">
          <q-btn
            round
            color="primary"
            icon="arrow_left"
            size="lg"
            class="movement-btn"
            @click="handleTouchStart('left')"
            @mousedown="handleTouchStart('left')"
            @mouseup="handleTouchEnd('left')"
            @mouseleave="handleTouchEnd('left')"
          />
          <q-btn
            round
            color="primary"
            icon="arrow_right"
            size="lg"
            class="movement-btn"
            @click="handleTouchStart('right')"
            @mousedown="handleTouchStart('right')"
            @mouseup="handleTouchEnd('right')"
            @mouseleave="handleTouchEnd('right')"
          />
        </div>
        <q-btn
          round
          color="secondary"
          icon="arrow_upward"
          size="lg"
          class="jump-btn"
          @click="handleTouchStart('jump')"
          @mousedown="handleTouchStart('jump')"
          @mouseup="handleTouchEnd('jump')"
          @mouseleave="handleTouchEnd('jump')"
        />
      </div>

      <!-- 遊戲說明 -->
      <div class="instructions">
        <h3>How to Play:</h3>
        <ul>
          <li v-if="!isMobile">使用方向鍵 ← → 移動跳跳人</li>
          <li v-if="!isMobile">使用空白鍵跳躍</li>
          <li v-if="isMobile">使用下方按鈕控制跳跳人</li>
          <li>頭頂對應的英文單字香菇獲得分數</li>
          <li>撞到錯誤的香菇會失去生命值</li>
        </ul>
      </div>
    </div>

    <!-- 遊戲狀態顯示 -->
    <q-dialog v-model="showGameOver">
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="sentiment_very_dissatisfied" color="negative" text-color="white" />
          <span class="q-ml-sm">Game Over!</span>
        </q-card-section>
        <q-card-section>
          <div class="text-h6 text-center q-mb-md">正確答案是：{{ gameState.targetWord }}</div>
          <div class="text-subtitle1 text-center q-mb-sm">中文：{{ gameState.currentWord }}</div>
          <div class="text-h5 text-center">最終得分：{{ score }}</div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="再玩一次" color="primary" @click="resetGame" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- 答對得分提示 -->
    <q-dialog v-model="showCorrectAnswer" persistent>
      <q-card class="correct-answer-card">
        <q-card-section class="row items-center">
          <q-avatar icon="celebration" color="positive" text-color="white" />
          <span class="q-ml-sm text-h6">答對了！</span>
        </q-card-section>
        <q-card-section>
          <div class="text-h5 text-center q-mb-md">得分：{{ score }}</div>
          <div class="text-subtitle1 text-center q-mb-sm">
            連續答對：{{ consecutiveCorrect }} 次
          </div>
          <div class="text-subtitle1 text-center q-mb-sm">
            本次獲得：{{ 50 * consecutiveCorrect }} 分 + {{ 50 * consecutiveCorrect }} XP
          </div>
          <div class="text-subtitle1 text-center">繼續挑戰下一題！</div>
        </q-card-section>
        <q-card-actions align="center">
          <q-btn flat label="繼續" color="primary" @click="continueGame" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- 答錯扣分提示 -->
    <q-dialog v-model="showWrongAnswer" persistent>
      <q-card class="wrong-answer-card">
        <q-card-section class="row items-center">
          <q-avatar icon="sentiment_dissatisfied" color="negative" text-color="white" />
          <span class="q-ml-sm text-h6">答錯了！</span>
        </q-card-section>
        <q-card-section>
          <div class="text-h5 text-center q-mb-md">扣分：-1000</div>
          <div class="text-subtitle1 text-center">當前分數：{{ score }}</div>
          <div class="text-subtitle1 text-center">正確答案是：{{ gameState.targetWord }}</div>
        </q-card-section>
        <q-card-actions align="center">
          <q-btn flat label="繼續" color="primary" @click="continueAfterWrong" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'
import { wordPairs } from '../data/wordPairs'

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
  emits: ['earn-xp'],
  setup(props, { emit }) {
    const gameCanvas = ref<HTMLCanvasElement | null>(null)
    const ctx = ref<CanvasRenderingContext2D | null>(null)
    const score = ref(0)
    const consecutiveCorrect = ref(0) // 連續答對次數
    const isGameRunning = ref(false)
    const showGameOver = ref(false)
    const showCorrectAnswer = ref(false)
    const gameLoop = ref<number | null>(null)
    const showWrongAnswer = ref(false)

    // 檢測是否為手機設備
    const isMobile = ref(false)

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

    // 遊戲物理參數
    const physics = {
      gravity: 0.5,
      jumpForce: -12,
      moveSpeed: 5,
    }

    // 跳跳人狀態
    const marioState = ref({
      velocityY: 0,
      isJumping: false,
      direction: 1, // 1 右, -1 左
      isMovingLeft: false,
      isMovingRight: false,
    })

    // 遊戲元素
    const clouds = ref([
      { x: 100, y: 50, width: 80, height: 40 },
      { x: 300, y: 70, width: 100, height: 50 },
      { x: 600, y: 40, width: 90, height: 45 },
    ])

    const pipes = ref([
      { x: 100, y: 370, width: 60, height: 80 },
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
      jump: new Audio('/sounds/correct.mp3'), // 使用正確音效作為跳躍音效
      coin: new Audio('/sounds/correct.mp3'), // 使用正確音效作為收集音效
      gameover: new Audio('/sounds/wrong.mp3'), // 使用錯誤音效作為遊戲結束音效
    }

    // 預載入音效
    const preloadSounds = () => {
      Object.values(sounds).forEach((sound) => {
        sound.load()
        // 設置音量
        sound.volume = 0.5
      })
    }

    // 播放音效的輔助函數
    const playSound = (sound: HTMLAudioElement) => {
      // 重置音效並播放
      sound.currentTime = 0
      const playPromise = sound.play()
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log('音效播放失敗:', error)
        })
      }
    }

    // 播放題目發音
    const speakTargetWord = () => {
      if (gameState.value.targetWord) {
        const utterance = new SpeechSynthesisUtterance(gameState.value.targetWord)
        utterance.lang = 'en-US'
        utterance.rate = 0.8
        utterance.volume = 0.8
        window.speechSynthesis.speak(utterance)
      }
    }

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

      // 根據當前分數篩選可用的單字
      const availableWords = wordPairs.filter(
        (word) => score.value >= word.minScore && score.value <= word.maxScore,
      )

      // 如果可用單字不足，則使用所有單字
      const wordsToUse = availableWords.length >= 3 ? availableWords : wordPairs

      // 複製並打亂單字庫
      const shuffledWords = [...wordsToUse].sort(() => Math.random() - 0.5)
      // 取前三個不同的單字
      const selectedWords = shuffledWords.slice(0, 3)
      const correctIndex = Math.floor(Math.random() * 3)
      const targetPair = selectedWords[correctIndex]

      if (!targetPair) return

      gameState.value.targetWord = targetPair.word
      gameState.value.currentWord = targetPair.translation

      // 生成3個香菇，一個正確，兩個錯誤，位置調整到更合理的高度
      const mushroomPositions = [
        { x: 180, y: 300 }, // 左側香菇，可以從左側水管跳上去
        { x: 400, y: 300 }, // 中間香菇
        { x: 620, y: 300 }, // 右側香菇
      ] as const

      // 使用選出的三個不同單字生成香菇
      for (let i = 0; i < 3; i++) {
        const position = mushroomPositions[i]
        if (!position) continue

        const word = selectedWords[i]?.word
        if (!word) continue

        mushrooms.push({
          x: position.x,
          y: position.y,
          width: 32,
          height: 32,
          type: 'mushroom',
          word,
          isCorrect: i === correctIndex,
        })
      }

      gameState.value.mushrooms = mushrooms

      // 播放題目發音
      setTimeout(() => {
        speakTargetWord()
      }, 500) // 延遲500ms播放，讓玩家有時間準備
    }

    const drawMushrooms = () => {
      if (!ctx.value) return
      gameState.value.mushrooms.forEach((mushroom) => {
        ctx.value!.fillStyle = '#FF7700' // 統一使用橘色
        ctx.value!.fillRect(mushroom.x, mushroom.y, mushroom.width, mushroom.height)

        // 繪製單字
        ctx.value!.fillStyle = '#000'
        // 根據螢幕寬度調整字體大小，再大3px
        const fontSize = window.innerWidth <= 768 ? '31px' : '23px'
        ctx.value!.font = `bold ${fontSize} Arial`
        ctx.value!.textAlign = 'center'
        // 調整文字位置，避免與香菇重疊
        const textY = window.innerWidth <= 768 ? -15 : -10
        ctx.value!.fillText(
          mushroom.word || '',
          mushroom.x + mushroom.width / 2,
          mushroom.y + textY,
        )
      })
    }

    const drawMario = () => {
      if (!ctx.value) return
      const mario = gameState.value.mario
      const canvasCtx = ctx.value

      // 繪製跳跳人的身體（紅色）
      canvasCtx.fillStyle = '#ff0000'
      canvasCtx.fillRect(mario.x, mario.y, mario.width, mario.height)

      // 繪製帽子（紅色）
      canvasCtx.fillStyle = '#ff0000'
      canvasCtx.fillRect(mario.x - 4, mario.y - 8, mario.width + 8, 8)

      // 繪製帽子的白色部分
      canvasCtx.fillStyle = '#ffffff'
      canvasCtx.fillRect(mario.x - 4, mario.y - 8, mario.width + 8, 4)

      // 繪製眼睛（白色）
      canvasCtx.fillStyle = '#ffffff'
      const eyeSize = 6
      const eyeY = mario.y + 8
      // 根據移動方向決定眼睛位置
      if (marioState.value.direction === 1) {
        // 向右看
        canvasCtx.fillRect(mario.x + 18, eyeY, eyeSize, eyeSize)
        canvasCtx.fillRect(mario.x + 8, eyeY, eyeSize, eyeSize)
      } else {
        // 向左看
        canvasCtx.fillRect(mario.x + 8, eyeY, eyeSize, eyeSize)
        canvasCtx.fillRect(mario.x + 18, eyeY, eyeSize, eyeSize)
      }

      // 繪製眼睛的黑色部分
      canvasCtx.fillStyle = '#000000'
      const pupilSize = 3
      if (marioState.value.direction === 1) {
        // 向右看
        canvasCtx.fillRect(mario.x + 20, eyeY + 2, pupilSize, pupilSize)
        canvasCtx.fillRect(mario.x + 10, eyeY + 2, pupilSize, pupilSize)
      } else {
        // 向左看
        canvasCtx.fillRect(mario.x + 10, eyeY + 2, pupilSize, pupilSize)
        canvasCtx.fillRect(mario.x + 20, eyeY + 2, pupilSize, pupilSize)
      }

      // 繪製鬍子（黑色）
      canvasCtx.fillStyle = '#000000'
      canvasCtx.fillRect(mario.x + 6, mario.y + 20, 20, 2)

      // 繪製褲子（藍色）
      canvasCtx.fillStyle = '#0000ff'
      canvasCtx.fillRect(mario.x, mario.y + 24, mario.width, 8)
    }

    const drawCurrentWord = () => {
      if (!ctx.value) return
      ctx.value.fillStyle = '#000'
      // 根據螢幕寬度調整字體大小
      const fontSize = window.innerWidth <= 768 ? '32px' : '24px'
      ctx.value.font = `bold ${fontSize} Arial`
      ctx.value.textAlign = 'center'
      ctx.value.fillText(`找出 "${gameState.value.currentWord}" 的英文`, 400, 50)
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
          // 播放該答案的發音
          const utterance = new SpeechSynthesisUtterance(mushroom.word || '')
          utterance.lang = 'en-US'
          utterance.rate = 0.8
          utterance.volume = 0.8
          window.speechSynthesis.speak(utterance)

          if (mushroom.isCorrect) {
            // 連續答對次數增加
            consecutiveCorrect.value += 1

            // 等差計分：第1次50分，第2次100分，第3次150分，第4次200分...
            const baseScore = 50
            const earnedScore = baseScore * consecutiveCorrect.value
            score.value += earnedScore

            // 向父元件發送 XP 事件，XP 也使用等差計分
            const earnedXP = baseScore * consecutiveCorrect.value
            emit('earn-xp', earnedXP)

            // 播放收集音效
            playSound(sounds.coin)
            // 顯示得分提示
            showCorrectAnswer.value = true
            // 暫停遊戲
            isGameRunning.value = false
          } else {
            // 答錯時扣分並重置連續答對次數
            score.value = Math.max(0, score.value - 1000)
            consecutiveCorrect.value = 0 // 重置連續答對次數
            showWrongAnswer.value = true
            // 暫停遊戲
            isGameRunning.value = false

            // 檢查是否遊戲結束
            if (score.value <= 0) {
              showGameOver.value = true
              stopGame()
            }
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
    }

    const stopGame = () => {
      isGameRunning.value = false
      if (gameLoop.value) {
        cancelAnimationFrame(gameLoop.value)
      }
    }

    const resetGame = () => {
      stopGame()
      gameState.value.mario.x = 100
      gameState.value.mario.y = 400
      marioState.value.velocityY = 0
      marioState.value.isJumping = false
      score.value = 0
      consecutiveCorrect.value = 0 // 重置連續答對次數
      showGameOver.value = false
      showCorrectAnswer.value = false
      showWrongAnswer.value = false
      startGame()
    }

    const getDifficultyLevel = () => {
      if (score.value < 1000) return 'Beginner(初學者)'
      if (score.value < 2000) return 'Easy(簡單)'
      if (score.value < 3000) return 'Medium(中等)'
      if (score.value < 4000) return 'Hard(困難)'
      if (score.value < 5000) return 'Expert(專家)'
      if (score.value < 6000) return 'Master(大師)'
      if (score.value < 7000) return 'Grand Master(傳奇)'
      if (score.value < 8000) return 'Legend(傳說)'
      if (score.value < 9000) return 'Mythic(神話)'
      if (score.value < 10000) return 'Divine(神)'
      if (score.value < 12000) return 'Technical(技術)'
      if (score.value < 14000) return 'Professional(專業)'
      if (score.value < 15000) return 'Academic(學術)'
      return 'Elite'
    }

    const continueGame = () => {
      // 重置跳跳人位置
      gameState.value.mario.x = 100
      gameState.value.mario.y = 400
      marioState.value.velocityY = 0
      marioState.value.isJumping = false
      // 生成新的題目
      generateMushrooms()
      // 重新開始遊戲
      isGameRunning.value = true
      if (gameCanvas.value) {
        gameCanvas.value.focus()
      }
    }

    const continueAfterWrong = () => {
      // 重置跳跳人位置
      gameState.value.mario.x = 100
      gameState.value.mario.y = 400
      marioState.value.velocityY = 0
      marioState.value.isJumping = false
      // 生成新的題目
      generateMushrooms()
      // 重新開始遊戲
      isGameRunning.value = true
      if (gameCanvas.value) {
        gameCanvas.value.focus()
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isGameRunning.value) {
        // 當遊戲暫停時，檢查是否在對話框中
        if (event.code === 'Enter') {
          if (showCorrectAnswer.value) {
            continueGame()
            showCorrectAnswer.value = false
          } else if (showGameOver.value) {
            resetGame()
            showGameOver.value = false
          }
          return
        }
        return
      }

      switch (event.code) {
        case 'Space':
          // 阻止空白鍵的預設捲動行為
          event.preventDefault()
          if (!marioState.value.isJumping) {
            marioState.value.velocityY = physics.jumpForce
            marioState.value.isJumping = true
            playSound(sounds.jump)
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

    const handleTouchStart = (action: 'left' | 'right' | 'jump') => {
      if (!isGameRunning.value) return

      // 防止事件冒泡
      event?.preventDefault()
      event?.stopPropagation()

      switch (action) {
        case 'left':
          marioState.value.isMovingLeft = true
          marioState.value.direction = -1
          break
        case 'right':
          marioState.value.isMovingRight = true
          marioState.value.direction = 1
          break
        case 'jump':
          if (!marioState.value.isJumping) {
            marioState.value.velocityY = physics.jumpForce
            marioState.value.isJumping = true
            playSound(sounds.jump)
          }
          break
      }
    }

    const handleTouchEnd = (action: 'left' | 'right' | 'jump') => {
      // 防止事件冒泡
      event?.preventDefault()
      event?.stopPropagation()

      switch (action) {
        case 'left':
          marioState.value.isMovingLeft = false
          break
        case 'right':
          marioState.value.isMovingRight = false
          break
        case 'jump':
          // 跳躍不需要處理結束事件
          break
      }
    }

    onMounted(() => {
      initCanvas()
      preloadSounds() // 預載入音效
      window.addEventListener('keydown', handleKeyDown)
      window.addEventListener('keyup', handleKeyUp)

      // 檢測是否為手機設備
      isMobile.value =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        ) || window.innerWidth <= 768
    })

    onUnmounted(() => {
      stopGame()
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    })

    return {
      gameCanvas,
      score,
      consecutiveCorrect,
      isGameRunning,
      showGameOver,
      showCorrectAnswer,
      showWrongAnswer,
      gameState,
      isMobile,
      startGame,
      resetGame,
      continueGame,
      continueAfterWrong,
      getDifficultyLevel,
      handleKeyDown,
      handleKeyUp,
      handleTouchStart,
      handleTouchEnd,
      emit,
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
  text-align: left;
  margin-right: 300px;
}

@media (max-width: 768px) {
  .score-display {
    margin-right: 0;
  }
}

.difficulty-level {
  font-size: 1rem;
  color: #ff7700;
  margin-top: 5px;
}

.xp-info {
  font-size: 0.9rem;
  color: #4caf50;
  margin-top: 3px;
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

.virtual-controls {
  display: none; /* 預設隱藏，在手機上顯示 */
  width: 100%;
  max-width: 400px;
  margin: 20px auto;
  position: relative;
  padding: 20px;
}

.movement-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.movement-btn {
  width: 60px !important;
  height: 60px !important;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  touch-action: manipulation;
}

.jump-btn {
  position: absolute;
  right: 20px;
  bottom: 20px;
  width: 60px !important;
  height: 60px !important;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  touch-action: manipulation;
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

/* 在手機上顯示虛擬按鈕 */
@media (max-width: 768px) {
  .virtual-controls {
    display: block;
  }

  .game-container {
    margin-bottom: 0;
  }

  canvas {
    max-width: 100%;
    height: auto;
  }

  /* 手機版對話框樣式 */
  .q-dialog__inner > div {
    width: 90% !important;
    max-width: 400px !important;
  }

  .q-card {
    padding: 16px;
  }

  .q-card .text-h6 {
    font-size: 1.5rem !important;
  }

  .q-card .text-subtitle1 {
    font-size: 1.2rem !important;
  }

  .q-card .text-h5 {
    font-size: 1.8rem !important;
  }

  /* 手機版遊戲標題和分數 */
  .game-title {
    font-size: 1.5rem !important;
  }

  .score-display {
    font-size: 1.3rem !important;
  }
}

.correct-answer-card {
  min-width: 300px;
  text-align: center;
}

.correct-answer-card .q-card-section {
  padding: 20px;
}

.correct-answer-card .text-h5 {
  color: #4caf50;
  font-weight: bold;
}

.correct-answer-card .text-subtitle1 {
  color: #666;
}

.wrong-answer-card {
  min-width: 300px;
  text-align: center;
}

.wrong-answer-card .q-card-section {
  padding: 20px;
}

.wrong-answer-card .text-h5 {
  color: #f44336;
  font-weight: bold;
}

.wrong-answer-card .text-subtitle1 {
  color: #666;
}
</style>
