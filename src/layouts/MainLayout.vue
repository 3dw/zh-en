<template>
  <q-layout view="lHh Lpr lFf" class="op-layout">
    <!-- 頂部導覽列 (Header) -->
    <q-header elevated class="op-header-bg text-white">
      <q-toolbar class="op-toolbar">
        <!-- Drawer 切換按鈕 -->
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          class="op-menu-btn"
          @click="toggleLeftDrawer"
        />

        <!-- 左側：Logo + 主標題 -->
        <div class="row items-center op-title-container">
          <!-- 您可自訂放置自己的 Logo 圖檔 -->
          <!-- <img
            src="https://raw.githubusercontent.com/OpenParliamentTV/openparliament-static-assets/main/logos/icon.png"
            alt="OpenParliament Logo"
            class="op-logo q-mr-sm"
          /> -->
          <q-toolbar-title class="op-title"> Learn English 學英文 </q-toolbar-title>
        </div>

        <!-- 右側：連結 -->
        <div>
          <q-btn
            outline
            color="white"
            label="Beta版原始碼"
            href="https://github.com/3dw/zh-en"
            target="_blank"
            rel="noopener noreferrer"
            class="op-beta-btn"
          >
            <q-icon name="open_in_new" class="q-ml-xs" />
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <!-- 側邊選單 (Drawer) -->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="op-drawer-bg"
      class="text-dark"
    >
      <q-list padding>
        <q-item-label header class="op-drawer-header">常用字卡</q-item-label>

        <q-item clickable to="/" class="op-drawer-item">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>首頁</q-item-section>
        </q-item>

        <q-item clickable to="/beginner" class="op-drawer-item">
          <q-item-section avatar>
            <q-icon name="add" />
          </q-item-section>
          <q-item-section>初級</q-item-section>
        </q-item>

        <q-item clickable to="/main-game" class="op-drawer-item">
          <q-item-section avatar>
            <q-icon name="gamepad" />
          </q-item-section>
          <q-item-section>遊戲</q-item-section>
        </q-item>

        <q-item clickable to="/main-song-word" class="op-drawer-item">
          <q-item-section avatar>
            <q-icon name="audiotrack" />
          </q-item-section>
          <q-item-section>英文兒歌克漏字學習</q-item-section>
        </q-item>

        <q-item clickable to="/body" class="op-drawer-item">
          <q-item-section avatar>
            <q-icon name="person" />
          </q-item-section>
          <q-item-section>身體部位</q-item-section>
        </q-item>

        <q-item clickable to="/number" class="op-drawer-item">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>數字</q-item-section>
        </q-item>

        <q-expansion-item
          icon="image"
          clickable
          to="/main-image"
          label="看圖學習"
          class="op-expansion-item"
          dense-toggle
        >
          <q-item clickable to="/image" class="op-drawer-item">
            <q-item-section avatar>
              <q-icon name="image" />
            </q-item-section>
            <q-item-section>煮東西</q-item-section>
          </q-item>

          <q-item clickable to="/body-image" class="op-drawer-item">
            <q-item-section avatar>
              <q-icon name="image" />
            </q-item-section>
            <q-item-section>女性身體部位</q-item-section>
          </q-item>

          <q-item clickable to="/men-body-image" class="op-drawer-item">
            <q-item-section avatar>
              <q-icon name="image" />
            </q-item-section>
            <q-item-section>男性身體部位</q-item-section>
          </q-item>
        </q-expansion-item>

        <q-item clickable to="/favorites" class="op-drawer-item">
          <q-item-section avatar>
            <q-icon name="favorite" />
          </q-item-section>
          <q-item-section>我的最愛</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- XP 區塊 (固定右上角) -->
    <div class="xp-bar-container">
      <div class="xp-info">
        <div class="level" :class="{ 'level-up': showLevelUpAnimation }">Level {{ level }}</div>
        <div class="xp">{{ currentXP }} / 1000 XP</div>
      </div>
      <q-linear-progress
        :value="xpProgress"
        color="accent"
        track-color="grey-3"
        class="xp-progress"
      />
    </div>

    <!-- 升級提示對話框 -->
    <q-dialog v-model="showLevelUpDialog">
      <q-card class="op-level-up-card">
        <q-card-section class="row items-center justify-center">
          <div class="text-h6 text-center">恭喜升級！</div>
        </q-card-section>
        <q-card-section class="text-center"> 你已經升到 Level {{ level }} 了！ </q-card-section>
      </q-card>
    </q-dialog>

    <!-- 主要頁面內容 -->
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

    // 讀取 localStorage
    onMounted(() => {
      const savedXP = localStorage.getItem('currentXP')
      const savedLevel = localStorage.getItem('level')

      if (savedXP) currentXP.value = parseInt(savedXP)
      if (savedLevel) level.value = parseInt(savedLevel)
    })

    // 監聽變化並保存
    watch([currentXP, level], () => {
      localStorage.setItem('currentXP', currentXP.value.toString())
      localStorage.setItem('level', level.value.toString())
    })

    const xpProgress = computed(() => currentXP.value / 1000)

    const earnXP = (amount: number) => {
      currentXP.value += amount
      if (currentXP.value >= 1000) {
        showLevelUpAnimation.value = true
        showLevelUpDialog.value = true

        level.value++
        currentXP.value = currentXP.value - 1000

        // 3 秒後關閉動畫
        setTimeout(() => {
          showLevelUpAnimation.value = false
        }, 3000)
      }
    }

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    return {
      leftDrawerOpen,
      currentXP,
      level,
      showLevelUpAnimation,
      showLevelUpDialog,
      xpProgress,
      earnXP,
      toggleLeftDrawer,
    }
  },
})
</script>

