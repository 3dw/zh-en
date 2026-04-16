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
        chinese: '您好，請問可以一起打球嗎？',
        english: 'Hello, can we play basketball together?',
        flipped: false,
        image: '/images/env2_playing_basketball/play_together.webp',
        structure: getSentenceStructure(
          'Hello, can we play basketball together?',
          '您好，請問可以一起打球嗎？',
        ),
      },
      {
        chinese: '好球！',
        english: 'Nice play!',
        flipped: false,
        image: '/images/env2_playing_basketball/nice_play.webp',
        structure: getSentenceStructure('Nice play!', '好球！'),
      },
      {
        chinese: '傳給我！',
        english: 'Pass to me!',
        flipped: false,
        image: '/images/env2_playing_basketball/pass_to_me.webp',
        structure: getSentenceStructure('Pass to me!', '傳給我！'),
      },
      {
        chinese: '兩次運球！',
        english: 'Double dribble!',
        flipped: false,
        image: '/images/env2_playing_basketball/double_dribble.webp',
        structure: getSentenceStructure('Double dribble!', '兩次運球！'),
      },
      {
        chinese: '打手犯規！',
        english: 'Hand foul!',
        flipped: false,
        image: '/images/env2_playing_basketball/hand_foul.webp',
        structure: getSentenceStructure('Hand foul!', '打手犯規！'),
      },
      {
        chinese: '我先休息一下，去喝個水。',
        english: "I'll take a break and grab some water.",
        flipped: false,
        image: '/images/env2_playing_basketball/take_a_break.webp',
        structure: getSentenceStructure(
          "I'll take a break and grab some water.",
          '我先休息一下，去喝個水。',
        ),
      },
      {
        chinese: '明天見。',
        english: 'See you tomorrow.',
        flipped: false,
        image: '/images/env2_playing_basketball/see_you_tomorrow.webp',
        structure: getSentenceStructure('See you tomorrow.', '明天見。'),
      },
      {
        chinese: '快傳球！',
        english: 'Quick pass!',
        flipped: false,
        image: '/images/env2_playing_basketball/quick_pass.webp',
        structure: getSentenceStructure('Quick pass!', '快傳球！'),
      },
      {
        chinese: '快攻！',
        english: 'Fast break!',
        flipped: false,
        image: '/images/env2_playing_basketball/fast_break.webp',
        structure: getSentenceStructure('Fast break!', '快攻！'),
      },
      {
        chinese: '準備接球！',
        english: 'Get ready to receive the ball!',
        flipped: false,
        image: '/images/env2_playing_basketball/ready_to_receive.webp',
        structure: getSentenceStructure('Get ready to receive the ball!', '準備接球！'),
      },
      {
        chinese: '防守！',
        english: 'Defense!',
        flipped: false,
        image: '/images/env2_playing_basketball/defense.webp',
        structure: getSentenceStructure('Defense!', '防守！'),
      },
      {
        chinese: '注意補防！',
        english: 'Watch your help defense!',
        flipped: false,
        image: '/images/env2_playing_basketball/help_defense.webp',
        structure: getSentenceStructure('Watch your help defense!', '注意補防！'),
      },
      {
        chinese: '三分球！',
        english: 'Three-pointer!',
        flipped: false,
        image: '/images/env2_playing_basketball/three_pointer.webp',
        structure: getSentenceStructure('Three-pointer!', '三分球！'),
      },
      {
        chinese: '籃板球！',
        english: 'Rebound!',
        flipped: false,
        image: '/images/env2_playing_basketball/rebound.webp',
        structure: getSentenceStructure('Rebound!', '籃板球！'),
      },
      {
        chinese: '進攻！',
        english: 'Offense!',
        flipped: false,
        image: '/images/env2_playing_basketball/offense.webp',
        structure: getSentenceStructure('Offense!', '進攻！'),
      },
      {
        chinese: '射門！',
        english: 'Shoot!',
        flipped: false,
        image: '/images/env2_playing_basketball/shoot.webp',
        structure: getSentenceStructure('Shoot!', '射門！'),
      },
      {
        chinese: '別猶豫，直接出手！',
        english: "Don't hesitate, take the shot!",
        flipped: false,
        image: '/images/env2_playing_basketball/take_the_shot.webp',
        structure: getSentenceStructure("Don't hesitate, take the shot!", '別猶豫，直接出手！'),
      },
      {
        chinese: '換防！',
        english: 'Switch on defense!',
        flipped: false,
        image: '/images/env2_playing_basketball/switch_defense.webp',
        structure: getSentenceStructure('Switch on defense!', '換防！'),
      },
      {
        chinese: '犯規了，送罰球！',
        english: 'Foul! Free throws!',
        flipped: false,
        image: '/images/env2_playing_basketball/free_throws.webp',
        structure: getSentenceStructure('Foul! Free throws!', '犯規了，送罰球！'),
      },
      {
        chinese: '快跑！',
        english: 'Run!',
        flipped: false,
        image: '/images/env2_playing_basketball/run.webp',
        structure: getSentenceStructure('Run!', '快跑！'),
      },
      {
        chinese: '我們需要球！',
        english: 'We need the ball!',
        flipped: false,
        image: '/images/env2_playing_basketball/need_the_ball.webp',
        structure: getSentenceStructure('We need the ball!', '我們需要球！'),
      },
      {
        chinese: '籃球掉出來了！',
        english: 'The ball is loose!',
        flipped: false,
        image: '/images/env2_playing_basketball/ball_is_loose.webp',
        structure: getSentenceStructure('The ball is loose!', '籃球掉出來了！'),
      },
      {
        chinese: '趕快退防！',
        english: 'Get back on defense!',
        flipped: false,
        image: '/images/env2_playing_basketball/get_back_defense.webp',
        structure: getSentenceStructure('Get back on defense!', '趕快退防！'),
      },
      {
        chinese: '對方快攻，注意！',
        english: "They're on a fast break, watch out!",
        flipped: false,
        image: '/images/env2_playing_basketball/watch_out_fast_break.webp',
        structure: getSentenceStructure("They're on a fast break, watch out!", '對方快攻，注意！'),
      },
      {
        chinese: '小心你的手！',
        english: 'Watch your hands!',
        flipped: false,
        image: '/images/env2_playing_basketball/watch_your_hands.webp',
        structure: getSentenceStructure('Watch your hands!', '小心你的手！'),
      },
      {
        chinese: '拿球！',
        english: 'Grab the ball!',
        flipped: false,
        image: '/images/env2_playing_basketball/grab_the_ball.webp',
        structure: getSentenceStructure('Grab the ball!', '拿球！'),
      },
      {
        chinese: '好防守，不給他突破！',
        english: "Good defense, don't let him break!",
        flipped: false,
        image: '/images/env2_playing_basketball/good_defense.webp',
        structure: getSentenceStructure(
          "Good defense, don't let him break!",
          '好防守，不給他突破！',
        ),
      },
      {
        chinese: '來個三秒違例！',
        english: 'Three-second violation!',
        flipped: false,
        image: '/images/env2_playing_basketball/three_second_violation.webp',
        structure: getSentenceStructure('Three-second violation!', '來個三秒違例！'),
      },
      {
        chinese: '快攻中，快點！',
        english: 'Fast break, hurry up!',
        flipped: false,
        image: '/images/env2_playing_basketball/fast_break_hurry.webp',
        structure: getSentenceStructure('Fast break, hurry up!', '快攻中，快點！'),
      },
      {
        chinese: '你的個人犯規累積到五次了！',
        english: "You've got five personal fouls!",
        flipped: false,
        image: '/images/env2_playing_basketball/five_fouls.webp',
        structure: getSentenceStructure(
          "You've got five personal fouls!",
          '你的個人犯規累積到五次了！',
        ),
      },
      {
        chinese: '準備好封阻！',
        english: 'Get set for a block!',
        flipped: false,
        image: '/images/env2_playing_basketball/get_set_block.webp',
        structure: getSentenceStructure('Get set for a block!', '準備好封阻！'),
      },
      {
        chinese: '你需要多運球！',
        english: 'You need to dribble more!',
        flipped: false,
        image: '/images/env2_playing_basketball/dribble_more.webp',
        structure: getSentenceStructure('You need to dribble more!', '你需要多運球！'),
      },
      {
        chinese: '轉身突破！',
        english: 'Spin and drive!',
        flipped: false,
        image: '/images/env2_playing_basketball/spin_and_drive.webp',
        structure: getSentenceStructure('Spin and drive!', '轉身突破！'),
      },
      {
        chinese: '後仰跳投！',
        english: 'Fadeaway jump shot!',
        flipped: false,
        image: '/images/env2_playing_basketball/fadeaway_shot.webp',
        structure: getSentenceStructure('Fadeaway jump shot!', '後仰跳投！'),
      },
      {
        chinese: '空切！',
        english: 'Cut!',
        flipped: false,
        image: '/images/env2_playing_basketball/cut.webp',
        structure: getSentenceStructure('Cut!', '空切！'),
      },
      {
        chinese: '籃下補籃！',
        english: 'Crash the boards!',
        flipped: false,
        image: '/images/env2_playing_basketball/crash_the_boards.webp',
        structure: getSentenceStructure('Crash the boards!', '籃下補籃！'),
      },
      {
        chinese: '不要浪費機會！',
        english: "Don't waste the chance!",
        flipped: false,
        image: '/images/env2_playing_basketball/dont_waste_chance.webp',
        structure: getSentenceStructure("Don't waste the chance!", '不要浪費機會！'),
      },
      {
        chinese: '隊友暴扣得分！',
        english: 'Our teammate dunked the ball!',
        flipped: false,
        image: '/images/env2_playing_basketball/teammate_dunked.webp',
        structure: getSentenceStructure('Our teammate dunked the ball!', '隊友暴扣得分！'),
      },
      {
        chinese: '拼啦，不要放棄！',
        english: "Fight hard, don't give up!",
        flipped: false,
        image: '/images/env2_playing_basketball/dont_give_up.webp',
        structure: getSentenceStructure("Fight hard, don't give up!", '拼啦，不要放棄！'),
      },
      {
        chinese: '我們有機會逆轉比賽！',
        english: 'We have a chance to come back!',
        flipped: false,
        image: '/images/env2_playing_basketball/come_back.webp',
        structure: getSentenceStructure('We have a chance to come back!', '我們有機會逆轉比賽！'),
      },
      {
        chinese: '加強防守！',
        english: 'Tighten up on defense!',
        flipped: false,
        image: '/images/env2_playing_basketball/tighten_defense.webp',
        structure: getSentenceStructure('Tighten up on defense!', '加強防守！'),
      },
      {
        chinese: '保持跑動不掉隊！',
        english: 'Keep moving, stay with us!',
        flipped: false,
        image: '/images/env2_playing_basketball/keep_moving.webp',
        structure: getSentenceStructure('Keep moving, stay with us!', '保持跑動不掉隊！'),
      },
      {
        chinese: '補領防守位置！',
        english: 'Get back in position!',
        flipped: false,
        image: '/images/env2_playing_basketball/get_in_position.webp',
        structure: getSentenceStructure('Get back in position!', '補領防守位置！'),
      },
      {
        chinese: '陣地快攻！',
        english: 'Set a play for fast break!',
        flipped: false,
        image: '/images/env2_playing_basketball/set_play_fast_break.webp',
        structure: getSentenceStructure('Set a play for fast break!', '陣地快攻！'),
      },
      {
        chinese: '大心臟，挑戰巨人！',
        english: 'Big heart, challenge the giants!',
        flipped: false,
        image: '/images/env2_playing_basketball/big_heart.webp',
        structure: getSentenceStructure('Big heart, challenge the giants!', '大心臟，挑戰巨人！'),
      },
      {
        chinese: '球快要過半場了！',
        english: 'The ball is almost past the half-court!',
        flipped: false,
        image: '/images/env2_playing_basketball/past_half_court.webp',
        structure: getSentenceStructure(
          'The ball is almost past the half-court!',
          '球快要過半場了！',
        ),
      },
      {
        chinese: '目前得分落後，要加油！',
        english: "We're trailing, let's push harder!",
        flipped: false,
        image: '/images/env2_playing_basketball/trailing_push_harder.webp',
        structure: getSentenceStructure(
          "We're trailing, let's push harder!",
          '目前得分落後，要加油！',
        ),
      },
      {
        chinese: '外線需要支援！',
        english: 'We need help on the perimeter!',
        flipped: false,
        image: '/images/env2_playing_basketball/perimeter_help.webp',
        structure: getSentenceStructure('We need help on the perimeter!', '外線需要支援！'),
      },
      {
        chinese: '內線強攻！',
        english: 'Attack the paint!',
        flipped: false,
        image: '/images/env2_playing_basketball/attack_paint.webp',
        structure: getSentenceStructure('Attack the paint!', '內線強攻！'),
      },
      {
        chinese: '穩住節奏！',
        english: 'Control the tempo!',
        flipped: false,
        image: '/images/env2_playing_basketball/control_tempo.webp',
        structure: getSentenceStructure('Control the tempo!', '穩住節奏！'),
      },
      {
        chinese: '好球，加油！',
        english: 'Good job, keep it up!',
        flipped: false,
        image: '/images/env2_playing_basketball/good_job_keep_it_up.webp',
        structure: getSentenceStructure('Good job, keep it up!', '好球，加油！'),
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
