<template>
  <q-page class="q-pa-md">
    <div class="row items-center q-mb-md">
      <h1 class="col">
        <q-icon name="calculate" size="md" color="primary" class="q-mr-sm" />
        數學符號學習 | Math Symbols Learning
      </h1>
    </div>

    <div class="row q-col-gutter-md justify-center">
      <div
        v-for="(symbol, index) in mathSymbols"
        :key="index"
        class="col-6 col-sm-4 col-md-3 col-lg-2"
      >
        <q-card
          class="symbol-card cursor-pointer"
          :class="{ highlighted: symbol.isActive }"
          @click="handleCardClick(symbol)"
        >
          <q-card-section class="text-center">
            <div class="symbol-text" :style="{ color: symbol.color }">
              {{ symbol.symbol }}
            </div>
            <div class="text-subtitle1 text-weight-bold">{{ symbol.name }}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

interface MathSymbol {
  symbol: string
  name: string
  isActive: boolean
  color: string
}

export default defineComponent({
  name: 'MathImagePage',
  setup() {
    const mathSymbols = ref<MathSymbol[]>([
      { symbol: '+', name: 'Plus', isActive: false, color: '#FF4081' }, // 粉紅色
      { symbol: '-', name: 'Minus', isActive: false, color: '#4CAF50' }, // 綠色
      { symbol: '÷', name: 'Divide', isActive: false, color: '#2196F3' }, // 藍色
      { symbol: '×', name: 'Multiply', isActive: false, color: '#FFC107' }, // 黃色
      { symbol: '%', name: 'Percent', isActive: false, color: '#3F51B5' }, // 靛藍色
      { symbol: '=', name: 'Equal', isActive: false, color: '#E91E63' }, // 紅色
      { symbol: 'π', name: 'Pi', isActive: false, color: '#00BCD4' }, // 青色
      { symbol: '√', name: 'Square root', isActive: false, color: '#FF5722' }, // 橙色
      { symbol: '±', name: 'Plus-minus', isActive: false, color: '#9C27B0' }, // 紫色
      { symbol: '∓', name: 'Minus-plus', isActive: false, color: '#009688' }, // 藍綠色
      { symbol: '( )', name: 'Parentheses', isActive: false, color: '#FF9800' }, // 橘色
      { symbol: '[ ]', name: 'Brackets', isActive: false, color: '#795548' }, // 棕色
      { symbol: '≠', name: 'Not equal', isActive: false, color: '#F44336' }, // 紅色
      { symbol: '>', name: 'Greater than', isActive: false, color: '#673AB7' }, // 深紫色
      { symbol: '<', name: 'Less than', isActive: false, color: '#8BC34A' }, // 淺綠色
      { symbol: 'Σ', name: 'Sum of', isActive: false, color: '#607D8B' }, // 藍灰色
      { symbol: 'β', name: 'Beta', isActive: false, color: '#03A9F4' }, // 淺藍色
      { symbol: 'α', name: 'Alpha', isActive: false, color: '#9575CD' }, // 淺紫色
      { symbol: '∫', name: 'Integral', isActive: false, color: '#FF4081' }, // 粉紅色
      { symbol: 'Ø', name: 'Empty set', isActive: false, color: '#455A64' }, // 深灰色
      { symbol: '∵', name: 'Because', isActive: false, color: '#F06292' }, // 淺粉色
      { symbol: '∴', name: 'Therefore', isActive: false, color: '#7E57C2' }, // 中紫色
      { symbol: '∞', name: 'Infinity', isActive: false, color: '#000000' }, // 黑色
      { symbol: '*', name: 'Asterisk', isActive: false, color: '#FF5252' }, // 亮紅色
    ])

    const handleCardClick = (symbol: MathSymbol) => {
      // 播放英文語音
      const utterance = new SpeechSynthesisUtterance(symbol.name)
      utterance.lang = 'en-US'
      utterance.rate = 0.9
      speechSynthesis.speak(utterance)

      // 設置高亮效果
      symbol.isActive = true
      setTimeout(() => {
        symbol.isActive = false
      }, 1000) // 1秒後恢復原色
    }

    return {
      mathSymbols,
      handleCardClick,
    }
  },
})
</script>

<style scoped>
.symbol-card {
  transition: all 0.3s ease;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.symbol-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.highlighted {
  background-color: #fff9c4; /* 淡黃色背景 */
}

.symbol-text {
  font-size: 2.5em;
  margin-bottom: 8px;
  font-weight: bold;
}

.text-subtitle1 {
  font-size: 1em;
  color: #424242;
}

@media (max-width: 600px) {
  .symbol-card {
    height: 100px;
  }

  .symbol-text {
    font-size: 2em;
  }

  .text-subtitle1 {
    font-size: 0.9em;
  }
}
</style>
