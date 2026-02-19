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
    const structureOptions = ['全部', '肯定句', '疑問句', '祈使句']
    const sentences = ref([
      {
        chinese: '您好，請問有位子嗎？',
        english: 'Hello, is there any available table?',
        flipped: false,
        structure: getSentenceStructure(
          'Hello, is there any available table?',
          '您好，請問有位子嗎？',
        ),
      },
      {
        chinese: '我們家有四個人，可以安排一個大桌子嗎？',
        english: 'We have four people, can we arrange a big table?',
        flipped: false,
        structure: getSentenceStructure(
          'We have four people, can we arrange a big table?',
          '我們家有四個人，可以安排一個大桌子嗎？',
        ),
      },
      {
        chinese: '我們吃素，可以提供一些素食選項嗎？',
        english: 'We are vegetarian, can you provide some vegetarian options?',
        flipped: false,
        structure: getSentenceStructure(
          'We are vegetarian, can you provide some vegetarian options?',
          '我們吃素，可以提供一些素食選項嗎？',
        ),
      },
      {
        chinese: '請問這裡需要預約嗎？',
        english: 'Do we need a reservation here?',
        flipped: false,
        structure: getSentenceStructure('Do we need a reservation here?', '請問這裡需要預約嗎？'),
      },
      {
        chinese: '我可以看一下菜單嗎？',
        english: 'May I see the menu, please?',
        flipped: false,
        structure: getSentenceStructure('May I see the menu, please?', '我可以看一下菜單嗎？'),
      },
      {
        chinese: '請問今天的推薦菜有哪些？',
        english: "What are today's specialties?",
        flipped: false,
        structure: getSentenceStructure(
          "What are today's specialties?",
          '請問今天的推薦菜有哪些？',
        ),
      },
      {
        chinese: '我想點這道菜。',
        english: 'I would like to order this dish.',
        flipped: false,
        structure: getSentenceStructure('I would like to order this dish.', '我想點這道菜。'),
      },
      {
        chinese: '可以來一杯冰水嗎？',
        english: 'Can I have an iced water?',
        flipped: false,
        structure: getSentenceStructure('Can I have an iced water?', '可以來一杯冰水嗎？'),
      },
      {
        chinese: '請幫我加點熱水。',
        english: 'Could you add some hot water for me?',
        flipped: false,
        structure: getSentenceStructure('Could you add some hot water for me?', '請幫我加點熱水。'),
      },
      {
        chinese: '這道菜有沒有不含香料的版本？',
        english: 'Is there a version of this dish without spices?',
        flipped: false,
        structure: getSentenceStructure(
          'Is there a version of this dish without spices?',
          '這道菜有沒有不含香料的版本？',
        ),
      },
      {
        chinese: '請問這道湯是什麼做的？',
        english: 'May I know what ingredients are in this soup?',
        flipped: false,
        structure: getSentenceStructure(
          'May I know what ingredients are in this soup?',
          '請問這道湯是什麼做的？',
        ),
      },
      {
        chinese: '我可以點甜點嗎？',
        english: 'Can I order some dessert?',
        flipped: false,
        structure: getSentenceStructure('Can I order some dessert?', '我可以點甜點嗎？'),
      },
      {
        chinese: '請給我推薦一款當地的美食。',
        english: 'Please recommend a local specialty.',
        flipped: false,
        structure: getSentenceStructure(
          'Please recommend a local specialty.',
          '請給我推薦一款當地的美食。',
        ),
      },
      {
        chinese: '我們準備共用一道菜，可以再點一份嗎？',
        english: 'We are going to share a dish, can we order another one?',
        flipped: false,
        structure: getSentenceStructure(
          'We are going to share a dish, can we order another one?',
          '我們準備共用一道菜，可以再點一份嗎？',
        ),
      },
      {
        chinese: '請問服務費包含在內嗎？',
        english: 'Is the service charge included?',
        flipped: false,
        structure: getSentenceStructure(
          'Is the service charge included?',
          '請問服務費包含在內嗎？',
        ),
      },
      {
        chinese: '不好意思，我對海鮮過敏。',
        english: 'Sorry, I am allergic to seafood.',
        flipped: false,
        structure: getSentenceStructure(
          'Sorry, I am allergic to seafood.',
          '不好意思，我對海鮮過敏。',
        ),
      },
      {
        chinese: '請問這道菜太辣可以調整嗎？',
        english: 'Can you make this dish less spicy?',
        flipped: false,
        structure: getSentenceStructure(
          'Can you make this dish less spicy?',
          '請問這道菜太辣可以調整嗎？',
        ),
      },
      {
        chinese: '可以幫我稍微調整口味嗎？',
        english: 'Could you adjust the seasoning, please?',
        flipped: false,
        structure: getSentenceStructure(
          'Could you adjust the seasoning, please?',
          '可以幫我稍微調整口味嗎？',
        ),
      },
      {
        chinese: '可以先上飲料再上菜嗎？',
        english: 'Can we have drinks before the main course?',
        flipped: false,
        structure: getSentenceStructure(
          'Can we have drinks before the main course?',
          '可以先上飲料再上菜嗎？',
        ),
      },
      {
        chinese: '請問糕點在哪裡可以找到？',
        english: 'Where can I find the pastries?',
        flipped: false,
        structure: getSentenceStructure(
          'Where can I find the pastries?',
          '請問糕點在哪裡可以找到？',
        ),
      },
      {
        chinese: '請問這裡有無素食選項嗎？',
        english: 'Do you have vegetarian options?',
        flipped: false,
        structure: getSentenceStructure(
          'Do you have vegetarian options?',
          '請問這裡有無素食選項嗎？',
        ),
      },
      {
        chinese: '這個菜看起來很好吃！',
        english: 'This dish looks delicious!',
        flipped: false,
        structure: getSentenceStructure('This dish looks delicious!', '這個菜看起來很好吃！'),
      },
      {
        chinese: '請問廚房可否送一些辣醬？',
        english: 'Could you have the kitchen bring some chili sauce?',
        flipped: false,
        structure: getSentenceStructure(
          'Could you have the kitchen bring some chili sauce?',
          '請問廚房可否送一些辣醬？',
        ),
      },
      {
        chinese: '服務員，請問可以打包剩菜嗎？',
        english: 'Excuse me, could I have a take-away box for the leftovers?',
        flipped: false,
        structure: getSentenceStructure(
          'Excuse me, could I have a take-away box for the leftovers?',
          '服務員，請問可以打包剩菜嗎？',
        ),
      },
      {
        chinese: '請問結帳在哪裡？',
        english: 'Where can I pay the bill?',
        flipped: false,
        structure: getSentenceStructure('Where can I pay the bill?', '請問結帳在哪裡？'),
      },
      {
        chinese: '這是我的信用卡。',
        english: 'Here is my credit card.',
        flipped: false,
        structure: getSentenceStructure('Here is my credit card.', '這是我的信用卡。'),
      },
      {
        chinese: '麻煩幫我分開計帳。',
        english: 'Could you split the check, please?',
        flipped: false,
        structure: getSentenceStructure('Could you split the check, please?', '麻煩幫我分開計帳。'),
      },
      {
        chinese: '這裡的餐點份量相當充足。',
        english: 'The portions here are quite generous.',
        flipped: false,
        structure: getSentenceStructure(
          'The portions here are quite generous.',
          '這裡的餐點份量相當充足。',
        ),
      },
      {
        chinese: '這道餐點味道很棒！',
        english: 'This dish tastes fantastic!',
        flipped: false,
        structure: getSentenceStructure('This dish tastes fantastic!', '這道餐點味道很棒！'),
      },
      {
        chinese: '推薦我一些特色飲品吧。',
        english: 'Please recommend some signature drinks.',
        flipped: false,
        structure: getSentenceStructure(
          'Please recommend some signature drinks.',
          '推薦我一些特色飲品吧。',
        ),
      },
      {
        chinese: '請問這份沙拉有什麼配料？',
        english: 'What ingredients are in this salad?',
        flipped: false,
        structure: getSentenceStructure(
          'What ingredients are in this salad?',
          '請問這份沙拉有什麼配料？',
        ),
      },
      {
        chinese: '我希望這道菜少加點辣。',
        english: 'I prefer this dish with less spice.',
        flipped: false,
        structure: getSentenceStructure(
          'I prefer this dish with less spice.',
          '我希望這道菜少加點辣。',
        ),
      },
      {
        chinese: '這份牛排煎得真是完美。',
        english: 'This steak is cooked perfectly.',
        flipped: false,
        structure: getSentenceStructure(
          'This steak is cooked perfectly.',
          '這份牛排煎得真是完美。',
        ),
      },
      {
        chinese: '請問可以給我額外的醬汁嗎？',
        english: 'Could you bring extra sauce, please?',
        flipped: false,
        structure: getSentenceStructure(
          'Could you bring extra sauce, please?',
          '請問可以給我額外的醬汁嗎？',
        ),
      },
      {
        chinese: '這裡的氛圍讓人感覺很舒適。',
        english: 'The ambiance here is very comfortable.',
        flipped: false,
        structure: getSentenceStructure(
          'The ambiance here is very comfortable.',
          '這裡的氛圍讓人感覺很舒適。',
        ),
      },
      {
        chinese: '我還有點餓，可以再來點小菜嗎？',
        english: "I'm still a bit hungry, could I order an appetizer?",
        flipped: false,
        structure: getSentenceStructure(
          "I'm still a bit hungry, could I order an appetizer?",
          '我還有點餓，可以再來點小菜嗎？',
        ),
      },
      {
        chinese: '這裡的服務非常周到。',
        english: 'The service here is very attentive.',
        flipped: false,
        structure: getSentenceStructure(
          'The service here is very attentive.',
          '這裡的服務非常周到。',
        ),
      },
      {
        chinese: '請問附近有停車場嗎？',
        english: 'Is there a parking lot nearby?',
        flipped: false,
        structure: getSentenceStructure('Is there a parking lot nearby?', '請問附近有停車場嗎？'),
      },
      {
        chinese: '真的很感謝你的推薦！',
        english: 'Thank you very much for your recommendation!',
        flipped: false,
        structure: getSentenceStructure(
          'Thank you very much for your recommendation!',
          '真的很感謝你的推薦！',
        ),
      },
      {
        chinese: '我想要一份冰淇淋作為甜點。',
        english: 'I would like some ice cream for dessert.',
        flipped: false,
        structure: getSentenceStructure(
          'I would like some ice cream for dessert.',
          '我想要一份冰淇淋作為甜點。',
        ),
      },
      {
        chinese: '不好意思，上菜有點慢，可以催一下嗎？',
        english: 'Excuse me, the food is taking a while. Could you check on it?',
        flipped: false,
        structure: getSentenceStructure(
          'Excuse me, the food is taking a while. Could you check on it?',
          '不好意思，上菜有點慢，可以催一下嗎？',
        ),
      },
      {
        chinese: '請問特殊餐點需要提前訂購嗎？',
        english: 'Do special dishes require advance ordering?',
        flipped: false,
        structure: getSentenceStructure(
          'Do special dishes require advance ordering?',
          '請問特殊餐點需要提前訂購嗎？',
        ),
      },
      {
        chinese: '這裡的餐具看起來非常有質感。',
        english: 'The cutlery here looks very elegant.',
        flipped: false,
        structure: getSentenceStructure(
          'The cutlery here looks very elegant.',
          '這裡的餐具看起來非常有質感。',
        ),
      },
      {
        chinese: '請問這杯飲料可以不加糖嗎？',
        english: 'Could I have this drink without sugar?',
        flipped: false,
        structure: getSentenceStructure(
          'Could I have this drink without sugar?',
          '請問這杯飲料可以不加糖嗎？',
        ),
      },
      {
        chinese: '我可以再多點一份這個湯嗎？',
        english: 'Can I have another serving of this soup?',
        flipped: false,
        structure: getSentenceStructure(
          'Can I have another serving of this soup?',
          '我可以再多點一份這個湯嗎？',
        ),
      },
      {
        chinese: '服務態度真好，謝謝您。',
        english: 'The service is excellent, thank you.',
        flipped: false,
        structure: getSentenceStructure(
          'The service is excellent, thank you.',
          '服務態度真好，謝謝您。',
        ),
      },
      {
        chinese: '這裡的料理真讓人驚喜。',
        english: 'The food here is pleasantly surprising.',
        flipped: false,
        structure: getSentenceStructure(
          'The food here is pleasantly surprising.',
          '這裡的料理真讓人驚喜。',
        ),
      },
      {
        chinese: '我想點一份煎魚，但請不要放鹽。',
        english: 'I would like to order a grilled fish, please without salt.',
        flipped: false,
        structure: getSentenceStructure(
          'I would like to order a grilled fish, please without salt.',
          '我想點一份煎魚，但請不要放鹽。',
        ),
      },
      {
        chinese: '在點餐前，我想確認一下過敏原。',
        english: "Before ordering, I'd like to check for allergens.",
        flipped: false,
        structure: getSentenceStructure(
          "Before ordering, I'd like to check for allergens.",
          '在點餐前，我想確認一下過敏原。',
        ),
      },
      {
        chinese: '請問能推薦一款適合配紅酒的菜餚嗎？',
        english: 'Could you recommend a dish that pairs well with red wine?',
        flipped: false,
        structure: getSentenceStructure(
          'Could you recommend a dish that pairs well with red wine?',
          '請問能推薦一款適合配紅酒的菜餚嗎？',
        ),
      },
      {
        chinese: '這家餐廳的環境讓人感到溫馨舒適。',
        english: 'This restaurant has a warm and cozy atmosphere.',
        flipped: false,
        structure: getSentenceStructure(
          'This restaurant has a warm and cozy atmosphere.',
          '這家餐廳的環境讓人感到溫馨舒適。',
        ),
      },
      {
        chinese: '用餐愉快，謝謝您的服務！',
        english: 'Thank you for the great service, enjoy your meal!',
        flipped: false,
        structure: getSentenceStructure(
          'Thank you for the great service, enjoy your meal!',
          '用餐愉快，謝謝您的服務！',
        ),
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
