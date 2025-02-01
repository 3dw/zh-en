<template>
  <q-page class="q-pa-md">
    <div class="word-card-list">
      <h1>自主學英文</h1>
      <p>
        自主學英文是一個提供雙語字卡、聽覺學習、視覺學習、操作學習、閱聽學習的網站，讓孩子可以自主學習英文。
      </p>
      <p>我們的目標是讓孩子可以自主學習英文，並且在學習的過程中，培養孩子的自信心和學習興趣。</p>
      <p>
        家長的陪伴是孩子學習的關鍵，我們希望家長可以陪伴孩子一起學習，並且在孩子學習的過程中，給予孩子正面的鼓勵和支持。
      </p>
      <p>
        我們相信，只要家長和孩子一起努力，孩子就能夠在學習英文的過程中，培養出良好的學習習慣和自信心，並且在未來的學習道路上，不斷前進。
      </p>
      <q-separator />
      <h1>開始之前</h1>

      <p>
        請先到
        <a href="https://diverse.alearn.org.tw/">https://diverse.alearn.org.tw/</a>
        瞭解孩子的學習風格，適合的學習方式。
      </p>

      <h2>開始學習</h2>

      <p>從左上方點選「三條線」，進入選單，選擇適合的學習方式。</p>
      <p>選擇適合的學習方式後，就可以開始學習了。</p>

      <q-btn class="q-mt-md" color="primary" label="開始學習" @click="toggleDrawer" />

      <h2>站外資源</h2>
      <p>站外資源是提供孩子學習英文的資源，包括英文字母、歌曲、繪本、百科和翻譯軟體等。</p>

      <h2>作者群</h2>

      <p>
        作者群是台灣的工程師，參與非營利組織<a href="https://www.alearn.org.tw/" target="_blank"
          >「自主學習促進會」</a
        >，致力於推廣自主學習英文。
      </p>
      <p>
        如果對這個網站有任何建議或想法，歡迎到
        <a href="https://github.com/3dw/zh-en/issues">https://github.com/3dw/zh-en/issues</a>
        提出。
      </p>

      <div class="row items-center">
        <q-btn label="Bestian@GitHub" href="https://github.com/bestian" target="_blank" />

        <q-btn label="Drago@GitHub" href="https://github.com/leechiuhui" target="_blank" />
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
  },
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
  background-color: #e8f5e9;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #a5d6a7;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.card:hover {
  background-color: #ffb74d;
  border-color: #ff9800;
  transform: translateY(-2px);
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
