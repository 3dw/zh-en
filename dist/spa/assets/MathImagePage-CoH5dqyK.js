import{X as d,r as u,_ as v,Z as c,$ as y,a0 as i,a4 as s,a1 as r,aa as A,a8 as b,ab as n,ac as h,a3 as p,ai as F,ad as m,af as C,a2 as _,ae as g}from"./index-Dy36b27O.js";import{Q as B}from"./QPage-DiUrNdKm.js";const S=d({name:"MathImagePage",setup(){return{mathSymbols:u([{symbol:"+",name:"Plus",isActive:!1,color:"#FF4081"},{symbol:"-",name:"Minus",isActive:!1,color:"#4CAF50"},{symbol:"÷",name:"Divide",isActive:!1,color:"#2196F3"},{symbol:"×",name:"Multiply",isActive:!1,color:"#FFC107"},{symbol:"%",name:"Percent",isActive:!1,color:"#3F51B5"},{symbol:"=",name:"Equal",isActive:!1,color:"#E91E63"},{symbol:"π",name:"Pi",isActive:!1,color:"#00BCD4"},{symbol:"√",name:"Square root",isActive:!1,color:"#FF5722"},{symbol:"±",name:"Plus-minus",isActive:!1,color:"#9C27B0"},{symbol:"∓",name:"Minus-plus",isActive:!1,color:"#009688"},{symbol:"( )",name:"Parentheses",isActive:!1,color:"#FF9800"},{symbol:"[ ]",name:"Brackets",isActive:!1,color:"#795548"},{symbol:"≠",name:"Not equal",isActive:!1,color:"#F44336"},{symbol:">",name:"Greater than",isActive:!1,color:"#673AB7"},{symbol:"<",name:"Less than",isActive:!1,color:"#8BC34A"},{symbol:"Σ",name:"Sum of",isActive:!1,color:"#607D8B"},{symbol:"β",name:"Beta",isActive:!1,color:"#03A9F4"},{symbol:"α",name:"Alpha",isActive:!1,color:"#9575CD"},{symbol:"∫",name:"Integral",isActive:!1,color:"#FF4081"},{symbol:"Ø",name:"Empty set",isActive:!1,color:"#455A64"},{symbol:"∵",name:"Because",isActive:!1,color:"#F06292"},{symbol:"∴",name:"Therefore",isActive:!1,color:"#7E57C2"},{symbol:"∞",name:"Infinity",isActive:!1,color:"#000000"},{symbol:"*",name:"Asterisk",isActive:!1,color:"#FF5252"}]),handleCardClick:a=>{const o=new SpeechSynthesisUtterance(a.name);o.lang="en-US",o.rate=.9,speechSynthesis.speak(o),a.isActive=!0,setTimeout(()=>{a.isActive=!1},1e3)}}}}),k={class:"row items-center q-mb-md"},P={class:"col"},q={class:"row q-col-gutter-md justify-center"},x={class:"text-subtitle1 text-weight-bold"};function I(l,t,a,o,M,D){return c(),y(B,{class:"q-pa-md"},{default:i(()=>[s("div",k,[s("h1",P,[r(A,{name:"calculate",size:"md",color:"primary",class:"q-mr-sm"}),t[0]||(t[0]=b(" 數學符號學習 | Math Symbols Learning "))])]),s("div",q,[(c(!0),n(g,null,h(l.mathSymbols,(e,f)=>(c(),n("div",{key:f,class:"col-6 col-sm-4 col-md-3 col-lg-2"},[r(_,{class:C(["symbol-card cursor-pointer",{highlighted:e.isActive}]),onClick:E=>l.handleCardClick(e)},{default:i(()=>[r(p,{class:"text-center"},{default:i(()=>[s("div",{class:"symbol-text",style:F({color:e.color})},m(e.symbol),5),s("div",x,m(e.name),1)]),_:2},1024)]),_:2},1032,["class","onClick"])]))),128))])]),_:1})}const Q=v(S,[["render",I],["__scopeId","data-v-d90b76e8"],["__file","MathImagePage.vue"]]);export{Q as default};
