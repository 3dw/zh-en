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

    const sentences = ref([
      {
        chinese: '你好嗎？',
        english: 'How are you?',
        flipped: false,
        structure: getSentenceStructure('How are you?', '你好嗎？'),
      },
      {
        chinese: '我很好，謝謝。',
        english: 'I am fine, thank you.',
        flipped: false,
        structure: getSentenceStructure('I am fine, thank you.', '我很好，謝謝。'),
      },
      {
        chinese: '你叫什麼名字？',
        english: 'What is your name?',
        flipped: false,
        structure: getSentenceStructure('What is your name?', '你叫什麼名字？'),
      },
      {
        chinese: '我叫___。',
        english: 'My name is ___.',
        flipped: false,
        structure: getSentenceStructure('My name is ___.', '我叫___。'),
      },
      {
        chinese: '很高興認識你。',
        english: 'Nice to meet you.',
        flipped: false,
        structure: getSentenceStructure('Nice to meet you.', '很高興認識你。'),
      },
      {
        chinese: '你會說中文嗎？',
        english: 'Can you speak Chinese?',
        flipped: false,
        structure: getSentenceStructure('Can you speak Chinese?', '你會說中文嗎？'),
      },
      {
        chinese: '我不懂你的意思。',
        english: "I don't understand what you mean.",
        flipped: false,
        structure: getSentenceStructure("I don't understand what you mean.", '我不懂你的意思。'),
      },
      {
        chinese: '請說慢一點。',
        english: 'Please speak more slowly.',
        flipped: false,
        structure: getSentenceStructure('Please speak more slowly.', '請說慢一點。'),
      },
      {
        chinese: '請再說一次，謝謝。',
        english: 'Repeat that, please.',
        flipped: false,
        structure: getSentenceStructure('Repeat that, please.', '請再說一次，謝謝。'),
      },
      {
        chinese: '我需要幫助。',
        english: 'I need some help.',
        flipped: false,
        structure: getSentenceStructure('I need some help.', '我需要幫助。'),
      },
      {
        chinese: '我迷路了，請幫我。',
        english: 'I am lost, please help me.',
        flipped: false,
        structure: getSentenceStructure('I am lost, please help me.', '我迷路了，請幫我。'),
      },
      {
        chinese: '謝謝你的幫忙。',
        english: 'Thank you for your help.',
        flipped: false,
        structure: getSentenceStructure('Thank you for your help.', '謝謝你的幫忙。'),
      },
      {
        chinese: '對不起，我遲到了。',
        english: 'Sorry, I am late.',
        flipped: false,
        structure: getSentenceStructure('Sorry, I am late.', '對不起，我遲到了。'),
      },
      {
        chinese: '這要多少錢？',
        english: 'How much is this?',
        flipped: false,
        structure: getSentenceStructure('How much is this?', '這要多少錢？'),
      },
      {
        chinese: '太貴了！',
        english: "It's too expensive!",
        flipped: false,
        structure: getSentenceStructure("It's too expensive!", '太貴了！'),
      },
      {
        chinese: '這裡有廁所嗎？',
        english: 'Is there a restroom here?',
        flipped: false,
        structure: getSentenceStructure('Is there a restroom here?', '這裡有廁所嗎？'),
      },
      {
        chinese: '我想要一些水。',
        english: 'I would like some water.',
        flipped: false,
        structure: getSentenceStructure('I would like some water.', '我想要一些水。'),
      },
      {
        chinese: '在哪裡可以搭計程車？',
        english: 'Where can I get a taxi?',
        flipped: false,
        structure: getSentenceStructure('Where can I get a taxi?', '在哪裡可以搭計程車？'),
      },
      {
        chinese: '你住在哪裡？',
        english: 'Where do you live?',
        flipped: false,
        structure: getSentenceStructure('Where do you live?', '你住在哪裡？'),
      },
      {
        chinese: '我住在台北。',
        english: 'I live in Taipei.',
        flipped: false,
        structure: getSentenceStructure('I live in Taipei.', '我住在台北。'),
      },
      {
        chinese: '我餓了，我們去吃東西吧。',
        english: "I am hungry, let's get something to eat.",
        flipped: false,
        structure: getSentenceStructure(
          "I am hungry, let's get something to eat.",
          '我餓了，我們去吃東西吧。',
        ),
      },
      {
        chinese: '我很累，我需要休息。',
        english: 'I am tired, I need to rest.',
        flipped: false,
        structure: getSentenceStructure('I am tired, I need to rest.', '我很累，我需要休息。'),
      },
      {
        chinese: '我們走吧。',
        english: "Let's go.",
        flipped: false,
        structure: getSentenceStructure("Let's go.", '我們走吧。'),
      },
      {
        chinese: '明天見。',
        english: 'See you tomorrow.',
        flipped: false,
        structure: getSentenceStructure('See you tomorrow.', '明天見。'),
      },
      {
        chinese: '你知道現在幾點嗎？',
        english: 'Do you know what time it is?',
        flipped: false,
        structure: getSentenceStructure('Do you know what time it is?', '你知道現在幾點嗎？'),
      },
      {
        chinese: '稍等一下。',
        english: 'Just a moment, please.',
        flipped: false,
        structure: getSentenceStructure('Just a moment, please.', '稍等一下。'),
      },
      {
        chinese: '沒問題。',
        english: 'No problem.',
        flipped: false,
        structure: getSentenceStructure('No problem.', '沒問題。'),
      },
      {
        chinese: '當然可以。',
        english: 'Of course.',
        flipped: false,
        structure: getSentenceStructure('Of course.', '當然可以。'),
      },
      {
        chinese: '小心！',
        english: 'Be careful!',
        flipped: false,
        structure: getSentenceStructure('Be careful!', '小心！'),
      },
      {
        chinese: '太好了！',
        english: 'Great!',
        flipped: false,
        structure: getSentenceStructure('Great!', '太好了！'),
      },
      {
        chinese: '恭喜你。',
        english: 'Congratulations.',
        flipped: false,
        structure: getSentenceStructure('Congratulations.', '恭喜你。'),
      },
      {
        chinese: '祝你有美好的一天。',
        english: 'Have a nice day.',
        flipped: false,
        structure: getSentenceStructure('Have a nice day.', '祝你有美好的一天。'),
      },
      {
        chinese: '天氣很好。',
        english: 'The weather is nice.',
        flipped: false,
        structure: getSentenceStructure('The weather is nice.', '天氣很好。'),
      },
      {
        chinese: '我喜歡這裡。',
        english: 'I like it here.',
        flipped: false,
        structure: getSentenceStructure('I like it here.', '我喜歡這裡。'),
      },
      {
        chinese: '真的嗎？',
        english: 'Really?',
        flipped: false,
        structure: getSentenceStructure('Really?', '真的嗎？'),
      },
      {
        chinese: '沒關係。',
        english: "It's okay.",
        flipped: false,
        structure: getSentenceStructure("It's okay.", '沒關係。'),
      },
      {
        chinese: '我明白了。',
        english: 'I understand.',
        flipped: false,
        structure: getSentenceStructure('I understand.', '我明白了。'),
      },
      {
        chinese: '我不知道。',
        english: "I don't know.",
        flipped: false,
        structure: getSentenceStructure("I don't know.", '我不知道。'),
      },
      {
        chinese: '幫我一個忙，好嗎？',
        english: 'Could you do me a favor?',
        flipped: false,
        structure: getSentenceStructure('Could you do me a favor?', '幫我一個忙，好嗎？'),
      },
      {
        chinese: '不用客氣。',
        english: "You're welcome.",
        flipped: false,
        structure: getSentenceStructure("You're welcome.", '不用客氣。'),
      },
      {
        chinese: '請坐。',
        english: 'Please have a seat.',
        flipped: false,
        structure: getSentenceStructure('Please have a seat.', '請坐。'),
      },
      {
        chinese: '請給我菜單。',
        english: 'Please give me the menu.',
        flipped: false,
        structure: getSentenceStructure('Please give me the menu.', '請給我菜單。'),
      },
      {
        chinese: '這個很好吃。',
        english: 'This tastes good.',
        flipped: false,
        structure: getSentenceStructure('This tastes good.', '這個很好吃。'),
      },
      {
        chinese: '祝你旅途愉快。',
        english: 'Have a good trip.',
        flipped: false,
        structure: getSentenceStructure('Have a good trip.', '祝你旅途愉快。'),
      },
      {
        chinese: '我喜歡音樂。',
        english: 'I like music.',
        flipped: false,
        structure: getSentenceStructure('I like music.', '我喜歡音樂。'),
      },
      {
        chinese: '我需要上網。',
        english: 'I need to use the Internet.',
        flipped: false,
        structure: getSentenceStructure('I need to use the Internet.', '我需要上網。'),
      },
      {
        chinese: '你能幫我拍張照片嗎？',
        english: 'Could you take a picture for me?',
        flipped: false,
        structure: getSentenceStructure('Could you take a picture for me?', '你能幫我拍張照片嗎？'),
      },
      {
        chinese: '祝你好運。',
        english: 'Good luck.',
        flipped: false,
        structure: getSentenceStructure('Good luck.', '祝你好運。'),
      },
      {
        chinese: '我現在很忙。',
        english: 'I am very busy right now.',
        flipped: false,
        structure: getSentenceStructure('I am very busy right now.', '我現在很忙。'),
      },
      {
        chinese: '下次見。',
        english: 'See you next time.',
        flipped: false,
        structure: getSentenceStructure('See you next time.', '下次見。'),
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
