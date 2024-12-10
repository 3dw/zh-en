<template>
  <div class="cards-container">
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
        emit('earn-xp', 50)
      }
    }

    const speak = (text: string, lang: string) => {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = lang
      window.speechSynthesis.speak(utterance)
      emit('earn-xp', 50)
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
        emit('earn-xp', 100)
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
  height: 200px;
  perspective: 1000px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
