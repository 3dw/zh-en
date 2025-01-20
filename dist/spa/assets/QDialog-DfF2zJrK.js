import{w as Q,o as $e,g as J,d as G,b as Z,a8 as ie,t as p,l as b,s as Fe,a9 as Be,a5 as Ve,a as w,aa as le,c as we,r as $,G as Me,a4 as De,h as E,ab as ze,k as Oe,T as se}from"./index-CqWzIPoc.js";import{u as We}from"./use-timeout-Dn5L1b49.js";import{b as Ae,v as Qe,g as W}from"./vm-wGc6VlKR.js";import{b as re,c as Ke,a as Ne}from"./focus-manager-zjdVGI5d.js";import{g as Re,c as ae,a as Ie}from"./Ripple-CDN3l9Hr.js";import{h as je}from"./render-oLC7YDmk.js";const Ue={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Xe=["beforeShow","show","beforeHide","hide"];function Ye({showing:e,canShow:t,hideOnRouteChange:o,handleShow:n,handleHide:s,processOnMount:u}){const r=J(),{props:a,emit:c,proxy:m}=r;let f;function v(l){e.value===!0?k(l):h(l)}function h(l){if(a.disable===!0||l!==void 0&&l.qAnchorHandled===!0||t!==void 0&&t(l)!==!0)return;const g=a["onUpdate:modelValue"]!==void 0;g===!0&&(c("update:modelValue",!0),f=l,G(()=>{f===l&&(f=void 0)})),(a.modelValue===null||g===!1)&&x(l)}function x(l){e.value!==!0&&(e.value=!0,c("beforeShow",l),n!==void 0?n(l):c("show",l))}function k(l){if(a.disable===!0)return;const g=a["onUpdate:modelValue"]!==void 0;g===!0&&(c("update:modelValue",!1),f=l,G(()=>{f===l&&(f=void 0)})),(a.modelValue===null||g===!1)&&F(l)}function F(l){e.value!==!1&&(e.value=!1,c("beforeHide",l),s!==void 0?s(l):c("hide",l))}function C(l){a.disable===!0&&l===!0?a["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):l===!0!==e.value&&(l===!0?x:F)(f)}Q(()=>a.modelValue,C),o!==void 0&&Ae(r)===!0&&Q(()=>m.$route.fullPath,()=>{o.value===!0&&e.value===!0&&k()}),u===!0&&$e(()=>{C(a.modelValue)});const B={show:h,hide:k,toggle:v};return Object.assign(m,B),B}function Ge(e,t,o){let n;function s(){n!==void 0&&(ie.remove(n),n=void 0)}return Z(()=>{e.value===!0&&s()}),{removeFromHistory:s,addToHistory(){n={condition:()=>o.value===!0,handler:t},ie.add(n)}}}const Lt=[Element,String],Je=[null,document,document.body,document.scrollingElement,document.documentElement];function Ht(e,t){let o=Re(t);if(o===void 0){if(e==null)return window;o=e.closest(".scroll,.scroll-y,.overflow-auto")}return Je.includes(o)?window:o}function Ze(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function et(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let D;function _t(){if(D!==void 0)return D;const e=document.createElement("p"),t=document.createElement("div");ae(e,{width:"100%",height:"200px"}),ae(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const o=e.offsetWidth;t.style.overflow="scroll";let n=e.offsetWidth;return o===n&&(n=t.clientWidth),t.remove(),D=o-n,D}function tt(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let H=0,U,X,_,Y=!1,ue,ce,de,y=null;function ot(e){nt(e)&&Fe(e)}function nt(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=Be(e),o=e.shiftKey&&!e.deltaX,n=!o&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),s=o||n?e.deltaY:e.deltaX;for(let u=0;u<t.length;u++){const r=t[u];if(tt(r,n))return n?s<0&&r.scrollTop===0?!0:s>0&&r.scrollTop+r.clientHeight===r.scrollHeight:s<0&&r.scrollLeft===0?!0:s>0&&r.scrollLeft+r.clientWidth===r.scrollWidth}return!0}function fe(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function z(e){Y!==!0&&(Y=!0,requestAnimationFrame(()=>{Y=!1;const{height:t}=e.target,{clientHeight:o,scrollTop:n}=document.scrollingElement;(_===void 0||t!==window.innerHeight)&&(_=o-t,document.scrollingElement.scrollTop=n),n>_&&(document.scrollingElement.scrollTop-=Math.ceil((n-_)/8))}))}function me(e){const t=document.body,o=window.visualViewport!==void 0;if(e==="add"){const{overflowY:n,overflowX:s}=window.getComputedStyle(t);U=et(window),X=Ze(window),ue=t.style.left,ce=t.style.top,de=window.location.href,t.style.left=`-${U}px`,t.style.top=`-${X}px`,s!=="hidden"&&(s==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),n!=="hidden"&&(n==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,p.is.ios===!0&&(o===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",z,b.passiveCapture),window.visualViewport.addEventListener("scroll",z,b.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",fe,b.passiveCapture))}p.is.desktop===!0&&p.is.mac===!0&&window[`${e}EventListener`]("wheel",ot,b.notPassive),e==="remove"&&(p.is.ios===!0&&(o===!0?(window.visualViewport.removeEventListener("resize",z,b.passiveCapture),window.visualViewport.removeEventListener("scroll",z,b.passiveCapture)):window.removeEventListener("scroll",fe,b.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=ue,t.style.top=ce,window.location.href===de&&window.scrollTo(U,X),_=void 0)}function it(e){let t="add";if(e===!0){if(H++,y!==null){clearTimeout(y),y=null;return}if(H>1)return}else{if(H===0||(H--,H>0))return;if(t="remove",p.is.ios===!0&&p.is.nativeMobile===!0){y!==null&&clearTimeout(y),y=setTimeout(()=>{me(t),y=null},100);return}}me(t)}function lt(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,it(t))}}}function st(){let e;const t=J();function o(){e=void 0}return Ve(o),Z(o),{removeTick:o,registerTick(n){e=n,G(()=>{e===n&&(Qe(t)===!1&&e(),e=void 0)})}}}const rt={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function at(e,t=()=>{},o=()=>{}){return{transitionProps:w(()=>{const n=`q-transition--${e.transitionShow||t()}`,s=`q-transition--${e.transitionHide||o()}`;return{appear:!0,enterFromClass:`${n}-enter-from`,enterActiveClass:`${n}-enter-active`,enterToClass:`${n}-enter-to`,leaveFromClass:`${s}-leave-from`,leaveActiveClass:`${s}-leave-active`,leaveToClass:`${s}-leave-to`}}),transitionStyle:w(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}let ut=1,ct=document.body;function dt(e,t){const o=document.createElement("div");if(o.id=t!==void 0?`q-portal--${t}--${ut++}`:e,le.globalNodes!==void 0){const n=le.globalNodes.class;n!==void 0&&(o.className=n)}return ct.appendChild(o),o}function ft(e){e.remove()}const A=[];function $t(e){return A.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function mt(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return W(e)}else if(e.__qPortal===!0){const o=W(e);return o!==void 0&&o.$options.name==="QPopupProxy"?(e.hide(t),o):e}e=W(e)}while(e!=null)}function Ft(e,t,o){for(;o!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(o--,e.$options.name==="QMenu"){e=mt(e,t);continue}e.hide(t)}e=W(e)}}const vt=we({name:"QPortal",setup(e,{slots:t}){return()=>t.default()}});function ht(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function gt(e,t,o,n){const s=$(!1),u=$(!1);let r=null;const a={},c=n==="dialog"&&ht(e);function m(v){if(v===!0){re(a),u.value=!0;return}u.value=!1,s.value===!1&&(c===!1&&r===null&&(r=dt(!1,n)),s.value=!0,A.push(e.proxy),Ke(a))}function f(v){if(u.value=!1,v!==!0)return;re(a),s.value=!1;const h=A.indexOf(e.proxy);h!==-1&&A.splice(h,1),r!==null&&(ft(r),r=null)}return Me(()=>{f(!0)}),e.proxy.__qPortal=!0,De(e.proxy,"contentEl",()=>t.value),{showPortal:m,hidePortal:f,portalIsActive:s,portalIsAccessible:u,renderPortal:()=>c===!0?o():s.value===!0?[E(ze,{to:r},E(vt,o))]:void 0}}const T=[];let P;function wt(e){P=e.keyCode===27}function pt(){P===!0&&(P=!1)}function bt(e){P===!0&&(P=!1,Oe(e,27)===!0&&T[T.length-1](e))}function pe(e){window[e]("keydown",wt),window[e]("blur",pt),window[e]("keyup",bt),P=!1}function yt(e){p.is.desktop===!0&&(T.push(e),T.length===1&&pe("addEventListener"))}function ve(e){const t=T.indexOf(e);t!==-1&&(T.splice(t,1),T.length===0&&pe("removeEventListener"))}const S=[];function be(e){S[S.length-1](e)}function Et(e){p.is.desktop===!0&&(S.push(e),S.length===1&&document.body.addEventListener("focusin",be))}function he(e){const t=S.indexOf(e);t!==-1&&(S.splice(t,1),S.length===0&&document.body.removeEventListener("focusin",be))}let O=0;const Tt={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},ge={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]},Bt=we({name:"QDialog",inheritAttrs:!1,props:{...Ue,...rt,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,backdropFilter:String,position:{type:String,default:"standard",validator:e=>["standard","top","bottom","left","right"].includes(e)}},emits:[...Xe,"shake","click","escapeKey"],setup(e,{slots:t,emit:o,attrs:n}){const s=J(),u=$(null),r=$(!1),a=$(!1);let c=null,m=null,f,v;const h=w(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:x}=lt(),{registerTimeout:k}=We(),{registerTick:F,removeTick:C}=st(),{transitionProps:B,transitionStyle:l}=at(e,()=>ge[e.position][0],()=>ge[e.position][1]),g=w(()=>l.value+(e.backdropFilter!==void 0?`;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}`:"")),{showPortal:ee,hidePortal:te,portalIsAccessible:ye,renderPortal:Ee}=gt(s,u,_e,"dialog"),{hide:V}=Ye({showing:r,hideOnRouteChange:h,handleShow:xe,handleHide:Ce,processOnMount:!0}),{addToHistory:Te,removeFromHistory:Se}=Ge(r,V,h),ke=w(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${Tt[e.position]}`+(a.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),M=w(()=>r.value===!0&&e.seamless!==!0),qe=w(()=>e.autoClose===!0?{onClick:Le}:{}),Pe=w(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${M.value===!0?"modal":"seamless"}`,n.class]);Q(()=>e.maximized,i=>{r.value===!0&&R(i)}),Q(M,i=>{x(i),i===!0?(Et(I),yt(N)):(he(I),ve(N))});function xe(i){Te(),m=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,R(e.maximized),ee(),a.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),F(L)):C(),k(()=>{if(s.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:d,bottom:q}=document.activeElement.getBoundingClientRect(),{innerHeight:ne}=window,j=window.visualViewport!==void 0?window.visualViewport.height:ne;d>0&&q>j/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-j,q>=ne?1/0:Math.ceil(document.scrollingElement.scrollTop+q-j/2))),document.activeElement.scrollIntoView()}v=!0,u.value.click(),v=!1}ee(!0),a.value=!1,o("show",i)},e.transitionDuration)}function Ce(i){C(),Se(),oe(!0),a.value=!0,te(),m!==null&&(((i&&i.type.indexOf("key")===0?m.closest('[tabindex]:not([tabindex^="-"])'):void 0)||m).focus(),m=null),k(()=>{te(!0),a.value=!1,o("hide",i)},e.transitionDuration)}function L(i){Ne(()=>{let d=u.value;if(d!==null){if(i!==void 0){const q=d.querySelector(i);if(q!==null){q.focus({preventScroll:!0});return}}d.contains(document.activeElement)!==!0&&(d=d.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||d.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||d.querySelector("[autofocus], [data-autofocus]")||d,d.focus({preventScroll:!0}))}})}function K(i){i&&typeof i.focus=="function"?i.focus({preventScroll:!0}):L(),o("shake");const d=u.value;d!==null&&(d.classList.remove("q-animate--scale"),d.classList.add("q-animate--scale"),c!==null&&clearTimeout(c),c=setTimeout(()=>{c=null,u.value!==null&&(d.classList.remove("q-animate--scale"),L())},170))}function N(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&K():(o("escapeKey"),V()))}function oe(i){c!==null&&(clearTimeout(c),c=null),(i===!0||r.value===!0)&&(R(!1),e.seamless!==!0&&(x(!1),he(I),ve(N))),i!==!0&&(m=null)}function R(i){i===!0?f!==!0&&(O<1&&document.body.classList.add("q-body--dialog"),O++,f=!0):f===!0&&(O<2&&document.body.classList.remove("q-body--dialog"),O--,f=!1)}function Le(i){v!==!0&&(V(i),o("click",i))}function He(i){e.persistent!==!0&&e.noBackdropDismiss!==!0?V(i):e.noShake!==!0&&K()}function I(i){e.allowFocusOutside!==!0&&ye.value===!0&&Ie(u.value,i.target)!==!0&&L('[tabindex]:not([tabindex="-1"])')}Object.assign(s.proxy,{focus:L,shake:K,__updateRefocusTarget(i){m=i||null}}),Z(oe);function _e(){return E("div",{role:"dialog","aria-modal":M.value===!0?"true":"false",...n,class:Pe.value},[E(se,{name:"q-transition--fade",appear:!0},()=>M.value===!0?E("div",{class:"q-dialog__backdrop fixed-full",style:g.value,"aria-hidden":"true",tabindex:-1,onClick:He}):null),E(se,B.value,()=>r.value===!0?E("div",{ref:u,class:ke.value,style:l.value,tabindex:-1,...qe.value},je(t.default)):null)])}return Ee}});export{Bt as Q,Xe as a,Ye as b,Ge as c,lt as d,Ze as e,et as f,Ht as g,_t as h,rt as i,st as j,at as k,gt as l,$t as m,Ft as n,A as p,Lt as s,Ue as u};
