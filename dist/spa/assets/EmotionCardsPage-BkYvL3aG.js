import{Q as o}from"./QInput-DQ4z_yHf.js";import{Q as c}from"./QPage-HD9iDhIy.js";import{F as m}from"./FlashCard-DQe5ngci.js";import{L as t,r as h,_ as g,M as u,N as I,O as v,P as y,U as a,R as f}from"./index-D7DZ91lx.js";import"./use-id-DuKf0T9h.js";import"./use-dark-Pw4nn_0T.js";import"./focus-manager-zjdVGI5d.js";const F=t({name:"BeginnerPage",components:{FlashCard:m},emits:["earn-xp"],setup(s,{emit:e}){const n=h(""),p=h([{chinese:"我很開心！",english:"I am happy!",flipped:!1},{chinese:"我很難過。",english:"I am sad.",flipped:!1},{chinese:"我生氣了！",english:"I am angry!",flipped:!1},{chinese:"我很緊張。",english:"I am nervous.",flipped:!1},{chinese:"我很興奮！",english:"I am excited!",flipped:!1},{chinese:"我很擔心。",english:"I am worried.",flipped:!1},{chinese:"我很害怕。",english:"I am scared.",flipped:!1},{chinese:"我很煩惱。",english:"I am troubled.",flipped:!1},{chinese:"我很驚訝！",english:"I am surprised!",flipped:!1},{chinese:"我很失望。",english:"I am disappointed.",flipped:!1},{chinese:"我很感動。",english:"I am touched.",flipped:!1},{chinese:"我很滿意。",english:"I am satisfied.",flipped:!1},{chinese:"我很困惑。",english:"I am confused.",flipped:!1},{chinese:"我很羨慕。",english:"I am envious.",flipped:!1},{chinese:"我很感激。",english:"I am grateful.",flipped:!1},{chinese:"我很懊悔。",english:"I am regretful.",flipped:!1},{chinese:"我很無聊。",english:"I am bored.",flipped:!1},{chinese:"我很焦慮。",english:"I am anxious.",flipped:!1},{chinese:"我很沮喪。",english:"I am depressed.",flipped:!1},{chinese:"我很自豪。",english:"I am proud.",flipped:!1},{chinese:"我很慚愧。",english:"I am ashamed.",flipped:!1},{chinese:"我很嫉妒。",english:"I am jealous.",flipped:!1},{chinese:"我很尷尬。",english:"I am embarrassed.",flipped:!1},{chinese:"我很孤單。",english:"I am lonely.",flipped:!1},{chinese:"我很放鬆。",english:"I am relaxed.",flipped:!1},{chinese:"我很累。",english:"I am tired.",flipped:!1},{chinese:"我很睏。",english:"I am sleepy.",flipped:!1},{chinese:"我餓了。",english:"I am hungry.",flipped:!1},{chinese:"我渴了。",english:"I am thirsty.",flipped:!1},{chinese:"我很不舒服。",english:"I am not feeling well.",flipped:!1},{chinese:"我頭痛。",english:"I have a headache.",flipped:!1},{chinese:"我很冷。",english:"I am cold.",flipped:!1},{chinese:"我很熱。",english:"I am hot.",flipped:!1},{chinese:"我很痛。",english:"I am in pain.",flipped:!1},{chinese:"我暈眩。",english:"I am dizzy.",flipped:!1},{chinese:"我噁心。",english:"I am nauseous.",flipped:!1},{chinese:"我喉嚨痛。",english:"I have a sore throat.",flipped:!1},{chinese:"我發燒了。",english:"I have a fever.",flipped:!1},{chinese:"我咳嗽。",english:"I am coughing.",flipped:!1},{chinese:"我流鼻水。",english:"I have a runny nose.",flipped:!1},{chinese:"我很專注。",english:"I am focused.",flipped:!1},{chinese:"我很分心。",english:"I am distracted.",flipped:!1},{chinese:"我很有動力。",english:"I am motivated.",flipped:!1},{chinese:"我沒有精神。",english:"I have no energy.",flipped:!1},{chinese:"我很放心。",english:"I am relieved.",flipped:!1},{chinese:"我很猶豫。",english:"I am hesitant.",flipped:!1},{chinese:"我很期待。",english:"I am looking forward to it.",flipped:!1},{chinese:"我很不耐煩。",english:"I am impatient.",flipped:!1},{chinese:"我很平靜。",english:"I am calm.",flipped:!1},{chinese:"我很煩躁。",english:"I am irritated.",flipped:!1}]);return{searchQuery:n,sentences:p,toggleFlip:i=>{i.flipped=!i.flipped,e("earn-xp",5)}}}}),C={class:"word-card-list"},Q={class:"search-bar q-mb-md"};function _(s,e,n,p,d,i){const r=u("flash-card");return I(),v(c,{class:"op-page q-pa-md"},{default:y(()=>[a("div",C,[e[2]||(e[2]=a("h1",{class:"page-title"},"常用句子(點擊空白處可翻面)",-1)),a("div",Q,[f(o,{modelValue:s.searchQuery,"onUpdate:modelValue":e[0]||(e[0]=l=>s.searchQuery=l),placeholder:"輸入關鍵字搜尋（中或英）",outlined:"",dense:""},null,8,["modelValue"])]),f(r,{sentences:s.sentences,searchQuery:s.searchQuery,onEarnXp:e[1]||(e[1]=l=>s.$emit("earn-xp",l))},null,8,["sentences","searchQuery"])])]),_:1})}const $=g(F,[["render",_],["__scopeId","data-v-19d61bdd"],["__file","EmotionCardsPage.vue"]]);export{$ as default};
