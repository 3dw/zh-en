<template>
  <q-layout view="lHh Lpr lFf" class="op-layout">
    <!-- 頂部導覽列 (Header) -->
    <q-header elevated class="op-header-bg text-white print-hide">
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

        <q-btn
          flat
          dense
          round
          icon="settings"
          aria-label="偏好設定"
          class="op-settings-btn q-ml-xs"
          @click="preferencesMenuOpen = !preferencesMenuOpen"
        >
          <q-menu
            v-model="preferencesMenuOpen"
            anchor="bottom left"
            self="top left"
            no-parent-event
          >
            <div class="op-preferences-menu q-pa-md">
              <div class="text-subtitle2 q-mb-sm">偏好設定</div>
              <q-select
                v-model="speechRate"
                :options="speechRateOptions"
                label="語音播放倍速"
                dense
                outlined
                emit-value
                map-options
              />
            </div>
          </q-menu>
        </q-btn>

        <!-- 左側：Logo + 主標題 -->
        <div class="row items-center op-title-container">
          <!-- 您可自訂放置自己的 Logo 圖檔 -->
          <!-- <img
            src="https://raw.githubusercontent.com/OpenParliamentTV/openparliament-static-assets/main/logos/icon.png"
            alt="OpenParliament Logo"
            class="op-logo q-mr-sm"
          /> -->
          <q-toolbar-title class="op-title"> 學英文 </q-toolbar-title>
        </div>

        <div class="op-toolbar-spacer"></div>
      </q-toolbar>
    </q-header>

    <!-- 側邊選單 (Drawer) -->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="op-drawer-bg"
      class="text-dark print-hide"
    >
      <q-list padding>
        <q-item-label header class="op-drawer-header">常用字卡</q-item-label>

        <q-item clickable to="/" class="op-drawer-item">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>首頁</q-item-section>
        </q-item>

        <q-item clickable to="/about" class="op-drawer-item">
          <q-item-section avatar>
            <q-icon name="info" />
          </q-item-section>
          <q-item-section>關於本站</q-item-section>
        </q-item>

        <q-item clickable to="/changelogs">
          <q-item-section avatar>
            <q-icon name="update" />
          </q-item-section>
          <q-item-section> 版本更新記錄 </q-item-section>
        </q-item>

        <!-- 小遊戲入口：置於「字、詞、句」分類之前，方便快速進入 -->
        <q-item clickable to="/main-game" class="op-drawer-item">
          <q-item-section avatar>
            <q-icon name="gamepad" />
          </q-item-section>
          <q-item-section>小遊戲</q-item-section>
        </q-item>

        <q-expansion-item
          v-for="category in sidebarCategories"
          :key="category"
          :icon="getCategoryIcon(category)"
          :label="category"
          class="op-expansion-item"
          dense-toggle
        >
          <q-item
            v-for="feature in getSortedFeaturesByCategory(category)"
            :key="feature.id"
            clickable
            :to="feature.route"
            class="op-drawer-item"
          >
            <q-item-section avatar>
              <q-icon :name="feature.icon" />
            </q-item-section>
            <q-item-section>{{ feature.title }}</q-item-section>
          </q-item>
        </q-expansion-item>

        <q-expansion-item icon="share" label="好站連結" class="op-expansion-item" dense-toggle>
          <q-item
            v-for="(link, index) in links"
            :key="index"
            clickable
            tag="a"
            :href="link.href"
            class="op-drawer-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <q-item-section avatar>
              <q-icon>
                <img
                  :src="`https://www.google.com/s2/favicons?domain=${link.domain}&sz=32`"
                  style="width: 24px; height: 24px"
                />
              </q-icon>
            </q-item-section>
            <q-item-section class="op-drawer-item-label">{{ link.label }}</q-item-section>
          </q-item>
        </q-expansion-item>

        <q-item
          clickable
          tag="a"
          href="https://github.com/3dw/zh-en/wiki/%E5%BF%97%E5%B7%A5%E6%8B%9B%E5%8B%9F"
          target="_blank"
          rel="noopener noreferrer"
        >
          <q-item-section avatar>
            <q-icon name="people" />
          </q-item-section>
          <q-item-section>志工招募</q-item-section>
        </q-item>

        <q-item
          clickable
          tag="a"
          href="https://github.com/3dw/zh-en/wiki/%E5%B0%8F%E9%A1%8D%E6%8D%90%E6%AC%BE%E9%82%80%E7%B4%84"
          target="_blank"
          rel="noopener noreferrer"
        >
          <q-item-section avatar>
            <q-icon name="thumb_up" />
          </q-item-section>
          <q-item-section>捐款支持</q-item-section>
        </q-item>

        <q-item
          clickable
          tag="a"
          href="https://github.com/3dw/zh-en/issues"
          target="_blank"
          rel="noopener noreferrer"
        >
          <q-item-section avatar>
            <q-icon name="open_in_new" />
          </q-item-section>
          <q-item-section>GitHub回報問題</q-item-section>
        </q-item>

        <q-item clickable tag="a" href="mailto:bestian@gmail.com">
          <q-item-section avatar>
            <q-icon name="mail" />
          </q-item-section>
          <q-item-section>Email回報問題</q-item-section>
        </q-item>

        <!--
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

        -->
      </q-list>
    </q-drawer>

    <!-- 主要頁面內容 -->
    <q-page-container>
      <router-view
        :dev-mode="devMode"
        :speech-rate="speechRate"
        @toggle-drawer="toggleLeftDrawer"
        @close-drawer="closeLeftDrawer"
      />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue'
