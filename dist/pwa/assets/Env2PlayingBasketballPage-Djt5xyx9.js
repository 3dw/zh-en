import{Q as d}from"./QInput-DBauZuK9.js";import{Q as r}from"./QPage-Db9eiev5.js";import{F as c}from"./FlashCard-BGNpLI6D.js";import{N as g,r as h,_ as u,O as m,P as b,R as k,S as y,V as n,U as f}from"./index-ogN80PY1.js";import"./use-field-9eEjOZsc.js";import"./use-id-ByTOMxm9.js";import"./use-dark-DpO9ZDJ6.js";import"./focus-manager-DhdJisJs.js";import"./use-file-dom-props-s9kiYV3V.js";import"./use-key-composition-Cg76UZ0t.js";const F=g({name:"BeginnerPage",components:{FlashCard:c},emits:["earn-xp"],setup(s,{emit:e}){const a=h(""),p=h([{chinese:"您好，請問可以一起打球嗎？",english:"Hello, can we play basketball together?",flipped:!1},{chinese:"好球！",english:"Nice play!",flipped:!1},{chinese:"傳給我！",english:"Pass to me!",flipped:!1},{chinese:"兩次運球！",english:"Double dribble!",flipped:!1},{chinese:"打手犯規！",english:"Hand foul!",flipped:!1},{chinese:"我先休息一下，去喝個水。",english:"I'll take a break and grab some water.",flipped:!1},{chinese:"明天見。",english:"See you tomorrow.",flipped:!1},{chinese:"快傳球！",english:"Quick pass!",flipped:!1},{chinese:"快攻！",english:"Fast break!",flipped:!1},{chinese:"準備接球！",english:"Get ready to receive the ball!",flipped:!1},{chinese:"防守！",english:"Defense!",flipped:!1},{chinese:"注意補防！",english:"Watch your help defense!",flipped:!1},{chinese:"三分球！",english:"Three-pointer!",flipped:!1},{chinese:"籃板球！",english:"Rebound!",flipped:!1},{chinese:"進攻！",english:"Offense!",flipped:!1},{chinese:"射門！",english:"Shoot!",flipped:!1},{chinese:"別猶豫，直接出手！",english:"Don't hesitate, take the shot!",flipped:!1},{chinese:"換防！",english:"Switch on defense!",flipped:!1},{chinese:"犯規了，送罰球！",english:"Foul! Free throws!",flipped:!1},{chinese:"快跑！",english:"Run!",flipped:!1},{chinese:"我們需要球！",english:"We need the ball!",flipped:!1},{chinese:"籃球掉出來了！",english:"The ball is loose!",flipped:!1},{chinese:"趕快退防！",english:"Get back on defense!",flipped:!1},{chinese:"對方快攻，注意！",english:"They're on a fast break, watch out!",flipped:!1},{chinese:"小心你的手！",english:"Watch your hands!",flipped:!1},{chinese:"拿球！",english:"Grab the ball!",flipped:!1},{chinese:"好防守，不給他突破！",english:"Good defense, don't let him break!",flipped:!1},{chinese:"來個三秒違例！",english:"Three-second violation!",flipped:!1},{chinese:"快攻中，快點！",english:"Fast break, hurry up!",flipped:!1},{chinese:"你的個人犯規累積到五次了！",english:"You've got five personal fouls!",flipped:!1},{chinese:"準備好封阻！",english:"Get set for a block!",flipped:!1},{chinese:"你需要多運球！",english:"You need to dribble more!",flipped:!1},{chinese:"轉身突破！",english:"Spin and drive!",flipped:!1},{chinese:"後仰跳投！",english:"Fadeaway jump shot!",flipped:!1},{chinese:"空切！",english:"Cut!",flipped:!1},{chinese:"籃下補籃！",english:"Crash the boards!",flipped:!1},{chinese:"不要浪費機會！",english:"Don't waste the chance!",flipped:!1},{chinese:"隊友暴扣得分！",english:"Our teammate dunked the ball!",flipped:!1},{chinese:"拼啦，不要放棄！",english:"Fight hard, don't give up!",flipped:!1},{chinese:"我們有機會逆轉比賽！",english:"We have a chance to come back!",flipped:!1},{chinese:"加強防守！",english:"Tighten up on defense!",flipped:!1},{chinese:"保持跑動不掉隊！",english:"Keep moving, stay with us!",flipped:!1},{chinese:"補領防守位置！",english:"Get back in position!",flipped:!1},{chinese:"陣地快攻！",english:"Set a play for fast break!",flipped:!1},{chinese:"大心臟，挑戰巨人！",english:"Big heart, challenge the giants!",flipped:!1},{chinese:"球快要過半場了！",english:"The ball is almost past the half-court!",flipped:!1},{chinese:"目前得分落後，要加油！",english:"We're trailing, let's push harder!",flipped:!1},{chinese:"外線需要支援！",english:"We need help on the perimeter!",flipped:!1},{chinese:"內線強攻！",english:"Attack the paint!",flipped:!1},{chinese:"穩住節奏！",english:"Control the tempo!",flipped:!1},{chinese:"好球，加油！",english:"Good job, keep it up!",flipped:!1}]);return{searchQuery:a,sentences:p,toggleFlip:l=>{l.flipped=!l.flipped,e("earn-xp",5)}}}}),v={class:"word-card-list"},w={class:"search-bar q-mb-md"};function B(s,e,a,p,t,l){const o=m("flash-card");return b(),k(r,{class:"op-page q-pa-md"},{default:y(()=>[n("div",v,[e[2]||(e[2]=n("h1",{class:"page-title"},"常用句子(點擊空白處可翻面)",-1)),n("div",w,[f(d,{modelValue:s.searchQuery,"onUpdate:modelValue":e[0]||(e[0]=i=>s.searchQuery=i),placeholder:"輸入關鍵字搜尋（中或英）",outlined:"",dense:""},null,8,["modelValue"])]),f(o,{sentences:s.sentences,searchQuery:s.searchQuery,onEarnXp:e[1]||(e[1]=i=>s.$emit("earn-xp",i))},null,8,["sentences","searchQuery"])])]),_:1})}const W=u(F,[["render",B],["__scopeId","data-v-dab09fae"],["__file","Env2PlayingBasketballPage.vue"]]);export{W as default};
