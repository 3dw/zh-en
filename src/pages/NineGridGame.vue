<template>
  <q-page class="q-pa-md">
    <div class="row items-center q-mb-md">
      <h1 class="col">
        <q-icon name="grid_view" size="md" color="primary" class="q-mr-sm" />
        中英文九宮格對戰
      </h1>
    </div>

    <!-- 分數顯示 -->
    <div class="row q-mb-md justify-around">
      <div class="score-card" :class="{ 'current-player': currentPlayer === 'Buddha' }">
        <q-avatar color="deep-purple" text-color="white">B</q-avatar>
        <div class="text-h6 q-ml-sm">Buddha: {{ buddhaScore }}</div>
      </div>
      <div class="score-card" :class="{ 'current-player': currentPlayer === 'Guanyin' }">
        <q-avatar color="teal" text-color="white">G</q-avatar>
        <div class="text-h6 q-ml-sm">Guanyin: {{ guanyinScore }}</div>
      </div>
    </div>

    <!-- 九宮格 -->
    <div class="grid-container q-mb-lg">
      <div
        v-for="(cell, index) in grid"
        :key="index"
        class="grid-cell"
        :class="{ flipped: cell.flipped }"
        @click="showCellInfo(cell)"
      >
        <div class="cell-content">
          <div class="chinese">{{ cell.chinese }}</div>
          <div class="points" v-if="!cell.flipped">{{ cell.points }}分</div>
          <div class="owner" v-if="cell.flipped">
            <q-avatar :color="cell.owner === 'Buddha' ? 'deep-purple' : 'teal'" size="sm">
              {{ cell.owner === 'Buddha' ? 'B' : 'G' }}
            </q-avatar>
          </div>
        </div>
      </div>
    </div>

    <!-- 輸入區域 -->
    <div class="row q-gutter-md justify-center">
      <q-input
        v-model="answer"
        outlined
        :label="`${currentPlayer}的回答`"
        @keyup.enter="checkAnswer"
      >
        <template v-slot:append>
          <q-btn round dense flat icon="send" @click="checkAnswer" />
        </template>
      </q-input>
    </div>

    <!-- 遊戲結果對話框 -->
    <q-dialog v-model="showResult">
      <q-card>
        <q-card-section class="row items-center">
          <div class="text-h6">遊戲結束！</div>
        </q-card-section>
        <q-card-section>
          <div class="text-h6">Buddha: {{ buddhaScore }}分</div>
          <div class="text-h6">Guanyin: {{ guanyinScore }}分</div>
          <div class="text-h5 q-mt-md">
            {{ winner ? `${winner} 獲勝！` : '平手！' }}
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="重新開始" color="primary" @click="resetGame" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- 單字資訊對話框 -->
    <q-dialog v-model="showWordInfo">
      <q-card v-if="selectedCell">
        <q-card-section>
          <div class="text-h6">{{ selectedCell.chinese }}</div>
          <div class="text-subtitle2">{{ selectedCell.points }}分</div>
        </q-card-section>
        <q-card-section>
          <div>可接受的英文答案：</div>
          <div class="text-body1">{{ selectedCell.english.join(', ') }}</div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="關閉" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

interface GridCell {
  chinese: string
  english: string[]
  points: number
  flipped: boolean
  owner: string | null
}

export default defineComponent({
  name: 'NineGridGame',
  setup() {
    const grid = ref<GridCell[]>([
      { chinese: '愛', english: ['love', 'affection'], points: 5, flipped: false, owner: null },
      { chinese: '和平', english: ['peace'], points: 3, flipped: false, owner: null },
      { chinese: '智慧', english: ['wisdom'], points: 4, flipped: false, owner: null },
      { chinese: '慈悲', english: ['mercy', 'compassion'], points: 5, flipped: false, owner: null },
      {
        chinese: '寧靜',
        english: ['serenity', 'tranquility'],
        points: 4,
        flipped: false,
        owner: null,
      },
      { chinese: '善良', english: ['kindness'], points: 3, flipped: false, owner: null },
      { chinese: '信念', english: ['faith', 'belief'], points: 4, flipped: false, owner: null },
      { chinese: '勇氣', english: ['courage', 'bravery'], points: 3, flipped: false, owner: null },
      { chinese: '希望', english: ['hope'], points: 5, flipped: false, owner: null },
    ])

    const currentPlayer = ref('Buddha')
    const buddhaScore = ref(0)
    const guanyinScore = ref(0)
    const answer = ref('')
    const showResult = ref(false)
    const showWordInfo = ref(false)
    const selectedCell = ref<GridCell | null>(null)

    const winner = computed(() => {
      if (!showResult.value) return null
      if (buddhaScore.value > guanyinScore.value) return 'Buddha'
      if (guanyinScore.value > buddhaScore.value) return 'Guanyin'
      return null
    })

    function checkAnswer() {
      const lowerAnswer = answer.value.toLowerCase().trim()
      let found = false

      grid.value.forEach((cell) => {
        if (!cell.flipped && cell.english.includes(lowerAnswer)) {
          cell.flipped = true
          cell.owner = currentPlayer.value
          if (currentPlayer.value === 'Buddha') {
            buddhaScore.value += cell.points
          } else {
            guanyinScore.value += cell.points
          }
          found = true
        }
      })

      if (found) {
        // 檢查遊戲是否結束
        if (grid.value.every((cell) => cell.flipped)) {
          showResult.value = true
        }
      }

      // 切換玩家
      currentPlayer.value = currentPlayer.value === 'Buddha' ? 'Guanyin' : 'Buddha'
      answer.value = ''
    }

    function showCellInfo(cell: GridCell) {
      selectedCell.value = cell
      showWordInfo.value = true
    }

    function resetGame() {
      grid.value.forEach((cell) => {
        cell.flipped = false
        cell.owner = null
      })
      buddhaScore.value = 0
      guanyinScore.value = 0
      currentPlayer.value = 'Buddha'
      showResult.value = false
    }

    return {
      grid,
      currentPlayer,
      buddhaScore,
      guanyinScore,
      answer,
      showResult,
      showWordInfo,
      selectedCell,
      winner,
      checkAnswer,
      showCellInfo,
      resetGame,
    }
  },
})
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  max-width: 600px;
  margin: 0 auto;
}

.grid-cell {
  aspect-ratio: 1;
  background-color: #f5f5f5;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.grid-cell:hover {
  transform: scale(1.02);
}

.cell-content {
  text-align: center;
}

.chinese {
  font-size: 2rem;
  margin-bottom: 8px;
}

.points {
  font-size: 1rem;
  color: #666;
}

.flipped {
  background-color: #e0e0e0;
}

.score-card {
  display: flex;
  align-items: center;
  padding: 12px 24px;
  border-radius: 8px;
  background-color: #f5f5f5;
  transition: all 0.3s ease;
}

.current-player {
  background-color: #e3f2fd;
  transform: scale(1.05);
}

.owner {
  margin-top: 8px;
}
</style>
