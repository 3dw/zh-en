import{Q as p}from"./QInput-B14v9KEN.js";import{Q as t}from"./QPage-DMYUgUf2.js";import{F as f}from"./FlashCard-68NAEpQl.js";import{H as o,r as n,_ as r,I as d,J as c,K as u,L as g,N as l,M as a}from"./index-BWYx0HxW.js";import"./QIcon-DLcsl25K.js";import"./render-CVPBiWt0.js";import"./vm-ZhWpNCzJ.js";import"./use-id-DHHEJvbK.js";import"./use-dark-CjzxUuLS.js";import"./focus-manager-zjdVGI5d.js";import"./QBtn-wbOzmm8d.js";import"./Ripple-CnG757Fl.js";const m=o({name:"NumberPage",components:{FlashCard:f},setup(){const s=n(""),e=n([{chinese:"一、二、三、四、五、六、七、八、九、十",english:"One, two, three, four, five, six, seven, eight, nine, ten",flipped:!1},{chinese:"一加一等於二。",english:"One plus one equals two.",flipped:!1},{chinese:"二乘以二等於四。",english:"Two times two equals four.",flipped:!1},{chinese:"十除以二等於五。",english:"Ten divided by two equals five.",flipped:!1},{chinese:"這個數字太大了。",english:"This number is too big.",flipped:!1},{chinese:"請數到十。",english:"Please count to ten.",flipped:!1},{chinese:"答案是多少？",english:"What is the answer?",flipped:!1},{chinese:"這題很簡單。",english:"This problem is easy.",flipped:!1},{chinese:"我需要計算機。",english:"I need a calculator.",flipped:!1},{chinese:"這是百分之五十。",english:"This is fifty percent.",flipped:!1},{chinese:"總共是一百元。",english:"The total is one hundred dollars.",flipped:!1},{chinese:"現在是三點半。",english:"It's three thirty.",flipped:!1},{chinese:"這個數字是奇數。",english:"This number is odd.",flipped:!1},{chinese:"那是偶數。",english:"That is an even number.",flipped:!1},{chinese:"請寫下這個數字。",english:"Please write down this number.",flipped:!1},{chinese:"答案是負數。",english:"The answer is negative.",flipped:!1},{chinese:"這是正確答案。",english:"This is the correct answer.",flipped:!1},{chinese:"我們來解這道數學題。",english:"Let's solve this math problem.",flipped:!1},{chinese:"這是小數點。",english:"This is a decimal point.",flipped:!1},{chinese:"四捨五入。",english:"Round up or down.",flipped:!1},{chinese:"加起來等於多少？",english:"What is the sum?",flipped:!1},{chinese:"這是分數。",english:"This is a fraction.",flipped:!1},{chinese:"請計算平均數。",english:"Please calculate the average.",flipped:!1},{chinese:"這個數字太小了。",english:"This number is too small.",flipped:!1},{chinese:"零等於零。",english:"Zero equals zero.",flipped:!1},{chinese:"這是無限大。",english:"This is infinity.",flipped:!1},{chinese:"讓我們數數看。",english:"Let's count.",flipped:!1},{chinese:"這是方程式。",english:"This is an equation.",flipped:!1},{chinese:"我們需要加法。",english:"We need addition.",flipped:!1},{chinese:"用減法解決。",english:"Solve it with subtraction.",flipped:!1},{chinese:"這是乘法表。",english:"This is the multiplication table.",flipped:!1},{chinese:"除以二。",english:"Divide by two.",flipped:!1},{chinese:"這是根號。",english:"This is a square root.",flipped:!1},{chinese:"計算面積。",english:"Calculate the area.",flipped:!1},{chinese:"這是圓周率。",english:"This is pi.",flipped:!1},{chinese:"數字排序。",english:"Sort the numbers.",flipped:!1},{chinese:"這是最大值。",english:"This is the maximum.",flipped:!1},{chinese:"找出最小值。",english:"Find the minimum.",flipped:!1},{chinese:"計算總和。",english:"Calculate the total.",flipped:!1},{chinese:"這是百分比。",english:"This is a percentage.",flipped:!1},{chinese:"四則運算。",english:"The four basic operations.",flipped:!1},{chinese:"這是直角三角形。",english:"This is a right triangle.",flipped:!1},{chinese:"計算周長。",english:"Calculate the perimeter.",flipped:!1},{chinese:"這是等式。",english:"This is an equation.",flipped:!1},{chinese:"求解未知數。",english:"Solve for the unknown.",flipped:!1},{chinese:"這是座標。",english:"These are coordinates.",flipped:!1},{chinese:"畫出圖形。",english:"Draw the shape.",flipped:!1},{chinese:"計算體積。",english:"Calculate the volume.",flipped:!1},{chinese:"這是數列。",english:"This is a sequence.",flipped:!1},{chinese:"找出規律。",english:"Find the pattern.",flipped:!1},{chinese:"這是指數。",english:"This is an exponent.",flipped:!1}]);return{searchQuery:s,sentences:e}}}),T={class:"word-card-list"},b={class:"search-bar"};function v(s,e,w,F,y,C){const h=d("flash-card");return c(),u(t,{class:"q-pa-md"},{default:g(()=>[l("div",T,[e[2]||(e[2]=l("h1",null,"英文數字(點擊空白處可翻面)",-1)),l("div",b,[a(p,{modelValue:s.searchQuery,"onUpdate:modelValue":e[0]||(e[0]=i=>s.searchQuery=i),placeholder:"輸入關鍵字搜尋（中或英）",outlined:"",dense:"",class:"q-mb-md"},null,8,["modelValue"])]),a(h,{sentences:s.sentences,searchQuery:s.searchQuery,onEarnXp:e[1]||(e[1]=i=>s.$emit("earn-xp",i))},null,8,["sentences","searchQuery"])])]),_:1})}const x=r(m,[["render",v],["__scopeId","data-v-195a81aa"],["__file","NumberPage.vue"]]);export{x as default};