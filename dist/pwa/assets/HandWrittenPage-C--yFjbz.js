import{a3 as W,r,O as z,a4 as j,a6 as S,a7 as O,a8 as c,ac as o,a9 as n,A as U,ag as b,aj as B,ad as y,ak as J,ah as Z,aa as Q,ab as T,aw as x,ai as G,af as X,av as K,y as _}from"./index-De74Ka4-.js";import{Q as ee}from"./QPage-CU-ijYm-.js";import{C as te}from"./ClosePopup-DfOukJ7e.js";import{a as ae}from"./axios-upsvKRUO.js";const se=W({name:"HandWrittenPage",props:{devMode:{type:Boolean,default:!1}},setup(){const e=r(null),t=r(null),g=r(!1),i=r("A"),C=r(!1),M=r(!1),s=r(""),D=r(!1),k=r(!1),q=r(0),p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");let f=0,w=0;z(()=>{E(),L(),window.addEventListener("resize",E)});const L=()=>{const a=Math.floor(Math.random()*p.length);i.value=p[a],F()},F=()=>{console.log("currentLetter.value:",i.value);const a=new SpeechSynthesisUtterance("Please write the letter: "+A(i.value)+" "+i.value);a.lang="en",a.rate=1.2,a.pitch=1.1,a.volume=.8,speechSynthesis.speak(a)},E=()=>{if(!e.value)return;const a=280;e.value.width=a,e.value.height=a,e.value.style.width="100%",e.value.style.height="auto",e.value.style.aspectRatio="1/1",t.value=e.value.getContext("2d",{willReadFrequently:!0}),t.value&&(t.value.fillStyle="#FFFFFF",t.value.fillRect(0,0,e.value.width,e.value.height),t.value.strokeStyle="#000",t.value.lineWidth=8,t.value.lineCap="round",t.value.lineJoin="round")},Y=a=>{if(g.value=!0,!e.value)return;const l=e.value.getBoundingClientRect(),d=e.value.width/l.width,h=e.value.height/l.height;f=(a.clientX-l.left)*d,w=(a.clientY-l.top)*h},H=a=>{if(!g.value||!t.value||!e.value)return;const l=e.value.getBoundingClientRect(),d=e.value.width/l.width,h=e.value.height/l.height,m=(a.clientX-l.left)*d,u=(a.clientY-l.top)*h;t.value.beginPath(),t.value.moveTo(f,w),t.value.lineTo(m,u),t.value.stroke(),f=m,w=u},I=()=>{g.value=!1},$=a=>{if(a.preventDefault(),!e.value)return;const l=e.value.getBoundingClientRect(),d=a.touches[0];if(!d)return;const h=e.value.width/l.width,m=e.value.height/l.height,u=(d.clientX-l.left+window.pageXOffset)*h,v=(d.clientY-l.top+window.pageYOffset)*m;a.type==="touchstart"?(g.value=!0,f=u,w=v):a.type==="touchmove"&&g.value&&t.value&&(t.value.beginPath(),t.value.moveTo(f,w),t.value.lineTo(u,v),t.value.stroke(),f=u,w=v)},V=()=>{!t.value||!e.value||(t.value.fillStyle="#FFFFFF",t.value.fillRect(0,0,e.value.width,e.value.height))},P=()=>{let a;do a=Math.floor(Math.random()*p.length);while(p[a]===i.value);i.value=p[a],F(),V(),C.value=!1},A=a=>a.toLowerCase()===a?"lowercase":"capital";return{canvas:e,currentLetter:i,showResult:C,showHint:M,resultMessage:s,isCorrect:D,isChecking:k,score:q,startDrawing:Y,draw:H,stopDrawing:I,handleTouch:$,clearCanvas:V,checkAnswer:async()=>{if(!(!e.value||!t.value)){k.value=!0;try{const a=t.value.getImageData(0,0,e.value.width,e.value.height),l=document.createElement("canvas");l.width=e.value.width,l.height=e.value.height,l.getContext("2d")?.putImageData(a,0,0);const h=await new Promise(N=>{l.toBlob(R=>{R&&N(R)},"image/png")}),m=new FormData;m.append("image",h,"drawing.png");const u=A(i.value);console.log("字母大小寫:",u),console.log("當前字母:",i.value);const v=await ae.post(`https://zh-en-backend.alearn13994229.workers.dev/detect-letter/${u}/${i.value}`,m);console.log("response:",v),console.log("response.data:",v.data),console.log("response.data.letter:",v.data.letter),v.data.letter===i.value?(D.value=!0,s.value="太棒了！寫得很好！",q.value+=10,C.value=!0,setTimeout(()=>{P()},1500)):(D.value=!1,s.value="再試一次，記得要寫工整喔！",C.value=!0)}catch(a){console.error("Error checking answer:",a)}finally{k.value=!1}}},nextLetter:P,randomLetter:L,letters:p,detectLetterCase:A,sayPleaseWrite:F}}}),le={class:"row items-center q-mb-md"},oe={class:"col"},ne={class:"text-h6 q-mb-md text-center"},ie={class:"text-primary text-weight-bold text-h4"},re={class:"text-subtitle1 q-mt-sm"},ue={class:"text-positive"},ce={class:"row justify-center q-mb-md"},de={class:"col-12 col-sm-6 col-md-4"},ve={class:"canvas-container"},he={class:"row q-gutter-sm justify-center q-mt-md"},me={key:0,class:"text-center q-mt-md"},ge={class:"text-h6"},pe=["src"];function fe(e,t,g,i,C,M){return S(),O(ee,{class:"q-pa-md"},{default:c(()=>[o("div",le,[o("h1",oe,[n(U,{name:"edit",size:"md",color:"primary",class:"q-mr-sm"}),t[10]||(t[10]=b(" 英文字母手寫練習 "))])]),o("div",ne,[o("div",null,[t[11]||(t[11]=b(" 請寫出字母：")),o("span",ie,B(e.currentLetter),1)]),o("div",re,[t[12]||(t[12]=b(" 得分：")),o("span",ue,B(e.score),1)])]),o("div",ce,[o("div",de,[o("div",ve,[o("canvas",{ref:"canvas",class:"writing-canvas",onMousedown:t[0]||(t[0]=(...s)=>e.startDrawing&&e.startDrawing(...s)),onMousemove:t[1]||(t[1]=(...s)=>e.draw&&e.draw(...s)),onMouseup:t[2]||(t[2]=(...s)=>e.stopDrawing&&e.stopDrawing(...s)),onMouseleave:t[3]||(t[3]=(...s)=>e.stopDrawing&&e.stopDrawing(...s)),onTouchstart:t[4]||(t[4]=(...s)=>e.handleTouch&&e.handleTouch(...s)),onTouchmove:t[5]||(t[5]=(...s)=>e.handleTouch&&e.handleTouch(...s)),onTouchend:t[6]||(t[6]=(...s)=>e.stopDrawing&&e.stopDrawing(...s))},null,544)]),o("div",he,[n(y,{color:"primary",icon:"check_circle",label:"檢查",onClick:e.checkAnswer,loading:e.isChecking},null,8,["onClick","loading"]),n(y,{color:"secondary",icon:"refresh",label:"清除",onClick:e.clearCanvas},null,8,["onClick"]),n(y,{color:"accent",icon:"skip_next",label:"下一個",onClick:e.nextLetter},null,8,["onClick"])]),e.devMode?(S(),J("div",me,[n(y,{flat:"",color:"info",icon:"help",label:"顯示筆順",onClick:t[7]||(t[7]=s=>e.showHint=!0)})])):Z("",!0)])]),n(X,{modelValue:e.showResult,"onUpdate:modelValue":t[8]||(t[8]=s=>e.showResult=s)},{default:c(()=>[n(Q,{style:{"min-width":"300px"}},{default:c(()=>[n(T,{class:"row items-center"},{default:c(()=>[n(x,{icon:e.isCorrect?"sentiment_very_satisfied":"sentiment_dissatisfied",color:e.isCorrect?"positive":"negative","text-color":"white"},null,8,["icon","color"]),o("span",{class:G(["text-h6 q-ml-md",e.isCorrect?"text-positive":"text-negative"])},B(e.resultMessage),3)]),_:1})]),_:1})]),_:1},8,["modelValue"]),n(X,{modelValue:e.showHint,"onUpdate:modelValue":t[9]||(t[9]=s=>e.showHint=s)},{default:c(()=>[n(Q,null,{default:c(()=>[n(T,null,{default:c(()=>[o("div",ge,"字母 "+B(e.currentLetter)+" 的筆順",1)]),_:1}),n(T,{class:"q-pt-none"},{default:c(()=>[o("img",{src:`/images/letters/${e.currentLetter.toLowerCase()}.gif`,alt:"筆順動畫"},null,8,pe)]),_:1}),n(K,{align:"right"},{default:c(()=>[_(n(y,{flat:"",label:"關閉",color:"primary"},null,512),[[te]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}const ke=j(se,[["render",fe],["__scopeId","data-v-34ac888c"],["__file","HandWrittenPage.vue"]]);export{ke as default};
