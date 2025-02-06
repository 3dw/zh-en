<template>
  <q-page class="q-pa-md">
    <h2>選擇句型</h2>
    <q-form class="text-h6">
      <q-select
        v-model="sentenceType"
        :options="sentenceTypes"
        label="句型"
        :option-label="(opt) => opt.label"
        :option-value="(opt) => opt.value"
        emit-value
        map-options
        dense
        outlined
      />

      <q-separator class="q-mt-md" />

      <div v-if="sentenceType === 'subject-verb-object'">
        <q-select
          v-model="subject"
          :options="nouns"
          label="主詞"
          option-label="chinese"
          dense
          outlined
        />
        <q-select
          v-model="verb"
          :options="verb_transitives"
          label="及物動詞"
          option-label="chinese"
          dense
          outlined
        />
        <q-select
          v-model="object"
          :options="nouns"
          label="受詞"
          option-label="chinese"
          dense
          outlined
        />
      </div>

      <div v-if="sentenceType === 'question'">
        <q-select
          v-model="beVerb"
          :options="be_verbs"
          label="Be動詞"
          option-label="chinese"
          dense
          outlined
        />

        <q-select
          v-model="object"
          :options="nouns"
          label="主詞"
          option-label="chinese"
          dense
          outlined
        />

        <q-select
          v-model="adjective"
          :options="adjectives"
          label="形容詞"
          option-label="chinese"
          dense
          outlined
        />
      </div>

      <div v-if="sentenceType === 'subject-intransitive-verb'">
        <q-select
          v-model="subject"
          :options="nouns"
          label="主詞"
          option-label="chinese"
          dense
          outlined
        />
        <q-select
          v-model="verb"
          :options="verb_intransitives"
          label="不及物動詞"
          option-label="chinese"
          dense
          outlined
        />
      </div>

      <div v-if="sentenceType === 'imperative-transitive'">
        <q-select
          v-model="verb"
          :options="verb_transitives"
          label="及物動詞"
          option-label="chinese"
          dense
          outlined
        />
        <q-select
          v-model="object"
          :options="nouns"
          label="受詞"
          option-label="chinese"
          dense
          outlined
        />
      </div>

      <div v-if="sentenceType === 'imperative-intransitive'">
        <q-select
          v-model="verb"
          :options="verb_intransitives"
          label="不及物動詞"
          option-label="chinese"
          dense
          outlined
        />
      </div>
    </q-form>

    <q-separator />

    <div class="q-mt-md">
      <p class="text-h5">
        <span v-if="sentence"
          >{{ sentence }}
          <span v-if="sentenceType === 'question'">?</span>
          <span v-else>.</span>
        </span>
        <span v-else>請先選擇句型和單字</span>
        <q-btn
          v-if="sentence"
          @click="speakSentence(sentence)"
          icon="volume_up"
          flat
          round
          color="primary"
        >
        </q-btn>
      </p>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

interface BeVerb {
  id: number
  chinese: string
  en_I: string
  en_you: string
  en_he: string
  en_she: string
  en_it: string
  en_we: string
  en_they: string
}

interface Adjective {
  id: number
  chinese: string
  en: string
}

