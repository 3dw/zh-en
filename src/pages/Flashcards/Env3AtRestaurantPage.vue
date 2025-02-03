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
      {
        chinese: '您好，請問有位子嗎？',
        english: 'Hello, is there any available table?',
        flipped: false,
      },
      {
        chinese: '我們家有四個人，可以安排一個大桌子嗎？',
        english: 'We have four people, can we arrange a big table?',
        flipped: false,
      },
      {
        chinese: '我們吃素，可以提供一些素食選項嗎？',
        english: 'We are vegetarian, can you provide some vegetarian options?',
        flipped: false,
      },
      {
        chinese: '請問這裡需要預約嗎？',
        english: 'Do we need a reservation here?',
        flipped: false,
      },
      { chinese: '我可以看一下菜單嗎？', english: 'May I see the menu, please?', flipped: false },
      {
        chinese: '請問今天的推薦菜有哪些？',
        english: "What are today's specialties?",
        flipped: false,
      },
      { chinese: '我想點這道菜。', english: 'I would like to order this dish.', flipped: false },
      { chinese: '可以來一杯冰水嗎？', english: 'Can I have an iced water?', flipped: false },
      {
        chinese: '請幫我加點熱水。',
        english: 'Could you add some hot water for me?',
        flipped: false,
      },
      {
        chinese: '這道菜有沒有不含香料的版本？',
        english: 'Is there a version of this dish without spices?',
        flipped: false,
      },
      {
        chinese: '請問這道湯是什麼做的？',
        english: 'May I know what ingredients are in this soup?',
        flipped: false,
      },
      { chinese: '我可以點甜點嗎？', english: 'Can I order some dessert?', flipped: false },
      {
        chinese: '請給我推薦一款當地的美食。',
        english: 'Please recommend a local specialty.',
        flipped: false,
      },
      {
        chinese: '我們準備共用一道菜，可以再點一份嗎？',
        english: 'We are going to share a dish, can we order another one?',
        flipped: false,
      },
      {
        chinese: '請問服務費包含在內嗎？',
        english: 'Is the service charge included?',
        flipped: false,
      },
      {
        chinese: '不好意思，我對海鮮過敏。',
        english: 'Sorry, I am allergic to seafood.',
        flipped: false,
      },
      {
        chinese: '請問這道菜太辣可以調整嗎？',
        english: 'Can you make this dish less spicy?',
        flipped: false,
      },
      {
        chinese: '可以幫我稍微調整口味嗎？',
        english: 'Could you adjust the seasoning, please?',
        flipped: false,
      },
      {
        chinese: '可以先上飲料再上菜嗎？',
        english: 'Can we have drinks before the main course?',
        flipped: false,
      },
      {
        chinese: '請問糕點在哪裡可以找到？',
        english: 'Where can I find the pastries?',
        flipped: false,
      },
      {
        chinese: '請問這裡有無素食選項嗎？',
        english: 'Do you have vegetarian options?',
        flipped: false,
      },
      { chinese: '這個菜看起來很好吃！', english: 'This dish looks delicious!', flipped: false },
      {
        chinese: '請問廚房可否送一些辣醬？',
        english: 'Could you have the kitchen bring some chili sauce?',
        flipped: false,
      },
      {
        chinese: '服務員，請問可以打包剩菜嗎？',
        english: 'Excuse me, could I have a take-away box for the leftovers?',
        flipped: false,
      },
      { chinese: '請問結帳在哪裡？', english: 'Where can I pay the bill?', flipped: false },
      { chinese: '這是我的信用卡。', english: 'Here is my credit card.', flipped: false },
      {
        chinese: '麻煩幫我分開計帳。',
        english: 'Could you split the check, please?',
        flipped: false,
      },
      {
        chinese: '這裡的餐點份量相當充足。',
        english: 'The portions here are quite generous.',
        flipped: false,
      },
      { chinese: '這道餐點味道很棒！', english: 'This dish tastes fantastic!', flipped: false },
      {
        chinese: '推薦我一些特色飲品吧。',
        english: 'Please recommend some signature drinks.',
        flipped: false,
      },
      {
        chinese: '請問這份沙拉有什麼配料？',
        english: 'What ingredients are in this salad?',
        flipped: false,
      },
      {
        chinese: '我希望這道菜少加點辣。',
        english: 'I prefer this dish with less spice.',
        flipped: false,
      },
      {
        chinese: '這份牛排煎得真是完美。',
        english: 'This steak is cooked perfectly.',
        flipped: false,
      },
      {
        chinese: '請問可以給我額外的醬汁嗎？',
        english: 'Could you bring extra sauce, please?',
        flipped: false,
      },
      {
        chinese: '這裡的氛圍讓人感覺很舒適。',
        english: 'The ambiance here is very comfortable.',
        flipped: false,
      },
      {
        chinese: '我還有點餓，可以再來點小菜嗎？',
        english: "I'm still a bit hungry, could I order an appetizer?",
        flipped: false,
      },
      {
        chinese: '這裡的服務非常周到。',
        english: 'The service here is very attentive.',
        flipped: false,
      },
      {
        chinese: '請問附近有停車場嗎？',
        english: 'Is there a parking lot nearby?',
        flipped: false,
      },
      {
        chinese: '真的很感謝你的推薦！',
        english: 'Thank you very much for your recommendation!',
        flipped: false,
      },
      {
        chinese: '我想要一份冰淇淋作為甜點。',
        english: 'I would like some ice cream for dessert.',
        flipped: false,
      },
      {
        chinese: '不好意思，上菜有點慢，可以催一下嗎？',
        english: 'Excuse me, the food is taking a while. Could you check on it?',
        flipped: false,
      },
      {
        chinese: '請問特殊餐點需要提前訂購嗎？',
        english: 'Do special dishes require advance ordering?',
        flipped: false,
      },
      {
        chinese: '這裡的餐具看起來非常有質感。',
        english: 'The cutlery here looks very elegant.',
        flipped: false,
      },
      {
        chinese: '請問這杯飲料可以不加糖嗎？',
        english: 'Could I have this drink without sugar?',
        flipped: false,
      },
      {
        chinese: '我可以再多點一份這個湯嗎？',
        english: 'Can I have another serving of this soup?',
        flipped: false,
      },
      {
        chinese: '服務態度真好，謝謝您。',
        english: 'The service is excellent, thank you.',
        flipped: false,
      },
      {
        chinese: '這裡的料理真讓人驚喜。',
        english: 'The food here is pleasantly surprising.',
        flipped: false,
      },
      {
        chinese: '我想點一份煎魚，但請不要放鹽。',
        english: 'I would like to order a grilled fish, please without salt.',
        flipped: false,
      },
      {
        chinese: '在點餐前，我想確認一下過敏原。',
        english: "Before ordering, I'd like to check for allergens.",
        flipped: false,
      },
      {
        chinese: '請問能推薦一款適合配紅酒的菜餚嗎？',
        english: 'Could you recommend a dish that pairs well with red wine?',
        flipped: false,
      },
      {
        chinese: '這家餐廳的環境讓人感到溫馨舒適。',
        english: 'This restaurant has a warm and cozy atmosphere.',
        flipped: false,
      },
      {
        chinese: '用餐愉快，謝謝您的服務！',
        english: 'Thank you for the great service, enjoy your meal!',
        flipped: false,
      },
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
