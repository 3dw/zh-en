if(!self.define){let e,s={};const c=(c,i)=>(c=new URL(c+".js",i).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(i,a)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let d={};const f=e=>c(e,n),r={module:{uri:n},exports:d,require:f};s[n]=Promise.all(i.map((e=>r[e]||f(e)))).then((e=>(a(...e),d)))}}define(["./workbox-f5674ebb"],(function(e){"use strict";e.setCacheNameDetails({prefix:"zh-en"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/BeginnerPage-DUH6vG7m.js",revision:"3a5151e107d8049d2027d5bd21d31551"},{url:"assets/BeginnerPage-JrslzsMD.css",revision:"db48d2b7177e2feab015528369480b15"},{url:"assets/BodyPage-B2GC6_f8.js",revision:"34d48d427d6ffbc2afc6371db7ee95bf"},{url:"assets/BodyPage-KyKvdJYr.css",revision:"1bd1e126982bb5a63c83d525ed8b937d"},{url:"assets/ErrorNotFound-B7tXedqH.js",revision:"ab10886c3125f92c549b3be7b9cd2bbc"},{url:"assets/FavoritePage-BCMwbjIQ.css",revision:"ee782d6a4a72754ed7d160eee3e12676"},{url:"assets/FavoritePage-osFvOCdv.js",revision:"462cccc8712c3065eec96d9b57264932"},{url:"assets/FlashCard-C24MU-I6.css",revision:"7b75c92fd7061dda655643bb2e912098"},{url:"assets/FlashCard-CGOT3yus.js",revision:"d789d79d845a450cd5bbb878e118df97"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa-Dr0goTwe.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ-D-x-0Q06.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/focus-manager-Bs85HO-s.js",revision:"5fb8b8191ff68203239aedf85a6b27dc"},{url:"assets/index-BvMm2GhN.css",revision:"3de7d6452d6d96f9c5d3720e9466e4e0"},{url:"assets/index-DOgm5T9x.js",revision:"4fc42c2ae4a1ef90c0fa64ed5698e0b2"},{url:"assets/IndexPage-B0cFN1L8.js",revision:"eb4b995eba49e04c59db124b6350cfcd"},{url:"assets/IndexPage-CEZWwoGM.css",revision:"c4afd0428d7871d05e4fcbd34e08a779"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ-Y2mpUUkw.woff",revision:"d93054bf1c6d3002897ac09e0e7b9a6f"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc--ViM7Ag4Q.woff",revision:"30ef7351c99d2cd25159e6fc71e6c6fc"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc--CrFzpgl6.woff",revision:"5001486802025ac686973542fdeeea60"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc--CW3_XjG_.woff",revision:"064a5568b49ac29f2e9ea88a1f25fbc3"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc--Dr8fnyGc.woff",revision:"c2818baea5d2506dd4c2843836b9bff6"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM-DAYh6T4l.woff",revision:"1ac185dda7da331babe18e8d84ec6984"},{url:"assets/MainLayout-ClPi_ndd.js",revision:"16f13831b57ce25a20dd59d960fc2168"},{url:"assets/MainLayout-RP7mvMbm.css",revision:"105660bb00e051578f8b6bdf3abe0258"},{url:"assets/NumberPage-CUEMwLcT.js",revision:"13a7db958f989ea274d5c67d59e89e90"},{url:"assets/NumberPage-DltMJd0z.css",revision:"953ee25be2369fcdb1bc581bcaa736ac"},{url:"assets/QBtn-CV5rYeVa.js",revision:"dea533de4947ea36e3a1f81c68dc065b"},{url:"assets/QIcon-BGX7Vzl2.js",revision:"b55f7a8d6c8aacc025edad146e351d78"},{url:"assets/QInput-lbyBqpXT.js",revision:"8399b9f315f5603373ebfbe3dfe48bdc"},{url:"assets/QPage-B9ePeb2l.js",revision:"31910cd38cdd770ea42f4620515c20d8"},{url:"favicon.ico",revision:"58113d14e1bbff0b5ac87c9dd2439cff"},{url:"icons/apple-icon-120x120.png",revision:"5c61bf605333cedc1fe80f1eb0eac198"},{url:"icons/apple-icon-152x152.png",revision:"6fec1de2712e442ce8283b2a534d6453"},{url:"icons/apple-icon-167x167.png",revision:"3d1d4f7e82bd9f7ff4867196dc5d404e"},{url:"icons/apple-icon-180x180.png",revision:"d8e34c0e8d697bcf77170f596cd4a130"},{url:"icons/apple-launch-1080x2340.png",revision:"5cfacfc73a9d292978df9f784f293843"},{url:"icons/apple-launch-1125x2436.png",revision:"929d6778c3e5a0c2921487c8042fe3c2"},{url:"icons/apple-launch-1170x2532.png",revision:"a9b9cdfcb1d2de40f879c7d868ea52a0"},{url:"icons/apple-launch-1179x2556.png",revision:"751a90e5ca15c4d9c17f0d7e256acbfd"},{url:"icons/apple-launch-1242x2208.png",revision:"8fc80b0c35b36cf0c57d90d3bd038f8e"},{url:"icons/apple-launch-1242x2688.png",revision:"900be1c2299506f53e664a4304696d8b"},{url:"icons/apple-launch-1284x2778.png",revision:"25e46eeb02f59431361d574da6289395"},{url:"icons/apple-launch-1290x2796.png",revision:"de3fe8218adde374ebe3a5a161f3393e"},{url:"icons/apple-launch-1536x2048.png",revision:"a5cff21c0a4ad8d34e6adca283bd4f26"},{url:"icons/apple-launch-1620x2160.png",revision:"a269c49813ded8e334b4b79ed69f3b81"},{url:"icons/apple-launch-1668x2224.png",revision:"a2f4bf3cc79d8f4075b5cee8df2dbbdd"},{url:"icons/apple-launch-1668x2388.png",revision:"04a31aea82728c3afc5a73ba835140a1"},{url:"icons/apple-launch-2048x2732.png",revision:"357316b93f3af4977470799d3e93e9ca"},{url:"icons/apple-launch-750x1334.png",revision:"c59f483e7cd9d9d11fd762240208f713"},{url:"icons/apple-launch-828x1792.png",revision:"265b98f00c150c54387747f495977d2d"},{url:"icons/favicon-128x128.png",revision:"c61fff74c1eacd1efc5ab689f06b0e2f"},{url:"icons/favicon-16x16.png",revision:"e25724d9832e45fa49af88b3c5399bf0"},{url:"icons/favicon-32x32.png",revision:"6230c0d80dfa69729fc5d38e76af268c"},{url:"icons/favicon-96x96.png",revision:"4d971ac32be91e8cc8e68473c05e4d7f"},{url:"icons/icon-128x128.png",revision:"c61fff74c1eacd1efc5ab689f06b0e2f"},{url:"icons/icon-192x192.png",revision:"f39fccc096efa498494b48b1112ffc1d"},{url:"icons/icon-256x256.png",revision:"af5770ba67318ec9b2ec863066da693a"},{url:"icons/icon-384x384.png",revision:"29be7e9fc57b38dd863d72481e43363a"},{url:"icons/icon-512x512.png",revision:"08f639fd91b874b8fbd6576e9f6844e7"},{url:"icons/ms-icon-144x144.png",revision:"4f86e38f89a69dce71a43cfd3b6b5aee"},{url:"icons/safari-pinned-tab.svg",revision:"cf4fac3b454bb486c535c01af85328e5"},{url:"index.html",revision:"0794c2af03ebc45b2cc133447dcf3fdb"},{url:"logo.png",revision:"ef3b044f6d15c7a075d43846c078ae11"},{url:"manifest.json",revision:"a89948402debe7ef0e300e514608f298"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\\.js$/]})),e.registerRoute(/^https:\/\/.*/,new e.NetworkFirst({cacheName:"api-cache",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:86400})]}),"GET")}));
