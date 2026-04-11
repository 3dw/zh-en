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

      <!-- FlashCard 組件 (含翻卡與朗讀功能) -->
      <flash-card
        :sentences="sentences"
        :searchQuery="searchQuery"
        :selectedStructure="selectedStructure"
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
  setup() {
    const searchQuery = ref('')
    const selectedStructure = ref('全部')
    const structureOptions = ['全部', '肯定句', '疑問句', '祈使句', '省略句']
    const sentences = ref([
      {
        chinese: '早安，爸爸！',
        english: 'Good morning, dad!',
        flipped: false,
        image: '/images/env1_at_home/good_morning_dad.webp',
        structure: '省略句',
      },
      {
        chinese: '早安，媽媽！',
        english: 'Good morning, mom!',
        flipped: false,
        image: '/images/env1_at_home/good_morning_mom.webp',
        structure: '省略句',
      },
      {
        chinese: '今天是星期一，要開始學習的一週了。',
        english: "Today is Monday; it's time to start a learning week.",
        flipped: false,
        image: '/images/env1_at_home/monday_learning_week.webp',
        structure: getSentenceStructure(
          "Today is Monday; it's time to start a learning week.",
          '今天是星期一，要開始學習的一週了。',
        ),
      },
      {
        chinese: '今天的功課是什麼？',
        english: "What is today's homework?",
        flipped: false,
        image: '/images/env1_at_home/homework_today.webp',
        structure: getSentenceStructure("What is today's homework?", '今天的功課是什麼？'),
      },
      {
        chinese: '我來做今天的早餐。',
        english: "I'll make breakfast today.",
        flipped: false,
        image: '/images/env1_at_home/make_breakfast.webp',
        structure: getSentenceStructure("I'll make breakfast today.", '我來做今天的早餐。'),
      },
      {
        chinese: '我們一起吃飯吧！',
        english: "Let's eat together!",
        flipped: false,
        image: '/images/env1_at_home/eat_together.webp',
        structure: getSentenceStructure("Let's eat together!", '我們一起吃飯吧！'),
      },
      {
        chinese: '你覺得今天的飯菜如何？',
        english: "What do you think of today's meal?",
        flipped: false,
        image: '/images/env1_at_home/how_was_the_meal.webp',
        structure: getSentenceStructure(
          "What do you think of today's meal?",
          '你覺得今天的飯菜如何？',
        ),
      },
      {
        chinese: '我在學英文，今天學了新單字。',
        english: "I'm studying English; I learned new vocabulary today.",
        flipped: false,
        image: '/images/env1_at_home/studying_english.webp',
        structure: getSentenceStructure(
          "I'm studying English; I learned new vocabulary today.",
          '我在學英文，今天學了新單字。',
        ),
      },
      {
        chinese: '我準備做菜，誰想幫忙？',
        english: "I'm going to cook; who wants to help?",
        flipped: false,
        image: '/images/env1_at_home/help_cooking.webp',
        structure: getSentenceStructure(
          "I'm going to cook; who wants to help?",
          '我準備做菜，誰想幫忙？',
        ),
      },
      {
        chinese: '需要幫忙嗎？我可以幫你。',
        english: 'Do you need help? I can assist you.',
        flipped: false,
        image: '/images/env1_at_home/need_help.webp',
        structure: getSentenceStructure(
          'Do you need help? I can assist you.',
          '需要幫忙嗎？我可以幫你。',
        ),
      },
      {
        chinese: '午餐準備好了嗎？',
        english: 'Is lunch ready?',
        flipped: false,
        image: '/images/env1_at_home/lunch_ready.webp',
        structure: getSentenceStructure('Is lunch ready?', '午餐準備好了嗎？'),
      },
      {
        chinese: '我想上廁所。',
        english: 'I need to use the bathroom.',
        flipped: false,
        image: '/images/env1_at_home/use_bathroom.webp',
        structure: getSentenceStructure('I need to use the bathroom.', '我想上廁所。'),
      },
      {
        chinese: '你能幫我澆花嗎？',
        english: 'Could you water the plants for me?',
        flipped: false,
        image: '/images/env1_at_home/water_plants.webp',
        structure: getSentenceStructure('Could you water the plants for me?', '你能幫我澆花嗎？'),
      },
      {
        chinese: '我在看電視，你要一起看嗎？',
        english: "I'm watching TV; would you like to join me?",
        flipped: false,
        image: '/images/env1_at_home/watching_tv.webp',
        structure: getSentenceStructure(
          "I'm watching TV; would you like to join me?",
          '我在看電視，你要一起看嗎？',
        ),
      },
      {
        chinese: '我們一起去看電影吧！',
        english: "Let's go to the movies together!",
        flipped: false,
        image: '/images/env1_at_home/go_to_movies.webp',
        structure: getSentenceStructure("Let's go to the movies together!", '我們一起去看電影吧！'),
      },
      {
        chinese: '今晚有什麼計劃嗎？',
        english: 'Do you have any plans for tonight?',
        flipped: false,
        image: '/images/env1_at_home/plans_tonight.webp',
        structure: getSentenceStructure('Do you have any plans for tonight?', '今晚有什麼計劃嗎？'),
      },
      {
        chinese: '請幫我關掉燈。',
        english: 'Please turn off the lights for me.',
        flipped: false,
        image: '/images/env1_at_home/turn_off_lights.webp',
        structure: getSentenceStructure('Please turn off the lights for me.', '請幫我關掉燈。'),
      },
      {
        chinese: '可以借我點鹽嗎？',
        english: 'Could you pass me the salt?',
        flipped: false,
        image: '/images/env1_at_home/pass_the_salt.webp',
        structure: getSentenceStructure('Could you pass me the salt?', '可以借我點鹽嗎？'),
      },
      {
        chinese: '我有點餓了，準備去吃點東西。',
        english: "I'm a bit hungry; I'm going to get something to eat.",
        flipped: false,
        image: '/images/env1_at_home/getting_hungry.webp',
        structure: getSentenceStructure(
          "I'm a bit hungry; I'm going to get something to eat.",
          '我有點餓了，準備去吃點東西。',
        ),
      },
      {
        chinese: '記得鎖門哦。',
        english: 'Remember to lock the door, please.',
        flipped: false,
        image: '/images/env1_at_home/lock_the_door.webp',
        structure: getSentenceStructure('Remember to lock the door, please.', '記得鎖門哦。'),
      },
      {
        chinese: '我去洗碗，等我一下。',
        english: "I'm going to wash the dishes; wait for me.",
        flipped: false,
        image: '/images/env1_at_home/wash_dishes.webp',
        structure: getSentenceStructure(
          "I'm going to wash the dishes; wait for me.",
          '我去洗碗，等我一下。',
        ),
      },
      {
        chinese: '今天想看哪部電影？',
        english: 'Which movie do you want to watch today?',
        flipped: false,
        image: '/images/env1_at_home/which_movie.webp',
        structure: getSentenceStructure(
          'Which movie do you want to watch today?',
          '今天想看哪部電影？',
        ),
      },
      {
        chinese: '我們去找奶奶吧。',
        english: "Let's go and see grandma.",
        flipped: false,
        image: '/images/env1_at_home/visit_grandma.webp',
        structure: getSentenceStructure("Let's go and see grandma.", '我們去找奶奶吧。'),
      },
      {
        chinese: '你覺得這間房要整理嗎？',
        english: 'Do you think this room needs a cleaning?',
        flipped: false,
        image: '/images/env1_at_home/tidy_the_room.webp',
        structure: getSentenceStructure(
          'Do you think this room needs a cleaning?',
          '你覺得這間房要整理嗎？',
        ),
      },
      {
        chinese: '我可以幫你準備早餐。',
        english: 'I can help you prepare breakfast.',
        flipped: false,
        image: '/images/env1_at_home/prepare_breakfast.webp',
        structure: getSentenceStructure(
          'I can help you prepare breakfast.',
          '我可以幫你準備早餐。',
        ),
      },
      {
        chinese: '今天的晚餐很豐盛。',
        english: "Today's dinner is sumptuous.",
        flipped: false,
        image: '/images/env1_at_home/sumptuous_dinner.webp',
        structure: getSentenceStructure("Today's dinner is sumptuous.", '今天的晚餐很豐盛。'),
      },
      {
        chinese: '這頓飯要感謝媽媽的廚藝。',
        english: "This meal is thanks to mom's cooking.",
        flipped: false,
        image: '/images/env1_at_home/moms_cooking.webp',
        structure: getSentenceStructure(
          "This meal is thanks to mom's cooking.",
          '這頓飯要感謝媽媽的廚藝。',
        ),
      },
      {
        chinese: '我要洗衣服，你有乾淨的衣服嗎？',
        english: "I'm going to do the laundry; do you have clean clothes?",
        flipped: false,
        image: '/images/env1_at_home/do_laundry.webp',
        structure: getSentenceStructure(
          "I'm going to do the laundry; do you have clean clothes?",
          '我要洗衣服，你有乾淨的衣服嗎？',
        ),
      },
      {
        chinese: '幫我遞一下遙控器，謝謝！',
        english: 'Pass me the remote control, please!',
        flipped: false,
        image: '/images/env1_at_home/pass_remote_control.webp',
        structure: getSentenceStructure(
          'Pass me the remote control, please!',
          '幫我遞一下遙控器，謝謝！',
        ),
      },
      {
        chinese: '請不要在廚房裡大聲說話。',
        english: "Please don't shout in the kitchen.",
        flipped: false,
        image: '/images/env1_at_home/no_shouting_kitchen.webp',
        structure: getSentenceStructure(
          "Please don't shout in the kitchen.",
          '請不要在廚房裡大聲說話。',
        ),
      },
      {
        chinese: '真是個慵懶的週末啊！',
        english: "It's such a lazy weekend!",
        flipped: false,
        image: '/images/env1_at_home/lazy_weekend.webp',
        structure: getSentenceStructure("It's such a lazy weekend!", '真是個慵懶的週末啊！'),
      },
      {
        chinese: '我們一起打掃房間吧！',
        english: "Let's clean the room together!",
        flipped: false,
        image: '/images/env1_at_home/clean_room_together.webp',
        structure: getSentenceStructure("Let's clean the room together!", '我們一起打掃房間吧！'),
      },
      {
        chinese: '家裡有點亂，我們需要整理。',
        english: 'The house is a bit messy; we need to tidy up.',
        flipped: false,
        image: '/images/env1_at_home/messy_house.webp',
        structure: getSentenceStructure(
          'The house is a bit messy; we need to tidy up.',
          '家裡有點亂，我們需要整理。',
        ),
      },
      {
        chinese: '吃完飯記得把碗洗了哦。',
        english: 'Remember to wash the dishes after eating.',
        flipped: false,
        image: '/images/env1_at_home/wash_after_eating.webp',
        structure: getSentenceStructure(
          'Remember to wash the dishes after eating.',
          '吃完飯記得把碗洗了哦。',
        ),
      },
      {
        chinese: '我在看書，你在讀什麼？',
        english: "I'm reading a book; what are you reading?",
        flipped: false,
        image: '/images/env1_at_home/reading_book.webp',
        structure: getSentenceStructure(
          "I'm reading a book; what are you reading?",
          '我在看書，你在讀什麼？',
        ),
      },
      {
        chinese: '今天的茶真好喝。',
        english: 'The tea today is really delicious.',
        flipped: false,
        image: '/images/env1_at_home/delicious_tea.webp',
        structure: getSentenceStructure('The tea today is really delicious.', '今天的茶真好喝。'),
      },
      {
        chinese: '你看起來有點累，要不要休息？',
        english: 'You look a bit tired; would you like to take a rest?',
        flipped: false,
        image: '/images/env1_at_home/look_tired.webp',
        structure: getSentenceStructure(
          'You look a bit tired; would you like to take a rest?',
          '你看起來有點累，要不要休息？',
        ),
      },
      {
        chinese: '我來做菜，你幫忙切菜如何？',
        english: "I'll cook, how about you help chop the vegetables?",
        flipped: false,
        image: '/images/env1_at_home/chop_vegetables.webp',
        structure: getSentenceStructure(
          "I'll cook, how about you help chop the vegetables?",
          '我來做菜，你幫忙切菜如何？',
        ),
      },
      {
        chinese: '家的感覺真好，讓人放鬆。',
        english: "There's nothing like home; it really relaxes me.",
        flipped: false,
        image: '/images/env1_at_home/home_feels_good.webp',
        structure: getSentenceStructure(
          "There's nothing like home; it really relaxes me.",
          '家的感覺真好，讓人放鬆。',
        ),
      },
      {
        chinese: '這週末我們可以一起嘗試做點新菜。',
        english: 'We can try cooking something new together this weekend.',
        flipped: false,
        image: '/images/env1_at_home/try_new_recipe.webp',
        structure: getSentenceStructure(
          'We can try cooking something new together this weekend.',
          '這週末我們可以一起嘗試做點新菜。',
        ),
      },
      {
        chinese: '你看過那本書了嗎？',
        english: 'Have you read that book yet?',
        flipped: false,
        image: '/images/env1_at_home/read_that_book.webp',
        structure: getSentenceStructure('Have you read that book yet?', '你看過那本書了嗎？'),
      },
      {
        chinese: '有什麼需要我去買的嗎？',
        english: 'Is there anything you need me to buy?',
        flipped: false,
        image: '/images/env1_at_home/need_to_buy.webp',
        structure: getSentenceStructure(
          'Is there anything you need me to buy?',
          '有什麼需要我去買的嗎？',
        ),
      },
      {
        chinese: '今天的報紙已經送到了。',
        english: 'The newspaper has arrived today.',
        flipped: false,
        image: '/images/env1_at_home/newspaper_arrived.webp',
        structure: getSentenceStructure(
          'The newspaper has arrived today.',
          '今天的報紙已經送到了。',
        ),
      },
      {
        chinese: '我感覺有點冷，請把窗戶關上。',
        english: "I'm feeling a bit cold; please close the window.",
        flipped: false,
        image: '/images/env1_at_home/close_the_window.webp',
        structure: getSentenceStructure(
          "I'm feeling a bit cold; please close the window.",
          '我感覺有點冷，請把窗戶關上。',
        ),
      },
      {
        chinese: '可以幫我打掃一下客廳嗎？',
        english: 'Could you help me clean up the living room?',
        flipped: false,
        image: '/images/env1_at_home/clean_living_room.webp',
        structure: getSentenceStructure(
          'Could you help me clean up the living room?',
          '可以幫我打掃一下客廳嗎？',
        ),
      },
      {
        chinese: '我今天心情很好。',
        english: "I'm in a good mood today.",
        flipped: false,
        image: '/images/env1_at_home/good_mood.webp',
        structure: getSentenceStructure("I'm in a good mood today.", '我今天心情很好。'),
      },
      {
        chinese: '這個週末要不要去郊遊？',
        english: 'Do you want to go on a picnic this weekend?',
        flipped: false,
        image: '/images/env1_at_home/go_picnic.webp',
        structure: getSentenceStructure(
          'Do you want to go on a picnic this weekend?',
          '這個週末要不要去郊遊？',
        ),
      },
      {
        chinese: '記得給植物澆水哦。',
        english: 'Remember to water the plants.',
        flipped: false,
        image: '/images/env1_at_home/water_the_plants.webp',
        structure: getSentenceStructure('Remember to water the plants.', '記得給植物澆水哦。'),
      },
      {
        chinese: '我忙了一整天，現在想休息一下。',
        english: "I've been busy all day, now I want to rest.",
        flipped: false,
        image: '/images/env1_at_home/need_rest.webp',
        structure: getSentenceStructure(
          "I've been busy all day, now I want to rest.",
          '我忙了一整天，現在想休息一下。',
        ),
      },
      {
        chinese: '我得去換衣服，今天運動後汗流浹背。',
        english: 'I need to change clothes; I sweated a lot after exercising today.',
        flipped: false,
        image: '/images/env1_at_home/change_clothes.webp',
        structure: getSentenceStructure(
          'I need to change clothes; I sweated a lot after exercising today.',
          '我得去換衣服，今天運動後汗流浹背。',
        ),
      },
      {
        chinese: '你覺得冰箱的冷藏室是不是有點問題？',
        english: "Do you think there's an issue with the fridge's cooling?",
        flipped: false,
        image: '/images/env1_at_home/fridge_issue.webp',
        structure: getSentenceStructure(
          "Do you think there's an issue with the fridge's cooling?",
          '你覺得冰箱的冷藏室是不是有點問題？',
        ),
      },
      {
        chinese: '外面下雨了，我們待在家裡吧！',
        english: "It's raining outside; let's stay indoors!",
        flipped: false,
        image: '/images/env1_at_home/stay_indoors_rain.webp',
        structure: getSentenceStructure(
          "It's raining outside; let's stay indoors!",
          '外面下雨了，我們待在家裡吧！',
        ),
      },
      {
        chinese: '我想查看郵件，信件到了嗎？',
        english: 'I want to check the mail; has any mail arrived?',
        flipped: false,
        image: '/images/env1_at_home/check_mail.webp',
        structure: getSentenceStructure(
          'I want to check the mail; has any mail arrived?',
          '我想查看郵件，信件到了嗎？',
        ),
      },
      {
        chinese: '時間不早了，快點上床睡覺吧！',
        english: "It's getting late, hurry up and go to bed!",
        flipped: false,
        image: '/images/env1_at_home/go_to_bed.webp',
        structure: getSentenceStructure(
          "It's getting late, hurry up and go to bed!",
          '時間不早了，快點上床睡覺吧！',
        ),
      },
      {
        chinese: '晚安，祝你好夢！',
        english: 'Good night, sweet dreams!',
        flipped: false,
        image: '/images/env1_at_home/good_night.webp',
        structure: getSentenceStructure('Good night, sweet dreams!', '晚安，祝你好夢！'),
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
