<template>
  <q-page class="q-pa-md">
    <div>
      <h1>常用烹飪方式（可朗讀）</h1>
      <!-- 容器區塊 -->
      <div class="image-container">
        <!-- 請將 cooking.jpg 放到正確的 assets 或 public 資料夾位置，並確保以下路徑正確 -->
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
      { english: 'boil', position: 'boil-pos' },
      { english: 'stew/braise', position: 'stew-braise-pos' },
      { english: 'steam', position: 'steam-pos' },
      { english: 'pan-fry', position: 'pan-fry-pos' },
      { english: 'deep-fry', position: 'deep-fry-pos' },
      { english: 'stir-fry', position: 'stir-fry-pos' },
      { english: 'roast', position: 'roast-pos' },
      { english: 'barbecue', position: 'barbecue-pos' },
      { english: 'simmer', position: 'simmer-pos' },
      { english: 'marinate', position: 'marinate-pos' },
      { english: 'blanch', position: 'blanch-pos' },
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
  /* 可選：添加陰影讓文字塊更顯眼 */
  /* box-shadow: 0 0 5px rgba(0,0,0,0.3); */
}

/* 以下的定位皆為「近似值」，請依實際顯示再細調 */

/* smoke: 左上角 */
.smoke-pos {
  top: 10%;
  left: 7%;
}

/* boil: 上方略偏中，原圖中 "boil" 大約在中上 */
.boil-pos {
  top: 7%;
  left: 53%;
}

/* stew/braise: 略偏右上 */
.stew-braise-pos {
  top: 11%;
  left: 90%;
}

/* steam: 再往右一些 */
.steam-pos {
  top: 28%;
  left: 99%;
}

/* pan-fry: 圖中偏右中 */
.pan-fry-pos {
  top: 45%;
  left: 73%;
}

/* deep-fry: 在 pan-fry 下方一點 */
.deep-fry-pos {
  top: 62%;
  left: 70%;
}

/* stir-fry: 更下方 */
.stir-fry-pos {
  top: 78%;
  left: 70%;
}

/* roast: 圖中下方居中 */
.roast-pos {
  top: 90%;
  left: 69%;
}

/* barbecue: 圖中下方偏左 */
.barbecue-pos {
  top: 88%;
  left: 40%;
}

/* simmer: 左側中間 */
.simmer-pos {
  top: 72%;
  left: 18%;
}

/* marinate: 左側稍上 */
.marinate-pos {
  top: 50%;
  left: 21%;
}

/* blanch: 介於更上方 */
.blanch-pos {
  top: 27%;
  left: 16%;
}
</style>
