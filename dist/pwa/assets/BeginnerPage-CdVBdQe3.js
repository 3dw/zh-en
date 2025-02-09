import{Q as d}from"./QInput-DBauZuK9.js";import{Q as r}from"./QPage-Db9eiev5.js";import{F as c}from"./FlashCard-BGNpLI6D.js";import{N as u,r as h,_ as g,O as m,P as y,R as I,S as _,V as n,U as f}from"./index-ogN80PY1.js";import"./use-field-9eEjOZsc.js";import"./use-id-ByTOMxm9.js";import"./use-dark-DpO9ZDJ6.js";import"./focus-manager-DhdJisJs.js";import"./use-file-dom-props-s9kiYV3V.js";import"./use-key-composition-Cg76UZ0t.js";const w=u({name:"BeginnerPage",components:{FlashCard:c},emits:["earn-xp"],setup(s,{emit:e}){const a=h(""),p=h([{chinese:"你好嗎？",english:"How are you?",flipped:!1},{chinese:"我很好，謝謝。",english:"I am fine, thank you.",flipped:!1},{chinese:"你叫什麼名字？",english:"What is your name?",flipped:!1},{chinese:"我叫___。",english:"My name is ___.",flipped:!1},{chinese:"很高興認識你。",english:"Nice to meet you.",flipped:!1},{chinese:"你會說中文嗎？",english:"Can you speak Chinese?",flipped:!1},{chinese:"我不懂你的意思。",english:"I don't understand what you mean.",flipped:!1},{chinese:"請說慢一點。",english:"Please speak more slowly.",flipped:!1},{chinese:"請再說一次，謝謝。",english:"Repeat that, please.",flipped:!1},{chinese:"我需要幫助。",english:"I need some help.",flipped:!1},{chinese:"我迷路了，請幫我。",english:"I am lost, please help me.",flipped:!1},{chinese:"謝謝你的幫忙。",english:"Thank you for your help.",flipped:!1},{chinese:"對不起，我遲到了。",english:"Sorry, I am late.",flipped:!1},{chinese:"這要多少錢？",english:"How much is this?",flipped:!1},{chinese:"太貴了！",english:"It's too expensive!",flipped:!1},{chinese:"這裡有廁所嗎？",english:"Is there a restroom here?",flipped:!1},{chinese:"我想要一些水。",english:"I would like some water.",flipped:!1},{chinese:"在哪裡可以搭計程車？",english:"Where can I get a taxi?",flipped:!1},{chinese:"你住在哪裡？",english:"Where do you live?",flipped:!1},{chinese:"我住在台北。",english:"I live in Taipei.",flipped:!1},{chinese:"我餓了，我們去吃東西吧。",english:"I am hungry, let's get something to eat.",flipped:!1},{chinese:"我很累，我需要休息。",english:"I am tired, I need to rest.",flipped:!1},{chinese:"我們走吧。",english:"Let's go.",flipped:!1},{chinese:"明天見。",english:"See you tomorrow.",flipped:!1},{chinese:"你知道現在幾點嗎？",english:"Do you know what time it is?",flipped:!1},{chinese:"稍等一下。",english:"Just a moment, please.",flipped:!1},{chinese:"沒問題。",english:"No problem.",flipped:!1},{chinese:"當然可以。",english:"Of course.",flipped:!1},{chinese:"小心！",english:"Be careful!",flipped:!1},{chinese:"太好了！",english:"Great!",flipped:!1},{chinese:"恭喜你。",english:"Congratulations.",flipped:!1},{chinese:"祝你有美好的一天。",english:"Have a nice day.",flipped:!1},{chinese:"天氣很好。",english:"The weather is nice.",flipped:!1},{chinese:"我喜歡這裡。",english:"I like it here.",flipped:!1},{chinese:"真的嗎？",english:"Really?",flipped:!1},{chinese:"沒關係。",english:"It's okay.",flipped:!1},{chinese:"我明白了。",english:"I understand.",flipped:!1},{chinese:"我不知道。",english:"I don't know.",flipped:!1},{chinese:"幫我一個忙，好嗎？",english:"Could you do me a favor?",flipped:!1},{chinese:"不用客氣。",english:"You're welcome.",flipped:!1},{chinese:"請坐。",english:"Please have a seat.",flipped:!1},{chinese:"請給我菜單。",english:"Please give me the menu.",flipped:!1},{chinese:"這個很好吃。",english:"This tastes good.",flipped:!1},{chinese:"祝你旅途愉快。",english:"Have a good trip.",flipped:!1},{chinese:"我喜歡音樂。",english:"I like music.",flipped:!1},{chinese:"我需要上網。",english:"I need to use the Internet.",flipped:!1},{chinese:"你能幫我拍張照片嗎？",english:"Could you take a picture for me?",flipped:!1},{chinese:"祝你好運。",english:"Good luck.",flipped:!1},{chinese:"我現在很忙。",english:"I am very busy right now.",flipped:!1},{chinese:"下次見。",english:"See you next time.",flipped:!1}]);return{searchQuery:a,sentences:p,toggleFlip:i=>{i.flipped=!i.flipped,e("earn-xp",5)}}}}),k={class:"word-card-list"},v={class:"search-bar q-mb-md"};function C(s,e,a,p,o,i){const t=m("flash-card");return y(),I(r,{class:"op-page q-pa-md"},{default:_(()=>[n("div",k,[e[2]||(e[2]=n("h1",{class:"page-title"},"常用句子(點擊空白處可翻面)",-1)),n("div",v,[f(d,{modelValue:s.searchQuery,"onUpdate:modelValue":e[0]||(e[0]=l=>s.searchQuery=l),placeholder:"輸入關鍵字搜尋（中或英）",outlined:"",dense:""},null,8,["modelValue"])]),f(t,{sentences:s.sentences,searchQuery:s.searchQuery,onEarnXp:e[1]||(e[1]=l=>s.$emit("earn-xp",l))},null,8,["sentences","searchQuery"])])]),_:1})}const b=g(w,[["render",C],["__scopeId","data-v-d4cf960d"],["__file","BeginnerPage.vue"]]);export{b as default};
