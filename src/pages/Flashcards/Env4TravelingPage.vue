<template>
  <q-page class="op-page q-pa-md">
    <div class="word-card-list">
      <h1 class="page-title">常用旅遊對話句子 (點擊空白處可翻面)</h1>
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
        chinese: '我迷路了，能幫我指路嗎？',
        english: "I'm lost, could you guide me?",
        flipped: false,
      },
      {
        chinese: '請問您有地圖嗎？',
        english: 'Do you have a map?',
        flipped: false,
      },
      {
        chinese: '請問您說中文嗎？',
        english: 'Do you speak Chinese?',
        flipped: false,
      },
      {
        chinese: '可以幫我們拍張照嗎？',
        english: 'Can you take a photo for us?',
        flipped: false,
      },
      {
        chinese: '請問，這輛巴士去火車站嗎？',
        english: 'Excuse me, does this bus go to the train station?',
        flipped: false,
      },
      { chinese: '這裡可以買到機票嗎？', english: 'Can I buy a ticket here?', flipped: false },
      {
        chinese: '我需要一張去巴黎的飛機票。',
        english: 'I need a ticket to Paris.',
        flipped: false,
      },
      {
        chinese: '請問登機口在哪裡？',
        english: 'Could you please tell me which gate is for boarding?',
        flipped: false,
      },
      { chinese: '這個航班有延誤嗎？', english: 'Is this flight delayed?', flipped: false },
      {
        chinese: '安檢那邊該怎麼走？',
        english: 'How do I get to the security check?',
        flipped: false,
      },
      {
        chinese: '這裡能使用信用卡付款嗎？',
        english: 'Can I pay with a credit card here?',
        flipped: false,
      },
      {
        chinese: '請問去哪裡換乘地鐵？',
        english: 'Excuse me, where can I transfer to the subway?',
        flipped: false,
      },
      { chinese: '這班公車多久一班？', english: 'How often does this bus run?', flipped: false },
      {
        chinese: '這附近有旅遊資訊中心嗎？',
        english: 'Is there a tourist information center nearby?',
        flipped: false,
      },
      {
        chinese: '我訂了這間飯店的房間。',
        english: 'I have a reservation at this hotel.',
        flipped: false,
      },
      {
        chinese: '請問辦理入住手續在哪裡？',
        english: 'Where can I check in, please?',
        flipped: false,
      },
      {
        chinese: '我的行李似乎沒有上機。',
        english: "It seems my luggage didn't make it on the plane.",
        flipped: false,
      },
      { chinese: '我可以使用無線網路嗎？', english: 'May I use the Wi-Fi?', flipped: false },
      {
        chinese: '能否幫我叫一輛計程車？',
        english: 'Could you please call a taxi for me?',
        flipped: false,
      },
      {
        chinese: '請問市區如何前往機場？',
        english: 'How can I get from the city to the airport?',
        flipped: false,
      },
      { chinese: '我需要一份城市地圖。', english: 'I need a map of the city.', flipped: false },
      {
        chinese: '這條路是直行還是左轉？',
        english: 'Should I go straight or turn left on this road?',
        flipped: false,
      },
      {
        chinese: '請給我一杯水，謝謝。',
        english: 'May I have a glass of water, please?',
        flipped: false,
      },
      {
        chinese: '我想預訂明天的市區觀光團。',
        english: "I'd like to book a city tour for tomorrow.",
        flipped: false,
      },
      {
        chinese: '附近有推薦的餐廳嗎？',
        english: 'Are there any recommended restaurants nearby?',
        flipped: false,
      },
      { chinese: '我在等我的接駁車。', english: "I'm waiting for my shuttle.", flipped: false },
      {
        chinese: '請問這裡是行李提領區嗎？',
        english: 'Is this the baggage claim area?',
        flipped: false,
      },
      { chinese: '請問下一班火車幾點？', english: 'What time is the next train?', flipped: false },
      {
        chinese: '這條路會一直到機場嗎？',
        english: 'Does this road lead directly to the airport?',
        flipped: false,
      },
      {
        chinese: '我遲到了，可以重新預訂登機嗎？',
        english: "I'm late, can I rebook my boarding?",
        flipped: false,
      },
      { chinese: '請問這個是直達車嗎？', english: 'Is this a direct service?', flipped: false },
      {
        chinese: '這趟航班是否包含餐食？',
        english: 'Does this flight include meals?',
        flipped: false,
      },
      { chinese: '我可以辦理退票嗎？', english: 'Can I cancel my ticket?', flipped: false },
      {
        chinese: '我需要一個房間加床。',
        english: 'I need an extra bed in my room.',
        flipped: false,
      },
      {
        chinese: '請問機場附近有藥局嗎？',
        english: 'Is there a pharmacy near the airport?',
        flipped: false,
      },
      {
        chinese: '我的航班臨時取消了。',
        english: 'My flight was canceled last minute.',
        flipped: false,
      },
      {
        chinese: '我想改變我的座位安排。',
        english: "I'd like to change my seating arrangement.",
        flipped: false,
      },
      {
        chinese: '請問辦理登機手續要多久？',
        english: 'How long does the check-in process take?',
        flipped: false,
      },
      {
        chinese: '這裡可以換匯嗎？',
        english: 'Is there a place here where I can exchange money?',
        flipped: false,
      },
      {
        chinese: '請問附近有洗手間嗎？',
        english: 'Could you tell me where the nearest restroom is?',
        flipped: false,
      },
      {
        chinese: '我需要一張返回機票的預訂證明。',
        english: 'I need a confirmation for my return ticket.',
        flipped: false,
      },
      {
        chinese: '這輛計程車可以載我到市中心嗎？',
        english: 'Can this taxi take me to the city center?',
        flipped: false,
      },
      {
        chinese: '請問捷運哪一站下車較近？',
        english: 'Which MRT station is closest?',
        flipped: false,
      },
      {
        chinese: '我迷路了，能幫我導航嗎？',
        english: "I'm lost, could you guide me?",
        flipped: false,
      },
      { chinese: '請問這裡需不需要付小費？', english: 'Do they expect tips here?', flipped: false },
      { chinese: '機場休息室在哪裡？', english: 'Where is the airport lounge?', flipped: false },
      {
        chinese: '請給我看一下我的行程表。',
        english: 'Please show me my itinerary.',
        flipped: false,
      },
      {
        chinese: '當地有什麼必訪景點？',
        english: 'What are the must-see attractions here?',
        flipped: false,
      },
      {
        chinese: '請問如何預約機場接送服務？',
        english: 'How can I book airport transfer service?',
        flipped: false,
      },
      {
        chinese: '這是我的登機證，請問還需要其他證件嗎？',
        english: 'This is my boarding pass. Do I need any other documents?',
        flipped: false,
      },
      {
        chinese: '我想確認我的訂位狀態。',
        english: "I'd like to confirm my reservation.",
        flipped: false,
      },
      {
        chinese: '請問飛機上可以使用手機嗎？',
        english: 'Is it allowed to use my phone on the plane?',
        flipped: false,
      },
      {
        chinese: '我需要一個雙人房，最好有海景。',
        english: 'I need a double room, preferably with an ocean view.',
        flipped: false,
      },
      {
        chinese: '謝謝你的幫忙，祝你有美好的一天！',
        english: 'Thank you for your help, have a great day!',
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
