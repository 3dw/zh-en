<template>
  <q-page class="q-pa-md">
    <div class="row items-center q-mb-md">
      <h1 class="col">
        <q-icon name="sports_kabaddi" size="md" color="primary" class="q-mr-sm" />
        相反詞拔河遊戲
      </h1>
    </div>

    <div class="row justify-center">
      <div class="col-12 col-md-8">
        <!-- 分數顯示 -->
        <div class="text-h6 text-center q-mb-md">
          得分：<span class="text-positive">{{ score }}</span>
        </div>

        <!-- 拔河區域 -->
        <q-card class="q-pa-md">
          <div v-if="currentPair" class="tug-of-war">
            <!-- 左側短語 -->
            <div class="phrase-container left-phrase">
              <q-img
                :src="currentPair.leftImage"
                class="phrase-image"
                :alt="currentPair.leftPhrase"
              />
              <div class="phrase-text">
                <div class="text-h5">{{ currentPair.leftPhrase }}</div>
                <div class="text-subtitle2">{{ currentPair.leftTranslation }}</div>
                <q-btn
                  round
                  color="primary"
                  icon="volume_up"
                  @click="speakPhrase(currentPair.leftPhrase)"
                  class="q-mt-sm"
                />
              </div>
            </div>

            <!-- 拔河線 -->
            <div class="tug-line">
              <div class="line-container">
                <div class="arrow left-arrow">←</div>
                <div class="line"></div>
                <div class="arrow right-arrow">→</div>
                <div
                  class="tug-point"
                  :style="{ left: `${tugPosition}%` }"
                  :class="{ 'point-moving': isMoving }"
                ></div>
              </div>
            </div>

            <!-- 右側短語 -->
            <div class="phrase-container right-phrase">
              <q-img
                :src="currentPair.rightImage"
                class="phrase-image"
                :alt="currentPair.rightPhrase"
              />
              <div class="phrase-text">
                <div class="text-h5">{{ currentPair.rightPhrase }}</div>
                <div class="text-subtitle2">{{ currentPair.rightTranslation }}</div>
                <q-btn
                  round
                  color="primary"
                  icon="volume_up"
                  @click="speakPhrase(currentPair.rightPhrase)"
                  class="q-mt-sm"
                />
              </div>
            </div>
          </div>

          <!-- 下一組按鈕 -->
          <div class="text-center q-mt-lg">
            <q-btn
              color="primary"
              label="下一組"
              @click="nextPair"
              icon-right="arrow_forward"
              :disable="currentIndex >= phrasePairs.length - 1"
            />
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

interface PhrasePair {
  leftPhrase: string
  rightPhrase: string
  leftTranslation: string
  rightTranslation: string
  leftImage: string
  rightImage: string
}

export default defineComponent({
  name: 'OppositesGamePage',

  setup() {
    const phrasePairs: PhrasePair[] = [
      {
        leftPhrase: 'Put on',
        rightPhrase: 'Take off',
        leftTranslation: '穿上、戴上',
        rightTranslation: '脫下、摘下',
        leftImage: '/images/phrasal-verbs/put-on.png',
        rightImage: '/images/phrasal-verbs/take-off.png',
      },
      {
        leftPhrase: 'Pick up',
        rightPhrase: 'Pick off',
        leftTranslation: '撿起',
        rightTranslation: '摘下',
        leftImage: '/images/phrasal-verbs/pick-up.png',
        rightImage: '/images/phrasal-verbs/pick-off.png',
      },
      {
        leftPhrase: 'Get on',
        rightPhrase: 'Get off',
        leftTranslation: '上車、搭乘',
        rightTranslation: '下車、離開',
        leftImage: '/images/phrasal-verbs/get-on.png',
        rightImage: '/images/phrasal-verbs/get-off.png',
      },
      {
        leftPhrase: 'Run after',
        rightPhrase: 'Run away',
        leftTranslation: '追趕、追逐',
        rightTranslation: '逃跑、逃離',
        leftImage: '/images/phrasal-verbs/run-after.png',
        rightImage: '/images/phrasal-verbs/run-away.png',
      },
      {
        leftPhrase: 'Speed up',
        rightPhrase: 'Slow down',
        leftTranslation: '加速、加快',
        rightTranslation: '減速、放慢',
        leftImage: '/images/phrasal-verbs/speed-up.png',
        rightImage: '/images/phrasal-verbs/slow-down.png',
      },
    ]

    const currentIndex = ref(0)
    const score = ref(0)
    const tugPosition = ref(50) // 拔河點的位置（百分比）
    const isMoving = ref(false)

    const currentPair = computed(() => phrasePairs[currentIndex.value])

    // 播放語音
    const speakPhrase = (text: string) => {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'en-US'
      utterance.rate = 0.8
      speechSynthesis.speak(utterance)

      // 移動拔河點
      isMoving.value = true
      const isLeft = text === currentPair.value?.leftPhrase
      const targetPosition = isLeft ? tugPosition.value - 10 : tugPosition.value + 10
      tugPosition.value = Math.max(0, Math.min(100, targetPosition))

      setTimeout(() => {
        isMoving.value = false
      }, 500)
    }

    // 下一組
    const nextPair = () => {
      if (currentIndex.value < phrasePairs.length - 1) {
        currentIndex.value++
        tugPosition.value = 50 // 重置拔河點位置
      }
    }

    return {
      currentPair,
      currentIndex,
      score,
      tugPosition,
      isMoving,
      speakPhrase,
      nextPair,
      phrasePairs,
    }
  },
})
</script>

<style scoped>
.tug-of-war {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  position: relative;
  min-height: 400px; /* 確保有足夠的空間 */
}

.tug-line {
  flex: 1;
  position: relative;
  height: 4px;
  margin: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.line-container {
  width: 100%;
  position: relative;
  height: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.line {
  width: 100%;
  height: 6px;
  background: linear-gradient(to right, #ff9800, #f44336);
  position: relative;
  border-radius: 3px;
}

.arrow {
  position: absolute;
  font-size: 24px;
  color: #666;
}

.left-arrow {
  left: -30px;
}

.right-arrow {
  right: -30px;
}

.tug-point {
  position: absolute;
  top: 50%;
  width: 24px;
  height: 24px;
  background-color: #f44336;
  border: 3px solid #fff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: left 0.5s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.point-moving {
  animation: pulse 0.5s ease infinite;
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
}

.phrase-container {
  flex: 0 0 35%; /* 固定寬度，避免擠壓中間的拔河線 */
  text-align: center;
  padding: 1rem;
}

.phrase-image {
  width: 150px;
  height: 150px;
  margin: 0 auto;
  border-radius: 8px;
}

.phrase-text {
  margin-top: 1rem;
}

.left-phrase,
.right-phrase {
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.left-phrase:hover,
.right-phrase:hover {
  opacity: 1;
}
</style>
