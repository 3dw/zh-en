import{L as _,r as g,_ as F,N as n,O as w,P as m,U as t,R as i,Q as B,V as y,Y as c,Z as C,S as H,a0 as u,X as h,$ as k,W as P}from"./index--mXypZKa.js";import{Q as b}from"./QCardSection-BB7y6g8U.js";import{Q}from"./QCard-Cdke32GR.js";import{Q as S}from"./QPage--a5e0zZ0.js";import"./use-dark-jiYKUxx6.js";const $=_({name:"ImagePaintPage",setup(){const o=g("#FF4081"),s=["#FF4081","#3F51B5","#4CAF50","#FFC107","#9C27B0","#00BCD4","#FF5722","#999999"],d=["Pink","Blue","Green","Yellow","Purple","Cyan","Orange","Gray"],p=g([{name:"Head頭",style:{top:"10%",left:"55%",width:"20%",height:"15%"},color:"transparent",isHovered:!1},{name:"Eye",style:{top:"24%",left:"60%",width:"10%",height:"5%"},color:"transparent",isHovered:!1},{name:"Ear耳朵",style:{top:"13%",left:"35%",width:"22%",height:"25%"},color:"transparent",isHovered:!1},{name:"Trunk大象鼻子",style:{top:"25%",left:"70%",width:"10%",height:"35%"},color:"transparent",isHovered:!1},{name:"Tusk象牙",style:{top:"30%",left:"61%",width:"25%",height:"8%"},color:"transparent",isHovered:!1},{name:"Leg腿",style:{top:"60%",left:"20%",width:"45%",height:"15%"},color:"transparent",isHovered:!1},{name:"Foot腳",style:{top:"75%",left:"15%",width:"60%",height:"8%"},color:"transparent",isHovered:!1},{name:"Tail尾巴",style:{top:"22%",left:"10%",width:"12%",height:"15%"},color:"transparent",isHovered:!1},{name:"Skin皮膚",style:{top:"35%",left:"20%",width:"42%",height:"25%"},color:"transparent",isHovered:!1}]),v=a=>{const r=s.indexOf(a);return d[r]},f=a=>{const r=new SpeechSynthesisUtterance(a);r.lang="en-US",r.rate=.9,speechSynthesis.speak(r)};return{selectedColor:o,colors:s,colorNames:d,elephantParts:p,colorPart:a=>{a.color=o.value,f(a.name)},hoverPart:(a,r)=>{a.isHovered=r},getColorName:v}}}),N="/assets/elephant-BbVW-IBB.png",q={class:"row items-center q-mb-md"},E={class:"col"},I={class:"row"},T={class:"col-12 col-md-3 q-pr-md"},V={class:"row q-gutter-sm q-mt-sm"},D={class:"color-name"},M={class:"text-caption q-mt-sm"},z={class:"col-12 col-md-9"},A={class:"elephant-container"},L=["onClick","onMouseover","onMouseout"];function O(o,s,d,p,v,f){return n(),w(S,{class:"q-pa-md"},{default:m(()=>[t("div",q,[t("h1",E,[i(B,{name:"brush",size:"md",color:"primary",class:"q-mr-sm"}),s[0]||(s[0]=y(" 大象部位著色遊戲 | Elephant Body Parts Coloring "))])]),t("div",I,[t("div",T,[i(Q,{class:"color-picker"},{default:m(()=>[i(b,null,{default:m(()=>[s[2]||(s[2]=t("div",{class:"text-h6"},"選擇顏色",-1)),t("div",V,[(n(!0),c(k,null,C(o.colors,(e,l)=>(n(),c("div",{key:e,class:"color-option"},[i(H,{style:u({backgroundColor:e}),class:"color-btn",onClick:a=>o.selectedColor=e},null,8,["style","onClick"]),t("div",D,h(o.colorNames[l]),1)]))),128))]),t("div",M,[s[1]||(s[1]=y(" 當前顏色： ")),t("div",{class:"current-color",style:u({backgroundColor:o.selectedColor})},h(o.getColorName(o.selectedColor)),5)])]),_:1})]),_:1})]),t("div",z,[t("div",A,[s[3]||(s[3]=t("img",{src:N,class:"elephant-image",alt:"Elephant"},null,-1)),(n(!0),c(k,null,C(o.elephantParts,e=>(n(),c("div",{key:e.name,class:P(["clickable-area",{hovered:e.isHovered}]),style:u({...e.style,backgroundColor:e.color,opacity:e.color==="transparent"?0:.7}),onClick:l=>o.colorPart(e),onMouseover:l=>o.hoverPart(e,!0),onMouseout:l=>o.hoverPart(e,!1)},[t("span",{class:P(["part-label",{"show-label":e.color!=="transparent"}])},h(e.name),3)],46,L))),128))])])])]),_:1})}const X=F($,[["render",O],["__scopeId","data-v-3bf3cc72"],["__file","ImagePaintPage.vue"]]);export{X as default};
