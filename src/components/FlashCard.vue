<template>
  <div class="cards-wrapper">
    <VoiceInstallGuideCard v-if="voicePlaybackBlocked" :platform="detectedPlatform" />
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
        <div class="card-front" v-show="sentence.flipped">
          <div class="heart-button">
            <q-btn
              @click.stop="toggleFavorite(sentence)"
              :icon="isInFavorites(sentence) ? 'favorite' : 'favorite_border'"
              flat
              round
              color="pink"
            />
          </div>
          <div v-if="sentence.structure" class="structure-label">
            <q-chip size="sm" color="primary" text-color="white">
              {{ sentence.structure }}
            </q-chip>
          </div>
          <img
            v-if="sentence.image"
            :src="sentence.image"
            alt="字卡圖片"
            class="card-image q-mb-sm"
          />
          <p>{{ sentence.chinese }}</p>
          <q-btn
            @click.stop="speak(sentence.chinese, 'zh-TW')"
            icon="volume_up"
            flat
            round
            color="primary"
          />
        </div>
        <div class="card-back" v-show="!sentence.flipped">
          <div class="heart-button">
            <q-btn
              @click.stop="toggleFavorite(sentence)"
              :icon="isInFavorites(sentence) ? 'favorite' : 'favorite_border'"
              flat
              round
              color="pink"
            />
          </div>
          <div v-if="sentence.structure" class="structure-label">
            <q-chip size="sm" color="primary" text-color="white">
              {{ sentence.structure }}
            </q-chip>
          </div>
          <img
            v-if="sentence.image"
            :src="sentence.image"
            alt="字卡圖片"
            class="card-image q-mb-sm"
          />
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
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, nextTick, ref } from 'vue'
import VoiceInstallGuideCard from 'src/components/VoiceInstallGuideCard.vue'
import { useSpeechAvailability } from 'src/composables/useSpeechAvailability'
import { ZH_TW_PREFERRED_KEYWORDS, getPreferredVoice, getVoicesAsync } from 'src/utils/speechVoice'

interface Sentence {
  chinese: string
  english: string
  flipped: boolean
  structure?: string
  image?: string
}

export default defineComponent({
  name: 'FlashCard',
  components: {
    VoiceInstallGuideCard,
  },
  props: {
    sentences: {
      type: Array as () => Sentence[],
      required: true,
    },
    searchQuery: {
      type: String,
      default: '',
    },
    selectedStructure: {
      type: String,
      default: '',
    },
  },

  setup(props) {
    const { voicePlaybackBlocked, detectedPlatform } = useSpeechAvailability()

    const filteredSentences = computed(() => {
      let filtered = props.sentences

      // 根據關鍵字過濾
      const query = props.searchQuery.toLowerCase().trim()
      if (query) {
        filtered = filtered.filter((sentence: Sentence) => {
          return (
            sentence.chinese.toLowerCase().includes(query) ||
            sentence.english.toLowerCase().includes(query)
          )
        })
      }

      // 根據句型過濾
      if (props.selectedStructure && props.selectedStructure !== '全部') {
        filtered = filtered.filter((sentence: Sentence) => {
          return sentence.structure === props.selectedStructure
        })
      }

      return filtered
    })

    const toggleCard = (index: number) => {
      const sentence = filteredSentences.value[index]
      if (!sentence) return
      sentence.flipped = !sentence.flipped

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

    const pickZhVoice = (voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null => {
      try {
        if (voices.length === 0) return null
        const preferred = getPreferredVoice('zh-TW', ZH_TW_PREFERRED_KEYWORDS)
        if (preferred) return preferred

        const zh = voices.filter(
          (v) => v && v.lang && String(v.lang).toLowerCase().indexOf('zh') === 0,
        )
        return zh[0] || null
      } catch {
        return null
      }
    }

    const speak = async (text: string, lang: string) => {
      if (!text || typeof window === 'undefined' || !window.speechSynthesis) return

      const synth = window.speechSynthesis
      // 停止之前的語音，避免重疊
      synth.cancel()
      synth.resume()

      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = lang

      // 調整語音參數以改善音質
      utterance.rate = 1.0
      utterance.pitch = 1.0
      utterance.volume = 1.0

      // 選擇高品質語音
      const selectAndSpeak = (voices: SpeechSynthesisVoice[]) => {

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
        synth.speak(utterance)
      }

      const voices = await getVoicesAsync()
      selectAndSpeak(voices)
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
        favorites.value.push({
          english: sentence.english,
          chinese: sentence.chinese,
          ...(sentence.image ? { image: sentence.image } : {}),
        })
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
      voicePlaybackBlocked,
      detectedPlatform,
      isInFavorites,
      toggleFavorite,
    }
  },
})
</script>

<style scoped>
.cards-wrapper {
  width: 100%;
}

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
  height: 300px;
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

.card-front,
.card-back {
  position: relative;
  width: 100%;
  height: 100%;
}

.card,
.card-inner,
.card-front,
.card-back {
  overflow: visible;
}

.heart-button {
  position: absolute;
  bottom: 5px;
  right: 5px;
  z-index: 1;
}

.structure-label {
  position: absolute;
  top: -1.2em;
  left: -1em;
  z-index: 10;
  pointer-events: none;
}

.card-image {
  width: 100%;
  max-height: 110px;
  object-fit: contain;
  border-radius: 8px;
}
</style>
