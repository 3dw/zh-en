import{i as c,r as u,o as l,w as y,a as p}from"./index-DMWxuhnQ.js";let s,e=0;const t=new Array(256);for(let n=0;n<256;n++)t[n]=(n+256).toString(16).substring(1);const m=(()=>{const n=typeof crypto<"u"?crypto:typeof window<"u"?window.crypto||window.msCrypto:void 0;if(n!==void 0){if(n.randomBytes!==void 0)return n.randomBytes;if(n.getRandomValues!==void 0)return r=>{const o=new Uint8Array(r);return n.getRandomValues(o),o}}return r=>{const o=[];for(let i=r;i>0;i--)o.push(Math.floor(Math.random()*256));return o}})(),f=4096;function d(){(s===void 0||e+16>f)&&(e=0,s=m(f));const n=Array.prototype.slice.call(s,e,e+=16);return n[6]=n[6]&15|64,n[8]=n[8]&63|128,t[n[0]]+t[n[1]]+t[n[2]]+t[n[3]]+"-"+t[n[4]]+t[n[5]]+"-"+t[n[6]]+t[n[7]]+"-"+t[n[8]]+t[n[9]]+"-"+t[n[10]]+t[n[11]]+t[n[12]]+t[n[13]]+t[n[14]]+t[n[15]]}function v(n){return n??null}function a(n,r){return n??(r===!0?`f_${d()}`:null)}function x({getValue:n,required:r=!0}={}){if(c.value===!0){const o=n!==void 0?u(v(n())):u(null);return r===!0&&o.value===null&&l(()=>{o.value=`f_${d()}`}),n!==void 0&&y(n,i=>{o.value=a(i,r)}),o}return n!==void 0?p(()=>a(n(),r)):u(`f_${d()}`)}export{d as a,x as u};
