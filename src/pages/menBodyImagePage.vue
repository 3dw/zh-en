<template>
  <q-page class="q-pa-md">
    <div>
      <div class="row items-center q-mb-md">
        <h1 class="col">男性身體部位（可點選發音）</h1>
        <div class="col-auto">
          <q-badge color="primary" class="text-h6"> Level: {{ level }} </q-badge>
        </div>
      </div>

      <!-- 主容器 -->
      <div class="image-container">
        <!-- menbody.jpg 放在正確位置，若有異動請修改路徑 -->
        <img src="../assets/menbody.jpg" alt="Men Body" class="men-body-image" />

        <!-- 迭代區塊：每個部位標籤 -->
        <div
          v-for="(part, index) in menBodyParts"
          :key="index"
          :class="['label', part.position]"
          @click="handleClick(part.english)"
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
import menBodyImage from '../assets/menbody.jpg'

export default defineComponent({
  name: 'MenBodyImagePage',
  setup() {
    /**
     * menBodyParts: 依照需要增加/刪減身體部位
     *  - english: 顯示於標籤的英文
     *  - chinese: 顯示的中文
     *  - phonetic: KK 音標 (以方括號表示)
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
        phonetic: '[ˋʃoldɚ]', // 多音節有重音 (ˋ)
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
        phonetic: '[west]', // KK 常標成 [west] (對應 IPA [weɪst])
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

    // 新增 level 參考
    const level = ref(0)

    // 修改點擊處理函數
    function handleClick(text: string) {
      speakEnglish(text)
      level.value++

      // 可選：將 level 儲存到 localStorage
      localStorage.setItem('menBodyLevel', level.value.toString())
    }

    // 語音合成函數保持不變
    function speakEnglish(text: string) {
      const utterance = new SpeechSynthesisUtterance(text)
      speechSynthesis.speak(utterance)
    }

    // 在組件初始化時讀取已儲存的 level
    const savedLevel = localStorage.getItem('menBodyLevel')
    if (savedLevel) {
      level.value = parseInt(savedLevel)
    }

    return {
      menBodyParts,
      speakEnglish,
      menBodyImage,
      level,
      handleClick,
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
  以下為範例定位（top / left），
  您可依據 menbody.jpg 實際圖像位置微調
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
  top: 28%;
  left: 35%;
}
.arm-pos {
  top: 22%;
  left: 70%;
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
  top: 75%;
  left: 65%;
}
.foot-pos {
  top: 89%;
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
