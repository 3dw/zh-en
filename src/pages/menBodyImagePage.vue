<template>
  <!--
    這裡示範放在 MainLayout 的 router-view 區域顯示，
    或者你可改用 <q-page> 皆可。
  -->
  <q-page class="q-pa-md">
    <div>
      <h1>男性身體部位（可點選發音）</h1>
      <!-- 主容器 -->
      <div class="image-container">
        <!-- 請確保 menbody.jpg 放在正確位置，並修改以下路徑為實際路徑 -->
        <img src="../assets/menbody.jpg" alt="Men Body" class="men-body-image" />

        <!-- 迭代區塊：每個部位標籤 -->
        <div
          v-for="(part, index) in menBodyParts"
          :key="index"
          :class="['label', part.position]"
          @click="speakEnglish(part.english)"
        >
          <!-- 箭頭 -->
          <div class="arrow" :class="part.arrowDirection"></div>

          <!-- 顯示英文 + 音標 -->
          <div class="label-text">
            {{ part.english }} <span class="phonetic">({{ part.phonetic }})</span>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
// 請確認 menbody.jpg 的匯入路徑無誤
import menBodyImage from '../assets/menbody.jpg'

export default defineComponent({
  name: 'MenBodyImagePage',
  setup() {
    /**
     * menBodyParts: 依照需要增加/刪減身體部位
     *  - english: 顯示在標籤上的英文
     *  - phonetic: 顯示的音標
     *  - position: 標籤在圖片上的絕對定位 class
     *  - arrowDirection: 箭頭方向（arrow-left / arrow-right / arrow-up / arrow-down），
     *    以便對應不同位置的身體部位
     */
    const menBodyParts = ref([
      {
        english: 'Head',
        phonetic: '/hɛd/',
        position: 'head-pos',
        arrowDirection: 'arrow-down',
      },
      {
        english: 'Shoulder',
        phonetic: '/ˈʃoʊl.dɚ/',
        position: 'shoulder-pos',
        arrowDirection: 'arrow-left',
      },
      {
        english: 'Chest',
        phonetic: '/tʃest/',
        position: 'chest-pos',
        arrowDirection: 'arrow-right',
      },
      {
        english: 'Arm',
        phonetic: '/ɑːrm/',
        position: 'arm-pos',
        arrowDirection: 'arrow-left',
      },
      {
        english: 'Waist',
        phonetic: '/weɪst/',
        position: 'waist-pos',
        arrowDirection: 'arrow-right',
      },
      {
        english: 'Hip',
        phonetic: '/hɪp/',
        position: 'hip-pos',
        arrowDirection: 'arrow-left',
      },
      {
        english: 'Thigh',
        phonetic: '/θaɪ/',
        position: 'thigh-pos',
        arrowDirection: 'arrow-right',
      },
      {
        english: 'Knee',
        phonetic: '/niː/',
        position: 'knee-pos',
        arrowDirection: 'arrow-left',
      },
      {
        english: 'Calf',
        phonetic: '/kæf/',
        position: 'calf-pos',
        arrowDirection: 'arrow-left',
      },
      {
        english: 'Foot',
        phonetic: '/fʊt/',
        position: 'foot-pos',
        arrowDirection: 'arrow-up',
      },
    ])

    // 點選文字後，使用瀏覽器語音合成朗讀對應英文
    function speakEnglish(text: string) {
      const utterance = new SpeechSynthesisUtterance(text)
      // 如果需要調整語速或口音，可於此設定：
      // utterance.lang = 'en-US'
      // utterance.rate = 1.0
      speechSynthesis.speak(utterance)
    }

    return {
      menBodyParts,
      speakEnglish,
      menBodyImage,
    }
  },
})
</script>

<style scoped>
/* 外層容器，控制圖片寬度自適應並保持相對定位 */
.image-container {
  position: relative;
  max-width: 400px; /* 可依實際需求調整 */
  width: 100%;
  margin: 0 auto;
}

/* 圖片寬度 100% ，RWD 自適應 */
.men-body-image {
  display: block;
  width: 100%;
  height: auto;
}

/* label: 絕對定位的標籤區塊，可做背景、邊框、hover 效果 */
.label {
  position: absolute;
  display: flex;
  align-items: center; /* 讓箭頭和文字在垂直方向對齊 */
  background-color: #fffde7;
  padding: 4px 6px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s ease;
  border: 1px solid #ffe082;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);

  /* 讓文字和箭頭的相對位置更好控制 */
  position: absolute;
}

/* label 裡的文字 */
.label-text {
  position: relative;
  z-index: 2; /* 確保文字在箭頭之上 */
}

/* 音標樣式，可酌情調整字體大小或顏色 */
.phonetic {
  color: #666;
  font-size: 0.9rem;
  margin-left: 4px;
}

/* 箭頭區塊：透過邊框繪製小三角形 */
.arrow {
  width: 0;
  height: 0;
  border: 5px solid transparent;
  position: relative;
  margin-right: 4px; /* 與文字的間距 */
}

/* 箭頭向左 -> 右邊顯示為黃 */
.arrow-left {
  border-right-color: #fffde7; /* 與標籤背景一致 */
  margin-right: 0;
  margin-left: -10px; /* 往左騰出空間，以「插入」標籤 */
}

.arrow-right {
  border-left-color: #fffde7;
}

.arrow-up {
  border-bottom-color: #fffde7;
  margin-right: 4px;
}

.arrow-down {
  border-top-color: #fffde7;
  margin-right: 4px;
}

/*
  以下為範例定位（top / left）,
  實際請依 menbody.jpg 圖像位置微調
*/
.head-pos {
  top: 1%;
  left: 42%;
}
.shoulder-pos {
  top: 16%;
  left: 15%;
}
.chest-pos {
  top: 25%;
  left: 40%;
}
.arm-pos {
  top: 22%;
  left: 75%;
}
.waist-pos {
  top: 38%;
  left: 45%;
}
.hip-pos {
  top: 48%;
  left: 15%;
}
.thigh-pos {
  top: 55%;
  left: 50%;
}
.knee-pos {
  top: 66%;
  left: 15%;
}
.calf-pos {
  top: 68%;
  left: 65%;
}
.foot-pos {
  top: 85%;
  left: 40%;
}

/*
  RWD：小螢幕時可縮小字體或調整標籤大小
*/
@media (max-width: 768px) {
  .label {
    font-size: 0.8rem;
    padding: 3px 5px;
  }
  .phonetic {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .label {
    font-size: 0.7rem;
    padding: 2px 4px;
  }
  .phonetic {
    font-size: 0.7rem;
  }
}
</style>
