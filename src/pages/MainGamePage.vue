<template>
  <q-page class="q-pa-md">
    <div class="row items-center q-mb-md">
      <h1 class="col">英文字母遊戲</h1>
      <div class="col-auto">
        <q-badge color="primary" class="text-h6"> 總分: {{ totalLevel }} </q-badge>
      </div>
    </div>

    <div class="row q-col-gutter-md">
      <!-- 大寫字母遊戲卡片 -->
      <div class="col-12 col-md-6">
        <q-card class="game-card" @click="$router.push('/game1')">
          <q-card-section class="bg-primary text-white text-center" style="height: 200px">
            <q-icon name="abc" size="100px" />
            <div class="text-subtitle2 q-mt-sm">大寫字母發音認字遊戲</div>
          </q-card-section>
          <q-card-section>
            <div class="text-h6">大寫字母遊戲</div>
            <div class="text-subtitle2">練習英文大寫字母的發音和辨識</div>
            <q-badge color="primary" class="q-mt-sm"> Level: {{ upperCaseGameLevel }} </q-badge>
          </q-card-section>
        </q-card>
      </div>

      <!-- 小寫字母遊戲卡片 -->
      <div class="col-12 col-md-6">
        <q-card class="game-card" @click="$router.push('/game2')">
          <q-card-section class="bg-secondary text-white text-center" style="height: 200px">
            <q-icon name="text_fields" size="100px" />
            <div class="text-subtitle2 q-mt-sm">小寫字母發音認字遊戲</div>
          </q-card-section>
          <q-card-section>
            <div class="text-h6">小寫字母遊戲</div>
            <div class="text-subtitle2">練習英文小寫字母的發音和辨識</div>
            <q-badge color="secondary" class="q-mt-sm"> Level: {{ lowerCaseGameLevel }} </q-badge>
          </q-card-section>
        </q-card>
      </div>

      <!-- 大寫字母發音選字遊戲 -->
      <div class="col-12 col-md-6">
        <q-card class="game-card" @click="$router.push('/game3')">
          <q-card-section class="bg-purple text-white text-center" style="height: 200px">
            <q-icon name="speaker_notes" size="100px" />
            <div class="text-subtitle2 q-mt-sm">有圖發音選字遊戲</div>
          </q-card-section>
          <q-card-section>
            <div class="text-h6">看圖選單字遊戲</div>
            <div class="text-subtitle2">看圖選擇正確的單字</div>
            <q-badge color="purple" class="q-mt-sm"> Level: {{ game1Level }} </q-badge>
          </q-card-section>
        </q-card>
      </div>

      <!-- 小寫字母發音選字遊戲 -->
      <div class="col-12 col-md-6">
        <q-card class="game-card" @click="$router.push('/game4')">
          <q-card-section class="bg-deep-orange text-white text-center" style="height: 200px">
            <q-icon name="record_voice_over" size="100px" />
            <div class="text-subtitle2 q-mt-sm">看圖搭正確對白選對話遊戲</div>
          </q-card-section>
          <q-card-section>
            <div class="text-h6">看圖搭正確對白選對話遊戲</div>
            <div class="text-subtitle2">看圖選擇正確的對白</div>
            <q-badge color="deep-orange" class="q-mt-sm"> Level: {{ game2Level }} </q-badge>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'MainGamePage',
  setup() {
    const upperCaseGameLevel = ref(0)
    const lowerCaseGameLevel = ref(0)
    const game1Level = ref(0)
    const game2Level = ref(0)

    // 從 localStorage 讀取各個遊戲的 level
    const savedUpperCaseLevel = localStorage.getItem('letterGameLevel')
    if (savedUpperCaseLevel) {
      upperCaseGameLevel.value = parseInt(savedUpperCaseLevel)
    }

    const savedLowerCaseLevel = localStorage.getItem('lowerCaseGameLevel')
    if (savedLowerCaseLevel) {
      lowerCaseGameLevel.value = parseInt(savedLowerCaseLevel)
    }

    const savedGame1Level = localStorage.getItem('game1Level')
    if (savedGame1Level) {
      game1Level.value = parseInt(savedGame1Level)
    }

    const savedGame2Level = localStorage.getItem('game2Level')
    if (savedGame2Level) {
      game2Level.value = parseInt(savedGame2Level)
    }

    // 計算總分
    const totalLevel = computed(() => {
      return (
        upperCaseGameLevel.value + lowerCaseGameLevel.value + game1Level.value + game2Level.value
      )
    })

    return {
      upperCaseGameLevel,
      lowerCaseGameLevel,
      game1Level,
      game2Level,
      totalLevel,
    }
  },
})
</script>

<style scoped>
.game-card {
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 12px;
  overflow: hidden;
}

.game-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.text-center {
  text-align: center;
}

.bg-transparent {
  background: rgba(0, 0, 0, 0.6);
  padding: 8px;
}
</style>
