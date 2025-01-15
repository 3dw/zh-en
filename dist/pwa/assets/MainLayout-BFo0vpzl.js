import{u as st,a as dt,Q as Ee}from"./QBtn-BUApTgvM.js";import{c as E,a as s,h as _,r as S,i as Re,o as K,b as Z,n as Se,d as oe,g as H,l as Ce,e as xe,f as V,w as B,j as re,k as ct,s as Ne,m as ft,p as J,q as vt,t as ae,u as ge,v as Pe,x as be,y as _e,z as ye,A as mt,B as We,C as ht,D as le,E as gt,F as bt,_ as yt,G as pt,H as wt,I as qt,J as g,K as f,L as W,M as F,N as kt,O as pe}from"./index-Ciz7fihY.js";import{h as X,a as Xe,b as Oe,u as Ct,c as _t,d as Ue,Q}from"./QIcon-B5T-K79R.js";import{u as ie,a as ue}from"./use-dark-JEmFQNrJ.js";import{u as Bt,a as St,b as xt,c as Lt,d as $t,e as zt,s as Tt,g as Dt,f as Et,h as Pt,i as we,Q as Ot}from"./QDialog-CrFRk62W.js";import{c as Ft}from"./selection-CWDQQ0BT.js";import{Q as Qt,a as Fe}from"./QCard-nbBGRqxT.js";import"./Ripple-B2tlnNVr.js";import"./focus-manager-zjdVGI5d.js";const Mt=E({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:a}){const n=s(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>_("div",{class:n.value},X(a.default))}}),At=E({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:a}){const n=s(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>_("div",{class:n.value,role:"toolbar"},X(a.default))}});function Vt(){const e=S(!Re.value);return e.value===!1&&K(()=>{e.value=!0}),{isHydrated:e}}const je=typeof ResizeObserver<"u",Qe=je===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},Be=E({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:a}){let n=null,i,t={width:-1,height:-1};function l(c){c===!0||e.debounce===0||e.debounce==="0"?d():n===null&&(n=setTimeout(d,e.debounce))}function d(){if(n!==null&&(clearTimeout(n),n=null),i){const{offsetWidth:c,offsetHeight:u}=i;(c!==t.width||u!==t.height)&&(t={width:c,height:u},a("resize",t))}}const{proxy:m}=H();if(m.trigger=l,je===!0){let c;const u=r=>{i=m.$el.parentNode,i?(c=new ResizeObserver(l),c.observe(i),d()):r!==!0&&oe(()=>{u(!0)})};return K(()=>{u()}),Z(()=>{n!==null&&clearTimeout(n),c!==void 0&&(c.disconnect!==void 0?c.disconnect():i&&c.unobserve(i))}),Se}else{let c=function(){n!==null&&(clearTimeout(n),n=null),y!==void 0&&(y.removeEventListener!==void 0&&y.removeEventListener("resize",l,Ce.passive),y=void 0)},u=function(){c(),i&&i.contentDocument&&(y=i.contentDocument.defaultView,y.addEventListener("resize",l,Ce.passive),d())};const{isHydrated:r}=Vt();let y;return K(()=>{oe(()=>{i=m.$el,i&&u()})}),Z(c),()=>{if(r.value===!0)return _("object",{class:"q--avoid-card-border",style:Qe.style,tabindex:-1,type:"text/html",data:Qe.url,"aria-hidden":"true",onLoad:u})}}}}),Ht=E({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:a,emit:n}){const{proxy:{$q:i}}=H(),t=xe(re,V);if(t===V)return console.error("QHeader needs to be child of QLayout"),V;const l=S(parseInt(e.heightHint,10)),d=S(!0),m=s(()=>e.reveal===!0||t.view.value.indexOf("H")!==-1||i.platform.is.ios&&t.isContainer.value===!0),c=s(()=>{if(e.modelValue!==!0)return 0;if(m.value===!0)return d.value===!0?l.value:0;const h=l.value-t.scroll.value.position;return h>0?h:0}),u=s(()=>e.modelValue!==!0||m.value===!0&&d.value!==!0),r=s(()=>e.modelValue===!0&&u.value===!0&&e.reveal===!0),y=s(()=>"q-header q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(u.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),k=s(()=>{const h=t.rows.value.top,w={};return h[0]==="l"&&t.left.space===!0&&(w[i.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),h[2]==="r"&&t.right.space===!0&&(w[i.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),w});function v(h,w){t.update("header",h,w)}function b(h,w){h.value!==w&&(h.value=w)}function z({height:h}){b(l,h),v("size",h)}function x(h){r.value===!0&&b(d,!0),n("focusin",h)}B(()=>e.modelValue,h=>{v("space",h),b(d,!0),t.animate()}),B(c,h=>{v("offset",h)}),B(()=>e.reveal,h=>{h===!1&&b(d,e.modelValue)}),B(d,h=>{t.animate(),n("reveal",h)}),B(t.scroll,h=>{e.reveal===!0&&b(d,h.direction==="up"||h.position<=e.revealOffset||h.position-h.inflectionPoint<100)});const C={};return t.instances.header=C,e.modelValue===!0&&v("size",l.value),v("space",e.modelValue),v("offset",c.value),Z(()=>{t.instances.header===C&&(t.instances.header=void 0,v("size",0),v("offset",0),v("space",!1))}),()=>{const h=Xe(a.default,[]);return e.elevated===!0&&h.push(_("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),h.push(_(Be,{debounce:0,onResize:z})),_("header",{class:y.value,style:k.value,onFocusin:x},h)}}}),It=E({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:a}){const n=s(()=>parseInt(e.lines,10)),i=s(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),t=s(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>_("div",{style:t.value,class:i.value},X(a.default))}}),L=E({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:a}){const n=s(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>_("div",{class:n.value},X(a.default))}}),A=E({name:"QItem",props:{...ie,...st,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:a,emit:n}){const{proxy:{$q:i}}=H(),t=ue(e,i),{hasLink:l,linkAttrs:d,linkClass:m,linkTag:c,navigateOnClick:u}=dt(),r=S(null),y=S(null),k=s(()=>e.clickable===!0||l.value===!0||e.tag==="label"),v=s(()=>e.disable!==!0&&k.value===!0),b=s(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(l.value===!0&&e.active===null?m.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(v.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),z=s(()=>e.insetLevel===void 0?null:{["padding"+(i.lang.rtl===!0?"Right":"Left")]:16+e.insetLevel*56+"px"});function x(w){v.value===!0&&(y.value!==null&&(w.qKeyEvent!==!0&&document.activeElement===r.value?y.value.focus():document.activeElement===y.value&&r.value.focus()),u(w))}function C(w){if(v.value===!0&&ct(w,[13,32])===!0){Ne(w),w.qKeyEvent=!0;const q=new MouseEvent("click",w);q.qKeyEvent=!0,r.value.dispatchEvent(q)}n("keyup",w)}function h(){const w=Xe(a.default,[]);return v.value===!0&&w.unshift(_("div",{class:"q-focus-helper",tabindex:-1,ref:y})),w}return()=>{const w={ref:r,class:b.value,style:z.value,role:"listitem",onClick:x,onKeyup:C};return v.value===!0?(w.tabindex=e.tabindex||"0",Object.assign(w,d.value)):k.value===!0&&(w["aria-disabled"]="true"),_(c.value,w,h())}}}),Rt=["ul","ol"],Nt=E({name:"QList",props:{...ie,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:a}){const n=H(),i=ue(e,n.proxy.$q),t=s(()=>Rt.includes(e.tag)?null:"list"),l=s(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(i.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>_(e.tag,{class:l.value,role:t.value},X(a.default))}}),Le={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Wt=Object.keys(Le);Le.all=!0;function Me(e){const a={};for(const n of Wt)e[n]===!0&&(a[n]=!0);return Object.keys(a).length===0?Le:(a.horizontal===!0?a.left=a.right=!0:a.left===!0&&a.right===!0&&(a.horizontal=!0),a.vertical===!0?a.up=a.down=!0:a.up===!0&&a.down===!0&&(a.vertical=!0),a.horizontal===!0&&a.vertical===!0&&(a.all=!0),a)}const Xt=["INPUT","TEXTAREA"];function Ae(e,a){return a.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof a.handler=="function"&&Xt.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(a.uid)===-1)}function qe(e,a,n){const i=_e(e);let t,l=i.left-a.event.x,d=i.top-a.event.y,m=Math.abs(l),c=Math.abs(d);const u=a.direction;u.horizontal===!0&&u.vertical!==!0?t=l<0?"left":"right":u.horizontal!==!0&&u.vertical===!0?t=d<0?"up":"down":u.up===!0&&d<0?(t="up",m>c&&(u.left===!0&&l<0?t="left":u.right===!0&&l>0&&(t="right"))):u.down===!0&&d>0?(t="down",m>c&&(u.left===!0&&l<0?t="left":u.right===!0&&l>0&&(t="right"))):u.left===!0&&l<0?(t="left",m<c&&(u.up===!0&&d<0?t="up":u.down===!0&&d>0&&(t="down"))):u.right===!0&&l>0&&(t="right",m<c&&(u.up===!0&&d<0?t="up":u.down===!0&&d>0&&(t="down")));let r=!1;if(t===void 0&&n===!1){if(a.event.isFirst===!0||a.event.lastDir===void 0)return{};t=a.event.lastDir,r=!0,t==="left"||t==="right"?(i.left-=l,m=0,l=0):(i.top-=d,c=0,d=0)}return{synthetic:r,payload:{evt:e,touch:a.event.mouse!==!0,mouse:a.event.mouse===!0,position:i,direction:t,isFirst:a.event.isFirst,isFinal:n===!0,duration:Date.now()-a.event.time,distance:{x:m,y:c},offset:{x:l,y:d},delta:{x:i.left-a.event.lastX,y:i.top-a.event.lastY}}}}let Ut=0;const ke=ft({name:"touch-pan",beforeMount(e,{value:a,modifiers:n}){if(n.mouse!==!0&&J.has.touch!==!0)return;function i(l,d){n.mouse===!0&&d===!0?Ne(l):(n.stop===!0&&be(l),n.prevent===!0&&Pe(l))}const t={uid:"qvtp_"+Ut++,handler:a,modifiers:n,direction:Me(n),noop:Se,mouseStart(l){Ae(l,t)&&vt(l)&&(ae(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(l,!0))},touchStart(l){if(Ae(l,t)){const d=l.target;ae(t,"temp",[[d,"touchmove","move","notPassiveCapture"],[d,"touchcancel","end","passiveCapture"],[d,"touchend","end","passiveCapture"]]),t.start(l)}},start(l,d){if(J.is.firefox===!0&&ge(e,!0),t.lastEvt=l,d===!0||n.stop===!0){if(t.direction.all!==!0&&(d!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const u=l.type.indexOf("mouse")!==-1?new MouseEvent(l.type,l):new TouchEvent(l.type,l);l.defaultPrevented===!0&&Pe(u),l.cancelBubble===!0&&be(u),Object.assign(u,{qKeyEvent:l.qKeyEvent,qClickOutside:l.qClickOutside,qAnchorHandled:l.qAnchorHandled,qClonedBy:l.qClonedBy===void 0?[t.uid]:l.qClonedBy.concat(t.uid)}),t.initialEvent={target:l.target,event:u}}be(l)}const{left:m,top:c}=_e(l);t.event={x:m,y:c,time:Date.now(),mouse:d===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:m,lastY:c}},move(l){if(t.event===void 0)return;const d=_e(l),m=d.left-t.event.x,c=d.top-t.event.y;if(m===0&&c===0)return;t.lastEvt=l;const u=t.event.mouse===!0,r=()=>{i(l,u);let v;n.preserveCursor!==!0&&n.preservecursor!==!0&&(v=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),u===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Ft(),t.styleCleanup=b=>{if(t.styleCleanup=void 0,v!==void 0&&(document.documentElement.style.cursor=v),document.body.classList.remove("non-selectable"),u===!0){const z=()=>{document.body.classList.remove("no-pointer-events--children")};b!==void 0?setTimeout(()=>{z(),b()},50):z()}else b!==void 0&&b()}};if(t.event.detected===!0){t.event.isFirst!==!0&&i(l,t.event.mouse);const{payload:v,synthetic:b}=qe(l,t,!1);v!==void 0&&(t.handler(v)===!1?t.end(l):(t.styleCleanup===void 0&&t.event.isFirst===!0&&r(),t.event.lastX=v.position.left,t.event.lastY=v.position.top,t.event.lastDir=b===!0?void 0:v.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||u===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){r(),t.event.detected=!0,t.move(l);return}const y=Math.abs(m),k=Math.abs(c);y!==k&&(t.direction.horizontal===!0&&y>k||t.direction.vertical===!0&&y<k||t.direction.up===!0&&y<k&&c<0||t.direction.down===!0&&y<k&&c>0||t.direction.left===!0&&y>k&&m<0||t.direction.right===!0&&y>k&&m>0?(t.event.detected=!0,t.move(l)):t.end(l,!0))},end(l,d){if(t.event!==void 0){if(ye(t,"temp"),J.is.firefox===!0&&ge(e,!1),d===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(qe(l===void 0?t.lastEvt:l,t).payload);const{payload:m}=qe(l===void 0?t.lastEvt:l,t,!0),c=()=>{t.handler(m)};t.styleCleanup!==void 0?t.styleCleanup(c):c()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,n.mouse===!0){const l=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";ae(t,"main",[[e,"mousedown","mouseStart",`passive${l}`]])}J.has.touch===!0&&ae(t,"main",[[e,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,a){const n=e.__qtouchpan;n!==void 0&&(a.oldValue!==a.value&&(typeof value!="function"&&n.end(),n.handler=a.value),n.direction=Me(a.modifiers))},beforeUnmount(e){const a=e.__qtouchpan;a!==void 0&&(a.event!==void 0&&a.end(),ye(a,"main"),ye(a,"temp"),J.is.firefox===!0&&ge(e,!1),a.styleCleanup!==void 0&&a.styleCleanup(),delete e.__qtouchpan)}});function ne(e,a,n){return n<=a?a:Math.min(n,Math.max(a,e))}const Ve=150,jt=E({name:"QDrawer",inheritAttrs:!1,props:{...Bt,...ie,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...St,"onLayout","miniState"],setup(e,{slots:a,emit:n,attrs:i}){const t=H(),{proxy:{$q:l}}=t,d=ue(e,l),{preventBodyScroll:m}=zt(),{registerTimeout:c,removeTimeout:u}=xt(),r=xe(re,V);if(r===V)return console.error("QDrawer needs to be child of QLayout"),V;let y,k=null,v;const b=S(e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint),z=s(()=>e.mini===!0&&b.value!==!0),x=s(()=>z.value===!0?e.miniWidth:e.width),C=S(e.showIfAbove===!0&&b.value===!1?!0:e.modelValue===!0),h=s(()=>e.persistent!==!0&&(b.value===!0||Ke.value===!0));function w(o,p){if(P(),o!==!1&&r.animate(),O(0),b.value===!0){const D=r.instances[ee.value];D!==void 0&&D.belowBreakpoint===!0&&D.hide(!1),I(1),r.isContainer.value!==!0&&m(!0)}else I(0),o!==!1&&ve(!1);c(()=>{o!==!1&&ve(!0),p!==!0&&n("show",o)},Ve)}function q(o,p){Y(),o!==!1&&r.animate(),I(0),O(U.value*x.value),me(),p!==!0?c(()=>{n("hide",o)},Ve):u()}const{show:$,hide:T}=Lt({showing:C,hideOnRouteChange:h,handleShow:w,handleHide:q}),{addToHistory:P,removeFromHistory:Y}=$t(C,T,h),N={belowBreakpoint:b,hide:T},M=s(()=>e.side==="right"),U=s(()=>(l.lang.rtl===!0?-1:1)*(M.value===!0?1:-1)),$e=S(0),j=S(!1),se=S(!1),ze=S(x.value*U.value),ee=s(()=>M.value===!0?"left":"right"),de=s(()=>C.value===!0&&b.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:x.value:0),ce=s(()=>e.overlay===!0||e.miniToOverlay===!0||r.view.value.indexOf(M.value?"R":"L")!==-1||l.platform.is.ios===!0&&r.isContainer.value===!0),G=s(()=>e.overlay===!1&&C.value===!0&&b.value===!1),Ke=s(()=>e.overlay===!0&&C.value===!0&&b.value===!1),Ye=s(()=>"fullscreen q-drawer__backdrop"+(C.value===!1&&j.value===!1?" hidden":"")),Ge=s(()=>({backgroundColor:`rgba(0,0,0,${$e.value*.4})`})),Te=s(()=>M.value===!0?r.rows.value.top[2]==="r":r.rows.value.top[0]==="l"),Je=s(()=>M.value===!0?r.rows.value.bottom[2]==="r":r.rows.value.bottom[0]==="l"),Ze=s(()=>{const o={};return r.header.space===!0&&Te.value===!1&&(ce.value===!0?o.top=`${r.header.offset}px`:r.header.space===!0&&(o.top=`${r.header.size}px`)),r.footer.space===!0&&Je.value===!1&&(ce.value===!0?o.bottom=`${r.footer.offset}px`:r.footer.space===!0&&(o.bottom=`${r.footer.size}px`)),o}),et=s(()=>{const o={width:`${x.value}px`,transform:`translateX(${ze.value}px)`};return b.value===!0?o:Object.assign(o,Ze.value)}),tt=s(()=>"q-drawer__content fit "+(r.isContainer.value!==!0?"scroll":"overflow-auto")),at=s(()=>`q-drawer q-drawer--${e.side}`+(se.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(d.value===!0?" q-drawer--dark q-dark":"")+(j.value===!0?" no-transition":C.value===!0?"":" q-layout--prevent-focus")+(b.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${z.value===!0?"mini":"standard"}`+(ce.value===!0||G.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Te.value===!0?" q-drawer--top-padding":""))),lt=s(()=>{const o=l.lang.rtl===!0?e.side:ee.value;return[[ke,it,void 0,{[o]:!0,mouse:!0}]]}),nt=s(()=>{const o=l.lang.rtl===!0?ee.value:e.side;return[[ke,De,void 0,{[o]:!0,mouse:!0}]]}),ot=s(()=>{const o=l.lang.rtl===!0?ee.value:e.side;return[[ke,De,void 0,{[o]:!0,mouse:!0,mouseAllDir:!0}]]});function fe(){ut(b,e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint)}B(b,o=>{o===!0?(y=C.value,C.value===!0&&T(!1)):e.overlay===!1&&e.behavior!=="mobile"&&y!==!1&&(C.value===!0?(O(0),I(0),me()):$(!1))}),B(()=>e.side,(o,p)=>{r.instances[p]===N&&(r.instances[p]=void 0,r[p].space=!1,r[p].offset=0),r.instances[o]=N,r[o].size=x.value,r[o].space=G.value,r[o].offset=de.value}),B(r.totalWidth,()=>{(r.isContainer.value===!0||document.qScrollPrevented!==!0)&&fe()}),B(()=>e.behavior+e.breakpoint,fe),B(r.isContainer,o=>{C.value===!0&&m(o!==!0),o===!0&&fe()}),B(r.scrollbarWidth,()=>{O(C.value===!0?0:void 0)}),B(de,o=>{R("offset",o)}),B(G,o=>{n("onLayout",o),R("space",o)}),B(M,()=>{O()}),B(x,o=>{O(),he(e.miniToOverlay,o)}),B(()=>e.miniToOverlay,o=>{he(o,x.value)}),B(()=>l.lang.rtl,()=>{O()}),B(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(rt(),r.animate())}),B(z,o=>{n("miniState",o)});function O(o){o===void 0?oe(()=>{o=C.value===!0?0:x.value,O(U.value*o)}):(r.isContainer.value===!0&&M.value===!0&&(b.value===!0||Math.abs(o)===x.value)&&(o+=U.value*r.scrollbarWidth.value),ze.value=o)}function I(o){$e.value=o}function ve(o){const p=o===!0?"remove":r.isContainer.value!==!0?"add":"";p!==""&&document.body.classList[p]("q-body--drawer-toggle")}function rt(){k!==null&&clearTimeout(k),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),se.value=!0,k=setTimeout(()=>{k=null,se.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function it(o){if(C.value!==!1)return;const p=x.value,D=ne(o.distance.x,0,p);if(o.isFinal===!0){D>=Math.min(75,p)===!0?$():(r.animate(),I(0),O(U.value*p)),j.value=!1;return}O((l.lang.rtl===!0?M.value!==!0:M.value)?Math.max(p-D,0):Math.min(0,D-p)),I(ne(D/p,0,1)),o.isFirst===!0&&(j.value=!0)}function De(o){if(C.value!==!0)return;const p=x.value,D=o.direction===e.side,te=(l.lang.rtl===!0?D!==!0:D)?ne(o.distance.x,0,p):0;if(o.isFinal===!0){Math.abs(te)<Math.min(75,p)===!0?(r.animate(),I(1),O(0)):T(),j.value=!1;return}O(U.value*te),I(ne(1-te/p,0,1)),o.isFirst===!0&&(j.value=!0)}function me(){m(!1),ve(!0)}function R(o,p){r.update(e.side,o,p)}function ut(o,p){o.value!==p&&(o.value=p)}function he(o,p){R("size",o===!0?e.miniWidth:p)}return r.instances[e.side]=N,he(e.miniToOverlay,x.value),R("space",G.value),R("offset",de.value),e.showIfAbove===!0&&e.modelValue!==!0&&C.value===!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),K(()=>{n("onLayout",G.value),n("miniState",z.value),y=e.showIfAbove===!0;const o=()=>{(C.value===!0?w:q)(!1,!0)};if(r.totalWidth.value!==0){oe(o);return}v=B(r.totalWidth,()=>{v(),v=void 0,C.value===!1&&e.showIfAbove===!0&&b.value===!1?$(!1):o()})}),Z(()=>{v!==void 0&&v(),k!==null&&(clearTimeout(k),k=null),C.value===!0&&me(),r.instances[e.side]===N&&(r.instances[e.side]=void 0,R("size",0),R("offset",0),R("space",!1))}),()=>{const o=[];b.value===!0&&(e.noSwipeOpen===!1&&o.push(mt(_("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),lt.value)),o.push(Oe("div",{ref:"backdrop",class:Ye.value,style:Ge.value,"aria-hidden":"true",onClick:T},void 0,"backdrop",e.noSwipeBackdrop!==!0&&C.value===!0,()=>ot.value)));const p=z.value===!0&&a.mini!==void 0,D=[_("div",{...i,key:""+p,class:[tt.value,i.class]},p===!0?a.mini():X(a.default))];return e.elevated===!0&&C.value===!0&&D.push(_("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(Oe("aside",{ref:"content",class:at.value,style:et.value},D,"contentclose",e.noSwipeClose!==!0&&b.value===!0,()=>nt.value)),_("div",{class:"q-drawer-container"},o)}}}),Kt={xs:2,sm:4,md:6,lg:10,xl:14};function He(e,a,n){return{transform:a===!0?`translateX(${n.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}const Yt=E({name:"QLinearProgress",props:{...ie,...Ct,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:a}){const{proxy:n}=H(),i=ue(e,n.$q),t=_t(e,Kt),l=s(()=>e.indeterminate===!0||e.query===!0),d=s(()=>e.reverse!==e.query),m=s(()=>({...t.value!==null?t.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),c=s(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),u=s(()=>He(e.buffer!==void 0?e.buffer:1,d.value,n.$q)),r=s(()=>`with${e.instantFeedback===!0?"out":""}-transition`),y=s(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${r.value} q-linear-progress__track--${i.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),k=s(()=>He(l.value===!0?1:e.value,d.value,n.$q)),v=s(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${r.value} q-linear-progress__model--${l.value===!0?"in":""}determinate`),b=s(()=>({width:`${e.value*100}%`})),z=s(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${r.value}`);return()=>{const x=[_("div",{class:y.value,style:u.value}),_("div",{class:v.value,style:k.value})];return e.stripe===!0&&l.value===!1&&x.push(_("div",{class:z.value,style:b.value})),_("div",{class:c.value,style:m.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},Ue(a.default,x))}}}),Gt=E({name:"QPageContainer",setup(e,{slots:a}){const{proxy:{$q:n}}=H(),i=xe(re,V);if(i===V)return console.error("QPageContainer needs to be child of QLayout"),V;We(ht,!0);const t=s(()=>{const l={};return i.header.space===!0&&(l.paddingTop=`${i.header.size}px`),i.right.space===!0&&(l[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${i.right.size}px`),i.footer.space===!0&&(l.paddingBottom=`${i.footer.size}px`),i.left.space===!0&&(l[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${i.left.size}px`),l});return()=>_("div",{class:"q-page-container",style:t.value},X(a.default))}}),{passive:Ie}=Ce,Jt=["both","horizontal","vertical"],Zt=E({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Jt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:Tt},emits:["scroll"],setup(e,{emit:a}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let i=null,t,l;B(()=>e.scrollTarget,()=>{c(),m()});function d(){i!==null&&i();const y=Math.max(0,Et(t)),k=Pt(t),v={top:y-n.position.top,left:k-n.position.left};if(e.axis==="vertical"&&v.top===0||e.axis==="horizontal"&&v.left===0)return;const b=Math.abs(v.top)>=Math.abs(v.left)?v.top<0?"up":"down":v.left<0?"left":"right";n.position={top:y,left:k},n.directionChanged=n.direction!==b,n.delta=v,n.directionChanged===!0&&(n.direction=b,n.inflectionPoint=n.position),a("scroll",{...n})}function m(){t=Dt(l,e.scrollTarget),t.addEventListener("scroll",u,Ie),u(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",u,Ie),t=void 0)}function u(y){if(y===!0||e.debounce===0||e.debounce==="0")d();else if(i===null){const[k,v]=e.debounce?[setTimeout(d,e.debounce),clearTimeout]:[requestAnimationFrame(d),cancelAnimationFrame];i=()=>{v(k),i=null}}}const{proxy:r}=H();return B(()=>r.$q.lang.rtl,d),K(()=>{l=r.$el.parentNode,m()}),Z(()=>{i!==null&&i(),c()}),Object.assign(r,{trigger:u,getPosition:()=>n}),Se}}),ea=E({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:a,emit:n}){const{proxy:{$q:i}}=H(),t=S(null),l=S(i.screen.height),d=S(e.container===!0?0:i.screen.width),m=S({position:0,direction:"down",inflectionPoint:0}),c=S(0),u=S(Re.value===!0?0:we()),r=s(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),y=s(()=>e.container===!1?{minHeight:i.screen.height+"px"}:null),k=s(()=>u.value!==0?{[i.lang.rtl===!0?"left":"right"]:`${u.value}px`}:null),v=s(()=>u.value!==0?{[i.lang.rtl===!0?"right":"left"]:0,[i.lang.rtl===!0?"left":"right"]:`-${u.value}px`,width:`calc(100% + ${u.value}px)`}:null);function b(q){if(e.container===!0||document.qScrollPrevented!==!0){const $={position:q.position.top,direction:q.direction,directionChanged:q.directionChanged,inflectionPoint:q.inflectionPoint.top,delta:q.delta.top};m.value=$,e.onScroll!==void 0&&n("scroll",$)}}function z(q){const{height:$,width:T}=q;let P=!1;l.value!==$&&(P=!0,l.value=$,e.onScrollHeight!==void 0&&n("scrollHeight",$),C()),d.value!==T&&(P=!0,d.value=T),P===!0&&e.onResize!==void 0&&n("resize",q)}function x({height:q}){c.value!==q&&(c.value=q,C())}function C(){if(e.container===!0){const q=l.value>c.value?we():0;u.value!==q&&(u.value=q)}}let h=null;const w={instances:{},view:s(()=>e.view),isContainer:s(()=>e.container),rootRef:t,height:l,containerHeight:c,scrollbarWidth:u,totalWidth:s(()=>d.value+u.value),rows:s(()=>{const q=e.view.toLowerCase().split(" ");return{top:q[0].split(""),middle:q[1].split(""),bottom:q[2].split("")}}),header:le({size:0,offset:0,space:!1}),right:le({size:300,offset:0,space:!1}),footer:le({size:0,offset:0,space:!1}),left:le({size:300,offset:0,space:!1}),scroll:m,animate(){h!==null?clearTimeout(h):document.body.classList.add("q-body--layout-animate"),h=setTimeout(()=>{h=null,document.body.classList.remove("q-body--layout-animate")},155)},update(q,$,T){w[q][$]=T}};if(We(re,w),we()>0){let q=function(){P=null,Y.classList.remove("hide-scrollbar")},$=function(){if(P===null){if(Y.scrollHeight>i.screen.height)return;Y.classList.add("hide-scrollbar")}else clearTimeout(P);P=setTimeout(q,300)},T=function(N){P!==null&&N==="remove"&&(clearTimeout(P),q()),window[`${N}EventListener`]("resize",$)},P=null;const Y=document.body;B(()=>e.container!==!0?"add":"remove",T),e.container!==!0&&T("add"),gt(()=>{T("remove")})}return()=>{const q=Ue(a.default,[_(Zt,{onScroll:b}),_(Be,{onResize:z})]),$=_("div",{class:r.value,style:y.value,ref:e.container===!0?void 0:t,tabindex:-1},q);return e.container===!0?_("div",{class:"q-layout-container overflow-hidden",ref:t},[_(Be,{onResize:x}),_("div",{class:"absolute-full",style:k.value},[_("div",{class:"scroll",style:v.value},[$])])]):$}}}),ta=bt({name:"MainLayout",setup(){const e=S(!1),a=S(0),n=S(1),i=S(!1),t=S(!1);K(()=>{const c=localStorage.getItem("currentXP"),u=localStorage.getItem("level");c&&(a.value=parseInt(c)),u&&(n.value=parseInt(u))}),B([a,n],()=>{localStorage.setItem("currentXP",a.value.toString()),localStorage.setItem("level",n.value.toString())});const l=s(()=>a.value/1e3);return{leftDrawerOpen:e,currentXP:a,level:n,showLevelUpAnimation:i,showLevelUpDialog:t,xpProgress:l,earnXP:c=>{a.value+=c,a.value>=1e3&&(i.value=!0,t.value=!0,n.value++,a.value=a.value-1e3,setTimeout(()=>{i.value=!1},3e3))},toggleLeftDrawer:()=>{e.value=!e.value}}}}),aa={class:"row items-center op-title-container"},la={class:"xp-bar-container"},na={class:"xp-info"},oa={class:"xp"};function ra(e,a,n,i,t,l){const d=pt("router-view");return wt(),qt(ea,{view:"lHh Lpr lFf",class:"op-layout"},{default:g(()=>[f(Ht,{elevated:"",class:"op-header-bg text-white"},{default:g(()=>[f(At,{class:"op-toolbar"},{default:g(()=>[f(Ee,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",class:"op-menu-btn",onClick:e.toggleLeftDrawer},null,8,["onClick"]),W("div",aa,[f(Mt,{class:"op-title"},{default:g(()=>a[2]||(a[2]=[F(" Learn English 學英文 ")])),_:1})]),W("div",null,[f(Ee,{outline:"",color:"white",label:"Beta版原始碼",href:"https://github.com/3dw/zh-en",target:"_blank",rel:"noopener noreferrer",class:"op-beta-btn"},{default:g(()=>[f(Q,{name:"open_in_new",class:"q-ml-xs"})]),_:1})])]),_:1})]),_:1}),f(jt,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":a[0]||(a[0]=m=>e.leftDrawerOpen=m),"show-if-above":"",bordered:"","content-class":"op-drawer-bg",class:"text-dark"},{default:g(()=>[f(Nt,{padding:""},{default:g(()=>[f(It,{header:"",class:"op-drawer-header"},{default:g(()=>a[3]||(a[3]=[F("常用字卡")])),_:1}),f(A,{clickable:"",to:"/",class:"op-drawer-item"},{default:g(()=>[f(L,{avatar:""},{default:g(()=>[f(Q,{name:"home"})]),_:1}),f(L,null,{default:g(()=>a[4]||(a[4]=[F("首頁")])),_:1})]),_:1}),f(A,{clickable:"",to:"/beginner",class:"op-drawer-item"},{default:g(()=>[f(L,{avatar:""},{default:g(()=>[f(Q,{name:"add"})]),_:1}),f(L,null,{default:g(()=>a[5]||(a[5]=[F("初級")])),_:1})]),_:1}),f(A,{clickable:"",to:"/main-game",class:"op-drawer-item"},{default:g(()=>[f(L,{avatar:""},{default:g(()=>[f(Q,{name:"gamepad"})]),_:1}),f(L,null,{default:g(()=>a[6]||(a[6]=[F("遊戲")])),_:1})]),_:1}),f(A,{clickable:"",to:"/main-song-word",class:"op-drawer-item"},{default:g(()=>[f(L,{avatar:""},{default:g(()=>[f(Q,{name:"audiotrack"})]),_:1}),f(L,null,{default:g(()=>a[7]||(a[7]=[F("英文兒歌克漏字學習")])),_:1})]),_:1}),f(A,{clickable:"",to:"/nine-grid-game",class:"op-drawer-item"},{default:g(()=>[f(L,{avatar:""},{default:g(()=>[f(Q,{name:"grid_view"})]),_:1}),f(L,null,{default:g(()=>a[8]||(a[8]=[F("中英文九宮格對戰")])),_:1})]),_:1}),f(A,{clickable:"",to:"/hand-written",class:"op-drawer-item"},{default:g(()=>[f(L,{avatar:""},{default:g(()=>[f(Q,{name:"edit"})]),_:1}),f(L,null,{default:g(()=>a[9]||(a[9]=[F("英文字母手寫練習")])),_:1})]),_:1}),f(A,{clickable:"",to:"/body",class:"op-drawer-item"},{default:g(()=>[f(L,{avatar:""},{default:g(()=>[f(Q,{name:"person"})]),_:1}),f(L,null,{default:g(()=>a[10]||(a[10]=[F("身體健康")])),_:1})]),_:1}),f(A,{clickable:"",to:"/number",class:"op-drawer-item"},{default:g(()=>[f(L,{avatar:""},{default:g(()=>[f(Q,{name:"school"})]),_:1}),f(L,null,{default:g(()=>a[11]||(a[11]=[F("數字")])),_:1})]),_:1}),f(A,{clickable:"",to:"/favorites",class:"op-drawer-item"},{default:g(()=>[f(L,{avatar:""},{default:g(()=>[f(Q,{name:"favorite"})]),_:1}),f(L,null,{default:g(()=>a[12]||(a[12]=[F("我的最愛")])),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),W("div",la,[W("div",na,[W("div",{class:kt(["level",{"level-up":e.showLevelUpAnimation}])},"Level "+pe(e.level),3),W("div",oa,pe(e.currentXP)+" / 1000 XP",1)]),f(Yt,{value:e.xpProgress,color:"accent","track-color":"grey-3",class:"xp-progress"},null,8,["value"])]),f(Ot,{modelValue:e.showLevelUpDialog,"onUpdate:modelValue":a[1]||(a[1]=m=>e.showLevelUpDialog=m)},{default:g(()=>[f(Qt,{class:"op-level-up-card"},{default:g(()=>[f(Fe,{class:"row items-center justify-center"},{default:g(()=>a[13]||(a[13]=[W("div",{class:"text-h6 text-center"},"恭喜升級！",-1)])),_:1}),f(Fe,{class:"text-center"},{default:g(()=>[F(" 你已經升到 Level "+pe(e.level)+" 了！ ",1)]),_:1})]),_:1})]),_:1},8,["modelValue"]),f(Gt,null,{default:g(()=>[f(d,{onEarnXp:e.earnXP},null,8,["onEarnXp"])]),_:1})]),_:1})}const ba=yt(ta,[["render",ra],["__scopeId","data-v-945432ec"],["__file","MainLayout.vue"]]);export{ba as default};