<template>
  <q-page class="op-page q-pa-md">
    <div class="word-card-list">
      <h1 class="page-title">常用句子(點擊空白處可翻面)</h1>
      <div class="search-bar q-mb-md">
        <q-input v-model="searchQuery" placeholder="輸入關鍵字搜尋（中或英）" outlined dense />
      </div>

      <!-- FlashCard 組件 (含翻卡朗讀功能) -->
      <flash-card
        :sentences="sentences"
        :searchQuery="searchQuery"
        @earn-xp="$emit('earn-xp', $event)"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import FlashCard from 'src/components/FlashCard.vue'

export default defineComponent({
  name: 'BeginnerPage',
  components: {
    FlashCard,
  },
  emits: ['earn-xp'],

  setup(props, { emit }) {
    const searchQuery = ref('')
    const sentences = ref([
      // 基本情緒
      { chinese: '我很開心！', english: 'I am happy!', flipped: false },
      { chinese: '我很難過。', english: 'I am sad.', flipped: false },
      { chinese: '我生氣了！', english: 'I am angry!', flipped: false },
      { chinese: '我很緊張。', english: 'I am nervous.', flipped: false },
      { chinese: '我很興奮！', english: 'I am excited!', flipped: false },

      // 生理狀態
      { chinese: '我很累。', english: 'I am tired.', flipped: false },
      { chinese: '我很睏。', english: 'I am sleepy.', flipped: false },
      { chinese: '我餓了。', english: 'I am hungry.', flipped: false },
      { chinese: '我渴了。', english: 'I am thirsty.', flipped: false },
      { chinese: '我很不舒服。', english: 'I am not feeling well.', flipped: false },
      { chinese: '我頭痛。', english: 'I have a headache.', flipped: false },
      { chinese: '我很冷。', english: 'I am cold.', flipped: false },
      { chinese: '我很熱。', english: 'I am hot.', flipped: false },
      { chinese: '我很痛。', english: 'I am in pain.', flipped: false },
      { chinese: '我暈眩。', english: 'I am dizzy.', flipped: false },
      { chinese: '我噁心。', english: 'I am nauseous.', flipped: false },
      { chinese: '我喉嚨痛。', english: 'I have a sore throat.', flipped: false },
      { chinese: '我發燒了。', english: 'I have a fever.', flipped: false },
      { chinese: '我咳嗽。', english: 'I am coughing.', flipped: false },
      { chinese: '我流鼻水。', english: 'I have a runny nose.', flipped: false },

      // 心理狀態
      { chinese: '我很專注。', english: 'I am focused.', flipped: false },
      { chinese: '我很分心。', english: 'I am distracted.', flipped: false },
      { chinese: '我很有動力。', english: 'I am motivated.', flipped: false },
      { chinese: '我沒有精神。', english: 'I have no energy.', flipped: false },
      { chinese: '我很放心。', english: 'I am relieved.', flipped: false },
      { chinese: '我很猶豫。', english: 'I am hesitant.', flipped: false },
      { chinese: '我很期待。', english: 'I am looking forward to it.', flipped: false },
      { chinese: '我很不耐煩。', english: 'I am impatient.', flipped: false },
      { chinese: '我很平靜。', english: 'I am calm.', flipped: false },
      { chinese: '我很煩躁。', english: 'I am irritated.', flipped: false },

      // 複雜情緒
      { chinese: '我很擔心。', english: 'I am worried.', flipped: false },
      { chinese: '我很害怕。', english: 'I am scared.', flipped: false },
      { chinese: '我很煩惱。', english: 'I am troubled.', flipped: false },
      { chinese: '我很驚訝！', english: 'I am surprised!', flipped: false },
      { chinese: '我很失望。', english: 'I am disappointed.', flipped: false },
      { chinese: '我很感動。', english: 'I am touched.', flipped: false },
      { chinese: '我很滿意。', english: 'I am satisfied.', flipped: false },
      { chinese: '我很困惑。', english: 'I am confused.', flipped: false },
      { chinese: '我很羨慕。', english: 'I am envious.', flipped: false },
      { chinese: '我很感激。', english: 'I am grateful.', flipped: false },
      { chinese: '我很懊悔。', english: 'I am regretful.', flipped: false },
      { chinese: '我很無聊。', english: 'I am bored.', flipped: false },
      { chinese: '我很焦慮。', english: 'I am anxious.', flipped: false },
      { chinese: '我很沮喪。', english: 'I am depressed.', flipped: false },
      { chinese: '我很自豪。', english: 'I am proud.', flipped: false },
      { chinese: '我很慚愧。', english: 'I am ashamed.', flipped: false },
      { chinese: '我很嫉妒。', english: 'I am jealous.', flipped: false },
      { chinese: '我很尷尬。', english: 'I am embarrassed.', flipped: false },
      { chinese: '我很孤單。', english: 'I am lonely.', flipped: false },
      { chinese: '我很放鬆。', english: 'I am relaxed.', flipped: false },
    ])

    const toggleFlip = (sentence: { flipped: boolean }) => {
      sentence.flipped = !sentence.flipped
      emit('earn-xp', 5)
    }

    return {
      searchQuery,
      sentences,
      toggleFlip,
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
}
</style>
