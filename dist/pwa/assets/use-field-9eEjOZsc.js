import{r as b,ay as oe,j as F,e as le,w as B,E as J,o as T,aB as te,b as s,au as re,ag as ne,m as ue,n as ae,as as ie,aw as se,h as a,A,Q,ap as de,d as $,T as ce}from"./index-ogN80PY1.js";import{u as fe}from"./use-id-ByTOMxm9.js";import{u as ve,a as pe}from"./use-dark-DpO9ZDJ6.js";import{b as me,c as ge}from"./focus-manager-DhdJisJs.js";const K=/^on[A-Z]/;function be(){const{attrs:e,vnode:o}=F(),r={listeners:b({}),attributes:b({})};function t(){const c={},i={};for(const u in e)u!=="class"&&u!=="style"&&K.test(u)===!1&&(c[u]=e[u]);for(const u in o.props)K.test(u)===!0&&(i[u]=o.props[u]);r.attributes.value=c,r.listeners.value=i}return oe(t),t(),r}function he({validate:e,resetValidation:o,requiresQForm:r}){const t=le(te,!1);if(t!==!1){const{props:c,proxy:i}=F();Object.assign(i,{validate:e,resetValidation:o}),B(()=>c.disable,u=>{u===!0?(typeof o=="function"&&o(),t.unbindComponent(i)):t.bindComponent(i)}),J(()=>{c.disable!==!0&&t.bindComponent(i)}),T(()=>{c.disable!==!0&&t.unbindComponent(i)})}else r===!0&&console.error("Parent QForm not found on useFormChild()!")}const N=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,Z=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,G=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,E=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,I=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,M={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>N.test(e),hexaColor:e=>Z.test(e),hexOrHexaColor:e=>G.test(e),rgbColor:e=>E.test(e),rgbaColor:e=>I.test(e),rgbOrRgbaColor:e=>E.test(e)||I.test(e),hexOrRgbColor:e=>N.test(e)||E.test(e),hexaOrRgbaColor:e=>Z.test(e)||I.test(e),anyColor:e=>G.test(e)||E.test(e)||I.test(e)},Ce=[!0,!1,"ondemand"],ye={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>Ce.includes(e)}};function qe(e,o){const{props:r,proxy:t}=F(),c=b(!1),i=b(null),u=b(!1);he({validate:x,resetValidation:_});let f=0,m;const V=s(()=>r.rules!==void 0&&r.rules!==null&&r.rules.length!==0),g=s(()=>r.disable!==!0&&V.value===!0&&o.value===!1),q=s(()=>r.error===!0||c.value===!0),O=s(()=>typeof r.errorMessage=="string"&&r.errorMessage.length!==0?r.errorMessage:i.value);B(()=>r.modelValue,()=>{u.value=!0,g.value===!0&&r.lazyRules===!1&&C()});function w(){r.lazyRules!=="ondemand"&&g.value===!0&&u.value===!0&&C()}B(()=>r.reactiveRules,h=>{h===!0?m===void 0&&(m=B(()=>r.rules,w,{immediate:!0,deep:!0})):m!==void 0&&(m(),m=void 0)},{immediate:!0}),B(()=>r.lazyRules,w),B(e,h=>{h===!0?u.value=!0:g.value===!0&&r.lazyRules!=="ondemand"&&C()});function _(){f++,o.value=!1,u.value=!1,c.value=!1,i.value=null,C.cancel()}function x(h=r.modelValue){if(r.disable===!0||V.value===!1)return!0;const S=++f,P=o.value!==!0?()=>{u.value=!0}:()=>{},y=(d,v)=>{d===!0&&P(),c.value=d,i.value=v||null,o.value=!1},R=[];for(let d=0;d<r.rules.length;d++){const v=r.rules[d];let p;if(typeof v=="function"?p=v(h,M):typeof v=="string"&&M[v]!==void 0&&(p=M[v](h)),p===!1||typeof p=="string")return y(!0,p),!1;p!==!0&&p!==void 0&&R.push(p)}return R.length===0?(y(!1),!0):(o.value=!0,Promise.all(R).then(d=>{if(d===void 0||Array.isArray(d)===!1||d.length===0)return S===f&&y(!1),!0;const v=d.find(p=>p===!1||typeof p=="string");return S===f&&y(v!==void 0,v),v===void 0},d=>(S===f&&(console.error(d),y(!0)),!1)))}const C=re(x,0);return T(()=>{m!==void 0&&m(),C.cancel()}),Object.assign(t,{resetValidation:_,validate:x}),ne(t,"hasError",()=>q.value),{isDirtyModel:u,hasRules:V,hasError:q,errorMessage:O,validate:x,resetValidation:_}}function _e(e){return e!=null&&(""+e).length!==0}const xe={...ve,...ye,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String},we={...xe,maxlength:[Number,String]},Ae=["update:modelValue","clear","focus","blur"];function Fe({requiredForAttr:e=!0,tagProp:o,changeEvent:r=!1}={}){const{props:t,proxy:c}=F(),i=pe(t,c.$q),u=fe({required:e,getValue:()=>t.for});return{requiredForAttr:e,changeEvent:r,tag:o===!0?s(()=>t.tag):{value:"label"},isDark:i,editable:s(()=>t.disable!==!0&&t.readonly!==!0),innerLoading:b(!1),focused:b(!1),hasPopupOpen:!1,splitAttrs:be(),targetUid:u,rootRef:b(null),targetRef:b(null),controlRef:b(null)}}function ke(e){const{props:o,emit:r,slots:t,attrs:c,proxy:i}=F(),{$q:u}=i;let f=null;e.hasValue===void 0&&(e.hasValue=s(()=>_e(o.modelValue))),e.emitValue===void 0&&(e.emitValue=l=>{r("update:modelValue",l)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:z,onFocusout:j}),Object.assign(e,{clearValue:D,onControlFocusin:z,onControlFocusout:j,focus:v}),e.computedCounter===void 0&&(e.computedCounter=s(()=>{if(o.counter!==!1){const l=typeof o.modelValue=="string"||typeof o.modelValue=="number"?(""+o.modelValue).length:Array.isArray(o.modelValue)===!0?o.modelValue.length:0,n=o.maxlength!==void 0?o.maxlength:o.maxValues;return l+(n!==void 0?" / "+n:"")}}));const{isDirtyModel:m,hasRules:V,hasError:g,errorMessage:q,resetValidation:O}=qe(e.focused,e.innerLoading),w=e.floatingLabel!==void 0?s(()=>o.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):s(()=>o.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),_=s(()=>o.bottomSlots===!0||o.hint!==void 0||V.value===!0||o.counter===!0||o.error!==null),x=s(()=>o.filled===!0?"filled":o.outlined===!0?"outlined":o.borderless===!0?"borderless":o.standout?"standout":"standard"),C=s(()=>`q-field row no-wrap items-start q-field--${x.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(o.rounded===!0?" q-field--rounded":"")+(o.square===!0?" q-field--square":"")+(w.value===!0?" q-field--float":"")+(S.value===!0?" q-field--labeled":"")+(o.dense===!0?" q-field--dense":"")+(o.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(g.value===!0?" q-field--error":"")+(g.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(o.hideBottomSpace!==!0&&_.value===!0?" q-field--with-bottom":"")+(o.disable===!0?" q-field--disabled":o.readonly===!0?" q-field--readonly":"")),h=s(()=>"q-field__control relative-position row no-wrap"+(o.bgColor!==void 0?` bg-${o.bgColor}`:"")+(g.value===!0?" text-negative":typeof o.standout=="string"&&o.standout.length!==0&&e.focused.value===!0?` ${o.standout}`:o.color!==void 0?` text-${o.color}`:"")),S=s(()=>o.labelSlot===!0||o.label!==void 0),P=s(()=>"q-field__label no-pointer-events absolute ellipsis"+(o.labelColor!==void 0&&g.value!==!0?` text-${o.labelColor}`:"")),y=s(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:w.value,modelValue:o.modelValue,emitValue:e.emitValue})),R=s(()=>{const l={};return e.targetUid.value&&(l.for=e.targetUid.value),o.disable===!0&&(l["aria-disabled"]="true"),l});function d(){const l=document.activeElement;let n=e.targetRef!==void 0&&e.targetRef.value;n&&(l===null||l.id!==e.targetUid.value)&&(n.hasAttribute("tabindex")===!0||(n=n.querySelector("[tabindex]")),n&&n!==l&&n.focus({preventScroll:!0}))}function v(){me(d)}function p(){ge(d);const l=document.activeElement;l!==null&&e.rootRef.value.contains(l)&&l.blur()}function z(l){f!==null&&(clearTimeout(f),f=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,r("focus",l))}function j(l,n){f!==null&&clearTimeout(f),f=setTimeout(()=>{f=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,r("blur",l)),n!==void 0&&n())})}function D(l){ue(l),u.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),o.type==="file"&&(e.inputRef.value.value=null),r("update:modelValue",null),e.changeEvent===!0&&r("change",null),r("clear",o.modelValue),ae(()=>{const n=m.value;O(),m.value=n})}function W(l){[13,32].includes(l.keyCode)&&D(l)}function X(){const l=[];return t.prepend!==void 0&&l.push(a("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:A},t.prepend())),l.push(a("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},Y())),g.value===!0&&o.noErrorIcon===!1&&l.push(k("error",[a(Q,{name:u.iconSet.field.error,color:"negative"})])),o.loading===!0||e.innerLoading.value===!0?l.push(k("inner-loading-append",t.loading!==void 0?t.loading():[a(de,{color:o.color})])):o.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&l.push(k("inner-clearable-append",[a(Q,{class:"q-field__focusable-action",name:o.clearIcon||u.iconSet.field.clear,tabindex:0,role:"button","aria-hidden":"false","aria-label":u.lang.label.clear,onKeyup:W,onClick:D})])),t.append!==void 0&&l.push(a("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:A},t.append())),e.getInnerAppend!==void 0&&l.push(k("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&l.push(e.getControlChild()),l}function Y(){const l=[];return o.prefix!==void 0&&o.prefix!==null&&l.push(a("div",{class:"q-field__prefix no-pointer-events row items-center"},o.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&l.push(e.getShadowControl()),e.getControl!==void 0?l.push(e.getControl()):t.rawControl!==void 0?l.push(t.rawControl()):t.control!==void 0&&l.push(a("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0},t.control(y.value))),S.value===!0&&l.push(a("div",{class:P.value},$(t.label,o.label))),o.suffix!==void 0&&o.suffix!==null&&l.push(a("div",{class:"q-field__suffix no-pointer-events row items-center"},o.suffix)),l.concat($(t.default))}function ee(){let l,n;g.value===!0?q.value!==null?(l=[a("div",{role:"alert"},q.value)],n=`q--slot-error-${q.value}`):(l=$(t.error),n="q--slot-error"):(o.hideHint!==!0||e.focused.value===!0)&&(o.hint!==void 0?(l=[a("div",o.hint)],n=`q--slot-hint-${o.hint}`):(l=$(t.hint),n="q--slot-hint"));const U=o.counter===!0||t.counter!==void 0;if(o.hideBottomSpace===!0&&U===!1&&l===void 0)return;const H=a("div",{key:n,class:"q-field__messages col"},l);return a("div",{class:"q-field__bottom row items-start q-field__bottom--"+(o.hideBottomSpace!==!0?"animated":"stale"),onClick:A},[o.hideBottomSpace===!0?H:a(ce,{name:"q-transition--field-message"},()=>H),U===!0?a("div",{class:"q-field__counter"},t.counter!==void 0?t.counter():e.computedCounter.value):null])}function k(l,n){return n===null?null:a("div",{key:l,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},n)}let L=!1;return ie(()=>{L=!0}),se(()=>{L===!0&&o.autofocus===!0&&i.focus()}),o.autofocus===!0&&J(()=>{i.focus()}),T(()=>{f!==null&&clearTimeout(f)}),Object.assign(i,{focus:v,blur:p}),function(){const n=e.getControl===void 0&&t.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0,...R.value}:R.value;return a(e.tag.value,{ref:e.rootRef,class:[C.value,c.class],style:c.style,...n},[t.before!==void 0?a("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:A},t.before()):null,a("div",{class:"q-field__inner relative-position col self-stretch"},[a("div",{ref:e.controlRef,class:h.value,tabindex:-1,...e.controlEvents},X()),_.value===!0?ee():null]),t.after!==void 0?a("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:A},t.after()):null])}}export{Ae as a,ke as b,Fe as c,xe as d,_e as f,we as u};
