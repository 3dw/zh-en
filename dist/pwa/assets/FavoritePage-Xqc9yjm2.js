import{Q as m}from"./QIcon-CW19f509.js";import{Q as f}from"./QPage-DJGJ3FVv.js";import{F as c}from"./FlashCard-CEfDtaGs.js";import{H as v,r as g,o as F,_ as C,I as _,J as n,K as h,L as B,N as a,R as u,M as l}from"./index-DMWxuhnQ.js";import"./render-bHsVAQSk.js";import"./QBtn-CCYy1IsZ.js";import"./vm-CnGprgRT.js";import"./Ripple-DLR7J9Gb.js";const x=v({name:"FavoritePage",components:{FlashCard:c},setup(){const e=g([]);return F(()=>{const s=localStorage.getItem("en_love_arr");console.log(s);function t(i){return i.map(r=>({chinese:r.chinese,english:r.english,flipped:!1}))}s&&(e.value=t(JSON.parse(s)))}),{favoriteCards:e,removeFromFavorites:s=>{e.value=e.value.filter(t=>!(t.english===s.english&&t.chinese===s.chinese)),localStorage.setItem("favoriteCards",JSON.stringify(e.value))}}}}),y={class:"q-pa-md full-width"},k={key:0,class:"text-center q-pa-lg"},I={key:1};function N(e,o,s,t,i,r){const p=_("FlashCard");return n(),h(f,{class:"flex flex-center"},{default:B(()=>[a("div",y,[o[3]||(o[3]=a("h2",null,"我的最愛字卡",-1)),e.favoriteCards.length===0?(n(),u("div",k,[l(m,{name:"favorite_border",size:"50px",color:"grey-5"}),o[1]||(o[1]=a("p",{class:"text-grey-7"},"還沒有收藏的字卡",-1)),o[2]||(o[2]=a("p",{class:"text-grey-7"},"在學習時點擊愛心圖示來收藏字卡",-1))])):(n(),u("div",I,[l(p,{sentences:e.favoriteCards,onEarnXp:o[0]||(o[0]=d=>e.$emit("earn-xp",d))},null,8,["sentences"])]))])]),_:1})}const w=C(x,[["render",N],["__scopeId","data-v-aa9db34c"],["__file","FavoritePage.vue"]]);export{w as default};