<style scoped lang="scss">
/* -------------------------
   整體字型與大小調整
---------------------------- */
/* 整體底色、字體大小、字體等 */
.op-layout {
  background-color: #f4f1eb; /* 大地色系淺底 */
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 1.1rem; /* 整體字體略放大 */
}

/* -------------------------
   Header
---------------------------- */
.op-header-bg {
  background-color: #4a3e2d !important; /* 深棕色 */
}

.op-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.op-menu-btn {
  color: #fff;
}

.op-title-container {
  align-items: center;
}

.op-logo {
  height: 36px; /* 稍微增大 Logo */
}

.op-title {
  font-weight: 600;
  font-size: 1.4rem; /* 標題再大一點 */
  color: #fff;
}

.op-beta-btn {
  text-transform: none;
  font-size: 1rem; /* 按鈕文字也放大 */
}

/* -------------------------
   Drawer
---------------------------- */
.op-drawer-bg {
  background-color: #faf7f2;
}

.op-drawer-header {
  font-weight: bold;
  color: #3e3e3e;
  margin-bottom: 6px;
}

.op-drawer-item {
  border-radius: 6px;
  &:hover {
    background-color: #f1ebe3;
  }
}

.op-expansion-item {
  margin-top: 4px;
  .q-expansion-item__container {
    border-radius: 6px;
  }

  :deep(.q-expansion-item__content) {
    padding-left: 16px;
  }
}

/* -------------------------
   XP Bar
---------------------------- */
.xp-bar-container {
  position: fixed;
  z-index: 2000;
  right: 20px;
  top: 80px;
  width: 240px;
  background: #faf7f2; /* 與 Drawer 同色系 */
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.xp-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
  font-size: 1rem; /* 再大一點 */
  color: #3e3e3e;
}

.level {
  font-weight: 600;
}

.level-up {
  animation: level-up-animation 1s ease-in-out;
}

@keyframes level-up-animation {
  0% {
    transform: scale(1);
    color: #3e3e3e;
  }
  50% {
    transform: scale(1.2);
    color: #7a8b62; /* 棕綠系 */
  }
  100% {
    transform: scale(1);
    color: #3e3e3e;
  }
}

.xp-progress {
  height: 10px;
  border-radius: 5px;
  /* 可考慮設定 color="accent" => 在 Quasar Config 中可自定義 accent 為棕綠 */
}

/* -------------------------
   Level Up Dialog
---------------------------- */
.op-level-up-card {
  border-radius: 8px;
  min-width: 260px;
}
</style>
