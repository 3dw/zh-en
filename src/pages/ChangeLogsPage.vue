<template>
  <q-page class="q-pa-md page-background">
    <div class="word-card-list">
      <h1 class="page-title">版本更新記錄</h1>

      <div v-for="(log, index) in changelogs" :key="log.version" class="changelog-item q-mb-md">
        <q-expansion-item
          :label="`版本 ${log.version}`"
          :caption="log.date || ''"
          header-class="text-primary text-h6"
          expand-icon-class="text-primary"
          :default-opened="index === 0"
        >
          <q-card>
            <q-card-section>
              <ul class="changelog-list">
                <li v-for="change in log.changes" :key="change.text" class="q-py-sm">
                  <div class="row items-center">
                    <q-icon
                      :name="getIconForChangeType(change.type)"
                      :color="getColorForChangeType(change.type)"
                      size="sm"
                      class="q-mr-sm"
                    />
                    <span v-if="change.route">
                      <router-link :to="change.route">{{ change.text }}</router-link>
                    </span>
                    <span v-else>{{ change.text }}</span>
                  </div>
                </li>
              </ul>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { changelogs } from '../data/changelogs'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChangeLogsPage',
  setup() {
    // 根據更新類型返回對應的圖標
    const getIconForChangeType = (type?: string) => {
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
    }

    // 根據更新類型返回對應的顏色
    const getColorForChangeType = (type?: string) => {
      switch (type) {
        case 'new':
          return 'positive'
        case 'fix':
          return 'warning'
        case 'improvement':
          return 'info'
        case 'remove':
          return 'negative'
        default:
          return 'grey'
      }
    }

    return {
      changelogs,
      getIconForChangeType,
      getColorForChangeType,
    }
  },
})
</script>

<style scoped lang="scss">
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

.changelog-item {
  border-radius: 8px;
  overflow: hidden;
}

.changelog-list {
  padding-left: 0.5rem;
  list-style-type: none;
}

.page-background {
  background-color: #f4f1eb;
}
</style>
