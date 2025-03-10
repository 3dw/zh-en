import{Q as S,a as N,b as V,c as _}from"./QTabPanels-DmjfOyz7.js";import{a3 as P,r as c,O as L,b as M,n as U,w as O,a4 as J,a5 as K,a6 as r,a7 as W,a8 as f,ac as t,a9 as o,ak as d,A as q,ag as k,aj as b,ad as A,an as z,am as j,al as X,aq as G,ah as H}from"./index-Bf82t80V.js";import{Q as R}from"./QPage-Bf4Xk8Cl.js";import{u as Y}from"./use-quasar-vHvnMfyJ.js";import{F as Z}from"./FlashCard-DIlcL6Re.js";import"./touch-XyOhX_AK.js";import"./rtl-DFPa-2ov.js";import"./selection-lXOUU1CR.js";const x=P({name:"FavoritePage",components:{FlashCard:Z},setup(e,{emit:a}){const h=Y(),i=c([]);L(()=>{const s=localStorage.getItem("en_love_arr");console.log(s);function u(v){return v.map(C=>({chinese:C.chinese,english:C.english,flipped:!1}))}s&&(i.value=u(JSON.parse(s)),F())});const B=s=>{i.value=i.value.filter(u=>!(u.english===s.english&&u.chinese===s.chinese)),localStorage.setItem("favoriteCards",JSON.stringify(i.value))},y=c("cloze"),l=c(null),n=c(null),p=c(""),m=c(""),w=c(!1),g=c(0),T=M(()=>l.value?l.value.english.split(" "):[]);function F(){if(i.value.length===0){l.value=null;return}const s=Math.floor(Math.random()*i.value.length);l.value=i.value[s];const u=l.value.english.split(" ");u.length===0?n.value=null:n.value=Math.floor(Math.random()*u.length),p.value="",m.value="",w.value=!1,U(()=>{const v=document.querySelector("input");v&&v.focus()})}function D(){if(!l.value||n.value===null)return;const s=l.value.english.split(" "),u=n.value!==null&&s[n.value]||"",v=p.value.trim().toLowerCase().replace(/[.,!?;:]/g,""),C=u.trim().toLowerCase().replace(/[.,!?;:]/g,"");v===C?(g.value++,m.value="答對了！您已連續答對"+g.value+"題！",h.notify({type:"positive",message:m.value,position:"top",timeout:2500,actions:[{icon:"close",color:"white"}]}),a("earn-xp",50)):(m.value=`答錯了，正確答案是：${u}`,g.value=0,h.notify({type:"negative",message:m.value,position:"top",timeout:2500,actions:[{icon:"close",color:"white"}]})),w.value=!0;const Q=$=>{$.key==="Enter"&&(E(),document.removeEventListener("keydown",Q))};document.addEventListener("keydown",Q)}function E(){F()}function I(){const s=new SpeechSynthesisUtterance(l.value?.english);window.speechSynthesis.speak(s)}return O(y,s=>{s==="cloze"&&F()}),{favoriteCards:i,removeFromFavorites:B,activeTab:y,currentClozeCard:l,blankIndex:n,userAnswer:p,feedback:m,answered:w,correctCount:g,splitEnglishSentence:T,checkAnswer:D,nextQuestion:E,playAudio:I}}}),ee={class:"q-pa-md full-width"},ae={key:0,class:"text-center q-pa-lg"},ne={key:1},se={key:0,class:"text-center q-pa-lg"},oe={key:1,class:"q-pa-md"},le={key:0},te={key:0,style:{color:"red"}},ue={class:"q-mt-md"},re={class:"q-mt-md"},ie={class:"q-mt-md"};function de(e,a,h,i,B,y){const l=K("FlashCard");return r(),W(R,{class:"flex flex-center"},{default:f(()=>[t("div",ee,[a[9]||(a[9]=t("h2",null,"我的最愛字卡",-1)),o(N,{modelValue:e.activeTab,"onUpdate:modelValue":a[0]||(a[0]=n=>e.activeTab=n),dense:"","border-color":"primary",class:"q-mb-md"},{default:f(()=>[o(S,{name:"view",label:"檢視卡片"}),o(S,{name:"cloze",label:"克漏字練習"})]),_:1},8,["modelValue"]),o(_,{modelValue:e.activeTab,"onUpdate:modelValue":a[4]||(a[4]=n=>e.activeTab=n),animated:""},{default:f(()=>[o(V,{name:"view"},{default:f(()=>[e.favoriteCards.length===0?(r(),d("div",ae,[o(q,{name:"favorite_border",size:"50px",color:"grey-5"}),a[5]||(a[5]=t("p",{class:"text-grey-7"},"還沒有收藏的字卡",-1)),a[6]||(a[6]=t("p",{class:"text-grey-7"},"在學習時點擊愛心圖示來收藏字卡",-1))])):(r(),d("div",ne,[o(l,{sentences:e.favoriteCards,onEarnXp:a[1]||(a[1]=n=>e.$emit("earn-xp",n))},null,8,["sentences"])]))]),_:1}),o(V,{name:"cloze"},{default:f(()=>[e.favoriteCards.length===0?(r(),d("div",se,[o(q,{name:"favorite_border",size:"50px",color:"grey-5"}),a[7]||(a[7]=t("p",{class:"text-grey-7"},"還沒有收藏的字卡，無法進行克漏字練習",-1))])):(r(),d("div",oe,[e.currentClozeCard?(r(),d("div",le,[t("h2",null,[k(" 中文："+b(e.currentClozeCard.chinese)+" ",1),o(A,{icon:"volume_up",size:"lg",color:"primary",onClick:e.playAudio,flat:""},null,8,["onClick"])]),a[8]||(a[8]=t("h2",null,"英文：",-1)),t("p",null,[(r(!0),d(z,null,j(e.splitEnglishSentence,(n,p)=>(r(),d("span",{key:p},[p===e.blankIndex?(r(),d("span",te,"_______")):(r(),d(z,{key:1},[k(b(n),1)],64)),k(" "+b(p<e.splitEnglishSentence.length-1?" ":""),1)]))),128))]),t("div",ue,[o(X,{autofocus:!0,modelValue:e.userAnswer,"onUpdate:modelValue":a[2]||(a[2]=n=>e.userAnswer=n),label:"請填入缺少的單字",disable:e.answered,onKeydown:a[3]||(a[3]=G(n=>!e.answered&&e.userAnswer&&e.checkAnswer(),["enter"])),class:"large-input"},null,8,["modelValue","disable"])]),t("div",re,[o(A,{color:"primary",label:"檢查答案",onClick:e.checkAnswer,disable:e.answered||!e.userAnswer},null,8,["onClick","disable"])]),t("div",ie,[o(A,{color:"secondary",label:"下一題",onClick:e.nextQuestion},null,8,["onClick"])])])):H("",!0)]))]),_:1})]),_:1},8,["modelValue"])])]),_:1})}const ye=J(x,[["render",de],["__scopeId","data-v-ddf2caa0"],["__file","FavoritePage.vue"]]);export{ye as default};