export default defineComponent({
  name: 'SimpleSentencesPage',
  setup() {
    const sentenceTypes = ref([
      { label: '主詞+及物動詞+受詞', value: 'subject-verb-object' },
      { label: '疑問句', value: 'question' },
      { label: '主詞+不及物動詞', value: 'subject-intransitive-verb' },
      { label: '及物動詞+受詞 (祈使句)', value: 'imperative-transitive' },
      { label: '不物動詞(祈使句)', value: 'imperative-intransitive' },
    ])

    const definite_articles = ref([
      { id: 0, chinese: '這個', en: 'this' },
      { id: 1, chinese: '那個', en: 'that' },
      { id: 2, chinese: '這些', en: 'these' },
      { id: 3, chinese: '那些', en: 'those' },
    ])

    const quantifiers = ref([
      { id: 0, chinese: '零個', en: 'zero' },
      { id: 1, chinese: '一個', en: 'one' },
      { id: 2, chinese: '兩個', en: 'two' },
      { id: 3, chinese: '三個', en: 'three' },
      { id: 4, chinese: '四個', en: 'four' },
      { id: 5, chinese: '五個', en: 'five' },
      { id: 6, chinese: '六個', en: 'six' },
      { id: 7, chinese: '七個', en: 'seven' },
      { id: 8, chinese: '八個', en: 'eight' },
      { id: 9, chinese: '九個', en: 'nine' },
      { id: 10, chinese: '十個', en: 'ten' },
      { id: 11, chinese: '一些', en: 'some' },
      { id: 12, chinese: '很多', en: 'many' },
      { id: 13, chinese: '少數', en: 'few' },
      { id: 14, chinese: '多數', en: 'many' },
      { id: 15, chinese: '全部', en: 'all' },
      { id: 16, chinese: '大多數', en: 'most of' },
      { id: 17, chinese: '少數', en: 'few of' },
      { id: 18, chinese: '多數', en: 'most of' },
      { id: 19, chinese: '沒有', en: 'none of' },
    ])

    // Be動詞
    const be_verbs = ref<BeVerb[]>([
      {
        id: 0,
        chinese: '是',
        en_I: 'am',
        en_you: 'are',
        en_he: 'is',
        en_she: 'is',
        en_it: 'is',
        en_we: 'are',
        en_they: 'are',
      },
    ])

    // 及物動詞
    const verb_transitives = ref([
      { id: 0, chinese: '愛', en: 'love', en_third_person: 'loves' },
      { id: 1, chinese: '恨', en: 'hate', en_third_person: 'hates' },
      { id: 2, chinese: '喜歡', en: 'like', en_third_person: 'likes' },
      { id: 3, chinese: '討厭', en: 'dislike', en_third_person: 'dislikes' },
      { id: 4, chinese: '吃', en: 'eat', en_third_person: 'eats' },
      { id: 5, chinese: '喝', en: 'drink', en_third_person: 'drinks' },
      { id: 6, chinese: '玩', en: 'play', en_third_person: 'plays' },
      { id: 7, chinese: '看', en: 'watch', en_third_person: 'watches' },
      { id: 8, chinese: '照顧', en: 'take care of', en_third_person: 'takes care of' },
      { id: 9, chinese: '說', en: 'say', en_third_person: 'says' },
      { id: 10, chinese: '寫', en: 'write', en_third_person: 'writes' },
      { id: 11, chinese: '畫', en: 'draw', en_third_person: 'draws' },
      { id: 12, chinese: '做', en: 'do', en_third_person: 'does' },
      { id: 13, chinese: '打', en: 'hit', en_third_person: 'hits' },
      { id: 14, chinese: '踢', en: 'kick', en_third_person: 'kicks' },
      { id: 15, chinese: '拿', en: 'take', en_third_person: 'takes' },
      { id: 16, chinese: '送', en: 'give', en_third_person: 'gives' },
      { id: 17, chinese: '來', en: 'come', en_third_person: 'comes' },
      { id: 18, chinese: '去', en: 'go', en_third_person: 'goes' },
      { id: 19, chinese: '買', en: 'buy', en_third_person: 'buys' },
      { id: 20, chinese: '賣', en: 'sell', en_third_person: 'sells' },
      { id: 21, chinese: '教', en: 'teach', en_third_person: 'teaches' },
      { id: 22, chinese: '學', en: 'learn', en_third_person: 'learns' },
      { id: 23, chinese: '借', en: 'borrow', en_third_person: 'borrows' },
      { id: 24, chinese: '還', en: 'return', en_third_person: 'returns' },
      { id: 25, chinese: '問', en: 'ask', en_third_person: 'asks' },
      { id: 26, chinese: '答', en: 'answer', en_third_person: 'answers' },
      { id: 27, chinese: '找', en: 'find', en_third_person: 'finds' },
      { id: 28, chinese: '給', en: 'give', en_third_person: 'gives' },
      { id: 29, chinese: '帶', en: 'bring', en_third_person: 'brings' },
    ])

    // 新增不及物動詞列表
    const verb_intransitives = ref([
      { id: 0, chinese: '聽', en: 'listen', preposition: 'to' },
      { id: 1, chinese: '睡', en: 'sleep' },
      { id: 2, chinese: '醒', en: 'wake up' },
      { id: 3, chinese: '走', en: 'walk' },
      { id: 4, chinese: '跑', en: 'run' },
      { id: 5, chinese: '跳', en: 'jump' },
      { id: 6, chinese: '游泳', en: 'swim' },
      { id: 7, chinese: '飛', en: 'fly' },
      { id: 8, chinese: '笑', en: 'laugh' },
      { id: 9, chinese: '哭', en: 'cry' },
      { id: 10, chinese: '坐', en: 'sit' },
      { id: 11, chinese: '站', en: 'stand' },
      { id: 12, chinese: '躺', en: 'lie down' },
      { id: 13, chinese: '起來', en: 'get up' },
      { id: 14, chinese: '降落', en: 'land' },
      { id: 15, chinese: '升起', en: 'rise' },
      { id: 16, chinese: '掉落', en: 'fall' },
      { id: 17, chinese: '出現', en: 'appear' },
      { id: 18, chinese: '消失', en: 'disappear' },
      { id: 19, chinese: '開始', en: 'begin' },
      { id: 20, chinese: '結束', en: 'end' },
      { id: 21, chinese: '變化', en: 'change' },
      { id: 22, chinese: '成長', en: 'grow' },
      { id: 23, chinese: '縮小', en: 'shrink' },
      { id: 24, chinese: '擴大', en: 'expand' },
      { id: 25, chinese: '旋轉', en: 'spin' },
      { id: 26, chinese: '震動', en: 'vibrate' },
      { id: 27, chinese: '發光', en: 'shine' },
      { id: 28, chinese: '燃燒', en: 'burn' },
      { id: 29, chinese: '熄滅', en: 'extinguish' },
    ])

    const nouns = ref([
      {
        id: 0,
        chinese: '沒有人',
        countable: false,
        subject_en: 'nobody',
        object_en: 'nobody',
      },
      {
        id: 1,
        chinese: '我',
        countable: false,
        subject_en: 'I',
        object_en: 'me',
      },
      {
        id: 2,
        chinese: '你',
        countable: false,
        subject_en: 'you',
        object_en: 'you',
      },
      {
        id: 3,
        chinese: '他',
        countable: false,
        subject_en: 'he',
        object_en: 'him',
      },
      {
        id: 4,
        chinese: '她',
        countable: false,
        subject_en: 'she',
        object_en: 'her',
      },
      {
        id: 5,
        chinese: '它',
        countable: false,
        subject_en: 'it',
        object_en: 'it',
      },
      {
        id: 6,
        chinese: '我們',
        countable: false,
        subject_en: 'we',
        object_en: 'us',
      },
      {
        id: 7,
        chinese: '你們',
        countable: false,
        subject_en: 'you',
        object_en: 'you',
      },
      {
        id: 8,
        chinese: '他們',
        countable: false,
        subject_en: 'they',
        object_en: 'them',
      },
      {
        id: 9,
        chinese: '它們',
        countable: false,
        subject_en: 'they',
        object_en: 'them',
      },
      {
        id: 10,
        chinese: '這個',
        countable: false,
        subject_en: 'this',
        object_en: 'this',
      },
      {
        id: 11,
        chinese: '那個',
        countable: false,
        subject_en: 'that',
        object_en: 'that',
      },
      {
        id: 12,
        chinese: '這些',
        countable: false,
        subject_en: 'these',
        object_en: 'these',
      },
      {
        id: 13,
        chinese: '那些',
        countable: false,
        subject_en: 'those',
        object_en: 'those',
      },
      {
        id: 14,
        chinese: '這裡',
        countable: false,
        subject_en: 'here',
        object_en: 'here',
      },
      {
        id: 15,
        chinese: '那裡',
        countable: false,
        subject_en: 'there',
        object_en: 'there',
      },
      {
        id: 16,
        chinese: '東西',
        countable: true,
        subject_en: 'thing',
        object_en: 'thing',
        subject_plural_en: 'things',
        object_plural_en: 'things',
      },
      {
        id: 17,
        chinese: '人',
        countable: true,
        subject_en: 'person',
        object_en: 'person',
        subject_plural_en: 'people',
        object_plural_en: 'people',
      },
      {
        id: 18,
        chinese: '媽媽',
        subject_en: 'mom',
        object_en: 'mom',
      },
      {
        id: 19,
        chinese: '爸爸',
        subject_en: 'dad',
        object_en: 'dad',
      },
      {
        id: 20,
        chinese: '爺爺',
        subject_en: 'grandpa',
        object_en: 'grandpa',
      },
      {
        id: 21,
        chinese: '奶奶',
        subject_en: 'grandma',
        object_en: 'grandma',
      },
      {
        id: 22,
        chinese: '學生',
        countable: true,
        subject_en: 'student',
        object_en: 'student',
        subject_plural_en: 'students',
        object_plural_en: 'students',
      },
      {
        id: 23,
        chinese: '老師',
        countable: true,
        subject_en: 'teacher',
        object_en: 'teacher',
        subject_plural_en: 'teachers',
        object_plural_en: 'teachers',
      },
      {
        id: 24,
        chinese: '朋友',
        countable: true,
        subject_en: 'friend',
        object_en: 'friend',
        subject_plural_en: 'friends',
        object_plural_en: 'friends',
      },
      {
        id: 25,
        chinese: '醫生',
        countable: true,
        subject_en: 'doctor',
        object_en: 'doctor',
        subject_plural_en: 'doctors',
        object_plural_en: 'doctors',
      },
      {
        id: 26,
        chinese: '護士',
        countable: true,
        subject_en: 'nurse',
        object_en: 'nurse',
        subject_plural_en: 'nurses',
        object_plural_en: 'nurses',
      },
      {
        id: 27,
        chinese: '警察',
        countable: true,
        subject_en: 'police officer',
        object_en: 'police officer',
        subject_plural_en: 'police officers',
        object_plural_en: 'police officers',
      },
      {
        id: 28,
        chinese: '司機',
        countable: true,
        subject_en: 'driver',
        object_en: 'driver',
        subject_plural_en: 'drivers',
        object_plural_en: 'drivers',
      },
      {
        id: 29,
        chinese: '廚師',
        countable: true,
        subject_en: 'chef',
        object_en: 'chef',
        subject_plural_en: 'chefs',
        object_plural_en: 'chefs',
      },
      {
        id: 30,
        chinese: '店員',
        countable: true,
        subject_en: 'clerk',
        object_en: 'clerk',
        subject_plural_en: 'clerks',
        object_plural_en: 'clerks',
      },
      {
        id: 31,
        chinese: '狗',
        countable: true,
        subject_en: 'dog',
        object_en: 'dog',
        subject_plural_en: 'dogs',
        object_plural_en: 'dogs',
      },
      {
        id: 32,
        chinese: '貓',
        countable: true,
        subject_en: 'cat',
        object_en: 'cat',
        subject_plural_en: 'cats',
        object_plural_en: 'cats',
      },
      {
        id: 33,
        chinese: '書',
        countable: true,
        subject_en: 'book',
        object_en: 'book',
        subject_plural_en: 'books',
        object_plural_en: 'books',
      },
      {
        id: 34,
        chinese: '電腦',
        countable: true,
        subject_en: 'computer',
        object_en: 'computer',
        subject_plural_en: 'computers',
        object_plural_en: 'computers',
      },
      {
        id: 35,
        chinese: '手機',
        countable: true,
        subject_en: 'phone',
        object_en: 'phone',
        subject_plural_en: 'phones',
        object_plural_en: 'phones',
      },
      {
        id: 36,
        chinese: '桌子',
        countable: true,
        subject_en: 'table',
        object_en: 'table',
        subject_plural_en: 'tables',
        object_plural_en: 'tables',
      },
      {
        id: 37,
        chinese: '椅子',
        countable: true,
        subject_en: 'chair',
        object_en: 'chair',
        subject_plural_en: 'chairs',
        object_plural_en: 'chairs',
      },
      {
        id: 38,
        chinese: '房子',
        countable: true,
        subject_en: 'house',
        object_en: 'house',
        subject_plural_en: 'houses',
        object_plural_en: 'houses',
      },
      {
        id: 39,
        chinese: '車子',
        countable: true,
        subject_en: 'car',
        object_en: 'car',
        subject_plural_en: 'cars',
        object_plural_en: 'cars',
      },
      {
        id: 40,
        chinese: '飛機',
        countable: true,
        subject_en: 'airplane',
        object_en: 'airplane',
        subject_plural_en: 'airplanes',
        object_plural_en: 'airplanes',
      },
      {
        id: 41,
        chinese: '公車',
        countable: true,
        subject_en: 'bus',
        object_en: 'bus',
        subject_plural_en: 'buses',
        object_plural_en: 'buses',
      },
      {
        id: 42,
        chinese: '學校',
        countable: true,
        subject_en: 'school',
        object_en: 'school',
        subject_plural_en: 'schools',
        object_plural_en: 'schools',
      },
      {
        id: 43,
        chinese: '醫院',
        countable: true,
        subject_en: 'hospital',
        object_en: 'hospital',
        subject_plural_en: 'hospitals',
        object_plural_en: 'hospitals',
      },
      {
        id: 44,
        chinese: '公園',
        countable: true,
        subject_en: 'park',
        object_en: 'park',
        subject_plural_en: 'parks',
        object_plural_en: 'parks',
      },
      {
        id: 45,
        chinese: '餐廳',
        countable: true,
        subject_en: 'restaurant',
        object_en: 'restaurant',
        subject_plural_en: 'restaurants',
        object_plural_en: 'restaurants',
      },
      {
        id: 46,
        chinese: '商店',
        countable: true,
        subject_en: 'store',
        object_en: 'store',
        subject_plural_en: 'stores',
        object_plural_en: 'stores',
      },
      {
        id: 47,
        chinese: '電影院',
        countable: true,
        subject_en: 'cinema',
        object_en: 'cinema',
        subject_plural_en: 'cinemas',
        object_plural_en: 'cinemas',
      },
      {
        id: 48,
        chinese: '圖書館',
        countable: true,
        subject_en: 'library',
        object_en: 'library',
        subject_plural_en: 'libraries',
        object_plural_en: 'libraries',
      },
      {
        id: 49,
        chinese: '銀行',
        countable: true,
        subject_en: 'bank',
        object_en: 'bank',
        subject_plural_en: 'banks',
        object_plural_en: 'banks',
      },
      {
        id: 50,
        chinese: '郵局',
        countable: true,
        subject_en: 'post office',
        object_en: 'post office',
        subject_plural_en: 'post offices',
        object_plural_en: 'post offices',
      },
      {
        id: 51,
        chinese: '水',
        countable: false,
        subject_en: 'water',
        object_en: 'water',
      },
      {
        id: 52,
        chinese: '食物',
        countable: false,
        subject_en: 'food',
        object_en: 'food',
      },
      {
        id: 53,
        chinese: '衣服',
        countable: true,
        subject_en: 'clothes',
        object_en: 'clothes',
        subject_plural_en: 'clothes',
        object_plural_en: 'clothes',
      },
      {
        id: 54,
        chinese: '鞋子',
        countable: true,
        subject_en: 'shoes',
        object_en: 'shoes',
        subject_plural_en: 'shoes',
        object_plural_en: 'shoes',
      },
      {
        id: 55,
        chinese: '帽子',
        countable: true,
        subject_en: 'hat',
        object_en: 'hat',
        subject_plural_en: 'hats',
        object_plural_en: 'hats',
      },
      {
        id: 56,
        chinese: '眼鏡',
        countable: true,
        subject_en: 'glasses',
        object_en: 'glasses',
        subject_plural_en: 'glasses',
        object_plural_en: 'glasses',
      },
      {
        id: 57,
        chinese: '時間',
        countable: false,
        subject_en: 'time',
        object_en: 'time',
      },
      {
        id: 58,
        chinese: '天氣',
        countable: false,
        subject_en: 'weather',
        object_en: 'weather',
      },
      {
        id: 59,
        chinese: '門',
        countable: true,
        subject_en: 'door',
        object_en: 'door',
        subject_plural_en: 'doors',
        object_plural_en: 'doors',
      },
      {
        id: 60,
        chinese: '窗戶',
        countable: true,
        subject_en: 'window',
        object_en: 'window',
        subject_plural_en: 'windows',
        object_plural_en: 'windows',
      },
      {
        id: 61,
        chinese: '電視',
        countable: true,
        subject_en: 'television',
        object_en: 'television',
        subject_plural_en: 'televisions',
        object_plural_en: 'televisions',
      },
      {
        id: 62,
        chinese: '收音機',
        countable: true,
        subject_en: 'radio',
        object_en: 'radio',
        subject_plural_en: 'radios',
        object_plural_en: 'radios',
      },
      {
        id: 63,
        chinese: '報紙',
        countable: true,
        subject_en: 'newspaper',
        object_en: 'newspaper',
        subject_plural_en: 'newspapers',
        object_plural_en: 'newspapers',
      },
      {
        id: 64,
        chinese: '雜誌',
        countable: true,
        subject_en: 'magazine',
        object_en: 'magazine',
        subject_plural_en: 'magazines',
        object_plural_en: 'magazines',
      },
      {
        id: 65,
        chinese: '筆',
        countable: true,
        subject_en: 'pen',
        object_en: 'pen',
        subject_plural_en: 'pens',
        object_plural_en: 'pens',
      },
      {
        id: 66,
        chinese: '鉛筆',
        countable: true,
        subject_en: 'pencil',
        object_en: 'pencil',
        subject_plural_en: 'pencils',
        object_plural_en: 'pencils',
      },
      {
        id: 67,
        chinese: '紙',
        countable: true,
        subject_en: 'paper',
        object_en: 'paper',
        subject_plural_en: 'papers',
        object_plural_en: 'papers',
      },
      {
        id: 68,
        chinese: '信',
        countable: true,
        subject_en: 'letter',
        object_en: 'letter',
        subject_plural_en: 'letters',
        object_plural_en: 'letters',
      },
      {
        id: 69,
        chinese: '錢',
        countable: false,
        subject_en: 'money',
        object_en: 'money',
      },
      {
        id: 70,
        chinese: '鑰匙',
        countable: true,
        subject_en: 'key',
        object_en: 'key',
        subject_plural_en: 'keys',
        object_plural_en: 'keys',
      },
      {
        id: 71,
        chinese: '包包',
        countable: true,
        subject_en: 'bag',
        object_en: 'bag',
        subject_plural_en: 'bags',
        object_plural_en: 'bags',
      },
    ])

    const sentenceType = ref('subject-verb-object')
    interface Noun {
      id: number
      subject_en: string
      object_en: string
    }

    interface Verb {
      id: number
      en: string
      en_third_person: string
    }

    const subject = ref<Noun | null>(null)
    const verb = ref<Verb | null>(null)
    const object = ref<Noun | null>(null)
    const beVerb = ref<BeVerb | null>(null)
    const adjective = ref<Adjective | null>(null)

    const adjectives = ref<Adjective[]>([
      { id: 0, chinese: '高', en: 'tall' },
      { id: 1, chinese: '矮', en: 'short' },
      { id: 2, chinese: '胖', en: 'fat' },
      { id: 3, chinese: '瘦', en: 'thin' },
      { id: 4, chinese: '快', en: 'fast' },
      { id: 5, chinese: '慢', en: 'slow' },
      { id: 6, chinese: '大', en: 'big' },
      { id: 7, chinese: '小', en: 'small' },
      { id: 8, chinese: '漂亮', en: 'beautiful' },
      { id: 9, chinese: '醜', en: 'ugly' },
    ])

    const sentence = computed(() => {
      let beVerbForm = ''
      let verbForm = ''

      switch (sentenceType.value) {
        case 'subject-verb-object':
          if (!subject.value && !verb.value && !object.value) return ''

          if (subject.value) {
            if (verb.value) {
              switch (subject.value.subject_en.toLowerCase()) {
                case 'i':
                case 'you':
                case 'we':
                case 'they':
                  verbForm = verb.value.en
                  break
                default:
                  verbForm = verb.value.en_third_person
              }
            }

            return [
              subject.value.subject_en,
              verb.value ? verbForm : '',
              object.value ? object.value.object_en : '',
            ]
              .filter(Boolean)
              .join(' ')
          }
          return ''

        case 'question':
          if (!beVerb.value && !object.value && !adjective.value) return ''

          if (object.value && beVerb.value) {
            switch (object.value.subject_en.toLowerCase()) {
              case 'i':
                beVerbForm = beVerb.value.en_I
                break
              case 'you':
                beVerbForm = beVerb.value.en_you
                break
              case 'he':
                beVerbForm = beVerb.value.en_he
                break
              case 'she':
                beVerbForm = beVerb.value.en_she
                break
              case 'it':
                beVerbForm = beVerb.value.en_it
                break
              case 'we':
                beVerbForm = beVerb.value.en_we
                break
              case 'they':
                beVerbForm = beVerb.value.en_they
                break
              default:
                beVerbForm = beVerb.value.en_it
            }
          }

          return [
            beVerb.value ? beVerbForm : '',
            object.value ? object.value.subject_en : '',
            adjective.value ? adjective.value.en : '',
          ]
            .filter(Boolean)
            .join(' ')

        case 'subject-intransitive-verb':
          if (!subject.value && !verb.value) return ''
          return [subject.value ? subject.value.subject_en : '', verb.value ? verb.value.en : '']
            .filter(Boolean)
            .join(' ')

        case 'imperative-transitive':
          if (!verb.value && !object.value) return ''
          return [verb.value ? verb.value.en : '', object.value ? object.value.object_en : '']
            .filter(Boolean)
            .join(' ')

        case 'imperative-intransitive':
          return verb.value ? verb.value.en : ''

        default:
          return ''
      }
    })

    return {
      be_verbs,
      sentenceTypes,
      definite_articles,
      quantifiers,
      verb_transitives,
      verb_intransitives,
      nouns,
      sentenceType,
      subject,
      verb,
      object,
      adjectives,
      beVerb,
      adjective,
      sentence,
    }
  },
  methods: {
    speakSentence(sentence: string) {
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(sentence)
        window.speechSynthesis.speak(utterance)
      } else {
        console.warn('您的瀏覽器不支援語音合成功能。')
      }
    },
  },
})
</script>

<style scoped>
:deep(.q-field__native),
:deep(.q-field__label) {
  line-height: 1rem !important;
  font-size: 1rem !important;
}
</style>
