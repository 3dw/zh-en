<template>
  <q-page class="q-pa-md">
    <div class="word-card-list">
      <h1>常用英文身體字卡(可朗讀)</h1>
      <div class="search-bar">
        <q-input
          v-model="searchQuery"
          placeholder="輸入關鍵字搜尋（中或英）"
          outlined
          dense
          class="q-mb-md"
        />
      </div>
      <flash-card
        :sentences="sentences"
        :searchQuery="searchQuery"
        @earn-xp="(xp) => $emit('earn-xp', xp)"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import FlashCard from 'src/components/FlashCard.vue'

export default defineComponent({
  name: 'BodyPage',
  components: {
    FlashCard,
  },

  setup() {
    const searchQuery = ref('')
    const sentences = ref([
      { chinese: '我身體很健康。', english: 'I am very healthy.', flipped: false },
      { chinese: '我的眼睛很明亮。', english: 'My eyes are bright.', flipped: false },
      { chinese: '我的視力很好。', english: 'I have good eyesight.', flipped: false },
      { chinese: '我的聽力很敏銳。', english: 'I have sharp hearing.', flipped: false },
      { chinese: '我的牙齒很整齊。', english: 'I have straight teeth.', flipped: false },
      { chinese: '我的手很靈活。', english: 'My hands are dexterous.', flipped: false },
      { chinese: '我的腿很有力。', english: 'My legs are strong.', flipped: false },
      { chinese: '我的背很挺直。', english: 'My back is straight.', flipped: false },
      { chinese: '我的消化很好。', english: 'I have good digestion.', flipped: false },
      { chinese: '我的心跳很穩定。', english: 'My heartbeat is steady.', flipped: false },
      { chinese: '我的肌肉很結實。', english: 'My muscles are firm.', flipped: false },
      { chinese: '我的骨骼很強壯。', english: 'My bones are strong.', flipped: false },
      { chinese: '我的脖子很靈活。', english: 'My neck is flexible.', flipped: false },
      { chinese: '我的肩膀很放鬆。', english: 'My shoulders are relaxed.', flipped: false },
      { chinese: '我的體態很優美。', english: 'My posture is graceful.', flipped: false },
      { chinese: '我的皮膚很光滑。', english: 'My skin is smooth.', flipped: false },
      { chinese: '我的頭髮很亮麗。', english: 'My hair is shiny.', flipped: false },
      { chinese: '我的精神很好。', english: 'I feel energetic.', flipped: false },
      { chinese: '我的呼吸很順暢。', english: 'My breathing is smooth.', flipped: false },
      { chinese: '我的血液循環很好。', english: 'I have good blood circulation.', flipped: false },
      { chinese: '我的新陳代謝很好。', english: 'I have good metabolism.', flipped: false },
      { chinese: '我的免疫力很強。', english: 'I have strong immunity.', flipped: false },
      { chinese: '我的體力很充沛。', english: 'I have abundant energy.', flipped: false },
      { chinese: '我的平衡感很好。', english: 'I have good balance.', flipped: false },
      { chinese: '我的反應很敏捷。', english: 'My reflexes are quick.', flipped: false },
      { chinese: '我的柔軟度很好。', english: 'I am very flexible.', flipped: false },
      { chinese: '我的體重很標準。', english: 'My weight is ideal.', flipped: false },
      { chinese: '我的身高很理想。', english: 'My height is ideal.', flipped: false },
      { chinese: '我的體溫很正常。', english: 'My temperature is normal.', flipped: false },
      { chinese: '我的血壓很正常。', english: 'My blood pressure is normal.', flipped: false },
      { chinese: '我的睡眠很充足。', english: 'I get enough sleep.', flipped: false },
      { chinese: '我的食慾很好。', english: 'I have a good appetite.', flipped: false },
      { chinese: '我很有活力。', english: 'I am full of vitality.', flipped: false },
      { chinese: '我走路很穩健。', english: 'I walk steadily.', flipped: false },
      { chinese: '我跑步很輕快。', english: 'I run lightly.', flipped: false },
      { chinese: '我跳躍很靈活。', english: 'I jump agilely.', flipped: false },
      { chinese: '我游泳很擅長。', english: 'I am good at swimming.', flipped: false },
      { chinese: '我運動很在行。', english: 'I am good at sports.', flipped: false },
      { chinese: '我���體能很好。', english: 'I am physically fit.', flipped: false },
      { chinese: '我的姿勢很標準。', english: 'My posture is correct.', flipped: false },
      { chinese: '我的肌力很強。', english: 'I have strong muscles.', flipped: false },
      { chinese: '我很有耐力。', english: 'I have good endurance.', flipped: false },
      { chinese: '我很有彈性。', english: 'I am very flexible.', flipped: false },
      { chinese: '我的協調性很好。', english: 'I have good coordination.', flipped: false },
      { chinese: '我很有節奏感。', english: 'I have good rhythm.', flipped: false },
      { chinese: '我的身材很勻稱。', english: 'I have a proportionate figure.', flipped: false },
      { chinese: '我很有運動細胞。', english: 'I am athletic.', flipped: false },
      {
        chinese: '我的生理時鐘很準。',
        english: 'My biological clock is accurate.',
        flipped: false,
      },
      { chinese: '我的精力充沛。', english: 'I am energetic.', flipped: false },
      { chinese: '我很健壯。', english: 'I am strong and healthy.', flipped: false },
    ])

    return {
      searchQuery,
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
}
</style>
