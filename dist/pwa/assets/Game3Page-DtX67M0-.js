import{Q as M}from"./QBadge-Arisau0i.js";import{N as R,r as o,E as q,_ as V,P as f,R as j,S as i,V as l,U as n,X as B,$ as k,W as C,a0 as Q,a1 as L,a2 as W}from"./index-DgLdTMC7.js";import{Q as $}from"./QImg-91L8-z8w.js";import{Q as D}from"./QCardSection-B0DAHudx.js";import{Q as G}from"./QCard-DizV0k0S.js";import{Q as N}from"./QDialog-DiavIQR6.js";import{Q as P}from"./QPage-DhCgKoVS.js";import"./use-timeout-C5kyqiOi.js";import"./use-dark-D4fHswFO.js";import"./use-tick-BxUFwkSx.js";import"./focus-manager-DhdJisJs.js";const U="/assets/apple-DcBeu-9G.jpg",E="/assets/banana-DGKkD4Lq.jpg",F="/assets/orange-CJRrdM-K.jpg",O="/assets/pineapple-0QUnYwxk.jpg",x=R({name:"Game3Page",setup(){const a=o(0),t=o(""),m=o(""),p=o([]),r=o(!1),c=o(""),s=o(!1),u=o(""),g=o(""),d=[{word:"apple",image:U},{word:"banana",image:E},{word:"orange",image:F},{word:"pineapple",image:O}],h=localStorage.getItem("game3Level");h&&(a.value=parseInt(h));function b(){let e;do{const v=Math.floor(Math.random()*d.length);e=d[v]}while(e.word===g.value);t.value=e.word,m.value=e.image,g.value=e.word}function y(){const e=new Set;for(e.add(t.value);e.size<4;){const v=Math.floor(Math.random()*d.length),A=d[v];e.add(A.word)}p.value=Array.from(e).sort(()=>Math.random()-.5)}function w(){s.value=!1,u.value="",b(),y(),_()}function _(){if(t.value){const e=new SpeechSynthesisUtterance(t.value);e.lang="en-US",e.rate=.8,speechSynthesis.speak(e)}}function S(e){u.value=e,s.value=!0,e===t.value?(c.value="答對了！",a.value++,localStorage.setItem("game3Level",a.value.toString()),r.value=!0,setTimeout(()=>{r.value=!1,w()},1e3)):(c.value="答錯了，請再試一次！",r.value=!0,setTimeout(()=>{r.value=!1,s.value=!1},1e3))}function I(e){return s.value?e===t.value&&e===u.value?"positive":e===u.value?"negative":"primary":"primary"}return q(()=>{w()}),{level:a,currentImage:m,currentOptions:p,showResult:r,resultMessage:c,showingResult:s,speakCurrentWord:_,checkAnswer:S,getButtonColor:I}}}),z={class:"row items-center q-mb-md"},T={class:"col-auto"},K={class:"text-h6 q-mb-md text-center"},J={class:"row justify-center q-mb-lg"},X={class:"col-12 col-sm-6 col-md-4"},Y={class:"row q-col-gutter-md justify-center"},H={class:"text-h6"};function Z(a,t,m,p,r,c){return f(),j(P,{class:"q-pa-md"},{default:i(()=>[l("div",z,[t[1]||(t[1]=l("h1",{class:"col"},"看圖選單字遊戲",-1)),l("div",T,[n(M,{color:"purple",class:"text-h6"},{default:i(()=>[B(" Level: "+k(a.level),1)]),_:1})])]),l("div",K,[t[2]||(t[2]=B(" 請看圖片，選出正確的單字 ")),n(C,{icon:"volume_up",color:"primary",round:"",size:"lg",class:"q-ml-sm",onClick:a.speakCurrentWord},null,8,["onClick"])]),l("div",J,[l("div",X,[n($,{src:a.currentImage,style:{height:"200px"},fit:"contain",class:"rounded-borders"},null,8,["src"])])]),l("div",Y,[(f(!0),Q(W,null,L(a.currentOptions,s=>(f(),Q("div",{key:s,class:"col-12 col-sm-6 col-md-3"},[n(C,{label:s,class:"word-btn full-width",color:a.getButtonColor(s),size:"lg",disable:a.showingResult,onClick:u=>a.checkAnswer(s)},null,8,["label","color","disable","onClick"])]))),128))]),n(N,{modelValue:a.showResult,"onUpdate:modelValue":t[0]||(t[0]=s=>a.showResult=s)},{default:i(()=>[n(G,null,{default:i(()=>[n(D,{class:"row items-center"},{default:i(()=>[l("span",H,k(a.resultMessage),1)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}const de=V(x,[["render",Z],["__scopeId","data-v-edf76436"],["__file","Game3Page.vue"]]);export{de as default};
