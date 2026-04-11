<template>
  <q-page class="q-pa-md">
    <div class="word-card-list">
      <h1>英文數字(點擊空白處切換中英文)</h1>
      <div class="search-bar q-mb-md">
        <q-input v-model="searchQuery" placeholder="輸入關鍵字搜尋（中或英）" outlined dense />
        <q-select
          v-model="selectedStructure"
          :options="structureOptions"
          label="選擇句型"
          outlined
          dense
          class="q-ml-md"
          style="min-width: 150px"
        />
      </div>
      <flash-card
        :sentences="sentences"
        :searchQuery="searchQuery"
        :selectedStructure="selectedStructure"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import FlashCard from 'src/components/FlashCard.vue'
import { getSentenceStructure } from 'src/utils/sentenceStructure'

export default defineComponent({
  name: 'NumberPage',
  components: {
    FlashCard,
  },

  setup() {
    const searchQuery = ref('')
    const selectedStructure = ref('全部')
    const structureOptions = ['全部', '肯定句', '疑問句', '祈使句']
    const sentences = ref([
      {
        chinese: '一、二、三、四、五、六、七、八、九、十',
        english: 'One, two, three, four, five, six, seven, eight, nine, ten',
        flipped: false,
        image: '/images/number/counting.webp',
        structure: getSentenceStructure(
          'One, two, three, four, five, six, seven, eight, nine, ten',
          '一、二、三、四、五、六、七、八、九、十',
        ),
      },
      {
        chinese: '一加一等於二。',
        english: 'One plus one equals two.',
        flipped: false,
        image: '/images/number/addition.webp',
        structure: getSentenceStructure('One plus one equals two.', '一加一等於二。'),
      },
      {
        chinese: '二乘以二等於四。',
        english: 'Two times two equals four.',
        flipped: false,
        image: '/images/number/multiplication.webp',
        structure: getSentenceStructure('Two times two equals four.', '二乘以二等於四。'),
      },
      {
        chinese: '十除以二等於五。',
        english: 'Ten divided by two equals five.',
        flipped: false,
        image: '/images/number/division.webp',
        structure: getSentenceStructure('Ten divided by two equals five.', '十除以二等於五。'),
      },
      {
        chinese: '這個數字太大了。',
        english: 'This number is too big.',
        flipped: false,
        image: '/images/number/big_number.webp',
        structure: getSentenceStructure('This number is too big.', '這個數字太大了。'),
      },
      {
        chinese: '請數到十。',
        english: 'Please count to ten.',
        flipped: false,
        image: '/images/number/count_to_ten.webp',
        structure: getSentenceStructure('Please count to ten.', '請數到十。'),
      },
      {
        chinese: '答案是多少？',
        english: 'What is the answer?',
        flipped: false,
        image: '/images/number/answer.webp',
        structure: getSentenceStructure('What is the answer?', '答案是多少？'),
      },
      {
        chinese: '這題很簡單。',
        english: 'This problem is easy.',
        flipped: false,
        image: '/images/number/easy.webp',
        structure: getSentenceStructure('This problem is easy.', '這題很簡單。'),
      },
      {
        chinese: '我需要計算機。',
        english: 'I need a calculator.',
        flipped: false,
        image: '/images/number/calculator.webp',
        structure: getSentenceStructure('I need a calculator.', '我需要計算機。'),
      },
      {
        chinese: '這是百分之五十。',
        english: 'This is fifty percent.',
        flipped: false,
        image: '/images/number/fifty_percent.webp',
        structure: getSentenceStructure('This is fifty percent.', '這是百分之五十。'),
      },
      {
        chinese: '總共是一百元。',
        english: 'The total is one hundred dollars.',
        flipped: false,
        image: '/images/number/total_hundred.webp',
        structure: getSentenceStructure('The total is one hundred dollars.', '總共是一百元。'),
      },
      {
        chinese: '現在是三點半。',
        english: "It's three thirty.",
        flipped: false,
        image: '/images/number/time.webp',
        structure: getSentenceStructure("It's three thirty.", '現在是三點半。'),
      },
      {
        chinese: '這個數字是奇數。',
        english: 'This number is odd.',
        flipped: false,
        image: '/images/number/odd.webp',
        structure: getSentenceStructure('This number is odd.', '這個數字是奇數。'),
      },
      {
        chinese: '那是偶數。',
        english: 'That is an even number.',
        flipped: false,
        image: '/images/number/even.webp',
        structure: getSentenceStructure('That is an even number.', '那是偶數。'),
      },
      {
        chinese: '請寫下這個數字。',
        english: 'Please write down this number.',
        flipped: false,
        image: '/images/number/write_number.webp',
        structure: getSentenceStructure('Please write down this number.', '請寫下這個數字。'),
      },
      {
        chinese: '答案是負數。',
        english: 'The answer is negative.',
        flipped: false,
        image: '/images/number/negative.webp',
        structure: getSentenceStructure('The answer is negative.', '答案是負數。'),
      },
      {
        chinese: '這是正確答案。',
        english: 'This is the correct answer.',
        flipped: false,
        image: '/images/number/correct_answer.webp',
        structure: getSentenceStructure('This is the correct answer.', '這是正確答案。'),
      },
      {
        chinese: '我們來解這道數學題。',
        english: "Let's solve this math problem.",
        flipped: false,
        image: '/images/number/math_problem.webp',
        structure: getSentenceStructure("Let's solve this math problem.", '我們來解這道數學題。'),
      },
      {
        chinese: '這是小數點。',
        english: 'This is a decimal point.',
        flipped: false,
        image: '/images/number/decimal.webp',
        structure: getSentenceStructure('This is a decimal point.', '這是小數點。'),
      },
      {
        chinese: '四捨五入。',
        english: 'Round up or down.',
        flipped: false,
        image: '/images/number/round.webp',
        structure: getSentenceStructure('Round up or down.', '四捨五入。'),
      },
      {
        chinese: '加起來等於多少？',
        english: 'What is the sum?',
        flipped: false,
        image: '/images/number/sum.webp',
        structure: getSentenceStructure('What is the sum?', '加起來等於多少？'),
      },
      {
        chinese: '這是分數。',
        english: 'This is a fraction.',
        flipped: false,
        image: '/images/number/fraction.webp',
        structure: getSentenceStructure('This is a fraction.', '這是分數。'),
      },
      {
        chinese: '請計算平均數。',
        english: 'Please calculate the average.',
        flipped: false,
        image: '/images/number/average.webp',
        structure: getSentenceStructure('Please calculate the average.', '請計算平均數。'),
      },
      {
        chinese: '這個數字太小了。',
        english: 'This number is too small.',
        flipped: false,
        image: '/images/number/small_number.webp',
        structure: getSentenceStructure('This number is too small.', '這個數字太小了。'),
      },
      {
        chinese: '零等於零。',
        english: 'Zero equals zero.',
        flipped: false,
        image: '/images/number/zero.webp',
        structure: getSentenceStructure('Zero equals zero.', '零等於零。'),
      },
      {
        chinese: '這是無限大。',
        english: 'This is infinity.',
        flipped: false,
        image: '/images/number/infinity.webp',
        structure: getSentenceStructure('This is infinity.', '這是無限大。'),
      },
      {
        chinese: '讓我們數數看。',
        english: "Let's count.",
        flipped: false,
        image: '/images/number/lets_count.webp',
        structure: getSentenceStructure("Let's count.", '讓我們數數看。'),
      },
      {
        chinese: '這是方程式。',
        english: 'This is an equation.',
        flipped: false,
        image: '/images/number/equation.webp',
        structure: getSentenceStructure('This is an equation.', '這是方程式。'),
      },
      {
        chinese: '我們需要加法。',
        english: 'We need addition.',
        flipped: false,
        image: '/images/number/need_addition.webp',
        structure: getSentenceStructure('We need addition.', '我們需要加法。'),
      },
      {
        chinese: '用減法解決。',
        english: 'Solve it with subtraction.',
        flipped: false,
        image: '/images/number/subtraction.webp',
        structure: getSentenceStructure('Solve it with subtraction.', '用減法解決。'),
      },
      {
        chinese: '這是乘法表。',
        english: 'This is the multiplication table.',
        flipped: false,
        image: '/images/number/multiplication_table.webp',
        structure: getSentenceStructure('This is the multiplication table.', '這是乘法表。'),
      },
      {
        chinese: '除以二。',
        english: 'Divide by two.',
        flipped: false,
        image: '/images/number/divide_by_two.webp',
        structure: getSentenceStructure('Divide by two.', '除以二。'),
      },
      {
        chinese: '這是根號。',
        english: 'This is a square root.',
        flipped: false,
        image: '/images/number/square_root.webp',
        structure: getSentenceStructure('This is a square root.', '這是根號。'),
      },
      {
        chinese: '計算面積。',
        english: 'Calculate the area.',
        flipped: false,
        image: '/images/number/area.webp',
        structure: getSentenceStructure('Calculate the area.', '計算面積。'),
      },
      {
        chinese: '這是圓周率。',
        english: 'This is pi.',
        flipped: false,
        image: '/images/number/pi.webp',
        structure: getSentenceStructure('This is pi.', '這是圓周率。'),
      },
      {
        chinese: '數字排序。',
        english: 'Sort the numbers.',
        flipped: false,
        image: '/images/number/sort_numbers.webp',
        structure: getSentenceStructure('Sort the numbers.', '數字排序。'),
      },
      {
        chinese: '這是最大值。',
        english: 'This is the maximum.',
        flipped: false,
        image: '/images/number/maximum.webp',
        structure: getSentenceStructure('This is the maximum.', '這是最大值。'),
      },
      {
        chinese: '找出最小值。',
        english: 'Find the minimum.',
        flipped: false,
        image: '/images/number/minimum.webp',
        structure: getSentenceStructure('Find the minimum.', '找出最小值。'),
      },
      {
        chinese: '計算總和。',
        english: 'Calculate the total.',
        flipped: false,
        image: '/images/number/calculate_total.webp',
        structure: getSentenceStructure('Calculate the total.', '計算總和。'),
      },
      {
        chinese: '這是百分比。',
        english: 'This is a percentage.',
        flipped: false,
        image: '/images/number/percentage.webp',
        structure: getSentenceStructure('This is a percentage.', '這是百分比。'),
      },
      {
        chinese: '四則運算。',
        english: 'The four basic operations.',
        flipped: false,
        image: '/images/number/four_operations.webp',
        structure: getSentenceStructure('The four basic operations.', '四則運算。'),
      },
      {
        chinese: '這是直角三角形。',
        english: 'This is a right triangle.',
        flipped: false,
        image: '/images/number/right_triangle.webp',
        structure: getSentenceStructure('This is a right triangle.', '這是直角三角形。'),
      },
      {
        chinese: '計算周長。',
        english: 'Calculate the perimeter.',
        flipped: false,
        image: '/images/number/perimeter.webp',
        structure: getSentenceStructure('Calculate the perimeter.', '計算周長。'),
      },
      {
        chinese: '這是等式。',
        english: 'This is an equation.',
        flipped: false,
        image: '/images/number/equality.webp',
        structure: getSentenceStructure('This is an equation.', '這是等式。'),
      },
      {
        chinese: '求解未知數。',
        english: 'Solve for the unknown.',
        flipped: false,
        image: '/images/number/unknown.webp',
        structure: getSentenceStructure('Solve for the unknown.', '求解未知數。'),
      },
      {
        chinese: '這是座標。',
        english: 'These are coordinates.',
        flipped: false,
        image: '/images/number/coordinates.webp',
        structure: getSentenceStructure('These are coordinates.', '這是座標。'),
      },
      {
        chinese: '畫出圖形。',
        english: 'Draw the shape.',
        flipped: false,
        image: '/images/number/draw_shape.webp',
        structure: getSentenceStructure('Draw the shape.', '畫出圖形。'),
      },
      {
        chinese: '計算體積。',
        english: 'Calculate the volume.',
        flipped: false,
        image: '/images/number/volume.webp',
        structure: getSentenceStructure('Calculate the volume.', '計算體積。'),
      },
      {
        chinese: '這是數列。',
        english: 'This is a sequence.',
        flipped: false,
        image: '/images/number/sequence.webp',
        structure: getSentenceStructure('This is a sequence.', '這是數列。'),
      },
      {
        chinese: '找出規律。',
        english: 'Find the pattern.',
        flipped: false,
        image: '/images/number/pattern.webp',
        structure: getSentenceStructure('Find the pattern.', '找出規律。'),
      },
      {
        chinese: '這是指數。',
        english: 'This is an exponent.',
        flipped: false,
        image: '/images/number/exponent.webp',
        structure: getSentenceStructure('This is an exponent.', '這是指數。'),
      },
    ])

    return {
      searchQuery,
      selectedStructure,
      structureOptions,
      sentences,
    }
  },
})
</script>

<style scoped lang="scss">
/* 與 MainLayout/其他頁面風格一致 */
.op-page {
  background-color: #f4f1eb;
  font-size: 1.1rem;
}

.word-card-list {
  max-width: 1000px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
}

.page-title {
  margin-bottom: 16px;
  font-size: 1.4rem;
  font-weight: 600;
  color: #3e3e3e;
}

.search-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
