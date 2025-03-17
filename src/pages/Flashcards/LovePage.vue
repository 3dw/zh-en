<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md">
      <h2>愛情相關單字</h2>

      <div class="row q-col-gutter-md">
        <div v-for="(word, index) in words" :key="index" class="col-12 col-sm-6 col-md-4">
          <q-card class="word-card" @click="flipCard(index)">
            <q-card-section :class="{ flipped: flippedCards[index] }">
              <div class="front">
                <div class="text-h6">{{ word.english }}</div>
                <q-icon name="favorite" color="pink" size="sm" />
              </div>
              <div class="back">
                <div class="text-h6">{{ word.chinese }}</div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'LovePage',
  setup() {
    const words = ref([
      { english: 'love', chinese: '愛' },
      { english: 'heart', chinese: '心臟、心' },
      { english: 'kiss', chinese: '親吻' },
      { english: 'date', chinese: '約會' },
      { english: 'romance', chinese: '浪漫' },
      { english: 'couple', chinese: '情侶' },
      { english: 'wedding', chinese: '婚禮' },
      { english: 'marriage', chinese: '婚姻' },
      { english: 'boyfriend', chinese: '男朋友' },
      { english: 'girlfriend', chinese: '女朋友' },
      { english: 'relationship', chinese: '關係' },
      { english: 'romantic', chinese: '浪漫的' },
    ])

    const flippedCards = ref(Array(words.value.length).fill(false))

    const flipCard = (index: number) => {
      flippedCards.value[index] = !flippedCards.value[index]
    }

    return {
      words,
      flippedCards,
      flipCard,
    }
  },
})
</script>

<style scoped>
.word-card {
  cursor: pointer;
  perspective: 1000px;
  height: 120px;
}

.word-card .q-card__section {
  transition: transform 0.6s;
  transform-style: preserve-3d;
  position: relative;
  height: 100%;
}

.front,
.back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.back {
  transform: rotateY(180deg);
}

.flipped {
  transform: rotateY(180deg);
}
</style>
