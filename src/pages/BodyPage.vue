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
      { chinese: '我的體能很好。', english: 'I am physically fit.', flipped: false },
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
