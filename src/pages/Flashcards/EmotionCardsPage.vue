<template>
  <q-page class="op-page q-pa-md">
    <div class="word-card-list">
      <h1 class="page-title">常用句子(點擊空白處切換中英文)</h1>
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

      <!-- FlashCard 組件 (含翻卡朗讀功能) -->
      <flash-card
        :sentences="sentences"
        :searchQuery="searchQuery"
        :selectedStructure="selectedStructure"
        :speech-rate="speechRate"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import FlashCard from 'src/components/FlashCard.vue'
import { getSentenceStructure } from 'src/utils/sentenceStructure'

export default defineComponent({
  name: 'BeginnerPage',
  components: {
    FlashCard,
  },
  props: {
    speechRate: {
      type: Number,
      default: 1,
    },
  },
  setup() {
    const searchQuery = ref('')
    const selectedStructure = ref('全部')
    const structureOptions = ['全部', '肯定句', '疑問句', '祈使句']

    const rawSentences = [
      // 基本情緒
      { chinese: '我很開心！', english: 'I am happy!', flipped: false, image: '/images/emotions/happy.webp' },
      { chinese: '我很難過。', english: 'I am sad.', flipped: false, image: '/images/emotions/sad.webp' },
      { chinese: '我生氣了！', english: 'I am angry!', flipped: false, image: '/images/emotions/angry.webp' },
      { chinese: '我很緊張。', english: 'I am nervous.', flipped: false, image: '/images/emotions/nervous.webp' },
      { chinese: '我很興奮！', english: 'I am excited!', flipped: false, image: '/images/emotions/excited.webp' },

      // 生理狀態
      { chinese: '我很累。', english: 'I am tired.', flipped: false, image: '/images/emotions/tired.webp' },
      { chinese: '我很睏。', english: 'I am sleepy.', flipped: false, image: '/images/emotions/sleepy.webp' },
      { chinese: '我餓了。', english: 'I am hungry.', flipped: false, image: '/images/emotions/hungry.webp' },
      { chinese: '我渴了。', english: 'I am thirsty.', flipped: false, image: '/images/emotions/thirsty.webp' },
      { chinese: '我很不舒服。', english: 'I am not feeling well.', flipped: false, image: '/images/emotions/not_feeling_well.webp' },
      { chinese: '我頭痛。', english: 'I have a headache.', flipped: false, image: '/images/emotions/headache.webp' },
      { chinese: '我很冷。', english: 'I am cold.', flipped: false, image: '/images/emotions/cold.webp' },
      { chinese: '我很熱。', english: 'I am hot.', flipped: false, image: '/images/emotions/hot.webp' },
      { chinese: '我很痛。', english: 'I am in pain.', flipped: false, image: '/images/emotions/in_pain.webp' },
      { chinese: '我暈眩。', english: 'I am dizzy.', flipped: false, image: '/images/emotions/dizzy.webp' },
      { chinese: '我噁心。', english: 'I am nauseous.', flipped: false, image: '/images/emotions/nauseous.webp' },
      { chinese: '我喉嚨痛。', english: 'I have a sore throat.', flipped: false, image: '/images/emotions/sore_throat.webp' },
      { chinese: '我發燒了。', english: 'I have a fever.', flipped: false, image: '/images/emotions/fever.webp' },
      { chinese: '我咳嗽。', english: 'I am coughing.', flipped: false, image: '/images/emotions/coughing.webp' },
      { chinese: '我流鼻水。', english: 'I have a runny nose.', flipped: false, image: '/images/emotions/runny_nose.webp' },

      // 心理狀態
      { chinese: '我很專注。', english: 'I am focused.', flipped: false, image: '/images/emotions/focused.webp' },
      { chinese: '我很分心。', english: 'I am distracted.', flipped: false, image: '/images/emotions/distracted.webp' },
      { chinese: '我很有動力。', english: 'I am motivated.', flipped: false, image: '/images/emotions/motivated.webp' },
      { chinese: '我沒有精神。', english: 'I have no energy.', flipped: false, image: '/images/emotions/no_energy.webp' },
      { chinese: '我很放心。', english: 'I am relieved.', flipped: false, image: '/images/emotions/relieved.webp' },
      { chinese: '我很猶豫。', english: 'I am hesitant.', flipped: false, image: '/images/emotions/hesitant.webp' },
      { chinese: '我很期待。', english: 'I am looking forward to it.', flipped: false, image: '/images/emotions/looking_forward.webp' },
      { chinese: '我很不耐煩。', english: 'I am impatient.', flipped: false, image: '/images/emotions/impatient.webp' },
      { chinese: '我很平靜。', english: 'I am calm.', flipped: false, image: '/images/emotions/calm.webp' },
      { chinese: '我很煩躁。', english: 'I am irritated.', flipped: false, image: '/images/emotions/irritated.webp' },

      // 複雜情緒
      { chinese: '我很擔心。', english: 'I am worried.', flipped: false, image: '/images/emotions/worried.webp' },
      { chinese: '我很害怕。', english: 'I am scared.', flipped: false, image: '/images/emotions/scared.webp' },
      { chinese: '我很煩惱。', english: 'I am troubled.', flipped: false, image: '/images/emotions/troubled.webp' },
      { chinese: '我很驚訝！', english: 'I am surprised!', flipped: false, image: '/images/emotions/surprised.webp' },
      { chinese: '我很失望。', english: 'I am disappointed.', flipped: false, image: '/images/emotions/disappointed.webp' },
      { chinese: '我很感動。', english: 'I am touched.', flipped: false, image: '/images/emotions/touched.webp' },
      { chinese: '我很滿意。', english: 'I am satisfied.', flipped: false, image: '/images/emotions/satisfied.webp' },
      { chinese: '我很困惑。', english: 'I am confused.', flipped: false, image: '/images/emotions/confused.webp' },
      { chinese: '我很羨慕。', english: 'I am envious.', flipped: false, image: '/images/emotions/envious.webp' },
      { chinese: '我很感激。', english: 'I am grateful.', flipped: false, image: '/images/emotions/grateful.webp' },
      { chinese: '我很懊悔。', english: 'I am regretful.', flipped: false, image: '/images/emotions/regretful.webp' },
      { chinese: '我很無聊。', english: 'I am bored.', flipped: false, image: '/images/emotions/bored.webp' },
      { chinese: '我很焦慮。', english: 'I am anxious.', flipped: false, image: '/images/emotions/anxious.webp' },
      { chinese: '我很沮喪。', english: 'I am depressed.', flipped: false, image: '/images/emotions/depressed.webp' },
      { chinese: '我很自豪。', english: 'I am proud.', flipped: false, image: '/images/emotions/proud.webp' },
      { chinese: '我很慚愧。', english: 'I am ashamed.', flipped: false, image: '/images/emotions/ashamed.webp' },
      { chinese: '我很嫉妒。', english: 'I am jealous.', flipped: false, image: '/images/emotions/jealous.webp' },
      { chinese: '我很尷尬。', english: 'I am embarrassed.', flipped: false, image: '/images/emotions/embarrassed.webp' },
      { chinese: '我很孤單。', english: 'I am lonely.', flipped: false, image: '/images/emotions/lonely.webp' },
      { chinese: '我很放鬆。', english: 'I am relaxed.', flipped: false, image: '/images/emotions/relaxed.webp' },
    ]

    const sentences = ref(
      rawSentences.map((s) => ({
        ...s,
        structure: getSentenceStructure(s.english, s.chinese),
      })),
    )

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
