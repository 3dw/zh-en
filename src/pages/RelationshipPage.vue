<template>
  <q-page class="q-pa-md">
    <div class="row items-center q-mb-md">
      <h1 class="col">
        <q-icon name="people" size="md" color="primary" class="q-mr-sm" />
        英國皇室家族關係稱謂學習
      </h1>
    </div>

    <!-- 遊戲模式選擇 -->
    <div class="row q-mb-lg justify-center">
      <q-btn-toggle
        v-model="gameMode"
        :options="[
          { label: '聽力練習', value: 'listening' },
          { label: '填空練習', value: 'quiz' },
          { label: '配對題', value: 'matching' },
          { label: '進階測驗', value: 'advanced' },
        ]"
        color="primary"
        class="q-mb-md"
      />
    </div>

    <!-- 主要內容區域 -->
    <div class="row q-mt-lg">
      <!-- 左側族譜圖 -->
      <div class="col-12 col-md-7 q-pr-md">
        <q-img
          src="public/images/royal_family.jpg"
          class="family-tree-image cursor-pointer"
          fit="contain"
          @click="showImageDialog = true"
        >
          <template v-slot:loading>
            <q-spinner-dots color="primary" />
          </template>
        </q-img>
      </div>

      <!-- 右側遊戲區域 -->
      <div class="col-12 col-md-5">
        <!-- 聽力練習模式 -->
        <div v-if="gameMode === 'listening'" class="game-section">
          <q-card class="story-card">
            <q-card-section>
              <div class="text-h6">家族故事 | Family Story</div>
              <div class="text-body1 q-mt-md">
                <div class="english-text">{{ currentStory.en }}</div>
                <div class="chinese-text q-mt-sm">{{ currentStory.zh }}</div>
              </div>
            </q-card-section>
            <q-card-actions align="center">
              <q-btn color="primary" icon="volume_up" label="播放故事" @click="speakStory" />
              <q-btn color="secondary" icon="skip_next" label="下一個" @click="nextStory" />
            </q-card-actions>
          </q-card>
        </div>

        <!-- 填空練習模式 -->
        <div v-if="gameMode === 'quiz'" class="game-section">
          <q-card class="quiz-card">
            <q-card-section>
              <div class="text-h6">關係稱謂填空 | Relationship Quiz</div>
              <div class="text-body1 q-mt-md">
                <div class="english-text">{{ currentQuiz.question.en }}</div>
                <div class="chinese-text q-mt-sm">{{ currentQuiz.question.zh }}</div>
              </div>
              <div class="q-mt-md">
                <q-option-group
                  v-model="userAnswer"
                  :options="
                    currentQuiz.options.map((opt) => ({
                      label: `${opt.label.en} (${opt.label.zh})`,
                      value: opt.value,
                    }))
                  "
                  type="radio"
                  @update:model-value="checkAnswer"
                />
              </div>
            </q-card-section>
            <q-card-actions align="center">
              <q-btn
                color="primary"
                icon="check_circle"
                label="檢查答案"
                @click="checkAnswer"
                :disable="!userAnswer"
              />
              <q-btn color="secondary" icon="skip_next" label="下一題" @click="nextQuiz" />
            </q-card-actions>
          </q-card>
        </div>

        <!-- 配對題模式 -->
        <div v-if="gameMode === 'matching'" class="game-section">
          <q-card class="matching-card">
            <q-card-section>
              <div class="text-h6">皇室關係配對 | Royal Family Matching</div>

              <!-- 配對區域 -->
              <div class="matching-container q-mt-md">
                <!-- 左側人物列表 -->
                <div class="people-list">
                  <div
                    v-for="(person, index) in matchingPeople"
                    :key="'person-' + index"
                    class="person-item"
                    :class="{ selected: selectedPerson === person }"
                    @click="selectPerson(person)"
                  >
                    <div class="english-text">{{ person.name }}</div>
                    <div class="chinese-text">{{ person.nameZh }}</div>
                  </div>
                </div>

                <!-- 右側關係列表 -->
                <div class="relations-list">
                  <div
                    v-for="(relation, index) in matchingRelations"
                    :key="'relation-' + index"
                    class="relation-item"
                    :class="{ selected: selectedRelation === relation }"
                    @click="selectRelation(relation)"
                  >
                    <div class="english-text">{{ relation.en }}</div>
                    <div class="chinese-text">{{ relation.zh }}</div>
                  </div>
                </div>
              </div>

              <!-- 已完成的配對 -->
              <div class="matched-pairs q-mt-lg">
                <div
                  v-for="(pair, index) in matchedPairs"
                  :key="'pair-' + index"
                  class="matched-pair"
                >
                  <q-icon name="check_circle" color="positive" />
                  <span class="pair-text"> {{ pair.person.name }} → {{ pair.relation.en }} </span>
                </div>
              </div>
            </q-card-section>

            <q-card-actions align="center">
              <q-btn color="primary" icon="refresh" label="重新開始" @click="resetMatching" />
            </q-card-actions>
          </q-card>
        </div>

        <!-- 進階測驗模式 -->
        <div v-if="gameMode === 'advanced'" class="game-section">
          <q-card class="advanced-card">
            <q-card-section>
              <div class="text-h6">進階關係描述 | Advanced Relationship</div>
              <div class="text-body1 q-mt-md">
                <div class="english-text">{{ currentAdvanced.question.en }}</div>
                <div class="chinese-text q-mt-sm">{{ currentAdvanced.question.zh }}</div>
              </div>
              <q-input
                v-model="advancedAnswer"
                outlined
                label="請輸入答案"
                class="q-mt-md"
                @keyup.enter="checkAdvancedAnswer"
              />
            </q-card-section>
            <q-card-actions align="center">
              <q-btn
                color="primary"
                icon="check_circle"
                label="檢查答案"
                @click="checkAdvancedAnswer"
              />
              <q-btn color="secondary" icon="skip_next" label="下一題" @click="nextAdvanced" />
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>

    <!-- 結果提示對話框 -->
    <q-dialog v-model="showResult">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ resultMessage }}</div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="關閉" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- 圖片放大對話框 -->
    <q-dialog v-model="showImageDialog">
      <q-card style="width: 90vw; max-width: 1200px">
        <q-card-section class="row items-center justify-end">
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <q-card-section class="q-pa-none relative-position">
          <div
            class="image-container"
            @mousemove="handleMouseMove"
            @click="handleClick"
            ref="imageContainer"
          >
            <q-img
              src="public/images/royal_family.jpg"
              style="max-height: 85vh"
              fit="contain"
              ref="mainImage"
            >
              <template v-slot:loading>
                <q-spinner-dots color="primary" />
              </template>
            </q-img>
            <!-- 放大鏡框 -->
            <div
              v-show="showMagnifier"
              class="magnifier-frame"
              :style="{
                left: `${magnifierPos.x - magnifierSize / 2}px`,
                top: `${magnifierPos.y - magnifierSize / 2}px`,
                width: `${magnifierSize}px`,
                height: `${magnifierSize}px`,
                backgroundImage: `url(public/images/royal_family.jpg)`,
                backgroundPosition: `${-magnifierPos.x * zoomLevel + magnifierSize / 2}px ${
                  -magnifierPos.y * zoomLevel + magnifierSize / 2
                }px`,
                backgroundSize: calculateBackgroundSize,
              }"
            ></div>
            <!-- 放大區域 -->
            <div
              v-show="showMagnifier"
              class="magnified-view"
              :style="{
                backgroundImage: `url(public/images/royal_family.jpg)`,
                backgroundPosition: `${-magnifierPos.x * zoomLevel + magnifiedSize / 2}px ${
                  -magnifierPos.y * zoomLevel + magnifiedSize / 2
                }px`,
                backgroundSize: calculateBackgroundSize,
                left: magnifiedPos.x + 'px',
                top: magnifiedPos.y + 'px',
              }"
            ></div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

