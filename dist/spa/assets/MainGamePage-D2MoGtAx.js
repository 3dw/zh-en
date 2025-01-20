import{Q as r}from"./QBadge-6YeezOhR.js";import{Q as v}from"./QIcon-ChuT0u-5.js";import{a,Q as p}from"./QCard-BiXHr8Tu.js";import{Q as x}from"./QPage-Cu16DzDp.js";import{H as D,r as B,a as L,_ as A,J as F,K as b,L as s,N as u,M as t,O as d,Q as i}from"./index-CqWzIPoc.js";import"./render-oLC7YDmk.js";import"./use-dark-DIykCcpi.js";const $=D({name:"MainGamePage",setup(){const l=B(0),e=B(0),m=B(0),n=B(0),g=localStorage.getItem("letterGameLevel");g&&(l.value=parseInt(g));const C=localStorage.getItem("lowerCaseGameLevel");C&&(e.value=parseInt(C));const o=localStorage.getItem("game1Level");o&&(m.value=parseInt(o));const f=localStorage.getItem("game2Level");f&&(n.value=parseInt(f));const c=L(()=>l.value+e.value+m.value+n.value);return{upperCaseGameLevel:l,lowerCaseGameLevel:e,game1Level:m,game2Level:n,totalLevel:c}}}),q={class:"row items-center q-mb-md"},w={class:"col-auto"},G={class:"row q-col-gutter-md"},y={class:"col-12 col-md-6"},I={class:"col-12 col-md-6"},Q={class:"col-12 col-md-6"},E={class:"col-12 col-md-6"};function k(l,e,m,n,g,C){return F(),b(x,{class:"q-pa-md"},{default:s(()=>[u("div",q,[e[4]||(e[4]=u("h1",{class:"col"},"英文字母遊戲",-1)),u("div",w,[t(r,{color:"primary",class:"text-h6"},{default:s(()=>[d(" 總分: "+i(l.totalLevel),1)]),_:1})])]),u("div",G,[u("div",y,[t(p,{class:"game-card",onClick:e[0]||(e[0]=o=>l.$router.push("/game1"))},{default:s(()=>[t(a,{class:"bg-primary text-white text-center",style:{height:"200px"}},{default:s(()=>[t(v,{name:"abc",size:"100px"}),e[5]||(e[5]=u("div",{class:"text-subtitle2 q-mt-sm"},"大寫字母發音認字遊戲",-1))]),_:1}),t(a,null,{default:s(()=>[e[6]||(e[6]=u("div",{class:"text-h6"},"大寫字母遊戲",-1)),e[7]||(e[7]=u("div",{class:"text-subtitle2"},"練習英文大寫字母的發音和辨識",-1)),t(r,{color:"primary",class:"q-mt-sm"},{default:s(()=>[d(" Level: "+i(l.upperCaseGameLevel),1)]),_:1})]),_:1})]),_:1})]),u("div",I,[t(p,{class:"game-card",onClick:e[1]||(e[1]=o=>l.$router.push("/game2"))},{default:s(()=>[t(a,{class:"bg-secondary text-white text-center",style:{height:"200px"}},{default:s(()=>[t(v,{name:"text_fields",size:"100px"}),e[8]||(e[8]=u("div",{class:"text-subtitle2 q-mt-sm"},"小寫字母發音認字遊戲",-1))]),_:1}),t(a,null,{default:s(()=>[e[9]||(e[9]=u("div",{class:"text-h6"},"小寫字母遊戲",-1)),e[10]||(e[10]=u("div",{class:"text-subtitle2"},"練習英文小寫字母的發音和辨識",-1)),t(r,{color:"secondary",class:"q-mt-sm"},{default:s(()=>[d(" Level: "+i(l.lowerCaseGameLevel),1)]),_:1})]),_:1})]),_:1})]),u("div",Q,[t(p,{class:"game-card",onClick:e[2]||(e[2]=o=>l.$router.push("/game3"))},{default:s(()=>[t(a,{class:"bg-purple text-white text-center",style:{height:"200px"}},{default:s(()=>[t(v,{name:"speaker_notes",size:"100px"}),e[11]||(e[11]=u("div",{class:"text-subtitle2 q-mt-sm"},"有圖發音選字遊戲",-1))]),_:1}),t(a,null,{default:s(()=>[e[12]||(e[12]=u("div",{class:"text-h6"},"看圖選單字遊戲",-1)),e[13]||(e[13]=u("div",{class:"text-subtitle2"},"看圖選擇正確的單字",-1)),t(r,{color:"purple",class:"q-mt-sm"},{default:s(()=>[d(" Level: "+i(l.game1Level),1)]),_:1})]),_:1})]),_:1})]),u("div",E,[t(p,{class:"game-card",onClick:e[3]||(e[3]=o=>l.$router.push("/game4"))},{default:s(()=>[t(a,{class:"bg-deep-orange text-white text-center",style:{height:"200px"}},{default:s(()=>[t(v,{name:"record_voice_over",size:"100px"}),e[14]||(e[14]=u("div",{class:"text-subtitle2 q-mt-sm"},"看圖搭正確對白選對話遊戲",-1))]),_:1}),t(a,null,{default:s(()=>[e[15]||(e[15]=u("div",{class:"text-h6"},"看圖搭正確對白選對話遊戲",-1)),e[16]||(e[16]=u("div",{class:"text-subtitle2"},"看圖選擇正確的對白",-1)),t(r,{color:"deep-orange",class:"q-mt-sm"},{default:s(()=>[d(" Level: "+i(l.game2Level),1)]),_:1})]),_:1})]),_:1})])])]),_:1})}const H=A($,[["render",k],["__scopeId","data-v-ba449b34"],["__file","MainGamePage.vue"]]);export{H as default};