import { getFeaturesByCategory, getAllCategories } from '../data/features'
import {
  SPEECH_RATE_OPTIONS,
  getSpeechRatePreference,
  setSpeechRatePreference,
} from 'src/utils/speechVoice'

export default defineComponent({
  name: 'MainLayout',

  setup() {
    const leftDrawerOpen = ref(false)
    const preferencesMenuOpen = ref(false)
    const speechRate = ref(getSpeechRatePreference())
    const speechRateOptions = SPEECH_RATE_OPTIONS.map((rate) => ({
      label: `${rate} 倍`,
      value: rate,
    }))

    watch(speechRate, (rate) => {
      speechRate.value = setSpeechRatePreference(rate)
    })

    const links = ref([
      {
        href: 'https://www.readingbear.org/',
        domain: 'readingbear.org',
        label: 'Reading Bear\n(從字母到閱讀)',
      },
      {
        href: 'https://www.starfall.com/h/index.php',
        domain: 'starfall.com',
        label: 'Starfall\n(綜合學習)',
      },
      {
        href: 'https://www.littlefox.com/',
        domain: 'littlefox.com',
        label: 'Little Fox\n(線上英文繪本)',
      },
      {
        href: 'https://en.wikipedia.org/wiki/Main_Page',
        domain: 'wikipedia.org',
        label: 'Wikipedia\n(英文百科全書)',
      },
      {
        href: 'https://translate.google.com/?sl=en&tl=zh-TW&op=translate',
        domain: 'translate.google.com',
        label: 'Google Translate\n(英文翻譯)',
      },
      {
        href: 'https://speakandimprove.com/',
        domain: 'speakandimprove.com',
        label: 'Speak and Improve\n(英文聽說練習)',
      },
    ])

    // 側欄分類（排除「其他」分類，因為它包含太多項目）
    const sidebarCategories = computed(() => {
      return getAllCategories().filter((cat) => cat !== '其他')
    })

    // 獲取分類圖標
    const getCategoryIcon = (category: string): string => {
      const iconMap: { [key: string]: string } = {
        字: 'text_fields',
        詞: 'library_books',
        句: 'chat_bubble',
        文: 'menu_book',
        個人管理: 'person',
        其他: 'apps',
      }
      return iconMap[category] || 'apps'
    }

    // 獲取排序後的分類功能（featured 排在前面）
    const getSortedFeaturesByCategory = (category: string) => {
      const features = getFeaturesByCategory(category)
      return features.sort((a, b) => {
        if (a.featured && !b.featured) return -1
        if (!a.featured && b.featured) return 1
        return 0
      })
    }

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    const closeLeftDrawer = () => {
      leftDrawerOpen.value = false
    }

    const devMode = ref(false)

    return {
      leftDrawerOpen,
      preferencesMenuOpen,
      toggleLeftDrawer,
      closeLeftDrawer,
      devMode,
      speechRate,
      speechRateOptions,
      links,
      sidebarCategories,
      getSortedFeaturesByCategory,
      getCategoryIcon,
    }
  },
})
</script>

<style scoped lang="scss">
@media (max-width: 768px) {
  .fat-only {
    display: none !important;
  }
}

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
  position: relative;
}

.op-menu-btn {
  color: #fff;
}

.op-settings-btn {
  color: #fff;
  position: absolute;
  left: 48px;
  top: 50%;
  transform: translateY(-50%);
}

.op-preferences-menu {
  min-width: 220px;
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

.op-toolbar-spacer {
  width: 1px;
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

.op-drawer-item-label {
  white-space: pre-line;
}
</style>
