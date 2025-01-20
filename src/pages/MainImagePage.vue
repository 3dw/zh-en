<template>
  <q-page class="op-page q-pa-md">
    <div class="main-container">
      <h1 class="page-title">選擇想查看的圖示</h1>

      <!-- <router-link to="/image" class="image-link">
        <img src="../assets/cooking.jpg" alt="Cooking" class="menu-image" />
        <p>烹飪方式 (ImagePage)</p>
      </router-link>

      <router-link to="/body-image" class="image-link">
        <img src="../assets/body.jpg" alt="Body" class="menu-image" />
        <p>人體部位 (BodyImagePage)</p>
      </router-link> -->

      <router-link to="/preposition-image" class="image-link">
        <img src="../assets/learnfromimage/snake.png" alt="Preposition" class="menu-image" />
        <p>英文介系詞 (PrepositionImagePage)</p>
      </router-link>

      <router-link to="/math-image" class="image-link">
        <img src="../assets/learnfromimage/math.jpg" alt="Math" class="menu-image" />
        <p>數學 (MathImagePage)</p>
      </router-link>

      <router-link to="/men-body-image" class="image-link">
        <img src="../assets/learnfromimage/menbody.jpg" alt="Men Body" class="menu-image" />
        <p>人體部位 (menBodyImagePage)</p>
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

<style scoped lang="scss">
/* 與 MainLayout 整體一致的大地色背景 / 字體大小 */
.op-page {
  background-color: #f4f1eb;
  font-size: 1.1rem;
}

/* 容器卡片 */
.main-container {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  background-color: #fff;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
}

/* 標題 */
.page-title {
  margin-bottom: 24px;
  font-size: 1.4rem;
  font-weight: 600;
  color: #3e3e3e;
}

/* 圖片連結區塊 */
.image-link {
  display: inline-block;
  margin: 1rem;
  text-decoration: none;
  color: #3e3e3e;
  transition: transform 0.2s ease;
  vertical-align: top; /* 讓圖片能夠並排且頂部對齊 */

  &:hover {
    transform: scale(1.03);
  }
}

/* 使三張圖都具有相同大小與邊框(編筐) */
.menu-image {
  width: 220px; /* 統一寬度 */
  height: 320px; /* 統一高度 */
  vertical-align: top; /* 新增這行以確保圖片頂部對齊 */
  cursor: pointer;
  border-radius: 8px;
  border: 3px solid #7a8b62; /* 大地系或棕綠系邊框 */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
  margin-bottom: 8px;
}
</style>
