if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,f)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const d=e=>a(e,r),b={module:{uri:r},exports:c,require:d};s[r]=Promise.all(i.map((e=>b[e]||d(e)))).then((e=>(f(...e),c)))}}define(["./workbox-f5674ebb"],(function(e){"use strict";e.setCacheNameDetails({prefix:"zh-en"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/apple-DcBeu-9G.jpg",revision:"6604bea120ce37433c1243dfc9ddb87e"},{url:"assets/banana-DGKkD4Lq.jpg",revision:"d96703398cae0417cbd15829218e66bf"},{url:"assets/BeginnerPage-D1Vn-Xwl.js",revision:"45c406f2a6409b1c17b137edfec8975a"},{url:"assets/BeginnerPage-D5GfNyAP.css",revision:"ad03dff00dde37ffcf6dbc0a9866170c"},{url:"assets/BodyPage-A64_xEeJ.js",revision:"f44005d46c2c3742a31505c0f096b65a"},{url:"assets/BodyPage-UJ3kVmWt.css",revision:"bd979b04f203b70874bf83c652d3b209"},{url:"assets/ClosePopup-CuhjqH_O.js",revision:"8224d783470657afd144aeea003f71fd"},{url:"assets/couplefight-fEEMF1_C.jpg",revision:"5199b8afb4d3a8896ca3ed8776b130ec"},{url:"assets/ErrorNotFound-BipgR-bh.js",revision:"2ba769069f37df3b460cce8deba33d5e"},{url:"assets/FavoritePage-BnH9RMFQ.css",revision:"311a70e42de653300507e4cc90db9af4"},{url:"assets/FavoritePage-CgxSHQQd.js",revision:"d6be79c5f67641550df91ac1b9709366"},{url:"assets/FlashCard-C24MU-I6.css",revision:"7b75c92fd7061dda655643bb2e912098"},{url:"assets/FlashCard-CLV7m-hj.js",revision:"5a2c2b387b01b5b04c1b38ad3098d812"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa-Dr0goTwe.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ-D-x-0Q06.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/focus-manager-zjdVGI5d.js",revision:"7e63c28e50be08a78bf3333716bbb402"},{url:"assets/Game1Page-BMNksJl_.js",revision:"07d4f9b07ebf455f4cb295784de86477"},{url:"assets/Game1Page-ZGEZllEo.css",revision:"861f67aa6e0419762d11098a59927676"},{url:"assets/Game2Page-DDmC3FAR.css",revision:"81689e8bf0dc302e521191069957020a"},{url:"assets/Game2Page-yYqFWWH2.js",revision:"1918b270702e884441133533634269f0"},{url:"assets/Game3Page-CiMTuv28.js",revision:"bb87cf7dd1500b90d4930ae4ee88d95a"},{url:"assets/Game3Page-GOmyOZbS.css",revision:"3111ab41da37c4f9b207466208b51175"},{url:"assets/Game4Page-BBz9vRPm.js",revision:"94ce14542c3166701e6bccabd184137a"},{url:"assets/Game4Page-CJCvXCzE.css",revision:"865fa0e6baca21008b1776b9553e7fe6"},{url:"assets/HandWrittenPage--rULAmRs.js",revision:"926986b0d8d62091ed1a337381cde670"},{url:"assets/HandWrittenPage-DmMnUtKI.css",revision:"c5e7607b9cacb9c1533f010fdcfb4926"},{url:"assets/index-BvMm2GhN.css",revision:"3de7d6452d6d96f9c5d3720e9466e4e0"},{url:"assets/index-Ciz7fihY.js",revision:"0beac4ee9d0fb587063a39a9a7de6a83"},{url:"assets/IndexPage-BhOnxpvy.css",revision:"4fdbd3fdb1780d9fd268e64941b131d1"},{url:"assets/IndexPage-D4Vn7f8e.js",revision:"63ed747a436cd7d70c5d9f5d25528be9"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ-Y2mpUUkw.woff",revision:"d93054bf1c6d3002897ac09e0e7b9a6f"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc--ViM7Ag4Q.woff",revision:"30ef7351c99d2cd25159e6fc71e6c6fc"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc--CrFzpgl6.woff",revision:"5001486802025ac686973542fdeeea60"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc--CW3_XjG_.woff",revision:"064a5568b49ac29f2e9ea88a1f25fbc3"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc--Dr8fnyGc.woff",revision:"c2818baea5d2506dd4c2843836b9bff6"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM-DAYh6T4l.woff",revision:"1ac185dda7da331babe18e8d84ec6984"},{url:"assets/MainGamePage-DqCqmp6y.css",revision:"1169c32ed03ac104e3b5fd8b747adcc7"},{url:"assets/MainGamePage-Dz1hUqZT.js",revision:"0d24042765b6956b25363507ddd599b0"},{url:"assets/MainLayout-1xlPMpmO.css",revision:"e16026a3214fb321ea0f8a792864b1cd"},{url:"assets/MainLayout-BFo0vpzl.js",revision:"d565d7116be7d97b1b210ca455fb5eaa"},{url:"assets/MainSongWordPage-DBV8PcJ0.css",revision:"c606a348a96f8b8dcb4f3089bf46f8ab"},{url:"assets/MainSongWordPage-Dx8lSa2P.js",revision:"c3f71e7c1bbe34a0255da38a89212c20"},{url:"assets/NineGridGame-B55yiBJF.js",revision:"89e8dc9aff0b8516326dfaa43a3745a1"},{url:"assets/NineGridGame-BMNKLQ15.css",revision:"c904fd84c05d950fb1d9aeae4cbc0044"},{url:"assets/NumberPage-C026GBB0.js",revision:"8e44852697d512f6c0098f9bdd197e2d"},{url:"assets/NumberPage-wPDQhoqh.css",revision:"8768cccabb09850566da6964ca7064e0"},{url:"assets/oldfriendsmeet-1dkOlloG.jpg",revision:"25374fd03aa61526eebff49cb67a1993"},{url:"assets/orange-CJRrdM-K.jpg",revision:"13855bc66919d85db6aa296600c621ee"},{url:"assets/pineapple-0QUnYwxk.jpg",revision:"1b6790661c9cfb12d64b61a805456f80"},{url:"assets/QAvatar-Df5npLWY.js",revision:"0b5c2540fc342000bc320a9f22f236d2"},{url:"assets/QBadge-BRw0imSA.js",revision:"7970ad5b6529e0937af01d55499a65b1"},{url:"assets/QBtn-BUApTgvM.js",revision:"b610cbd59986667b000a427e73538395"},{url:"assets/QCard-nbBGRqxT.js",revision:"aa25265b890d86ebb8c540c3be5e7845"},{url:"assets/QDialog-CrFRk62W.js",revision:"6e89b030dac752fe150fb8c94b7c94e7"},{url:"assets/QIcon-B5T-K79R.js",revision:"40fe3ed7185ace92b072bd944aaf4624"},{url:"assets/QImg-kIYI9WpX.js",revision:"4a88147605aab3ee5a46a5a3f00aafca"},{url:"assets/QInput-BgrQbrZJ.js",revision:"4911175b09cc8300634629770d58036e"},{url:"assets/QPage-BpbSFIIL.js",revision:"843760388da43c233daea411a547e394"},{url:"assets/Ripple-B2tlnNVr.js",revision:"dc80b5008fa9b4de561cb70f49369b31"},{url:"assets/selection-CWDQQ0BT.js",revision:"bb2c0cb0fbe61581790b7bc2fc9d7831"},{url:"assets/Song2WordPage-CcMcwP9_.js",revision:"b8d116ae9765ef964bbcb2ecb249148c"},{url:"assets/Song2WordPage-HojzRoli.css",revision:"b236b48b978d4c3b7beed3530b78a18b"},{url:"assets/Song3WordPage-DIrHyyY-.css",revision:"72efad1c5f598dc88403622ebdb5f685"},{url:"assets/Song3WordPage-DVH3DG_M.js",revision:"3d5a87bc8571287efb65916d58c08b6f"},{url:"assets/Song4WordPage-CqwK3eSk.js",revision:"3f552d8231c40a5fe672bab27cce64d1"},{url:"assets/Song4WordPage-DjWZEnxr.css",revision:"669a0b83479408da1873af5a210aae01"},{url:"assets/SongWordPage-B8LhJ7lF.js",revision:"2fd9008be651eb49a0ef3f1b059a3ee9"},{url:"assets/SongWordPage-DHQaYzxp.css",revision:"f470c8b683d09b6ce850dc6ccfea74fb"},{url:"assets/use-dark-JEmFQNrJ.js",revision:"04010d794707e6dfa92f5e51dff1f042"},{url:"favicon.ico",revision:"58113d14e1bbff0b5ac87c9dd2439cff"},{url:"icons/apple-icon-120x120.png",revision:"5c61bf605333cedc1fe80f1eb0eac198"},{url:"icons/apple-icon-152x152.png",revision:"6fec1de2712e442ce8283b2a534d6453"},{url:"icons/apple-icon-167x167.png",revision:"3d1d4f7e82bd9f7ff4867196dc5d404e"},{url:"icons/apple-icon-180x180.png",revision:"d8e34c0e8d697bcf77170f596cd4a130"},{url:"icons/apple-launch-1080x2340.png",revision:"5cfacfc73a9d292978df9f784f293843"},{url:"icons/apple-launch-1125x2436.png",revision:"929d6778c3e5a0c2921487c8042fe3c2"},{url:"icons/apple-launch-1170x2532.png",revision:"a9b9cdfcb1d2de40f879c7d868ea52a0"},{url:"icons/apple-launch-1179x2556.png",revision:"751a90e5ca15c4d9c17f0d7e256acbfd"},{url:"icons/apple-launch-1242x2208.png",revision:"8fc80b0c35b36cf0c57d90d3bd038f8e"},{url:"icons/apple-launch-1242x2688.png",revision:"900be1c2299506f53e664a4304696d8b"},{url:"icons/apple-launch-1284x2778.png",revision:"25e46eeb02f59431361d574da6289395"},{url:"icons/apple-launch-1290x2796.png",revision:"de3fe8218adde374ebe3a5a161f3393e"},{url:"icons/apple-launch-1536x2048.png",revision:"a5cff21c0a4ad8d34e6adca283bd4f26"},{url:"icons/apple-launch-1620x2160.png",revision:"a269c49813ded8e334b4b79ed69f3b81"},{url:"icons/apple-launch-1668x2224.png",revision:"a2f4bf3cc79d8f4075b5cee8df2dbbdd"},{url:"icons/apple-launch-1668x2388.png",revision:"04a31aea82728c3afc5a73ba835140a1"},{url:"icons/apple-launch-2048x2732.png",revision:"357316b93f3af4977470799d3e93e9ca"},{url:"icons/apple-launch-750x1334.png",revision:"c59f483e7cd9d9d11fd762240208f713"},{url:"icons/apple-launch-828x1792.png",revision:"265b98f00c150c54387747f495977d2d"},{url:"icons/favicon-128x128.png",revision:"c61fff74c1eacd1efc5ab689f06b0e2f"},{url:"icons/favicon-16x16.png",revision:"e25724d9832e45fa49af88b3c5399bf0"},{url:"icons/favicon-32x32.png",revision:"6230c0d80dfa69729fc5d38e76af268c"},{url:"icons/favicon-96x96.png",revision:"4d971ac32be91e8cc8e68473c05e4d7f"},{url:"icons/icon-128x128.png",revision:"c61fff74c1eacd1efc5ab689f06b0e2f"},{url:"icons/icon-192x192.png",revision:"f39fccc096efa498494b48b1112ffc1d"},{url:"icons/icon-256x256.png",revision:"af5770ba67318ec9b2ec863066da693a"},{url:"icons/icon-384x384.png",revision:"29be7e9fc57b38dd863d72481e43363a"},{url:"icons/icon-512x512.png",revision:"08f639fd91b874b8fbd6576e9f6844e7"},{url:"icons/ms-icon-144x144.png",revision:"4f86e38f89a69dce71a43cfd3b6b5aee"},{url:"icons/safari-pinned-tab.svg",revision:"cf4fac3b454bb486c535c01af85328e5"},{url:"images/letters/a.gif",revision:"cfb2f65a8b99e8de4690ae8926cef013"},{url:"images/letters/b.gif",revision:"3bca5b9120835d3452fb97af738f615f"},{url:"images/letters/c.gif",revision:"aa6fcad8f038038b21b71c7918ba0be1"},{url:"images/letters/d.gif",revision:"82e253ff4846ebc128f7e3f0fb5edc55"},{url:"images/letters/e.gif",revision:"9c8c6871ffeeca7768b22a546427374c"},{url:"images/letters/f.gif",revision:"b08029941c18af1576ef2a99c8532fc4"},{url:"images/letters/g.gif",revision:"646ab2f58490f99ff60bfd6b9f5126e5"},{url:"images/letters/h.gif",revision:"59872e2a4430d8e26c15fb1f8b989186"},{url:"images/letters/i.gif",revision:"8f427af57d7e95fafd7dea170a3c00bb"},{url:"images/letters/j.gif",revision:"ec651d53a586a1ff77e98a5a327a40c8"},{url:"images/letters/k.gif",revision:"7aeeeb0dcc28d82219b049b72372089d"},{url:"images/letters/l.gif",revision:"54be94314954434c2c4fea4a0c082bad"},{url:"images/letters/m.gif",revision:"b70f8098fbfb7c4aad79e3e12f593a65"},{url:"images/letters/n.gif",revision:"3e0a11c60abbf2fd2b67c11c2b88f7b9"},{url:"images/letters/o.gif",revision:"45cdaac0184dc53b8336e5c2675428df"},{url:"images/letters/p.gif",revision:"0102258c22c586b63dc72ef6d0d6a48e"},{url:"images/letters/q.gif",revision:"bffe8f2f3a71e24e3158c3570ad762dc"},{url:"images/letters/r.gif",revision:"40af2d9fbe65f3e0fc5fb54db3a883dd"},{url:"images/letters/s.gif",revision:"bb6247f1bf74ae9034a8954d75556f77"},{url:"images/letters/t.gif",revision:"98b5fed834cedc2f11c06444639f29ac"},{url:"images/letters/u.gif",revision:"18226b9530b7aea077ebcffe3782101e"},{url:"images/letters/v.gif",revision:"0c8d7a0c78c74e303e9375bb16bbb821"},{url:"images/letters/w.gif",revision:"9bd5c4439f70febf5fb1a9bb299b1bd9"},{url:"images/letters/x.gif",revision:"3d39db53fa3075cc40d8607d56a864e0"},{url:"images/letters/y.gif",revision:"6c8763400c21d1b705406c138e1a31a7"},{url:"images/letters/z.gif",revision:"9dd8c4d86dfeefa5036a444ee40da328"},{url:"images/大寫letters檔案名稱/A.gif",revision:"cfb2f65a8b99e8de4690ae8926cef013"},{url:"images/大寫letters檔案名稱/B.gif",revision:"3bca5b9120835d3452fb97af738f615f"},{url:"images/大寫letters檔案名稱/C.gif",revision:"aa6fcad8f038038b21b71c7918ba0be1"},{url:"images/大寫letters檔案名稱/D.gif",revision:"82e253ff4846ebc128f7e3f0fb5edc55"},{url:"images/大寫letters檔案名稱/E.gif",revision:"9c8c6871ffeeca7768b22a546427374c"},{url:"images/大寫letters檔案名稱/F.gif",revision:"b08029941c18af1576ef2a99c8532fc4"},{url:"images/大寫letters檔案名稱/G.gif",revision:"646ab2f58490f99ff60bfd6b9f5126e5"},{url:"images/大寫letters檔案名稱/H.gif",revision:"59872e2a4430d8e26c15fb1f8b989186"},{url:"images/大寫letters檔案名稱/I.gif",revision:"8f427af57d7e95fafd7dea170a3c00bb"},{url:"images/大寫letters檔案名稱/J.gif",revision:"ec651d53a586a1ff77e98a5a327a40c8"},{url:"images/大寫letters檔案名稱/K.gif",revision:"7aeeeb0dcc28d82219b049b72372089d"},{url:"images/大寫letters檔案名稱/L.gif",revision:"54be94314954434c2c4fea4a0c082bad"},{url:"images/大寫letters檔案名稱/M.gif",revision:"b70f8098fbfb7c4aad79e3e12f593a65"},{url:"images/大寫letters檔案名稱/N.gif",revision:"3e0a11c60abbf2fd2b67c11c2b88f7b9"},{url:"images/大寫letters檔案名稱/O.gif",revision:"45cdaac0184dc53b8336e5c2675428df"},{url:"images/大寫letters檔案名稱/P.gif",revision:"0102258c22c586b63dc72ef6d0d6a48e"},{url:"images/大寫letters檔案名稱/Q.gif",revision:"bffe8f2f3a71e24e3158c3570ad762dc"},{url:"images/大寫letters檔案名稱/R.gif",revision:"40af2d9fbe65f3e0fc5fb54db3a883dd"},{url:"images/大寫letters檔案名稱/S.gif",revision:"bb6247f1bf74ae9034a8954d75556f77"},{url:"images/大寫letters檔案名稱/T.gif",revision:"98b5fed834cedc2f11c06444639f29ac"},{url:"images/大寫letters檔案名稱/U.gif",revision:"18226b9530b7aea077ebcffe3782101e"},{url:"images/大寫letters檔案名稱/V.gif",revision:"0c8d7a0c78c74e303e9375bb16bbb821"},{url:"images/大寫letters檔案名稱/W.gif",revision:"9bd5c4439f70febf5fb1a9bb299b1bd9"},{url:"images/大寫letters檔案名稱/X.gif",revision:"3d39db53fa3075cc40d8607d56a864e0"},{url:"images/大寫letters檔案名稱/Y.gif",revision:"6c8763400c21d1b705406c138e1a31a7"},{url:"images/大寫letters檔案名稱/Z.gif",revision:"9dd8c4d86dfeefa5036a444ee40da328"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/A.gif",revision:"639b627cbcdb2ab3c9483e67b9170bd8"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/B.gif",revision:"b417a04ef76a2d883b70869a85caa90d"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/C.gif",revision:"13db340d0541c8549bc0a67c50a005d8"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/D.gif",revision:"70ae61e33f2b5c247af7df30474fb5ea"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/E.gif",revision:"4b6123d0eb96af77d3838c7d411d6295"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/F.gif",revision:"a3bc8fd441b74e3dc0555f8e79a848df"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/G.gif",revision:"6f556583f76c0de9fdd921c4e48c349c"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/H.gif",revision:"17e9702f4c250e2580a7dc3ae1cdb362"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/I.gif",revision:"3bf8f1b86f871c14e265acb54bd58818"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/J.gif",revision:"3bf68f9151a199f92cac7055e6a6494a"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/K.gif",revision:"bf21a673fbedaa26f05d4186f6fbc5f0"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/L.gif",revision:"3ed333760270deb109fa644336af04be"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/M.gif",revision:"55da4409233cc662963a95c065e26498"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/N.gif",revision:"48a47cce6e425dc01c116375916c503b"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/O.gif",revision:"9ae25a2c6e655e93b34e45d3d0f5616c"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/P.gif",revision:"152d6e08e58e09b1297656a7f31fe3ca"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/Q.gif",revision:"289ad2ceae7a44b8eb0e0d771c3d3f20"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/R.gif",revision:"cb2b1875f159c25511426ffdb57bbffa"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/S.gif",revision:"cdba91e84483a81cb49d177f583ff20b"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/T.gif",revision:"67318c1fed1a5a527c67135e5705d1ae"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/U.gif",revision:"cb399aeab9c162ddf98fc871b09f0223"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/V.gif",revision:"c62834bc6f4596bfe0d3203378e88209"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/W.gif",revision:"01bae51e6c5d8f2d85781af6809d06aa"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/X.gif",revision:"addc52a8573fb4d077cfa72fac488219"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/Y.gif",revision:"d53097fdbbf9d282879db8fa0aaede2a"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/Z.gif",revision:"5132aec93abb372430c3260673940b19"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/產生字母的python在google colab執行產生",revision:"117bdaa2b2574f911a31fde529fa6aa9"},{url:"index.html",revision:"002372864bdba5a4c0b765593e0adecf"},{url:"logo.png",revision:"ef3b044f6d15c7a075d43846c078ae11"},{url:"manifest.json",revision:"a89948402debe7ef0e300e514608f298"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\\.js$/]})),e.registerRoute(/^https:\/\/.*/,new e.NetworkFirst({cacheName:"api-cache",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:86400})]}),"GET")}));
