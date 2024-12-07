<template>
  <q-page class="q-pa-md">
    <div class="word-card-list">
      <h1>常用英文數字字卡(可朗讀)</h1>
      <div class="search-bar">
        <q-input
          v-model="searchQuery"
          placeholder="輸入關鍵字搜尋（中或英）"
          outlined
          dense
          class="q-mb-md"
        />
      </div>
      <div class="cards-container">
        <div
          class="card"
          v-for="(sentence, index) in filteredSentences"
          :key="index"
          @click="toggleCard(index)"
        >
          <div class="card-inner" :class="{ flipped: sentence.flipped }">
            <div class="card-front" v-show="!sentence.flipped">
              <p>{{ sentence.chinese }}</p>
            </div>
            <div class="card-back" v-show="sentence.flipped">
              <p>{{ sentence.english }}</p>
              <q-btn
                @click.stop="speak(sentence.english)"
                icon="volume_up"
                flat
                round
                color="primary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'NumberPage',

  setup() {
    const searchQuery = ref('')
    const sentences = ref([
      {
        chinese: '一、二、三、四、五、六、七、八、九、十',
        english: 'One, two, three, four, five, six, seven, eight, nine, ten',
        flipped: false,
      },
      { chinese: '一加一等於二。', english: 'One plus one equals two.', flipped: false },
      { chinese: '二乘以二等於四。', english: 'Two times two equals four.', flipped: false },
      { chinese: '十除以二等於五。', english: 'Ten divided by two equals five.', flipped: false },
      { chinese: '這個數字太大了。', english: 'This number is too big.', flipped: false },
      { chinese: '請數到十。', english: 'Please count to ten.', flipped: false },
      { chinese: '答案是多少？', english: 'What is the answer?', flipped: false },
      { chinese: '這題很簡單。', english: 'This problem is easy.', flipped: false },
      { chinese: '我需要計算機。', english: 'I need a calculator.', flipped: false },
      { chinese: '這是百分之五十。', english: 'This is fifty percent.', flipped: false },
      { chinese: '總共是一百元。', english: 'The total is one hundred dollars.', flipped: false },
      { chinese: '現在是三點半。', english: "It's three thirty.", flipped: false },
      { chinese: '這個數字是奇數。', english: 'This number is odd.', flipped: false },
      { chinese: '那是偶數。', english: 'That is an even number.', flipped: false },
      { chinese: '請寫下這個數字。', english: 'Please write down this number.', flipped: false },
      { chinese: '答案是負數。', english: 'The answer is negative.', flipped: false },
      { chinese: '這是正確答案。', english: 'This is the correct answer.', flipped: false },
      {
        chinese: '我們來解這道數學題。',
        english: "Let's solve this math problem.",
        flipped: false,
      },
      { chinese: '這是小數點。', english: 'This is a decimal point.', flipped: false },
      { chinese: '四捨五入。', english: 'Round up or down.', flipped: false },
      { chinese: '加起來等於多少？', english: 'What is the sum?', flipped: false },
      { chinese: '這是分數。', english: 'This is a fraction.', flipped: false },
      { chinese: '請計算平均數。', english: 'Please calculate the average.', flipped: false },
      { chinese: '這個數字太小了。', english: 'This number is too small.', flipped: false },
      { chinese: '零等於零。', english: 'Zero equals zero.', flipped: false },
      { chinese: '這是無限大。', english: 'This is infinity.', flipped: false },
      { chinese: '讓我們數數看。', english: "Let's count.", flipped: false },
      { chinese: '這是方程式。', english: 'This is an equation.', flipped: false },
      { chinese: '我們需要加法。', english: 'We need addition.', flipped: false },
      { chinese: '用減法解決。', english: 'Solve it with subtraction.', flipped: false },
      { chinese: '這是乘法表。', english: 'This is the multiplication table.', flipped: false },
      { chinese: '除以二。', english: 'Divide by two.', flipped: false },
      { chinese: '這是根號。', english: 'This is a square root.', flipped: false },
      { chinese: '計算面積。', english: 'Calculate the area.', flipped: false },
      { chinese: '這是圓周率。', english: 'This is pi.', flipped: false },
      { chinese: '數字排序。', english: 'Sort the numbers.', flipped: false },
      { chinese: '這是最大值。', english: 'This is the maximum.', flipped: false },
      { chinese: '找出最小值。', english: 'Find the minimum.', flipped: false },
      { chinese: '計算總和。', english: 'Calculate the total.', flipped: false },
      { chinese: '這是百分比。', english: 'This is a percentage.', flipped: false },
      { chinese: '四則運算。', english: 'The four basic operations.', flipped: false },
      { chinese: '這是直角三角形。', english: 'This is a right triangle.', flipped: false },
      { chinese: '計算周長。', english: 'Calculate the perimeter.', flipped: false },
      { chinese: '這是等式。', english: 'This is an equation.', flipped: false },
      { chinese: '求解未知數。', english: 'Solve for the unknown.', flipped: false },
      { chinese: '這是座標。', english: 'These are coordinates.', flipped: false },
      { chinese: '畫出圖形。', english: 'Draw the shape.', flipped: false },
      { chinese: '計算體積。', english: 'Calculate the volume.', flipped: false },
      { chinese: '這是數列。', english: 'This is a sequence.', flipped: false },
      { chinese: '找出規律。', english: 'Find the pattern.', flipped: false },
      { chinese: '這是指數。', english: 'This is an exponent.', flipped: false },
    ])

    const filteredSentences = computed(() => {
      const query = searchQuery.value.toLowerCase().trim()
      if (!query) return sentences.value
      return sentences.value.filter((sentence) => {
        return (
          sentence.chinese.toLowerCase().includes(query) ||
          sentence.english.toLowerCase().includes(query)
        )
      })
    })

    const toggleCard = (index: number) => {
      const sentence = filteredSentences.value[index]
      if (!sentence) return

      const originalIndex = sentences.value.findIndex(
        (s) => s.chinese === sentence.chinese && s.english === sentence.english,
      )
      if (originalIndex !== -1) {
        if (!sentences.value[originalIndex]) return
        sentences.value[originalIndex].flipped = !sentences.value[originalIndex].flipped
      }
    }

    const speak = (text: string) => {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'en-US'
      window.speechSynthesis.speak(utterance)
    }

    return {
      searchQuery,
      sentences,
      filteredSentences,
      toggleCard,
      speak,
    }
  },
})
</script>

<style scoped>
/* 保留原有的樣式，但移除與 Quasar 衝突的部份 */
.word-card-list {
  max-width: 800px;
  margin: 0 auto;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.card {
  position: relative;
  padding: 10px;
  width: 200px;
  height: 200px;
  perspective: 1000px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-inner {
  font-size: 20px;
}
</style>
