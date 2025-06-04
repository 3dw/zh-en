<template>
  <q-page class="q-pa-md page-background">
    <div class="word-card-list">
      <h1 class="text-dark">自主學英文</h1>

      <!-- 搜尋區域 -->
      <div class="search-container q-mb-lg">
        <q-input
          v-model="searchQuery"
          outlined
          dense
          placeholder="搜尋功能..."
          class="search-input"
          @update:model-value="handleSearch"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>

        <!-- 分類標籤 -->
        <div class="category-tags q-mt-sm">
          <q-chip
            v-for="category in categories"
            :key="category"
            :selected="selectedCategory === category"
            clickable
            @click="selectCategory(category)"
            class="category-chip"
          >
            {{ category }}
          </q-chip>
        </div>
      </div>

      <!-- 更新記錄 -->
      <div class="text-dark">
        <h2>
          版本更新記錄 {{ new_changelogs?.version }}
          <q-btn
            flat
            round
            color="primary"
            icon="chevron_right"
            size="sm"
            to="/changelogs"
            class="q-ml-sm"
          />
        </h2>
        <ul>
          <li v-for="changelog in new_changelogs?.changes" :key="changelog.text">
            <router-link :to="changelog.route">
              {{ changelog.text }}
              <q-icon
                :name="getIconForChangeType(changelog.type)"
                :color="getColorForChangeType(changelog.type)"
                size="sm"
                class="q-mr-sm"
              />
            </router-link>
          </li>
        </ul>
      </div>

      <!-- 功能卡片 -->
      <div class="cards-container">
        <q-card
          v-for="feature in filteredFeatures"
          :key="feature.id"
          class="feature-card"
          :class="[getFeatureCardClass(feature.category), { 'featured-card': feature.featured }]"
          @click="goto(feature.route)"
        >
          <div v-if="feature.featured" class="featured-ribbon">
            <span>精選</span>
          </div>
          <q-card-section>
            <div class="feature-icon">
              <q-icon :name="feature.icon" size="32px" color="white" />
            </div>
            <div class="text-h6 text-white">{{ feature.title }}</div>
            <div class="feature-description">{{ feature.description }}</div>
            <div class="feature-keywords">
              <q-chip
                v-for="keyword in feature.keywords.slice(0, 3)"
                :key="keyword"
                size="sm"
                class="keyword-chip"
              >
                {{ keyword }}
              </q-chip>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { changelogs } from '../data/changelogs'
import { defineComponent } from 'vue'
import {
  searchFeatures,
  getAllCategories,
  getFeaturesByCategory,
  type Feature,
} from '../data/features'

export default defineComponent({
  name: 'IndexPage',
  data() {
    return {
      new_changelogs:
        changelogs.length > 0
          ? changelogs.reduce((latest, current) => {
              return current.version > latest!.version ? current : latest
            }, changelogs[0])
          : { version: '0.0.0', changes: [] },
      searchQuery: '',
      selectedCategory: '',
      categories: getAllCategories(),
    }
  },
  computed: {
    filteredFeatures(): Feature[] {
      const features = this.selectedCategory
        ? getFeaturesByCategory(this.selectedCategory)
        : searchFeatures(this.searchQuery)

      // 將 featured 為 true 的功能排在前面
      return features.sort((a, b) => {
        if (a.featured && !b.featured) return -1
        if (!a.featured && b.featured) return 1
        return 0
      })
    },
  },
  methods: {
    toggleDrawer() {
      this.$emit('toggleDrawer')
    },
    goto(path: string) {
      this.$router.push(path)
    },
    handleSearch() {
      // 當搜尋時，清除分類選擇
      this.selectedCategory = ''
    },
    selectCategory(category: string) {
      this.selectedCategory = this.selectedCategory === category ? '' : category
      this.searchQuery = ''
    },
    getFeatureCardClass(category: string): string {
      const categoryMap: { [key: string]: string } = {
        基礎學習: 'breathing-card',
        實用工具: 'quotes-card',
        進階學習: 'movement-card',
        趣味學習: 'emotions-card',
        個人管理: 'mindfulness-card',
      }
      return categoryMap[category] || 'breathing-card'
    },
    // 根據更新類型返回對應的圖標
    getIconForChangeType(type?: string) {
      switch (type) {
        case 'new':
          return 'add_circle'
        case 'fix':
          return 'build'
        case 'improvement':
          return 'upgrade'
        case 'remove':
          return 'remove_circle'
        default:
          return 'circle'
      }
    },
    // 根據更新類型返回對應的顏色
    getColorForChangeType(type?: string) {
      switch (type) {
        case 'new':
          return 'positive'
        case 'fix':
          return 'warning'
        case 'improvement':
          return 'info'
        case 'remove':
          return 'negative'
      }
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

a {
  text-decoration: none;
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

.search-container {
  max-width: 600px;
  margin: 0 auto;
}

.search-input {
  width: 100%;
}

.category-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
}

.category-chip {
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-chip:hover {
  transform: translateY(-2px);
}

.feature-card {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.feature-icon {
  position: absolute;
  top: 16px;
  right: 16px;
  opacity: 0.8;
}

.feature-description {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  margin-top: 8px;
  margin-bottom: 12px;
  line-height: 1.4;
}

.feature-keywords {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 8px;
}

.keyword-chip {
  background: rgba(255, 255, 255, 0.2) !important;
  color: white !important;
}

@media (max-width: 768px) {
  .search-container {
    padding: 0 16px;
  }

  .category-tags {
    padding: 0 16px;
  }

  .feature-description {
    font-size: 13px;
  }
}

.featured-card {
  position: relative;
  overflow: visible;
}

.featured-ribbon {
  position: absolute;
  right: -5px;
  top: -5px;
  z-index: 1;
  overflow: hidden;
  width: 75px;
  height: 75px;
  text-align: right;
}

.featured-ribbon span {
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  line-height: 20px;
  transform: rotate(45deg);
  width: 100px;
  display: block;
  background: linear-gradient(#ff6b6b 0%, #ff5252 100%);
  box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
  position: absolute;
  top: 19px;
  right: -21px;
}

.featured-ribbon span::before {
  content: '';
  position: absolute;
  left: 0px;
  top: 100%;
  z-index: -1;
  border-left: 3px solid #ff5252;
  border-right: 3px solid transparent;
  border-bottom: 3px solid transparent;
  border-top: 3px solid #ff5252;
}

.featured-ribbon span::after {
  content: '';
  position: absolute;
  right: 0px;
  top: 100%;
  z-index: -1;
  border-left: 3px solid transparent;
  border-right: 3px solid #ff5252;
  border-bottom: 3px solid transparent;
  border-top: 3px solid #ff5252;
}
</style>
