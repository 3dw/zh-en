import{ad as x,q as g,k as C,x as w,C as E,A as R,B as S}from"./index-CqWzIPoc.js";function T(e,t){const r=e.style;for(const i in t)r[i]=t[i]}function N(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=x(e);if(t)return t.$el||t}function O(e,t){if(e==null||e.contains(t)===!0)return!0;for(let r=e.nextElementSibling;r!==null;r=r.nextElementSibling)if(r.contains(t))return!0;return!1}function L(e,t=250){let r=!1,i;return function(){return r===!1&&(r=!0,setTimeout(()=>{r=!1},t),i=e.apply(this,arguments)),i}}function h(e,t,r,i){r.modifiers.stop===!0&&R(e);const o=r.modifiers.color;let p=r.modifiers.center;p=p===!0||i===!0;const a=document.createElement("span"),s=document.createElement("span"),d=S(e),{left:_,top:$,width:l,height:c}=t.getBoundingClientRect(),n=Math.sqrt(l*l+c*c),f=n/2,m=`${(l-n)/2}px`,k=p?m:`${d.left-_-f}px`,y=`${(c-n)/2}px`,b=p?y:`${d.top-$-f}px`;s.className="q-ripple__inner",T(s,{height:`${n}px`,width:`${n}px`,transform:`translate3d(${k},${b},0) scale3d(.2,.2,1)`,opacity:0}),a.className=`q-ripple${o?" text-"+o:""}`,a.setAttribute("dir","ltr"),a.appendChild(s),t.appendChild(a);const v=()=>{a.remove(),clearTimeout(u)};r.abort.push(v);let u=setTimeout(()=>{s.classList.add("q-ripple__inner--enter"),s.style.transform=`translate3d(${m},${y},0) scale3d(1,1,1)`,s.style.opacity=.2,u=setTimeout(()=>{s.classList.remove("q-ripple__inner--enter"),s.classList.add("q-ripple__inner--leave"),s.style.opacity=0,u=setTimeout(()=>{a.remove(),r.abort.splice(r.abort.indexOf(v),1)},275)},250)},50)}function q(e,{modifiers:t,value:r,arg:i}){const o=Object.assign({},e.cfg.ripple,t,r);e.modifiers={early:o.early===!0,stop:o.stop===!0,center:o.center===!0,color:o.color||i,keyCodes:[].concat(o.keyCodes||13)}}const j=g({name:"ripple",beforeMount(e,t){const r=t.instance.$.appContext.config.globalProperties.$q.config||{};if(r.ripple===!1)return;const i={cfg:r,enabled:t.value!==!1,modifiers:{},abort:[],start(o){i.enabled===!0&&o.qSkipRipple!==!0&&o.type===(i.modifiers.early===!0?"pointerdown":"click")&&h(o,e,i,o.qKeyEvent===!0)},keystart:L(o=>{i.enabled===!0&&o.qSkipRipple!==!0&&C(o,i.modifiers.keyCodes)===!0&&o.type===`key${i.modifiers.early===!0?"down":"up"}`&&h(o,e,i,!0)},300)};q(i,t),e.__qripple=i,w(i,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const r=e.__qripple;r!==void 0&&(r.enabled=t.value!==!1,r.enabled===!0&&Object(t.value)===t.value&&q(r,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(r=>{r()}),E(t,"main"),delete e._qripple)}});export{j as R,O as a,T as c,N as g};
