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
      <span>{{ gameInstruction }}</span>
      <q-btn
        icon="volume_up"
        color="primary"
        round
        size="lg"
        class="q-ml-sm"
        @click="speakInstruction"
      />
    </div>

    <!-- YouTube 影片區域 -->
    <div class="row justify-center q-mb-lg">
      <div class="col-12 col-sm-10 col-md-8">
        <div class="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/4Oc6PTtcthA"
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

        <div class="row justify-center q-mt-lg">
          <q-btn label="檢查答案" color="primary" @click="checkAnswer" :disable="showingResult" />
        </div>
      </div>
    </div>

    <!-- 結果提示 -->
    <q-dialog v-model="showResult">
      <q-card style="min-width: 350px; max-width: 80vw">
        <q-card-section class="column items-center">
          <span class="text-h6 text-center" style="white-space: pre-line">
            {{ resultMessage }}
          </span>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

// 定義歌詞單字的介面
interface LyricWord {
  text: string
  isBlank: boolean
  userInput: string
  correctAnswer?: string
}

export default defineComponent({
  name: 'SongWordPage',
  setup() {
    const gameInstruction = ref('Please click play to listen to this English song')
    const showResult = ref(false)
    const resultMessage = ref('')
    const showingResult = ref(false)
    // 明確指定類型
    const lyricsLines = ref<LyricWord[][]>([])

    // 初始化歌詞和空格
    function initializeLyrics() {
      lyricsLines.value = [
        // 第一段
        [
          { text: 'You', isBlank: false, userInput: 'You' },
          { text: 'are', isBlank: false, userInput: 'are' },
          { text: 'my', isBlank: false, userInput: 'my' },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'sunshine' },
          { text: ',', isBlank: false, userInput: ',' },
          { text: 'my', isBlank: false, userInput: 'my' },
          { text: 'only', isBlank: false, userInput: 'only' },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'sunshine' },
          { text: ',', isBlank: false, userInput: ',' },
        ],
        [
          { text: 'You', isBlank: false, userInput: 'You' },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'make' },
          { text: 'me', isBlank: false, userInput: 'me' },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'happy' },
          { text: 'when', isBlank: false, userInput: 'when' },
          { text: 'skies', isBlank: false, userInput: 'skies' },
          { text: 'are', isBlank: false, userInput: 'are' },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'gray' },
          { text: '.', isBlank: false, userInput: '.' },
        ],
        [
          { text: "You'll", isBlank: false, userInput: "You'll" },
          { text: 'never', isBlank: false, userInput: 'never' },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'know' },
          { text: 'dear,', isBlank: false, userInput: 'dear,' },
          { text: 'how', isBlank: false, userInput: 'how' },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'much' },
          { text: 'I', isBlank: false, userInput: 'I' },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'love' },
          { text: 'you.', isBlank: false, userInput: 'you.' },
        ],
        [
          { text: 'Please', isBlank: false, userInput: 'Please' },
          { text: "don't", isBlank: false, userInput: "don't" },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'take' },
          { text: 'my', isBlank: false, userInput: 'my' },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'sunshine' },
          { text: 'away.', isBlank: false, userInput: 'away.' },
        ],
        // 第二段（重複）
        [
          { text: 'You', isBlank: false, userInput: 'You' },
          { text: 'are', isBlank: false, userInput: 'are' },
          { text: 'my', isBlank: false, userInput: 'my' },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'sunshine' },
          { text: ',', isBlank: false, userInput: ',' },
          { text: 'my', isBlank: false, userInput: 'my' },
          { text: 'only', isBlank: false, userInput: 'only' },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'sunshine' },
          { text: ',', isBlank: false, userInput: ',' },
        ],
        [
          { text: 'You', isBlank: false, userInput: 'You' },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'make' },
          { text: 'me', isBlank: false, userInput: 'me' },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'happy' },
          { text: 'when', isBlank: false, userInput: 'when' },
          { text: 'skies', isBlank: false, userInput: 'skies' },
          { text: 'are', isBlank: false, userInput: 'are' },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'gray' },
          { text: '.', isBlank: false, userInput: '.' },
        ],
        [
          { text: "You'll", isBlank: false, userInput: "You'll" },
          { text: 'never', isBlank: false, userInput: 'never' },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'know' },
          { text: 'dear,', isBlank: false, userInput: 'dear,' },
          { text: 'how', isBlank: false, userInput: 'how' },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'much' },
          { text: 'I', isBlank: false, userInput: 'I' },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'love' },
          { text: 'you.', isBlank: false, userInput: 'you.' },
        ],
        [
          { text: 'Please', isBlank: false, userInput: 'Please' },
          { text: "don't", isBlank: false, userInput: "don't" },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'take' },
          { text: 'my', isBlank: false, userInput: 'my' },
          { text: '', isBlank: true, userInput: '', correctAnswer: 'sunshine' },
          { text: 'away.', isBlank: false, userInput: 'away.' },
        ],
      ]
    }

    // 發音遊戲說明
    function speakInstruction() {
      const utterance = new SpeechSynthesisUtterance(gameInstruction.value)
      utterance.lang = 'en-US'
      utterance.rate = 0.8
      speechSynthesis.speak(utterance)
    }

    // 檢查答案
    function checkAnswer() {
      showingResult.value = true
      let allCorrect = true
      const incorrectAnswers: {
        userInput: string
        correctAnswer: string
        position: string
        wordPosition: string
      }[] = []

      lyricsLines.value.forEach((line, lineIndex) => {
        let blankCount = 0
        line.forEach((word) => {
          if (word.isBlank) {
            blankCount++
            const userAnswer = word.userInput.toLowerCase().trim()
            const correctAnswer = word.correctAnswer?.toLowerCase() || ''

            if (userAnswer !== correctAnswer) {
              allCorrect = false
              incorrectAnswers.push({
                userInput: word.userInput || '(空白)',
                correctAnswer: word.correctAnswer || '',
                position: `第 ${lineIndex + 1} 行`,
                wordPosition: `第 ${blankCount} 個空格`,
              })
            }
          }
        })
      })

      if (allCorrect) {
        resultMessage.value =
          '恭喜你！🎉\n' + '全部答對了！\n' + '你已經完全掌握了這首歌的歌詞！\n' + '繼續保持！'
      } else {
        let message = '加油！再試一次：\n\n'
        incorrectAnswers.forEach((item) => {
          message +=
            `${item.position}${item.wordPosition}：\n` +
            `你的答案：「${item.userInput}」\n` +
            `正確答案：「${item.correctAnswer}」\n\n`
        })
        message += '提示：注意單字的拼寫喔！'
        resultMessage.value = message
      }

      showResult.value = true

      setTimeout(() => {
        showResult.value = false
        showingResult.value = false
      }, 5000) // 給 5 秒時間閱讀訊息
    }

    onMounted(() => {
      initializeLyrics()
      speakInstruction()
    })

    return {
      gameInstruction,
      lyricsLines,
      showResult,
      resultMessage,
      showingResult,
      speakInstruction,
      checkAnswer,
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
</style>
