if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let f={};const b=e=>a(e,c),d={module:{uri:c},exports:f,require:b};s[c]=Promise.all(i.map((e=>d[e]||b(e)))).then((e=>(r(...e),f)))}}define(["./workbox-0c2b9884"],(function(e){"use strict";e.setCacheNameDetails({prefix:"zh-en"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/AboutPage-C7g-P4eb.js",revision:"5513451c940150899546b6c5bf087613"},{url:"assets/AboutPage-DspsKv8P.css",revision:"92ee063754c12712ddcd6344e612da4e"},{url:"assets/above the box-BU-wqZXV.png",revision:"60b3ca87f954edd4c9d8415e4dcf2263"},{url:"assets/along the boxes-BzezpleG.png",revision:"d74f6d6fb2256d011a0ce41602c0b9dc"},{url:"assets/AlphabetPage-c6_SPwJx.js",revision:"4e6b3ecb401588444ca9271187804afb"},{url:"assets/apple-DcBeu-9G.jpg",revision:"6604bea120ce37433c1243dfc9ddb87e"},{url:"assets/around the box-DVvlV6BA.png",revision:"a14c727cf0866adafe4ad7f59396ae24"},{url:"assets/away from the box-hljyh23R.png",revision:"a428917d14fb94eadb91667ac6495396"},{url:"assets/axios-upsvKRUO.js",revision:"47a629cea4ea5e45af7f5edbf00dfc28"},{url:"assets/BallDirectionPage-BigXzt0e.css",revision:"80900362a217e3f1a4c6553f3fca4d6d"},{url:"assets/BallDirectionPage-BjkbNd1I.js",revision:"16ba3a6276a8e88ea998ab0933b9922b"},{url:"assets/banana-DGKkD4Lq.jpg",revision:"d96703398cae0417cbd15829218e66bf"},{url:"assets/BeginnerPage-Bj0RtKKm.css",revision:"4621622cc8d7318bbc4a0bd90e5bbdea"},{url:"assets/BeginnerPage-CXOSaHvi.js",revision:"d7a2f6af570d1284a8aee4c8c40442c9"},{url:"assets/behind the box-8ekRW9eN.png",revision:"a81b0d70fb3559730cdbf32320726be3"},{url:"assets/BodyPage-BvoQLOYW.js",revision:"b30d61c5f830f3da97107969b222580b"},{url:"assets/BodyPage-DuwGXN_o.css",revision:"25303f94efa9ab8e06f38ba2a623e227"},{url:"assets/cards-BjFLwRni.jpeg",revision:"75ea03e6f7f19c58733db8eebb1187c2"},{url:"assets/ClosePopup-C07JV6lT.js",revision:"48cc89e4f6454d5bcdb11db39ef8a327"},{url:"assets/couplefight-fEEMF1_C.jpg",revision:"5199b8afb4d3a8896ca3ed8776b130ec"},{url:"assets/elephant-BbVW-IBB.png",revision:"cf7dbc7c1c203d175326cc8f16ed223c"},{url:"assets/EmotionCardsPage-BtyvNV2F.js",revision:"7a19d47368b4270cdbb4bf089ea2a61e"},{url:"assets/EmotionCardsPage-CPXG4wYo.css",revision:"f8af43d6c81d2bf3a58c78fe14e80a13"},{url:"assets/Env1AtHomePage-DkK4lpVP.css",revision:"dedee0d5435ed2f7626bd58014cca0e3"},{url:"assets/Env1AtHomePage-DqLm9tDQ.js",revision:"53e6ae2b8f9759f03a18ea0733d7a92e"},{url:"assets/Env2PlayingBasketballPage-B3Y5kIjM.css",revision:"b7ec3de754060b534967e8de866bfc9b"},{url:"assets/Env2PlayingBasketballPage-yElTt_VT.js",revision:"b263394b4209bcdda90d56a741035fcf"},{url:"assets/Env3AtRestaurantPage-BacLBgAI.js",revision:"a04aac72ded674ff47874bc19d136cec"},{url:"assets/Env3AtRestaurantPage-Oj0DgDx5.css",revision:"2bdf97591a1f77f13001c58eabf01174"},{url:"assets/Env4TravelingPage-CJJ9Oqdz.js",revision:"18ce06b46724c98cdc6b46cb03c0ec65"},{url:"assets/Env4TravelingPage-CwDRuSkD.css",revision:"17812180f3829cb921645f0e3e042092"},{url:"assets/ErrorNotFound-6DhyzjwA.js",revision:"c4db72e00a24ccf30bc99c8954c5edd9"},{url:"assets/FavoritePage-BnH9RMFQ.css",revision:"311a70e42de653300507e4cc90db9af4"},{url:"assets/FavoritePage-DTY5jADN.js",revision:"d8d2f0c165171f2792ce7ec2fecb9754"},{url:"assets/firebase-DSgwEzIJ.js",revision:"a0821b518173a19dd1c6290567ae121a"},{url:"assets/FlashCard-2JrtoYOi.js",revision:"c8bbd0dd372c1c453cce8d09c6089955"},{url:"assets/FlashCard-DRE-luoi.css",revision:"72242a60e8b5b6416b7ca35e45ac1941"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa-Dr0goTwe.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ-D-x-0Q06.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/focus-manager-DhdJisJs.js",revision:"cde52530e8b67431efb6e5ad7381930a"},{url:"assets/format-CJebrXOQ.js",revision:"11958f3adde8ac79ab165d39e7b54bab"},{url:"assets/GalleryPage-CMnGl9o2.css",revision:"dde278b1a5d72d1e2157ad67d8c8c7b9"},{url:"assets/GalleryPage-DAtumfaK.js",revision:"45970b308e1d9b33faa429001962b160"},{url:"assets/Game1Page-BKbH1KSZ.js",revision:"e42f7995d8de294e320c655ce3a78ba3"},{url:"assets/Game1Page-ZGEZllEo.css",revision:"861f67aa6e0419762d11098a59927676"},{url:"assets/Game2Page-CwgbdOed.js",revision:"0df1fd707d72b37a44cf620f3d8aa337"},{url:"assets/Game2Page-DDmC3FAR.css",revision:"81689e8bf0dc302e521191069957020a"},{url:"assets/Game3Page-CHknk_fn.js",revision:"09ddb52ba38c1047a97acb3480cd70ee"},{url:"assets/Game3Page-GOmyOZbS.css",revision:"3111ab41da37c4f9b207466208b51175"},{url:"assets/Game4Page--NoFlHa4.js",revision:"098b4de9b08b793d0643368a68ebc427"},{url:"assets/Game4Page-CJCvXCzE.css",revision:"865fa0e6baca21008b1776b9553e7fe6"},{url:"assets/gtag-YroOTqNX.js",revision:"626ec72a36d333f49ab63274421a8595"},{url:"assets/HandWrittenPage-CCQqtj2o.css",revision:"6fc81a62f5c777062dc1073c34cbf585"},{url:"assets/HandWrittenPage-Zh4bakUD.js",revision:"3d4640fc638c1b3b0de86ad6d087275d"},{url:"assets/image-cards-BMGG23gF.jpeg",revision:"3d70c1bfd307a7a27e5092c9736da567"},{url:"assets/ImagePaintPage-B4hEVbNa.js",revision:"92311acded00260b23bcd44c0628c80e"},{url:"assets/ImagePaintPage-z1ZLCdq1.css",revision:"b51f51127cfb2ca3439df5abd339f3cb"},{url:"assets/in front of the box-DM7qROMN.png",revision:"031dec92b4be7a183de6293bf4e52ea5"},{url:"assets/in the box-BloAtFYd.png",revision:"8c35ff7f925a7aae25fbf5175b6803c9"},{url:"assets/index-3fevySbJ.js",revision:"225d19eaaf0a31b02866dc8c2e020546"},{url:"assets/index-DjPobmbs.js",revision:"f0128c248afaea33131207b2c94b703f"},{url:"assets/index-ea1a36e4-OZSbD4BA.js",revision:"2e9391f1d6a1fdeae069a08961cfcd7e"},{url:"assets/index-t22K5uY0.css",revision:"b2437d03bdd788c33989a4a01fcaec84"},{url:"assets/index.esm2017-CfvkYQ_h.js",revision:"113661e4713e566e30be18a8bd17ca4b"},{url:"assets/index.esm2017-DnFfU7Vi.js",revision:"e7ad8e881b7ce994a93e0ccc6d09c48b"},{url:"assets/IndexPage-43bOpJ8Y.js",revision:"8ac85617a486155802356519a9ed8a60"},{url:"assets/IndexPage-Vhq5QNIn.css",revision:"ca8ab15f9fcb2b214b20a7169a678850"},{url:"assets/into the box-CJKF6hUL.png",revision:"cdaa2de1c3a435a772f3e9fe012b4bd6"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ-Y2mpUUkw.woff",revision:"d93054bf1c6d3002897ac09e0e7b9a6f"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc--ViM7Ag4Q.woff",revision:"30ef7351c99d2cd25159e6fc71e6c6fc"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc--CrFzpgl6.woff",revision:"5001486802025ac686973542fdeeea60"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc--CW3_XjG_.woff",revision:"064a5568b49ac29f2e9ea88a1f25fbc3"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc--Dr8fnyGc.woff",revision:"c2818baea5d2506dd4c2843836b9bff6"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM-DAYh6T4l.woff",revision:"1ac185dda7da331babe18e8d84ec6984"},{url:"assets/letter-DdRlLB5t.jpeg",revision:"f346cd258ff4452ee78b0e8c57bf8807"},{url:"assets/MainGamePage-D6iRf6NS.js",revision:"40b66315eade2b22f7e42b9df4643a88"},{url:"assets/MainGamePage-DqCqmp6y.css",revision:"1169c32ed03ac104e3b5fd8b747adcc7"},{url:"assets/MainImagePage-CcJtNkb2.css",revision:"e6d2731802b62e9b53d9f0a689e6e022"},{url:"assets/MainImagePage-pg6_tMJb.js",revision:"68178feb329e5d174d28f3ac6503475c"},{url:"assets/MainLayout-CymhO8G7.css",revision:"d56d724a9c9e6bc89bbcb744c9e2cc75"},{url:"assets/MainLayout-CYrsNxtE.js",revision:"cf13cc7cfb8bd69768dd16dca4395c83"},{url:"assets/MainSongWordPage-DBV8PcJ0.css",revision:"c606a348a96f8b8dcb4f3089bf46f8ab"},{url:"assets/MainSongWordPage-Kn6glKP9.js",revision:"ce2e9f7bc1f448000b008b3afa30a650"},{url:"assets/math-C97fO1q3.jpg",revision:"381ceada69e5b33c1fa7cf15f2115d14"},{url:"assets/MathImagePage-BbaPEX01.css",revision:"c22fb4bf04f3ee62b61a1f7512192aa6"},{url:"assets/MathImagePage-DhOMiHpl.js",revision:"8d76b02e545e5969c0f4037198e63512"},{url:"assets/menbody-D3NVletM.jpg",revision:"3a3324971c619a50243f32171e9839f0"},{url:"assets/menbody-FXY9GL4q.js",revision:"57b9832310d20c587b541c4e3cd0a9d2"},{url:"assets/menBodyImagePage-CL-1hSX6.js",revision:"935c778a0cf8cfb479f1abfd7a38d92b"},{url:"assets/menBodyImagePage-LSSuexEl.css",revision:"02ed331460187ef026bd41ee66c20f5d"},{url:"assets/near the box-BsjgWan3.png",revision:"edc983b8f0b659daa3f8b3177a4aed16"},{url:"assets/NineGridGame-BMNKLQ15.css",revision:"c904fd84c05d950fb1d9aeae4cbc0044"},{url:"assets/NineGridGame-Dwe39uY1.js",revision:"0df117a0fd6b33a621bf4a35a4314c3f"},{url:"assets/NumberPage-BTYM946j.js",revision:"603d9637ea5c4662bd8716600cb47214"},{url:"assets/NumberPage-D6f2Qza2.css",revision:"4bbe5f98bc7b81aacad584b8baf388ca"},{url:"assets/oldfriendsmeet-1dkOlloG.jpg",revision:"25374fd03aa61526eebff49cb67a1993"},{url:"assets/on the box-CzRr-t-I.png",revision:"b48cc7804c74101ee93d4ebef5d3051b"},{url:"assets/OppositesGamePage-CgnMjOge.js",revision:"24ec2dbd43512db72ed526f1392ca0ed"},{url:"assets/OppositesGamePage-Dr3cbEV4.css",revision:"0e1a139c334f50cf50bd4aafcfcd9288"},{url:"assets/option-sizes-Bz6ohJKh.js",revision:"e0d88528fd5a46ffe51646a592cb9cda"},{url:"assets/orange-CJRrdM-K.jpg",revision:"13855bc66919d85db6aa296600c621ee"},{url:"assets/out of the box-lBQJFfJg.png",revision:"3e2c7d523696f0b4aba82589f8c59b5d"},{url:"assets/past the box-BDX3Y4R0.png",revision:"c1fb3de8ee6b128f583fbccbcaced56a"},{url:"assets/pineapple-0QUnYwxk.jpg",revision:"1b6790661c9cfb12d64b61a805456f80"},{url:"assets/PlaybackPage-CUADvYa0.js",revision:"b9624e0032cc6d857e8ebd36eacbec2d"},{url:"assets/PlaybackPage-DT60PF5L.css",revision:"2bfff4359421db96328b15bf1e40a21f"},{url:"assets/position-engine-CleftUzX.js",revision:"00590d369da2acec2f304b35d6b0baab"},{url:"assets/prepositionImagePage-Bsqh-ItJ.css",revision:"ee470393061bcebf660913b0b4f5c257"},{url:"assets/prepositionImagePage-ByqMMbr8.js",revision:"2fa32a410ea56e07c08595956b122067"},{url:"assets/QBadge-BZWm-ZKW.js",revision:"248f246eeb78e3d307fffcf26f798c09"},{url:"assets/QCard-DD8VmbjP.js",revision:"d76f2ce2698335b083a14436ca62b5ca"},{url:"assets/QCardSection-C-R88YBs.js",revision:"4f0326090e0f5f7e8523065735ad2587"},{url:"assets/QCheckbox-Imly67TC.js",revision:"6392d82053914ad49c6ec1545c3b9a50"},{url:"assets/QChip-Bmap9E-f.js",revision:"6b535e2e70ee6d80f874a956bd00e5c4"},{url:"assets/QDialog-DowNTzHx.js",revision:"8cf42845a463c80c3955c2c7f74cbb1b"},{url:"assets/QForm-CjrSLkYK.js",revision:"0d075b5c763805c0fb3f04c105000942"},{url:"assets/QImg-C0UYvVKr.js",revision:"a8cd1dcba4873be0315ddb97a0279f78"},{url:"assets/QInput-BeFq4QDw.js",revision:"1bcaeb45cebf8abf194fbadd65ffc9f8"},{url:"assets/QItem-Bm2t4S1b.js",revision:"e2644db898989efce308ff8180a01056"},{url:"assets/QLinearProgress-C-QgQ0Qp.js",revision:"1cab933adf94b6eb5e60288a2560c74e"},{url:"assets/QPage-B26RM9U6.js",revision:"5690e8179bcd87636b9046fecd08802e"},{url:"assets/QRadio-24_u-ud_.js",revision:"675eef966a61ac2fe1e7c462ba559c42"},{url:"assets/QSeparator-Dvo4v80F.js",revision:"ba1296b8a0b7c04f9455d8eb05aae0a2"},{url:"assets/QSpinnerDots-GG8HXtlK.js",revision:"e37fb1e7397020e69ac4976a542f1942"},{url:"assets/RelationshipPage-Ciu3BWi2.css",revision:"e305f3ee07c779902af44f8350e27bcf"},{url:"assets/RelationshipPage-d5Uam2-D.js",revision:"e7690103c52ab6aabe11d3676be3f069"},{url:"assets/selection-l3X3WfKH.js",revision:"bb1d54652f4559a7be9e93d9e648e586"},{url:"assets/snake-Brc5p12L.png",revision:"348c9926f7c30e01a1f3507d36a0ab09"},{url:"assets/Song2WordPage-HojzRoli.css",revision:"b236b48b978d4c3b7beed3530b78a18b"},{url:"assets/Song2WordPage-mAma6hOE.js",revision:"c5606b5f9956b7a9316efed5eee13a91"},{url:"assets/Song3WordPage-CAmW34T5.js",revision:"5b32c5a909a014b1bef676e1c30dd63c"},{url:"assets/Song3WordPage-DIrHyyY-.css",revision:"72efad1c5f598dc88403622ebdb5f685"},{url:"assets/Song4WordPage-Bm_7aewg.js",revision:"2ffa93807a8c13ebfbb418b8e0b32206"},{url:"assets/Song4WordPage-DjWZEnxr.css",revision:"669a0b83479408da1873af5a210aae01"},{url:"assets/SongWordPage-CaZP-58L.js",revision:"be66bd1df96cae1a552874b790139158"},{url:"assets/SongWordPage-DHQaYzxp.css",revision:"f470c8b683d09b6ce850dc6ccfea74fb"},{url:"assets/story-BNcblS84.jpeg",revision:"24b064aa341bfdc7290ef46dac115e5b"},{url:"assets/StoryPage_backend-B9uqnJru.js",revision:"b1103fcb2e4e38443f88b34e67f8f39e"},{url:"assets/StoryPage_backend-BoTYlNhc.css",revision:"783fe8ad6181204d2265cdf263089bdf"},{url:"assets/StoryPage-CPFlMB0p.js",revision:"30846a7cb059c7209f36a7c265153cef"},{url:"assets/StoryPage-DhtIIwLf.css",revision:"5edf5e953fdd8279eeba8ee65c95005c"},{url:"assets/to the box-CuSN2akS.png",revision:"3649f30d6599fb1bbc8460ca964e6814"},{url:"assets/touch-BgAf1-Ei.js",revision:"b8e400ce6aad0a6b79d60bf8af2dae06"},{url:"assets/under the box-LqEG6CFF.png",revision:"7a14c2a0eb62571bccf5917d01e83325"},{url:"assets/use-dark-Dqa76tW0.js",revision:"6c7eebe7e8c7b88b7422280ad6442f29"},{url:"assets/use-file-dom-props-PR1H5nra.js",revision:"f7883b03326d8b40248fa3aa62a4a2d9"},{url:"assets/use-id-DMIPX0cB.js",revision:"53ea17b9f8d72b1c47c1b9768eaf2d2d"},{url:"assets/use-quasar-DkdEoCGn.js",revision:"0dc30532ab794996c24b55d59491603a"},{url:"assets/use-tick-mEIyQpEA.js",revision:"26f844820eb5c7c89617343e0f9ee0f4"},{url:"assets/use-timeout-DLbppMCe.js",revision:"9c24a2fa525b16aecea3c0ddb55fa2c4"},{url:"assets/WhatIsThisPage-BQf61ERh.js",revision:"0975e620b7d80f1625a762f75f1f5caf"},{url:"assets/WhatIsThisPage-CUwpjawE.css",revision:"ce8583aa187beb4b479d82fb5ddfc825"},{url:"favicon.ico",revision:"58113d14e1bbff0b5ac87c9dd2439cff"},{url:"icons/apple-icon-120x120.png",revision:"5c61bf605333cedc1fe80f1eb0eac198"},{url:"icons/apple-icon-152x152.png",revision:"6fec1de2712e442ce8283b2a534d6453"},{url:"icons/apple-icon-167x167.png",revision:"3d1d4f7e82bd9f7ff4867196dc5d404e"},{url:"icons/apple-icon-180x180.png",revision:"d8e34c0e8d697bcf77170f596cd4a130"},{url:"icons/apple-launch-1080x2340.png",revision:"5cfacfc73a9d292978df9f784f293843"},{url:"icons/apple-launch-1125x2436.png",revision:"929d6778c3e5a0c2921487c8042fe3c2"},{url:"icons/apple-launch-1170x2532.png",revision:"a9b9cdfcb1d2de40f879c7d868ea52a0"},{url:"icons/apple-launch-1179x2556.png",revision:"751a90e5ca15c4d9c17f0d7e256acbfd"},{url:"icons/apple-launch-1242x2208.png",revision:"8fc80b0c35b36cf0c57d90d3bd038f8e"},{url:"icons/apple-launch-1242x2688.png",revision:"900be1c2299506f53e664a4304696d8b"},{url:"icons/apple-launch-1284x2778.png",revision:"25e46eeb02f59431361d574da6289395"},{url:"icons/apple-launch-1290x2796.png",revision:"de3fe8218adde374ebe3a5a161f3393e"},{url:"icons/apple-launch-1536x2048.png",revision:"a5cff21c0a4ad8d34e6adca283bd4f26"},{url:"icons/apple-launch-1620x2160.png",revision:"a269c49813ded8e334b4b79ed69f3b81"},{url:"icons/apple-launch-1668x2224.png",revision:"a2f4bf3cc79d8f4075b5cee8df2dbbdd"},{url:"icons/apple-launch-1668x2388.png",revision:"04a31aea82728c3afc5a73ba835140a1"},{url:"icons/apple-launch-2048x2732.png",revision:"357316b93f3af4977470799d3e93e9ca"},{url:"icons/apple-launch-750x1334.png",revision:"c59f483e7cd9d9d11fd762240208f713"},{url:"icons/apple-launch-828x1792.png",revision:"265b98f00c150c54387747f495977d2d"},{url:"icons/favicon-128x128.png",revision:"c61fff74c1eacd1efc5ab689f06b0e2f"},{url:"icons/favicon-16x16.png",revision:"e25724d9832e45fa49af88b3c5399bf0"},{url:"icons/favicon-32x32.png",revision:"6230c0d80dfa69729fc5d38e76af268c"},{url:"icons/favicon-96x96.png",revision:"4d971ac32be91e8cc8e68473c05e4d7f"},{url:"icons/icon-128x128.png",revision:"c61fff74c1eacd1efc5ab689f06b0e2f"},{url:"icons/icon-192x192.png",revision:"f39fccc096efa498494b48b1112ffc1d"},{url:"icons/icon-256x256.png",revision:"af5770ba67318ec9b2ec863066da693a"},{url:"icons/icon-384x384.png",revision:"29be7e9fc57b38dd863d72481e43363a"},{url:"icons/icon-512x512.png",revision:"08f639fd91b874b8fbd6576e9f6844e7"},{url:"icons/ms-icon-144x144.png",revision:"4f86e38f89a69dce71a43cfd3b6b5aee"},{url:"icons/safari-pinned-tab.svg",revision:"cf4fac3b454bb486c535c01af85328e5"},{url:"images/letters/a.gif",revision:"cfb2f65a8b99e8de4690ae8926cef013"},{url:"images/letters/b.gif",revision:"3bca5b9120835d3452fb97af738f615f"},{url:"images/letters/c.gif",revision:"aa6fcad8f038038b21b71c7918ba0be1"},{url:"images/letters/d.gif",revision:"82e253ff4846ebc128f7e3f0fb5edc55"},{url:"images/letters/e.gif",revision:"9c8c6871ffeeca7768b22a546427374c"},{url:"images/letters/f.gif",revision:"b08029941c18af1576ef2a99c8532fc4"},{url:"images/letters/g.gif",revision:"646ab2f58490f99ff60bfd6b9f5126e5"},{url:"images/letters/h.gif",revision:"59872e2a4430d8e26c15fb1f8b989186"},{url:"images/letters/i.gif",revision:"8f427af57d7e95fafd7dea170a3c00bb"},{url:"images/letters/j.gif",revision:"ec651d53a586a1ff77e98a5a327a40c8"},{url:"images/letters/k.gif",revision:"7aeeeb0dcc28d82219b049b72372089d"},{url:"images/letters/l.gif",revision:"54be94314954434c2c4fea4a0c082bad"},{url:"images/letters/m.gif",revision:"b70f8098fbfb7c4aad79e3e12f593a65"},{url:"images/letters/n.gif",revision:"3e0a11c60abbf2fd2b67c11c2b88f7b9"},{url:"images/letters/o.gif",revision:"45cdaac0184dc53b8336e5c2675428df"},{url:"images/letters/p.gif",revision:"0102258c22c586b63dc72ef6d0d6a48e"},{url:"images/letters/q.gif",revision:"bffe8f2f3a71e24e3158c3570ad762dc"},{url:"images/letters/r.gif",revision:"40af2d9fbe65f3e0fc5fb54db3a883dd"},{url:"images/letters/s.gif",revision:"bb6247f1bf74ae9034a8954d75556f77"},{url:"images/letters/t.gif",revision:"98b5fed834cedc2f11c06444639f29ac"},{url:"images/letters/u.gif",revision:"18226b9530b7aea077ebcffe3782101e"},{url:"images/letters/v.gif",revision:"0c8d7a0c78c74e303e9375bb16bbb821"},{url:"images/letters/w.gif",revision:"9bd5c4439f70febf5fb1a9bb299b1bd9"},{url:"images/letters/x.gif",revision:"3d39db53fa3075cc40d8607d56a864e0"},{url:"images/letters/y.gif",revision:"6c8763400c21d1b705406c138e1a31a7"},{url:"images/letters/z.gif",revision:"9dd8c4d86dfeefa5036a444ee40da328"},{url:"images/phrasal-verbs/drop-off.png",revision:"c004dab1e1dfd718eba5f194f23246c0"},{url:"images/phrasal-verbs/get-off.png",revision:"3bde92f19f2734d70b2a8f8c0594c6b0"},{url:"images/phrasal-verbs/get-on.png",revision:"5ed15500ac0a9ffe951907d2c5d4830c"},{url:"images/phrasal-verbs/opposites.jpeg",revision:"935b5708ff2901ccf1c2c75c08d0a5f6"},{url:"images/phrasal-verbs/pick-off.png",revision:"b55e0279517bd216d70cba6e2dfe10f4"},{url:"images/phrasal-verbs/pick-up.png",revision:"654b420833fde1d61ea4738622122184"},{url:"images/phrasal-verbs/put-on.png",revision:"d0303ca9de4b7b0a0913b0f3dca3d577"},{url:"images/phrasal-verbs/run-after.png",revision:"a36b7345619448ccfcdc44f9749fb78a"},{url:"images/phrasal-verbs/run-away.png",revision:"9af8542894f0dc9bf5fea6174cef7ce2"},{url:"images/phrasal-verbs/slow-down.png",revision:"448bda999d8005b06042665e2a136f60"},{url:"images/phrasal-verbs/speed-up.png",revision:"115e3e61e7a5d39b7837d4a8d846e555"},{url:"images/phrasal-verbs/take-off.png",revision:"03f3be64e00b93d4682c29d7b21434cd"},{url:"images/royal_family.jpg",revision:"5a93015f2c944992e3e2c670cdb29602"},{url:"images/tiger.png",revision:"d515e5528de0f9e3765100080d31785c"},{url:"images/twinkle_back.png",revision:"9aae4f13561787e343c8270b678a27ec"},{url:"images/大寫letters檔案名稱/A.gif",revision:"cfb2f65a8b99e8de4690ae8926cef013"},{url:"images/大寫letters檔案名稱/B.gif",revision:"3bca5b9120835d3452fb97af738f615f"},{url:"images/大寫letters檔案名稱/C.gif",revision:"aa6fcad8f038038b21b71c7918ba0be1"},{url:"images/大寫letters檔案名稱/D.gif",revision:"82e253ff4846ebc128f7e3f0fb5edc55"},{url:"images/大寫letters檔案名稱/E.gif",revision:"9c8c6871ffeeca7768b22a546427374c"},{url:"images/大寫letters檔案名稱/F.gif",revision:"b08029941c18af1576ef2a99c8532fc4"},{url:"images/大寫letters檔案名稱/G.gif",revision:"646ab2f58490f99ff60bfd6b9f5126e5"},{url:"images/大寫letters檔案名稱/H.gif",revision:"59872e2a4430d8e26c15fb1f8b989186"},{url:"images/大寫letters檔案名稱/I.gif",revision:"8f427af57d7e95fafd7dea170a3c00bb"},{url:"images/大寫letters檔案名稱/J.gif",revision:"ec651d53a586a1ff77e98a5a327a40c8"},{url:"images/大寫letters檔案名稱/K.gif",revision:"7aeeeb0dcc28d82219b049b72372089d"},{url:"images/大寫letters檔案名稱/L.gif",revision:"54be94314954434c2c4fea4a0c082bad"},{url:"images/大寫letters檔案名稱/M.gif",revision:"b70f8098fbfb7c4aad79e3e12f593a65"},{url:"images/大寫letters檔案名稱/N.gif",revision:"3e0a11c60abbf2fd2b67c11c2b88f7b9"},{url:"images/大寫letters檔案名稱/O.gif",revision:"45cdaac0184dc53b8336e5c2675428df"},{url:"images/大寫letters檔案名稱/P.gif",revision:"0102258c22c586b63dc72ef6d0d6a48e"},{url:"images/大寫letters檔案名稱/Q.gif",revision:"bffe8f2f3a71e24e3158c3570ad762dc"},{url:"images/大寫letters檔案名稱/R.gif",revision:"40af2d9fbe65f3e0fc5fb54db3a883dd"},{url:"images/大寫letters檔案名稱/S.gif",revision:"bb6247f1bf74ae9034a8954d75556f77"},{url:"images/大寫letters檔案名稱/T.gif",revision:"98b5fed834cedc2f11c06444639f29ac"},{url:"images/大寫letters檔案名稱/U.gif",revision:"18226b9530b7aea077ebcffe3782101e"},{url:"images/大寫letters檔案名稱/V.gif",revision:"0c8d7a0c78c74e303e9375bb16bbb821"},{url:"images/大寫letters檔案名稱/W.gif",revision:"9bd5c4439f70febf5fb1a9bb299b1bd9"},{url:"images/大寫letters檔案名稱/X.gif",revision:"3d39db53fa3075cc40d8607d56a864e0"},{url:"images/大寫letters檔案名稱/Y.gif",revision:"6c8763400c21d1b705406c138e1a31a7"},{url:"images/大寫letters檔案名稱/Z.gif",revision:"9dd8c4d86dfeefa5036a444ee40da328"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/A.gif",revision:"639b627cbcdb2ab3c9483e67b9170bd8"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/B.gif",revision:"b417a04ef76a2d883b70869a85caa90d"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/C.gif",revision:"13db340d0541c8549bc0a67c50a005d8"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/D.gif",revision:"70ae61e33f2b5c247af7df30474fb5ea"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/E.gif",revision:"4b6123d0eb96af77d3838c7d411d6295"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/F.gif",revision:"a3bc8fd441b74e3dc0555f8e79a848df"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/G.gif",revision:"6f556583f76c0de9fdd921c4e48c349c"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/H.gif",revision:"17e9702f4c250e2580a7dc3ae1cdb362"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/I.gif",revision:"3bf8f1b86f871c14e265acb54bd58818"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/J.gif",revision:"3bf68f9151a199f92cac7055e6a6494a"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/K.gif",revision:"bf21a673fbedaa26f05d4186f6fbc5f0"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/L.gif",revision:"3ed333760270deb109fa644336af04be"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/M.gif",revision:"55da4409233cc662963a95c065e26498"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/N.gif",revision:"48a47cce6e425dc01c116375916c503b"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/O.gif",revision:"9ae25a2c6e655e93b34e45d3d0f5616c"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/P.gif",revision:"152d6e08e58e09b1297656a7f31fe3ca"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/Q.gif",revision:"289ad2ceae7a44b8eb0e0d771c3d3f20"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/R.gif",revision:"cb2b1875f159c25511426ffdb57bbffa"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/S.gif",revision:"cdba91e84483a81cb49d177f583ff20b"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/T.gif",revision:"67318c1fed1a5a527c67135e5705d1ae"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/U.gif",revision:"cb399aeab9c162ddf98fc871b09f0223"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/V.gif",revision:"c62834bc6f4596bfe0d3203378e88209"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/W.gif",revision:"01bae51e6c5d8f2d85781af6809d06aa"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/X.gif",revision:"addc52a8573fb4d077cfa72fac488219"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/Y.gif",revision:"d53097fdbbf9d282879db8fa0aaede2a"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/Z.gif",revision:"5132aec93abb372430c3260673940b19"},{url:"images/大寫lettets會動檔案乍看會動實際還不對/產生字母的python在google colab執行產生",revision:"117bdaa2b2574f911a31fde529fa6aa9"},{url:"index.html",revision:"ccbdaaded2e915df8519490cf131cf18"},{url:"logo.png",revision:"ef3b044f6d15c7a075d43846c078ae11"},{url:"manifest.json",revision:"a89948402debe7ef0e300e514608f298"},{url:"sounds/correct.mp3",revision:"9ebf31294c9fe3a9569fcf0bf1067bcb"},{url:"sounds/twinkle-twinkle-little-star.mp3",revision:"7424519a3bdfaaa5ed869683adc43d82"},{url:"sounds/wrong.mp3",revision:"564461d8389ba93968d911098022f863"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\\.js$/]})),e.registerRoute(/^https:\/\/.*/,new e.StaleWhileRevalidate({cacheName:"api-cache",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:3600}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
