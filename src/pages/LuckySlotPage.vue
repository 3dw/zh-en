<template>
    <q-page class="flex flex-center column">
      <div v-if="!currentUser" class="text-center q-pa-lg">
        <q-icon name="lock" size="50px" color="grey-5" />
        <p class="text-h6 q-mt-md">請先登入以使用拉霸機</p>
        <q-btn color="primary" label="登入" to="/login" />
      </div>
  
      <template v-else>
        <div class="text-h4 q-mb-md">🎉 每天拉100次，強化你的英文力！</div>
  
        <div class="slot-machine-container">
          <canvas ref="slotCanvas" width="600" height="400"></canvas>
        </div>
  
        <q-btn
          color="primary"
          class="q-mt-lg"
          :disable="!canPlay"
          @click="pullLever"
        >
          {{ canPlay ? '拉霸開始！' : '今日已玩過' }}
        </q-btn>
  
        <div v-if="result" class="result-container q-mt-lg">
          <div class="text-h5">{{ result.title }}</div>
          <div class="text-body1">{{ result.description }}</div>
          <q-btn
            v-if="result.task"
            color="secondary"
            class="q-mt-sm"
            @click="startTask"
          >
            開始任務
          </q-btn>
        </div>
      </template>
    </q-page>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted, nextTick } from 'vue'
  import type { User } from 'firebase/auth';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
  
  interface Result {
    title: string
    description: string
    task?: string
    points: number
  }
  
  export default defineComponent({
    name: 'LuckySlotPage',
    setup() {
      const slotCanvas = ref<HTMLCanvasElement | null>(null)
      const ctx = ref<CanvasRenderingContext2D | null>(null)
      const canPlay = ref(true)
      const currentUser = ref<User | null>(null)
      const result = ref<Result | null>(null)
  
      const initCanvas = () => {
        if (!slotCanvas.value) {
          console.error('❌ slotCanvas 未掛載')
          return
        }
        ctx.value = slotCanvas.value.getContext('2d')
        if (!ctx.value) {
          console.error('❌ 無法取得 Canvas 繪圖上下文')
          return
        }
  
        console.log('✅ Canvas 初始化成功')
        drawSlotMachine()
      }
  
      const drawSlotMachine = () => {
        if (!slotCanvas.value || !ctx.value) {
          console.warn('❗ drawSlotMachine called before canvas ready')
          return
        }
  
        console.log('🎨 正在繪製拉霸機畫面...')
        const canvas = slotCanvas.value
        const context = ctx.value
        context.clearRect(0, 0, canvas.width, canvas.height)
  
        context.fillStyle = '#d4af37'
        context.fillRect(50, 100, 500, 200)
  
        context.fillStyle = '#fff'
        context.fillRect(120, 150, 100, 100)
        context.fillRect(250, 150, 100, 100)
        context.fillRect(380, 150, 100, 100)
  
        context.font = '48px Arial'
        context.textAlign = 'center'
        context.textBaseline = 'middle'
        context.fillStyle = '#000'
        context.fillText('🍎', 170, 200)
        context.fillText('7️⃣', 300, 200)
        context.fillText('🎸', 430, 200)
  
        context.strokeStyle = '#000'
        context.lineWidth = 3
        context.strokeRect(120, 150, 100, 100)
        context.strokeRect(250, 150, 100, 100)
        context.strokeRect(380, 150, 100, 100)
      }
  
      const pullLever = () => {
        if (!canPlay.value) return
        drawSlotMachine() // 暫時用靜態圖代替
        result.value = {
          title: '雙七組合！',
          description: '恭喜獲得 Bonus 問答題！',
          task: '開始問答',
          points: 5
        }
      }
  
      const startTask = () => {
        alert('開始任務！')
      }
  
      onMounted(() => {
        const auth = getAuth()
        onAuthStateChanged(auth, user => {
          currentUser.value = user
        })
  
        nextTick(() => {
          initCanvas()
        })
      })
  
      return {
        slotCanvas,
        canPlay,
        result,
        currentUser,
        pullLever,
        startTask
      }
    }
  })
  </script>
  
  <style scoped>
  .slot-machine-container {
    background-color: transparent;
    padding: 0;
    margin-top: 20px;
  }
  
  canvas {
    display: block;
    margin: 0 auto;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
  
  .result-container {
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    max-width: 500px;
  }
  </style>
  