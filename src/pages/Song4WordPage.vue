<template>
  <q-page class="q-pa-md">
    <div class="row items-center q-mb-md">
      <h1 class="col">
        <q-icon name="music_note" size="md" color="primary" class="q-mr-sm" />
        英文兒歌克漏字學習
      </h1>
    </div>

    <!-- 遊戲說明和發音按鈕 -->
    <div class="text-h6 q-mb-md text-center">
      <div class="row justify-center items-center q-gutter-md">
        <div>
          <div>{{ gameInstruction.zh }}</div>
          <div class="text-subtitle1">{{ gameInstruction.en }}</div>
        </div>
        <div class="row q-gutter-sm">
          <q-btn
            icon="volume_up"
            color="primary"
            round
            size="md"
            @click="speakInstruction('zh')"
            class="q-mr-sm"
          >
            <q-tooltip>中文說明</q-tooltip>
          </q-btn>
          <q-btn icon="volume_up" color="secondary" round size="md" @click="speakInstruction('en')">
            <q-tooltip>English Instruction</q-tooltip>
          </q-btn>
        </div>
      </div>
    </div>

    <!-- YouTube 影片區域 -->
    <div class="row justify-center q-mb-lg">
      <div class="col-12 col-sm-10 col-md-8">
        <div class="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ChqnN3cKzXQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>

    <!-- 填空遊戲區域 -->
    <div class="row justify-center q-mt-lg">
      <div class="col-12 col-sm-10 col-md-8">
        <div v-for="(line, lineIndex) in lyricsLines" :key="lineIndex" class="q-mb-md">
          <div class="row items-center q-gutter-sm">
            <template v-for="(word, wordIndex) in line" :key="`${lineIndex}-${wordIndex}`">
              <template v-if="word.isBlank">
                <q-input
                  v-model="word.userInput"
                  outlined
                  dense
                  class="blank-input"
                  :disable="showingResult"
                  @keyup.enter="checkAnswer"
                />
              </template>
              <template v-else>
                <span class="text-h6">{{ word.text }}</span>
              </template>
            </template>
          </div>
        </div>

        <!-- 檢查答案按鈕 -->
        <div class="row justify-center q-mt-lg">
          <q-btn
            label="檢查答案"
            color="primary"
            @click="checkAnswer"
            :disable="showingResult"
            class="q-mx-sm"
          />
          <q-btn
            label="重新開始"
            color="secondary"
            @click="resetAnswers"
            :disable="showingResult"
            class="q-mx-sm"
          />
        </div>
      </div>
    </div>

    <!-- 結果提示對話框 -->
    <q-dialog v-model="showResult">
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">檢查結果</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <div class="text-body1" style="white-space: pre-line">
            {{ resultMessage }}
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="關閉" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

interface LyricWord {
  text: string
  isBlank: boolean
  userInput: string
  correctAnswer?: string
}

