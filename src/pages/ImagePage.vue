<template>
  <q-page class="q-pa-md">
    <div>
      <h1>常用烹飪方式（可朗讀）</h1>
      <!-- 容器區塊 -->
      <div class="image-container">
        <!-- 這裡請放 cooking.jpg 到正確的 assets 或 public 資料夾，並確保路徑正確 -->
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

  // 新增 emits
  emits: ['earn-xp'],

  setup(_, { emit }) {
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

    // 點選文字後，使用瀏覽器語音合成朗讀對應英文，並觸發 "earn-xp"
    function speakEnglish(text: string) {
      const utterance = new SpeechSynthesisUtterance(text)
      speechSynthesis.speak(utterance)

      // 每次發音後，觸發 @earn-xp，父層或 MainLayout 接收到事件後增加 XP
      emit('earn-xp', 5) // 每次 +5 XP，可自行調整
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
/*
  讓容器維持相對定位，並控制最大寬度 600px，
  也可依實際需要改成 100%、800px 等
*/
.image-container {
  position: relative;
  max-width: 600px;
  width: 100%;
  margin: 0 auto; /* 讓容器在較大螢幕置中，可自行決定是否需要 */
}

/*
  圖片以 100% 寬度自適應，height: auto 保持比例不失真，
  這樣就能自動縮放達成 RWD 效果
*/
.cooking-image {
  display: block;
  width: 100%;
  height: auto;
}

/*
  文字標籤採用 position: absolute + 百分比定位 (top/left)，
  隨容器縮放而縮放位置
*/
.label {
  position: absolute;
  background-color: #ffc107;
  padding: 4px 6px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s ease; /* 讓 RWD 變化更順暢 */
}

/* ---- 以下的 top / left 皆為範例，請依實際需要微調 ---- */

.smoke-pos {
  top: 10%;
  left: 7%;
}

.boil-pos {
  top: 7%;
  left: 53%;
}

.stew-braise-pos {
  top: 11%;
  left: 90%;
}

.steam-pos {
  top: 28%;
  left: 99%;
}

.pan-fry-pos {
  top: 45%;
  left: 73%;
}

.deep-fry-pos {
  top: 62%;
  left: 70%;
}

.stir-fry-pos {
  top: 78%;
  left: 70%;
}

.roast-pos {
  top: 90%;
  left: 69%;
}

.barbecue-pos {
  top: 88%;
  left: 40%;
}

.simmer-pos {
  top: 72%;
  left: 18%;
}

.marinate-pos {
  top: 50%;
  left: 21%;
}

.blanch-pos {
  top: 27%;
  left: 16%;
}

/*
  在較小裝置或視窗時，可以縮小字體、縮小標籤的 padding，
  讓標籤不要太佔空間
*/
@media (max-width: 768px) {
  .label {
    font-size: 0.8rem;
    padding: 3px 5px;
  }
}

@media (max-width: 480px) {
  .label {
    font-size: 0.7rem;
    padding: 2px 4px;
  }
}
</style>
