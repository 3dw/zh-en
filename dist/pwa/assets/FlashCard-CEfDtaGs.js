import{Q as l}from"./QBtn-CCYy1IsZ.js";import{H as F,a as y,r as S,d as w,_ as $,J as h,R as v,U as I,S as b,N as i,p as _,v as k,M as c,ac as d,Q as C,P as N}from"./index-DMWxuhnQ.js";const Q=F({name:"FlashCard",props:{sentences:{type:Array,required:!0},searchQuery:{type:String,default:""}},setup(r,{emit:a}){const p=y(()=>{const e=r.searchQuery.toLowerCase().trim();return e?r.sentences.filter(o=>o.chinese.toLowerCase().includes(e)||o.english.toLowerCase().includes(e)):r.sentences}),f=e=>{const o=p.value[e];o&&(o.flipped=!o.flipped,o.flipped&&a("earn-xp",50))},g=(e,o)=>{const n=new SpeechSynthesisUtterance(e);n.lang=o,window.speechSynthesis.speak(n),a("earn-xp",50)},s=S((()=>{const e=localStorage.getItem("en_love_arr");return e?JSON.parse(e):[]})());return{filteredSentences:p,toggleCard:f,speak:g,isInFavorites:e=>s.value.some(o=>o.english===e.english&&o.chinese===e.chinese),toggleFavorite:async e=>{const o=s.value.findIndex(n=>n.english===e.english&&n.chinese===e.chinese);o===-1?(s.value.push({english:e.english,chinese:e.chinese}),a("earn-xp",100)):s.value.splice(o,1),localStorage.setItem("en_love_arr",JSON.stringify(s.value)),await w()}}}}),B={class:"cards-container"},L=["onClick"],J={class:"card-front"},U={class:"heart-button"},q={class:"card-back"},z={class:"heart-button"};function D(r,a,p,f,g,m){return h(),v("div",B,[(h(!0),v(I,null,b(r.filteredSentences,(s,u)=>(h(),v("div",{class:"card",key:u,onClick:t=>r.toggleCard(u)},[i("div",{class:N(["card-inner",{flipped:s.flipped}])},[_(i("div",J,[i("div",U,[c(l,{onClick:d(t=>r.toggleFavorite(s),["stop"]),icon:r.isInFavorites(s)?"favorite":"favorite_border",flat:"",round:"",color:"pink"},null,8,["onClick","icon"])]),i("p",null,C(s.chinese),1),c(l,{onClick:d(t=>r.speak(s.chinese,"zh-TW"),["stop"]),icon:"volume_up",flat:"",round:"",color:"primary"},null,8,["onClick"])],512),[[k,!s.flipped]]),_(i("div",q,[i("div",z,[c(l,{onClick:d(t=>r.toggleFavorite(s),["stop"]),icon:r.isInFavorites(s)?"favorite":"favorite_border",flat:"",round:"",color:"pink"},null,8,["onClick","icon"])]),i("p",null,C(s.english),1),c(l,{onClick:d(t=>r.speak(s.english,"en-US"),["stop"]),icon:"volume_up",flat:"",round:"",color:"primary"},null,8,["onClick"])],512),[[k,s.flipped]])],2)],8,L))),128))])}const T=$(Q,[["render",D],["__scopeId","data-v-9e457b2f"],["__file","FlashCard.vue"]]);export{T as F};