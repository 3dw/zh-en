if(!self.define){let e,s={};const c=(c,n)=>(c=new URL(c+".js",n).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let f={};const r=e=>c(e,a),d={module:{uri:a},exports:f,require:r};s[a]=Promise.all(n.map((e=>d[e]||r(e)))).then((e=>(i(...e),f)))}}define(["./workbox-e8110d74"],(function(e){"use strict";e.setCacheNameDetails({prefix:"zh-en"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/BeginnerPage-BnE8Ufq9.css",revision:"aa5768fb4d9b014d12d8397b2aaaf727"},{url:"assets/BeginnerPage-DYGrCt4e.js",revision:"e34a3c913ece5f94c8e8d292e3607840"},{url:"assets/BodyPage-DhTPlJcb.js",revision:"6fc890a1bfd35364c3459ec2642879da"},{url:"assets/BodyPage-DsyFgkU6.css",revision:"9a0657f66288e2c5992fbd65b17615d7"},{url:"assets/ErrorNotFound-BmEWWT-C.js",revision:"d27236a375e557e19d630087886c8243"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa-Dr0goTwe.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ-D-x-0Q06.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/index-Bo7hXVbT.js",revision:"6e404d60394b09d20076ad10212d4327"},{url:"assets/index-BvMm2GhN.css",revision:"3de7d6452d6d96f9c5d3720e9466e4e0"},{url:"assets/IndexPage-BgoVGWwF.js",revision:"2a2911e7390bd40384795fa99ff455ac"},{url:"assets/IndexPage-CNbfEFBr.css",revision:"81bb683b0f98fb3effbe988d577e1037"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ-Y2mpUUkw.woff",revision:"d93054bf1c6d3002897ac09e0e7b9a6f"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc--ViM7Ag4Q.woff",revision:"30ef7351c99d2cd25159e6fc71e6c6fc"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc--CrFzpgl6.woff",revision:"5001486802025ac686973542fdeeea60"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc--CW3_XjG_.woff",revision:"064a5568b49ac29f2e9ea88a1f25fbc3"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc--Dr8fnyGc.woff",revision:"c2818baea5d2506dd4c2843836b9bff6"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM-DAYh6T4l.woff",revision:"1ac185dda7da331babe18e8d84ec6984"},{url:"assets/MainLayout-BxYgy9V_.js",revision:"d7e72180a4ce8c134e9a677fb8ad0757"},{url:"assets/NumberPage-Chbk27Lu.css",revision:"3cf57d86b9b7be91008f569d03bfe861"},{url:"assets/NumberPage-jWhAiwBb.js",revision:"a9a3bfd5547a9aaf04d6a59e2164692e"},{url:"assets/QBtn-BDDSxay0.js",revision:"1dfe0fdc413fdb01f6606cca7bc0b40e"},{url:"assets/QIcon-DvmpOnzT.js",revision:"cc0818ac4ef607c6add38d2a31a37560"},{url:"assets/QInput-BWmNuvxk.js",revision:"10179ac4976a4ba2f17c967f02dba7ee"},{url:"assets/QPage-CtRj9Jnb.js",revision:"aaeb556ab39b5d8cd95f7fa961ef04d3"},{url:"assets/use-dark-Crl6HyJx.js",revision:"95c2659006df9fb197f8ceea5490c0d4"},{url:"favicon.ico",revision:"58113d14e1bbff0b5ac87c9dd2439cff"},{url:"icons/apple-icon-120x120.png",revision:"5c61bf605333cedc1fe80f1eb0eac198"},{url:"icons/apple-icon-152x152.png",revision:"6fec1de2712e442ce8283b2a534d6453"},{url:"icons/apple-icon-167x167.png",revision:"3d1d4f7e82bd9f7ff4867196dc5d404e"},{url:"icons/apple-icon-180x180.png",revision:"d8e34c0e8d697bcf77170f596cd4a130"},{url:"icons/apple-launch-1080x2340.png",revision:"5cfacfc73a9d292978df9f784f293843"},{url:"icons/apple-launch-1125x2436.png",revision:"929d6778c3e5a0c2921487c8042fe3c2"},{url:"icons/apple-launch-1170x2532.png",revision:"a9b9cdfcb1d2de40f879c7d868ea52a0"},{url:"icons/apple-launch-1179x2556.png",revision:"751a90e5ca15c4d9c17f0d7e256acbfd"},{url:"icons/apple-launch-1242x2208.png",revision:"8fc80b0c35b36cf0c57d90d3bd038f8e"},{url:"icons/apple-launch-1242x2688.png",revision:"900be1c2299506f53e664a4304696d8b"},{url:"icons/apple-launch-1284x2778.png",revision:"25e46eeb02f59431361d574da6289395"},{url:"icons/apple-launch-1290x2796.png",revision:"de3fe8218adde374ebe3a5a161f3393e"},{url:"icons/apple-launch-1536x2048.png",revision:"a5cff21c0a4ad8d34e6adca283bd4f26"},{url:"icons/apple-launch-1620x2160.png",revision:"a269c49813ded8e334b4b79ed69f3b81"},{url:"icons/apple-launch-1668x2224.png",revision:"a2f4bf3cc79d8f4075b5cee8df2dbbdd"},{url:"icons/apple-launch-1668x2388.png",revision:"04a31aea82728c3afc5a73ba835140a1"},{url:"icons/apple-launch-2048x2732.png",revision:"357316b93f3af4977470799d3e93e9ca"},{url:"icons/apple-launch-750x1334.png",revision:"c59f483e7cd9d9d11fd762240208f713"},{url:"icons/apple-launch-828x1792.png",revision:"265b98f00c150c54387747f495977d2d"},{url:"icons/favicon-128x128.png",revision:"c61fff74c1eacd1efc5ab689f06b0e2f"},{url:"icons/favicon-16x16.png",revision:"e25724d9832e45fa49af88b3c5399bf0"},{url:"icons/favicon-32x32.png",revision:"6230c0d80dfa69729fc5d38e76af268c"},{url:"icons/favicon-96x96.png",revision:"4d971ac32be91e8cc8e68473c05e4d7f"},{url:"icons/icon-128x128.png",revision:"c61fff74c1eacd1efc5ab689f06b0e2f"},{url:"icons/icon-192x192.png",revision:"f39fccc096efa498494b48b1112ffc1d"},{url:"icons/icon-256x256.png",revision:"af5770ba67318ec9b2ec863066da693a"},{url:"icons/icon-384x384.png",revision:"29be7e9fc57b38dd863d72481e43363a"},{url:"icons/icon-512x512.png",revision:"08f639fd91b874b8fbd6576e9f6844e7"},{url:"icons/ms-icon-144x144.png",revision:"4f86e38f89a69dce71a43cfd3b6b5aee"},{url:"icons/safari-pinned-tab.svg",revision:"cf4fac3b454bb486c535c01af85328e5"},{url:"index.html",revision:"62ed3497f5038f4fba681b6c6c1d3014"},{url:"logo.png",revision:"ef3b044f6d15c7a075d43846c078ae11"},{url:"manifest.json",revision:"a89948402debe7ef0e300e514608f298"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\\.js$/]}))}));
