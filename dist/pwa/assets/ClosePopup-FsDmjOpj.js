import{c as n,aa as c,ab as p,b as i,h as d,d as l,p as u,ac as h}from"./index-DgLdTMC7.js";import{l as m,m as _}from"./QDialog-DiavIQR6.js";const y=n({name:"QCardActions",props:{...c,vertical:Boolean},setup(e,{slots:t}){const o=p(e),s=i(()=>`q-card__actions ${o.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>d("div",{class:s.value},l(t.default))}});function a(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}const C=u({name:"close-popup",beforeMount(e,{value:t}){const o={depth:a(t),handler(s){o.depth!==0&&setTimeout(()=>{const r=m(e);r!==void 0&&_(r,s,o.depth)})},handlerKey(s){h(s,13)===!0&&o.handler(s)}};e.__qclosepopup=o,e.addEventListener("click",o.handler),e.addEventListener("keyup",o.handlerKey)},updated(e,{value:t,oldValue:o}){t!==o&&(e.__qclosepopup.depth=a(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}});export{C,y as Q};
