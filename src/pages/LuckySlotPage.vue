<template>
    <q-page class="flex flex-center column" style="background-color: #f5f5f7; min-height: 100vh; padding: 24px;">
      <div v-if="!currentUser" class="text-center q-pa-lg" style="background-color: white; border-radius: 16px; width: 100%; max-width: 400px; border: 1px solid #e6e6eb; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);">
        <q-icon name="lock" size="50px" color="grey-5" />
        <p class="text-h6 q-mt-md" style="color: #1a1a1a;">請先登入以使用拉霸機</p>
        <q-btn color="primary" label="登入" to="/login" style="margin-top: 16px;" />
      </div>
  
      <template v-else>
        <div class="text-h4 q-mb-md" style="color: #1a1a1a; font-weight: 700; letter-spacing: -0.5px;">🎉 每天拉一次，強化你的英文力！</div>
  
        <div class="slot-machine-container">
          <canvas ref="slotCanvas" width="600" height="400" style="z-index: 5;"></canvas>
          
          <!-- 拉霸機桿 -->
          <div 
            class="slot-lever" 
            :class="{ 'lever-pulled': leverPulled }"
            @click="pullLever" 
            v-if="!spinning && canPlay"
          >
            <div class="lever-grip"></div>
            <div class="lever-stick"></div>
            <div class="lever-base"></div>
          </div>
        </div>
  
        <div v-if="result" class="result-container q-mt-lg">
          <div class="result-title">{{ result.title }}</div>
          <div class="result-description">{{ result.description }}</div>
          
          <div v-if="result.task" class="task-container">
            <div style="font-weight: 600; margin-bottom: 8px; color: #1a1a1a;">今日任務：</div>
            <div>{{ result.task }}</div>
            
            <div class="task-input-container q-mt-md" v-if="!taskCompleted">
              <!-- 動詞造句任務 -->
              <div v-if="result.title.includes('動詞')">
                <p class="task-instruction">請使用上方動詞造一個完整的英文句子：</p>
                <q-input 
                  v-model="textTaskAnswer" 
                  outlined 
                  type="textarea" 
                  placeholder="例如：I run every morning to stay healthy." 
                  class="task-input"
                />
              </div>
              
              <!-- 名詞功能描述任務 -->
              <div v-else-if="result.title.includes('名詞')">
                <p class="task-instruction">請用英文描述其中一個物品的功能或特點：</p>
                <q-input 
                  v-model="textTaskAnswer" 
                  outlined 
                  type="textarea" 
                  placeholder="例如：A guitar is a musical instrument that produces sound when you pluck its strings." 
                  class="task-input"
                />
              </div>
              
              <!-- 形容詞描述任務 -->
              <div v-else-if="result.title.includes('形容詞')">
                <p class="task-instruction">請用英文形容你現在的心情或一件事物：</p>
                <q-input 
                  v-model="textTaskAnswer" 
                  outlined 
                  type="textarea" 
                  placeholder="例如：I feel happy when I listen to my favorite music." 
                  class="task-input"
                />
              </div>
              
              <!-- 特殊組合翻譯任務 -->
              <div v-else-if="result.title.includes('特殊')">
                <p class="task-instruction">請翻譯以下句子：</p>
                <div class="translation-text q-mb-md">{{ specialCombinationSentence }}</div>
                <q-input 
                  v-model="textTaskAnswer" 
                  outlined 
                  type="textarea" 
                  placeholder="請輸入中文翻譯..." 
                  class="task-input"
                />
              </div>
              
              <!-- 雙七問答題 -->
              <div v-else-if="result.title.includes('雙七')">
                <p class="task-instruction">{{ bonusQuestion }}</p>
                <div class="bonus-options">
                  <q-radio v-model="radioTaskAnswer" val="A" :label="bonusOptions.A" class="q-mb-sm" />
                  <q-radio v-model="radioTaskAnswer" val="B" :label="bonusOptions.B" class="q-mb-sm" />
                  <q-radio v-model="radioTaskAnswer" val="C" :label="bonusOptions.C" class="q-mb-sm" />
                  <q-radio v-model="radioTaskAnswer" val="D" :label="bonusOptions.D" />
                </div>
              </div>
              
              <!-- 幸運小知識 -->
              <div v-else-if="result.title.includes('幸運')">
                <div class="knowledge-card">
                  <p class="knowledge-title">{{ knowledgeCard.title }}</p>
                  <p class="knowledge-content">{{ knowledgeCard.content }}</p>
                  <p class="knowledge-tip">{{ knowledgeCard.tip }}</p>
                </div>
                <q-checkbox v-model="checkboxTaskAnswer" true-value="true" label="我已閱讀並理解這個小知識" />
              </div>
              
              <div class="task-actions q-mt-md">
                <q-btn 
                  color="primary" 
                  :disable="!isTaskAnswerValid" 
                  @click="submitTask"
                  style="border-radius: 8px;"
                >
                  提交答案
                </q-btn>
              </div>
            </div>
            
            <div v-else class="task-completed-container q-mt-md">
              <div class="task-completed-message">
                <q-icon name="check_circle" color="positive" size="24px" class="q-mr-sm" />
                任務已完成！
              </div>
              <div class="task-feedback q-mt-sm" v-if="taskFeedback">
                {{ taskFeedback }}
              </div>
            </div>
          </div>
          
          <div class="points-container">
            <q-icon name="stars" color="primary" size="24px" class="q-mr-sm" />
            獲得 {{ result.points }} 點
          </div>
        </div>
        
        <div class="q-mt-lg" style="display: flex; gap: 12px;">
          <q-btn 
            color="primary" 
            :disable="!canPlay || spinning"
            @click="pullLever"
            style="min-width: 120px; border-radius: 8px;"
          >
            {{ spinning ? '旋轉中...' : (canPlay ? '拉霸開始！' : '今日已玩過') }}
          </q-btn>
          
          <q-btn 
            color="secondary" 
            @click="forceRedraw"
            style="min-width: 100px; border-radius: 8px;"
          >
            重繪畫面
          </q-btn>
        </div>
      </template>
    </q-page>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted, onUnmounted, nextTick, computed } from 'vue'
  import { getDatabase, ref as dbRef, get, set, serverTimestamp, push } from 'firebase/database'
  import type { User } from 'firebase/auth';
  import { getAuth, onAuthStateChanged } from 'firebase/auth'
  
  // 符號類型定義
  interface Symbol {
    type: string;  // 'verb', 'noun', 'adjective', 'emoji', 'special'
    value: string; // 單字或符號文字值
    emoji: string; // 展示的表情符號
    category: string; // 分類
    text: string; // 顯示的文字 (用於繪製)
  }
  
  // 轉輪定義
  interface Reel {
    position: number;
    finalPosition: number;
    spinning: boolean;
    symbols: Symbol[];
  }
  
  // 結果定義
  interface Result {
    title: string;
    description: string;
    task?: string | undefined;
    points: number;
  }
  
  export default defineComponent({
    name: 'LuckySlotPage',
    setup() {
      // 基本參數設定
      const slotCanvas = ref<HTMLCanvasElement | null>(null)
      const ctx = ref<CanvasRenderingContext2D | null>(null)
      const canPlay = ref(true)
      const spinning = ref(false)
      const leverPulled = ref(false)
      const currentUser = ref<User | null>(null)
      const isLoading = ref(true)
      const result = ref<Result | null>(null)
      
      // 任務相關參數
      const textTaskAnswer = ref('')
      const radioTaskAnswer = ref('')
      const checkboxTaskAnswer = ref(false)
      const taskCompleted = ref(false)
      const taskFeedback = ref('')
      const specialCombinationSentence = ref('')
      const bonusQuestion = ref('')
      const bonusOptions = ref({
        A: '',
        B: '',
        C: '',
        D: ''
      })
      const bonusCorrectAnswer = ref('')
      const knowledgeCard = ref({
        title: '',
        content: '',
        tip: ''
      })
      
      // 檢查任務答案是否有效
      const isTaskAnswerValid = computed(() => {
        if (!result.value || !result.value.task) return false;
        
        // 各種任務的有效性檢查
        if (result.value.title.includes('動詞') || 
            result.value.title.includes('名詞') || 
            result.value.title.includes('形容詞') || 
            result.value.title.includes('特殊')) {
          // 文字類任務至少需要10個字符
          return textTaskAnswer.value.trim().length >= 10;
        } else if (result.value.title.includes('雙七')) {
          // 選擇題需要選擇一個選項
          return ['A', 'B', 'C', 'D'].includes(radioTaskAnswer.value);
        } else if (result.value.title.includes('幸運')) {
          // 知識卡片需要勾選閱讀確認
          return Boolean(checkboxTaskAnswer.value) === true;
        }
        
        return false;
      })
  
      // 符號庫：根據企劃要求設定不同類型的符號
      const symbols: Symbol[] = [
        // 動詞
        { type: 'verb', value: 'run', emoji: '🏃', category: '運動', text: 'run' },
        { type: 'verb', value: 'eat', emoji: '🍽️', category: '飲食', text: 'eat' },
        { type: 'verb', value: 'jump', emoji: '🦘', category: '運動', text: 'jump' },
        { type: 'verb', value: 'play', emoji: '🎮', category: '娛樂', text: 'play' },
        { type: 'verb', value: 'sing', emoji: '🎤', category: '音樂', text: 'sing' },
        
        // 名詞
        { type: 'noun', value: 'guitar', emoji: '🎸', category: '音樂', text: 'guitar' },
        { type: 'noun', value: 'book', emoji: '📚', category: '校園', text: 'book' },
        { type: 'noun', value: 'computer', emoji: '💻', category: '科技', text: 'computer' },
        { type: 'noun', value: 'ball', emoji: '⚽', category: '運動', text: 'ball' },
        { type: 'noun', value: 'fruit', emoji: '🍎', category: '飲食', text: 'fruit' },
        
        // 形容詞
        { type: 'adjective', value: 'happy', emoji: '😊', category: '情緒', text: 'happy' },
        { type: 'adjective', value: 'smart', emoji: '🧠', category: '特質', text: 'smart' },
        { type: 'adjective', value: 'fast', emoji: '⚡', category: '特質', text: 'fast' },
        { type: 'adjective', value: 'big', emoji: '📏', category: '大小', text: 'big' },
        { type: 'adjective', value: 'sweet', emoji: '🍭', category: '味道', text: 'sweet' },
        
        // 特殊符號
        { type: 'special', value: 'seven', emoji: '7️⃣', category: '特殊', text: '7️⃣' },
        { type: 'special', value: 'light', emoji: '💡', category: '特殊', text: '💡' },
        { type: 'special', value: 'music', emoji: '🎵', category: '特殊', text: '🎵' }
      ];
  
      // 初始化三個轉輪
      const reels = ref<Reel[]>([
        { position: 0, finalPosition: 0, spinning: false, symbols: [] },
        { position: 0, finalPosition: 0, spinning: false, symbols: [] },
        { position: 0, finalPosition: 0, spinning: false, symbols: [] }
      ]);
  
      // 拉霸機顏色設定
      const slotMachineColors = {
        body: '#ffffff',
        frame: '#0070ff',
        reelBackground: '#f5f8ff',
        reelBorder: '#e6e6eb',
        reelSeparator: '#e6e6eb',
        symbolBackground: '#ffffff'
      };
  
      // 初始化Canvas
      const initCanvas = () => {
        if (!slotCanvas.value) {
          console.error("Canvas element not found");
          return;
        }
        
        ctx.value = slotCanvas.value.getContext('2d');
        if (!ctx.value) {
          console.error("Could not get canvas context");
          return;
        }
        
        console.log("Canvas context created successfully");
        
        // 初始化轉輪符號
        for (let i = 0; i < reels.value.length; i++) {
          // 為每個轉輪隨機分配符號
          const reel = reels.value[i];
          if (reel) {
            // 確保每個轉輪至少有一個動詞、名詞和形容詞
            const verbSymbols = symbols.filter(s => s.type === 'verb');
            const nounSymbols = symbols.filter(s => s.type === 'noun');
            const adjSymbols = symbols.filter(s => s.type === 'adjective');
            const specialSymbols = symbols.filter(s => s.type === 'special');
            
            // 混合並打亂所有符號
            const allSymbols = [...verbSymbols, ...nounSymbols, ...adjSymbols, ...specialSymbols];
            reel.symbols = allSymbols.sort(() => Math.random() - 0.5);
            
            // 隨機選一個位置作為初始位置
            reel.position = Math.floor(Math.random() * reel.symbols.length);
            console.log(`輪盤 ${i} 初始化了 ${reel.symbols.length} 個符號`);
          }
        }
        
        // 立即繪製初始畫面
        drawSlotMachine();
      };
  
      // 繪製拉霸機
      const drawSlotMachine = () => {
        if (!ctx.value || !slotCanvas.value) {
          console.error("無法繪製拉霸機：Canvas或Context不存在");
          return;
        }
        
        console.log("開始繪製拉霸機");
        
        const canvas = slotCanvas.value;
        const context = ctx.value;
        
        // 清空畫布
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        // 繪製機器主體 - 圓角矩形背景
        roundRect(context, 50, 50, 500, 300, 12, slotMachineColors.body, false);
        
        // 繪製機器框架
        context.strokeStyle = slotMachineColors.frame;
        context.lineWidth = 3;
        roundRect(context, 50, 50, 500, 300, 12, null, true);
        
        // 繪製標題
        context.fillStyle = '#1a1a1a';
        context.font = 'bold 24px Arial';
        context.textAlign = 'center';
        context.fillText('Lucky English Slot', canvas.width / 2, 35);
        
        // 計算每個轉輪的寬度和高度
        const reelWidth = 120;
        const reelHeight = 200;
        const startX = canvas.width / 2 - (reelWidth * 1.5) - 20;
        const startY = 100;
        
        // 繪製三個轉輪
        for (let i = 0; i < reels.value.length; i++) {
          // 計算轉輪的X座標
          const reelX = startX + i * (reelWidth + 20);
          
          // 繪製轉輪背景
          roundRect(context, reelX, startY, reelWidth, reelHeight, 8, slotMachineColors.reelBackground, false);
          context.strokeStyle = slotMachineColors.reelBorder;
          context.lineWidth = 2;
          roundRect(context, reelX, startY, reelWidth, reelHeight, 8, null, true);
          
          // 繪製符號 (顯示當前位置和上下兩個位置的符號)
          const reel = reels.value[i];
          if (reel && reel.symbols.length > 0) {
            const symbolHeight = reelHeight / 3;
            
            // 繪製三個位置的符號 (上、中、下)
            for (let j = -1; j <= 1; j++) {
              // 計算符號索引，循環顯示
              const symbolIndex = (reel.position + j + reel.symbols.length) % reel.symbols.length;
              const symbol = reel.symbols[symbolIndex];
              
              const symbolY = startY + (j + 1) * symbolHeight;
              
              // 繪製符號背景 (圓形)
              context.fillStyle = slotMachineColors.symbolBackground;
              context.beginPath();
              context.arc(reelX + reelWidth / 2, symbolY + symbolHeight / 2, symbolHeight / 2 - 5, 0, Math.PI * 2);
              context.fill();
              context.strokeStyle = '#0070ff';
              context.lineWidth = 1;
              context.stroke();
              
              // 繪製符號 (文字)
              context.fillStyle = j === 0 ? '#0070ff' : '#666666';
              context.font = j === 0 ? 'bold 24px Arial' : '20px Arial';
              context.textAlign = 'center';
              context.textBaseline = 'middle';
              
              // 根據符號類型設定顏色
              if (symbol && j === 0) {
                if (symbol.type === 'verb') context.fillStyle = '#0070ff';
                else if (symbol.type === 'noun') context.fillStyle = '#FF9500';
                else if (symbol.type === 'adjective') context.fillStyle = '#34C759';
                else if (symbol.type === 'special') context.fillStyle = '#AF52DE';
              }
              
              if (symbol && symbol.text) {
                context.fillText(symbol.text, reelX + reelWidth / 2, symbolY + symbolHeight / 2);
              } else if (symbol) {
                context.fillText(symbol.value, reelX + reelWidth / 2, symbolY + symbolHeight / 2);
              }
            }
          }
        }
        
        // 繪製底部控制區
        context.fillStyle = '#f5f8ff';
        roundRect(context, 100, startY + reelHeight + 20, 400, 50, 8, '#f5f8ff', false);
        
        context.fillStyle = '#1a1a1a';
        context.font = '16px Arial';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(spinning.value ? '旋轉中...' : (canPlay.value ? '拉下右側手柄開始' : '今日已玩過'), canvas.width / 2, startY + reelHeight + 45);
      };
      
      // 繪製圓角矩形的輔助函數
      const roundRect = (
        ctx: CanvasRenderingContext2D, 
        x: number, 
        y: number, 
        width: number, 
        height: number, 
        radius: number, 
        fill?: string | null, 
        stroke?: boolean
      ): void => {
        if (typeof radius === 'undefined') radius = 5;
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
        if (fill) {
          ctx.fillStyle = fill;
          ctx.fill();
        }
        if (stroke) {
          ctx.stroke();
        }
      };
  
      // 拉動拉霸機
      const pullLever = () => {
        if (spinning.value || !canPlay.value || !currentUser.value) return;
        
        leverPulled.value = true;
        spinning.value = true;
        result.value = null;
        
        // 檢查每日限制
        checkDailyLimit().then(canContinue => {
          if (!canContinue) {
            spinning.value = false;
            leverPulled.value = false;
            return;
          }
          
          // 開始旋轉動畫
          spinReels();
          
          // 拉桿動畫結束後回彈
          setTimeout(() => {
            leverPulled.value = false;
          }, 1000);
        });
      };
  
      // 檢查每日限制
      const checkDailyLimit = async () => {
        if (!currentUser.value) return false;
        
        const db = getDatabase();
        const userRef = dbRef(db, `users/${currentUser.value.uid}`);
        const snapshot = await get(userRef);
        
        const today = new Date().toDateString();
        let playCount = 0;
        let lastPlayDate = '';
        
        if (snapshot.exists()) {
          const userData = snapshot.val();
          playCount = userData.playCount || 0;
          lastPlayDate = userData.lastPlayDate || '';
        }
        
        if (lastPlayDate === today) {
          if (playCount >= 100) { // 每天可以玩100次
            canPlay.value = false;
            alert('今天已經玩滿100次了，明天再來吧！');
            return false;
          }
          playCount += 1;
        } else {
          // 新的一天，重設計數
          playCount = 1;
          lastPlayDate = today;
        }
        
        // 更新遊戲次數和日期
        await set(dbRef(db, `users/${currentUser.value.uid}/playCount`), playCount);
        await set(dbRef(db, `users/${currentUser.value.uid}/lastPlayDate`), lastPlayDate);
        await set(dbRef(db, `users/${currentUser.value.uid}/lastPlay`), serverTimestamp());
        
        return true;
      };
  
      // 轉動轉輪
      const spinReels = () => {
        // 決定最終結果
        const finalPositions = determineResult();
        
        // 設定每個轉輪的最終位置
        for (let i = 0; i < reels.value.length; i++) {
          const reel = reels.value[i];
          if (reel && i < finalPositions.length && finalPositions[i] !== undefined) {
            reel.finalPosition = finalPositions[i] as number;
            reel.spinning = true;
          }
        }
        
        // 開始動畫
        let frames = 0;
        const maxFrames = 60; // 總幀數
        const animationDuration = 3000; // 總動畫時間 (ms)
        const frameInterval = animationDuration / maxFrames;
        
        // 設定每個轉輪停止的時間差 (第一個最快停，第三個最慢停)
        const stopFrames = [
          Math.floor(maxFrames * 0.6), // 第一個轉輪停止的幀數
          Math.floor(maxFrames * 0.8), // 第二個轉輪停止的幀數
          maxFrames                     // 第三個轉輪停止的幀數
        ];
        
        const animate = () => {
          frames++;
          
          // 更新轉輪位置
          for (let i = 0; i < reels.value.length; i++) {
            const reel = reels.value[i];
            if (!reel) continue;
            
            const stopFrame = stopFrames[i];
            if (stopFrame !== undefined && frames < stopFrame) {
              // 還在旋轉
              reel.position = (reel.position + 1) % reel.symbols.length;
            } else if (stopFrame !== undefined && frames === stopFrame) {
              // 開始減速並停在指定位置
              reel.position = reel.finalPosition;
              reel.spinning = false;
              
              // 播放停止音效 (如果有)
              playStopSound();
            }
          }
          
          // 重繪拉霸機
          drawSlotMachine();
          
          // 檢查是否所有轉輪都停止了
          if (frames < maxFrames) {
            // 還有轉輪在旋轉，繼續動畫
            setTimeout(() => {
              requestAnimationFrame(animate);
            }, frameInterval);
          } else {
            // 所有轉輪都停止了，顯示結果
            spinning.value = false;
            showResult();
          }
        };
        
        // 開始動畫
        animate();
      };
      
      // 播放停止音效 (可選功能)
      const playStopSound = () => {
        // 如果有音效資源，可以在這裡播放
        // const audio = new Audio('path/to/stop-sound.mp3');
        // audio.play();
      };
  
      // 決定最終結果 (可以根據概率或其他邏輯來決定)
      const determineResult = (): number[] => {
        // 在這個示例中，我們指定三個轉輪的最終位置
        // 這裡可以根據需要實現不同的邏輯，例如：
        // 1. 完全隨機
        // 2. 根據機率表決定獎項
        // 3. 指定特定組合
        
        // 示例：隨機決定最終位置
        const positions: number[] = reels.value.map(reel => 
          reel ? Math.floor(Math.random() * reel.symbols.length) : 0
        );
        
        // 控制組合機率 (可選)
        const random = Math.random();
        
        // 機率決定出特殊組合
        if (random < 0.1) {
          // 10% 機率出現三個動詞
          const verbPositions: number[] = [];
          for (let i = 0; i < reels.value.length; i++) {
            const reel = reels.value[i];
            if (reel) {
              const verbIndex = reel.symbols.findIndex(s => s.type === 'verb');
              verbPositions.push(verbIndex >= 0 ? verbIndex : positions[i] || 0);
            } else {
              verbPositions.push(0);
            }
          }
          return verbPositions;
        } else if (random < 0.2) {
          // 10% 機率出現一動詞+一名詞+一emoji
          const reel0 = reels.value[0];
          const reel1 = reels.value[1];
          const reel2 = reels.value[2];
          
          const indices: number[] = [
            reel0 && reel0.symbols ? reel0.symbols.findIndex(s => s.type === 'verb') : -1,
            reel1 && reel1.symbols ? reel1.symbols.findIndex(s => s.type === 'noun') : -1,
            reel2 && reel2.symbols ? reel2.symbols.findIndex(s => s.type === 'special') : -1
          ];
          return indices.map(idx => idx >= 0 ? idx : Math.floor(Math.random() * symbols.length));
        } else if (random < 0.25) {
          // 5% 機率出現雙七
          const sevenIndex = symbols.findIndex(s => s.emoji === '7️⃣');
          if (sevenIndex >= 0) {
            positions[0] = sevenIndex;
            positions[1] = sevenIndex;
          }
        }
        
        return positions;
      };
  
      // 顯示結果
      const showResult = async () => {
        if (!currentUser.value) return;
        
        // 獲取最終結果
        const finalSymbols: (Symbol | undefined)[] = reels.value.map(reel => 
          reel ? reel.symbols[reel.position] : undefined
        );
        
        // 檢查是否有 undefined 的符號
        const validSymbols = finalSymbols.every(s => s !== undefined);
        if (!validSymbols) {
          console.error('Invalid symbols found in result');
          return;
        }
        
        // 檢查組合並決定獎勵
        let resultTitle = '再接再厲！';
        let resultDescription = '下次再來試試看吧！';
        let resultTask = undefined;
        let points = 0;
        
        // 動詞組合
        const allVerbs = finalSymbols.every(s => s?.type === 'verb');
        if (allVerbs) {
          resultTitle = '動詞組合！';
          resultDescription = `你抽到了：${finalSymbols.map(s => s?.value).join(', ')}`;
          resultTask = '請用其中一個動詞造句';
          points = 3;
        } 
        // 名詞組合
        else if (finalSymbols.every(s => s?.type === 'noun')) {
          resultTitle = '名詞組合！';
          resultDescription = `你抽到了：${finalSymbols.map(s => s?.value).join(', ')}`;
          resultTask = '請描述其中一個物品的功能';
          points = 3;
        } 
        // 形容詞組合
        else if (finalSymbols.every(s => s?.type === 'adjective')) {
          resultTitle = '形容詞組合！';
          resultDescription = `你抽到了：${finalSymbols.map(s => s?.value).join(', ')}`;
          resultTask = '請用其中一個形容詞描述你的心情';
          points = 3;
        } 
        // 特殊組合：動詞+名詞+emoji
        else if (
          finalSymbols.some(s => s?.type === 'verb') &&
          finalSymbols.some(s => s?.type === 'noun') &&
          finalSymbols.some(s => s?.type === 'special')
        ) {
          resultTitle = '特殊組合！';
          resultDescription = `你抽到了：${finalSymbols.map(s => s?.value).join(', ')}`;
          resultTask = '請翻譯這組搭配的句子';
          points = 2;
        } 
        // 雙七組合
        else if (finalSymbols.filter(s => s?.emoji === '7️⃣').length >= 2) {
          resultTitle = '雙七組合！';
          resultDescription = '恭喜獲得 Bonus 問答題！';
          resultTask = '開始問答';
          points = 5;
        } 
        // 三個燈泡
        else if (finalSymbols.every(s => s?.emoji === '💡')) {
          resultTitle = '幸運組合！';
          resultDescription = '你獲得了知識小卡片！';
          resultTask = '查看小知識';
          points = 1;
        }
        
        // 設定結果
        const resultData: Result = {
          title: resultTitle,
          description: resultDescription,
          points: points
        };
        
        if (resultTask) {
          resultData.task = resultTask;
        }
        
        result.value = resultData;
        
        // 重置任務狀態
        textTaskAnswer.value = '';
        radioTaskAnswer.value = '';
        checkboxTaskAnswer.value = false;
        taskCompleted.value = false;
        taskFeedback.value = '';
        
        // 準備任務內容
        if (resultTask) {
          prepareTasks(finalSymbols.filter((s): s is Symbol => s !== undefined));
        }
        
        // 儲存遊戲記錄到資料庫
        await saveGameRecord(finalSymbols.filter((s): s is Symbol => s !== undefined), points);
      };
  
      // 準備不同類型的任務內容
      const prepareTasks = (symbols: Symbol[]) => {
        if (!result.value || !result.value.title) return;
        
        // 根據結果類型準備不同的任務
        if (result.value.title.includes('特殊')) {
          // 特殊組合：生成一個句子供用戶翻譯
          const verb = symbols.find(s => s.type === 'verb')?.value || '';
          const noun = symbols.find(s => s.type === 'noun')?.value || '';
          const special = symbols.find(s => s.type === 'special')?.emoji || '';
          
          specialCombinationSentence.value = `I ${verb} the ${noun} when I see ${special}.`;
        } 
        else if (result.value.title.includes('雙七')) {
          // 雙七問答題：從資料庫獲取一個隨機問題
          fetchBonusQuestion();
        } 
        else if (result.value.title.includes('幸運')) {
          // 幸運小知識：準備一個英文小知識卡片
          prepareKnowledgeCard();
        }
      };
      
      // 獲取隨機問答題
      const fetchBonusQuestion = async () => {
        try {
          const db = getDatabase();
          const questionsRef = dbRef(db, 'bonusQuestions');
          const snapshot = await get(questionsRef);
          
          if (snapshot.exists()) {
            const questions = snapshot.val();
            const keys = Object.keys(questions);
            if (keys.length > 0) {
              const randomKey = keys[Math.floor(Math.random() * keys.length)];
              const question = questions[randomKey as keyof typeof questions];
              
              bonusQuestion.value = question.question;
              bonusOptions.value = question.options;
              bonusCorrectAnswer.value = question.answer;
            } else {
              useDefaultBonusQuestion();
            }
          } else {
            useDefaultBonusQuestion();
          }
        } catch (error) {
          console.error('獲取問答題失敗:', error);
          useDefaultBonusQuestion();
        }
      };
      
      // 使用默認問答題
      const useDefaultBonusQuestion = () => {
        bonusQuestion.value = "Which of these is NOT a part of speech in English?";
        bonusOptions.value = {
          A: "Noun",
          B: "Adjective",
          C: "Transitive",
          D: "Adverb"
        };
        bonusCorrectAnswer.value = "C";
      };
      
      // 準備知識卡片
      const prepareKnowledgeCard = async () => {
        try {
          const db = getDatabase();
          const cardsRef = dbRef(db, 'knowledgeCards');
          const snapshot = await get(cardsRef);
          
          if (snapshot.exists()) {
            const cards = snapshot.val();
            const keys = Object.keys(cards);
            if (keys.length > 0) {
              const randomKey = keys[Math.floor(Math.random() * keys.length)];
              const card = cards[randomKey as keyof typeof cards];
              
              knowledgeCard.value = card;
            } else {
              useDefaultKnowledgeCard();
            }
          } else {
            useDefaultKnowledgeCard();
          }
        } catch (error) {
          console.error('獲取知識卡片失敗:', error);
          useDefaultKnowledgeCard();
        }
      };
      
      // 使用默認知識卡片
      const useDefaultKnowledgeCard = () => {
        knowledgeCard.value = {
          title: "英文學習小技巧",
          content: "研究表明，每天學習10-15個新單詞並立即使用它們造句，能夠顯著提高你的詞彙量和記憶效果。",
          tip: "嘗試在日常生活中尋找機會使用新學的單詞，這樣能夠更好地鞏固記憶。"
        };
      };
      
      // 提交任務答案
      const submitTask = async () => {
        if (!currentUser.value || !result.value || !isTaskAnswerValid.value) return;
        
        try {
          // 儲存任務完成記錄
          const db = getDatabase();
          const taskRecordsRef = dbRef(db, `taskRecords/${currentUser.value.uid}`);
          const newTaskRef = push(taskRecordsRef);
          
          let correct = true;
          let extraPoints = 0;
          let answerValue: string | boolean = '';
          
          // 根據任務類型確定答案值和驗證答案
          if (result.value.title.includes('動詞') || 
              result.value.title.includes('名詞') || 
              result.value.title.includes('形容詞') || 
              result.value.title.includes('特殊')) {
            answerValue = textTaskAnswer.value;
            extraPoints = 1;
            taskFeedback.value = "感謝你完成今天的學習任務！";
          } else if (result.value.title.includes('雙七')) {
            // 問答題驗證
            answerValue = radioTaskAnswer.value;
            correct = radioTaskAnswer.value === bonusCorrectAnswer.value;
            extraPoints = correct ? 2 : 0;
            taskFeedback.value = correct ? 
              "答對了！獲得額外的獎勵點數！" : 
              `答錯了！正確答案是 ${bonusCorrectAnswer.value}`;
          } else if (result.value.title.includes('幸運')) {
            answerValue = checkboxTaskAnswer.value;
            extraPoints = 1;
            taskFeedback.value = "感謝你完成今天的學習任務！";
          } else {
            // 其他任務
            extraPoints = 1;
            taskFeedback.value = "感謝你完成今天的學習任務！";
          }
          
          // 記錄任務完成
          await set(newTaskRef, {
            taskType: getTaskType(),
            answer: answerValue,
            correct: correct,
            points: result.value.points + extraPoints,
            timestamp: serverTimestamp()
          });
          
          // 如果有額外獎勵點數，更新用戶積分
          if (extraPoints > 0) {
            const userRef = dbRef(db, `users/${currentUser.value.uid}`);
            const userSnapshot = await get(userRef);
            const currentPoints = userSnapshot.exists() ? (userSnapshot.val().points || 0) : 0;
            await set(dbRef(db, `users/${currentUser.value.uid}/points`), currentPoints + extraPoints);
          }
          
          // 設置任務完成狀態
          taskCompleted.value = true;
          
        } catch (error) {
          console.error('提交任務失敗:', error);
          alert('提交任務時發生錯誤，請稍後再試。');
        }
      };
      
      // 獲取任務類型
      const getTaskType = (): string => {
        if (!result.value) return 'unknown';
        
        if (result.value.title.includes('動詞')) return 'verb';
        if (result.value.title.includes('名詞')) return 'noun';
        if (result.value.title.includes('形容詞')) return 'adjective';
        if (result.value.title.includes('特殊')) return 'special';
        if (result.value.title.includes('雙七')) return 'bonus';
        if (result.value.title.includes('幸運')) return 'knowledge';
        
        return 'unknown';
      };
  
      // 儲存遊戲記錄
      const saveGameRecord = async (symbols: Symbol[], points: number) => {
        if (!currentUser.value) return;
        
        const db = getDatabase();
        
        try {
          // 儲存遊戲記錄
          const gameRecordsRef = dbRef(db, `gameRecords/${currentUser.value.uid}`);
          const newRecordRef = push(gameRecordsRef);
          await set(newRecordRef, {
            symbols: symbols.map(s => ({
              type: s.type,
              value: s.value,
              emoji: s.emoji,
              category: s.category,
              text: s.text
            })),
            points: points,
            timestamp: serverTimestamp()
          });
          
          // 更新用戶積分
          const userRef = dbRef(db, `users/${currentUser.value.uid}`);
          const userSnapshot = await get(userRef);
          const currentPoints = userSnapshot.exists() ? (userSnapshot.val().points || 0) : 0;
          await set(dbRef(db, `users/${currentUser.value.uid}/points`), currentPoints + points);
          
          // 新增通知
          const notificationsRef = dbRef(db, `users/${currentUser.value.uid}/notifications`);
          const newNotificationRef = push(notificationsRef);
          await set(newNotificationRef, {
            type: 'gameResult',
            message: `拉霸結果：${result.value?.title}，獲得 ${points} 點！`,
            timestamp: serverTimestamp(),
            read: false
          });
        } catch (error) {
          console.error('儲存遊戲記錄失敗:', error);
        }
      };
  
      // 強制重繪
      const forceRedraw = () => {
        console.log("手動觸發重繪");
        
        // 重新初始化Canvas
        if (slotCanvas.value) {
          ctx.value = slotCanvas.value.getContext('2d');
          
          // 檢查轉輪是否有符號
          for (let i = 0; i < reels.value.length; i++) {
            const reel = reels.value[i];
            if (reel && reel.symbols.length === 0) {
              reel.symbols = [...symbols].sort(() => Math.random() - 0.5);
              reel.position = Math.floor(Math.random() * reel.symbols.length);
              console.log(`重新初始化轉輪 ${i} 的符號`);
            }
          }
          
          // 重繪畫面
          drawSlotMachine();
        } else {
          console.error("Canvas元素不存在，無法重繪");
        }
      };
  
      // 初始化頁面
      onMounted(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
          currentUser.value = user;
          isLoading.value = false;
          
          // 使用nextTick確保DOM已經渲染完成
          nextTick(() => {
            console.log("DOM已更新，準備初始化Canvas");
            // 畫面已載入，初始化Canvas
            if (slotCanvas.value) {
              initCanvas();
              
              // 確保畫面繪製，延遲一些執行繪製，讓DOM完全加載
              setTimeout(() => {
                drawSlotMachine();
                console.log('繪製拉霸機畫面');
              }, 500);
            } else {
              console.error("Canvas元素未找到");
            }
          });
        });
      });
  
      // 清理資源
      onUnmounted(() => {
        // 如果有任何需要清理的資源，例如計時器等
      });
  
      return {
        slotCanvas,
        canPlay,
        spinning,
        leverPulled,
        currentUser,
        result,
        pullLever,
        forceRedraw,
        textTaskAnswer,
        radioTaskAnswer,
        checkboxTaskAnswer,
        taskCompleted,
        taskFeedback,
        specialCombinationSentence,
        bonusQuestion,
        bonusOptions,
        bonusCorrectAnswer,
        knowledgeCard,
        isTaskAnswerValid,
        submitTask,
        useDefaultBonusQuestion,
        useDefaultKnowledgeCard
      }
    }
  })
  </script>
  
  <style scoped>
  .slot-machine-container {
    position: relative;
    width: 600px;
    height: 400px;
    background-color: #f5f5f7;
    padding: 0;
    border-radius: 16px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: visible;
    border: 1px solid #e6e6eb;
  }
  
  canvas {
    display: block;
    border-radius: 12px;
    z-index: 10;
    position: relative;
  }
  
  .slot-lever {
    position: absolute;
    right: -50px;
    top: 150px;
    cursor: pointer;
    transition: transform 0.3s ease;
    z-index: 15;
  }
  
  .lever-grip {
    width: 30px;
    height: 30px;
    background-color: #0070ff;
    border-radius: 50%;
    margin-bottom: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  .lever-stick {
    width: 10px;
    height: 80px;
    background-color: #1a84ff;
    margin: 0 auto;
    border-radius: 5px;
  }
  
  .lever-base {
    width: 40px;
    height: 15px;
    background-color: #0070ff;
    border-radius: 5px;
    margin-top: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .lever-pulled {
    transform: rotate(30deg);
  }
  
  .result-container {
    margin-top: 20px;
    padding: 24px;
    background-color: white;
    border-radius: 16px;
    width: 600px;
    border: 1px solid #e6e6eb;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  }
  
  .result-title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 12px;
    color: #1a1a1a;
  }
  
  .result-description {
    font-size: 16px;
    margin-bottom: 16px;
    color: #404040;
    line-height: 1.5;
  }
  
  .task-container {
    background-color: #f5f8ff;
    padding: 16px;
    border-radius: 12px;
    margin-bottom: 16px;
    border-left: 4px solid #0070ff;
  }
  
  .task-input-container {
    margin-top: 16px;
  }
  
  .task-instruction {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
    color: #1a1a1a;
  }
  
  .task-input {
    width: 100%;
    padding: 12px;
    border: 1px solid #e6e6eb;
    border-radius: 8px;
  }
  
  .task-actions {
    text-align: right;
  }
  
  .task-completed-container {
    text-align: center;
  }
  
  .task-completed-message {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
    color: #1a1a1a;
  }
  
  .task-feedback {
    font-size: 16px;
    color: #404040;
  }
  
  .knowledge-card {
    background-color: #f0f7ff;
    border-radius: 12px;
    padding: 16px;
    margin-bottom: 16px;
    border-left: 4px solid #0070ff;
  }
  
  .knowledge-title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 12px;
    color: #1a1a1a;
  }
  
  .knowledge-content {
    font-size: 16px;
    line-height: 1.5;
    color: #404040;
    margin-bottom: 12px;
  }
  
  .knowledge-tip {
    font-size: 15px;
    font-style: italic;
    color: #0070ff;
  }
  
  .translation-text {
    font-size: 18px;
    background-color: rgba(0, 112, 255, 0.1);
    padding: 12px;
    border-radius: 8px;
    color: #0070ff;
    font-weight: 500;
    margin-bottom: 16px;
  }
  
  .bonus-options {
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    margin-bottom: 16px;
  }
  
  .points-container {
    font-size: 18px;
    font-weight: 600;
    color: #0070ff;
  }
  
  .q-btn {
    text-transform: none;
    font-weight: 600;
    letter-spacing: 0.3px;
  }
  
  /* AT Protocol inspired color palette */
  :deep(.q-btn.primary) {
    background: #0070ff !important;
  }
  
  :deep(.q-btn.secondary) {
    background: #8e8e93 !important;
  }
  </style>
  
