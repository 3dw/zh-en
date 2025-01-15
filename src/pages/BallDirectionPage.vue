<template>
  <q-page class="q-pa-md">
    <div class="row items-center q-mb-md">
      <h1 class="col">
        <q-icon name="sports_basketball" size="md" color="orange" class="q-mr-sm" />
        方向指令遊戲 | Direction Commands Game
      </h1>
    </div>

    <div class="row q-col-gutter-md">
      <!-- 遊戲區域 -->
      <div class="col-12 col-md-8">
        <q-card class="game-board">
          <q-card-section>
            <!-- 遊戲網格 -->
            <div class="grid-container">
              <div v-for="(row, rowIndex) in grid" :key="rowIndex" class="grid-row">
                <div
                  v-for="(cell, colIndex) in row"
                  :key="colIndex"
                  class="grid-cell"
                  :class="{
                    'has-ball': isBallPosition(rowIndex, colIndex),
                    'has-basket': isBasketPosition(rowIndex, colIndex),
                  }"
                >
                  <q-icon
                    v-if="isBallPosition(rowIndex, colIndex)"
                    name="sports_basketball"
                    size="md"
                    color="orange"
                  />
                  <q-icon
                    v-if="isBasketPosition(rowIndex, colIndex)"
                    name="sports_basketball"
                    size="md"
                    color="grey"
                  />
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <!-- 指令輸入區 -->
      <div class="col-12 col-md-4">
        <q-card>
          <q-card-section>
            <div class="text-h6">方向指令 | Direction Commands</div>

            <div class="command-inputs q-mt-md">
              <q-input
                v-model.number="commands.up"
                type="number"
                label="Up (向上)"
                min="0"
                class="q-mb-sm"
              />
              <q-input
                v-model.number="commands.down"
                type="number"
                label="Down (向下)"
                min="0"
                class="q-mb-sm"
              />
              <q-input
                v-model.number="commands.left"
                type="number"
                label="Left (向左)"
                min="0"
                class="q-mb-sm"
              />
              <q-input
                v-model.number="commands.right"
                type="number"
                label="Right (向右)"
                min="0"
                class="q-mb-sm"
              />
            </div>

            <div class="q-mt-md">
              <q-btn
                color="primary"
                label="執行指令 | Execute"
                @click="executeCommands"
                class="full-width"
              />
              <q-btn
                color="secondary"
                label="重新開始 | Reset"
                @click="resetGame"
                class="full-width q-mt-sm"
              />
            </div>
          </q-card-section>
        </q-card>

        <!-- 指令提示 -->
        <q-card class="q-mt-md">
          <q-card-section>
            <div class="text-h6">指令說明 | Instructions</div>
            <div class="q-mt-sm">
              <p>請輸入數字來移動球：</p>
              <ul>
                <li>Up: 向上移動幾步</li>
                <li>Down: 向下移動幾步</li>
                <li>Left: 向左移動幾步</li>
                <li>Right: 向右移動幾步</li>
              </ul>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!-- 成功提示對話框 -->
    <q-dialog v-model="showSuccess">
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="celebration" color="primary" text-color="white" />
          <span class="q-ml-sm">恭喜！球進籃了！</span>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'BallDirectionPage',
  setup() {
    const GRID_SIZE = 8
    const grid = ref(
      Array(GRID_SIZE)
        .fill(null)
        .map(() => Array(GRID_SIZE).fill(null)),
    )

    const ballPosition = ref({ row: 6, col: 1 })
    const basketPosition = { row: 1, col: 6 }

    const commands = ref({
      up: 0,
      down: 0,
      left: 0,
      right: 0,
    })

    const showSuccess = ref(false)

    const isBallPosition = (row: number, col: number) => {
      return row === ballPosition.value.row && col === ballPosition.value.col
    }

    const isBasketPosition = (row: number, col: number) => {
      return row === basketPosition.row && col === basketPosition.col
    }

    const executeCommands = async () => {
      // 依序播放各個方向的指令
      const directions = [
        { name: 'up', value: commands.value.up },
        { name: 'down', value: commands.value.down },
        { name: 'left', value: commands.value.left },
        { name: 'right', value: commands.value.right },
      ]

      // 依序播放每個方向的指令
      for (const dir of directions) {
        if (dir.value > 0) {
          await new Promise((resolve) => {
            const utterance = new SpeechSynthesisUtterance(
              `Move ${dir.value} step${dir.value > 1 ? 's' : ''} ${dir.name}`,
            )
            utterance.lang = 'en-US'
            utterance.rate = 0.9
            utterance.onend = resolve
            speechSynthesis.speak(utterance)
          })
          // 等待一小段時間再播放下一個指令
          await new Promise((resolve) => setTimeout(resolve, 500))
        }
      }

      // 計算新位置
      let newRow = ballPosition.value.row - commands.value.up + commands.value.down
      let newCol = ballPosition.value.col - commands.value.left + commands.value.right

      // 確保在網格範圍內
      newRow = Math.max(0, Math.min(newRow, GRID_SIZE - 1))
      newCol = Math.max(0, Math.min(newCol, GRID_SIZE - 1))

      // 更新球的位置
      ballPosition.value = { row: newRow, col: newCol }

      // 檢查是否進籃
      if (newRow === basketPosition.row && newCol === basketPosition.col) {
        showSuccess.value = true
        // 播放成功提示音
        const successUtterance = new SpeechSynthesisUtterance(
          'Great job! The ball is in the basket!',
        )
        successUtterance.lang = 'en-US'
        speechSynthesis.speak(successUtterance)
      }

      // 重置指令
      commands.value = {
        up: 0,
        down: 0,
        left: 0,
        right: 0,
      }
    }

    const resetGame = () => {
      ballPosition.value = { row: 6, col: 1 }
      commands.value = {
        up: 0,
        down: 0,
        left: 0,
        right: 0,
      }
    }

    return {
      grid,
      commands,
      showSuccess,
      isBallPosition,
      isBasketPosition,
      executeCommands,
      resetGame,
    }
  },
})
</script>

<style scoped>
.grid-container {
  display: flex;
  flex-direction: column;
  gap: 2px;
  background-color: #eee;
  padding: 2px;
  border-radius: 8px;
}

.grid-row {
  display: flex;
  gap: 2px;
}

.grid-cell {
  width: 60px;
  height: 60px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
}

.has-ball {
  background-color: #fff3e0;
}

.has-basket {
  background-color: #e3f2fd;
}

.game-board {
  background-color: #f5f5f5;
}

@media (max-width: 600px) {
  .grid-cell {
    width: 40px;
    height: 40px;
  }
}
</style>
