if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,f)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const b=e=>a(e,c),d={module:{uri:c},exports:r,require:b};s[c]=Promise.all(i.map((e=>d[e]||b(e)))).then((e=>(f(...e),r)))}}define(["./workbox-0c2b9884"],(function(e){"use strict";e.setCacheNameDetails({prefix:"zh-en"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/above the box-BU-wqZXV.png",revision:"60b3ca87f954edd4c9d8415e4dcf2263"},{url:"assets/along the boxes-BzezpleG.png",revision:"d74f6d6fb2256d011a0ce41602c0b9dc"},{url:"assets/AlphabetPage-BKF9Fh3t.js",revision:"099b372714a555ed288bb6f38ba3c814"},{url:"assets/apple-DcBeu-9G.jpg",revision:"6604bea120ce37433c1243dfc9ddb87e"},{url:"assets/around the box-DVvlV6BA.png",revision:"a14c727cf0866adafe4ad7f59396ae24"},{url:"assets/away from the box-hljyh23R.png",revision:"a428917d14fb94eadb91667ac6495396"},{url:"assets/BallDirectionPage-BigXzt0e.css",revision:"80900362a217e3f1a4c6553f3fca4d6d"},{url:"assets/BallDirectionPage-ep21GHP2.js",revision:"0c231d6c4f57ed811a6783a7e090bcd5"},{url:"assets/banana-DGKkD4Lq.jpg",revision:"d96703398cae0417cbd15829218e66bf"},{url:"assets/BeginnerPage-CeJ05uac.css",revision:"962f87e9254745a72d174e71720cab13"},{url:"assets/BeginnerPage-DEXoK-ro.js",revision:"e03f738ddd8326843e8976d7430867f6"},{url:"assets/behind the box-8ekRW9eN.png",revision:"a81b0d70fb3559730cdbf32320726be3"},{url:"assets/BodyPage-Cln3QW5J.js",revision:"ab7dbb6da0f9c65c63c945f8eabd330b"},{url:"assets/BodyPage-DTn6akjI.css",revision:"89c0da7889643eecb3f52580814b3c2a"},{url:"assets/ClosePopup-DDXWfazD.js",revision:"2e05afa0ee16c861b30a33fe1c3b6e45"},{url:"assets/couplefight-fEEMF1_C.jpg",revision:"5199b8afb4d3a8896ca3ed8776b130ec"},{url:"assets/elephant-BbVW-IBB.png",revision:"cf7dbc7c1c203d175326cc8f16ed223c"},{url:"assets/EmotionCardsPage-BbqnJkK-.css",revision:"f373bcdfc623b585b237064df357f18f"},{url:"assets/EmotionCardsPage-BoWMXpNu.js",revision:"4883c3540177333c15df74e754a4bd4d"},{url:"assets/ErrorNotFound-DhUSxnB0.js",revision:"cf1e31e6da6425788b462eaa64e7aa88"},{url:"assets/FavoritePage-BnH9RMFQ.css",revision:"311a70e42de653300507e4cc90db9af4"},{url:"assets/FavoritePage-DNNVPSNO.js",revision:"f6ee26ff272ee00523562dbe4702a6ad"},{url:"assets/FlashCard-C24MU-I6.css",revision:"7b75c92fd7061dda655643bb2e912098"},{url:"assets/FlashCard-DclZn_Bh.js",revision:"ed4b7d08e2c6147a202fa7f5f63138e8"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa-Dr0goTwe.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ-D-x-0Q06.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/focus-manager-zjdVGI5d.js",revision:"7e63c28e50be08a78bf3333716bbb402"},{url:"assets/Game1Page-q9NFrBG7.js",revision:"1036283fff3b80cb68aa8f3fcbd01033"},{url:"assets/Game1Page-ZGEZllEo.css",revision:"861f67aa6e0419762d11098a59927676"},{url:"assets/Game2Page-DDmC3FAR.css",revision:"81689e8bf0dc302e521191069957020a"},{url:"assets/Game2Page-Dfd7nWyG.js",revision:"0633150a99b6f949eb2e9c969615596c"},{url:"assets/Game3Page-CvzbwYxe.js",revision:"d64e7628adf29db39509e42630507e3d"},{url:"assets/Game3Page-GOmyOZbS.css",revision:"3111ab41da37c4f9b207466208b51175"},{url:"assets/Game4Page-BU0veEZK.js",revision:"f389c31a01fbd51d3ab60001087da377"},{url:"assets/Game4Page-CJCvXCzE.css",revision:"865fa0e6baca21008b1776b9553e7fe6"},{url:"assets/HandWrittenPage-Dmow8-ot.js",revision:"2782a318c31b1cef6328a627c8bac5ae"},{url:"assets/HandWrittenPage-DWVTAETh.css",revision:"ec3876447c805978eef7bf1bb339a92b"},{url:"assets/ImagePaintPage-38nbaNA2.css",revision:"d33f3b087f348942a69a9afcafd7b9db"},{url:"assets/ImagePaintPage-B3hviieA.js",revision:"b60eda3d9fab1c343eefa05e98eec0d2"},{url:"assets/in front of the box-DM7qROMN.png",revision:"031dec92b4be7a183de6293bf4e52ea5"},{url:"assets/in the box-BloAtFYd.png",revision:"8c35ff7f925a7aae25fbf5175b6803c9"},{url:"assets/index-BbrxpXXO.css",revision:"3ce28cc85a7fc2fade1999d81e5fce5c"},{url:"assets/index-Ddhnzga_.js",revision:"0a6eaf76286e2d7242ba0087b6be7d44"},{url:"assets/IndexPage-DGhbRG-Y.css",revision:"ca3e6da73aa4db568c1012d1fe9ab9ed"},{url:"assets/IndexPage-sVJseWJT.js",revision:"ef2d674064b1154587266847fd04cbd4"},{url:"assets/into the box-CJKF6hUL.png",revision:"cdaa2de1c3a435a772f3e9fe012b4bd6"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ-Y2mpUUkw.woff",revision:"d93054bf1c6d3002897ac09e0e7b9a6f"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc--ViM7Ag4Q.woff",revision:"30ef7351c99d2cd25159e6fc71e6c6fc"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc--CrFzpgl6.woff",revision:"5001486802025ac686973542fdeeea60"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc--CW3_XjG_.woff",revision:"064a5568b49ac29f2e9ea88a1f25fbc3"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc--Dr8fnyGc.woff",revision:"c2818baea5d2506dd4c2843836b9bff6"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM-DAYh6T4l.woff",revision:"1ac185dda7da331babe18e8d84ec6984"},{url:"assets/MainGamePage-DqCqmp6y.css",revision:"1169c32ed03ac104e3b5fd8b747adcc7"},{url:"assets/MainGamePage-S34blLg8.js",revision:"24ed7a614f0c4d3469ae0afe1efd5fe0"},{url:"assets/MainImagePage-BulguIAD.js",revision:"bf77eef2db9a8f6a1a4189c2f7355702"},{url:"assets/MainImagePage-CcJtNkb2.css",revision:"e6d2731802b62e9b53d9f0a689e6e022"},{url:"assets/MainLayout-B1nZGFAf.css",revision:"581f1037ac371212ec46fb146fba93ac"},{url:"assets/MainLayout-BM60YI84.js",revision:"2b4130866ac3a3f3cbd04ffb528f0b24"},{url:"assets/MainSongWordPage-DBV8PcJ0.css",revision:"c606a348a96f8b8dcb4f3089bf46f8ab"},{url:"assets/MainSongWordPage-DFVuAk4y.js",revision:"62b742ac2647ef80ed13d09ecff8d61e"},{url:"assets/math-C97fO1q3.jpg",revision:"381ceada69e5b33c1fa7cf15f2115d14"},{url:"assets/MathImagePage-BbaPEX01.css",revision:"c22fb4bf04f3ee62b61a1f7512192aa6"},{url:"assets/MathImagePage-SHvmFmfZ.js",revision:"e5220b32264a903a162d8d6ddac46c1b"},{url:"assets/menbody-D3NVletM.jpg",revision:"3a3324971c619a50243f32171e9839f0"},{url:"assets/menbody-FXY9GL4q.js",revision:"57b9832310d20c587b541c4e3cd0a9d2"},{url:"assets/menBodyImagePage-DrLuKDUD.js",revision:"eb4064165cd0376e03e32e96c07cc02c"},{url:"assets/menBodyImagePage-LSSuexEl.css",revision:"02ed331460187ef026bd41ee66c20f5d"},{url:"assets/near the box-BsjgWan3.png",revision:"edc983b8f0b659daa3f8b3177a4aed16"},{url:"assets/NineGridGame-BMNKLQ15.css",revision:"c904fd84c05d950fb1d9aeae4cbc0044"},{url:"assets/NineGridGame-DYRVHgMA.js",revision:"a2fcda7293d47e282a60c1ab52b297a4"},{url:"assets/NumberPage-BDOCIITE.css",revision:"897257ed89f48240babc2e5e11b6dab7"},{url:"assets/NumberPage-DFxBz83d.js",revision:"6c82f87ce67403f3915dad2ca3a987c5"},{url:"assets/oldfriendsmeet-1dkOlloG.jpg",revision:"25374fd03aa61526eebff49cb67a1993"},{url:"assets/on the box-CzRr-t-I.png",revision:"b48cc7804c74101ee93d4ebef5d3051b"},{url:"assets/orange-CJRrdM-K.jpg",revision:"13855bc66919d85db6aa296600c621ee"},{url:"assets/out of the box-lBQJFfJg.png",revision:"3e2c7d523696f0b4aba82589f8c59b5d"},{url:"assets/past the box-BDX3Y4R0.png",revision:"c1fb3de8ee6b128f583fbccbcaced56a"},{url:"assets/pineapple-0QUnYwxk.jpg",revision:"1b6790661c9cfb12d64b61a805456f80"},{url:"assets/position-engine-C_J2Ai7d.js",revision:"4ea1ddf959143d4fba35a22305a4b838"},{url:"assets/prepositionImagePage-Bsqh-ItJ.css",revision:"ee470393061bcebf660913b0b4f5c257"},{url:"assets/prepositionImagePage-BxLH10bk.js",revision:"22862bf4d986730147a4308741755ebc"},{url:"assets/QAvatar-ooyvVmhe.js",revision:"78c9e65ac121418cf1d3b444c1b28cdb"},{url:"assets/QBadge-QsfmQPLR.js",revision:"c266035f20cb0e5faae2f4aa37007f3c"},{url:"assets/QBtn-BN2dPKtL.js",revision:"cc75b78ae561ced4288f7a33198d2ac6"},{url:"assets/QCard-acGhKqne.js",revision:"d8ee7b9268fd795f3c144111fcdc15ea"},{url:"assets/QDialog-3wul63i7.js",revision:"387c85c22a2ea70665ca20f3382b8e9b"},{url:"assets/QIcon-BFElmAIa.js",revision:"74d9ff0d39810f84c386961a1605df74"},{url:"assets/QImg-DcoisWQD.js",revision:"962ccdb2571570d4407c8321ec3606d7"},{url:"assets/QInput-BF3Ufa57.js",revision:"9b6fc913177dd58544688ce64e74af7e"},{url:"assets/QLinearProgress-u9bqaHZH.js",revision:"8e3377d7b7f7a568e7c590b45908e539"},{url:"assets/QPage-CmfxacUL.js",revision:"194225b6e915f3b803ca9e1b49c9eb2c"},{url:"assets/QSeparator-nE3gkase.js",revision:"c35e7c2bdd636abc2772f0ce5abee60e"},{url:"assets/QSpinnerDots-CqySkToP.js",revision:"d875aa1c916f4c770a4aa623ddd12e2b"},{url:"assets/RelationshipPage-Ciu3BWi2.css",revision:"e305f3ee07c779902af44f8350e27bcf"},{url:"assets/RelationshipPage-i3sSHAeC.js",revision:"b9f2c049528253b261359fd5808c08bb"},{url:"assets/render-8R32w0vY.js",revision:"12b786d7be87ce734e85d5fd625a2225"},{url:"assets/Ripple-DfmhhknT.js",revision:"98aef358b5aa004e69c0b2f221f29d78"},{url:"assets/selection-5ai4LZZ6.js",revision:"8110cd8ee7735a4581019064b8e0214e"},{url:"assets/snake-Brc5p12L.png",revision:"348c9926f7c30e01a1f3507d36a0ab09"},{url:"assets/Song2WordPage-CgnZZRk1.js",revision:"24fa970e8e5b62c5819d34ae01c159d7"},{url:"assets/Song2WordPage-HojzRoli.css",revision:"b236b48b978d4c3b7beed3530b78a18b"},{url:"assets/Song3WordPage-BmkD2HAd.js",revision:"a038f39da30f3912a94d25bf254a10f0"},{url:"assets/Song3WordPage-DIrHyyY-.css",revision:"72efad1c5f598dc88403622ebdb5f685"},{url:"assets/Song4WordPage-DjWZEnxr.css",revision:"669a0b83479408da1873af5a210aae01"},{url:"assets/Song4WordPage-ee4Pon5r.js",revision:"dbecfc61f69858fd59315a061dafc100"},{url:"assets/SongWordPage--QUA7YET.js",revision:"a05fff4ff70b4e2d068146dabfd47bb9"},{url:"assets/SongWordPage-DHQaYzxp.css",revision:"f470c8b683d09b6ce850dc6ccfea74fb"},{url:"assets/StoryPage-BkUbW7G0.css",revision:"4f71253ba1918a4104f50166aa2e1259"},{url:"assets/StoryPage-DNYnVE3a.js",revision:"6d424fab36b1b7474cc71e019c27b906"},{url:"assets/to the box-CuSN2akS.png",revision:"3649f30d6599fb1bbc8460ca964e6814"},{url:"assets/under the box-LqEG6CFF.png",revision:"7a14c2a0eb62571bccf5917d01e83325"},{url:"assets/use-dark-Nb0intFv.js",revision:"8bfaf399860b53859ea34cc0ee4d642c"},{url:"assets/use-id-uLkCUpV-.js",revision:"b1792e99d7ebbca4e74e079c0318abcd"},{url:"assets/use-timeout-BQA2sr17.js",revision:"2a83176b5d36c8a07cf9ac7973743478"},{url:"assets/vm-fRTQ07Ez.js",revision:"4be4ff5776425df24fce25153cc838b3"},{url:"favicon.ico",revision:"58113d14e1bbff0b5ac87c9dd2439cff"},{url:"icons/apple-icon-120x120.png",revision:"5c61bf605333cedc1fe80f1eb0eac198"},{url:"icons/apple-icon-152x152.png",revision:"6fec1de2712e442ce8283b2a534d6453"},{url:"icons/apple-icon-167x167.png",revision:"3d1d4f7e82bd9f7ff4867196dc5d404e"},{url:"icons/apple-icon-180x180.png",revision:"d8e34c0e8d697bcf77170f596cd4a130"},{url:"icons/apple-launch-1080x2340.png",revision:"5cfacfc73a9d292978df9f784f293843"},{url:"icons/apple-launch-1125x2436.png",revision:"929d6778c3e5a0c2921487c8042fe3c2"},{url:"icons/apple-launch-1170x2532.png",revision:"a9b9cdfcb1d2de40f879c7d868ea52a0"},{url:"icons/apple-launch-1179x2556.png",revision:"751a90e5ca15c4d9c17f0d7e256acbfd"},{url:"icons/apple-launch-1242x2208.png",revision:"8fc80b0c35b36cf0c57d90d3bd038f8e"},{url:"icons/apple-launch-1242x2688.png",revision:"900be1c2299506f53e664a4304696d8b"},{url:"icons/apple-launch-1284x2778.png",revision:"25e46eeb02f59431361d574da6289395"},{url:"icons/apple-launch-1290x2796.png",revision:"de3fe8218adde374ebe3a5a161f3393e"},{url:"icons/apple-launch-1536x2048.png",revision:"a5cff21c0a4ad8d34e6adca283bd4f26"},{url:"icons/apple-launch-1620x2160.png",revision:"a269c49813ded8e334b4b79ed69f3b81"},{url:"icons/apple-launch-1668x2224.png",revision:"a2f4bf3cc79d8f4075b5cee8df2dbbdd"},{url:"icons/apple-launch-1668x2388.png",revision:"04a31aea82728c3afc5a73ba835140a1"},{url:"icons/apple-launch-2048x2732.png",revision:"357316b93f3af4977470799d3e93e9ca"},{url:"icons/apple-launch-750x1334.png",revision:"c59f483e7cd9d9d11fd762240208f713"},{url:"icons/apple-launch-828x1792.png",revision:"265b98f00c150c54387747f495977d2d"},{url:"icons/favicon-128x128.png",revision:"c61fff74c1eacd1efc5ab689f06b0e2f"},{url:"icons/favicon-16x16.png",revision:"e25724d9832e45fa49af88b3c5399bf0"},{url:"icons/favicon-32x32.png",revision:"6230c0d80dfa69729fc5d38e76af268c"},{url:"icons/favicon-96x96.png",revision:"4d971ac32be91e8cc8e68473c05e4d7f"},{url:"icons/icon-128x128.png",revision:"c61fff74c1eacd1efc5ab689f06b0e2f"},{url:"icons/icon-192x192.png",revision:"f39fccc096efa498494b48b1112ffc1d"},{url:"icons/icon-256x256.png",revision:"af5770ba67318ec9b2ec863066da693a"},{url:"icons/icon-384x384.png",revision:"29be7e9fc57b38dd863d72481e43363a"},{url:"icons/icon-512x512.png",revision:"08f639fd91b874b8fbd6576e9f6844e7"},{url:"icons/ms-icon-144x144.png",revision:"4f86e38f89a69dce71a43cfd3b6b5aee"},{url:"icons/safari-pinned-tab.svg",revision:"cf4fac3b454bb486c535c01af85328e5"},{url:"images/letters/a.gif",revision:"cfb2f65a8b99e8de4690ae8926cef013"},{url:"images/letters/b.gif",revision:"3bca5b9120835d3452fb97af738f615f"},{url:"images/letters/c.gif",revision:"aa6fcad8f038038b21b71c7918ba0be1"},{url:"images/letters/d.gif",revision:"82e253ff4846ebc128f7e3f0fb5edc55"},{url:"images/letters/e.gif",revision:"9c8c6871ffeeca7768b22a546427374c"},{url:"images/letters/f.gif",revision:"b08029941c18af1576ef2a99c8532fc4"},{url:"images/letters/g.gif",revision:"646ab2f58490f99ff60bfd6b9f5126e5"},{url:"images/letters/h.gif",revision:"59872e2a4430d8e26c15fb1f8b989186"},{url:"images/letters/i.gif",revision:"8f427af57d7e95fafd7dea170a3c00bb"},{url:"images/letters/j.gif",revision:"ec651d53a586a1ff77e98a5a327a40c8"},{url:"images/letters/k.gif",revision:"7aeeeb0dcc28d82219b049b72372089d"},{url:"images/letters/l.gif",revision:"54be94314954434c2c4fea4a0c082bad"},{url:"images/letters/m.gif",revision:"b70f8098fbfb7c4aad79e3e12f593a65"},{url:"images/letters/n.gif",revision:"3e0a11c60abbf2fd2b67c11c2b88f7b9"},{url:"images/letters/o.gif",revision:"45cdaac0184dc53b8336e5c2675428df"},{url:"images/letters/p.gif",revision:"0102258c22c586b63dc72ef6d0d6a48e"},{url:"images/letters/q.gif",revision:"bffe8f2f3a71e24e3158c3570ad762dc"},{url:"images/letters/r.gif",revision:"40af2d9fbe65f3e0fc5fb54db3a883dd"},{url:"images/letters/s.gif",revision:"bb6247f1bf74ae9034a8954d75556f77"},{url:"images/letters/t.gif",revision:"98b5fed834cedc2f11c06444639f29ac"},{url:"images/letters/u.gif",revision:"18226b9530b7aea077ebcffe3782101e"},{url:"images/letters/v.gif",revision:"0c8d7a0c78c74e303e9375bb16bbb821"},{url:"images/letters/w.gif",revision:"9bd5c4439f70febf5fb1a9bb299b1bd9"},{url:"images/letters/x.gif",revision:"3d39db53fa3075cc40d8607d56a864e0"},{url:"images/letters/y.gif",revision:"6c8763400c21d1b705406c138e1a31a7"},{url:"images/letters/z.gif",revision:"9dd8c4d86dfeefa5036a444ee40da328"},{url:"images/royal_family.jpg",revision:"5a93015f2c944992e3e2c670cdb29602"},{url:"images/大寫letters檔案名稱/A.gif",revision:"cfb2f65a8b99e8de4690ae8926cef013"},{url:"images/大寫letters檔案名稱/B.gif",revision:"3bca5b9120835d3452fb97af738f615f"},{url:"images/大寫letters檔案名稱/C.gif",revision:"aa6fcad8f038038b21b71c7918ba0be1"},{url:"images/大寫letters檔案名稱/D.gif",revision:"82e253ff4846ebc128f7e3f0fb5edc55"},{url:"images/大寫letters檔案名稱/E.gif",revision:"9c8c6871ffeeca7768b22a546427374c"},{url:"images/大寫letters檔案名稱/F.gif",revision:"b08029941c18af1576ef2a99c8532fc4"},{url:"images/大寫letters檔案名稱/G.gif",revision:"646ab2f58490f99ff60bfd6b9f5126e5"},{url:"images/大寫letters檔案名稱/H.gif",revision:"59872e2a4430d8e26c15fb1f8b989186"},{url:"images/大寫letters檔案名稱/I.gif",revision:"8f427af57d7e95fafd7dea170a3c00bb"},{url:"images/大寫letters檔案名稱/J.gif",revision:"ec651d53a586a1ff77e98a5a327a40c8"},{url:"images/大寫letters檔案名稱/K.gif",revision:"7aeeeb0dcc28d82219b049b72372089d"},{url:"images/大寫letters檔案名稱/L.gif",revision:"54be94314954434c2c4fea4a0c082bad"},{url:"images/大寫letters檔案名稱/M.gif",revision:"b70f8098fbfb7c4aad79e3e12f593a65"},{url:"images/大寫letters檔案名稱/N.gif",revision:"3e0a11c60abbf2fd2b67c11c2b88f7b9"},{url:"images/大寫letters檔案名稱/O.gif",revision:"45cdaac0184dc53b8336e5c2675428df"},{url:"images/大寫letters檔案名稱/P.gif",revision:"0102258c22c586b63dc72ef6d0d6a48e"},{url:"images/大寫letters檔案名稱/Q.gif",revision:"bffe8f2f3a71e24e3158c3570ad762dc"},{url:"images/大寫letters檔案名稱/R.gif",revision:"40af2d9fbe65f3e0fc5fb54db3a883dd"},{url:"images/大寫letters檔案名稱/S.gif",revision:"bb6247f1bf74ae9034a8954d75556f77"},{url:"images/大寫letters檔案名稱/T.gif",revision:"98b5fed834cedc2f11c06444639f29ac"},{url:"images/大寫letters檔案名稱/U.gif",revision:"18226b9530b7aea077ebcffe3782101e"},{url:"images/大寫letters檔案名稱/V.gif",revision:"0c8d7a0c78c74e303e9375bb16bbb821"},{url:"images/大寫letters檔案名稱/W.gif",revision:"9bd5c4439f70febf5fb1a9bb299b1bd9"},{url:"images/大寫letters檔案名稱/X.gif",revision:"3d39db53fa3075cc40d8607d56a864e0"},{url:"images/大寫letters檔案名稱/Y.gif",revision:"6c8763400c21d1b705406c138e1a31a7"},{url:"images/大寫letters檔案名稱/Z.gif",revision:"9dd8c4d86dfeefa5036a444ee40da328"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/A.gif",revision:"639b627cbcdb2ab3c9483e67b9170bd8"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/B.gif",revision:"b417a04ef76a2d883b70869a85caa90d"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/C.gif",revision:"13db340d0541c8549bc0a67c50a005d8"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/D.gif",revision:"70ae61e33f2b5c247af7df30474fb5ea"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/E.gif",revision:"4b6123d0eb96af77d3838c7d411d6295"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/F.gif",revision:"a3bc8fd441b74e3dc0555f8e79a848df"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/G.gif",revision:"6f556583f76c0de9fdd921c4e48c349c"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/H.gif",revision:"17e9702f4c250e2580a7dc3ae1cdb362"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/I.gif",revision:"3bf8f1b86f871c14e265acb54bd58818"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/J.gif",revision:"3bf68f9151a199f92cac7055e6a6494a"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/K.gif",revision:"bf21a673fbedaa26f05d4186f6fbc5f0"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/L.gif",revision:"3ed333760270deb109fa644336af04be"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/M.gif",revision:"55da4409233cc662963a95c065e26498"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/N.gif",revision:"48a47cce6e425dc01c116375916c503b"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/O.gif",revision:"9ae25a2c6e655e93b34e45d3d0f5616c"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/P.gif",revision:"152d6e08e58e09b1297656a7f31fe3ca"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/Q.gif",revision:"289ad2ceae7a44b8eb0e0d771c3d3f20"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/R.gif",revision:"cb2b1875f159c25511426ffdb57bbffa"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/S.gif",revision:"cdba91e84483a81cb49d177f583ff20b"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/T.gif",revision:"67318c1fed1a5a527c67135e5705d1ae"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/U.gif",revision:"cb399aeab9c162ddf98fc871b09f0223"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/V.gif",revision:"c62834bc6f4596bfe0d3203378e88209"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/W.gif",revision:"01bae51e6c5d8f2d85781af6809d06aa"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/X.gif",revision:"addc52a8573fb4d077cfa72fac488219"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/Y.gif",revision:"d53097fdbbf9d282879db8fa0aaede2a"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/Z.gif",revision:"5132aec93abb372430c3260673940b19"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/產生字母的python在google colab執行產生",revision:"117bdaa2b2574f911a31fde529fa6aa9"},{url:"index.html",revision:"5afbd9b9dff1385b79cf3a5be4e35360"},{url:"logo.png",revision:"ef3b044f6d15c7a075d43846c078ae11"},{url:"manifest.json",revision:"a89948402debe7ef0e300e514608f298"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\\.js$/]})),e.registerRoute(/^https:\/\/.*/,new e.StaleWhileRevalidate({cacheName:"api-cache",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:3600}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
