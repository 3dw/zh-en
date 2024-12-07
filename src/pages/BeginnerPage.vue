<template>
  <q-page class="q-pa-md">
    <div class="word-card-list">
      <h1>常用英文句子字卡(可朗讀)</h1>
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
  name: 'IndexPage',

  setup() {
    const searchQuery = ref('')
    const sentences = ref([
      { chinese: '你好嗎？', english: 'How are you?', flipped: false },
      { chinese: '我很好，謝謝。', english: 'I am fine, thank you.', flipped: false },
      { chinese: '你叫什麼名字？', english: 'What is your name?', flipped: false },
      { chinese: '我叫___。', english: 'My name is ___.', flipped: false },
      { chinese: '很高興認識你。', english: 'Nice to meet you.', flipped: false },
      { chinese: '你會說中文嗎？', english: 'Can you speak Chinese?', flipped: false },
      { chinese: '我不懂你的意思。', english: "I don't understand what you mean.", flipped: false },
      { chinese: '請說慢一點。', english: 'Please speak more slowly.', flipped: false },
      { chinese: '重複一次，謝謝。', english: 'Repeat that, please.', flipped: false },
      { chinese: '我需要幫助。', english: 'I need help.', flipped: false },
      { chinese: '請幫我。', english: 'Please help me.', flipped: false },
      { chinese: '謝謝你的幫忙。', english: 'Thank you for your help.', flipped: false },
      { chinese: '對不起，我遲到了。', english: 'Sorry, I am late.', flipped: false },
      { chinese: '這要多少錢？', english: 'How much is this?', flipped: false },
      { chinese: '太貴了！', english: "It's too expensive!", flipped: false },
      { chinese: '這裡有廁所嗎？', english: 'Is there a restroom here?', flipped: false },
      { chinese: '我想要一些水。', english: 'I would like some water.', flipped: false },
      { chinese: '在哪裡可以搭計程車？', english: 'Where can I get a taxi?', flipped: false },
      { chinese: '你住在哪裡？', english: 'Where do you live?', flipped: false },
      { chinese: '我住在台北。', english: 'I live in Taipei.', flipped: false },
      {
        chinese: '我餓了，我們去吃東西吧。',
        english: "I am hungry, let's get something to eat.",
        flipped: false,
      },
      { chinese: '我很累，我需要休息。', english: 'I am tired, I need to rest.', flipped: false },
      { chinese: '我們走吧。', english: "Let's go.", flipped: false },
      { chinese: '明天見。', english: 'See you tomorrow.', flipped: false },
      { chinese: '你知道現在幾點嗎？', english: 'Do you know what time it is?', flipped: false },
      { chinese: '稍等一下。', english: 'Just a moment, please.', flipped: false },
      { chinese: '沒問題。', english: 'No problem.', flipped: false },
      { chinese: '當然可以。', english: 'Of course.', flipped: false },
      { chinese: '小心！', english: 'Be careful!', flipped: false },
      { chinese: '太好了！', english: 'Great!', flipped: false },
      { chinese: '恭喜你。', english: 'Congratulations.', flipped: false },
      { chinese: '祝你有美好的一天。', english: 'Have a nice day.', flipped: false },
      { chinese: '天氣很好。', english: 'The weather is nice.', flipped: false },
      { chinese: '我喜歡這裡。', english: 'I like it here.', flipped: false },
      { chinese: '真的嗎？', english: 'Really?', flipped: false },
      { chinese: '沒關係。', english: "It's okay.", flipped: false },
      { chinese: '我明白了。', english: 'I understand.', flipped: false },
      { chinese: '我不知道。', english: "I don't know.", flipped: false },
      { chinese: '幫我一個忙，好嗎？', english: 'Could you do me a favor?', flipped: false },
      { chinese: '不用客氣。', english: "You're welcome.", flipped: false },
      { chinese: '請坐。', english: 'Please have a seat.', flipped: false },
      { chinese: '請給我菜單。', english: 'Please give me the menu.', flipped: false },
      { chinese: '這個很好吃。', english: 'This tastes good.', flipped: false },
      { chinese: '祝你旅途愉快。', english: 'Have a good trip.', flipped: false },
      { chinese: '我喜歡音樂。', english: 'I like music.', flipped: false },
      { chinese: '我需要上網。', english: 'I need to use the Internet.', flipped: false },
      {
        chinese: '你能幫我拍張照片嗎？',
        english: 'Could you take a picture for me?',
        flipped: false,
      },
      { chinese: '祝你好運。', english: 'Good luck.', flipped: false },
      { chinese: '我現在很忙。', english: 'I am very busy right now.', flipped: false },
      { chinese: '下次見。', english: 'See you next time.', flipped: false },
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
