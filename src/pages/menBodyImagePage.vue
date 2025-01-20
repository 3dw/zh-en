<template>
  <q-page class="q-pa-md">
    <div>
      <h1>男性身體部位（可點選發音）</h1>
      <!-- 主容器 -->
      <div class="image-container">
        <img src="../assets/learnfromimage/menbody.jpg" alt="Men Body" class="men-body-image" />

        <!-- 迭代區塊：每個部位標籤 -->
        <div
          v-for="(part, index) in menBodyParts"
          :key="index"
          :class="['label', part.position]"
          @click="speakEnglish(part.english)"
        >
          <!-- 箭頭 -->
          <div class="arrow" :class="part.arrowDirection"></div>

          <!-- 顯示 [英文] + (中文) + 音標 -->
          <div class="label-text">
            {{ part.english }}
            <span class="chinese"> ({{ part.chinese }}) </span>
            <span class="phonetic">{{ part.phonetic }}</span>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import menBodyImage from '../assets/learnfromimage/menbody.jpg'

export default defineComponent({
  name: 'MenBodyImagePage',

  // 新增 emits: ['earn-xp']，讓父層監聽到此事件即可加經驗值
  emits: ['earn-xp'],

  setup(_, { emit }) {
    /**
     * menBodyParts: 依照需要增加/刪減身體部位
     *  - english: 顯示於標籤的英文
     *  - chinese: 顯示的中文
     *  - phonetic: KK 音標
     *  - position: 標籤在圖片上的絕對定位 class
     *  - arrowDirection: 箭頭方向
     */
    const menBodyParts = ref([
      {
        english: 'Head',
        chinese: '頭',
        phonetic: '[hɛd]',
        position: 'head-pos',
        arrowDirection: 'arrow-down',
      },
      {
        english: 'Shoulder',
        chinese: '肩膀',
        phonetic: '[ˋʃoldɚ]',
        position: 'shoulder-pos',
        arrowDirection: 'arrow-left',
      },
      {
        english: 'Chest',
        chinese: '胸部',
        phonetic: '[tʃɛst]',
        position: 'chest-pos',
        arrowDirection: 'arrow-right',
      },
      {
        english: 'Arm',
        chinese: '手臂',
        phonetic: '[ɑrm]',
        position: 'arm-pos',
        arrowDirection: 'arrow-left',
      },
      {
        english: 'Waist',
        chinese: '腰',
        phonetic: '[west]',
        position: 'waist-pos',
        arrowDirection: 'arrow-right',
      },
      {
        english: 'Hip',
        chinese: '臀部',
        phonetic: '[hɪp]',
        position: 'hip-pos',
        arrowDirection: 'arrow-left',
      },
      {
        english: 'Thigh',
        chinese: '大腿',
        phonetic: '[θaɪ]',
        position: 'thigh-pos',
        arrowDirection: 'arrow-right',
      },
      {
        english: 'Knee',
        chinese: '膝蓋',
        phonetic: '[ni]',
        position: 'knee-pos',
        arrowDirection: 'arrow-left',
      },
      {
        english: 'Calf',
        chinese: '小腿',
        phonetic: '[kæf]',
        position: 'calf-pos',
        arrowDirection: 'arrow-left',
      },
      {
        english: 'Foot',
        chinese: '腳',
        phonetic: '[fʊt]',
        position: 'foot-pos',
        arrowDirection: 'arrow-up',
      },
    ])

    /**
     * 點選文字後，使用瀏覽器語音合成朗讀對應英文，並觸發 "earn-xp"。
     * 可根據需求調整每次增加的經驗值數量 (此處示範 +5)
     */
    function speakEnglish(text: string) {
      const utterance = new SpeechSynthesisUtterance(text)
      speechSynthesis.speak(utterance)

      // 朗讀完同時觸發事件，讓父層或 MainLayout 去增加 XP
      emit('earn-xp', 5)
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
  align-items: center; /* 讓箭頭和文字垂直置中 */
  background-color: #fffde7;
  padding: 4px 6px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s ease;
  border: 1px solid #ffe082;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
}

/* label 文字排版 */
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

/* 中文樣式，可依喜好微調 */
.chinese {
  color: #333;
  margin-left: 4px;
}

/* 箭頭區塊：透過邊框繪製小三角形 */
.arrow {
  width: 0;
  height: 0;
  border: 5px solid transparent;
  margin-right: 4px;
}

/* 箭頭方向，根據實際位置套用 */
.arrow-left {
  border-right-color: #fffde7;
}
.arrow-right {
  border-left-color: #fffde7;
}
.arrow-up {
  border-bottom-color: #fffde7;
}
.arrow-down {
  border-top-color: #fffde7;
}

/*
  以下為範例定位（top / left），請依 menbody.jpg 圖像位置微調
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
  .phonetic,
  .chinese {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .label {
    font-size: 0.7rem;
    padding: 2px 4px;
  }
  .phonetic,
  .chinese {
    font-size: 0.7rem;
  }
}
</style>
