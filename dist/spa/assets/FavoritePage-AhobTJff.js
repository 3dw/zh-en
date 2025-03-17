import{Q as q,a as ae,b as Q,c as te}from"./QTabPanels-BY225CvZ.js";import{a3 as se,r as c,O as ue,b as ie,n as re,w as U,a4 as ce,a5 as de,a6 as r,a7 as K,a8 as C,ac as t,a9 as n,ak as d,A as z,ag as B,aj as w,ad as m,y as pe,z as ve,ah as $,an as W,am as me,al as he,aq as fe,aB as Ce}from"./index-BCLQahse.js";import{Q as ge}from"./QPage--CBQO-87.js";import{u as ye}from"./use-quasar-BjhB7js9.js";import{F as ke}from"./FlashCard-B--IZ_ar.js";import"./touch-gZEpAfFG.js";import"./rtl-DFPa-2ov.js";import"./selection-zRXLgAAX.js";const we=se({name:"FavoritePage",components:{FlashCard:ke},setup(e,{emit:l}){const f=ye(),s=c([]),F=c(!1),A=c([]),g=c(null),u=c(!1);ue(()=>{const o=localStorage.getItem("en_love_arr");console.log(o);function a(i){return i.map(D=>({chinese:D.chinese,english:D.english,flipped:!1}))}o&&(s.value=a(JSON.parse(o)),R()),s.value.length>=4&&(S(),E.value="multipleChoice")});const b=o=>{s.value=s.value.filter(a=>!(a.english===o.english&&a.chinese===o.chinese)),localStorage.setItem("favoriteCards",JSON.stringify(s.value))},E=c("view"),v=c(null),y=c(null),V=c(""),k=c(""),O=c(!1),p=c(0),G=ie(()=>v.value?v.value.english.split(" "):[]);function X(o){o?(p.value++,f.notify({type:"positive",message:`答對了！您已連續答對${p.value}題！獲得100xp！`,position:"top",timeout:2500}),F.value=!1,u.value=!1,g.value=null,P()):(p.value=0,f.notify({type:"negative",message:"不太像，再試一次！",position:"top",timeout:2500}))}function R(){if(s.value.length===0){v.value=null;return}const o=Math.floor(Math.random()*s.value.length);v.value=s.value[o];const a=v.value.english.split(" ");a.length===0?y.value=null:y.value=Math.floor(Math.random()*a.length),V.value="",k.value="",O.value=!1,re(()=>{const i=document.querySelector("input");i&&i.focus()})}function _(){if(!v.value||y.value===null)return;const o=v.value.english.split(" "),a=y.value!==null&&o[y.value]||"",i=V.value.trim().toLowerCase().replace(/[.,!?;:]/g,""),D=a.trim().toLowerCase().replace(/[.,!?;:]/g,"");i===D?(p.value++,k.value="答對了！您已連續答對"+p.value+"題！",f.notify({type:"positive",message:k.value,position:"top",timeout:2500,actions:[{icon:"close",color:"white"}]}),l("earn-xp",50)):(k.value=`答錯了，正確答案是：${a}`,p.value=0,f.notify({type:"negative",message:k.value,position:"top",timeout:2500,actions:[{icon:"close",color:"white"}]})),O.value=!0;const J=ne=>{ne.key==="Enter"&&(I(),document.removeEventListener("keydown",J))};document.addEventListener("keydown",J)}function I(){R()}function H(){const o=new SpeechSynthesisUtterance(v.value?.english);window.speechSynthesis.speak(o)}function Y(){const o=new SpeechSynthesisUtterance(M.value?.english);window.speechSynthesis.speak(o)}U(E,o=>{o==="cloze"&&R()});const h=c(null),N=c([]),T=c(null);function S(){if(s.value.length<4){h.value=null;return}const o=Math.floor(Math.random()*s.value.length);h.value=s.value[o],Z()}function Z(){if(!h.value)return;const o=h.value.english,a=s.value.filter(i=>i.english!==o).map(i=>i.english).sort(()=>Math.random()-.5).slice(0,3);N.value=[{label:o,value:o},...a.map(i=>({label:i,value:i}))].sort(()=>Math.random()-.5)}function x(){T.value===h.value?.english?(p.value++,f.notify({type:"positive",message:`答對了！您已連續答對${p.value}題！獲得100xp！`,position:"top",timeout:2500,actions:[{icon:"close",color:"white"}]}),l("earn-xp",100)):(p.value=0,f.notify({type:"negative",message:`答錯了，正確答案是：${h.value?.english}`,position:"top",timeout:2500,actions:[{icon:"close",color:"white"}]})),S()}function ee(){S()}U(E,o=>{o==="multipleChoice"?S():o==="speakout"&&P()});const M=c({chinese:"",english:"",flipped:!1});function P(){if(s.value.length===0){M.value=s.value[0];return}const o=Math.floor(Math.random()*s.value.length);M.value=s.value[o],L.value=""}function oe(){const o=new SpeechSynthesisUtterance(h.value?.english);window.speechSynthesis.speak(o)}U(T,o=>{if(o){const a=new SpeechSynthesisUtterance(o);window.speechSynthesis.speak(a)}});const L=c("");async function le(){try{const o=await navigator.mediaDevices.getUserMedia({audio:!0}),a=new MediaRecorder(o);A.value=[],a.start(),F.value=!0,console.log("錄音開始"),a.ondataavailable=i=>{console.log("錄音中"),console.log(i.data),A.value.push(i.data),j()},a.onstop=()=>{F.value=!1,console.log("錄音結束")},setTimeout(()=>{a.stop(),u.value=!0},5e3)}catch(o){console.error("錄音失敗:",o)}}async function j(){const o=new Blob(A.value,{type:"audio/wav"});new FormData().append("file",o,"recording.wav");const i=URL.createObjectURL(o);g.value&&(g.value.src=i)}return{favoriteCards:s,removeFromFavorites:b,activeTab:E,currentCard:M,currentClozeCard:v,blankIndex:y,userAnswer:V,feedback:k,answered:O,correctCount:p,splitEnglishSentence:G,checkAnswer:_,nextQuestion:I,playAudio:H,playSpeakoutAudio:Y,isRecording:F,hasRecorded:u,audioChunks:A,currentMultipleChoiceCard:h,multipleChoiceOptions:N,selectedOption:T,checkMultipleChoiceAnswer:x,nextMultipleChoiceQuestion:ee,playMultipleChoiceAudio:oe,startRecording:le,uploadAudio:j,recordedText:L,audioPlayer:g,checkAnswerSpeakoutAnswer:X}}}),Fe={class:"q-pa-md full-width"},Ae={key:0,class:"text-center q-pa-lg"},be={key:1},Be={key:0,class:"text-center q-pa-lg"},Ee={key:1},Se={class:"q-mt-md"},Me={key:1,class:"text-red-7"},De={ref:"audioPlayer",controls:""},qe={key:2,class:"q-mt-md"},Qe={key:0,class:"text-center q-pa-lg"},ze={key:1,class:"q-pa-md"},Ve={key:0},Oe={key:0,style:{color:"red"}},Re={class:"q-mt-md"},Te={class:"q-mt-md"},Ue={class:"q-mt-md"},$e={key:0,class:"text-center q-pa-lg"},Ie={key:1,class:"q-pa-md"},Ne={key:0},Pe={class:"q-mt-md"},Le={class:"q-mt-md"};function je(e,l,f,s,F,A){const g=de("FlashCard");return r(),K(ge,{class:"flex flex-center"},{default:C(()=>[t("div",Fe,[l[15]||(l[15]=t("h2",null,"我的最愛字卡",-1)),n(ae,{modelValue:e.activeTab,"onUpdate:modelValue":l[0]||(l[0]=u=>e.activeTab=u),dense:"","border-color":"primary",class:"q-mb-md"},{default:C(()=>[n(q,{name:"view",label:"卡片"}),n(q,{name:"cloze",label:"克漏字"}),n(q,{name:"multipleChoice",label:"四選一"}),n(q,{name:"speakout",label:"開口說"})]),_:1},8,["modelValue"]),n(te,{modelValue:e.activeTab,"onUpdate:modelValue":l[7]||(l[7]=u=>e.activeTab=u),animated:""},{default:C(()=>[n(Q,{name:"view"},{default:C(()=>[e.favoriteCards.length===0?(r(),d("div",Ae,[n(z,{name:"favorite_border",size:"50px",color:"grey-5"}),l[8]||(l[8]=t("p",{class:"text-grey-7"},"還沒有收藏的字卡",-1)),l[9]||(l[9]=t("p",{class:"text-grey-7"},"在學習時點擊愛心圖示來收藏字卡",-1))])):(r(),d("div",be,[n(g,{sentences:e.favoriteCards,onEarnXp:l[1]||(l[1]=u=>e.$emit("earn-xp",u))},null,8,["sentences"])]))]),_:1}),n(Q,{name:"speakout"},{default:C(()=>[e.favoriteCards.length===0?(r(),d("div",Be,[n(z,{name:"favorite_border",size:"50px",color:"grey-5"}),l[10]||(l[10]=t("p",{class:"text-grey-7"},"還沒有收藏的字卡",-1))])):(r(),d("div",Ee,[t("div",Se,[t("h2",null,[B(" 中文："+w(e.currentCard.chinese)+" ",1),l[11]||(l[11]=t("br",null,null,-1)),B(" 英文："+w(e.currentCard.english)+" ",1),n(m,{icon:"volume_up",size:"lg",color:"primary",onClick:e.playSpeakoutAudio,flat:""},null,8,["onClick"])]),e.isRecording?(r(),d("span",Me,"錄音中...")):(r(),K(m,{key:0,icon:"mic",size:"lg",color:"primary",onClick:e.startRecording,flat:""},null,8,["onClick"])),pe(t("audio",De,null,512),[[ve,!e.isRecording&&e.hasRecorded]]),!e.isRecording&&e.hasRecorded?(r(),d("div",qe,[n(m,{color:"primary",label:"很棒！下一題",onClick:l[2]||(l[2]=u=>e.checkAnswerSpeakoutAnswer(!0))}),n(m,{color:"secondary",label:"再試一次",onClick:l[3]||(l[3]=u=>e.checkAnswerSpeakoutAnswer(!1))})])):$("",!0)])]))]),_:1}),n(Q,{name:"cloze"},{default:C(()=>[e.favoriteCards.length===0?(r(),d("div",Qe,[n(z,{name:"favorite_border",size:"50px",color:"grey-5"}),l[12]||(l[12]=t("p",{class:"text-grey-7"},"還沒有收藏的字卡，無法進行克漏字練習",-1))])):(r(),d("div",ze,[e.currentClozeCard?(r(),d("div",Ve,[t("h2",null,[B(" 中文："+w(e.currentClozeCard.chinese)+" ",1),n(m,{icon:"volume_up",size:"lg",color:"primary",onClick:e.playAudio,flat:""},null,8,["onClick"])]),l[13]||(l[13]=t("h2",null,"英文：",-1)),t("p",null,[(r(!0),d(W,null,me(e.splitEnglishSentence,(u,b)=>(r(),d("span",{key:b},[b===e.blankIndex?(r(),d("span",Oe,"_______")):(r(),d(W,{key:1},[B(w(u),1)],64)),B(" "+w(b<e.splitEnglishSentence.length-1?" ":""),1)]))),128))]),t("div",Re,[n(he,{autofocus:!0,modelValue:e.userAnswer,"onUpdate:modelValue":l[4]||(l[4]=u=>e.userAnswer=u),label:"請填入缺少的單字",disable:e.answered,onKeydown:l[5]||(l[5]=fe(u=>!e.answered&&e.userAnswer&&e.checkAnswer(),["enter"])),class:"large-input"},null,8,["modelValue","disable"])]),t("div",Te,[n(m,{color:"primary",label:"檢查答案",onClick:e.checkAnswer,disable:e.answered||!e.userAnswer},null,8,["onClick","disable"])]),t("div",Ue,[n(m,{color:"secondary",label:"下一題",onClick:e.nextQuestion},null,8,["onClick"])])])):$("",!0)]))]),_:1}),n(Q,{name:"multipleChoice"},{default:C(()=>[e.favoriteCards.length<4?(r(),d("div",$e,[n(z,{name:"favorite_border",size:"50px",color:"grey-5"}),l[14]||(l[14]=t("p",{class:"text-grey-7"},"收藏的字卡不足以進行四選一測驗，請收藏更多字卡",-1))])):(r(),d("div",Ie,[e.currentMultipleChoiceCard?(r(),d("div",Ne,[t("h2",null," 中文："+w(e.currentMultipleChoiceCard.chinese),1),n(Ce,{modelValue:e.selectedOption,"onUpdate:modelValue":l[6]||(l[6]=u=>e.selectedOption=u),options:e.multipleChoiceOptions,type:"radio"},null,8,["modelValue","options"]),t("div",Pe,[n(m,{color:"primary",label:"檢查答案",onClick:e.checkMultipleChoiceAnswer,disable:!e.selectedOption},null,8,["onClick","disable"])]),t("div",Le,[n(m,{color:"secondary",label:"下一題",onClick:e.nextMultipleChoiceQuestion},null,8,["onClick"])])])):$("",!0)]))]),_:1})]),_:1},8,["modelValue"])])]),_:1})}const Ze=ce(we,[["render",je],["__scopeId","data-v-3a8c0cd3"],["__file","FavoritePage.vue"]]);export{Ze as default};