interface Story {
  en: string
  zh: string
}

interface Quiz {
  question: {
    en: string
    zh: string
  }
  options: Array<{
    label: { en: string; zh: string }
    value: string
  }>
  answer: string
}

interface AdvancedQuiz {
  question: {
    en: string
    zh: string
  }
  answer: string
  answerZh: string
}

interface MatchingPerson {
  name: string
  nameZh: string
}

interface MatchingRelation {
  en: string
  zh: string
  correctPerson: string
}

export default defineComponent({
  name: 'RelationshipPage',
  setup() {
    const gameMode = ref('listening')
    const showResult = ref(false)
    const resultMessage = ref('')
    const userAnswer = ref('')
    const advancedAnswer = ref('')
    const showImageDialog = ref(false)
    const showMagnifier = ref(false)
    const magnifierPos = ref({ x: 0, y: 0 })
    const magnifiedPos = ref({ x: 0, y: 0 })
    const magnifierSize = 200
    const magnifiedSize = 300
    const zoomLevel = 2.5
    const imageContainer = ref<HTMLElement | null>(null)
    const mainImage = ref<{
      $el: HTMLElement
      clientWidth: number
      clientHeight: number
    }>({
      $el: document.createElement('div'),
      clientWidth: 0,
      clientHeight: 0,
    })

    // 新增計算背景尺寸的計算屬性
    const calculateBackgroundSize = computed(() => {
      if (!mainImage.value?.$el) return ''
      const imgElement = mainImage.value.$el.querySelector('img') as HTMLImageElement
      if (!imgElement) return ''

      const naturalRatio = imgElement.naturalWidth / imgElement.naturalHeight
      const displayRatio = imgElement.clientWidth / imgElement.clientHeight

      if (naturalRatio > displayRatio) {
        // 寬度受限
        return `${imgElement.clientWidth * zoomLevel}px auto`
      } else {
        // 高度受限
        return `auto ${imgElement.clientHeight * zoomLevel}px`
      }
    })

    // 修改聽力練習故事
    const defaultStory: Story = {
      en: 'Queen Elizabeth II married Prince Philip on November 20, 1947. They had four children: Charles, Anne, Andrew, and Edward.',
      zh: '伊莉莎白二世女王於1947年11月20日與菲利普親王結婚。他們育有四個孩子：查爾斯、安妮、安德魯和愛德華。',
    }

    const stories: Story[] = [
      defaultStory,
      {
        en: 'Prince Charles and Diana had two children: William and Harry.',
        zh: '查爾斯王子和戴安娜育有兩個孩子：威廉和哈利。',
      },
      {
        en: 'Prince William married Catherine on April 29, 2011. They have three children: George, Charlotte, and Louis.',
        zh: '威廉王子於2011年4月29日與凱薩琳結婚。他們育有三個孩子：喬治、夏洛特和路易。',
      },
      {
        en: 'Queen Elizabeth II is the grandmother of Prince William and Prince Harry.',
        zh: '伊莉莎白二世女王是威廉王子和哈利王子的祖母。',
      },
    ]

    // 修改填空練習題目
    const defaultQuiz: Quiz = {
      question: {
        en: 'Prince Charles is the ______ of Queen Elizabeth II.',
        zh: '查爾斯王子是伊莉莎白二世女王的______。',
      },
      options: [
        { label: { en: 'father', zh: '父親' }, value: 'father' },
        { label: { en: 'son', zh: '兒子' }, value: 'son' },
        { label: { en: 'brother', zh: '兄弟' }, value: 'brother' },
      ],
      answer: 'son',
    }

    const quizzes: Quiz[] = [
      defaultQuiz,
      {
        question: {
          en: 'Prince George is the ______ of Princess Charlotte.',
          zh: '喬治王子是夏洛特公主的______。',
        },
        options: [
          { label: { en: 'brother', zh: '兄弟' }, value: 'brother' },
          { label: { en: 'uncle', zh: '叔叔' }, value: 'uncle' },
          { label: { en: 'cousin', zh: '表親' }, value: 'cousin' },
        ],
        answer: 'brother',
      },
    ]

    // 修改進階測驗題目
    const defaultAdvancedQuiz: AdvancedQuiz = {
      question: {
        en: 'Who is the mother of Prince George?',
        zh: '喬治王子的母親是誰？',
      },
      answer: 'Catherine',
      answerZh: '凱薩琳',
    }

    const advancedQuizzes: AdvancedQuiz[] = [
      defaultAdvancedQuiz,
      {
        question: {
          en: 'What is the relationship between Queen Elizabeth II and Prince Louis?',
          zh: '伊莉莎白二世女王與路易斯王子之間的關係是什麼？',
        },
        answer: 'Great-grandmother',
        answerZh: '曾祖母',
      },
    ]

    const currentStoryIndex = ref(0)
    const currentStory = ref<Story>(defaultStory)

    const currentQuizIndex = ref(0)
    const currentQuiz = ref<Quiz>(defaultQuiz)

    const currentAdvancedIndex = ref(0)
    const currentAdvanced = ref<AdvancedQuiz>(defaultAdvancedQuiz)

    // 聽力練習功能
    const speakStory = () => {
      const utterance = new SpeechSynthesisUtterance(currentStory.value.en)
      utterance.lang = 'en-GB'
      speechSynthesis.speak(utterance)
    }

    const nextStory = () => {
      const nextIndex = (currentStoryIndex.value + 1) % stories.length
      currentStoryIndex.value = nextIndex
      const nextStory = stories[nextIndex] ?? defaultStory
      currentStory.value = nextStory
    }

    // 填空練習功能
    const checkAnswer = () => {
      const quiz = currentQuiz.value
      if (userAnswer.value === quiz.answer) {
        resultMessage.value = '答對了！'
      } else {
        resultMessage.value = `答錯了。正確答案是：${quiz.answer}`
      }
      showResult.value = true
    }

    const nextQuiz = () => {
      const nextIndex = (currentQuizIndex.value + 1) % quizzes.length
      currentQuizIndex.value = nextIndex
      const nextQuiz = quizzes[nextIndex] ?? defaultQuiz
      currentQuiz.value = nextQuiz
      userAnswer.value = ''
    }

    // 進階測驗功能
    const checkAdvancedAnswer = () => {
      const advanced = currentAdvanced.value
      if (advancedAnswer.value.toLowerCase() === advanced.answer.toLowerCase()) {
        resultMessage.value = '答對了！'
      } else {
        resultMessage.value = `答錯了。正確答案是：${advanced.answer}`
      }
      showResult.value = true
    }

    const nextAdvanced = () => {
      const nextIndex = (currentAdvancedIndex.value + 1) % advancedQuizzes.length
      currentAdvancedIndex.value = nextIndex
      const nextAdvanced = advancedQuizzes[nextIndex] ?? defaultAdvancedQuiz
      currentAdvanced.value = nextAdvanced
      advancedAnswer.value = ''
    }

    // 配對遊戲數據
    const matchingPeople = ref<MatchingPerson[]>([
      { name: 'Princess Eugenie', nameZh: '尤金妮公主' },
      { name: 'Prince Edward', nameZh: '愛德華王子' },
      { name: 'Zara Tindall', nameZh: '扎拉·廷德爾' },
      { name: 'Catherine', nameZh: '凱薩琳' },
    ])

    const matchingRelations = ref<MatchingRelation[]>([
      {
        en: 'daughter of Prince Andrew',
        zh: '安德魯王子的女兒',
        correctPerson: 'Princess Eugenie',
      },
      {
        en: 'son of Queen Elizabeth II',
        zh: '伊莉莎白二世女王的兒子',
        correctPerson: 'Prince Edward',
      },
      {
        en: 'daughter of Princess Anne',
        zh: '安妮公主的女兒',
        correctPerson: 'Zara Tindall',
      },
      {
        en: 'mother of Prince George, Princess Charlotte, and Prince Louis',
        zh: '喬治王子、夏洛特公主和路易王子的母親',
        correctPerson: 'Catherine',
      },
    ])

    const selectedPerson = ref<MatchingPerson | null>(null)
    const selectedRelation = ref<MatchingRelation | null>(null)
    const matchedPairs = ref<Array<{ person: MatchingPerson; relation: MatchingRelation }>>([])

    const selectPerson = (person: MatchingPerson) => {
      selectedPerson.value = person
      checkMatch()
    }

    const selectRelation = (relation: MatchingRelation) => {
      selectedRelation.value = relation
      checkMatch()
    }

    const checkMatch = () => {
      if (selectedPerson.value && selectedRelation.value) {
        if (selectedRelation.value.correctPerson === selectedPerson.value.name) {
          // 配對成功
          matchedPairs.value.push({
            person: selectedPerson.value,
            relation: selectedRelation.value,
          })
          // 清除選擇
          selectedPerson.value = null
          selectedRelation.value = null
        } else {
          // 配對失敗，清除選擇
          setTimeout(() => {
            selectedPerson.value = null
            selectedRelation.value = null
          }, 1000)
        }
      }
    }

    const resetMatching = () => {
      selectedPerson.value = null
      selectedRelation.value = null
      matchedPairs.value = []
    }

    const handleMouseMove = (event: MouseEvent) => {
      if (!imageContainer.value || !mainImage.value?.$el) return

      const rect = imageContainer.value.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top

      // 計算相對於圖片的實際位置
      const imageRect = mainImage.value.$el.getBoundingClientRect()
      const imageX = event.clientX - imageRect.left
      const imageY = event.clientY - imageRect.top

      magnifierPos.value = { x: imageX, y: imageY }

      // 計算放大區域的位置
      let magnifiedX = x + 20
      let magnifiedY = y

      if (magnifiedX + magnifiedSize > rect.width) {
        magnifiedX = x - magnifiedSize - 20
      }
      if (magnifiedY + magnifiedSize > rect.height) {
        magnifiedY = rect.height - magnifiedSize
      }

      magnifiedPos.value = { x: magnifiedX, y: magnifiedY }
    }

    const handleClick = () => {
      showMagnifier.value = !showMagnifier.value
    }

    return {
      gameMode,
      currentStory,
      currentQuiz,
      currentAdvanced,
      userAnswer,
      advancedAnswer,
      showResult,
      resultMessage,
      speakStory,
      nextStory,
      checkAnswer,
      nextQuiz,
      checkAdvancedAnswer,
      nextAdvanced,
      matchingPeople,
      matchingRelations,
      selectedPerson,
      selectedRelation,
      matchedPairs,
      selectPerson,
      selectRelation,
      resetMatching,
      showImageDialog,
      showMagnifier,
      magnifierPos,
      magnifierSize,
      magnifiedSize,
      zoomLevel,
      handleMouseMove,
      handleClick,
      imageContainer,
      mainImage,
      magnifiedPos,
      calculateBackgroundSize,
    }
  },
})
</script>

