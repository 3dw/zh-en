<template>
  <q-page class="op-page q-pa-md">
    <div class="word-card-list">
      <h1 class="page-title">常用英文句子字卡 (可朗讀)</h1>
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
      { chinese: '你好嗎？', english: 'How are you?', flipped: false },
      { chinese: '我很好，謝謝。', english: 'I am fine, thank you.', flipped: false },
      { chinese: '你叫什麼名字？', english: 'What is your name?', flipped: false },
      { chinese: '我叫___。', english: 'My name is ___.', flipped: false },
      { chinese: '很高興認識你。', english: 'Nice to meet you.', flipped: false },
      { chinese: '你會說中文嗎？', english: 'Can you speak Chinese?', flipped: false },
      { chinese: '我不懂你的意思。', english: "I don't understand what you mean.", flipped: false },
      { chinese: '請說慢一點。', english: 'Please speak more slowly.', flipped: false },
      { chinese: '請再說一次，謝謝。', english: 'Repeat that, please.', flipped: false },
      { chinese: '我需要幫助。', english: 'I need some help.', flipped: false },
      { chinese: '我迷路了，請幫我。', english: 'I am lost, please help me.', flipped: false },
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
