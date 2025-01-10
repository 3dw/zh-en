<template>
  <q-page class="q-pa-md">
    <div class="main-container">
      <h1>選擇想查看的圖示</h1>

      <!-- 點擊 "烹飪方式" 圖，前往 ImagePage.vue -->
      <router-link to="/image" class="image-link">
        <img src="../assets/cooking.jpg" alt="Cooking" class="menu-image" />
        <p>烹飪方式 (ImagePage)</p>
      </router-link>

      <!-- 點擊 "人體部位" 圖，前往 BodyImagePage.vue -->
      <router-link to="/body-image" class="image-link">
        <img src="../assets/body.jpg" alt="Body" class="menu-image" />
        <p>人體部位 (BodyImagePage)</p>
      </router-link>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainImagePage',
})
</script>

<style scoped>
.main-container {
  text-align: center;
}

.image-link {
  display: inline-block;
  margin: 1rem;
  text-decoration: none;
  color: inherit;
}

.menu-image {
  width: 200px; /* 可依需要調整大小 */
  height: auto;
  cursor: pointer;
  border-radius: 8px;
  transition: transform 0.2s ease;
}

/* 滑鼠移動到圖片上時，微微放大 */
.menu-image:hover {
  transform: scale(1.05);
}
</style>
