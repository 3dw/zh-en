<template>
  <q-page class="q-pa-md">
    <div class="row items-center q-mb-md">
      <h1 class="col">遊戲選單</h1>
      <div class="col-auto">
        <q-badge color="primary" class="text-h6"> 總分: {{ totalLevel }} </q-badge>
      </div>
    </div>

    <div class="row q-col-gutter-md">
      <!-- 字母遊戲卡片 -->
      <div class="col-12 col-md-6">
        <q-card class="game-card" @click="$router.push('/game')">
          <q-card-section>
            <div class="text-h6">字母認字遊戲</div>
            <div class="text-subtitle2">練習英文字母的發音和辨識</div>
          </q-card-section>
          <q-card-section>
            <q-badge color="primary"> Level: {{ letterGameLevel }} </q-badge>
          </q-card-section>
        </q-card>
      </div>

      <!-- 可以在這裡添加更多遊戲卡片 -->
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'MainGamePage',
  setup() {
    const letterGameLevel = ref(0)

    // 從 localStorage 讀取各個遊戲的 level
    const savedLetterGameLevel = localStorage.getItem('letterGameLevel')
    if (savedLetterGameLevel) {
      letterGameLevel.value = parseInt(savedLetterGameLevel)
    }

    // 計算總分
    const totalLevel = computed(() => {
      return letterGameLevel.value
      // 之後可以加入其他遊戲的分數
      // + otherGameLevel.value
    })

    return {
      letterGameLevel,
      totalLevel,
    }
  },
})
</script>

<style scoped>
.game-card {
  cursor: pointer;
  transition: all 0.3s ease;
}

.game-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}
</style>
