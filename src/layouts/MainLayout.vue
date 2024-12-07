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
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  setup() {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
    }
  },
})
</script>
