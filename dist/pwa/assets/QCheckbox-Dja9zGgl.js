import{r as _,b as l,h as o,a9 as P,aa as i,M as Q,d as z,a8 as F,j as M,x as V,c as N,Q as R}from"./index-CCCCMagn.js";import{a as D,u as H}from"./use-dark-DKcBcy0D.js";import{b as K,c as L}from"./use-id-DmhKeaNF.js";function G(a,d){const e=_(null),c=l(()=>a.disable===!0?null:o("span",{ref:e,class:"no-outline",tabindex:-1}));function f(n){const r=d.value;n!==void 0&&n.type.indexOf("key")===0?r!==null&&document.activeElement!==r&&r.contains(document.activeElement)===!0&&r.focus():e.value!==null&&(n===void 0||r!==null&&r.contains(n.target)===!0)&&e.value.focus()}return{refocusTargetEl:c,refocusTarget:f}}const J={xs:30,sm:35,md:40,lg:50,xl:60},U={...H,...F,...K,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:a=>a==="tf"||a==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},W=["update:modelValue"];function X(a,d){const{props:e,slots:c,emit:f,proxy:n}=M(),{$q:r}=n,q=D(e,r),k=_(null),{refocusTargetEl:h,refocusTarget:I}=G(e,k),C=P(e,J),v=l(()=>e.val!==void 0&&Array.isArray(e.modelValue)),m=l(()=>{const t=i(e.val);return v.value===!0?e.modelValue.findIndex(s=>i(s)===t):-1}),u=l(()=>v.value===!0?m.value!==-1:i(e.modelValue)===i(e.trueValue)),b=l(()=>v.value===!0?m.value===-1:i(e.modelValue)===i(e.falseValue)),x=l(()=>u.value===!1&&b.value===!1),y=l(()=>e.disable===!0?-1:e.tabindex||0),S=l(()=>`q-${a} cursor-pointer no-outline row inline no-wrap items-center`+(e.disable===!0?" disabled":"")+(q.value===!0?` q-${a}--dark`:"")+(e.dense===!0?` q-${a}--dense`:"")+(e.leftLabel===!0?" reverse":"")),$=l(()=>{const t=u.value===!0?"truthy":b.value===!0?"falsy":"indet",s=e.color!==void 0&&(e.keepColor===!0||(a==="toggle"?u.value===!0:b.value!==!0))?` text-${e.color}`:"";return`q-${a}__inner relative-position non-selectable q-${a}__inner--${t}${s}`}),w=l(()=>{const t={type:"checkbox"};return e.name!==void 0&&Object.assign(t,{".checked":u.value,"^checked":u.value===!0?"checked":void 0,name:e.name,value:v.value===!0?e.val:e.trueValue}),t}),B=L(w),O=l(()=>{const t={tabindex:y.value,role:a==="toggle"?"switch":"checkbox","aria-label":e.label,"aria-checked":x.value===!0?"mixed":u.value===!0?"true":"false"};return e.disable===!0&&(t["aria-disabled"]="true"),t});function g(t){t!==void 0&&(V(t),I(t)),e.disable!==!0&&f("update:modelValue",T(),t)}function T(){if(v.value===!0){if(u.value===!0){const t=e.modelValue.slice();return t.splice(m.value,1),t}return e.modelValue.concat([e.val])}if(u.value===!0){if(e.toggleOrder!=="ft"||e.toggleIndeterminate===!1)return e.falseValue}else if(b.value===!0){if(e.toggleOrder==="ft"||e.toggleIndeterminate===!1)return e.trueValue}else return e.toggleOrder!=="ft"?e.trueValue:e.falseValue;return e.indeterminateValue}function j(t){(t.keyCode===13||t.keyCode===32)&&V(t)}function A(t){(t.keyCode===13||t.keyCode===32)&&g(t)}const E=d(u,x);return Object.assign(n,{toggle:g}),()=>{const t=E();e.disable!==!0&&B(t,"unshift",` q-${a}__native absolute q-ma-none q-pa-none`);const s=[o("div",{class:$.value,style:C.value,"aria-hidden":"true"},t)];h.value!==null&&s.push(h.value);const p=e.label!==void 0?Q(c.default,[e.label]):z(c.default);return p!==void 0&&s.push(o("div",{class:`q-${a}__label q-anchor--skip`},p)),o("div",{ref:k,class:S.value,...O.value,onClick:g,onKeydown:j,onKeyup:A},s)}}const Y=()=>o("div",{key:"svg",class:"q-checkbox__bg absolute"},[o("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[o("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),o("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]),ae=N({name:"QCheckbox",props:U,emits:W,setup(a){const d=Y();function e(c,f){const n=l(()=>(c.value===!0?a.checkedIcon:f.value===!0?a.indeterminateIcon:a.uncheckedIcon)||null);return()=>n.value!==null?[o("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[o(R,{class:"q-checkbox__icon",name:n.value})])]:[d]}return X("checkbox",e)}});export{ae as Q,U as a,W as b,X as c,J as o,G as u};
