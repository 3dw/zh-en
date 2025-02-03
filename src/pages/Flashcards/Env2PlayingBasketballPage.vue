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
        chinese: '您好，請問可以一起打球嗎？',
        english: 'Hello, can we play basketball together?',
        flipped: false,
      },
      { chinese: '好球！', english: 'Nice play!', flipped: false },
      { chinese: '傳給我！', english: 'Pass to me!', flipped: false },
      { chinese: '兩次運球！', english: 'Double dribble!', flipped: false },
      { chinese: '打手犯規！', english: 'Hand foul!', flipped: false },
      {
        chinese: '我先休息一下，去喝個水。',
        english: "I'll take a break and grab some water.",
        flipped: false,
      },
      { chinese: '明天見。', english: 'See you tomorrow.', flipped: false },
      { chinese: '快傳球！', english: 'Quick pass!', flipped: false },
      { chinese: '快攻！', english: 'Fast break!', flipped: false },
      { chinese: '準備接球！', english: 'Get ready to receive the ball!', flipped: false },
      { chinese: '防守！', english: 'Defense!', flipped: false },
      { chinese: '注意補防！', english: 'Watch your help defense!', flipped: false },
      { chinese: '三分球！', english: 'Three-pointer!', flipped: false },
      { chinese: '籃板球！', english: 'Rebound!', flipped: false },
      { chinese: '進攻！', english: 'Offense!', flipped: false },
      { chinese: '射門！', english: 'Shoot!', flipped: false },
      { chinese: '別猶豫，直接出手！', english: "Don't hesitate, take the shot!", flipped: false },
      { chinese: '換防！', english: 'Switch on defense!', flipped: false },
      { chinese: '犯規了，送罰球！', english: 'Foul! Free throws!', flipped: false },
      { chinese: '快跑！', english: 'Run!', flipped: false },
      { chinese: '我們需要球！', english: 'We need the ball!', flipped: false },
      { chinese: '籃球掉出來了！', english: 'The ball is loose!', flipped: false },
      { chinese: '趕快退防！', english: 'Get back on defense!', flipped: false },
      {
        chinese: '對方快攻，注意！',
        english: "They're on a fast break, watch out!",
        flipped: false,
      },
      { chinese: '小心你的手！', english: 'Watch your hands!', flipped: false },
      { chinese: '拿球！', english: 'Grab the ball!', flipped: false },
      {
        chinese: '好防守，不給他突破！',
        english: "Good defense, don't let him break!",
        flipped: false,
      },
      { chinese: '來個三秒違例！', english: 'Three-second violation!', flipped: false },
      { chinese: '快攻中，快點！', english: 'Fast break, hurry up!', flipped: false },
      {
        chinese: '你的個人犯規累積到五次了！',
        english: "You've got five personal fouls!",
        flipped: false,
      },
      { chinese: '準備好封阻！', english: 'Get set for a block!', flipped: false },
      { chinese: '你需要多運球！', english: 'You need to dribble more!', flipped: false },
      { chinese: '轉身突破！', english: 'Spin and drive!', flipped: false },
      { chinese: '後仰跳投！', english: 'Fadeaway jump shot!', flipped: false },
      { chinese: '空切！', english: 'Cut!', flipped: false },
      { chinese: '籃下補籃！', english: 'Crash the boards!', flipped: false },
      { chinese: '不要浪費機會！', english: "Don't waste the chance!", flipped: false },
      { chinese: '隊友暴扣得分！', english: 'Our teammate dunked the ball!', flipped: false },
      { chinese: '拼啦，不要放棄！', english: "Fight hard, don't give up!", flipped: false },
      {
        chinese: '我們有機會逆轉比賽！',
        english: 'We have a chance to come back!',
        flipped: false,
      },
      { chinese: '加強防守！', english: 'Tighten up on defense!', flipped: false },
      { chinese: '保持跑動不掉隊！', english: 'Keep moving, stay with us!', flipped: false },
      { chinese: '補領防守位置！', english: 'Get back in position!', flipped: false },
      { chinese: '陣地快攻！', english: 'Set a play for fast break!', flipped: false },
      {
        chinese: '大心臟，挑戰巨人！',
        english: 'Big heart, challenge the giants!',
        flipped: false,
      },
      {
        chinese: '球快要過半場了！',
        english: 'The ball is almost past the half-court!',
        flipped: false,
      },
      {
        chinese: '目前得分落後，要加油！',
        english: "We're trailing, let's push harder!",
        flipped: false,
      },
      { chinese: '外線需要支援！', english: 'We need help on the perimeter!', flipped: false },
      { chinese: '內線強攻！', english: 'Attack the paint!', flipped: false },
      { chinese: '穩住節奏！', english: 'Control the tempo!', flipped: false },
      { chinese: '好球，加油！', english: 'Good job, keep it up!', flipped: false },
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
