import{Q as q,a as se,b as z,c as ue}from"./QTabPanels-B432fIRz.js";import{a3 as re,r as c,O as ie,b as de,n as ce,w as L,a4 as pe,a5 as ve,a6 as n,a7 as Q,a8 as k,ac as u,a9 as a,ak as i,A as V,ag as S,aj as w,ad as h,y as me,z as he,ah as g,an as W,am as fe,al as ge,aq as Ce,aB as ye}from"./index-BXyAIsG6.js";import{Q as ke}from"./QPage-BJ2ZnW5d.js";import{u as we}from"./use-quasar-fxDOj-Da.js";import{F as Fe}from"./FlashCard-BHzmrjaH.js";import{a as Ae}from"./axios-upsvKRUO.js";import"./touch-DophKzY7.js";import"./rtl-DFPa-2ov.js";import"./selection-DnoXSpHt.js";const be=re({name:"FavoritePage",components:{FlashCard:Fe},setup(e,{emit:t}){const C=we(),d=c([]),b=c(!1),E=c([]),y=c(null),r=c(!1);ie(()=>{const o=localStorage.getItem("en_love_arr");console.log(o);function l(s){return s.map(v=>({chinese:v.chinese,english:v.english,flipped:!1}))}o&&(d.value=l(JSON.parse(o)),U()),d.value.length>=4&&(D(),T.value="multipleChoice")});function B(o,l){const s=o.replace(/[.,!?;:]/g,"").replace(/\s/g,""),v=l.replace(/[.,!?;:]/g,"").replace(/\s/g,"");return s.toLowerCase()===v.toLowerCase()}const G=o=>{d.value=d.value.filter(l=>!(l.english===o.english&&l.chinese===o.chinese)),localStorage.setItem("favoriteCards",JSON.stringify(d.value))},T=c("view"),m=c(null),F=c(null),O=c(""),A=c(""),R=c(!1),p=c(0),X=de(()=>m.value?m.value.english.split(" "):[]);function H(o){o?(p.value++,C.notify({type:"positive",message:`答對了！您已連續答對${p.value}題！獲得100xp！`,position:"top",timeout:2500}),b.value=!1,r.value=!1,j()):(p.value=0,C.notify({type:"negative",message:"不太像，再試一次！請再按一次錄音按鈕",position:"top",timeout:2500}))}function U(){if(d.value.length===0){m.value=null;return}const o=Math.floor(Math.random()*d.value.length);m.value=d.value[o];const l=m.value.english.split(" ");l.length===0?F.value=null:F.value=Math.floor(Math.random()*l.length),O.value="",A.value="",R.value=!1,ce(()=>{const s=document.querySelector("input");s&&s.focus()})}function Y(){if(!m.value||F.value===null)return;const o=m.value.english.split(" "),l=F.value!==null&&o[F.value]||"",s=O.value.trim().toLowerCase().replace(/[.,!?;:]/g,""),v=l.trim().toLowerCase().replace(/[.,!?;:]/g,"");s===v?(p.value++,A.value="答對了！您已連續答對"+p.value+"題！",C.notify({type:"positive",message:A.value,position:"top",timeout:2500,actions:[{icon:"close",color:"white"}]}),t("earn-xp",50)):(A.value=`答錯了，正確答案是：${l}`,p.value=0,C.notify({type:"negative",message:A.value,position:"top",timeout:2500,actions:[{icon:"close",color:"white"}]})),R.value=!0;const K=ae=>{ae.key==="Enter"&&(N(),document.removeEventListener("keydown",K))};document.addEventListener("keydown",K)}function N(){U()}function Z(){const o=new SpeechSynthesisUtterance(m.value?.english);window.speechSynthesis.speak(o)}function x(){const o=new SpeechSynthesisUtterance(M.value?.english);window.speechSynthesis.speak(o)}L(T,o=>{o==="cloze"&&U()});const f=c(null),P=c([]),$=c(null);function D(){if(d.value.length<4){f.value=null;return}const o=Math.floor(Math.random()*d.value.length);f.value=d.value[o],_()}function _(){if(!f.value)return;const o=f.value.english,l=d.value.filter(s=>s.english!==o).map(s=>s.english).sort(()=>Math.random()-.5).slice(0,3);P.value=[{label:o,value:o},...l.map(s=>({label:s,value:s}))].sort(()=>Math.random()-.5)}function ee(){$.value===f.value?.english?(p.value++,C.notify({type:"positive",message:`答對了！您已連續答對${p.value}題！獲得100xp！`,position:"top",timeout:2500,actions:[{icon:"close",color:"white"}]}),t("earn-xp",100)):(p.value=0,C.notify({type:"negative",message:`答錯了，正確答案是：${f.value?.english}`,position:"top",timeout:2500,actions:[{icon:"close",color:"white"}]})),D()}function oe(){D()}L(T,o=>{o==="multipleChoice"?D():o==="speakout"&&j()});const M=c({chinese:"",english:"",flipped:!1});function j(){if(d.value.length===0){M.value=d.value[0];return}const o=Math.floor(Math.random()*d.value.length);M.value=d.value[o],I.value=""}function te(){const o=new SpeechSynthesisUtterance(f.value?.english);window.speechSynthesis.speak(o)}L($,o=>{if(o){const l=new SpeechSynthesisUtterance(o);window.speechSynthesis.speak(l)}});const I=c("");async function le(){try{const o=await navigator.mediaDevices.getUserMedia({audio:!0}),l=new MediaRecorder(o);E.value=[],l.start(),b.value=!0,console.log("錄音開始"),l.ondataavailable=s=>{console.log("錄音中"),console.log(s.data),E.value.push(s.data),J()},l.onstop=()=>{b.value=!1,console.log("錄音結束"),o.getTracks().forEach(s=>s.stop())},setTimeout(()=>{l.stop(),r.value=!0},5e3)}catch(o){console.error("錄音失敗:",o)}}async function J(){const o=new Blob(E.value,{type:"audio/mp4"}),l=new FormData;l.append("file",o,"recording.mp4");const s=URL.createObjectURL(o);y.value&&(y.value.src=s);const v=await Ae.post("https://zh-en-backend.alearn13994229.workers.dev/convert-speech-to-text",l,{headers:{"Content-Type":"multipart/form-data"}});console.log(v.data),console.log(v.data.text),I.value=v.data.text}function ne(){y.value&&(y.value.src="",r.value=!1)}return{favoriteCards:d,removeFromFavorites:G,activeTab:T,currentCard:M,currentClozeCard:m,blankIndex:F,userAnswer:O,feedback:A,answered:R,correctCount:p,splitEnglishSentence:X,checkAnswer:Y,nextQuestion:N,playAudio:Z,playSpeakoutAudio:x,isSimilar:B,isRecording:b,hasRecorded:r,audioChunks:E,currentMultipleChoiceCard:f,multipleChoiceOptions:P,selectedOption:$,checkMultipleChoiceAnswer:ee,nextMultipleChoiceQuestion:oe,playMultipleChoiceAudio:te,startRecording:le,uploadAudio:J,recordedText:I,audioPlayer:y,checkAnswerSpeakoutAnswer:H,resetAudio:ne}}}),Ee={class:"q-pa-md full-width"},Be={key:0,class:"text-center q-pa-lg"},Se={key:1},Te={key:0,class:"text-center q-pa-lg"},De={key:1},Me={class:"q-mt-md"},qe={key:1,class:"text-red-7"},ze={ref:"audioPlayer",controls:""},Qe={key:2},Ve={key:3},Oe={key:4},Re={key:5,class:"q-mt-md"},Ue={key:0,class:"text-center q-pa-lg"},$e={key:1,class:"q-pa-md"},Ie={key:0},Le={key:0,style:{color:"red"}},Ne={class:"q-mt-md"},Pe={class:"q-mt-md"},je={class:"q-mt-md"},Je={key:0,class:"text-center q-pa-lg"},Ke={key:1,class:"q-pa-md"},We={key:0},Ge={class:"q-mt-md"},Xe={class:"q-mt-md"};function He(e,t,C,d,b,E){const y=ve("FlashCard");return n(),Q(ke,{class:"flex flex-center"},{default:k(()=>[u("div",Ee,[t[15]||(t[15]=u("h2",null,"我的最愛字卡",-1)),a(se,{modelValue:e.activeTab,"onUpdate:modelValue":t[0]||(t[0]=r=>e.activeTab=r),dense:"","border-color":"primary",class:"q-mb-md"},{default:k(()=>[a(q,{name:"view",label:"卡片"}),a(q,{name:"cloze",label:"克漏字"}),a(q,{name:"multipleChoice",label:"四選一"}),a(q,{name:"speakout",label:"開口說"})]),_:1},8,["modelValue"]),a(ue,{modelValue:e.activeTab,"onUpdate:modelValue":t[7]||(t[7]=r=>e.activeTab=r),animated:""},{default:k(()=>[a(z,{name:"view"},{default:k(()=>[e.favoriteCards.length===0?(n(),i("div",Be,[a(V,{name:"favorite_border",size:"50px",color:"grey-5"}),t[8]||(t[8]=u("p",{class:"text-grey-7"},"還沒有收藏的字卡",-1)),t[9]||(t[9]=u("p",{class:"text-grey-7"},"在學習時點擊愛心圖示來收藏字卡",-1))])):(n(),i("div",Se,[a(y,{sentences:e.favoriteCards,onEarnXp:t[1]||(t[1]=r=>e.$emit("earn-xp",r))},null,8,["sentences"])]))]),_:1}),a(z,{name:"speakout"},{default:k(()=>[e.favoriteCards.length===0?(n(),i("div",Te,[a(V,{name:"favorite_border",size:"50px",color:"grey-5"}),t[10]||(t[10]=u("p",{class:"text-grey-7"},"還沒有收藏的字卡",-1))])):(n(),i("div",De,[u("div",Me,[u("h2",null,[S(" 中文："+w(e.currentCard.chinese)+" ",1),t[11]||(t[11]=u("br",null,null,-1)),S(" 英文："+w(e.currentCard.english)+" ",1),a(h,{icon:"volume_up",size:"lg",color:"primary",onClick:e.playSpeakoutAudio,flat:""},null,8,["onClick"])]),e.isRecording?(n(),i("span",qe,"錄音中...")):(n(),Q(h,{key:0,icon:"mic",size:"lg",color:"primary",onClick:e.startRecording,flat:""},null,8,["onClick"])),me(u("audio",ze,null,512),[[he,!e.isRecording&&e.hasRecorded]]),e.recordedText?(n(),i("p",Qe,"AI分析錄音結果："+w(e.recordedText),1)):g("",!0),e.recordedText&&e.isSimilar(e.recordedText,e.currentCard.english)?(n(),i("p",Ve,"答對了！")):g("",!0),e.recordedText&&!e.isSimilar(e.recordedText,e.currentCard.english)?(n(),i("p",Oe," 有點不像... ")):g("",!0),!e.isRecording&&e.hasRecorded&&e.recordedText?(n(),i("div",Re,[e.recordedText&&e.isSimilar(e.recordedText,e.currentCard.english)?(n(),Q(h,{key:0,color:"primary",label:"很棒！下一題",onClick:t[2]||(t[2]=r=>e.checkAnswerSpeakoutAnswer(!0))})):g("",!0),e.recordedText&&!e.isSimilar(e.recordedText,e.currentCard.english)?(n(),Q(h,{key:1,color:"secondary",label:"再試一次",onClick:t[3]||(t[3]=r=>e.checkAnswerSpeakoutAnswer(!1))})):g("",!0)])):g("",!0)])]))]),_:1}),a(z,{name:"cloze"},{default:k(()=>[e.favoriteCards.length===0?(n(),i("div",Ue,[a(V,{name:"favorite_border",size:"50px",color:"grey-5"}),t[12]||(t[12]=u("p",{class:"text-grey-7"},"還沒有收藏的字卡，無法進行克漏字練習",-1))])):(n(),i("div",$e,[e.currentClozeCard?(n(),i("div",Ie,[u("h2",null,[S(" 中文："+w(e.currentClozeCard.chinese)+" ",1),a(h,{icon:"volume_up",size:"lg",color:"primary",onClick:e.playAudio,flat:""},null,8,["onClick"])]),t[13]||(t[13]=u("h2",null,"英文：",-1)),u("p",null,[(n(!0),i(W,null,fe(e.splitEnglishSentence,(r,B)=>(n(),i("span",{key:B},[B===e.blankIndex?(n(),i("span",Le,"_______")):(n(),i(W,{key:1},[S(w(r),1)],64)),S(" "+w(B<e.splitEnglishSentence.length-1?" ":""),1)]))),128))]),u("div",Ne,[a(ge,{autofocus:!0,modelValue:e.userAnswer,"onUpdate:modelValue":t[4]||(t[4]=r=>e.userAnswer=r),label:"請填入缺少的單字",disable:e.answered,onKeydown:t[5]||(t[5]=Ce(r=>!e.answered&&e.userAnswer&&e.checkAnswer(),["enter"])),class:"large-input"},null,8,["modelValue","disable"])]),u("div",Pe,[a(h,{color:"primary",label:"檢查答案",onClick:e.checkAnswer,disable:e.answered||!e.userAnswer},null,8,["onClick","disable"])]),u("div",je,[a(h,{color:"secondary",label:"下一題",onClick:e.nextQuestion},null,8,["onClick"])])])):g("",!0)]))]),_:1}),a(z,{name:"multipleChoice"},{default:k(()=>[e.favoriteCards.length<4?(n(),i("div",Je,[a(V,{name:"favorite_border",size:"50px",color:"grey-5"}),t[14]||(t[14]=u("p",{class:"text-grey-7"},"收藏的字卡不足以進行四選一測驗，請收藏更多字卡",-1))])):(n(),i("div",Ke,[e.currentMultipleChoiceCard?(n(),i("div",We,[u("h2",null," 中文："+w(e.currentMultipleChoiceCard.chinese),1),a(ye,{modelValue:e.selectedOption,"onUpdate:modelValue":t[6]||(t[6]=r=>e.selectedOption=r),options:e.multipleChoiceOptions,type:"radio"},null,8,["modelValue","options"]),u("div",Ge,[a(h,{color:"primary",label:"檢查答案",onClick:e.checkMultipleChoiceAnswer,disable:!e.selectedOption},null,8,["onClick","disable"])]),u("div",Xe,[a(h,{color:"secondary",label:"下一題",onClick:e.nextMultipleChoiceQuestion},null,8,["onClick"])])])):g("",!0)]))]),_:1})]),_:1},8,["modelValue"])])]),_:1})}const ao=pe(be,[["render",He],["__scopeId","data-v-7e5ee2c3"],["__file","FavoritePage.vue"]]);export{ao as default};
