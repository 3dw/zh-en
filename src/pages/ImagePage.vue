<template>
  <q-page class="q-pa-md">
    <div>
      <h1>常用烹飪方式（可朗讀）</h1>
      <!-- 容器區塊 -->
      <div class="image-container">
        <!-- 請將 cooking.jpeg 放到正確的 assets 或 public 資料夾位置，並確保以下路徑正確 -->
        <img src="../assets/cooking.jpg" alt="Cooking Methods" class="cooking-image" />

        <!-- 文字區塊迭代 -->
        <div
          v-for="(method, idx) in cookingMethods"
          :key="idx"
          :class="['label', method.position]"
          @click="speakEnglish(method.english)"
        >
          {{ method.english }}
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import cookingImage from '../assets/cooking.jpg'

export default defineComponent({
  name: 'ImagePage',
  setup() {
    // 存放各種烹飪方式的英文與其在圖片上的定位 class
    const cookingMethods = ref([
      { english: 'smoke', position: 'smoke-pos' },
      { english: 'blanch', position: 'blanch-pos' },
      { english: 'marinate', position: 'marinate-pos' },
      { english: 'simmer', position: 'simmer-pos' },
      { english: 'barbecue', position: 'barbecue-pos' },
      { english: 'roast', position: 'roast-pos' },
      { english: 'boil', position: 'boil-pos' },
      { english: 'stew/braise', position: 'stew-braise-pos' },
      { english: 'steam', position: 'steam-pos' },
      { english: 'pan-fry', position: 'pan-fry-pos' },
      { english: 'deep-fry', position: 'deep-fry-pos' },
      { english: 'stir-fry', position: 'stir-fry-pos' },
    ])

    // 點選文字後，使用瀏覽器語音合成朗讀對應英文
    function speakEnglish(text: string) {
      const utterance = new SpeechSynthesisUtterance(text)
      // 如果需要調整語速或口音，可以在這裡設定 utterance.rate / utterance.lang
      speechSynthesis.speak(utterance)
    }

    return {
      cookingMethods,
      speakEnglish,
      cookingImage,
    }
  },
})
</script>

<style scoped>
/* 主要容器：可根據需要調整寬高或排版 */
.image-container {
  position: relative;
  display: inline-block;
  max-width: 100%;
}

/* 圖片寬度可自行調整 */
.cooking-image {
  width: 600px; /* 這裡是範例值，視情況可調整 */
  height: auto;
}

/* 文字區塊的基本樣式：可自訂背景、文字大小、邊框等 */
.label {
  position: absolute;
  background-color: #ffc107;
  padding: 4px 6px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

/* 以下的定位（top / left）屬範例，需依實際圖片位置微調 */
.smoke-pos {
  top: 10%;
  left: 15%;
}
.blanch-pos {
  top: 20%;
  left: 10%;
}
.marinate-pos {
  top: 30%;
  left: 10%;
}
.simmer-pos {
  top: 40%;
  left: 10%;
}
.barbecue-pos {
  top: 60%;
  left: 15%;
}
.roast-pos {
  top: 70%;
  left: 30%;
}
.boil-pos {
  top: 10%;
  left: 50%;
}
.stew-braise-pos {
  top: 15%;
  left: 60%;
}
.steam-pos {
  top: 20%;
  left: 70%;
}
.pan-fry-pos {
  top: 30%;
  left: 80%;
}
.deep-fry-pos {
  top: 40%;
  left: 85%;
}
.stir-fry-pos {
  top: 50%;
  left: 88%;
}
</style>
