import{Q}from"./QBadge-WF-P6bW6.js";import{a3 as F,r as s,O as L,a4 as M,a6 as v,a7 as j,a8 as c,ac as l,a9 as n,ag as C,aj as B,ad as I,ak as b,am as R,an as q,aa as N,ab as O,af as V}from"./index-De74Ka4-.js";import{Q as Y}from"./QImg-CcLeZTMI.js";import{Q as $}from"./QPage-CU-ijYm-.js";const x="/assets/oldfriendsmeet-1dkOlloG.jpg",G="/assets/couplefight-fEEMF1_C.jpg",P=F({name:"Game4Page",setup(){const e=s(0),a=s(""),u=s(""),g=s([]),r=s(!1),d=s(""),t=s(!1),i=s(""),f=s([]),k=[{id:1,image:x,correctDialogue:`A: It's been so long! How have you been?
B: I missed you so much! Let's catch up!`,options:[{id:1,dialogue:`A: It's been so long! How have you been?
B: I missed you so much! Let's catch up!`,isCorrect:!0},{id:2,dialogue:`A: Why are you here? I thought we were meeting online.
B: Oh, I just wanted to surprise you.`,isCorrect:!1},{id:3,dialogue:`A: Do I know you? You look familiar.
B: Yes, we went to the same school for years!`,isCorrect:!1},{id:4,dialogue:`A: I thought you moved abroad!
B: No, I've been living next door to you all this time.`,isCorrect:!1}]},{id:2,image:G,correctDialogue:`A: You never listen to me anymore!
B: I do listen, but you don't give me a chance to explain!`,options:[{id:1,dialogue:`A: You never listen to me anymore!
B: I do listen, but you don't give me a chance to explain!`,isCorrect:!0},{id:2,dialogue:`A: Why did you eat my dessert?
B: I didn’t know it was yours, the fridge was empty!`,isCorrect:!1},{id:3,dialogue:`A: Let’s break up! I can’t stand your cooking.
B: Fine! I was tired of you complaining anyway.`,isCorrect:!1},{id:4,dialogue:`A: You forgot my birthday again!
B: No, I just wanted to surprise you tomorrow.`,isCorrect:!1}]}],h=localStorage.getItem("game4Level");h&&(e.value=parseInt(h));function p(){const o=k.filter(S=>!f.value.includes(S.id));if(o.length===0)return f.value=[],p();const D=Math.floor(Math.random()*o.length),m=o[D];f.value.push(m.id),a.value=m.image,u.value=m.correctDialogue,g.value=[...m.options].sort(()=>Math.random()-.5)}function y(){t.value=!1,i.value="",p(),w()}function w(){if(u.value){const o=new SpeechSynthesisUtterance(u.value);o.lang="en-US",o.rate=.8,speechSynthesis.speak(o)}}function A(o){i.value=o,t.value=!0,o===u.value?(d.value="答對了！",e.value++,localStorage.setItem("game4Level",e.value.toString()),r.value=!0,setTimeout(()=>{r.value=!1,y()},1500)):(d.value="答錯了，請再試一次！",r.value=!0,setTimeout(()=>{r.value=!1,t.value=!1},1500))}function _(o){return t.value?o===u.value&&o===i.value?"positive":o===i.value?"negative":"primary":"primary"}return L(()=>{y()}),{level:e,currentImage:a,currentOptions:g,showResult:r,resultMessage:d,showingResult:t,speakCurrentDialogue:w,checkAnswer:A,getButtonColor:_}}}),E={class:"row items-center q-mb-md"},T={class:"col-auto"},U={class:"text-h6 q-mb-md text-center"},z={class:"row justify-center q-mb-lg"},H={class:"col-12 col-sm-8 col-md-6"},W={class:"row q-col-gutter-md justify-center"},J={class:"text-h6"};function K(e,a,u,g,r,d){return v(),j($,{class:"q-pa-md"},{default:c(()=>[l("div",E,[a[1]||(a[1]=l("h1",{class:"col"},"看圖選對白遊戲",-1)),l("div",T,[n(Q,{color:"deep-orange",class:"text-h6"},{default:c(()=>[C(" Level: "+B(e.level),1)]),_:1})])]),l("div",U,[a[2]||(a[2]=C(" 請看圖片，聽對白，選出正確的對話 ")),n(I,{icon:"volume_up",color:"primary",round:"",size:"lg",class:"q-ml-sm",onClick:e.speakCurrentDialogue},null,8,["onClick"])]),l("div",z,[l("div",H,[n(Y,{src:e.currentImage,style:{height:"300px"},fit:"contain",class:"rounded-borders"},null,8,["src"])])]),l("div",W,[(v(!0),b(q,null,R(e.currentOptions,t=>(v(),b("div",{key:t.id,class:"col-12 col-sm-10 col-md-8"},[n(I,{label:t.dialogue,class:"dialogue-btn full-width",color:e.getButtonColor(t.dialogue),size:"lg",disable:e.showingResult,onClick:i=>e.checkAnswer(t.dialogue)},null,8,["label","color","disable","onClick"])]))),128))]),n(V,{modelValue:e.showResult,"onUpdate:modelValue":a[0]||(a[0]=t=>e.showResult=t)},{default:c(()=>[n(N,null,{default:c(()=>[n(O,{class:"row items-center"},{default:c(()=>[l("span",J,B(e.resultMessage),1)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}const te=M(P,[["render",K],["__scopeId","data-v-f2d92a2e"],["__file","Game4Page.vue"]]);export{te as default};
