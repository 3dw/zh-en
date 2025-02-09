<template>
  <q-page class="q-pa-md page-background">
    <div class="word-card-list">
      <h1 class="text-dark">自主學英文</h1>

      <div class="cards-container">
        <q-card class="feature-card breathing-card" @click="goto('/beginner')">
          <q-card-section>
            <q-img src="~/assets/index/cards.jpeg" style="width: 250px; object-fit: cover" />
            <div class="text-h6 text-white">雙語字卡</div>
          </q-card-section>
        </q-card>

        <q-card class="feature-card quotes-card" @click="goto('/what_is_this')">
          <q-card-section>
            <q-img src="~/assets/index/image-cards.jpeg" style="width: 250px; object-fit: cover" />
            <div class="text-h6 text-white">拍照分析</div>
          </q-card-section>
        </q-card>

        <q-card class="feature-card movement-card" @click="goto('/story_backend')">
          <q-card-section>
            <q-img src="~/assets/index/story.jpeg" style="width: 250px; object-fit: cover" />
            <div class="text-h6 text-white">英語故事</div>
          </q-card-section>
        </q-card>

        <q-card class="feature-card emotions-card" @click="goto('/hand-written')">
          <q-card-section>
            <q-img src="~/assets/index/letter.jpeg" style="width: 250px; object-fit: cover" />
            <div class="text-h6 text-white">字母練習</div>
          </q-card-section>
        </q-card>

        <q-card class="feature-card mindfulness-card" @click="goto('/about')">
          <q-card-section>
            <div class="text-h6 text-white"><q-icon name="info" />瞭解更多</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  methods: {
    toggleDrawer() {
      this.$emit('toggleDrawer')
    },
    goto(path: string) {
      this.$router.push(path)
    },
  },
})
</script>

<style scoped>
.word-card-list {
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  text-decoration: none;
  text-align: center;
  color: inherit;
  display: block;
  width: 100%;
  max-width: 300px;
  padding: 20px;
  border-radius: 20px;
  margin-bottom: 20px;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.breathing-card {
  background: linear-gradient(145deg, #1a237e, #283593);
}

.quotes-card {
  background: linear-gradient(145deg, #4a148c, #6a1b9a);
}

.movement-card {
  background: linear-gradient(145deg, #558b2f, #7cb342);
}

.emotions-card {
  background: linear-gradient(145deg, #827717, #9e9d24);
}

.mindfulness-card {
  background: linear-gradient(145deg, #006064, #00838f);
}

.cards-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  justify-content: center;
  margin-top: 2rem;
  padding: 1rem;
}

@media (max-width: 768px) {
  .cards-container {
    grid-template-columns: 1fr;
  }

  .feature-card {
    max-width: 100%;
  }
}

.page-background {
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 100%);
}

.text-dark {
  color: #2c3e50;
}
</style>
