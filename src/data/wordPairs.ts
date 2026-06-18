export interface WordPair {
  word: string
  translation: string
  minScore: number
  maxScore: number
  /** 字組分類（中文標籤），供跳跳人遊戲下拉選單切換，見 issue #128 */
  category: string
}

export const wordPairs: WordPair[] = [
  // ===== 初階單字 (0-3000分) =====

  // 基礎動物 (0-2000分)
  { word: 'cat', translation: '貓', minScore: 0, maxScore: 2000, category: '動物' },
  { word: 'dog', translation: '狗', minScore: 0, maxScore: 2000, category: '動物' },
  { word: 'bird', translation: '鳥', minScore: 0, maxScore: 2000, category: '動物' },
  { word: 'fish', translation: '魚', minScore: 0, maxScore: 2000, category: '動物' },
  { word: 'rabbit', translation: '兔子', minScore: 0, maxScore: 2000, category: '動物' },
  { word: 'tiger', translation: '老虎', minScore: 0, maxScore: 2000, category: '動物' },
  { word: 'lion', translation: '獅子', minScore: 0, maxScore: 2000, category: '動物' },
  { word: 'elephant', translation: '大象', minScore: 0, maxScore: 2000, category: '動物' },
  { word: 'zebra', translation: '斑馬', minScore: 0, maxScore: 2000, category: '動物' },
  { word: 'giraffe', translation: '長頸鹿', minScore: 0, maxScore: 2000, category: '動物' },
  { word: 'panda', translation: '熊貓', minScore: 0, maxScore: 2000, category: '動物' },

  // 基礎水果 (0-2500分)
  { word: 'apple', translation: '蘋果', minScore: 0, maxScore: 2500, category: '水果' },
  { word: 'banana', translation: '香蕉', minScore: 0, maxScore: 2500, category: '水果' },
  { word: 'orange', translation: '橘子', minScore: 0, maxScore: 2500, category: '水果' },
  { word: 'pear', translation: '梨', minScore: 0, maxScore: 2500, category: '水果' },
  { word: 'grape', translation: '葡萄', minScore: 0, maxScore: 2500, category: '水果' },
  { word: 'peach', translation: '桃子', minScore: 0, maxScore: 2500, category: '水果' },
  { word: 'cherry', translation: '櫻桃', minScore: 0, maxScore: 2500, category: '水果' },

  // 基礎家庭成員 (0-3000分)
  { word: 'father', translation: '爸爸', minScore: 0, maxScore: 3000, category: '家庭' },
  { word: 'mother', translation: '媽媽', minScore: 0, maxScore: 3000, category: '家庭' },
  { word: 'baby', translation: '嬰兒', minScore: 0, maxScore: 3000, category: '家庭' },
  { word: 'child', translation: '小孩', minScore: 0, maxScore: 3000, category: '家庭' },

  // 基礎動詞 (0-3000分)
  { word: 'run', translation: '跑步', minScore: 0, maxScore: 3000, category: '動作' },
  { word: 'walk', translation: '走路', minScore: 0, maxScore: 3000, category: '動作' },
  { word: 'jump', translation: '跳躍', minScore: 0, maxScore: 3000, category: '動作' },
  { word: 'eat', translation: '吃', minScore: 0, maxScore: 3000, category: '動作' },
  { word: 'drink', translation: '喝', minScore: 0, maxScore: 3000, category: '動作' },

  // ===== 進階單字 (1000-10000分) =====

  // 進階水果 (1000-5000分)
  { word: 'pineapple', translation: '鳳梨', minScore: 1000, maxScore: 5000, category: '水果' },
  { word: 'mango', translation: '芒果', minScore: 1000, maxScore: 5000, category: '水果' },
  { word: 'watermelon', translation: '西瓜', minScore: 1000, maxScore: 5000, category: '水果' },
  { word: 'strawberry', translation: '草莓', minScore: 1000, maxScore: 5000, category: '水果' },

  // 進階家庭成員 (2000-6000分)
  { word: 'brother', translation: '兄弟', minScore: 2000, maxScore: 6000, category: '家庭' },
  { word: 'sister', translation: '姐妹', minScore: 2000, maxScore: 6000, category: '家庭' },
  { word: 'grandfather', translation: '爺爺', minScore: 2000, maxScore: 6000, category: '家庭' },
  { word: 'grandmother', translation: '奶奶', minScore: 2000, maxScore: 6000, category: '家庭' },
  { word: 'uncle', translation: '叔叔', minScore: 2000, maxScore: 6000, category: '家庭' },
  { word: 'aunt', translation: '阿姨', minScore: 2000, maxScore: 6000, category: '家庭' },
  { word: 'cousin', translation: '堂兄弟姊妹', minScore: 2000, maxScore: 6000, category: '家庭' },
  { word: 'grandchild', translation: '孫子', minScore: 2000, maxScore: 6000, category: '家庭' },
  { word: 'grandparent', translation: '祖父母', minScore: 2000, maxScore: 6000, category: '家庭' },

  // 進階動詞 (3000-7000分)
  { word: 'swim', translation: '游泳', minScore: 3000, maxScore: 7000, category: '動作' },
  { word: 'sleep', translation: '睡覺', minScore: 3000, maxScore: 7000, category: '動作' },
  { word: 'read', translation: '閱讀', minScore: 3000, maxScore: 7000, category: '動作' },
  { word: 'write', translation: '寫字', minScore: 3000, maxScore: 7000, category: '動作' },
  { word: 'draw', translation: '畫畫', minScore: 3000, maxScore: 7000, category: '動作' },
  { word: 'sing', translation: '唱歌', minScore: 3000, maxScore: 7000, category: '動作' },
  { word: 'dance', translation: '跳舞', minScore: 3000, maxScore: 7000, category: '動作' },
  { word: 'play', translation: '玩', minScore: 3000, maxScore: 7000, category: '動作' },

  // 高級動詞 (4000-8000分)
  { word: 'study', translation: '學習', minScore: 4000, maxScore: 8000, category: '動作' },
  { word: 'cook', translation: '煮飯', minScore: 4000, maxScore: 8000, category: '動作' },
  { word: 'clean', translation: '打掃', minScore: 4000, maxScore: 8000, category: '動作' },
  { word: 'wash', translation: '洗', minScore: 4000, maxScore: 8000, category: '動作' },
  { word: 'brush', translation: '刷', minScore: 4000, maxScore: 8000, category: '動作' },
  { word: 'smile', translation: '微笑', minScore: 4000, maxScore: 8000, category: '動作' },
  { word: 'laugh', translation: '大笑', minScore: 4000, maxScore: 8000, category: '動作' },

  // 家庭用品 (5000-9000分)
  { word: 'bed', translation: '床', minScore: 5000, maxScore: 9000, category: '家居' },
  { word: 'chair', translation: '椅子', minScore: 5000, maxScore: 9000, category: '家居' },
  { word: 'table', translation: '桌子', minScore: 5000, maxScore: 9000, category: '家居' },
  { word: 'sofa', translation: '沙發', minScore: 5000, maxScore: 9000, category: '家居' },
  { word: 'lamp', translation: '檯燈', minScore: 5000, maxScore: 9000, category: '家居' },
  { word: 'clock', translation: '時鐘', minScore: 5000, maxScore: 9000, category: '家居' },
  { word: 'mirror', translation: '鏡子', minScore: 5000, maxScore: 9000, category: '家居' },
  { word: 'window', translation: '窗戶', minScore: 5000, maxScore: 9000, category: '家居' },
  { word: 'door', translation: '門', minScore: 5000, maxScore: 9000, category: '家居' },
  { word: 'book', translation: '書', minScore: 5000, maxScore: 9000, category: '家居' },

  // 植物 (6000-10000分)
  { word: 'tree', translation: '樹', minScore: 6000, maxScore: 10000, category: '植物' },
  { word: 'flower', translation: '花', minScore: 6000, maxScore: 10000, category: '植物' },
  { word: 'grass', translation: '草', minScore: 6000, maxScore: 10000, category: '植物' },
  { word: 'leaf', translation: '葉子', minScore: 6000, maxScore: 10000, category: '植物' },
  { word: 'root', translation: '根', minScore: 6000, maxScore: 10000, category: '植物' },
  { word: 'stem', translation: '莖', minScore: 6000, maxScore: 10000, category: '植物' },
  { word: 'seed', translation: '種子', minScore: 6000, maxScore: 10000, category: '植物' },
  { word: 'branch', translation: '枝', minScore: 6000, maxScore: 10000, category: '植物' },

  // ===== 高級單字 (10000-15000分) =====

  // 技術詞彙 (10000-12000分)
  { word: 'margin', translation: '邊距', minScore: 10000, maxScore: 12000, category: '資訊' },
  { word: 'padding', translation: '內邊距', minScore: 10000, maxScore: 12000, category: '資訊' },
  { word: 'border', translation: '邊框', minScore: 10000, maxScore: 12000, category: '資訊' },
  { word: 'background', translation: '背景', minScore: 10000, maxScore: 12000, category: '資訊' },
  { word: 'container', translation: '容器', minScore: 10000, maxScore: 12000, category: '資訊' },
  { word: 'function', translation: '函數', minScore: 10000, maxScore: 12000, category: '資訊' },
  { word: 'variable', translation: '變數', minScore: 10000, maxScore: 12000, category: '資訊' },
  { word: 'parameter', translation: '參數', minScore: 10000, maxScore: 12000, category: '資訊' },

  // 抽象概念 (11000-13000分)
  { word: 'information', translation: '資訊', minScore: 11000, maxScore: 13000, category: '抽象' },
  { word: 'knowledge', translation: '知識', minScore: 11000, maxScore: 13000, category: '抽象' },
  { word: 'experience', translation: '經驗', minScore: 11000, maxScore: 13000, category: '抽象' },
  { word: 'education', translation: '教育', minScore: 11000, maxScore: 13000, category: '抽象' },
  { word: 'development', translation: '發展', minScore: 11000, maxScore: 13000, category: '抽象' },
  { word: 'improvement', translation: '改善', minScore: 11000, maxScore: 13000, category: '抽象' },
  { word: 'progress', translation: '進步', minScore: 11000, maxScore: 13000, category: '抽象' },
  { word: 'achievement', translation: '成就', minScore: 11000, maxScore: 13000, category: '抽象' },

  // 商業詞彙 (12000-14000分)
  { word: 'industry', translation: '產業', minScore: 12000, maxScore: 14000, category: '商業' },
  { word: 'business', translation: '商業', minScore: 12000, maxScore: 14000, category: '商業' },
  { word: 'company', translation: '公司', minScore: 12000, maxScore: 14000, category: '商業' },
  { word: 'organization', translation: '組織', minScore: 12000, maxScore: 14000, category: '商業' },
  { word: 'management', translation: '管理', minScore: 12000, maxScore: 14000, category: '商業' },
  { word: 'strategy', translation: '策略', minScore: 12000, maxScore: 14000, category: '商業' },
  { word: 'marketing', translation: '行銷', minScore: 12000, maxScore: 14000, category: '商業' },
  { word: 'finance', translation: '財務', minScore: 12000, maxScore: 14000, category: '商業' },

  // 學術詞彙 (13000-15000分)
  { word: 'research', translation: '研究', minScore: 13000, maxScore: 15000, category: '研究' },
  { word: 'analysis', translation: '分析', minScore: 13000, maxScore: 15000, category: '研究' },
  { word: 'theory', translation: '理論', minScore: 13000, maxScore: 15000, category: '研究' },
  { word: 'methodology', translation: '方法論', minScore: 13000, maxScore: 15000, category: '研究' },
  { word: 'hypothesis', translation: '假設', minScore: 13000, maxScore: 15000, category: '研究' },
  { word: 'conclusion', translation: '結論', minScore: 13000, maxScore: 15000, category: '研究' },
  { word: 'evidence', translation: '證據', minScore: 13000, maxScore: 15000, category: '研究' },
  { word: 'argument', translation: '論點', minScore: 13000, maxScore: 15000, category: '研究' },

  // 社會詞彙 (14000-15000分)
  { word: 'society', translation: '社會', minScore: 14000, maxScore: 15000, category: '社會' },
  { word: 'culture', translation: '文化', minScore: 14000, maxScore: 15000, category: '社會' },
  { word: 'community', translation: '社群', minScore: 14000, maxScore: 15000, category: '社會' },
  { word: 'environment', translation: '環境', minScore: 14000, maxScore: 15000, category: '社會' },
  { word: 'technology', translation: '科技', minScore: 14000, maxScore: 15000, category: '社會' },
  { word: 'innovation', translation: '創新', minScore: 14000, maxScore: 15000, category: '社會' },
  { word: 'sustainability', translation: '永續性', minScore: 14000, maxScore: 15000, category: '社會' },
  { word: 'collaboration', translation: '合作', minScore: 14000, maxScore: 15000, category: '社會' },
  { word: 'communication', translation: '溝通', minScore: 14000, maxScore: 15000, category: '社會' },
  { word: 'conflict', translation: '衝突', minScore: 14000, maxScore: 15000, category: '社會' },
  { word: 'cooperation', translation: '合作', minScore: 14000, maxScore: 15000, category: '社會' },
  { word: 'competition', translation: '競爭', minScore: 14000, maxScore: 15000, category: '社會' },

  // ===== 字組分類單字（不分難度，整組可用，見 issue #128） =====

  // 情緒 (Emotions)
  { word: 'happy', translation: '快樂', minScore: 0, maxScore: 15000, category: '情緒' },
  { word: 'sad', translation: '難過', minScore: 0, maxScore: 15000, category: '情緒' },
  { word: 'angry', translation: '生氣', minScore: 0, maxScore: 15000, category: '情緒' },
  { word: 'scared', translation: '害怕', minScore: 0, maxScore: 15000, category: '情緒' },
  { word: 'surprised', translation: '驚訝', minScore: 0, maxScore: 15000, category: '情緒' },
  { word: 'excited', translation: '興奮', minScore: 0, maxScore: 15000, category: '情緒' },
  { word: 'tired', translation: '疲倦', minScore: 0, maxScore: 15000, category: '情緒' },
  { word: 'bored', translation: '無聊', minScore: 0, maxScore: 15000, category: '情緒' },
  { word: 'nervous', translation: '緊張', minScore: 0, maxScore: 15000, category: '情緒' },
  { word: 'calm', translation: '平靜', minScore: 0, maxScore: 15000, category: '情緒' },
  { word: 'proud', translation: '驕傲', minScore: 0, maxScore: 15000, category: '情緒' },
  { word: 'lonely', translation: '孤單', minScore: 0, maxScore: 15000, category: '情緒' },
  { word: 'worried', translation: '擔心', minScore: 0, maxScore: 15000, category: '情緒' },
  { word: 'jealous', translation: '嫉妒', minScore: 0, maxScore: 15000, category: '情緒' },
  { word: 'confused', translation: '困惑', minScore: 0, maxScore: 15000, category: '情緒' },
  { word: 'relaxed', translation: '放鬆', minScore: 0, maxScore: 15000, category: '情緒' },

  // 身體 (Body)
  { word: 'head', translation: '頭', minScore: 0, maxScore: 15000, category: '身體' },
  { word: 'hair', translation: '頭髮', minScore: 0, maxScore: 15000, category: '身體' },
  { word: 'eye', translation: '眼睛', minScore: 0, maxScore: 15000, category: '身體' },
  { word: 'ear', translation: '耳朵', minScore: 0, maxScore: 15000, category: '身體' },
  { word: 'nose', translation: '鼻子', minScore: 0, maxScore: 15000, category: '身體' },
  { word: 'mouth', translation: '嘴巴', minScore: 0, maxScore: 15000, category: '身體' },
  { word: 'tooth', translation: '牙齒', minScore: 0, maxScore: 15000, category: '身體' },
  { word: 'tongue', translation: '舌頭', minScore: 0, maxScore: 15000, category: '身體' },
  { word: 'neck', translation: '脖子', minScore: 0, maxScore: 15000, category: '身體' },
  { word: 'shoulder', translation: '肩膀', minScore: 0, maxScore: 15000, category: '身體' },
  { word: 'arm', translation: '手臂', minScore: 0, maxScore: 15000, category: '身體' },
  { word: 'hand', translation: '手', minScore: 0, maxScore: 15000, category: '身體' },
  { word: 'finger', translation: '手指', minScore: 0, maxScore: 15000, category: '身體' },
  { word: 'leg', translation: '腿', minScore: 0, maxScore: 15000, category: '身體' },
  { word: 'foot', translation: '腳', minScore: 0, maxScore: 15000, category: '身體' },
  { word: 'knee', translation: '膝蓋', minScore: 0, maxScore: 15000, category: '身體' },
  { word: 'heart', translation: '心臟', minScore: 0, maxScore: 15000, category: '身體' },
  { word: 'bone', translation: '骨頭', minScore: 0, maxScore: 15000, category: '身體' },

  // 工具 (Tools)
  { word: 'hammer', translation: '鎚子', minScore: 0, maxScore: 15000, category: '工具' },
  { word: 'saw', translation: '鋸子', minScore: 0, maxScore: 15000, category: '工具' },
  { word: 'screwdriver', translation: '螺絲起子', minScore: 0, maxScore: 15000, category: '工具' },
  { word: 'wrench', translation: '扳手', minScore: 0, maxScore: 15000, category: '工具' },
  { word: 'nail', translation: '釘子', minScore: 0, maxScore: 15000, category: '工具' },
  { word: 'screw', translation: '螺絲', minScore: 0, maxScore: 15000, category: '工具' },
  { word: 'drill', translation: '電鑽', minScore: 0, maxScore: 15000, category: '工具' },
  { word: 'knife', translation: '刀子', minScore: 0, maxScore: 15000, category: '工具' },
  { word: 'scissors', translation: '剪刀', minScore: 0, maxScore: 15000, category: '工具' },
  { word: 'ruler', translation: '尺', minScore: 0, maxScore: 15000, category: '工具' },
  { word: 'pliers', translation: '鉗子', minScore: 0, maxScore: 15000, category: '工具' },
  { word: 'rope', translation: '繩子', minScore: 0, maxScore: 15000, category: '工具' },
  { word: 'ladder', translation: '梯子', minScore: 0, maxScore: 15000, category: '工具' },
  { word: 'shovel', translation: '鏟子', minScore: 0, maxScore: 15000, category: '工具' },
  { word: 'glue', translation: '膠水', minScore: 0, maxScore: 15000, category: '工具' },

  // 數學 (Math)
  { word: 'number', translation: '數字', minScore: 0, maxScore: 15000, category: '數學' },
  { word: 'add', translation: '加', minScore: 0, maxScore: 15000, category: '數學' },
  { word: 'subtract', translation: '減', minScore: 0, maxScore: 15000, category: '數學' },
  { word: 'multiply', translation: '乘', minScore: 0, maxScore: 15000, category: '數學' },
  { word: 'divide', translation: '除', minScore: 0, maxScore: 15000, category: '數學' },
  { word: 'sum', translation: '總和', minScore: 0, maxScore: 15000, category: '數學' },
  { word: 'equal', translation: '等於', minScore: 0, maxScore: 15000, category: '數學' },
  { word: 'angle', translation: '角度', minScore: 0, maxScore: 15000, category: '數學' },
  { word: 'circle', translation: '圓形', minScore: 0, maxScore: 15000, category: '數學' },
  { word: 'square', translation: '正方形', minScore: 0, maxScore: 15000, category: '數學' },
  { word: 'triangle', translation: '三角形', minScore: 0, maxScore: 15000, category: '數學' },
  { word: 'rectangle', translation: '長方形', minScore: 0, maxScore: 15000, category: '數學' },
  { word: 'fraction', translation: '分數', minScore: 0, maxScore: 15000, category: '數學' },
  { word: 'decimal', translation: '小數', minScore: 0, maxScore: 15000, category: '數學' },
  { word: 'percent', translation: '百分比', minScore: 0, maxScore: 15000, category: '數學' },
  { word: 'count', translation: '計算', minScore: 0, maxScore: 15000, category: '數學' },

  // 科學 (Science)
  { word: 'atom', translation: '原子', minScore: 0, maxScore: 15000, category: '科學' },
  { word: 'molecule', translation: '分子', minScore: 0, maxScore: 15000, category: '科學' },
  { word: 'energy', translation: '能量', minScore: 0, maxScore: 15000, category: '科學' },
  { word: 'gravity', translation: '重力', minScore: 0, maxScore: 15000, category: '科學' },
  { word: 'force', translation: '力', minScore: 0, maxScore: 15000, category: '科學' },
  { word: 'matter', translation: '物質', minScore: 0, maxScore: 15000, category: '科學' },
  { word: 'cell', translation: '細胞', minScore: 0, maxScore: 15000, category: '科學' },
  { word: 'gene', translation: '基因', minScore: 0, maxScore: 15000, category: '科學' },
  { word: 'planet', translation: '行星', minScore: 0, maxScore: 15000, category: '科學' },
  { word: 'star', translation: '星星', minScore: 0, maxScore: 15000, category: '科學' },
  { word: 'gas', translation: '氣體', minScore: 0, maxScore: 15000, category: '科學' },
  { word: 'liquid', translation: '液體', minScore: 0, maxScore: 15000, category: '科學' },
  { word: 'solid', translation: '固體', minScore: 0, maxScore: 15000, category: '科學' },
  { word: 'chemical', translation: '化學物質', minScore: 0, maxScore: 15000, category: '科學' },
  { word: 'experiment', translation: '實驗', minScore: 0, maxScore: 15000, category: '科學' },
  { word: 'temperature', translation: '溫度', minScore: 0, maxScore: 15000, category: '科學' },

  // 學校 (School)
  { word: 'teacher', translation: '老師', minScore: 0, maxScore: 15000, category: '學校' },
  { word: 'student', translation: '學生', minScore: 0, maxScore: 15000, category: '學校' },
  { word: 'classroom', translation: '教室', minScore: 0, maxScore: 15000, category: '學校' },
  { word: 'desk', translation: '書桌', minScore: 0, maxScore: 15000, category: '學校' },
  { word: 'pencil', translation: '鉛筆', minScore: 0, maxScore: 15000, category: '學校' },
  { word: 'pen', translation: '筆', minScore: 0, maxScore: 15000, category: '學校' },
  { word: 'eraser', translation: '橡皮擦', minScore: 0, maxScore: 15000, category: '學校' },
  { word: 'notebook', translation: '筆記本', minScore: 0, maxScore: 15000, category: '學校' },
  { word: 'backpack', translation: '書包', minScore: 0, maxScore: 15000, category: '學校' },
  { word: 'blackboard', translation: '黑板', minScore: 0, maxScore: 15000, category: '學校' },
  { word: 'homework', translation: '作業', minScore: 0, maxScore: 15000, category: '學校' },
  { word: 'lesson', translation: '課程', minScore: 0, maxScore: 15000, category: '學校' },
  { word: 'exam', translation: '考試', minScore: 0, maxScore: 15000, category: '學校' },
  { word: 'subject', translation: '科目', minScore: 0, maxScore: 15000, category: '學校' },
  { word: 'library', translation: '圖書館', minScore: 0, maxScore: 15000, category: '學校' },
  { word: 'recess', translation: '下課', minScore: 0, maxScore: 15000, category: '學校' },

  // 主格代名詞 (Subject pronouns)
  { word: 'I', translation: '我', minScore: 0, maxScore: 15000, category: '主格' },
  { word: 'you', translation: '你', minScore: 0, maxScore: 15000, category: '主格' },
  { word: 'he', translation: '他', minScore: 0, maxScore: 15000, category: '主格' },
  { word: 'she', translation: '她', minScore: 0, maxScore: 15000, category: '主格' },
  { word: 'it', translation: '它', minScore: 0, maxScore: 15000, category: '主格' },
  { word: 'they', translation: '他們', minScore: 0, maxScore: 15000, category: '主格' },
  { word: 'we', translation: '我們', minScore: 0, maxScore: 15000, category: '主格' },

  // 所有格代名詞 (Possessive adjectives)
  { word: 'my', translation: '我的', minScore: 0, maxScore: 15000, category: '所有格' },
  { word: 'your', translation: '你的', minScore: 0, maxScore: 15000, category: '所有格' },
  { word: 'his', translation: '他的', minScore: 0, maxScore: 15000, category: '所有格' },
  { word: 'her', translation: '她的', minScore: 0, maxScore: 15000, category: '所有格' },
  { word: 'its', translation: '它的', minScore: 0, maxScore: 15000, category: '所有格' },
  { word: 'their', translation: '他們的', minScore: 0, maxScore: 15000, category: '所有格' },
  { word: 'our', translation: '我們的', minScore: 0, maxScore: 15000, category: '所有格' },

  // 受格代名詞 (Object pronouns)；"we" 的受格為 "us"，已修正
  { word: 'me', translation: '我', minScore: 0, maxScore: 15000, category: '受格' },
  { word: 'you', translation: '你', minScore: 0, maxScore: 15000, category: '受格' },
  { word: 'him', translation: '他', minScore: 0, maxScore: 15000, category: '受格' },
  { word: 'her', translation: '她', minScore: 0, maxScore: 15000, category: '受格' },
  { word: 'them', translation: '他們', minScore: 0, maxScore: 15000, category: '受格' },
  { word: 'us', translation: '我們', minScore: 0, maxScore: 15000, category: '受格' },
]

