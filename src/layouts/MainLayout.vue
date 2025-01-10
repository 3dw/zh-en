<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Learn English 學英文 </q-toolbar-title>

        <div>
          <q-btn flat href="https://github.com/3dw/zh-en" target="_blank" rel="noopener noreferrer">
            Beta版原始碼
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> 常用字卡 </q-item-label>

        <q-item clickable to="/">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section> 首頁 </q-item-section>
        </q-item>

        <q-item clickable to="/beginner">
          <q-item-section avatar>
            <q-icon name="add" />
          </q-item-section>
          <q-item-section> 初級 </q-item-section>
        </q-item>

        <q-item clickable to="/body">
          <q-item-section avatar>
            <q-icon name="person" />
          </q-item-section>
          <q-item-section> 身體部位 </q-item-section>
        </q-item>

        <q-item clickable to="/number">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section> 數字 </q-item-section>
        </q-item>

        <q-expansion-item icon="image" label="看圖學習" caption="">
          <q-item clickable to="/image">
            <q-item-section avatar>
              <q-icon name="image" />
            </q-item-section>
            <q-item-section> 煮東西 </q-item-section>
          </q-item>

          <q-item clickable to="/body-image">
            <q-item-section avatar>
              <q-icon name="image" />
            </q-item-section>
            <q-item-section> 身體部位 </q-item-section>
          </q-item>
        </q-expansion-item>

        <q-item clickable to="/favorites">
          <q-item-section avatar>
            <q-icon name="favorite" />
          </q-item-section>
          <q-item-section> 我的最愛 </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <div class="xp-bar-container">
      <div class="xp-info">
        <div class="level" :class="{ 'level-up': showLevelUpAnimation }">Level {{ level }}</div>
        <div class="xp">{{ currentXP }} / 1000 XP</div>
      </div>
      <q-linear-progress :value="xpProgress" color="secondary" class="xp-progress" />
    </div>

    <q-dialog v-model="showLevelUpDialog">
      <q-card class="level-up-card">
        <q-card-section class="row items-center">
          <div class="text-h6">恭喜升級！</div>
        </q-card-section>
        <q-card-section> 你已經升到 Level {{ level }} 了！ </q-card-section>
      </q-card>
    </q-dialog>

    <q-page-container>
      <router-view @earn-xp="earnXP" />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, watch } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  setup() {
    const leftDrawerOpen = ref(false)
    const currentXP = ref(0)
    const level = ref(1)
    const showLevelUpAnimation = ref(false)
    const showLevelUpDialog = ref(false)

    // 從 localStorage 讀取數據
    onMounted(() => {
      const savedXP = localStorage.getItem('currentXP')
      const savedLevel = localStorage.getItem('level')

      if (savedXP) currentXP.value = parseInt(savedXP)
      if (savedLevel) level.value = parseInt(savedLevel)
    })

    // 監聽數據變化並保存
    watch([currentXP, level], () => {
      localStorage.setItem('currentXP', currentXP.value.toString())
      localStorage.setItem('level', level.value.toString())
    })

    const xpProgress = computed(() => {
      return currentXP.value / 1000
    })

    const earnXP = (amount: number) => {
      currentXP.value += amount
      if (currentXP.value >= 1000) {
        // 升級動畫
        showLevelUpAnimation.value = true
        showLevelUpDialog.value = true

        level.value++
        currentXP.value = currentXP.value - 1000

        // 3秒後關閉動畫
        setTimeout(() => {
          showLevelUpAnimation.value = false
        }, 3000)
      }
    }

    return {
      leftDrawerOpen,
      currentXP,
      level,
      xpProgress,
      earnXP,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      showLevelUpAnimation,
      showLevelUpDialog,
    }
  },
})
</script>

<style scoped>
.xp-bar-container {
  position: fixed;
  z-index: 1000;
  right: 20px;
  top: 80px;
  width: 200px;
  background: white;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.xp-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

.xp-progress {
  height: 10px;
  border-radius: 5px;
}

.level {
  font-weight: bold;
}

.level-up {
  animation: level-up-animation 3s ease-in-out;
}

@keyframes level-up-animation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
