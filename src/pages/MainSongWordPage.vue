<template>
  <q-page class="q-pa-md">
    <div class="row items-center q-mb-md">
      <h1 class="col">
        <q-icon name="music_note" size="md" color="primary" class="q-mr-sm" />
        英文兒歌克漏字練習選單
      </h1>
    </div>

    <div class="row q-col-gutter-md">
      <!-- You Are My Sunshine -->
      <div class="col-12 col-sm-6 col-md-4">
        <q-card class="song-card cursor-pointer" v-ripple @click="$router.push('/song-word')">
          <q-card-section class="bg-primary text-white">
            <div class="text-h6">
              <q-icon name="music_note" class="q-mr-sm" />
              You Are My Sunshine
            </div>
          </q-card-section>
          <q-card-section>
            <div class="text-subtitle2">經典英文兒歌</div>
            <div class="text-caption q-mt-sm">
              練習內容：
              <ul>
                <li>常用單字：sunshine, happy, love</li>
                <li>簡單句型練習</li>
                <li>溫馨正向的歌詞內容</li>
              </ul>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <!-- 第二首歌 -->
      <div class="col-12 col-sm-6 col-md-4">
        <q-card class="song-card cursor-pointer" v-ripple @click="$router.push('/song2-word')">
          <q-card-section class="bg-secondary text-white">
            <div class="text-h6">
              <q-icon name="music_note" class="q-mr-sm" />
              Ten Little Indians
            </div>
          </q-card-section>
          <q-card-section>
            <div class="text-subtitle2">數字學習兒歌</div>
            <div class="text-caption q-mt-sm">
              練習內容：
              <ul>
                <li>英文數字 1-10 的拼寫</li>
                <li>簡單重複句型練習</li>
                <li>數字順序和倒序練習</li>
              </ul>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <!-- 第三首歌 -->
      <div class="col-12 col-sm-6 col-md-4">
        <q-card class="song-card cursor-pointer" v-ripple @click="$router.push('/song3-word')">
          <q-card-section class="bg-accent text-white">
            <div class="text-h6">
              <q-icon name="music_note" class="q-mr-sm" />
              If You're Happy
            </div>
          </q-card-section>
          <q-card-section>
            <div class="text-subtitle2">情緒與動作學習歌</div>
            <div class="text-caption q-mt-sm">
              練習內容：
              <ul>
                <li>情緒單字：happy, angry, scared, sleepy</li>
                <li>動作單字：clap, stomp, say, take</li>
                <li>簡單句型：If you're...</li>
              </ul>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <!-- 第四首歌 -->
      <div class="col-12 col-sm-6 col-md-4">
        <q-card class="song-card cursor-pointer" v-ripple @click="$router.push('/song4-word')">
          <q-card-section class="bg-purple text-white">
            <div class="text-h6">
              <q-icon name="music_note" class="q-mr-sm" />
              ABC Phonics Song
            </div>
          </q-card-section>
          <q-card-section>
            <div class="text-subtitle2">字母發音與單字學習歌</div>
            <div class="text-caption q-mt-sm">
              練習內容：
              <ul>
                <li>26個英文字母的發音</li>
                <li>每個字母對應的常見單字</li>
                <li>字母與單字的連結記憶</li>
              </ul>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <!-- 未來可以繼續添加更多歌曲 -->
      <!-- <div class="col-12 col-sm-6 col-md-4">
        <q-card class="song-card coming-soon">
          <q-card-section class="bg-grey-6 text-white">
            <div class="text-h6">
              <q-icon name="queue_music" class="q-mr-sm" />
              即將推出更多歌曲...
            </div>
          </q-card-section>
          <q-card-section>
            <div class="text-subtitle2">敬請期待</div>
            <div class="text-caption q-mt-sm">未來將新增更多有趣的英文兒歌練習！</div>
          </q-card-section>
        </q-card>
      </div>-->
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainSongWordPage',
})
</script>

<style scoped>
.song-card {
  height: 100%;
  transition: transform 0.3s ease;
}

.song-card:not(.coming-soon):hover {
  transform: translateY(-5px);
}

.coming-soon {
  opacity: 0.7;
}

.song-card ul {
  margin: 0;
  padding-left: 20px;
}

.song-card li {
  margin-bottom: 4px;
}
</style>
