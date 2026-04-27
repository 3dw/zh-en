<template>
  <q-page class="q-pa-md">
    <div class="word-card-list">
      <h1>身體健康(點擊空白處切換中英文)</h1>
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
  name: 'BodyPage',
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
    const sentences = ref([
      {
        chinese: '我身體很健康。',
        english: 'I am very healthy.',
        flipped: false,
        image: '/images/body/healthy.webp',
        structure: getSentenceStructure('I am very healthy.', '我身體很健康。'),
      },
      {
        chinese: '我的眼睛很明亮。',
        english: 'My eyes are bright.',
        flipped: false,
        image: '/images/body/eyes.webp',
        structure: getSentenceStructure('My eyes are bright.', '我的眼睛很明亮。'),
      },
      {
        chinese: '我的視力很好。',
        english: 'I have good eyesight.',
        flipped: false,
        image: '/images/body/eyesight.webp',
        structure: getSentenceStructure('I have good eyesight.', '我的視力很好。'),
      },
      {
        chinese: '我的聽力很敏銳。',
        english: 'I have sharp hearing.',
        flipped: false,
        image: '/images/body/hearing.webp',
        structure: getSentenceStructure('I have sharp hearing.', '我的聽力很敏銳。'),
      },
      {
        chinese: '我的牙齒很整齊。',
        english: 'I have straight teeth.',
        flipped: false,
        image: '/images/body/teeth.webp',
        structure: getSentenceStructure('I have straight teeth.', '我的牙齒很整齊。'),
      },
      {
        chinese: '我的手很靈活。',
        english: 'My hands are dexterous.',
        flipped: false,
        image: '/images/body/hands.webp',
        structure: getSentenceStructure('My hands are dexterous.', '我的手很靈活。'),
      },
      {
        chinese: '我的腿很有力。',
        english: 'My legs are strong.',
        flipped: false,
        image: '/images/body/legs.webp',
        structure: getSentenceStructure('My legs are strong.', '我的腿很有力。'),
      },
      {
        chinese: '我的背很挺直。',
        english: 'My back is straight.',
        flipped: false,
        image: '/images/body/back.webp',
        structure: getSentenceStructure('My back is straight.', '我的背很挺直。'),
      },
      {
        chinese: '我的消化很好。',
        english: 'I have good digestion.',
        flipped: false,
        image: '/images/body/digestion.webp',
        structure: getSentenceStructure('I have good digestion.', '我的消化很好。'),
      },
      {
        chinese: '我的心跳很穩定。',
        english: 'My heartbeat is steady.',
        flipped: false,
        image: '/images/body/heartbeat.webp',
        structure: getSentenceStructure('My heartbeat is steady.', '我的心跳很穩定。'),
      },
      {
        chinese: '我的肌肉很結實。',
        english: 'My muscles are firm.',
        flipped: false,
        image: '/images/body/muscles.webp',
        structure: getSentenceStructure('My muscles are firm.', '我的肌肉很結實。'),
      },
      {
        chinese: '我的骨骼很強壯。',
        english: 'My bones are strong.',
        flipped: false,
        image: '/images/body/bones.webp',
        structure: getSentenceStructure('My bones are strong.', '我的骨骼很強壯。'),
      },
      {
        chinese: '我的脖子很靈活。',
        english: 'My neck is flexible.',
        flipped: false,
        image: '/images/body/neck.webp',
        structure: getSentenceStructure('My neck is flexible.', '我的脖子很靈活。'),
      },
      {
        chinese: '我的肩膀很放鬆。',
        english: 'My shoulders are relaxed.',
        flipped: false,
        image: '/images/body/shoulders.webp',
        structure: getSentenceStructure('My shoulders are relaxed.', '我的肩膀很放鬆。'),
      },
      {
        chinese: '我的體態很優美。',
        english: 'My posture is graceful.',
        flipped: false,
        image: '/images/body/posture.webp',
        structure: getSentenceStructure('My posture is graceful.', '我的體態很優美。'),
      },
      {
        chinese: '我的皮膚很光滑。',
        english: 'My skin is smooth.',
        flipped: false,
        image: '/images/body/skin.webp',
        structure: getSentenceStructure('My skin is smooth.', '我的皮膚很光滑。'),
      },
      {
        chinese: '我的頭髮很亮麗。',
        english: 'My hair is shiny.',
        flipped: false,
        image: '/images/body/hair.webp',
        structure: getSentenceStructure('My hair is shiny.', '我的頭髮很亮麗。'),
      },
      {
        chinese: '我的精神很好。',
        english: 'I feel energetic.',
        flipped: false,
        image: '/images/body/energetic.webp',
        structure: getSentenceStructure('I feel energetic.', '我的精神很好。'),
      },
      {
        chinese: '我的呼吸很順暢。',
        english: 'My breathing is smooth.',
        flipped: false,
        image: '/images/body/breathing.webp',
        structure: getSentenceStructure('My breathing is smooth.', '我的呼吸很順暢。'),
      },
      {
        chinese: '我的血液循環很好。',
        english: 'I have good blood circulation.',
        flipped: false,
        image: '/images/body/blood_circulation.webp',
        structure: getSentenceStructure('I have good blood circulation.', '我的血液循環很好。'),
      },
      {
        chinese: '我的新陳代謝很好。',
        english: 'I have good metabolism.',
        flipped: false,
        image: '/images/body/metabolism.webp',
        structure: getSentenceStructure('I have good metabolism.', '我的新陳代謝很好。'),
      },
      {
        chinese: '我的免疫力很強。',
        english: 'I have strong immunity.',
        flipped: false,
        image: '/images/body/immunity.webp',
        structure: getSentenceStructure('I have strong immunity.', '我的免疫力很強。'),
      },
      {
        chinese: '我的體力很充沛。',
        english: 'I have abundant energy.',
        flipped: false,
        image: '/images/body/stamina.webp',
        structure: getSentenceStructure('I have abundant energy.', '我的體力很充沛。'),
      },
      {
        chinese: '我的平衡感很好。',
        english: 'I have good balance.',
        flipped: false,
        image: '/images/body/balance.webp',
        structure: getSentenceStructure('I have good balance.', '我的平衡感很好。'),
      },
      {
        chinese: '我的反應很敏捷。',
        english: 'My reflexes are quick.',
        flipped: false,
        image: '/images/body/reflexes.webp',
        structure: getSentenceStructure('My reflexes are quick.', '我的反應很敏捷。'),
      },
      {
        chinese: '我的柔軟度很好。',
        english: 'I am very flexible.',
        flipped: false,
        image: '/images/body/flexible.webp',
        structure: getSentenceStructure('I am very flexible.', '我的柔軟度很好。'),
      },
      {
        chinese: '我的體重很標準。',
        english: 'My weight is ideal.',
        flipped: false,
        image: '/images/body/weight.webp',
        structure: getSentenceStructure('My weight is ideal.', '我的體重很標準。'),
      },
      {
        chinese: '我的身高很理想。',
        english: 'My height is ideal.',
        flipped: false,
        image: '/images/body/height.webp',
        structure: getSentenceStructure('My height is ideal.', '我的身高很理想。'),
      },
      {
        chinese: '我的體溫很正常。',
        english: 'My temperature is normal.',
        flipped: false,
        image: '/images/body/temperature.webp',
        structure: getSentenceStructure('My temperature is normal.', '我的體溫很正常。'),
      },
      {
        chinese: '我的血壓很正常。',
        english: 'My blood pressure is normal.',
        flipped: false,
        image: '/images/body/blood_pressure.webp',
        structure: getSentenceStructure('My blood pressure is normal.', '我的血壓很正常。'),
      },
      {
        chinese: '我的睡眠很充足。',
        english: 'I get enough sleep.',
        flipped: false,
        image: '/images/body/sleep.webp',
        structure: getSentenceStructure('I get enough sleep.', '我的睡眠很充足。'),
      },
      {
        chinese: '我的食慾很好。',
        english: 'I have a good appetite.',
        flipped: false,
        image: '/images/body/appetite.webp',
        structure: getSentenceStructure('I have a good appetite.', '我的食慾很好。'),
      },
      {
        chinese: '我很有活力。',
        english: 'I am full of vitality.',
        flipped: false,
        image: '/images/body/vitality.webp',
        structure: getSentenceStructure('I am full of vitality.', '我很有活力。'),
      },
      {
        chinese: '我走路很穩健。',
        english: 'I walk steadily.',
        flipped: false,
        image: '/images/body/walking.webp',
        structure: getSentenceStructure('I walk steadily.', '我走路很穩健。'),
      },
      {
        chinese: '我跑步很輕快。',
        english: 'I run lightly.',
        flipped: false,
        image: '/images/body/running.webp',
        structure: getSentenceStructure('I run lightly.', '我跑步很輕快。'),
      },
      {
        chinese: '我跳躍很靈活。',
        english: 'I jump agilely.',
        flipped: false,
        image: '/images/body/jumping.webp',
        structure: getSentenceStructure('I jump agilely.', '我跳躍很靈活。'),
      },
      {
        chinese: '我游泳很擅長。',
        english: 'I am good at swimming.',
        flipped: false,
        image: '/images/body/swimming.webp',
        structure: getSentenceStructure('I am good at swimming.', '我游泳很擅長。'),
      },
      {
        chinese: '我運動很在行。',
        english: 'I am good at sports.',
        flipped: false,
        image: '/images/body/sports.webp',
        structure: getSentenceStructure('I am good at sports.', '我運動很在行。'),
      },
      {
        chinese: '我的體能很好。',
        english: 'I am physically fit.',
        flipped: false,
        image: '/images/body/fitness.webp',
        structure: getSentenceStructure('I am physically fit.', '我的體能很好。'),
      },
      {
        chinese: '我的姿勢很標準。',
        english: 'My posture is correct.',
        flipped: false,
        image: '/images/body/posture_correct.webp',
        structure: getSentenceStructure('My posture is correct.', '我的姿勢很標準。'),
      },
      {
        chinese: '我的肌力很強。',
        english: 'I have strong muscles.',
        flipped: false,
        image: '/images/body/strong_muscles.webp',
        structure: getSentenceStructure('I have strong muscles.', '我的肌力很強。'),
      },
      {
        chinese: '我很有耐力。',
        english: 'I have good endurance.',
        flipped: false,
        image: '/images/body/endurance.webp',
        structure: getSentenceStructure('I have good endurance.', '我很有耐力。'),
      },
      {
        chinese: '我很有彈性。',
        english: 'I am very flexible.',
        flipped: false,
        image: '/images/body/elasticity.webp',
        structure: getSentenceStructure('I am very flexible.', '我很有彈性。'),
      },
      {
        chinese: '我的協調性很好。',
        english: 'I have good coordination.',
        flipped: false,
        image: '/images/body/coordination.webp',
        structure: getSentenceStructure('I have good coordination.', '我的協調性很好。'),
      },
      {
        chinese: '我很有節奏感。',
        english: 'I have good rhythm.',
        flipped: false,
        image: '/images/body/rhythm.webp',
        structure: getSentenceStructure('I have good rhythm.', '我很有節奏感。'),
      },
      {
        chinese: '我的身材很勻稱。',
        english: 'I have a proportionate figure.',
        flipped: false,
        image: '/images/body/figure.webp',
        structure: getSentenceStructure('I have a proportionate figure.', '我的身材很勻稱。'),
      },
      {
        chinese: '我很有運動細胞。',
        english: 'I am athletic.',
        flipped: false,
        image: '/images/body/athletic.webp',
        structure: getSentenceStructure('I am athletic.', '我很有運動細胞。'),
      },
      {
        chinese: '我的生理時鐘很準。',
        english: 'My biological clock is accurate.',
        flipped: false,
        image: '/images/body/biological_clock.webp',
        structure: getSentenceStructure('My biological clock is accurate.', '我的生理時鐘很準。'),
      },
      {
        chinese: '我的精力充沛。',
        english: 'I am energetic.',
        flipped: false,
        image: '/images/body/energetic.webp',
        structure: getSentenceStructure('I am energetic.', '我的精力充沛。'),
      },
      {
        chinese: '我很健壯。',
        english: 'I am strong and healthy.',
        flipped: false,
        image: '/images/body/strong_healthy.webp',
        structure: getSentenceStructure('I am strong and healthy.', '我很健壯。'),
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
