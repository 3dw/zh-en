import{Q as q,a as ne,b as T,c as te}from"./QTabPanels-CdLU5Izf.js";import{a3 as ae,r,O as se,b as ue,n as ie,w as I,a4 as re,a5 as de,a6 as s,a7 as j,a8 as h,ac as a,a9 as n,ak as d,A as Q,ag as A,aj as f,ad as C,ah as z,y as ce,z as pe,an as J,am as ve,al as me,aq as he,aB as fe}from"./index-tf_47Hl6.js";import{Q as Ce}from"./QPage-hgc8ly6p.js";import{u as ge}from"./use-quasar-DXF5UcSm.js";import{F as ye}from"./FlashCard-BQRORatV.js";import"./touch-D_45sRFn.js";import"./rtl-DFPa-2ov.js";import"./selection-BqUICO_l.js";const ke=ae({name:"FavoritePage",components:{FlashCard:ye},setup(e,{emit:l}){const k=ge(),u=r([]),B=r(!1),w=r([]),F=r(null),c=r(!1);se(()=>{const o=localStorage.getItem("en_love_arr");console.log(o);function t(i){return i.map(D=>({chinese:D.chinese,english:D.english,flipped:!1}))}o&&(u.value=t(JSON.parse(o)),U()),u.value.length>=4&&(S(),E.value="multipleChoice")});const b=o=>{u.value=u.value.filter(t=>!(t.english===o.english&&t.chinese===o.chinese)),localStorage.setItem("favoriteCards",JSON.stringify(u.value))},E=r("view"),p=r(null),g=r(null),V=r(""),y=r(""),O=r(!1),m=r(0),K=ue(()=>p.value?p.value.english.split(" "):[]);function U(){if(u.value.length===0){p.value=null;return}const o=Math.floor(Math.random()*u.value.length);p.value=u.value[o];const t=p.value.english.split(" ");t.length===0?g.value=null:g.value=Math.floor(Math.random()*t.length),V.value="",y.value="",O.value=!1,ie(()=>{const i=document.querySelector("input");i&&i.focus()})}function W(){if(!p.value||g.value===null)return;const o=p.value.english.split(" "),t=g.value!==null&&o[g.value]||"",i=V.value.trim().toLowerCase().replace(/[.,!?;:]/g,""),D=t.trim().toLowerCase().replace(/[.,!?;:]/g,"");i===D?(m.value++,y.value="答對了！您已連續答對"+m.value+"題！",k.notify({type:"positive",message:y.value,position:"top",timeout:2500,actions:[{icon:"close",color:"white"}]}),l("earn-xp",50)):(y.value=`答錯了，正確答案是：${t}`,m.value=0,k.notify({type:"negative",message:y.value,position:"top",timeout:2500,actions:[{icon:"close",color:"white"}]})),O.value=!0;const _=le=>{le.key==="Enter"&&($(),document.removeEventListener("keydown",_))};document.addEventListener("keydown",_)}function $(){U()}function G(){const o=new SpeechSynthesisUtterance(p.value?.english);window.speechSynthesis.speak(o)}function X(){const o=new SpeechSynthesisUtterance(M.value?.english);window.speechSynthesis.speak(o)}I(E,o=>{o==="cloze"&&U()});const v=r(null),N=r([]),R=r(null);function S(){if(u.value.length<4){v.value=null;return}const o=Math.floor(Math.random()*u.value.length);v.value=u.value[o],H()}function H(){if(!v.value)return;const o=v.value.english,t=u.value.filter(i=>i.english!==o).map(i=>i.english).sort(()=>Math.random()-.5).slice(0,3);N.value=[{label:o,value:o},...t.map(i=>({label:i,value:i}))].sort(()=>Math.random()-.5)}function Y(){R.value===v.value?.english?(m.value++,k.notify({type:"positive",message:`答對了！您已連續答對${m.value}題！獲得100xp！`,position:"top",timeout:2500,actions:[{icon:"close",color:"white"}]}),l("earn-xp",100)):(m.value=0,k.notify({type:"negative",message:`答錯了，正確答案是：${v.value?.english}`,position:"top",timeout:2500,actions:[{icon:"close",color:"white"}]})),S()}function Z(){S()}I(E,o=>{o==="multipleChoice"?S():o==="speakout"&&x()});const M=r({chinese:"",english:"",flipped:!1});function x(){if(u.value.length===0){M.value=u.value[0];return}const o=Math.floor(Math.random()*u.value.length);M.value=u.value[o],P.value=""}function ee(){const o=new SpeechSynthesisUtterance(v.value?.english);window.speechSynthesis.speak(o)}I(R,o=>{if(o){const t=new SpeechSynthesisUtterance(o);window.speechSynthesis.speak(t)}});const P=r("");async function oe(){try{const o=await navigator.mediaDevices.getUserMedia({audio:!0}),t=new MediaRecorder(o);w.value=[],t.start(),B.value=!0,console.log("錄音開始"),t.ondataavailable=i=>{console.log("錄音中"),console.log(i.data),w.value.push(i.data),L()},t.onstop=()=>{B.value=!1,console.log("錄音結束")},setTimeout(()=>{t.stop(),c.value=!0},5e3)}catch(o){console.error("錄音失敗:",o)}}async function L(){const o=new Blob(w.value,{type:"audio/wav"});new FormData().append("file",o,"recording.wav");const i=URL.createObjectURL(o);F.value&&(F.value.src=i)}return{favoriteCards:u,removeFromFavorites:b,activeTab:E,currentCard:M,currentClozeCard:p,blankIndex:g,userAnswer:V,feedback:y,answered:O,correctCount:m,splitEnglishSentence:K,checkAnswer:W,nextQuestion:$,playAudio:G,playSpeakoutAudio:X,isRecording:B,hasRecorded:c,audioChunks:w,currentMultipleChoiceCard:v,multipleChoiceOptions:N,selectedOption:R,checkMultipleChoiceAnswer:Y,nextMultipleChoiceQuestion:Z,playMultipleChoiceAudio:ee,startRecording:oe,uploadAudio:L,recordedText:P,audioPlayer:F}}}),we={class:"q-pa-md full-width"},Fe={key:0,class:"text-center q-pa-lg"},be={key:1},Ae={key:0,class:"text-center q-pa-lg"},Be={key:1},Ee={class:"q-mt-md"},Se={key:1,class:"text-red-7"},Me={key:2},De={key:3},qe={ref:"audioPlayer",controls:""},Te={key:0,class:"text-center q-pa-lg"},Qe={key:1,class:"q-pa-md"},ze={key:0},Ve={key:0,style:{color:"red"}},Oe={class:"q-mt-md"},Ue={class:"q-mt-md"},Re={class:"q-mt-md"},Ie={key:0,class:"text-center q-pa-lg"},$e={key:1,class:"q-pa-md"},Ne={key:0},Pe={class:"q-mt-md"},Le={class:"q-mt-md"};function _e(e,l,k,u,B,w){const F=de("FlashCard");return s(),j(Ce,{class:"flex flex-center"},{default:h(()=>[a("div",we,[l[13]||(l[13]=a("h2",null,"我的最愛字卡",-1)),n(ne,{modelValue:e.activeTab,"onUpdate:modelValue":l[0]||(l[0]=c=>e.activeTab=c),dense:"","border-color":"primary",class:"q-mb-md"},{default:h(()=>[n(q,{name:"view",label:"卡片"}),n(q,{name:"cloze",label:"克漏字"}),n(q,{name:"multipleChoice",label:"四選一"}),n(q,{name:"speakout",label:"開口說"})]),_:1},8,["modelValue"]),n(te,{modelValue:e.activeTab,"onUpdate:modelValue":l[5]||(l[5]=c=>e.activeTab=c),animated:""},{default:h(()=>[n(T,{name:"view"},{default:h(()=>[e.favoriteCards.length===0?(s(),d("div",Fe,[n(Q,{name:"favorite_border",size:"50px",color:"grey-5"}),l[6]||(l[6]=a("p",{class:"text-grey-7"},"還沒有收藏的字卡",-1)),l[7]||(l[7]=a("p",{class:"text-grey-7"},"在學習時點擊愛心圖示來收藏字卡",-1))])):(s(),d("div",be,[n(F,{sentences:e.favoriteCards,onEarnXp:l[1]||(l[1]=c=>e.$emit("earn-xp",c))},null,8,["sentences"])]))]),_:1}),n(T,{name:"speakout"},{default:h(()=>[e.favoriteCards.length===0?(s(),d("div",Ae,[n(Q,{name:"favorite_border",size:"50px",color:"grey-5"}),l[8]||(l[8]=a("p",{class:"text-grey-7"},"還沒有收藏的字卡",-1))])):(s(),d("div",Be,[a("div",Ee,[a("h2",null,[A(" 中文："+f(e.currentCard.chinese)+" ",1),l[9]||(l[9]=a("br",null,null,-1)),A(" 英文："+f(e.currentCard.english)+" ",1),n(C,{icon:"volume_up",size:"lg",color:"primary",onClick:e.playSpeakoutAudio,flat:""},null,8,["onClick"])]),e.isRecording?(s(),d("span",Se,"錄音中...")):(s(),j(C,{key:0,icon:"mic",size:"lg",color:"primary",onClick:e.startRecording,flat:""},null,8,["onClick"])),e.recordedText?(s(),d("p",Me,"錄音結果："+f(e.recordedText),1)):z("",!0),e.recordedText&&e.recordedText===e.currentCard.english?(s(),d("p",De,"答對了！")):z("",!0),ce(a("audio",qe,null,512),[[pe,!e.isRecording&&e.hasRecorded]])])]))]),_:1}),n(T,{name:"cloze"},{default:h(()=>[e.favoriteCards.length===0?(s(),d("div",Te,[n(Q,{name:"favorite_border",size:"50px",color:"grey-5"}),l[10]||(l[10]=a("p",{class:"text-grey-7"},"還沒有收藏的字卡，無法進行克漏字練習",-1))])):(s(),d("div",Qe,[e.currentClozeCard?(s(),d("div",ze,[a("h2",null,[A(" 中文："+f(e.currentClozeCard.chinese)+" ",1),n(C,{icon:"volume_up",size:"lg",color:"primary",onClick:e.playAudio,flat:""},null,8,["onClick"])]),l[11]||(l[11]=a("h2",null,"英文：",-1)),a("p",null,[(s(!0),d(J,null,ve(e.splitEnglishSentence,(c,b)=>(s(),d("span",{key:b},[b===e.blankIndex?(s(),d("span",Ve,"_______")):(s(),d(J,{key:1},[A(f(c),1)],64)),A(" "+f(b<e.splitEnglishSentence.length-1?" ":""),1)]))),128))]),a("div",Oe,[n(me,{autofocus:!0,modelValue:e.userAnswer,"onUpdate:modelValue":l[2]||(l[2]=c=>e.userAnswer=c),label:"請填入缺少的單字",disable:e.answered,onKeydown:l[3]||(l[3]=he(c=>!e.answered&&e.userAnswer&&e.checkAnswer(),["enter"])),class:"large-input"},null,8,["modelValue","disable"])]),a("div",Ue,[n(C,{color:"primary",label:"檢查答案",onClick:e.checkAnswer,disable:e.answered||!e.userAnswer},null,8,["onClick","disable"])]),a("div",Re,[n(C,{color:"secondary",label:"下一題",onClick:e.nextQuestion},null,8,["onClick"])])])):z("",!0)]))]),_:1}),n(T,{name:"multipleChoice"},{default:h(()=>[e.favoriteCards.length<4?(s(),d("div",Ie,[n(Q,{name:"favorite_border",size:"50px",color:"grey-5"}),l[12]||(l[12]=a("p",{class:"text-grey-7"},"收藏的字卡不足以進行四選一測驗，請收藏更多字卡",-1))])):(s(),d("div",$e,[e.currentMultipleChoiceCard?(s(),d("div",Ne,[a("h2",null," 中文："+f(e.currentMultipleChoiceCard.chinese),1),n(fe,{modelValue:e.selectedOption,"onUpdate:modelValue":l[4]||(l[4]=c=>e.selectedOption=c),options:e.multipleChoiceOptions,type:"radio"},null,8,["modelValue","options"]),a("div",Pe,[n(C,{color:"primary",label:"檢查答案",onClick:e.checkMultipleChoiceAnswer,disable:!e.selectedOption},null,8,["onClick","disable"])]),a("div",Le,[n(C,{color:"secondary",label:"下一題",onClick:e.nextMultipleChoiceQuestion},null,8,["onClick"])])])):z("",!0)]))]),_:1})]),_:1},8,["modelValue"])])]),_:1})}const Ze=re(ke,[["render",_e],["__scopeId","data-v-d3fd8f6e"],["__file","FavoritePage.vue"]]);export{Ze as default};
