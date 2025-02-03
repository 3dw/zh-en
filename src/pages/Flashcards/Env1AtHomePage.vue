<template>
  <q-page class="op-page q-pa-md">
    <div class="word-card-list">
      <h1 class="page-title">常用句子(點擊空白處可翻面)</h1>
      <div class="search-bar q-mb-md">
        <q-input v-model="searchQuery" placeholder="輸入關鍵字搜尋（中或英）" outlined dense />
      </div>

      <!-- FlashCard 組件 (含翻卡與朗讀功能) -->
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
      { chinese: '早安，爸爸！', english: 'Good morning, dad!', flipped: false },
      { chinese: '早安，媽媽！', english: 'Good morning, mom!', flipped: false },
      {
        chinese: '今天是星期一，要開始學習的一週了。',
        english: "Today is Monday; it's time to start a learning week.",
        flipped: false,
      },
      {
        chinese: '今天的功課是什麼？',
        english: "What is today's homework?",
        flipped: false,
      },
      {
        chinese: '我來做今天的早餐。',
        english: "I'll make breakfast today.",
        flipped: false,
      },
      {
        chinese: '我們一起吃飯吧！',
        english: "Let's eat together!",
        flipped: false,
      },
      {
        chinese: '你覺得今天的飯菜如何？',
        english: "What do you think of today's meal?",
        flipped: false,
      },

      {
        chinese: '我在學英文，今天學了新單字。',
        english: "I'm studying English; I learned new vocabulary today.",
        flipped: false,
      },
      {
        chinese: '我準備做菜，誰想幫忙？',
        english: "I'm going to cook; who wants to help?",
        flipped: false,
      },
      {
        chinese: '需要幫忙嗎？我可以幫你。',
        english: 'Do you need help? I can assist you.',
        flipped: false,
      },
      { chinese: '午餐準備好了嗎？', english: 'Is lunch ready?', flipped: false },

      {
        chinese: '我想上廁所。',
        english: 'I need to use the bathroom.',
        flipped: false,
      },
      {
        chinese: '你能幫我澆花嗎？',
        english: 'Could you water the plants for me?',
        flipped: false,
      },
      {
        chinese: '我在看電視，你要一起看嗎？',
        english: "I'm watching TV; would you like to join me?",
        flipped: false,
      },
      {
        chinese: '我們一起去看電影吧！',
        english: "Let's go to the movies together!",
        flipped: false,
      },
      {
        chinese: '今晚有什麼計劃嗎？',
        english: 'Do you have any plans for tonight?',
        flipped: false,
      },
      { chinese: '請幫我關掉燈。', english: 'Please turn off the lights for me.', flipped: false },
      { chinese: '可以借我點鹽嗎？', english: 'Could you pass me the salt?', flipped: false },
      {
        chinese: '我有點餓了，準備去吃點東西。',
        english: "I'm a bit hungry; I'm going to get something to eat.",
        flipped: false,
      },
      { chinese: '記得鎖門哦。', english: 'Remember to lock the door, please.', flipped: false },
      {
        chinese: '我去洗碗，等我一下。',
        english: "I'm going to wash the dishes; wait for me.",
        flipped: false,
      },
      {
        chinese: '今天想看哪部電影？',
        english: 'Which movie do you want to watch today?',
        flipped: false,
      },
      {
        chinese: '我們去找奶奶吧。',
        english: "Let's go and see grandma.",
        flipped: false,
      },
      {
        chinese: '你覺得這間房要整理嗎？',
        english: 'Do you think this room needs a cleaning?',
        flipped: false,
      },
      {
        chinese: '我可以幫你準備早餐。',
        english: 'I can help you prepare breakfast.',
        flipped: false,
      },
      { chinese: '今天的晚餐很豐盛。', english: "Today's dinner is sumptuous.", flipped: false },
      {
        chinese: '這頓飯要感謝媽媽的廚藝。',
        english: "This meal is thanks to mom's cooking.",
        flipped: false,
      },
      {
        chinese: '我要洗衣服，你有乾淨的衣服嗎？',
        english: "I'm going to do the laundry; do you have clean clothes?",
        flipped: false,
      },
      {
        chinese: '幫我遞一下遙控器，謝謝！',
        english: 'Pass me the remote control, please!',
        flipped: false,
      },
      {
        chinese: '請不要在廚房裡大聲說話。',
        english: "Please don't shout in the kitchen.",
        flipped: false,
      },
      { chinese: '真是個慵懶的週末啊！', english: "It's such a lazy weekend!", flipped: false },
      {
        chinese: '我們一起打掃房間吧！',
        english: "Let's clean the room together!",
        flipped: false,
      },
      {
        chinese: '家裡有點亂，我們需要整理。',
        english: 'The house is a bit messy; we need to tidy up.',
        flipped: false,
      },
      {
        chinese: '吃完飯記得把碗洗了哦。',
        english: 'Remember to wash the dishes after eating.',
        flipped: false,
      },
      {
        chinese: '我在看書，你在讀什麼？',
        english: "I'm reading a book; what are you reading?",
        flipped: false,
      },
      {
        chinese: '今天的茶真好喝。',
        english: 'The tea today is really delicious.',
        flipped: false,
      },
      {
        chinese: '你看起來有點累，要不要休息？',
        english: 'You look a bit tired; would you like to take a rest?',
        flipped: false,
      },
      {
        chinese: '我來做菜，你幫忙切菜如何？',
        english: "I'll cook, how about you help chop the vegetables?",
        flipped: false,
      },
      {
        chinese: '家的感覺真好，讓人放鬆。',
        english: "There's nothing like home; it really relaxes me.",
        flipped: false,
      },
      {
        chinese: '這週末我們可以一起嘗試做點新菜。',
        english: 'We can try cooking something new together this weekend.',
        flipped: false,
      },
      { chinese: '你看過那本書了嗎？', english: 'Have you read that book yet?', flipped: false },
      {
        chinese: '有什麼需要我去買的嗎？',
        english: 'Is there anything you need me to buy?',
        flipped: false,
      },
      {
        chinese: '今天的報紙已經送到了。',
        english: 'The newspaper has arrived today.',
        flipped: false,
      },
      {
        chinese: '我感覺有點冷，請把窗戶關上。',
        english: "I'm feeling a bit cold; please close the window.",
        flipped: false,
      },
      {
        chinese: '可以幫我打掃一下客廳嗎？',
        english: 'Could you help me clean up the living room?',
        flipped: false,
      },
      { chinese: '我今天心情很好。', english: "I'm in a good mood today.", flipped: false },
      {
        chinese: '這個週末要不要去郊遊？',
        english: 'Do you want to go on a picnic this weekend?',
        flipped: false,
      },
      { chinese: '記得給植物澆水哦。', english: 'Remember to water the plants.', flipped: false },
      {
        chinese: '我忙了一整天，現在想休息一下。',
        english: "I've been busy all day, now I want to rest.",
        flipped: false,
      },
      {
        chinese: '我得去換衣服，今天運動後汗流浹背。',
        english: 'I need to change clothes; I sweated a lot after exercising today.',
        flipped: false,
      },
      {
        chinese: '你覺得冰箱的冷藏室是不是有點問題？',
        english: "Do you think there's an issue with the fridge's cooling?",
        flipped: false,
      },
      {
        chinese: '外面下雨了，我們待在家裡吧！',
        english: "It's raining outside; let's stay indoors!",
        flipped: false,
      },
      {
        chinese: '我想查看郵件，信件到了嗎？',
        english: 'I want to check the mail; has any mail arrived?',
        flipped: false,
      },
      {
        chinese: '時間不早了，快點上床睡覺吧！',
        english: "It's getting late, hurry up and go to bed!",
        flipped: false,
      },
      { chinese: '晚安，祝你好夢！', english: 'Good night, sweet dreams!', flipped: false },
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