export default defineComponent({
  name: 'Song4WordPage',
  setup() {
    const gameInstruction = ref({
      zh: '請看影片，聽歌曲，填入正確的單字',
      en: 'Watch the video, listen to the song, and fill in the correct words',
    })
    const showResult = ref(false)
    const resultMessage = ref('')
    const showingResult = ref(false)
    const lyricsLines = ref<LyricWord[][]>([])

    const speakInstruction = (lang: 'zh' | 'en') => {
      const utterance = new SpeechSynthesisUtterance(
        lang === 'zh' ? gameInstruction.value.zh : gameInstruction.value.en,
      )
      utterance.lang = lang === 'zh' ? 'zh-TW' : 'en-US'
      utterance.rate = 0.9 // 稍微放慢語速
      speechSynthesis.speak(utterance)
    }

    function initializeLyrics() {
      lyricsLines.value = [
        // A-D
        [
          { text: '', isBlank: true, userInput: '', correctAnswer: 'A' },
          { text: 'is for', isBlank: false, userInput: '' },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'apple' },
        ],
        [
          { text: '', isBlank: true, userInput: '', correctAnswer: 'B' },
          { text: 'is for', isBlank: false, userInput: '' },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'banana' },
        ],
        [
          { text: '', isBlank: true, userInput: '', correctAnswer: 'C' },
          { text: 'is for', isBlank: false, userInput: '' },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'cake' },
        ],
        [
          { text: '', isBlank: true, userInput: '', correctAnswer: 'D' },
          { text: 'is for', isBlank: false, userInput: '' },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'duck' },
        ],
        // E-H
        [
          { text: '', isBlank: true, userInput: '', correctAnswer: 'E' },
          { text: 'is for', isBlank: false, userInput: '' },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'elephant' },
        ],
        [
          { text: '', isBlank: true, userInput: '', correctAnswer: 'F' },
          { text: 'is for', isBlank: false, userInput: '' },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'fish' },
        ],
        [
          { text: '', isBlank: true, userInput: '', correctAnswer: 'G' },
          { text: 'is for', isBlank: false, userInput: '' },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'guitar' },
        ],
        [
          { text: '', isBlank: true, userInput: '', correctAnswer: 'H' },
          { text: 'is for', isBlank: false, userInput: '' },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'hat' },
        ],
        // I-L
        [
          { text: '', isBlank: true, userInput: '', correctAnswer: 'I' },
          { text: 'is for', isBlank: false, userInput: '' },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'igloo' },
        ],
        [
          { text: '', isBlank: true, userInput: '', correctAnswer: 'J' },
          { text: 'is for', isBlank: false, userInput: '' },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'juice' },
        ],
        [
          { text: '', isBlank: true, userInput: '', correctAnswer: 'K' },
          { text: 'is for', isBlank: false, userInput: '' },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'kitten' },
        ],
        [
          { text: '', isBlank: true, userInput: '', correctAnswer: 'L' },
          { text: 'is for', isBlank: false, userInput: '' },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'lemon' },
        ],
        // M-P
        [
          { text: '', isBlank: true, userInput: '', correctAnswer: 'M' },
          { text: 'is for', isBlank: false, userInput: '' },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'mittens' },
        ],
        [
          { text: '', isBlank: true, userInput: '', correctAnswer: 'N' },
          { text: 'is for', isBlank: false, userInput: '' },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'nest' },
        ],
        [
          { text: '', isBlank: true, userInput: '', correctAnswer: 'O' },
          { text: 'is for', isBlank: false, userInput: '' },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'orange' },
        ],
        [
          { text: '', isBlank: true, userInput: '', correctAnswer: 'P' },
          { text: 'is for', isBlank: false, userInput: '' },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'pig' },
        ],
        // Q-T
        [
          { text: '', isBlank: true, userInput: '', correctAnswer: 'Q' },
          { text: 'is for', isBlank: false, userInput: '' },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'queen' },
        ],
        [
          { text: '', isBlank: true, userInput: '', correctAnswer: 'R' },
          { text: 'is for', isBlank: false, userInput: '' },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'ring' },
        ],
        [
          { text: '', isBlank: true, userInput: '', correctAnswer: 'S' },
          { text: 'is for', isBlank: false, userInput: '' },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'socks' },
        ],
        [
          { text: '', isBlank: true, userInput: '', correctAnswer: 'T' },
          { text: 'is for', isBlank: false, userInput: '' },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'teddybear' },
        ],
        // U-X
        [
          { text: '', isBlank: true, userInput: '', correctAnswer: 'U' },
          { text: 'is for', isBlank: false, userInput: '' },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'umbrella' },
        ],
        [
          { text: '', isBlank: true, userInput: '', correctAnswer: 'V' },
          { text: 'is for', isBlank: false, userInput: '' },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'vegetables' },
        ],
        [
          { text: '', isBlank: true, userInput: '', correctAnswer: 'W' },
          { text: 'is for', isBlank: false, userInput: '' },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'wolf' },
        ],
        [
          { text: '', isBlank: true, userInput: '', correctAnswer: 'X' },
          { text: 'is for', isBlank: false, userInput: '' },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'xylophone' },
        ],
        // Y-Z
        [
          { text: '', isBlank: true, userInput: '', correctAnswer: 'Y' },
          { text: 'is for', isBlank: false, userInput: '' },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'yoyo' },
        ],
        [
          { text: '', isBlank: true, userInput: '', correctAnswer: 'Z' },
          { text: 'is for', isBlank: false, userInput: '' },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'zipper' },
        ],
      ]
    }

    const checkAnswer = () => {
      showingResult.value = true
      let allCorrect = true
      const incorrectAnswers: { userInput: string; correctAnswer: string }[] = []

      lyricsLines.value.forEach((line) => {
        line.forEach((word) => {
          if (word.isBlank) {
            const userAnswer = word.userInput.toLowerCase().trim()
            const correctAnswer = word.correctAnswer?.toLowerCase() || ''

            if (userAnswer !== correctAnswer) {
              allCorrect = false
              incorrectAnswers.push({
                userInput: word.userInput || '(空白)',
                correctAnswer: word.correctAnswer || '',
              })
            }
          }
        })
      })

      if (allCorrect) {
        resultMessage.value = '太棒了！\n你已經學會這些字母和單字了！'
      } else {
        resultMessage.value =
          '再試一次：\n' +
          incorrectAnswers
            .map((item) => `你的答案：${item.userInput}\n正確答案：${item.correctAnswer}`)
            .join('\n\n')
      }

      showResult.value = true
      setTimeout(() => {
        showResult.value = false
        showingResult.value = false
      }, 3000)
    }

    const resetAnswers = () => {
      lyricsLines.value.forEach((line) => {
        line.forEach((word) => {
          if (word.isBlank) {
            word.userInput = ''
          }
        })
      })
      showResult.value = false
      showingResult.value = false
    }

    onMounted(() => {
      initializeLyrics()
      // 頁面載入時自動播放中文說明
      setTimeout(() => {
        speakInstruction('zh')
        // 中文說明結束後播放英文說明
        setTimeout(() => {
          speakInstruction('en')
        }, 3000)
      }, 500)
    })

    return {
      gameInstruction,
      lyricsLines,
      showResult,
      resultMessage,
      showingResult,
      speakInstruction,
      checkAnswer,
      resetAnswers,
    }
  },
})
</script>

<style scoped>
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
}

.blank-input {
  width: 120px;
}

@media (max-width: 600px) {
  .blank-input {
    width: 80px;
  }
}

.text-h6 {
  line-height: 1.5;
}

/* 添加動畫效果 */
.q-dialog-plugin {
  transition: all 0.3s ease;
}

.blank-input.q-field--outlined .q-field__control {
  border-radius: 8px;
}

.blank-input.q-field--outlined .q-field__control:hover {
  border-color: var(--q-primary);
}
</style>
