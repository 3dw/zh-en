<template>
  <q-page class="q-pa-md">
    <div class="row items-center q-mb-md">
      <h1 class="col">
        <q-icon name="brush" size="md" color="primary" class="q-mr-sm" />
        大象部位著色遊戲 | Elephant Body Parts Coloring
      </h1>
    </div>

    <div class="row">
      <!-- 左側顏色選擇器 -->
      <div class="col-12 col-md-3 q-pr-md">
        <q-card class="color-picker">
          <q-card-section>
            <div class="text-h6">選擇顏色</div>
            <div class="row q-gutter-sm q-mt-sm">
              <div v-for="(color, index) in colors" :key="color" class="color-option">
                <q-btn
                  :style="{ backgroundColor: color }"
                  class="color-btn"
                  @click="selectColor(color, index)"
                />
                <div class="color-name">{{ colorNames[index] }}</div>
              </div>
            </div>
            <div class="text-caption q-mt-sm">
              當前顏色：
              <div class="current-color" :style="{ backgroundColor: selectedColor }">
                {{ getColorName(selectedColor) }}
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <!-- 右側大象圖 -->
      <div class="col-12 col-md-9">
        <div class="elephant-container">
          <!-- 修改圖片路徑 -->
          <img src="../assets/elephant.png" class="elephant-image" alt="Elephant" />

          <!-- 可點擊區域 -->
          <div
            v-for="part in elephantParts"
            :key="part.name"
            class="clickable-area"
            :style="{
              ...part.style,
              backgroundColor: part.color,
              opacity: part.color === 'transparent' ? 0 : 0.7,
            }"
            :class="{ hovered: part.isHovered }"
            @click="colorPart(part)"
            @mouseover="hoverPart(part, true)"
            @mouseout="hoverPart(part, false)"
          >
            <span class="part-label" :class="{ 'show-label': part.color !== 'transparent' }">
              {{ part.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

interface ElephantPart {
  name: string
  style: object
  color: string
  isHovered: boolean
}

export default defineComponent({
  name: 'ImagePaintPage',
  setup() {
    const selectedColor = ref('#FF4081')
    const colors = [
      '#FF4081',
      '#3F51B5',
      '#4CAF50',
      '#FFC107',
      '#9C27B0',
      '#00BCD4',
      '#FF5722',
      '#999999',
    ]

    const colorNames = ['Pink', 'Blue', 'Green', 'Yellow', 'Purple', 'Cyan', 'Orange', 'Gray']

    const elephantParts = ref([
      {
        name: 'Head頭',
        style: {
          top: '10%',
          left: '55%',
          width: '20%',
          height: '15%',
        },
        color: 'transparent',
        isHovered: false,
      },
      {
        name: 'Eye',
        style: {
          top: '24%',
          left: '60%',
          width: '10%',
          height: '5%',
        },
        color: 'transparent',
        isHovered: false,
      },
      {
        name: 'Ear耳朵',
        style: {
          top: '13%',
          left: '35%',
          width: '22%',
          height: '25%',
        },
        color: 'transparent',
        isHovered: false,
      },
      {
        name: 'Trunk大象鼻子',
        style: {
          top: '25%',
          left: '70%',
          width: '10%',
          height: '35%',
        },
        color: 'transparent',
        isHovered: false,
      },
      {
        name: 'Tusk象牙',
        style: {
          top: '30%',
          left: '61%',
          width: '25%',
          height: '8%',
        },
        color: 'transparent',
        isHovered: false,
      },
      // {
      //   name: 'Mouth and Lips',
      //   style: {
      //     top: '55%',
      //     left: '45%',
      //     width: '20%',
      //     height: '15%',
      //   },
      //   color: 'transparent',
      //   isHovered: false,
      // },
      {
        name: 'Leg腿',
        style: {
          top: '60%',
          left: '20%',
          width: '45%',
          height: '15%',
        },
        color: 'transparent',
        isHovered: false,
      },
      {
        name: 'Foot腳',
        style: {
          top: '75%',
          left: '15%',
          width: '60%',
          height: '8%',
        },
        color: 'transparent',
        isHovered: false,
      },
      {
        name: 'Tail尾巴',
        style: {
          top: '22%',
          left: '10%',
          width: '12%',
          height: '15%',
        },
        color: 'transparent',
        isHovered: false,
      },
      {
        name: 'Skin皮膚',
        style: {
          top: '35%',
          left: '20%',
          width: '42%',
          height: '25%',
        },
        color: 'transparent',
        isHovered: false,
      },
    ])

    const getColorName = (color: string) => {
      const index = colors.indexOf(color)
      return colorNames[index]
    }

    const speakText = (text: string) => {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'en-US'
      utterance.rate = 0.9
      speechSynthesis.speak(utterance)
    }

    const selectColor = (color: string, index: number) => {
      selectedColor.value = color
      const colorName = colorNames[index] || 'unknown'
      const utterance = new SpeechSynthesisUtterance(`This is ${colorName} color`)
      utterance.lang = 'en-US'
      utterance.rate = 0.9
      speechSynthesis.speak(utterance)
    }

    const colorPart = (part: ElephantPart) => {
      part.color = selectedColor.value
      speakText(part.name)
    }

    const hoverPart = (part: ElephantPart, isHovered: boolean) => {
      part.isHovered = isHovered
    }

    return {
      selectedColor,
      colors,
      colorNames,
      elephantParts,
      colorPart,
      hoverPart,
      getColorName,
      selectColor,
    }
  },
})
</script>

<style scoped>
.color-picker {
  position: sticky;
  top: 20px;
}

.color-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.current-color {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  vertical-align: middle;
  border: 2px solid #ddd;
}

.elephant-container {
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.elephant-image {
  width: 100%;
  height: auto;
}

.clickable-area {
  position: absolute;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 8px;
  transition: all 0.3s ease;
  mix-blend-mode: multiply;
}

.clickable-area.hovered {
  border-color: #ff4081;
  background-color: rgba(255, 64, 129, 0.1);
}

.part-label {
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.9);
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  white-space: nowrap;
  display: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #1976d2;
  z-index: 10;
}

.clickable-area:hover .part-label {
  display: block;
}

.part-label.show-label {
  display: block !important;
}

.color-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.color-name {
  font-size: 12px;
  color: #666;
}

@media (max-width: 600px) {
  .elephant-container {
    max-width: 100%;
  }
}
</style>
