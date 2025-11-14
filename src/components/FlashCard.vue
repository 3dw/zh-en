<template>
  <div class="cards-container">
    <router-link
      to="/fav/view"
      v-if="!$route.path.startsWith('/fav') && $route.path !== '/favorite'"
      class="fixed-bottom-right z-top"
    >
      <q-btn icon="favorite" size="lg" color="pink" label="前往最愛" />
    </router-link>
    <div
      class="card"
      v-for="(sentence, index) in filteredSentences"
      :key="index"
      @click="toggleCard(index)"
    >
      <div class="card-inner" :class="{ flipped: sentence.flipped }">
        <div class="card-front" v-show="!sentence.flipped">
          <div class="heart-button">
            <q-btn
              @click.stop="toggleFavorite(sentence)"
              :icon="isInFavorites(sentence) ? 'favorite' : 'favorite_border'"
              flat
              round
              color="pink"
            />
          </div>
          <p>{{ sentence.chinese }}</p>
          <q-btn
            @click.stop="speak(sentence.chinese, 'zh-TW')"
            icon="volume_up"
            flat
            round
            color="primary"
          />
        </div>
        <div class="card-back" v-show="sentence.flipped">
          <div class="heart-button">
            <q-btn
              @click.stop="toggleFavorite(sentence)"
              :icon="isInFavorites(sentence) ? 'favorite' : 'favorite_border'"
              flat
              round
              color="pink"
            />
          </div>
          <p>{{ sentence.english }}</p>
          <q-btn
            @click.stop="speak(sentence.english, 'en-US')"
            icon="volume_up"
            flat
            round
            color="primary"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, nextTick, ref } from 'vue'

interface Sentence {
  chinese: string
  english: string
  flipped: boolean
}

export default defineComponent({
  name: 'FlashCard',
  props: {
    sentences: {
      type: Array as () => Sentence[],
      required: true,
    },
    searchQuery: {
      type: String,
      default: '',
    },
  },

  setup(props, { emit }) {
    const filteredSentences = computed(() => {
      const query = props.searchQuery.toLowerCase().trim()
      if (!query) return props.sentences
      return props.sentences.filter((sentence: Sentence) => {
        return (
          sentence.chinese.toLowerCase().includes(query) ||
          sentence.english.toLowerCase().includes(query)
        )
      })
    })

    const toggleCard = (index: number) => {
      const sentence = filteredSentences.value[index]
      if (!sentence) return
      sentence.flipped = !sentence.flipped

      if (sentence.flipped) {
        emit('earn-xp', 5)
      }
    }

    // 選擇高品質的英文語音
    const pickEnVoice = (voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null => {
      try {
        voices = voices || []
        let en = voices.filter(
          (v) => v && v.lang && String(v.lang).toLowerCase().indexOf('en') === 0,
        )

        // 避免較差音色的候選（如 Compact/Fred 等）
        en = en.filter((v) => {
          const nm = (v.name || '').toLowerCase()
          return nm.indexOf('compact') < 0 && nm !== 'fred'
        })

        // 優先序（macOS 常見）：Samantha, Alex，其次 en-US，再退 en-GB / en-AU / 其他 en*
        const prefName =
          en.find((v) => {
            const nm = (v.name || '').toLowerCase()
            return nm.indexOf('samantha') >= 0
          }) ||
          en.find((v) => {
            const nm = (v.name || '').toLowerCase()
            return nm.indexOf('alex') >= 0
          })

        if (prefName) return prefName

        const enus = en.find((v) => String(v.lang).toLowerCase() === 'en-us')
        if (enus) return enus

        const engb = en.find((v) => String(v.lang).toLowerCase() === 'en-gb')
        if (engb) return engb

        const enau = en.find((v) => String(v.lang).toLowerCase() === 'en-au')
        if (enau) return enau

        return en[0] || null
      } catch {
        return null
      }
    }

    // 選擇高品質的中文語音
    const pickZhVoice = (voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null => {
      try {
        voices = voices || []
        const zh = voices.filter(
          (v) => v && v.lang && String(v.lang).toLowerCase().indexOf('zh') === 0,
        )

        // 優先選擇 zh-TW，其次 zh-CN，再退其他中文語音
        const zhtw = zh.find((v) => String(v.lang).toLowerCase() === 'zh-tw')
        if (zhtw) return zhtw

        const zhcn = zh.find((v) => String(v.lang).toLowerCase() === 'zh-cn')
        if (zhcn) return zhcn

        return zh[0] || null
      } catch {
        return null
      }
    }

    const speak = (text: string, lang: string) => {
      // 停止之前的語音，避免重疊
      window.speechSynthesis.cancel()

      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = lang

      // 調整語音參數以改善音質
      utterance.rate = 1.0
      utterance.pitch = 1.0
      utterance.volume = 1.0

      // 選擇高品質語音
      const selectAndSpeak = () => {
        const voices = window.speechSynthesis.getVoices()

        if (voices.length > 0) {
          let selectedVoice: SpeechSynthesisVoice | null = null

          if (lang.startsWith('en')) {
            selectedVoice = pickEnVoice(voices)
          } else if (lang.startsWith('zh')) {
            selectedVoice = pickZhVoice(voices)
          }

          if (selectedVoice) {
            utterance.voice = selectedVoice
          }
        }

        // 添加錯誤處理
        utterance.onerror = (event) => {
          console.error('語音合成錯誤:', event)
        }

        // 播放語音
        window.speechSynthesis.speak(utterance)
      }

      // 如果語音列表尚未載入，等待載入完成
      const voices = window.speechSynthesis.getVoices()
      if (voices.length === 0) {
        window.speechSynthesis.onvoiceschanged = () => {
          selectAndSpeak()
        }
      } else {
        selectAndSpeak()
      }

      emit('earn-xp', 5)
    }

    const getFavorites = () => {
      const stored = localStorage.getItem('en_love_arr')
      return stored ? JSON.parse(stored) : []
    }

    const favorites = ref(getFavorites())

    const isInFavorites = (sentence: Sentence) => {
      return favorites.value.some(
        (fav: Sentence) => fav.english === sentence.english && fav.chinese === sentence.chinese,
      )
    }

    const toggleFavorite = async (sentence: Sentence) => {
      const index = favorites.value.findIndex(
        (fav: Sentence) => fav.english === sentence.english && fav.chinese === sentence.chinese,
      )

      if (index === -1) {
        favorites.value.push({ english: sentence.english, chinese: sentence.chinese })
        emit('earn-xp', 10)
      } else {
        favorites.value.splice(index, 1)
      }

      localStorage.setItem('en_love_arr', JSON.stringify(favorites.value))
      await nextTick()
    }

    return {
      filteredSentences,
      toggleCard,
      speak,
      isInFavorites,
      toggleFavorite,
    }
  },
})
</script>

<style scoped>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.card {
  position: relative;
  padding: 10px;
  width: 200px;
  height: 250px;
  perspective: 1000px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
}

.card-inner {
  font-size: 20px;
}

.heart-button {
  position: absolute;
  bottom: 5px;
  right: 5px;
  z-index: 1;
}
</style>
