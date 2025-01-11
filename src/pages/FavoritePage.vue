<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md full-width">
      <h2>我的最愛字卡</h2>

      <div v-if="favoriteCards.length === 0" class="text-center q-pa-lg">
        <q-icon name="favorite_border" size="50px" color="grey-5" />
        <p class="text-grey-7">還沒有收藏的字卡</p>
        <p class="text-grey-7">在學習時點擊愛心圖示來收藏字卡</p>
      </div>

      <div v-else>
        <FlashCard :sentences="favoriteCards" @earn-xp="(xp) => $emit('earn-xp', xp)" />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import FlashCard from 'src/components/FlashCard.vue'

interface Card {
  english: string
  chinese: string
  category: string
}

interface Sentence {
  chinese: string
  english: string
  flipped: boolean
}

export default defineComponent({
  name: 'FavoritePage',
  components: {
    FlashCard,
  },
  setup() {
    const favoriteCards = ref<Sentence[]>([])

    onMounted(() => {
      const savedFavorites = localStorage.getItem('en_love_arr')
      console.log(savedFavorites)
      function toSentence(arr: Card[]) {
        return arr.map((item: Card) => ({
          chinese: item.chinese,
          english: item.english,
          flipped: false,
        }))
      }
      if (savedFavorites) {
        favoriteCards.value = toSentence(JSON.parse(savedFavorites))
      }
    })

    const removeFromFavorites = (card: Card) => {
      favoriteCards.value = favoriteCards.value.filter(
        (c) => !(c.english === card.english && c.chinese === card.chinese),
      )
      localStorage.setItem('favoriteCards', JSON.stringify(favoriteCards.value))
    }

    return {
      favoriteCards,
      removeFromFavorites,
    }
  },
})
</script>

<style scoped lang="scss">
/* 與 MainLayout/其他頁面風格一致 */
.op-page {
  background-color: #f4f1eb;
  font-size: 1.1rem;
}

.word-card-list {
  max-width: 1000px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
}

.page-title {
  margin-bottom: 16px;
  font-size: 1.4rem;
  font-weight: 600;
  color: #3e3e3e;
}

.search-bar {
  display: flex;
  justify-content: center;
}
</style>
