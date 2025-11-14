<!-- 958cffdd-d73e-4650-8d34-26c50e0bae54 40232105-2957-4516-9d23-b95c473901f4 -->
# 以"字、詞、句"結構重整網站架構

## 概述

將網站重新組織為三個層次：字（字母、音標）、詞（動詞、名詞、形容詞、副詞等）、句（肯定句、疑問句、祈使句等）。

## 主要修改

### 1. 修改側欄分類（MainLayout.vue）

- 將現有的"字母學習"和"字卡學習"重新組織為：
- **字**：字母學習（ABC之歌、手寫練習）+ 音標學習（待新增）
- **詞**：單詞字卡（待新增，包含動詞、名詞、形容詞、副詞等分類）、跳跳人遊戲(src/pages/MarioGamePage.vue)
- **句**：現有句子字卡（BeginnerPage、EmotionCardsPage、BodyPage、NumberPage、Env1-4等）、拍照學英文(src/pages/WhatIsThisPage.vue)、圖庫與小測驗(src/pages/GalleryPage.vue)、睡前故事(src/pages/StoryPage_backend.vue)
- **其他**：所有無法分類的功能和小遊戲等

### 2. 修改首頁分類（IndexPage.vue 和 features.ts）

- 將 features.ts 中的 category 重新分類為"字"、"詞"、"句"
- 更新 IndexPage.vue 中的分類顯示邏輯

### 3. 修改 FlashCard 組件（FlashCard.vue）

- 更新 Sentence interface，加上可選的 `structure?: string` 欄位
- 在組件中加上 `selectedStructure` prop 和對應的 select 下拉選單
- 在字卡上顯示 structure 標籤（使用 q-chip）
- 更新 `filteredSentences` 計算屬性，支援根據 structure 過濾
- 在字卡頁面（如 BeginnerPage.vue）加上 select 元件來選擇句型

### 4. 為所有句子字卡頁面加上 structure 欄位

需要為以下頁面的所有句子資料加上 `structure` 欄位（值為中文：'肯定句'、'疑問句'、'祈使句'等）：

- `src/pages/Flashcards/BeginnerPage.vue`
- `src/pages/Flashcards/EmotionCardsPage.vue`
- `src/pages/Flashcards/BodyPage.vue`
- `src/pages/Flashcards/NumberPage.vue`
- `src/pages/Flashcards/Env1AtHomePage.vue`
- `src/pages/Flashcards/Env2PlayingBasketballPage.vue`
- `src/pages/Flashcards/Env3AtRestaurantPage.vue`
- `src/pages/Flashcards/Env4TravelingPage.vue`

### 5. 創建新的"字"和"詞"層次頁面（未來擴展）

- 音標學習頁面（包含音標符號及其發音示範）
- 單詞字卡頁面（包含英文單詞、中文翻譯、音標、詞性）

## 實作細節

### FlashCard 組件修改

- 在 search bar 區域加上 select 下拉選單，選項包括："全部"、"肯定句"、"疑問句"、"祈使句"等
- 在字卡正面或背面顯示 structure 標籤（如果存在）
- 過濾邏輯：同時支援關鍵字搜尋和句型篩選

### 句型分類規則

根據句子類型判斷 structure 值：

- 疑問句（包含 ? 或疑問詞）：'疑問句'
- 祈使句（以動詞開頭或 Let's 開頭）：'祈使句'
- 其他：'肯定句'

## 檔案清單

- `src/layouts/MainLayout.vue` - 側欄分類
- `src/pages/IndexPage.vue` - 首頁分類顯示
- `src/data/features.ts` - 功能分類資料
- `src/components/FlashCard.vue` - 字卡組件（加上 select 和 structure 顯示）
- `src/pages/Flashcards/*.vue` - 所有字卡頁面（加上 structure 欄位）

### To-dos

- [ ] 修改 MainLayout.vue 側欄，將分類改為"字"、"詞"、"句"三個層次
- [ ] 修改 features.ts，將 category 重新分類為"字"、"詞"、"句"
- [ ] 修改 FlashCard.vue 組件：加上 structure 欄位、select 下拉選單、標籤顯示和過濾功能
- [ ] 為所有字卡頁面（BeginnerPage、EmotionCardsPage、BodyPage、NumberPage、Env1-4）的句子資料加上 structure 欄位
- [ ] 更新 IndexPage.vue 以支援新的分類系統