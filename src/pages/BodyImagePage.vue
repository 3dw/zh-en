<template>
  <q-page class="q-pa-md">
    <div>
      <h1>人體常用英文（可朗讀）</h1>
      <!-- 圖片+文字標籤容器 -->
      <div class="image-container">
        <!-- 請確保 body.jpg 放在正確位置，路徑要對應專案結構 -->
        <img src="../assets/body.jpg" alt="Body Parts" class="body-image" />

        <!-- 文字區塊迭代 -->
        <div
          v-for="(part, idx) in bodyParts"
          :key="idx"
          :class="['label', part.position]"
          @click="speakEnglish(part.english)"
        >
          {{ part.english }}
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
// 請確認 body.jpg 的匯入路徑無誤
import bodyImage from '../assets/body.jpg'

export default defineComponent({
  name: 'BodyImagePage',
  setup() {
    /**
     * 身體部位與其在圖片上的定位 (top, left)，
     * 百分比為範例值，請自行微調。
     */
    const bodyParts = ref([
      { english: 'Head', position: 'head-pos' },
      { english: 'Forehead', position: 'forehead-pos' },
      { english: 'Eye', position: 'eye-pos' },
      { english: 'Eyebrow', position: 'eyebrow-pos' },
      { english: 'Ear', position: 'ear-pos' },
      { english: 'Nose', position: 'nose-pos' },
      { english: 'Cheek', position: 'cheek-pos' },
      { english: 'Mouth', position: 'mouth-pos' },
      { english: 'Chin', position: 'chin-pos' },
      { english: 'Neck', position: 'neck-pos' },
      { english: 'Shoulder', position: 'shoulder-pos' },
      { english: 'Chest', position: 'chest-pos' },
      { english: 'Elbow', position: 'elbow-pos' },
      { english: 'Arm', position: 'arm-pos' },
      { english: 'Hand', position: 'hand-pos' },
      { english: 'Finger', position: 'finger-pos' },
      { english: 'Waist', position: 'waist-pos' },
      { english: 'Hip', position: 'hip-pos' },
      { english: 'Thigh', position: 'thigh-pos' },
      { english: 'Knee', position: 'knee-pos' },
      { english: 'Shin', position: 'shin-pos' },
      { english: 'Ankle', position: 'ankle-pos' },
      { english: 'Calf', position: 'calf-pos' },
      { english: 'Heel', position: 'heel-pos' },
      { english: 'Foot', position: 'foot-pos' },
      { english: 'Arch', position: 'arch-pos' },
      { english: 'Toe', position: 'toe-pos' },
      { english: 'Ball', position: 'ball-pos' },
    ])

    /**
     * 文字點選後，使用瀏覽器語音合成朗讀英文
     */
    function speakEnglish(text: string) {
      const utterance = new SpeechSynthesisUtterance(text)
      // 若需調整語速 / 語言，可在這裡設定
      speechSynthesis.speak(utterance)
    }

    return {
      bodyParts,
      speakEnglish,
      bodyImage,
    }
  },
})
</script>

<style scoped>
/*
   容器維持相對定位，設定最大寬度，讓圖片可自動縮放
*/
.image-container {
  position: relative;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
}

/*
   以 100% 寬度呈現圖片，height: auto 保持原比例，
   讓圖片在不同裝置下自適應
*/
.body-image {
  display: block;
  width: 100%;
  height: auto;
}

/*
   文字標籤：絕對定位 + 百分比，
   可於瀏覽器中用開發者工具即時調整
*/
.label {
  position: absolute;
  background-color: #ffc107;
  padding: 4px 6px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s ease;
}

/* 以下 top/left 僅為範例，請根據實際圖檔微調 */
.head-pos {
  top: 1%;
  left: 40%;
}

.forehead-pos {
  top: 1%;
  left: 76%;
}

.eye-pos {
  top: 4%;
  left: 24%;
}

.eyebrow-pos {
  top: 7%;
  left: 97%;
}

.ear-pos {
  top: 10%;
  left: 15%;
}

.nose-pos {
  top: 13%;
  left: 94%;
}

.cheek-pos {
  top: 16%;
  left: 18%;
}

.mouth-pos {
  top: 20%;
  left: 97%;
}

.chin-pos {
  top: 23%;
  left: 15%;
}

.neck-pos {
  top: 28%;
  left: 16%;
}

.shoulder-pos {
  top: 35%;
  left: 21%;
}

.chest-pos {
  top: 28%;
  left: 95%;
}

.elbow-pos {
  top: 35%;
  left: 95%;
}

.arm-pos {
  top: 42%;
  left: 94%;
}

.hand-pos {
  top: 48%;
  left: 16%;
}

.finger-pos {
  top: 55%;
  left: 17%;
}

.waist-pos {
  top: 42%;
  left: 17%;
}

.hip-pos {
  top: 50%;
  left: 92%;
}

.thigh-pos {
  top: 58%;
  left: 94%;
}

.knee-pos {
  top: 66%;
  left: 16%;
}

.shin-pos {
  top: 75%;
  left: 15%;
}

.ankle-pos {
  top: 83%;
  left: 17%;
}

.calf-pos {
  top: 66%;
  left: 93%;
}

.heel-pos {
  top: 77%;
  left: 94%;
}

.foot-pos {
  top: 92%;
  left: 25%;
}

.arch-pos {
  top: 87%;
  left: 90%;
}

.toe-pos {
  top: 97%;
  left: 44%;
}

.ball-pos {
  top: 96%;
  left: 70%;
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
