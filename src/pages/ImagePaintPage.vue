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
          <img src="../assets/elephant.png" class="elephant-image" alt="Elephant" />

          <!-- 使用 SVG 來創建可點擊區域 -->
          <svg class="clickable-areas" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon
              v-for="part in elephantParts"
              :key="part.name"
              :points="part.points"
              :class="{ hovered: part.isHovered }"
              :fill="part.color === 'transparent' ? 'transparent' : part.color"
              :fill-opacity="part.color === 'transparent' ? 0 : 0.7"
              @click="colorPart(part)"
              @mouseover="hoverPart(part, true)"
              @mouseout="hoverPart(part, false)"
              class="clickable-polygon"
            />
          </svg>

          <!-- 標籤 -->
          <div
            v-for="part in elephantParts"
            :key="`label-${part.name}`"
            class="part-label"
            :class="{ 'show-label': part.color !== 'transparent' || part.isHovered }"
            :style="getLabelPosition(part.points)"
          >
            {{ part.name }}
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { CSSProperties } from 'vue'

interface Point {
  x: number
  y: number
}

interface ElephantPart {
  name: string
  points: string
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
        points: '55,10 75,10 75,25 55,25', // 改用多邊形點座標
        color: 'transparent',
        isHovered: false,
      },
      {
        name: 'Eye',
        points: '60,24 70,24 70,29 60,29',
        color: 'transparent',
        isHovered: false,
      },
      {
        name: 'Ear耳朵',
        points: '35,13 57,13 57,38 35,38',
        color: 'transparent',
        isHovered: false,
      },
      {
        name: 'Trunk大象鼻子',
        // 使用更多點來創建彎曲的鼻子形狀
        points: '70,25 80,25 85,40 80,50 75,60 70,60 65,50 70,40',
        color: 'transparent',
        isHovered: false,
      },
      {
        name: 'Tusk象牙',
        points: '61,30 86,30 86,38 61,38',
        color: 'transparent',
        isHovered: false,
      },
      {
        name: 'Leg腿',
        // 使用多個點來創建更自然的腿部形狀
        points: '20,60 65,60 65,75 55,75 50,70 35,70 30,75 20,75',
        color: 'transparent',
        isHovered: false,
      },
      {
        name: 'Foot腳',
        points: '15,75 75,75 75,83 15,83',
        color: 'transparent',
        isHovered: false,
      },
      {
        name: 'Tail尾巴',
        // 使用多個點來創建彎曲的尾巴
        points: '10,22 22,22 22,37 15,37 10,32',
        color: 'transparent',
        isHovered: false,
      },
      {
        name: 'Skin皮膚',
        // 使用多個點來創建身體輪廓
        points: '20,35 62,35 62,60 20,60 20,35',
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

    const getLabelPosition = (points: string): CSSProperties => {
      // 解析點座標
      const coordinates: Point[] = points.split(' ').map((point) => {
        const [x, y] = point.split(',').map(Number)
        return { x: x || 0, y: y || 0 } // 提供默認值
      })

      // 計算中心點
      const centerX = coordinates.reduce((sum, point) => sum + point.x, 0) / coordinates.length
      const centerY = coordinates.reduce((sum, point) => sum + point.y, 0) / coordinates.length

      // 返回 style 對象
      return {
        position: 'absolute' as const, // 使用 as const 來固定類型
        left: `${centerX}%`,
        top: `${centerY}%`,
        transform: 'translate(-50%, -150%)',
      }
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
      getLabelPosition,
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

.clickable-areas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.clickable-polygon {
  pointer-events: all;
  cursor: pointer;
  stroke: transparent;
  stroke-width: 2;
  transition: all 0.3s ease;
}

.clickable-polygon:hover,
.clickable-polygon.hovered {
  stroke: #ff4081;
  stroke-opacity: 0.8;
}

.part-label {
  position: absolute;
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
  pointer-events: none; /* 防止標籤干擾點擊 */
}

.part-label.show-label {
  display: block;
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