<style scoped>
.family-tree-image {
  width: 100%;
  height: calc(100vh - 200px);
  min-height: 500px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 20px;
}

.game-section {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.story-card,
.quiz-card,
.advanced-card {
  width: 100%;
}

/* 在小螢幕上調整布局 */
@media (max-width: 1023px) {
  .family-tree-image {
    height: 400px;
    min-height: auto;
    margin-bottom: 20px;
    position: relative;
  }

  .game-section {
    margin-top: 20px;
  }
}

.text-h6 {
  color: #1976d2;
}

.q-card {
  border-radius: 12px;
}

.english-text {
  color: #1976d2;
  font-size: 1.1em;
}

.chinese-text {
  color: #666;
  font-size: 1em;
}

.matching-card {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}

.matching-container {
  display: flex;
  gap: 30px;
  margin-top: 20px;
}

.people-list,
.relations-list {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.person-item,
.relation-item {
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.person-item:hover,
.relation-item:hover {
  background-color: #e3f2fd;
}

.selected {
  background-color: #bbdefb;
  border-color: #1976d2;
}

.matched-pairs {
  margin-top: 20px;
}

.matched-pair {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  padding: 8px;
  background-color: #f5f5f5;
  border-radius: 4px;
}

.pair-text {
  color: #1976d2;
}

.image-container {
  position: relative;
  overflow: hidden;
}

.magnifier-frame {
  position: absolute;
  border: 2px solid #1976d2;
  cursor: move;
  pointer-events: none;
  z-index: 7000;
}

.magnified-view {
  position: absolute;
  width: v-bind(magnifiedSize + 'px');
  height: v-bind(magnifiedSize + 'px');
  border: 2px solid #1976d2;
  background-repeat: no-repeat;
  z-index: 7000;
  pointer-events: none;
}

.relative-position {
  position: relative;
}
</style>
