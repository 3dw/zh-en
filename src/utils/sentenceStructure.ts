// TODO: 優化判斷句子結構的函數

// 判斷句子結構的函數
export function getSentenceStructure(english: string, chinese: string): string {
  const eng = english.trim()
  const chn = chinese.trim()

  // 疑問句：包含 ? 或疑問詞
  if (
    eng.includes('?') ||
    eng.toLowerCase().startsWith('what') ||
    eng.toLowerCase().startsWith('where') ||
    eng.toLowerCase().startsWith('when') ||
    eng.toLowerCase().startsWith('who') ||
    eng.toLowerCase().startsWith('why') ||
    eng.toLowerCase().startsWith('how') ||
    eng.toLowerCase().startsWith('can you') ||
    eng.toLowerCase().startsWith('could you') ||
    eng.toLowerCase().startsWith('do you') ||
    eng.toLowerCase().startsWith('does') ||
    eng.toLowerCase().startsWith('is there') ||
    eng.toLowerCase().startsWith('are there') ||
    chn.includes('？') ||
    chn.includes('嗎') ||
    chn.includes('什麼') ||
    chn.includes('哪裡') ||
    chn.includes('何時') ||
    chn.includes('誰') ||
    chn.includes('為什麼') ||
    chn.includes('如何')
  ) {
    return '疑問句'
  }

  // 祈使句：以動詞開頭或 Let's 開頭，或只有2個單字
  if (
    eng.split(/[\s,!?]+/).length <= 2 ||
    eng.toLowerCase().startsWith("let's") ||
    eng.toLowerCase().startsWith('please') ||
    eng.toLowerCase().startsWith('be') ||
    eng.toLowerCase().startsWith('have') ||
    eng.toLowerCase().startsWith('go') ||
    eng.toLowerCase().startsWith('come') ||
    eng.toLowerCase().startsWith('get') ||
    eng.toLowerCase().startsWith('take') ||
    eng.toLowerCase().startsWith('give') ||
    eng.toLowerCase().startsWith('make') ||
    eng.toLowerCase().startsWith('do') ||
    eng.toLowerCase().startsWith('say') ||
    eng.toLowerCase().startsWith('tell') ||
    eng.toLowerCase().startsWith('show') ||
    eng.toLowerCase().startsWith('help') ||
    eng.toLowerCase().startsWith('remember') ||
    eng.toLowerCase().startsWith('repeat') ||
    eng.toLowerCase().startsWith('count') ||
    eng.toLowerCase().startsWith('calculate') ||
    eng.toLowerCase().startsWith('solve') ||
    eng.toLowerCase().startsWith('draw') ||
    eng.toLowerCase().startsWith('sort') ||
    eng.toLowerCase().startsWith('find') ||
    eng.toLowerCase().startsWith('round') ||
    eng.toLowerCase().startsWith('pass') ||
    eng.toLowerCase().startsWith('run') ||
    eng.toLowerCase().startsWith('shoot') ||
    eng.toLowerCase().startsWith('defense') ||
    eng.toLowerCase().startsWith('offense') ||
    eng.toLowerCase().startsWith('switch') ||
    eng.toLowerCase().startsWith('grab') ||
    eng.toLowerCase().startsWith('cut') ||
    eng.toLowerCase().startsWith('watch') ||
    eng.toLowerCase().startsWith('keep') ||
    eng.toLowerCase().startsWith('tighten') ||
    chn.startsWith('請') ||
    chn.startsWith('記得') ||
    chn.startsWith('數') ||
    chn.startsWith('計算') ||
    chn.startsWith('畫') ||
    chn.startsWith('找出') ||
    chn.startsWith('排序') ||
    chn.startsWith('傳') ||
    chn.startsWith('快') ||
    chn.startsWith('準備') ||
    chn.startsWith('防守') ||
    chn.startsWith('進攻') ||
    chn.startsWith('換') ||
    chn.startsWith('拿') ||
    chn.startsWith('空切') ||
    chn.startsWith('注意') ||
    chn.startsWith('保持') ||
    chn.startsWith('補') ||
    chn.startsWith('加強')
  ) {
    return '祈使句'
  }

  // 其他為肯定句
  return '肯定句'
}
