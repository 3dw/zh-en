<template>
  <q-page class="q-pa-md">
    <div class="word-card-list">
      <h1>自主學英文</h1>
      
      <div class="cards-container">
        <q-card class="card" @click="goto('/beginner')">
          <q-card-section>
            <q-img src="~/assets/index/cards.jpeg" style="width: 250px; object-fit: cover;" />
            <div class="text-h6">雙語字卡</div>
          </q-card-section>
        </q-card>
   
        <q-card class="card" @click="goto('/what_is_this')">
          <q-card-section>
            <q-img src="~/assets/index/image-cards.jpeg" style="width: 250px; object-fit: cover;" />
            <div class="text-h6">拍照分析</div>
          </q-card-section>
        </q-card>

        <q-card class="card" @click="goto('/story_backend')">
          <q-card-section>
            <q-img src="~/assets/index/story.jpeg" style="width: 250px; object-fit: cover;" />
            <div class="text-h6">英語故事</div>
          </q-card-section>
        </q-card>

        
        <q-card class="card" @click="goto('/hand-written')">
          <q-card-section>
            <q-img src="~/assets/index/letter.jpeg" style="width: 250px; object-fit: cover;" />
            <div class="text-h6">字母練習</div>
          </q-card-section>
        </q-card>

        
        <q-card class="card" @click="goto('/about')">
          <q-card-section>
            <div class="text-h6">
              <q-icon name="info" />瞭解更多</div>
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
  max-width: 1000px;
  margin: 0 auto;
}

.card {
  text-decoration: none;
  text-align: center;
  color: inherit;
  display: block;
  width: 100%;
  max-width: 300px;
  background-color: #e8f5e9;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #a5d6a7;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.card:hover {
  background-color: #ffb74d;
  border-color: #ff9800;
  transform: translateY(-2px);
}

.cards-container {
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 2rem;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .cards-container {
    flex-direction: column;
    align-items: center;
  }

  .card {
    max-width: 100%;
  }
}
</style>