/** 跳跳人遊戲下拉選單用的「全部」選項（不限字組，沿用分數難度篩選），見 issue #128 */
export const ALL_CATEGORY = '全部'

/** 由 wordPairs 推導出的所有字組分類（依資料出現順序），供下拉選單列出 */
export const wordCategories: string[] = Array.from(new Set(wordPairs.map((w) => w.category)))

/** 通關分數：最高難度單字的 maxScore，達到即顯示勝利畫面 */
export const WINNING_SCORE: number = Math.max(...wordPairs.map((w) => w.maxScore))

/** 跳跳人遊戲的「自訂」字組：取自使用者自訂字卡中的單一字詞，見 issue #135 */
export const CUSTOM_CATEGORY = '自訂'

/**
 * 判斷字卡英文是否為「單一字詞」：去掉前後空白、把標點視為分隔後，只剩一個不含空白的詞。
 * 單字內的撇號與連字號保留（如 don't、well-being 仍算一個詞），標點本身不計入字數。
 * 例："cat"、"cat."、"don't" 為單詞；"a cat"、"Hello, world" 不是。
 */
export function isSingleWordEnglish(english: string): boolean {
  const normalized = english
    .trim()
    // 把字母、數字、空白、撇號、連字號以外的字元（標點）換成空白，標點本身不計入字數
    .replace(/[^\p{L}\p{N}\s'-]/gu, ' ')
    .trim()
  if (!normalized) return false
  return !/\s/.test(normalized)
}

/** 取出單詞字卡實際用於遊戲的英文：去除前後標點，保留單字內的撇號與連字號 */
function toGameWord(english: string): string {
  return english.trim().replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, '')
}

/**
 * 從 localStorage 的自訂字卡讀出「單一字詞」並轉成 WordPair，供跳跳人遊戲的「自訂」字組使用。
 * 整組不分難度（0 ~ WINNING_SCORE），並依英文（不分大小寫）去除重覆。見 issue #135。
 */
export function getCustomWordPairs(): WordPair[] {
  if (typeof localStorage === 'undefined') return []

  let cards: unknown
  try {
    cards = JSON.parse(localStorage.getItem('customCards') || '[]')
  } catch {
    return []
  }
  if (!Array.isArray(cards)) return []

  const pairs: WordPair[] = []
  const seen = new Set<string>()
  for (const card of cards) {
    if (!card || typeof card !== 'object') continue
    const english = typeof (card as { english?: unknown }).english === 'string'
      ? (card as { english: string }).english
      : ''
    const chinese = typeof (card as { chinese?: unknown }).chinese === 'string'
      ? (card as { chinese: string }).chinese
      : ''

    if (!isSingleWordEnglish(english)) continue
    const word = toGameWord(english)
    if (!word) continue

    const key = word.toLowerCase()
    if (seen.has(key)) continue
    seen.add(key)

    pairs.push({
      word,
      translation: chinese.trim() || word,
      minScore: 0,
      maxScore: WINNING_SCORE,
      category: CUSTOM_CATEGORY,
    })
  }
  return pairs
}
