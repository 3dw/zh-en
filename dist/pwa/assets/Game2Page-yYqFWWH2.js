import{Q as y}from"./QBadge-BRw0imSA.js";import{Q as h}from"./QBtn-BUApTgvM.js";import{Q as L,a as S}from"./QCard-nbBGRqxT.js";import{Q as F}from"./QDialog-CrFRk62W.js";import{Q as b}from"./QPage-BpbSFIIL.js";import{F as A,r as o,o as R,_ as q,H as v,I as M,J as i,L as u,K as n,M as B,O as C,P as w,Q as V,R as D}from"./index-Ciz7fihY.js";import"./QIcon-B5T-K79R.js";import"./Ripple-B2tlnNVr.js";import"./use-dark-JEmFQNrJ.js";import"./focus-manager-zjdVGI5d.js";const I=A({name:"Game2Page",setup(){const t=o(0),a=o(""),m=o([]),l=o(!1),c=o(""),r=o(!1),s=o(""),d=localStorage.getItem("game2Level");d&&(t.value=parseInt(d));function f(){const e="abcdefghijklmnopqrstuvwxyz";return e.charAt(Math.floor(Math.random()*e.length))}function k(){const e=new Set;for(e.add(a.value);e.size<4;)e.add(f());m.value=Array.from(e).sort(()=>Math.random()-.5)}function p(){r.value=!1,s.value="",a.value=f(),k(),g()}function g(){if(a.value){const e=new SpeechSynthesisUtterance(a.value);e.lang="en-US",e.rate=.4,speechSynthesis.speak(e)}}function _(e){s.value=e,r.value=!0,e===a.value?(c.value="答對了！",t.value++,localStorage.setItem("game2Level",t.value.toString()),l.value=!0,setTimeout(()=>{l.value=!1,p()},1e3)):(c.value="答錯了，請再試一次！",l.value=!0,setTimeout(()=>{l.value=!1,r.value=!1},1e3))}function Q(e){return r.value?e===a.value&&e===s.value?"positive":e===s.value?"negative":"primary":"primary"}return R(()=>{p()}),{level:t,currentOptions:m,showResult:l,resultMessage:c,showingResult:r,speakCurrentLetter:g,checkAnswer:_,getButtonColor:Q}}}),O={class:"row items-center q-mb-md"},P={class:"col-auto"},$={class:"text-h6 q-mb-md text-center"},z={class:"row q-col-gutter-md justify-center q-mt-lg"},N={class:"text-h6"};function E(t,a,m,l,c,r){return v(),M(b,{class:"q-pa-md"},{default:i(()=>[u("div",O,[a[1]||(a[1]=u("h1",{class:"col"},"小寫字母發音選字遊戲",-1)),u("div",P,[n(y,{color:"deep-orange",class:"text-h6"},{default:i(()=>[B(" Level: "+C(t.level),1)]),_:1})])]),u("div",$,[a[2]||(a[2]=B(" 請聽發音，選出正確的小寫字母 ")),n(h,{icon:"volume_up",color:"primary",round:"",size:"lg",class:"q-ml-sm",onClick:t.speakCurrentLetter},null,8,["onClick"])]),u("div",z,[(v(!0),w(D,null,V(t.currentOptions,s=>(v(),w("div",{key:s,class:"col-auto"},[n(h,{label:s,class:"option-btn",color:t.getButtonColor(s),size:"lg",disable:t.showingResult,onClick:d=>t.checkAnswer(s)},null,8,["label","color","disable","onClick"])]))),128))]),n(F,{modelValue:t.showResult,"onUpdate:modelValue":a[0]||(a[0]=s=>t.showResult=s)},{default:i(()=>[n(L,null,{default:i(()=>[n(S,{class:"row items-center"},{default:i(()=>[u("span",N,C(t.resultMessage),1)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}const Y=q(I,[["render",E],["__scopeId","data-v-7307ac27"],["__file","Game2Page.vue"]]);export{Y as default};
