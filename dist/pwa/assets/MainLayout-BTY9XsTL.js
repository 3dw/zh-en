import{c as _e,b,h as A,d as Ze,r as M,e as Ms,o as Ye,f as Fe,g as ni,n as Gt,j as Ae,l as qn,k as ii,m as ye,w as F,p as To,q as ln,T as So,s as Io,u as Fs,t as Bs,v as No,Q as V,x as Ws,y as ko,z as rt,A as Ro,B as Ft,C as Tn,D as Vi,E as Sn,F as Un,G as In,H as Hi,I as qs,J as xo,K as Bt,L as Po,M as Ao,N as Do,_ as Lo,O as Oo,P as ot,R as lt,S as p,U as f,V as X,W as Wt,X as L,Y as zi,Z as Mo,$ as Nn}from"./index-CCCCMagn.js";import{Q as Fo}from"./QCheckbox-Dja9zGgl.js";import{Q as kn}from"./QCardSection-Brt2AGBG.js";import{Q as Gi}from"./QCard-DA5C-q2B.js";import{u as Us,a as Vs,b as Hs,c as Bo,d as Wo,s as qo,g as Uo,e as Vo,f as Ho,h as Rn,Q as Qi}from"./QDialog-DxwXzWoT.js";import{Q as zo}from"./QImg-C3EDfOcY.js";import{Q as z,a as Vn,b as w,c as Go}from"./QLinearProgress-CF3Lmlek.js";import{Q as $i}from"./QSeparator-BjTowTiM.js";import{u as si,a as ri}from"./use-dark-DKcBcy0D.js";import{u as Qo,a as $o}from"./use-id-DmhKeaNF.js";import{u as Yo}from"./use-timeout-CoySYFvr.js";import{c as Ko}from"./selection-DTwKXvXl.js";import{b as qt}from"./format-CJebrXOQ.js";import{L as jo,k as m,g as et,D as oi,a as Xo,l as Jo,b as Zo,m as el,_ as tl,C as nl,r as Yi,s as K,n as li,p as Ee,q as il,S as sl,t as rl,u as Ke,w as Qt,x as an,y as ai,z as Nt,A as ol,B as zs,G as ll,H as al,I as Ki,J as Gs,K as ul,M as cl,N as dl,O as hl,P as fl,j as xn,Q as _l,R as pl,T as gl,U as ml,V as vl}from"./index-ea1a36e4-BPtiAEQD.js";import"./focus-manager-BJWzFvJg.js";const yl=_e({name:"QToolbarTitle",props:{shrink:Boolean},setup(n,{slots:e}){const t=b(()=>"q-toolbar__title ellipsis"+(n.shrink===!0?" col-shrink":""));return()=>A("div",{class:t.value},Ze(e.default))}}),Cl=_e({name:"QToolbar",props:{inset:Boolean},setup(n,{slots:e}){const t=b(()=>"q-toolbar row no-wrap items-center"+(n.inset===!0?" q-toolbar--inset":""));return()=>A("div",{class:t.value,role:"toolbar"},Ze(e.default))}});function wl(){const n=M(!Ms.value);return n.value===!1&&Ye(()=>{n.value=!0}),{isHydrated:n}}const Qs=typeof ResizeObserver<"u",ji=Qs===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},Hn=_e({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(n,{emit:e}){let t=null,i,s={width:-1,height:-1};function r(u){u===!0||n.debounce===0||n.debounce==="0"?o():t===null&&(t=setTimeout(o,n.debounce))}function o(){if(t!==null&&(clearTimeout(t),t=null),i){const{offsetWidth:u,offsetHeight:a}=i;(u!==s.width||a!==s.height)&&(s={width:u,height:a},e("resize",s))}}const{proxy:l}=Ae();if(l.trigger=r,Qs===!0){let u;const a=c=>{i=l.$el.parentNode,i?(u=new ResizeObserver(r),u.observe(i),o()):c!==!0&&Gt(()=>{a(!0)})};return Ye(()=>{a()}),Fe(()=>{t!==null&&clearTimeout(t),u!==void 0&&(u.disconnect!==void 0?u.disconnect():i&&u.unobserve(i))}),ni}else{let u=function(){t!==null&&(clearTimeout(t),t=null),d!==void 0&&(d.removeEventListener!==void 0&&d.removeEventListener("resize",r,qn.passive),d=void 0)},a=function(){u(),i&&i.contentDocument&&(d=i.contentDocument.defaultView,d.addEventListener("resize",r,qn.passive),o())};const{isHydrated:c}=wl();let d;return Ye(()=>{Gt(()=>{i=l.$el,i&&a()})}),Fe(u),()=>{if(c.value===!0)return A("object",{class:"q--avoid-card-border",style:ji.style,tabindex:-1,type:"text/html",data:ji.url,"aria-hidden":"true",onLoad:a})}}}}),El=_e({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(n,{slots:e,emit:t}){const{proxy:{$q:i}}=Ae(),s=ii(ln,ye);if(s===ye)return console.error("QHeader needs to be child of QLayout"),ye;const r=M(parseInt(n.heightHint,10)),o=M(!0),l=b(()=>n.reveal===!0||s.view.value.indexOf("H")!==-1||i.platform.is.ios&&s.isContainer.value===!0),u=b(()=>{if(n.modelValue!==!0)return 0;if(l.value===!0)return o.value===!0?r.value:0;const C=r.value-s.scroll.value.position;return C>0?C:0}),a=b(()=>n.modelValue!==!0||l.value===!0&&o.value!==!0),c=b(()=>n.modelValue===!0&&a.value===!0&&n.reveal===!0),d=b(()=>"q-header q-layout__section--marginal "+(l.value===!0?"fixed":"absolute")+"-top"+(n.bordered===!0?" q-header--bordered":"")+(a.value===!0?" q-header--hidden":"")+(n.modelValue!==!0?" q-layout--prevent-focus":"")),h=b(()=>{const C=s.rows.value.top,Q={};return C[0]==="l"&&s.left.space===!0&&(Q[i.lang.rtl===!0?"right":"left"]=`${s.left.size}px`),C[2]==="r"&&s.right.space===!0&&(Q[i.lang.rtl===!0?"left":"right"]=`${s.right.size}px`),Q});function _(C,Q){s.update("header",C,Q)}function g(C,Q){C.value!==Q&&(C.value=Q)}function y({height:C}){g(r,C),_("size",C)}function E(C){c.value===!0&&g(o,!0),t("focusin",C)}F(()=>n.modelValue,C=>{_("space",C),g(o,!0),s.animate()}),F(u,C=>{_("offset",C)}),F(()=>n.reveal,C=>{C===!1&&g(o,n.modelValue)}),F(o,C=>{s.animate(),t("reveal",C)}),F(s.scroll,C=>{n.reveal===!0&&g(o,C.direction==="up"||C.position<=n.revealOffset||C.position-C.inflectionPoint<100)});const S={};return s.instances.header=S,n.modelValue===!0&&_("size",r.value),_("space",n.modelValue),_("offset",u.value),Fe(()=>{s.instances.header===S&&(s.instances.header=void 0,_("size",0),_("offset",0),_("space",!1))}),()=>{const C=To(e.default,[]);return n.elevated===!0&&C.push(A("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),C.push(A(Hn,{debounce:0,onResize:y})),A("header",{class:d.value,style:h.value,onFocusin:E},C)}}}),bl=_e({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(n,{slots:e,emit:t}){let i=!1,s,r,o=null,l=null,u,a;function c(){s&&s(),s=null,i=!1,o!==null&&(clearTimeout(o),o=null),l!==null&&(clearTimeout(l),l=null),r!==void 0&&r.removeEventListener("transitionend",u),u=null}function d(y,E,S){E!==void 0&&(y.style.height=`${E}px`),y.style.transition=`height ${n.duration}ms cubic-bezier(.25, .8, .50, 1)`,i=!0,s=S}function h(y,E){y.style.overflowY=null,y.style.height=null,y.style.transition=null,c(),E!==a&&t(E)}function _(y,E){let S=0;r=y,i===!0?(c(),S=y.offsetHeight===y.scrollHeight?0:void 0):(a="hide",y.style.overflowY="hidden"),d(y,S,E),o=setTimeout(()=>{o=null,y.style.height=`${y.scrollHeight}px`,u=C=>{l=null,(Object(C)!==C||C.target===y)&&h(y,"show")},y.addEventListener("transitionend",u),l=setTimeout(u,n.duration*1.1)},100)}function g(y,E){let S;r=y,i===!0?c():(a="show",y.style.overflowY="hidden",S=y.scrollHeight),d(y,S,E),o=setTimeout(()=>{o=null,y.style.height=0,u=C=>{l=null,(Object(C)!==C||C.target===y)&&h(y,"hide")},y.addEventListener("transitionend",u),l=setTimeout(u,n.duration*1.1)},100)}return Fe(()=>{i===!0&&c()}),()=>A(So,{css:!1,appear:n.appear,onEnter:_,onLeave:g},e.default)}}),De=Io({}),Tl=Object.keys(Fs),He=_e({name:"QExpansionItem",props:{...Fs,...Us,...si,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:{},headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...Vs,"click","afterShow","afterHide"],setup(n,{slots:e,emit:t}){const{proxy:{$q:i}}=Ae(),s=ri(n,i),r=M(n.modelValue!==null?n.modelValue:n.defaultOpened),o=M(null),l=Qo(),{show:u,hide:a,toggle:c}=Hs({showing:r});let d,h;const _=b(()=>`q-expansion-item q-item-type q-expansion-item--${r.value===!0?"expanded":"collapsed"} q-expansion-item--${n.popup===!0?"popup":"standard"}`),g=b(()=>n.contentInsetLevel===void 0?null:{["padding"+(i.lang.rtl===!0?"Right":"Left")]:n.contentInsetLevel*56+"px"}),y=b(()=>n.disable!==!0&&(n.href!==void 0||n.to!==void 0&&n.to!==null&&n.to!=="")),E=b(()=>{const N={};return Tl.forEach(ae=>{N[ae]=n[ae]}),N}),S=b(()=>y.value===!0||n.expandIconToggle!==!0),C=b(()=>n.expandedIcon!==void 0&&r.value===!0?n.expandedIcon:n.expandIcon||i.iconSet.expansionItem[n.denseToggle===!0?"denseIcon":"icon"]),Q=b(()=>n.disable!==!0&&(y.value===!0||n.expandIconToggle===!0)),P=b(()=>({expanded:r.value===!0,detailsId:l.value,toggle:c,show:u,hide:a})),Y=b(()=>{const N=n.toggleAriaLabel!==void 0?n.toggleAriaLabel:i.lang.label[r.value===!0?"collapse":"expand"](n.label);return{role:"button","aria-expanded":r.value===!0?"true":"false","aria-controls":l.value,"aria-label":N}});F(()=>n.group,N=>{h!==void 0&&h(),N!==void 0&&me()});function I(N){y.value!==!0&&c(N),t("click",N)}function W(N){N.keyCode===13&&q(N,!0)}function q(N,ae){ae!==!0&&o.value!==null&&o.value.focus(),c(N),Ws(N)}function U(){t("afterShow")}function ie(){t("afterHide")}function me(){d===void 0&&(d=$o()),r.value===!0&&(De[n.group]=d);const N=F(r,pe=>{pe===!0?De[n.group]=d:De[n.group]===d&&delete De[n.group]}),ae=F(()=>De[n.group],(pe,yn)=>{yn===d&&pe!==void 0&&pe!==d&&a()});h=()=>{N(),ae(),De[n.group]===d&&delete De[n.group],h=void 0}}function Lt(){const N={class:[`q-focusable relative-position cursor-pointer${n.denseToggle===!0&&n.switchToggleSide===!0?" items-end":""}`,n.expandIconClass],side:n.switchToggleSide!==!0,avatar:n.switchToggleSide},ae=[A(V,{class:"q-expansion-item__toggle-icon"+(n.expandedIcon===void 0&&r.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:C.value})];return Q.value===!0&&(Object.assign(N,{tabindex:0,...Y.value,onClick:q,onKeyup:W}),ae.unshift(A("div",{ref:o,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),A(w,N,()=>ae)}function Te(){let N;return e.header!==void 0?N=[].concat(e.header(P.value)):(N=[A(w,()=>[A(Vn,{lines:n.labelLines},()=>n.label||""),n.caption?A(Vn,{lines:n.captionLines,caption:!0},()=>n.caption):null])],n.icon&&N[n.switchToggleSide===!0?"push":"unshift"](A(w,{side:n.switchToggleSide===!0,avatar:n.switchToggleSide!==!0},()=>A(V,{name:n.icon})))),n.disable!==!0&&n.hideExpandIcon!==!0&&N[n.switchToggleSide===!0?"unshift":"push"](Lt()),N}function st(){const N={ref:"item",style:n.headerStyle,class:n.headerClass,dark:s.value,disable:n.disable,dense:n.dense,insetLevel:n.headerInsetLevel};return S.value===!0&&(N.clickable=!0,N.onClick=I,Object.assign(N,y.value===!0?E.value:Y.value)),A(z,N,Te)}function Ot(){return Bs(A("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:g.value,id:l.value},Ze(e.default)),[[No,r.value]])}function Ve(){const N=[st(),A(bl,{duration:n.duration,onShow:U,onHide:ie},Ot)];return n.expandSeparator===!0&&N.push(A($i,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:s.value}),A($i,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:s.value})),N}return n.group!==void 0&&me(),Fe(()=>{h!==void 0&&h()}),()=>A("div",{class:_.value},[A("div",{class:"q-expansion-item__container relative-position"},Ve())])}}),Sl=["ul","ol"],Il=_e({name:"QList",props:{...si,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(n,{slots:e}){const t=Ae(),i=ri(n,t.proxy.$q),s=b(()=>Sl.includes(n.tag)?null:"list"),r=b(()=>"q-list"+(n.bordered===!0?" q-list--bordered":"")+(n.dense===!0?" q-list--dense":"")+(n.separator===!0?" q-list--separator":"")+(i.value===!0?" q-list--dark":"")+(n.padding===!0?" q-list--padding":""));return()=>A(n.tag,{class:r.value,role:s.value},Ze(e.default))}}),ui={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Nl=Object.keys(ui);ui.all=!0;function Xi(n){const e={};for(const t of Nl)n[t]===!0&&(e[t]=!0);return Object.keys(e).length===0?ui:(e.horizontal===!0?e.left=e.right=!0:e.left===!0&&e.right===!0&&(e.horizontal=!0),e.vertical===!0?e.up=e.down=!0:e.up===!0&&e.down===!0&&(e.vertical=!0),e.horizontal===!0&&e.vertical===!0&&(e.all=!0),e)}const kl=["INPUT","TEXTAREA"];function Ji(n,e){return e.event===void 0&&n.target!==void 0&&n.target.draggable!==!0&&typeof e.handler=="function"&&kl.includes(n.target.nodeName.toUpperCase())===!1&&(n.qClonedBy===void 0||n.qClonedBy.indexOf(e.uid)===-1)}function Pn(n,e,t){const i=Un(n);let s,r=i.left-e.event.x,o=i.top-e.event.y,l=Math.abs(r),u=Math.abs(o);const a=e.direction;a.horizontal===!0&&a.vertical!==!0?s=r<0?"left":"right":a.horizontal!==!0&&a.vertical===!0?s=o<0?"up":"down":a.up===!0&&o<0?(s="up",l>u&&(a.left===!0&&r<0?s="left":a.right===!0&&r>0&&(s="right"))):a.down===!0&&o>0?(s="down",l>u&&(a.left===!0&&r<0?s="left":a.right===!0&&r>0&&(s="right"))):a.left===!0&&r<0?(s="left",l<u&&(a.up===!0&&o<0?s="up":a.down===!0&&o>0&&(s="down"))):a.right===!0&&r>0&&(s="right",l<u&&(a.up===!0&&o<0?s="up":a.down===!0&&o>0&&(s="down")));let c=!1;if(s===void 0&&t===!1){if(e.event.isFirst===!0||e.event.lastDir===void 0)return{};s=e.event.lastDir,c=!0,s==="left"||s==="right"?(i.left-=r,l=0,r=0):(i.top-=o,u=0,o=0)}return{synthetic:c,payload:{evt:n,touch:e.event.mouse!==!0,mouse:e.event.mouse===!0,position:i,direction:s,isFirst:e.event.isFirst,isFinal:t===!0,duration:Date.now()-e.event.time,distance:{x:l,y:u},offset:{x:r,y:o},delta:{x:i.left-e.event.lastX,y:i.top-e.event.lastY}}}}let Rl=0;const An=ko({name:"touch-pan",beforeMount(n,{value:e,modifiers:t}){if(t.mouse!==!0&&rt.has.touch!==!0)return;function i(r,o){t.mouse===!0&&o===!0?Ws(r):(t.stop===!0&&Sn(r),t.prevent===!0&&Vi(r))}const s={uid:"qvtp_"+Rl++,handler:e,modifiers:t,direction:Xi(t),noop:ni,mouseStart(r){Ji(r,s)&&Ro(r)&&(Ft(s,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),s.start(r,!0))},touchStart(r){if(Ji(r,s)){const o=r.target;Ft(s,"temp",[[o,"touchmove","move","notPassiveCapture"],[o,"touchcancel","end","passiveCapture"],[o,"touchend","end","passiveCapture"]]),s.start(r)}},start(r,o){if(rt.is.firefox===!0&&Tn(n,!0),s.lastEvt=r,o===!0||t.stop===!0){if(s.direction.all!==!0&&(o!==!0||s.modifiers.mouseAllDir!==!0&&s.modifiers.mousealldir!==!0)){const a=r.type.indexOf("mouse")!==-1?new MouseEvent(r.type,r):new TouchEvent(r.type,r);r.defaultPrevented===!0&&Vi(a),r.cancelBubble===!0&&Sn(a),Object.assign(a,{qKeyEvent:r.qKeyEvent,qClickOutside:r.qClickOutside,qAnchorHandled:r.qAnchorHandled,qClonedBy:r.qClonedBy===void 0?[s.uid]:r.qClonedBy.concat(s.uid)}),s.initialEvent={target:r.target,event:a}}Sn(r)}const{left:l,top:u}=Un(r);s.event={x:l,y:u,time:Date.now(),mouse:o===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:l,lastY:u}},move(r){if(s.event===void 0)return;const o=Un(r),l=o.left-s.event.x,u=o.top-s.event.y;if(l===0&&u===0)return;s.lastEvt=r;const a=s.event.mouse===!0,c=()=>{i(r,a);let _;t.preserveCursor!==!0&&t.preservecursor!==!0&&(_=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),a===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Ko(),s.styleCleanup=g=>{if(s.styleCleanup=void 0,_!==void 0&&(document.documentElement.style.cursor=_),document.body.classList.remove("non-selectable"),a===!0){const y=()=>{document.body.classList.remove("no-pointer-events--children")};g!==void 0?setTimeout(()=>{y(),g()},50):y()}else g!==void 0&&g()}};if(s.event.detected===!0){s.event.isFirst!==!0&&i(r,s.event.mouse);const{payload:_,synthetic:g}=Pn(r,s,!1);_!==void 0&&(s.handler(_)===!1?s.end(r):(s.styleCleanup===void 0&&s.event.isFirst===!0&&c(),s.event.lastX=_.position.left,s.event.lastY=_.position.top,s.event.lastDir=g===!0?void 0:_.direction,s.event.isFirst=!1));return}if(s.direction.all===!0||a===!0&&(s.modifiers.mouseAllDir===!0||s.modifiers.mousealldir===!0)){c(),s.event.detected=!0,s.move(r);return}const d=Math.abs(l),h=Math.abs(u);d!==h&&(s.direction.horizontal===!0&&d>h||s.direction.vertical===!0&&d<h||s.direction.up===!0&&d<h&&u<0||s.direction.down===!0&&d<h&&u>0||s.direction.left===!0&&d>h&&l<0||s.direction.right===!0&&d>h&&l>0?(s.event.detected=!0,s.move(r)):s.end(r,!0))},end(r,o){if(s.event!==void 0){if(In(s,"temp"),rt.is.firefox===!0&&Tn(n,!1),o===!0)s.styleCleanup!==void 0&&s.styleCleanup(),s.event.detected!==!0&&s.initialEvent!==void 0&&s.initialEvent.target.dispatchEvent(s.initialEvent.event);else if(s.event.detected===!0){s.event.isFirst===!0&&s.handler(Pn(r===void 0?s.lastEvt:r,s).payload);const{payload:l}=Pn(r===void 0?s.lastEvt:r,s,!0),u=()=>{s.handler(l)};s.styleCleanup!==void 0?s.styleCleanup(u):u()}s.event=void 0,s.initialEvent=void 0,s.lastEvt=void 0}}};if(n.__qtouchpan=s,t.mouse===!0){const r=t.mouseCapture===!0||t.mousecapture===!0?"Capture":"";Ft(s,"main",[[n,"mousedown","mouseStart",`passive${r}`]])}rt.has.touch===!0&&Ft(s,"main",[[n,"touchstart","touchStart",`passive${t.capture===!0?"Capture":""}`],[n,"touchmove","noop","notPassiveCapture"]])},updated(n,e){const t=n.__qtouchpan;t!==void 0&&(e.oldValue!==e.value&&(typeof value!="function"&&t.end(),t.handler=e.value),t.direction=Xi(e.modifiers))},beforeUnmount(n){const e=n.__qtouchpan;e!==void 0&&(e.event!==void 0&&e.end(),In(e,"main"),In(e,"temp"),rt.is.firefox===!0&&Tn(n,!1),e.styleCleanup!==void 0&&e.styleCleanup(),delete n.__qtouchpan)}}),Zi=150,xl=_e({name:"QDrawer",inheritAttrs:!1,props:{...Us,...si,side:{type:String,default:"left",validator:n=>["left","right"].includes(n)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:n=>["default","desktop","mobile"].includes(n),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Vs,"onLayout","miniState"],setup(n,{slots:e,emit:t,attrs:i}){const s=Ae(),{proxy:{$q:r}}=s,o=ri(n,r),{preventBodyScroll:l}=Wo(),{registerTimeout:u,removeTimeout:a}=Yo(),c=ii(ln,ye);if(c===ye)return console.error("QDrawer needs to be child of QLayout"),ye;let d,h=null,_;const g=M(n.behavior==="mobile"||n.behavior!=="desktop"&&c.totalWidth.value<=n.breakpoint),y=b(()=>n.mini===!0&&g.value!==!0),E=b(()=>y.value===!0?n.miniWidth:n.width),S=M(n.showIfAbove===!0&&g.value===!1?!0:n.modelValue===!0),C=b(()=>n.persistent!==!0&&(g.value===!0||yn.value===!0));function Q(v,D){if(W(),v!==!1&&c.animate(),ue(0),g.value===!0){const se=c.instances[Ve.value];se!==void 0&&se.belowBreakpoint===!0&&se.hide(!1),Se(1),c.isContainer.value!==!0&&l(!0)}else Se(0),v!==!1&&wn(!1);u(()=>{v!==!1&&wn(!0),D!==!0&&t("show",v)},Zi)}function P(v,D){q(),v!==!1&&c.animate(),Se(0),ue(me.value*E.value),En(),D!==!0?u(()=>{t("hide",v)},Zi):a()}const{show:Y,hide:I}=Hs({showing:S,hideOnRouteChange:C,handleShow:Q,handleHide:P}),{addToHistory:W,removeFromHistory:q}=Bo(S,I,C),U={belowBreakpoint:g,hide:I},ie=b(()=>n.side==="right"),me=b(()=>(r.lang.rtl===!0?-1:1)*(ie.value===!0?1:-1)),Lt=M(0),Te=M(!1),st=M(!1),Ot=M(E.value*me.value),Ve=b(()=>ie.value===!0?"left":"right"),N=b(()=>S.value===!0&&g.value===!1&&n.overlay===!1?n.miniToOverlay===!0?n.miniWidth:E.value:0),ae=b(()=>n.overlay===!0||n.miniToOverlay===!0||c.view.value.indexOf(ie.value?"R":"L")!==-1||r.platform.is.ios===!0&&c.isContainer.value===!0),pe=b(()=>n.overlay===!1&&S.value===!0&&g.value===!1),yn=b(()=>n.overlay===!0&&S.value===!0&&g.value===!1),co=b(()=>"fullscreen q-drawer__backdrop"+(S.value===!1&&Te.value===!1?" hidden":"")),ho=b(()=>({backgroundColor:`rgba(0,0,0,${Lt.value*.4})`})),qi=b(()=>ie.value===!0?c.rows.value.top[2]==="r":c.rows.value.top[0]==="l"),fo=b(()=>ie.value===!0?c.rows.value.bottom[2]==="r":c.rows.value.bottom[0]==="l"),_o=b(()=>{const v={};return c.header.space===!0&&qi.value===!1&&(ae.value===!0?v.top=`${c.header.offset}px`:c.header.space===!0&&(v.top=`${c.header.size}px`)),c.footer.space===!0&&fo.value===!1&&(ae.value===!0?v.bottom=`${c.footer.offset}px`:c.footer.space===!0&&(v.bottom=`${c.footer.size}px`)),v}),po=b(()=>{const v={width:`${E.value}px`,transform:`translateX(${Ot.value}px)`};return g.value===!0?v:Object.assign(v,_o.value)}),go=b(()=>"q-drawer__content fit "+(c.isContainer.value!==!0?"scroll":"overflow-auto")),mo=b(()=>`q-drawer q-drawer--${n.side}`+(st.value===!0?" q-drawer--mini-animate":"")+(n.bordered===!0?" q-drawer--bordered":"")+(o.value===!0?" q-drawer--dark q-dark":"")+(Te.value===!0?" no-transition":S.value===!0?"":" q-layout--prevent-focus")+(g.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${y.value===!0?"mini":"standard"}`+(ae.value===!0||pe.value!==!0?" fixed":"")+(n.overlay===!0||n.miniToOverlay===!0?" q-drawer--on-top":"")+(qi.value===!0?" q-drawer--top-padding":""))),vo=b(()=>{const v=r.lang.rtl===!0?n.side:Ve.value;return[[An,Eo,void 0,{[v]:!0,mouse:!0}]]}),yo=b(()=>{const v=r.lang.rtl===!0?Ve.value:n.side;return[[An,Ui,void 0,{[v]:!0,mouse:!0}]]}),Co=b(()=>{const v=r.lang.rtl===!0?Ve.value:n.side;return[[An,Ui,void 0,{[v]:!0,mouse:!0,mouseAllDir:!0}]]});function Cn(){bo(g,n.behavior==="mobile"||n.behavior!=="desktop"&&c.totalWidth.value<=n.breakpoint)}F(g,v=>{v===!0?(d=S.value,S.value===!0&&I(!1)):n.overlay===!1&&n.behavior!=="mobile"&&d!==!1&&(S.value===!0?(ue(0),Se(0),En()):Y(!1))}),F(()=>n.side,(v,D)=>{c.instances[D]===U&&(c.instances[D]=void 0,c[D].space=!1,c[D].offset=0),c.instances[v]=U,c[v].size=E.value,c[v].space=pe.value,c[v].offset=N.value}),F(c.totalWidth,()=>{(c.isContainer.value===!0||document.qScrollPrevented!==!0)&&Cn()}),F(()=>n.behavior+n.breakpoint,Cn),F(c.isContainer,v=>{S.value===!0&&l(v!==!0),v===!0&&Cn()}),F(c.scrollbarWidth,()=>{ue(S.value===!0?0:void 0)}),F(N,v=>{Ie("offset",v)}),F(pe,v=>{t("onLayout",v),Ie("space",v)}),F(ie,()=>{ue()}),F(E,v=>{ue(),bn(n.miniToOverlay,v)}),F(()=>n.miniToOverlay,v=>{bn(v,E.value)}),F(()=>r.lang.rtl,()=>{ue()}),F(()=>n.mini,()=>{n.noMiniAnimation||n.modelValue===!0&&(wo(),c.animate())}),F(y,v=>{t("miniState",v)});function ue(v){v===void 0?Gt(()=>{v=S.value===!0?0:E.value,ue(me.value*v)}):(c.isContainer.value===!0&&ie.value===!0&&(g.value===!0||Math.abs(v)===E.value)&&(v+=me.value*c.scrollbarWidth.value),Ot.value=v)}function Se(v){Lt.value=v}function wn(v){const D=v===!0?"remove":c.isContainer.value!==!0?"add":"";D!==""&&document.body.classList[D]("q-body--drawer-toggle")}function wo(){h!==null&&clearTimeout(h),s.proxy&&s.proxy.$el&&s.proxy.$el.classList.add("q-drawer--mini-animate"),st.value=!0,h=setTimeout(()=>{h=null,st.value=!1,s&&s.proxy&&s.proxy.$el&&s.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Eo(v){if(S.value!==!1)return;const D=E.value,se=qt(v.distance.x,0,D);if(v.isFinal===!0){se>=Math.min(75,D)===!0?Y():(c.animate(),Se(0),ue(me.value*D)),Te.value=!1;return}ue((r.lang.rtl===!0?ie.value!==!0:ie.value)?Math.max(D-se,0):Math.min(0,se-D)),Se(qt(se/D,0,1)),v.isFirst===!0&&(Te.value=!0)}function Ui(v){if(S.value!==!0)return;const D=E.value,se=v.direction===n.side,Mt=(r.lang.rtl===!0?se!==!0:se)?qt(v.distance.x,0,D):0;if(v.isFinal===!0){Math.abs(Mt)<Math.min(75,D)===!0?(c.animate(),Se(1),ue(0)):I(),Te.value=!1;return}ue(me.value*Mt),Se(qt(1-Mt/D,0,1)),v.isFirst===!0&&(Te.value=!0)}function En(){l(!1),wn(!0)}function Ie(v,D){c.update(n.side,v,D)}function bo(v,D){v.value!==D&&(v.value=D)}function bn(v,D){Ie("size",v===!0?n.miniWidth:D)}return c.instances[n.side]=U,bn(n.miniToOverlay,E.value),Ie("space",pe.value),Ie("offset",N.value),n.showIfAbove===!0&&n.modelValue!==!0&&S.value===!0&&n["onUpdate:modelValue"]!==void 0&&t("update:modelValue",!0),Ye(()=>{t("onLayout",pe.value),t("miniState",y.value),d=n.showIfAbove===!0;const v=()=>{(S.value===!0?Q:P)(!1,!0)};if(c.totalWidth.value!==0){Gt(v);return}_=F(c.totalWidth,()=>{_(),_=void 0,S.value===!1&&n.showIfAbove===!0&&g.value===!1?Y(!1):v()})}),Fe(()=>{_!==void 0&&_(),h!==null&&(clearTimeout(h),h=null),S.value===!0&&En(),c.instances[n.side]===U&&(c.instances[n.side]=void 0,Ie("size",0),Ie("offset",0),Ie("space",!1))}),()=>{const v=[];g.value===!0&&(n.noSwipeOpen===!1&&v.push(Bs(A("div",{key:"open",class:`q-drawer__opener fixed-${n.side}`,"aria-hidden":"true"}),vo.value)),v.push(Hi("div",{ref:"backdrop",class:co.value,style:ho.value,"aria-hidden":"true",onClick:I},void 0,"backdrop",n.noSwipeBackdrop!==!0&&S.value===!0,()=>Co.value)));const D=y.value===!0&&e.mini!==void 0,se=[A("div",{...i,key:""+D,class:[go.value,i.class]},D===!0?e.mini():Ze(e.default))];return n.elevated===!0&&S.value===!0&&se.push(A("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),v.push(Hi("aside",{ref:"content",class:mo.value,style:po.value},se,"contentclose",n.noSwipeClose!==!0&&g.value===!0,()=>yo.value)),A("div",{class:"q-drawer-container"},v)}}}),Pl=_e({name:"QPageContainer",setup(n,{slots:e}){const{proxy:{$q:t}}=Ae(),i=ii(ln,ye);if(i===ye)return console.error("QPageContainer needs to be child of QLayout"),ye;qs(xo,!0);const s=b(()=>{const r={};return i.header.space===!0&&(r.paddingTop=`${i.header.size}px`),i.right.space===!0&&(r[`padding${t.lang.rtl===!0?"Left":"Right"}`]=`${i.right.size}px`),i.footer.space===!0&&(r.paddingBottom=`${i.footer.size}px`),i.left.space===!0&&(r[`padding${t.lang.rtl===!0?"Right":"Left"}`]=`${i.left.size}px`),r});return()=>A("div",{class:"q-page-container",style:s.value},Ze(e.default))}}),{passive:es}=qn,Al=["both","horizontal","vertical"],Dl=_e({name:"QScrollObserver",props:{axis:{type:String,validator:n=>Al.includes(n),default:"vertical"},debounce:[String,Number],scrollTarget:qo},emits:["scroll"],setup(n,{emit:e}){const t={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let i=null,s,r;F(()=>n.scrollTarget,()=>{u(),l()});function o(){i!==null&&i();const d=Math.max(0,Vo(s)),h=Ho(s),_={top:d-t.position.top,left:h-t.position.left};if(n.axis==="vertical"&&_.top===0||n.axis==="horizontal"&&_.left===0)return;const g=Math.abs(_.top)>=Math.abs(_.left)?_.top<0?"up":"down":_.left<0?"left":"right";t.position={top:d,left:h},t.directionChanged=t.direction!==g,t.delta=_,t.directionChanged===!0&&(t.direction=g,t.inflectionPoint=t.position),e("scroll",{...t})}function l(){s=Uo(r,n.scrollTarget),s.addEventListener("scroll",a,es),a(!0)}function u(){s!==void 0&&(s.removeEventListener("scroll",a,es),s=void 0)}function a(d){if(d===!0||n.debounce===0||n.debounce==="0")o();else if(i===null){const[h,_]=n.debounce?[setTimeout(o,n.debounce),clearTimeout]:[requestAnimationFrame(o),cancelAnimationFrame];i=()=>{_(h),i=null}}}const{proxy:c}=Ae();return F(()=>c.$q.lang.rtl,o),Ye(()=>{r=c.$el.parentNode,l()}),Fe(()=>{i!==null&&i(),u()}),Object.assign(c,{trigger:a,getPosition:()=>t}),ni}}),Ll=_e({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:n=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(n.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(n,{slots:e,emit:t}){const{proxy:{$q:i}}=Ae(),s=M(null),r=M(i.screen.height),o=M(n.container===!0?0:i.screen.width),l=M({position:0,direction:"down",inflectionPoint:0}),u=M(0),a=M(Ms.value===!0?0:Rn()),c=b(()=>"q-layout q-layout--"+(n.container===!0?"containerized":"standard")),d=b(()=>n.container===!1?{minHeight:i.screen.height+"px"}:null),h=b(()=>a.value!==0?{[i.lang.rtl===!0?"left":"right"]:`${a.value}px`}:null),_=b(()=>a.value!==0?{[i.lang.rtl===!0?"right":"left"]:0,[i.lang.rtl===!0?"left":"right"]:`-${a.value}px`,width:`calc(100% + ${a.value}px)`}:null);function g(P){if(n.container===!0||document.qScrollPrevented!==!0){const Y={position:P.position.top,direction:P.direction,directionChanged:P.directionChanged,inflectionPoint:P.inflectionPoint.top,delta:P.delta.top};l.value=Y,n.onScroll!==void 0&&t("scroll",Y)}}function y(P){const{height:Y,width:I}=P;let W=!1;r.value!==Y&&(W=!0,r.value=Y,n.onScrollHeight!==void 0&&t("scrollHeight",Y),S()),o.value!==I&&(W=!0,o.value=I),W===!0&&n.onResize!==void 0&&t("resize",P)}function E({height:P}){u.value!==P&&(u.value=P,S())}function S(){if(n.container===!0){const P=r.value>u.value?Rn():0;a.value!==P&&(a.value=P)}}let C=null;const Q={instances:{},view:b(()=>n.view),isContainer:b(()=>n.container),rootRef:s,height:r,containerHeight:u,scrollbarWidth:a,totalWidth:b(()=>o.value+a.value),rows:b(()=>{const P=n.view.toLowerCase().split(" ");return{top:P[0].split(""),middle:P[1].split(""),bottom:P[2].split("")}}),header:Bt({size:0,offset:0,space:!1}),right:Bt({size:300,offset:0,space:!1}),footer:Bt({size:0,offset:0,space:!1}),left:Bt({size:300,offset:0,space:!1}),scroll:l,animate(){C!==null?clearTimeout(C):document.body.classList.add("q-body--layout-animate"),C=setTimeout(()=>{C=null,document.body.classList.remove("q-body--layout-animate")},155)},update(P,Y,I){Q[P][Y]=I}};if(qs(ln,Q),Rn()>0){let P=function(){W=null,q.classList.remove("hide-scrollbar")},Y=function(){if(W===null){if(q.scrollHeight>i.screen.height)return;q.classList.add("hide-scrollbar")}else clearTimeout(W);W=setTimeout(P,300)},I=function(U){W!==null&&U==="remove"&&(clearTimeout(W),P()),window[`${U}EventListener`]("resize",Y)},W=null;const q=document.body;F(()=>n.container!==!0?"add":"remove",I),n.container!==!0&&I("add"),Po(()=>{I("remove")})}return()=>{const P=Ao(e.default,[A(Dl,{onScroll:g}),A(Hn,{onResize:y})]),Y=A("div",{class:c.value,style:d.value,ref:n.container===!0?void 0:s,tabindex:-1},P);return n.container===!0?A("div",{class:"q-layout-container overflow-hidden",ref:s},[A(Hn,{onResize:E}),A("div",{class:"absolute-full",style:h.value},[A("div",{class:"scroll",style:_.value},[Y])])]):Y}}});var ts={};const ns="@firebase/database",is="1.0.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $s="";function Ol(n){$s=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),K(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:li(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ee(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Ml(e)}}catch{}return new Fl},Oe=Ys("localStorage"),Bl=Ys("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe=new jo("@firebase/database"),Wl=function(){let n=1;return function(){return n++}}(),Ks=function(n){const e=il(n),t=new sl;t.update(e);const i=t.digest();return rl.encodeByteArray(i)},kt=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=kt.apply(null,i):typeof i=="object"?e+=K(i):e+=i,e+=" "}return e};let _t=null,ss=!0;const ql=function(n,e){m(!e,"Can't turn on custom loggers persistently."),Qe.logLevel=ol.VERBOSE,_t=Qe.log.bind(Qe)},te=function(...n){if(ss===!0&&(ss=!1,_t===null&&Bl.get("logging_enabled")===!0&&ql()),_t){const e=kt.apply(null,n);_t(e)}},Rt=function(n){return function(...e){te(n,...e)}},zn=function(...n){const e="FIREBASE INTERNAL ERROR: "+kt(...n);Qe.error(e)},we=function(...n){const e=`FIREBASE FATAL ERROR: ${kt(...n)}`;throw Qe.error(e),new Error(e)},oe=function(...n){const e="FIREBASE WARNING: "+kt(...n);Qe.warn(e)},Ul=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&oe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},js=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Vl=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},je="[MIN_NAME]",Be="[MAX_NAME]",tt=function(n,e){if(n===e)return 0;if(n===je||e===Be)return-1;if(e===je||n===Be)return 1;{const t=rs(n),i=rs(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},Hl=function(n,e){return n===e?0:n<e?-1:1},at=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+K(e))},ci=function(n){if(typeof n!="object"||n===null)return K(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=K(e[i]),t+=":",t+=ci(n[e[i]]);return t+="}",t},Xs=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function le(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Js=function(n){m(!js(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,l,u;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=l+i,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const a=[];for(u=t;u;u-=1)a.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(s?1:0),a.reverse();const c=a.join("");let d="";for(u=0;u<64;u+=8){let h=parseInt(c.substr(u,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},zl=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Gl=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Ql(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const $l=new RegExp("^-?(0*)\\d{1,10}$"),Yl=-2147483648,Kl=2147483647,rs=function(n){if($l.test(n)){const e=Number(n);if(e>=Yl&&e<=Kl)return e}return null},nt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw oe("Exception was thrown by user callback.",t),e},Math.floor(0))}},jl=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},pt=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){oe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(te("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',oe(e)}}class zt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}zt.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di="5",Zs="v",er="s",tr="r",nr="f",ir=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,sr="ls",rr="p",Gn="ac",or="websocket",lr="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,t,i,s,r=!1,o="",l=!1,u=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Oe.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Oe.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Zl(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function ur(n,e,t){m(typeof e=="string","typeof type must == string"),m(typeof t=="object","typeof params must == object");let i;if(e===or)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===lr)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Zl(n)&&(t.ns=n.namespace);const s=[];return le(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(){this.counters_={}}incrementCounter(e,t=1){Ee(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return dl(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn={},Ln={};function hi(n){const e=n.toString();return Dn[e]||(Dn[e]=new ea),Dn[e]}function ta(n,e){const t=n.toString();return Ln[t]||(Ln[t]=e()),Ln[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&nt(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os="start",ia="close",sa="pLPCommand",ra="pRTLPCB",cr="id",dr="pw",hr="ser",oa="cb",la="seg",aa="ts",ua="d",ca="dframe",fr=1870,_r=30,da=fr-_r,ha=25e3,fa=3e4;class Ge{constructor(e,t,i,s,r,o,l){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Rt(e),this.stats_=hi(t),this.urlFn=u=>(this.appCheckToken&&(u[Gn]=this.appCheckToken),ur(t,lr,u))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new na(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(fa)),Vl(()=>{if(this.isClosed_)return;this.scriptTagHolder=new fi((...r)=>{const[o,l,u,a,c]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===os)this.id=l,this.password=u;else if(o===ia)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const i={};i[os]="t",i[hr]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[oa]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Zs]=di,this.transportSessionId&&(i[er]=this.transportSessionId),this.lastSessionId&&(i[sr]=this.lastSessionId),this.applicationId&&(i[rr]=this.applicationId),this.appCheckToken&&(i[Gn]=this.appCheckToken),typeof location<"u"&&location.hostname&&ir.test(location.hostname)&&(i[tr]=nr);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ge.forceAllow_=!0}static forceDisallow(){Ge.forceDisallow_=!0}static isAvailable(){return Ge.forceAllow_?!0:!Ge.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!zl()&&!Gl()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=K(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=fl(t),s=Xs(i,da);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[ca]="t",i[cr]=e,i[dr]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=K(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class fi{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Wl(),window[sa+this.uniqueCallbackIdentifier]=e,window[ra+this.uniqueCallbackIdentifier]=t,this.myIFrame=fi.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){te("frame writing exception"),l.stack&&te(l.stack),te(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||te("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[cr]=this.myID,e[dr]=this.myPW,e[hr]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+_r+i.length<=fr;){const o=this.pendingSegs.shift();i=i+"&"+la+s+"="+o.seg+"&"+aa+s+"="+o.ts+"&"+ua+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(ha)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{te("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a=16384,pa=45e3;let $t=null;typeof MozWebSocket<"u"?$t=MozWebSocket:typeof WebSocket<"u"&&($t=WebSocket);class ce{constructor(e,t,i,s,r,o,l){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Rt(this.connId),this.stats_=hi(t),this.connURL=ce.connectionURL_(t,o,l,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[Zs]=di,typeof location<"u"&&location.hostname&&ir.test(location.hostname)&&(o[tr]=nr),t&&(o[er]=t),i&&(o[sr]=i),s&&(o[Gn]=s),r&&(o[rr]=r),ur(e,or,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Oe.set("previous_websocket_failure",!0);try{let i;zs(),this.mySock=new $t(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){ce.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&$t!==null&&!ce.forceDisallow_}static previouslyFailed(){return Oe.isInMemoryStorage||Oe.get("previous_websocket_failure")===!0}markConnectionHealthy(){Oe.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=li(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(m(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=K(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Xs(t,_a);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(pa))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ce.responsesRequiredToBeHealthy=2;ce.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{static get ALL_TRANSPORTS(){return[Ge,ce]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=ce&&ce.isAvailable();let i=t&&!ce.previouslyFailed();if(e.webSocketOnly&&(t||oe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[ce];else{const s=this.transports_=[];for(const r of yt.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);yt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}yt.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga=6e4,ma=5e3,va=10*1024,ya=100*1024,On="t",ls="d",Ca="s",as="r",wa="e",us="o",cs="a",ds="n",hs="p",Ea="h";class ba{constructor(e,t,i,s,r,o,l,u,a,c){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=u,this.onKill_=a,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Rt("c:"+this.id+":"),this.transportManager_=new yt(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=pt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ya?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>va?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(On in e){const t=e[On];t===cs?this.upgradeIfSecondaryHealthy_():t===as?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===us&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=at("t",e),i=at("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:hs,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:cs,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ds,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=at("t",e),i=at("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=at(On,e);if(ls in e){const i=e[ls];if(t===Ea){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===ds){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Ca?this.onConnectionShutdown_(i):t===as?this.onReset_(i):t===wa?zn("Server Error: "+i):t===us?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):zn("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),di!==i&&oe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),pt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ga))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):pt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ma))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:hs,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Oe.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e){this.allowedEvents_=e,this.listeners_={},m(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){m(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends gr{static getInstance(){return new Yt}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Gs()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return m(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=32,_s=768;class B{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function O(){return new B("")}function k(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Re(n){return n.pieces_.length-n.pieceNum_}function H(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new B(n.pieces_,e)}function mr(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Ta(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function vr(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function yr(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new B(e,0)}function j(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof B)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new B(t,0)}function x(n){return n.pieceNum_>=n.pieces_.length}function ne(n,e){const t=k(n),i=k(e);if(t===null)return e;if(t===i)return ne(H(n),H(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function _i(n,e){if(Re(n)!==Re(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function de(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Re(n)>Re(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class Sa{constructor(e,t){this.errorPrefix_=t,this.parts_=vr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=an(this.parts_[i]);Cr(this)}}function Ia(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=an(e),Cr(n)}function Na(n){const e=n.parts_.pop();n.byteLength_-=an(e),n.parts_.length>0&&(n.byteLength_-=1)}function Cr(n){if(n.byteLength_>_s)throw new Error(n.errorPrefix_+"has a key path longer than "+_s+" bytes ("+n.byteLength_+").");if(n.parts_.length>fs)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+fs+") or object contains a cycle "+Le(n))}function Le(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends gr{static getInstance(){return new pi}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return m(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut=1e3,ka=60*5*1e3,ps=30*1e3,Ra=1.3,xa=3e4,Pa="server_kill",gs=3;class Ce extends pr{constructor(e,t,i,s,r,o,l,u){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=u,this.id=Ce.nextPersistentConnectionId_++,this.log_=Rt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ut,this.maxReconnectDelay_=ka,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u&&!zs())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");pi.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Yt.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(K(r)),m(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new oi,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),m(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const u=l.d,a=l.s;Ce.warnOnListenWarnings_(u,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",l),a!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(a,u))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ee(e,"w")){const i=Ke(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();oe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ll(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ps)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=al(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+K(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):zn("Unrecognized action received from server: "+K(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){m(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ut,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ut,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>xa&&(this.reconnectDelay_=ut),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Ra)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Ce.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const u=function(){l?l.close():(o=!0,i())},a=function(d){m(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:u,sendRequest:a};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?te("getToken() completed but was canceled"):(te("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,l=new ba(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,_=>{oe(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(Pa)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&oe(d),u())}}}interrupt(e){te("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){te("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ki(this.interruptReasons_)&&(this.reconnectDelay_=ut,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>ci(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new B(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){te("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=gs&&(this.reconnectDelay_=ps,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){te("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=gs&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+$s.replace(/\./g,"-")]=1,Gs()?e["framework.cordova"]=1:ul()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Yt.getInstance().currentlyOnline();return Ki(this.interruptReasons_)&&e}}Ce.nextPersistentConnectionId_=0;Ce.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new R(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new R(je,e),s=new R(je,t);return this.compare(i,s)!==0}minPost(){return R.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ut;class wr extends un{static get __EMPTY_NODE(){return Ut}static set __EMPTY_NODE(e){Ut=e}compare(e,t){return tt(e.name,t.name)}isDefinedOn(e){throw Nt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return R.MIN}maxPost(){return new R(Be,Ut)}makePost(e,t){return m(typeof e=="string","KeyIndex indexValue must always be a string."),new R(e,Ut)}toString(){return".key"}}const $e=new wr;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Z{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??Z.RED,this.left=s??re.EMPTY_NODE,this.right=r??re.EMPTY_NODE}copy(e,t,i,s,r){return new Z(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return re.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return re.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Z.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Z.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Z.RED=!0;Z.BLACK=!1;class Aa{copy(e,t,i,s,r){return this}insert(e,t,i){return new Z(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class re{constructor(e,t=re.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new re(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Z.BLACK,null,null))}remove(e){return new re(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Z.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Vt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Vt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Vt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Vt(this.root_,null,this.comparator_,!0,e)}}re.EMPTY_NODE=new Aa;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(n,e){return tt(n.name,e.name)}function gi(n,e){return tt(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qn;function La(n){Qn=n}const Er=function(n){return typeof n=="number"?"number:"+Js(n):"string:"+n},br=function(n){if(n.isLeafNode()){const e=n.val();m(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ee(e,".sv"),"Priority must be a string or number.")}else m(n===Qn||n.isEmpty(),"priority of unexpected type.");m(n===Qn||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ms;class J{static set __childrenNodeConstructor(e){ms=e}static get __childrenNodeConstructor(){return ms}constructor(e,t=J.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,m(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),br(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new J(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:J.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return x(e)?this:k(e)===".priority"?this.priorityNode_:J.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:J.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=k(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(m(i!==".priority"||Re(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,J.__childrenNodeConstructor.EMPTY_NODE.updateChild(H(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Er(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Js(this.value_):e+=this.value_,this.lazyHash_=Ks(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===J.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof J.__childrenNodeConstructor?-1:(m(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=J.VALUE_TYPE_ORDER.indexOf(t),r=J.VALUE_TYPE_ORDER.indexOf(i);return m(s>=0,"Unknown leaf type: "+t),m(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}J.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tr,Sr;function Oa(n){Tr=n}function Ma(n){Sr=n}class Fa extends un{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?tt(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return R.MIN}maxPost(){return new R(Be,new J("[PRIORITY-POST]",Sr))}makePost(e,t){const i=Tr(e);return new R(t,new J("[PRIORITY-POST]",i))}toString(){return".priority"}}const $=new Fa;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba=Math.log(2);class Wa{constructor(e){const t=r=>parseInt(Math.log(r)/Ba,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Kt=function(n,e,t,i){n.sort(e);const s=function(u,a){const c=a-u;let d,h;if(c===0)return null;if(c===1)return d=n[u],h=t?t(d):d,new Z(h,d.node,Z.BLACK,null,null);{const _=parseInt(c/2,10)+u,g=s(u,_),y=s(_+1,a);return d=n[_],h=t?t(d):d,new Z(h,d.node,Z.BLACK,g,y)}},r=function(u){let a=null,c=null,d=n.length;const h=function(g,y){const E=d-g,S=d;d-=g;const C=s(E+1,S),Q=n[E],P=t?t(Q):Q;_(new Z(P,Q.node,y,null,C))},_=function(g){a?(a.left=g,a=g):(c=g,a=g)};for(let g=0;g<u.count;++g){const y=u.nextBitIsOne(),E=Math.pow(2,u.count-(g+1));y?h(E,Z.BLACK):(h(E,Z.BLACK),h(E,Z.RED))}return c},o=new Wa(n.length),l=r(o);return new re(i||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mn;const ze={};class ve{static get Default(){return m(ze&&$,"ChildrenNode.ts has not been loaded"),Mn=Mn||new ve({".priority":ze},{".priority":$}),Mn}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Ke(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof re?t:null}hasIndex(e){return Ee(this.indexSet_,e.toString())}addIndex(e,t){m(e!==$e,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(R.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let l;s?l=Kt(i,e.getCompare()):l=ze;const u=e.toString(),a=Object.assign({},this.indexSet_);a[u]=e;const c=Object.assign({},this.indexes_);return c[u]=l,new ve(c,a)}addToIndexes(e,t){const i=Qt(this.indexes_,(s,r)=>{const o=Ke(this.indexSet_,r);if(m(o,"Missing index implementation for "+r),s===ze)if(o.isDefinedOn(e.node)){const l=[],u=t.getIterator(R.Wrap);let a=u.getNext();for(;a;)a.name!==e.name&&l.push(a),a=u.getNext();return l.push(e),Kt(l,o.getCompare())}else return ze;else{const l=t.get(e.name);let u=s;return l&&(u=u.remove(new R(e.name,l))),u.insert(e,e.node)}});return new ve(i,this.indexSet_)}removeFromIndexes(e,t){const i=Qt(this.indexes_,s=>{if(s===ze)return s;{const r=t.get(e.name);return r?s.remove(new R(e.name,r)):s}});return new ve(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ct;class T{static get EMPTY_NODE(){return ct||(ct=new T(new re(gi),null,ve.Default))}constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&br(this.priorityNode_),this.children_.isEmpty()&&m(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ct}updatePriority(e){return this.children_.isEmpty()?this:new T(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?ct:t}}getChild(e){const t=k(e);return t===null?this:this.getImmediateChild(t).getChild(H(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(m(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new R(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?ct:this.priorityNode_;return new T(s,o,r)}}updateChild(e,t){const i=k(e);if(i===null)return t;{m(k(e)!==".priority"||Re(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(H(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild($,(o,l)=>{t[o]=l.val(e),i++,r&&T.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Er(this.getPriority().val())+":"),this.forEachChild($,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":Ks(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new R(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new R(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new R(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,R.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,R.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===xt?-1:0}withIndex(e){if(e===$e||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new T(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===$e||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator($),s=t.getIterator($);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===$e?null:this.indexMap_.get(e.toString())}}T.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class qa extends T{constructor(){super(new re(gi),T.EMPTY_NODE,ve.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return T.EMPTY_NODE}isEmpty(){return!1}}const xt=new qa;Object.defineProperties(R,{MIN:{value:new R(je,T.EMPTY_NODE)},MAX:{value:new R(Be,xt)}});wr.__EMPTY_NODE=T.EMPTY_NODE;J.__childrenNodeConstructor=T;La(xt);Ma(xt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua=!0;function ee(n,e=null){if(n===null)return T.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),m(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new J(t,ee(e))}if(!(n instanceof Array)&&Ua){const t=[];let i=!1;if(le(n,(o,l)=>{if(o.substring(0,1)!=="."){const u=ee(l);u.isEmpty()||(i=i||!u.getPriority().isEmpty(),t.push(new R(o,u)))}}),t.length===0)return T.EMPTY_NODE;const r=Kt(t,Da,o=>o.name,gi);if(i){const o=Kt(t,$.getCompare());return new T(r,ee(e),new ve({".priority":o},{".priority":$}))}else return new T(r,ee(e),ve.Default)}else{let t=T.EMPTY_NODE;return le(n,(i,s)=>{if(Ee(n,i)&&i.substring(0,1)!=="."){const r=ee(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(ee(e))}}Oa(ee);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va extends un{constructor(e){super(),this.indexPath_=e,m(!x(e)&&k(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?tt(e.name,t.name):r}makePost(e,t){const i=ee(e),s=T.EMPTY_NODE.updateChild(this.indexPath_,i);return new R(t,s)}maxPost(){const e=T.EMPTY_NODE.updateChild(this.indexPath_,xt);return new R(Be,e)}toString(){return vr(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha extends un{compare(e,t){const i=e.node.compareTo(t.node);return i===0?tt(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return R.MIN}maxPost(){return R.MAX}makePost(e,t){const i=ee(e);return new R(t,i)}toString(){return".value"}}const za=new Ha;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(n){return{type:"value",snapshotNode:n}}function Xe(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Ct(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function wt(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Ga(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){m(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(t);return l.getChild(s).equals(i.getChild(s))&&l.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(Ct(t,l)):m(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Xe(t,i)):o.trackChildChange(wt(t,i,l))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild($,(s,r)=>{t.hasChild(s)||i.trackChildChange(Ct(s,r))}),t.isLeafNode()||t.forEachChild($,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(wt(s,r,o))}else i.trackChildChange(Xe(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?T.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.indexedFilter_=new mi(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Et.getStartPost_(e),this.endPost_=Et.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new R(t,i))||(i=T.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=T.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(T.EMPTY_NODE);const r=this;return t.forEachChild($,(o,l)=>{r.matches(new R(o,l))||(s=s.updateImmediateChild(o,T.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Et(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new R(t,i))||(i=T.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=T.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=T.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))s=s.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(T.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:s=s.updateImmediateChild(l.name,T.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,_)=>d(_,h)}else o=this.index_.getCompare();const l=e;m(l.numChildren()===this.limit_,"");const u=new R(t,i),a=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),c=this.rangedFilter_.matches(u);if(l.hasChild(t)){const d=l.getImmediateChild(t);let h=s.getChildAfterChild(this.index_,a,this.reverse_);for(;h!=null&&(h.name===t||l.hasChild(h.name));)h=s.getChildAfterChild(this.index_,h,this.reverse_);const _=h==null?1:o(h,u);if(c&&!i.isEmpty()&&_>=0)return r?.trackChildChange(wt(t,i,d)),l.updateImmediateChild(t,i);{r?.trackChildChange(Ct(t,d));const y=l.updateImmediateChild(t,T.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r?.trackChildChange(Xe(h.name,h.node)),y.updateImmediateChild(h.name,h.node)):y}}else return i.isEmpty()?e:c&&o(a,u)>=0?(r!=null&&(r.trackChildChange(Ct(a.name,a.node)),r.trackChildChange(Xe(t,i))),l.updateImmediateChild(t,i).updateImmediateChild(a.name,T.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=$}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return m(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return m(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:je}hasEnd(){return this.endSet_}getIndexEndValue(){return m(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return m(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Be}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return m(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===$}copy(){const e=new vi;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function $a(n){return n.loadsAllData()?new mi(n.getIndex()):n.hasLimit()?new Qa(n):new Et(n)}function vs(n){const e={};if(n.isDefault())return e;let t;if(n.index_===$?t="$priority":n.index_===za?t="$value":n.index_===$e?t="$key":(m(n.index_ instanceof Va,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=K(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=K(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+K(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=K(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+K(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function ys(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==$&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends pr{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(m(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Rt("p:rest:"),this.listens_={}}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=jt.getListenId_(e,i),l={};this.listens_[o]=l;const u=vs(e._queryParams);this.restRequest_(r+".json",u,(a,c)=>{let d=c;if(a===404&&(d=null,a=null),a===null&&this.onDataUpdate_(r,d,!1,i),Ke(this.listens_,o)===l){let h;a?a===401?h="permission_denied":h="rest_error:"+a:h="ok",s(h,null)}})}unlisten(e,t){const i=jt.getListenId_(e,t);delete this.listens_[i]}get(e){const t=vs(e._queryParams),i=e._path.toString(),s=new oi;return this.restRequest_(i+".json",t,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(i,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+cl(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(i&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let u=null;if(l.status>=200&&l.status<300){try{u=li(l.responseText)}catch{oe("Failed to parse JSON response for "+o+": "+l.responseText)}i(null,u)}else l.status!==401&&l.status!==404&&oe("Got unsuccessful REST response for "+o+" Status: "+l.status),i(l.status);i=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(){this.rootNode_=T.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(){return{value:null,children:new Map}}function Nr(n,e,t){if(x(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=k(e);n.children.has(i)||n.children.set(i,Xt());const s=n.children.get(i);e=H(e),Nr(s,e,t)}}function $n(n,e,t){n.value!==null?t(e,n.value):Ka(n,(i,s)=>{const r=new B(e.toString()+"/"+i);$n(s,r,t)})}function Ka(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&le(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=10*1e3,Xa=30*1e3,Ja=5*60*1e3;class Za{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new ja(e);const i=Cs+(Xa-Cs)*Math.random();pt(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;le(e,(s,r)=>{r>0&&Ee(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),pt(this.reportStats_.bind(this),Math.floor(Math.random()*2*Ja))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(he||(he={}));function kr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function yi(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ci(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=he.ACK_USER_WRITE,this.source=kr()}operationForChild(e){if(x(this.path)){if(this.affectedTree.value!=null)return m(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new B(e));return new Jt(O(),t,this.revert)}}else return m(k(this.path)===e,"operationForChild called for unrelated child."),new Jt(H(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,t){this.source=e,this.path=t,this.type=he.LISTEN_COMPLETE}operationForChild(e){return x(this.path)?new bt(this.source,O()):new bt(this.source,H(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=he.OVERWRITE}operationForChild(e){return x(this.path)?new We(this.source,O(),this.snap.getImmediateChild(e)):new We(this.source,H(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=he.MERGE}operationForChild(e){if(x(this.path)){const t=this.children.subtree(new B(e));return t.isEmpty()?null:t.value?new We(this.source,O(),t.value):new Tt(this.source,O(),t)}else return m(k(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Tt(this.source,H(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(x(e))return this.isFullyInitialized()&&!this.filtered_;const t=k(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function tu(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Ga(o.childName,o.snapshotNode))}),dt(n,s,"child_removed",e,i,t),dt(n,s,"child_added",e,i,t),dt(n,s,"child_moved",r,i,t),dt(n,s,"child_changed",e,i,t),dt(n,s,"value",e,i,t),s}function dt(n,e,t,i,s,r){const o=i.filter(l=>l.type===t);o.sort((l,u)=>iu(n,l,u)),o.forEach(l=>{const u=nu(n,l,r);s.forEach(a=>{a.respondsTo(l.type)&&e.push(a.createEvent(u,n.query_))})})}function nu(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function iu(n,e,t){if(e.childName==null||t.childName==null)throw Nt("Should only compare child_ events.");const i=new R(e.childName,e.snapshotNode),s=new R(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(n,e){return{eventCache:n,serverCache:e}}function gt(n,e,t,i){return cn(new xe(e,t,i),n.serverCache)}function Rr(n,e,t,i){return cn(n.eventCache,new xe(e,t,i))}function Zt(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function qe(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fn;const su=()=>(Fn||(Fn=new re(Hl)),Fn);class G{static fromObject(e){let t=new G(null);return le(e,(i,s)=>{t=t.set(new B(i),s)}),t}constructor(e,t=su()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:O(),value:this.value};if(x(e))return null;{const i=k(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(H(e),t);return r!=null?{path:j(new B(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(x(e))return this;{const t=k(e),i=this.children.get(t);return i!==null?i.subtree(H(e)):new G(null)}}set(e,t){if(x(e))return new G(t,this.children);{const i=k(e),r=(this.children.get(i)||new G(null)).set(H(e),t),o=this.children.insert(i,r);return new G(this.value,o)}}remove(e){if(x(e))return this.children.isEmpty()?new G(null):new G(null,this.children);{const t=k(e),i=this.children.get(t);if(i){const s=i.remove(H(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new G(null):new G(this.value,r)}else return this}}get(e){if(x(e))return this.value;{const t=k(e),i=this.children.get(t);return i?i.get(H(e)):null}}setTree(e,t){if(x(e))return t;{const i=k(e),r=(this.children.get(i)||new G(null)).setTree(H(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new G(this.value,o)}}fold(e){return this.fold_(O(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(j(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,O(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(x(e))return null;{const r=k(e),o=this.children.get(r);return o?o.findOnPath_(H(e),j(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,O(),t)}foreachOnPath_(e,t,i){if(x(e))return this;{this.value&&i(t,this.value);const s=k(e),r=this.children.get(s);return r?r.foreachOnPath_(H(e),j(t,s),i):new G(null)}}foreach(e){this.foreach_(O(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(j(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.writeTree_=e}static empty(){return new fe(new G(null))}}function mt(n,e,t){if(x(e))return new fe(new G(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=ne(s,e);return r=r.updateChild(o,t),new fe(n.writeTree_.set(s,r))}else{const s=new G(t),r=n.writeTree_.setTree(e,s);return new fe(r)}}}function ws(n,e,t){let i=n;return le(t,(s,r)=>{i=mt(i,j(e,s),r)}),i}function Es(n,e){if(x(e))return fe.empty();{const t=n.writeTree_.setTree(e,new G(null));return new fe(t)}}function Yn(n,e){return Ue(n,e)!=null}function Ue(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(ne(t.path,e)):null}function bs(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild($,(i,s)=>{e.push(new R(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new R(i,s.value))}),e}function Ne(n,e){if(x(e))return n;{const t=Ue(n,e);return t!=null?new fe(new G(t)):new fe(n.writeTree_.subtree(e))}}function Kn(n){return n.writeTree_.isEmpty()}function Je(n,e){return xr(O(),n.writeTree_,e)}function xr(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(m(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=xr(j(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(j(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(n,e){return Lr(e,n)}function ru(n,e,t,i,s){m(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=mt(n.visibleWrites,e,t)),n.lastWriteId=i}function ou(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function lu(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);m(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&au(l,i.path)?s=!1:de(i.path,l.path)&&(r=!0)),o--}if(s){if(r)return uu(n),!0;if(i.snap)n.visibleWrites=Es(n.visibleWrites,i.path);else{const l=i.children;le(l,u=>{n.visibleWrites=Es(n.visibleWrites,j(i.path,u))})}return!0}else return!1}function au(n,e){if(n.snap)return de(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&de(j(n.path,t),e))return!0;return!1}function uu(n){n.visibleWrites=Pr(n.allWrites,cu,O()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function cu(n){return n.visible}function Pr(n,e,t){let i=fe.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let l;if(r.snap)de(t,o)?(l=ne(t,o),i=mt(i,l,r.snap)):de(o,t)&&(l=ne(o,t),i=mt(i,O(),r.snap.getChild(l)));else if(r.children){if(de(t,o))l=ne(t,o),i=ws(i,l,r.children);else if(de(o,t))if(l=ne(o,t),x(l))i=ws(i,O(),r.children);else{const u=Ke(r.children,k(l));if(u){const a=u.getChild(H(l));i=mt(i,O(),a)}}}else throw Nt("WriteRecord should have .snap or .children")}}return i}function Ar(n,e,t,i,s){if(!i&&!s){const r=Ue(n.visibleWrites,e);if(r!=null)return r;{const o=Ne(n.visibleWrites,e);if(Kn(o))return t;if(t==null&&!Yn(o,O()))return null;{const l=t||T.EMPTY_NODE;return Je(o,l)}}}else{const r=Ne(n.visibleWrites,e);if(!s&&Kn(r))return t;if(!s&&t==null&&!Yn(r,O()))return null;{const o=function(a){return(a.visible||s)&&(!i||!~i.indexOf(a.writeId))&&(de(a.path,e)||de(e,a.path))},l=Pr(n.allWrites,o,e),u=t||T.EMPTY_NODE;return Je(l,u)}}}function du(n,e,t){let i=T.EMPTY_NODE;const s=Ue(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild($,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=Ne(n.visibleWrites,e);return t.forEachChild($,(o,l)=>{const u=Je(Ne(r,new B(o)),l);i=i.updateImmediateChild(o,u)}),bs(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Ne(n.visibleWrites,e);return bs(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function hu(n,e,t,i,s){m(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=j(e,t);if(Yn(n.visibleWrites,r))return null;{const o=Ne(n.visibleWrites,r);return Kn(o)?s.getChild(t):Je(o,s.getChild(t))}}function fu(n,e,t,i){const s=j(e,t),r=Ue(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=Ne(n.visibleWrites,s);return Je(o,i.getNode().getImmediateChild(t))}else return null}function _u(n,e){return Ue(n.visibleWrites,e)}function pu(n,e,t,i,s,r,o){let l;const u=Ne(n.visibleWrites,e),a=Ue(u,O());if(a!=null)l=a;else if(t!=null)l=Je(u,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const c=[],d=o.getCompare(),h=r?l.getReverseIteratorFrom(i,o):l.getIteratorFrom(i,o);let _=h.getNext();for(;_&&c.length<s;)d(_,i)!==0&&c.push(_),_=h.getNext();return c}else return[]}function gu(){return{visibleWrites:fe.empty(),allWrites:[],lastWriteId:-1}}function en(n,e,t,i){return Ar(n.writeTree,n.treePath,e,t,i)}function wi(n,e){return du(n.writeTree,n.treePath,e)}function Ts(n,e,t,i){return hu(n.writeTree,n.treePath,e,t,i)}function tn(n,e){return _u(n.writeTree,j(n.treePath,e))}function mu(n,e,t,i,s,r){return pu(n.writeTree,n.treePath,e,t,i,s,r)}function Ei(n,e,t){return fu(n.writeTree,n.treePath,e,t)}function Dr(n,e){return Lr(j(n.treePath,e),n.writeTree)}function Lr(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;m(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),m(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,wt(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,Ct(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,Xe(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,wt(i,e.snapshotNode,s.oldSnap));else throw Nt("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const Or=new yu;class bi{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new xe(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ei(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:qe(this.viewCache_),r=mu(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(n){return{filter:n}}function wu(n,e){m(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),m(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Eu(n,e,t,i,s){const r=new vu;let o,l;if(t.type===he.OVERWRITE){const a=t;a.source.fromUser?o=jn(n,e,a.path,a.snap,i,s,r):(m(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered()&&!x(a.path),o=nn(n,e,a.path,a.snap,i,s,l,r))}else if(t.type===he.MERGE){const a=t;a.source.fromUser?o=Tu(n,e,a.path,a.children,i,s,r):(m(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered(),o=Xn(n,e,a.path,a.children,i,s,l,r))}else if(t.type===he.ACK_USER_WRITE){const a=t;a.revert?o=Nu(n,e,a.path,i,s,r):o=Su(n,e,a.path,a.affectedTree,i,s,r)}else if(t.type===he.LISTEN_COMPLETE)o=Iu(n,e,t.path,i,r);else throw Nt("Unknown operation type: "+t.type);const u=r.getChanges();return bu(e,o,u),{viewCache:o,changes:u}}function bu(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Zt(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(Ir(Zt(e)))}}function Mr(n,e,t,i,s,r){const o=e.eventCache;if(tn(i,t)!=null)return e;{let l,u;if(x(t))if(m(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const a=qe(e),c=a instanceof T?a:T.EMPTY_NODE,d=wi(i,c);l=n.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const a=en(i,qe(e));l=n.filter.updateFullNode(e.eventCache.getNode(),a,r)}else{const a=k(t);if(a===".priority"){m(Re(t)===1,"Can't have a priority with additional path components");const c=o.getNode();u=e.serverCache.getNode();const d=Ts(i,t,c,u);d!=null?l=n.filter.updatePriority(c,d):l=o.getNode()}else{const c=H(t);let d;if(o.isCompleteForChild(a)){u=e.serverCache.getNode();const h=Ts(i,t,o.getNode(),u);h!=null?d=o.getNode().getImmediateChild(a).updateChild(c,h):d=o.getNode().getImmediateChild(a)}else d=Ei(i,a,e.serverCache);d!=null?l=n.filter.updateChild(o.getNode(),a,d,c,s,r):l=o.getNode()}}return gt(e,l,o.isFullyInitialized()||x(t),n.filter.filtersNodes())}}function nn(n,e,t,i,s,r,o,l){const u=e.serverCache;let a;const c=o?n.filter:n.filter.getIndexedFilter();if(x(t))a=c.updateFullNode(u.getNode(),i,null);else if(c.filtersNodes()&&!u.isFiltered()){const _=u.getNode().updateChild(t,i);a=c.updateFullNode(u.getNode(),_,null)}else{const _=k(t);if(!u.isCompleteForPath(t)&&Re(t)>1)return e;const g=H(t),E=u.getNode().getImmediateChild(_).updateChild(g,i);_===".priority"?a=c.updatePriority(u.getNode(),E):a=c.updateChild(u.getNode(),_,E,g,Or,null)}const d=Rr(e,a,u.isFullyInitialized()||x(t),c.filtersNodes()),h=new bi(s,d,r);return Mr(n,d,t,s,h,l)}function jn(n,e,t,i,s,r,o){const l=e.eventCache;let u,a;const c=new bi(s,e,r);if(x(t))a=n.filter.updateFullNode(e.eventCache.getNode(),i,o),u=gt(e,a,!0,n.filter.filtersNodes());else{const d=k(t);if(d===".priority")a=n.filter.updatePriority(e.eventCache.getNode(),i),u=gt(e,a,l.isFullyInitialized(),l.isFiltered());else{const h=H(t),_=l.getNode().getImmediateChild(d);let g;if(x(h))g=i;else{const y=c.getCompleteChild(d);y!=null?mr(h)===".priority"&&y.getChild(yr(h)).isEmpty()?g=y:g=y.updateChild(h,i):g=T.EMPTY_NODE}if(_.equals(g))u=e;else{const y=n.filter.updateChild(l.getNode(),d,g,h,c,o);u=gt(e,y,l.isFullyInitialized(),n.filter.filtersNodes())}}}return u}function Ss(n,e){return n.eventCache.isCompleteForChild(e)}function Tu(n,e,t,i,s,r,o){let l=e;return i.foreach((u,a)=>{const c=j(t,u);Ss(e,k(c))&&(l=jn(n,l,c,a,s,r,o))}),i.foreach((u,a)=>{const c=j(t,u);Ss(e,k(c))||(l=jn(n,l,c,a,s,r,o))}),l}function Is(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Xn(n,e,t,i,s,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,a;x(t)?a=i:a=new G(null).setTree(t,i);const c=e.serverCache.getNode();return a.children.inorderTraversal((d,h)=>{if(c.hasChild(d)){const _=e.serverCache.getNode().getImmediateChild(d),g=Is(n,_,h);u=nn(n,u,new B(d),g,s,r,o,l)}}),a.children.inorderTraversal((d,h)=>{const _=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!c.hasChild(d)&&!_){const g=e.serverCache.getNode().getImmediateChild(d),y=Is(n,g,h);u=nn(n,u,new B(d),y,s,r,o,l)}}),u}function Su(n,e,t,i,s,r,o){if(tn(s,t)!=null)return e;const l=e.serverCache.isFiltered(),u=e.serverCache;if(i.value!=null){if(x(t)&&u.isFullyInitialized()||u.isCompleteForPath(t))return nn(n,e,t,u.getNode().getChild(t),s,r,l,o);if(x(t)){let a=new G(null);return u.getNode().forEachChild($e,(c,d)=>{a=a.set(new B(c),d)}),Xn(n,e,t,a,s,r,l,o)}else return e}else{let a=new G(null);return i.foreach((c,d)=>{const h=j(t,c);u.isCompleteForPath(h)&&(a=a.set(c,u.getNode().getChild(h)))}),Xn(n,e,t,a,s,r,l,o)}}function Iu(n,e,t,i,s){const r=e.serverCache,o=Rr(e,r.getNode(),r.isFullyInitialized()||x(t),r.isFiltered());return Mr(n,o,t,i,Or,s)}function Nu(n,e,t,i,s,r){let o;if(tn(i,t)!=null)return e;{const l=new bi(i,e,s),u=e.eventCache.getNode();let a;if(x(t)||k(t)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=en(i,qe(e));else{const d=e.serverCache.getNode();m(d instanceof T,"serverChildren would be complete if leaf node"),c=wi(i,d)}c=c,a=n.filter.updateFullNode(u,c,r)}else{const c=k(t);let d=Ei(i,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=u.getImmediateChild(c)),d!=null?a=n.filter.updateChild(u,c,d,H(t),l,r):e.eventCache.getNode().hasChild(c)?a=n.filter.updateChild(u,c,T.EMPTY_NODE,H(t),l,r):a=u,a.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=en(i,qe(e)),o.isLeafNode()&&(a=n.filter.updateFullNode(a,o,r)))}return o=e.serverCache.isFullyInitialized()||tn(i,O())!=null,gt(e,a,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new mi(i.getIndex()),r=$a(i);this.processor_=Cu(r);const o=t.serverCache,l=t.eventCache,u=s.updateFullNode(T.EMPTY_NODE,o.getNode(),null),a=r.updateFullNode(T.EMPTY_NODE,l.getNode(),null),c=new xe(u,o.isFullyInitialized(),s.filtersNodes()),d=new xe(a,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=cn(d,c),this.eventGenerator_=new eu(this.query_)}get query(){return this.query_}}function Ru(n){return n.viewCache_.serverCache.getNode()}function xu(n){return Zt(n.viewCache_)}function Pu(n,e){const t=qe(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!x(e)&&!t.getImmediateChild(k(e)).isEmpty())?t.getChild(e):null}function Ns(n){return n.eventRegistrations_.length===0}function Au(n,e){n.eventRegistrations_.push(e)}function ks(n,e,t){const i=[];if(t){m(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function Rs(n,e,t,i){e.type===he.MERGE&&e.source.queryId!==null&&(m(qe(n.viewCache_),"We should always have a full cache before handling merges"),m(Zt(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=Eu(n.processor_,s,e,t,i);return wu(n.processor_,r.viewCache),m(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Fr(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Du(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild($,(r,o)=>{i.push(Xe(r,o))}),t.isFullyInitialized()&&i.push(Ir(t.getNode())),Fr(n,i,t.getNode(),e)}function Fr(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return tu(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sn;class Br{constructor(){this.views=new Map}}function Lu(n){m(!sn,"__referenceConstructor has already been defined"),sn=n}function Ou(){return m(sn,"Reference.ts has not been loaded"),sn}function Mu(n){return n.views.size===0}function Ti(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return m(r!=null,"SyncTree gave us an op for an invalid query."),Rs(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(Rs(o,e,t,i));return r}}function Wr(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let l=en(t,s?i:null),u=!1;l?u=!0:i instanceof T?(l=wi(t,i),u=!1):(l=T.EMPTY_NODE,u=!1);const a=cn(new xe(l,u,!1),new xe(i,s,!1));return new ku(e,a)}return o}function Fu(n,e,t,i,s,r){const o=Wr(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Au(o,t),Du(o,t)}function Bu(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const l=Pe(n);if(s==="default")for(const[u,a]of n.views.entries())o=o.concat(ks(a,t,i)),Ns(a)&&(n.views.delete(u),a.query._queryParams.loadsAllData()||r.push(a.query));else{const u=n.views.get(s);u&&(o=o.concat(ks(u,t,i)),Ns(u)&&(n.views.delete(s),u.query._queryParams.loadsAllData()||r.push(u.query)))}return l&&!Pe(n)&&r.push(new(Ou())(e._repo,e._path)),{removed:r,events:o}}function qr(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function ke(n,e){let t=null;for(const i of n.views.values())t=t||Pu(i,e);return t}function Ur(n,e){if(e._queryParams.loadsAllData())return hn(n);{const i=e._queryIdentifier;return n.views.get(i)}}function Vr(n,e){return Ur(n,e)!=null}function Pe(n){return hn(n)!=null}function hn(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rn;function Wu(n){m(!rn,"__referenceConstructor has already been defined"),rn=n}function qu(){return m(rn,"Reference.ts has not been loaded"),rn}let Uu=1;class xs{constructor(e){this.listenProvider_=e,this.syncPointTree_=new G(null),this.pendingWriteTree_=gu(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Hr(n,e,t,i,s){return ru(n.pendingWriteTree_,e,t,i,s),s?At(n,new We(kr(),e,t)):[]}function Me(n,e,t=!1){const i=ou(n.pendingWriteTree_,e);if(lu(n.pendingWriteTree_,e)){let r=new G(null);return i.snap!=null?r=r.set(O(),!0):le(i.children,o=>{r=r.set(new B(o),!0)}),At(n,new Jt(i.path,r,t))}else return[]}function Pt(n,e,t){return At(n,new We(yi(),e,t))}function Vu(n,e,t){const i=G.fromObject(t);return At(n,new Tt(yi(),e,i))}function Hu(n,e){return At(n,new bt(yi(),e))}function zu(n,e,t){const i=Ii(n,t);if(i){const s=Ni(i),r=s.path,o=s.queryId,l=ne(r,e),u=new bt(Ci(o),l);return ki(n,r,u)}else return[]}function on(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Vr(o,e))){const u=Bu(o,e,t,i);Mu(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const a=u.removed;if(l=u.events,!s){const c=a.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=n.syncPointTree_.findOnPath(r,(h,_)=>Pe(_));if(c&&!d){const h=n.syncPointTree_.subtree(r);if(!h.isEmpty()){const _=$u(h);for(let g=0;g<_.length;++g){const y=_[g],E=y.query,S=$r(n,y);n.listenProvider_.startListening(vt(E),St(n,E),S.hashFn,S.onComplete)}}}!d&&a.length>0&&!i&&(c?n.listenProvider_.stopListening(vt(e),null):a.forEach(h=>{const _=n.queryToTagMap.get(fn(h));n.listenProvider_.stopListening(vt(h),_)}))}Yu(n,a)}return l}function zr(n,e,t,i){const s=Ii(n,i);if(s!=null){const r=Ni(s),o=r.path,l=r.queryId,u=ne(o,e),a=new We(Ci(l),u,t);return ki(n,o,a)}else return[]}function Gu(n,e,t,i){const s=Ii(n,i);if(s){const r=Ni(s),o=r.path,l=r.queryId,u=ne(o,e),a=G.fromObject(t),c=new Tt(Ci(l),u,a);return ki(n,o,c)}else return[]}function Jn(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(h,_)=>{const g=ne(h,s);r=r||ke(_,g),o=o||Pe(_)});let l=n.syncPointTree_.get(s);l?(o=o||Pe(l),r=r||ke(l,O())):(l=new Br,n.syncPointTree_=n.syncPointTree_.set(s,l));let u;r!=null?u=!0:(u=!1,r=T.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((_,g)=>{const y=ke(g,O());y&&(r=r.updateImmediateChild(_,y))}));const a=Vr(l,e);if(!a&&!e._queryParams.loadsAllData()){const h=fn(e);m(!n.queryToTagMap.has(h),"View does not exist, but we have a tag");const _=Ku();n.queryToTagMap.set(h,_),n.tagToQueryMap.set(_,h)}const c=dn(n.pendingWriteTree_,s);let d=Fu(l,e,t,c,r,u);if(!a&&!o&&!i){const h=Ur(l,e);d=d.concat(ju(n,e,h))}return d}function Si(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,l)=>{const u=ne(o,e),a=ke(l,u);if(a)return a});return Ar(s,e,r,t,!0)}function Qu(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(a,c)=>{const d=ne(a,t);i=i||ke(c,d)});let s=n.syncPointTree_.get(t);s?i=i||ke(s,O()):(s=new Br,n.syncPointTree_=n.syncPointTree_.set(t,s));const r=i!=null,o=r?new xe(i,!0,!1):null,l=dn(n.pendingWriteTree_,e._path),u=Wr(s,e,l,r?o.getNode():T.EMPTY_NODE,r);return xu(u)}function At(n,e){return Gr(e,n.syncPointTree_,null,dn(n.pendingWriteTree_,O()))}function Gr(n,e,t,i){if(x(n.path))return Qr(n,e,t,i);{const s=e.get(O());t==null&&s!=null&&(t=ke(s,O()));let r=[];const o=k(n.path),l=n.operationForChild(o),u=e.children.get(o);if(u&&l){const a=t?t.getImmediateChild(o):null,c=Dr(i,o);r=r.concat(Gr(l,u,a,c))}return s&&(r=r.concat(Ti(s,n,i,t))),r}}function Qr(n,e,t,i){const s=e.get(O());t==null&&s!=null&&(t=ke(s,O()));let r=[];return e.children.inorderTraversal((o,l)=>{const u=t?t.getImmediateChild(o):null,a=Dr(i,o),c=n.operationForChild(o);c&&(r=r.concat(Qr(c,l,u,a)))}),s&&(r=r.concat(Ti(s,n,i,t))),r}function $r(n,e){const t=e.query,i=St(n,t);return{hashFn:()=>(Ru(e)||T.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?zu(n,t._path,i):Hu(n,t._path);{const r=Ql(s,t);return on(n,t,null,r)}}}}function St(n,e){const t=fn(e);return n.queryToTagMap.get(t)}function fn(n){return n._path.toString()+"$"+n._queryIdentifier}function Ii(n,e){return n.tagToQueryMap.get(e)}function Ni(n){const e=n.indexOf("$");return m(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new B(n.substr(0,e))}}function ki(n,e,t){const i=n.syncPointTree_.get(e);m(i,"Missing sync point for query tag that we're tracking");const s=dn(n.pendingWriteTree_,e);return Ti(i,t,s,null)}function $u(n){return n.fold((e,t,i)=>{if(t&&Pe(t))return[hn(t)];{let s=[];return t&&(s=qr(t)),le(i,(r,o)=>{s=s.concat(o)}),s}})}function vt(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(qu())(n._repo,n._path):n}function Yu(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=fn(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function Ku(){return Uu++}function ju(n,e,t){const i=e._path,s=St(n,e),r=$r(n,t),o=n.listenProvider_.startListening(vt(e),s,r.hashFn,r.onComplete),l=n.syncPointTree_.subtree(i);if(s)m(!Pe(l.value),"If we're adding a query, it shouldn't be shadowed");else{const u=l.fold((a,c,d)=>{if(!x(a)&&c&&Pe(c))return[hn(c).query];{let h=[];return c&&(h=h.concat(qr(c).map(_=>_.query))),le(d,(_,g)=>{h=h.concat(g)}),h}});for(let a=0;a<u.length;++a){const c=u[a];n.listenProvider_.stopListening(vt(c),St(n,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ri(t)}node(){return this.node_}}class xi{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=j(this.path_,e);return new xi(this.syncTree_,t)}node(){return Si(this.syncTree_,this.path_)}}const Xu=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Ps=function(n,e,t){if(!n||typeof n!="object")return n;if(m(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Ju(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Zu(n[".sv"],e);m(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Ju=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:m(!1,"Unexpected server value: "+n)}},Zu=function(n,e,t){n.hasOwnProperty("increment")||m(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&m(!1,"Unexpected increment value: "+i);const s=e.node();if(m(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},ec=function(n,e,t,i){return Pi(e,new xi(t,n),i)},Yr=function(n,e,t){return Pi(n,new Ri(e),t)};function Pi(n,e,t){const i=n.getPriority().val(),s=Ps(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,l=Ps(o.getValue(),e,t);return l!==o.getValue()||s!==o.getPriority().val()?new J(l,ee(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new J(s))),o.forEachChild($,(l,u)=>{const a=Pi(u,e.getImmediateChild(l),t);a!==u&&(r=r.updateImmediateChild(l,a))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function Di(n,e){let t=e instanceof B?e:new B(e),i=n,s=k(t);for(;s!==null;){const r=Ke(i.node.children,s)||{children:{},childCount:0};i=new Ai(s,i,r),t=H(t),s=k(t)}return i}function it(n){return n.node.value}function Kr(n,e){n.node.value=e,Zn(n)}function jr(n){return n.node.childCount>0}function tc(n){return it(n)===void 0&&!jr(n)}function _n(n,e){le(n.node.children,(t,i)=>{e(new Ai(t,n,i))})}function Xr(n,e,t,i){t&&!i&&e(n),_n(n,s=>{Xr(s,e,!0,i)}),t&&i&&e(n)}function nc(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Dt(n){return new B(n.parent===null?n.name:Dt(n.parent)+"/"+n.name)}function Zn(n){n.parent!==null&&ic(n.parent,n.name,n)}function ic(n,e,t){const i=tc(t),s=Ee(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,Zn(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Zn(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc=/[\[\].#$\/\u0000-\u001F\u007F]/,rc=/[\[\].#$\u0000-\u001F\u007F]/,Bn=10*1024*1024,Jr=function(n){return typeof n=="string"&&n.length!==0&&!sc.test(n)},Zr=function(n){return typeof n=="string"&&n.length!==0&&!rc.test(n)},oc=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Zr(n)},lc=function(n,e,t,i){Li(ai(n,"value"),e,t)},Li=function(n,e,t){const i=t instanceof B?new Sa(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Le(i));if(typeof e=="function")throw new Error(n+"contains a function "+Le(i)+" with contents = "+e.toString());if(js(e))throw new Error(n+"contains "+e.toString()+" "+Le(i));if(typeof e=="string"&&e.length>Bn/3&&an(e)>Bn)throw new Error(n+"contains a string greater than "+Bn+" utf8 bytes "+Le(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(le(e,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Jr(o)))throw new Error(n+" contains an invalid key ("+o+") "+Le(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Ia(i,o),Li(n,l,i),Na(i)}),s&&r)throw new Error(n+' contains ".value" child '+Le(i)+" in addition to actual children.")}},eo=function(n,e,t,i){if(!Zr(t))throw new Error(ai(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},ac=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),eo(n,e,t)},uc=function(n,e){if(k(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},cc=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Jr(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!oc(t))throw new Error(ai(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Oi(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!_i(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function to(n,e,t){Oi(n,t),no(n,i=>_i(i,e))}function ge(n,e,t){Oi(n,t),no(n,i=>de(i,e)||de(e,i))}function no(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(hc(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function hc(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();_t&&te("event: "+t.toString()),nt(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc="repo_interrupt",_c=25;class pc{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new dc,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Xt(),this.transactionQueueTree_=new Ai,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function gc(n,e,t){if(n.stats_=hi(n.repoInfo_),n.forceRestClient_||jl())n.server_=new jt(n.repoInfo_,(i,s,r,o)=>{As(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Ds(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{K(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Ce(n.repoInfo_,e,(i,s,r,o)=>{As(n,i,s,r,o)},i=>{Ds(n,i)},i=>{vc(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=ta(n.repoInfo_,()=>new Za(n.stats_,n.server_)),n.infoData_=new Ya,n.infoSyncTree_=new xs({startListening:(i,s,r,o)=>{let l=[];const u=n.infoData_.getNode(i._path);return u.isEmpty()||(l=Pt(n.infoSyncTree_,i._path,u),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Fi(n,"connected",!1),n.serverSyncTree_=new xs({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(l,u)=>{const a=o(l,u);ge(n.eventQueue_,i._path,a)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function mc(n){const t=n.infoData_.getNode(new B(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Mi(n){return Xu({timestamp:mc(n)})}function As(n,e,t,i,s){n.dataUpdateCount++;const r=new B(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const u=Qt(t,a=>ee(a));o=Gu(n.serverSyncTree_,r,u,s)}else{const u=ee(t);o=zr(n.serverSyncTree_,r,u,s)}else if(i){const u=Qt(t,a=>ee(a));o=Vu(n.serverSyncTree_,r,u)}else{const u=ee(t);o=Pt(n.serverSyncTree_,r,u)}let l=r;o.length>0&&(l=gn(n,r)),ge(n.eventQueue_,l,o)}function Ds(n,e){Fi(n,"connected",e),e===!1&&wc(n)}function vc(n,e){le(e,(t,i)=>{Fi(n,t,i)})}function Fi(n,e,t){const i=new B("/.info/"+e),s=ee(t);n.infoData_.updateSnapshot(i,s);const r=Pt(n.infoSyncTree_,i,s);ge(n.eventQueue_,i,r)}function io(n){return n.nextWriteId_++}function yc(n,e,t){const i=Qu(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(s=>{const r=ee(s).withIndex(e._queryParams.getIndex());Jn(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Pt(n.serverSyncTree_,e._path,r);else{const l=St(n.serverSyncTree_,e);o=zr(n.serverSyncTree_,e._path,r,l)}return ge(n.eventQueue_,e._path,o),on(n.serverSyncTree_,e,t,null,!0),r},s=>(pn(n,"get for query "+K(e)+" failed: "+s),Promise.reject(new Error(s))))}function Cc(n,e,t,i,s){pn(n,"set",{path:e.toString(),value:t,priority:i});const r=Mi(n),o=ee(t,i),l=Si(n.serverSyncTree_,e),u=Yr(o,l,r),a=io(n),c=Hr(n.serverSyncTree_,e,u,a,!0);Oi(n.eventQueue_,c),n.server_.put(e.toString(),o.val(!0),(h,_)=>{const g=h==="ok";g||oe("set at "+e+" failed: "+h);const y=Me(n.serverSyncTree_,a,!g);ge(n.eventQueue_,e,y),Tc(n,s,h,_)});const d=ao(n,e);gn(n,d),ge(n.eventQueue_,d,[])}function wc(n){pn(n,"onDisconnectEvents");const e=Mi(n),t=Xt();$n(n.onDisconnect_,O(),(s,r)=>{const o=ec(s,r,n.serverSyncTree_,e);Nr(t,s,o)});let i=[];$n(t,O(),(s,r)=>{i=i.concat(Pt(n.serverSyncTree_,s,r));const o=ao(n,s);gn(n,o)}),n.onDisconnect_=Xt(),ge(n.eventQueue_,O(),i)}function Ec(n,e,t){let i;k(e._path)===".info"?i=Jn(n.infoSyncTree_,e,t):i=Jn(n.serverSyncTree_,e,t),to(n.eventQueue_,e._path,i)}function Ls(n,e,t){let i;k(e._path)===".info"?i=on(n.infoSyncTree_,e,t):i=on(n.serverSyncTree_,e,t),to(n.eventQueue_,e._path,i)}function bc(n){n.persistentConnection_&&n.persistentConnection_.interrupt(fc)}function pn(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),te(t,...e)}function Tc(n,e,t,i){e&&nt(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function so(n,e,t){return Si(n.serverSyncTree_,e,t)||T.EMPTY_NODE}function Bi(n,e=n.transactionQueueTree_){if(e||mn(n,e),it(e)){const t=oo(n,e);m(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&Sc(n,Dt(e),t)}else jr(e)&&_n(e,t=>{Bi(n,t)})}function Sc(n,e,t){const i=t.map(a=>a.currentWriteId),s=so(n,e,i);let r=s;const o=s.hash();for(let a=0;a<t.length;a++){const c=t[a];m(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=ne(e,c.path);r=r.updateChild(d,c.currentOutputSnapshotRaw)}const l=r.val(!0),u=e;n.server_.put(u.toString(),l,a=>{pn(n,"transaction put response",{path:u.toString(),status:a});let c=[];if(a==="ok"){const d=[];for(let h=0;h<t.length;h++)t[h].status=2,c=c.concat(Me(n.serverSyncTree_,t[h].currentWriteId)),t[h].onComplete&&d.push(()=>t[h].onComplete(null,!0,t[h].currentOutputSnapshotResolved)),t[h].unwatcher();mn(n,Di(n.transactionQueueTree_,e)),Bi(n,n.transactionQueueTree_),ge(n.eventQueue_,e,c);for(let h=0;h<d.length;h++)nt(d[h])}else{if(a==="datastale")for(let d=0;d<t.length;d++)t[d].status===3?t[d].status=4:t[d].status=0;else{oe("transaction at "+u.toString()+" failed: "+a);for(let d=0;d<t.length;d++)t[d].status=4,t[d].abortReason=a}gn(n,e)}},o)}function gn(n,e){const t=ro(n,e),i=Dt(t),s=oo(n,t);return Ic(n,s,i),i}function Ic(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const u=e[l],a=ne(t,u.path);let c=!1,d;if(m(a!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)c=!0,d=u.abortReason,s=s.concat(Me(n.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=_c)c=!0,d="maxretry",s=s.concat(Me(n.serverSyncTree_,u.currentWriteId,!0));else{const h=so(n,u.path,o);u.currentInputSnapshot=h;const _=e[l].update(h.val());if(_!==void 0){Li("transaction failed: Data returned ",_,u.path);let g=ee(_);typeof _=="object"&&_!=null&&Ee(_,".priority")||(g=g.updatePriority(h.getPriority()));const E=u.currentWriteId,S=Mi(n),C=Yr(g,h,S);u.currentOutputSnapshotRaw=g,u.currentOutputSnapshotResolved=C,u.currentWriteId=io(n),o.splice(o.indexOf(E),1),s=s.concat(Hr(n.serverSyncTree_,u.path,C,u.currentWriteId,u.applyLocally)),s=s.concat(Me(n.serverSyncTree_,E,!0))}else c=!0,d="nodata",s=s.concat(Me(n.serverSyncTree_,u.currentWriteId,!0))}ge(n.eventQueue_,t,s),s=[],c&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?i.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):i.push(()=>e[l].onComplete(new Error(d),!1,null))))}mn(n,n.transactionQueueTree_);for(let l=0;l<i.length;l++)nt(i[l]);Bi(n,n.transactionQueueTree_)}function ro(n,e){let t,i=n.transactionQueueTree_;for(t=k(e);t!==null&&it(i)===void 0;)i=Di(i,t),e=H(e),t=k(e);return i}function oo(n,e){const t=[];return lo(n,e,t),t.sort((i,s)=>i.order-s.order),t}function lo(n,e,t){const i=it(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);_n(e,s=>{lo(n,s,t)})}function mn(n,e){const t=it(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,Kr(e,t.length>0?t:void 0)}_n(e,i=>{mn(n,i)})}function ao(n,e){const t=Dt(ro(n,e)),i=Di(n.transactionQueueTree_,e);return nc(i,s=>{Wn(n,s)}),Wn(n,i),Xr(i,s=>{Wn(n,s)}),t}function Wn(n,e){const t=it(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(m(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(m(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Me(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Kr(e,void 0):t.length=r+1,ge(n.eventQueue_,Dt(e),s);for(let o=0;o<i.length;o++)nt(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function kc(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):oe(`Invalid query segment '${t}' in query '${n}'`)}return e}const Os=function(n,e){const t=Rc(n),i=t.namespace;t.domain==="firebase.com"&&we(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&we("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Ul();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new ar(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new B(t.pathString)}},Rc=function(n){let e="",t="",i="",s="",r="",o=!0,l="https",u=443;if(typeof n=="string"){let a=n.indexOf("//");a>=0&&(l=n.substring(0,a-1),n=n.substring(a+2));let c=n.indexOf("/");c===-1&&(c=n.length);let d=n.indexOf("?");d===-1&&(d=n.length),e=n.substring(0,Math.min(c,d)),c<d&&(s=Nc(n.substring(c,d)));const h=kc(n.substring(Math.min(n.length,d)));a=e.indexOf(":"),a>=0?(o=l==="https"||l==="wss",u=parseInt(e.substring(a+1),10)):a=e.length;const _=e.slice(0,a);if(_.toLowerCase()==="localhost")t="localhost";else if(_.split(".").length<=2)t=_;else{const g=e.indexOf(".");i=e.substring(0,g).toLowerCase(),t=e.substring(g+1),r=i}"ns"in h&&(r=h.ns)}return{host:e,port:u,domain:t,subdomain:i,secure:o,scheme:l,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+K(this.snapshot.exportVal())}}class Pc{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return m(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return x(this._path)?null:mr(this._path)}get ref(){return new be(this._repo,this._path)}get _queryIdentifier(){const e=ys(this._queryParams),t=ci(e);return t==="{}"?"default":t}get _queryObject(){return ys(this._queryParams)}isEqual(e){if(e=et(e),!(e instanceof Wi))return!1;const t=this._repo===e._repo,i=_i(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Ta(this._path)}}class be extends Wi{constructor(e,t){super(e,t,new vi,!1)}get parent(){const e=yr(this._path);return e===null?null:new be(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class It{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new B(e),i=ei(this.ref,e);return new It(this._node.getChild(t),i,$)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new It(s,ei(this.ref,i),$)))}hasChild(e){const t=new B(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ht(n,e){return n=et(n),n._checkNotDeleted("ref"),e!==void 0?ei(n._root,e):n._root}function ei(n,e){return n=et(n),k(n._path)===null?ac("child","path",e):eo("child","path",e),new be(n._repo,j(n._path,e))}function Ht(n,e){n=et(n),uc("set",n._path),lc("set",e,n._path);const t=new oi;return Cc(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function Ac(n){n=et(n);const e=new uo(()=>{}),t=new vn(e);return yc(n._repo,n,t).then(i=>new It(i,new be(n._repo,n._path),n._queryParams.getIndex()))}class vn{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new xc("value",this,new It(e.snapshotNode,new be(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Pc(this,e,t):null}matches(e){return e instanceof vn?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Dc(n,e,t,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const u=t,a=(c,d)=>{Ls(n._repo,n,l),u(c,d)};a.userCallback=t.userCallback,a.context=t.context,t=a}const o=new uo(t,r||void 0),l=new vn(o);return Ec(n._repo,n,l),()=>Ls(n._repo,n,l)}function Lc(n,e,t,i){return Dc(n,"value",e,t,i)}Lu(be);Wu(be);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc="FIREBASE_DATABASE_EMULATOR_HOST",ti={};let Mc=!1;function Fc(n,e,t,i){n.repoInfo_=new ar(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function Bc(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||we("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),te("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Os(r,s),l=o.repoInfo,u;typeof process<"u"&&ts&&(u=ts[Oc]),u?(r=`http://${u}?ns=${l.namespace}`,o=Os(r,s),l=o.repoInfo):o.repoInfo.secure;const a=new Jl(n.name,n.options,e);cc("Invalid Firebase Database URL",o),x(o.path)||we("Database URL must point to the root of a Firebase Database (not including a child path).");const c=qc(l,n,a,new Xl(n.name,t));return new Uc(c,n)}function Wc(n,e){const t=ti[e];(!t||t[n.key]!==n)&&we(`Database ${e}(${n.repoInfo_}) has already been deleted.`),bc(n),delete t[n.key]}function qc(n,e,t,i){let s=ti[e.name];s||(s={},ti[e.name]=s);let r=s[n.toURLString()];return r&&we("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new pc(n,Mc,t,i),s[n.toURLString()]=r,r}class Uc{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(gc(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new be(this._repo,O())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Wc(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&we("Cannot call "+e+" on a deleted database.")}}function Vc(n=Zo(),e){const t=Xo(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=Jo("database");i&&Hc(t,...i)}return t}function Hc(n,e,t,i={}){n=et(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&we("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&we('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new zt(zt.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:el(i.mockUserToken,n.app.options.projectId);r=new zt(o)}Fc(s,e,t,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(n){Ol(hl),tl(new nl("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Bc(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),Yi(ns,is,n),Yi(ns,is,"esm2017")}Ce.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Ce.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};zc();const Gc=new _l,ft=Vc(),Qc=Do({name:"MainLayout",setup(){const n=M(!1),e=M(0),t=M(1),i=M(!1),s=M(!1),r=M(!1),o=M(""),l=M(""),u=M(""),a=M(""),c=M({});Ye(()=>{const I=localStorage.getItem("currentXP"),W=localStorage.getItem("level");I&&(e.value=parseInt(I)),W&&(t.value=parseInt(W)),xn().onAuthStateChanged(async U=>{U&&(o.value=U.uid,l.value=U.email||"",a.value=U.photoURL||"")})}),F([e,t],()=>{localStorage.setItem("currentXP",e.value.toString()),localStorage.setItem("level",t.value.toString()),o.value&&C()});const d=b(()=>e.value/1e3),h=I=>{e.value+=I,e.value>=1e3&&(i.value=!0,s.value=!0,t.value++,e.value=e.value-1e3,setTimeout(()=>{i.value=!1},3e3))},_=()=>{n.value=!n.value},g=()=>{E.value=!E.value},y=M(!1),E=M(!1),S=()=>{const I=xn();pl(I).then(()=>{o.value="",l.value="",a.value="",c.value={}})},C=()=>{o.value&&(Ht(ht(ft,`users/${o.value}/xp`),e.value),Ht(ht(ft,`users/${o.value}/level`),t.value))},Q=async I=>{if(!I){console.error("User is undefined in updateUserData");return}l.value=I.email||"",o.value=I.uid,a.value=I.photoURL||"";const W=I.providerData||[{displayName:l.value?.split("@")[0]||"Unknown",email:l.value,photoURL:a.value}];await P(W)},P=async I=>{try{if(!o.value){console.error("No user ID available");return}const W=ht(ft,`users/${o.value}`);Lc(W,q=>{const U=q.val();U?(e.value=U.xp||0,t.value=U.level||1,c.value={...U,providerData:I},U.photoURL&&U.photoURL!=="undefined"&&U.photoURL!=="null"&&(a.value=U.photoURL)):c.value={providerData:I}},q=>{c.value={providerData:I},console.error("Error fetching user data:",q)})}catch(W){console.error("Error in fetchUserData:",W),c.value={providerData:I}}};return{user:c,uid:o,email:l,displayName:u,photoURL:a,showLoginDialog:E,toggleLogin:g,rememberMe:r,loginWithGoogle:async()=>{try{const I=xn();if(!I)return;r.value&&await gl(I,ml);const W=await vl(I,Gc);console.log("登入成功:",W.user);const q=W.user;o.value=q.uid,l.value=q.email||"",u.value=q.displayName||"",a.value=q.photoURL||"",console.log("使用者資料:",q);const U=ht(ft,"users/"+q.uid),ie=await Ac(U);ie.exists()?(console.log("user already exists"),ie.val().photoURL!==a.value&&await Ht(ht(ft,"users/"+q.uid+"/photoURL"),a)):await Ht(U,{email:q.email,name:q.displayName||q.email?.split("@")[0]||"Unknown",connect_me:q.email,photoURL:a.value||"",login_method:"google",xp:0,level:1}),Q(q),E.value=!1}catch(I){console.error("登入失敗:",I)}},updateUserData:Q,fetchUserData:P,logout:S,leftDrawerOpen:n,currentXP:e,level:t,showLevelUpAnimation:i,showLevelUpDialog:s,xpProgress:d,earnXP:h,toggleLeftDrawer:_,devMode:y,setXPandLevel:C}}}),$c={class:"row items-center op-title-container"},Yc={class:"xp-bar-container fat-only"},Kc={class:"xp-info"},jc={class:"xp"};function Xc(n,e,t,i,s,r){const o=Oo("router-view");return ot(),lt(Ll,{view:"lHh Lpr lFf",class:"op-layout"},{default:p(()=>[f(Qi,{modelValue:n.showLoginDialog,"onUpdate:modelValue":e[1]||(e[1]=l=>n.showLoginDialog=l)},{default:p(()=>[f(Gi,null,{default:p(()=>[f(kn,null,{default:p(()=>[e[4]||(e[4]=X("div",{class:"text-h6"},"登入/註冊",-1)),f(Wt,{onClick:n.loginWithGoogle,label:"使用 Google 登入",color:"primary","text-color":"white",class:"op-beta-btn"},null,8,["onClick"]),f(Fo,{modelValue:n.rememberMe,"onUpdate:modelValue":e[0]||(e[0]=l=>n.rememberMe=l),label:"記住我"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),f(El,{elevated:"",class:"op-header-bg text-white"},{default:p(()=>[f(Cl,{class:"op-toolbar"},{default:p(()=>[f(Wt,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",class:"op-menu-btn",onClick:n.toggleLeftDrawer},null,8,["onClick"]),X("div",$c,[f(yl,{class:"op-title"},{default:p(()=>e[5]||(e[5]=[L(" Learn English 學英文 ")])),_:1})]),X("div",null,[n.photoURL?(ot(),lt(zo,{key:0,src:n.photoURL,style:{width:"32px",height:"32px","border-radius":"50%"},rounded:"",class:"op-avatar"},null,8,["src"])):zi("",!0),n.uid?(ot(),lt(Wt,{key:2,onClick:n.logout,label:"登出",color:"white","text-color":"black",class:"op-beta-btn"},null,8,["onClick"])):(ot(),lt(Wt,{key:1,onClick:n.toggleLogin,label:"登入/註冊",color:"white","text-color":"black",class:"op-beta-btn"},null,8,["onClick"]))])]),_:1})]),_:1}),f(xl,{modelValue:n.leftDrawerOpen,"onUpdate:modelValue":e[2]||(e[2]=l=>n.leftDrawerOpen=l),"show-if-above":"",bordered:"","content-class":"op-drawer-bg",class:"text-dark"},{default:p(()=>[f(Il,{padding:""},{default:p(()=>[f(Vn,{header:"",class:"op-drawer-header"},{default:p(()=>e[6]||(e[6]=[L("常用字卡")])),_:1}),f(z,{clickable:"",to:"/",class:"op-drawer-item"},{default:p(()=>[f(w,{avatar:""},{default:p(()=>[f(V,{name:"home"})]),_:1}),f(w,null,{default:p(()=>e[7]||(e[7]=[L("首頁")])),_:1})]),_:1}),f(He,{icon:"text_fields",label:"字母學習",class:"op-expansion-item","dense-toggle":""},{default:p(()=>[f(z,{clickable:"",to:"/alphabet",class:"op-drawer-item"},{default:p(()=>[f(w,{avatar:""},{default:p(()=>[f(V,{name:"add"})]),_:1}),f(w,null,{default:p(()=>e[8]||(e[8]=[L("ABC之歌")])),_:1})]),_:1}),f(z,{clickable:"",to:"/hand-written",class:"op-drawer-item"},{default:p(()=>[f(w,{avatar:""},{default:p(()=>[f(V,{name:"edit"})]),_:1}),f(w,null,{default:p(()=>e[9]||(e[9]=[L("英文字母手寫練習")])),_:1})]),_:1})]),_:1}),f(He,{icon:"library_books",label:"讀寫學習",class:"op-expansion-item","dense-toggle":""},{default:p(()=>[f(z,{clickable:"",to:"/beginner",class:"op-drawer-item"},{default:p(()=>[f(w,{avatar:""},{default:p(()=>[f(V,{name:"add"})]),_:1}),f(w,null,{default:p(()=>e[10]||(e[10]=[L("初級雙語字卡")])),_:1})]),_:1}),f(z,{clickable:"",to:"/emotion",class:"op-drawer-item"},{default:p(()=>[f(w,{avatar:""},{default:p(()=>[f(V,{name:"sentiment_satisfied"})]),_:1}),f(w,null,{default:p(()=>e[11]||(e[11]=[L("情緒雙語字卡")])),_:1})]),_:1}),f(z,{clickable:"",to:"/body",class:"op-drawer-item"},{default:p(()=>[f(w,{avatar:""},{default:p(()=>[f(V,{name:"person"})]),_:1}),f(w,null,{default:p(()=>e[12]||(e[12]=[L("身體雙語字卡")])),_:1})]),_:1}),f(z,{clickable:"",to:"/number",class:"op-drawer-item"},{default:p(()=>[f(w,{avatar:""},{default:p(()=>[f(V,{name:"school"})]),_:1}),f(w,null,{default:p(()=>e[13]||(e[13]=[L("數字雙語字卡")])),_:1})]),_:1}),f(z,{clickable:"",to:"/favorites",class:"op-drawer-item"},{default:p(()=>[f(w,{avatar:""},{default:p(()=>[f(V,{name:"favorite"})]),_:1}),f(w,null,{default:p(()=>e[14]||(e[14]=[L("我的最愛")])),_:1})]),_:1}),n.devMode?(ot(),lt(z,{key:0,clickable:"",to:"/playback",class:"op-drawer-item"},{default:p(()=>[f(w,{avatar:""},{default:p(()=>[f(V,{name:"music_note"})]),_:1}),f(w,null,{default:p(()=>e[15]||(e[15]=[L("今日回顧")])),_:1})]),_:1})):zi("",!0)]),_:1}),f(He,{icon:"handshake",label:"操作學習",class:"op-expansion-item","dense-toggle":""},{default:p(()=>[f(z,{clickable:"",to:"/main-game",class:"op-drawer-item"},{default:p(()=>[f(w,{avatar:""},{default:p(()=>[f(V,{name:"gamepad"})]),_:1}),f(w,null,{default:p(()=>e[16]||(e[16]=[L("小遊戲")])),_:1})]),_:1}),f(z,{clickable:"",to:"/ball-direction",class:"op-drawer-item"},{default:p(()=>[f(w,{avatar:""},{default:p(()=>[f(V,{name:"swap_horiz"})]),_:1}),f(w,null,{default:p(()=>e[17]||(e[17]=[L("英文方向學習")])),_:1})]),_:1}),f(z,{clickable:"",to:"/image-paint",class:"op-drawer-item"},{default:p(()=>[f(w,{avatar:""},{default:p(()=>[f(V,{name:"palette"})]),_:1}),f(w,null,{default:p(()=>e[18]||(e[18]=[L("圖片上色學英文")])),_:1})]),_:1}),f(z,{clickable:"",to:"/nine-grid-game",class:"op-drawer-item"},{default:p(()=>[f(w,{avatar:""},{default:p(()=>[f(V,{name:"grid_view"})]),_:1}),f(w,null,{default:p(()=>e[19]||(e[19]=[L("中英文九宮格對戰")])),_:1})]),_:1}),f(z,{clickable:"",to:"/relationship",class:"op-drawer-item"},{default:p(()=>[f(w,{avatar:""},{default:p(()=>[f(V,{name:"supervisor_account"})]),_:1}),f(w,null,{default:p(()=>e[20]||(e[20]=[L("中英文關係稱謂學習")])),_:1})]),_:1}),f(z,{clickable:"",to:"/opposites",class:"op-drawer-item"},{default:p(()=>[f(w,{avatar:""},{default:p(()=>[f(V,{name:"swap_horiz"})]),_:1}),f(w,null,{default:p(()=>e[21]||(e[21]=[L("相反詞拉鋸戰")])),_:1})]),_:1})]),_:1}),f(He,{icon:"audiotrack",label:"聽覺學習",class:"op-expansion-item","dense-toggle":""},{default:p(()=>[f(z,{clickable:"",to:"/main-song-word",class:"op-drawer-item"},{default:p(()=>[f(w,{avatar:""},{default:p(()=>[f(V,{name:"music_note"})]),_:1}),f(w,null,{default:p(()=>e[22]||(e[22]=[L("英文兒歌")])),_:1})]),_:1})]),_:1}),f(He,{icon:"visibility",label:"視覺學習",class:"op-expansion-item","dense-toggle":""},{default:p(()=>[f(z,{clickable:"",to:"/main-image",class:"op-drawer-item"},{default:p(()=>[f(w,{avatar:""},{default:p(()=>[f(V,{name:"collections"})]),_:1}),f(w,null,{default:p(()=>e[23]||(e[23]=[L("看圖學單字")])),_:1})]),_:1}),f(z,{clickable:"",to:"/what_this_this",class:"op-drawer-item"},{default:p(()=>[f(w,{avatar:""},{default:p(()=>[f(V,{name:"camera_alt"})]),_:1}),f(w,null,{default:p(()=>e[24]||(e[24]=[L("拍照分析")])),_:1})]),_:1})]),_:1}),f(He,{icon:"share",label:"好站連結",class:"op-expansion-item","dense-toggle":""},{default:p(()=>[f(z,{clickable:"",tag:"a",href:"https://www.readingbear.org/",class:"op-drawer-item",target:"_blank",rel:"noopener noreferrer"},{default:p(()=>[f(w,{avatar:""},{default:p(()=>[f(V,null,{default:p(()=>e[25]||(e[25]=[X("img",{src:"https://www.google.com/s2/favicons?domain=readingbear.org&sz=24",style:{width:"24px",height:"24px"}},null,-1)])),_:1})]),_:1}),f(w,null,{default:p(()=>e[26]||(e[26]=[L("Reading Bear"),X("br",null,null,-1),L("(從字母到閱讀)")])),_:1})]),_:1}),f(z,{clickable:"",tag:"a",href:"https://www.starfall.com/h/index.php",class:"op-drawer-item",target:"_blank",rel:"noopener noreferrer"},{default:p(()=>[f(w,{avatar:""},{default:p(()=>[f(V,null,{default:p(()=>e[27]||(e[27]=[X("img",{src:"https://www.google.com/s2/favicons?domain=starfall.com&sz=32",style:{width:"24px",height:"24px"}},null,-1)])),_:1})]),_:1}),f(w,null,{default:p(()=>e[28]||(e[28]=[L("Starfall"),X("br",null,null,-1),L("(綜合學習)")])),_:1})]),_:1}),f(z,{clickable:"",tag:"a",href:"https://www.littlefox.com/",class:"op-drawer-item",target:"_blank",rel:"noopener noreferrer"},{default:p(()=>[f(w,{avatar:""},{default:p(()=>[f(V,null,{default:p(()=>e[29]||(e[29]=[X("img",{src:"https://www.google.com/s2/favicons?domain=littlefox.com&sz=32",style:{width:"24px",height:"24px"}},null,-1)])),_:1})]),_:1}),f(w,null,{default:p(()=>e[30]||(e[30]=[L("Little Fox"),X("br",null,null,-1),L("(線上英文繪本)")])),_:1})]),_:1}),f(z,{clickable:"",tag:"a",href:"https://en.wikipedia.org/wiki/Main_Page",class:"op-drawer-item",target:"_blank",rel:"noopener noreferrer"},{default:p(()=>[f(w,{avatar:""},{default:p(()=>[f(V,null,{default:p(()=>e[31]||(e[31]=[X("img",{src:"https://www.google.com/s2/favicons?domain=wikipedia.org&sz=32",style:{width:"24px",height:"24px"}},null,-1)])),_:1})]),_:1}),f(w,null,{default:p(()=>e[32]||(e[32]=[L("Wikipedia"),X("br",null,null,-1),L("(英文百科全書)")])),_:1})]),_:1}),f(z,{clickable:"",tag:"a",href:"https://translate.google.com/?sl=en&tl=zh-TW&op=translate",class:"op-drawer-item",target:"_blank",rel:"noopener noreferrer"},{default:p(()=>[f(w,{avatar:""},{default:p(()=>[f(V,null,{default:p(()=>e[33]||(e[33]=[X("img",{src:"https://www.google.com/s2/favicons?domain=translate.google.com&sz=32",style:{width:"24px",height:"24px"}},null,-1)])),_:1})]),_:1}),f(w,null,{default:p(()=>e[34]||(e[34]=[L("Google Translate"),X("br",null,null,-1),L("(英文翻譯)")])),_:1})]),_:1})]),_:1}),f(z,{clickable:"",tag:"a",href:"https://github.com/3dw/zh-en",target:"_blank",rel:"noopener noreferrer"},{default:p(()=>[f(w,{avatar:""},{default:p(()=>[f(V,{name:"open_in_new"})]),_:1}),f(w,null,{default:p(()=>e[35]||(e[35]=[L("本站原始碼")])),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),X("div",Yc,[X("div",Kc,[X("div",{class:Mo(["level",{"level-up":n.showLevelUpAnimation}])},"Level "+Nn(n.level),3),X("div",jc,Nn(n.currentXP)+" / 1000 XP",1)]),f(Go,{value:n.xpProgress,color:"accent","track-color":"grey-3",class:"xp-progress"},null,8,["value"])]),f(Qi,{modelValue:n.showLevelUpDialog,"onUpdate:modelValue":e[3]||(e[3]=l=>n.showLevelUpDialog=l)},{default:p(()=>[f(Gi,{class:"op-level-up-card"},{default:p(()=>[f(kn,{class:"row items-center justify-center"},{default:p(()=>e[36]||(e[36]=[X("div",{class:"text-h6 text-center"},"恭喜升級！",-1)])),_:1}),f(kn,{class:"text-center"},{default:p(()=>[L(" 你已經升到 Level "+Nn(n.level)+" 了！ ",1)]),_:1})]),_:1})]),_:1},8,["modelValue"]),f(Pl,null,{default:p(()=>[f(o,{onEarnXp:n.earnXP,onToggleDrawer:n.toggleLeftDrawer},null,8,["onEarnXp","onToggleDrawer"])]),_:1})]),_:1})}const _d=Lo(Qc,[["render",Xc],["__scopeId","data-v-eb31690b"],["__file","MainLayout.vue"]]);export{_d as default};
