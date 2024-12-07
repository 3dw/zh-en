import{a as o,c as Y,h,a4 as te,t as ne,k as D,v as ae,B as re,z as G,A as ue,g as J,r as I,b as le,C as ie,s as T,y as oe,W as se,l as ce}from"./index-D99CngdE.js";import{u as N,d as de,e as fe,Q,c as ve}from"./QIcon-B31ucMs-.js";const ge={size:{type:[String,Number],default:"1em"},color:String};function me(e){return{cSize:o(()=>e.size in N?`${N[e.size]}px`:e.size),classes:o(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}const be=Y({name:"QSpinner",props:{...ge,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:r}=me(e);return()=>h("svg",{class:r.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[h("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function he(e,t){const r=e.style;for(const n in t)r[n]=t[n]}function ze(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=te(e);if(t)return t.$el||t}function ye(e,t=250){let r=!1,n;return function(){return r===!1&&(r=!0,setTimeout(()=>{r=!1},t),n=e.apply(this,arguments)),n}}function V(e,t,r,n){r.modifiers.stop===!0&&G(e);const l=r.modifiers.color;let m=r.modifiers.center;m=m===!0||n===!0;const f=document.createElement("span"),d=document.createElement("span"),E=ue(e),{left:y,top:v,width:C,height:u}=t.getBoundingClientRect(),k=Math.sqrt(C*C+u*u),g=k/2,p=`${(C-k)/2}px`,i=m?p:`${E.left-y-g}px`,b=`${(u-k)/2}px`,R=m?b:`${E.top-v-g}px`;d.className="q-ripple__inner",he(d,{height:`${k}px`,width:`${k}px`,transform:`translate3d(${i},${R},0) scale3d(.2,.2,1)`,opacity:0}),f.className=`q-ripple${l?" text-"+l:""}`,f.setAttribute("dir","ltr"),f.appendChild(d),t.appendChild(f);const P=()=>{f.remove(),clearTimeout(B)};r.abort.push(P);let B=setTimeout(()=>{d.classList.add("q-ripple__inner--enter"),d.style.transform=`translate3d(${p},${b},0) scale3d(1,1,1)`,d.style.opacity=.2,B=setTimeout(()=>{d.classList.remove("q-ripple__inner--enter"),d.classList.add("q-ripple__inner--leave"),d.style.opacity=0,B=setTimeout(()=>{f.remove(),r.abort.splice(r.abort.indexOf(P),1)},275)},250)},50)}function W(e,{modifiers:t,value:r,arg:n}){const l=Object.assign({},e.cfg.ripple,t,r);e.modifiers={early:l.early===!0,stop:l.stop===!0,center:l.center===!0,color:l.color||n,keyCodes:[].concat(l.keyCodes||13)}}const ke=ne({name:"ripple",beforeMount(e,t){const r=t.instance.$.appContext.config.globalProperties.$q.config||{};if(r.ripple===!1)return;const n={cfg:r,enabled:t.value!==!1,modifiers:{},abort:[],start(l){n.enabled===!0&&l.qSkipRipple!==!0&&l.type===(n.modifiers.early===!0?"pointerdown":"click")&&V(l,e,n,l.qKeyEvent===!0)},keystart:ye(l=>{n.enabled===!0&&l.qSkipRipple!==!0&&D(l,n.modifiers.keyCodes)===!0&&l.type===`key${n.modifiers.early===!0?"down":"up"}`&&V(l,e,n,!0)},300)};W(n,t),e.__qripple=n,ae(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const r=e.__qripple;r!==void 0&&(r.enabled=t.value!==!1,r.enabled===!0&&Object(t.value)===t.value&&W(r,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(r=>{r()}),re(t,"main"),delete e._qripple)}}),Z={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},pe=Object.keys(Z),qe={align:{type:String,validator:e=>pe.includes(e)}};function xe(e){return o(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${Z[t]}`})}function Ce(e){return e.appContext.config.globalProperties.$router!==void 0}function Ke(e){return e.isUnmounted===!0||e.isDeactivated===!0}function H(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function U(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Le(e,t){for(const r in t){const n=t[r],l=e[r];if(typeof n=="string"){if(n!==l)return!1}else if(Array.isArray(l)===!1||l.length!==n.length||n.some((m,f)=>m!==l[f]))return!1}return!0}function X(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((r,n)=>r===t[n]):e.length===1&&e[0]===t}function $e(e,t){return Array.isArray(e)===!0?X(e,t):Array.isArray(t)===!0?X(t,e):e===t}function Se(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const r in e)if($e(e[r],t[r])===!1)return!1;return!0}const ee={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean},De={...ee,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"}};function Ee({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const r=J(),{props:n,proxy:l,emit:m}=r,f=Ce(r),d=o(()=>n.disable!==!0&&n.href!==void 0),E=t===!0?o(()=>f===!0&&n.disable!==!0&&d.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):o(()=>f===!0&&d.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),y=o(()=>E.value===!0?R(n.to):null),v=o(()=>y.value!==null),C=o(()=>d.value===!0||v.value===!0),u=o(()=>n.type==="a"||C.value===!0?"a":n.tag||e||"div"),k=o(()=>d.value===!0?{href:n.href,target:n.target}:v.value===!0?{href:y.value.href,target:n.target}:{}),g=o(()=>{if(v.value===!1)return-1;const{matched:s}=y.value,{length:q}=s,L=s[q-1];if(L===void 0)return-1;const S=l.$route.matched;if(S.length===0)return-1;const w=S.findIndex(U.bind(null,L));if(w!==-1)return w;const z=H(s[q-2]);return q>1&&H(L)===z&&S[S.length-1].path!==z?S.findIndex(U.bind(null,s[q-2])):w}),p=o(()=>v.value===!0&&g.value!==-1&&Le(l.$route.params,y.value.params)),i=o(()=>p.value===!0&&g.value===l.$route.matched.length-1&&Se(l.$route.params,y.value.params)),b=o(()=>v.value===!0?i.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":p.value===!0?` ${n.activeClass}`:"":"");function R(s){try{return l.$router.resolve(s)}catch{}return null}function P(s,{returnRouterError:q,to:L=n.to,replace:S=n.replace}={}){if(n.disable===!0)return s.preventDefault(),Promise.resolve(!1);if(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey||s.button!==void 0&&s.button!==0||n.target==="_blank")return Promise.resolve(!1);s.preventDefault();const w=l.$router[S===!0?"replace":"push"](L);return q===!0?w:w.then(()=>{}).catch(()=>{})}function B(s){if(v.value===!0){const q=L=>P(s,L);m("click",s,q),s.defaultPrevented!==!0&&q()}else m("click",s)}return{hasRouterLink:v,hasHrefLink:d,hasLink:C,linkTag:u,resolvedLink:y,linkIsActive:p,linkIsExactActive:i,linkClass:b,linkAttrs:k,getLink:R,navigateToRouterLink:P,navigateOnClick:B}}const F={none:0,xs:4,sm:8,md:16,lg:24,xl:32},we={xs:8,sm:10,md:14,lg:20,xl:24},Pe=["button","submit","reset"],Be=/[^\s]\/[^\s]/,Re=["flat","outline","push","unelevated"];function Te(e,t){return e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t}const _e={...de,...ee,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Re.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...qe.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},Ae={..._e,round:Boolean};function Oe(e){const t=fe(e,we),r=xe(e),{hasRouterLink:n,hasLink:l,linkTag:m,linkAttrs:f,navigateOnClick:d}=Ee({fallbackTag:"button"}),E=o(()=>{const i=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},i,{padding:e.padding.split(/\s+/).map(b=>b in F?F[b]+"px":b).join(" "),minWidth:"0",minHeight:"0"}):i}),y=o(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),v=o(()=>e.disable!==!0&&e.loading!==!0),C=o(()=>v.value===!0?e.tabindex||0:-1),u=o(()=>Te(e,"standard")),k=o(()=>{const i={tabindex:C.value};return l.value===!0?Object.assign(i,f.value):Pe.includes(e.type)===!0&&(i.type=e.type),m.value==="a"?(e.disable===!0?i["aria-disabled"]="true":i.href===void 0&&(i.role="button"),n.value!==!0&&Be.test(e.type)===!0&&(i.type=e.type)):e.disable===!0&&(i.disabled="",i["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(i,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),i}),g=o(()=>{let i;e.color!==void 0?e.flat===!0||e.outline===!0?i=`text-${e.textColor||e.color}`:i=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(i=`text-${e.textColor}`);const b=e.round===!0?"round":`rectangle${y.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${u.value} q-btn--${b}`+(i!==void 0?" "+i:"")+(v.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),p=o(()=>r.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:g,style:E,innerClasses:p,attributes:k,hasLink:l,linkTag:m,navigateOnClick:d,isActionable:v}}const{passiveCapture:x}=ce;let _=null,A=null,O=null;const Ie=Y({name:"QBtn",props:{...Ae,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:r}){const{proxy:n}=J(),{classes:l,style:m,innerClasses:f,attributes:d,hasLink:E,linkTag:y,navigateOnClick:v,isActionable:C}=Oe(e),u=I(null),k=I(null);let g=null,p,i=null;const b=o(()=>e.label!==void 0&&e.label!==null&&e.label!==""),R=o(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:E.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),P=o(()=>({center:e.round})),B=o(()=>{const a=Math.max(0,Math.min(100,e.percentage));return a>0?{transition:"transform 0.6s",transform:`translateX(${a-100}%)`}:{}}),s=o(()=>{if(e.loading===!0)return{onMousedown:j,onTouchstart:j,onClick:j,onKeydown:j,onKeyup:j};if(C.value===!0){const a={onClick:L,onKeydown:S,onMousedown:z};if(n.$q.platform.has.touch===!0){const c=e.onTouchstart!==void 0?"":"Passive";a[`onTouchstart${c}`]=w}return a}return{onClick:T}}),q=o(()=>({ref:u,class:"q-btn q-btn-item non-selectable no-outline "+l.value,style:m.value,...d.value,...s.value}));function L(a){if(u.value!==null){if(a!==void 0){if(a.defaultPrevented===!0)return;const c=document.activeElement;if(e.type==="submit"&&c!==document.body&&u.value.contains(c)===!1&&c.contains(u.value)===!1){u.value.focus();const K=()=>{document.removeEventListener("keydown",T,!0),document.removeEventListener("keyup",K,x),u.value!==null&&u.value.removeEventListener("blur",K,x)};document.addEventListener("keydown",T,!0),document.addEventListener("keyup",K,x),u.value.addEventListener("blur",K,x)}}v(a)}}function S(a){u.value!==null&&(r("keydown",a),D(a,[13,32])===!0&&A!==u.value&&(A!==null&&M(),a.defaultPrevented!==!0&&(u.value.focus(),A=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("keyup",$,!0),u.value.addEventListener("blur",$,x)),T(a)))}function w(a){u.value!==null&&(r("touchstart",a),a.defaultPrevented!==!0&&(_!==u.value&&(_!==null&&M(),_=u.value,g=a.target,g.addEventListener("touchcancel",$,x),g.addEventListener("touchend",$,x)),p=!0,i!==null&&clearTimeout(i),i=setTimeout(()=>{i=null,p=!1},200)))}function z(a){u.value!==null&&(a.qSkipRipple=p===!0,r("mousedown",a),a.defaultPrevented!==!0&&O!==u.value&&(O!==null&&M(),O=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("mouseup",$,x)))}function $(a){if(u.value!==null&&!(a!==void 0&&a.type==="blur"&&document.activeElement===u.value)){if(a!==void 0&&a.type==="keyup"){if(A===u.value&&D(a,[13,32])===!0){const c=new MouseEvent("click",a);c.qKeyEvent=!0,a.defaultPrevented===!0&&oe(c),a.cancelBubble===!0&&G(c),u.value.dispatchEvent(c),T(a),a.qKeyEvent=!0}r("keyup",a)}M()}}function M(a){const c=k.value;a!==!0&&(_===u.value||O===u.value)&&c!==null&&c!==document.activeElement&&(c.setAttribute("tabindex",-1),c.focus()),_===u.value&&(g!==null&&(g.removeEventListener("touchcancel",$,x),g.removeEventListener("touchend",$,x)),_=g=null),O===u.value&&(document.removeEventListener("mouseup",$,x),O=null),A===u.value&&(document.removeEventListener("keyup",$,!0),u.value!==null&&u.value.removeEventListener("blur",$,x),A=null),u.value!==null&&u.value.classList.remove("q-btn--active")}function j(a){T(a),a.qSkipRipple=!0}return le(()=>{M(!0)}),Object.assign(n,{click:a=>{C.value===!0&&L(a)}}),()=>{let a=[];e.icon!==void 0&&a.push(h(Q,{name:e.icon,left:e.stack!==!0&&b.value===!0,role:"img"})),b.value===!0&&a.push(h("span",{class:"block"},[e.label])),a=ve(t.default,a),e.iconRight!==void 0&&e.round===!1&&a.push(h(Q,{name:e.iconRight,right:e.stack!==!0&&b.value===!0,role:"img"}));const c=[h("span",{class:"q-focus-helper",ref:k})];return e.loading===!0&&e.percentage!==void 0&&c.push(h("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[h("span",{class:"q-btn__progress-indicator fit block",style:B.value})])),c.push(h("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+f.value},a)),e.loading!==null&&c.push(h(se,{name:"q-transition--fade"},()=>e.loading===!0?[h("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[h(be)])]:null)),ie(h(y.value,q.value,c),[[ke,R.value,void 0,P.value]])}}});export{Ie as Q,Ee as a,Ke as b,he as c,be as d,ze as g,De as u,Ce as v};
