import{c as me,k as ke,ar as _,V as we,p as he,r as v,b as T,as as Be,M as ve,at as Ie,v as xe,au as ge,w as H,o as M,L as R,G as W,W as Ae,h as N,T as ye,j as be,d as Te,B as Ce,a3 as Se,O as Pe,a4 as qe,a6 as B,a7 as U,a8 as p,ac as s,a9 as o,A as Ee,ag as O,aj as C,ad as A,ak as y,am as F,an as z,al as _e,aq as Oe,aa as ze,ab as K,av as De,y as Qe,af as Ve}from"./index-De74Ka4-.js";import{u as je,v as G,a as Le,p as X,b as $e,c as He,r as Y,s as Me,d as Re}from"./position-engine-DBJnp_2D.js";import{c as J}from"./selection-9b_hriWF.js";import{Q as We}from"./QPage-CU-ijYm-.js";import{C as Ne}from"./ClosePopup-DfOukJ7e.js";const Z=me({name:"QTooltip",inheritAttrs:!1,props:{...je,...ke,..._,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{..._.transitionShow,default:"jump-down"},transitionHide:{..._.transitionHide,default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:G},self:{type:String,default:"top middle",validator:G},offset:{type:Array,default:()=>[14,14],validator:Le},scrollTarget:we,delay:{type:Number,default:0},hideDelay:{type:Number,default:0},persistent:Boolean},emits:[...he],setup(e,{slots:t,emit:k,attrs:f}){let i,d;const c=be(),{proxy:{$q:r}}=c,l=v(null),n=v(!1),u=T(()=>X(e.anchor,r.lang.rtl)),I=T(()=>X(e.self,r.lang.rtl)),w=T(()=>e.persistent!==!0),{registerTick:S,removeTick:P}=Be(),{registerTimeout:b}=ve(),{transitionProps:ee,transitionStyle:te}=Ie(e),{localScrollTarget:D,changeScrollEvent:se,unconfigureScrollTarget:re}=$e(e,L),{anchorEl:m,canShow:ne,anchorEvents:x}=He({showing:n,configureAnchorEl:de}),{show:ae,hide:q}=xe({showing:n,canShow:ne,handleShow:oe,handleHide:le,hideOnRouteChange:w,processOnMount:!0});Object.assign(x,{delayShow:ie,delayHide:ce});const{showPortal:Q,hidePortal:V,renderPortal:ue}=ge(c,l,fe,"tooltip");if(r.platform.is.mobile===!0){const a={anchorEl:m,innerRef:l,onClickOutside(h){return q(h),h.target.classList.contains("q-dialog__backdrop")&&Ce(h),!0}},E=T(()=>e.modelValue===null&&e.persistent!==!0&&n.value===!0);H(E,h=>{(h===!0?Re:Y)(a)}),M(()=>{Y(a)})}function oe(a){Q(),S(()=>{d=new MutationObserver(()=>g()),d.observe(l.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),g(),L()}),i===void 0&&(i=H(()=>r.screen.width+"|"+r.screen.height+"|"+e.self+"|"+e.anchor+"|"+r.lang.rtl,g)),b(()=>{Q(!0),k("show",a)},e.transitionDuration)}function le(a){P(),V(),j(),b(()=>{V(!0),k("hide",a)},e.transitionDuration)}function j(){d!==void 0&&(d.disconnect(),d=void 0),i!==void 0&&(i(),i=void 0),re(),R(x,"tooltipTemp")}function g(){Me({targetEl:l.value,offset:e.offset,anchorEl:m.value,anchorOrigin:u.value,selfOrigin:I.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ie(a){if(r.platform.is.mobile===!0){J(),document.body.classList.add("non-selectable");const E=m.value,h=["touchmove","touchcancel","touchend","click"].map($=>[E,$,"delayHide","passiveCapture"]);W(x,"tooltipTemp",h)}b(()=>{ae(a)},e.delay)}function ce(a){r.platform.is.mobile===!0&&(R(x,"tooltipTemp"),J(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),b(()=>{q(a)},e.hideDelay)}function de(){if(e.noParentEvent===!0||m.value===null)return;const a=r.platform.is.mobile===!0?[[m.value,"touchstart","delayShow","passive"]]:[[m.value,"mouseenter","delayShow","passive"],[m.value,"mouseleave","delayHide","passive"]];W(x,"anchor",a)}function L(){if(m.value!==null||e.scrollTarget!==void 0){D.value=Ae(m.value,e.scrollTarget);const a=e.noParentEvent===!0?g:q;se(D.value,a)}}function pe(){return n.value===!0?N("div",{...f,ref:l,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",f.class],style:[f.style,te.value],role:"tooltip"},Te(t.default)):null}function fe(){return N(ye,ee.value,pe)}return M(j),Object.assign(c.proxy,{updatePosition:g}),ue}}),Ue=Se({name:"Song4WordPage",setup(){const e=v({zh:"請看影片，聽歌曲，填入正確的單字",en:"Watch the video, listen to the song, and fill in the correct words"}),t=v(!1),k=v(""),f=v(!1),i=v([]),d=n=>{const u=new SpeechSynthesisUtterance(n==="zh"?e.value.zh:e.value.en);u.lang=n==="zh"?"zh-TW":"en-US",u.rate=.9,speechSynthesis.speak(u)};function c(){i.value=[[{text:"",isBlank:!0,userInput:"",correctAnswer:"A"},{text:"is for",isBlank:!1,userInput:""},{text:"",isBlank:!0,userInput:"",correctAnswer:"apple"}],[{text:"",isBlank:!0,userInput:"",correctAnswer:"B"},{text:"is for",isBlank:!1,userInput:""},{text:"",isBlank:!0,userInput:"",correctAnswer:"banana"}],[{text:"",isBlank:!0,userInput:"",correctAnswer:"C"},{text:"is for",isBlank:!1,userInput:""},{text:"",isBlank:!0,userInput:"",correctAnswer:"cake"}],[{text:"",isBlank:!0,userInput:"",correctAnswer:"D"},{text:"is for",isBlank:!1,userInput:""},{text:"",isBlank:!0,userInput:"",correctAnswer:"duck"}],[{text:"",isBlank:!0,userInput:"",correctAnswer:"E"},{text:"is for",isBlank:!1,userInput:""},{text:"",isBlank:!0,userInput:"",correctAnswer:"elephant"}],[{text:"",isBlank:!0,userInput:"",correctAnswer:"F"},{text:"is for",isBlank:!1,userInput:""},{text:"",isBlank:!0,userInput:"",correctAnswer:"fish"}],[{text:"",isBlank:!0,userInput:"",correctAnswer:"G"},{text:"is for",isBlank:!1,userInput:""},{text:"",isBlank:!0,userInput:"",correctAnswer:"guitar"}],[{text:"",isBlank:!0,userInput:"",correctAnswer:"H"},{text:"is for",isBlank:!1,userInput:""},{text:"",isBlank:!0,userInput:"",correctAnswer:"hat"}],[{text:"",isBlank:!0,userInput:"",correctAnswer:"I"},{text:"is for",isBlank:!1,userInput:""},{text:"",isBlank:!0,userInput:"",correctAnswer:"igloo"}],[{text:"",isBlank:!0,userInput:"",correctAnswer:"J"},{text:"is for",isBlank:!1,userInput:""},{text:"",isBlank:!0,userInput:"",correctAnswer:"juice"}],[{text:"",isBlank:!0,userInput:"",correctAnswer:"K"},{text:"is for",isBlank:!1,userInput:""},{text:"",isBlank:!0,userInput:"",correctAnswer:"kitten"}],[{text:"",isBlank:!0,userInput:"",correctAnswer:"L"},{text:"is for",isBlank:!1,userInput:""},{text:"",isBlank:!0,userInput:"",correctAnswer:"lemon"}],[{text:"",isBlank:!0,userInput:"",correctAnswer:"M"},{text:"is for",isBlank:!1,userInput:""},{text:"",isBlank:!0,userInput:"",correctAnswer:"mittens"}],[{text:"",isBlank:!0,userInput:"",correctAnswer:"N"},{text:"is for",isBlank:!1,userInput:""},{text:"",isBlank:!0,userInput:"",correctAnswer:"nest"}],[{text:"",isBlank:!0,userInput:"",correctAnswer:"O"},{text:"is for",isBlank:!1,userInput:""},{text:"",isBlank:!0,userInput:"",correctAnswer:"orange"}],[{text:"",isBlank:!0,userInput:"",correctAnswer:"P"},{text:"is for",isBlank:!1,userInput:""},{text:"",isBlank:!0,userInput:"",correctAnswer:"pig"}],[{text:"",isBlank:!0,userInput:"",correctAnswer:"Q"},{text:"is for",isBlank:!1,userInput:""},{text:"",isBlank:!0,userInput:"",correctAnswer:"queen"}],[{text:"",isBlank:!0,userInput:"",correctAnswer:"R"},{text:"is for",isBlank:!1,userInput:""},{text:"",isBlank:!0,userInput:"",correctAnswer:"ring"}],[{text:"",isBlank:!0,userInput:"",correctAnswer:"S"},{text:"is for",isBlank:!1,userInput:""},{text:"",isBlank:!0,userInput:"",correctAnswer:"socks"}],[{text:"",isBlank:!0,userInput:"",correctAnswer:"T"},{text:"is for",isBlank:!1,userInput:""},{text:"",isBlank:!0,userInput:"",correctAnswer:"teddybear"}],[{text:"",isBlank:!0,userInput:"",correctAnswer:"U"},{text:"is for",isBlank:!1,userInput:""},{text:"",isBlank:!0,userInput:"",correctAnswer:"umbrella"}],[{text:"",isBlank:!0,userInput:"",correctAnswer:"V"},{text:"is for",isBlank:!1,userInput:""},{text:"",isBlank:!0,userInput:"",correctAnswer:"vegetables"}],[{text:"",isBlank:!0,userInput:"",correctAnswer:"W"},{text:"is for",isBlank:!1,userInput:""},{text:"",isBlank:!0,userInput:"",correctAnswer:"wolf"}],[{text:"",isBlank:!0,userInput:"",correctAnswer:"X"},{text:"is for",isBlank:!1,userInput:""},{text:"",isBlank:!0,userInput:"",correctAnswer:"xylophone"}],[{text:"",isBlank:!0,userInput:"",correctAnswer:"Y"},{text:"is for",isBlank:!1,userInput:""},{text:"",isBlank:!0,userInput:"",correctAnswer:"yoyo"}],[{text:"",isBlank:!0,userInput:"",correctAnswer:"Z"},{text:"is for",isBlank:!1,userInput:""},{text:"",isBlank:!0,userInput:"",correctAnswer:"zipper"}]]}const r=()=>{f.value=!0;let n=!0;const u=[];i.value.forEach(I=>{I.forEach(w=>{if(w.isBlank){const S=w.userInput.toLowerCase().trim(),P=w.correctAnswer?.toLowerCase()||"";S!==P&&(n=!1,u.push({userInput:w.userInput||"(空白)",correctAnswer:w.correctAnswer||""}))}})}),n?k.value=`太棒了！
你已經學會這些字母和單字了！`:k.value=`再試一次：
`+u.map(I=>`你的答案：${I.userInput}
正確答案：${I.correctAnswer}`).join(`

`),t.value=!0,setTimeout(()=>{t.value=!1,f.value=!1},3e3)},l=()=>{i.value.forEach(n=>{n.forEach(u=>{u.isBlank&&(u.userInput="")})}),t.value=!1,f.value=!1};return Pe(()=>{c(),setTimeout(()=>{d("zh"),setTimeout(()=>{d("en")},3e3)},500)}),{gameInstruction:e,lyricsLines:i,showResult:t,resultMessage:k,showingResult:f,speakInstruction:d,checkAnswer:r,resetAnswers:l}}}),Fe={class:"row items-center q-mb-md"},Ke={class:"col"},Ge={class:"text-h6 q-mb-md text-center"},Xe={class:"row justify-center items-center q-gutter-md"},Ye={class:"text-subtitle1"},Je={class:"row q-gutter-sm"},Ze={class:"row justify-center q-mt-lg"},et={class:"col-12 col-sm-10 col-md-8"},tt={class:"row items-center q-gutter-sm"},st={key:1,class:"text-h6"},rt={class:"row justify-center q-mt-lg"},nt={class:"text-body1",style:{"white-space":"pre-line"}};function at(e,t,k,f,i,d){return B(),U(We,{class:"q-pa-md"},{default:p(()=>[s("div",Fe,[s("h1",Ke,[o(Ee,{name:"music_note",size:"md",color:"primary",class:"q-mr-sm"}),t[3]||(t[3]=O(" 英文兒歌克漏字學習 "))])]),s("div",Ge,[s("div",Xe,[s("div",null,[s("div",null,C(e.gameInstruction.zh),1),s("div",Ye,C(e.gameInstruction.en),1)]),s("div",Je,[o(A,{icon:"volume_up",color:"primary",round:"",size:"md",onClick:t[0]||(t[0]=c=>e.speakInstruction("zh")),class:"q-mr-sm"},{default:p(()=>[o(Z,null,{default:p(()=>t[4]||(t[4]=[O("中文說明")])),_:1})]),_:1}),o(A,{icon:"volume_up",color:"secondary",round:"",size:"md",onClick:t[1]||(t[1]=c=>e.speakInstruction("en"))},{default:p(()=>[o(Z,null,{default:p(()=>t[5]||(t[5]=[O("English Instruction")])),_:1})]),_:1})])])]),t[7]||(t[7]=s("div",{class:"row justify-center q-mb-lg"},[s("div",{class:"col-12 col-sm-10 col-md-8"},[s("div",{class:"video-container"},[s("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/ChqnN3cKzXQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""})])])],-1)),s("div",Ze,[s("div",et,[(B(!0),y(z,null,F(e.lyricsLines,(c,r)=>(B(),y("div",{key:r,class:"q-mb-md"},[s("div",tt,[(B(!0),y(z,null,F(c,(l,n)=>(B(),y(z,{key:`${r}-${n}`},[l.isBlank?(B(),U(_e,{key:0,modelValue:l.userInput,"onUpdate:modelValue":u=>l.userInput=u,outlined:"",dense:"",class:"blank-input",disable:e.showingResult,onKeyup:Oe(e.checkAnswer,["enter"])},null,8,["modelValue","onUpdate:modelValue","disable","onKeyup"])):(B(),y("span",st,C(l.text),1))],64))),128))])]))),128)),s("div",rt,[o(A,{label:"檢查答案",color:"primary",onClick:e.checkAnswer,disable:e.showingResult,class:"q-mx-sm"},null,8,["onClick","disable"]),o(A,{label:"重新開始",color:"secondary",onClick:e.resetAnswers,disable:e.showingResult,class:"q-mx-sm"},null,8,["onClick","disable"])])])]),o(Ve,{modelValue:e.showResult,"onUpdate:modelValue":t[2]||(t[2]=c=>e.showResult=c)},{default:p(()=>[o(ze,{style:{"min-width":"350px"}},{default:p(()=>[o(K,null,{default:p(()=>t[6]||(t[6]=[s("div",{class:"text-h6"},"檢查結果",-1)])),_:1}),o(K,{class:"q-pt-none"},{default:p(()=>[s("div",nt,C(e.resultMessage),1)]),_:1}),o(De,{align:"right"},{default:p(()=>[Qe(o(A,{flat:"",label:"關閉",color:"primary"},null,512),[[Ne]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}const dt=qe(Ue,[["render",at],["__scopeId","data-v-8d076f63"],["__file","Song4WordPage.vue"]]);export{dt as default};
