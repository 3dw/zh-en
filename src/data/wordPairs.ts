export interface WordPair {
  word: string
  translation: string
  minScore: number
  maxScore: number
}

export const wordPairs: WordPair[] = [
  // ===== 初階單字 (0-3000分) =====

  // 基礎動物 (0-2000分)
  { word: 'cat', translation: '貓', minScore: 0, maxScore: 2000 },
  { word: 'dog', translation: '狗', minScore: 0, maxScore: 2000 },
  { word: 'bird', translation: '鳥', minScore: 0, maxScore: 2000 },
  { word: 'fish', translation: '魚', minScore: 0, maxScore: 2000 },
  { word: 'rabbit', translation: '兔子', minScore: 0, maxScore: 2000 },
  { word: 'tiger', translation: '老虎', minScore: 0, maxScore: 2000 },
  { word: 'lion', translation: '獅子', minScore: 0, maxScore: 2000 },
  { word: 'elephant', translation: '大象', minScore: 0, maxScore: 2000 },
  { word: 'zebra', translation: '斑馬', minScore: 0, maxScore: 2000 },
  { word: 'giraffe', translation: '長頸鹿', minScore: 0, maxScore: 2000 },
  { word: 'panda', translation: '熊貓', minScore: 0, maxScore: 2000 },

  // 基礎水果 (0-2500分)
  { word: 'apple', translation: '蘋果', minScore: 0, maxScore: 2500 },
  { word: 'banana', translation: '香蕉', minScore: 0, maxScore: 2500 },
  { word: 'orange', translation: '橘子', minScore: 0, maxScore: 2500 },
  { word: 'pear', translation: '梨', minScore: 0, maxScore: 2500 },
  { word: 'grape', translation: '葡萄', minScore: 0, maxScore: 2500 },
  { word: 'peach', translation: '桃子', minScore: 0, maxScore: 2500 },
  { word: 'cherry', translation: '櫻桃', minScore: 0, maxScore: 2500 },

  // 基礎家庭成員 (0-3000分)
  { word: 'father', translation: '爸爸', minScore: 0, maxScore: 3000 },
  { word: 'mother', translation: '媽媽', minScore: 0, maxScore: 3000 },
  { word: 'baby', translation: '嬰兒', minScore: 0, maxScore: 3000 },
  { word: 'child', translation: '小孩', minScore: 0, maxScore: 3000 },

  // 基礎動詞 (0-3000分)
  { word: 'run', translation: '跑步', minScore: 0, maxScore: 3000 },
  { word: 'walk', translation: '走路', minScore: 0, maxScore: 3000 },
  { word: 'jump', translation: '跳躍', minScore: 0, maxScore: 3000 },
  { word: 'eat', translation: '吃', minScore: 0, maxScore: 3000 },
  { word: 'drink', translation: '喝', minScore: 0, maxScore: 3000 },

  // ===== 進階單字 (1000-10000分) =====

  // 進階水果 (1000-5000分)
  { word: 'pineapple', translation: '鳳梨', minScore: 1000, maxScore: 5000 },
  { word: 'mango', translation: '芒果', minScore: 1000, maxScore: 5000 },
  { word: 'watermelon', translation: '西瓜', minScore: 1000, maxScore: 5000 },
  { word: 'strawberry', translation: '草莓', minScore: 1000, maxScore: 5000 },

  // 進階家庭成員 (2000-6000分)
  { word: 'brother', translation: '兄弟', minScore: 2000, maxScore: 6000 },
  { word: 'sister', translation: '姐妹', minScore: 2000, maxScore: 6000 },
  { word: 'grandfather', translation: '爺爺', minScore: 2000, maxScore: 6000 },
  { word: 'grandmother', translation: '奶奶', minScore: 2000, maxScore: 6000 },
  { word: 'uncle', translation: '叔叔', minScore: 2000, maxScore: 6000 },
  { word: 'aunt', translation: '阿姨', minScore: 2000, maxScore: 6000 },
  { word: 'cousin', translation: '堂兄弟姊妹', minScore: 2000, maxScore: 6000 },
  { word: 'grandchild', translation: '孫子', minScore: 2000, maxScore: 6000 },
  { word: 'grandparent', translation: '祖父母', minScore: 2000, maxScore: 6000 },

  // 進階動詞 (3000-7000分)
  { word: 'swim', translation: '游泳', minScore: 3000, maxScore: 7000 },
  { word: 'sleep', translation: '睡覺', minScore: 3000, maxScore: 7000 },
  { word: 'read', translation: '閱讀', minScore: 3000, maxScore: 7000 },
  { word: 'write', translation: '寫字', minScore: 3000, maxScore: 7000 },
  { word: 'draw', translation: '畫畫', minScore: 3000, maxScore: 7000 },
  { word: 'sing', translation: '唱歌', minScore: 3000, maxScore: 7000 },
  { word: 'dance', translation: '跳舞', minScore: 3000, maxScore: 7000 },
  { word: 'play', translation: '玩', minScore: 3000, maxScore: 7000 },

  // 高級動詞 (4000-8000分)
  { word: 'study', translation: '學習', minScore: 4000, maxScore: 8000 },
  { word: 'cook', translation: '煮飯', minScore: 4000, maxScore: 8000 },
  { word: 'clean', translation: '打掃', minScore: 4000, maxScore: 8000 },
  { word: 'wash', translation: '洗', minScore: 4000, maxScore: 8000 },
  { word: 'brush', translation: '刷', minScore: 4000, maxScore: 8000 },
  { word: 'smile', translation: '微笑', minScore: 4000, maxScore: 8000 },
  { word: 'laugh', translation: '大笑', minScore: 4000, maxScore: 8000 },

  // 家庭用品 (5000-9000分)
  { word: 'bed', translation: '床', minScore: 5000, maxScore: 9000 },
  { word: 'chair', translation: '椅子', minScore: 5000, maxScore: 9000 },
  { word: 'table', translation: '桌子', minScore: 5000, maxScore: 9000 },
  { word: 'sofa', translation: '沙發', minScore: 5000, maxScore: 9000 },
  { word: 'lamp', translation: '檯燈', minScore: 5000, maxScore: 9000 },
  { word: 'clock', translation: '時鐘', minScore: 5000, maxScore: 9000 },
  { word: 'mirror', translation: '鏡子', minScore: 5000, maxScore: 9000 },
  { word: 'window', translation: '窗戶', minScore: 5000, maxScore: 9000 },
  { word: 'door', translation: '門', minScore: 5000, maxScore: 9000 },
  { word: 'book', translation: '書', minScore: 5000, maxScore: 9000 },

  // 植物 (6000-10000分)
  { word: 'tree', translation: '樹', minScore: 6000, maxScore: 10000 },
  { word: 'flower', translation: '花', minScore: 6000, maxScore: 10000 },
  { word: 'grass', translation: '草', minScore: 6000, maxScore: 10000 },
  { word: 'leaf', translation: '葉子', minScore: 6000, maxScore: 10000 },
  { word: 'root', translation: '根', minScore: 6000, maxScore: 10000 },
  { word: 'stem', translation: '莖', minScore: 6000, maxScore: 10000 },
  { word: 'seed', translation: '種子', minScore: 6000, maxScore: 10000 },
  { word: 'branch', translation: '枝', minScore: 6000, maxScore: 10000 },
]
