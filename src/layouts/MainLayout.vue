<template>
  <q-layout view="lHh Lpr lFf" class="op-layout">
    <q-dialog v-model="showLoginDialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">登入/註冊</div>
          <!-- 用 Google 登入 -->
          <q-btn
            @click="loginWithGoogle"
            label="使用 Google 登入"
            color="primary"
            text-color="white"
            class="op-beta-btn"
          />
          <!-- 用checkbox 登入 -->
          <q-checkbox v-model="rememberMe" label="記住我" />
        </q-card-section>
      </q-card>
    </q-dialog>

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
          <q-img
            v-if="photoURL"
            :src="photoURL"
            style="width: 32px; height: 32px; border-radius: 50%"
            rounded
            class="op-avatar"
          />
          <q-btn
            v-if="!uid"
            @click="toggleLogin"
            label="登入/註冊"
            color="white"
            text-color="black"
            class="op-beta-btn"
          />
          <q-btn
            v-else
            @click="logout"
            label="登出"
            color="white"
            text-color="black"
            class="op-beta-btn"
          />
        </div>
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
          href="https://github.com/3dw/zh-en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <q-item-section avatar>
            <q-icon name="open_in_new" />
          </q-item-section>
          <q-item-section>本站原始碼</q-item-section>
        </q-item>

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
        :cards="cards"
        :user="user"
        :users="users"
        :uid="uid"
        @toggle-drawer="toggleLeftDrawer"
        @close-drawer="closeLeftDrawer"
        @toggleLogin="toggleLogin"
      />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue'
import type { User, UserInfo } from 'firebase/auth'
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth'
import { ref as dbRef, onValue, get, set } from 'firebase/database'
import { getDatabase } from 'firebase/database'
import { getFeaturesByCategory, getAllCategories } from '../data/features'

// 建立 Google 驗證提供者
const googleAuthProvider = new GoogleAuthProvider()
const database = getDatabase()

export default defineComponent({
  name: 'MainLayout',

  setup() {
    const leftDrawerOpen = ref(false)
    const rememberMe = ref(false)

    const uid = ref('')
    const email = ref('')
    const displayName = ref('')
    const photoURL = ref('')

    const user = ref({})
    const users = ref([])

    const cards = ref([])

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

    // 初始化登入與資料監聽
    onMounted(() => {
      const auth = getAuth()
      auth.onAuthStateChanged(async (usr) => {
        if (usr) {
          console.log('user', usr)
          uid.value = usr.uid
          email.value = usr.email || ''
          photoURL.value = usr.photoURL || ''
          updateUserData(usr)
        }
      })

      onValue(dbRef(database, 'cards'), (snapshot) => {
        cards.value = snapshot.val()
      })

      onValue(dbRef(database, 'users'), (snapshot) => {
        users.value = Object.values(snapshot.val())
        // console.log('users', users.value)
      })
    })

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

    const toggleLogin = () => {
      showLoginDialog.value = !showLoginDialog.value
    }

    const devMode = ref(false)
    const showLoginDialog = ref(false)

    const logout = () => {
      const auth = getAuth()
      signOut(auth).then(() => {
        uid.value = ''
        email.value = ''
        photoURL.value = ''
        user.value = {}
      })
    }

    const updateUserData = async (user: User) => {
      if (!user) {
        console.error('User is undefined in updateUserData')
        return
      }
      email.value = user.email || ''
      uid.value = user.uid
      photoURL.value = user.photoURL || ''

      const pvdata = user.providerData || [
        {
          displayName: email.value?.split('@')[0] || 'Unknown',
          email: email.value,
          photoURL: photoURL.value,
        },
      ]

      await fetchUserData(pvdata)
    }
    const fetchUserData = async (pvdata: UserInfo[]) => {
      try {
        if (!uid.value) {
          console.error('No user ID available')
          return
        }

        const userRef = dbRef(database, `users/${uid.value}`)
        onValue(
          userRef,
          (snapshot) => {
            const userData = snapshot.val()
            if (userData) {
              user.value = { ...userData, providerData: pvdata }
              if (
                userData.photoURL &&
                userData.photoURL !== 'undefined' &&
                userData.photoURL !== 'null'
              ) {
                photoURL.value = userData.photoURL
              }
            } else {
              user.value = { providerData: pvdata }
            }
          },
          (error) => {
            user.value = { providerData: pvdata }
            console.error('Error fetching user data:', error)
          },
        )
      } catch (error) {
        console.error('Error in fetchUserData:', error)
        user.value = { providerData: pvdata }
      }
    }

    const loginWithGoogle = async () => {
      try {
        const auth = getAuth()
        if (!auth) return

        // 設定持久化登入
        if (rememberMe.value) {
          await setPersistence(auth, browserLocalPersistence)
        }

        const result = await signInWithPopup(auth, googleAuthProvider)
        console.log('登入成功:', result.user)

        // 取得使用者資料
        const user = result.user
        uid.value = user.uid
        email.value = user.email || ''
        displayName.value = user.displayName || ''
        photoURL.value = user.photoURL || ''
        console.log('使用者資料:', user)

        const userRef = dbRef(database, 'users/' + user.uid)
        const snapshot = await get(userRef)

        if (!snapshot.exists()) {
          await set(userRef, {
            uid: user.uid,
            email: user.email,
            name: user.displayName || user.email?.split('@')[0] || 'Unknown',
            connect_me: user.email,
            photoURL: photoURL.value || '',
            login_method: 'google',
          })
        } else {
          console.log('user already exists')
          if (snapshot.val().photoURL !== photoURL.value) {
            await set(dbRef(database, 'users/' + user.uid + '/photoURL'), photoURL)
          }
        }

        updateUserData(user)

        showLoginDialog.value = false
      } catch (error) {
        console.error('登入失敗:', error)
        // 顯示錯誤訊息給使用者
        alert('登入失敗，請確認是否允許彈出視窗，並再試一次')
      }
    }

    return {
      cards,
      user,
      users,
      uid,
      email,
      displayName,
      photoURL,
      showLoginDialog,
      toggleLogin,
      rememberMe,
      loginWithGoogle,
      updateUserData,
      fetchUserData,
      logout,
      leftDrawerOpen,
      toggleLeftDrawer,
      closeLeftDrawer,
      devMode,
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

.op-drawer-item-label {
  white-space: pre-line;
}
</style>
