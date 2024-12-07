<template>
  <q-page class="q-pa-md">
    <div class="word-card-list">
      <h1>英文學習卡片</h1>
      <div class="cards-container">
        <router-link to="/beginner" class="card">
          <div class="card-inner">
            <h2>
              <q-icon name="add" />
              初學者常用句子
            </h2>
          </div>
        </router-link>
        <router-link to="/body" class="card">
          <div class="card-inner">
            <h2>
              <q-icon name="person" />
              身體部位
            </h2>
          </div>
        </router-link>

        <router-link to="/number" class="card">
          <div class="card-inner">
            <h2>
              <q-icon name="school" />
              數字學習
            </h2>
          </div>
        </router-link>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
})
</script>

<style scoped>
.word-card-list {
  max-width: 800px;
  margin: 0 auto;
}

.card {
  text-decoration: none;
  color: inherit;
  display: block;
  width: 100%;
  max-width: 300px;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.cards-container {
  display: flex;
  gap: 20px;
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
