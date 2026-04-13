<script setup lang="ts">
import { computed } from 'vue'
import type { ClientPlatform } from 'src/utils/speechVoice'

const props = defineProps<{
  platform: ClientPlatform
}>()

const guide = computed(() => {
  switch (props.platform) {
    case 'windows':
      return {
        title: 'Windows 安裝華語語音',
        steps: [
          '開啟「設定」>「時間與語言」>「語言與地區」。',
          '在慣用語言中加入「中文（台灣）」；若已存在，點進該語言的選項頁。',
          '在語言功能中安裝「語音」或「Text-to-speech」。',
          '安裝完成後重新開啟 Chrome 或 Edge，再回到本站測試。',
        ],
      }
    case 'macos':
      return {
        title: 'macOS 安裝華語語音',
        steps: [
          '開啟「系統設定」>「輔助使用」>「朗讀內容」。',
          '在系統聲音或 Voice 區域新增中文語音，優先選台灣中文相關聲音。',
          '若看到下載按鈕，先完成語音下載。',
          '重新開啟瀏覽器後回到本站測試。',
        ],
      }
    case 'ios':
      return {
        title: 'iPhone / iPad 安裝華語語音',
        steps: [
          '開啟「設定」>「輔助使用」>「朗讀內容」>「聲音」。',
          '選擇「中文」並下載台灣中文或華語相關聲音。',
          '安裝後重新開啟 Safari 或 Chrome。',
          '回到本站後再試一次語音播放。',
        ],
      }
    case 'android':
      return {
        title: 'Android 安裝華語語音',
        steps: [
          '開啟手機「設定」並搜尋「文字轉語音」或「Text-to-speech」。',
          '進入 Google 文字轉語音輸出或裝置的 TTS 設定。',
          '下載或啟用中文（台灣）/ 華語語音資料。',
          '重新開啟瀏覽器並返回本站測試。',
        ],
      }
    case 'chromeos':
      return {
        title: 'ChromeOS 安裝華語語音',
        steps: [
          '開啟「設定」>「進階」>「無障礙設定」。',
          '找到文字轉語音相關設定並啟用語音功能。',
          '下載或加入中文（台灣）語音。',
          '重新啟動瀏覽器分頁後回到本站測試。',
        ],
      }
    case 'linux':
      return {
        title: 'Linux 設定華語語音',
        steps: [
          '先確認目前桌面環境或瀏覽器使用的 TTS 引擎是什麼。',
          '安裝可供瀏覽器存取的中文（台灣）語音套件或語音引擎。',
          '若是 Chromium / Chrome，安裝後請完整重開瀏覽器。',
          '回到本站測試；若仍無語音，建議改用 Chrome 或 Edge on Windows / macOS。',
        ],
      }
    default:
      return {
        title: '安裝華語語音',
        steps: [
          '請先確認目前瀏覽器支援 Web Speech API，建議使用最新版 Chrome、Edge 或 Safari。',
          '在作業系統的語言或輔助使用設定中，安裝中文（台灣）或華語語音。',
          '安裝後完整重新開啟瀏覽器，再回到本站測試。',
        ],
      }
  }
})
</script>

<template>
  <section class="voice-guide">
    <header class="voice-guide-header">
      <p class="voice-guide-kicker">語音安裝說明</p>
      <h2 class="voice-guide-title">{{ guide.title }}</h2>
      <p class="voice-guide-desc">
        偵測到目前裝置尚未就緒，請依下列步驟安裝或啟用語音。完成後關閉本站分頁並完整重開瀏覽器。
      </p>
    </header>

    <div class="voice-guide-body">
      <ol class="voice-guide-steps">
        <li v-for="step in guide.steps" :key="step">{{ step }}</li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.voice-guide {
  margin-bottom: 16px;
  border: 1px solid #f0d6a8;
  border-radius: 12px;
  overflow: hidden;
  background: #fffaf0;
}

.voice-guide-header {
  padding: 14px 16px;
  background: #fff2d6;
  border-bottom: 1px solid #f0d6a8;
}

.voice-guide-kicker {
  margin: 0 0 6px;
  font-size: 12px;
  font-weight: 600;
  color: #8a5a00;
}

.voice-guide-title {
  margin: 0;
  font-size: 20px;
  line-height: 1.3;
  color: #5a3a00;
}

.voice-guide-desc {
  margin: 10px 0 0;
  font-size: 14px;
  line-height: 1.55;
  color: #6d5200;
}

.voice-guide-body {
  padding: 14px 18px;
  background: #fff;
}

.voice-guide-steps {
  margin: 0;
  padding-left: 20px;
  color: #333;
  line-height: 1.6;
}
</style>
