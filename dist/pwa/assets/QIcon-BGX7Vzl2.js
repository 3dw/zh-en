import{a as g,h as r,C as B,c as _,g as M}from"./index-DOgm5T9x.js";const j={xs:18,sm:24,md:32,lg:38,xl:46},k={size:String};function p(e,n=j){return g(()=>e.size!==void 0?{fontSize:e.size in n?`${n[e.size]}px`:e.size}:null)}function F(e,n){return e!==void 0&&e()||n}function V(e,n){if(e!==void 0){const u=e();if(u!=null)return u.slice()}return n}function c(e,n){return e!==void 0?n.concat(e()):n}function A(e,n,u,l,a,o){n.key=l+a;const s=r(e,n,u);return a===!0?B(s,o()):s}const h="0 0 24 24",b=e=>e,d=e=>`ionicons ${e}`,y={"mdi-":e=>`mdi ${e}`,"icon-":b,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":d,"ion-ios":d,"ion-logo":d,"iconfont ":b,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},S={o_:"-outlined",r_:"-round",s_:"-sharp"},E={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},q=new RegExp("^("+Object.keys(y).join("|")+")"),C=new RegExp("^("+Object.keys(S).join("|")+")"),x=new RegExp("^("+Object.keys(E).join("|")+")"),D=/^[Mm]\s?[-+]?\.?\d/,I=/^img:/,O=/^svguse:/,Q=/^ion-/,U=/^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /,G=_({name:"QIcon",props:{...k,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:n}){const{proxy:{$q:u}}=M(),l=p(e),a=g(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),o=g(()=>{let s,t=e.name;if(t==="none"||!t)return{none:!0};if(u.iconMapFn!==null){const i=u.iconMapFn(t);if(i!==void 0)if(i.icon!==void 0){if(t=i.icon,t==="none"||!t)return{none:!0}}else return{cls:i.cls,content:i.content!==void 0?i.content:" "}}if(D.test(t)===!0){const[i,v=h]=t.split("|");return{svg:!0,viewBox:v,nodes:i.split("&&").map(R=>{const[$,w,z]=R.split("@@");return r("path",{style:w,d:$,transform:z})})}}if(I.test(t)===!0)return{img:!0,src:t.substring(4)};if(O.test(t)===!0){const[i,v=h]=t.split("|");return{svguse:!0,src:i.substring(7),viewBox:v}}let f=" ";const m=t.match(q);if(m!==null)s=y[m[1]](t);else if(U.test(t)===!0)s=t;else if(Q.test(t)===!0)s=`ionicons ion-${u.platform.is.ios===!0?"ios":"md"}${t.substring(3)}`;else if(x.test(t)===!0){s="notranslate material-symbols";const i=t.match(x);i!==null&&(t=t.substring(6),s+=E[i[1]]),f=t}else{s="notranslate material-icons";const i=t.match(C);i!==null&&(t=t.substring(2),s+=S[i[1]]),f=t}return{cls:s,content:f}});return()=>{const s={class:a.value,style:l.value,"aria-hidden":"true",role:"presentation"};return o.value.none===!0?r(e.tag,s,F(n.default)):o.value.img===!0?r(e.tag,s,c(n.default,[r("img",{src:o.value.src})])):o.value.svg===!0?r(e.tag,s,c(n.default,[r("svg",{viewBox:o.value.viewBox||"0 0 24 24"},o.value.nodes)])):o.value.svguse===!0?r(e.tag,s,c(n.default,[r("svg",{viewBox:o.value.viewBox},[r("use",{"xlink:href":o.value.src})])])):(o.value.cls!==void 0&&(s.class+=" "+o.value.cls),r(e.tag,s,c(n.default,[o.value.content])))}}});export{G as Q,V as a,A as b,p as c,c as d,j as e,F as h,k as u};