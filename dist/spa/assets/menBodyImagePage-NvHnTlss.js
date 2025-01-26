import{Q as g}from"./QPage-HD9iDhIy.js";import{_ as d}from"./menbody-FXY9GL4q.js";import{L as m,r as w,_ as f,N as n,O as _,P as D,U as e,Y as l,Z as y,W as p,V as B,X as t,$ as k}from"./index-D7DZ91lx.js";const F=m({name:"MenBodyImagePage",emits:["earn-xp"],setup(i,{emit:o}){const r=w([{english:"Head",chinese:"頭",phonetic:"[hɛd]",position:"head-pos",arrowDirection:"arrow-down"},{english:"Shoulder",chinese:"肩膀",phonetic:"[ˋʃoldɚ]",position:"shoulder-pos",arrowDirection:"arrow-left"},{english:"Chest",chinese:"胸部",phonetic:"[tʃɛst]",position:"chest-pos",arrowDirection:"arrow-right"},{english:"Arm",chinese:"手臂",phonetic:"[ɑrm]",position:"arm-pos",arrowDirection:"arrow-left"},{english:"Waist",chinese:"腰",phonetic:"[west]",position:"waist-pos",arrowDirection:"arrow-right"},{english:"Hip",chinese:"臀部",phonetic:"[hɪp]",position:"hip-pos",arrowDirection:"arrow-left"},{english:"Thigh",chinese:"大腿",phonetic:"[θaɪ]",position:"thigh-pos",arrowDirection:"arrow-right"},{english:"Knee",chinese:"膝蓋",phonetic:"[ni]",position:"knee-pos",arrowDirection:"arrow-left"},{english:"Calf",chinese:"小腿",phonetic:"[kæf]",position:"calf-pos",arrowDirection:"arrow-left"},{english:"Foot",chinese:"腳",phonetic:"[fʊt]",position:"foot-pos",arrowDirection:"arrow-up"}]);function a(c){const h=new SpeechSynthesisUtterance(c);speechSynthesis.speak(h),o("earn-xp",5)}return{menBodyParts:r,speakEnglish:a,menBodyImage:d}}}),v={class:"image-container"},C=["onClick"],E={class:"label-text"},P={class:"chinese"},x={class:"phonetic"};function $(i,o,r,a,c,h){return n(),_(g,{class:"q-pa-md"},{default:D(()=>[e("div",null,[o[1]||(o[1]=e("h1",null,"男性身體部位（可點選發音）",-1)),e("div",v,[o[0]||(o[0]=e("img",{src:d,alt:"Men Body",class:"men-body-image"},null,-1)),(n(!0),l(k,null,y(i.menBodyParts,(s,u)=>(n(),l("div",{key:u,class:p(["label",s.position]),onClick:I=>i.speakEnglish(s.english)},[e("div",{class:p(["arrow",s.arrowDirection])},null,2),e("div",E,[B(t(s.english)+" ",1),e("span",P," ("+t(s.chinese)+") ",1),e("span",x,t(s.phonetic),1)])],10,C))),128))])])]),_:1})}const N=f(F,[["render",$],["__scopeId","data-v-7e420c48"],["__file","menBodyImagePage.vue"]]);export{N as default};
