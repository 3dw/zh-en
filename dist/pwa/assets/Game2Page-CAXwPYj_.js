import{Q as S}from"./QBadge-D0MqUmH1.js";import{Q as h}from"./QBtn-CCYy1IsZ.js";import{Q as y,a as L}from"./QCard-BZfMp5_T.js";import{Q as b}from"./QDialog-C8p3sK27.js";import{Q as A}from"./QPage-DJGJ3FVv.js";import{H as F,r as o,o as R,_ as q,J as p,K as M,L as i,N as u,M as n,O as B,Q as C,R as w,S as V,U as D}from"./index-DMWxuhnQ.js";import"./render-bHsVAQSk.js";import"./QIcon-CW19f509.js";import"./vm-CnGprgRT.js";import"./Ripple-DLR7J9Gb.js";import"./use-dark-DFFzvNHx.js";import"./use-timeout-u6mvWpTw.js";import"./focus-manager-zjdVGI5d.js";const N=F({name:"Game2Page",setup(){const t=o(0),a=o(""),m=o([]),l=o(!1),c=o(""),r=o(!1),s=o(""),d=localStorage.getItem("game2Level");d&&(t.value=parseInt(d));function v(){const e="abcdefghijklmnopqrstuvwxyz";return e.charAt(Math.floor(Math.random()*e.length))}function k(){const e=new Set;for(e.add(a.value);e.size<4;)e.add(v());m.value=Array.from(e).sort(()=>Math.random()-.5)}function f(){r.value=!1,s.value="",a.value=v(),k(),g()}function g(){if(a.value){const e=new SpeechSynthesisUtterance(a.value);e.lang="en-US",e.rate=.4,speechSynthesis.speak(e)}}function _(e){s.value=e,r.value=!0,e===a.value?(c.value="答對了！",t.value++,localStorage.setItem("game2Level",t.value.toString()),l.value=!0,setTimeout(()=>{l.value=!1,f()},1e3)):(c.value="答錯了，請再試一次！",l.value=!0,setTimeout(()=>{l.value=!1,r.value=!1},1e3))}function Q(e){return r.value?e===a.value&&e===s.value?"positive":e===s.value?"negative":"primary":"primary"}return R(()=>{f()}),{level:t,currentOptions:m,showResult:l,resultMessage:c,showingResult:r,speakCurrentLetter:g,checkAnswer:_,getButtonColor:Q}}}),O={class:"row items-center q-mb-md"},$={class:"col-auto"},z={class:"text-h6 q-mb-md text-center"},I={class:"row q-col-gutter-md justify-center q-mt-lg"},P={class:"text-h6"};function U(t,a,m,l,c,r){return p(),M(A,{class:"q-pa-md"},{default:i(()=>[u("div",O,[a[1]||(a[1]=u("h1",{class:"col"},"小寫字母發音選字遊戲",-1)),u("div",$,[n(S,{color:"deep-orange",class:"text-h6"},{default:i(()=>[B(" Level: "+C(t.level),1)]),_:1})])]),u("div",z,[a[2]||(a[2]=B(" 請聽發音，選出正確的小寫字母 ")),n(h,{icon:"volume_up",color:"primary",round:"",size:"lg",class:"q-ml-sm",onClick:t.speakCurrentLetter},null,8,["onClick"])]),u("div",I,[(p(!0),w(D,null,V(t.currentOptions,s=>(p(),w("div",{key:s,class:"col-auto"},[n(h,{label:s,class:"option-btn",color:t.getButtonColor(s),size:"lg",disable:t.showingResult,onClick:d=>t.checkAnswer(s)},null,8,["label","color","disable","onClick"])]))),128))]),n(b,{modelValue:t.showResult,"onUpdate:modelValue":a[0]||(a[0]=s=>t.showResult=s)},{default:i(()=>[n(y,null,{default:i(()=>[n(L,{class:"row items-center"},{default:i(()=>[u("span",P,C(t.resultMessage),1)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}const te=q(N,[["render",U],["__scopeId","data-v-7307ac27"],["__file","Game2Page.vue"]]);export{te as default};
